import{K as g,r as i,o as m,d as o,e as s,f as e,t as h,q as a,h as n,F as b,g as k}from"./index-CoSo7CmJ.js";const x={class:"my-container p-4"},P=e("h1",{class:"text-2xl font-bold mb-4"},"Photo Gallery",-1),w={class:"mb-4"},C={class:"flex w-full text-center gap-4"},F={key:0,class:"text-green-500 mt-2"},D={key:1,class:"text-red-500 mt-2"},B={key:0,class:"text-center"},G=e("p",null,"Loading photos...",-1),M=[G],N={key:1,class:"text-center text-red-500"},S={class:"grid md:grid-cols-3 gap-4"},E={class:""},I=["src"],L=e("hr",null,null,-1),U={class:"border-gray-200"},V=["onClick"],j={key:2},q=e("div",{class:"py-2 px-4 border-b border-gray-200"},"No photos found",-1),A=[q],H={__name:"PhotoGallery",setup(K){const t=g(),r=i(null),c=i(""),d=i(""),p=i(null),v=l=>{r.value=l.target.files[0]},y=async()=>{if(!r.value)return;const l=new FormData;l.append("photo",r.value);try{await t.uploadPhoto(l),c.value="Photo upload successful",d.value="",p.value.value=""}catch{c.value="",d.value="Failed to upload photo"}finally{r.value=null}},f=async l=>{if(confirm("Are you sure you want to delete this photo?"))try{await t.deletePhoto(l)}catch(u){console.error("Error deleting photo:",u)}};return m(async()=>{await t.fetchPhotos()}),(l,u)=>(o(),s("div",x,[P,e("div",w,[e("div",C,[e("input",{ref_key:"fileInput",ref:p,type:"file",onChange:v,class:"input-1"},null,544),e("button",{class:"btn-2",onClick:y},"Upload")]),c.value?(o(),s("p",F,h(c.value),1)):a("",!0),d.value?(o(),s("p",D,h(d.value),1)):a("",!0)]),n(t).loading?(o(),s("div",B,M)):a("",!0),n(t).error?(o(),s("div",N,[e("p",null,h(n(t).error),1)])):a("",!0),e("div",S,[(o(!0),s(b,null,k(n(t).photos,_=>(o(),s("div",{key:_.id,class:"card-bg p-4"},[e("div",E,[e("img",{src:_.photo,alt:"Photo",class:"aspect-video object-cover rounded-md"},null,8,I)]),L,e("div",U,[e("button",{onClick:$=>f(_.id),class:"btn-contrast"},"Delete",8,V)])]))),128))]),n(t).photos.length===0?(o(),s("div",j,A)):a("",!0)]))}};export{H as default};
