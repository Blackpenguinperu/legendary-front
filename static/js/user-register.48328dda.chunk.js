(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[85],{132:function(e,n,t){"use strict";t.d(n,"F",(function(){return i})),t.d(n,"a",(function(){return s})),t.d(n,"f",(function(){return a})),t.d(n,"h",(function(){return r})),t.d(n,"i",(function(){return c})),t.d(n,"g",(function(){return o})),t.d(n,"A",(function(){return l.k})),t.d(n,"l",(function(){return l.a})),t.d(n,"y",(function(){return l.g})),t.d(n,"x",(function(){return l.d})),t.d(n,"z",(function(){return l.h})),t.d(n,"d",(function(){return m.a})),t.d(n,"t",(function(){return m.d})),t.d(n,"u",(function(){return m.f})),t.d(n,"v",(function(){return m.h})),t.d(n,"w",(function(){return m.i})),t.d(n,"E",(function(){return m.j})),t.d(n,"b",(function(){return f.a})),t.d(n,"e",(function(){return f.b})),t.d(n,"j",(function(){return f.c})),t.d(n,"m",(function(){return f.d})),t.d(n,"n",(function(){return f.g})),t.d(n,"C",(function(){return f.j})),t.d(n,"c",(function(){return b.a})),t.d(n,"p",(function(){return b.d})),t.d(n,"q",(function(){return b.f})),t.d(n,"r",(function(){return b.h})),t.d(n,"s",(function(){return b.i})),t.d(n,"D",(function(){return b.j})),t.d(n,"B",(function(){return h.e})),t.d(n,"o",(function(){return h.b})),t.d(n,"k",(function(){return h.a}));var u=t(2),r=function(e){return{type:u.t,payload:e}},a=function(e){return{type:u.s,payload:e}},s=function(e,n){var t=!n.indexOf(e)>-1?"".concat(n," ").concat(e):n;return{type:u.v,payload:t}},c=function(e){var n=e?e.split(" ").filter((function(e){return""!==e&&"sub-show-temporary"!==e})):"",t="";return t=n.includes("main-show-temporary")?n.filter((function(e){return"main-show-temporary"!==e})).join(" "):"".concat(n.join(" ")," main-show-temporary"),{type:u.u,payload:{containerClassnames:t,menuClickCount:0}}},i=function(e,n,t){var r=n?n.split(" ").filter((function(e){return""!==e})):"",a="";return t||(!r.includes("menu-default")||e%4!==0&&e%4!==3||(e=1),r.includes("menu-sub-hidden")&&e%4===2&&(e=0),!r.includes("menu-hidden")||e%4!==2&&e%4!==3||(e=0)),e%4===0?(r.includes("menu-default")&&r.includes("menu-sub-hidden")?a="menu-default menu-sub-hidden":r.includes("menu-default")?a="menu-default":r.includes("menu-sub-hidden")?a="menu-sub-hidden":r.includes("menu-hidden")&&(a="menu-hidden"),e=0):e%4===1?r.includes("menu-default")&&r.includes("menu-sub-hidden")?a="menu-default menu-sub-hidden main-hidden sub-hidden":r.includes("menu-default")?a="menu-default sub-hidden":r.includes("menu-sub-hidden")?a="menu-sub-hidden main-hidden sub-hidden":r.includes("menu-hidden")&&(a="menu-hidden main-show-temporary"):e%4===2?r.includes("menu-default")&&r.includes("menu-sub-hidden")?a="menu-default menu-sub-hidden sub-hidden":r.includes("menu-default")?a="menu-default main-hidden sub-hidden":r.includes("menu-sub-hidden")?a="menu-sub-hidden sub-hidden":r.includes("menu-hidden")&&(a="menu-hidden main-show-temporary sub-show-temporary"):e%4===3&&(r.includes("menu-default")&&r.includes("menu-sub-hidden")?a="menu-default menu-sub-hidden sub-show-temporary":r.includes("menu-default")?a="menu-default sub-hidden":r.includes("menu-sub-hidden")?a="menu-sub-hidden sub-show-temporary":r.includes("menu-hidden")&&(a="menu-hidden main-show-temporary")),r.includes("menu-mobile")&&(a+=" menu-mobile"),{type:u.w,payload:{containerClassnames:a,menuClickCount:e}}},d=t(13),o=function(e){return Object(d.h)(e),{type:u.a,payload:e}},l=t(15),m=t(23),f=t(18),b=t(24),h=t(25)},210:function(e,n,t){"use strict";var u=t(14),r=t(17),a=t(8),s=t.n(a),c=t(67),i=t.n(c),d=t(88),o=t.n(d),l=t(89),m=["className","cssModule","row","disabled","check","inline","tag"],f={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:l.tagPropType,className:i.a.string,cssModule:i.a.object},b=function(e){var n=e.className,t=e.cssModule,a=e.row,c=e.disabled,i=e.check,d=e.inline,f=e.tag,b=Object(r.a)(e,m),h=Object(l.mapToCssModules)(o()(n,!!a&&"row",i?"form-check":"form-group",!(!i||!d)&&"form-check-inline",!(!i||!c)&&"disabled"),t);return"fieldset"===f&&(b.disabled=c),s.a.createElement(f,Object(u.a)({},b,{className:h}))};b.propTypes=f,b.defaultProps={tag:"div"},n.a=b},309:function(e,n,t){"use strict";n.a="54.183.246.192:9000"},423:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return m}));var u=t(12),r=t(4),a=t.n(r),s=t(237),c=t.n(s),i=t(309),d="http://".concat(i.a,"/api/v1/users");function o(e,n){return l.apply(this,arguments)}function l(){return(l=Object(u.a)(a.a.mark((function e(n,t){var u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c()({method:"POST",url:"".concat(d,"/login"),auth:{username:n,password:t}});case 3:return u=e.sent,e.abrupt("return",u.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR OF CONNECTION BACK =>",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e,n){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(a.a.mark((function e(n,t){var u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c()({method:"POST",url:"".concat(d,"/register"),data:{email:n,password:t}});case 3:return u=e.sent,e.abrupt("return",u.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR OF CONNECTION BACK =>",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},841:function(e,n,t){"use strict";t.r(n);var u=t(12),r=t(92),a=t(4),s=t.n(a),c=t(8),i=t(310),d=t(103),o=t(121),l=t(238),m=t(210),f=t(266),b=t(159),h=t(267),j=t(93),p=t(34),O=t(132),x=t(91),y=t(94),w=t(423),g=t(21);n.default=Object(p.b)((function(){}),{registerUserAction:O.z})((function(e){e.history;var n=Object(c.useState)("demo@testemail.com"),t=Object(r.a)(n,1)[0],a=Object(c.useState)("test123"),p=Object(r.a)(a,1)[0],O=Object(c.useState)("Sarah Kortney"),v=Object(r.a)(O,1)[0],N=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t||""===p){e.next=3;break}return e.next=3,Object(w.b)(t,p);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(i.a,{className:"h-100",children:Object(g.jsx)(y.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(g.jsxs)(d.a,{className:"auth-card",children:[Object(g.jsxs)("div",{className:"position-relative image-side ",children:[Object(g.jsx)("p",{className:"text-white h2",children:"BEST EVENTS"}),Object(g.jsxs)("p",{className:"white mb-0",children:["Please use this form to register. ",Object(g.jsx)("br",{}),"If you are a member, please"," ",Object(g.jsx)(j.b,{to:"/user/login",className:"white",children:"login"}),"."]})]}),Object(g.jsxs)("div",{className:"form-side",children:[Object(g.jsx)(j.b,{to:"/",className:"white",children:Object(g.jsx)("span",{className:"logo-single"})}),Object(g.jsx)(o.a,{className:"mb-4",children:Object(g.jsx)(x.a,{id:"user.register"})}),Object(g.jsxs)(l.a,{children:[Object(g.jsxs)(m.a,{className:"form-group has-float-label  mb-4",children:[Object(g.jsx)(f.a,{children:Object(g.jsx)(x.a,{id:"user.fullname"})}),Object(g.jsx)(b.a,{type:"name",defaultValue:v})]}),Object(g.jsxs)(m.a,{className:"form-group has-float-label  mb-4",children:[Object(g.jsx)(f.a,{children:Object(g.jsx)(x.a,{id:"user.email"})}),Object(g.jsx)(b.a,{type:"email",defaultValue:t})]}),Object(g.jsxs)(m.a,{className:"form-group has-float-label  mb-4",children:[Object(g.jsx)(f.a,{children:Object(g.jsx)(x.a,{id:"user.password",defaultValue:p})}),Object(g.jsx)(b.a,{type:"password"})]}),Object(g.jsx)("div",{className:"d-flex justify-content-end align-items-center",children:Object(g.jsx)(h.a,{color:"primary",className:"btn-shadow",size:"lg",onClick:function(){return N()},children:Object(g.jsx)(x.a,{id:"user.register-button"})})})]})]})]})})})}))},91:function(e,n,t){"use strict";var u=t(1),r=(t(8),t(468)),a=t(304),s=t(21);n.a=Object(a.c)((function(e){return Object(s.jsx)(r.a,Object(u.a)({},e))}),{withRef:!1})},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return c}));var u=t(1),r=(t(8),t(308)),a=t(21),s=function(e){return Object(a.jsx)(r.a,Object(u.a)(Object(u.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))},c=function(e){var n=e.className;return Object(a.jsx)("div",{className:"separator ".concat(n)})}}}]);
//# sourceMappingURL=user-register.48328dda.chunk.js.map