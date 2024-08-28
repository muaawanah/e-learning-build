import{E as V,G as j,r as h,e as l,f as _,g as t,x as A,z as D,A as E,t as v,p,w as k,b as N,o as z,m as R,B as S,s as C,i as M,F,h as O,j as x,q as T}from"./index-DQIf5F5M.js";const g=V("subject",{state:()=>({subjects:[],error:null,loading:!1}),actions:{async index(r){var c,s;this.loading=!0,this.error=null;try{const e=await j.get(`/subjects?category_id=${r}`);return this.subjects=(e==null?void 0:e.data)??[],this.subjects}catch(e){this.error=((s=(c=e==null?void 0:e.response)==null?void 0:c.data)==null?void 0:s.message)??"An error occurred while fetching subjects"}finally{this.loading=!1}},async store(r){var c,s;this.error=null;try{const e=await j.post("/subjects",r);this.subjects.push(e==null?void 0:e.data)}catch(e){throw this.error=((s=(c=e==null?void 0:e.response)==null?void 0:c.data)==null?void 0:s.message)??"An error occurred while creating the subject",e}},async update(r,c){var s,e;this.error=null;try{const n=await j.put(`/subjects/${r}`,c),a=this.subjects.findIndex(o=>o.id===r);a!==-1&&(this.subjects[a]=(n==null?void 0:n.data)??this.subjects[a])}catch(n){throw this.error=((e=(s=n==null?void 0:n.response)==null?void 0:s.data)==null?void 0:e.message)??"An error occurred while updating the subject",n}},async delete(r){var c,s;this.error=null;try{await j.delete(`/subjects/${r}`),this.subjects=this.subjects.filter(e=>e.id!==r)}catch(e){throw this.error=((s=(c=e==null?void 0:e.response)==null?void 0:c.data)==null?void 0:s.message)??"An error occurred while deleting the subject",e}}}}),U={class:"modal"},G={class:"modal-content space-y-2"},Q=t("h2",null,"Add Subject",-1),H={key:0,class:"text-red-500"},J={key:1,class:"text-red-500"},K={class:"flex gap-4"},P=t("button",{type:"submit",class:"btn-2"},"Add",-1),W={__name:"AddSubjectModal",props:{categoryId:{required:!0}},emits:["close"],setup(r,{emit:c}){const s=c,e=r,n=g(),a=h(""),o=h({}),d=async()=>{o.value={};try{await n.store({name:a.value,category_id:e.categoryId}),a.value="",s("close")}catch(u){u.response&&u.response.data&&u.response.data.errors&&(o.value=u.response.data.errors)}};return(u,i)=>(l(),_("div",U,[t("div",G,[Q,t("form",{onSubmit:A(d,["prevent"]),class:"space-y-2"},[D(t("input",{class:"input-1","onUpdate:modelValue":i[0]||(i[0]=b=>a.value=b),placeholder:"Subject name",required:""},null,512),[[E,a.value]]),o.value.name?(l(),_("div",H,v(o.value.name[0]),1)):p("",!0),o.value.category_id?(l(),_("div",J,v(o.value.category_id[0]),1)):p("",!0),t("div",K,[P,t("button",{type:"button",onClick:i[1]||(i[1]=b=>s("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},X={class:"modal"},Y={class:"modal-content space-y-2"},Z=t("h2",null,"Edit Subject",-1),ee={key:0,class:"text-red-500"},te={key:1,class:"text-red-500"},se={class:"flex gap-4"},ae=t("button",{type:"submit",class:"btn-2"},"Save",-1),oe={__name:"EditSubjectModal",props:{subject:{type:Object,required:!0}},emits:["close"],setup(r,{emit:c}){var u;const s=c,e=r,n=g(),a=h(((u=e.subject)==null?void 0:u.name)||""),o=h({});k(()=>e.subject,i=>{i&&(a.value=i.name)},{immediate:!0});const d=async()=>{o.value={};try{await n.update(e.subject.id,{name:a.value,category_id:e.subject.category_id}),s("close")}catch(i){i.response&&i.response.data&&i.response.data.errors&&(o.value=i.response.data.errors)}};return(i,b)=>(l(),_("div",X,[t("div",Y,[Z,t("form",{onSubmit:A(d,["prevent"]),class:"space-y-2"},[D(t("input",{class:"input-1","onUpdate:modelValue":b[0]||(b[0]=f=>a.value=f),placeholder:"Subject name",required:""},null,512),[[E,a.value]]),o.value.name?(l(),_("div",ee,v(o.value.name[0]),1)):p("",!0),o.value.category_id?(l(),_("div",te,v(o.value.category_id[0]),1)):p("",!0),t("div",se,[ae,t("button",{type:"button",onClick:b[1]||(b[1]=f=>s("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},ce={key:0,class:"modal"},ne={class:"modal-content space-y-2"},le=t("h2",null,"Delete Subject",-1),re={key:0,class:"text-red-500"},ie={class:"flex gap-4"},de={__name:"DeleteSubjectModal",props:{subject:{type:Object,required:!0,default:()=>({name:"",id:null})}},emits:["close"],setup(r,{emit:c}){const s=c,e=r,n=g(),a=h({});k(()=>e.subject,d=>{},{immediate:!0});const o=async()=>{a.value={};try{await n.delete(e.subject.id),s("close")}catch(d){d.response&&d.response.data&&d.response.data.errors&&(a.value=d.response.data.errors)}};return(d,u)=>e.subject&&e.subject.name?(l(),_("div",ce,[t("div",ne,[le,t("p",null,"Are you sure you want to delete the subject: "+v(e.subject.name)+"?",1),a.value.category_id?(l(),_("div",re,v(a.value.category_id[0]),1)):p("",!0),t("div",ie,[t("button",{onClick:o,class:"btn-2"},"Delete"),t("button",{type:"button",onClick:u[0]||(u[0]=i=>s("close")),class:"btn-contrast"},"Cancel")])])])):p("",!0)}},ue={class:"my-container space-y-2"},_e={class:"flex justify-between"},he={class:"flex items-center gap-4"},be=t("i",{class:"fas fa-arrow-left"},null,-1),pe=t("h4",{class:"title-lg"},"Subject List",-1),ve={key:0,class:"flex justify-center items-center"},me=t("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),ye=[me],fe={key:1},je={key:0,class:"grid md:grid-cols-3 gap-4"},ge={class:"flex flex-col items-center"},xe=t("i",{class:"fad fa-folder text-4xl"},null,-1),ke={class:"title-md"},$e={class:"absolute top-4 right-4 flex gap-2"},we=["onClick"],Se=t("i",{class:"fad fa-edit"},null,-1),Ce=[Se],Me=["onClick"],Ae=t("i",{class:"fad fa-trash"},null,-1),De=[Ae],Ee={key:1,class:"text-red-500"},qe={__name:"SubjectList",setup(r){const c=N(),s=h(c.params.id),e=g(),n=h(!1),a=h(!1),o=h(!1),d=h(null),u=h(!0),i=()=>n.value=!0,b=()=>n.value=!1,f=m=>{d.value=m,a.value=!0},I=()=>a.value=!1,L=m=>{d.value=m,o.value=!0},q=()=>o.value=!1,$=async()=>{try{u.value=!0,await e.index(s.value)}finally{u.value=!1}};return z($),k(()=>c.params.id,async m=>{s.value=m,await $()}),(m,Ie)=>{const w=R("RouterLink");return l(),_("div",ue,[t("div",_e,[t("div",he,[S(w,{class:"btn-3",to:{name:"QuestionBank"}},{default:C(()=>[be]),_:1}),pe]),t("button",{class:"btn-2",onClick:i},"Add Subject")]),u.value?(l(),_("div",ve,ye)):(l(),_("div",fe,[M(e).subjects.length?(l(),_("div",je,[(l(!0),_(F,null,O(M(e).subjects,y=>(l(),_("div",{key:y.id,class:"relative card-bg items-center p-4"},[t("div",ge,[xe,t("p",ke,v(y.name),1)]),t("div",$e,[t("button",{onClick:B=>f(y)},Ce,8,we),t("button",{onClick:B=>L(y),class:"text-red-500"},De,8,Me)]),S(w,{to:{name:"ChapterList",params:{categoryId:s.value,id:y.id}},class:"btn-link"},{default:C(()=>[T(" See Chapters ")]),_:2},1032,["to"])]))),128))])):(l(),_("p",Ee,"No subjects found"))])),n.value?(l(),x(W,{key:2,class:"z-40",categoryId:s.value,onClose:b},null,8,["categoryId"])):p("",!0),a.value?(l(),x(oe,{key:3,class:"z-40",subject:d.value,onClose:I},null,8,["subject"])):p("",!0),o.value?(l(),x(de,{key:4,class:"z-40",subject:d.value,onClose:q},null,8,["subject"])):p("",!0)])}}};export{qe as default};
