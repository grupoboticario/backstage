/*! For license information please see a8672869.be44b364.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[434383],{50972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(824246),o=r(511151);const i={id:"services",title:"Backend Services",sidebar_label:"Services",description:"Services for backend plugins"},s=void 0,c={unversionedId:"backend-system/architecture/services",id:"backend-system/architecture/services",title:"Backend Services",description:"Services for backend plugins",source:"@site/../docs/backend-system/architecture/03-services.md",sourceDirName:"backend-system/architecture",slug:"/backend-system/architecture/services",permalink:"/docs/backend-system/architecture/services",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/backend-system/architecture/03-services.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"services",title:"Backend Services",sidebar_label:"Services",description:"Services for backend plugins"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/backend-system/architecture/index"},next:{title:"Plugins",permalink:"/docs/backend-system/architecture/plugins"}},a={},l=[{value:"Service Interfaces",id:"service-interfaces",level:2},{value:"Service References",id:"service-references",level:2},{value:"Service Factories",id:"service-factories",level:2},{value:"Service Factory Options",id:"service-factory-options",level:2},{value:"Core Services",id:"core-services",level:2},{value:"Service Scope",id:"service-scope",level:2},{value:"Root Scoped Services",id:"root-scoped-services",level:2},{value:"Plugin Metadata",id:"plugin-metadata",level:2},{value:"Root Context for Service Factories",id:"root-context-for-service-factories",level:2},{value:"Default Service Factories",id:"default-service-factories",level:2}];function d(e){const t=Object.assign({blockquote:"blockquote",p:"p",strong:"strong",a:"a",h2:"h2",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"DISCLAIMER: The new backend system is in alpha, and still under active development. While we have reviewed the interfaces carefully, they may still be iterated on before the stable release."})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Backend services provide shared functionality available to all backend plugins and modules. They are made available through service references that embed a type that represents the service interface, similar to how ",(0,n.jsx)(t.a,{href:"/docs/api/utility-apis",children:"Utility APIs"})," work in the Backstage frontend system. To use a service in your plugin or module you request an implementation of that service using the service reference."]}),"\n",(0,n.jsx)(t.p,{children:"The system surrounding services exists to provide a level of indirection between the service interfaces and their implementation. It is an implementation of dependency injection, where each backend instance is the dependency injection container. The implementation for each service is provided by a service factory, which encapsulates the logic for how each service instance is created."}),"\n",(0,n.jsx)(t.h2,{id:"service-interfaces",children:"Service Interfaces"}),"\n",(0,n.jsx)(t.p,{children:"Service interfaces can be any TypeScript type, but it is best to make it an object interface with a number of methods. General guidelines for interface design apply: keep them simple and lean, with few but powerful methods. Take care to avoid locking down the ways in which individual methods can evolve. Often you want to stick to a method with an options object as its only parameter, and return a result object. If there is any reason for uncertainty about whether the method should be async or not, always make it async. For example, a minimal interface should often use the following pattern:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export interface FooService {\n  foo(options: FooOptions): Promise<FooResult>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"service-references",children:"Service References"}),"\n",(0,n.jsxs)(t.p,{children:["Once you have defined a service interface, you need to create a service reference using the ",(0,n.jsx)(t.code,{children:"createServiceRef"})," function. This will create a ",(0,n.jsx)(t.code,{children:"ServiceRef"})," instance, which is a reference that you export in order to allow users to interact with your service. Conceptually this is very similar to ",(0,n.jsx)(t.code,{children:"ApiRef"}),"s in the frontend system. For example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { createServiceRef } from '@backstage/backend-plugin-api';\n\nexport interface FooService {\n  foo(options: FooOptions): Promise<FooResult>;\n}\n\nexport const fooServiceRef = createServiceRef<FooService>({\n  id: 'example.foo', // the owner of this service is in this case the 'example' plugin\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"fooServiceRef"})," that we create above should be exported, and can then be used to declare a dependency on the ",(0,n.jsx)(t.code,{children:"FooService"})," interface and receive an implementation of it at runtime."]}),"\n",(0,n.jsxs)(t.p,{children:["When creating a service reference you need to give it an ID. This ID needs to be globally unique, and should generally be of the format ",(0,n.jsx)(t.code,{children:"'<pluginId>.<serviceName>'"}),". For more naming patters surrounding services, see the ",(0,n.jsx)(t.a,{href:"/docs/backend-system/architecture/naming-patterns#services",children:"naming patterns"})," page."]}),"\n",(0,n.jsx)(t.p,{children:'A note on naming: the frontend and backend systems intentionally use the separate names "APIs" and "Services" for concepts that are quite similar. This is to avoid confusion between the two, both in documentation and discussion, but also in code. While the two systems are quite similar, they are not identical, and they can\'t be used interchangeably.'}),"\n",(0,n.jsx)(t.h2,{id:"service-factories",children:"Service Factories"}),"\n",(0,n.jsx)(t.p,{children:"In order to be able to depend on a service interface through a service reference, we of course also need to have some way of creating the concrete implementation of it. To encapsulate that logic we use service factories, which define both how service instances are created, as well as what other services they depend on for their implementation."}),"\n",(0,n.jsx)(t.p,{children:"Service factories can come from many different sources. There are built-in service factories, external ones that you can import from other packages, and you can also create your own. Specific service factories are installed within each backend instance, which acts as the dependency injection container. For any given backend instance there can only be a single designated service factory for each service."}),"\n",(0,n.jsxs)(t.p,{children:["To define a service factory, we use ",(0,n.jsx)(t.code,{children:"createServiceFactory"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { createServiceFactory } from '@backstage/backend-plugin-api';\n\nclass DefaultFooService implements FooService {\n  async foo(options: FooOptions): Promise<FooResult> {\n    // ...\n  }\n}\n\nexport const fooServiceFactory = createServiceFactory({\n  service: fooServiceRef,\n  deps: { bar: barServiceRef },\n  factory({ bar }) {\n    return new DefaultFooService(bar);\n  },\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["To create a service factory we need to provide a reference to the ",(0,n.jsx)(t.code,{children:"service"})," for which the factory will create instances, a ",(0,n.jsx)(t.code,{children:"deps"})," object which lists the other services that the factory depends on, and a ",(0,n.jsx)(t.code,{children:"factory"})," function which will be called to create the service instance. The backend system will call the ",(0,n.jsx)(t.code,{children:"factory"})," function with an object that contains the service instances for each of the dependencies listed in the ",(0,n.jsx)(t.code,{children:"deps"})," object. If a service implementation does not depend on any other services, the ",(0,n.jsx)(t.code,{children:"deps"})," are left as an empty object (",(0,n.jsx)(t.code,{children:"{}"}),"). The ",(0,n.jsx)(t.code,{children:"factory"})," function must return a value that implements the service interface."]}),"\n",(0,n.jsxs)(t.p,{children:["If you need the creation of the service instance to be asynchronous, you can make the ",(0,n.jsx)(t.code,{children:"factory"})," function async. For example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export const fooServiceFactory = createServiceFactory({\n  service: fooServiceRef,\n  deps: {},\n  async factory() {\n    const foo = new DefaultFooService();\n    await foo.init();\n    return foo;\n  },\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"Note that circular dependencies among service factories are not allowed. This is verified at runtime, and your backend instance will refuse to start up if it detects any conflicts. Likewise, the backend will also fail to start up if a service factory depends on a service that is not provided by any registered service factory."}),"\n",(0,n.jsx)(t.h2,{id:"service-factory-options",children:"Service Factory Options"}),"\n",(0,n.jsxs)(t.p,{children:["To install a service factory in a backend instance, we pass it in through the ",(0,n.jsx)(t.code,{children:"services"})," option to ",(0,n.jsx)(t.code,{children:"createBackend"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const backend = createBackend({\n  services: [fooServiceFactory()],\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Note that we call ",(0,n.jsx)(t.code,{children:"fooServiceFactory"})," to create the service factory instance. This is because ",(0,n.jsx)(t.code,{children:"createServiceFactory"})," always returns a factory function that creates the actual service factory. This is done to always allow for options to be added to the service factory in the future, without breaking existing code. To add options to your service factory, you wrap the object passed to ",(0,n.jsx)(t.code,{children:"createServiceFactory"})," in a callback that accepts the desired options. For example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export interface FooFactoryOptions {\n  mode: 'eager' | 'lazy';\n}\n\nexport const fooServiceFactory = createServiceFactory(\n  (options?: FooFactoryOptions) => ({\n    service: fooServiceRef,\n    deps: { bar: barServiceRef },\n    factory({ bar }) {\n      return new DefaultFooService(bar, options?.mode);\n    },\n  }),\n);\n"})}),"\n",(0,n.jsx)(t.p,{children:"This lets us use the options to customize the factory implementation in any way we want. From the outside the service factory looks just like before, except that we're now also able to pass options when installing the factory:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const backend = createBackend({\n  services: [fooServiceFactory({ mode: 'eager' })],\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"core-services",children:"Core Services"}),"\n",(0,n.jsxs)(t.p,{children:["The backend system provides a number of core service definitions that both help implement the main functionality of the backend, but also provide a set of utilities for common concerns, such as logging, database access, job scheduling, and so on. These core services will always be present in a backend instance created with ",(0,n.jsx)(t.code,{children:"createBackend"}),", and they can all be overridden with custom implementations if needed."]}),"\n",(0,n.jsxs)(t.p,{children:["The service references for all core services are exported via their own ",(0,n.jsx)(t.code,{children:"coreServices"})," object, available from the ",(0,n.jsx)(t.code,{children:"@backstage/backend-plugin-api"})," package. For example, the logging service is accessible via ",(0,n.jsx)(t.code,{children:"coreServices.logger"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can read more about what core services there are and how to use them in the ",(0,n.jsx)(t.a,{href:"/docs/backend-system/core-services/index",children:"core services"})," section."]}),"\n",(0,n.jsx)(t.h2,{id:"service-scope",children:"Service Scope"}),"\n",(0,n.jsxs)(t.p,{children:["By default services are scoped to individual plugins, meaning that separate instances of the service will be created for each plugin. For example, in our ",(0,n.jsx)(t.code,{children:"fooFactory"})," above, a separate instance of ",(0,n.jsx)(t.code,{children:"DefaultFooService"})," will be created for every plugin that depends on the service. This both makes it possible to tailor the service implementations for the individual plugins, and also ensures some level of separation between plugins."]}),"\n",(0,n.jsxs)(t.p,{children:["The service scope is defined during the call to ",(0,n.jsx)(t.code,{children:"createServiceRef"}),", with plugin scope being the default. Our above definition of the ",(0,n.jsx)(t.code,{children:"fooServiceRef"})," is therefore equivalent to the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export const fooServiceRef = createServiceRef<FooService>({\n  scope: 'plugin',\n  id: 'example.foo',\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["There are only two possible scopes for services, ",(0,n.jsx)(t.code,{children:"'plugin'"})," and ",(0,n.jsx)(t.code,{children:"'root'"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"root-scoped-services",children:"Root Scoped Services"}),"\n",(0,n.jsx)(t.p,{children:"If a service is defined as a root scoped service, the implementation created by the factory will be shared across all plugins and services. One other differentiating factory for root scoped services is that they are always initialized, regardless of whether any plugins depend on them or not. This makes them suitable for implementing backend-wide concerns that are not specific to any individual plugin."}),"\n",(0,n.jsx)(t.p,{children:"There is a limitation in the usage of root scoped services, which is that their implementation can only depend on other root scoped services. Plugin scoped services on the other hand can depend on both root and plugin scoped services. Because of this limitation, one of the main reasons to define a root scoped services is to make it possible for other root scoped services to depend on it."}),"\n",(0,n.jsx)(t.p,{children:"Because of these limitations and particular use-cases for root scoped services, they tend to be more rare than plugin scoped services. In general, you should prefer defining a service as plugin scoped, unless you are implementing either of the two mentioned use-cases."}),"\n",(0,n.jsxs)(t.p,{children:["Some services come in pairs of a plugin and a root scoped service definition. For example, the ",(0,n.jsx)(t.code,{children:"rootLogger"})," service is a root scoped service, while the ",(0,n.jsx)(t.code,{children:"logger"})," service is a plugin scoped service. The ",(0,n.jsx)(t.code,{children:"rootLogger"})," service houses the main logging implementation, while the ",(0,n.jsx)(t.code,{children:"logger"})," service simply builds upon the ",(0,n.jsx)(t.code,{children:"rootLogger"})," to add plugin specific labels. This division exists so that other root scoped services also have access to a logging service, but it is always preferable if the split can be avoided. If you do end up implementing this pattern, the root scoped service should be prefixed with ",(0,n.jsx)(t.code,{children:"root"}),", this is to encourage use of the plugin scoped service instead."]}),"\n",(0,n.jsx)(t.h2,{id:"plugin-metadata",children:"Plugin Metadata"}),"\n",(0,n.jsxs)(t.p,{children:["Plugin scoped services have access to a plugin metadata service, which is a special service provided by the backend system that is not possible to override. The plugin metadata service provides information about the plugin that a service instance is being created for. It is itself a plugin scoped service, and can be depended on like any other service through the ",(0,n.jsx)(t.code,{children:"coreServices.pluginMetadata"})," reference."]}),"\n",(0,n.jsx)(t.p,{children:"The plugin metadata service is the base for all plugin specific customizations for services. For example, the default implementation of the plugin scoped logger service uses the plugin metadata service to attach the plugin ID as a field in all log messages:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export const loggerServiceFactory = createServiceFactory({\n  service: coreServices.logger,\n  deps: {\n    rootLogger: coreServices.rootLogger,\n    pluginMetadata: coreServices.pluginMetadata,\n  },\n  factory({ rootLogger, pluginMetadata }) {\n    return rootLogger.child({ plugin: pluginMetadata.getId() });\n  },\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"root-context-for-service-factories",children:"Root Context for Service Factories"}),"\n",(0,n.jsxs)(t.p,{children:["Some services may benefit from having a context that is shared across all instances of a service. This of course only applies to plugin scoped services, as root scoped services only ever have a single instance. The root context could for example be used for sharing a common connection pool for database access, generated secrets for development, or any other kind of shared facility. Note that you should not use this to share state between plugins in production, as that would be a violation of the ",(0,n.jsx)(t.a,{href:"/docs/backend-system/architecture/plugins#rules-of-plugins",children:"plugin isolation rule"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The root context is defined as part of the service factory by passing the ",(0,n.jsx)(t.code,{children:"createRootContext"})," option:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"export const fooServiceFactory = createServiceFactory({\n  service: fooServiceRef,\n  deps: { rootLogger: coreServices.rootLogger, bar: barServiceRef },\n  createRootContext({ rootLogger }) {\n    return new FooRootContext(rootLogger);\n  }\n  factory({ bar }, ctx) {\n    return ctx.forPlugin(bar)\n  },\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Whatever value is returned by the ",(0,n.jsx)(t.code,{children:"createRootContext"})," function will shared and passed as the second argument to each invocation of the ",(0,n.jsx)(t.code,{children:"factory"})," function. That way you can create a shared context that is used in the creation of each plugin instance. Unlike the ",(0,n.jsx)(t.code,{children:"factory"})," function, the ",(0,n.jsx)(t.code,{children:"createRootContext"})," function will only receive root scoped services as its dependencies, but just like the ",(0,n.jsx)(t.code,{children:"factory"})," function, it can also be ",(0,n.jsx)(t.code,{children:"async"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"default-service-factories",children:"Default Service Factories"}),"\n",(0,n.jsx)(t.p,{children:"There are a lot of services that are installed in any standard Backstage backend instance by default. You can expect these services to always exist, and do not need to take any additional steps to make them available. This is not necessarily true for services that you import from external packages, as the user of your plugin or module might not have installed a factory for that service in their backend. In order to avoid having to ask integrators of your plugin to install a service factory for a service that you depend on, it is possible to define a default factory for a service."}),"\n",(0,n.jsxs)(t.p,{children:["Default service factories are defined as part of the service reference by passing the ",(0,n.jsx)(t.code,{children:"defaultFactory"})," option to ",(0,n.jsx)(t.code,{children:"createServiceRef"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import {\n  createServiceFactory,\n  createServiceRef,\n} from '@backstage/backend-plugin-api';\n\nexport const fooServiceRef = createServiceRef<FooService>({\n  id: 'example.foo',\n  defaultFactory: async service =>\n    createServiceFactory({\n      service,\n      deps: {},\n      factory() {\n        return new DefaultFooService();\n      },\n    }),\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Note that we don't use the ",(0,n.jsx)(t.code,{children:"fooServiceRef"})," when creating our service factory, but instead use the ",(0,n.jsx)(t.code,{children:"service"})," parameter in the default factory callback. This is because attempting to use ",(0,n.jsx)(t.code,{children:"fooServiceRef"})," directly would result in a circular reference."]}),"\n",(0,n.jsx)(t.p,{children:"If a service defines a default factory, that factory will be used if there is no explicit factory registered in the backend for that service. This allows users of your service to directly import and use a service, without worrying about whether it is installed or not. It is recommended to always define a default factory for any service that you are exporting for use in other plugins or modules."}),"\n",(0,n.jsx)(t.p,{children:"When defining a default factory for a service, it is possible for it to end up with duplicate implementations at runtime. This applies both to any shared root context in your factory, as well as plugin specific instances of your service. This is because package dependency version ranges may not line up perfectly, causing duplicate installations of the same package. This can happen both for two different plugins using the same service, but also across a plugin and its modules. If your service would break in this scenario, you should not define a default factory for it, but instead require that users of your service explicitly install a factory in their backend instance."})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in i=Object(arguments[a]))r.call(i,l)&&(c[l]=i[l]);if(t){s=t(i);for(var d=0;d<s.length;d++)n.call(i,s[d])&&(c[s[d]]=i[s[d]])}}return c}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:d,props:i,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,c=60110,a=60112;t.Suspense=60113;var l=60115,d=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),i=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),s=u("react.provider"),c=u("react.context"),a=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),d=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function y(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||p}function m(){}function g(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var b=g.prototype=new m;b.constructor=g,n(b,y.prototype),b.isPureReactComponent=!0;var x={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,i={},s=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,n)&&!w.hasOwnProperty(n)&&(i[n]=t[n]);var a=arguments.length-2;if(1===a)i.children=r;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];i.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===i[n]&&(i[n]=a[n]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:x.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var F=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,n,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return s=s(a=e),e=""===n?"."+_(a,0):n,Array.isArray(s)?(r="",null!=e&&(r=e.replace(F,"$&/")+"/"),R(s,t,r,"",(function(e){return e}))):null!=s&&(k(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(F,"$&/")+"/")+e)),t.push(s)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var d=n+_(c=e[l],l);a+=R(c,t,r,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(c=e.next()).done;)a+=R(c=c.value,t,r,d=n+_(c,l++),s);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function T(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function O(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function I(){var e=C.current;if(null===e)throw Error(f(321));return e}var P={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:T,forEach:function(e,t,r){T(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(f(143));return e}},t.Component=y,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var i=n({},e.props),s=e.key,c=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,a=x.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)j.call(t,d)&&!w.hasOwnProperty(d)&&(i[d]=void 0===t[d]&&void 0!==l?l[d]:t[d])}var d=arguments.length-2;if(1===d)i.children=r;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:o,type:e.type,key:s,ref:c,props:i,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return I().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,r){return I().useReducer(e,t,r)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||s:i(e),n.createElement(o.Provider,{value:c},t)}}}]);