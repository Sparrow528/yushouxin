#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
把 Supabase 拉回的原始产品数据整理成前端直接读取的静态文件。

产出：
  data/products.json  前端唯一数据源，随仓库走 GitHub Pages CDN
  data/image-audit.md 图片空位体检报告，每次同步自动更新

设计要点：
  1. 只保留前端真正用到的字段，压缩体积
  2. 图片路径统一为仓库内相对路径（products/images/...）
  3. 体检报告标出空图与缺文件两类空位，便于持续跟踪
"""
import json
import os
import collections
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
RAW_PATH = os.path.join(ROOT, 'data', '_raw.json')
OUT_JSON = os.path.join(ROOT, 'data', 'products.json')
OUT_MD = os.path.join(ROOT, 'data', 'image-audit.md')
IMG_ROOT = os.path.join(ROOT, 'products', 'images')

KEEP = ['id', 'name', 'category', 'image', 'member_id', 'description', 'price', 'specs']

# 前端限流规则：每个会员企业的展示上限（与 products/index.html 保持一致）
MEMBER_LIMIT = {'liangzi-dongli': 30, 'shinong-seed': 200}
DEFAULT_LIMIT = 10


def load_raw():
    with open(RAW_PATH, encoding='utf-8') as f:
        data = json.load(f)
    if not isinstance(data, list):
        raise SystemExit('Supabase 返回的不是数组，检查 key 或表权限')
    return data


def is_junk(r):
    """过滤测试脏数据：无归属且名为 test 的记录"""
    name = (r.get('name') or '').strip().lower()
    mid = (r.get('member_id') or '').strip()
    if name in ('test', 'test1', '测试', 'demo', 'xxx'):
        return True
    if not mid and name in ('test', ''):
        return True
    return False


def slim(rows):
    out = []
    for r in rows:
        if is_junk(r):
            continue
        item = {}
        for k in KEEP:
            v = r.get(k)
            if k in ('name', 'category', 'image', 'member_id'):
                v = (v or '').strip()
            item[k] = v
        if not item.get('member_id'):
            item['member_id'] = 'unknown'
        out.append(item)
    return out


def apply_limit(rows):
    """按会员企业限流，返回实际会展示的产品"""
    count = collections.Counter()
    shown = []
    for r in rows:
        mid = r.get('member_id') or 'unknown'
        lim = MEMBER_LIMIT.get(mid, DEFAULT_LIMIT)
        count[mid] += 1
        if count[mid] <= lim:
            shown.append(r)
    return shown


def audit(rows, shown):
    """统计空图与缺文件，返回 (统计, 明细列表)"""
    missing_file = []
    empty_img = []
    ok = 0
    for r in shown:
        img = (r.get('image') or '').strip()
        if not img:
            empty_img.append(r)
            continue
        rel = img.split('/')[-1] if '/' not in img else img
        rel = rel[len('images/'):] if rel.startswith('images/') else rel
        path = os.path.join(IMG_ROOT, *rel.split('/'))
        if os.path.exists(path):
            ok += 1
        else:
            missing_file.append((r, img))
    return ok, empty_img, missing_file


def write_json(rows):
    payload = {
        'updated_at': datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ'),
        'count': len(rows),
        'products': rows,
    }
    with open(OUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(payload, f, ensure_ascii=False, separators=(',', ':'))


def write_md(rows, shown, ok, empty_img, missing_file):
    by_member = collections.Counter(r.get('member_id') or 'unknown' for r in rows)
    empty_by_member = collections.Counter(r.get('member_id') or 'unknown' for r in empty_img)
    miss_by_member = collections.Counter(r.get('member_id') or 'unknown' for r, _ in missing_file)
    now = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')

    lines = []
    lines.append('# 产品图片空位体检')
    lines.append('')
    lines.append(f'同步时间：{now}')
    lines.append('')
    lines.append(f'- 数据库总产品：**{len(rows)}** 条')
    lines.append(f'- 前端实际展示：**{len(shown)}** 条（按会员企业限流后）')
    lines.append(f'- 图片正常：**{ok}** 条')
    lines.append(f'- 空图占位：**{len(empty_img)}** 条')
    lines.append(f'- 图文件缺失：**{len(missing_file)}** 条')
    lines.append('')

    lines.append('## 按会员企业')
    lines.append('')
    lines.append('| 会员 | 总数 | 空图 | 缺文件 |')
    lines.append('| --- | --- | --- | --- |')
    for m, n in by_member.most_common():
        lines.append(f'| `{m}` | {n} | {empty_by_member[m]} | {miss_by_member[m]} |')
    lines.append('')

    if empty_img:
        lines.append('## 空图明细（前端显示灰占位）')
        lines.append('')
        lines.append('| id | 会员 | 产品名 |')
        lines.append('| --- | --- | --- |')
        for r in empty_img[:80]:
            lines.append(f"| {r.get('id')} | `{r.get('member_id')}` | {r.get('name')} |")
        if len(empty_img) > 80:
            lines.append(f'| ... | 另有 {len(empty_img) - 80} 条 | |')
        lines.append('')

    if missing_file:
        lines.append('## 图片文件缺失明细')
        lines.append('')
        lines.append('| id | 会员 | 产品名 | 期望路径 |')
        lines.append('| --- | --- | --- | --- |')
        for r, img in missing_file[:80]:
            lines.append(f"| {r.get('id')} | `{r.get('member_id')}` | {r.get('name')} | `{img}` |")
        if len(missing_file) > 80:
            lines.append(f'| ... | 另有 {len(missing_file) - 80} 条 | |')
        lines.append('')

    if not empty_img and not missing_file:
        lines.append('当前无空位，所有展示产品均有图。')
        lines.append('')

    with open(OUT_MD, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))


def main():
    raw = load_raw()
    rows = slim(raw)
    shown = apply_limit(rows)
    ok, empty_img, missing_file = audit(rows, shown)
    write_json(rows)
    write_md(rows, shown, ok, empty_img, missing_file)
    print(f'产品 {len(rows)} 条，展示 {len(shown)} 条')
    print(f'  图片正常 {ok} | 空图 {len(empty_img)} | 缺文件 {len(missing_file)}')
    print(f'  已写出 {os.path.relpath(OUT_JSON, ROOT)} 与 {os.path.relpath(OUT_MD, ROOT)}')


if __name__ == '__main__':
    main()
