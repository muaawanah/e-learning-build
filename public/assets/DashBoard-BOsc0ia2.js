import{l,d as _,e as i,o,g as a,a as e,b as n,t as c}from"./index-BAbeo40T.js";const d={class:"my-container"},r={class:"card-bg p-4 md:p-8"},u={key:0},h={class:"title-md"},p=e("h1",{class:"title-xl"},"Welcome back",-1),m={class:"title-md"},v={key:1},f=e("p",null,"Loading...",-1),k=[f],B={__name:"DashBoard",setup(y){const t=l(),s=_(t.user);return i(async()=>{s.value||(await t.fetchUser(),s.value=t.user)}),(b,g)=>(o(),a("div",d,[e("div",r,[s.value?(o(),a("div",u,[e("p",null,[n("Hello "),e("span",h,c(s.value.name)+"!",1)]),p,e("p",null,[n("Your phone number is "),e("span",m,c(s.value.phone),1)])])):(o(),a("div",v,k))])]))}};export{B as default};
