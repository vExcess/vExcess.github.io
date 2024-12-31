var app=function(){"use strict";const e=32,n=256,t=512,r=1024,i=2048,o=4096,l=8192,a=16384,s=1<<20,u=Symbol("$state"),c=Symbol("legacy props"),f=Symbol("");var d=Array.isArray,p=Array.from,v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyDescriptors,m=Object.getPrototypeOf;function y(e){return"function"==typeof e}let x=!1,b=[];function w(){x=!1;const e=b.slice();b=[],function(e){for(var n=0;n<e.length;n++)e[n]()}(e)}function k(e){console.warn("https://svelte.dev/e/hydration_mismatch")}const _={};function $(e){return e===this.v}function S(e){return n=e,t=this.v,!(n!=n?t==t:n!==t||null!==n&&"object"==typeof n||"function"==typeof n);var n,t}let j=!1;function T(e,n){return{f:0,v:e,reactions:null,equals:$,version:0}}function E(e,n=!1){const t=T(e);return n||(t.equals=S),j&&null!==ne&&null!==ne.l&&(ne.l.s??=[]).push(t),t}function C(e,n){return null!==J&&re()&&18&J.f&&(null===G||!G.includes(e))&&function(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}(),P(e,n)}function P(n,t){return n.equals(t)||(n.v=t,n.version=te(),I(n,i),re()&&null!==Z&&Z.f&r&&!(Z.f&e)&&(null!==U&&U.includes(n)?(xe(Z,i),ve(Z)):null===X?function(e){X=e}([n]):X.push(n))),t}function I(e,n){var t=e.reactions;if(null!==t)for(var r=re(),l=t.length,a=0;a<l;a++){var s=t[a],u=s.f;u&i||(r||s!==Z)&&(xe(s,n),1280&u&&(2&u?I(s,o):ve(s)))}}function A(e){var n=e.children;if(null!==n){e.children=null;for(var t=0;t<n.length;t+=1){var r=n[t];2&r.f?B(r):Ze(r)}}}function M(e){var n,t=Z;F(function(e){for(var n=e.parent;null!==n;){if(!(2&n.f))return n;n=n.parent}return null}(e));try{A(e),n=le(e)}finally{F(t)}return n}function z(e){var t=M(e);xe(e,(ee||e.f&n)&&null!==e.deps?o:r),e.equals(t)||(e.v=t,e.version=te())}function B(e){A(e),se(e,0),xe(e,a),e.v=e.children=e.deps=e.ctx=e.reactions=null}const N=0;let q=!1,D=N,O=!1,R=null,V=!1;function L(e){V=e}let W=[],K=0,J=null;function H(e){J=e}let Z=null;function F(e){Z=e}let G=null,U=null,Q=0,X=null;let Y=1,ee=!1,ne=null;function te(){return++Y}function re(){return!j||null!==ne&&null===ne.l}function ie(e){var l=e.f;if(l&i)return!0;if(l&o){var a=e.deps,s=!!(l&n);if(null!==a){var u;if(l&t){for(u=0;u<a.length;u++)(a[u].reactions??=[]).push(e);e.f^=t}for(u=0;u<a.length;u++){var c=a[u];if(ie(c)&&z(c),!s||null===Z||ee||c?.reactions?.includes(e)||(c.reactions??=[]).push(e),c.version>e.version)return!0}}s&&(null===Z||ee)||xe(e,r)}return!1}function oe(e,n,t,r){if(q){if(null===t&&(q=!1),function(e){return!(e.f&a||null!==e.parent&&128&e.parent.f)}(n))throw e}else null!==t&&(q=!0),function(e,n){for(var t=n;null!==t;){if(128&t.f)try{return void t.fn(e)}catch{t.f^=128}t=t.parent}throw q=!1,e}(e,n)}function le(e){var t=U,r=Q,i=X,o=J,l=ee,a=G,s=ne,u=e.f;U=null,Q=0,X=null,J=96&u?null:e,ee=!V&&!!(u&n),G=null,ne=e.ctx;try{var c=(0,e.fn)(),f=e.deps;if(null!==U){var d;if(se(e,Q),null!==f&&Q>0)for(f.length=Q+U.length,d=0;d<U.length;d++)f[Q+d]=U[d];else e.deps=f=U;if(!ee)for(d=Q;d<f.length;d++)(f[d].reactions??=[]).push(e)}else null!==f&&Q<f.length&&(se(e,Q),f.length=Q);return c}finally{U=t,Q=r,X=i,J=o,ee=l,G=a,ne=s}}function ae(e,n){let r=n.reactions;if(null!==r){var i=r.indexOf(e);if(-1!==i){var l=r.length-1;0===l?r=n.reactions=null:(r[i]=r[l],r.pop())}}null===r&&2&n.f&&(null===U||!U.includes(n))&&(xe(n,o),768&n.f||(n.f^=t),se(n,0))}function se(e,n){var t=e.deps;if(null!==t)for(var r=n;r<t.length;r++)ae(e,t[r])}function ue(n){var t=n.f;if(!(t&a)){xe(n,r);var i=Z,o=ne;Z=n;try{16&t?function(n){var t=n.first;for(;null!==t;){var r=t.next;t.f&e||Ze(t),t=r}}(n):He(n),Je(n),Ke(n);var l=le(n);n.teardown="function"==typeof l?l:null,n.version=Y}catch(e){oe(e,n,i,o||n.ctx)}finally{Z=i}}}function ce(){if(K>1e3){K=0;try{!function(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}()}catch(e){if(null===R)throw e;oe(e,R,null)}}K++}function fe(e){var n=e.length;if(0!==n){ce();var t=V;V=!0;try{for(var i=0;i<n;i++){var o=e[i];o.f&r||(o.f^=r);var l=[];ge(o,l),de(l)}}finally{V=t}}}function de(e){var n=e.length;if(0!==n)for(var t=0;t<n;t++){var r=e[t];if(!(24576&r.f))try{ie(r)&&(ue(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?Fe(r):r.fn=null))}catch(e){oe(e,r,null,r.ctx)}}}function pe(){if(O=!1,K>1001)return;const e=W;W=[],fe(e),O||(K=0,R=null)}function ve(e){D===N&&(O||(O=!0,queueMicrotask(pe))),R=e;for(var n=e;null!==n.parent;){var t=(n=n.parent).f;if(96&t){if(!(t&r))return;n.f^=r}}W.push(n)}function ge(n,t){var i=n.first,o=[];e:for(;null!==i;){var a=i.f,s=!!(a&e),u=s&&!!(a&r),c=i.next;if(!(u||a&l))if(8&a){if(s)i.f^=r;else try{ie(i)&&ue(i)}catch(e){oe(e,i,null,i.ctx)}var f=i.first;if(null!==f){i=f;continue}}else 4&a&&o.push(i);if(null===c){let e=i.parent;for(;null!==e;){if(n===e)break e;var d=e.next;if(null!==d){i=d;continue e}e=e.parent}}i=c}for(var p=0;p<o.length;p++)f=o[p],t.push(f),ge(f,t)}function he(e){var n=D,t=W;try{ce();const n=[];D=1,W=n,O=!1,fe(t);var r=e?.();return x&&w(),(W.length>0||n.length>0)&&he(),K=0,R=null,r}finally{D=n,W=t}}function me(n){var t=n.f,o=!!(2&t);if(o&&t&a){var l=M(n);return B(n),l}if(null!==J){null!==G&&G.includes(n)&&function(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}();var s=J.deps;null===U&&null!==s&&s[Q]===n?Q++:null===U?U=[n]:U.push(n),null!==X&&null!==Z&&Z.f&r&&!(Z.f&e)&&X.includes(n)&&(xe(Z,i),ve(Z))}else if(o&&null===n.deps)for(var u=n,c=u.parent,f=u;null!==c;){if(!(2&c.f)){var d=c;d.deriveds?.includes(f)||(d.deriveds??=[]).push(f);break}f=c,c=c.parent}return o&&ie(u=n)&&z(u),n.v}const ye=-7169;function xe(e,n){e.f=e.f&ye|n}function be(e,n=!1,t){ne={p:ne,c:null,e:null,m:!1,s:e,x:null,l:null},j&&!n&&(ne.l={s:null,u:null,r1:[],r2:T(!1)})}function we(e){const n=ne;if(null!==n){void 0!==e&&(n.x=e);const l=n.e;if(null!==l){var t=Z,r=J;n.e=null;try{for(var i=0;i<l.length;i++){var o=l[i];F(o.effect),H(o.reaction),Re(4,o.fn,!1)}}finally{F(t),H(r)}}ne=n.p,n.m=!0}return e||{}}let ke,_e=!1;function $e(e){_e=e}function Se(e){if(null===e)throw k(),_;return ke=e}function je(){return Se(Ne(ke))}function Te(e){if(_e){if(null!==Ne(ke))throw k(),_;ke=e}}function Ee(e=1){if(_e){for(var n=e,t=ke;n--;)t=Ne(t);ke=t}}function Ce(){for(var e=0,n=ke;;){if(8===n.nodeType){var t=n.data;if("]"===t){if(0===e)return n;e-=1}else"["!==t&&"[!"!==t||(e+=1)}var r=Ne(n);n.remove(),n=r}}var Pe,Ie,Ae;function Me(){if(void 0===Pe){Pe=window;var e=Element.prototype,n=Node.prototype;Ie=g(n,"firstChild").get,Ae=g(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function ze(e=""){return document.createTextNode(e)}function Be(e){return Ie.call(e)}function Ne(e){return Ae.call(e)}function qe(e,n){if(!_e)return Be(e);var t=Be(ke);if(null===t)t=ke.appendChild(ze());else if(n&&3!==t.nodeType){var r=ze();return t?.before(r),Se(r),r}return Se(t),t}function De(e,n=1,t=!1){let r=_e?ke:e;for(var i;n--;)i=r,r=Ne(r);if(!_e)return r;var o=r?.nodeType;if(t&&3!==o){var l=ze();return null===r?i?.after(l):r.before(l),Se(l),l}return Se(r),r}function Oe(e){e.textContent=""}function Re(e,n,t,r=!0){var o=!!(64&e),l=Z,a={ctx:ne,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|i,first:null,fn:n,last:null,next:null,parent:o?null:l,prev:null,teardown:null,transitions:null,version:0};if(t){var u=V;try{L(!0),ue(a),a.f|=32768}catch(e){throw Ze(a),e}finally{L(u)}}else null!==n&&ve(a);if(!(t&&null===a.deps&&null===a.first&&null===a.nodes_start&&null===a.teardown&&!(a.f&s))&&!o&&r&&(null!==l&&function(e,n){var t=n.last;null===t?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}(a,l),null!==J&&2&J.f)){var c=J;(c.children??=[]).push(a)}return a}function Ve(e){return Le(e)}function Le(e,n=0){return Re(24|n,e,!0)}function We(e,n=!0){return Re(40,e,!0,n)}function Ke(e){var n=e.teardown;if(null!==n){const e=J;H(null);try{n.call(null)}finally{H(e)}}}function Je(e){var n=e.deriveds;if(null!==n){e.deriveds=null;for(var t=0;t<n.length;t+=1)B(n[t])}}function He(e,n=!1){var t=e.first;for(e.first=e.last=null;null!==t;){var r=t.next;Ze(t,n),t=r}}function Ze(e,n=!0){var t=!1;if((n||524288&e.f)&&null!==e.nodes_start){for(var r=e.nodes_start,i=e.nodes_end;null!==r;){var o=r===i?null:Ne(r);r.remove(),r=o}t=!0}He(e,n&&!t),Je(e),se(e,0),xe(e,a);var l=e.transitions;if(null!==l)for(const e of l)e.stop();Ke(e);var s=e.parent;null!==s&&null!==s.first&&Fe(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Fe(e){var n=e.parent,t=e.prev,r=e.next;null!==t&&(t.next=r),null!==r&&(r.prev=t),null!==n&&(n.first===e&&(n.first=r),n.last===e&&(n.last=t))}function Ge(e,n){var t=[];Qe(e,t,!0),Ue(t,(()=>{Ze(e),n&&n()}))}function Ue(e,n){var t=e.length;if(t>0){var r=()=>--t||n();for(var i of e)i.out(r)}else n()}function Qe(n,t,r){if(!(n.f&l)){if(n.f^=l,null!==n.transitions)for(const e of n.transitions)(e.is_global||r)&&t.push(e);for(var i=n.first;null!==i;){var o=i.next;Qe(i,t,!!(!!(65536&i.f)||!!(i.f&e))&&r),i=o}}}function Xe(e){Ye(e,!0)}function Ye(n,t){if(n.f&l){ie(n)&&ue(n),n.f^=l;for(var r=n.first;null!==r;){var i=r.next;Ye(r,!!(!!(65536&r.f)||!!(r.f&e))&&t),r=i}if(null!==n.transitions)for(const e of n.transitions)(e.is_global||t)&&e.in()}}const en=new Set,nn=new Set;function tn(e){var n=this,t=n.ownerDocument,r=e.type,i=e.composedPath?.()||[],o=i[0]||e.target,l=0,a=e.__root;if(a){var s=i.indexOf(a);if(-1!==s&&(n===document||n===window))return void(e.__root=n);var u=i.indexOf(n);if(-1===u)return;s<=u&&(l=s)}if((o=i[l]||e.target)!==n){v(e,"currentTarget",{configurable:!0,get:()=>o||t});var c=J,f=Z;H(null),F(null);try{for(var p,g=[];null!==o;){var h=o.assignedSlot||o.parentNode||o.host||null;try{var m=o["__"+r];if(void 0!==m&&!o.disabled)if(d(m)){var[y,...x]=m;y.apply(o,[e,...x])}else m.call(o,e)}catch(e){p?g.push(e):p=e}if(e.cancelBubble||h===n||null===h)break;o=h}if(p){for(let e of g)queueMicrotask((()=>{throw e}));throw p}}finally{e.__root=n,delete e.currentTarget,H(c),F(f)}}}function rn(e,n){var t=Z;null===t.nodes_start&&(t.nodes_start=e,t.nodes_end=n)}function on(e,n){var t,r=!!(1&n),i=!!(2&n),o=!e.startsWith("<!>");return()=>{if(_e)return rn(ke,null),ke;var n,l;void 0===t&&(n=o?e:"<!>"+e,(l=document.createElement("template")).innerHTML=n,t=l.content,r||(t=Be(t)));var a=i?document.importNode(t,!0):t.cloneNode(!0);r?rn(Be(a),a.lastChild):rn(a,a);return a}}function ln(e,n){var t=on(e,n);return()=>function(e){if(_e)return e;const n=11===e.nodeType,t="SCRIPT"===e.tagName?[e]:e.querySelectorAll("script"),r=Z;for(const o of t){const t=document.createElement("script");for(var i of o.attributes)t.setAttribute(i.name,i.value);t.textContent=o.textContent,(n?e.firstChild===o:e===o)&&(r.nodes_start=t),(n?e.lastChild===o:e===o)&&(r.nodes_end=t),o.replaceWith(t)}return e}(t())}function an(e,n){if(_e)return Z.nodes_end=ke,void je();null!==e&&e.before(n)}const sn=["touchstart","touchmove"];function un(e,n){var t=null==n?"":"object"==typeof n?n+"":n;t!==(e.__t??=e.nodeValue)&&(e.__t=t,e.nodeValue=null==t?"":t+"")}function cn(e,n){return pn(e,n)}function fn(e,n){Me(),n.intro=n.intro??!1;const t=n.target,r=_e,i=ke;try{for(var o=Be(t);o&&(8!==o.nodeType||"["!==o.data);)o=Ne(o);if(!o)throw _;$e(!0),Se(o),je();const r=pn(e,{...n,anchor:o});if(null===ke||8!==ke.nodeType||"]"!==ke.data)throw k(),_;return $e(!1),r}catch(r){if(r===_)return!1===n.recover&&function(){throw new Error("https://svelte.dev/e/hydration_failed")}(),Me(),Oe(t),$e(!1),cn(e,n);throw r}finally{$e(r),Se(i)}}const dn=new Map;function pn(e,{target:n,anchor:t,props:r={},events:i,context:o,intro:l=!0}){Me();var a=new Set,s=e=>{for(var t=0;t<e.length;t++){var r=e[t];if(!a.has(r)){a.add(r);var i=(l=r,sn.includes(l));n.addEventListener(r,tn,{passive:i});var o=dn.get(r);void 0===o?(document.addEventListener(r,tn,{passive:i}),dn.set(r,1)):dn.set(r,o+1)}}var l};s(p(en)),nn.add(s);var u=void 0,c=function(e){const n=Re(64,e,!0);return(e={})=>new Promise((t=>{e.outro?Ge(n,(()=>{Ze(n),t(void 0)})):(Ze(n),t(void 0))}))}((()=>{var l=t??n.appendChild(ze());return We((()=>{o&&(be({}),ne.c=o);i&&(r.$$events=i),_e&&rn(l,null),u=e(l,r)||{},_e&&(Z.nodes_end=ke),o&&we()})),()=>{for(var e of a){n.removeEventListener(e,tn);var r=dn.get(e);0==--r?(document.removeEventListener(e,tn),dn.delete(e)):dn.set(e,r)}nn.delete(s),l!==t&&l.parentNode?.removeChild(l)}}));return vn.set(u,c),u}let vn=new WeakMap;function gn(e){return new hn(e)}class hn{#e;#n;constructor(e){var n=new Map,t=(e,t)=>{var r=E(t);return n.set(e,r),r};const r=new Proxy({...e.props||{},$$events:{}},{get:(e,r)=>me(n.get(r)??t(r,Reflect.get(e,r))),has:(e,r)=>r===c||(me(n.get(r)??t(r,Reflect.get(e,r))),Reflect.has(e,r)),set:(e,r,i)=>(C(n.get(r)??t(r,i),i),Reflect.set(e,r,i))});this.#n=(e.hydrate?fn:cn)(e.component,{target:e.target,anchor:e.anchor,props:r,context:e.context,intro:e.intro??!1,recover:e.recover}),e?.props?.$$host&&!1!==e.sync||he(),this.#e=r.$$events;for(const e of Object.keys(this.#n))"$set"!==e&&"$destroy"!==e&&"$on"!==e&&v(this,e,{get(){return this.#n[e]},set(n){this.#n[e]=n},enumerable:!0});this.#n.$set=e=>{Object.assign(r,e)},this.#n.$destroy=()=>{!function(e,n){const t=vn.get(e);t?(vn.delete(e),t(n)):Promise.resolve()}(this.#n)}}$set(e){this.#n.$set(e)}$on(e,n){this.#e[e]=this.#e[e]||[];const t=(...e)=>n.call(this,...e);return this.#e[e].push(t),()=>{this.#e[e]=this.#e[e].filter((e=>e!==t))}}$destroy(){this.#n.$destroy()}}function mn(e,n){return n}function yn(e,n,t,r,i,o=null){var a=e,s={flags:n,items:new Map,first:null};if(!!(4&n)){var u=e;a=_e?Se(Be(u)):u.appendChild(ze())}_e&&je();var c=null,f=!1;Le((()=>{var e=t(),u=d(e)?e:null==e?[]:p(e),v=u.length;if(f&&0===v)return;f=0===v;let g=!1;_e&&("[!"===a.data!==(0===v)&&(Se(a=Ce()),$e(!1),g=!0));if(_e){for(var h,m=null,y=0;y<v;y++){if(8===ke.nodeType&&"]"===ke.data){a=ke,g=!0,$e(!1);break}var k=u[y],_=r(k,y);h=bn(ke,s,m,null,k,_,y,i,n),s.items.set(_,h),m=h}v>0&&Se(Ce())}_e||function(e,n,t,r,i,o,a){var s,u,c,f,d,v,g=!!(8&i),h=!!(3&i),m=e.length,y=n.items,k=n.first,_=k,$=null,S=[],j=[];if(g)for(v=0;v<m;v+=1)f=a(c=e[v],v),void 0!==(d=y.get(f))&&(d.a?.measure(),(u??=new Set).add(d));for(v=0;v<m;v+=1)if(f=a(c=e[v],v),void 0!==(d=y.get(f))){if(h&&xn(d,c,v,i),d.e.f&l&&(Xe(d.e),g&&(d.a?.unfix(),(u??=new Set).delete(d))),d!==_){if(void 0!==s&&s.has(d)){if(S.length<j.length){var T,E=j[0];$=E.prev;var C=S[0],P=S[S.length-1];for(T=0;T<S.length;T+=1)wn(S[T],E,t);for(T=0;T<j.length;T+=1)s.delete(j[T]);kn(n,C.prev,P.next),kn(n,$,C),kn(n,P,E),_=E,$=P,v-=1,S=[],j=[]}else s.delete(d),wn(d,_,t),kn(n,d.prev,d.next),kn(n,d,null===$?n.first:$.next),kn(n,$,d),$=d;continue}for(S=[],j=[];null!==_&&_.k!==f;)!o&&_.e.f&l||(s??=new Set).add(_),j.push(_),_=_.next;if(null===_)continue;d=_}S.push(d),$=d,_=d.next}else{$=bn(_?_.e.nodes_start:t,n,$,null===$?n.first:$.next,c,f,v,r,i),y.set(f,$),S=[],j=[],_=$.next}if(null!==_||void 0!==s){for(var I=void 0===s?[]:p(s);null!==_;)!o&&_.e.f&l||I.push(_),_=_.next;var A=I.length;if(A>0){var M=4&i&&0===m?t:null;if(g){for(v=0;v<A;v+=1)I[v].a?.measure();for(v=0;v<A;v+=1)I[v].a?.fix()}!function(e,n,t,r){for(var i=[],o=n.length,l=0;l<o;l++)Qe(n[l].e,i,!0);var a=o>0&&0===i.length&&null!==t;if(a){var s=t.parentNode;Oe(s),s.append(t),r.clear(),kn(e,n[0].prev,n[o-1].next)}Ue(i,(()=>{for(var t=0;t<o;t++){var i=n[t];a||(r.delete(i.k),kn(e,i.prev,i.next)),Ze(i.e,!a)}}))}(n,I,M,y)}}g&&(z=()=>{if(void 0!==u)for(d of u)d.a?.apply()},x||(x=!0,queueMicrotask(w)),b.push(z));var z;Z.first=n.first&&n.first.e,Z.last=$&&$.e}(u,s,a,i,n,!!(J.f&l),r);null!==o&&(0===v?c?Xe(c):c=We((()=>o(a))):null!==c&&Ge(c,(()=>{c=null}))),g&&$e(!0),t()})),_e&&(a=ke)}function xn(e,n,t,r){1&r&&P(e.v,n),2&r?P(e.i,t):e.i=t}function bn(e,n,t,r,i,o,l,a,s,u){var c=!!(1&s)?!(16&s)?E(i):T(i):i,f=2&s?T(l):l,d={i:f,v:c,k:o,a:null,e:null,prev:t,next:r};try{return d.e=We((()=>a(e,c,f)),_e),d.e.prev=t&&t.e,d.e.next=r&&r.e,null===t?n.first=d:(t.next=d,t.e.next=d.e),null!==r&&(r.prev=d,r.e.prev=d.e),d}finally{}}function wn(e,n,t){for(var r=e.next?e.next.e.nodes_start:t,i=n?n.e.nodes_start:t,o=e.e.nodes_start;o!==r;){var l=Ne(o);i.before(o),o=l}}function kn(e,n,t){null===n?e.first=t:(n.next=t,n.e.next=t&&t.e),null!==t&&(t.prev=n,t.e.prev=n&&n.e)}function _n(e,n,t,r){var i=e.__attributes??={};_e&&(i[n]=e.getAttribute(n),"src"===n||"srcset"===n||"href"===n&&"LINK"===e.nodeName)||i[n]!==(i[n]=t)&&("style"===n&&"__styles"in e&&(e.__styles={}),"loading"===n&&(e[f]=t),null==t?e.removeAttribute(n):"string"!=typeof t&&function(e){var n,t=$n.get(e.nodeName);if(t)return t;$n.set(e.nodeName,t=[]);var r=e,i=Element.prototype;for(;i!==r;){for(var o in n=h(r))n[o].set&&t.push(o);r=m(r)}return t}(e).includes(n)?e[n]=t:e.setAttribute(n,t))}"undefined"!=typeof window&&(window.__svelte||={v:new Set}).v.add("5"),j=!0;var $n=new Map;function Sn(e,n,t){e.$$events||={},e.$$events[n]||=[],e.$$events[n].push(t)}function jn(e){for(var n in e)n in this&&(this[n]=e[n])}const Tn={get(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(y(r)&&(r=r()),"object"==typeof r&&null!==r&&n in r)return r[n]}},set(e,n,t){let r=e.props.length;for(;r--;){let i=e.props[r];y(i)&&(i=i());const o=g(i,n);if(o&&o.set)return o.set(t),!0}return!1},getOwnPropertyDescriptor(e,n){let t=e.props.length;for(;t--;){let r=e.props[t];if(y(r)&&(r=r()),"object"==typeof r&&null!==r&&n in r){const e=g(r,n);return e&&!e.configurable&&(e.configurable=!0),e}}},has(e,n){if(n===u||n===c)return!1;for(let t of e.props)if(y(t)&&(t=t()),null!=t&&n in t)return!0;return!1},ownKeys(e){const n=[];for(let t of e.props){y(t)&&(t=t());for(const e in t)n.includes(e)||n.push(e)}return n}};function En(...e){return new Proxy({props:e},Tn)}function Cn(e,t,r,i){var o,l=!j||!!(2&r);o=e[t];var a,u=g(e,t)?.set??void 0,c=i,f=!0,d=!1;if(a=()=>{var n=e[t];return void 0===n?(d=!0,f&&(f=!1,c=i),c):(f=!0,d=!1,n)},u){var p=e.$$legacy;return function(e,n){return arguments.length>0?(l&&n&&!p||u(n?a():e),e):a()}}var v=!1,h=E(o),m=function(e){for(var n=Z,t=Z;null!==n&&!(96&n.f);)n=n.parent;try{return F(n),e()}finally{F(t)}}((()=>function(e){var t=2050;null===Z?t|=n:Z.f|=s;var r=null!==J&&2&J.f?J:null;const i={children:null,ctx:ne,deps:null,equals:$,f:t,fn:e,reactions:null,v:null,version:0,parent:r??Z};return null!==r&&(r.children??=[]).push(i),i}((()=>{var e=a(),n=me(h);return v?(v=!1,n):h.v=e}))));return function(e,n){if(arguments.length>0){const t=n?me(m):e;return m.equals(t)||(v=!0,C(h,t),d&&void 0!==c&&(c=t),function(e){const n=J;try{return J=null,e()}finally{J=n}}((()=>me(m)))),e}return me(m)}}var Pn=on("<a> </a>");function In(e,n){if(new.target)return gn({component:In,...e});be(n,!0);const t=Cn(n,"pageId",7),r=Cn(n,"label",7);var i=Pn(),o=qe(i,!0);return Te(i),Ve((()=>{_n(i,"href",`javascript:changePage(${t()??""});`),un(o,r())})),an(e,i),we({get pageId(){return t()},set pageId(e){t(e),he()},get label(){return r()},set label(e){r(e),he()},$set:jn,$on:(e,t)=>Sn(n,e,t)})}var An=on('<div id="navTool" class="svelte-1wcr75l"><a href="https://vexcess.github.io/" target="_self" style="padding: 13px; padding-left: 18px;"><img src="./images/logo.png" width="16" height="16" style="transform: scale(2); display: inline-block; margin-top: 2px; margin-right: 4px;" alt=""> <strong style="display: inline-block; margin-left: 6px; margin-top: 6px;">VExcess</strong></a> <!></div>');function Mn(e,n){if(new.target)return gn({component:Mn,...e});be(n,!1);var t=An();return yn(De(qe(t),2),0,(()=>["About","Showcase","Resources","Contact"]),mn,((e,n,t)=>{In(e,{get label(){return n},pageId:t})})),Te(t),an(e,t),we({$set:jn,$on:(e,t)=>Sn(n,e,t)})}var zn=on('<div style="background-color: rgb(0, 0, 0, 0.8); border-radius: 8px; padding: 12px; margin: 6px; width: 200px;"><div style="display: flex;"><img width="55px" height="55px" style="display: inline-block;" alt=""> <strong style="display: inline-block; margin-left: 16px; line-height: 55px; font-size: 22px; transform: translate(0px, 2px);"> </strong></div></div>');function Bn(e,n){if(new.target)return gn({component:Bn,...e});be(n,!0);const t=Cn(n,"img",7),r=Cn(n,"name",7);var i=zn(),o=qe(i),l=qe(o),a=De(l,2),s=qe(a,!0);return Te(a),Te(o),Te(i),Ve((()=>{_n(l,"src",t()),un(s,r())})),an(e,i),we({get img(){return t()},set img(e){t(e),he()},get name(){return r()},set name(e){r(e),he()},$set:jn,$on:(e,t)=>Sn(n,e,t)})}var Nn=on('<a target="_blank" class="resource-box hover-glow svelte-b0zduw"><strong style="text-decoration: underline;"> </strong> <br><br> </a>');function qn(e,n){if(new.target)return gn({component:qn,...e});be(n,!0);const t=Cn(n,"link",7),r=Cn(n,"name",7),i=Cn(n,"description",7);var o=Nn(),l=qe(o),a=qe(l,!0);Te(l);var s=De(l,4);return Te(o),Ve((()=>{_n(o,"href",t()),un(a,r()),un(s,` ${i()??""}`)})),an(e,o),we({get link(){return t()},set link(e){t(e),he()},get name(){return r()},set name(e){r(e),he()},get description(){return i()},set description(e){i(e),he()},$set:jn,$on:(e,t)=>Sn(n,e,t)})}var Dn=on('<div style="padding: 10px; background-color: transparent;"><a class="contact-box hover-glow svelte-xpjig7" target="_blank"><img height="95px" alt=""> <strong class="svelte-xpjig7"> <strong class="svelte-xpjig7"><div style="height: 14px;"></div> <strong style="font-family: Consolas, monospace;" class="svelte-xpjig7"> <strong class="svelte-xpjig7"></strong></strong></strong></strong></a></div>');function On(e,n){if(new.target)return gn({component:On,...e});be(n,!0);const t=Cn(n,"link",7),r=Cn(n,"img",7),i=Cn(n,"imgStyle",7),o=Cn(n,"site",7),l=Cn(n,"tag",7);var a=Dn(),s=qe(a),u=qe(s),c=De(u,2),f=qe(c,!0),d=De(f),p=De(qe(d),2),v=qe(p);return Ee(),Te(p),Te(d),Te(c),Te(s),Te(a),Ve((()=>{_n(s,"href",t()),_n(u,"src",r()),_n(u,"style",i()),un(f,o()),un(v,`@${l()??""}`)})),an(e,a),we({get link(){return t()},set link(e){t(e),he()},get img(){return r()},set img(e){r(e),he()},get imgStyle(){return i()},set imgStyle(e){i(e),he()},get site(){return o()},set site(e){o(e),he()},get tag(){return l()},set tag(e){l(e),he()},$set:jn,$on:(e,t)=>Sn(n,e,t)})}var Rn=ln('<canvas id="background-canvas" style="background-color: black;"></canvas> <div><script>\n        let canvas = document.getElementById("background-canvas");\n        let ctx = canvas.getContext("2d");\n    \n        canvas.style.position = "fixed";\n        canvas.style.left = "0px";\n        canvas.style.top = "0px";\n        canvas.style.zIndex = "-1";\n        \n        async function updateBackground () {\n            canvas.width = window.innerWidth;\n            canvas.height = window.innerHeight;\n    \n            let width = canvas.width;\n            let height = canvas.height;\n    \n            let sin = ang => Math.sin(ang * Math.PI / 180);\n            let cos = ang => Math.cos(ang * Math.PI / 180);\n    \n            function piece (x, y, r, sz) {\n                let ang = 120;\n                let thicc = 50;\n                \n                ctx.save();\n                    ctx.translate(x, y);\n                    ctx.rotate(r * Math.PI / 180);\n                    ctx.scale(sz || 1, sz || 1);\n                    \n                    ctx.beginPath();\n                        ctx.moveTo(0, 0);\n                        ctx.lineTo(100, 0);\n                        ctx.lineTo(76, sin(ang / 2) * thicc);\n                        ctx.lineTo(cos(ang / 2) * thicc, sin(ang / 2) * thicc);\n                        ctx.lineTo(thicc + cos(ang) * 100, sin(ang) * 100);\n                        ctx.lineTo(cos(ang) * 100, sin(ang) * 100);\n                        ctx.lineTo(0, 0);\n                    ctx.fill();\n                    \n                    ctx.strokeStyle = "rgba(0, 150, 75, 0.6)";\n                    for (let i = -49; i < 100; i += 8) {\n                        let j = i + 50;\n                        let k = j;\n                        \n                        if (i < 1) {\n                            j = 87 - j * 1.7;\n                        } else {\n                            j = 1;\n                        }\n                        \n                        if (i < 1) {\n                            k = 86;\n                        } else if (i < 23) {\n                            k = 170 - k * 1.7;\n                        } else if (i < 76) {\n                            k = 43;\n                        } else {\n                            k = 255 - k * 1.7;\n                        }\n                        \n                        ctx.beginPath();\n                        ctx.moveTo(i, j);\n                        ctx.lineTo(i, k);\n                        ctx.stroke();\n                    }\n                ctx.restore();\n            }\n    \n            let spin = 30;\n            let sz = 0.5;\n    \n            let offset = 0;\n            for (let y = 0; y < height + 100; y += sz * 75) {\n                for (let x = 0; x < width + 100; x += sz * 260) {\n                    ctx.fillStyle = "rgb(20, 20, 20)";\n                    piece(x + offset, y, spin, sz);\n                    ctx.fillStyle = "rgb(0, 0, 0)";\n                    piece(x + offset, y, spin + 120, sz);\n                    ctx.fillStyle = "rgb(40, 40, 40)";\n                    piece(x + offset, y, spin + 240, sz);\n                }\n                \n                if (offset === 0) {\n                    offset = sz * 130;\n                } else {\n                    offset = 0;\n                }\n            }\n        }\n    \n        updateBackground();\n    \n        window.addEventListener("resize", updateBackground);\n    <\/script>\x3c!----\x3e</div>',1);function Vn(e,n){if(new.target)return gn({component:Vn,...e});be(n,!1);var t=Rn();return Ee(2),an(e,t),we({$set:jn,$on:(e,t)=>Sn(n,e,t)})}var Ln=ln('<!> <!> <div class="page"><h1 style="margin-top: 10px;">VExcess</h1> <pre><code class="language-javascript" style="font-size: 14px;">let VExcess = &#123;\n\tname: "Vincent S.",\n\tlocation: "United States",\n\tdescription: `\n\t\tFull stack web developer;\n\t\tBeen web developing since 2012;\n\t\tif (performanceCrucial) use(Zig) else use(JavaScript);\n\t`\n};</code></pre> <br><br> <h2 style="margin-bottom: 12px; margin-top: 0px;">Tooling:</h2> <div class="tooling"><h2>Much Experience With:</h2> <div id="proficient"></div></div> <br><br> <div class="tooling"><h2>Some Experience With:</h2> <div id="has-experience"></div></div> <style>.tooling {\n\t\t\tbackground-color: rgb(15, 140, 50);\n\t\t\tpadding: 10px;\n\t\t\tborder-radius: 12px;\n\t\t\twidth: min(730px, 100%);\n\t\t\tmargin: auto;\n\t\t}\n\t\n\t\t.tooling h2 {\n\t\t\tmargin-left: 20px;\n\t\t\tmargin-bottom: 12px;\n\t\t\tmargin-top: 10px;\n\t\t}\n\t\n\t\t.tooling div {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t}</style></div> <div class="page"><h1>Showcase</h1> <p>I have about 450 different programming projects I\'ve started, but here are some of my more interesting ones. For useful projects check out the Resources tab</p> <!></div> <div class="page"><h2>Resources</h2> <!></div> <div class="page"><h1 style="margin-bottom: 0px; margin-top: 0px;">Contacts:</h1> <br><br> <div id="contacts-table"></div> <style>#contacts-table {\n\t\t\tbackground-color: transparent;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tflex-wrap: wrap;\n\t\t}</style></div> <div><script>\n        let pages = document.getElementsByClassName(\'page\');\n        function changePage(index) {\n            for (let i = 0; i < pages.length; i++) {\n                pages[i].style.display = \'none\';\n            }\n            pages[index].style.display = \'block\';\n            window.scroll(0, 0);\n        }\n        changePage(0);\n    <\/script>\x3c!----\x3e</div>',1);const Wn=new function e(n,t){if(new.target)return gn({component:e,...n});be(t,!1);const r=[{name:"HTML",img:"./images/html.png"},{name:"JavaScript",img:"./images/js.png"},{name:"CSS",img:"./images/css.png"},{name:"Node JS",img:"./images/nodejs.png"},{name:"WebGL",img:"./images/webgl.png"},{name:"WebAssembly",img:"./images/webassembly.png"}],i=[{name:"Zig",img:"./images/zig.png"},{name:"Java",img:"./images/java.png"},{name:"Rust",img:"./images/rust.png"},{name:"MongoDB",img:"./images/mongodb.png"},{name:"Docker",img:"./images/docker.png"},{name:"Svelte",img:"./images/svelte.png"}],o=[{link:"https://vxsacademy.org/",name:"Vexcess Academy",description:"A website where anyone can learn to code for free. Users can create projects in multiple different programming languages and then share them with the community. This is the main project I've been working on recently."},{link:"https://github.com/vExcess/Drawlite",name:"Drawlite",description:"Processing.js is decent graphics library, however it hasn't been updated since 2017 and is extremely slow. p5.js is the modern alternative, however p5 is an extremely bloated and overengineered library. Drawlite aims to solve the issues of both of the former. Drawlite is capable of doing nearly everything Processing can, however Drawlite weighs in at a mere 0.03 MB compared to the 1 MB Processing and the 4 MB p5. In addition benchmarks have proven Drawlite to be nearly 10x faster than Processing."},{link:"https://github.com/vExcess/Barbequery",name:"Barbequery",description:"A library that combines the best features from both jQuery and React while being faster than either of the two. Barbequery has very simple and elegant syntax and pretty much all the websites I've made including this one have been created using Barbequery."},{link:"https://vxsacademy.org/computer-programming/op21YXlmoae7fl",name:"Flappy Bird Clone",description:"I've made multiple video games, but this is probably my most polished one."},{link:"https://github.com/vExcess/ka-monitor",name:"VexTron (previously KA Monitor)",description:"A Discord bot that has extremely an extremely good swear filter along with analytics features. It includes useful commands such as dictionary and translation commands and fun commands such as 'would you rather' questions"}],l=[{link:"https://vexcess.github.io/blog/zig-for-webassembly-guide",name:"Zig for WebAssembly guide",description:"Tutorial on how to use Zig for web assembly. Guide is outdated, but most concepts still apply. If you want me to update it just let me know."},{link:"https://vexcess.github.io/blog/creating-a-native-app-in-typescript",name:"I Tried Creating a Native App in TypeScript",description:"The story of how I tried and failed to compile a program in TypeScript to native code. This blog contains useful information on using Static Hermes in addition to details about shermes' faults. Lastly this blog contains my thought processes and rants about various softwares."},{link:"https://github.com/ka-extension/ka-extension-ts",name:"The Khan Academy Extension",description:"I've contributed to the creation of The Khan Academy Extension which is a browser extension that has over 20,000 users and its purpose is to add features to Khan Academy that make it more user friendly and customizable."},{link:"https://vexcess.github.io/imagenator",name:"Imagenator",description:"Convert images to embedabble JavaScript code that can be run on Khan Academy. This is basically the result of my obsession with compression theory and image encoding."},{link:"https://vexcess.github.io/RankedPairsVoting",name:"Ranked Pairs Voting Calculator",description:"Calculates results from a ranked pairs voting election given CSV file"}],a=[{link:"https://www.github.com/vExcess",img:"./images/github.png",imgStyle:"transform: translate(4px, 0px) scale(0.82);margin-top: -60px;margin-bottom: 5px;filter: invert(1);",site:"Github",tag:"vExcess"},{link:"https://discord.com",img:"./images/discord.png",imgStyle:"margin-top: -60px;margin-bottom: 3px;transform: scale(1.2);",site:"Discord",tag:"vexcess"},{link:"https://replit.com/@vexcess",img:"./images/replit.png",imgStyle:"transform: scale(0.6);margin-top: -62px;margin-bottom: 4px;",site:"Replit",tag:"vexcess"},{link:"https://vxsacademy.org/profile/vexcess",img:"./images/logo.png",imgStyle:"transform: scale(0.75);margin-top: -62px;margin-bottom: 4px;",site:"VExcess Academy",tag:"vexcess"}];var s=Ln(),u=function(e){if(!_e){var n=Be(e);return n instanceof Comment&&""===n.data?Ne(n):n}return ke}(s);Vn(u,{});var c=De(u,2);Mn(c,{});var f=De(c,2),d=De(qe(f),9),p=De(qe(d),2);yn(p,5,(()=>r),mn,((e,n)=>{Bn(e,En((()=>me(n))))})),Te(p),Te(d);var v=De(d,5),g=De(qe(v),2);yn(g,5,(()=>i),mn,((e,n)=>{Bn(e,En((()=>me(n))))})),Te(g),Te(v),Ee(2),Te(f);var h=De(f,2);yn(De(qe(h),4),1,(()=>o),mn,((e,n)=>{qn(e,En((()=>me(n))))})),Te(h);var m=De(h,2);yn(De(qe(m),2),1,(()=>l),mn,((e,n)=>{qn(e,En((()=>me(n))))})),Te(m);var y=De(m,2),x=De(qe(y),5);return yn(x,5,(()=>a),mn,((e,n)=>{On(e,En((()=>me(n))))})),Te(x),Ee(2),Te(y),Ee(2),an(n,s),we({$set:jn,$on:(e,n)=>Sn(t,e,n)})}({target:document.body,props:{}});return Wn}();
