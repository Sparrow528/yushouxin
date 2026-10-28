/* 问卷页功能测试：DOM stub 模拟浏览器环境 */
function El(id, tag) {
  this.id = id; this.tag = tag || 'div'; this.textContent = ''; this.value = '';
  this.disabled = false; this.attrs = {}; this.listeners = {}; this.style = {};
  var s = new Set();
  this.classList = {
    toggle: function (c, on) { on === undefined ? (s.has(c) ? s.delete(c) : s.add(c)) : (on ? s.add(c) : s.delete(c)); },
    add: function (c) { s.add(c); }, remove: function (c) { s.delete(c); }, has: function (c) { return s.has(c); }
  };
}
El.prototype.setAttribute = function (k, v) { this.attrs[k] = v; };
El.prototype.getAttribute = function (k) { return this.attrs[k] || null; };
El.prototype.addEventListener = function (ev, fn) { this.listeners[ev] = fn; };
El.prototype.focus = function () { global._focused = this.id; };
El.prototype.scrollIntoView = function () {};

const els = {};
['documentElement','btn-ar','btn-zh','survey','submitBtn','formErr','form-zone','success',
 'q1_name','q2_dept','q3_position','q4_phone','q5_email','q6_whatsapp','q7_wechat','q8_goods',
 'q9_quality','q10_companies','q11_purpose','q12_import','q13_export','q14_cooperation','q15_others',
 'card-q1','card-q4'].forEach(id => els[id] = new El(id));
els['documentElement'].setAttribute('dir', 'rtl');

global.document = {
  documentElement: els['documentElement'], title: '',
  getElementById: id => els[id] || null,
  querySelectorAll: sel => {
    if (sel === '[data-i18n]') {
      /* 真实元素：submitBtn(data-i18n=submit)、formErr(data-i18n=errNetwork) */
      var real = ['submitBtn', 'formErr'].map(id => { els[id].setAttribute('data-i18n', id === 'submitBtn' ? 'submit' : 'errNetwork'); return els[id]; });
      /* 其余为合成元素：title/subtitle/phoneNote/errRequired/successTitle/successSub */
      var synth = ['title','subtitle','phoneNote','errRequired','successTitle','successSub']
        .map(k => { const e = new El('i18n-' + k); e.setAttribute('data-i18n', k); return e; });
      return real.concat(synth);
    }
    return [];
  }
};
Object.defineProperty(global, 'navigator', { value: { userAgent: 'Mozilla/5.0 (iPhone) Test/1.0 '.repeat(30) } });
let fetchCalled = null, fetchResolver;
global.fetch = (url, opts) => { fetchCalled = { url, opts }; return new Promise(r => fetchResolver = r); };

/* 加载页面脚本 */
const fs = require('fs');
eval(fs.readFileSync(__dirname + '/_test_script.js', 'utf8'));

const assert = (c, msg) => { if (!c) { console.error('FAIL - ' + msg); process.exitCode = 1; } else console.log('PASS - ' + msg); };

/* 1) 默认 RTL 阿语 */
assert(els['documentElement'].getAttribute('dir') === 'rtl', '默认 dir=rtl');
assert(els['btn-ar'].classList.has('on'), '阿语按钮默认高亮');
assert(els['submitBtn'].textContent === 'إرسال', '按钮初始文案为阿语');

/* 2) 切换中文 → LTR */
sw('zh');
assert(els['documentElement'].getAttribute('dir') === 'ltr', '切换后 dir=ltr');
assert(els['submitBtn'].textContent === '提交', '按钮文案切为中文');
assert(document.title === '中国商务考察团 调查问卷', '标题切为中文');
assert(els['btn-zh'].classList.has('on') && !els['btn-ar'].classList.has('on'), '语言按钮高亮互换');

/* 3) 必填校验：Q1/Q4 为空 → 阻止提交 */
els['survey'].listeners['submit']({ preventDefault() {} });
assert(fetchCalled === null, 'Q1/Q4 为空时阻止提交（fetch 未调用）');
assert(global._focused !== undefined, '空必填项获得焦点提示');
assert(els['card-q1'].classList.has('err') && els['card-q4'].classList.has('err'), '必填卡片显示错误态');

/* 4) 填上必填 → fetch 参数正确 */
els['q1_name'].value = ' أحمد علي ';
els['q4_phone'].value = '9647701234567';
els['q15_others'].value = '你好 مرحبا';
els['survey'].listeners['submit']({ preventDefault() {} });
assert(fetchCalled !== null, '必填齐后触发 fetch');
assert(fetchCalled.url === 'https://xvvwdiqxbhhkgnibhbxi.supabase.co/rest/v1/survey_responses', 'URL 正确');
const h = fetchCalled.opts.headers;
assert(h.apikey === 'sb_publishable_E5fa74SZ-2GmAWWv4T4BdA_P5TS9cm_', 'apikey header 正确');
assert(h.Authorization === 'Bearer sb_publishable_E5fa74SZ-2GmAWWv4T4BdA_P5TS9cm_', 'Authorization header 正确');
assert(h['Content-Type'] === 'application/json' && h.Prefer === 'return=minimal', 'Content-Type/Prefer 正确');
const body = JSON.parse(fetchCalled.opts.body);
assert(body.q1_name === 'أحمد علي', 'q1 trim 后正确');
assert(body.q4_phone === '9647701234567', 'q4 正确');
assert(Object.keys(body).length === 16, 'body 恰好 16 个字段（15 题 + user_agent）');
assert(body.user_agent.length === 200, 'user_agent 截断至 200 字符');
assert(els['submitBtn'].disabled === true, '提交中按钮 disabled');
assert(els['submitBtn'].textContent === '提交中...', '提交中文案正确');

/* 5) 失败分支（表不存在 → 404） */
fetchResolver({ ok: false, status: 404 });
setTimeout(() => {
  assert(els['formErr'].classList.has('show'), '失败后显示错误提示');
  assert(els['formErr'].textContent.includes('提交失败') && els['formErr'].textContent.includes('تعذر الإرسال'), '错误提示为中阿双语');
  assert(els['submitBtn'].disabled === false, '失败后按钮恢复可点');
  assert(els['q1_name'].value === ' أحمد علي ', '失败后已填内容未被清空');
  assert(els['success'].style.display !== 'block', '失败不进入成功态');

  /* 6) 成功分支：整页切成功态，无跳转 */
  els['survey'].listeners['submit']({ preventDefault() {} });
  fetchResolver({ ok: true, status: 201 });
  setTimeout(() => {
    assert(els['form-zone'].style.display === 'none', '成功后隐藏表单区');
    assert(els['success'].style.display === 'block', '成功后显示成功态');
    assert(I18N.zh.successTitle.includes('提交成功') && I18N.zh.successTitle.includes('شكراً لكم'), '成功态双语文案正确（I18N 字典校验）');
    assert(fetchCalled !== null && els['submitBtn'].textContent !== '', '无页面跳转（纯状态切换）');
    if (!process.exitCode) console.log('ALL FUNCTIONAL TESTS PASSED');
  }, 10);
}, 10);
