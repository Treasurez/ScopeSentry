import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-4BKB8u1e.js";import{d as t,l as a,v as o,e as l,C as i,r as s,o as r,i as m,w as p,a as n,I as d}from"./index-uu-sb1xd.js";import{_ as c}from"./Table.vue_vue_type_script_lang-DR1NSdjE.js";import{a as b}from"./index-Dt5Dd5hT.js";import{E as j}from"./el-tag-DNcAhGYG.js";import"./el-card-C9jj0kus.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-Q1oSUg9s.js";import"./el-table-column-B1k3mfGa.js";import"./index-BCiLOhqr.js";import"./debounce-lsqC8295.js";import"./el-checkbox--BT0mwB_.js";import"./isArrayLikeObject-CYjxtax4.js";import"./raf-D1egjexT.js";import"./el-pagination-CDDD20a2.js";import"./el-select-Cy5vHOir.js";import"./strings-DlngudI4.js";import"./useInput-CDx1l06s.js";import"./el-image-viewer-BokRXDKf.js";import"./el-empty-iWt115hX.js";import"./tsxHelper-zo-x7Wbp.js";import"./el-dropdown-item-4FW6tlcv.js";import"./castArray-rIphTaLC.js";import"./refs-BPcd29qY.js";import"./index-DmBPbhxn.js";import"./index-C0gm2Z3K.js";const u=t({__name:"DefaultTable",setup(t){const{t:u}=a(),f=[{field:"title",label:u("tableDemo.title")},{field:"author",label:u("tableDemo.author")},{field:"display_time",label:u("tableDemo.displayTime"),sortable:!0},{field:"importance",label:u("tableDemo.importance"),formatter:(e,t,a)=>o(j,{type:1===a?"success":2===a?"warning":"danger"},(()=>u(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:u("tableDemo.pageviews")},{field:"action",label:u("tableDemo.action"),slots:{default:e=>{let t;return l(i,{type:"primary",onClick:()=>_(e)},"function"==typeof(a=t=u("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!d(a)?t:{default:()=>[t]});var a}}}],g=s(!0);let y=s([]);(async e=>{const t=await b(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{g.value=!1}));t&&(y.value=t.data.list)})();const _=e=>{};return(t,a)=>(r(),m(n(e),{title:n(u)("tableDemo.table"),message:n(u)("tableDemo.tableDes")},{default:p((()=>[l(n(c),{columns:f,data:n(y),loading:g.value,defaultSort:{prop:"display_time",order:"descending"}},null,8,["data","loading"])])),_:1},8,["title","message"]))}});export{u as default};