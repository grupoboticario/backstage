/*! For license information please see 432119ff.bb84249f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[945154],{667090:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>u,toc:()=>a});var n=t(824246),o=t(511151);const c={id:"plugin-cicd-statistics.aborterror",title:"AbortError",description:"API reference for AbortError"},i=void 0,u={unversionedId:"reference/plugin-cicd-statistics.aborterror",id:"reference/plugin-cicd-statistics.aborterror",title:"AbortError",description:"API reference for AbortError",source:"@site/../docs/reference/plugin-cicd-statistics.aborterror.md",sourceDirName:"reference",slug:"/reference/plugin-cicd-statistics.aborterror",permalink:"/docs/reference/plugin-cicd-statistics.aborterror",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-cicd-statistics.aborterror.md",tags:[],version:"current",frontMatter:{id:"plugin-cicd-statistics.aborterror",title:"AbortError",description:"API reference for AbortError"}},s={},a=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-cicd-statistics",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-cicd-statistics"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-cicd-statistics.aborterror",children:(0,n.jsx)(r.code,{children:"AbortError"})})]}),"\n",(0,n.jsx)(r.p,{children:"If the Api implements support for aborting the fetching of builds, throw an AbortError of this type (or any other error with name === 'AbortError')."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class AbortError extends Error \n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.b,{children:"Extends:"})," Error"]})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var a in c=Object(arguments[s]))t.call(c,a)&&(u[a]=c[a]);if(r){i=r(c);for(var f=0;f<i.length;f++)n.call(c,i[f])&&(u[i[f]]=c[i[f]])}}return u}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,c={},a=null,f=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(f=r.ref),r)u.call(r,n)&&!s.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:f,props:c,_owner:i.current}}r.jsx=a,r.jsxs=a},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var i=60109,u=60110,s=60112;r.Suspense=60113;var a=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),i=l("react.provider"),u=l("react.context"),s=l("react.forward_ref"),r.Suspense=l("react.suspense"),a=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var g=v.prototype=new m;g.constructor=v,n(g,b.prototype),g.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,c={},i=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(i=""+r.key),r)j.call(r,n)&&!E.hasOwnProperty(n)&&(c[n]=r[n]);var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];c.children=a}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===c[n]&&(c[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:u,props:c,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,t,n,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var s=!1;if(null===e)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case c:s=!0}}if(s)return i=i(s=e),e=""===n?"."+x(s,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(k,"$&/")+"/"),S(i,r,t,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),r.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var a=0;a<e.length;a++){var f=n+x(u=e[a],a);s+=S(u,r,t,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),a=0;!(u=e.next()).done;)s+=S(u=u.value,r,t,f=n+x(u,a++),i);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function C(e,r,t){if(null==e)return e;var n=[],o=0;return S(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function A(){var e=$.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=b,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var c=n({},e.props),i=e.key,u=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,s=_.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in r)j.call(r,f)&&!E.hasOwnProperty(f)&&(c[f]=void 0===r[f]&&void 0!==a?a[f]:r[f])}var f=arguments.length-2;if(1===f)c.children=t;else if(1<f){a=Array(f);for(var l=0;l<f;l++)a[l]=arguments[l+2];c.children=a}return{$$typeof:o,type:e.type,key:i,ref:u,props:c,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return A().useCallback(e,r)},r.useContext=function(e,r){return A().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return A().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return A().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return A().useLayoutEffect(e,r)},r.useMemo=function(e,r){return A().useMemo(e,r)},r.useReducer=function(e,r,t){return A().useReducer(e,r,t)},r.useRef=function(e){return A().useRef(e)},r.useState=function(e){return A().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const i={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||i:c(e),n.createElement(o.Provider,{value:u},r)}}}]);