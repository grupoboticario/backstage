"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[46103],{948050:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n=r(667294),o=r(386010),a=r(789712),l=r(565319),c=r(104185),i=r(891356),s=r(840164),p=r(592210),m=r(462574);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function d(e){const{nextItem:t,prevItem:r}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r&&n.createElement(m.Z,g(u({},r),{subLabel:n.createElement(p.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(m.Z,g(u({},t),{subLabel:n.createElement(p.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,c.C)(),{title:r,description:o,date:l,tags:i,authors:s,frontMatter:p}=t,{keywords:m}=p;var b;const u=null!==(b=e.image)&&void 0!==b?b:p.image;return n.createElement(a.d,{title:r,description:o,keywords:m,image:u},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:l}),s.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&n.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var y=r(148704);function h({sidebar:e,children:t}){const{metadata:r,toc:o}=(0,c.C)(),{nextItem:a,prevItem:l,frontMatter:p}=r,{hide_table_of_contents:m,toc_min_heading_level:b,toc_max_heading_level:u}=p;return n.createElement(i.Z,{sidebar:e,toc:!m&&o.length>0?n.createElement(y.Z,{toc:o,minHeadingLevel:b,maxHeadingLevel:u}):void 0},n.createElement(s.Z,null,t),(a||l)&&n.createElement(d,{nextItem:a,prevItem:l}))}function O(e){const t=e.content;return n.createElement(c.n,{content:e.content,isBlogPostPage:!0},n.createElement(a.FG,{className:(0,o.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},n.createElement(f,null),n.createElement(h,{sidebar:e.sidebar},n.createElement(t,null))))}}}]);