import{S as a,i as s,s as t,e,t as r,k as n,c as o,a as c,g as i,d as h,n as p,J as f,b as m,f as g,D as u,h as l,K as d,L as k,M as v}from"../../chunks/vendor-6bc8e3a1.js";function E(a){let s,t,E,y,T,w,G,S,H,N,O,R,$,b,j,x,D,I,M,W,_=a[0].name+"",J=a[0].height+"",K=a[0].weight+"";return{c(){s=e("div"),t=e("h1"),E=r(_),y=n(),T=e("p"),w=r("Type: "),G=e("strong"),S=r(a[1]),H=r(" | Height: "),N=e("strong"),O=r(J),R=r(" | Weight:\r\n\t\t"),$=e("strong"),b=r(K),j=n(),x=e("img"),this.h()},l(e){s=o(e,"DIV",{class:!0});var r=c(s);t=o(r,"H1",{});var n=c(t);E=i(n,_),n.forEach(h),y=p(r),T=o(r,"P",{});var f=c(T);w=i(f,"Type: "),G=o(f,"STRONG",{});var m=c(G);S=i(m,a[1]),m.forEach(h),H=i(f," | Height: "),N=o(f,"STRONG",{});var g=c(N);O=i(g,J),g.forEach(h),R=i(f," | Weight:\r\n\t\t"),$=o(f,"STRONG",{});var u=c($);b=i(u,K),u.forEach(h),f.forEach(h),j=p(r),x=o(r,"IMG",{src:!0,alt:!0}),r.forEach(h),this.h()},h(){f(x.src,D=a[0].sprites.front_default)||m(x,"src",D),m(x,"alt",I=a[0].name),m(s,"class","container")},m(a,e){g(a,s,e),u(s,t),u(t,E),u(s,y),u(s,T),u(T,w),u(T,G),u(G,S),u(T,H),u(T,N),u(N,O),u(T,R),u(T,$),u($,b),u(s,j),u(s,x),W=!0},p(a,[s]){(!W||1&s)&&_!==(_=a[0].name+"")&&l(E,_),(!W||1&s)&&J!==(J=a[0].height+"")&&l(O,J),(!W||1&s)&&K!==(K=a[0].weight+"")&&l(b,K),(!W||1&s&&!f(x.src,D=a[0].sprites.front_default))&&m(x,"src",D),(!W||1&s&&I!==(I=a[0].name))&&m(x,"alt",I)},i(a){W||(d((()=>{M||(M=k(s,v,{},!0)),M.run(1)})),W=!0)},o(a){M||(M=k(s,v,{},!1)),M.run(0),W=!1},d(a){a&&h(s),a&&M&&M.end()}}}async function y({page:a}){const s=`https://pokeapi.co/api/v2/pokemon/${a.params.id}`,t=await fetch(s);return{props:{pokeman:await t.json()}}}function T(a,s,t){let{pokeman:e}=s;const r=e.types[0].type.name;return a.$$set=a=>{"pokeman"in a&&t(0,e=a.pokeman)},[e,r]}class w extends a{constructor(a){super(),s(this,a,T,E,t,{pokeman:0})}}export{w as default,y as load};
