var app=function(){"use strict";const n=32,t=256,e=512,r=1024,i=2048,o=4096,a=8192,l=16384,s=1<<20,u=Symbol("$state"),c=Symbol("legacy props"),f=Symbol("");var d=Array.isArray,p=Array.from,v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyDescriptors,m=Object.getPrototypeOf;function y(n){return"function"==typeof n}let x=!1,b=[];function w(){x=!1;const n=b.slice();b=[],function(n){for(var t=0;t<n.length;t++)n[t]()}(n)}function k(n){console.warn("https://svelte.dev/e/hydration_mismatch")}const _={};function S(n){return n===this.v}function $(n){return t=n,e=this.v,!(t!=t?e==e:t!==e||null!==t&&"object"==typeof t||"function"==typeof t);var t,e}let j=!1;function T(n,t){return{f:0,v:n,reactions:null,equals:S,version:0}}function P(n,t=!1){const e=T(n);return t||(e.equals=$),j&&null!==tn&&null!==tn.l&&(tn.l.s??=[]).push(e),e}function E(n,t){return null!==J&&rn()&&18&J.f&&(null===G||!G.includes(n))&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),M(n,t)}function M(t,e){return t.equals(e)||(t.v=e,t.version=en(),C(t,i),rn()&&null!==Z&&Z.f&r&&!(Z.f&n)&&(null!==U&&U.includes(t)?(bn(Z,i),gn(Z)):null===X?function(n){X=n}([t]):X.push(t))),e}function C(n,t){var e=n.reactions;if(null!==e)for(var r=rn(),a=e.length,l=0;l<a;l++){var s=e[l],u=s.f;u&i||(r||s!==Z)&&(bn(s,t),1280&u&&(2&u?C(s,o):gn(s)))}}function I(n){var t=n.children;if(null!==t){n.children=null;for(var e=0;e<t.length;e+=1){var r=t[e];2&r.f?z(r):Fn(r)}}}function A(n){var t,e=Z;F(function(n){for(var t=n.parent;null!==t;){if(!(2&t.f))return t;t=t.parent}return null}(n));try{I(n),t=ln(n)}finally{F(e)}return t}function D(n){var e=A(n);bn(n,(nn||n.f&t)&&null!==n.deps?o:r),n.equals(e)||(n.v=e,n.version=en())}function z(n){I(n),un(n,0),bn(n,l),n.v=n.children=n.deps=n.ctx=n.reactions=null}const B=0;let N=!1,q=B,O=!1,L=null,V=!1;function W(n){V=n}let R=[],K=0,J=null;function H(n){J=n}let Z=null;function F(n){Z=n}let G=null,U=null,Q=0,X=null;let Y=1,nn=!1,tn=null;function en(){return++Y}function rn(){return!j||null!==tn&&null===tn.l}function on(n){var a=n.f;if(a&i)return!0;if(a&o){var l=n.deps,s=!!(a&t);if(null!==l){var u;if(a&e){for(u=0;u<l.length;u++)(l[u].reactions??=[]).push(n);n.f^=e}for(u=0;u<l.length;u++){var c=l[u];if(on(c)&&D(c),!s||null===Z||nn||c?.reactions?.includes(n)||(c.reactions??=[]).push(n),c.version>n.version)return!0}}s&&(null===Z||nn)||bn(n,r)}return!1}function an(n,t,e,r){if(N){if(null===e&&(N=!1),function(n){return!(n.f&l||null!==n.parent&&128&n.parent.f)}(t))throw n}else null!==e&&(N=!0),function(n,t){for(var e=t;null!==e;){if(128&e.f)try{return void e.fn(n)}catch{e.f^=128}e=e.parent}throw N=!1,n}(n,t)}function ln(n){var e=U,r=Q,i=X,o=J,a=nn,l=G,s=tn,u=n.f;U=null,Q=0,X=null,J=96&u?null:n,nn=!V&&!!(u&t),G=null,tn=n.ctx;try{var c=(0,n.fn)(),f=n.deps;if(null!==U){var d;if(un(n,Q),null!==f&&Q>0)for(f.length=Q+U.length,d=0;d<U.length;d++)f[Q+d]=U[d];else n.deps=f=U;if(!nn)for(d=Q;d<f.length;d++)(f[d].reactions??=[]).push(n)}else null!==f&&Q<f.length&&(un(n,Q),f.length=Q);return c}finally{U=e,Q=r,X=i,J=o,nn=a,G=l,tn=s}}function sn(n,t){let r=t.reactions;if(null!==r){var i=r.indexOf(n);if(-1!==i){var a=r.length-1;0===a?r=t.reactions=null:(r[i]=r[a],r.pop())}}null===r&&2&t.f&&(null===U||!U.includes(t))&&(bn(t,o),768&t.f||(t.f^=e),un(t,0))}function un(n,t){var e=n.deps;if(null!==e)for(var r=t;r<e.length;r++)sn(n,e[r])}function cn(t){var e=t.f;if(!(e&l)){bn(t,r);var i=Z,o=tn;Z=t;try{16&e?function(t){var e=t.first;for(;null!==e;){var r=e.next;e.f&n||Fn(e),e=r}}(t):Zn(t),Hn(t),Jn(t);var a=ln(t);t.teardown="function"==typeof a?a:null,t.version=Y}catch(n){an(n,t,i,o||t.ctx)}finally{Z=i}}}function fn(){if(K>1e3){K=0;try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(n){if(null===L)throw n;an(n,L,null)}}K++}function dn(n){var t=n.length;if(0!==t){fn();var e=V;V=!0;try{for(var i=0;i<t;i++){var o=n[i];o.f&r||(o.f^=r);var a=[];hn(o,a),pn(a)}}finally{V=e}}}function pn(n){var t=n.length;if(0!==t)for(var e=0;e<t;e++){var r=n[e];if(!(24576&r.f))try{on(r)&&(cn(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?Gn(r):r.fn=null))}catch(n){an(n,r,null,r.ctx)}}}function vn(){if(O=!1,K>1001)return;const n=R;R=[],dn(n),O||(K=0,L=null)}function gn(n){q===B&&(O||(O=!0,queueMicrotask(vn))),L=n;for(var t=n;null!==t.parent;){var e=(t=t.parent).f;if(96&e){if(!(e&r))return;t.f^=r}}R.push(t)}function hn(t,e){var i=t.first,o=[];n:for(;null!==i;){var l=i.f,s=!!(l&n),u=s&&!!(l&r),c=i.next;if(!(u||l&a))if(8&l){if(s)i.f^=r;else try{on(i)&&cn(i)}catch(n){an(n,i,null,i.ctx)}var f=i.first;if(null!==f){i=f;continue}}else 4&l&&o.push(i);if(null===c){let n=i.parent;for(;null!==n;){if(t===n)break n;var d=n.next;if(null!==d){i=d;continue n}n=n.parent}}i=c}for(var p=0;p<o.length;p++)f=o[p],e.push(f),hn(f,e)}function mn(n){var t=q,e=R;try{fn();const t=[];q=1,R=t,O=!1,dn(e);var r=n?.();return x&&w(),(R.length>0||t.length>0)&&mn(),K=0,L=null,r}finally{q=t,R=e}}function yn(t){var e=t.f,o=!!(2&e);if(o&&e&l){var a=A(t);return z(t),a}if(null!==J){null!==G&&G.includes(t)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}();var s=J.deps;null===U&&null!==s&&s[Q]===t?Q++:null===U?U=[t]:U.push(t),null!==X&&null!==Z&&Z.f&r&&!(Z.f&n)&&X.includes(t)&&(bn(Z,i),gn(Z))}else if(o&&null===t.deps)for(var u=t,c=u.parent,f=u;null!==c;){if(!(2&c.f)){var d=c;d.deriveds?.includes(f)||(d.deriveds??=[]).push(f);break}f=c,c=c.parent}return o&&on(u=t)&&D(u),t.v}const xn=-7169;function bn(n,t){n.f=n.f&xn|t}function wn(n,t=!1,e){tn={p:tn,c:null,e:null,m:!1,s:n,x:null,l:null},j&&!t&&(tn.l={s:null,u:null,r1:[],r2:T(!1)})}function kn(n){const t=tn;if(null!==t){void 0!==n&&(t.x=n);const a=t.e;if(null!==a){var e=Z,r=J;t.e=null;try{for(var i=0;i<a.length;i++){var o=a[i];F(o.effect),H(o.reaction),Vn(4,o.fn,!1)}}finally{F(e),H(r)}}tn=t.p,t.m=!0}return n||{}}let _n,Sn=!1;function $n(n){Sn=n}function jn(n){if(null===n)throw k(),_;return _n=n}function Tn(){return jn(Nn(_n))}function Pn(n){if(Sn){if(null!==Nn(_n))throw k(),_;_n=n}}function En(n=1){if(Sn){for(var t=n,e=_n;t--;)e=Nn(e);_n=e}}function Mn(){for(var n=0,t=_n;;){if(8===t.nodeType){var e=t.data;if("]"===e){if(0===n)return t;n-=1}else"["!==e&&"[!"!==e||(n+=1)}var r=Nn(t);t.remove(),t=r}}var Cn,In,An;function Dn(){if(void 0===Cn){Cn=window;var n=Element.prototype,t=Node.prototype;In=g(t,"firstChild").get,An=g(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function zn(n=""){return document.createTextNode(n)}function Bn(n){return In.call(n)}function Nn(n){return An.call(n)}function qn(n,t){if(!Sn)return Bn(n);var e=Bn(_n);if(null===e)e=_n.appendChild(zn());else if(t&&3!==e.nodeType){var r=zn();return e?.before(r),jn(r),r}return jn(e),e}function On(n,t=1,e=!1){let r=Sn?_n:n;for(var i;t--;)i=r,r=Nn(r);if(!Sn)return r;var o=r?.nodeType;if(e&&3!==o){var a=zn();return null===r?i?.after(a):r.before(a),jn(a),a}return jn(r),r}function Ln(n){n.textContent=""}function Vn(n,t,e,r=!0){var o=!!(64&n),a=Z,l={ctx:tn,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|i,first:null,fn:t,last:null,next:null,parent:o?null:a,prev:null,teardown:null,transitions:null,version:0};if(e){var u=V;try{W(!0),cn(l),l.f|=32768}catch(n){throw Fn(l),n}finally{W(u)}}else null!==t&&gn(l);if(!(e&&null===l.deps&&null===l.first&&null===l.nodes_start&&null===l.teardown&&!(l.f&s))&&!o&&r&&(null!==a&&function(n,t){var e=t.last;null===e?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}(l,a),null!==J&&2&J.f)){var c=J;(c.children??=[]).push(l)}return l}function Wn(n){return Rn(n)}function Rn(n,t=0){return Vn(24|t,n,!0)}function Kn(n,t=!0){return Vn(40,n,!0,t)}function Jn(n){var t=n.teardown;if(null!==t){const n=J;H(null);try{t.call(null)}finally{H(n)}}}function Hn(n){var t=n.deriveds;if(null!==t){n.deriveds=null;for(var e=0;e<t.length;e+=1)z(t[e])}}function Zn(n,t=!1){var e=n.first;for(n.first=n.last=null;null!==e;){var r=e.next;Fn(e,t),e=r}}function Fn(n,t=!0){var e=!1;if((t||524288&n.f)&&null!==n.nodes_start){for(var r=n.nodes_start,i=n.nodes_end;null!==r;){var o=r===i?null:Nn(r);r.remove(),r=o}e=!0}Zn(n,t&&!e),Hn(n),un(n,0),bn(n,l);var a=n.transitions;if(null!==a)for(const n of a)n.stop();Jn(n);var s=n.parent;null!==s&&null!==s.first&&Gn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Gn(n){var t=n.parent,e=n.prev,r=n.next;null!==e&&(e.next=r),null!==r&&(r.prev=e),null!==t&&(t.first===n&&(t.first=r),t.last===n&&(t.last=e))}function Un(n,t){var e=[];Xn(n,e,!0),Qn(e,(()=>{Fn(n),t&&t()}))}function Qn(n,t){var e=n.length;if(e>0){var r=()=>--e||t();for(var i of n)i.out(r)}else t()}function Xn(t,e,r){if(!(t.f&a)){if(t.f^=a,null!==t.transitions)for(const n of t.transitions)(n.is_global||r)&&e.push(n);for(var i=t.first;null!==i;){var o=i.next;Xn(i,e,!!(!!(65536&i.f)||!!(i.f&n))&&r),i=o}}}function Yn(n){nt(n,!0)}function nt(t,e){if(t.f&a){on(t)&&cn(t),t.f^=a;for(var r=t.first;null!==r;){var i=r.next;nt(r,!!(!!(65536&r.f)||!!(r.f&n))&&e),r=i}if(null!==t.transitions)for(const n of t.transitions)(n.is_global||e)&&n.in()}}const tt=new Set,et=new Set;function rt(n){var t=this,e=t.ownerDocument,r=n.type,i=n.composedPath?.()||[],o=i[0]||n.target,a=0,l=n.__root;if(l){var s=i.indexOf(l);if(-1!==s&&(t===document||t===window))return void(n.__root=t);var u=i.indexOf(t);if(-1===u)return;s<=u&&(a=s)}if((o=i[a]||n.target)!==t){v(n,"currentTarget",{configurable:!0,get:()=>o||e});var c=J,f=Z;H(null),F(null);try{for(var p,g=[];null!==o;){var h=o.assignedSlot||o.parentNode||o.host||null;try{var m=o["__"+r];if(void 0!==m&&!o.disabled)if(d(m)){var[y,...x]=m;y.apply(o,[n,...x])}else m.call(o,n)}catch(n){p?g.push(n):p=n}if(n.cancelBubble||h===t||null===h)break;o=h}if(p){for(let n of g)queueMicrotask((()=>{throw n}));throw p}}finally{n.__root=t,delete n.currentTarget,H(c),F(f)}}}function it(n,t){var e=Z;null===e.nodes_start&&(e.nodes_start=n,e.nodes_end=t)}function ot(n,t){var e,r=!!(1&t),i=!!(2&t),o=!n.startsWith("<!>");return()=>{if(Sn)return it(_n,null),_n;var t,a;void 0===e&&(t=o?n:"<!>"+n,(a=document.createElement("template")).innerHTML=t,e=a.content,r||(e=Bn(e)));var l=i?document.importNode(e,!0):e.cloneNode(!0);r?it(Bn(l),l.lastChild):it(l,l);return l}}function at(n,t){var e=ot(n,t);return()=>function(n){if(Sn)return n;const t=11===n.nodeType,e="SCRIPT"===n.tagName?[n]:n.querySelectorAll("script"),r=Z;for(const o of e){const e=document.createElement("script");for(var i of o.attributes)e.setAttribute(i.name,i.value);e.textContent=o.textContent,(t?n.firstChild===o:n===o)&&(r.nodes_start=e),(t?n.lastChild===o:n===o)&&(r.nodes_end=e),o.replaceWith(e)}return n}(e())}function lt(n,t){if(Sn)return Z.nodes_end=_n,void Tn();null!==n&&n.before(t)}const st=["touchstart","touchmove"];function ut(n,t){var e=null==t?"":"object"==typeof t?t+"":t;e!==(n.__t??=n.nodeValue)&&(n.__t=e,n.nodeValue=null==e?"":e+"")}function ct(n,t){return pt(n,t)}function ft(n,t){Dn(),t.intro=t.intro??!1;const e=t.target,r=Sn,i=_n;try{for(var o=Bn(e);o&&(8!==o.nodeType||"["!==o.data);)o=Nn(o);if(!o)throw _;$n(!0),jn(o),Tn();const r=pt(n,{...t,anchor:o});if(null===_n||8!==_n.nodeType||"]"!==_n.data)throw k(),_;return $n(!1),r}catch(r){if(r===_)return!1===t.recover&&function(){throw new Error("https://svelte.dev/e/hydration_failed")}(),Dn(),Ln(e),$n(!1),ct(n,t);throw r}finally{$n(r),jn(i)}}const dt=new Map;function pt(n,{target:t,anchor:e,props:r={},events:i,context:o,intro:a=!0}){Dn();var l=new Set,s=n=>{for(var e=0;e<n.length;e++){var r=n[e];if(!l.has(r)){l.add(r);var i=(a=r,st.includes(a));t.addEventListener(r,rt,{passive:i});var o=dt.get(r);void 0===o?(document.addEventListener(r,rt,{passive:i}),dt.set(r,1)):dt.set(r,o+1)}}var a};s(p(tt)),et.add(s);var u=void 0,c=function(n){const t=Vn(64,n,!0);return(n={})=>new Promise((e=>{n.outro?Un(t,(()=>{Fn(t),e(void 0)})):(Fn(t),e(void 0))}))}((()=>{var a=e??t.appendChild(zn());return Kn((()=>{o&&(wn({}),tn.c=o);i&&(r.$$events=i),Sn&&it(a,null),u=n(a,r)||{},Sn&&(Z.nodes_end=_n),o&&kn()})),()=>{for(var n of l){t.removeEventListener(n,rt);var r=dt.get(n);0==--r?(document.removeEventListener(n,rt),dt.delete(n)):dt.set(n,r)}et.delete(s),a!==e&&a.parentNode?.removeChild(a)}}));return vt.set(u,c),u}let vt=new WeakMap;function gt(n){return new ht(n)}class ht{#n;#t;constructor(n){var t=new Map,e=(n,e)=>{var r=P(e);return t.set(n,r),r};const r=new Proxy({...n.props||{},$$events:{}},{get:(n,r)=>yn(t.get(r)??e(r,Reflect.get(n,r))),has:(n,r)=>r===c||(yn(t.get(r)??e(r,Reflect.get(n,r))),Reflect.has(n,r)),set:(n,r,i)=>(E(t.get(r)??e(r,i),i),Reflect.set(n,r,i))});this.#t=(n.hydrate?ft:ct)(n.component,{target:n.target,anchor:n.anchor,props:r,context:n.context,intro:n.intro??!1,recover:n.recover}),n?.props?.$$host&&!1!==n.sync||mn(),this.#n=r.$$events;for(const n of Object.keys(this.#t))"$set"!==n&&"$destroy"!==n&&"$on"!==n&&v(this,n,{get(){return this.#t[n]},set(t){this.#t[n]=t},enumerable:!0});this.#t.$set=n=>{Object.assign(r,n)},this.#t.$destroy=()=>{!function(n,t){const e=vt.get(n);e?(vt.delete(n),e(t)):Promise.resolve()}(this.#t)}}$set(n){this.#t.$set(n)}$on(n,t){this.#n[n]=this.#n[n]||[];const e=(...n)=>t.call(this,...n);return this.#n[n].push(e),()=>{this.#n[n]=this.#n[n].filter((n=>n!==e))}}$destroy(){this.#t.$destroy()}}function mt(n,t){return t}function yt(n,t,e,r,i,o=null){var l=n,s={flags:t,items:new Map,first:null};if(!!(4&t)){var u=n;l=Sn?jn(Bn(u)):u.appendChild(zn())}Sn&&Tn();var c=null,f=!1;Rn((()=>{var n=e(),u=d(n)?n:null==n?[]:p(n),v=u.length;if(f&&0===v)return;f=0===v;let g=!1;Sn&&("[!"===l.data!==(0===v)&&(jn(l=Mn()),$n(!1),g=!0));if(Sn){for(var h,m=null,y=0;y<v;y++){if(8===_n.nodeType&&"]"===_n.data){l=_n,g=!0,$n(!1);break}var k=u[y],_=r(k,y);h=bt(_n,s,m,null,k,_,y,i,t),s.items.set(_,h),m=h}v>0&&jn(Mn())}Sn||function(n,t,e,r,i,o,l){var s,u,c,f,d,v,g=!!(8&i),h=!!(3&i),m=n.length,y=t.items,k=t.first,_=k,S=null,$=[],j=[];if(g)for(v=0;v<m;v+=1)f=l(c=n[v],v),void 0!==(d=y.get(f))&&(d.a?.measure(),(u??=new Set).add(d));for(v=0;v<m;v+=1)if(f=l(c=n[v],v),void 0!==(d=y.get(f))){if(h&&xt(d,c,v,i),d.e.f&a&&(Yn(d.e),g&&(d.a?.unfix(),(u??=new Set).delete(d))),d!==_){if(void 0!==s&&s.has(d)){if($.length<j.length){var T,P=j[0];S=P.prev;var E=$[0],M=$[$.length-1];for(T=0;T<$.length;T+=1)wt($[T],P,e);for(T=0;T<j.length;T+=1)s.delete(j[T]);kt(t,E.prev,M.next),kt(t,S,E),kt(t,M,P),_=P,S=M,v-=1,$=[],j=[]}else s.delete(d),wt(d,_,e),kt(t,d.prev,d.next),kt(t,d,null===S?t.first:S.next),kt(t,S,d),S=d;continue}for($=[],j=[];null!==_&&_.k!==f;)!o&&_.e.f&a||(s??=new Set).add(_),j.push(_),_=_.next;if(null===_)continue;d=_}$.push(d),S=d,_=d.next}else{S=bt(_?_.e.nodes_start:e,t,S,null===S?t.first:S.next,c,f,v,r,i),y.set(f,S),$=[],j=[],_=S.next}if(null!==_||void 0!==s){for(var C=void 0===s?[]:p(s);null!==_;)!o&&_.e.f&a||C.push(_),_=_.next;var I=C.length;if(I>0){var A=4&i&&0===m?e:null;if(g){for(v=0;v<I;v+=1)C[v].a?.measure();for(v=0;v<I;v+=1)C[v].a?.fix()}!function(n,t,e,r){for(var i=[],o=t.length,a=0;a<o;a++)Xn(t[a].e,i,!0);var l=o>0&&0===i.length&&null!==e;if(l){var s=e.parentNode;Ln(s),s.append(e),r.clear(),kt(n,t[0].prev,t[o-1].next)}Qn(i,(()=>{for(var e=0;e<o;e++){var i=t[e];l||(r.delete(i.k),kt(n,i.prev,i.next)),Fn(i.e,!l)}}))}(t,C,A,y)}}g&&(D=()=>{if(void 0!==u)for(d of u)d.a?.apply()},x||(x=!0,queueMicrotask(w)),b.push(D));var D;Z.first=t.first&&t.first.e,Z.last=S&&S.e}(u,s,l,i,t,!!(J.f&a),r);null!==o&&(0===v?c?Yn(c):c=Kn((()=>o(l))):null!==c&&Un(c,(()=>{c=null}))),g&&$n(!0),e()})),Sn&&(l=_n)}function xt(n,t,e,r){1&r&&M(n.v,t),2&r?M(n.i,e):n.i=e}function bt(n,t,e,r,i,o,a,l,s,u){var c=!!(1&s)?!(16&s)?P(i):T(i):i,f=2&s?T(a):a,d={i:f,v:c,k:o,a:null,e:null,prev:e,next:r};try{return d.e=Kn((()=>l(n,c,f)),Sn),d.e.prev=e&&e.e,d.e.next=r&&r.e,null===e?t.first=d:(e.next=d,e.e.next=d.e),null!==r&&(r.prev=d,r.e.prev=d.e),d}finally{}}function wt(n,t,e){for(var r=n.next?n.next.e.nodes_start:e,i=t?t.e.nodes_start:e,o=n.e.nodes_start;o!==r;){var a=Nn(o);i.before(o),o=a}}function kt(n,t,e){null===t?n.first=e:(t.next=e,t.e.next=e&&e.e),null!==e&&(e.prev=t,e.e.prev=t&&t.e)}function _t(n,t,e,r){var i=n.__attributes??={};Sn&&(i[t]=n.getAttribute(t),"src"===t||"srcset"===t||"href"===t&&"LINK"===n.nodeName)||i[t]!==(i[t]=e)&&("style"===t&&"__styles"in n&&(n.__styles={}),"loading"===t&&(n[f]=e),null==e?n.removeAttribute(t):"string"!=typeof e&&function(n){var t,e=St.get(n.nodeName);if(e)return e;St.set(n.nodeName,e=[]);var r=n,i=Element.prototype;for(;i!==r;){for(var o in t=h(r))t[o].set&&e.push(o);r=m(r)}return e}(n).includes(t)?n[t]=e:n.setAttribute(t,e))}"undefined"!=typeof window&&(window.__svelte||={v:new Set}).v.add("5"),j=!0;var St=new Map;function $t(n,t,e){n.$$events||={},n.$$events[t]||=[],n.$$events[t].push(e)}function jt(n){for(var t in n)t in this&&(this[t]=n[t])}const Tt={get(n,t){let e=n.props.length;for(;e--;){let r=n.props[e];if(y(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r)return r[t]}},set(n,t,e){let r=n.props.length;for(;r--;){let i=n.props[r];y(i)&&(i=i());const o=g(i,t);if(o&&o.set)return o.set(e),!0}return!1},getOwnPropertyDescriptor(n,t){let e=n.props.length;for(;e--;){let r=n.props[e];if(y(r)&&(r=r()),"object"==typeof r&&null!==r&&t in r){const n=g(r,t);return n&&!n.configurable&&(n.configurable=!0),n}}},has(n,t){if(t===u||t===c)return!1;for(let e of n.props)if(y(e)&&(e=e()),null!=e&&t in e)return!0;return!1},ownKeys(n){const t=[];for(let e of n.props){y(e)&&(e=e());for(const n in e)t.includes(n)||t.push(n)}return t}};function Pt(...n){return new Proxy({props:n},Tt)}function Et(n,e,r,i){var o,a=!j||!!(2&r);o=n[e];var l,u=g(n,e)?.set??void 0,c=i,f=!0,d=!1;if(l=()=>{var t=n[e];return void 0===t?(d=!0,f&&(f=!1,c=i),c):(f=!0,d=!1,t)},u){var p=n.$$legacy;return function(n,t){return arguments.length>0?(a&&t&&!p||u(t?l():n),n):l()}}var v=!1,h=P(o),m=function(n){for(var t=Z,e=Z;null!==t&&!(96&t.f);)t=t.parent;try{return F(t),n()}finally{F(e)}}((()=>function(n){var e=2050;null===Z?e|=t:Z.f|=s;var r=null!==J&&2&J.f?J:null;const i={children:null,ctx:tn,deps:null,equals:S,f:e,fn:n,reactions:null,v:null,version:0,parent:r??Z};return null!==r&&(r.children??=[]).push(i),i}((()=>{var n=l(),t=yn(h);return v?(v=!1,t):h.v=n}))));return function(n,t){if(arguments.length>0){const e=t?yn(m):n;return m.equals(e)||(v=!0,E(h,e),d&&void 0!==c&&(c=e),function(n){const t=J;try{return J=null,n()}finally{J=t}}((()=>yn(m)))),n}return yn(m)}}var Mt=ot("<a> </a>");function Ct(n,t){if(new.target)return gt({component:Ct,...n});wn(t,!0);const e=Et(t,"pageId",7),r=Et(t,"label",7);var i=Mt(),o=qn(i,!0);return Pn(i),Wn((()=>{_t(i,"href",`javascript:changePage(${e()??""});`),ut(o,r())})),lt(n,i),kn({get pageId(){return e()},set pageId(n){e(n),mn()},get label(){return r()},set label(n){r(n),mn()},$set:jt,$on:(n,e)=>$t(t,n,e)})}var It=ot('<div id="navTool" class="svelte-1wcr75l"><a href="https://vexcess.github.io/" target="_self" style="padding: 13px; padding-left: 18px;"><img src="./images/logo.png" width="16" height="16" style="transform: scale(2); display: inline-block; margin-top: 2px; margin-right: 4px;" alt=""> <strong style="display: inline-block; margin-left: 6px; margin-top: 6px;">VExcess</strong></a> <!></div>');function At(n,t){if(new.target)return gt({component:At,...n});wn(t,!1);var e=It();return yt(On(qn(e),2),0,(()=>["About","Showcase","Tools","Blog","Contact"]),mt,((n,t,e)=>{Ct(n,{get label(){return t},pageId:e})})),Pn(e),lt(n,e),kn({$set:jt,$on:(n,e)=>$t(t,n,e)})}var Dt=ot('<div style="background-color: rgb(0, 0, 0, 0.8); border-radius: 8px; padding: 12px; margin: 6px; width: 200px;"><div style="display: flex;"><img width="55px" height="55px" style="display: inline-block;" alt=""> <strong style="display: inline-block; margin-left: 16px; line-height: 55px; font-size: 22px; transform: translate(0px, 2px);"> </strong></div></div>');function zt(n,t){if(new.target)return gt({component:zt,...n});wn(t,!0);const e=Et(t,"img",7),r=Et(t,"name",7);var i=Dt(),o=qn(i),a=qn(o),l=On(a,2),s=qn(l,!0);return Pn(l),Pn(o),Pn(i),Wn((()=>{_t(a,"src",e()),ut(s,r())})),lt(n,i),kn({get img(){return e()},set img(n){e(n),mn()},get name(){return r()},set name(n){r(n),mn()},$set:jt,$on:(n,e)=>$t(t,n,e)})}var Bt=ot('<a target="_blank" class="resource-box hover-glow svelte-8p6n8n"><strong style="text-decoration: underline;"> </strong> <br><br> <div class="svelte-8p6n8n"> </div></a>');function Nt(n,t){if(new.target)return gt({component:Nt,...n});wn(t,!0);const e=Et(t,"link",7),r=Et(t,"name",7),i=Et(t,"description",7);var o=Bt(),a=qn(o),l=qn(a,!0);Pn(a);var s=On(a,5),u=qn(s,!0);return Pn(s),Pn(o),Wn((()=>{_t(o,"href",e()),ut(l,r()),ut(u,i())})),lt(n,o),kn({get link(){return e()},set link(n){e(n),mn()},get name(){return r()},set name(n){r(n),mn()},get description(){return i()},set description(n){i(n),mn()},$set:jt,$on:(n,e)=>$t(t,n,e)})}var qt=ot('<div style="padding: 10px; background-color: transparent;"><a class="contact-box hover-glow svelte-xpjig7" target="_blank"><img height="95px" alt=""> <strong class="svelte-xpjig7"> <strong class="svelte-xpjig7"><div style="height: 14px;"></div> <strong style="font-family: Consolas, monospace;" class="svelte-xpjig7"> <strong class="svelte-xpjig7"></strong></strong></strong></strong></a></div>');function Ot(n,t){if(new.target)return gt({component:Ot,...n});wn(t,!0);const e=Et(t,"link",7),r=Et(t,"img",7),i=Et(t,"imgStyle",7),o=Et(t,"site",7),a=Et(t,"tag",7);var l=qt(),s=qn(l),u=qn(s),c=On(u,2),f=qn(c,!0),d=On(f),p=On(qn(d),2),v=qn(p);return En(),Pn(p),Pn(d),Pn(c),Pn(s),Pn(l),Wn((()=>{_t(s,"href",e()),_t(u,"src",r()),_t(u,"style",i()),ut(f,o()),ut(v,`@${a()??""}`)})),lt(n,l),kn({get link(){return e()},set link(n){e(n),mn()},get img(){return r()},set img(n){r(n),mn()},get imgStyle(){return i()},set imgStyle(n){i(n),mn()},get site(){return o()},set site(n){o(n),mn()},get tag(){return a()},set tag(n){a(n),mn()},$set:jt,$on:(n,e)=>$t(t,n,e)})}var Lt=at('<canvas id="background-canvas" style="background-color: black;"></canvas> <div><script>\n        let canvas = document.getElementById("background-canvas");\n        let ctx = canvas.getContext("2d");\n    \n        canvas.style.position = "fixed";\n        canvas.style.left = "0px";\n        canvas.style.top = "0px";\n        canvas.style.zIndex = "-1";\n        \n        async function updateBackground () {\n            canvas.width = window.innerWidth;\n            canvas.height = window.innerHeight;\n    \n            let width = canvas.width;\n            let height = canvas.height;\n    \n            let sin = ang => Math.sin(ang * Math.PI / 180);\n            let cos = ang => Math.cos(ang * Math.PI / 180);\n    \n            function piece (x, y, r, sz) {\n                let ang = 120;\n                let thicc = 50;\n                \n                ctx.save();\n                    ctx.translate(x, y);\n                    ctx.rotate(r * Math.PI / 180);\n                    ctx.scale(sz || 1, sz || 1);\n                    \n                    ctx.beginPath();\n                        ctx.moveTo(0, 0);\n                        ctx.lineTo(100, 0);\n                        ctx.lineTo(76, sin(ang / 2) * thicc);\n                        ctx.lineTo(cos(ang / 2) * thicc, sin(ang / 2) * thicc);\n                        ctx.lineTo(thicc + cos(ang) * 100, sin(ang) * 100);\n                        ctx.lineTo(cos(ang) * 100, sin(ang) * 100);\n                        ctx.lineTo(0, 0);\n                    ctx.fill();\n                    \n                    ctx.strokeStyle = "rgba(0, 150, 75, 0.6)";\n                    for (let i = -49; i < 100; i += 8) {\n                        let j = i + 50;\n                        let k = j;\n                        \n                        if (i < 1) {\n                            j = 87 - j * 1.7;\n                        } else {\n                            j = 1;\n                        }\n                        \n                        if (i < 1) {\n                            k = 86;\n                        } else if (i < 23) {\n                            k = 170 - k * 1.7;\n                        } else if (i < 76) {\n                            k = 43;\n                        } else {\n                            k = 255 - k * 1.7;\n                        }\n                        \n                        ctx.beginPath();\n                        ctx.moveTo(i, j);\n                        ctx.lineTo(i, k);\n                        ctx.stroke();\n                    }\n                ctx.restore();\n            }\n    \n            let spin = 30;\n            let sz = 0.5;\n    \n            let offset = 0;\n            for (let y = 0; y < height + 100; y += sz * 75) {\n                for (let x = 0; x < width + 100; x += sz * 260) {\n                    ctx.fillStyle = "rgb(20, 20, 20)";\n                    piece(x + offset, y, spin, sz);\n                    ctx.fillStyle = "rgb(0, 0, 0)";\n                    piece(x + offset, y, spin + 120, sz);\n                    ctx.fillStyle = "rgb(40, 40, 40)";\n                    piece(x + offset, y, spin + 240, sz);\n                }\n                \n                if (offset === 0) {\n                    offset = sz * 130;\n                } else {\n                    offset = 0;\n                }\n            }\n        }\n    \n        updateBackground();\n    \n        window.addEventListener("resize", updateBackground);\n    <\/script>\x3c!----\x3e</div>',1);function Vt(n,t){if(new.target)return gt({component:Vt,...n});wn(t,!1);var e=Lt();return En(2),lt(n,e),kn({$set:jt,$on:(n,e)=>$t(t,n,e)})}var Wt=at('<!> <!> <div class="page"><h1 style="margin-top: 10px;">VExcess</h1> <pre><code class="language-javascript" style="font-size: 14px;">let VExcess = &#123;\n\tname: "Vincent S.",\n\tlocation: "United States",\n\tdescription: `\n\t\tI\'m a self taught, self proclaimed, full-stack web developer \n\t\twho enjoys programming in JavaScript, Dart, and Zig. \n\t\tMy choice \n\t\t\tOS: Linux Mint\n\t\t\tIDE: VS Code\n\t\t\tWebFramework: Svelte\n\t\tMy current passion project is creating a FOSS clone of MS \n\t\tPaint 3D.\n\n\t`\n};</code></pre> <br><br> <h2 style="margin-bottom: 12px; margin-top: 0px;">Tooling:</h2> <div class="tooling"><h2>Much Experience With:</h2> <div id="proficient"></div></div> <br><br> <div class="tooling"><h2>Some Experience With:</h2> <div id="has-experience"></div></div> <style>.tooling {\n\t\t\tbackground-color: rgb(15, 140, 50);\n\t\t\tpadding: 10px;\n\t\t\tborder-radius: 12px;\n\t\t\twidth: min(730px, 100%);\n\t\t\tmargin: auto;\n\t\t}\n\t\n\t\t.tooling h2 {\n\t\t\tmargin-left: 20px;\n\t\t\tmargin-bottom: 12px;\n\t\t\tmargin-top: 10px;\n\t\t}\n\t\n\t\t.tooling div {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t}</style></div> <div class="page"><h1>Showcase</h1> <p>I have about 450 different programming projects I\'ve started, but here are some of my more interesting ones. For useful projects check out the Tools tab</p> <!></div> <div class="page"><h2>Tools</h2> <!></div> <div class="page"><h2>Blog</h2> <!></div> <div class="page"><h1 style="margin-bottom: 0px; margin-top: 0px;">Contacts:</h1> <br><br> <div id="contacts-table"></div> <style>#contacts-table {\n\t\t\tbackground-color: transparent;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tflex-wrap: wrap;\n\t\t}</style></div> <div><script>\n        let pages = document.getElementsByClassName(\'page\');\n        function changePage(index) {\n            for (let i = 0; i < pages.length; i++) {\n                pages[i].style.display = \'none\';\n            }\n            pages[index].style.display = \'block\';\n            window.scroll(0, 0);\n        }\n        changePage(0);\n    <\/script>\x3c!----\x3e</div>',1);const Rt=new function n(t,e){if(new.target)return gt({component:n,...t});wn(e,!1);const r=[{name:"HTML",img:"./images/html.png"},{name:"JavaScript",img:"./images/js.png"},{name:"CSS",img:"./images/css.png"},{name:"Node JS",img:"./images/nodejs.png"},{name:"Dart",img:"./images/dart.webp"},{name:"WebAssembly",img:"./images/webassembly.png"}],i=[{name:"Zig",img:"./images/zig.png"},{name:"Java",img:"./images/java.png"},{name:"WebGL",img:"./images/webgl.png"},{name:"MongoDB",img:"./images/mongodb.png"},{name:"Podman",img:"./images/podman.png"},{name:"Svelte",img:"./images/svelte.png"}],o=[{link:"https://vxsacademy.org/",name:"Vexcess Academy",description:"A website where anyone can learn to code for free. Users can create projects in multiple different programming languages and then share them with the community."},{link:"https://github.com/librepaint/drawlite",name:"Drawlite",description:"Processing.js is decent graphics library, however it hasn't been updated since 2017 and is extremely slow. p5.js is the modern alternative, however p5 is an extremely bloated and overengineered library. Drawlite aims to solve the issues of both of the former. Drawlite is capable of doing nearly everything Processing can, however Drawlite weighs in at a mere 0.03 MB compared to the 1 MB Processing and the 4 MB p5. In addition benchmarks have proven Drawlite to be nearly 10x faster than Processing. Lastly Drawlite is cross platform and can run natively."},{link:"https://github.com/librepaint/librepaint-3d",name:"LibrePaint 3D",description:"Paint 3D was removed from the Microsoft Store on November 4, 2024. Because Microsoft killed Paint 3D I am creating a free and open source implementation of MS Paint 3D."},{link:"https://github.com/vExcess/Barbequery",name:"Barbequery",description:"A library that combines the best features from both jQuery and React while being faster than either of the two. Barbequery has very simple and elegant syntax. vxsacademy.org is an example of a website created using Barbequery."},{link:"https://github.com/vExcess/ka-monitor",name:"VexTron (previously KA Monitor)",description:"A Discord bot that has a sophisticated swear filter along with analytics features. It includes useful commands such as dictionary and translation commands and fun commands such as 'would you rather' questions"}],a=[{link:"https://vexcess.github.io/blog/creating-a-native-app-in-typescript",name:"I Tried Creating a Native App in TypeScript",description:"The story of how I tried and failed to compile a program in TypeScript to native code. This blog contains useful information on using Static Hermes in addition to details about shermes' faults. Lastly this blog contains my thought processes and rants about various softwares."},{link:"https://vexcess.github.io/blog/zig-for-webassembly-guide",name:"Zig for WebAssembly guide",description:"Tutorial on how to use Zig for web assembly. Guide is outdated, but most concepts still apply. If you want me to update it just let me know."}],l=[{link:"https://github.com/ka-extension/ka-extension-ts",name:"Extension for Khan Academy",description:'I\'ve contributed to the creation of the Extension for Khan Academy (formerly "The Khan Academy Extension") which is a browser extension that has over 600 users. It adds features to Khan Academy that make it more user friendly and customizable.'},{link:"https://vexcess.github.io/imagenator",name:"Imagenator",description:"Convert images to embedabble JavaScript code that can be run on Khan Academy. This is basically the result of my obsession with compression theory and image encoding."},{link:"https://vexcess.github.io/RankedPairsVoting",name:"Ranked Pairs Voting Calculator",description:"Calculates results from a ranked pairs voting election given CSV file"}],s=[{link:"https://www.github.com/vExcess",img:"./images/github.png",imgStyle:"transform: translate(4px, 0px) scale(0.82);margin-top: -60px;margin-bottom: 5px;filter: invert(1);",site:"Github",tag:"vExcess"},{link:"https://discord.com",img:"./images/discord.png",imgStyle:"margin-top: -60px;margin-bottom: 3px;transform: scale(1.2);",site:"Discord",tag:"vexcess"},{link:"https://replit.com/@vexcess",img:"./images/replit.png",imgStyle:"transform: scale(0.6);margin-top: -62px;margin-bottom: 4px;",site:"Replit",tag:"vexcess"},{link:"https://vxsacademy.org/profile/vexcess",img:"./images/logo.png",imgStyle:"transform: scale(0.75);margin-top: -62px;margin-bottom: 4px;",site:"VExcess Academy",tag:"vexcess"}];var u=Wt(),c=function(n){if(!Sn){var t=Bn(n);return t instanceof Comment&&""===t.data?Nn(t):t}return _n}(u);Vt(c,{});var f=On(c,2);At(f,{});var d=On(f,2),p=On(qn(d),9),v=On(qn(p),2);yt(v,5,(()=>r),mt,((n,t)=>{zt(n,Pt((()=>yn(t))))})),Pn(v),Pn(p);var g=On(p,5),h=On(qn(g),2);yt(h,5,(()=>i),mt,((n,t)=>{zt(n,Pt((()=>yn(t))))})),Pn(h),Pn(g),En(2),Pn(d);var m=On(d,2);yt(On(qn(m),4),1,(()=>o),mt,((n,t)=>{Nt(n,Pt((()=>yn(t))))})),Pn(m);var y=On(m,2);yt(On(qn(y),2),1,(()=>l),mt,((n,t)=>{Nt(n,Pt((()=>yn(t))))})),Pn(y);var x=On(y,2);yt(On(qn(x),2),1,(()=>a),mt,((n,t)=>{Nt(n,Pt((()=>yn(t))))})),Pn(x);var b=On(x,2),w=On(qn(b),5);return yt(w,5,(()=>s),mt,((n,t)=>{Ot(n,Pt((()=>yn(t))))})),Pn(w),En(2),Pn(b),En(2),lt(t,u),kn({$set:jt,$on:(n,t)=>$t(e,n,t)})}({target:document.body,props:{}});return Rt}();
