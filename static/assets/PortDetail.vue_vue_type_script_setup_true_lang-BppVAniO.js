import{d as e,dH as a,r as l,N as t,o,i as u,w as s,e as r,a as i,Z as m,I as d,H as n,t as p,l as v}from"./index-rxu9Faad.js";import{a as c,E as f}from"./el-form-item-BWEP-xeg.js";import{E as g,a as D}from"./el-col-BKZxb-_G.js";import{E as _}from"./el-divider-CWb5e3hf.js";import{u as y,e as b}from"./index-B9E6KFL3.js";const h=e({__name:"PortDetail",props:{closeDialog:{type:Function},getList:{type:Function},portDictForm:{}},setup(e){const{t:h}=v(),w=e,{portDictForm:V}=a(w),j=l({...V.value}),F=t({name:[{required:!0,message:h("portDict.nameMsg"),trigger:"blur"}],regular:[{required:!0,message:h("portDict.valueMsg"),trigger:"blur"}]}),x=l(!1),M=l();return(e,a)=>(o(),u(i(f),{model:j.value,"label-width":"auto",rules:F,"status-icon":"",ref_key:"ruleFormRef",ref:M},{default:s((()=>[r(i(c),{label:i(h)("portDict.name"),prop:"name"},{default:s((()=>[r(i(m),{modelValue:j.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value.name=e),placeholder:i(h)("portDict.nameMsg")},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),r(i(c),{label:i(h)("portDict.value")},{default:s((()=>[r(i(m),{modelValue:j.value.value,"onUpdate:modelValue":a[1]||(a[1]=e=>j.value.value=e),type:"textarea",prop:"value",placeholder:i(h)("portDict.valueMsg"),autosize:{minRows:11}},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),r(i(_)),r(i(D),null,{default:s((()=>[r(i(g),{span:2,offset:8},{default:s((()=>[r(i(c),null,{default:s((()=>[r(i(d),{type:"primary",onClick:a[2]||(a[2]=e=>(async e=>{x.value=!0,e&&await e.validate((async(e,a)=>{if(e){let e;e=""!=j.value.id?await y(j.value.id,j.value.name,j.value.value):await b(j.value.name,j.value.value),200===e.code&&(w.getList(),w.closeDialog()),x.value=!1}else x.value=!1}))})(M.value)),loading:x.value},{default:s((()=>[n(p(i(h)("task.save")),1)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"]))}});export{h as _};