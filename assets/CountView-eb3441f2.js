import{_ as f,r,w as p,o as m,c as x,a as i,v,u,b as n,i as c,n as b,d as w,l as g,e as C,p as I,f as V,g as y}from"./index-78e5cba0.js";const k=a=>(I("data-v-d8dede59"),a=a(),V(),a),L={class:"p-2 md-p-4 flex flex-col gap-2 p-4"},N=k(()=>n("div",{class:"text-xl"},"Convert numbers and letters ",-1)),S={class:"flex gap-2 w-full"},B={__name:"CountView",setup(a){const o=r(1),l=r("A");function d(s){l.value=w(s)}function _(s){o.value=g(s)}return p(l,s=>{l.value=y(s)}),p(o,s=>{s<1&&(o.value=1)}),(s,e)=>(m(),x("main",L,[N,i(n("input",{class:"text-5xl p-2","onUpdate:modelValue":e[0]||(e[0]=t=>c(o)?o.value=t:null),type:"number",onInput:e[1]||(e[1]=t=>d(t.target.value))},null,544),[[v,u(o),void 0,{number:!0}]]),i(n("input",{class:"text-5xl p-2 font-bold","onUpdate:modelValue":e[2]||(e[2]=t=>c(l)?l.value=t:null),onInput:e[3]||(e[3]=t=>_(t.target.value)),style:b({color:u(C)(u(l))})},null,36),[[v,u(l)]]),n("div",S,[n("button",{onClick:e[4]||(e[4]=t=>d(--o.value))},"-"),n("button",{onClick:e[5]||(e[5]=t=>d(++o.value))},"+")])]))}},z=f(B,[["__scopeId","data-v-d8dede59"]]);export{z as default};
