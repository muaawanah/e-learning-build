import{r as u,d as C,w as q,o as k,a7 as j,e as c,f as v,g as t,x as s,n as i,p as m,a1 as D,q as T,t as V}from"./index-CYGpEyrZ.js";const E={class:"w-full mx-auto"},M={class:"text-xs md:text-base flex items-center gap-x-1 md:gap-x-2 flex-wrap rounded-t-md bg-gray-100 border border-gray-300 px-2 py-1"},O=t("i",{class:"fas fa-bold"},null,-1),R=[O],U=t("i",{class:"fas fa-italic"},null,-1),B=[U],H=t("i",{class:"fas fa-underline"},null,-1),A=[H],I=t("i",{class:"fas fa-list-ul"},null,-1),N=[I],F=t("i",{class:"fas fa-list-ol"},null,-1),G=[F],J={class:"relative alignment-dropdown"},K=t("i",{class:"fas fa-chevron-down ml-1"},null,-1),P={key:0,class:"absolute flex bg-white border border-gray-300 rounded mt-1 z-10"},Q=t("i",{class:"fas fa-align-left"},null,-1),W=[Q],X=t("i",{class:"fas fa-align-center"},null,-1),Y=[X],Z=t("i",{class:"fas fa-align-right"},null,-1),ee=[Z],te={class:"relative color-dropdown"},ne=t("i",{class:"fas fa-palette"},null,-1),se=[ne],oe=t("i",{class:"fas fa-chevron-down ml-1"},null,-1),le={key:0,class:"absolute bg-white border border-gray-300 rounded mt-1 z-10 p-2 flex gap-1"},re={class:"relative font-size-dropdown"},ie=t("i",{class:"fas fa-chevron-down ml-1"},null,-1),ae={key:0,class:"absolute bg-white border border-gray-300 rounded mt-1 z-10 grid grid-cols-2 text-sm"},de={__name:"TextEditor",props:{modelValue:String},emits:["update:modelValue"],setup(L,{emit:S}){const b=L,h=S,a=u(null),n=u({bold:!1,italic:!1,underline:!1,insertUnorderedList:!1,insertOrderedList:!1,justifyLeft:!1,justifyCenter:!1,justifyRight:!1,foreColor:"",fontSize:"16px"}),d=u(!1),f=u(!1),p=u(!1),z={1:"10px",2:"13px",3:"16px",4:"18px",5:"24px",6:"32px",7:"48px"},$=C(()=>n.value.justifyLeft?"fa-align-left":n.value.justifyCenter?"fa-align-center":n.value.justifyRight?"fa-align-right":"fa-align-left"),w=C(()=>n.value.foreColor||"black");q(()=>b.modelValue,r=>{a.value&&a.value.innerHTML!==r&&(a.value.innerHTML=r)});const l=(r,e=null)=>{document.execCommand(r,!1,e),g()},_=()=>{h("update:modelValue",a.value.innerHTML)},g=()=>{n.value={bold:document.queryCommandState("bold"),italic:document.queryCommandState("italic"),underline:document.queryCommandState("underline"),insertUnorderedList:document.queryCommandState("insertUnorderedList"),insertOrderedList:document.queryCommandState("insertOrderedList"),justifyLeft:document.queryCommandState("justifyLeft"),justifyCenter:document.queryCommandState("justifyCenter"),justifyRight:document.queryCommandState("justifyRight"),foreColor:document.queryCommandValue("foreColor"),fontSize:z[document.queryCommandValue("fontSize")]||"16px"}},x=()=>{g()};k(()=>{document.addEventListener("selectionchange",x),a.value.addEventListener("paste",r=>{r.preventDefault();const e=r.clipboardData.getData("text/plain");document.execCommand("insertText",!1,e)}),a.value.innerHTML=b.modelValue}),j(()=>{document.removeEventListener("selectionchange",x)});const y=r=>{!r.target.closest(".alignment-dropdown")&&!r.target.closest(".color-dropdown")&&!r.target.closest(".font-size-dropdown")&&(d.value=!1,f.value=!1,p.value=!1)};return k(()=>{document.addEventListener("click",y)}),j(()=>{document.removeEventListener("click",y)}),(r,e)=>(c(),v("div",E,[t("div",M,[t("button",{type:"button",onClick:e[0]||(e[0]=s(o=>l("bold"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.bold,"hover:bg-gray-200":!n.value.bold},"p-2 rounded flex items-center justify-center transition"])},R,2),t("button",{type:"button",onClick:e[1]||(e[1]=s(o=>l("italic"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.italic,"hover:bg-gray-200":!n.value.italic},"p-2 rounded flex items-center justify-center transition"])},B,2),t("button",{type:"button",onClick:e[2]||(e[2]=s(o=>l("underline"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.underline,"hover:bg-gray-200":!n.value.underline},"p-2 rounded flex items-center justify-center transition"])},A,2),t("button",{type:"button",onClick:e[3]||(e[3]=s(o=>l("insertUnorderedList"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.insertUnorderedList,"hover:bg-gray-200":!n.value.insertUnorderedList},"p-2 rounded flex items-center justify-center transition"])},N,2),t("button",{type:"button",onClick:e[4]||(e[4]=s(o=>l("insertOrderedList"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.insertOrderedList,"hover:bg-gray-200":!n.value.insertOrderedList},"p-2 rounded flex items-center justify-center transition"])},G,2),t("div",J,[t("button",{onClick:e[5]||(e[5]=s(o=>d.value=!d.value,["stop","prevent"])),class:"p-2 rounded flex gap-2 items-center justify-center transition hover:bg-gray-200"},[t("i",{class:i(`fas ${$.value}`)},null,2),K]),d.value?(c(),v("div",P,[t("button",{onClick:e[6]||(e[6]=s(o=>l("justifyLeft"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.justifyLeft,"hover:bg-gray-200":!n.value.justifyLeft},"p-2 flex items-center justify-center"])},W,2),t("button",{onClick:e[7]||(e[7]=s(o=>l("justifyCenter"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.justifyCenter,"hover:bg-gray-200":!n.value.justifyCenter},"p-2 flex items-center justify-center"])},Y,2),t("button",{onClick:e[8]||(e[8]=s(o=>l("justifyRight"),["stop","prevent"])),class:i([{"bg-blue-200 text-blue-700":n.value.justifyRight,"hover:bg-gray-200":!n.value.justifyRight},"p-2 flex items-center justify-center"])},ee,2)])):m("",!0)]),t("div",te,[t("button",{onClick:e[9]||(e[9]=s(o=>f.value=!f.value,["stop","prevent"])),class:"p-2 rounded flex gap-2 items-center justify-center transition hover:bg-gray-200"},[t("span",{style:D({color:w.value})},se,4),oe]),f.value?(c(),v("div",le,[t("button",{onClick:e[10]||(e[10]=s(o=>l("foreColor","black"),["stop","prevent"])),class:"size-4",style:{background:"black"}}),t("button",{onClick:e[11]||(e[11]=s(o=>l("foreColor","red"),["stop","prevent"])),class:"size-4",style:{background:"red"}}),t("button",{onClick:e[12]||(e[12]=s(o=>l("foreColor","green"),["stop","prevent"])),class:"size-4",style:{background:"green"}}),t("button",{onClick:e[13]||(e[13]=s(o=>l("foreColor","blue"),["stop","prevent"])),class:"size-4",style:{background:"blue"}})])):m("",!0)]),t("div",re,[t("button",{onClick:e[14]||(e[14]=s(o=>p.value=!p.value,["stop","prevent"])),class:"p-2 rounded flex gap-2 items-center justify-center transition hover:bg-gray-200"},[T(V(n.value.fontSize)+" ",1),ie]),p.value?(c(),v("div",ae,[t("button",{onClick:e[15]||(e[15]=s(o=>l("fontSize","1"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"10px"),t("button",{onClick:e[16]||(e[16]=s(o=>l("fontSize","2"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"13px"),t("button",{onClick:e[17]||(e[17]=s(o=>l("fontSize","3"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"16px"),t("button",{onClick:e[18]||(e[18]=s(o=>l("fontSize","4"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"18px"),t("button",{onClick:e[19]||(e[19]=s(o=>l("fontSize","5"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"24px"),t("button",{onClick:e[20]||(e[20]=s(o=>l("fontSize","6"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"32px"),t("button",{onClick:e[21]||(e[21]=s(o=>l("fontSize","7"),["stop","prevent"])),class:"p-0.5 md:p-1 text-xs md:text-sm"},"48px")])):m("",!0)])]),t("div",{ref_key:"editor",ref:a,contenteditable:"true",onInput:_,class:"border border-gray-300 p-4 rounded-b-md min-h-[120px]",placeholder:"Description"},null,544)]))}};export{de as _};
