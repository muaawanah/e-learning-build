import{$ as v,r as o,a0 as c}from"./index-D3cvxqGp.js";const d=v("courseExam",()=>{const e=o({}),l=o({}),s=o(!1);async function m(u,n){var t,r;s.value=!0;try{const a=await c.get(`/my-courses/${u}/exams/${n}`);e.value=(a==null?void 0:a.data)??{}}catch(a){a.value=((r=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:r.message)??"An error occurred"}return s.value=!1,e.value}async function i(u,n){var t,r;s.value=!0;try{const a=await c.post(`/my-courses/${u}/exams/${n}`,{user_given_answers:e.value.questions});e.value=(a==null?void 0:a.data)??{}}catch(a){a.value=((r=(t=a==null?void 0:a.response)==null?void 0:t.data)==null?void 0:r.message)??"An error occurred"}return s.value=!1,e.value}return{exam:e,error:l,loading:s,fetchExam:m,submitExam:i}});export{d as u};
