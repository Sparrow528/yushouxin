# 重生成 data/products.json —— 从 Supabase 拉全量产品并写成前端首屏读的缓存。
#
# 用法（在本机 PowerShell 里，仓库根目录执行）：
#   $env:SUPABASE_SERVICE_KEY = '<你的 service role key>'
#   .\tools\sync-cache.ps1
#
# 注意：service role key 只放在环境变量里，不要写进这个文件、不要 commit。
# 写完记得：git add data/products.json → commit → push origin main

param(
  [string]$SupabaseUrl = 'https://xvvwdiqxbhhkgnibhbxi.supabase.co',
  [string]$Key = $env:SUPABASE_SERVICE_KEY,
  [string]$RepoRoot = (Split-Path -Parent $PSScriptRoot)
)

if (-not $Key) {
  Write-Host '缺少 service role key。先执行：$env:SUPABASE_SERVICE_KEY = ''<key>''' -ForegroundColor Red
  exit 1
}

$headers = @{
  'apikey'        = $Key
  'Authorization' = "Bearer $Key"
  'User-Agent'    = 'WorkBuddy-Sync/1.0 (server-side)'
}

$uri = "$SupabaseUrl/rest/v1/products?select=*&order=id&limit=5000"
Write-Host "拉取 $SupabaseUrl ..."

try {
  $rows = Invoke-RestMethod -Uri $uri -Headers $headers -Method Get -TimeoutSec 60
} catch {
  Write-Host "拉取失败：$($_.Exception.Message)" -ForegroundColor Red
  exit 1
}

$rows = @($rows)
$payload = [pscustomobject]@{
  count      = $rows.Count
  updated_at = (Get-Date -Format 'yyyy-MM-dd')
  products   = $rows
}

$dest = Join-Path $RepoRoot 'data\products.json'
$text = $payload | ConvertTo-Json -Depth 10 -Compress

# UTF-8 无 BOM：带 BOM 会让浏览器里的 JSON.parse 报错
$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($dest, $text, $utf8)

$a = @($rows | Where-Object { -not $_.member_id })
Write-Host ("已写入 {0}" -f $dest) -ForegroundColor Green
Write-Host ("产品 {0} 条，无会员归属 {1} 条" -f $rows.Count, $a.Count)
if ($a.Count -gt 0) {
  Write-Host ("  无会员的产品 id: " + (($a | ForEach-Object { $_.id }) -join ', ')) -ForegroundColor Yellow
}
Write-Host ''
Write-Host '下一步：git add data/products.json products/index.html; git commit -m "update products"; git push origin main'
