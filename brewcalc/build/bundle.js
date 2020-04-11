var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function s(){return f(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t){return""===t?void 0:+t}function h(t,n){n=""+n,t.data!==n&&(t.data=n)}function g(t,n){(null!=n||t.value)&&(t.value=n)}let $;function v(t){$=t}const b=[],y=[],x=[],_=[],w=Promise.resolve();let E=!1;function z(t){x.push(t)}const F=new Set;function C(){do{for(;b.length;){const t=b.shift();v(t),S(t.$$)}for(;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];F.has(n)||(F.add(n),n())}x.length=0}while(b.length);for(;_.length;)_.pop()();E=!1,F.clear()}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}const k=new Set;function A(t,n){-1===t.$$.dirty[0]&&(b.push(t),E||(E=!0,w.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function B(u,c,i,l,a,f,s=[-1]){const d=$;v(u);const p=c.props||{},m=u.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:s};let h=!1;var g,b;m.ctx=i?i(u,p,(t,n,...e)=>{const o=e.length?e[0]:n;return m.ctx&&a(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),h&&A(u,t)),n}):[],m.update(),h=!0,o(m.before_update),m.fragment=!!l&&l(m.ctx),c.target&&(c.hydrate?m.fragment&&m.fragment.l(function(t){return Array.from(t.childNodes)}(c.target)):m.fragment&&m.fragment.c(),c.intro&&((g=u.$$.fragment)&&g.i&&(k.delete(g),g.i(b))),function(t,e,u){const{fragment:c,on_mount:i,on_destroy:l,after_update:a}=t.$$;c&&c.m(e,u),z(()=>{const e=i.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(z)}(u,c.target,c.anchor),C()),v(d)}function N(n){let e,r,u,m,$,v,b,y,x,_,w,E,z,F,C,S,k,A,B,N,j,L,M,O,P,q,T=!1,V=!1,Y=!1,D=n[3].toFixed(1)+"",G=n[4].toFixed(1)+"";function H(){T=!0,n[6].call(y)}function I(){V=!0,n[7].call(E)}function J(){Y=!0,n[8].call(S)}return{c(){e=a("style"),e.textContent="body {\r\n      background-color: #223344;\r\n      color: #93FFE9;\r\n    }",r=s(),u=a("main"),m=a("h1"),m.textContent="Sugar Solution Priming Calculator",$=s(),v=a("label"),b=f("Bottles "),y=a("input"),x=s(),_=a("label"),w=f("Sugar per Bottle(g) "),E=a("input"),z=s(),F=a("label"),C=f("Vol per Bottle(ml) "),S=a("input"),k=s(),A=a("br"),B=s(),N=a("p"),j=f("You need "),L=f(D),M=f("g of sugar and "),O=f(G),P=f("g of water."),p(y,"type","number"),p(y,"min","1"),p(y,"class","svelte-29zvh6"),p(v,"class","svelte-29zvh6"),p(E,"type","number"),p(E,"min","0.1"),p(E,"step","0.1"),p(E,"class","svelte-29zvh6"),p(_,"class","svelte-29zvh6"),p(S,"type","number"),p(S,"min","0.1"),p(S,"step","0.1"),p(S,"class","svelte-29zvh6"),p(F,"class","svelte-29zvh6")},m(t,o){c(document.head,e),i(t,r,o),i(t,u,o),c(u,m),c(u,$),c(u,v),c(v,b),c(v,y),g(y,n[0]),c(u,x),c(u,_),c(_,w),c(_,E),g(E,n[1]),c(u,z),c(u,F),c(F,C),c(F,S),g(S,n[2]),c(u,k),c(u,A),c(u,B),c(u,N),c(N,j),c(N,L),c(N,M),c(N,O),c(N,P),q=[d(y,"input",H),d(E,"input",I),d(S,"input",J)]},p(t,[n]){!T&&1&n&&g(y,t[0]),T=!1,!V&&2&n&&g(E,t[1]),V=!1,!Y&&4&n&&g(S,t[2]),Y=!1,8&n&&D!==(D=t[3].toFixed(1)+"")&&h(L,D),16&n&&G!==(G=t[4].toFixed(1)+"")&&h(O,G)},i:t,o:t,d(t){l(e),t&&l(r),t&&l(u),o(q)}}}function j(t,n){return(t+n)/function(t){return t/(258.6-t/258.2*227.1)+1}(function(t,n){return t/(t+n)*100}(t,n))}function L(t,n,e){let o=20,r=2.5,u=5,c=0,i=0;function l(t,n,o){let r=n*t,u=o*t;e(3,c=r),e(4,i=function(t,n){let e=n,o=2*e,r=0,u=j(t,e),c=0;for(;Math.abs(u-n)>.05&&c++<50;)u>n?o=e:r=e,e=.5*(r+o),u=j(t,e);return e}(r,u))}return t.$$.update=()=>{7&t.$$.dirty&&l(o,r,u)},[o,r,u,c,i,l,function(){o=m(this.value),e(0,o)},function(){r=m(this.value),e(1,r)},function(){u=m(this.value),e(2,u)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),B(this,t,L,N,u,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
