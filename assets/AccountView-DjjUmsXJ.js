import{r as d,h as p,o as n,c as i,b as t,F as _,j as x,u as o,a as f,v as m,i as v,k as g,m as h,q as b,t as k}from"./index-CFPHMjHm.js";import{u as y}from"./index-DKgsnZEp.js";const C={class:"p-4 flex flex-col gap-2"},V=t("h1",{class:"text-2xl font-bold"},"My lists",-1),w={class:"flex flex-col gap-2"},B=t("div",{class:"flex-1"},null,-1),N=["onClick"],$=t("div",{class:"i-la-times"},null,-1),D=[$],F={class:"flex gap-2 my-4"},q={__name:"AccountView",setup(M){const a=y("my-store",{}),s=d("");return(c,l)=>{const r=p("router-link");return n(),i("div",C,[V,t("div",w,[(n(!0),i(_,null,x(o(a),(e,u)=>(n(),i("div",{class:"p-2 flex",key:e},[g(r,{class:"text-xl",to:`/account/${e}`},{default:h(()=>[b(k(e),1)]),_:2},1032,["to"]),B,t("button",{onClick:S=>o(a).splice(u,1)},D,8,N)]))),128))]),t("div",F,[f(t("input",{class:"flex-auto bg-light-900 bg-opacity-20 p-2 rounded-xl","onUpdate:modelValue":l[0]||(l[0]=e=>v(s)?s.value=e:null)},null,512),[[m,o(s)]]),t("button",{class:"py-2 px-4 text-2xl rounded-xl bg-light-900 bg-opacity-20 active-bg-light-100 transition",onClick:l[1]||(l[1]=e=>{o(a)[++c.count]=o(s),s.value=""})},"+")])])}}};export{q as default};
