import{u}from"./purchase-Te5bFZ8r.js";import{b as l,k as i,d as p,e as m,f as y}from"./index-BUeJLNrp.js";const _={class:"my-container py-4"},d=y("h1",{class:"title-xl text-center"},"Payment Processing...",-1),h=[d],x={__name:"BkashCallback",setup(f){const c=l(),e=i(),s=u(),t=c.params.courseId,r=c.query.paymentID,n=c.query.coupon_code,o=c.query.status;return o==="success"?s.executePayment(t,{paymentID:r,coupon_code:n}).then(a=>{console.log(a),a.status?e.replace("/my/course"):(s.error="Payment failed! Try Again",e.replace(`/checkout/${t}`))}):o==="cancel"?(s.error="Payment canceled! Try Again",e.replace(`/checkout/${t}`)):o==="failure"?(s.error="Payment failed! Try Again",e.replace(`/checkout/${t}`)):e.replace(`/checkout/${t}`),(a,k)=>(p(),m("div",_,h))}};export{x as default};
