import{E as Z,G as S,c as be,b as ee,r as n,o as te,e as x,f as h,g as e,x as q,z as y,A as g,K as le,F as U,h as O,t as E,i as I,n as C,p as j,w as P,I as se,J as oe,D as z,m as ge,q as A,B as L,s as we,v as ke,u as $e,j as Me}from"./index-ZgiZUQd9.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as ne}from"./exam-Dj3WIug0.js";const N=Z("module",{state:()=>({modules:[]}),actions:{async fetchModules(t){try{const a=await S.get(`/courses/${t}/modules`);this.modules=a.data}catch(a){console.error("Failed to fetch modules:",a)}},async addModule(t,a){try{const l=await S.post("/modules",{course_id:t,...a});this.modules.push(l.data)}catch(l){console.error("Failed to add module:",l)}},async updateModule(t,a){try{const l=await S.put(`/modules/${t}`,a),s=this.modules.findIndex(_=>_.id===t);s!==-1&&(this.modules[s]=l.data)}catch(l){console.error("Failed to update module:",l)}},async deleteModule(t){try{await S.delete(`/modules/${t}`),this.modules=this.modules.filter(a=>a.id!==t)}catch(a){console.error("Failed to delete module:",a)}}}}),Ee={key:0,class:"flex items-center justify-center"},Ce={class:"card-bg p-4 md:p-8 w-full max-w-6xl"},De=e("h2",{class:"title-md text-center"},"Add Module",-1),je=e("p",null,"Title:",-1),Ve=e("p",null,"Description:",-1),Le={class:"grid md:grid-cols-5 gap-4"},Se=e("p",null,"Module Order:",-1),Ue=e("p",null,"Duration (minutes):",-1),Oe=e("label",{for:"prerequisite_module_id"},"Prerequisite Module:",-1),qe=e("option",{value:""},"Select a prerequisite module",-1),Te=["value"],Ae={class:"flex items-center gap-2"},Ie=e("label",{for:"is_active",class:""},"Active",-1),ze={class:"flex items-center gap-2"},Ne=e("label",{for:"is_paid",class:""},"Paid",-1),Fe=e("button",{type:"submit",class:"btn-2"},"Add",-1),Be={__name:"ModuleAddModal",props:{isOpen:Boolean},emits:["add-module","close"],setup(t,{emit:a}){const l=a,s=N(),_=be(),u=ee(),r=n(""),i=n(""),c=n(""),f=n(""),d=n(!1),o=n(!1),v=n(""),w=n("");te(()=>{s.fetchModules(u.params.id)});const k=async()=>{const p=u.params.id,b={title:r.value,description:i.value,order:c.value,duration:f.value,is_active:d.value,is_paid:o.value,prerequisite_module_id:v.value};try{await s.addModule(p,b),w.value="Module is added",r.value="",i.value="",c.value="",f.value="",d.value=!1,o.value=!1,v.value="",setTimeout(()=>{_.push(`/course-list/${p}/modules`)},2e3)}catch($){console.error("Failed to add module:",$)}},m=()=>{l("close")};return(p,b)=>t.isOpen?(x(),h("div",Ee,[e("div",Ce,[De,e("form",{onSubmit:q(k,["prevent"]),class:"space-y-2"},[e("div",null,[je,y(e("input",{class:"input-1","onUpdate:modelValue":b[0]||(b[0]=$=>r.value=$),required:"",placeholder:"Title"},null,512),[[g,r.value]])]),e("div",null,[Ve,y(e("textarea",{"onUpdate:modelValue":b[1]||(b[1]=$=>i.value=$),class:"input-1"},null,512),[[g,i.value]])]),e("div",Le,[e("div",null,[Se,y(e("input",{class:"input-1","onUpdate:modelValue":b[2]||(b[2]=$=>c.value=$),type:"number"},null,512),[[g,c.value]])]),e("div",null,[Ue,y(e("input",{class:"input-1","onUpdate:modelValue":b[3]||(b[3]=$=>f.value=$),type:"number"},null,512),[[g,f.value,void 0,{number:!0}]])]),e("div",null,[Oe,y(e("select",{id:"prerequisite_module_id","onUpdate:modelValue":b[4]||(b[4]=$=>v.value=$),class:"input-1"},[qe,(x(!0),h(U,null,O(I(s).modules,$=>(x(),h("option",{key:$.id,value:$.id},E($.title),9,Te))),128))],512),[[le,v.value]])]),e("div",Ae,[e("div",{onClick:b[5]||(b[5]=$=>d.value=!d.value),class:C(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":d.value}])},[e("div",{class:C(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":d.value}])},null,2)],2),Ie]),e("div",ze,[e("div",{onClick:b[6]||(b[6]=$=>o.value=!o.value),class:C(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":o.value}])},[e("div",{class:C(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":o.value}])},null,2)],2),Ne])]),e("div",{class:"flex justify-end gap-4"},[Fe,e("button",{type:"button",onClick:m,class:"btn-contrast"},"Close")])],32)])])):j("",!0)}},V=t=>(se("data-v-702f4702"),t=t(),oe(),t),Re={key:0,class:"modal"},Pe={class:"card-bg p-4 md:p-8 w-full max-w-5xl mx-2"},Ye=V(()=>e("h2",{class:"title-md text-center"},"Edit Module",-1)),Qe=V(()=>e("p",null,"Title:",-1)),Ge=V(()=>e("p",null,"Description:",-1)),Je=V(()=>e("p",null,"Order:",-1)),Ke=V(()=>e("label",{for:"duration",class:"block text-sm font-medium text-gray-700"},"Duration (minutes):",-1)),He=V(()=>e("label",{for:"prerequisite_module_id"},"Prerequisite Module:",-1)),We=V(()=>e("option",{value:""},"Select a prerequisite module",-1)),Xe=["value"],Ze={class:"flex items-center gap-2"},et=V(()=>e("label",{class:"ml-2 block text-sm text-gray-900"},"Active",-1)),tt={class:"flex items-center gap-2"},lt=V(()=>e("label",{class:"ml-2 block text-sm text-gray-900"},"Paid",-1)),st={__name:"ModuleEditModal",props:{module:Object,isOpen:Boolean},emits:["update","close"],setup(t,{emit:a}){const l=t,s=a,_=N(),u=n(""),r=n(""),i=n(0),c=n(0),f=n(!1),d=n(!1),o=n(0);P(()=>l.module,k=>{k&&(u.value=k.title||"",r.value=k.description||"",i.value=k.order||0,c.value=k.duration||0,f.value=k.is_active||!1,d.value=k.is_paid||!1,o.value=k.prerequisite_module_id||null)},{immediate:!0});const v=async()=>{const k={id:l.module.id,title:u.value,description:r.value,order:i.value,duration:c.value,is_active:f.value,is_paid:d.value,prerequisite_module_id:o.value};try{await _.updateModule(l.module.id,k),s("update",k),s("close")}catch(m){console.error("Error updating module:",m)}},w=()=>{s("close")};return(k,m)=>t.isOpen?(x(),h("div",Re,[e("div",Pe,[Ye,e("div",null,[Qe,y(e("input",{class:"input-1","onUpdate:modelValue":m[0]||(m[0]=p=>u.value=p),required:"",placeholder:"Title"},null,512),[[g,u.value]])]),e("div",null,[Ge,y(e("textarea",{"onUpdate:modelValue":m[1]||(m[1]=p=>r.value=p),class:"input-1"},null,512),[[g,r.value]])]),e("div",null,[Je,y(e("input",{class:"input-1","onUpdate:modelValue":m[2]||(m[2]=p=>i.value=p),type:"number"},null,512),[[g,i.value]])]),e("div",null,[Ke,y(e("input",{type:"number",id:"duration","onUpdate:modelValue":m[3]||(m[3]=p=>c.value=p),class:"input-1"},null,512),[[g,c.value,void 0,{number:!0}]])]),e("div",null,[He,y(e("select",{id:"prerequisite_module_id","onUpdate:modelValue":m[4]||(m[4]=p=>o.value=p),class:"input-1"},[We,(x(!0),h(U,null,O(I(_).modules,p=>(x(),h("option",{key:p.id,value:p.id},E(p.title),9,Xe))),128))],512),[[le,o.value]])]),e("div",Ze,[e("div",{onClick:m[5]||(m[5]=p=>f.value=!f.value),class:C(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":f.value}])},[e("div",{class:C(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":f.value}])},null,2)],2),et]),e("div",tt,[e("div",{onClick:m[6]||(m[6]=p=>d.value=!d.value),class:C(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":d.value}])},[e("div",{class:C(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":d.value}])},null,2)],2),lt]),e("div",{class:"flex justify-center gap-4"},[e("button",{onClick:v,class:"btn-2"},"Save"),e("button",{onClick:w,class:"btn-contrast"},"Close")])])])):j("",!0)}},ot=ae(st,[["__scopeId","data-v-702f4702"]]),ie=t=>(se("data-v-668780de"),t=t(),oe(),t),at={key:0,class:"fixed inset-0 flex items-center justify-center z-50"},nt=ie(()=>e("div",{class:"modal-overlay absolute inset-0 bg-gray-500 opacity-75"},null,-1)),it={class:"modal-container bg-white w-full md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"},dt={class:"p-6"},ut={class:"mb-4"},rt=ie(()=>e("h2",{class:"text-2xl font-bold mb-4"},"Delete Module",-1)),ct={key:0,class:"text-gray-700"},mt={__name:"ModuleDeleteModal",props:{isOpen:Boolean,module:Object},emits:["close","confirmDelete"],setup(t,{emit:a}){const l=t,s=a,_=N(),u=async()=>{l.module&&(await _.deleteModule(l.module.id),s("confirmDelete"),s("close"))},r=()=>{s("close")};return(i,c)=>l.isOpen?(x(),h("div",at,[nt,e("div",it,[e("div",dt,[e("div",ut,[rt,l.module?(x(),h("p",ct,' Are you sure you want to delete "'+E(l.module.title)+'"? ',1)):j("",!0)]),e("div",{class:"flex justify-end"},[e("div",{class:"flex space-x-4 justify-center"},[e("button",{class:"btn-contrast",onClick:u},"Yes"),e("button",{class:"btn-2",onClick:r},"No")])])])])])):j("",!0)}},pt=ae(mt,[["__scopeId","data-v-668780de"]]),Y=Z("lecture",{state:()=>({lectures:{}}),actions:{async fetchLectures(t){try{const a=await S.get(`/modules/${t}/lectures`);this.lectures={...this.lectures,[t]:a.data}}catch(a){console.error("Error fetching lectures:",a)}},async addLecture(t,a){try{const l=await S.post(`/modules/${t}/lectures`,a);this.lectures[t]||(this.lectures[t]=[]),this.lectures[t]=[...this.lectures[t],l.data]}catch(l){console.error("Error adding lecture:",l)}},async deleteLecture(t,a){try{await S.delete(`/modules/${t}/lectures/${a}`),this.lectures[t]&&(this.lectures[t]=this.lectures[t].filter(l=>l.id!==a))}catch(l){console.error("Error deleting lecture:",l)}},async updateLecture(t,a,l){try{const s=await S.put(`/modules/${t}/lectures/${a}`,l);if(this.lectures[t]){const _=this.lectures[t].findIndex(u=>u.id===a);_!==-1&&(this.lectures[t][_]=s.data)}}catch(s){console.error("Error updating lecture:",s)}}}}),vt=e("h2",{class:"title-md"},"Add Exam Info",-1),ft=e("label",null,"Exam Title:",-1),_t=e("label",null,"Duration (minutes):",-1),xt=e("label",null,"Opening Time:",-1),ht=e("label",null,"Exam Link:",-1),yt=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-2"},"Add Exam")],-1),bt={__name:"AddExam",props:{moduleId:Number},emits:["submit"],setup(t,{emit:a}){const l=t,s=n({title:"",duration:"",opening_time:"",link:""}),_=a,u=()=>{const r={module_id:l.moduleId,title:s.value.title,duration:s.value.duration,opening_time:s.value.opening_time,link:s.value.link};_("submit",r),s.value={title:"",duration:"",opening_time:"",link:""}};return(r,i)=>(x(),h("div",null,[vt,e("form",{onSubmit:q(u,["prevent"]),class:"space-y-4"},[e("div",null,[ft,y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":i[0]||(i[0]=c=>s.value.title=c),placeholder:"Title",required:""},null,512),[[g,s.value.title]])]),e("div",null,[_t,y(e("input",{class:"input-1",type:"number","onUpdate:modelValue":i[1]||(i[1]=c=>s.value.duration=c),placeholder:"Duration",required:""},null,512),[[g,s.value.duration]])]),e("div",null,[xt,y(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":i[2]||(i[2]=c=>s.value.opening_time=c),placeholder:"Opening Date & Time",required:""},null,512),[[g,s.value.opening_time]])]),e("div",null,[ht,y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":i[3]||(i[3]=c=>s.value.link=c),placeholder:"Link"},null,512),[[g,s.value.link]])]),yt],32)]))}},gt=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1),wt={__name:"EditExamForm",props:{exam:Object},emits:["close"],setup(t,{emit:a}){const l=t,s=a,_=ne(),u=n(l.exam.title),r=n(l.exam.duration),i=n(l.exam.opening_time),c=n(l.exam.link),f=async()=>{const d={...l.exam,title:u.value,duration:r.value,opening_time:i.value,link:c.value};try{await _.updateExam(l.exam.module_id,l.exam.id,d),s("close")}catch(o){console.error("Error updating exam:",o)}};return P(()=>l.exam,d=>{u.value=d.title,r.value=d.duration,i.value=d.opening_time,c.value=d.link},{immediate:!0}),(d,o)=>(x(),h("div",null,[e("form",{onSubmit:q(f,["prevent"]),class:"space-y-4"},[y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":o[0]||(o[0]=v=>u.value=v),placeholder:"Title",required:""},null,512),[[g,u.value]]),y(e("input",{class:"input-1",type:"number","onUpdate:modelValue":o[1]||(o[1]=v=>r.value=v),placeholder:"Duration"},null,512),[[g,r.value]]),y(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":o[2]||(o[2]=v=>i.value=v),placeholder:"Opening Date & Time"},null,512),[[g,i.value]]),y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":o[3]||(o[3]=v=>c.value=v),placeholder:"Link"},null,512),[[g,c.value]]),gt],32)]))}},kt={class:"flex flex-col md:flex-row md:justify-center"},$t=e("label",{for:"video",class:"mr-4"},"Recorded Video",-1),Mt=e("label",{for:"virtual_platform"},"Live Class Link",-1),Et=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Add Lecture")],-1),Ct={__name:"AddLecture",props:{moduleId:Number,courseId:Number},setup(t){const a=t,l=Y(),s=n(""),_=n(""),u=n(""),r=n(""),i=n("video"),c=async()=>{const f={course_id:a.courseId,module_id:a.moduleId,title:s.value,link:_.value,description:u.value,type:i.value,opening_time:r.value};try{await l.addLecture(a.moduleId,f),s.value="",_.value="",u.value="",i.value="video",r.value=""}catch(d){console.error("Error adding lecture:",d)}};return(f,d)=>(x(),h("div",null,[e("form",{onSubmit:q(c,["prevent"]),class:"space-y-4"},[y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":d[0]||(d[0]=o=>s.value=o),placeholder:"Title",required:""},null,512),[[g,s.value]]),e("div",kt,[e("div",null,[y(e("input",{type:"radio",id:"video",value:"video","onUpdate:modelValue":d[1]||(d[1]=o=>i.value=o),class:"mr-2"},null,512),[[z,i.value]]),$t]),e("div",null,[y(e("input",{type:"radio",id:"virtual_platform",value:"virtual_platform","onUpdate:modelValue":d[2]||(d[2]=o=>i.value=o),class:"mr-2"},null,512),[[z,i.value]]),Mt])]),y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":d[3]||(d[3]=o=>_.value=o),placeholder:"Link",required:""},null,512),[[g,_.value]]),y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":d[4]||(d[4]=o=>u.value=o),placeholder:"Description"},null,512),[[g,u.value]]),y(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":d[5]||(d[5]=o=>r.value=o),placeholder:"Opening Date & Time",required:""},null,512),[[g,r.value]]),Et],32)]))}},Dt={class:"flex flex-col md:flex-row md:justify-center"},jt=e("label",{for:"video",class:"mr-4"},"Recorded Video",-1),Vt=e("label",{for:"virtual_platform"},"Live Class Link",-1),Lt=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1),St={__name:"EditLectureForm",props:{lecture:Object},emits:["close"],setup(t,{emit:a}){const l=t,s=a,_=Y(),u=n(l.lecture.title),r=n(l.lecture.link),i=n(l.lecture.description),c=n(l.lecture.opening_time),f=n(l.lecture.type),d=async()=>{const o={...l.lecture,title:u.value,link:r.value,description:i.value,type:f.value,opening_time:c.value};try{await _.updateLecture(l.lecture.module_id,l.lecture.id,o),s("close")}catch(v){console.error("Error updating lecture:",v)}};return P(()=>l.lecture,o=>{u.value=o.title,r.value=o.link,i.value=o.description,f.value=o.type,c.value=o.opening_time},{immediate:!0}),(o,v)=>(x(),h("div",null,[e("form",{onSubmit:q(d,["prevent"]),class:"space-y-4"},[y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":v[0]||(v[0]=w=>u.value=w),placeholder:"Title",required:""},null,512),[[g,u.value]]),e("div",Dt,[e("div",null,[y(e("input",{type:"radio",id:"video",value:"video","onUpdate:modelValue":v[1]||(v[1]=w=>f.value=w),class:"mr-2"},null,512),[[z,f.value]]),jt]),e("div",null,[y(e("input",{type:"radio",id:"virtual_platform",value:"virtual_platform","onUpdate:modelValue":v[2]||(v[2]=w=>f.value=w),class:"mr-2"},null,512),[[z,f.value]]),Vt])]),y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":v[3]||(v[3]=w=>r.value=w),placeholder:"Link",required:""},null,512),[[g,r.value]]),y(e("input",{class:"input-1",type:"text","onUpdate:modelValue":v[4]||(v[4]=w=>i.value=w),placeholder:"Description"},null,512),[[g,i.value]]),y(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":v[5]||(v[5]=w=>c.value=w),placeholder:"Opening Date & Time",required:""},null,512),[[g,c.value]]),Lt],32)]))}},Ut={class:"flex md:flex-row flex-col items-center gap-4"},Ot={class:"flex flex-1 items-center gap-4"},qt={class:"text-center border-2 rounded-md p-1.5"},Tt=e("div",{class:"text-xs md:text-sm"},"Module",-1),At={class:"flex-1"},It={class:"line-clamp-1"},zt={class:"flex items-center gap-2"},Nt=e("p",null,"Content",-1),Ft=e("i",{class:"far fa-edit"},null,-1),Bt=e("i",{class:"fas fa-trash-alt"},null,-1),Rt={key:0},Pt=e("hr",{class:"mb-2"},null,-1),Yt={class:"flex flex-col justify-center space-y-2 divide-y-2"},Qt={class:"flex items-center gap-4"},Gt={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},Jt={class:"text-xs"},Kt={key:0},Ht={key:1},Wt={class:"title-sm"},Xt={class:"flex items-center gap-2 text-sm text-gray-400"},Zt=e("i",{class:"far fa-calendar-check"},null,-1),el={class:"flex gap-2"},tl=["onClick"],ll=e("i",{class:"far fa-edit"},null,-1),sl=e("span",{class:"hidden md:flex"},"Edit",-1),ol=[ll,sl],al=["onClick"],nl=e("i",{class:"fas fa-trash-alt"},null,-1),il=e("span",{class:"hidden md:flex"},"Delete",-1),dl=[nl,il],ul={class:"flex items-center gap-4"},rl=e("div",{class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},[e("i",{class:"fas fa-file-alt"}),e("div",{class:"text-xs"},"Exam")],-1),cl={class:"title-sm"},ml={class:"flex items-center gap-2 text-sm text-gray-400"},pl=e("i",{class:"far fa-calendar-check"},null,-1),vl={class:"flex gap-2"},fl=["onClick"],_l=e("i",{class:"far fa-edit"},null,-1),xl=e("span",{class:"hidden md:flex"},"Edit",-1),hl=[_l,xl],yl=["onClick"],bl=e("i",{class:"fas fa-trash-alt"},null,-1),gl=e("span",{class:"hidden md:flex"},"Delete",-1),wl=[bl,gl],kl={key:1,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},$l={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Ml={class:"mt-4"},El={key:2,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Cl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Dl={class:"mt-4"},jl={key:3,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Vl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Ll={class:"mt-4 text-center"},Sl={key:4,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Ul={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Ol={class:"mt-4"},ql={key:5,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Tl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Al={class:"mt-4"},Il={key:6,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},zl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Nl={class:"mt-4 text-center"},Fl={__name:"ModuleItem",props:{module:Object},emits:["edit","delete"],setup(t,{emit:a}){const l=t,s=Y(),_=ne(),u=n(!1),r=n(!1),i=n(!1),c=n(!1),f=n(!1),d=n(!1),o=n(!1),v=n(null),w=n(null),k=n(null),m=n(null),p=a,b=()=>{p("edit",l.module)},$=()=>{p("delete",l.module)},de=async()=>{u.value=!u.value,u.value&&(await s.fetchLectures(l.module.id),await _.fetchExams(l.module.id))},ue=()=>{r.value=!0},Q=()=>{r.value=!1},re=D=>{v.value=D,i.value=!0},G=()=>{i.value=!1},ce=D=>{w.value=D,c.value=!0},F=()=>{c.value=!1},me=async()=>{w.value&&(await s.deleteLecture(l.module.id,w.value.id),F())},pe=async()=>{Q()},J=D=>{const T=new Date(D);return ke(T,"hh:mm a, dd-MMM-yyyy")},ve=()=>{f.value=!0},K=()=>{f.value=!1},fe=async D=>{try{await _.addExam(l.module.id,D),K()}catch(T){console.error("Error adding exam:",T)}},_e=D=>{k.value=D,d.value=!0},H=()=>{d.value=!1},xe=D=>{m.value=D,o.value=!0},B=()=>{o.value=!1},he=async()=>{m.value&&(await _.deleteExam(l.module.id,m.value.id),B())};return(D,T)=>{var W,X;const ye=ge("RouterLink");return x(),h("li",{class:C(["card-bg p-4",{"bg-gray-100 border-2 border-gray-200 text-gray-400":t.module.is_active==0}])},[e("div",Ut,[e("div",Ot,[e("div",qt,[e("div",{class:C(["text-xl font-bold text-orange-500",{"!text-gray-400":t.module.is_active==0}])},E(t.module.order),3),Tt]),e("div",At,[e("h4",{class:C(["title-md",{"text-gray-400":t.module.is_active==0}])},E(t.module.title),3),e("p",It,E(t.module.description),1)])]),e("div",zt,[e("button",{class:"btn-2",onClick:de},[e("i",{class:C(u.value?"fas fa-angle-up":"fas fa-angle-down")},null,2),Nt]),e("button",{class:"btn-2 pb-2",onClick:b},[Ft,A("Edit")]),e("button",{class:"btn-contrast pb-2",onClick:$},[Bt,A("Delete ")])])]),u.value?(x(),h("div",Rt,[Pt,e("div",Yt,[(x(!0),h(U,null,O(I(s).lectures[t.module.id],M=>(x(),h("div",{key:M.id,class:"flex gap-4 items-center w-full justify-between py-2"},[e("div",Qt,[e("div",Gt,[e("i",{class:C(M.type==="virtual_platform"?"fas fa-video":"fas fa-play-circle")},null,2),e("div",Jt,[M.type==="virtual_platform"?(x(),h("p",Kt,"Live")):(x(),h("p",Ht,"Rec"))])]),e("div",null,[e("h4",Wt,E(M.title),1),e("div",Xt,[Zt,e("p",null,E(J(M.opening_time)),1)])])]),e("div",el,[e("button",{class:"btn-1 pb-2",onClick:R=>re(M)},ol,8,tl),e("button",{class:"btn-contrast pb-2",onClick:R=>ce(M)},dl,8,al)])]))),128)),(x(!0),h(U,null,O(I(_).exams[t.module.id],M=>(x(),h("div",{key:M.id,class:"flex gap-4 items-center w-full justify-between py-2"},[e("div",ul,[rl,e("div",null,[e("h4",cl,E(M.title),1),e("div",ml,[pl,e("p",null,E(J(M.opening_time)),1)])])]),e("div",vl,[L(ye,{to:{name:"ExamQuestionList",params:{courseId:t.module.course_id,moduleId:t.module.id,examId:M.id}},class:"btn-3"},{default:we(()=>[A("Questions")]),_:2},1032,["to"]),e("button",{class:"btn-1 pb-2",onClick:R=>_e(M)},hl,8,fl),e("button",{class:"btn-contrast pb-2",onClick:R=>xe(M)},wl,8,yl)])]))),128))]),e("div",{class:"flex gap-4 items-center justify-center mt-2"},[e("button",{class:"btn-1",onClick:ue},"Add Lecture"),e("button",{class:"btn-1",onClick:ve},"Add Exam")])])):j("",!0),r.value?(x(),h("div",kl,[e("div",$l,[e("div",{class:"flex justify-end"},[e("button",{onClick:Q,class:"text-gray-500 hover:text-gray-700"},"×")]),e("div",Ml,[L(Ct,{moduleId:t.module.id,courseId:t.module.course_id,onSubmit:pe},null,8,["moduleId","courseId"])])])])):j("",!0),i.value?(x(),h("div",El,[e("div",Cl,[e("div",{class:"flex justify-end"},[e("button",{onClick:G,class:"text-gray-500 hover:text-gray-700"},"×")]),e("div",Dl,[L(St,{lecture:v.value,onClose:G},null,8,["lecture"])])])])):j("",!0),c.value?(x(),h("div",jl,[e("div",Vl,[e("div",{class:"flex justify-end"},[e("button",{onClick:F,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",Ll,[e("p",null,"Do you want to delete '"+E((W=w.value)==null?void 0:W.title)+"' lecture?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:me},"Yes"),e("button",{class:"btn-contrast",onClick:F},"No")])])])])):j("",!0),f.value?(x(),h("div",Sl,[e("div",Ul,[e("div",{class:"flex justify-end"},[e("button",{onClick:K,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",Ol,[L(bt,{moduleId:t.module.id,onSubmit:fe},null,8,["moduleId"])])])])):j("",!0),d.value?(x(),h("div",ql,[e("div",Tl,[e("div",{class:"flex justify-end"},[e("button",{onClick:H,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",Al,[L(wt,{exam:k.value,onClose:H},null,8,["exam"])])])])):j("",!0),o.value?(x(),h("div",Il,[e("div",zl,[e("div",{class:"flex justify-end"},[e("button",{onClick:B,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",Nl,[e("p",null,"Do you want to delete '"+E((X=m.value)==null?void 0:X.title)+"' exam?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:he},"Yes"),e("button",{class:"btn-contrast",onClick:B},"No")])])])])):j("",!0)],2)}}},Bl={class:"my-container space-y-2"},Rl={class:"title-lg text-center"},Pl={key:0},Yl={class:"space-y-2"},Ql={key:1,class:"flex justify-center"},Gl=e("p",{class:""},"No modules available for this course.",-1),Jl=[Gl],Kl={class:"flex justify-center py-2"},Hl=e("i",{class:"fas fa-plus"},null,-1),es={__name:"ModuleListView",setup(t){const a=ee(),l=$e(),s=N(),_=n(null),u=n([]),r=n(null),i=n(!1),c=n(!1),f=n(!1);te(async()=>{try{await l.fetchCourse(a.params.id),_.value=l.course,await s.fetchModules(a.params.id),u.value=s.modules}catch(m){console.error("Error fetching data:",m)}});const d=m=>{r.value=m,i.value=!0},o=m=>{r.value=m,c.value=!0},v=async m=>{try{await s.addModule(a.params.id,m),await s.fetchModules(a.params.id),u.value=s.modules,f.value=!1}catch(p){console.error("Error adding module:",p)}},w=async m=>{try{await s.updateModule(m.id,m),await s.fetchModules(a.params.id),u.value=s.modules,i.value=!1}catch(p){console.error("Error updating module:",p)}},k=async()=>{if(r.value)try{await s.deleteModule(r.value.id),await s.fetchModules(a.params.id),u.value=s.modules,c.value=!1}catch(m){console.error("Error deleting module:",m)}};return(m,p)=>(x(),h("div",Bl,[e("h1",Rl,E(_.value?_.value.title:"Loading...")+" Modules",1),u.value.length>0?(x(),h("div",Pl,[e("ul",Yl,[(x(!0),h(U,null,O(u.value,b=>(x(),Me(Fl,{key:b.id,module:b,onEdit:d,onDelete:o},null,8,["module"]))),128))])])):(x(),h("div",Ql,Jl)),e("div",Kl,[e("button",{class:"btn-2",onClick:p[0]||(p[0]=b=>f.value=!0)},[Hl,A("Add Module ")])]),L(Be,{isOpen:f.value,onAddModule:v,onClose:p[1]||(p[1]=b=>f.value=!1)},null,8,["isOpen"]),L(ot,{class:"z-40",module:r.value,isOpen:i.value,onClose:p[2]||(p[2]=b=>i.value=!1),onUpdate:w},null,8,["module","isOpen"]),L(pt,{class:"z-40",module:r.value,isOpen:c.value,onClose:p[3]||(p[3]=b=>c.value=!1),onConfirmDelete:k},null,8,["module","isOpen"])]))}};export{es as default};
