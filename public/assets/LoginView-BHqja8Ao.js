import{r as l,c as f,b as g,k as w,o as y,m as b,e as i,f as c,g as e,x as k,z as d,A as p,t as V,p as q,q as m,B as N,s as S}from"./index-4Z-6rGXL.js";const B={class:"max-w-md mx-auto my-10 px-2"},A={class:"bg-white p-6 rounded-lg shadow-md"},C=e("h2",{class:"title-lg text-center"},"Login",-1),D=e("label",{for:"phone",class:"block font-medium text-gray-700"},"Phone Number",-1),E=e("label",{for:"password",class:"block font-medium text-gray-700"},"Password",-1),L={key:0,class:"mt-4 text-sm text-red-500 text-center"},M=e("div",{class:"flex justify-center"},[e("button",{type:"submit",class:"btn-2"},"Login")],-1),P={class:"mt-4 text-sm text-center"},U={__name:"LoginView",setup(R){const t=l(""),a=l(""),h=f(),u=g(),r=w(),o=l("");y(()=>{u.query.phone&&(t.value=u.query.phone)});const v=async()=>{try{await r.login(t.value,a.value),r.error?o.value=r.error:h.push(localStorage.getItem("next")??"/dashboard")}catch{o.value="An unexpected error occurred. Please try again."}};return(_,s)=>{const x=b("router-link");return i(),c("div",B,[e("div",A,[C,e("form",{onSubmit:k(v,["prevent"]),class:"space-y-4"},[e("div",null,[D,d(e("input",{"onUpdate:modelValue":s[0]||(s[0]=n=>t.value=n),type:"text",id:"phone",name:"phone",class:"input-1 w-full",placeholder:"Enter your phone number",required:""},null,512),[[p,t.value]])]),e("div",null,[E,d(e("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>a.value=n),type:"password",id:"password",name:"password",class:"input-1 w-full",placeholder:"Enter your password",required:"",autofocus:""},null,512),[[p,a.value]])]),o.value?(i(),c("div",L,V(o.value),1)):q("",!0),M],32),e("div",P,[m(" Don't have an account? "),N(x,{to:"/register",class:"text-indigo-500 hover:text-indigo-700"},{default:S(()=>[m("Register")]),_:1})])])])}}};export{U as default};
