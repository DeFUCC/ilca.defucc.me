import{u as f}from"./index.b2ddab91.js";import{y as x,r as _,h as b,o as i,c,b as t,t as a,n as v,u as e,a as y,v as h,F as V,i as k,j as w,e as m,d}from"./index.1a51e310.js";const D={class:"p-2"},S={class:"text-2xl"},B={class:"flex flex-col gap-2 p-2"},C={class:"flex gap-2"},L={class:"p-2"},F={__name:"ListView",props:{letters:{type:String,default:"root"}},setup(u){const n=f(u.letters,{}),r=x(()=>Object.keys(n.value).length),o=_("");return(j,l)=>{const g=b("RouterView");return i(),c("div",D,[t("div",S,a(u.letters),1),t("div",B,[t("div",C,[t("div",{class:"p-2 font-bold",style:v({color:e(m)(e(d)(e(r)+1))})},a(e(d)(e(r)+1)),5),y(t("input",{class:"flex-1 p-2 bg-light-900 bg-opacity-20 rounded-xl","onUpdate:modelValue":l[0]||(l[0]=s=>o.value=s)},null,512),[[h,o.value]]),t("button",{class:"p-2 bg-light-900 bg-opacity-20 rounded-xl",onClick:l[1]||(l[1]=s=>{e(n)[e(d)(e(r)+1)]=o.value,o.value=""})},"ADD ITEM")]),(i(!0),c(V,null,k(e(n),(s,p)=>(i(),c("div",{class:"flex",key:s},[t("div",{class:"p-2",style:v({backgroundColor:e(m)(p)})},a(p),5),t("div",L,a(s),1)]))),128))]),w(g)])}}};export{F as default};