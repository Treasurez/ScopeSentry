import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-4BKB8u1e.js";import{d as t,l as i,r as a,o as l,i as r,w as o,e as s,a as p}from"./index-uu-sb1xd.js";import{_ as m}from"./Table.vue_vue_type_script_lang-DR1NSdjE.js";import{a as d}from"./index-Dt5Dd5hT.js";import"./el-card-C9jj0kus.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-Q1oSUg9s.js";import"./el-table-column-B1k3mfGa.js";import"./index-BCiLOhqr.js";import"./debounce-lsqC8295.js";import"./el-checkbox--BT0mwB_.js";import"./isArrayLikeObject-CYjxtax4.js";import"./raf-D1egjexT.js";import"./el-tag-DNcAhGYG.js";import"./el-pagination-CDDD20a2.js";import"./el-select-Cy5vHOir.js";import"./strings-DlngudI4.js";import"./useInput-CDx1l06s.js";import"./el-image-viewer-BokRXDKf.js";import"./el-empty-iWt115hX.js";import"./tsxHelper-zo-x7Wbp.js";import"./el-dropdown-item-4FW6tlcv.js";import"./castArray-rIphTaLC.js";import"./refs-BPcd29qY.js";import"./index-DmBPbhxn.js";import"./index-C0gm2Z3K.js";const n=t({__name:"TableVideoPreview",setup(t){const{t:n}=i(),j=[{field:"title",label:n("tableDemo.title")},{field:"video_uri",label:n("tableDemo.videoPreview")},{field:"author",label:n("tableDemo.author")},{field:"display_time",label:n("tableDemo.displayTime")},{field:"pageviews",label:n("tableDemo.pageviews")}],u=a(!0);let c=a([]);return(async e=>{const t=await d(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{u.value=!1}));t&&(c.value=t.data.list)})(),(t,i)=>(l(),r(p(e),{title:p(n)("router.PicturePreview")},{default:o((()=>[s(p(m),{columns:j,data:p(c),loading:u.value,preview:["image_uri","video_uri"]},null,8,["data","loading"])])),_:1},8,["title"]))}});export{n as default};
