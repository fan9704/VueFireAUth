(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qr(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Gr(t){if(P(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Z(r)?ic(r):Gr(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Z(t))return t;if(J(t))return t}}const tc=/;(?![^(]*\))/g,nc=/:([^]+)/,rc=/\/\*.*?\*\//gs;function ic(t){const e={};return t.replace(rc,"").split(tc).forEach(n=>{if(n){const r=n.split(nc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jr(t){let e="";if(Z(t))e=t;else if(P(t))for(let n=0;n<t.length;n++){const r=Jr(t[n]);r&&(e+=r+" ")}else if(J(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oc=qr(sc);function Ws(t){return!!t||t===""}const ac=t=>Z(t)?t:t==null?"":P(t)||J(t)&&(t.toString===Gs||!D(t.toString))?JSON.stringify(t,zs,2):String(t),zs=(t,e)=>e&&e.__v_isRef?zs(t,e.value):Pt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Ks(e)?{[`Set(${e.size})`]:[...e.values()]}:J(e)&&!P(e)&&!Js(e)?String(e):e,W={},kt=[],we=()=>{},cc=()=>!1,lc=/^on[^a-z]/,Bn=t=>lc.test(t),Yr=t=>t.startsWith("onUpdate:"),te=Object.assign,Xr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uc=Object.prototype.hasOwnProperty,L=(t,e)=>uc.call(t,e),P=Array.isArray,Pt=t=>$n(t)==="[object Map]",Ks=t=>$n(t)==="[object Set]",D=t=>typeof t=="function",Z=t=>typeof t=="string",Qr=t=>typeof t=="symbol",J=t=>t!==null&&typeof t=="object",qs=t=>J(t)&&D(t.then)&&D(t.catch),Gs=Object.prototype.toString,$n=t=>Gs.call(t),fc=t=>$n(t).slice(8,-1),Js=t=>$n(t)==="[object Object]",Zr=t=>Z(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,In=qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dc=/-(\w)/g,Lt=jn(t=>t.replace(dc,(e,n)=>n?n.toUpperCase():"")),hc=/\B([A-Z])/g,Bt=jn(t=>t.replace(hc,"-$1").toLowerCase()),Ys=jn(t=>t.charAt(0).toUpperCase()+t.slice(1)),or=jn(t=>t?`on${Ys(t)}`:""),Rn=(t,e)=>!Object.is(t,e),ar=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},On=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xi;const gc=()=>xi||(xi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let be;class mc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=be,!e&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=be;try{return be=this,e()}finally{be=n}}}on(){be=this}off(){be=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function _c(t,e=be){e&&e.active&&e.effects.push(t)}function bc(){return be}const ei=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xs=t=>(t.w&rt)>0,Qs=t=>(t.n&rt)>0,yc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=rt},Ic=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Xs(i)&&!Qs(i)?i.delete(t):e[n++]=i,i.w&=~rt,i.n&=~rt}e.length=n}},Ar=new WeakMap;let Kt=0,rt=1;const Sr=30;let Ie;const bt=Symbol(""),Cr=Symbol("");class ti{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_c(this,r)}run(){if(!this.active)return this.fn();let e=Ie,n=Ze;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ie,Ie=this,Ze=!0,rt=1<<++Kt,Kt<=Sr?yc(this):Li(this),this.fn()}finally{Kt<=Sr&&Ic(this),rt=1<<--Kt,Ie=this.parent,Ze=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ie===this?this.deferStop=!0:this.active&&(Li(this),this.onStop&&this.onStop(),this.active=!1)}}function Li(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ze=!0;const Zs=[];function $t(){Zs.push(Ze),Ze=!1}function jt(){const t=Zs.pop();Ze=t===void 0?!0:t}function ce(t,e,n){if(Ze&&Ie){let r=Ar.get(t);r||Ar.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=ei()),eo(i)}}function eo(t,e){let n=!1;Kt<=Sr?Qs(t)||(t.n|=rt,n=!Xs(t)):n=!t.has(Ie),n&&(t.add(Ie),Ie.deps.push(t))}function Ve(t,e,n,r,i,s){const o=Ar.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&P(t)){const c=Number(r);o.forEach((u,d)=>{(d==="length"||d>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":P(t)?Zr(n)&&a.push(o.get("length")):(a.push(o.get(bt)),Pt(t)&&a.push(o.get(Cr)));break;case"delete":P(t)||(a.push(o.get(bt)),Pt(t)&&a.push(o.get(Cr)));break;case"set":Pt(t)&&a.push(o.get(bt));break}if(a.length===1)a[0]&&Rr(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Rr(ei(c))}}function Rr(t,e){const n=P(t)?t:[...t];for(const r of n)r.computed&&Fi(r);for(const r of n)r.computed||Fi(r)}function Fi(t,e){(t!==Ie||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const vc=qr("__proto__,__v_isRef,__isVue"),to=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qr)),wc=ni(),Ec=ni(!1,!0),Tc=ni(!0),Ui=Ac();function Ac(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=F(this);for(let s=0,o=this.length;s<o;s++)ce(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(F)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){$t();const r=F(this)[e].apply(this,n);return jt(),r}}),t}function Sc(t){const e=F(this);return ce(e,"has",t),e.hasOwnProperty(t)}function ni(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?Hc:oo:e?so:io).get(r))return r;const o=P(r);if(!t){if(o&&L(Ui,i))return Reflect.get(Ui,i,s);if(i==="hasOwnProperty")return Sc}const a=Reflect.get(r,i,s);return(Qr(i)?to.has(i):vc(i))||(t||ce(r,"get",i),e)?a:oe(a)?o&&Zr(i)?a:a.value:J(a)?t?ao(a):si(a):a}}const Cc=no(),Rc=no(!0);function no(t=!1){return function(n,r,i,s){let o=n[r];if(Xt(o)&&oe(o)&&!oe(i))return!1;if(!t&&(!Or(i)&&!Xt(i)&&(o=F(o),i=F(i)),!P(n)&&oe(o)&&!oe(i)))return o.value=i,!0;const a=P(n)&&Zr(r)?Number(r)<n.length:L(n,r),c=Reflect.set(n,r,i,s);return n===F(s)&&(a?Rn(i,o)&&Ve(n,"set",r,i):Ve(n,"add",r,i)),c}}function Oc(t,e){const n=L(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ve(t,"delete",e,void 0),r}function kc(t,e){const n=Reflect.has(t,e);return(!Qr(e)||!to.has(e))&&ce(t,"has",e),n}function Pc(t){return ce(t,"iterate",P(t)?"length":bt),Reflect.ownKeys(t)}const ro={get:wc,set:Cc,deleteProperty:Oc,has:kc,ownKeys:Pc},Dc={get:Tc,set(t,e){return!0},deleteProperty(t,e){return!0}},Mc=te({},ro,{get:Ec,set:Rc}),ri=t=>t,Hn=t=>Reflect.getPrototypeOf(t);function hn(t,e,n=!1,r=!1){t=t.__v_raw;const i=F(t),s=F(e);n||(e!==s&&ce(i,"get",e),ce(i,"get",s));const{has:o}=Hn(i),a=r?ri:n?ci:ai;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function pn(t,e=!1){const n=this.__v_raw,r=F(n),i=F(t);return e||(t!==i&&ce(r,"has",t),ce(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function gn(t,e=!1){return t=t.__v_raw,!e&&ce(F(t),"iterate",bt),Reflect.get(t,"size",t)}function Bi(t){t=F(t);const e=F(this);return Hn(e).has.call(e,t)||(e.add(t),Ve(e,"add",t,t)),this}function $i(t,e){e=F(e);const n=F(this),{has:r,get:i}=Hn(n);let s=r.call(n,t);s||(t=F(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Rn(e,o)&&Ve(n,"set",t,e):Ve(n,"add",t,e),this}function ji(t){const e=F(this),{has:n,get:r}=Hn(e);let i=n.call(e,t);i||(t=F(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Ve(e,"delete",t,void 0),s}function Hi(){const t=F(this),e=t.size!==0,n=t.clear();return e&&Ve(t,"clear",void 0,void 0),n}function mn(t,e){return function(r,i){const s=this,o=s.__v_raw,a=F(o),c=e?ri:t?ci:ai;return!t&&ce(a,"iterate",bt),o.forEach((u,d)=>r.call(i,c(u),c(d),s))}}function _n(t,e,n){return function(...r){const i=this.__v_raw,s=F(i),o=Pt(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),d=n?ri:e?ci:ai;return!e&&ce(s,"iterate",c?Cr:bt),{next(){const{value:g,done:b}=u.next();return b?{value:g,done:b}:{value:a?[d(g[0]),d(g[1])]:d(g),done:b}},[Symbol.iterator](){return this}}}}function qe(t){return function(...e){return t==="delete"?!1:this}}function Nc(){const t={get(s){return hn(this,s)},get size(){return gn(this)},has:pn,add:Bi,set:$i,delete:ji,clear:Hi,forEach:mn(!1,!1)},e={get(s){return hn(this,s,!1,!0)},get size(){return gn(this)},has:pn,add:Bi,set:$i,delete:ji,clear:Hi,forEach:mn(!1,!0)},n={get(s){return hn(this,s,!0)},get size(){return gn(this,!0)},has(s){return pn.call(this,s,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:mn(!0,!1)},r={get(s){return hn(this,s,!0,!0)},get size(){return gn(this,!0)},has(s){return pn.call(this,s,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=_n(s,!1,!1),n[s]=_n(s,!0,!1),e[s]=_n(s,!1,!0),r[s]=_n(s,!0,!0)}),[t,n,e,r]}const[xc,Lc,Fc,Uc]=Nc();function ii(t,e){const n=e?t?Uc:Fc:t?Lc:xc;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(L(n,i)&&i in r?n:r,i,s)}const Bc={get:ii(!1,!1)},$c={get:ii(!1,!0)},jc={get:ii(!0,!1)},io=new WeakMap,so=new WeakMap,oo=new WeakMap,Hc=new WeakMap;function Vc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wc(t){return t.__v_skip||!Object.isExtensible(t)?0:Vc(fc(t))}function si(t){return Xt(t)?t:oi(t,!1,ro,Bc,io)}function zc(t){return oi(t,!1,Mc,$c,so)}function ao(t){return oi(t,!0,Dc,jc,oo)}function oi(t,e,n,r,i){if(!J(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Wc(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Dt(t){return Xt(t)?Dt(t.__v_raw):!!(t&&t.__v_isReactive)}function Xt(t){return!!(t&&t.__v_isReadonly)}function Or(t){return!!(t&&t.__v_isShallow)}function co(t){return Dt(t)||Xt(t)}function F(t){const e=t&&t.__v_raw;return e?F(e):t}function lo(t){return On(t,"__v_skip",!0),t}const ai=t=>J(t)?si(t):t,ci=t=>J(t)?ao(t):t;function Kc(t){Ze&&Ie&&(t=F(t),eo(t.dep||(t.dep=ei())))}function qc(t,e){t=F(t);const n=t.dep;n&&Rr(n)}function oe(t){return!!(t&&t.__v_isRef===!0)}function Gc(t){return oe(t)?t.value:t}const Jc={get:(t,e,n)=>Gc(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return oe(i)&&!oe(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function uo(t){return Dt(t)?t:new Proxy(t,Jc)}var fo;class Yc{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[fo]=!1,this._dirty=!0,this.effect=new ti(e,()=>{this._dirty||(this._dirty=!0,qc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=F(this);return Kc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}fo="__v_isReadonly";function Xc(t,e,n=!1){let r,i;const s=D(t);return s?(r=t,i=we):(r=t.get,i=t.set),new Yc(r,i,s||!i,n)}function et(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Vn(s,e,n)}return i}function pe(t,e,n,r){if(D(t)){const s=et(t,e,n,r);return s&&qs(s)&&s.catch(o=>{Vn(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(pe(t[s],e,n,r));return i}function Vn(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){et(c,null,10,[t,o,a]);return}}Qc(t,n,i,r)}function Qc(t,e,n,r=!0){console.error(t)}let Qt=!1,kr=!1;const ee=[];let Oe=0;const Mt=[];let Be=null,dt=0;const ho=Promise.resolve();let li=null;function Zc(t){const e=li||ho;return t?e.then(this?t.bind(this):t):e}function el(t){let e=Oe+1,n=ee.length;for(;e<n;){const r=e+n>>>1;Zt(ee[r])<t?e=r+1:n=r}return e}function ui(t){(!ee.length||!ee.includes(t,Qt&&t.allowRecurse?Oe+1:Oe))&&(t.id==null?ee.push(t):ee.splice(el(t.id),0,t),po())}function po(){!Qt&&!kr&&(kr=!0,li=ho.then(mo))}function tl(t){const e=ee.indexOf(t);e>Oe&&ee.splice(e,1)}function nl(t){P(t)?Mt.push(...t):(!Be||!Be.includes(t,t.allowRecurse?dt+1:dt))&&Mt.push(t),po()}function Vi(t,e=Qt?Oe+1:0){for(;e<ee.length;e++){const n=ee[e];n&&n.pre&&(ee.splice(e,1),e--,n())}}function go(t){if(Mt.length){const e=[...new Set(Mt)];if(Mt.length=0,Be){Be.push(...e);return}for(Be=e,Be.sort((n,r)=>Zt(n)-Zt(r)),dt=0;dt<Be.length;dt++)Be[dt]();Be=null,dt=0}}const Zt=t=>t.id==null?1/0:t.id,rl=(t,e)=>{const n=Zt(t)-Zt(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mo(t){kr=!1,Qt=!0,ee.sort(rl);const e=we;try{for(Oe=0;Oe<ee.length;Oe++){const n=ee[Oe];n&&n.active!==!1&&et(n,null,14)}}finally{Oe=0,ee.length=0,go(),Qt=!1,li=null,(ee.length||Mt.length)&&mo()}}function il(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||W;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:g,trim:b}=r[d]||W;b&&(i=n.map(E=>Z(E)?E.trim():E)),g&&(i=n.map(pc))}let a,c=r[a=or(e)]||r[a=or(Lt(e))];!c&&s&&(c=r[a=or(Bt(e))]),c&&pe(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pe(u,t,6,i)}}function _o(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!D(t)){const c=u=>{const d=_o(u,e,!0);d&&(a=!0,te(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(J(t)&&r.set(t,null),null):(P(s)?s.forEach(c=>o[c]=null):te(o,s),J(t)&&r.set(t,o),o)}function Wn(t,e){return!t||!Bn(e)?!1:(e=e.slice(2).replace(/Once$/,""),L(t,e[0].toLowerCase()+e.slice(1))||L(t,Bt(e))||L(t,e))}let he=null,bo=null;function kn(t){const e=he;return he=t,bo=t&&t.type.__scopeId||null,e}function sl(t,e=he,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Zi(-1);const s=kn(e);let o;try{o=t(...i)}finally{kn(s),r._d&&Zi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function cr(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:d,renderCache:g,data:b,setupState:E,ctx:N,inheritAttrs:C}=t;let z,U;const re=kn(t);try{if(n.shapeFlag&4){const V=i||r;z=Re(d.call(V,V,g,s,E,b,N)),U=c}else{const V=e;z=Re(V.length>1?V(s,{attrs:c,slots:a,emit:u}):V(s,null)),U=e.props?c:ol(c)}}catch(V){Gt.length=0,Vn(V,t,1),z=yt(He)}let k=z;if(U&&C!==!1){const V=Object.keys(U),{shapeFlag:Q}=k;V.length&&Q&7&&(o&&V.some(Yr)&&(U=al(U,o)),k=it(k,U))}return n.dirs&&(k=it(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),z=k,kn(re),z}const ol=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bn(n))&&((e||(e={}))[n]=t[n]);return e},al=(t,e)=>{const n={};for(const r in t)(!Yr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cl(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Wi(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const b=d[g];if(o[b]!==r[b]&&!Wn(u,b))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Wi(r,o,u):!0:!!o;return!1}function Wi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Wn(n,s))return!0}return!1}function ll({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ul=t=>t.__isSuspense;function fl(t,e){e&&e.pendingBranch?P(t)?e.effects.push(...t):e.effects.push(t):nl(t)}function dl(t,e){if(X){let n=X.provides;const r=X.parent&&X.parent.provides;r===n&&(n=X.provides=Object.create(r)),n[t]=e}}function vn(t,e,n=!1){const r=X||he;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&D(e)?e.call(r.proxy):e}}const bn={};function lr(t,e,n){return yo(t,e,n)}function yo(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=W){const a=bc()===(X==null?void 0:X.scope)?X:null;let c,u=!1,d=!1;if(oe(t)?(c=()=>t.value,u=Or(t)):Dt(t)?(c=()=>t,r=!0):P(t)?(d=!0,u=t.some(k=>Dt(k)||Or(k)),c=()=>t.map(k=>{if(oe(k))return k.value;if(Dt(k))return gt(k);if(D(k))return et(k,a,2)})):D(t)?e?c=()=>et(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return g&&g(),pe(t,a,3,[b])}:c=we,e&&r){const k=c;c=()=>gt(k())}let g,b=k=>{g=U.onStop=()=>{et(k,a,4)}},E;if(tn)if(b=we,e?n&&pe(e,a,3,[c(),d?[]:void 0,b]):c(),i==="sync"){const k=fu();E=k.__watcherHandles||(k.__watcherHandles=[])}else return we;let N=d?new Array(t.length).fill(bn):bn;const C=()=>{if(U.active)if(e){const k=U.run();(r||u||(d?k.some((V,Q)=>Rn(V,N[Q])):Rn(k,N)))&&(g&&g(),pe(e,a,3,[k,N===bn?void 0:d&&N[0]===bn?[]:N,b]),N=k)}else U.run()};C.allowRecurse=!!e;let z;i==="sync"?z=C:i==="post"?z=()=>ae(C,a&&a.suspense):(C.pre=!0,a&&(C.id=a.uid),z=()=>ui(C));const U=new ti(c,z);e?n?C():N=U.run():i==="post"?ae(U.run.bind(U),a&&a.suspense):U.run();const re=()=>{U.stop(),a&&a.scope&&Xr(a.scope.effects,U)};return E&&E.push(re),re}function hl(t,e,n){const r=this.proxy,i=Z(t)?t.includes(".")?Io(r,t):()=>r[t]:t.bind(r,r);let s;D(e)?s=e:(s=e.handler,n=e);const o=X;Ft(this);const a=yo(i,s.bind(r),n);return o?Ft(o):It(),a}function Io(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function gt(t,e){if(!J(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),oe(t))gt(t.value,e);else if(P(t))for(let n=0;n<t.length;n++)gt(t[n],e);else if(Ks(t)||Pt(t))t.forEach(n=>{gt(n,e)});else if(Js(t))for(const n in t)gt(t[n],e);return t}function pl(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return To(()=>{t.isMounted=!0}),Ao(()=>{t.isUnmounting=!0}),t}const de=[Function,Array],gl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:de,onEnter:de,onAfterEnter:de,onEnterCancelled:de,onBeforeLeave:de,onLeave:de,onAfterLeave:de,onLeaveCancelled:de,onBeforeAppear:de,onAppear:de,onAfterAppear:de,onAppearCancelled:de},setup(t,{slots:e}){const n=ru(),r=pl();let i;return()=>{const s=e.default&&wo(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const C of s)if(C.type!==He){o=C;break}}const a=F(t),{mode:c}=a;if(r.isLeaving)return ur(o);const u=zi(o);if(!u)return ur(o);const d=Pr(u,a,r,n);Dr(u,d);const g=n.subTree,b=g&&zi(g);let E=!1;const{getTransitionKey:N}=u.type;if(N){const C=N();i===void 0?i=C:C!==i&&(i=C,E=!0)}if(b&&b.type!==He&&(!ht(u,b)||E)){const C=Pr(b,a,r,n);if(Dr(b,C),c==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ur(o);c==="in-out"&&u.type!==He&&(C.delayLeave=(z,U,re)=>{const k=vo(r,b);k[String(b.key)]=b,z._leaveCb=()=>{U(),z._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=re})}return o}}},ml=gl;function vo(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Pr(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:g,onLeave:b,onAfterLeave:E,onLeaveCancelled:N,onBeforeAppear:C,onAppear:z,onAfterAppear:U,onAppearCancelled:re}=e,k=String(t.key),V=vo(n,t),Q=(M,q)=>{M&&pe(M,r,9,q)},Ee=(M,q)=>{const K=q[1];Q(M,q),P(M)?M.every(le=>le.length<=1)&&K():M.length<=1&&K()},me={mode:s,persisted:o,beforeEnter(M){let q=a;if(!n.isMounted)if(i)q=C||a;else return;M._leaveCb&&M._leaveCb(!0);const K=V[k];K&&ht(t,K)&&K.el._leaveCb&&K.el._leaveCb(),Q(q,[M])},enter(M){let q=c,K=u,le=d;if(!n.isMounted)if(i)q=z||c,K=U||u,le=re||d;else return;let Te=!1;const Fe=M._enterCb=Vt=>{Te||(Te=!0,Vt?Q(le,[M]):Q(K,[M]),me.delayedLeave&&me.delayedLeave(),M._enterCb=void 0)};q?Ee(q,[M,Fe]):Fe()},leave(M,q){const K=String(t.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return q();Q(g,[M]);let le=!1;const Te=M._leaveCb=Fe=>{le||(le=!0,q(),Fe?Q(N,[M]):Q(E,[M]),M._leaveCb=void 0,V[K]===t&&delete V[K])};V[K]=t,b?Ee(b,[M,Te]):Te()},clone(M){return Pr(M,e,n,r)}};return me}function ur(t){if(zn(t))return t=it(t),t.children=null,t}function zi(t){return zn(t)?t.children?t.children[0]:void 0:t}function Dr(t,e){t.shapeFlag&6&&t.component?Dr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wo(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ye?(o.patchFlag&128&&i++,r=r.concat(wo(o.children,e,a))):(e||o.type!==He)&&r.push(a!=null?it(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}const wn=t=>!!t.type.__asyncLoader,zn=t=>t.type.__isKeepAlive;function _l(t,e){Eo(t,"a",e)}function bl(t,e){Eo(t,"da",e)}function Eo(t,e,n=X){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Kn(e,r,n),n){let i=n.parent;for(;i&&i.parent;)zn(i.parent.vnode)&&yl(r,e,n,i),i=i.parent}}function yl(t,e,n,r){const i=Kn(e,t,r,!0);So(()=>{Xr(r[e],i)},n)}function Kn(t,e,n=X,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;$t(),Ft(n);const a=pe(e,n,t,o);return It(),jt(),a});return r?i.unshift(s):i.push(s),s}}const Ke=t=>(e,n=X)=>(!tn||t==="sp")&&Kn(t,(...r)=>e(...r),n),Il=Ke("bm"),To=Ke("m"),vl=Ke("bu"),wl=Ke("u"),Ao=Ke("bum"),So=Ke("um"),El=Ke("sp"),Tl=Ke("rtg"),Al=Ke("rtc");function Sl(t,e=X){Kn("ec",t,e)}function Ki(t,e){const n=he;if(n===null)return t;const r=Jn(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=W]=e[s];o&&(D(o)&&(o={mounted:o,updated:o}),o.deep&&gt(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function ct(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&($t(),pe(c,n,8,[t.el,a,t,e]),jt())}}const Cl=Symbol(),Mr=t=>t?Lo(t)?Jn(t)||t.proxy:Mr(t.parent):null,qt=te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mr(t.parent),$root:t=>Mr(t.root),$emit:t=>t.emit,$options:t=>fi(t),$forceUpdate:t=>t.f||(t.f=()=>ui(t.update)),$nextTick:t=>t.n||(t.n=Zc.bind(t.proxy)),$watch:t=>hl.bind(t)}),fr=(t,e)=>t!==W&&!t.__isScriptSetup&&L(t,e),Rl={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(fr(r,e))return o[e]=1,r[e];if(i!==W&&L(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&L(u,e))return o[e]=3,s[e];if(n!==W&&L(n,e))return o[e]=4,n[e];Nr&&(o[e]=0)}}const d=qt[e];let g,b;if(d)return e==="$attrs"&&ce(t,"get",e),d(t);if((g=a.__cssModules)&&(g=g[e]))return g;if(n!==W&&L(n,e))return o[e]=4,n[e];if(b=c.config.globalProperties,L(b,e))return b[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return fr(i,e)?(i[e]=n,!0):r!==W&&L(r,e)?(r[e]=n,!0):L(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==W&&L(t,o)||fr(e,o)||(a=s[0])&&L(a,o)||L(r,o)||L(qt,o)||L(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:L(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Nr=!0;function Ol(t){const e=fi(t),n=t.proxy,r=t.ctx;Nr=!1,e.beforeCreate&&qi(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:d,beforeMount:g,mounted:b,beforeUpdate:E,updated:N,activated:C,deactivated:z,beforeDestroy:U,beforeUnmount:re,destroyed:k,unmounted:V,render:Q,renderTracked:Ee,renderTriggered:me,errorCaptured:M,serverPrefetch:q,expose:K,inheritAttrs:le,components:Te,directives:Fe,filters:Vt}=e;if(u&&kl(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const G in o){const $=o[G];D($)&&(r[G]=$.bind(n))}if(i){const G=i.call(n,n);J(G)&&(t.data=si(G))}if(Nr=!0,s)for(const G in s){const $=s[G],ot=D($)?$.bind(n,n):D($.get)?$.get.bind(n,n):we,fn=!D($)&&D($.set)?$.set.bind(n):we,at=lu({get:ot,set:fn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>at.value,set:Ae=>at.value=Ae})}if(a)for(const G in a)Co(a[G],r,n,G);if(c){const G=D(c)?c.call(n):c;Reflect.ownKeys(G).forEach($=>{dl($,G[$])})}d&&qi(d,t,"c");function ie(G,$){P($)?$.forEach(ot=>G(ot.bind(n))):$&&G($.bind(n))}if(ie(Il,g),ie(To,b),ie(vl,E),ie(wl,N),ie(_l,C),ie(bl,z),ie(Sl,M),ie(Al,Ee),ie(Tl,me),ie(Ao,re),ie(So,V),ie(El,q),P(K))if(K.length){const G=t.exposed||(t.exposed={});K.forEach($=>{Object.defineProperty(G,$,{get:()=>n[$],set:ot=>n[$]=ot})})}else t.exposed||(t.exposed={});Q&&t.render===we&&(t.render=Q),le!=null&&(t.inheritAttrs=le),Te&&(t.components=Te),Fe&&(t.directives=Fe)}function kl(t,e,n=we,r=!1){P(t)&&(t=xr(t));for(const i in t){const s=t[i];let o;J(s)?"default"in s?o=vn(s.from||i,s.default,!0):o=vn(s.from||i):o=vn(s),oe(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function qi(t,e,n){pe(P(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Co(t,e,n,r){const i=r.includes(".")?Io(n,r):()=>n[r];if(Z(t)){const s=e[t];D(s)&&lr(i,s)}else if(D(t))lr(i,t.bind(n));else if(J(t))if(P(t))t.forEach(s=>Co(s,e,n,r));else{const s=D(t.handler)?t.handler.bind(n):e[t.handler];D(s)&&lr(i,s,t)}}function fi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Pn(c,u,o,!0)),Pn(c,e,o)),J(e)&&s.set(e,c),c}function Pn(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Pn(t,s,n,!0),i&&i.forEach(o=>Pn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Pl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Pl={data:Gi,props:ut,emits:ut,methods:ut,computed:ut,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:ut,directives:ut,watch:Ml,provide:Gi,inject:Dl};function Gi(t,e){return e?t?function(){return te(D(t)?t.call(this,this):t,D(e)?e.call(this,this):e)}:e:t}function Dl(t,e){return ut(xr(t),xr(e))}function xr(t){if(P(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function se(t,e){return t?[...new Set([].concat(t,e))]:e}function ut(t,e){return t?te(te(Object.create(null),t),e):e}function Ml(t,e){if(!t)return e;if(!e)return t;const n=te(Object.create(null),t);for(const r in e)n[r]=se(t[r],e[r]);return n}function Nl(t,e,n,r=!1){const i={},s={};On(s,Gn,1),t.propsDefaults=Object.create(null),Ro(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:zc(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function xl(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=F(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let b=d[g];if(Wn(t.emitsOptions,b))continue;const E=e[b];if(c)if(L(s,b))E!==s[b]&&(s[b]=E,u=!0);else{const N=Lt(b);i[N]=Lr(c,a,N,E,t,!1)}else E!==s[b]&&(s[b]=E,u=!0)}}}else{Ro(t,e,i,s)&&(u=!0);let d;for(const g in a)(!e||!L(e,g)&&((d=Bt(g))===g||!L(e,d)))&&(c?n&&(n[g]!==void 0||n[d]!==void 0)&&(i[g]=Lr(c,a,g,void 0,t,!0)):delete i[g]);if(s!==a)for(const g in s)(!e||!L(e,g))&&(delete s[g],u=!0)}u&&Ve(t,"set","$attrs")}function Ro(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(In(c))continue;const u=e[c];let d;i&&L(i,d=Lt(c))?!s||!s.includes(d)?n[d]=u:(a||(a={}))[d]=u:Wn(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=F(n),u=a||W;for(let d=0;d<s.length;d++){const g=s[d];n[g]=Lr(i,c,g,u[g],t,!L(u,g))}}return o}function Lr(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=L(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&D(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(Ft(i),r=u[n]=c.call(null,e),It())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Bt(n))&&(r=!0))}return r}function Oo(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!D(t)){const d=g=>{c=!0;const[b,E]=Oo(g,e,!0);te(o,b),E&&a.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!s&&!c)return J(t)&&r.set(t,kt),kt;if(P(s))for(let d=0;d<s.length;d++){const g=Lt(s[d]);Ji(g)&&(o[g]=W)}else if(s)for(const d in s){const g=Lt(d);if(Ji(g)){const b=s[d],E=o[g]=P(b)||D(b)?{type:b}:Object.assign({},b);if(E){const N=Qi(Boolean,E.type),C=Qi(String,E.type);E[0]=N>-1,E[1]=C<0||N<C,(N>-1||L(E,"default"))&&a.push(g)}}}const u=[o,a];return J(t)&&r.set(t,u),u}function Ji(t){return t[0]!=="$"}function Yi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Xi(t,e){return Yi(t)===Yi(e)}function Qi(t,e){return P(e)?e.findIndex(n=>Xi(n,t)):D(e)&&Xi(e,t)?0:-1}const ko=t=>t[0]==="_"||t==="$stable",di=t=>P(t)?t.map(Re):[Re(t)],Ll=(t,e,n)=>{if(e._n)return e;const r=sl((...i)=>di(e(...i)),n);return r._c=!1,r},Po=(t,e,n)=>{const r=t._ctx;for(const i in t){if(ko(i))continue;const s=t[i];if(D(s))e[i]=Ll(i,s,r);else if(s!=null){const o=di(s);e[i]=()=>o}}},Do=(t,e)=>{const n=di(e);t.slots.default=()=>n},Fl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=F(e),On(e,"_",n)):Po(e,t.slots={})}else t.slots={},e&&Do(t,e);On(t.slots,Gn,1)},Ul=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=W;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(te(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Po(e,i)),o=e}else e&&(Do(t,e),o={default:1});if(s)for(const a in i)!ko(a)&&!(a in o)&&delete i[a]};function Mo(){return{app:null,config:{isNativeTag:cc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bl=0;function $l(t,e){return function(r,i=null){D(r)||(r=Object.assign({},r)),i!=null&&!J(i)&&(i=null);const s=Mo(),o=new Set;let a=!1;const c=s.app={_uid:Bl++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:du,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&D(u.install)?(o.add(u),u.install(c,...d)):D(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,g){if(!a){const b=yt(r,i);return b.appContext=s,d&&e?e(b,u):t(b,u,g),a=!0,c._container=u,u.__vue_app__=c,Jn(b.component)||b.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c}};return c}}function Fr(t,e,n,r,i=!1){if(P(t)){t.forEach((b,E)=>Fr(b,e&&(P(e)?e[E]:e),n,r,i));return}if(wn(r)&&!i)return;const s=r.shapeFlag&4?Jn(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,d=a.refs===W?a.refs={}:a.refs,g=a.setupState;if(u!=null&&u!==c&&(Z(u)?(d[u]=null,L(g,u)&&(g[u]=null)):oe(u)&&(u.value=null)),D(c))et(c,a,12,[o,d]);else{const b=Z(c),E=oe(c);if(b||E){const N=()=>{if(t.f){const C=b?L(g,c)?g[c]:d[c]:c.value;i?P(C)&&Xr(C,s):P(C)?C.includes(s)||C.push(s):b?(d[c]=[s],L(g,c)&&(g[c]=d[c])):(c.value=[s],t.k&&(d[t.k]=c.value))}else b?(d[c]=o,L(g,c)&&(g[c]=o)):E&&(c.value=o,t.k&&(d[t.k]=o))};o?(N.id=-1,ae(N,n)):N()}}}const ae=fl;function jl(t){return Hl(t)}function Hl(t,e){const n=gc();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:d,parentNode:g,nextSibling:b,setScopeId:E=we,insertStaticContent:N}=t,C=(l,f,h,m=null,p=null,I=null,w=!1,y=null,v=!!f.dynamicChildren)=>{if(l===f)return;l&&!ht(l,f)&&(m=dn(l),Ae(l,p,I,!0),l=null),f.patchFlag===-2&&(v=!1,f.dynamicChildren=null);const{type:_,ref:A,shapeFlag:T}=f;switch(_){case qn:z(l,f,h,m);break;case He:U(l,f,h,m);break;case dr:l==null&&re(f,h,m,w);break;case ye:Te(l,f,h,m,p,I,w,y,v);break;default:T&1?Q(l,f,h,m,p,I,w,y,v):T&6?Fe(l,f,h,m,p,I,w,y,v):(T&64||T&128)&&_.process(l,f,h,m,p,I,w,y,v,Ct)}A!=null&&p&&Fr(A,l&&l.ref,I,f||l,!f)},z=(l,f,h,m)=>{if(l==null)r(f.el=a(f.children),h,m);else{const p=f.el=l.el;f.children!==l.children&&u(p,f.children)}},U=(l,f,h,m)=>{l==null?r(f.el=c(f.children||""),h,m):f.el=l.el},re=(l,f,h,m)=>{[l.el,l.anchor]=N(l.children,f,h,m,l.el,l.anchor)},k=({el:l,anchor:f},h,m)=>{let p;for(;l&&l!==f;)p=b(l),r(l,h,m),l=p;r(f,h,m)},V=({el:l,anchor:f})=>{let h;for(;l&&l!==f;)h=b(l),i(l),l=h;i(f)},Q=(l,f,h,m,p,I,w,y,v)=>{w=w||f.type==="svg",l==null?Ee(f,h,m,p,I,w,y,v):q(l,f,p,I,w,y,v)},Ee=(l,f,h,m,p,I,w,y)=>{let v,_;const{type:A,props:T,shapeFlag:S,transition:O,dirs:x}=l;if(v=l.el=o(l.type,I,T&&T.is,T),S&8?d(v,l.children):S&16&&M(l.children,v,null,m,p,I&&A!=="foreignObject",w,y),x&&ct(l,null,m,"created"),me(v,l,l.scopeId,w,m),T){for(const B in T)B!=="value"&&!In(B)&&s(v,B,null,T[B],I,l.children,m,p,Ue);"value"in T&&s(v,"value",null,T.value),(_=T.onVnodeBeforeMount)&&Ce(_,m,l)}x&&ct(l,null,m,"beforeMount");const j=(!p||p&&!p.pendingBranch)&&O&&!O.persisted;j&&O.beforeEnter(v),r(v,f,h),((_=T&&T.onVnodeMounted)||j||x)&&ae(()=>{_&&Ce(_,m,l),j&&O.enter(v),x&&ct(l,null,m,"mounted")},p)},me=(l,f,h,m,p)=>{if(h&&E(l,h),m)for(let I=0;I<m.length;I++)E(l,m[I]);if(p){let I=p.subTree;if(f===I){const w=p.vnode;me(l,w,w.scopeId,w.slotScopeIds,p.parent)}}},M=(l,f,h,m,p,I,w,y,v=0)=>{for(let _=v;_<l.length;_++){const A=l[_]=y?Je(l[_]):Re(l[_]);C(null,A,f,h,m,p,I,w,y)}},q=(l,f,h,m,p,I,w)=>{const y=f.el=l.el;let{patchFlag:v,dynamicChildren:_,dirs:A}=f;v|=l.patchFlag&16;const T=l.props||W,S=f.props||W;let O;h&&lt(h,!1),(O=S.onVnodeBeforeUpdate)&&Ce(O,h,f,l),A&&ct(f,l,h,"beforeUpdate"),h&&lt(h,!0);const x=p&&f.type!=="foreignObject";if(_?K(l.dynamicChildren,_,y,h,m,x,I):w||$(l,f,y,null,h,m,x,I,!1),v>0){if(v&16)le(y,f,T,S,h,m,p);else if(v&2&&T.class!==S.class&&s(y,"class",null,S.class,p),v&4&&s(y,"style",T.style,S.style,p),v&8){const j=f.dynamicProps;for(let B=0;B<j.length;B++){const Y=j[B],_e=T[Y],Rt=S[Y];(Rt!==_e||Y==="value")&&s(y,Y,_e,Rt,p,l.children,h,m,Ue)}}v&1&&l.children!==f.children&&d(y,f.children)}else!w&&_==null&&le(y,f,T,S,h,m,p);((O=S.onVnodeUpdated)||A)&&ae(()=>{O&&Ce(O,h,f,l),A&&ct(f,l,h,"updated")},m)},K=(l,f,h,m,p,I,w)=>{for(let y=0;y<f.length;y++){const v=l[y],_=f[y],A=v.el&&(v.type===ye||!ht(v,_)||v.shapeFlag&70)?g(v.el):h;C(v,_,A,null,m,p,I,w,!0)}},le=(l,f,h,m,p,I,w)=>{if(h!==m){if(h!==W)for(const y in h)!In(y)&&!(y in m)&&s(l,y,h[y],null,w,f.children,p,I,Ue);for(const y in m){if(In(y))continue;const v=m[y],_=h[y];v!==_&&y!=="value"&&s(l,y,_,v,w,f.children,p,I,Ue)}"value"in m&&s(l,"value",h.value,m.value)}},Te=(l,f,h,m,p,I,w,y,v)=>{const _=f.el=l?l.el:a(""),A=f.anchor=l?l.anchor:a("");let{patchFlag:T,dynamicChildren:S,slotScopeIds:O}=f;O&&(y=y?y.concat(O):O),l==null?(r(_,h,m),r(A,h,m),M(f.children,h,A,p,I,w,y,v)):T>0&&T&64&&S&&l.dynamicChildren?(K(l.dynamicChildren,S,h,p,I,w,y),(f.key!=null||p&&f===p.subTree)&&No(l,f,!0)):$(l,f,h,A,p,I,w,y,v)},Fe=(l,f,h,m,p,I,w,y,v)=>{f.slotScopeIds=y,l==null?f.shapeFlag&512?p.ctx.activate(f,h,m,w,v):Vt(f,h,m,p,I,w,v):Oi(l,f,v)},Vt=(l,f,h,m,p,I,w)=>{const y=l.component=nu(l,m,p);if(zn(l)&&(y.ctx.renderer=Ct),iu(y),y.asyncDep){if(p&&p.registerDep(y,ie),!l.el){const v=y.subTree=yt(He);U(null,v,f,h)}return}ie(y,l,f,h,p,I,w)},Oi=(l,f,h)=>{const m=f.component=l.component;if(cl(l,f,h))if(m.asyncDep&&!m.asyncResolved){G(m,f,h);return}else m.next=f,tl(m.update),m.update();else f.el=l.el,m.vnode=f},ie=(l,f,h,m,p,I,w)=>{const y=()=>{if(l.isMounted){let{next:A,bu:T,u:S,parent:O,vnode:x}=l,j=A,B;lt(l,!1),A?(A.el=x.el,G(l,A,w)):A=x,T&&ar(T),(B=A.props&&A.props.onVnodeBeforeUpdate)&&Ce(B,O,A,x),lt(l,!0);const Y=cr(l),_e=l.subTree;l.subTree=Y,C(_e,Y,g(_e.el),dn(_e),l,p,I),A.el=Y.el,j===null&&ll(l,Y.el),S&&ae(S,p),(B=A.props&&A.props.onVnodeUpdated)&&ae(()=>Ce(B,O,A,x),p)}else{let A;const{el:T,props:S}=f,{bm:O,m:x,parent:j}=l,B=wn(f);if(lt(l,!1),O&&ar(O),!B&&(A=S&&S.onVnodeBeforeMount)&&Ce(A,j,f),lt(l,!0),T&&sr){const Y=()=>{l.subTree=cr(l),sr(T,l.subTree,l,p,null)};B?f.type.__asyncLoader().then(()=>!l.isUnmounted&&Y()):Y()}else{const Y=l.subTree=cr(l);C(null,Y,h,m,l,p,I),f.el=Y.el}if(x&&ae(x,p),!B&&(A=S&&S.onVnodeMounted)){const Y=f;ae(()=>Ce(A,j,Y),p)}(f.shapeFlag&256||j&&wn(j.vnode)&&j.vnode.shapeFlag&256)&&l.a&&ae(l.a,p),l.isMounted=!0,f=h=m=null}},v=l.effect=new ti(y,()=>ui(_),l.scope),_=l.update=()=>v.run();_.id=l.uid,lt(l,!0),_()},G=(l,f,h)=>{f.component=l;const m=l.vnode.props;l.vnode=f,l.next=null,xl(l,f.props,m,h),Ul(l,f.children,h),$t(),Vi(),jt()},$=(l,f,h,m,p,I,w,y,v=!1)=>{const _=l&&l.children,A=l?l.shapeFlag:0,T=f.children,{patchFlag:S,shapeFlag:O}=f;if(S>0){if(S&128){fn(_,T,h,m,p,I,w,y,v);return}else if(S&256){ot(_,T,h,m,p,I,w,y,v);return}}O&8?(A&16&&Ue(_,p,I),T!==_&&d(h,T)):A&16?O&16?fn(_,T,h,m,p,I,w,y,v):Ue(_,p,I,!0):(A&8&&d(h,""),O&16&&M(T,h,m,p,I,w,y,v))},ot=(l,f,h,m,p,I,w,y,v)=>{l=l||kt,f=f||kt;const _=l.length,A=f.length,T=Math.min(_,A);let S;for(S=0;S<T;S++){const O=f[S]=v?Je(f[S]):Re(f[S]);C(l[S],O,h,null,p,I,w,y,v)}_>A?Ue(l,p,I,!0,!1,T):M(f,h,m,p,I,w,y,v,T)},fn=(l,f,h,m,p,I,w,y,v)=>{let _=0;const A=f.length;let T=l.length-1,S=A-1;for(;_<=T&&_<=S;){const O=l[_],x=f[_]=v?Je(f[_]):Re(f[_]);if(ht(O,x))C(O,x,h,null,p,I,w,y,v);else break;_++}for(;_<=T&&_<=S;){const O=l[T],x=f[S]=v?Je(f[S]):Re(f[S]);if(ht(O,x))C(O,x,h,null,p,I,w,y,v);else break;T--,S--}if(_>T){if(_<=S){const O=S+1,x=O<A?f[O].el:m;for(;_<=S;)C(null,f[_]=v?Je(f[_]):Re(f[_]),h,x,p,I,w,y,v),_++}}else if(_>S)for(;_<=T;)Ae(l[_],p,I,!0),_++;else{const O=_,x=_,j=new Map;for(_=x;_<=S;_++){const ue=f[_]=v?Je(f[_]):Re(f[_]);ue.key!=null&&j.set(ue.key,_)}let B,Y=0;const _e=S-x+1;let Rt=!1,Di=0;const Wt=new Array(_e);for(_=0;_<_e;_++)Wt[_]=0;for(_=O;_<=T;_++){const ue=l[_];if(Y>=_e){Ae(ue,p,I,!0);continue}let Se;if(ue.key!=null)Se=j.get(ue.key);else for(B=x;B<=S;B++)if(Wt[B-x]===0&&ht(ue,f[B])){Se=B;break}Se===void 0?Ae(ue,p,I,!0):(Wt[Se-x]=_+1,Se>=Di?Di=Se:Rt=!0,C(ue,f[Se],h,null,p,I,w,y,v),Y++)}const Mi=Rt?Vl(Wt):kt;for(B=Mi.length-1,_=_e-1;_>=0;_--){const ue=x+_,Se=f[ue],Ni=ue+1<A?f[ue+1].el:m;Wt[_]===0?C(null,Se,h,Ni,p,I,w,y,v):Rt&&(B<0||_!==Mi[B]?at(Se,h,Ni,2):B--)}}},at=(l,f,h,m,p=null)=>{const{el:I,type:w,transition:y,children:v,shapeFlag:_}=l;if(_&6){at(l.component.subTree,f,h,m);return}if(_&128){l.suspense.move(f,h,m);return}if(_&64){w.move(l,f,h,Ct);return}if(w===ye){r(I,f,h);for(let T=0;T<v.length;T++)at(v[T],f,h,m);r(l.anchor,f,h);return}if(w===dr){k(l,f,h);return}if(m!==2&&_&1&&y)if(m===0)y.beforeEnter(I),r(I,f,h),ae(()=>y.enter(I),p);else{const{leave:T,delayLeave:S,afterLeave:O}=y,x=()=>r(I,f,h),j=()=>{T(I,()=>{x(),O&&O()})};S?S(I,x,j):j()}else r(I,f,h)},Ae=(l,f,h,m=!1,p=!1)=>{const{type:I,props:w,ref:y,children:v,dynamicChildren:_,shapeFlag:A,patchFlag:T,dirs:S}=l;if(y!=null&&Fr(y,null,h,l,!0),A&256){f.ctx.deactivate(l);return}const O=A&1&&S,x=!wn(l);let j;if(x&&(j=w&&w.onVnodeBeforeUnmount)&&Ce(j,f,l),A&6)ec(l.component,h,m);else{if(A&128){l.suspense.unmount(h,m);return}O&&ct(l,null,f,"beforeUnmount"),A&64?l.type.remove(l,f,h,p,Ct,m):_&&(I!==ye||T>0&&T&64)?Ue(_,f,h,!1,!0):(I===ye&&T&384||!p&&A&16)&&Ue(v,f,h),m&&ki(l)}(x&&(j=w&&w.onVnodeUnmounted)||O)&&ae(()=>{j&&Ce(j,f,l),O&&ct(l,null,f,"unmounted")},h)},ki=l=>{const{type:f,el:h,anchor:m,transition:p}=l;if(f===ye){Za(h,m);return}if(f===dr){V(l);return}const I=()=>{i(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(l.shapeFlag&1&&p&&!p.persisted){const{leave:w,delayLeave:y}=p,v=()=>w(h,I);y?y(l.el,I,v):v()}else I()},Za=(l,f)=>{let h;for(;l!==f;)h=b(l),i(l),l=h;i(f)},ec=(l,f,h)=>{const{bum:m,scope:p,update:I,subTree:w,um:y}=l;m&&ar(m),p.stop(),I&&(I.active=!1,Ae(w,l,f,h)),y&&ae(y,f),ae(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Ue=(l,f,h,m=!1,p=!1,I=0)=>{for(let w=I;w<l.length;w++)Ae(l[w],f,h,m,p)},dn=l=>l.shapeFlag&6?dn(l.component.subTree):l.shapeFlag&128?l.suspense.next():b(l.anchor||l.el),Pi=(l,f,h)=>{l==null?f._vnode&&Ae(f._vnode,null,null,!0):C(f._vnode||null,l,f,null,null,null,h),Vi(),go(),f._vnode=l},Ct={p:C,um:Ae,m:at,r:ki,mt:Vt,mc:M,pc:$,pbc:K,n:dn,o:t};let ir,sr;return e&&([ir,sr]=e(Ct)),{render:Pi,hydrate:ir,createApp:$l(Pi,ir)}}function lt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function No(t,e,n=!1){const r=t.children,i=e.children;if(P(r)&&P(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Je(i[s]),a.el=o.el),n||No(o,a)),a.type===qn&&(a.el=o.el)}}function Vl(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Wl=t=>t.__isTeleport,ye=Symbol(void 0),qn=Symbol(void 0),He=Symbol(void 0),dr=Symbol(void 0),Gt=[];let ve=null;function zl(t=!1){Gt.push(ve=t?null:[])}function Kl(){Gt.pop(),ve=Gt[Gt.length-1]||null}let en=1;function Zi(t){en+=t}function ql(t){return t.dynamicChildren=en>0?ve||kt:null,Kl(),en>0&&ve&&ve.push(t),t}function Gl(t,e,n,r,i,s){return ql(Ot(t,e,n,r,i,s,!0))}function Jl(t){return t?t.__v_isVNode===!0:!1}function ht(t,e){return t.type===e.type&&t.key===e.key}const Gn="__vInternal",xo=({key:t})=>t??null,En=({ref:t,ref_key:e,ref_for:n})=>t!=null?Z(t)||oe(t)||D(t)?{i:he,r:t,k:e,f:!!n}:t:null;function Ot(t,e=null,n=null,r=0,i=null,s=t===ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xo(e),ref:e&&En(e),scopeId:bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:he};return a?(hi(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Z(n)?8:16),en>0&&!o&&ve&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&ve.push(c),c}const yt=Yl;function Yl(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Cl)&&(t=He),Jl(t)){const a=it(t,e,!0);return n&&hi(a,n),en>0&&!s&&ve&&(a.shapeFlag&6?ve[ve.indexOf(t)]=a:ve.push(a)),a.patchFlag|=-2,a}if(cu(t)&&(t=t.__vccOpts),e){e=Xl(e);let{class:a,style:c}=e;a&&!Z(a)&&(e.class=Jr(a)),J(c)&&(co(c)&&!P(c)&&(c=te({},c)),e.style=Gr(c))}const o=Z(t)?1:ul(t)?128:Wl(t)?64:J(t)?4:D(t)?2:0;return Ot(t,e,n,r,i,o,s,!0)}function Xl(t){return t?co(t)||Gn in t?te({},t):t:null}function it(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Zl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&xo(a),ref:e&&e.ref?n&&i?P(i)?i.concat(En(e)):[i,En(e)]:En(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ye?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&it(t.ssContent),ssFallback:t.ssFallback&&it(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ql(t=" ",e=0){return yt(qn,null,t,e)}function Re(t){return t==null||typeof t=="boolean"?yt(He):P(t)?yt(ye,null,t.slice()):typeof t=="object"?Je(t):yt(qn,null,String(t))}function Je(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:it(t)}function hi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(P(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),hi(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Gn in e)?e._ctx=he:i===3&&he&&(he.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else D(e)?(e={default:e,_ctx:he},n=32):(e=String(e),r&64?(n=16,e=[Ql(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Jr([e.class,r.class]));else if(i==="style")e.style=Gr([e.style,r.style]);else if(Bn(i)){const s=e[i],o=r[i];o&&s!==o&&!(P(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Ce(t,e,n,r=null){pe(t,e,7,[n,r])}const eu=Mo();let tu=0;function nu(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||eu,s={uid:tu++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new mc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oo(r,i),emitsOptions:_o(r,i),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=il.bind(null,s),t.ce&&t.ce(s),s}let X=null;const ru=()=>X||he,Ft=t=>{X=t,t.scope.on()},It=()=>{X&&X.scope.off(),X=null};function Lo(t){return t.vnode.shapeFlag&4}let tn=!1;function iu(t,e=!1){tn=e;const{props:n,children:r}=t.vnode,i=Lo(t);Nl(t,n,i,e),Fl(t,r);const s=i?su(t,e):void 0;return tn=!1,s}function su(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=lo(new Proxy(t.ctx,Rl));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?au(t):null;Ft(t),$t();const s=et(r,t,0,[t.props,i]);if(jt(),It(),qs(s)){if(s.then(It,It),e)return s.then(o=>{es(t,o,e)}).catch(o=>{Vn(o,t,0)});t.asyncDep=s}else es(t,s,e)}else Fo(t,e)}function es(t,e,n){D(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:J(e)&&(t.setupState=uo(e)),Fo(t,n)}let ts;function Fo(t,e,n){const r=t.type;if(!t.render){if(!e&&ts&&!r.render){const i=r.template||fi(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=te(te({isCustomElement:s,delimiters:a},o),c);r.render=ts(i,u)}}t.render=r.render||we}Ft(t),$t(),Ol(t),jt(),It()}function ou(t){return new Proxy(t.attrs,{get(e,n){return ce(t,"get","$attrs"),e[n]}})}function au(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=ou(t))},slots:t.slots,emit:t.emit,expose:e}}function Jn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(uo(lo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qt)return qt[n](t)},has(e,n){return n in e||n in qt}}))}function cu(t){return D(t)&&"__vccOpts"in t}const lu=(t,e)=>Xc(t,e,tn),uu=Symbol(""),fu=()=>vn(uu),du="3.2.47",hu="http://www.w3.org/2000/svg",pt=typeof document<"u"?document:null,ns=pt&&pt.createElement("template"),pu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?pt.createElementNS(hu,t):pt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>pt.createTextNode(t),createComment:t=>pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{ns.innerHTML=r?`<svg>${t}</svg>`:t;const a=ns.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function gu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mu(t,e,n){const r=t.style,i=Z(n);if(n&&!i){if(e&&!Z(e))for(const s in e)n[s]==null&&Ur(r,s,"");for(const s in n)Ur(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const rs=/\s*!important$/;function Ur(t,e,n){if(P(n))n.forEach(r=>Ur(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_u(t,e);rs.test(n)?t.setProperty(Bt(r),n.replace(rs,""),"important"):t[r]=n}}const is=["Webkit","Moz","ms"],hr={};function _u(t,e){const n=hr[e];if(n)return n;let r=Lt(e);if(r!=="filter"&&r in t)return hr[e]=r;r=Ys(r);for(let i=0;i<is.length;i++){const s=is[i]+r;if(s in t)return hr[e]=s}return e}const ss="http://www.w3.org/1999/xlink";function bu(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ss,e.slice(6,e.length)):t.setAttributeNS(ss,e,n);else{const s=oc(e);n==null||s&&!Ws(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function yu(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ws(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Iu(t,e,n,r){t.addEventListener(e,n,r)}function vu(t,e,n,r){t.removeEventListener(e,n,r)}function wu(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=Eu(e);if(r){const u=s[e]=Su(r,i);Iu(t,a,u,c)}else o&&(vu(t,a,o,c),s[e]=void 0)}}const os=/(?:Once|Passive|Capture)$/;function Eu(t){let e;if(os.test(t)){e={};let r;for(;r=t.match(os);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bt(t.slice(2)),e]}let pr=0;const Tu=Promise.resolve(),Au=()=>pr||(Tu.then(()=>pr=0),pr=Date.now());function Su(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pe(Cu(r,n.value),e,5,[r])};return n.value=t,n.attached=Au(),n}function Cu(t,e){if(P(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const as=/^on[a-z]/,Ru=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?gu(t,r,i):e==="style"?mu(t,n,r):Bn(e)?Yr(e)||wu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ou(t,e,r,i))?yu(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bu(t,e,r,i))};function Ou(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&as.test(e)&&D(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||as.test(e)&&Z(n)?!1:e in t}const ku={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ml.props;const cs={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):zt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),zt(t,!0),r.enter(t)):r.leave(t,()=>{zt(t,!1)}):zt(t,e))},beforeUnmount(t,{value:e}){zt(t,e)}};function zt(t,e){t.style.display=e?t._vod:"none"}const Pu=te({patchProp:Ru},pu);let ls;function Du(){return ls||(ls=jl(Pu))}const Mu=(...t)=>{const e=Du().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Nu(r);if(!i)return;const s=e._component;!D(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Nu(t){return Z(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xu=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=s>>2,g=(s&3)<<4|a>>4;let b=(a&15)<<2|u>>6,E=u&63;c||(E=64,o||(b=64)),r.push(n[d],n[g],n[b],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||g==null)throw new Lu;const b=s<<2|a>>4;if(r.push(b),u!==64){const E=a<<4&240|u>>2;if(r.push(E),g!==64){const N=u<<6&192|g;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fu=function(t){const e=Uo(t);return Bo.encodeByteArray(e,!0)},$o=function(t){return Fu(t).replace(/\./g,"")},jo=function(t){try{return Bo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=()=>Uu().__FIREBASE_DEFAULTS__,$u=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ju=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jo(t[1]);return e&&JSON.parse(e)},pi=()=>{try{return Bu()||$u()||ju()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hu=t=>{var e,n;return(n=(e=pi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vu=()=>{var t;return(t=pi())===null||t===void 0?void 0:t.config},Ho=t=>{var e;return(e=pi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Vo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ku(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qu(){const t=ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wo(){try{return typeof indexedDB=="object"}catch{return!1}}function zo(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Gu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="FirebaseError";class Le extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ju,Object.setPrototypeOf(this,Le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,St.prototype.create)}}class St{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Yu(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Le(i,a,r)}}function Yu(t,e){return t.replace(Xu,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Xu=/\{\$([^}]+)}/g;function Qu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(us(s)&&us(o)){if(!nn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function us(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zu(t,e){const n=new ef(t,e);return n.subscribe.bind(n)}class ef{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tf(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gr),i.error===void 0&&(i.error=gr),i.complete===void 0&&(i.complete=gr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=1e3,rf=2,sf=4*60*60*1e3,of=.5;function fs(t,e=nf,n=rf){const r=e*Math.pow(n,t),i=Math.round(of*r*(Math.random()-.5)*2);return Math.min(sf,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return t&&t._delegate?t._delegate:t}class Ne{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lf(e))try{this.getOrInitializeService({instanceIdentifier:ft})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ft){return this.instances.has(e)}getOptions(e=ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ft){return this.component?this.component.multipleInstances?e:ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cf(t){return t===ft?void 0:t}function lf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new af(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const ff={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},df=H.INFO,hf={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},pf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hf[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gi{constructor(e){this.name=e,this._logLevel=df,this._logHandler=pf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ff[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const gf=(t,e)=>e.some(n=>t instanceof n);let ds,hs;function mf(){return ds||(ds=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _f(){return hs||(hs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ko=new WeakMap,Br=new WeakMap,qo=new WeakMap,mr=new WeakMap,mi=new WeakMap;function bf(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ko.set(n,t)}).catch(()=>{}),mi.set(e,t),e}function yf(t){if(Br.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Br.set(t,e)}let $r={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Br.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function If(t){$r=t($r)}function vf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_r(this),e,...n);return qo.set(r,e.sort?e.sort():[e]),tt(r)}:_f().includes(t)?function(...e){return t.apply(_r(this),e),tt(Ko.get(this))}:function(...e){return tt(t.apply(_r(this),e))}}function wf(t){return typeof t=="function"?vf(t):(t instanceof IDBTransaction&&yf(t),gf(t,mf())?new Proxy(t,$r):t)}function tt(t){if(t instanceof IDBRequest)return bf(t);if(mr.has(t))return mr.get(t);const e=wf(t);return e!==t&&(mr.set(t,e),mi.set(e,t)),e}const _r=t=>mi.get(t);function Go(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=tt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(tt(o.result),c.oldVersion,c.newVersion,tt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Ef=["get","getKey","getAll","getAllKeys","count"],Tf=["put","add","delete","clear"],br=new Map;function ps(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(br.get(e))return br.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Tf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ef.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return br.set(e,s),s}If(t=>({...t,get:(e,n,r)=>ps(e,n)||t.get(e,n,r),has:(e,n)=>!!ps(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jr="@firebase/app",gs="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new gi("@firebase/app"),Cf="@firebase/app-compat",Rf="@firebase/analytics-compat",Of="@firebase/analytics",kf="@firebase/app-check-compat",Pf="@firebase/app-check",Df="@firebase/auth",Mf="@firebase/auth-compat",Nf="@firebase/database",xf="@firebase/database-compat",Lf="@firebase/functions",Ff="@firebase/functions-compat",Uf="@firebase/installations",Bf="@firebase/installations-compat",$f="@firebase/messaging",jf="@firebase/messaging-compat",Hf="@firebase/performance",Vf="@firebase/performance-compat",Wf="@firebase/remote-config",zf="@firebase/remote-config-compat",Kf="@firebase/storage",qf="@firebase/storage-compat",Gf="@firebase/firestore",Jf="@firebase/firestore-compat",Yf="firebase",Xf="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]",Qf={[jr]:"fire-core",[Cf]:"fire-core-compat",[Of]:"fire-analytics",[Rf]:"fire-analytics-compat",[Pf]:"fire-app-check",[kf]:"fire-app-check-compat",[Df]:"fire-auth",[Mf]:"fire-auth-compat",[Nf]:"fire-rtdb",[xf]:"fire-rtdb-compat",[Lf]:"fire-fn",[Ff]:"fire-fn-compat",[Uf]:"fire-iid",[Bf]:"fire-iid-compat",[$f]:"fire-fcm",[jf]:"fire-fcm-compat",[Hf]:"fire-perf",[Vf]:"fire-perf-compat",[Wf]:"fire-rc",[zf]:"fire-rc-compat",[Kf]:"fire-gcs",[qf]:"fire-gcs-compat",[Gf]:"fire-fst",[Jf]:"fire-fst-compat","fire-js":"fire-js",[Yf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Map,Vr=new Map;function Zf(t,e){try{t.container.addComponent(e)}catch(n){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function We(t){const e=t.name;if(Vr.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;Vr.set(e,t);for(const n of Dn.values())Zf(n,t);return!0}function Ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nt=new St("app","Firebase",ed);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=Xf;function Jo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nt.create("bad-app-name",{appName:String(i)});if(n||(n=Vu()),!n)throw nt.create("no-options");const s=Dn.get(i);if(s){if(nn(n,s.options)&&nn(r,s.config))return s;throw nt.create("duplicate-app",{appName:i})}const o=new uf(i);for(const c of Vr.values())o.addComponent(c);const a=new td(n,r,o);return Dn.set(i,a),a}function Yo(t=Hr){const e=Dn.get(t);if(!e&&t===Hr)return Jo();if(!e)throw nt.create("no-app",{appName:t});return e}function Pe(t,e,n){var r;let i=(r=Qf[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(a.join(" "));return}We(new Ne(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="firebase-heartbeat-database",rd=1,rn="firebase-heartbeat-store";let yr=null;function Xo(){return yr||(yr=Go(nd,rd,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rn)}}}).catch(t=>{throw nt.create("idb-open",{originalErrorMessage:t.message})})),yr}async function id(t){try{return(await Xo()).transaction(rn).objectStore(rn).get(Qo(t))}catch(e){if(e instanceof Le)wt.warn(e.message);else{const n=nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wt.warn(n.message)}}}async function ms(t,e){try{const r=(await Xo()).transaction(rn,"readwrite");return await r.objectStore(rn).put(e,Qo(t)),r.done}catch(n){if(n instanceof Le)wt.warn(n.message);else{const r=nt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wt.warn(r.message)}}}function Qo(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=1024,od=30*24*60*60*1e3;class ad{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ld(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_s();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=od}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_s(),{heartbeatsToSend:n,unsentEntries:r}=cd(this._heartbeatsCache.heartbeats),i=$o(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _s(){return new Date().toISOString().substring(0,10)}function cd(t,e=sd){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bs(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bs(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ld{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wo()?zo().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await id(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ms(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ms(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bs(t){return $o(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t){We(new Ne("platform-logger",e=>new Af(e),"PRIVATE")),We(new Ne("heartbeat",e=>new ad(e),"PRIVATE")),Pe(jr,gs,t),Pe(jr,gs,"esm2017"),Pe("fire-js","")}ud("");function _i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Zo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fd=Zo,ea=new St("auth","Firebase",Zo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new gi("@firebase/auth");function Tn(t,...e){ys.logLevel<=H.ERROR&&ys.error(`Auth (${Yn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,...e){throw bi(t,...e)}function De(t,...e){return bi(t,...e)}function ta(t,e,n){const r=Object.assign(Object.assign({},fd()),{[e]:n});return new St("auth","Firebase",r).create(e,{appName:t.name})}function dd(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xe(t,"argument-error"),ta(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ea.create(t,...e)}function R(t,e,...n){if(!t)throw bi(e,...n)}function $e(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tn(e),new Error(e)}function ze(t,e){t||$e(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Map;function je(t){ze(t instanceof Function,"Expected a class definition");let e=Is.get(t);return e?(ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Is.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t,e){const n=Ht(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(nn(s,e??{}))return i;xe(i,"already-initialized")}return n.initialize({options:e})}function pd(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gd(){return vs()==="http:"||vs()==="https:"}function vs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gd()||Vo()||"connection"in navigator)?navigator.onLine:!0}function _d(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ze(n>e,"Short delay should be less than long delay!"),this.isMobile=zu()||Ku()}get(){return md()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e){ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new cn(3e4,6e4);function Id(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,i={}){return ra(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=an(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),na.fetch()(ia(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ra(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bd),e);try{const i=new wd(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw yn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw yn(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ta(t,d,u);xe(t,d)}}catch(i){if(i instanceof Le)throw i;xe(t,"internal-error",{message:String(i)})}}async function vd(t,e,n,r,i={}){const s=await Xn(t,e,n,r,i);return"mfaPendingCredential"in s&&xe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ia(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yi(t.config,i):`${t.config.apiScheme}://${i}`}class wd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(De(this.auth,"network-request-failed")),yd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=De(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ed(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function Td(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ad(t,e=!1){const n=st(t),r=await n.getIdToken(e),i=Ii(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jt(Ir(i.auth_time)),issuedAtTime:Jt(Ir(i.iat)),expirationTime:Jt(Ir(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ir(t){return Number(t)*1e3}function Ii(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tn("JWT malformed, contained fewer than 3 sections"),null;try{const i=jo(n);return i?JSON.parse(i):(Tn("Failed to decode base64 JWT payload"),null)}catch(i){return Tn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sd(t){const e=Ii(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Le&&Cd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Cd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jt(this.lastLoginAt),this.creationTime=Jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(t){var e;const n=t.auth,r=await t.getIdToken(),i=await sn(t,Td(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Pd(s.providerUserInfo):[],a=kd(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sa(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function Od(t){const e=st(t);await Mn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kd(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Pd(t){return t.map(e=>{var{providerId:n}=e,r=_i(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(t,e){const n=await ra(t,{},async()=>{const r=an({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ia(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",na.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Dd(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new on;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new on,this.toJSON())}_performRefresh(){return $e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await sn(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ad(this,e)}reload(){return Od(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sn(this,Ed(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,d;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,b=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,z=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,U=(u=n.createdAt)!==null&&u!==void 0?u:void 0,re=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:k,emailVerified:V,isAnonymous:Q,providerData:Ee,stsTokenManager:me}=n;R(k&&me,e,"internal-error");const M=on.fromJSON(this.name,me);R(typeof k=="string",e,"internal-error"),Ge(g,e.name),Ge(b,e.name),R(typeof V=="boolean",e,"internal-error"),R(typeof Q=="boolean",e,"internal-error"),Ge(E,e.name),Ge(N,e.name),Ge(C,e.name),Ge(z,e.name),Ge(U,e.name),Ge(re,e.name);const q=new vt({uid:k,auth:e,email:b,emailVerified:V,displayName:g,isAnonymous:Q,photoURL:N,phoneNumber:E,tenantId:C,stsTokenManager:M,createdAt:U,lastLoginAt:re});return Ee&&Array.isArray(Ee)&&(q.providerData=Ee.map(K=>Object.assign({},K))),z&&(q._redirectEventId=z),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new on;i.updateFromServerResponse(n);const s=new vt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mn(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oa.type="NONE";const ws=oa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e,n){return`firebase:${t}:${e}:${n}`}class Nt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=An(this.userKey,i.apiKey,s),this.fullPersistenceKey=An("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Nt(je(ws),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||je(ws);const o=An(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const g=vt._fromJSON(e,d);u!==s&&(a=g),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Nt(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Nt(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(la(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fa(e))return"Blackberry";if(da(e))return"Webos";if(vi(e))return"Safari";if((e.includes("chrome/")||ca(e))&&!e.includes("edge/"))return"Chrome";if(ua(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aa(t=ne()){return/firefox\//i.test(t)}function vi(t=ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ca(t=ne()){return/crios\//i.test(t)}function la(t=ne()){return/iemobile/i.test(t)}function ua(t=ne()){return/android/i.test(t)}function fa(t=ne()){return/blackberry/i.test(t)}function da(t=ne()){return/webos/i.test(t)}function Qn(t=ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Md(t=ne()){var e;return Qn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Nd(){return qu()&&document.documentMode===10}function ha(t=ne()){return Qn(t)||ua(t)||da(t)||fa(t)||/windows phone/i.test(t)||la(t)}function xd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t,e=[]){let n;switch(t){case"Browser":n=Es(ne());break;case"Worker":n=`${Es(ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ts(this),this.idTokenSubscription=new Ts(this),this.beforeStateQueue=new Ld(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ea,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=je(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Nt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_d()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?st(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(je(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new St("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&je(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await Nt.create(this,[je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Zn(t){return st(t)}class Ts{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zu(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ud(t,e,n){const r=Zn(t);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ga(e),{host:o,port:a}=Bd(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$d()}function ga(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bd(t){const e=ga(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:As(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:As(o)}}}function As(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $d(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $e("not implemented")}_getIdTokenResponse(e){return $e("not implemented")}_linkToIdToken(e,n){return $e("not implemented")}_getReauthenticationResolver(e){return $e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t,e){return vd(t,"POST","/v1/accounts:signInWithIdp",Id(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="http://localhost";class Et extends ma{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_i(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Et(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xt(e,n)}buildRequest(){const e={requestUri:jd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=an(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends wi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends ln{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch{return null}}}Ye.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ye.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends ln{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Et._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xe.credential(n,r)}catch{return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com";Xe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends ln{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ke.credential(e.oauthAccessToken)}catch{return null}}}ke.GITHUB_SIGN_IN_METHOD="github.com";ke.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends ln{constructor(){super("twitter.com")}static credential(e,n){return Et._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qe.credential(n,r)}catch{return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com";Qe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vt._fromIdTokenResponse(e,r,i),o=Ss(r);return new Ut({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ss(r);return new Ut({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ss(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Le{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nn(e,n,r,i)}}function _a(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nn._fromErrorAndOperation(t,s,e,r):s})}async function Hd(t,e,n=!1){const r=await sn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ut._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vd(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await sn(t,_a(r,i,e,t),n);R(s.idToken,r,"internal-error");const o=Ii(s.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(t.uid===a,r,"user-mismatch"),Ut._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(t,e,n=!1){const r="signIn",i=await _a(t,r,e),s=await Ut._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function zd(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function Kd(t,e,n){return st(t).beforeAuthStateChanged(e,n)}const xn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xn,"1"),this.storage.removeItem(xn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(){const t=ne();return vi(t)||Qn(t)}const Gd=1e3,Jd=10;class ya extends ba{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qd()&&xd(),this.fallbackToPolling=ha(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Nd()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jd):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Gd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ya.type="LOCAL";const Yd=ya;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends ba{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ia.type="SESSION";const va=Ia;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new er(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await Xd(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}er.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ei("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const b=g;if(b.data.eventId===u)switch(b.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(b.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return window}function Zd(t){Me().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function eh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function th(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nh(){return wa()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="firebaseLocalStorageDb",rh=1,Ln="firebaseLocalStorage",Ta="fbase_key";class un{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tr(t,e){return t.transaction([Ln],e?"readwrite":"readonly").objectStore(Ln)}function ih(){const t=indexedDB.deleteDatabase(Ea);return new un(t).toPromise()}function zr(){const t=indexedDB.open(Ea,rh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ln,{keyPath:Ta})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ln)?e(r):(r.close(),await ih(),e(await zr()))})})}async function Cs(t,e,n){const r=tr(t,!0).put({[Ta]:e,value:n});return new un(r).toPromise()}async function sh(t,e){const n=tr(t,!1).get(e),r=await new un(n).toPromise();return r===void 0?null:r.value}function Rs(t,e){const n=tr(t,!0).delete(e);return new un(n).toPromise()}const oh=800,ah=3;class Aa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ah)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=er._getInstance(nh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eh(),!this.activeServiceWorker)return;this.sender=new Qd(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||th()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zr();return await Cs(e,xn,"1"),await Rs(e,xn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cs(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rs(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tr(i,!1).getAll();return new un(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Aa.type="LOCAL";const ch=Aa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function uh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=De("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lh().appendChild(r)})}function fh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new cn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t,e){return e?je(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends ma{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dh(t){return Wd(t.auth,new Ti(t),t.bypassAuthState)}function hh(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),Vd(n,new Ti(t),t.bypassAuthState)}async function ph(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),Hd(n,new Ti(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dh;case"linkViaPopup":case"linkViaRedirect":return ph;case"reauthViaPopup":case"reauthViaRedirect":return hh;default:xe(this.auth,"internal-error")}}resolve(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new cn(2e3,1e4);async function mh(t,e,n){const r=Zn(t);dd(t,e,wi);const i=Sa(r,n);return new mt(r,"signInViaPopup",e,i).executeNotNull()}class mt extends Ca{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mt.currentPopupAction&&mt.currentPopupAction.cancel(),mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){ze(this.filter.length===1,"Popup operations only handle one event");const e=Ei();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(De(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(De(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(De(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,gh.get())};e()}}mt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="pendingRedirect",Sn=new Map;class bh extends Ca{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sn.get(this.auth._key());if(!e){try{const r=await yh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sn.set(this.auth._key(),e)}return this.bypassAuthState||Sn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yh(t,e){const n=wh(e),r=vh(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ih(t,e){Sn.set(t._key(),e)}function vh(t){return je(t._redirectPersistence)}function wh(t){return An(_h,t.config.apiKey,t.name)}async function Eh(t,e,n=!1){const r=Zn(t),i=Sa(r,e),o=await new bh(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=10*60*1e3;class Ah{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ra(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(De(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Th&&this.cachedEventUids.clear(),this.cachedEventUids.has(Os(e))}saveEventToCache(e){this.cachedEventUids.add(Os(e)),this.lastProcessedEventTime=Date.now()}}function Os(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ra({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ra(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ch(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oh=/^https?/;async function kh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ch(t);for(const n of e)try{if(Ph(n))return}catch{}xe(t,"unauthorized-domain")}function Ph(t){const e=Wr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Oh.test(n))return!1;if(Rh.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new cn(3e4,6e4);function ks(){const t=Me().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mh(t){return new Promise((e,n)=>{var r,i,s;function o(){ks(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ks(),n(De(t,"network-request-failed"))},timeout:Dh.get()})}if(!((i=(r=Me().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Me().gapi)===null||s===void 0)&&s.load)o();else{const a=fh("iframefcb");return Me()[a]=()=>{gapi.load?o():n(De(t,"network-request-failed"))},uh(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Cn=null,e})}let Cn=null;function Nh(t){return Cn=Cn||Mh(t),Cn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=new cn(5e3,15e3),Lh="__/auth/iframe",Fh="emulator/auth/iframe",Uh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $h(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yi(e,Fh):`https://${t.config.authDomain}/${Lh}`,r={apiKey:e.apiKey,appName:t.name,v:Yn},i=Bh.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${an(r).slice(1)}`}async function jh(t){const e=await Nh(t),n=Me().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:$h(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uh,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=De(t,"network-request-failed"),a=Me().setTimeout(()=>{s(o)},xh.get());function c(){Me().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vh=500,Wh=600,zh="_blank",Kh="http://localhost";class Ps{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qh(t,e,n,r=Vh,i=Wh){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Hh),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ne().toLowerCase();n&&(a=ca(u)?zh:n),aa(u)&&(e=e||Kh,c.scrollbars="yes");const d=Object.entries(c).reduce((b,[E,N])=>`${b}${E}=${N},`,"");if(Md(u)&&a!=="_self")return Gh(e||"",a),new Ps(null);const g=window.open(e||"",a,d);R(g,t,"popup-blocked");try{g.focus()}catch{}return new Ps(g)}function Gh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="__/auth/handler",Yh="emulator/auth/handler";function Ds(t,e,n,r,i,s){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yn,eventId:i};if(e instanceof wi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof ln){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Xh(t)}?${an(a).slice(1)}`}function Xh({config:t}){return t.emulator?yi(t,Yh):`https://${t.authDomain}/${Jh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="webStorageSupport";class Qh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=va,this._completeRedirectFn=Eh,this._overrideRedirectResult=Ih}async _openPopup(e,n,r,i){var s;ze((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Ds(e,n,r,Wr(),i);return qh(e,o,Ei())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Zd(Ds(e,n,r,Wr(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ze(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jh(e),r=new Ah(e);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vr,{type:vr},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vr];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ha()||vi()||Qn()}}const Zh=Qh;var Ms="@firebase/auth",Ns="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function np(t){We(new Ne("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{R(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),R(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pa(t)},d=new Fd(a,c,u);return pd(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),We(new Ne("auth-internal",e=>{const n=Zn(e.getProvider("auth").getImmediate());return(r=>new ep(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(Ms,Ns,tp(t)),Pe(Ms,Ns,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=5*60,ip=Ho("authIdTokenMaxAge")||rp;let xs=null;const sp=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ip)return;const i=n==null?void 0:n.token;xs!==i&&(xs=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function op(t=Yo()){const e=Ht(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hd(t,{popupRedirectResolver:Zh,persistence:[ch,Yd,va]}),r=Ho("authTokenSyncURL");if(r){const s=sp(r);Kd(n,s,()=>s(n.currentUser)),zd(n,o=>s(o))}const i=Hu("auth");return i&&Ud(n,`http://${i}`),n}np("Browser");var ap="firebase",cp="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(ap,cp,"app");const Oa="@firebase/installations",Ai="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=1e4,Pa=`w:${Ai}`,Da="FIS_v2",lp="https://firebaseinstallations.googleapis.com/v1",up=60*60*1e3,fp="installations",dp="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Tt=new St(fp,dp,hp);function Ma(t){return t instanceof Le&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na({projectId:t}){return`${lp}/projects/${t}/installations`}function xa(t){return{token:t.token,requestStatus:2,expiresIn:gp(t.expiresIn),creationTime:Date.now()}}async function La(t,e){const r=(await e.json()).error;return Tt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Fa({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function pp(t,{refreshToken:e}){const n=Fa(t);return n.append("Authorization",mp(e)),n}async function Ua(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gp(t){return Number(t.replace("s","000"))}function mp(t){return`${Da} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Na(t),i=Fa(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Da,appId:t.appId,sdkVersion:Pa},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ua(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:xa(u.authToken)}}else throw await La("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=/^[cdef][\w-]{21}$/,Kr="";function Ip(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=vp(t);return yp.test(n)?n:Kr}catch{return Kr}}function vp(t){return bp(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Map;function ja(t,e){const n=nr(t);Ha(n,e),wp(n,e)}function Ha(t,e){const n=$a.get(t);if(n)for(const r of n)r(e)}function wp(t,e){const n=Ep();n&&n.postMessage({key:t,fid:e}),Tp()}let _t=null;function Ep(){return!_t&&"BroadcastChannel"in self&&(_t=new BroadcastChannel("[Firebase] FID Change"),_t.onmessage=t=>{Ha(t.data.key,t.data.fid)}),_t}function Tp(){$a.size===0&&_t&&(_t.close(),_t=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="firebase-installations-database",Sp=1,At="firebase-installations-store";let wr=null;function Si(){return wr||(wr=Go(Ap,Sp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(At)}}})),wr}async function Fn(t,e){const n=nr(t),i=(await Si()).transaction(At,"readwrite"),s=i.objectStore(At),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ja(t,e.fid),e}async function Va(t){const e=nr(t),r=(await Si()).transaction(At,"readwrite");await r.objectStore(At).delete(e),await r.done}async function rr(t,e){const n=nr(t),i=(await Si()).transaction(At,"readwrite"),s=i.objectStore(At),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ja(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t){let e;const n=await rr(t.appConfig,r=>{const i=Cp(r),s=Rp(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Kr?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Cp(t){const e=t||{fid:Ip(),registrationStatus:0};return Wa(e)}function Rp(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Tt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Op(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kp(t)}:{installationEntry:e}}async function Op(t,e){try{const n=await _p(t,e);return Fn(t.appConfig,n)}catch(n){throw Ma(n)&&n.customData.serverCode===409?await Va(t.appConfig):await Fn(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function kp(t){let e=await Ls(t.appConfig);for(;e.registrationStatus===1;)await Ba(100),e=await Ls(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ci(t);return r||n}return e}function Ls(t){return rr(t,e=>{if(!e)throw Tt.create("installation-not-found");return Wa(e)})}function Wa(t){return Pp(t)?{fid:t.fid,registrationStatus:0}:t}function Pp(t){return t.registrationStatus===1&&t.registrationTime+ka<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp({appConfig:t,heartbeatServiceProvider:e},n){const r=Mp(t,n),i=pp(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Pa,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ua(()=>fetch(r,a));if(c.ok){const u=await c.json();return xa(u)}else throw await La("Generate Auth Token",c)}function Mp(t,{fid:e}){return`${Na(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t,e=!1){let n;const r=await rr(t.appConfig,s=>{if(!za(s))throw Tt.create("not-registered");const o=s.authToken;if(!e&&Lp(o))return s;if(o.requestStatus===1)return n=Np(t,e),s;{if(!navigator.onLine)throw Tt.create("app-offline");const a=Up(s);return n=xp(t,a),a}});return n?await n:r.authToken}async function Np(t,e){let n=await Fs(t.appConfig);for(;n.authToken.requestStatus===1;)await Ba(100),n=await Fs(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ri(t,e):r}function Fs(t){return rr(t,e=>{if(!za(e))throw Tt.create("not-registered");const n=e.authToken;return Bp(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function xp(t,e){try{const n=await Dp(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Fn(t.appConfig,r),n}catch(n){if(Ma(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Va(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Fn(t.appConfig,r)}throw n}}function za(t){return t!==void 0&&t.registrationStatus===2}function Lp(t){return t.requestStatus===2&&!Fp(t)}function Fp(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+up}function Up(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Bp(t){return t.requestStatus===1&&t.requestTime+ka<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $p(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ci(e);return r?r.catch(console.error):Ri(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(t,e=!1){const n=t;return await Hp(n),(await Ri(n,e)).token}async function Hp(t){const{registrationPromise:e}=await Ci(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(t){if(!t||!t.options)throw Er("App Configuration");if(!t.name)throw Er("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Er(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Er(t){return Tt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="installations",Wp="installations-internal",zp=t=>{const e=t.getProvider("app").getImmediate(),n=Vp(e),r=Ht(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Kp=t=>{const e=t.getProvider("app").getImmediate(),n=Ht(e,Ka).getImmediate();return{getId:()=>$p(n),getToken:i=>jp(n,i)}};function qp(){We(new Ne(Ka,zp,"PUBLIC")),We(new Ne(Wp,Kp,"PRIVATE"))}qp();Pe(Oa,Ai);Pe(Oa,Ai,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="analytics",Gp="firebase_id",Jp="origin",Yp=60*1e3,Xp="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",qa="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new gi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Qp(t,e){const n=document.createElement("script");n.src=`${qa}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Zp(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function eg(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const c=(await Ga(n)).find(u=>u.measurementId===i);c&&await e[c.appId]}}catch(a){fe.error(a)}t("config",i,s)}async function tg(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Ga(n);for(const c of o){const u=a.find(g=>g.measurementId===c),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){fe.error(s)}}function ng(t,e,n,r){async function i(s,o,a){try{s==="event"?await tg(t,e,n,o,a):s==="config"?await eg(t,e,n,r,o,a):s==="consent"?t("consent","update",a):t("set",o)}catch(c){fe.error(c)}}return i}function rg(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ng(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function ig(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(qa)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ge=new St("analytics","Analytics",sg);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=30,ag=1e3;class cg{constructor(e={},n=ag){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ja=new cg;function lg(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function ug(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:lg(r)},s=Xp.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw ge.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function fg(t,e=Ja,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ge.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ge.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new pg;return setTimeout(async()=>{a.abort()},n!==void 0?n:Yp),Ya({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Ya(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Ja){var s;const{appId:o,measurementId:a}=t;try{await dg(r,e)}catch(c){if(a)return fe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await ug(t);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!hg(u)){if(i.deleteThrottleMetadata(o),a)return fe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?fs(n,i.intervalMillis,og):fs(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,g),fe.debug(`Calling attemptFetch again in ${d} millis`),Ya(t,g,r,i)}}function dg(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(ge.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hg(t){if(!(t instanceof Le)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class pg{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function gg(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(){if(Wo())try{await zo()}catch(t){return fe.warn(ge.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return fe.warn(ge.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _g(t,e,n,r,i,s,o){var a;const c=fg(t);c.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&fe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>fe.error(E)),e.push(c);const u=mg().then(E=>{if(E)return r.getId()}),[d,g]=await Promise.all([c,u]);ig(s)||Qp(s,d.measurementId),i("js",new Date);const b=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return b[Jp]="firebase",b.update=!0,g!=null&&(b[Gp]=g),i("config",d.measurementId,b),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.app=e}_delete(){return delete Yt[this.app.options.appId],Promise.resolve()}}let Yt={},Us=[];const Bs={};let Tr="dataLayer",yg="gtag",$s,Xa,js=!1;function Ig(){const t=[];if(Vo()&&t.push("This is a browser extension environment."),Gu()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ge.create("invalid-analytics-context",{errorInfo:e});fe.warn(n.message)}}function vg(t,e,n){Ig();const r=t.options.appId;if(!r)throw ge.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)fe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ge.create("no-api-key");if(Yt[r]!=null)throw ge.create("already-exists",{id:r});if(!js){Zp(Tr);const{wrappedGtag:s,gtagCore:o}=rg(Yt,Us,Bs,Tr,yg);Xa=s,$s=o,js=!0}return Yt[r]=_g(t,Us,Bs,e,$s,Tr,n),new bg(t)}function wg(t=Yo()){t=st(t);const e=Ht(t,Un);return e.isInitialized()?e.getImmediate():Eg(t)}function Eg(t,e={}){const n=Ht(t,Un);if(n.isInitialized()){const i=n.getImmediate();if(nn(e,n.getOptions()))return i;throw ge.create("already-initialized")}return n.initialize({options:e})}function Tg(t,e,n,r){t=st(t),gg(Xa,Yt[t.app.options.appId],e,n,r).catch(i=>fe.error(i))}const Hs="@firebase/analytics",Vs="0.9.4";function Ag(){We(new Ne(Un,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return vg(r,i,n)},"PUBLIC")),We(new Ne("analytics-internal",t,"PRIVATE")),Pe(Hs,Vs),Pe(Hs,Vs,"esm2017");function t(e){try{const n=e.getProvider(Un).getImmediate();return{logEvent:(r,i,s)=>Tg(n,r,i,s)}}catch(n){throw ge.create("interop-component-reg-failed",{reason:n})}}}Ag();const Sg={apiKey:"AIzaSyApi1UE5zrhK2FVfGyKE70nAsxTLmw9Xj8",authDomain:"vuefireauth-94879.firebaseapp.com",projectId:"vuefireauth-94879",storageBucket:"vuefireauth-94879.appspot.com",messagingSenderId:"941502028048",appId:"1:941502028048:web:3275c25e3331b85c9fad95",measurementId:"G-7CM1RSK215"},Qa=Jo(Sg);wg(Qa);const Cg=op(Qa),Rg=new ke,Og=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},kg={name:"MainPage",data(){return{loginStatus:!1,username:""}},methods:{login(){mh(Cg,Rg).then(t=>{this.username=t.user.displayName,this.loginStatus=True}).catch(t=>{t.code,t.message,t.customData.email,ke.credentialFromError(t)})}}};function Pg(t,e,n,r,i,s){return zl(),Gl(ye,null,[Ot("div",null,[Ot("button",{class:"github-auth-btn",onClick:e[0]||(e[0]=(...o)=>s.login&&s.login(...o))}," GitHub Login")]),Ki(Ot("div",null,"Login Success"+ac(i.username),513),[[cs,i.loginStatus]]),Ki(Ot("div",null,"Login Status:Not Login",512),[[cs,!i.loginStatus]])],64)}const Dg=Og(kg,[["render",Pg]]);Mu(Dg).mount("#app");
