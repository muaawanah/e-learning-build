import{D as n,E as o}from"./index-BUeJLNrp.js";const c=n("user",{state:()=>({users:[],error:null,loading:!1}),actions:{async fetchUsers(){var r,e;this.loading=!0,this.error=null;try{const s=await o.get("/users");this.users=(s==null?void 0:s.data)??[]}catch(s){this.error=((e=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:e.message)??"An error occurred while fetching users"}finally{this.loading=!1}},async addUser(r){var e,s;this.error=null;try{const t=await o.post("/users",r);this.users.push((t==null?void 0:t.data)??r)}catch(t){throw this.error=((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)??"An error occurred while adding the user",t}},async updateUser(r,e){var s,t;this.error=null;try{const a=await o.put(`/users/${r}`,e),i=this.users.findIndex(h=>h.id===r);i!==-1&&(this.users[i]=(a==null?void 0:a.data)??this.users[i])}catch(a){throw this.error=((t=(s=a==null?void 0:a.response)==null?void 0:s.data)==null?void 0:t.message)??"An error occurred while updating the user",a}},async uploadPhoto(r){var e,s;this.error=null;try{await o.post("/user/photo",r,{headers:{"Content-Type":"multipart/form-data"}})}catch(t){throw this.error=((s=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:s.message)??"An error occurred while uploading the photo",t}}}});export{c as u};
