import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-JnnrwuOA.js";import{d as t,l as i,r as a,o as r,i as l,w as o,e as s,a as p}from"./index-ChGT_YCB.js";import{_ as m}from"./Table.vue_vue_type_script_lang-BIM24Su6.js";import{a as d}from"./index-DmpDS7T9.js";import"./el-card-Bv8eL-PY.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-PhuldJD-.js";import"./el-table-column-D3t4SgcR.js";import"./index-CZTnDW2g.js";import"./debounce-Zw0D3mea.js";import"./el-checkbox-CasWmTQM.js";import"./isArrayLikeObject-7_HOgyXV.js";import"./raf-CI9lY1B7.js";import"./el-tag-uqONbW_Z.js";import"./el-pagination-BHF_c2aK.js";import"./el-select-BqJxfjvU.js";import"./strings-Dm6yfrSz.js";import"./useInput-D50pGW-V.js";import"./el-image-viewer-DOJ4W1Wh.js";import"./el-empty-w9dzImmf.js";import"./tsxHelper-DC_KhjvT.js";import"./el-dropdown-item-DkQ0kmO2.js";import"./castArray-DD2tgwSj.js";import"./refs-Dfwo_yLk.js";import"./index-BAUEFq46.js";import"./index-D1H-7IS5.js";const n=t({__name:"TableVideoPreview",setup(t){const{t:n}=i(),j=[{field:"title",label:n("tableDemo.title")},{field:"video_uri",label:n("tableDemo.videoPreview")},{field:"author",label:n("tableDemo.author")},{field:"display_time",label:n("tableDemo.displayTime")},{field:"pageviews",label:n("tableDemo.pageviews")}],u=a(!0);let _=a([]);return(async e=>{const t=await d(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{u.value=!1}));t&&(_.value=t.data.list)})(),(t,i)=>(r(),l(p(e),{title:p(n)("router.PicturePreview")},{default:o((()=>[s(p(m),{columns:j,data:p(_),loading:u.value,preview:["image_uri","video_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{n as default};
