import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-JnnrwuOA.js";import{d as t,r as a,s as l,e as o,C as i,F as s,N as r,o as n,c as p,w as u,a as m,y as c,G as d,z as g,f,t as v,H as y,I as _,l as j}from"./index-ChGT_YCB.js";import{a as b,E as x}from"./el-col-i_K16CKa.js";import{_ as h}from"./Table.vue_vue_type_script_lang-BIM24Su6.js";import{_ as S}from"./Dialog.vue_vue_type_style_index_0_lang-CjT1Och0.js";import{u as w}from"./useIcon-Cv7WwndZ.js";import{u as C}from"./useTable-DVIhlLGs.js";import{b as D,e as k}from"./index-DNYXC-kr.js";import{_ as z}from"./PortDetail.vue_vue_type_script_setup_true_lang-BZ9iDnI1.js";import"./el-card-Bv8eL-PY.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-PhuldJD-.js";import"./el-table-column-D3t4SgcR.js";import"./index-CZTnDW2g.js";import"./debounce-Zw0D3mea.js";import"./el-checkbox-CasWmTQM.js";import"./isArrayLikeObject-7_HOgyXV.js";import"./raf-CI9lY1B7.js";import"./el-tag-uqONbW_Z.js";import"./el-pagination-BHF_c2aK.js";import"./el-select-BqJxfjvU.js";import"./strings-Dm6yfrSz.js";import"./useInput-D50pGW-V.js";import"./el-image-viewer-DOJ4W1Wh.js";import"./el-empty-w9dzImmf.js";import"./tsxHelper-DC_KhjvT.js";import"./el-dropdown-item-DkQ0kmO2.js";import"./castArray-DD2tgwSj.js";import"./refs-Dfwo_yLk.js";import"./index-BAUEFq46.js";import"./index-D1H-7IS5.js";import"./el-form-D2bRQxI0.js";import"./el-divider-Dm9ByY6A.js";const E={class:"mb-10px"},I={class:"mb-10px"};function P(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!_(e)}const U=t({__name:"PortDictionary",setup(t){const{t:_}=j(),U=w({icon:"iconoir:search"}),A=a(""),F=()=>{B()},H=l([{field:"selection",type:"selection",width:"55"},{field:"id",hidden:!0},{field:"name",label:_("portDict.name"),minWidth:40},{field:"value",label:_("portDict.value")},{field:"action",label:_("tableDemo.action"),minWidth:40,formatter:(e,t,a)=>{let l,r;return o(s,null,[o(i,{type:"primary",onClick:()=>Q(e)},P(l=_("common.edit"))?l:{default:()=>[l]}),o(i,{type:"danger",onClick:()=>$(e)},P(r=_("common.delete"))?r:{default:()=>[r]})])}}]),{tableRegister:V,tableState:L,tableMethods:N}=C({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=L,a=await k(A.value,e.value,t.value);return{list:a.data.list,total:a.data.total}}}),{loading:R,dataList:T,total:W,currentPage:O,pageSize:M}=L,{getList:B,getElTableExpose:G}=N;function J(){return{background:"var(--el-fill-color-light)"}}const X=a(!1),Y=async()=>{K.id="",K.value="",K.name="",X.value=!0},q=()=>{X.value=!1};let K=l({id:"",name:"",value:""});const Q=e=>{K.id=e.id,K.value=e.value,K.name=e.name,X.value=!0},Z=a(!1),$=async e=>{Z.value=!0;try{await D([e.id]);Z.value=!1,B()}catch(t){Z.value=!1,B()}},ee=a([]),te=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await(async()=>{const e=await G(),t=(null==e?void 0:e.getSelectionRows())||[];ee.value=t.map((e=>e.id)),Z.value=!0;try{await D(ee.value),Z.value=!1,B()}catch(a){Z.value=!1,B()}})()};return(t,a)=>{const l=r("ElText");return n(),p(s,null,[o(m(e),null,{default:u((()=>[o(m(b),{gutter:20,style:{"margin-bottom":"15px"}},{default:u((()=>[o(m(x),{span:1.5},{default:u((()=>[o(l,{class:"mx-1",style:{position:"relative",top:"8px"}},{default:u((()=>[c("Search :")])),_:1})])),_:1}),o(m(x),{span:5},{default:u((()=>[o(m(d),{modelValue:A.value,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value=e),placeholder:m(_)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(m(x),{span:5},{default:u((()=>[o(m(g),{type:"primary",icon:m(U),style:{height:"38px"},onClick:F},{default:u((()=>[c("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(m(b),{gutter:60},{default:u((()=>[o(m(x),{span:1},{default:u((()=>[f("div",E,[o(m(g),{type:"primary",onClick:Y},{default:u((()=>[c(v(m(_)("common.new")),1)])),_:1})])])),_:1}),o(m(x),{span:1},{default:u((()=>[f("div",I,[o(m(i),{type:"danger",loading:Z.value,onClick:te},{default:u((()=>[c(v(m(_)("common.delete")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),o(m(h),{pageSize:m(M),"onUpdate:pageSize":a[1]||(a[1]=e=>y(M)?M.value=e:null),currentPage:m(O),"onUpdate:currentPage":a[2]||(a[2]=e=>y(O)?O.value=e:null),columns:H,data:m(T),stripe:"",border:!0,loading:m(R),resizable:!0,pagination:{total:m(W),pageSizes:[10,20,50,100,200,500,1e3]},onRegister:m(V),headerCellStyle:J,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),o(m(S),{modelValue:X.value,"onUpdate:modelValue":a[3]||(a[3]=e=>X.value=e),title:m(_)("common.new"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"},maxHeight:400},{default:u((()=>[o(z,{closeDialog:q,portDictForm:m(K),getList:m(B)},null,8,["portDictForm","getList"])])),_:1},8,["modelValue","title"])],64)}}});export{U as default};
