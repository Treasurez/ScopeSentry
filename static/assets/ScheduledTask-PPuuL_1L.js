import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-JnnrwuOA.js";import{d as t,r as a,s as l,e as o,K as s,C as i,F as n,D as r,o as d,i as u,w as p,a as m,y as c,t as f,G as g,z as v,f as _,H as y,I as h,l as j,L as b}from"./index-ChGT_YCB.js";import{E as x,a as w}from"./el-col-i_K16CKa.js";import{E as k}from"./el-text-iy-stWXi.js";import{a as V,E as S}from"./el-tab-pane-DD3zcVo5.js";import{E,a as N}from"./el-form-D2bRQxI0.js";import{E as A}from"./el-input-number-DPiEvBiu.js";import"./el-tag-uqONbW_Z.js";import{E as C}from"./el-popper-PhuldJD-.js";import"./el-virtual-list-CNowGpHm.js";import{E as T}from"./el-select-v2-wtxCX1rW.js";import{E as U}from"./el-checkbox-CasWmTQM.js";import"./el-tooltip-l0sNRNKZ.js";import{E as z}from"./el-switch-sUeo6Nig.js";import{_ as D}from"./Table.vue_vue_type_script_lang-BIM24Su6.js";import{u as P}from"./useTable-DVIhlLGs.js";import{u as W}from"./useIcon-Cv7WwndZ.js";import{b as I,c as H,u as L}from"./index-BSrlp7x5.js";import{_ as R}from"./Dialog.vue_vue_type_style_index_0_lang-CjT1Och0.js";import{_ as F}from"./AddTask.vue_vue_type_script_setup_true_lang-DF9vlNRo.js";import{_ as M}from"./AddProject.vue_vue_type_script_setup_true_lang-BOBz6_Si.js";import{_ as O}from"./PageMonit.vue_vue_type_script_setup_true_lang-CzuMehHh.js";import{a as B}from"./index-Bn-YWme3.js";import"./el-card-Bv8eL-PY.js";import"./strings-Dm6yfrSz.js";import"./castArray-DD2tgwSj.js";import"./raf-CI9lY1B7.js";import"./useInput-D50pGW-V.js";import"./index-CZTnDW2g.js";import"./debounce-Zw0D3mea.js";import"./el-table-column-D3t4SgcR.js";import"./isArrayLikeObject-7_HOgyXV.js";import"./el-pagination-BHF_c2aK.js";import"./el-select-BqJxfjvU.js";import"./el-image-viewer-DOJ4W1Wh.js";import"./el-empty-w9dzImmf.js";import"./tsxHelper-DC_KhjvT.js";import"./el-dropdown-item-DkQ0kmO2.js";import"./refs-Dfwo_yLk.js";import"./index-BAUEFq46.js";import"./index-D1H-7IS5.js";import"./el-divider-Dm9ByY6A.js";import"./el-radio-group-tIpiOwLu.js";import"./DetailTemplate-D60xsSuF.js";/* empty css                */import"./index-CGuBTO34.js";import"./index-iHvimrm9.js";import"./index-pYbubzZv.js";const G={class:"mb-10px"},K={style:{position:"relative",top:"12px"}};function J(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!h(e)}const X=t({__name:"ScheduledTask",setup(t){const h=W({icon:"iconoir:search"}),{t:X}=j(),Y=a(""),q=()=>{ie()},Q=l([{field:"selection",type:"selection",width:"55"},{field:"name",label:X("task.taskName"),minWidth:30},{field:"cycle",label:X("task.taskCycle")+"(h)",minWidth:20},{field:"type",label:X("task.typeTask"),minWidth:20},{field:"lastTime",label:X("task.lastTime"),minWidth:40,formatter:(e,t,a)=>""==a?"-":a},{field:"nextTime",label:X("task.nextTime"),minWidth:40,formatter:(e,t,a)=>""==a||0==e.state?"-":a},{field:"state",label:X("common.state"),minWidth:20,formatter:(e,t,a)=>{if(null==a)return o("div",null,null);let l="",i="";return 1==a?(l="#2eb98a",i=X("common.on")):(l="red",i=X("common.statusStop")),o(w,{gutter:20},{default:()=>[o(x,{span:1},{default:()=>[o(s,{icon:"clarity:circle-solid",color:l},null)]}),o(x,{span:5},{default:()=>[o(k,{type:"info"},J(i)?i:{default:()=>[i]})]})]})}},{field:"action",label:X("tableDemo.action"),minWidth:40,formatter:(e,t,a)=>{let l,s,r;return o(n,null,["page_monitoring"===e.id?o(i,{type:"success",onClick:()=>Ne(e)},J(l=X("common.edit"))?l:{default:()=>[l]}):o(n,null,[o(i,{type:"success",onClick:()=>fe(e)},J(s=X("common.edit"))?s:{default:()=>[s]}),o(i,{type:"danger",onClick:()=>ve(e)},J(r=X("common.delete"))?r:{default:()=>[r]})])])}}]),{tableRegister:Z,tableState:$,tableMethods:ee}=P({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=$,a=await H(Y.value,e.value,t.value);return{list:a.data.list,total:a.data.total}},immediate:!0}),{loading:te,dataList:ae,total:le,currentPage:oe,pageSize:se}=$;se.value=20;const{getList:ie,getElTableExpose:ne}=ee;function re(){return{background:"var(--el-fill-color-light)"}}const de=a(!1);let ue=X("task.addTask");const pe=()=>{de.value=!1};let me=a(""),ce=a(!0);const fe=async e=>{me.value=e.id,ue=X("common.edit"),de.value=!0},ge=async()=>{window.confirm("Are you sure you want to delete the selected data?")&&await je()},ve=async e=>{window.confirm("Are you sure you want to delete the selected data?")&&await ye(e)},_e=a(!1),ye=async e=>{_e.value=!0;try{await I([e.id]);_e.value=!1,ie()}catch(t){_e.value=!1,ie()}},he=a([]),je=async()=>{const e=await ne(),t=(null==e?void 0:e.getSelectionRows())||[];he.value=t.map((e=>e.id)),_e.value=!0;try{await I(he.value);_e.value=!1,ie()}catch(a){_e.value=!1,ie()}};r((()=>{xe(),window.addEventListener("resize",xe)}));const be=a(0),xe=()=>{const e=window.innerHeight||document.documentElement.clientHeight;be.value=.75*e},we=a(!1),ke=()=>{we.value=!1},Ve=a(!1),Se=a(!1),Ee=l({hour:24,allNode:!0,node:[],state:!0}),Ne=async e=>{Ee.hour=e.cycle,Ee.allNode=e.allNode,Ee.node=e.node,Ee.state=e.state,Ve.value=!0},Ae=l([]),Ce=a(!1),Te=a(!1),Ue=e=>{Ce.value=!1,e?(Ee.allNode=!0,Ee.node=[],Ae.forEach((e=>Ee.node.push(e.value)))):(Ee.allNode=!1,Ee.node=[])};return(async()=>{const e=await B();e.data.list.length>0?(Te.value=!1,e.data.list.forEach((e=>{Ae.push({value:e,label:e})}))):(Te.value=!0,b.warning(X("node.onlineNodeMsg")))})(),(t,a)=>(d(),u(m(e),null,{default:p((()=>[o(m(w),null,{default:p((()=>[o(m(x),{span:1},{default:p((()=>[o(m(k),{class:"mx-1",style:{position:"relative",top:"8px"}},{default:p((()=>[c(f(m(X)("task.taskName"))+":",1)])),_:1})])),_:1}),o(m(x),{span:5},{default:p((()=>[o(m(g),{modelValue:Y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>Y.value=e),placeholder:m(X)("common.inputText"),style:{height:"38px"}},null,8,["modelValue","placeholder"])])),_:1}),o(m(x),{span:5,style:{position:"relative",left:"16px"}},{default:p((()=>[o(m(v),{type:"primary",icon:m(h),style:{height:"100%"},onClick:q},{default:p((()=>[c("Search")])),_:1},8,["icon"])])),_:1})])),_:1}),o(m(w),null,{default:p((()=>[o(m(x),{style:{position:"relative",top:"16px"}},{default:p((()=>[_("div",G,[o(m(i),{type:"danger",loading:_e.value,onClick:ge},{default:p((()=>[c(f(m(X)("task.delTask")),1)])),_:1},8,["loading"])])])),_:1})])),_:1}),_("div",K,[o(m(D),{"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},pageSize:m(se),"onUpdate:pageSize":a[1]||(a[1]=e=>y(se)?se.value=e:null),currentPage:m(oe),"onUpdate:currentPage":a[2]||(a[2]=e=>y(oe)?oe.value=e:null),columns:Q,data:m(ae),stripe:"",border:!0,loading:m(te),"max-height":be.value,resizable:!0,pagination:{total:m(le),pageSizes:[20,30,50,100,200,500,1e3]},onRegister:m(Z),headerCellStyle:re,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","loading","max-height","pagination","onRegister"])]),o(m(R),{modelValue:de.value,"onUpdate:modelValue":a[3]||(a[3]=e=>de.value=e),title:m(ue),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(F,{closeDialog:pe,getList:m(ie),create:m(ce),taskid:m(me),schedule:!0},null,8,["getList","create","taskid"])])),_:1},8,["modelValue","title"]),o(m(R),{modelValue:we.value,"onUpdate:modelValue":a[4]||(a[4]=e=>we.value=e),title:m(X)("common.edit"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(M,{closeDialog:ke,projectid:m(""),getProjectData:m(ie),schedule:!1},null,8,["projectid","getProjectData"])])),_:1},8,["modelValue","title"]),o(m(R),{modelValue:Ve.value,"onUpdate:modelValue":a[10]||(a[10]=e=>Ve.value=e),title:m(X)("common.edit"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:p((()=>[o(m(V),{type:"card"},{default:p((()=>[o(m(S),{label:m(X)("router.configuration")},{default:p((()=>[o(m(E),{model:Ee,"label-width":"100px","status-icon":"",ref:"ruleFormRef"},{default:p((()=>[o(m(C),{content:m(X)("task.selectNodeMsg"),placement:"top"},{default:p((()=>[o(m(N),{label:m(X)("task.nodeSelect"),prop:"node"},{default:p((()=>[o(m(T),{modelValue:Ee.node,"onUpdate:modelValue":a[6]||(a[6]=e=>Ee.node=e),filterable:"",options:Ae,placeholder:"Please select node",style:{width:"80%"},multiple:"","tag-type":"success","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":7},{header:p((()=>[o(m(U),{modelValue:Ee.allNode,"onUpdate:modelValue":a[5]||(a[5]=e=>Ee.allNode=e),disabled:Te.value,indeterminate:Ce.value,onChange:Ue},{default:p((()=>[c(" All ")])),_:1},8,["modelValue","disabled","indeterminate"])])),_:1},8,["modelValue","options"])])),_:1},8,["label"])])),_:1},8,["content"]),o(m(N),{label:m(X)("project.cycle"),prop:"type"},{default:p((()=>[o(m(A),{modelValue:Ee.hour,"onUpdate:modelValue":a[7]||(a[7]=e=>Ee.hour=e),min:1,"controls-position":"right",size:"small"},null,8,["modelValue"]),o(m(k),{style:{position:"relative",left:"16px"}},{default:p((()=>[c("Hour")])),_:1})])),_:1},8,["label"]),o(m(N),{label:m(X)("common.state")},{default:p((()=>[o(m(z),{modelValue:Ee.state,"onUpdate:modelValue":a[8]||(a[8]=e=>Ee.state=e),"inline-prompt":"","active-text":m(X)("common.switchAction"),"inactive-text":m(X)("common.switchInactive")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),o(m(w),null,{default:p((()=>[o(m(x),{span:2,offset:8},{default:p((()=>[o(m(N),null,{default:p((()=>[o(m(v),{type:"primary",onClick:a[9]||(a[9]=e=>(async()=>{Se.value=!0,await L(Ee.hour,Ee.node,Ee.allNode,Ee.state),Se.value=!1,ie()})()),loading:Se.value},{default:p((()=>[c(f(m(X)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["label"]),o(m(S),{label:m(X)("task.data")},{default:p((()=>[o(O)])),_:1},8,["label"])])),_:1})])),_:1},8,["modelValue","title"])])),_:1}))}});export{X as default};