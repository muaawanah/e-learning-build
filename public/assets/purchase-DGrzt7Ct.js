import{Y as n,Z as o}from"./index-DHIdTAsh.js";const h=n("purchase",{state:()=>({purchases:[],purchase:null,error:null}),actions:{async fetchPurchases(){var s,t;try{const e=await o.get("/user/courses",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});this.purchases=e.data}catch(e){this.error=((t=(s=e.response)==null?void 0:s.data)==null?void 0:t.message)||e.message}},async createPayment(s,t={}){var e,a;try{return(await o.post(`courses/${s}/payment`,t,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).data}catch(r){throw this.error=((a=(e=r.response)==null?void 0:e.data)==null?void 0:a.message)||r.message,r}},async executePayment(s,t={}){var e,a;try{return(await o.post(`courses/${s}/enroll`,t,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})).data}catch(r){throw this.error=((a=(e=r.response)==null?void 0:e.data)==null?void 0:a.message)||r.message,r}}}});export{h as u};
