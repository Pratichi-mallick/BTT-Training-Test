/* BTT Practice Test — quiz engine.
   Loaded by the Webflow page at pratichimallick.com/btt-practise-test via jsDelivr.
   Day files live in days/dayN.js and are listed in READY below. */
(function(){
var ME=document.currentScript,BASE=(ME&&ME.dataset.base)||"";
var READY=[1,2]; // days that have questions; add the number when a new days/dayN.js is pushed
var PLAN=[[1,"Thu 20 Nov","Mandatory & prohibitory signs","9–13"],[2,"Fri 21 Nov","Warning & regulatory signs","14–20"],[3,"Sat 22 Nov","Information, tunnel, cycle, directional & EMAS signs","21–34"],[4,"Sun 23 Nov","Road markings, bus lanes & arrows","35–43"],[5,"Mon 24 Nov","Traffic lights, police & hand signals","44–49"],[6,"Tue 25 Nov","Keep left, lanes, overtaking & speed","50–52"],[7,"Wed 26 Nov","Junctions, roundabouts, expressways, yellow box, U-turns","52–56"],[8,"Thu 27 Nov","Review: mixed questions from Days 1–7","9–56"],[9,"Fri 28 Nov","Parking, seat belts, lights, alcohol & phones","56–59"],[10,"Sat 29 Nov","Code of conduct, following distance & pedestrians","60–64"],[11,"Sun 30 Nov","Defensive driving, weather, skids & roadworthiness","65–72"],[12,"Mon 1 Dec","Work zones, special zones, tunnels & AVs","73–79"]];
var PDF="https://www.police.gov.sg/-/media/SPF/Knowledge-Hub/Traffic/BT-ENG-24126.pdf";
window.BTT_DAYS=window.BTT_DAYS||[];
var DATA={},LOADING={};
function absorb(){window.BTT_DAYS.forEach(function(d){DATA[d.day]=d})}
function load(n,cb){absorb();if(DATA[n]||READY.indexOf(n)<0)return cb();if(LOADING[n])return LOADING[n].push(cb);LOADING[n]=[cb];var s=document.createElement("script");s.src=BASE+"days/day"+n+".js";s.onload=s.onerror=function(){absorb();var q=LOADING[n];delete LOADING[n];q.forEach(function(f){f()})};document.body.appendChild(s)}
var KEY="btt-web-v1",st={};try{st=JSON.parse(localStorage.getItem(KEY)||"{}")||{}}catch(e){st={}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}}
var cur=1,lvl="all";
function E(t,a,c){var e=document.createElement(t);if(a)for(var k in a){if(k==="text")e.textContent=a[k];else if(k==="html")e.innerHTML=a[k];else e.setAttribute(k,a[k])}(c||[]).forEach(function(x){if(x)e.appendChild(typeof x==="string"?document.createTextNode(x):x)});return e}

/* ---------- simple drawn signs (generic shapes, not reproductions) ---------- */
var RED="#C8102E",BLU="#1F5AA6",INK="#111";
function ring(inner){return '<circle cx="50" cy="50" r="44" fill="#fff" stroke="'+RED+'" stroke-width="10"/>'+inner}
function blue(inner){return '<circle cx="50" cy="50" r="46" fill="'+BLU+'"/>'+inner}
function warn(inner){return '<polygon points="50,6 95,88 5,88" fill="#fff" stroke="'+RED+'" stroke-width="8" stroke-linejoin="round"/>'+inner}
var AR='fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"';
function bk(w){return 'fill="none" stroke="'+INK+'" stroke-width="'+(w||6)+'" stroke-linecap="round" stroke-linejoin="round"'}
function txt(x,y,s,t,c){return '<text x="'+x+'" y="'+y+'" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="'+s+'" fill="'+(c||INK)+'">'+t+'</text>'}
var SIGNS={
stop:'<polygon points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30" fill="'+RED+'" stroke="#fff" stroke-width="3"/>'+txt(50,60,26,"STOP","#fff"),
giveway:'<polygon points="6,10 94,10 50,92" fill="#fff" stroke="'+RED+'" stroke-width="9" stroke-linejoin="round"/>',
noentry:'<circle cx="50" cy="50" r="46" fill="'+RED+'"/><rect x="18" y="41" width="64" height="18" fill="#fff"/>',
nostop:'<circle cx="50" cy="50" r="42" fill="'+BLU+'" stroke="'+RED+'" stroke-width="9"/><path d="M22 22 L78 78 M78 22 L22 78" stroke="'+RED+'" stroke-width="9"/>',
nowait:'<circle cx="50" cy="50" r="42" fill="'+BLU+'" stroke="'+RED+'" stroke-width="9"/><path d="M22 22 L78 78" stroke="'+RED+'" stroke-width="9"/>',
left:blue('<path d="M72 50 H30 M44 34 L28 50 L44 66" '+AR+'/>'),
ahead:blue('<path d="M50 78 V28 M34 44 L50 28 L66 44" '+AR+'/>'),
keepleft:blue('<path d="M68 32 L34 66 M34 44 V66 H56" '+AR+'/>'),
split:blue('<path d="M50 80 V56 M50 56 L30 34 M50 56 L70 34 M30 46 V34 H42 M70 46 V34 H58" '+AR+'/>'),
noright:ring('<path d="M34 72 V46 H64 M54 36 L66 46 L54 56" fill="none" stroke="'+INK+'" stroke-width="7" stroke-linejoin="round"/><path d="M20 20 L80 80" stroke="'+RED+'" stroke-width="8"/>'),
speed50:ring(txt(50,63,34,"50")),
height:ring(txt(50,58,20,"4.5m")+'<path d="M50 18 L44 28 H56 Z M50 82 L44 72 H56 Z" fill="'+INK+'"/>'),
width:ring(txt(50,58,20,"2.3m")+'<path d="M14 50 L24 44 V56 Z M86 50 L76 44 V56 Z" fill="'+INK+'"/>'),
/* Day 2: warning signs */
bendright:warn('<path d="M42 78 V58 Q42 44 56 40 L58 36" '+bk()+'/><path d="M50 34 L60 34 L58 44" '+bk()+'/>'),
crossjn:warn('<path d="M50 34 V80 M32 58 H68" '+bk(7)+'/>'),
tjn:warn('<path d="M50 80 V50 M30 50 H70" '+bk(7)+'/>'),
sideleft:warn('<path d="M54 34 V80 M54 58 H34" '+bk(7)+'/>'),
roundabout:warn('<circle cx="50" cy="60" r="13" '+bk()+'/><path d="M37 52 L33 58 L40 59 M60 72 L66 70 L62 64 M58 46 L52 43 L54 50" '+bk(4)+'/>'),
lights:warn('<rect x="40" y="32" width="20" height="48" rx="4" fill="'+INK+'"/><circle cx="50" cy="42" r="5" fill="#E53935"/><circle cx="50" cy="56" r="5" fill="#FBC02D"/><circle cx="50" cy="70" r="5" fill="#43A047"/>'),
narrows:warn('<path d="M36 80 L42 56 V34 M64 80 L58 56 V34" '+bk()+'/>'),
twoway:warn('<path d="M40 80 V40 M34 48 L40 38 L46 48 M60 34 V74 M54 66 L60 76 L66 66" '+bk(5)+'/>'),
hump:warn('<path d="M24 74 H36 Q50 50 64 74 H76" '+bk()+'/>'),
slope:warn(txt(50,72,22,"10%")+'<path d="M30 52 L70 40" '+bk(4)+'/>'),
breakdown:'<polygon points="50,8 94,86 6,86" fill="none" stroke="'+RED+'" stroke-width="10" stroke-linejoin="round"/><polygon points="50,34 72,74 28,74" fill="none" stroke="'+RED+'" stroke-width="4"/>',
merge:warn('<path d="M56 80 V36 M38 74 Q44 58 56 54" '+bk()+'/>'),
chevron:'<rect x="6" y="20" width="88" height="60" fill="#111"/><path d="M28 34 L48 50 L28 66 M52 34 L72 50 L52 66" fill="none" stroke="#fff" stroke-width="8"/>'
};
function sign(k){return SIGNS[k]?'<svg class="bt-sign" viewBox="0 0 100 100" role="img" aria-label="Road sign">'+SIGNS[k]+'</svg>':""}

/* ---------- page ---------- */
var app=document.getElementById("bt-app");if(!app){app=E("div",{id:"bt-app"});document.body.appendChild(app)}
app.innerHTML='<div class="bt-root"><div class="bt-wrap"><header><div class="bt-eyebrow">Personal · Singapore Basic Theory Test · 3 Dec 2026</div><h1 class="bt-h1">BTT Practice Test</h1><p class="bt-lede">Twelve days, thirty questions a day, easy to hard. Tap an answer: green is right, red is wrong, with the reason and the handbook page. These are my own practice questions written from the official handbook, in the style of the Traffic Police practice tests.</p></header><nav class="bt-tabs" id="btTabs" aria-label="Choose a day"></nav><main id="btDay"></main><div class="bt-foot">Source: <a href="'+PDF+'" target="_blank" rel="noopener">Basic Theory of Driving, Official Handbook (Singapore Traffic Police, updated 2 Jan 2026)</a>. Also try the free official <a href="https://eservices1.police.gov.sg/phub/eservices/landingpage/mock-theory-test" target="_blank" rel="noopener">Traffic Police theory test practice</a>. Real test: 50 questions, 50 minutes, 45 to pass.</div></div></div>';

function tabs(){var t=document.getElementById("btTabs");t.innerHTML="";PLAN.forEach(function(p){var b=E("button",{type:"button","class":"bt-tab"+(READY.indexOf(p[0])>=0?"":" soon"),"aria-pressed":String(p[0]===cur),text:"Day "+p[0]});b.onclick=function(){go(p[0])};t.appendChild(b)})}
function go(n){cur=n;lvl="all";try{history.replaceState(null,"","#day-"+n)}catch(e){}load(n,render);try{window.scrollTo({top:0,behavior:"smooth"})}catch(e){}}
function score(d,el){var qs=d.qs,a=0,r=0;qs.forEach(function(q,i){var v=st[d.day+"-"+i];if(v!==undefined){a++;if(v===q.a)r++}});el.innerHTML="<b>"+r+"</b> / "+a+" correct · "+(qs.length-a)+" left"+(a===qs.length?" · "+(r>=Math.ceil(qs.length*0.9)?"Pass level (90%+)":"Below 90%: review the misses"):"")}
function render(){absorb();tabs();var p=PLAN[cur-1],d=DATA[cur],root=document.getElementById("btDay");root.innerHTML="";
root.appendChild(E("div",{"class":"bt-dayhead"},[E("div",{"class":"bt-eyebrow",text:"Day "+p[0]+" · "+p[1]}),E("h2",{"class":"bt-h2",text:p[2]})]));
var g=E("div",{"class":"bt-grid"});g.style.marginTop="14px";
var sc=E("div",{"class":"bt-card bt-scope"});sc.innerHTML='<h3>Scope</h3><b>Pages '+p[3]+'</b><p>Official handbook, <i>Basic Theory of Driving</i>. Read these pages first, and look at every picture.</p><p><a href="'+PDF+'" target="_blank" rel="noopener">Open the handbook PDF</a></p>';
var tp=E("div",{"class":"bt-card"});tp.appendChild(E("h3",{text:"Tips and suggestions"}));
if(d){var ul=E("ul");d.tips.forEach(function(x){ul.appendChild(E("li",{html:x}))});tp.appendChild(ul)}else tp.appendChild(E("p",{"class":"bt-soon",text:"Coming soon. This day's tips and 30 questions will be added next."}));
g.appendChild(sc);g.appendChild(tp);root.appendChild(g);
if(!d)return;
var bar=E("div",{"class":"bt-quizbar"}),s=E("div",{"class":"bt-score"}),f=E("div",{"class":"bt-filters"});
[["all","All "+d.qs.length],["e","Easy"],["m","Medium"],["h","Hard"]].forEach(function(x){var b=E("button",{type:"button","class":"bt-ghost","aria-pressed":String(lvl===x[0]),text:x[1]});b.onclick=function(){lvl=x[0];render()};f.appendChild(b)});
var rs=E("button",{type:"button","class":"bt-ghost",text:"Reset day"});rs.onclick=function(){d.qs.forEach(function(q,i){delete st[d.day+"-"+i]});save();render()};f.appendChild(rs);
bar.appendChild(E("h3",{"class":"bt-eyebrow",text:"Quiz"}));bar.appendChild(s);bar.appendChild(f);bar.style.marginTop="18px";root.appendChild(bar);
var list=E("div",{"class":"bt-list"});list.style.marginTop="12px";
var LV={e:"Easy",m:"Medium",h:"Hard"};
d.qs.forEach(function(q,i){if(lvl!=="all"&&q.l!==lvl)return;var id=d.day+"-"+i;
var c=E("div",{"class":"bt-q"});c.appendChild(E("div",{"class":"bt-qtop"},[E("span",{"class":"bt-qn",text:"Q"+(i+1)}),E("span",{"class":"bt-lvl "+q.l,text:LV[q.l]})]));
if(q.s)c.appendChild(E("div",{html:sign(q.s)}));
c.appendChild(E("p",{"class":"bt-qtext",text:q.q}));
var o=E("div",{"class":"bt-opts"}),why=E("div",{"class":"bt-why"}),bs=[];
q.o.forEach(function(t,j){var b=E("button",{type:"button","class":"bt-opt"},[E("span",{"class":"bt-box"}),E("span",{text:String.fromCharCode(65+j)+". "+t})]);b.onclick=function(){if(st[id]!==undefined)return;st[id]=j;save();paint();score(d,s)};bs.push(b);o.appendChild(b)});
function paint(){var v=st[id];if(v===undefined)return;bs.forEach(function(b,j){b.disabled=true;if(j===q.a){b.classList.add("ok");b.firstChild.textContent="✓"}if(j===v&&v!==q.a){b.classList.add("no");b.firstChild.textContent="✕"}});why.innerHTML='<span class="v '+(v===q.a?"ok":"no")+'">'+(v===q.a?"Correct.":"Not quite.")+"</span> ";why.appendChild(document.createTextNode(q.w));why.classList.add("show")}
paint();c.appendChild(o);c.appendChild(why);list.appendChild(c)});
root.appendChild(list);score(d,s)}

var m=(location.hash||"").match(/^#day-(\d+)$/);
if(m&&PLAN[m[1]-1])cur=+m[1];else{var n=Math.floor((new Date()-new Date(2026,10,20))/864e5)+1;if(n>=1&&n<=12)cur=n}
render();load(cur,render);
})();
