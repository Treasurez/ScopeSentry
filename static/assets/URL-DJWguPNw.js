import{d as e,r as t,s as l,e as a,y as i,S as s,v as o,G as r,z as n,D as p,o as u,c as d,a as c,w as m,H as g,F as f,I as j,l as v,ai as h,_ as x}from"./index-ChGT_YCB.js";import{u as y}from"./useTable-DVIhlLGs.js";import{E as b}from"./el-card-Bv8eL-PY.js";import{E as _}from"./el-pagination-BHF_c2aK.js";import{E as S}from"./el-tag-uqONbW_Z.js";import"./el-select-BqJxfjvU.js";import"./el-popper-PhuldJD-.js";import{E,a as w}from"./el-col-i_K16CKa.js";import{E as L}from"./el-text-iy-stWXi.js";import{_ as z}from"./Table.vue_vue_type_script_lang-BIM24Su6.js";import{u as C}from"./useCrudSchemas-BzAvyzCs.js";import{a as k,d as U,q as V}from"./index-C-GaKulA.js";import H from"./Csearch-BrOH0oMu.js";import"./index-CZTnDW2g.js";import"./strings-Dm6yfrSz.js";import"./useInput-D50pGW-V.js";import"./debounce-Zw0D3mea.js";import"./el-table-column-D3t4SgcR.js";import"./el-checkbox-CasWmTQM.js";import"./isArrayLikeObject-7_HOgyXV.js";import"./raf-CI9lY1B7.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-image-viewer-DOJ4W1Wh.js";import"./el-empty-w9dzImmf.js";import"./tsxHelper-DC_KhjvT.js";import"./el-dropdown-item-DkQ0kmO2.js";import"./castArray-DD2tgwSj.js";import"./refs-Dfwo_yLk.js";import"./index-BAUEFq46.js";import"./tree-BfZhwLPs.js";import"./index-D1H-7IS5.js";import"./ContentWrap.vue_vue_type_script_setup_true_lang-JnnrwuOA.js";import"./el-divider-Dm9ByY6A.js";import"./el-tree-select-B65aj2Zb.js";import"./index-BKDad1rC.js";/* empty css                */import"./el-switch-sUeo6Nig.js";import"./Dialog.vue_vue_type_style_index_0_lang-CjT1Och0.js";import"./useIcon-Cv7WwndZ.js";import"./exportData.vue_vue_type_script_setup_true_lang-BKfVLSbi.js";import"./el-tab-pane-DD3zcVo5.js";import"./el-form-D2bRQxI0.js";import"./el-radio-group-tIpiOwLu.js";import"./el-space-BVO1gQj3.js";const W=x(e({__name:"URL",props:{projectList:{}},setup(e){const{t:x}=v(),W=[{keyword:"url",example:'url="http://example.com"',explain:x("searchHelp.url")},{keyword:"input",example:'input="example.com"',explain:x("searchHelp.inpur")},{keyword:"source",example:'source="exapmle.com/example.js"',explain:x("searchHelp.source")},{keyword:"type",example:'type="linkfinder"',explain:x("searchHelp.urlType")},{keyword:"project",example:'project="Hackerone"',explain:x("searchHelp.project")}],R=t(""),I=e=>{R.value=e,q()},T=l({}),O=l([{field:"selection",type:"selection",minWidth:"55"},{field:"index",label:x("tableDemo.index"),type:"index",minWidth:55},{field:"url",label:"URL",minWidth:250},{field:"status",label:x("dirScan.status"),columnKey:"status",minWidth:120,formatter:(e,t,l)=>{if(null==l)return a("div",null,[i("-")]);let o="";return o=l<300?"#2eb98a":"#ff5252",a(w,{gutter:20},{default:()=>[a(E,{span:1},{default:()=>[a(s,{icon:"clarity:circle-solid",color:o,size:10,style:"transform: translateY(8%)"},null)]}),a(E,{span:2},{default:()=>{return[a(L,null,(e=l,"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!j(e)?l:{default:()=>[l]}))];var e}})]})},filters:[{text:"200",value:200},{text:"201",value:201},{text:"204",value:204},{text:"301",value:301},{text:"302",value:302},{text:"304",value:304},{text:"400",value:400},{text:"401",value:401},{text:"403",value:403},{text:"404",value:404},{text:"500",value:500},{text:"502",value:502},{text:"503",value:503},{text:"504",value:504}]},{field:"length",label:"Length",minWidth:120,sortable:"custom"},{field:"source",label:x("URL.source"),minWidth:100},{field:"type",label:x("URL.type"),minWidth:100},{field:"input",label:x("URL.input"),minWidth:200},{field:"tags",label:"TAG",fit:"true",formatter:(e,l,a)=>{null==a&&(a=[]),T[e.id]||(T[e.id]={inputVisible:!1,inputValue:"",inputRef:t(null)});const i=T[e.id],s=async()=>{i.inputValue&&(a.push(i.inputValue),k(e.id,A,i.inputValue)),i.inputVisible=!1,i.inputValue=""};return o(w,{},(()=>[...a.map((t=>o(E,{span:24,key:t},(()=>[o("div",{onClick:e=>((e,t)=>{e.target.classList.contains("el-tag__close")||re("tags",t)})(e,t)},[o(S,{closable:!0,onClose:()=>(async t=>{const l=a.indexOf(t);l>-1&&a.splice(l,1),U(e.id,A,t)})(t)},(()=>t))])])))),o(E,{span:24},i.inputVisible?()=>o(r,{ref:i.inputRef,modelValue:i.inputValue,"onUpdate:modelValue":e=>i.inputValue=e,class:"w-20",size:"small",onKeyup:e=>{"Enter"===e.key&&s()},onBlur:s}):()=>o(n,{class:"button-new-tag",size:"small",onClick:()=>(i.inputVisible=!0,void h((()=>{})))},(()=>"+ New Tag")))]))},minWidth:"130"},{field:"time",label:x("asset.time"),minWidth:200}]);let A="UrlScan";O.forEach((e=>{e.hidden=e.hidden??!1}));let P=t(!1);const D=({field:e,hidden:t})=>{const l=O.findIndex((t=>t.field===e));-1!==l&&(O[l].hidden=t),(()=>{const e=O.reduce(((e,t)=>(e[t.field]=t.hidden,e)),{});e.statisticsHidden=P.value,localStorage.setItem(`columnConfig_${A}`,JSON.stringify(e))})()};(()=>{const e=JSON.parse(localStorage.getItem(`columnConfig_${A}`)||"{}");O.forEach((t=>{void 0!==e[t.field]&&"select"!=t.field&&(t.hidden=e[t.field])})),P.value=e.statisticsHidden})();const{allSchemas:N}=C(O),{tableRegister:F,tableState:$,tableMethods:K}=y({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=$,l=await V(R.value,e.value,t.value,ae,Z);return{list:l.data.list,total:l.data.total}},immediate:!1}),{loading:J,dataList:M,total:B,currentPage:G,pageSize:Y}=$,{getList:q,getElTableExpose:X}=K;function Q(){return{background:"var(--el-fill-color-light)"}}Y.value=20,p((()=>{le(),window.addEventListener("resize",le)}));const Z=l({}),ee=async e=>{const t=e.prop,l=e.order;Z[t]=l,q()},te=t(0),le=()=>{const e=window.innerHeight||document.documentElement.clientHeight;te.value=.7*e},ae=l({}),ie=(e,t)=>{Object.assign(ae,t),R.value=e,q()},se=async e=>{Object.assign(ae,e),q()},oe=t([]),re=(e,t)=>{const l=`${e}=${t}`;oe.value=[...oe.value,l]},ne=e=>{if(oe.value){const[t,l]=e.split("=");t in ae&&Array.isArray(ae[t])&&(ae[t]=ae[t].filter((e=>e!==l)),0===ae[t].length&&delete ae[t]),oe.value=oe.value.filter((t=>t!==e))}};return(e,t)=>(u(),d(f,null,[a(H,{getList:c(q),handleSearch:I,searchKeywordsData:W,index:"UrlScan",getElTableExpose:c(X),projectList:e.$props.projectList,handleFilterSearch:ie,crudSchemas:O,dynamicTags:oe.value,handleClose:ne,onUpdateColumnVisibility:D},null,8,["getList","getElTableExpose","projectList","crudSchemas","dynamicTags"]),a(c(w),null,{default:m((()=>[a(c(E),null,{default:m((()=>[a(c(b),null,{default:m((()=>[a(c(z),{pageSize:c(Y),"onUpdate:pageSize":t[0]||(t[0]=e=>g(Y)?Y.value=e:null),currentPage:c(G),"onUpdate:currentPage":t[1]||(t[1]=e=>g(G)?G.value=e:null),columns:c(N).tableColumns,data:c(M),"max-height":te.value,stripe:"",border:!0,loading:c(J),resizable:!0,onSortChange:ee,onRegister:c(F),onFilterChange:se,headerCellStyle:Q,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),a(c(E),{":span":24},{default:m((()=>[a(c(b),null,{default:m((()=>[a(c(_),{pageSize:c(Y),"onUpdate:pageSize":t[2]||(t[2]=e=>g(Y)?Y.value=e:null),currentPage:c(G),"onUpdate:currentPage":t[3]||(t[3]=e=>g(G)?G.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:c(B)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1})],64))}}),[["__scopeId","data-v-48fb44f2"]]);export{W as default};
