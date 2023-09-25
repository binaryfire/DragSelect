"use strict";(self.webpackChunkdrag_select_docs=self.webpackChunkdrag_select_docs||[]).push([[537],{5318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,k=m["".concat(d,".").concat(g)]||m[g]||u[g]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(5773),r=(n(7378),n(5318));const l={sidebar_position:1,description:"DragSelect Settings (API)"},i="Settings",o={unversionedId:"API/Settings",id:"API/Settings",title:"Settings",description:"DragSelect Settings (API)",source:"@site/docs/API/Settings.mdx",sourceDirName:"API",slug:"/API/Settings",permalink:"/docs/API/Settings",draft:!1,editUrl:"https://github.com/ThibaultJanBeyer/DragSelect/docs/API/Settings.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"DragSelect Settings (API)"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/category/api"},next:{title:"Events (Pub/sub)",permalink:"/docs/API/Events"}},d={},p=[{value:"Selecting",id:"selecting",level:2},{value:"AutoScroll",id:"autoscroll",level:2},{value:"Dragging",id:"dragging",level:2},{value:"Dropping",id:"dropping",level:2},{value:"Styling",id:"styling",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"DragSelect Example with all Props",id:"dragselect-example-with-all-props",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"settings"},"Settings"),(0,r.kt)("p",null,"aka ",(0,r.kt)("inlineCode",{parentName:"p"},"Constructor Properties")," aka ",(0,r.kt)("inlineCode",{parentName:"p"},"Properties")," aka ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),".  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const ds = new DragSelect({\n  selectables: document.querySelectorAll('.selectable'),\n});\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DragSelect is hyper customizable"),": all properties are optional, you can totally just pass an empty object and set the settings later. See ",(0,r.kt)("a",{parentName:"p",href:"../guided-examples/Updating-Settings"},"updating-settings")),(0,r.kt)("h2",{id:"selecting"},"Selecting"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selectables")),(0,r.kt)("td",{parentName:"tr",align:null},"[HTMLElement ","|"," SVGElement]"," ","|"," HTMLElement ","|"," SVGElement"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The elements that can be selected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"area")),(0,r.kt)("td",{parentName:"tr",align:null},"HTMLElement ","|"," SVGElement ","|"," Document"),(0,r.kt)("td",{parentName:"tr",align:null},"document"),(0,r.kt)("td",{parentName:"tr",align:null},"The square in which you are able to select the elements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selector")),(0,r.kt)("td",{parentName:"tr",align:null},"HTMLElement"),(0,r.kt)("td",{parentName:"tr",align:null},"Is Auto-Created"),(0,r.kt)("td",{parentName:"tr",align:null},"The square that will be used to draw the selection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selectionThreshold")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"How much % of the element has to be selected to be considered selected (0 = just touching, 1 = fully inside the selection)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"multiSelectMode")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Add newly selected elements to the selection instead of replacing them")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"multiSelectToggling")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not to toggle already active elements while multi-selecting (default mimics MacOS behavior)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"multiSelectKeys")),(0,r.kt)("td",{parentName:"tr",align:null},"['Shift'","|","'Control'","|","'Meta'","|","string]"),(0,r.kt)("td",{parentName:"tr",align:null},"['Control', 'Shift', 'Meta']"),(0,r.kt)("td",{parentName:"tr",align:null},"Keys for multi-selection. Any key value is possible (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},"see MDN docs"),"). The best support is given for ",(0,r.kt)("kbd",null,"Control"),", ",(0,r.kt)("kbd",null,"Shift")," and ",(0,r.kt)("kbd",null,"Meta"),". Provide an empty array ",(0,r.kt)("inlineCode",{parentName:"td"},"[]")," if you want to turn off the functionality.")))),(0,r.kt)("h2",{id:"autoscroll"},"AutoScroll"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"autoScrollSpeed")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"The speed in which the area scrolls while selecting (if available). The unit is arbitrary (aims for 30fps). Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"0.0001")," to disable auto-scrolling")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"overflowTolerance")),(0,r.kt)("td",{parentName:"tr",align:null},"{ x:number, y:number }"),(0,r.kt)("td",{parentName:"tr",align:null},"{ x: 25, y: 25 }"),(0,r.kt)("td",{parentName:"tr",align:null},"Tolerance for autoScroll (how close one has to be near an edges for autoScroll to start)")))),(0,r.kt)("h2",{id:"dragging"},"Dragging"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"draggability")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user is dragging on an already selected element, the selection is dragged.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useTransform")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use the more performant hardware accelerated css transforms when dragging instead of the top/left positions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"immediateDrag")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether a selectable element is draggable before being selected or needs to be selected first")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keyboardDrag")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not the user can drag with the keyboard (Accessibility).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dragKeys")),(0,r.kt)("td",{parentName:"tr",align:null},"{ up:string[], down:string[], left:string[], right:string[] }"),(0,r.kt)("td",{parentName:"tr",align:null},"{ up:","['ArrowUp']",", down: ","['ArrowDown']",", left: ","['ArrowLeft']",", right: ","['ArrowRight']"," }"),(0,r.kt)("td",{parentName:"tr",align:null},"The keys available to drag element using the keyboard. Any key value is possible (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},"see MDN docs"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keyboardDragSpeed")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"The speed at which elements are dragged using the keyboard. In pixels per keyDown.")))),(0,r.kt)("h2",{id:"dropping"},"Dropping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dropZones")),(0,r.kt)("td",{parentName:"tr",align:null},"[{ id:string, element:HTMLElement, droppables?: ","[HTMLElement ","|"," SVGElement]"," ","|"," HTMLElement ","|"," SVGElement }]"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Zones with association of droppable items that can be dropped into them. ",(0,r.kt)("inlineCode",{parentName:"td"},"id"),": any unique identifying string. ",(0,r.kt)("inlineCode",{parentName:"td"},"element"),": is the dropzone itself. ",(0,r.kt)("inlineCode",{parentName:"td"},"droppables"),": the elements that can be dropped into that zone. This is optional, by default it is all selectables")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dropInsideThreshold")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"How much % of the item has to be inside the dropzone to be considered inside (0 = barely touching, 1 = completely inside)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dropTargetThreshold")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"How much % of the zone does the pointer has to be in to be considered a target (0 = anywhere in the zone, max: 0.5 = has to point at the center of the zone)")))),(0,r.kt)("h2",{id:"styling"},"Styling"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customStyles")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, no styles will be automatically applied to the selector element (except position: absolute)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selectedClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-selected"),(0,r.kt)("td",{parentName:"tr",align:null},"The class name assigned to the selected items.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hoverClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-hover"),(0,r.kt)("td",{parentName:"tr",align:null},"The class name assigned to the mouse hovered items.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selectorClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-selector"),(0,r.kt)("td",{parentName:"tr",align:null},"The class name assigned to the square selector helper.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selectableClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-selectable"),(0,r.kt)("td",{parentName:"tr",align:null},"The class name assigned to the elements that can be selected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selectorAreaClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-selector-area"),(0,r.kt)("td",{parentName:"tr",align:null},"The class assigned to the square in which the selector resides. By default it's invisible")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"droppedTargetClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-dropped-target & ds-dropped-target-${zone.id}"),(0,r.kt)("td",{parentName:"tr",align:null},"On an item corresponding the target dropzone. This is also the prefix for ds-dropped-target-${zone.id}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"droppedInsideClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-dropped-inside & ds-dropped-inside-${zone.id}"),(0,r.kt)("td",{parentName:"tr",align:null},"On an item that is within its dropzone bounds after a drop. This is also the prefix for ds-dropped-inside-${zone.id}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"droppableClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-droppable & ds-droppable-${zone.id}"),(0,r.kt)("td",{parentName:"tr",align:null},"On element that can be dropped into at least one container. This is also the prefix for ds-droppable-${zone.id}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dropZoneClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-dropzone"),(0,r.kt)("td",{parentName:"tr",align:null},"On each dropZone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dropZoneReadyClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-dropzone-ready"),(0,r.kt)("td",{parentName:"tr",align:null},"On corresponding dropZone when element is dragged")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dropZoneTargetClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-dropzone-target"),(0,r.kt)("td",{parentName:"tr",align:null},"On dropZone that has elements from any successful target drop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dropZoneInsideClass")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ds-dropzone-inside"),(0,r.kt)("td",{parentName:"tr",align:null},"On dropZone that has elements inside after any drop")))),(0,r.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"refreshMemoryRate")),(0,r.kt)("td",{parentName:"tr",align:null},"number (milliseconds)"),(0,r.kt)("td",{parentName:"tr",align:null},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"Refresh rate on memoization, higher numbers mean better performance but more lag if elements are moving while interacting/selecting, lower numbers mean less lag but worse performance. If none of your DOMNodes are moving, you can set it to a very high number to increase performance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"usePointerEvents")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use Pointer Events to replace traditional Mouse or Touch Events. Useful for tools like Google Blockly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"zoom")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Zoom scale factor (in case of using CSS style transform: scale() which messes with real positions). Unit scale zoom. (deprecated)")))),(0,r.kt)("h2",{id:"dragselect-example-with-all-props"},"DragSelect Example with all Props"),(0,r.kt)("p",null,"Here is an example using all available settings for your convenience:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new DragSelect({\n  selectables: document.querySelectorAll('.selectable'),\n  area: document.querySelector('#area'),\n  selector: document.querySelector('#selector'),\n  selectionThreshold: 0,\n  multiSelectMode: false,\n  multiSelectToggling: true,\n  multiSelectKeys: ['Control', 'Shift', 'Meta'],\n  autoScrollSpeed: 5,\n  overflowTolerance: { x: 25, y: 25 },\n  draggability: true,\n  useTransform: true,\n  immediateDrag: true,\n  keyboardDrag: true,\n  dragKeys: { up:['ArrowUp'], down: ['ArrowDown'], left: ['ArrowLeft'], right: ['ArrowRight'] },\n  keyboardDragSpeed: 10,\n  dropZones: [{ id: 'foo', element: document.querySelector('#zone') }],\n  dropInsideThreshold: 1,\n  dropTargetThreshold: 0,\n  customStyles: false,\n  selectedClass: 'ds-selected',\n  hoverClass: 'ds-hover',\n  selectorClass: 'ds-selector',\n  selectableClass: 'ds-selectable',\n  selectorAreaClass: 'ds-selector-area',\n  droppedTargetClass: 'ds-dropped-target',\n  droppedInsideClass: 'ds-dropped-inside',\n  droppableClass: 'ds-droppable',\n  dropZoneClass: 'ds-dropzone',\n  dropZoneReadyClass: 'ds-dropzone-ready',\n  dropZoneTargetClass: 'ds-dropzone-target',\n  dropZoneInsideClass: 'ds-dropzone-inside',\n  refreshMemoryRate: 80,\n  usePointerEvents: false,\n  zoom: 1,\n});\n")))}u.isMDXComponent=!0}}]);