import{b as I,c as U,r as h,a2 as z,o as C,d as w,e as t,f as a,i as v,F as f,g as e,t as b,q as H,$ as R,h as k,z as x,a0 as M,n as B,x as j,A}from"./index-DHIdTAsh.js";import{u as D}from"./course-exam-BB9BbMk5.js";const F={class:"my-container"},N={key:0,class:"card-bg p-4 md:p-8"},P=e("p",null,"Loading...",-1),Q=[P],W={class:"shrink-0 grow-0 card-bg p-4 sticky top-0"},G={class:"flex justify-between items-center gap-2"},J={class:"line-clamp-1"},K={class:"grow-0 shrink-0 border px-3 pt-2 pb-1 rounded-lg"},O=e("span",{class:"hidden md:inline"},"Remaining:",-1),X={class:"relative w-full h-2 bg-gray-300 rounded mt-1"},Y={class:"shrink grow mt-6 space-y-4 overflow-hidden overflow-y-auto scrollbar"},Z={class:"mb-2"},q={class:"font-semibold"},ee=["innerHTML"],se={key:0,class:"space-y-2"},te=["name","id","value","onUpdate:modelValue"],ae=["for","innerHTML"],oe={key:1},ne=["onUpdate:modelValue"],re=e("hr",{class:"my-5"},null,-1),le={class:"flex items-center gap-1 md:gap-2"},ie=e("span",{class:"pt-1 text-xs md:text-base"},"I want to submit",-1),ce=e("br",null,null,-1),pe={__name:"MyExamParticipation",setup(de){const $=I(),y=U(),m=D(),p=h(!1),{courseId:i,examId:_}=$.params,{exam:c,loading:S}=z(m),n=h(0),d=h(0);C(async()=>{if((await m.fetchExam(i,_)).has_user_exam)return y.replace({path:`/my/course/${i}/exam/${_}/answer-sheet`});c.value.duration&&(d.value=c.value.duration*60,n.value=d.value,T())});function T(){const r=setInterval(()=>{n.value>0?n.value-=1:(clearInterval(r),g())},1e3)}const L=w(()=>{const r=Math.floor(n.value/60),l=Math.floor(r/60),s=r%60,u=n.value%60;return`${l?`${l}:`:""}${String(s).padStart(2,"0")}:${String(u).padStart(2,"0")}`}),V=w(()=>(d.value-n.value)/d.value*100),g=async()=>(await m.submitExam(i,_),y.replace({path:`/my/course/${i}`}));return(r,l)=>(t(),a("div",F,[v(S)?(t(),a("div",N,Q)):(t(),a(f,{key:1},[e("div",W,[e("div",G,[e("h3",J,b(v(c).title),1),e("p",K,[O,H(),e("b",null,b(L.value),1)])]),e("div",X,[e("div",{class:"absolute left-0 top-0 h-full bg-blue-500 rounded",style:R({width:`${V.value}%`})},null,4)])]),e("div",Y,[(t(!0),a(f,null,k(v(c).questions,(s,u)=>(t(),a("div",{key:s.id,class:"card-bg p-4"},[e("div",Z,[e("h4",q,"Question "+b(u+1)+":",1),e("div",{innerHTML:s.question_text},null,8,ee)]),s.type==="MCQ"?(t(),a("div",se,[(t(!0),a(f,null,k(s.mcq_options,o=>(t(),a("div",{key:o.id,class:"flex items-center cursor-pointer border px-3 py-4 rounded-lg"},[x(e("input",{type:"checkbox",name:"question-"+u,id:`question:${s.id}-option:${o.id}`,value:o.id,class:"mr-2 size-4 cursor-pointer","onUpdate:modelValue":E=>s.user_answers=E},null,8,te),[[M,s.user_answers]]),e("label",{class:"cursor-pointer",for:`question:${s.id}-option:${o.id}`,innerHTML:o.option_text},null,8,ae)]))),128))])):(t(),a("div",oe,[x(e("textarea",{class:"w-full p-2 border rounded-md",rows:"4",placeholder:"Write your answer here...","onUpdate:modelValue":o=>s.user_answers[0]=o},null,8,ne),[[A,s.user_answers[0]]])]))]))),128))]),re,e("form",{onSubmit:j(g,["prevent"]),class:"grow-0 shrink-0 w-full flex justify-end gap-1 md:gap-4"},[e("label",le,[x(e("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>p.value=s),type:"checkbox",required:""},null,512),[[M,p.value]]),ie]),e("button",{type:"submit",class:B(["btn-2 disabled:opacity-50 px-1 md:px-4 text-xs md:text-base",{"opacity-50":!p.value}])}," Submit Answer ",2)],32),ce],64))]))}};export{pe as default};
