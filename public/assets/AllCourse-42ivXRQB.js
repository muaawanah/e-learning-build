import{u as C,a as h,r as i,b as k,c as x,o as b,w as A,d as w,e as a,f as l,g as o,n as y,F as d,h as _,i as q,t as S,j as B,_ as $}from"./index-DHIdTAsh.js";const j={class:"my-container space-y-6 py-2"},E=o("div",null,[o("h2",{class:"title-xl text-center"},"Our Courses"),o("p",{class:"text-center"},"Explore our courses at a glance")],-1),F={class:"flex flex-wrap justify-center md:gap-4 gap-2"},I=["onClick"],L={key:0,class:"grid md:grid-cols-3 gap-4"},N=o("i",{class:"fas fa-image text-gray-300 text-[250px]"},null,-1),R=o("div",{class:"h-8 w-28 bg-gray-200 rounded-full mt-4"},null,-1),z=[N,R],D={key:1,class:"grid md:grid-cols-3 gap-4"},M={key:2},H={__name:"AllCourse",setup(O){const v=C(),u=h(),c=i([]),t=i("All Courses"),n=k(),f=x(),g=i(!0);b(async()=>{await v.fetchCourses(),await u.fetchCategories(),c.value=v.courses.sort((e,r)=>r.id-e.id),n.query.category&&(t.value=n.query.category),g.value=!1}),A(()=>n.query.category,e=>{t.value=e||"All Courses"});const p=w(()=>{if(t.value==="All Courses")return c.value;const e=u.categories.find(r=>r.name===t.value);return c.value.filter(r=>parseInt(r.category_id)===parseInt(e==null?void 0:e.id))}),m=e=>{t.value=e,f.replace({query:{...n.query,category:e}})};return(e,r)=>(a(),l("div",j,[E,o("div",null,[o("div",F,[o("button",{onClick:r[0]||(r[0]=s=>m("All Courses")),class:y({"btn-2":t.value==="All Courses","btn-3":t.value!=="All Courses"})}," All Courses ",2),(a(!0),l(d,null,_(q(u).categories,s=>(a(),l("button",{key:s.id,onClick:V=>m(s.name),class:y({"btn-2":t.value===s.name,"btn-3":t.value!==s.name})},S(s.name),11,I))),128))])]),g.value?(a(),l("div",L,[(a(),l(d,null,_(3,s=>o("div",{class:"card-bg p-4 animate-pulse items-center",key:s},z)),64))])):p.value.length>0?(a(),l("div",D,[(a(!0),l(d,null,_(p.value,s=>(a(),B($,{key:s.id,course:s},null,8,["course"]))),128))])):(a(),l("p",M,"No courses available"))]))}};export{H as default};
