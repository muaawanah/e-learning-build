import{r,c as u,k as l,e as h,f as p,g as t,x as d,z as m,A as _}from"./index-tAvz-Ca9.js";const f={class:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"},v={class:"space-y-4"},x=t("h1",{class:"title-lg text-center"},"Join Now",-1),g=t("button",{class:"btn-2",type:"submit"},"Join",-1),y={__name:"JoinView",setup(w){const e=r(""),s=u(),a=l(),n=async()=>{await a.checkPhone(e.value)?s.push({name:"login",query:{phone:e.value}}):s.push({name:"register",query:{phone:e.value}})};return(c,o)=>(h(),p("div",f,[t("div",v,[x,t("form",{class:"flex flex-col gap-4",onSubmit:d(n,["prevent"])},[m(t("input",{class:"input-1",autofocus:"","onUpdate:modelValue":o[0]||(o[0]=i=>e.value=i),type:"text",placeholder:"Enter Phone Number"},null,512),[[_,e.value]]),g],32)])]))}};export{y as default};
