import{d as e,aq as r,N as s,o as t,c as o,f as a,t as n,e as i,w as l,l as u,y as c}from"./index-CXVsFj8T.js";const m={class:"flex justify-center"},p={class:"text-center"},d=["src"],x={class:"text-14px text-[var(--el-color-info)]"},g={class:"mt-20px"},y=e({__name:"Error",props:{type:r.string.validate((e=>["404","500","403"].includes(e))).def("404")},emits:["errorClick"],setup(e,{emit:r}){const{t:y}=u(),f={404:{url:"/assets/404-B3JyPfEa.svg",message:y("error.pageError"),buttonText:y("error.returnToHome")},500:{url:"/assets/500-BGu8fdSB.svg",message:y("error.networkError"),buttonText:y("error.returnToHome")},403:{url:"/assets/403-RqeqO19C.svg",message:y("error.noPermission"),buttonText:y("error.returnToHome")}},v=e,T=r,B=()=>{T("errorClick",v.type)};return(r,u)=>{const y=s("BaseButton");return t(),o("div",m,[a("div",p,[a("img",{width:"350",src:f[e.type].url,alt:""},null,8,d),a("div",x,n(f[e.type].message),1),a("div",g,[i(y,{type:"primary",onClick:B},{default:l((()=>[c(n(f[e.type].buttonText),1)])),_:1})])])])}}});export{y as _};