import{$ as u,a0 as n}from"./index-CYGpEyrZ.js";const c=u("question",{state:()=>({questions:[],question:{},error:null,loading:!1}),actions:{async index(i,r){var s,e;this.loading=!0,this.error=null;try{const t=await n.get(`/questions?chapter_id=${i}&question_type=${r}`);this.questions=(t==null?void 0:t.data)??[]}catch(t){this.error=((e=(s=t==null?void 0:t.response)==null?void 0:s.data)==null?void 0:e.message)??"An error occurred while fetching questions"}finally{this.loading=!1}},async show(i,r={}){var s,e;this.error=null;try{const t=await n.get(`/questions/${i}`,{params:r});return this.question=(t==null?void 0:t.data)??null,this.question}catch(t){this.error=((e=(s=t==null?void 0:t.response)==null?void 0:s.data)==null?void 0:e.message)??"An error occurred while fetching the question",console.error(t)}},async store(i){var r,s;this.error=null;try{const e=await n.post("/questions",i);this.questions.push(e==null?void 0:e.data)}catch(e){throw this.error=((s=(r=e==null?void 0:e.response)==null?void 0:r.data)==null?void 0:s.message)??"An error occurred while creating the question",e}},async update(i,r){var s,e;this.error=null;try{const t=await n.put(`/questions/${i}`,r),o=this.questions.findIndex(a=>a.id===i);o!==-1&&(this.questions[o]=(t==null?void 0:t.data)??this.questions[o])}catch(t){throw this.error=((e=(s=t==null?void 0:t.response)==null?void 0:s.data)==null?void 0:e.message)??"An error occurred while updating the question",t}},async delete(i){var r,s;this.error=null;try{await n.delete(`/questions/${i}`),this.questions=this.questions.filter(e=>e.id!==i)}catch(e){throw this.error=((s=(r=e==null?void 0:e.response)==null?void 0:r.data)==null?void 0:s.message)??"An error occurred while deleting the question",e}}}});export{c as u};
