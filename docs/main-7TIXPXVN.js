import{G as l,H as d,I as f,K as u,N as a,O as h,P as C,Q as M,S as g,f as r,h as c,i,o as m,p as s,q as p}from"./chunk-U7ZF2JYF.js";var y=(()=>{let t=class t{constructor(){this.title="countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(e,j){e&1&&(m(0,"div",0)(1,"div",1),p(2,"shared-sidebar"),s(),m(3,"div",2),p(4,"router-outlet"),s()())},dependencies:[u,h]});let o=t;return o})();var N=[{path:"about",component:C},{path:"contact",component:M},{path:"countries",loadChildren:()=>import("./chunk-HXAXMO5S.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],v=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(N),a]});let o=t;return o})();var w=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[y]}),t.\u0275inj=r({imports:[v,f,g,l]});let o=t;return o})();d().bootstrapModule(w).catch(o=>console.error(o));
