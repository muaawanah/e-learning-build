import{b as $,r as o,o as j,w as y,m as E,e,f as a,g as s,E as A,s as k,i as C,F as B,h as N,j as i,p}from"./index-CYGpEyrZ.js";import{u as z}from"./question-Dub41Fy_.js";import{_ as D}from"./QuestionCard-DZppniVl.js";import{_ as R,a as V,b as F}from"./EditQuestionModal--nQdvCw4.js";import"./TextEditor-U5MOw233.js";const S={class:"my-container space-y-2"},T={class:"flex justify-between"},G={class:"flex items-center gap-4"},H=s("i",{class:"fas fa-arrow-left"},null,-1),J=s("h4",{class:"title-lg"},"MCQ Question List",-1),K={key:0,class:"flex justify-center items-center"},O=s("div",{class:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"},null,-1),P=[O],U={key:1},W={key:0,class:"grid md:grid-cols-2 gap-4"},X=["onClick"],Y=s("i",{class:"fad fa-edit"},null,-1),Z=[Y],ee=["onClick"],se=s("i",{class:"fad fa-trash"},null,-1),te=[se],oe={key:1,class:"text-red-500"},re={__name:"McqQuestionList",setup(ae){const n=$(),v=o(n.params.categoryId),M=o(n.params.subjectId),d=o(n.params.chapterId),u=z(),r=o(!1),_=o(!1),f=o(!1),l=o(null),m=o(!0),b=()=>r.value=!0,g=()=>r.value=!1,w=t=>{l.value=t,_.value=!0},Q=()=>_.value=!1,q=t=>{l.value=t,f.value=!0},I=()=>f.value=!1,h=async()=>{try{m.value=!0,await u.index(d.value,"MCQ")}finally{m.value=!1}};return j(h),y(()=>n.params.id,async t=>{d.value=t,await h()}),y(()=>n.params.categoryId,async t=>{v.value=t,await h()}),(t,ne)=>{const x=E("RouterLink");return e(),a("div",S,[s("div",T,[s("div",G,[A(x,{class:"btn-3",to:{name:"ChapterList",params:{categoryId:v.value,id:M.value}}},{default:k(()=>[H]),_:1},8,["to"]),J]),s("button",{class:"btn-2",onClick:b},"Add MCQ Question")]),m.value?(e(),a("div",K,P)):(e(),a("div",U,[C(u).questions.length?(e(),a("div",W,[(e(!0),a(B,null,N(C(u).questions,c=>(e(),i(D,{key:c.id,question:c},{action:k(()=>[s("button",{class:"ml-auto",onClick:L=>w(c)},Z,8,X),s("button",{onClick:L=>q(c),class:"text-red-500"},te,8,ee)]),_:2},1032,["question"]))),128))])):(e(),a("p",oe,"No questions found"))])),r.value?(e(),i(R,{key:2,class:"z-40",chapterId:d.value,questionType:"MCQ",onClose:g},null,8,["chapterId"])):p("",!0),_.value?(e(),i(V,{key:3,class:"z-40",question:l.value,questionType:"MCQ",onClose:Q},null,8,["question"])):p("",!0),f.value?(e(),i(F,{key:4,class:"z-40",question:l.value,onClose:I},null,8,["question"])):p("",!0)])}}};export{re as default};
