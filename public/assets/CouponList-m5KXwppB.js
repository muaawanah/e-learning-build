import{u as k}from"./coupon-Dt1LmVup.js";import{r as a,e as n,f as r,g as e,x as A,z as y,A as $,a5 as T,w as z,o as q,D as S,t as V,a3 as j,a4 as B,v as E,q as w,i as U,F as I,h as N,j as M,p as D}from"./index-DHIdTAsh.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const P={class:"modal"},R={class:"modal-content space-y-2"},G=e("h2",null,"Add Coupon",-1),H=e("option",{value:"percentage"},"Percentage",-1),J=e("option",{value:"fixed"},"Fixed Amount",-1),K=[H,J],O={class:"flex gap-4"},Q=e("button",{type:"submit",class:"btn-2"},"Add",-1),W={__name:"AddCouponModal",emits:["close"],setup(h,{emit:f}){const u=f,_=k(),v=a(""),s=a("percentage"),l=a(0),c=a(""),m=a(""),C=async()=>{await _.createCoupon({code:v.value,discount_type:s.value,discount_value:l.value,valid_from:c.value,valid_until:m.value}),u("close")};return(g,o)=>(n(),r("div",P,[e("div",R,[G,e("form",{onSubmit:A(C,["prevent"]),class:"space-y-2"},[y(e("input",{class:"input-1","onUpdate:modelValue":o[0]||(o[0]=d=>v.value=d),placeholder:"Coupon code",required:""},null,512),[[$,v.value]]),y(e("select",{class:"input-1","onUpdate:modelValue":o[1]||(o[1]=d=>s.value=d)},K,512),[[T,s.value]]),y(e("input",{class:"input-1","onUpdate:modelValue":o[2]||(o[2]=d=>l.value=d),placeholder:"Discount value",type:"number",required:""},null,512),[[$,l.value]]),y(e("input",{class:"input-1","onUpdate:modelValue":o[3]||(o[3]=d=>c.value=d),placeholder:"Valid from",type:"date",required:""},null,512),[[$,c.value]]),y(e("input",{class:"input-1","onUpdate:modelValue":o[4]||(o[4]=d=>m.value=d),placeholder:"Valid until",type:"date",required:""},null,512),[[$,m.value]]),e("div",O,[Q,e("button",{type:"button",onClick:o[5]||(o[5]=d=>u("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},x=h=>(j("data-v-2b02b7bd"),h=h(),B(),h),X={class:"modal"},Y={class:"max-w-2xl z-50 card-bg p-4 md:p-8 space-y-2"},Z=x(()=>e("h2",{class:"title-lg"},"Edit Coupon",-1)),ee=x(()=>e("p",null,"Code",-1)),te=x(()=>e("p",null,"Discount type",-1)),oe={class:"flex items-center space-x-4"},se={class:"flex items-center"},le=x(()=>e("span",{class:"ml-2"},"Percentage",-1)),ne={class:"flex items-center"},ae=x(()=>e("span",{class:"ml-2"},"Fixed Amount",-1)),de=x(()=>e("p",null,"Discount value",-1)),ue={class:"relative"},ce={class:"absolute top-2 right-3"},ie=x(()=>e("p",null,"Valid from",-1)),pe=x(()=>e("p",null,"Valid to",-1)),re={class:"flex justify-center gap-4"},_e=x(()=>e("button",{type:"submit",class:"btn-2"},"Save",-1)),ve={__name:"EditCouponModal",props:["coupon"],emits:["close"],setup(h,{emit:f}){const u=h,_=f,v=k(),s=a(""),l=a("percentage"),c=a(0),m=a(""),C=a(""),g=i=>E(new Date(i),"yyyy-MM-dd"),o=i=>{s.value=i.code,l.value=i.discount_type,c.value=i.discount_value,m.value=g(i.valid_from),C.value=g(i.valid_until)};z(u.coupon,i=>{o(i)}),q(()=>{u.coupon&&o(u.coupon)});const d=async()=>{await v.updateCoupon(u.coupon.id,{code:s.value,discount_type:l.value,discount_value:c.value,valid_from:m.value,valid_until:C.value}),_("close")};return(i,t)=>(n(),r("div",X,[e("div",Y,[Z,e("form",{onSubmit:A(d,["prevent"]),class:"space-y-2"},[e("div",null,[ee,y(e("input",{class:"input-1","onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),placeholder:"Coupon code",required:""},null,512),[[$,s.value]])]),e("div",null,[te,e("div",oe,[e("label",se,[y(e("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=p=>l.value=p),value:"percentage",class:"form-radio"},null,512),[[S,l.value]]),le]),e("label",ne,[y(e("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=p=>l.value=p),value:"fixed",class:"form-radio"},null,512),[[S,l.value]]),ae])])]),e("div",null,[de,e("div",ue,[y(e("input",{class:"input-1","onUpdate:modelValue":t[3]||(t[3]=p=>c.value=p),placeholder:"Discount value",type:"number",required:""},null,512),[[$,c.value]]),e("span",ce,V(l.value==="percentage"?"%":"Tk"),1)])]),e("div",null,[ie,y(e("input",{class:"input-1","onUpdate:modelValue":t[4]||(t[4]=p=>m.value=p),placeholder:"Valid from",type:"date",required:""},null,512),[[$,m.value]])]),e("div",null,[pe,y(e("input",{class:"input-1","onUpdate:modelValue":t[5]||(t[5]=p=>C.value=p),placeholder:"Valid until",type:"date",required:""},null,512),[[$,C.value]])]),e("div",re,[_e,e("button",{type:"button",onClick:t[6]||(t[6]=p=>_("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},me=L(ve,[["__scopeId","data-v-2b02b7bd"]]),ye={class:"modal"},he={class:"modal-content space-y-2"},fe=e("h2",null,"Delete Coupon",-1),be={class:"flex gap-4"},xe={__name:"DeleteCouponModal",props:["coupon"],emits:["close"],setup(h,{emit:f}){const u=h,_=f,v=k(),s=async()=>{await v.deleteCoupon(u.coupon.id),_("close")};return(l,c)=>(n(),r("div",ye,[e("div",he,[fe,e("p",null,[w("Are you sure you want to delete the coupon "),e("strong",null,V(h.coupon.code),1),w("?")]),e("div",be,[e("button",{type:"button",class:"btn-2",onClick:s},"Delete"),e("button",{type:"button",onClick:c[0]||(c[0]=m=>_("close")),class:"btn-contrast"},"Cancel")])])]))}},Ce={class:"my-container space-y-2"},$e=e("h1",{class:"title-lg"},"Coupons",-1),Ve={class:"card-bg p-4"},ge={key:0,class:"flex justify-center items-center"},ke=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),Me=[ke],De={key:1},we={key:0,class:"table-auto w-full"},Se=e("thead",null,[e("tr",{class:"text-left"},[e("th",{class:"px-4 py-2"},"Code"),e("th",{class:"px-4 py-2"},"Discount Type"),e("th",{class:"px-4 py-2"},"Discount Value"),e("th",{class:"px-4 py-2"},"Valid From"),e("th",{class:"px-4 py-2"},"Valid Until"),e("th",{class:"px-4 py-2"},"Actions")])],-1),Ue={class:"px-4 py-2"},Ae={class:"px-4 py-2"},qe={class:"px-4 py-2"},Ee={key:0},Fe={key:1},Te={class:"px-4 py-2"},ze={class:"px-4 py-2"},je={class:"px-4 py-2"},Be={class:"flex gap-2"},Ie=["onClick"],Ne=["onClick"],Le={key:1,class:"text-red-500"},He={__name:"CouponList",setup(h){const f=k(),u=a(!1),_=a(!1),v=a(!1),s=a(null),l=a(!0),c=()=>u.value=!0,m=()=>u.value=!1,C=t=>{s.value=t,_.value=!0},g=()=>_.value=!1,o=t=>{s.value=t,v.value=!0},d=()=>v.value=!1,i=t=>E(new Date(t),"dd-MMM-yyyy");return q(async()=>{try{await f.fetchCoupons()}finally{l.value=!1}}),(t,p)=>(n(),r("div",Ce,[e("div",{class:"flex justify-between"},[$e,e("button",{class:"btn-2",onClick:c},"Add Coupon")]),e("div",Ve,[l.value?(n(),r("div",ge,Me)):(n(),r("div",De,[U(f).coupons.length?(n(),r("table",we,[Se,e("tbody",null,[(n(!0),r(I,null,N(U(f).coupons,b=>(n(),r("tr",{key:b.id,class:"border-t"},[e("td",Ue,V(b.code),1),e("td",Ae,V(b.discount_type),1),e("td",qe,[w(V(b.discount_value)+" ",1),b.discount_type==="percentage"?(n(),r("span",Ee,"%")):(n(),r("span",Fe,"Tk"))]),e("td",Te,V(i(b.valid_from)),1),e("td",ze,V(i(b.valid_until)),1),e("td",je,[e("div",Be,[e("button",{onClick:F=>C(b),class:"btn-1"},"Edit",8,Ie),e("button",{onClick:F=>o(b),class:"btn-contrast"},"Delete",8,Ne)])])]))),128))])])):(n(),r("p",Le,"No coupons found"))]))]),u.value?(n(),M(W,{key:0,class:"z-40",onClose:m})):D("",!0),_.value?(n(),M(me,{key:1,class:"z-40",coupon:s.value,onClose:g},null,8,["coupon"])):D("",!0),v.value?(n(),M(xe,{key:2,class:"z-40",coupon:s.value,onClose:d},null,8,["coupon"])):D("",!0)]))}};export{He as default};
