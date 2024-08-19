import{b as Q,r as a,o as T,w as y,s as W,d as t,e as o,f as e,y as D,z as $,h as g,F as k,g as z,i as v,q as c,t as A}from"./index-BUeJLNrp.js";import{u as B,_ as E,a as H,b as N}from"./EditQuestionModal-BKtJwNO7.js";import"./TextEditor-nCl-KVPn.js";const R={class:"my-container space-y-2"},S={class:"flex justify-between"},V={class:"flex items-center gap-4"},F=e("i",{class:"fas fa-arrow-left"},null,-1),G=e("h4",{class:"title-lg"},"Written Question List",-1),J={key:0,class:"flex justify-center items-center"},K=e("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),O=[K],P={key:1},U={key:0,class:"grid md:grid-cols-2 gap-4"},X={class:"w-full justify-between flex gap-6"},Y=["onClick"],Z=e("i",{class:"fad fa-edit"},null,-1),ee=[Z],te=["onClick"],se=e("i",{class:"fad fa-trash"},null,-1),ae=[se],oe=e("hr",null,null,-1),ne=["innerHTML"],le=e("hr",null,null,-1),ie=["innerHTML"],ce={key:1,class:"text-red-500"},pe={__name:"WrittenQuestionList",setup(de){const l=Q(),m=a(l.params.categoryId),w=a(l.params.subjectId),d=a(l.params.chapterId),r=B(),u=a(!1),_=a(!1),h=a(!1),i=a(null),p=a(!0),x=()=>u.value=!0,b=()=>u.value=!1,M=s=>{i.value=s,_.value=!0},C=()=>_.value=!1,I=s=>{i.value=s,h.value=!0},L=()=>h.value=!1,f=async()=>{try{p.value=!0,await r.index(d.value,"Written")}finally{p.value=!1}};return T(f),y(()=>l.params.id,async s=>{d.value=s,await f()}),y(()=>l.params.categoryId,async s=>{m.value=s,await f()}),(s,re)=>{const j=W("RouterLink");return t(),o("div",R,[e("div",S,[e("div",V,[D(j,{class:"btn-3",to:{name:"ChapterList",params:{categoryId:m.value,id:w.value}}},{default:$(()=>[F]),_:1},8,["to"]),G]),e("button",{class:"btn-2",onClick:x},"Add Written Question")]),p.value?(t(),o("div",J,O)):(t(),o("div",P,[g(r).questions.length?(t(),o("div",U,[(t(!0),o(k,null,z(g(r).questions,n=>(t(),o("div",{key:n.id,class:"relative card-bg p-3"},[e("div",X,[e("div",null,"ID: "+A(n.id),1),e("button",{class:"ml-auto",onClick:q=>M(n)},ee,8,Y),e("button",{onClick:q=>I(n),class:"text-red-500"},ae,8,te)]),oe,e("div",{class:"whitespace-pre-wrap leading-loose text-justify",innerHTML:n.question_text},null,8,ne),n.explanation?(t(),o(k,{key:0},[le,e("div",{class:"whitespace-pre-wrap leading-loose text-sm italic text-gray-500 text-left",innerHTML:n.explanation},null,8,ie)],64)):c("",!0)]))),128))])):(t(),o("p",ce,"No questions found"))])),u.value?(t(),v(E,{key:2,class:"z-40",chapterId:d.value,questionType:"Written",onClose:b},null,8,["chapterId"])):c("",!0),_.value?(t(),v(H,{key:3,class:"z-40",question:i.value,questionType:"Written",onClose:C},null,8,["question"])):c("",!0),h.value?(t(),v(N,{key:4,class:"z-40",question:i.value,onClose:L},null,8,["question"])):c("",!0)])}}};export{pe as default};
