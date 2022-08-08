"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["optimizely","optimizely-utils","uuid"],{82664(a,b,c){function d(a){let b=document.querySelectorAll(a);if(b.length>0)return b[b.length-1]}function e(){return`${window.location.protocol}//${window.location.host}${function(){let a=d("meta[name=analytics-location]");return a?a.content:window.location.pathname}()+function(){let a=d("meta[name=analytics-location-query-strip]"),b="";a||(b=window.location.search);let c=d("meta[name=analytics-location-params]");for(let e of(c&&(b+=(b?"&":"?")+c.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let f=e.content.split(":",2);b=b.replace(RegExp(`(^|[?&])${f[0]}($|=)`,"g"),`$1${f[1]}$2`)}return b}()}`}c.d(b,{S:()=>e})},86975(a,b,c){c.d(b,{AU:()=>o,DT:()=>s,F2:()=>m,HN:()=>k,Lq:()=>i,Si:()=>n,T2:()=>x,aN:()=>l,ag:()=>w,po:()=>v,q3:()=>p,uL:()=>y,wz:()=>r,xc:()=>j,xk:()=>t,zH:()=>h});var d=c(74395),e=c(64707);let f=d.session.adapter,g="data-turbo-loaded";function h(){document.documentElement.setAttribute(g,"")}function i(){return document.documentElement.hasAttribute(g)}let j=()=>!(0,e.c)("PJAX_ENABLED"),k=a=>a?.tagName==="TURBO-FRAME",l=()=>{f.progressBar.setValue(0),f.progressBar.show()},m=()=>{f.progressBar.setValue(1),f.progressBar.hide()},n=(a,b)=>{let c=new URL(a,window.location.origin),d=new URL(b,window.location.origin);return Boolean(d.hash)&&c.hash!==d.hash&&c.host===d.host&&c.pathname===d.pathname&&c.search===d.search};function o(a,b){let c=a.split("/",3).join("/"),d=b.split("/",3).join("/");return c===d}async function p(){let a=document.head.querySelectorAll("link[rel=stylesheet]"),b=new Set([...document.styleSheets].map(a=>a.href)),c=[];for(let d of a)""===d.href||b.has(d.href)||c.push(q(d));await Promise.all(c)}let q=(a,b=2e3)=>new Promise(c=>{let d=()=>{a.removeEventListener("error",d),a.removeEventListener("load",d),c()};a.addEventListener("load",d,{once:!0}),a.addEventListener("error",d,{once:!0}),setTimeout(d,b)}),r=a=>{let b=a.querySelectorAll("[data-turbo-replace]"),c=[...document.querySelectorAll("[data-turbo-replace]")];for(let d of b){let e=c.find(a=>a.id===d.id);e&&e.replaceWith(d)}},s=a=>{for(let b of a.querySelectorAll("link[rel=stylesheet]"))document.head.querySelector(`link[href="${b.getAttribute("href")}"],
           link[data-href="${b.getAttribute("data-href")}"]`)||document.head.append(b)},t=a=>{for(let b of a.querySelectorAll("script"))document.head.querySelector(`script[src="${b.getAttribute("src")}"]`)||u(b)},u=a=>{let{src:b}=a,c=document.createElement("script"),d=a.getAttribute("type");d&&(c.type=d);let e=a.getAttribute("integrity");e&&(c.integrity=e,c.crossOrigin="anonymous"),c.src=b,document.head&&document.head.appendChild(c)},v=a=>{let b=[];for(let c of a.querySelectorAll('meta[data-turbo-track="reload"]'))document.querySelector(`meta[http-equiv="${c.getAttribute("http-equiv")}"]`)?.content!==c.content&&b.push(x(c.getAttribute("http-equiv")));return b},w=a=>{let b=a.querySelector("[data-turbo-head]")||a.head;return{title:b.querySelector("title")?.textContent,transients:[...b.querySelectorAll("[data-pjax-transient]")],bodyClasses:a.querySelector("meta[name=turbo-body-classes]")?.content}},x=a=>a.replace(/^x-/,"").replaceAll("-","_"),y=a=>document.dispatchEvent(new CustomEvent("turbo:reload",{detail:{reason:a}}))},67404(a,b,c){function d(a){return e(a)[0]}function e(a){let b=[];for(let c of f()){let[d,e]=c.trim().split("=");a===d&& void 0!==e&&b.push({key:d,value:e})}return b}function f(){try{return document.cookie.split(";")}catch{return[]}}function g(a,b,c=null,d=!1,e="lax"){let f=document.domain;if(null==f)throw Error("Unable to get document domain");f.endsWith(".github.com")&&(f="github.com");let g="https:"===location.protocol?"; secure":"",h=c?`; expires=${c}`:"";!1===d&&(f=`.${f}`);try{document.cookie=`${a}=${b}; path=/; domain=${f}${h}${g}; samesite=${e}`}catch{}}function h(a,b=!1){let c=document.domain;if(null==c)throw Error("Unable to get document domain");c.endsWith(".github.com")&&(c="github.com");let d=new Date().getTime(),e=new Date(d-1).toUTCString(),f="https:"===location.protocol?"; secure":"",g=`; expires=${e}`;!1===b&&(c=`.${c}`);try{document.cookie=`${a}=''; path=/; domain=${c}${g}${f}`}catch{}}c.d(b,{"$1":()=>e,d8:()=>g,ej:()=>d,kT:()=>h})},80721(a,b,c){c.d(b,{C:()=>e,x:()=>d});let d="interactive"===document.readyState||"complete"===document.readyState?Promise.resolve():new Promise(a=>{document.addEventListener("DOMContentLoaded",()=>{a()})}),e="complete"===document.readyState?Promise.resolve():new Promise(a=>{window.addEventListener("load",a)})},25019(a,b,c){c.d(b,{aJ:()=>t,cI:()=>q,eK:()=>m});var d=c(82918),e=c(45341),f=c(28382),g=c(82664),h=c(86975),i=c(58843);let j=!1,k=0,l=Date.now();function m(a,b={}){a&&"AbortError"!==a.name&&n(p(o(a),b))}async function n(a){if(!v())return;let b=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(b){if(s(a.error.stacktrace)){j=!0;return}k++;try{await fetch(b,{method:"post",body:JSON.stringify(a)})}catch{}}}function o(a){return{type:a.name,value:a.message,stacktrace:q(a)}}function p(a,b={}){return Object.assign({error:a,sanitizedUrl:(0,g.S)()||window.location.href,readyState:document.readyState,referrer:(0,i.wP)(),timeSinceLoad:Math.round(Date.now()-l),user:t()||void 0,turbo:(0,h.xc)()},b)}function q(a){return(0,f.Q)(a.stack||"").map(a=>({filename:a.file||"",function:String(a.methodName),lineno:(a.lineNumber||0).toString(),colno:(a.column||0).toString()}))}let r=/(chrome|moz|safari)-extension:\/\//;function s(a){return a.some(a=>r.test(a.filename)||r.test(a.function))}function t(){let a=document.head?.querySelector('meta[name="user-login"]')?.content;if(a)return a;let b=(0,d.b)();return`anonymous-${b}`}let u=!1;function v(){return!u&&!j&&k<10&&(0,e.Gb)()}if(window.addEventListener("pageshow",()=>u=!1),window.addEventListener("pagehide",()=>u=!0),"function"==typeof BroadcastChannel){let w=new BroadcastChannel("shared-worker-error");w.addEventListener("message",a=>{m(a.data.error)})}},64707(a,b,c){c.d(b,{"$":()=>g,c:()=>f});var d=c(15205);let e=(0,d.Z)(function(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}),f=(0,d.Z)(function(a){return -1!==e().indexOf(a)}),g={isFeatureEnabled:f}},86702(a,b,c){c.d(b,{Z:()=>d});class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}function d(a,b={throwQuotaErrorsOnSet:!1},c=window){let d;try{d=c[a]}catch{d=new NoOpStorage}let{throwQuotaErrorsOnSet:e}=b;return{getItem:function(a){try{return d.getItem(a)}catch(b){return null}},setItem:function(a,b){try{d.setItem(a,b)}catch(c){if(e&&c.message.toLowerCase().includes("quota"))throw c}},removeItem:function(a){try{d.removeItem(a)}catch(b){}}}}},25811(a,b,c){c.d(b,{LS:()=>f,cl:()=>g,rV:()=>e});var d=c(86702);let{getItem:e,setItem:f,removeItem:g}=(0,d.Z)("sessionStorage")},55065(a,b,c){c.d(b,{"$g":()=>SoftNavSuccessEvent,OV:()=>SoftNavStartEvent,QW:()=>SoftNavErrorEvent,Xr:()=>SoftNavEndEvent});var d=c(45586);class SoftNavEvent extends Event{constructor(a,b){super(b),this.mechanism=a}}class SoftNavStartEvent extends SoftNavEvent{constructor(a){super(a,d.QE.START)}}class SoftNavSuccessEvent extends SoftNavEvent{constructor(a,b){super(a,d.QE.SUCCESS),this.visitCount=b}}class SoftNavErrorEvent extends SoftNavEvent{constructor(a,b){super(a,d.QE.ERROR),this.error=b}}class SoftNavEndEvent extends SoftNavEvent{constructor(a){super(a,d.QE.END)}}},45586(a,b,c){c.d(b,{jN:()=>j,QE:()=>i,R6:()=>t,FP:()=>p,r_:()=>o,Yl:()=>l,TL:()=>q,dw:()=>s,LD:()=>m,BT:()=>n,u5:()=>r});var d=c(55065),e=c(34855),f=c(58843);let g="stats:soft-nav-duration",h={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME"},i=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),j="reload",k=0;function l(){k=0,document.dispatchEvent(new Event(i.INITIAL)),(0,f.XL)()}function m(a){(0,f.sj)()||(document.dispatchEvent(new d.OV(a)),(0,f.U6)(a),(0,f.J$)(),(0,f.Nt)(),performance.mark(g))}function n(a={}){u(a)&&(k+=1,document.dispatchEvent(new d.$g((0,f.Gj)(),k)),p(a))}function o(a={}){var b;if(!u(a))return;k=0;let c=(0,f.Wl)()||j;document.dispatchEvent(new d.QW((0,f.Gj)(),c)),b=c,(0,e.b)({turboFailureReason:b,turboStartUrl:(0,f.wP)(),turboEndUrl:window.location.href}),(0,f.XL)(),p(a)}function p(a={}){u(a)&&(document.dispatchEvent(new d.Xr((0,f.Gj)())),(0,f.pS)())}function q(a={}){u(a)&&(!function(){let a=function(){if(0===performance.getEntriesByName(g).length)return null;performance.measure(g,g);let a=performance.getEntriesByName(g),b=a.pop();return b?b.duration:null}();if(!a)return;let b=h[(0,f.Gj)()],c=Math.round(a);b===h.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:c}})),(0,e.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:b,destination:(0,f.Nb)()||"rails",duration:c,initiator:(0,f.CI)()||"rails"}})}(),document.dispatchEvent(new Event(i.RENDER)))}function r(){document.dispatchEvent(new Event(i.FRAME_UPDATE))}function s(){document.dispatchEvent(new Event(i.PROGRESS_BAR.START))}function t(){document.dispatchEvent(new Event(i.PROGRESS_BAR.END))}function u({skipIfGoingToReactApp:a,allowedMechanisms:b=[]}={}){return(0,f.sj)()&&(0===b.length||b.includes((0,f.Gj)()))&&(!a||!(0,f.Nb)())}},58843(a,b,c){c.d(b,{Ak:()=>r,CI:()=>v,Gj:()=>o,"J$":()=>u,Nb:()=>w,Nt:()=>s,OE:()=>p,U6:()=>l,Wl:()=>q,XL:()=>k,pS:()=>m,sj:()=>n,wP:()=>t});var d=c(25811),e=c(45586);let f="soft-nav:fail",g="soft-nav:fail-referrer",h="soft-nav:referrer",i="soft-nav:marker",j="soft-nav:react-app-name";function k(){(0,d.LS)(i,"0"),(0,d.cl)(h),(0,d.cl)(f),(0,d.cl)(g),(0,d.cl)(j)}function l(a){(0,d.LS)(i,a)}function m(){(0,d.LS)(i,"0")}function n(){let a=(0,d.rV)(i);return a&&"0"!==a}function o(){return(0,d.rV)(i)}function p(){return Boolean(q())}function q(){return(0,d.rV)(f)}function r(a){(0,d.LS)(f,a||e.jN),(0,d.LS)(g,window.location.href)}function s(){(0,d.LS)(h,window.location.href)}function t(){return(0,d.rV)(h)||document.referrer}function u(){let a=w();a?(0,d.LS)(j,a):(0,d.cl)(j)}function v(){return(0,d.rV)(j)}function w(){return document.querySelector("react-app")?.getAttribute("app-name")}},34855(a,b,c){c.d(b,{b:()=>f});var d=c(80721);let e=[];function f(a,b=!1){void 0===a.timestamp&&(a.timestamp=new Date().getTime()),a.loggedIn=j(),a.staff=k(),e.push(a),b?i():h()}let g=null;async function h(){await d.C,null==g&&(g=window.requestIdleCallback(i))}function i(){if(g=null,!e.length)return;let a=document.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!a)return;let b=JSON.stringify({stats:e});try{navigator.sendBeacon&&navigator.sendBeacon(a,b)}catch{}e=[]}function j(){return!!document.head?.querySelector('meta[name="user-login"]')?.content}function k(){return!!document.head?.querySelector('meta[name="user-staff"]')?.content}document.addEventListener("pagehide",i),document.addEventListener("visibilitychange",i)},31063(a,b,c){function d(a){return a.toLowerCase().replace(/-(.)/g,function(a,b){return b.toUpperCase()})}function e(a){let b={};for(let{name:c,value:e}of a.attributes)if(c.startsWith("data-optimizely-meta-")){let f=c.replace("data-optimizely-meta-","");e&&e.trim().length&&(b[d(f)]=e)}return b}c.d(b,{t:()=>e})},68379(a,b,c){var d=c(25019),e=c(82664),f=c(48266),g=c(45341);let h={handleError(a){j(a)}};function i(a){try{return window.localStorage?.getItem(a)}catch(b){return null}}async function j(a){if(!g.Gb||a.message.startsWith("Optimizely::InvalidExperimentError:"))return;let b=document.head?.querySelector('meta[name="browser-optimizely-client-errors-url"]')?.content;if(!b)return;let c={message:a.message,stack:a.stack,stacktrace:(0,d.cI)(a),sanitizedUrl:(0,e.S)()||window.location.href,user:(0,d.aJ)()||void 0};try{await fetch(b,{method:"post",body:JSON.stringify(c)})}catch{}}var k=c(67404),l=c(82918),m=c(64463),n=c(59753),o=c(31063);let p;!async function(){await (p=function(){(function a(){let b=i("optimizely.logLevel");b?f.ZP.setLogLevel(b):f.ZP.setLogger(null)})();let a=document.head.querySelector("meta[name=optimizely-datafile]")?.content;return f.ZP.createInstance({datafile:a,errorHandler:h})}()).onReady()}(),(0,n.on)("click","[data-optimizely-event]",function(a){if(!p)return;let b=a.currentTarget,c=b.getAttribute("data-optimizely-event")||"",[d,e]=c.trim().split(/\s*,\s*/),f=(0,o.t)(b);d&&e?p.track(d,e,f):d&&p.track(d,(0,l.b)(),f)}),(0,m.N7)("[data-optimizely-experiment]",a=>{if(!p)return;let b=a.getAttribute("data-optimizely-experiment");if(!b||a.hidden)return;let c=(0,o.t)(a),d=p.activate(b,(0,l.b)(),c);if(!d)return;let e=a.querySelectorAll("[data-optimizely-variation]");for(let f of e){let g=f.getAttribute("data-optimizely-variation");f.hidden=g!==d}});let q=document.querySelector('meta[name="enabled-homepage-translation-languages"]')?.getAttribute("content")?.split(",")||[],r=(0,k.$1)("_locale_experiment").length>0&&"ko"===(0,k.$1)("_locale_experiment")[0].value&&q.includes("ko");async function s(){let a="ko_homepage_translation",b=(0,l.b)(),c=k.$1("_locale")[0]?.value?.slice(0,2);p.setForcedVariation(a,b,c),p.activate(a,b);let d=document.querySelectorAll("[data-optimizely-variation]");for(let e of d)e.hidden=c!==e.getAttribute("data-optimizely-variation");for(let f of document.querySelectorAll('form[action^="/join"]'))f.addEventListener("submit",()=>{p.track("submit.homepage_signup",b)});for(let g of document.querySelectorAll('a[href^="/join"]'))g.addEventListener("click",()=>{p.track("click.homepage_signup",b)})}async function t(){document.getElementById("signup-form")?.addEventListener("submit",()=>{let a=(0,l.b)();p.activate("ko_homepage_translation",a),p.track("submit.create_account",a)})}async function u(){if(!p)return;let a=(0,l.b)();p.activate("test_experiment",a),p.track("test_event",a)}r&&"/"===window.location.pathname&&s(),r&&"/join"===window.location.pathname&&t(),"/settings/profile"===window.location.pathname&&u()},328(a,b,c){function d(){return crypto.randomUUID()}c.r(b),c.d(b,{v4:()=>d})}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_optimizely_optimizely-sdk_dist_optimizely_browser_es_min_js-node_modules-089adc"],()=>b(68379));var c=a.O()}])
//# sourceMappingURL=optimizely-ef9caaca5dbf.js.map