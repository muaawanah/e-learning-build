import{k as l,r as _,o as i,e as o,f as a,g as e,q as n,t as c}from"./index-DHIdTAsh.js";const r={class:"my-container"},d={class:"card-bg p-4 md:p-8"},u={key:0},h={class:"title-md"},p=e("h1",{class:"title-xl"},"Welcome back",-1),m={class:"title-md"},v={key:1},f=e("p",null,"Loading...",-1),k=[f],b={__name:"DashBoard",setup(y){const t=l(),s=_(t.user);return i(async()=>{s.value||(await t.fetchUser(),s.value=t.user)}),(g,x)=>(o(),a("div",r,[e("div",d,[s.value?(o(),a("div",u,[e("p",null,[n("Hello "),e("span",h,c(s.value.name)+"!",1)]),p,e("p",null,[n("Your phone number is "),e("span",m,c(s.value.phone),1)])])):(o(),a("div",v,k))])]))}};export{b as default};
