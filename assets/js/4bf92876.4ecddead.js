/*! For license information please see 4bf92876.4ecddead.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[160861],{997457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(824246),i=t(511151);const o={id:"writing",title:"Writing Backstage Configuration Files",description:"Documentation on Writing Backstage Configuration Files"},a=void 0,l={unversionedId:"conf/writing",id:"conf/writing",title:"Writing Backstage Configuration Files",description:"Documentation on Writing Backstage Configuration Files",source:"@site/../docs/conf/writing.md",sourceDirName:"conf",slug:"/conf/writing",permalink:"/docs/conf/writing",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/conf/writing.md",tags:[],version:"current",frontMatter:{id:"writing",title:"Writing Backstage Configuration Files",description:"Documentation on Writing Backstage Configuration Files"},sidebar:"docs",previous:{title:"Reading Backstage Configuration",permalink:"/docs/conf/reading"},next:{title:"Defining Configuration for your Plugin",permalink:"/docs/conf/defining"}},s={},c=[{value:"File Format",id:"file-format",level:2},{value:"Environment Variable Overrides",id:"environment-variable-overrides",level:2},{value:"Configuration Files",id:"configuration-files",level:2},{value:"Includes and Dynamic Data",id:"includes-and-dynamic-data",level:2},{value:"Env Includes",id:"env-includes",level:3},{value:"File Includes",id:"file-includes",level:3},{value:"Including Files",id:"including-files",level:3},{value:"Environment Variable Substitution",id:"environment-variable-substitution",level:2},{value:"Combining Includes and Environment Variable Substitution",id:"combining-includes-and-environment-variable-substitution",level:2}];function d(e){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",strong:"strong",ul:"ul",li:"li",h3:"h3",a:"a"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"file-format",children:"File Format"}),"\n",(0,r.jsxs)(n.p,{children:["Configuration is stored in YAML format in ",(0,r.jsx)(n.code,{children:"app-config.yaml"})," files. This\nconfiguration is shared between the frontend and backend and it looks something\nlike this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"app:\n  title: Backstage Example App\n  baseUrl: http://localhost:3000\n\nbackend:\n  listen: 0.0.0.0:7007\n  baseUrl: http://localhost:7007\n\norganization:\n  name: CNCF\n\nproxy:\n  /my/api:\n    target: https://example.com/api/\n    changeOrigin: true\n    pathRewrite:\n      ^/proxy/my/api/: /\n"})}),"\n",(0,r.jsx)(n.p,{children:"Configuration files are typically checked in and stored in the repo that houses\nthe rest of the Backstage application."}),"\n",(0,r.jsx)(n.p,{children:"The particular configuration that is available to each Backstage app depends on\nwhat plugins and packages are installed. To view the configuration reference for\nyour own project, including what configuration keys available and whether they\nare needed by the frontend, use the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn backstage-cli config:docs\n"})}),"\n",(0,r.jsx)(n.h2,{id:"environment-variable-overrides",children:"Environment Variable Overrides"}),"\n",(0,r.jsxs)(n.p,{children:["Individual configuration values can be overridden using environment variables\nprefixed with ",(0,r.jsx)(n.code,{children:"APP_CONFIG_"}),". Everything following that prefix in the environment\nvariable name will be used as the config key, with ",(0,r.jsx)(n.code,{children:"_"})," replaced by ",(0,r.jsx)(n.code,{children:"."}),". For\nexample, to override the ",(0,r.jsx)(n.code,{children:"app.baseUrl"})," value, set the ",(0,r.jsx)(n.code,{children:"APP_CONFIG_app_baseUrl"}),"\nenvironment variable to the desired value."]}),"\n",(0,r.jsxs)(n.p,{children:["The value of the environment variable is parsed as JSON, but it will fall back\nto being interpreted as a string if it fails to parse. Note that if you for\nexample want to pass on the string ",(0,r.jsx)(n.code,{children:'"false"'}),", you need to wrap it in double\nquotes, e.g. ",(0,r.jsx)(n.code,{children:"export APP_CONFIG_example='\"false\"'"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"While it may be tempting to use environment variable overrides for supplying a\nlot of configuration values, we recommend using them sparingly. Try to stick to\nusing configuration files, and only use environment variables for things like\nreusing deployment artifacts across staging and production environments."}),"\n",(0,r.jsxs)(n.p,{children:["Note that environment variables work for frontend configuration too. They are\npicked up by the serve tasks of ",(0,r.jsx)(n.code,{children:"@backstage/cli"})," for local development, and are\ninjected by the entrypoint of the nginx container serving the frontend in a\nproduction build."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,r.jsxs)(n.p,{children:["It is possible to have multiple configuration files (bundled and/or remote*),\nboth to support different environments, but also to define configuration that is\nlocal to specific packages. The configuration files to load are selected using a\n",(0,r.jsx)(n.code,{children:"--config <local-path|url>"})," flag, and it is possible to load any number of\nfiles. Paths are relative to the working directory of the executed process, for\nexample ",(0,r.jsx)(n.code,{children:"package/backend"}),". This means that to select a config file in the repo\nroot when running the backend, you would use ",(0,r.jsx)(n.code,{children:"--config ../../my-config.yaml"}),",\nand for config file on a config server you would use\n",(0,r.jsx)(n.code,{children:"--config https://some.domain.io/app-config.yaml"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": In case URLs are passed, it is also needed to set the remote option in\nthe loadBackendConfig call."]}),"\n",(0,r.jsxs)(n.p,{children:["If no ",(0,r.jsx)(n.code,{children:"config"})," flags are specified, the default behavior is to load\n",(0,r.jsx)(n.code,{children:"app-config.yaml"})," and, if it exists, ",(0,r.jsx)(n.code,{children:"app-config.local.yaml"})," from the repo root.\nIn the provided project setup, ",(0,r.jsx)(n.code,{children:"app-config.local.yaml"})," is ",(0,r.jsx)(n.code,{children:".gitignore"}),"'d, making\nit a good place to add config overrides and secrets for local development."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that if any config flags are provided, the default ",(0,r.jsx)(n.code,{children:"app-config.yaml"})," files\nare NOT loaded. To include them you need to explicitly include them with a flag,\nfor example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn start --config ../../app-config.yaml --config ../../app-config.staging.yaml --config https://some.domain.io/app-config.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"All loaded configuration files are merged together using the following rules:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Configurations have different priority, higher priority means you replace\nvalues from configurations with lower priority."}),"\n",(0,r.jsx)(n.li,{children:"Primitive values are completely replaced, as are arrays and all of their\ncontents."}),"\n",(0,r.jsx)(n.li,{children:"Objects are merged together deeply, meaning that if any of the included\nconfigs contain a value for a given path, it will be found."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The priority of the configurations is determined by the following rules, in\norder:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configuration from the ",(0,r.jsx)(n.code,{children:"APP_CONFIG_"})," environment variables has the highest\npriority, followed by files."]}),"\n",(0,r.jsx)(n.li,{children:"Files loaded with config flags are ordered by priority, where the last flag\nhas the highest priority."}),"\n",(0,r.jsxs)(n.li,{children:["If no config flags are provided, ",(0,r.jsx)(n.code,{children:"app-config.local.yaml"})," has higher priority\nthan ",(0,r.jsx)(n.code,{children:"app-config.yaml"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"includes-and-dynamic-data",children:"Includes and Dynamic Data"}),"\n",(0,r.jsxs)(n.p,{children:["Includes are supported via special data loading keys that are prefixed with ",(0,r.jsx)(n.code,{children:"$"}),",\nwhich in turn provide a number of different ways to read in data. To load in an\nexternal configuration value, supply an object with one of the special include\nkeys, for example ",(0,r.jsx)(n.code,{children:"$env"})," or ",(0,r.jsx)(n.code,{children:"$file"}),". A full list of supported include keys can\nbe found below. For example, the following will read the config key\n",(0,r.jsx)(n.code,{children:"backend.mySecretKey"})," from the environment variable ",(0,r.jsx)(n.code,{children:"MY_SECRET_KEY"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"backend:\n  mySecretKey:\n    $env: MY_SECRET_KEY\n"})}),"\n",(0,r.jsxs)(n.p,{children:["With the above configuration, calling ",(0,r.jsx)(n.code,{children:"config.getString('backend.mySecretKey')"}),"\nwill return the value of the environment variable ",(0,r.jsx)(n.code,{children:"MY_SECRET_KEY"})," when the\nbackend started up. All includes are loaded at startup, so changing the contents\nof files or environment variables will not be reflected at runtime."]}),"\n",(0,r.jsx)(n.p,{children:"Below is a list of the currently supported methods for loading includes."}),"\n",(0,r.jsx)(n.h3,{id:"env-includes",children:"Env Includes"}),"\n",(0,r.jsxs)(n.p,{children:["This reads a string value from an environment variable. For example, the\nfollowing configuration loads the string value from the ",(0,r.jsx)(n.code,{children:"MY_SECRET"})," environment\nvariable."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"$env: MY_SECRET\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note however, that it's often more convenient to use\n",(0,r.jsx)(n.a,{href:"#environment-variable-substitution",children:"environment variable substitution"})," instead."]}),"\n",(0,r.jsx)(n.h3,{id:"file-includes",children:"File Includes"}),"\n",(0,r.jsxs)(n.p,{children:["This reads a string value from the entire contents of a text file. The file path\nis relative to the source config file. For example, the following reads the\ncontents of ",(0,r.jsx)(n.code,{children:"my-secret.txt"})," relative to the config file itself:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"$file: ./my-secret.txt\n"})}),"\n",(0,r.jsx)(n.h3,{id:"including-files",children:"Including Files"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"$include"})," keyword can be used to load configuration values from an external\nfile. It's able to load and parse data from ",(0,r.jsx)(n.code,{children:".json"}),", ",(0,r.jsx)(n.code,{children:".yml"}),", and ",(0,r.jsx)(n.code,{children:".yaml"})," files.\nIt's also possible to include a URL fragment (",(0,r.jsx)(n.code,{children:"#"}),") to point to a value at the\ngiven path in the file, using a dot-separated list of keys."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, the following would read ",(0,r.jsx)(n.code,{children:"my-secret-key"})," from ",(0,r.jsx)(n.code,{children:"my-secrets.json"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"$include: ./my-secrets.json#deployment.key\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example ",(0,r.jsx)(n.code,{children:"my-secrets.json"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "deployment": {\n    "key": "my-secret-key"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"environment-variable-substitution",children:"Environment Variable Substitution"}),"\n",(0,r.jsxs)(n.p,{children:["Configuration files support environment variable substitution via a ",(0,r.jsx)(n.code,{children:"${MY_VAR}"}),"\nsyntax. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"app:\n  baseUrl: https://${HOST}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note that all environment variables must be available, or the entire\nconfiguration value will evaluate to ",(0,r.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The substitution syntax can be escaped using ",(0,r.jsx)(n.code,{children:"$${...}"}),", which will be resolved\nas ",(0,r.jsx)(n.code,{children:"${...}"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"combining-includes-and-environment-variable-substitution",children:"Combining Includes and Environment Variable Substitution"}),"\n",(0,r.jsx)(n.p,{children:"The Includes and Environment Variable Substitutions can be combined to do\nsomething like read a secrets configuration for a specific environment. For\nexample:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"integrations:\n  github:\n    - host: github.com\n      apps:\n        - $include: secrets.${BACKSTAGE_ENVIRONMENT}.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example ",(0,r.jsx)(n.code,{children:"secrets.prod.yaml"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"appId: 1\nwebhookUrl: https://smee.io/foo\nclientId: someGithubAppClientId\nclientSecret: someGithubAppClientSecret\nwebhookSecret: someWebhookSecret\nprivateKey: |\n  -----BEGIN RSA PRIVATE KEY-----\n  SomeRsaPrivateKey\n  -----END RSA PRIVATE KEY-----\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,i){for(var o,a,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in o=Object(arguments[s]))t.call(o,c)&&(l[c]=o[c]);if(n){a=n(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(l[a[d]]=o[a[d]])}}return l}},371426:(e,n,t)=>{t(862525);var r=t(827378),i=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),n.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!s.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:a.current}}n.jsx=c,n.jsxs=c},541535:(e,n,t)=>{var r=t(862525),i=60103,o=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var a=60109,l=60110,s=60112;n.Suspense=60113;var c=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;i=u("react.element"),o=u("react.portal"),n.Fragment=u("react.fragment"),n.StrictMode=u("react.strict_mode"),n.Profiler=u("react.profiler"),a=u("react.provider"),l=u("react.context"),s=u("react.forward_ref"),n.Suspense=u("react.suspense"),c=u("react.memo"),d=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||p}function y(){}function v(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var b=v.prototype=new y;b.constructor=v,r(b,m.prototype),b.isPureReactComponent=!0;var x={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,o={},a=null,l=null;if(null!=n)for(r in void 0!==n.ref&&(l=n.ref),void 0!==n.key&&(a=""+n.key),n)j.call(n,r)&&!w.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(1===s)o.children=t;else if(1<s){for(var c=Array(s),d=0;d<s;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:i,type:e,key:a,ref:l,props:o,_owner:x.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var E=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function S(e,n,t,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case i:case o:s=!0}}if(s)return a=a(s=e),e=""===r?"."+C(s,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(E,"$&/")+"/"),S(a,n,t,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),n.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var d=r+C(l=e[c],c);s+=S(l,n,t,d,a)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(l=e.next()).done;)s+=S(l=l.value,n,t,d=r+C(l,c++),a);else if("object"===l)throw n=""+e,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return s}function O(e,n,t){if(null==e)return e;var r=[],i=0;return S(e,r,"","",(function(e){return n.call(t,e,i++)})),r}function I(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},n.Component=m,n.PureComponent=v,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,n.cloneElement=function(e,n,t){if(null==e)throw Error(h(267,e));var o=r({},e.props),a=e.key,l=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(l=n.ref,s=x.current),void 0!==n.key&&(a=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in n)j.call(n,d)&&!w.hasOwnProperty(d)&&(o[d]=void 0===n[d]&&void 0!==c?c[d]:n[d])}var d=arguments.length-2;if(1===d)o.children=t;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:i,type:e.type,key:a,ref:l,props:o,_owner:s}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:l,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:s,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},n.memo=function(e,n){return{$$typeof:c,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return $().useCallback(e,n)},n.useContext=function(e,n){return $().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return $().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return $().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return $().useLayoutEffect(e,n)},n.useMemo=function(e,n){return $().useMemo(e,n)},n.useReducer=function(e,n,t){return $().useReducer(e,n,t)},n.useRef=function(e){return $().useRef(e)},n.useState=function(e){return $().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>o});var r=t(667294);const i=r.createContext({});function o(e){const n=r.useContext(i);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||a:o(e),r.createElement(i.Provider,{value:l},n)}}}]);