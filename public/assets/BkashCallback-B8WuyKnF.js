import{u as n}from"./purchase-Bs7mt0jP.js";import{q as u,k as l,o as i,g as m,a as p}from"./index-B-DT9d2W.js";const y={class:"my-container py-4"},_=p("h1",{class:"title-xl text-center"},"Payment Processing...",-1),h=[_],g={__name:"BkashCallback",setup(d){const c=u(),e=l(),s=n(),t=c.params.courseId,o=c.query.paymentID,a=c.query.status;return a==="success"?s.executePayment(t,{paymentID:o}).then(r=>{console.log(r),r.status?e.replace("/my/course"):(s.error="Payment failed! Try Again",e.replace(`/checkout/${t}`))}):a==="cancel"?(s.error="Payment canceled! Try Again",e.replace(`/checkout/${t}`)):a==="failure"?(s.error="Payment failed! Try Again",e.replace(`/checkout/${t}`)):e.replace(`/checkout/${t}`),(r,f)=>(i(),m("div",y,h))}};export{g as default};
