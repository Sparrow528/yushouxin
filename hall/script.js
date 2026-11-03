/* 云桥国际 · 沉浸式展厅  v1  | 交互逻辑 */
(function(){
  'use strict';
  var IMG_BASE = '../products/';
  var zones = (window.HALL && HALL.zones) || [];
  var products = (window.HALL && HALL.products) || [];
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function $(id){return document.getElementById(id);}
  function el(tag,cls){var e=document.createElement(tag); if(cls) e.className=cls; return e;}

  /* ---------- 场景切换 ---------- */
  var current = 'scene-outside';
  function go(sceneId){
    if(sceneId===current) return;
    var cur = $(current), nxt = $(sceneId);
    if(cur){ cur.classList.add('leaving'); cur.classList.remove('active'); cur.classList.remove('opening');
      setTimeout(function(){cur.classList.remove('leaving');},500); }
    nxt.classList.add('active');
    if(sceneId==='scene-hall'){}
    if(sceneId!=='scene-showroom'){ $('showroomBg').style.filter='none'; }
    current = sceneId;
    window.scrollTo(0,0);
  }

  /* ---------- 场景0 · 门外 → 开门 ---------- */
  function openDoor(){
    var s = $('scene-outside');
    if(s.classList.contains('opening')) return;
    s.classList.add('opening');
    setTimeout(function(){ go('scene-hall'); }, reduce?10:800);
  }
  var facade = $('facade');
  facade.addEventListener('click', openDoor);
  facade.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){e.preventDefault();openDoor();} });

  /* ---------- 场景2 · 大厅热区 ---------- */
  function buildHotspots(){
    var box = $('hotspots');
    zones.forEach(function(z){
      var h = el('div','hotspot');
      h.style.left=z.hot.left; h.style.top=z.hot.top;
      h.style.width=z.hot.width; h.style.height=z.hot.height;
      h.innerHTML='<span class="hn">'+z.name+'</span><span class="hc">'+z.count+' 件</span>';
      h.addEventListener('click', function(){ openShowroom(z.id); });
      box.appendChild(h);
    });
  }

  /* ---------- 场景3 · 展厅 ---------- */
  var curZone=null, curSub='all';
  function openShowroom(zoneId){
    curZone = zones.filter(function(z){return z.id===zoneId;})[0];
    if(!curZone) return;
    $('shTitle').innerHTML = curZone.name + '<small>'+curZone.en+'</small>';
    $('showroomBg').style.filter = (curZone.filter && curZone.filter!=='none') ? curZone.filter : 'none';
    renderTabs();
    renderGrid();
    go('scene-showroom');
  }
  function zoneProducts(){
    return products.filter(function(p){return p.zone===curZone.id;});
  }
  function renderTabs(){
    var box=$('subtabs'); box.innerHTML='';
    var subs=[]; zoneProducts().forEach(function(p){ if(subs.indexOf(p.subcat)<0) subs.push(p.subcat); });
    var all=el('div','chip'+(curSub==='all'?' on':'')); all.textContent='全部';
    all.addEventListener('click',function(){curSub='all';renderTabs();renderGrid();});
    box.appendChild(all);
    subs.forEach(function(s){
      var c=el('div','chip'+(curSub===s?' on':'')); c.textContent=s;
      c.addEventListener('click',function(){curSub=s;renderTabs();renderGrid();});
      box.appendChild(c);
    });
  }
  function renderGrid(){
    var box=$('grid'); box.innerHTML='';
    var list=zoneProducts().filter(function(p){return curSub==='all'||p.subcat===curSub;});
    list.forEach(function(p,i){
      var card=el('div','card');
      var ph=el('div','ph');
      if(p.img){
        var img=el('img'); img.src=IMG_BASE+p.img; img.alt=p.name;
        img.onerror=function(){ ph.innerHTML='<div class="fallback">图片缺失</div>'; };
        ph.appendChild(img);
      } else { ph.innerHTML='<div class="fallback">图片缺失</div>'; }
      var body=el('div','body');
      body.innerHTML='<div class="pname">'+p.name+'</div><div class="pco">'+p.company+'</div>';
      var btn=el('button','pinq'); btn.textContent='询价';
      btn.addEventListener('click',function(e){e.stopPropagation();openDetail(p);});
      body.appendChild(btn);
      card.appendChild(ph); card.appendChild(body);
      card.addEventListener('click',function(){openDetail(p);});
      box.appendChild(card);
      if(reduce){ card.classList.add('in'); }
      else { setTimeout(function(){card.classList.add('in');}, 60*i); }
    });
  }

  /* ---------- 场景4 · 详情 ---------- */
  function openDetail(p){
    var c=$('mCard');
    var imgHtml = p.img
      ? '<img class="m-img" src="'+IMG_BASE+p.img+'" alt="'+p.name+'" onerror="this.outerHTML=\'<div class=&quot;m-img fb&quot;>图片缺失</div>\'">'
      : '<div class="m-img fb">图片缺失</div>';
    var spec = p.specs ? '<div class="m-spec">规格：'+p.specs+'</div>' : '';
    c.innerHTML = imgHtml +
      '<div class="m-info">'+
        '<h3>'+p.name+'</h3>'+
        '<div class="m-co">'+p.company+'</div>'+
        spec+
        '<a class="m-btn" href="../products/index.html" target="_blank" rel="noopener">立即询价 →</a>'+
      '</div>';
    $('modal').classList.add('open');
  }
  function closeModal(){$('modal').classList.remove('open');}
  $('mClose').addEventListener('click',closeModal);
  $('modal').addEventListener('click',function(e){ if(e.target===$('modal')) closeModal(); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeModal(); });

  /* ---------- 返回按钮 ---------- */
  document.querySelectorAll('[data-go]').forEach(function(b){
    b.addEventListener('click',function(){ go(b.getAttribute('data-go')); });
  });

  /* ---------- 鼠标视差 ---------- */
  if(!reduce){
    var layers=[].slice.call(document.querySelectorAll('[data-parallax]'));
    var tx=0,ty=0,cx=0,cy=0,raf=null;
    document.addEventListener('mousemove',function(e){
      tx=(e.clientX/window.innerWidth-0.5);
      ty=(e.clientY/window.innerHeight-0.5);
      if(!raf) raf=requestAnimationFrame(tick);
    });
    function tick(){
      cx+=(tx-cx)*0.08; cy+=(ty-cy)*0.08;
      layers.forEach(function(l){
        var k=parseFloat(l.getAttribute('data-parallax'))||0.03;
        l.style.transform='translate('+(-cx*k*100)+'px,'+(-cy*k*100)+'px)';
      });
      if(Math.abs(tx-cx)>0.001||Math.abs(ty-cy)>0.001){ raf=requestAnimationFrame(tick); }
      else { raf=null; }
    }
  }

  /* ---------- 初始化 ---------- */
  buildHotspots();
})();
