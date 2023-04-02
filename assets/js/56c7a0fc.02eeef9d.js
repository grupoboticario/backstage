/*! For license information please see 56c7a0fc.02eeef9d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[490386],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,h=s["".concat(l,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},113585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>s});r(827378);var n=r(603905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"provider",title:"GitLab Authentication Provider",sidebar_label:"GitLab",description:"Adding GitLab OAuth as an authentication provider in Backstage"},l=void 0,u={unversionedId:"auth/gitlab/provider",id:"auth/gitlab/provider",title:"GitLab Authentication Provider",description:"Adding GitLab OAuth as an authentication provider in Backstage",source:"@site/../docs/auth/gitlab/provider.md",sourceDirName:"auth/gitlab",slug:"/auth/gitlab/provider",permalink:"/docs/auth/gitlab/provider",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/gitlab/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"GitLab Authentication Provider",sidebar_label:"GitLab",description:"Adding GitLab OAuth as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"GitHub",permalink:"/docs/auth/github/provider"},next:{title:"Google",permalink:"/docs/auth/google/provider"}},p={},s=[{value:"Create an OAuth App on GitLab",id:"create-an-oauth-app-on-gitlab",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}],f={toc:s};function d(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Backstage ",(0,n.kt)("inlineCode",{parentName:"p"},"core-plugin-api")," package comes with a GitLab authentication\nprovider that can authenticate users using GitLab OAuth."),(0,n.kt)("h2",{id:"create-an-oauth-app-on-gitlab"},"Create an OAuth App on GitLab"),(0,n.kt)("p",null,"To support GitLab authentication, you must create an Application from the\n",(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com/-/profile/applications"},"GitLab settings"),". The ",(0,n.kt)("inlineCode",{parentName:"p"},"Redirect URI"),"\nshould point to your Backstage backend auth handler."),(0,n.kt)("p",null,"Settings for local development:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: Backstage (or your custom app name)"),(0,n.kt)("li",{parentName:"ul"},"Redirect URI: ",(0,n.kt)("inlineCode",{parentName:"li"},"http://localhost:7007/api/auth/gitlab/handler/frame")),(0,n.kt)("li",{parentName:"ul"},"Scopes: ",(0,n.kt)("inlineCode",{parentName:"li"},"read_user")," for sign-in. If you also need ID tokens (e.g. if you are\nusing the Kubernetes plugin and have clusters with ",(0,n.kt)("inlineCode",{parentName:"li"},"authProvider: oidc")," and\n",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/features/kubernetes/configuration/#clustersoidctokenprovider-optional"},(0,n.kt)("inlineCode",{parentName:"a"},"oidcTokenProvider:\ngitlab")),"),\nadd the ",(0,n.kt)("inlineCode",{parentName:"li"},"openid")," scope.")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"The provider configuration can then be added to your ",(0,n.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," under the\nroot ",(0,n.kt)("inlineCode",{parentName:"p"},"auth")," configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"auth:\n  environment: development\n  providers:\n    gitlab:\n      development:\n        clientId: ${AUTH_GITLAB_CLIENT_ID}\n        clientSecret: ${AUTH_GITLAB_CLIENT_SECRET}\n        ## uncomment if using self-hosted GitLab\n        # audience: https://gitlab.company.com\n        ## uncomment if using a custom redirect URI\n        # callbackUrl: https://${BASE_URL}/api/auth/gitlab/handler/frame\n")),(0,n.kt)("p",null,"The GitLab provider is a structure with three configuration keys:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"clientId"),": The Application ID that you generated on GitLab, e.g.\n",(0,n.kt)("inlineCode",{parentName:"li"},"4928c033ab3d592845c044a653bc20583baf84f2e67b954c6fdb32a532ab76c9")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"clientSecret"),": The Application secret"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"audience")," (optional): The base URL for the self-hosted GitLab instance, e.g.\n",(0,n.kt)("inlineCode",{parentName:"li"},"https://gitlab.company.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"callbackUrl")," (optional): The URL matching the Redirect URI registered when creating your GitLab OAuth App, e.g.\n",(0,n.kt)("inlineCode",{parentName:"li"},"https://$backstage.acme.corp/api/auth/gitlab/handler/frame"),"\nNote: Due to a peculiarity with GitLab OAuth, ensure there is no trailing ",(0,n.kt)("inlineCode",{parentName:"li"},"/")," after 'frame' in the URL.")),(0,n.kt)("h2",{id:"adding-the-provider-to-the-backstage-frontend"},"Adding the provider to the Backstage frontend"),(0,n.kt)("p",null,"To add the provider to the frontend, add the ",(0,n.kt)("inlineCode",{parentName:"p"},"gitlabAuthApi")," reference and\n",(0,n.kt)("inlineCode",{parentName:"p"},"SignInPage")," component as shown in\n",(0,n.kt)("a",{parentName:"p",href:"/docs/auth/#adding-the-provider-to-the-sign-in-page"},"Adding the provider to the sign-in page"),"."))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,c,l=a(e),u=1;u<arguments.length;u++){for(var p in i=Object(arguments[u]))r.call(i,p)&&(l[p]=i[p]);if(t){c=t(i);for(var s=0;s<c.length;s++)n.call(i,c[s])&&(l[c[s]]=i[c[s]])}}return l}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,c=60110,l=60112;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),o=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),i=s("react.provider"),c=s("react.context"),l=s("react.forward_ref"),s("react.suspense"),u=s("react.memo"),p=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function g(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}function m(){}function y(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var v=y.prototype=new m;v.constructor=y,n(v,g.prototype),v.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];o.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===n?"."+C(l,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),A(i,t,r,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=n+C(c=e[u],u);l+=A(c,t,r,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),u=0;!(c=e.next()).done;)l+=A(c=c.value,t,r,p=n+C(c,u++),i);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,r){if(null==e)return e;var n=[],a=0;return A(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var L={current:null};function T(){var e=L.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);