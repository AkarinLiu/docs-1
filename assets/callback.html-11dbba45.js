import{c as T,r as A,u as e,N as o,O as r,P as c,a1 as n,S as p,Q as l,Z as d,a7 as v,U as D,V as U,_ as B,Y as E,F as L}from"./framework-4112b4b4.js";import{N as h}from"./Alert-73d5422e.js";import{as as O,N as P}from"./app-74835318.js";import{N as R}from"./Input-5215db0a.js";import{N as $}from"./Button-3d064a15.js";import"./resolve-slot-6658b9ef.js";import"./browser-1b3c7e9a.js";import"./Scrollbar-b6a755c0.js";import"./use-merged-state-11bbb36c.js";import"./color-to-class-b0332f36.js";const m=s=>(D("data-v-c2a026bc"),s=s(),U(),s),j=m(()=>l("b",null,"client_id: ",-1)),F=m(()=>l("b",null,"client_secret: ",-1)),G=m(()=>l("b",null,"redirect_uri: ",-1)),Q=m(()=>l("b",null,"refresh_token:",-1)),W=T({__name:"Callback",setup(s){const i=new URL(window.location.href),u=i.searchParams.get("code"),f=i.searchParams.get("state"),k=i.searchParams.get("error"),V=i.searchParams.get("error_description"),[b,y,g]=atob(f).split("::"),t=A();u&&!k&&(async()=>{const a=new URLSearchParams;a.append("client_id",b),a.append("client_secret",y),a.append("code",u),a.append("grant_type","authorization_code"),a.append("redirect_uri",g),fetch("https://www.googleapis.com/oauth2/v4/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then(_=>_.json()).then(_=>{console.log(_),t.value=_})})();function z(){var a;window.open(`/tool/google/album?access_token=${(a=t.value)==null?void 0:a.access_token}`,"_blank")}return(a,_)=>!e(u)||e(k)?(o(),r(e(h),{key:0,title:e(k)||"Error",type:"error"},{default:c(()=>[n(p(e(V)),1)]),_:1},8,["title"])):(o(),r(e(P),{key:1,vertical:"",size:"large"},{default:c(()=>{var w,N,C;return[l("p",null,[j,n(p(e(b)),1)]),l("p",null,[F,n(p(e(y)),1)]),l("p",null,[G,n(p(e(g)),1)]),(w=t.value)!=null&&w.error||(N=t.value)!=null&&N.error_description?(o(),r(e(h),{key:0,title:(C=t.value)==null?void 0:C.error,type:"error"},{default:c(()=>[n(p(t.value.error_description),1)]),_:1},8,["title"])):d("v-if",!0),v(e(P),{vertical:""},{default:c(()=>{var x,S,I;return[Q,t.value?d("v-if",!0):(o(),r(e(O),{key:0})),(x=t.value)!=null&&x.refresh_token?(o(),r(e(R),{key:1,type:"textarea",autosize:"",readonly:"",value:t.value.refresh_token},null,8,["value"])):(S=t.value)!=null&&S.access_token?(o(),r(e(h),{key:2,title:"Web client",type:"warning"},{default:c(()=>[n(" The refresh_token is only returned once if you use a web client. ")]),_:1})):d("v-if",!0),(I=t.value)!=null&&I.access_token?(o(),r(e($),{key:3,onClick:z,block:"",type:"primary"},{default:c(()=>[n("Get Album ID")]),_:1})):d("v-if",!0)]}),_:1})]}),_:1}))}});const Y=B(W,[["__scopeId","data-v-c2a026bc"],["__file","Callback.vue"]]),Z=T({__name:"callback.html",setup(s){return(i,u)=>{const f=L("NaiveClient");return o(),E("div",null,[v(f,null,{default:c(()=>[v(e(Y))]),_:1})])}}}),ne=B(Z,[["__file","callback.html.vue"]]);export{ne as default};
