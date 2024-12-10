import{d as e,s as t,r as a,v as l,G as i,z as s,D as o,o as r,c as n,e as p,a as d,w as u,H as m,F as c,l as g,ai as j,_ as f}from"./index-ChGT_YCB.js";import{u as h}from"./useTable-DVIhlLGs.js";import{E as b}from"./el-card-Bv8eL-PY.js";import{E as v}from"./el-pagination-BHF_c2aK.js";import{E as y}from"./el-tag-uqONbW_Z.js";import"./el-select-BqJxfjvU.js";import"./el-popper-PhuldJD-.js";import{E as _,a as x}from"./el-col-i_K16CKa.js";import{_ as S}from"./Table.vue_vue_type_script_lang-BIM24Su6.js";import{u as w}from"./useCrudSchemas-BzAvyzCs.js";import{a as E,d as C,h as k}from"./index-C-GaKulA.js";import z from"./Csearch-BrOH0oMu.js";import"./index-CZTnDW2g.js";import"./strings-Dm6yfrSz.js";import"./useInput-D50pGW-V.js";import"./debounce-Zw0D3mea.js";import"./el-table-column-D3t4SgcR.js";import"./el-checkbox-CasWmTQM.js";import"./isArrayLikeObject-7_HOgyXV.js";import"./raf-CI9lY1B7.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-image-viewer-DOJ4W1Wh.js";import"./el-empty-w9dzImmf.js";import"./tsxHelper-DC_KhjvT.js";import"./el-dropdown-item-DkQ0kmO2.js";import"./castArray-DD2tgwSj.js";import"./refs-Dfwo_yLk.js";import"./index-BAUEFq46.js";import"./tree-BfZhwLPs.js";import"./index-D1H-7IS5.js";import"./ContentWrap.vue_vue_type_script_setup_true_lang-JnnrwuOA.js";import"./el-text-iy-stWXi.js";import"./el-divider-Dm9ByY6A.js";import"./el-tree-select-B65aj2Zb.js";import"./index-BKDad1rC.js";/* empty css                */import"./el-switch-sUeo6Nig.js";import"./Dialog.vue_vue_type_style_index_0_lang-CjT1Och0.js";import"./useIcon-Cv7WwndZ.js";import"./exportData.vue_vue_type_script_setup_true_lang-BKfVLSbi.js";import"./el-tab-pane-DD3zcVo5.js";import"./el-form-D2bRQxI0.js";import"./el-radio-group-tIpiOwLu.js";import"./el-space-BVO1gQj3.js";const V=f(e({__name:"Crawler",props:{projectList:{}},setup(e){const{t:f}=g(),V=t({}),H=[{keyword:"url",example:'url="http://example.com"',explain:f("searchHelp.url")},{keyword:"method",example:'method="POST"',explain:f("searchHelp.method")},{keyword:"body",example:'body="username=admin"',explain:f("searchHelp.crawlerBody")},{keyword:"project",example:'project="Hackerone"',explain:f("searchHelp.project")}],L=a(""),A=e=>{L.value=e,X()},P=t([{field:"selection",type:"selection",minWidth:"55"},{field:"index",label:f("tableDemo.index"),type:"index",minWidth:55},{field:"method",label:"Method",minWidth:100},{field:"url",label:"URL",minWidth:500},{field:"body",label:f("crawler.postParameter"),minWidth:300},{field:"tags",label:"TAG",fit:"true",formatter:(e,t,o)=>{null==o&&(o=[]),V[e.id]||(V[e.id]={inputVisible:!1,inputValue:"",inputRef:a(null)});const r=V[e.id],n=async()=>{r.inputValue&&(o.push(r.inputValue),E(e.id,T,r.inputValue)),r.inputVisible=!1,r.inputValue=""};return l(x,{},(()=>[...o.map((t=>l(_,{span:24,key:t},(()=>[l("div",{onClick:e=>((e,t)=>{e.target.classList.contains("el-tag__close")||I("tags",t)})(e,t)},[l(y,{closable:!0,onClose:()=>(async t=>{const a=o.indexOf(t);a>-1&&o.splice(a,1),C(e.id,T,t)})(t)},(()=>t))])])))),l(_,{span:24},r.inputVisible?()=>l(i,{ref:r.inputRef,modelValue:r.inputValue,"onUpdate:modelValue":e=>r.inputValue=e,class:"w-20",size:"small",onKeyup:e=>{"Enter"===e.key&&n()},onBlur:n}):()=>l(s,{class:"button-new-tag",size:"small",onClick:()=>(r.inputVisible=!0,void j((()=>{})))},(()=>"+ New Tag")))]))},minWidth:"130"},{field:"time",label:f("asset.time"),minWidth:"170"}]);let T="crawler";const U=a([]),I=(e,t)=>{const a=`${e}=${t}`;U.value=[...U.value,a]},O=e=>{if(U.value){const[t,a]=e.split("=");t in ee&&Array.isArray(ee[t])&&(ee[t]=ee[t].filter((e=>e!==a)),0===ee[t].length&&delete ee[t]),U.value=U.value.filter((t=>t!==e))}};P.forEach((e=>{e.hidden=e.hidden??!1}));let W=a(!1);const D=({field:e,hidden:t})=>{const a=P.findIndex((t=>t.field===e));-1!==a&&(P[a].hidden=t),(()=>{const e=P.reduce(((e,t)=>(e[t.field]=t.hidden,e)),{});e.statisticsHidden=W.value,localStorage.setItem(`columnConfig_${T}`,JSON.stringify(e))})()};(()=>{const e=JSON.parse(localStorage.getItem(`columnConfig_${T}`)||"{}");P.forEach((t=>{void 0!==e[t.field]&&"select"!=t.field&&(t.hidden=e[t.field])})),W.value=e.statisticsHidden})();const{allSchemas:N}=w(P),{tableRegister:R,tableState:F,tableMethods:$}=h({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=F,a=await k(L.value,e.value,t.value,ee);return{list:a.data.list,total:a.data.total}},immediate:!1}),{loading:M,dataList:B,total:J,currentPage:K,pageSize:G}=F,{getList:X,getElTableExpose:Y}=$;function q(){return{background:"var(--el-fill-color-light)"}}G.value=20,o((()=>{Z(),window.addEventListener("resize",Z)}));const Q=a(0),Z=()=>{const e=window.innerHeight||document.documentElement.clientHeight;Q.value=.7*e},ee=t({}),te=(e,t)=>{Object.keys(ee).forEach((e=>delete ee[e])),Object.assign(ee,t),L.value=e,X()};return(e,t)=>(r(),n(c,null,[p(z,{getList:d(X),handleSearch:A,searchKeywordsData:H,index:"crawler",dynamicTags:U.value,handleClose:O,getElTableExpose:d(Y),projectList:e.$props.projectList,handleFilterSearch:te,crudSchemas:P,onUpdateColumnVisibility:D},null,8,["getList","dynamicTags","getElTableExpose","projectList","crudSchemas"]),p(d(x),null,{default:u((()=>[p(d(_),null,{default:u((()=>[p(d(b),null,{default:u((()=>[p(d(S),{pageSize:d(G),"onUpdate:pageSize":t[0]||(t[0]=e=>m(G)?G.value=e:null),currentPage:d(K),"onUpdate:currentPage":t[1]||(t[1]=e=>m(K)?K.value=e:null),columns:d(N).tableColumns,data:d(B),"max-height":Q.value,stripe:"",border:!0,loading:d(M),resizable:!0,onRegister:d(R),headerCellStyle:q,"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!1},style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),p(d(_),{":span":24},{default:u((()=>[p(d(b),null,{default:u((()=>[p(d(v),{pageSize:d(G),"onUpdate:pageSize":t[2]||(t[2]=e=>m(G)?G.value=e:null),currentPage:d(K),"onUpdate:currentPage":t[3]||(t[3]=e=>m(K)?K.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:d(J)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1})],64))}}),[["__scopeId","data-v-26459469"]]);export{V as default};