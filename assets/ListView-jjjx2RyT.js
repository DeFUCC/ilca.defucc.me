import{s as g,r as x,h as _,o as i,c,b as t,t as a,n as v,u as e,a as b,v as y,i as h,F as k,j as V,k as w,e as m,d}from"./index-CFPHMjHm.js";import{u as D}from"./index-DKgsnZEp.js";const S={class:"p-2"},B={class:"text-2xl"},C={class:"flex flex-col gap-2 p-2"},L={class:"flex gap-2"},R={class:"p-2"},F={__name:"ListView",props:{letters:{type:String,default:"root"}},setup(u){const n=D(u.letters,{}),r=g(()=>Object.keys(n.value).length),s=x("");return(j,l)=>{const f=_("RouterView");return i(),c("div",S,[t("div",B,a(u.letters),1),t("div",C,[t("div",L,[t("div",{class:"p-2 font-bold",style:v({color:e(m)(e(d)(e(r)+1))})},a(e(d)(e(r)+1)),5),b(t("input",{class:"flex-1 p-2 bg-light-900 bg-opacity-20 rounded-xl","onUpdate:modelValue":l[0]||(l[0]=o=>h(s)?s.value=o:null)},null,512),[[y,e(s)]]),t("button",{class:"p-2 bg-light-900 bg-opacity-20 rounded-xl",onClick:l[1]||(l[1]=o=>{e(n)[e(d)(e(r)+1)]=e(s),s.value=""})},"ADD ITEM")]),(i(!0),c(k,null,V(e(n),(o,p)=>(i(),c("div",{class:"flex",key:o},[t("div",{class:"p-2",style:v({backgroundColor:e(m)(p)})},a(p),5),t("div",R,a(o),1)]))),128))]),w(f)])}}};export{F as default};