(this["webpackJsonpreact-api"]=this["webpackJsonpreact-api"]||[]).push([[0],{37:function(e,a,t){e.exports=t(73)},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),l=t(6),m=t(10),i=t(8),s=t.n(i),o=t(12),p=t(11),u=t.n(p);function d(){var e=Date.now();return new Date(e).toISOString().slice(0,-5).replace("Z","").replace("T"," ")}function h(e){try{var a=new Date(0).setUTCSeconds(e),t=new Date(a).toISOString().slice(0,-5).replace("Z","").replace("T"," ")}catch(n){console.log(n)}return t}function E(){var e={width:"inherit",marginTop:"25px",marginLeft:"10px"},a=Object(n.useState)({environments:[]}),t=Object(o.a)(a,2),c=t[0],m=t[1];function i(e){switch(e){case"ERROR":return"card text-white bg-danger mb-3";case"WARNING":return"card text-white bg-warning mb-3";case"INFO":return"card text-white bg-info mb-3";case"OK":return"card text-white bg-success mb-3";case"OBSOLETE":return"card text-white bg-secondary mb-3";default:return"card"}}return(Object(n.useEffect)((function(){!function(){var e,a;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(u()("https://main-healthdash.yvrcalabrio.com/healthdash-app/healthcheck/"));case 2:e=t.sent,a=e.data,m(a.responseData);case 5:case"end":return t.stop()}}))}()}),[]),c.loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("div",{style:{margin:"0px 80px auto 100px",width:"100%"}},r.a.createElement("div",{style:{float:"left"}},r.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},r.a.createElement(l.b,{to:"/"},"Home"))),r.a.createElement("div",{style:{float:"right"}},d())))),r.a.createElement("div",{style:{margin:"100px 96px auto 100px",width:"auto"}},r.a.createElement("h1",null,r.a.createElement("span",{style:{margin:"10px"}},"Calabrio HealthDash")),Array.from(c).map((function(a){return r.a.createElement(l.b,{to:a.environment,param:a.environment,style:{textDecoration:"none"}},r.a.createElement("div",{className:i(a.status),style:e},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{style:{float:"left"}},a.environment),r.a.createElement("h5",{style:{float:"right"}},a.status," \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",h(a.timeUpdated)))))})))))}function b(e){switch(e){case"RED":return"btn btn-danger";case"WARNING":return"btn btn-warning";case"INFO":return"btn btn-info";case"GREEN":return"btn btn-success";case"OBSOLETE":return"btn btn-secondary";default:return"btn btn-light"}}var v=t(74),f=t(14),g=t.n(f);function x(e){var a={width:"inherit",marginTop:"25px",marginLeft:"10px"},t=Object(n.useState)({environments:[]}),c=Object(o.a)(t,2),m=c[0],i=c[1];return Object(n.useEffect)((function(){!function(){var a,t;s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(u()("https://main-healthdash.yvrcalabrio.com/healthdash-app/healthcheck/environment/".concat(e.match.params.environment)));case 2:a=n.sent,t=a.data,i(t.responseData);case 5:case"end":return n.stop()}}))}()}),[e.match.params.environment]),m.loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("div",{style:{margin:"0px 80px auto 100px",width:"100%"}},r.a.createElement("div",{style:{float:"left",display:"inline-flex"}},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(l.b,{to:"/"},"Home")),r.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},e.match.params.environment)),r.a.createElement("div",{style:{float:"right"}},d())))),r.a.createElement("div",{style:{margin:"100px 96px auto 100px",width:"auto"}},r.a.createElement("h1",null,r.a.createElement("span",{style:{margin:"10px"}},e.match.params.environment)),Array.from(m).map((function(e){return r.a.createElement("div",{className:"card",style:a},r.a.createElement("button",{className:b(e.status),id:e.arn.replace(/[0-9]/g,"")},r.a.createElement("h5",{style:{float:"left"}},e.service),r.a.createElement("h5",{style:{float:"right"}},h(e.timeUpdated))),r.a.createElement(v.a,{toggler:e.arn.replace(/[0-9]/g,"")},r.a.createElement(l.b,{to:{pathname:e.environment+"/"+e.service},style:{textDecoration:"none"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"}),r.a.createElement("p",{style:{float:"left"}},r.a.createElement(g.a,{id:"json-pretty",data:e.healthCheck}))))))}))))}function y(e){var a={width:"inherit",marginTop:"25px",marginLeft:"10px"},t=Object(n.useState)({service:[]}),c=Object(o.a)(t,2),m=c[0],i=c[1];return Object(n.useEffect)((function(){!function(){var a,t;s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(u()("https://main-healthdash.yvrcalabrio.com/healthdash-app/healthcheck/environment/".concat(e.match.params.environment,"/service/").concat(e.match.params.service)));case 2:a=n.sent,t=a.data,i(t.responseData);case 5:case"end":return n.stop()}}))}()}),[e.match.params.environment,e.match.params.service]),m.loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("div",null,r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("div",{style:{margin:"0px 80px auto 100px",width:"100%"}},r.a.createElement("div",{style:{float:"left",display:"inline-flex"}},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(l.b,{to:"/"},"Home")),r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(l.b,{to:{pathname:"/"+e.match.params.environment}},e.match.params.environment)),r.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},e.match.params.service)),r.a.createElement("div",{style:{float:"right"}},d())))),r.a.createElement("div",{style:{margin:"100px 96px auto 100px",width:"auto"}},r.a.createElement("h1",null,r.a.createElement("span",{style:{margin:"10px"}},e.match.params.environment," - ",e.match.params.service)),Array.from(m).map((function(e){return r.a.createElement("div",{className:"card",style:a},r.a.createElement("button",{class:b(e.status),id:e.arn.replace(/[0-9]/g,"")},r.a.createElement("h5",{style:{float:"left"}},e.arn),r.a.createElement("h5",{style:{float:"right"}},"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",e.version,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",h(e.timeUpdated))),r.a.createElement(v.a,{toggler:e.arn.replace(/[0-9]/g,"")},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},r.a.createElement(g.a,{id:"json-pretty",data:e.healthCheck})))))}))))}t(72);Object(c.render)(r.a.createElement(l.a,null,r.a.createElement((function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/react/",component:E}),r.a.createElement(m.a,{exact:!0,path:"/react/:environment",component:x}),r.a.createElement(m.a,{exact:!0,path:"/react/:environment/:service",component:y}))}),null)),document.querySelector("#root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.189f5ad6.chunk.js.map