(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[31],{103:function(e,t,a){"use strict";var s=a(14),c=a(17),i=a(8),r=a.n(i),l=a(67),n=a.n(l),o=a(88),d=a.n(o),b=a(89),m=["className","cssModule","color","body","inverse","outline","tag","innerRef"],j={tag:b.tagPropType,inverse:n.a.bool,color:n.a.string,body:n.a.bool,outline:n.a.bool,className:n.a.string,cssModule:n.a.object,innerRef:n.a.oneOfType([n.a.object,n.a.string,n.a.func])},u=function(e){var t=e.className,a=e.cssModule,i=e.color,l=e.body,n=e.inverse,o=e.outline,j=e.tag,u=e.innerRef,g=Object(c.a)(e,m),p=Object(b.mapToCssModules)(d()(t,"card",!!n&&"text-white",!!l&&"card-body",!!i&&(o?"border":"bg")+"-"+i),a);return r.a.createElement(j,Object(s.a)({},g,{className:p,ref:u}))};u.propTypes=j,u.defaultProps={tag:"div"},t.a=u},104:function(e,t,a){"use strict";var s=a(14),c=a(17),i=a(8),r=a.n(i),l=a(67),n=a.n(l),o=a(88),d=a.n(o),b=a(89),m=["className","listClassName","cssModule","children","tag","listTag","aria-label"],j={tag:b.tagPropType,listTag:b.tagPropType,className:n.a.string,listClassName:n.a.string,cssModule:n.a.object,children:n.a.node,"aria-label":n.a.string},u=function(e){var t=e.className,a=e.listClassName,i=e.cssModule,l=e.children,n=e.tag,o=e.listTag,j=e["aria-label"],u=Object(c.a)(e,m),g=Object(b.mapToCssModules)(d()(t),i),p=Object(b.mapToCssModules)(d()("breadcrumb",a),i);return r.a.createElement(n,Object(s.a)({},u,{className:g,"aria-label":j}),r.a.createElement(o,{className:p},l))};u.propTypes=j,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=u},105:function(e,t,a){"use strict";var s=a(14),c=a(17),i=a(8),r=a.n(i),l=a(67),n=a.n(l),o=a(88),d=a.n(o),b=a(89),m=["className","cssModule","active","tag"],j={tag:b.tagPropType,active:n.a.bool,className:n.a.string,cssModule:n.a.object},u=function(e){var t=e.className,a=e.cssModule,i=e.active,l=e.tag,n=Object(c.a)(e,m),o=Object(b.mapToCssModules)(d()(t,!!i&&"active","breadcrumb-item"),a);return r.a.createElement(l,Object(s.a)({},n,{className:o,"aria-current":i?"page":void 0}))};u.propTypes=j,u.defaultProps={tag:"li"},t.a=u},1075:function(e,t,a){"use strict";a.r(t);var s=a(1),c=(a(8),a(103)),i=a(108),r=a(310),l=a(121),n=a(94),o=a(95),d=a(91),b=a(539),m=a(241),j=a(21),u=function(e){var t=e.title,a=e.img,s=e.detail,r=e.badges;return Object(j.jsx)("div",{className:"glide-item",children:Object(j.jsxs)(c.a,{className:"flex-row",children:[Object(j.jsxs)("div",{className:"w-50 position-relative",children:[Object(j.jsx)("img",{className:"card-img-left",src:a,alt:t}),r&&r.map((function(e,t){return Object(j.jsx)("span",{className:"badge badge-pill badge-".concat(e.color," position-absolute ").concat(0===t?"badge-top-left":"badge-top-left-".concat(t+1)),children:e.title},t)}))]}),Object(j.jsx)("div",{className:"w-50",children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)("h6",{className:"mb-4",children:t}),Object(j.jsx)("footer",{children:Object(j.jsx)("p",{className:"text-muted text-small mb-0 font-weight-light",children:s})})]})})]})})},g=function(e){var t=e.title,a=e.img,s=e.category,r=e.detail,l=e.badges;return Object(j.jsx)("div",{className:"glide-item",children:Object(j.jsxs)(c.a,{className:"flex-row",children:[Object(j.jsx)("img",{className:"list-thumbnail responsive border-0 card-img-left",src:a,alt:t}),Object(j.jsx)("div",{className:"pl-2 d-flex flex-grow-1 min-width-zero",children:Object(j.jsxs)(i.a,{className:"align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero",children:[Object(j.jsx)("p",{className:"list-item-heading mb-1 truncate",children:t}),Object(j.jsx)("p",{className:"mb-0 text-muted text-small",children:s}),Object(j.jsx)("p",{className:"mb-0 text-muted text-small",children:r}),Object(j.jsx)("div",{children:l&&l.map((function(e,t){return Object(j.jsx)("span",{className:"badge badge-pill badge-".concat(e.color," ").concat(t<l.length&&"mr-1"),children:e.title},t)}))})]})})]})})},p=function(e){var t=e.title,a=e.img,s=e.detail,r=e.badges;return Object(j.jsx)("div",{className:"glide-item",children:Object(j.jsxs)(c.a,{children:[Object(j.jsxs)("div",{className:"position-relative",children:[Object(j.jsx)("img",{className:"card-img-top",src:a,alt:t}),r&&r.map((function(e,t){return Object(j.jsx)("span",{className:"badge badge-pill badge-".concat(e.color," position-absolute ").concat(0===t?"badge-top-left":"badge-top-left-".concat(t+1)),children:e.title},"badges_".concat(t))}))]}),Object(j.jsxs)(i.a,{children:[Object(j.jsx)("h6",{className:"mb-4",children:t}),Object(j.jsx)("footer",{children:Object(j.jsx)("p",{className:"text-muted text-small mb-0 font-weight-light",children:s})})]})]})})};t.default=function(e){var t=e.match;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(r.a,{children:Object(j.jsxs)(n.a,{xxs:"12",children:[Object(j.jsx)(o.a,{heading:"menu.carousel",match:t}),Object(j.jsx)(n.b,{className:"mb-5"})]})}),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(n.a,{xxs:"12",children:Object(j.jsx)(l.a,{children:Object(j.jsx)(d.a,{id:"carousel.basic"})})}),Object(j.jsx)(n.a,{xxs:"12",className:"pl-0 pr-0 mb-5",children:Object(j.jsx)(m.a,{settings:{gap:5,perView:3,type:"carousel",breakpoints:{600:{perView:1},1400:{perView:2}}},children:b.c.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(u,Object(s.a)({},e))},e.id)}))})})]}),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(n.a,{xxs:"12",children:Object(j.jsx)(l.a,{children:Object(j.jsx)(d.a,{id:"carousel.single"})})}),Object(j.jsx)(n.a,{xxs:"12",className:"pl-0 pr-0 mb-5",children:Object(j.jsx)(m.a,{settings:{gap:5,perView:1,type:"carousel"},children:b.c.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(g,Object(s.a)({},e))},e.id)}))})})]}),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(n.a,{xxs:"12",children:Object(j.jsx)(l.a,{children:Object(j.jsx)(d.a,{id:"carousel.without-controls"})})}),Object(j.jsx)(n.a,{xxs:"12",className:"pl-0 pr-0 mb-5",children:Object(j.jsx)(m.a,{settings:{gap:5,perView:4,type:"carousel",breakpoints:{480:{perView:1},800:{perView:2},1200:{perView:3}},hideNav:!0},children:b.c.map((function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(p,Object(s.a)({},e))},e.id)}))})})]})]})}},108:function(e,t,a){"use strict";var s=a(14),c=a(17),i=a(8),r=a.n(i),l=a(67),n=a.n(l),o=a(88),d=a.n(o),b=a(89),m=["className","cssModule","innerRef","tag"],j={tag:b.tagPropType,className:n.a.string,cssModule:n.a.object,innerRef:n.a.oneOfType([n.a.object,n.a.string,n.a.func])},u=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,l=e.tag,n=Object(c.a)(e,m),o=Object(b.mapToCssModules)(d()(t,"card-body"),a);return r.a.createElement(l,Object(s.a)({},n,{className:o,ref:i}))};u.propTypes=j,u.defaultProps={tag:"div"},t.a=u},121:function(e,t,a){"use strict";var s=a(14),c=a(17),i=a(8),r=a.n(i),l=a(67),n=a.n(l),o=a(88),d=a.n(o),b=a(89),m=["className","cssModule","tag"],j={tag:b.tagPropType,className:n.a.string,cssModule:n.a.object},u=function(e){var t=e.className,a=e.cssModule,i=e.tag,l=Object(c.a)(e,m),n=Object(b.mapToCssModules)(d()(t,"card-title"),a);return r.a.createElement(i,Object(s.a)({},l,{className:n}))};u.propTypes=j,u.defaultProps={tag:"div"},t.a=u},241:function(e,t,a){"use strict";var s=a(1),c=a(8),i=a.n(c),r=a(313),l=a(13),n=(a(314),a(21)),o=-1,d=-1;function b(e){var t,a,b=function(){clearTimeout(o),o=setTimeout((function(){a.update(),o=-1}),500)};Object(c.useEffect)((function(){return(a=new r.a(t,Object(s.a)(Object(s.a)({},e.settings),{},{direction:Object(l.f)().direction}))).mount(),a.on("resize",b),d=setTimeout((function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!1,!1),window.dispatchEvent(e)}),500),function(){clearTimeout(o),clearTimeout(d),a&&a.destroy()}}),[]);return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"glide",ref:function(e){return t=e},children:[Object(n.jsx)("div",{"data-glide-el":"track",className:"glide__track",children:Object(n.jsx)("div",{className:"glide__slides",children:e.children})}),!e.settings.hideNav&&Object(n.jsxs)("div",{className:"glide__arrows slider-nav","data-glide-el":"controls",children:[Object(n.jsx)("button",{type:"button",className:"glide__arrow glide__arrow--left left-arrow btn btn-link","data-glide-dir":"<",children:Object(n.jsx)("i",{className:"simple-icon-arrow-left"})}),Object(n.jsx)("div",{className:"glide__bullets slider-dot-container","data-glide-el":"controls[nav]",children:function(){for(var t=i.a.Children.count(e.children),a=[],s=0;s<t;s++)a.push(Object(n.jsx)("button",{type:"button",className:"glide__bullet slider-dot","data-glide-dir":"=".concat(s)},s));return a}()}),Object(n.jsx)("button",{type:"button",className:"glide__arrow glide__arrow--right right-arrow btn btn-link","data-glide-dir":">",children:Object(n.jsx)("i",{className:"simple-icon-arrow-right"})})]})]})})}b.defaultProps={settings:{}},t.a=b},539:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return i}));var s=[{id:1,title:"1 Homemade Cheesecake with Fresh Berries and Mint",img:"/assets/img/cards/thumb-1.jpg",detail:"10.12.2019",category:"Cupcakes",badges:[{color:"theme-1",title:"NEW"},{color:"theme-2",title:"ONHOLD"}]},{id:2,title:"2 Wedding Cake with Flowers Macarons and Blueberries",img:"/assets/img/cards/thumb-2.jpg",detail:"01.06.2019",category:"Cakes",badges:[{color:"theme-2",title:"DONE"},{color:"primary",title:"TRENDING"}]},{id:3,title:"3 Cheesecake with Chocolate Cookies and Cream Biscuits",img:"/assets/img/cards/thumb-3.jpg",detail:"27.05.2019",category:"Cupcakes",badges:[{color:"secondary",title:"PROCESSED"}]},{id:4,title:"4 Homemade Cheesecake with Fresh Berries and Mint",img:"/assets/img/cards/thumb-1.jpg",detail:"10.12.2019",category:"Cakes",badges:[{color:"primary",title:"NEW"}]},{id:5,title:"5 Cheesecake with Chocolate Cookies and Cream Biscuits",img:"/assets/img/cards/thumb-3.jpg",detail:"27.05.2019",category:"Cupcakes",badges:[{color:"theme-3",title:"PROCESSED"}]}],c=[{id:"large1",img:"/assets/img/products/parkin.jpg"},{id:"large2",img:"/assets/img/products/napoleonshat.jpg"},{id:"large3",img:"/assets/img/products/marble-cake.jpg"},{id:"large4",img:"/assets/img/products/fruitcake.jpg"},{id:"large5",img:"/assets/img/products/magdalena.jpg"},{id:"large6",img:"/assets/img/products/tea-loaf.jpg"}],i=[{id:"thumb1",img:"/assets/img/products/parkin-thumb.jpg"},{id:"thumb2",img:"/assets/img/products/napoleonshat-thumb.jpg"},{id:"thumb3",img:"/assets/img/products/marble-cake-thumb.jpg"},{id:"thumb4",img:"/assets/img/products/fruitcake-thumb.jpg"},{id:"thumb5",img:"/assets/img/products/magdalena-thumb.jpg"},{id:"thumb6",img:"/assets/img/products/tea-loaf-thumb.jpg"}]},95:function(e,t,a){"use strict";a(8);var s=a(104),c=a(105),i=a(93),r=a(91),l=a(10),n=a(21),o=function(e){return"/".concat(e)===l.b?Object(n.jsx)(r.a,{id:"menu.home"}):Object(n.jsx)(r.a,{id:"".concat(e)})},d=function(e,t){return e.split(t)[0]+t},b=function(e){var t=e.match.path.substr(1),a=t.split("/");return a[a.length-1].indexOf(":")>-1&&(a=a.filter((function(e){return-1===e.indexOf(":")}))),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(s.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:a.map((function(e,s){return Object(n.jsx)(c.a,{active:a.length===s+1,children:a.length!==s+1?Object(n.jsx)(i.b,{to:"/".concat(d(t,e)),children:o(e)}):o(e)},s)}))})})};t.a=function(e){var t=e.heading,a=e.match;return Object(n.jsxs)(n.Fragment,{children:[t&&Object(n.jsx)("h1",{children:Object(n.jsx)(r.a,{id:t})}),Object(n.jsx)(b,{match:a})]})}}}]);
//# sourceMappingURL=components-carousel.0dc7d20c.chunk.js.map