(function(e){function t(t){for(var r,c,u=t[0],s=t[1],d=t[2],i=0,p=[];i<u.length;i++)c=u[i],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a409a":"4ef1b8bc"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var d=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(i);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var i=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1f3a":function(e,t,n){"use strict";n("210a")},"210a":function(e,t,n){},"24ad":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t){var n=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])(n)])}n("1f3a");var o=n("6b0d"),c=n.n(o);const u={};var s=c()(u,[["render",a]]),d=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),i={class:"home container mx-auto px-4",id:"top"},l={class:"md:grid md:grid-flow-col md:grid-cols-2 md:gap-2"};function p(e,t,n,a,o,c){var u=Object(r["u"])("main-header"),s=Object(r["u"])("school-years"),d=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])("div",i,[Object(r["g"])(u),Object(r["e"])("div",l,[Object(r["g"])(s,{students:o.students,years:o.years,yearRows:o.yearRows},null,8,["students","years","yearRows"]),Object(r["g"])(d,{yearRows:o.yearRows},null,8,["yearRows"])])])}n("159b"),n("caad"),n("2532"),n("4e82"),n("35b3"),n("a9e3");var b={class:"text-primary-500"};function f(e,t,n,a,o,c){return Object(r["p"])(),Object(r["d"])("header",null,[Object(r["e"])("h1",b,Object(r["w"])(o.siteName),1)])}var m={name:"mainHeader",data:function(){return{siteName:"Students."}}},O=c()(m,[["render",f]]),h={class:"auto-grid"},j=Object(r["e"])("span",{class:"bold"},"Attendence: ",-1),v=Object(r["e"])("span",{class:"bold"},"Overall GPA: ",-1);function y(e,t,n,a,o,c){var u=Object(r["u"])("router-link");return Object(r["p"])(),Object(r["d"])("div",h,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(n.years,(function(e){return Object(r["p"])(),Object(r["d"])("div",{key:e,class:"auto-grid-item text-secondary-600 rounded-md border-2 border-secondary-500 p-1 md:border-none md:bg-secondary-500 md:text-gray-50 md:p-3 md:flex items-center gap-3 w-160"},[Object(r["g"])(u,{to:{name:"summarize",params:{year:e}},class:"md:whitespace-nowrap"},{default:Object(r["z"])((function(){return[Object(r["e"])("div",null,[Object(r["e"])("h3",null,Object(r["w"])(e),1)]),Object(r["e"])("div",null,[j,Object(r["e"])("span",null,Object(r["w"])(n.yearRows[e].attendence),1)]),Object(r["e"])("div",null,[v,Object(r["e"])("span",null,Object(r["w"])(n.yearRows[e].averageGPA),1)])]})),_:2},1032,["to"])])})),128))])}var g={name:"schoolYears",props:{years:Array,yearRows:Object}},w=(n("d1db"),c()(g,[["render",y]])),P=n("bc3a"),R=n.n(P),A={name:"Home",components:{mainHeader:O,schoolYears:w},props:{year:String},data:function(){return{students:[],years:[],yearRows:{}}},created:function(){var e=this;R.a.get("http://apitest.sertifi.net/api/Students").then((function(t){var n=t.data,r={},a=[];for(var o in n.forEach((function(e){var t=e,n=t.Name,o=[];e.GPARecord.forEach((function(e,c){var u=t.StartYear+c;if(a.includes(u)||a.push(u),o.push(u),!(u in r))return r[u]={students:[n],gpas:[e],studentRows:{}},void(r[u].studentRows[n]={Name:n,GPA:e});r[u].students.includes(t.Name)||(r[u].students.push(t.Name),r[u].studentRows[n]={Name:n,GPA:e}),r[u].gpas.push(e)})),e.averageGPA=e.GPARecord.reduce((function(e,t,n){return(e*n+t)/(n+1)})),e.attended=o})),e.years=a.sort(),r){r[o].attendence=r[o].students.length;var c=r[o].gpas.reduce((function(e,t,n){return(e*n+t)/(n+1)}));r[o].averageGPA=Math.round(100*(c+Number.EPSILON))/100}e.yearRows=r}))}},x=c()(A,[["render",p]]),S={class:"about"},k=Object(r["e"])("h1",null,"This is an about page",-1),N=[k];function G(e,t){return Object(r["p"])(),Object(r["d"])("div",S,N)}const _={};var E=c()(_,[["render",G]]),M=[{path:"/",name:"Home",component:x,children:[{name:"summarize",path:"summarize/:year",props:!0,component:function(){return n.e("chunk-2d0a409a").then(n.bind(null,"0576"))}}]},{path:"/about",name:"About",component:E},{path:"/:catchAll(.*)",component:x}],T=Object(d["a"])({history:Object(d["b"])(),routes:M}),z=T;n("db43");Object(r["c"])(s).use(z).mount("#app")},d1db:function(e,t,n){"use strict";n("24ad")},db43:function(e,t,n){}});
//# sourceMappingURL=app.6a5c3752.js.map