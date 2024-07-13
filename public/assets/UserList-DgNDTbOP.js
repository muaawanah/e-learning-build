import{u as $}from"./user-0PXoHirb.js";import{_ as C,d,e as S,o as u,g as _,a as e,p as b,v as w,C as E,t as g,s as f,x as L,y as M,f as N,F as P,h as V,c as I}from"./index-BAbeo40T.js";const l=i=>(L("data-v-00f1efd7"),i=i(),M(),i),O={key:0,class:"modal"},B={class:"card-bg p-4 md:p-8 w-full max-w-5xl"},j=l(()=>e("h2",{class:"title-md text-center"},"Edit User",-1)),R=l(()=>e("p",null,"Name",-1)),A=l(()=>e("p",null,"Email",-1)),D=l(()=>e("p",null,"Phone",-1)),F=l(()=>e("p",null,"Photo URL",-1)),T=l(()=>e("p",null,"Role",-1)),q=l(()=>e("option",{value:"developer"},"Developer",-1)),z=l(()=>e("option",{value:"admin"},"Admin",-1)),G=l(()=>e("option",{value:"instructor"},"Instructor",-1)),H=l(()=>e("option",{value:"student"},"Student",-1)),J=[q,z,G,H],K={key:0,class:"mt-4 text-red-600"},Q={__name:"EditUser",props:{user:Object,isOpen:Boolean},emits:["close","update"],setup(i,{emit:k}){const s=i,c=k,h=$(),n=d(""),v=d(""),m=d(""),x=d(""),t=d("student"),p=d(null);S(()=>{s.user&&(n.value=s.user.name,v.value=s.user.email,m.value=s.user.phone,x.value=s.user.photo,t.value=s.user.role)});const o=async()=>{try{const y={name:n.value,email:v.value,phone:m.value,photo:x.value,role:t.value};await h.updateUser(s.user.id,y),c("update",y),c("close")}catch(y){p.value=y.message}},U=()=>{c("close")};return(y,a)=>i.isOpen?(u(),_("div",O,[e("div",B,[j,R,b(e("input",{class:"input-1","onUpdate:modelValue":a[0]||(a[0]=r=>n.value=r),placeholder:"Name"},null,512),[[w,n.value]]),A,b(e("input",{class:"input-1","onUpdate:modelValue":a[1]||(a[1]=r=>v.value=r),placeholder:"Email"},null,512),[[w,v.value]]),D,b(e("input",{class:"input-1","onUpdate:modelValue":a[2]||(a[2]=r=>m.value=r),placeholder:"Phone"},null,512),[[w,m.value]]),F,b(e("input",{class:"input-1","onUpdate:modelValue":a[3]||(a[3]=r=>x.value=r),placeholder:"Photo URL"},null,512),[[w,x.value]]),T,b(e("select",{class:"input-1","onUpdate:modelValue":a[4]||(a[4]=r=>t.value=r)},J,512),[[E,t.value]]),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-2",onClick:o},"Save"),e("button",{class:"btn-contrast",onClick:U},"Close")]),p.value?(u(),_("div",K,g(p.value),1)):f("",!0)])])):f("",!0)}},W=C(Q,[["__scopeId","data-v-00f1efd7"]]),X={class:"my-container p-4"},Y=e("div",{class:"flex items-center justify-between"},[e("h1",{class:"text-2xl font-bold mb-4"},"User List")],-1),Z={class:"overflow-x-auto"},ee={class:"min-w-full bg-white shadow-md rounded-lg overflow-hidden"},te=e("thead",{class:"font-bold"},[e("tr",null,[e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," SL "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Photo "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Name "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Phone "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Role "),e("th",{class:"py-2 px-4 bg-gray-200 text-left text-sm text-gray-700 uppercase tracking-wider"}," Actions ")])],-1),se={class:"py-2 px-4 border-b border-gray-200"},oe={class:"py-2 px-4 border-b border-gray-200"},ae=["src"],le={class:"py-2 px-4 border-b border-gray-200"},ne={class:"py-2 px-4 border-b border-gray-200"},re={class:"py-2 px-4 border-b border-gray-200"},de={class:"py-2 px-4 border-b border-gray-200"},ce=["onClick"],ue={key:0},ie=e("td",{class:"py-2 px-4 border-b border-gray-200",colspan:"6"},"No users found",-1),pe=[ie],_e={key:0,class:"mt-4 text-red-600"},me={__name:"UserList",setup(i){const k=$(),s=d(null),c=d(!1),h=d(null);S(async()=>{try{await k.fetchUsers()}catch(t){s.value=t.message}});const n=N(()=>k.users),v=t=>{h.value=t,c.value=!0},m=()=>{c.value=!1,h.value=null},x=t=>{const p=n.value.findIndex(o=>o.id===t.id);p!==-1&&(n.value[p]=t)};return(t,p)=>(u(),_("div",X,[Y,e("div",Z,[e("table",ee,[te,e("tbody",null,[(u(!0),_(P,null,V(n.value,(o,U)=>(u(),_("tr",{key:o.id,class:"hover:bg-gray-100"},[e("td",se,g(U+1),1),e("td",oe,[e("img",{src:o.photo||"default-photo.png",alt:"Photo",class:"h-10 w-10 rounded-full object-cover"},null,8,ae)]),e("td",le,g(o.name),1),e("td",ne,g(o.phone),1),e("td",re,g(o.role||"N/A"),1),e("td",de,[e("button",{class:"btn-2",onClick:y=>v(o)},"Edit",8,ce)])]))),128)),n.value.length===0?(u(),_("tr",ue,pe)):f("",!0)])])]),s.value?(u(),_("div",_e,g(s.value),1)):f("",!0),c.value&&h.value?(u(),I(W,{key:1,user:h.value,isOpen:c.value,onClose:m,onUpdate:x},null,8,["user","isOpen"])):f("",!0)]))}};export{me as default};
