import{r as l,k as f,b as g,l as y,o as w,s as b,d as i,e as d,f as e,m as k,p as c,v as p,t as V,q,x as m,y as N,z as S}from"./index-CoSo7CmJ.js";const B={class:"max-w-md mx-auto my-10 px-2"},C={class:"bg-white p-6 rounded-lg shadow-md"},D=e("h2",{class:"title-lg text-center"},"Login",-1),E=e("label",{for:"phone",class:"block font-medium text-gray-700"},"Phone Number",-1),L=e("label",{for:"password",class:"block font-medium text-gray-700"},"Password",-1),M={key:0,class:"mt-4 text-sm text-red-500 text-center"},P=e("div",{class:"flex justify-center"},[e("button",{type:"submit",class:"btn-2"},"Login")],-1),R={class:"mt-4 text-sm text-center"},U={__name:"LoginView",setup(A){const t=l(""),a=l(""),h=f(),u=g(),r=y(),o=l("");w(()=>{u.query.phone&&(t.value=u.query.phone)});const v=async()=>{try{await r.login(t.value,a.value),r.error?o.value=r.error:h.push(localStorage.getItem("next")??"/dashboard")}catch{o.value="An unexpected error occurred. Please try again."}};return(_,s)=>{const x=b("router-link");return i(),d("div",B,[e("div",C,[D,e("form",{onSubmit:k(v,["prevent"]),class:"space-y-4"},[e("div",null,[E,c(e("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>t.value=n),type:"text",id:"phone",name:"phone",class:"input-1 w-full",placeholder:"Enter your phone number",required:""},null,512),[[p,t.value]])]),e("div",null,[L,c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>a.value=n),type:"password",id:"password",name:"password",class:"input-1 w-full",placeholder:"Enter your password",required:"",autofocus:""},null,512),[[p,a.value]])]),o.value?(i(),d("div",M,V(o.value),1)):q("",!0),P],32),e("div",R,[m(" Don't have an account? "),N(x,{to:"/register",class:"text-indigo-500 hover:text-indigo-700"},{default:S(()=>[m("Register")]),_:1})])])])}}};export{U as default};
