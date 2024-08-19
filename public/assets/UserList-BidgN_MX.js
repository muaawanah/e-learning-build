import{u as S}from"./user-CoDwhR1s.js";import{r,o as L,d as l,e as u,f as e,p as f,v as U,J as C,t as b,q as k,H as E,I,c as M,F as $,g as N,i as P}from"./index-BUeJLNrp.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";const n=p=>(E("data-v-00f1efd7"),p=p(),I(),p),O={key:0,class:"modal"},j={class:"card-bg p-4 md:p-8 w-full max-w-5xl"},B=n(()=>e("h2",{class:"title-md text-center"},"Edit User",-1)),R=n(()=>e("p",null,"Name",-1)),A=n(()=>e("p",null,"Email",-1)),D=n(()=>e("p",null,"Phone",-1)),F=n(()=>e("p",null,"Photo URL",-1)),q=n(()=>e("p",null,"Role",-1)),H=n(()=>e("option",{value:"developer"},"Developer",-1)),J=n(()=>e("option",{value:"admin"},"Admin",-1)),T=n(()=>e("option",{value:"instructor"},"Instructor",-1)),z=n(()=>e("option",{value:"student"},"Student",-1)),G=[H,J,T,z],K={key:0,class:"mt-4 text-red-600"},Q={__name:"EditUser",props:{user:Object,isOpen:Boolean},emits:["close","update"],setup(p,{emit:w}){const t=p,i=w,v=S(),_=r(""),d=r(""),m=r(""),y=r(""),x=r("student"),s=r(null);L(()=>{t.user&&(_.value=t.user.name,d.value=t.user.email,m.value=t.user.phone,y.value=t.user.photo,x.value=t.user.role)});const g=async()=>{try{const h={name:_.value,email:d.value,phone:m.value,photo:y.value,role:x.value};await v.updateUser(t.user.id,h),i("update",h),i("close")}catch(h){s.value=h.message}},a=()=>{i("close")};return(h,o)=>p.isOpen?(l(),u("div",O,[e("div",j,[B,R,f(e("input",{class:"input-1","onUpdate:modelValue":o[0]||(o[0]=c=>_.value=c),placeholder:"Name"},null,512),[[U,_.value]]),A,f(e("input",{class:"input-1","onUpdate:modelValue":o[1]||(o[1]=c=>d.value=c),placeholder:"Email"},null,512),[[U,d.value]]),D,f(e("input",{class:"input-1","onUpdate:modelValue":o[2]||(o[2]=c=>m.value=c),placeholder:"Phone"},null,512),[[U,m.value]]),F,f(e("input",{class:"input-1","onUpdate:modelValue":o[3]||(o[3]=c=>y.value=c),placeholder:"Photo URL"},null,512),[[U,y.value]]),q,f(e("select",{class:"input-1","onUpdate:modelValue":o[4]||(o[4]=c=>x.value=c)},G,512),[[C,x.value]]),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-2",onClick:g},"Save"),e("button",{class:"btn-contrast",onClick:a},"Close")]),s.value?(l(),u("div",K,b(s.value),1)):k("",!0)])])):k("",!0)}},W=V(Q,[["__scopeId","data-v-00f1efd7"]]),X={class:"my-container p-4"},Y=e("div",{class:"flex items-center justify-between"},[e("h1",{class:"text-2xl font-bold mb-4"},"User List")],-1),Z={class:"overflow-x-auto"},ee={class:"min-w-full bg-white shadow-md rounded-lg overflow-hidden"},te=e("thead",{class:"font-bold"},[e("tr",null,[e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," SL "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Photo "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Name "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Phone "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Role "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Actions ")])],-1),se={key:0},oe=e("td",{class:"py-2 px-4 border-b border-gray-200 text-center",colspan:"6"},[e("div",{class:"flex justify-center items-center space-x-2"},[e("div",{class:"w-4 h-4 border-4 border-t-4 border-gray-200 rounded-full animate-spin"}),e("span",null,"Loading...")])],-1),ae=[oe],le={class:"py-2 px-4 border-b border-gray-200"},re={class:"py-2 px-4 border-b border-gray-200"},ne=["src"],de={class:"py-2 px-4 border-b border-gray-200"},ce={class:"py-2 px-4 border-b border-gray-200"},ue={class:"py-2 px-4 border-b border-gray-200"},ie={class:"py-2 px-4 border-b border-gray-200"},pe=["onClick"],_e={key:0},he=e("td",{class:"py-2 px-4 border-b border-gray-200",colspan:"6"},"No users found",-1),ve=[he],me={key:0,class:"mt-4 text-red-600"},ge={__name:"UserList",setup(p){const w=S(),t=r(null),i=r(!1),v=r(null),_=r(!0);L(async()=>{try{await w.fetchUsers()}catch(s){t.value=s.message}finally{_.value=!1}});const d=M(()=>w.users),m=s=>{v.value=s,i.value=!0},y=()=>{i.value=!1,v.value=null},x=s=>{const g=d.value.findIndex(a=>a.id===s.id);g!==-1&&(d.value[g]=s)};return(s,g)=>(l(),u("div",X,[Y,e("div",Z,[e("table",ee,[te,e("tbody",null,[_.value?(l(),u("tr",se,ae)):(l(),u($,{key:1},[(l(!0),u($,null,N(d.value,(a,h)=>(l(),u("tr",{key:a.id,class:"hover:bg-gray-100"},[e("td",le,b(h+1),1),e("td",re,[e("img",{src:a.photo||"default-photo.png",alt:"Photo",class:"h-10 w-10 rounded-full object-cover"},null,8,ne)]),e("td",de,b(a.name),1),e("td",ce,b(a.phone),1),e("td",ue,b(a.role||"N/A"),1),e("td",ie,[e("button",{class:"btn-2",onClick:o=>m(a)},"Edit",8,pe)])]))),128)),d.value.length===0?(l(),u("tr",_e,ve)):k("",!0)],64))])])]),t.value?(l(),u("div",me,b(t.value),1)):k("",!0),i.value&&v.value?(l(),P(W,{key:1,user:v.value,isOpen:i.value,onClose:y,onUpdate:x},null,8,["user","isOpen"])):k("",!0)]))}};export{ge as default};
