"use strict";(self.webpackChunkdrag_select_docs=self.webpackChunkdrag_select_docs||[]).push([[3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=s,h=p["".concat(l,".").concat(d)]||p[d]||b[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:7,description:"DragSelect uses a publish subscribe pattern to allow you to subscribe to events and react to them. Learn how to use the events in this tutorial."},o="Publish & Subscribe",i={unversionedId:"guided-examples/Publish-Subscribe",id:"guided-examples/Publish-Subscribe",title:"Publish & Subscribe",description:"DragSelect uses a publish subscribe pattern to allow you to subscribe to events and react to them. Learn how to use the events in this tutorial.",source:"@site/docs/guided-examples/Publish-Subscribe.mdx",sourceDirName:"guided-examples",slug:"/guided-examples/Publish-Subscribe",permalink:"/docs/guided-examples/Publish-Subscribe",draft:!1,editUrl:"https://github.com/ThibaultJanBeyer/DragSelect/docs/guided-examples/Publish-Subscribe.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"DragSelect uses a publish subscribe pattern to allow you to subscribe to events and react to them. Learn how to use the events in this tutorial."},sidebar:"tutorialSidebar",previous:{title:"Mobile/Touch usage",permalink:"/docs/guided-examples/Mobile-Touch"},next:{title:"React",permalink:"/docs/guided-examples/React"}},l={},c=[],u={toc:c};function b(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"publish--subscribe"},"Publish & Subscribe"),(0,s.kt)("p",null,"DragSelect uses a pub/sub pattern under the hood and exposes some friendly methods.\nYou totally can subscribe to the internal events but we suggest only subscribing to the public ones because the internal ones could change in future and break your code, hence we are only documenting the public ones in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/API/Events"},"Events API Section"),". If you feel any public event is missing or stumble upon an internal one that you would like to use, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/ThibaultJanBeyer/DragSelect/issues"},"open an issue")," in github and we\u2019ll add it."),(0,s.kt)("p",null,"The pub/sub basically offers 3 Methods: ",(0,s.kt)("inlineCode",{parentName:"p"},"subscribe"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"unsubscribe")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"publish"),".\nIf you are familiar with ",(0,s.kt)("inlineCode",{parentName:"p"},".addEventListener")," in the browser, this is the same concept."),(0,s.kt)("p",null,"Here is an Example on how you would use it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const ds = new DragSelect({\u2026})\n// Subscribe to an event\nconst subscriptionId = ds.subscribe('callback', (callback_object) => { /* do something */ })\n// If you stored the ID of that handler you can just unsubscribe by passing the ID\nds.unsubscribe('callback', null, subscriptionId)\n// If you want to publish some event yourself, you can totally do that aswell\nds.publish('callback', { foo: 'bar' })\n")),(0,s.kt)("p",null,"Let\u2019s say you can\u2019t store the subsciptionId, then you can also pass in the handler like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const ds = new DragSelect({\u2026})\nconst callbackHandler = (callback_object) => { /* do something */ }\nds.subscribe('callback', callbackHandler) // starts listening to the events\nds.unsubscribe('callback', callbackHandler) // stops listening to the events\n")),(0,s.kt)("p",null,"So to unsubscribe you have to either pass in the exact same method or the ID that the subscriber returns. Protip: passing the ID is more performant!"),(0,s.kt)("p",null,"You can find a list of all ",(0,s.kt)("a",{parentName:"p",href:"/docs/API/Events#public-events"},"public event_names")," as well as all potential ",(0,s.kt)("a",{parentName:"p",href:"/docs/API/Events#callback-object"},"callback_object properties")," in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/API/Events"},"Events documentation")))}b.isMDXComponent=!0}}]);