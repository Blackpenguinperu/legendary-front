(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[62],{103:function(t,e,n){"use strict";var a=n(14),o=n(17),i=n(8),s=n.n(i),d=n(67),r=n.n(d),p=n(88),l=n.n(p),c=n(89),g=["className","cssModule","color","body","inverse","outline","tag","innerRef"],x={tag:c.tagPropType,inverse:r.a.bool,color:r.a.string,body:r.a.bool,outline:r.a.bool,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])},b=function(t){var e=t.className,n=t.cssModule,i=t.color,d=t.body,r=t.inverse,p=t.outline,x=t.tag,b=t.innerRef,m=Object(o.a)(t,g),h=Object(c.mapToCssModules)(l()(e,"card",!!r&&"text-white",!!d&&"card-body",!!i&&(p?"border":"bg")+"-"+i),n);return s.a.createElement(x,Object(a.a)({},m,{className:h,ref:b}))};b.propTypes=x,b.defaultProps={tag:"div"},e.a=b},104:function(t,e,n){"use strict";var a=n(14),o=n(17),i=n(8),s=n.n(i),d=n(67),r=n.n(d),p=n(88),l=n.n(p),c=n(89),g=["className","listClassName","cssModule","children","tag","listTag","aria-label"],x={tag:c.tagPropType,listTag:c.tagPropType,className:r.a.string,listClassName:r.a.string,cssModule:r.a.object,children:r.a.node,"aria-label":r.a.string},b=function(t){var e=t.className,n=t.listClassName,i=t.cssModule,d=t.children,r=t.tag,p=t.listTag,x=t["aria-label"],b=Object(o.a)(t,g),m=Object(c.mapToCssModules)(l()(e),i),h=Object(c.mapToCssModules)(l()("breadcrumb",n),i);return s.a.createElement(r,Object(a.a)({},b,{className:m,"aria-label":x}),s.a.createElement(p,{className:h},d))};b.propTypes=x,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},e.a=b},105:function(t,e,n){"use strict";var a=n(14),o=n(17),i=n(8),s=n.n(i),d=n(67),r=n.n(d),p=n(88),l=n.n(p),c=n(89),g=["className","cssModule","active","tag"],x={tag:c.tagPropType,active:r.a.bool,className:r.a.string,cssModule:r.a.object},b=function(t){var e=t.className,n=t.cssModule,i=t.active,d=t.tag,r=Object(o.a)(t,g),p=Object(c.mapToCssModules)(l()(e,!!i&&"active","breadcrumb-item"),n);return s.a.createElement(d,Object(a.a)({},r,{className:p,"aria-current":i?"page":void 0}))};b.propTypes=x,b.defaultProps={tag:"li"},e.a=b},108:function(t,e,n){"use strict";var a=n(14),o=n(17),i=n(8),s=n.n(i),d=n(67),r=n.n(d),p=n(88),l=n.n(p),c=n(89),g=["className","cssModule","innerRef","tag"],x={tag:c.tagPropType,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])},b=function(t){var e=t.className,n=t.cssModule,i=t.innerRef,d=t.tag,r=Object(o.a)(t,g),p=Object(c.mapToCssModules)(l()(e,"card-body"),n);return s.a.createElement(d,Object(a.a)({},r,{className:p,ref:i}))};b.propTypes=x,b.defaultProps={tag:"div"},e.a=b},370:function(t,e,n){"use strict";var a=n(14),o=n(17),i=n(8),s=n.n(i),d=n(67),r=n.n(d),p=n(88),l=n.n(p),c=n(89),g=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],x={className:r.a.string,cssModule:r.a.object,size:r.a.string,bordered:r.a.bool,borderless:r.a.bool,striped:r.a.bool,dark:r.a.bool,hover:r.a.bool,responsive:r.a.oneOfType([r.a.bool,r.a.string]),tag:c.tagPropType,responsiveTag:c.tagPropType,innerRef:r.a.oneOfType([r.a.func,r.a.string,r.a.object])},b=function(t){var e=t.className,n=t.cssModule,i=t.size,d=t.bordered,r=t.borderless,p=t.striped,x=t.dark,b=t.hover,m=t.responsive,h=t.tag,j=t.responsiveTag,f=t.innerRef,O=Object(o.a)(t,g),u=Object(c.mapToCssModules)(l()(e,"table",!!i&&"table-"+i,!!d&&"table-bordered",!!r&&"table-borderless",!!p&&"table-striped",!!x&&"table-dark",!!b&&"table-hover"),n),y=s.a.createElement(h,Object(a.a)({},O,{ref:f,className:u}));if(m){var v=Object(c.mapToCssModules)(!0===m?"table-responsive":"table-responsive-"+m,n);return s.a.createElement(j,{className:v},y)}return y};b.propTypes=x,b.defaultProps={tag:"table",responsiveTag:"div"},e.a=b},95:function(t,e,n){"use strict";n(8);var a=n(104),o=n(105),i=n(93),s=n(91),d=n(10),r=n(21),p=function(t){return"/".concat(t)===d.b?Object(r.jsx)(s.a,{id:"menu.home"}):Object(r.jsx)(s.a,{id:"".concat(t)})},l=function(t,e){return t.split(e)[0]+e},c=function(t){var e=t.match.path.substr(1),n=e.split("/");return n[n.length-1].indexOf(":")>-1&&(n=n.filter((function(t){return-1===t.indexOf(":")}))),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(a.a,{className:"pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block",children:n.map((function(t,a){return Object(r.jsx)(o.a,{active:n.length===a+1,children:n.length!==a+1?Object(r.jsx)(i.b,{to:"/".concat(l(e,t)),children:p(t)}):p(t)},a)}))})})};e.a=function(t){var e=t.heading,n=t.match;return Object(r.jsxs)(r.Fragment,{children:[e&&Object(r.jsx)("h1",{children:Object(r.jsx)(s.a,{id:e})}),Object(r.jsx)(c,{match:n})]})}},989:function(t,e,n){"use strict";n.r(e);n(8);var a=n(310),o=n(103),i=n(108),s=n(370),d=n(95),r=n(94),p=n(91),l=n(21);e.default=function(t){var e=t.match;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a.a,{children:Object(l.jsxs)(r.a,{xxs:"12",children:[Object(l.jsx)(d.a,{heading:"menu.invoice",match:e}),Object(l.jsx)(r.b,{className:"mb-5"})]})}),Object(l.jsx)(a.a,{children:Object(l.jsx)(r.a,{xxs:"12",children:Object(l.jsx)(o.a,{className:"mb-5",children:Object(l.jsx)(i.a,{children:Object(l.jsx)(p.a,{id:"pages.invoice-info"})})})})}),Object(l.jsx)(a.a,{children:Object(l.jsx)(r.a,{xxs:"12",children:Object(l.jsx)("h3",{className:"mb-4",children:Object(l.jsx)(p.a,{id:"pages.react-version"})})})}),Object(l.jsx)(a.a,{className:"invoice-react",children:Object(l.jsx)(r.a,{xxs:"12",className:"mb-4",children:Object(l.jsx)(o.a,{className:"mb-5 invoice-contents",children:Object(l.jsxs)(i.a,{className:"d-flex flex-column justify-content-between",children:[Object(l.jsxs)("div",{className:"d-flex flex-column",children:[Object(l.jsxs)("div",{className:"d-flex flex-row justify-content-between pt-2 pb-2",children:[Object(l.jsx)("div",{className:"d-flex align-self-center",children:Object(l.jsx)("img",{src:"https://coloredstrategies.com/mailing/gogo.png",alt:"Logo"})}),Object(l.jsx)("div",{className:"d-flex w-30 text-right align-self-center",children:Object(l.jsxs)("p",{className:"text-small text-semi-muted mb-0",children:["ColoredStrategies Inc 35 Little Russell St. Bloomsburg London,UK",Object(l.jsx)("br",{}),"784 451 12 47"]})})]}),Object(l.jsx)("div",{className:"border-bottom pt-4 mb-5"}),Object(l.jsxs)("div",{className:"d-flex flex-row justify-content-between mb-5",children:[Object(l.jsxs)("div",{className:"d-flex flex-column w-70 mr-2 p-4 text-semi-muted bg-semi-muted",children:[Object(l.jsx)("p",{className:"mb-0",children:"Latashia Nagy"}),Object(l.jsx)("p",{className:"mb-0",children:"100-148 Warwick Trfy, Kansas City, USA"})]}),Object(l.jsxs)("div",{className:"d-flex w-30 flex-column text-right p-4 text-semi-muted bg-semi-muted",children:[Object(l.jsx)("p",{className:"mb-0",children:"Invoice #: 741"}),Object(l.jsx)("p",{className:"mb-0",children:"02.02.2019"})]})]}),Object(l.jsxs)(s.a,{borderless:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:"text-muted text-extra-small mb-2",children:"ITEM NAME"}),Object(l.jsx)("th",{className:"text-muted text-extra-small mb-2",children:"COUNT"}),Object(l.jsx)("th",{className:"text-right text-muted text-extra-small mb-2",children:"PRICE"})]})}),Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Marble Cake"}),Object(l.jsx)("td",{children:"3 pcs"}),Object(l.jsx)("td",{className:"text-right",children:"$ 14.82"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Chocolate Cake"}),Object(l.jsx)("td",{children:"2 pcs"}),Object(l.jsx)("td",{className:"text-right",children:"$ 8.97"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Fat Rascal"}),Object(l.jsx)("td",{children:"2 pcs"}),Object(l.jsx)("td",{className:"text-right",children:"$ 18.24"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Cremeschnitte"}),Object(l.jsx)("td",{children:"2 pcs"}),Object(l.jsx)("td",{className:"text-right",children:"$ 4.24"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Cheesecake"}),Object(l.jsx)("td",{children:"3 pcs"}),Object(l.jsx)("td",{className:"text-right",children:"$ 6.27"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Magdalena"}),Object(l.jsx)("td",{children:"2 pcs"}),Object(l.jsx)("td",{className:"text-right",children:"$ 10.97"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Genoise"}),Object(l.jsx)("td",{children:"2 pcs"}),Object(l.jsx)("td",{className:"text-right",children:"$ 21.24"})]})]})]})]}),Object(l.jsxs)("div",{className:"d-flex flex-column",children:[Object(l.jsx)("div",{className:"border-bottom pt-3 mb-5"}),Object(l.jsx)(s.a,{borderless:!0,className:"d-flex justify-content-end",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-semi-muted",children:"Subtotal :"}),Object(l.jsx)("td",{className:"text-right",children:"$ 61.82"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-semi-muted",children:"Tax :"}),Object(l.jsx)("td",{className:"text-right",children:"$ 61.82"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"text-semi-muted",children:"Shipping :"}),Object(l.jsx)("td",{className:"text-right",children:"$ 3.21"})]}),Object(l.jsxs)("tr",{className:"font-weight-bold",children:[Object(l.jsx)("td",{className:"text-semi-muted",children:"Total :"}),Object(l.jsx)("td",{className:"text-right",children:"$ 68.14"})]})]})}),Object(l.jsx)("div",{className:"border-bottom pt-3 mb-5"}),Object(l.jsxs)("p",{className:"text-muted text-small text-center",children:["Invoice was created on a computer and is valid without the signature and seal."," "]})]})]})})})}),Object(l.jsx)(a.a,{children:Object(l.jsx)(r.a,{xxs:"12",children:Object(l.jsx)("h3",{className:"mb-4",children:Object(l.jsx)(p.a,{id:"pages.inline-version"})})})}),Object(l.jsx)(a.a,{className:"invoice",children:Object(l.jsx)(r.a,{xxs:"12",className:"mb-4",children:Object(l.jsx)("div",{className:"content",dangerouslySetInnerHTML:{__html:'<div className="invoice-contents" style="background-color:#ffffff; height:1200px; max-width:830px; font-family: Helvetica,Arial,sans-serif !important; position: relative;">\n                                <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="width:100%; background-color:#ffffff;border-collapse:separate !important; border-spacing:0;color:#242128; margin:0;padding:30px; padding-top: 20px;"\n                                    heigth="auto">\n        \n                                    <tbody>\n                                        <tr>\n                                            <td align="left" valign="center" style="padding-bottom:35px; padding-top:15px; border-top:0;width:100% !important;">\n                                                <img src="https://coloredstrategies.com/mailing/gogo.png" />\n                                            </td>\n                                            <td align="right" valign="center" style="padding-bottom:20px;border-top:0;width:100% !important;">\n                                                <p style="color: #8f8f8f; font-weight: normal; line-height: 1.2; font-size: 12px; white-space: nowrap; ">\n                                                    ColoredStrategies Inc<br> 35 Little Russell St. Bloomsburg London,UK<br>784 451 12 47\n                                                </p>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td colspan="2" style="padding-top:30px; border-top:1px solid #f1f0f0">\n                                                <table style="width: 100%;">\n                                                    <tbody>\n                                                        <tr>\n                                                            <td style="vertical-align:middle; border-radius: 3px; padding:30px; background-color: #f9f9f9; border-right: 5px solid white;">\n                                                                <p style="color:#303030; font-size: 14px;  line-height: 1.6; margin:0; padding:0;">\n                                                                    Latashia Nagy<br>100-148 Warwick Trfy, Kansas City, USA\n                                                                </p>\n                                                            </td>\n        \n                                                            <td style="text-align: right; padding-top:0px; padding-bottom:0; vertical-align:middle; padding:30px; background-color: #f9f9f9; border-radius: 3px; border-left: 5px solid white;">\n                                                                <p style="color:#8f8f8f; font-size: 14px; padding: 0; line-height: 1.6; margin:0; ">\n                                                                    Invoice #: 741<br>\n                                                                    02.02.2019\n                                                                </p>\n                                                            </td>\n                                                        </tr>\n                                                    </tbody>\n                                                </table>\n                                                <table style="width: 100%; margin-top:40px;">\n                                                    <thead>\n                                                        <tr>\n                                                            <th style="text-align:left; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;">\n                                                                ITEM NAME\n                                                            </th>\n                                                            <th style="text-align:left; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;">\n                                                                COUNT\n                                                            </th>\n                                                            <th style="text-align:right; font-size: 10px; color:#8f8f8f; padding-bottom: 15px; padding-top:10px; padding-bottom:10px;">\n                                                                PRICE\n                                                            </th>\n                                                        </tr>\n                                                    </thead>\n                                                    <tbody>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Marble\n                                                                    Cake</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">3\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    14.82</p>\n                                                            </td>\n                                                        </tr>\n\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Chocolate\n                                                                    Cake</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    8.97</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Fat\n                                                                    Rascal</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    18.24</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Cremeschnitte</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    4.24</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Cheesecake</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">3\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    6.27</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Magdalena</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    10.97</p>\n                                                            </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td style="padding-top:0px; padding-bottom:5px; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; margin-bottom:0; color:#303030; font-weight:500; margin-top: 10px;">Genoise</p>\n                                                            </td>\n                                                            <td style="padding-top:10px; padding-bottom:10px;">\n                                                                <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1; color:#909090; margin-top:0px; margin-bottom:0;">2\n                                                                    pcs</p>\n                                                            </td>\n                                                            <td style="padding-top:0px; padding-bottom:0; text-align: right; padding-top:10px; padding-bottom:10px;">\n                                                                <p style="font-size: 13px; line-height: 1; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap;">$\n                                                                    21.24</p>\n                                                            </td>\n                                                        </tr>\n                                                        \n                                                    </tbody>\n                                                </table>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n        \n                                <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="position:absolute; bottom:0; width:100%; background-color:#ffffff;border-collapse:separate !important; border-spacing:0;color:#242128; margin:0;padding:30px; padding-top: 20px;"\n                                    heigth="auto">\n                                    <tr>\n                                        <td colspan="3" style="border-top:1px solid #f1f0f0">&nbsp;</td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" style="width: 100%;padding-top:10px; padding-bottom:10px;">\n                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">\n                                                Subtotal : </p>\n                                        </td>\n                                        <td style="padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;">\n                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$\n                                                61.82</p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" style="width: 100%;padding-top:10px; padding-bottom:10px;">\n                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">\n                                                Tax : </p>\n                                        </td>\n                                        <td style="padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;">\n                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$\n                                                2.18</p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" style="width: 100%;padding-top:10px; padding-bottom:10px;">\n                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">\n                                                Shipping : </p>\n                                        </td>\n                                        <td style="padding-top:0px; text-align: right;padding-top:10px; padding-bottom:10px;">\n                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px">$\n                                                3.21</p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="2" style=" width: 100%; padding-bottom:15px; padding-top:10px;">\n                                            <p href="#" style="font-size: 13px; text-decoration: none; line-height: 1.6; color:#909090; margin-top:0px; margin-bottom:0; text-align: right;">\n                                                <strong>Total : </strong></p>\n                                        </td>\n                                        <td style="padding-top:0px; text-align: right; padding-bottom:15px; padding-top:10px;">\n                                            <p style="font-size: 13px; line-height: 1.6; color:#303030; margin-bottom:0; margin-top:0; vertical-align:top; white-space:nowrap; margin-left:15px"><strong>$\n                                                    68.14</strong></p>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="3" style="border-top:1px solid #f1f0f0">&nbsp;</td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan="3" style="text-align:center;">\n                                            <p style="color: #909090; font-size:11px; text-align:center;">Invoice was created\n                                                on a computer and\n                                                is valid without the signature and seal. </p>\n                                        </td>\n                                    </tr>\n                                </table>\n                            </div>\n                    \n                    '}})})})]})}}}]);
//# sourceMappingURL=miscellaneous-invoice.d3c23f61.chunk.js.map