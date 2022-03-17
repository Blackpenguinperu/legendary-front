(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[15],{210:function(e,t,n){"use strict";var a=n(14),i=n(17),r=n(8),o=n.n(r),s=n(67),u=n.n(s),l=n(88),p=n.n(l),c=n(89),d=["className","cssModule","row","disabled","check","inline","tag"],f={children:u.a.node,row:u.a.bool,check:u.a.bool,inline:u.a.bool,disabled:u.a.bool,tag:c.tagPropType,className:u.a.string,cssModule:u.a.object},h=function(e){var t=e.className,n=e.cssModule,r=e.row,s=e.disabled,u=e.check,l=e.inline,f=e.tag,h=Object(i.a)(e,d),g=Object(c.mapToCssModules)(p()(t,!!r&&"row",u?"form-check":"form-group",!(!u||!l)&&"form-check-inline",!(!u||!s)&&"disabled"),n);return"fieldset"===f&&(h.disabled=s),o.a.createElement(f,Object(a.a)({},h,{className:g}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h},238:function(e,t,n){"use strict";var a=n(14),i=n(17),r=n(98),o=n(96),s=n(8),u=n.n(s),l=n(67),p=n.n(l),c=n(88),d=n.n(c),f=n(89),h=["className","cssModule","inline","tag","innerRef"],g={children:p.a.node,inline:p.a.bool,tag:f.tagPropType,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),className:p.a.string,cssModule:p.a.object},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(r.a)(n)),n.submit=n.submit.bind(Object(r.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.inline,o=e.tag,s=e.innerRef,l=Object(i.a)(e,h),p=Object(f.mapToCssModules)(d()(t,!!r&&"form-inline"),n);return u.a.createElement(o,Object(a.a)({},l,{ref:s,className:p}))},t}(s.Component);v.propTypes=g,v.defaultProps={tag:"form"},t.a=v},254:function(e,t,n){},440:function(e,t,n){var a,i,r;i=[e,t,n(8),n(67)],a=function(e,t,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r(n);function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r(a);var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function d(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function f(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function h(e){return window.clipboardData?window.clipboardData.getData("Text"):e.clipboardData?e.clipboardData.getData("text/plain"):""}function g(e){var t=e.tag,n=e.key,a=e.disabled,r=e.onRemove,o=e.classNameRemove,s=e.getTagDisplayValue,u=d(e,["tag","key","disabled","onRemove","classNameRemove","getTagDisplayValue"]);return i.default.createElement("span",c({key:n},u),s(t),!a&&i.default.createElement("a",{className:o,onClick:function(e){return r(n)}}))}function v(e){e.addTag;var t=d(e,["addTag"]),n=t.onChange,a=t.value,r=d(t,["onChange","value"]);return i.default.createElement("input",c({type:"text",onChange:n,value:a},r))}function y(e,t){return i.default.createElement("span",null,e,t)}function b(e){return e.split(" ").map((function(e){return e.trim()}))}var m={className:"react-tagsinput-input",placeholder:"Add a tag"},k=function(e){function t(){s(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={tag:"",isFocused:!1},e.focus=e.focus.bind(e),e.blur=e.blur.bind(e),e}return p(t,e),u(t,[{key:"_getTagDisplayValue",value:function(e){var t=this.props.tagDisplayProp;return t?e[t]:e}},{key:"_makeTag",value:function(e){var t=this.props.tagDisplayProp;return t?o({},t,e):e}},{key:"_removeTag",value:function(e){var t=this.props.value.concat([]);if(e>-1&&e<t.length){var n=t.splice(e,1);this.props.onChange(t,n,[e])}}},{key:"_clearInput",value:function(){this.hasControlledInput()?this.props.onChangeInput(""):this.setState({tag:""})}},{key:"_tag",value:function(){return this.hasControlledInput()?this.props.inputValue:this.state.tag}},{key:"_addTags",value:function(e){var t=this,n=this.props,a=n.validationRegex,i=n.onChange,r=n.onValidationReject,o=n.onlyUnique,s=n.maxTags,u=n.value;o&&(e=(e=f(e)).filter((function(e){return u.every((function(n){return t._getTagDisplayValue(n)!==t._getTagDisplayValue(e)}))})));var l=e.filter((function(e){return!a.test(t._getTagDisplayValue(e))}));if(e=(e=e.filter((function(e){return a.test(t._getTagDisplayValue(e))}))).filter((function(e){var n=t._getTagDisplayValue(e);return"function"===typeof n.trim?n.trim().length>0:n})),s>=0){var p=Math.max(s-u.length,0);e=e.slice(0,p)}if(r&&l.length>0&&r(l),e.length>0){for(var c=u.concat(e),d=[],h=0;h<e.length;h++)d.push(u.length+h);return i(c,e,d),this._clearInput(),!0}return l.length>0||this._clearInput(),!1}},{key:"_shouldPreventDefaultEventOnAdd",value:function(e,t,n){return!!e||13===n&&(this.props.preventSubmit||!this.props.preventSubmit&&!t)}},{key:"focus",value:function(){this.input&&"function"===typeof this.input.focus&&this.input.focus(),this.handleOnFocus()}},{key:"blur",value:function(){this.input&&"function"===typeof this.input.blur&&this.input.blur(),this.handleOnBlur()}},{key:"accept",value:function(){var e=this._tag();return""!==e&&(e=this._makeTag(e),this._addTags([e]))}},{key:"addTag",value:function(e){return this._addTags([e])}},{key:"clearInput",value:function(){this._clearInput()}},{key:"handlePaste",value:function(e){var t=this,n=this.props,a=n.addOnPaste,i=n.pasteSplit;if(a){e.preventDefault();var r=i(h(e)).map((function(e){return t._makeTag(e)}));this._addTags(r)}}},{key:"handleKeyDown",value:function(e){if(!e.defaultPrevented){var t=this.props,n=t.value,a=t.removeKeys,i=t.addKeys,r=""===this._tag(),o=e.keyCode,s=e.key,u=-1!==i.indexOf(o)||-1!==i.indexOf(s),l=-1!==a.indexOf(o)||-1!==a.indexOf(s);if(u){var p=this.accept();this._shouldPreventDefaultEventOnAdd(p,r,o)&&e.preventDefault()}l&&n.length>0&&r&&(e.preventDefault(),this._removeTag(n.length-1))}}},{key:"handleClick",value:function(e){e.target===this.div&&this.focus()}},{key:"handleChange",value:function(e){var t=this.props.onChangeInput,n=this.props.inputProps.onChange,a=e.target.value;n&&n(e),this.hasControlledInput()?t(a):this.setState({tag:a})}},{key:"handleOnFocus",value:function(e){var t=this.props.inputProps.onFocus;t&&t(e),this.setState({isFocused:!0})}},{key:"handleOnBlur",value:function(e){var t=this.props.inputProps.onBlur;if(this.setState({isFocused:!1}),null!=e&&(t&&t(e),this.props.addOnBlur)){var n=this._makeTag(e.target.value);this._addTags([n])}}},{key:"handleRemove",value:function(e){this._removeTag(e)}},{key:"inputProps",value:function(){var e=this.props.inputProps,t=(e.onChange,e.onFocus,e.onBlur,d(e,["onChange","onFocus","onBlur"])),n=c({},m,t);return this.props.disabled&&(n.disabled=!0),n}},{key:"inputValue",value:function(e){return e.currentValue||e.inputValue||""}},{key:"hasControlledInput",value:function(){var e=this.props,t=e.inputValue;return"function"===typeof e.onChangeInput&&"string"===typeof t}},{key:"componentDidMount",value:function(){this.hasControlledInput()||this.setState({tag:this.inputValue(this.props)})}},{key:"componentWillReceiveProps",value:function(e){this.hasControlledInput()||this.inputValue(e)&&this.setState({tag:this.inputValue(e)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,a=(t.onChange,t.tagProps),r=t.renderLayout,o=t.renderTag,s=t.renderInput,u=(t.addKeys,t.removeKeys,t.className),l=t.focusedClassName,p=(t.addOnBlur,t.addOnPaste,t.inputProps,t.pasteSplit,t.onlyUnique,t.maxTags,t.validationRegex,t.disabled);t.tagDisplayProp,t.inputValue,t.onChangeInput,d(t,["value","onChange","tagProps","renderLayout","renderTag","renderInput","addKeys","removeKeys","className","focusedClassName","addOnBlur","addOnPaste","inputProps","pasteSplit","onlyUnique","maxTags","validationRegex","disabled","tagDisplayProp","inputValue","onChangeInput"]),this.state.isFocused&&(u+=" "+l);var f=n.map((function(t,n){return o(c({key:n,tag:t,onRemove:e.handleRemove.bind(e),disabled:p,getTagDisplayValue:e._getTagDisplayValue.bind(e)},a))})),h=s(c({ref:function(t){e.input=t},value:this._tag(),onPaste:this.handlePaste.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onFocus:this.handleOnFocus.bind(this),onBlur:this.handleOnBlur.bind(this),addTag:this.addTag.bind(this)},this.inputProps()));return i.default.createElement("div",{ref:function(t){e.div=t},onClick:this.handleClick.bind(this),className:u},r(f,h))}}]),t}(i.default.Component);k.defaultProps={className:"react-tagsinput",focusedClassName:"react-tagsinput--focused",addKeys:[9,13],addOnBlur:!1,addOnPaste:!1,inputProps:{},removeKeys:[8],renderInput:v,renderTag:g,renderLayout:y,pasteSplit:b,tagProps:{className:"react-tagsinput-tag",classNameRemove:"react-tagsinput-remove"},onlyUnique:!1,maxTags:-1,validationRegex:/.*/,disabled:!1,tagDisplayProp:null,preventSubmit:!0},t.default=k,e.exports=t.default},void 0===(r="function"===typeof a?a.apply(t,i):a)||(e.exports=r)},441:function(e,t,n){},764:function(e,t,n){}}]);
//# sourceMappingURL=15.797cadc5.chunk.js.map