import{e as s,f as n,g as e,N as c,F as o,h as d,p as l,t as r}from"./index-ZgiZUQd9.js";const u={class:"relative card-bg p-3"},h={class:"w-full justify-between flex gap-4"},_={class:"bg-gray-200 text-black px-2 pt-[5px] rounded-md text-xs"},x=e("div",{class:"grow-0 shrink-0 ml-auto"},null,-1),g=e("hr",null,null,-1),m=["innerHTML"],p={key:0,class:"grid gap-1 text-sm"},f=e("hr",{class:"mb-1"},null,-1),v={class:"flex gap-2 items-center"},k={class:"shrink-0 grow-0 w-4"},w={key:0,class:"fa fa-check-circle text-green-700"},y=["innerHTML"],q=e("hr",null,null,-1),b=["innerHTML"],H={__name:"QuestionCard",props:{question:Object,showExplanation:{type:Boolean,default:!0}},setup(t){return(a,L)=>(s(),n("div",u,[e("div",h,[c(a.$slots,"id",{},()=>[e("div",_,r(t.question.type),1),e("div",null,"ID: "+r(t.question.id),1)]),x,c(a.$slots,"action")]),g,e("div",{class:"whitespace-pre-wrap leading-loose text-base text-black text-left",innerHTML:t.question.question_text},null,8,m),t.question.type==="MCQ"?(s(),n("div",p,[(s(!0),n(o,null,d(t.question.mcq_options,i=>(s(),n(o,{key:i.id},[f,e("div",v,[e("div",k,[i.is_correct?(s(),n("i",w)):l("",!0)]),e("div",{innerHTML:i.option_text},null,8,y)])],64))),128))])):l("",!0),t.showExplanation&&t.question.explanation?(s(),n(o,{key:1},[q,e("div",{class:"whitespace-pre-wrap leading-loose text-sm italic text-gray-500 text-left",innerHTML:t.question.explanation},null,8,b)],64)):l("",!0)]))}};export{H as _};
