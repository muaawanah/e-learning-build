import{r as v,e as a,f as l,g as e,t as y,x as O,E as T,p as h,F as S,h as U,z as q,a2 as E,A as k,w as M,q as j}from"./index-D3cvxqGp.js";import{u as C}from"./question-CnOlIE1S.js";import{_ as D}from"./TextEditor-CICuCp09.js";const A={class:"modal z-50"},N={class:"modal-content"},B={key:0,class:"text-red-500"},I={key:1,class:"text-red-500"},L={key:2,class:"grid py-2 gap-1.5 bg-gray-200 rounded-lg"},z=e("div",{class:"flex justify-between text-sm px-2"},[e("p",null,"Ans"),e("p",null,"Options"),e("p",null,"Delete")],-1),F=["onUpdate:modelValue"],H=["onUpdate:modelValue"],G={class:"grow-0 shrink-0 pt-1"},J=["onClick"],K={class:"grid"},P=e("h2",{class:"text-center md:text-left"},"Question Explanation",-1),R={class:"flex gap-4 justify-center"},W=e("button",{type:"submit",class:"btn-2"},"Save Question",-1),ke={__name:"AddQuestionModal",props:{chapterId:{required:!0},questionType:String},emits:["close"],setup(p,{emit:f}){const x=f,o=p,b=C(),t=v({}),u=v(""),s=v(""),n=v([{option_text:"",is_correct:!1},{option_text:"",is_correct:!1},{option_text:"",is_correct:!1},{option_text:"",is_correct:!1}]),g=()=>{n.value.push({option_text:"",is_correct:!1})},w=d=>{n.value.splice(d,1)},V=async()=>{t.value={};try{await b.store({chapter_id:o.chapterId,type:o.questionType,question_text:u.value,explanation:s.value,mcq_options:n.value}),u.value="",x("close")}catch(d){d.response&&d.response.data&&d.response.data.errors&&(t.value=d.response.data.errors)}};return(d,_)=>(a(),l("div",A,[e("div",N,[e("h2",null,y(p.questionType)+" Question",1),e("form",{onSubmit:O(V,["prevent"]),class:"space-y-4 w-full"},[T(D,{modelValue:u.value,"onUpdate:modelValue":_[0]||(_[0]=r=>u.value=r),placeholder:"Question Text",required:""},null,8,["modelValue"]),t.value.question_text?(a(),l("div",B,y(t.value.question_text[0]),1)):h("",!0),t.value.chapter_id?(a(),l("div",I,y(t.value.chapter_id[0]),1)):h("",!0),p.questionType==="MCQ"?(a(),l("div",L,[z,(a(!0),l(S,null,U(n.value,(r,i)=>(a(),l("div",{key:i,class:"flex items-center gap-4 px-4"},[q(e("input",{class:"grow-0 shrink-0",value:!0,name:"correct",type:"checkbox","onUpdate:modelValue":c=>r.is_correct=c},null,8,F),[[E,r.is_correct]]),q(e("input",{class:"input-1 text-black placeholder:italic bg-white",type:"text","onUpdate:modelValue":c=>r.option_text=c,placeholder:"Option",required:""},null,8,H),[[k,r.option_text]]),e("div",G,[e("i",{onClick:c=>w(i),class:"fa fa-trash text-red-700 cursor-pointer"},null,8,J)])]))),128)),e("div",{class:"flex justify-center items-center pt-0.5"},[e("button",{type:"button",onClick:g,class:"px-2 pt-1 border rounded bg-gray-300 border-gray-400"}," + Add Option ")])])):h("",!0),e("div",K,[P,q(e("textarea",{class:"input-1","onUpdate:modelValue":_[1]||(_[1]=r=>s.value=r),placeholder:"Question Explanation"},null,512),[[k,s.value]])]),e("div",R,[W,e("button",{type:"button",onClick:_[2]||(_[2]=r=>x("close")),class:"btn-contrast"},"Cancel")])],32)])]))}},X={key:0,class:"modal"},Y={class:"modal-content space-y-2"},Z=e("h2",null,"Delete Question",-1),ee={class:"py-2 space-y-1"},te=e("hr",null,null,-1),se=["innerHTML"],oe=e("hr",null,null,-1),ne={key:0,class:"text-red-500"},ae={class:"flex gap-4"},we={__name:"DeleteQuestionModal",props:{question:{type:Object,required:!0,default:()=>({name:"",id:null})}},emits:["close"],setup(p,{emit:f}){const x=f,o=p,b=C(),t=v({});M(()=>o.question,s=>{},{immediate:!0});const u=async()=>{t.value={};try{await b.delete(o.question.id),x("close")}catch(s){s.response&&s.response.data&&s.response.data.errors&&(t.value=s.response.data.errors)}};return(s,n)=>o.question?(a(),l("div",X,[e("div",Y,[Z,e("div",ee,[j(" Are you sure you want to delete the question ID:"+y(p.question.id)+"? ",1),te,e("div",{class:"overflow-hidden whitespace-pre-wrap line-clamp-3 italic",innerHTML:o.question.question_text},null,8,se),oe]),t.value.chapter_id?(a(),l("div",ne,y(t.value.chapter_id[0]),1)):h("",!0),e("div",ae,[e("button",{onClick:u,class:"btn-2"},"Delete"),e("button",{type:"button",onClick:n[0]||(n[0]=g=>x("close")),class:"btn-contrast"},"Cancel")])])])):h("",!0)}},le={class:"modal"},ie={class:"modal-content space-y-2 max-w-[720px] min-w-80 md:min-w-[480px] lg:min-w-[580px]"},re=e("h2",null,"Edit Question",-1),ce={key:0,class:"text-red-500"},ue={key:1,class:"text-red-500"},de={key:2,class:"grid py-2 gap-1.5 bg-gray-200 rounded-lg"},pe=e("div",{class:"flex justify-between text-sm px-2"},[e("p",null,"Ans"),e("p",null,"Options"),e("p",null,"Delete")],-1),_e=["onUpdate:modelValue"],me=["onUpdate:modelValue"],ve={class:"grow-0 shrink-0 pt-1"},xe=["onClick"],he={class:"grid"},ye=e("h2",{class:"text-center md:text-left"},"Question Explanation",-1),qe={class:"flex gap-4 justify-center"},fe=e("button",{type:"submit",class:"btn-2"},"Save Question",-1),Ve={__name:"EditQuestionModal",props:{question:{type:Object,required:!0},questionType:String},emits:["close"],setup(p,{emit:f}){var d,_,r;const x=f,o=p,b=C(),t=v(((d=o.question)==null?void 0:d.question_text)||""),u=v(((_=o.question)==null?void 0:_.explanation)||""),s=v(((r=o.question)==null?void 0:r.mcq_options)||[]),n=v({}),g=()=>{s.value.push({option_text:"",is_correct:!1})},w=i=>{s.value.splice(i,1)};M(()=>o.question,i=>{i&&(t.value=i.question_text)},{immediate:!0});const V=async()=>{n.value={};try{await b.update(o.question.id,{question_text:t.value,chapter_id:o.question.chapter_id,explanation:u.value,mcq_options:s.value}),x("close")}catch(i){i.response&&i.response.data&&i.response.data.errors&&(n.value=i.response.data.errors)}};return(i,c)=>(a(),l("div",le,[e("div",ie,[re,e("form",{onSubmit:O(V,["prevent"]),class:"space-y-4"},[T(D,{modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=m=>t.value=m),placeholder:"Question Text",required:""},null,8,["modelValue"]),n.value.question_text?(a(),l("div",ce,y(n.value.question_text[0]),1)):h("",!0),n.value.chapter_id?(a(),l("div",ue,y(n.value.chapter_id[0]),1)):h("",!0),p.questionType==="MCQ"?(a(),l("div",de,[pe,(a(!0),l(S,null,U(s.value,(m,Q)=>(a(),l("div",{key:Q,class:"flex items-center gap-4 px-4"},[q(e("input",{class:"grow-0 shrink-0",value:!0,name:"correct",type:"checkbox","onUpdate:modelValue":$=>m.is_correct=$},null,8,_e),[[E,m.is_correct]]),q(e("input",{class:"input-1 text-black placeholder:italic bg-white",type:"text","onUpdate:modelValue":$=>m.option_text=$,placeholder:"Option",required:""},null,8,me),[[k,m.option_text]]),e("div",ve,[e("i",{onClick:$=>w(Q),class:"fa fa-trash text-red-700 cursor-pointer"},null,8,xe)])]))),128)),e("div",{class:"flex justify-center items-center pt-0.5"},[e("button",{type:"button",onClick:g,class:"px-2 pt-1 border rounded bg-gray-300 border-gray-400"}," + Add Option ")])])):h("",!0),e("div",he,[ye,q(e("textarea",{class:"input-1","onUpdate:modelValue":c[1]||(c[1]=m=>u.value=m),placeholder:"Question Explanation"},null,512),[[k,u.value]])]),e("div",qe,[fe,e("button",{type:"button",onClick:c[2]||(c[2]=m=>x("close")),class:"btn-contrast"},"Cancel")])],32)])]))}};export{ke as _,Ve as a,we as b};
