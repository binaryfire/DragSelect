"use strict";(self.webpackChunkdrag_select_docs=self.webpackChunkdrag_select_docs||[]).push([[978],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),b=a,y=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},4215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(5773),a=(r(7378),r(5318));const i={sidebar_position:4,description:"DragSelect is accessible by default! Learn how to use it with your keyboard."},o="Accessibility (a11y)",l={unversionedId:"guided-examples/Accessibility",id:"guided-examples/Accessibility",title:"Accessibility (a11y)",description:"DragSelect is accessible by default! Learn how to use it with your keyboard.",source:"@site/docs/guided-examples/Accessibility.mdx",sourceDirName:"guided-examples",slug:"/guided-examples/Accessibility",permalink:"/docs/guided-examples/Accessibility",draft:!1,editUrl:"https://github.com/ThibaultJanBeyer/DragSelect/docs/guided-examples/Accessibility.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"DragSelect is accessible by default! Learn how to use it with your keyboard."},sidebar:"tutorialSidebar",previous:{title:"With DropZones",permalink:"/docs/guided-examples/DropZones"},next:{title:"Updating Settings",permalink:"/docs/guided-examples/Updating-Settings"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accessibility-a11y"},"Accessibility (a11y)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulations, DragSelect is accessible by default \ud83c\udf89")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"TLDR;",(0,a.kt)("br",{parentName:"p"}),"\n","=> Your ",(0,a.kt)("inlineCode",{parentName:"p"},"selectables")," should be buttons: ",(0,a.kt)("inlineCode",{parentName:"p"},'<button type="button"></button>'),".",(0,a.kt)("br",{parentName:"p"}),"\n","=> ",(0,a.kt)("kbd",null,"ArrowKeys")," are used for keyboard dragging.  ")),(0,a.kt)("p",null,"Obviously, keyboard users won\u2019t get the full visual experience but it works similarly to the OS default behavior.  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Selection: You can select items using the default select keys (usually space or enter) and also multi-select when using a modifier key at the same time. There is one little thing you have to do tho\u2019: the ",(0,a.kt)("inlineCode",{parentName:"p"},"selectables")," have to be pressable (clickable)! To achieve this, they should be of type ",(0,a.kt)("inlineCode",{parentName:"p"},'<button type="button"></button>'),".  ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Drag: You can drag elements using the keyboard arrow keys, this will also scroll the area by default. You can press ",(0,a.kt)("kbd",null,"Shift")," in combination with an arrow i.e. ",(0,a.kt)("kbd",null,"Shift"),"+",(0,a.kt)("kbd",null,"ArrowRight")," to move the element 4x faster and also not scroll the area."))),(0,a.kt)("p",null,"Try it out with your keyboard:  "),(0,a.kt)("iframe",{height:"400",style:{width:"100%"},scrolling:"no",title:"DragSelect with Scrollable AREA",src:"https://codepen.io/ThibaultJanBeyer/embed/prpwYG?default-tab=result&editable=true&theme-id=dark",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0},"See ",(0,a.kt)("a",{href:"https://codepen.io/ThibaultJanBeyer/pen/prpwYG"},"this Pen about DragSelect")," on CodePen."))}d.isMDXComponent=!0}}]);