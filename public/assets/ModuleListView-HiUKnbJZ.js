import{$ as le,a0 as T,c as ke,b as se,r as a,o as oe,e as _,f,g as e,x as I,z as b,A as w,a5 as ae,F as O,h as A,t as E,i as R,n as j,p as D,w as Y,B as ie,C as ne,Z as Me,E as V,s as L,G as F,m as Ee,q as U,j as de,v as Ce,u as De}from"./index-CYGpEyrZ.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as re}from"./exam-BKj2UC14.js";const N=le("module",{state:()=>({modules:[]}),actions:{async fetchModules(t){try{const o=await T.get(`/courses/${t}/modules`);this.modules=o.data}catch(o){console.error("Failed to fetch modules:",o)}},async addModule(t,o){try{const l=await T.post("/modules",{course_id:t,...o});this.modules.push(l.data)}catch(l){console.error("Failed to add module:",l)}},async updateModule(t,o){try{const l=await T.put(`/modules/${t}`,o),s=this.modules.findIndex(h=>h.id===t);s!==-1&&(this.modules[s]=l.data)}catch(l){console.error("Failed to update module:",l)}},async deleteModule(t){try{await T.delete(`/modules/${t}`),this.modules=this.modules.filter(o=>o.id!==t)}catch(o){console.error("Failed to delete module:",o)}}}}),je={key:0,class:"flex items-center justify-center"},Ve={class:"card-bg p-4 md:p-8 w-full max-w-6xl"},Se=e("h2",{class:"title-md text-center"},"Add Module",-1),Te=e("p",null,"Title:",-1),qe=e("p",null,"Description:",-1),Le={class:"grid md:grid-cols-5 gap-4"},Ue=e("p",null,"Module Order:",-1),Oe=e("p",null,"Duration (minutes):",-1),Ae=e("label",{for:"prerequisite_module_id"},"Prerequisite Module:",-1),Ie=e("option",{value:""},"Select a prerequisite module",-1),ze=["value"],Re={class:"flex items-center gap-2"},Fe=e("label",{for:"is_active",class:""},"Active",-1),Ne={class:"flex items-center gap-2"},Be=e("label",{for:"is_paid",class:""},"Paid",-1),Pe=e("button",{type:"submit",class:"btn-2"},"Add",-1),Qe={__name:"ModuleAddModal",props:{isOpen:Boolean},emits:["add-module","close"],setup(t,{emit:o}){const l=o,s=N(),h=ke(),d=se(),u=a(""),n=a(""),r=a(""),x=a(""),c=a(!1),i=a(!1),m=a(""),y=a("");oe(()=>{s.fetchModules(d.params.id)});const $=async()=>{const v=d.params.id,g={title:u.value,description:n.value,order:r.value,duration:x.value,is_active:c.value,is_paid:i.value,prerequisite_module_id:m.value};try{await s.addModule(v,g),y.value="Module is added",u.value="",n.value="",r.value="",x.value="",c.value=!1,i.value=!1,m.value="",setTimeout(()=>{h.push(`/course-list/${v}/modules`)},2e3)}catch(k){console.error("Failed to add module:",k)}},p=()=>{l("close")};return(v,g)=>t.isOpen?(_(),f("div",je,[e("div",Ve,[Se,e("form",{onSubmit:I($,["prevent"]),class:"space-y-2"},[e("div",null,[Te,b(e("input",{class:"input-1","onUpdate:modelValue":g[0]||(g[0]=k=>u.value=k),required:"",placeholder:"Title"},null,512),[[w,u.value]])]),e("div",null,[qe,b(e("textarea",{"onUpdate:modelValue":g[1]||(g[1]=k=>n.value=k),class:"input-1"},null,512),[[w,n.value]])]),e("div",Le,[e("div",null,[Ue,b(e("input",{class:"input-1","onUpdate:modelValue":g[2]||(g[2]=k=>r.value=k),type:"number"},null,512),[[w,r.value]])]),e("div",null,[Oe,b(e("input",{class:"input-1","onUpdate:modelValue":g[3]||(g[3]=k=>x.value=k),type:"number"},null,512),[[w,x.value,void 0,{number:!0}]])]),e("div",null,[Ae,b(e("select",{id:"prerequisite_module_id","onUpdate:modelValue":g[4]||(g[4]=k=>m.value=k),class:"input-1"},[Ie,(_(!0),f(O,null,A(R(s).modules,k=>(_(),f("option",{key:k.id,value:k.id},E(k.title),9,ze))),128))],512),[[ae,m.value]])]),e("div",Re,[e("div",{onClick:g[5]||(g[5]=k=>c.value=!c.value),class:j(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":c.value}])},[e("div",{class:j(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":c.value}])},null,2)],2),Fe]),e("div",Ne,[e("div",{onClick:g[6]||(g[6]=k=>i.value=!i.value),class:j(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":i.value}])},[e("div",{class:j(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":i.value}])},null,2)],2),Be])]),e("div",{class:"flex justify-end gap-4"},[Pe,e("button",{type:"button",onClick:p,class:"btn-contrast"},"Close")])],32)])])):D("",!0)}},S=t=>(ie("data-v-702f4702"),t=t(),ne(),t),Ye={key:0,class:"modal"},Ge={class:"card-bg p-4 md:p-8 w-full max-w-5xl mx-2"},Ze=S(()=>e("h2",{class:"title-md text-center"},"Edit Module",-1)),He=S(()=>e("p",null,"Title:",-1)),Je=S(()=>e("p",null,"Description:",-1)),Ke=S(()=>e("p",null,"Order:",-1)),We=S(()=>e("label",{for:"duration",class:"block text-sm font-medium text-gray-700"},"Duration (minutes):",-1)),Xe=S(()=>e("label",{for:"prerequisite_module_id"},"Prerequisite Module:",-1)),et=S(()=>e("option",{value:""},"Select a prerequisite module",-1)),tt=["value"],lt={class:"flex items-center gap-2"},st=S(()=>e("label",{class:"ml-2 block text-sm text-gray-900"},"Active",-1)),ot={class:"flex items-center gap-2"},at=S(()=>e("label",{class:"ml-2 block text-sm text-gray-900"},"Paid",-1)),it={__name:"ModuleEditModal",props:{module:Object,isOpen:Boolean},emits:["update","close"],setup(t,{emit:o}){const l=t,s=o,h=N(),d=a(""),u=a(""),n=a(0),r=a(0),x=a(!1),c=a(!1),i=a(0);Y(()=>l.module,$=>{$&&(d.value=$.title||"",u.value=$.description||"",n.value=$.order||0,r.value=$.duration||0,x.value=$.is_active||!1,c.value=$.is_paid||!1,i.value=$.prerequisite_module_id||null)},{immediate:!0});const m=async()=>{const $={id:l.module.id,title:d.value,description:u.value,order:n.value,duration:r.value,is_active:x.value,is_paid:c.value,prerequisite_module_id:i.value};try{await h.updateModule(l.module.id,$),s("update",$),s("close")}catch(p){console.error("Error updating module:",p)}},y=()=>{s("close")};return($,p)=>t.isOpen?(_(),f("div",Ye,[e("div",Ge,[Ze,e("div",null,[He,b(e("input",{class:"input-1","onUpdate:modelValue":p[0]||(p[0]=v=>d.value=v),required:"",placeholder:"Title"},null,512),[[w,d.value]])]),e("div",null,[Je,b(e("textarea",{"onUpdate:modelValue":p[1]||(p[1]=v=>u.value=v),class:"input-1"},null,512),[[w,u.value]])]),e("div",null,[Ke,b(e("input",{class:"input-1","onUpdate:modelValue":p[2]||(p[2]=v=>n.value=v),type:"number"},null,512),[[w,n.value]])]),e("div",null,[We,b(e("input",{type:"number",id:"duration","onUpdate:modelValue":p[3]||(p[3]=v=>r.value=v),class:"input-1"},null,512),[[w,r.value,void 0,{number:!0}]])]),e("div",null,[Xe,b(e("select",{id:"prerequisite_module_id","onUpdate:modelValue":p[4]||(p[4]=v=>i.value=v),class:"input-1"},[et,(_(!0),f(O,null,A(R(h).modules,v=>(_(),f("option",{key:v.id,value:v.id},E(v.title),9,tt))),128))],512),[[ae,i.value]])]),e("div",lt,[e("div",{onClick:p[5]||(p[5]=v=>x.value=!x.value),class:j(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":x.value}])},[e("div",{class:j(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":x.value}])},null,2)],2),st]),e("div",ot,[e("div",{onClick:p[6]||(p[6]=v=>c.value=!c.value),class:j(["w-10 h-6 bg-gray-300 rounded-full cursor-pointer flex items-center p-1 transition-colors duration-200",{"bg-green-500":c.value}])},[e("div",{class:j(["bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200",{"translate-x-4":c.value}])},null,2)],2),at]),e("div",{class:"flex justify-center gap-4"},[e("button",{onClick:m,class:"btn-2"},"Save"),e("button",{onClick:y,class:"btn-contrast"},"Close")])])])):D("",!0)}},nt=ue(it,[["__scopeId","data-v-702f4702"]]),ce=t=>(ie("data-v-668780de"),t=t(),ne(),t),dt={key:0,class:"fixed inset-0 flex items-center justify-center z-50"},ut=ce(()=>e("div",{class:"modal-overlay absolute inset-0 bg-gray-500 opacity-75"},null,-1)),rt={class:"modal-container bg-white w-full md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"},ct={class:"p-6"},mt={class:"mb-4"},pt=ce(()=>e("h2",{class:"text-2xl font-bold mb-4"},"Delete Module",-1)),vt={key:0,class:"text-gray-700"},_t={__name:"ModuleDeleteModal",props:{isOpen:Boolean,module:Object},emits:["close","confirmDelete"],setup(t,{emit:o}){const l=t,s=o,h=N(),d=async()=>{l.module&&(await h.deleteModule(l.module.id),s("confirmDelete"),s("close"))},u=()=>{s("close")};return(n,r)=>l.isOpen?(_(),f("div",dt,[ut,e("div",rt,[e("div",ct,[e("div",mt,[pt,l.module?(_(),f("p",vt,' Are you sure you want to delete "'+E(l.module.title)+'"? ',1)):D("",!0)]),e("div",{class:"flex justify-end"},[e("div",{class:"flex space-x-4 justify-center"},[e("button",{class:"btn-contrast",onClick:d},"Yes"),e("button",{class:"btn-2",onClick:u},"No")])])])])])):D("",!0)}},ft=ue(_t,[["__scopeId","data-v-668780de"]]),G=le("lecture",{state:()=>({lectures:{}}),actions:{async fetchLectures(t){try{const o=await T.get(`/modules/${t}/lectures`);this.lectures={...this.lectures,[t]:o.data}}catch(o){console.error("Error fetching lectures:",o)}},async addLecture(t,o){try{const l=await T.post(`/modules/${t}/lectures`,o);this.lectures[t]||(this.lectures[t]=[]),this.lectures[t]=[...this.lectures[t],l.data]}catch(l){console.error("Error adding lecture:",l)}},async deleteLecture(t,o){try{await T.delete(`/modules/${t}/lectures/${o}`),this.lectures[t]&&(this.lectures[t]=this.lectures[t].filter(l=>l.id!==o))}catch(l){console.error("Error deleting lecture:",l)}},async updateLecture(t,o,l){try{const s=await T.put(`/modules/${t}/lectures/${o}`,l);if(this.lectures[t]){const h=this.lectures[t].findIndex(d=>d.id===o);h!==-1&&(this.lectures[t][h]=s.data)}}catch(s){console.error("Error updating lecture:",s)}}}}),xt=e("label",null,"Exam Title:",-1),ht=e("label",null,"Duration (minutes):",-1),yt=e("label",null,"Opening Time:",-1),bt=e("label",null,"Result Publish Time:",-1),gt=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-2"},"Add Exam")],-1),wt={__name:"AddExam",props:{moduleId:{required:!0},examType:{type:String,required:!0}},emits:["submit"],setup(t,{emit:o}){const l=t,s=a({title:"",duration:"",opening_time:"",result_publish_time:"",link:""}),h=o,d=()=>{const u={module_id:l.moduleId,title:s.value.title,type:l.examType,duration:s.value.duration,opening_time:s.value.opening_time,result_publish_time:s.value.result_publish_time,link:s.value.link};h("submit",u),s.value={title:"",duration:"",opening_time:"",link:""}};return(u,n)=>(_(),f("div",null,[e("form",{onSubmit:I(d,["prevent"]),class:"space-y-4"},[e("div",null,[xt,b(e("input",{class:"input-1",type:"text","onUpdate:modelValue":n[0]||(n[0]=r=>s.value.title=r),placeholder:"Title",required:""},null,512),[[w,s.value.title]])]),e("div",null,[ht,b(e("input",{class:"input-1",type:"number","onUpdate:modelValue":n[1]||(n[1]=r=>s.value.duration=r),placeholder:"Duration",required:""},null,512),[[w,s.value.duration]])]),e("div",null,[yt,b(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":n[2]||(n[2]=r=>s.value.opening_time=r),placeholder:"Opening Date & Time",required:""},null,512),[[w,s.value.opening_time]])]),e("div",null,[bt,b(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":n[3]||(n[3]=r=>s.value.result_publish_time=r),placeholder:"Opening Date & Time",required:""},null,512),[[w,s.value.result_publish_time]])]),gt],32)]))}},$t={class:"flex flex-col md:flex-row items-center gap-x-2"},kt={key:0,class:"w-full md:w-60 text-left md:text-right"},z={__name:"FormLabel",props:["label"],setup(t){return(o,l)=>(_(),f("label",$t,[t.label?(_(),f("span",kt,E(t.label),1)):D("",!0),Me(o.$slots,"default")]))}},Mt=e("hr",{class:"my-3"},null,-1),Et=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1),Ct={__name:"EditExamForm",props:{exam:Object},emits:["close"],setup(t,{emit:o}){const l=t,s=o,h=re(),d=a(l.exam.title),u=a(l.exam.duration),n=a(l.exam.opening_time),r=a(l.exam.result_publish_time),x=a(l.exam.link),c=async()=>{const i={...l.exam,title:d.value,duration:u.value,opening_time:n.value,result_publish_time:r.value,link:x.value};try{await h.updateExam(l.exam.module_id,l.exam.id,i),s("close")}catch(m){console.error("Error updating exam:",m)}};return Y(()=>l.exam,i=>{d.value=i.title,u.value=i.duration,n.value=i.opening_time,x.value=i.link},{immediate:!0}),(i,m)=>(_(),f("div",null,[e("form",{onSubmit:I(c,["prevent"]),class:"space-y-4"},[V(z,{label:"Exam Title"},{default:L(()=>[b(e("input",{class:"input-1",type:"text","onUpdate:modelValue":m[0]||(m[0]=y=>d.value=y),placeholder:"Exam Title",required:""},null,512),[[w,d.value]])]),_:1}),V(z,{label:"Duration (minutes)"},{default:L(()=>[b(e("input",{class:"input-1",type:"number","onUpdate:modelValue":m[1]||(m[1]=y=>u.value=y),placeholder:"Duration (minutes)",required:""},null,512),[[w,u.value]])]),_:1}),V(z,{label:"Opening Time"},{default:L(()=>[b(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":m[2]||(m[2]=y=>n.value=y),placeholder:"Opening Date & Time",required:""},null,512),[[w,n.value]])]),_:1}),V(z,{label:"Result Publish"},{default:L(()=>[b(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":m[3]||(m[3]=y=>r.value=y),placeholder:"Result Publish Time",required:""},null,512),[[w,r.value]])]),_:1}),Mt,Et],32)]))}},Dt={class:"flex flex-col md:flex-row md:justify-center"},jt=e("label",{for:"video",class:"mr-4"},"Recorded Video",-1),Vt=e("label",{for:"virtual_platform"},"Live Class Link",-1),St=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Add Lecture")],-1),Tt={__name:"AddLecture",props:{moduleId:Number,courseId:Number},setup(t){const o=t,l=G(),s=a(""),h=a(""),d=a(""),u=a(""),n=a("video"),r=async()=>{const x={course_id:o.courseId,module_id:o.moduleId,title:s.value,link:h.value,description:d.value,type:n.value,opening_time:u.value};try{await l.addLecture(o.moduleId,x),s.value="",h.value="",d.value="",n.value="video",u.value=""}catch(c){console.error("Error adding lecture:",c)}};return(x,c)=>(_(),f("div",null,[e("form",{onSubmit:I(r,["prevent"]),class:"space-y-4"},[b(e("input",{class:"input-1",type:"text","onUpdate:modelValue":c[0]||(c[0]=i=>s.value=i),placeholder:"Title",required:""},null,512),[[w,s.value]]),e("div",Dt,[e("div",null,[b(e("input",{type:"radio",id:"video",value:"video","onUpdate:modelValue":c[1]||(c[1]=i=>n.value=i),class:"mr-2"},null,512),[[F,n.value]]),jt]),e("div",null,[b(e("input",{type:"radio",id:"virtual_platform",value:"virtual_platform","onUpdate:modelValue":c[2]||(c[2]=i=>n.value=i),class:"mr-2"},null,512),[[F,n.value]]),Vt])]),b(e("input",{class:"input-1",type:"text","onUpdate:modelValue":c[3]||(c[3]=i=>h.value=i),placeholder:"Link",required:""},null,512),[[w,h.value]]),b(e("input",{class:"input-1",type:"text","onUpdate:modelValue":c[4]||(c[4]=i=>d.value=i),placeholder:"Description"},null,512),[[w,d.value]]),b(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":c[5]||(c[5]=i=>u.value=i),placeholder:"Opening Date & Time",required:""},null,512),[[w,u.value]]),St],32)]))}},qt={class:"flex flex-col md:flex-row md:justify-center"},Lt=e("label",{for:"video",class:"mr-4"},"Recorded Video",-1),Ut=e("label",{for:"virtual_platform"},"Live Class Link",-1),Ot=e("div",{class:"flex justify-center gap-4"},[e("button",{type:"submit",class:"btn-1"},"Save Changes")],-1),At={__name:"EditLectureForm",props:{lecture:Object},emits:["close"],setup(t,{emit:o}){const l=t,s=o,h=G(),d=a(l.lecture.title),u=a(l.lecture.link),n=a(l.lecture.description),r=a(l.lecture.opening_time),x=a(l.lecture.type),c=async()=>{const i={...l.lecture,title:d.value,link:u.value,description:n.value,type:x.value,opening_time:r.value};try{await h.updateLecture(l.lecture.module_id,l.lecture.id,i),s("close")}catch(m){console.error("Error updating lecture:",m)}};return Y(()=>l.lecture,i=>{d.value=i.title,u.value=i.link,n.value=i.description,x.value=i.type,r.value=i.opening_time},{immediate:!0}),(i,m)=>(_(),f("div",null,[e("form",{onSubmit:I(c,["prevent"]),class:"space-y-4"},[b(e("input",{class:"input-1",type:"text","onUpdate:modelValue":m[0]||(m[0]=y=>d.value=y),placeholder:"Title",required:""},null,512),[[w,d.value]]),e("div",qt,[e("div",null,[b(e("input",{type:"radio",id:"video",value:"video","onUpdate:modelValue":m[1]||(m[1]=y=>x.value=y),class:"mr-2"},null,512),[[F,x.value]]),Lt]),e("div",null,[b(e("input",{type:"radio",id:"virtual_platform",value:"virtual_platform","onUpdate:modelValue":m[2]||(m[2]=y=>x.value=y),class:"mr-2"},null,512),[[F,x.value]]),Ut])]),b(e("input",{class:"input-1",type:"text","onUpdate:modelValue":m[3]||(m[3]=y=>u.value=y),placeholder:"Link",required:""},null,512),[[w,u.value]]),b(e("input",{class:"input-1",type:"text","onUpdate:modelValue":m[4]||(m[4]=y=>n.value=y),placeholder:"Description"},null,512),[[w,n.value]]),b(e("input",{class:"input-1",type:"datetime-local","onUpdate:modelValue":m[5]||(m[5]=y=>r.value=y),placeholder:"Opening Date & Time",required:""},null,512),[[w,r.value]]),Ot],32)]))}},It={class:"flex md:flex-row flex-col items-center gap-4"},zt={class:"flex flex-1 items-center gap-4"},Rt={class:"text-center border-2 rounded-md p-1.5"},Ft=e("div",{class:"text-xs md:text-sm"},"Module",-1),Nt={class:"flex-1"},Bt={class:"line-clamp-1"},Pt={class:"flex items-center gap-2"},Qt=e("p",null,"Content",-1),Yt=e("i",{class:"far fa-edit"},null,-1),Gt=e("i",{class:"fas fa-trash-alt"},null,-1),Zt={key:0},Ht=e("hr",{class:"mb-2"},null,-1),Jt={class:"flex flex-col justify-center space-y-2 divide-y-2"},Kt={class:"flex items-center gap-4"},Wt={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},Xt={class:"text-xs"},el={key:0},tl={key:1},ll={class:"title-sm"},sl={class:"flex items-center gap-2 text-sm text-gray-400"},ol=e("i",{class:"far fa-calendar-check"},null,-1),al={class:"flex gap-2"},il=["onClick"],nl=e("i",{class:"far fa-edit"},null,-1),dl=e("span",{class:"hidden md:flex"},"Edit",-1),ul=[nl,dl],rl=["onClick"],cl=e("i",{class:"fas fa-trash-alt"},null,-1),ml=e("span",{class:"hidden md:flex"},"Delete",-1),pl=[cl,ml],vl={class:"grow shrink flex items-center gap-4"},_l={class:"flex flex-col items-center justify-center border rounded-md p-2 gap-1"},fl={key:0,class:"fal fa-ballot-check text-2xl"},xl={key:1,class:"fal fa-question text-3xl"},hl=e("div",{class:"text-xs"},"Exam",-1),yl={class:"title-sm"},bl={class:"flex items-center gap-2 text-sm text-gray-400"},gl=e("i",{class:"far fa-calendar-check"},null,-1),wl={class:"grow-0 flex flex-wrap justify-end max-w-[110px] md:max-w-fit gap-2"},$l=["onClick"],kl=e("i",{class:"far fa-edit"},null,-1),Ml=e("span",{class:"hidden md:flex"},"Edit",-1),El=[kl,Ml],Cl=["onClick"],Dl=e("i",{class:"fas fa-trash-alt"},null,-1),jl=e("span",{class:"hidden md:flex"},"Delete",-1),Vl=[Dl,jl],Sl=e("hr",{class:"my-3"},null,-1),Tl={class:"flex gap-4 items-center justify-center mt-2"},ql={key:1,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Ll={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Ul={class:"mt-4"},Ol={key:2,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Al={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Il={class:"mt-4"},zl={key:3,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Rl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Fl={class:"mt-4 text-center"},Nl={key:4,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Bl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Pl=e("div",{class:"mr-auto font-bold"},"Add Exam Info",-1),Ql=e("hr",{class:"my-3"},null,-1),Yl={class:"mt-4"},Gl={key:5,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},Zl={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},Hl={class:"flex justify-end"},Jl={class:"mr-auto font-bold"},Kl=e("hr",{class:"my-3"},null,-1),Wl={class:"mt-4"},Xl={key:6,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},es={class:"bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"},ts={class:"mt-4 text-center"},ls={__name:"ModuleItem",props:{module:Object},emits:["edit","delete"],setup(t,{emit:o}){const l=t,s=G(),h=re(),d=a(!1),u=a(!1),n=a(!1),r=a(!1),x=a(!1),c=a(!1),i=a(!1),m=a(null),y=a(null),$=a(null),p=a(null),v=a(""),g=o,k=()=>{g("edit",l.module)},me=()=>{g("delete",l.module)},pe=async()=>{d.value=!d.value,d.value&&(await s.fetchLectures(l.module.id),await h.fetchExams(l.module.id))},ve=()=>{u.value=!0},Z=()=>{u.value=!1},_e=C=>{m.value=C,n.value=!0},H=()=>{n.value=!1},fe=C=>{y.value=C,r.value=!0},B=()=>{r.value=!1},xe=async()=>{y.value&&(await s.deleteLecture(l.module.id,y.value.id),B())},he=async()=>{Z()},J=C=>{const q=new Date(C);return Ce(q,"hh:mm a, dd-MMM-yyyy")},ye=C=>{v.value=C,x.value=!0},K=()=>{v.value="",x.value=!1},be=async C=>{try{await h.addExam(l.module.id,C),K()}catch(q){console.error("Error adding exam:",q)}},ge=C=>{$.value=C,c.value=!0},W=()=>{c.value=!1},we=C=>{p.value=C,i.value=!0},P=()=>{i.value=!1},$e=async()=>{p.value&&(await h.deleteExam(l.module.id,p.value.id),P())};return(C,q)=>{var ee,te;const X=Ee("RouterLink");return _(),f("li",{class:j(["card-bg p-4",{"bg-gray-100 border-2 border-gray-200 text-gray-400":t.module.is_active==0}])},[e("div",It,[e("div",zt,[e("div",Rt,[e("div",{class:j(["text-xl font-bold text-orange-500",{"!text-gray-400":t.module.is_active==0}])},E(t.module.order),3),Ft]),e("div",Nt,[e("h4",{class:j(["title-md",{"text-gray-400":t.module.is_active==0}])},E(t.module.title),3),e("p",Bt,E(t.module.description),1)])]),e("div",Pt,[e("button",{class:"btn-2",onClick:pe},[e("i",{class:j(d.value?"fas fa-angle-up":"fas fa-angle-down")},null,2),Qt]),e("button",{class:"btn-2 pb-2",onClick:k},[Yt,U("Edit")]),e("button",{class:"btn-contrast pb-2",onClick:me},[Gt,U("Delete ")])])]),d.value?(_(),f("div",Zt,[Ht,e("div",Jt,[(_(!0),f(O,null,A(R(s).lectures[t.module.id],M=>(_(),f("div",{key:M.id,class:"flex gap-4 items-center w-full justify-between py-2"},[e("div",Kt,[e("div",Wt,[e("i",{class:j(M.type==="virtual_platform"?"fas fa-video":"fas fa-play-circle")},null,2),e("div",Xt,[M.type==="virtual_platform"?(_(),f("p",el,"Live")):(_(),f("p",tl,"Rec"))])]),e("div",null,[e("h4",ll,E(M.title),1),e("div",sl,[ol,e("p",null,E(J(M.opening_time)),1)])])]),e("div",al,[e("button",{class:"btn-1 pb-2",onClick:Q=>_e(M)},ul,8,il),e("button",{class:"btn-contrast pb-2",onClick:Q=>fe(M)},pl,8,rl)])]))),128)),(_(!0),f(O,null,A(R(h).exams[t.module.id],M=>(_(),f("div",{key:M.id,class:"w-full flex gap-4 items-center justify-between py-2"},[e("div",vl,[e("div",_l,[M.type==="MCQ"?(_(),f("i",fl)):(_(),f("i",xl)),hl]),e("div",null,[e("h4",yl,E(M.title),1),e("div",bl,[gl,e("p",null,E(J(M.opening_time)),1)])])]),e("div",wl,[M.user_exams_count?(_(),de(X,{key:0,to:{name:"ExamResultList",params:{courseId:t.module.course_id,moduleId:t.module.id,examId:M.id}},class:"btn-3 px-3.5"},{default:L(()=>[U(" Results ("+E(M.user_exams_count)+") ",1)]),_:2},1032,["to"])):D("",!0),V(X,{to:{name:"ExamQuestionList",params:{courseId:t.module.course_id,moduleId:t.module.id,examId:M.id}},class:"btn-3 px-3.5"},{default:L(()=>[U(" Questions ")]),_:2},1032,["to"]),e("button",{class:"btn-1 pb-2",onClick:Q=>ge(M)},El,8,$l),e("button",{class:"btn-contrast pb-2",onClick:Q=>we(M)},Vl,8,Cl)])]))),128))]),Sl,e("div",Tl,[e("button",{class:"btn-1",onClick:ve},"Add Lecture"),e("button",{class:"btn-1",onClick:q[0]||(q[0]=M=>ye("MCQ"))},"Add MCQ Exam"),D("",!0)])])):D("",!0),u.value?(_(),f("div",ql,[e("div",Ll,[e("div",{class:"flex justify-end"},[e("button",{onClick:Z,class:"text-gray-500 hover:text-gray-700"},"×")]),e("div",Ul,[V(Tt,{moduleId:t.module.id,courseId:t.module.course_id,onSubmit:he},null,8,["moduleId","courseId"])])])])):D("",!0),n.value?(_(),f("div",Ol,[e("div",Al,[e("div",{class:"flex justify-end"},[e("button",{onClick:H,class:"text-gray-500 hover:text-gray-700"},"×")]),e("div",Il,[V(At,{lecture:m.value,onClose:H},null,8,["lecture"])])])])):D("",!0),r.value?(_(),f("div",zl,[e("div",Rl,[e("div",{class:"flex justify-end"},[e("button",{onClick:B,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",Fl,[e("p",null,"Do you want to delete '"+E((ee=y.value)==null?void 0:ee.title)+"' lecture?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:xe},"Yes"),e("button",{class:"btn-contrast",onClick:B},"No")])])])])):D("",!0),x.value?(_(),f("div",Nl,[e("div",Bl,[e("div",{class:"flex justify-end"},[Pl,e("button",{onClick:K,class:"text-red-500 hover:text-red-700 border-red-300 text-3xl border size-8 rounded-lg"}," × ")]),Ql,e("div",Yl,[V(wt,{moduleId:t.module.id,examType:v.value,onSubmit:be},null,8,["moduleId","examType"])])])])):D("",!0),c.value?(_(),f("div",Gl,[e("div",Zl,[e("div",Hl,[e("div",Jl,"Edit Form : "+E($.value.title),1),e("button",{onClick:W,class:"text-red-500 hover:text-red-700 border-red-300 text-3xl border size-8 rounded-lg"}," × ")]),Kl,e("div",Wl,[V(Ct,{exam:$.value,onClose:W},null,8,["exam"])])])])):D("",!0),i.value?(_(),f("div",Xl,[e("div",es,[e("div",{class:"flex justify-end"},[e("button",{onClick:P,class:"text-gray-500 hover:text-gray-700"}," × ")]),e("div",ts,[e("p",null,"Do you want to delete '"+E((te=p.value)==null?void 0:te.title)+"' exam?",1),e("div",{class:"flex justify-center gap-4 mt-4"},[e("button",{class:"btn-1",onClick:$e},"Yes"),e("button",{class:"btn-contrast",onClick:P},"No")])])])])):D("",!0)],2)}}},ss={class:"my-container space-y-2"},os={class:"title-lg text-center"},as={key:0},is={class:"space-y-2"},ns={key:1,class:"flex justify-center"},ds=e("p",{class:""},"No modules available for this course.",-1),us=[ds],rs={class:"flex justify-center py-2"},cs=e("i",{class:"fas fa-plus"},null,-1),_s={__name:"ModuleListView",setup(t){const o=se(),l=De(),s=N(),h=a(null),d=a([]),u=a(null),n=a(!1),r=a(!1),x=a(!1);oe(async()=>{try{await l.fetchCourse(o.params.id),h.value=l.course,await s.fetchModules(o.params.id),d.value=s.modules}catch(p){console.error("Error fetching data:",p)}});const c=p=>{u.value=p,n.value=!0},i=p=>{u.value=p,r.value=!0},m=async p=>{try{await s.addModule(o.params.id,p),await s.fetchModules(o.params.id),d.value=s.modules,x.value=!1}catch(v){console.error("Error adding module:",v)}},y=async p=>{try{await s.updateModule(p.id,p),await s.fetchModules(o.params.id),d.value=s.modules,n.value=!1}catch(v){console.error("Error updating module:",v)}},$=async()=>{if(u.value)try{await s.deleteModule(u.value.id),await s.fetchModules(o.params.id),d.value=s.modules,r.value=!1}catch(p){console.error("Error deleting module:",p)}};return(p,v)=>(_(),f("div",ss,[e("h1",os,E(h.value?h.value.title:"Loading...")+" Modules",1),d.value.length>0?(_(),f("div",as,[e("ul",is,[(_(!0),f(O,null,A(d.value,g=>(_(),de(ls,{key:g.id,module:g,onEdit:c,onDelete:i},null,8,["module"]))),128))])])):(_(),f("div",ns,us)),e("div",rs,[e("button",{class:"btn-2",onClick:v[0]||(v[0]=g=>x.value=!0)},[cs,U("Add Module ")])]),V(Qe,{isOpen:x.value,onAddModule:m,onClose:v[1]||(v[1]=g=>x.value=!1)},null,8,["isOpen"]),V(nt,{class:"z-40",module:u.value,isOpen:n.value,onClose:v[2]||(v[2]=g=>n.value=!1),onUpdate:y},null,8,["module","isOpen"]),V(ft,{class:"z-40",module:u.value,isOpen:r.value,onClose:v[3]||(v[3]=g=>r.value=!1),onConfirmDelete:$},null,8,["module","isOpen"])]))}};export{_s as default};
