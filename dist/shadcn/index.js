"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const S=require("react/jsx-runtime"),m=require("react");function hr(r){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const t in r)if(t!=="default"){const o=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:()=>r[t]})}}return e.default=r,Object.freeze(e)}const yr=hr(m);function xr(r){return S.jsx("div",{className:"w-[300px] h-[100px]  bg-yellow-500",children:S.jsx("h1",{children:"button"})})}function V(){return V=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},V.apply(this,arguments)}function wr(r,e){typeof r=="function"?r(e):r!=null&&(r.current=e)}function Cr(...r){return e=>r.forEach(t=>wr(t,e))}const lr=m.forwardRef((r,e)=>{const{children:t,...o}=r,s=m.Children.toArray(t),a=s.find(Sr);if(a){const n=a.props.children,i=s.map(d=>d===a?m.Children.count(n)>1?m.Children.only(null):m.isValidElement(n)?n.props.children:null:d);return m.createElement(U,V({},o,{ref:e}),m.isValidElement(n)?m.cloneElement(n,void 0,i):null)}return m.createElement(U,V({},o,{ref:e}),t)});lr.displayName="Slot";const U=m.forwardRef((r,e)=>{const{children:t,...o}=r;return m.isValidElement(t)?m.cloneElement(t,{...Ar(o,t.props),ref:e?Cr(e,t.ref):t.ref}):m.Children.count(t)>1?m.Children.only(null):null});U.displayName="SlotClone";const kr=({children:r})=>m.createElement(m.Fragment,null,r);function Sr(r){return m.isValidElement(r)&&r.type===kr}function Ar(r,e){const t={...e};for(const o in e){const s=r[o],a=e[o];/^on[A-Z]/.test(o)?s&&a?t[o]=(...i)=>{a(...i),s(...i)}:s&&(t[o]=s):o==="style"?t[o]={...s,...a}:o==="className"&&(t[o]=[s,a].filter(Boolean).join(" "))}return{...r,...t}}function cr(r){var e,t,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r))for(e=0;e<r.length;e++)r[e]&&(t=cr(r[e]))&&(o&&(o+=" "),o+=t);else for(e in r)r[e]&&(o&&(o+=" "),o+=e);return o}function dr(){for(var r,e,t=0,o="";t<arguments.length;)(r=arguments[t++])&&(e=cr(r))&&(o&&(o+=" "),o+=e);return o}const tr=r=>typeof r=="boolean"?"".concat(r):r===0?"0":r,or=dr,Mr=(r,e)=>t=>{var o;if((e==null?void 0:e.variants)==null)return or(r,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:s,defaultVariants:a}=e,n=Object.keys(s).map(c=>{const f=t==null?void 0:t[c],u=a==null?void 0:a[c];if(f===null)return null;const g=tr(f)||tr(u);return s[c][g]}),i=t&&Object.entries(t).reduce((c,f)=>{let[u,g]=f;return g===void 0||(c[u]=g),c},{}),d=e==null||(o=e.compoundVariants)===null||o===void 0?void 0:o.reduce((c,f)=>{let{class:u,className:g,...y}=f;return Object.entries(y).every(x=>{let[v,h]=x;return Array.isArray(h)?h.includes({...a,...i}[v]):{...a,...i}[v]===h})?[...c,u,g]:c},[]);return or(r,n,d,t==null?void 0:t.class,t==null?void 0:t.className)};function zr(){for(var r=0,e,t,o="";r<arguments.length;)(e=arguments[r++])&&(t=ur(e))&&(o&&(o+=" "),o+=t);return o}function ur(r){if(typeof r=="string")return r;for(var e,t="",o=0;o<r.length;o++)r[o]&&(e=ur(r[o]))&&(t&&(t+=" "),t+=e);return t}var Z="-";function jr(r){var e=Ir(r),t=r.conflictingClassGroups,o=r.conflictingClassGroupModifiers,s=o===void 0?{}:o;function a(i){var d=i.split(Z);return d[0]===""&&d.length!==1&&d.shift(),fr(d,e)||Gr(i)}function n(i,d){var c=t[i]||[];return d&&s[i]?[].concat(c,s[i]):c}return{getClassGroupId:a,getConflictingClassGroupIds:n}}function fr(r,e){var n;if(r.length===0)return e.classGroupId;var t=r[0],o=e.nextPart.get(t),s=o?fr(r.slice(1),o):void 0;if(s)return s;if(e.validators.length!==0){var a=r.join(Z);return(n=e.validators.find(function(i){var d=i.validator;return d(a)}))==null?void 0:n.classGroupId}}var nr=/^\[(.+)\]$/;function Gr(r){if(nr.test(r)){var e=nr.exec(r)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}}function Ir(r){var e=r.theme,t=r.prefix,o={nextPart:new Map,validators:[]},s=Er(Object.entries(r.classGroups),t);return s.forEach(function(a){var n=a[0],i=a[1];F(i,o,n,e)}),o}function F(r,e,t,o){r.forEach(function(s){if(typeof s=="string"){var a=s===""?e:ir(e,s);a.classGroupId=t;return}if(typeof s=="function"){if(Pr(s)){F(s(o),e,t,o);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(function(n){var i=n[0],d=n[1];F(d,ir(e,i),t,o)})})}function ir(r,e){var t=r;return e.split(Z).forEach(function(o){t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function Pr(r){return r.isThemeGetter}function Er(r,e){return e?r.map(function(t){var o=t[0],s=t[1],a=s.map(function(n){return typeof n=="string"?e+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(function(i){var d=i[0],c=i[1];return[e+d,c]})):n});return[o,a]}):r}function Nr(r){if(r<1)return{get:function(){},set:function(){}};var e=0,t=new Map,o=new Map;function s(a,n){t.set(a,n),e++,e>r&&(e=0,o=t,t=new Map)}return{get:function(n){var i=t.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return s(n,i),i},set:function(n,i){t.has(n)?t.set(n,i):s(n,i)}}}var pr="!";function Rr(r){var e=r.separator||":",t=e.length===1,o=e[0],s=e.length;return function(n){for(var i=[],d=0,c=0,f,u=0;u<n.length;u++){var g=n[u];if(d===0){if(g===o&&(t||n.slice(u,u+s)===e)){i.push(n.slice(c,u)),c=u+s;continue}if(g==="/"){f=u;continue}}g==="["?d++:g==="]"&&d--}var y=i.length===0?n:n.substring(c),x=y.startsWith(pr),v=x?y.substring(1):y,h=f&&f>c?f-c:void 0;return{modifiers:i,hasImportantModifier:x,baseClassName:v,maybePostfixModifierPosition:h}}}function $r(r){if(r.length<=1)return r;var e=[],t=[];return r.forEach(function(o){var s=o[0]==="[";s?(e.push.apply(e,t.sort().concat([o])),t=[]):t.push(o)}),e.push.apply(e,t.sort()),e}function Or(r){return{cache:Nr(r.cacheSize),splitModifiers:Rr(r),...jr(r)}}var Vr=/\s+/;function Tr(r,e){var t=e.splitModifiers,o=e.getClassGroupId,s=e.getConflictingClassGroupIds,a=new Set;return r.trim().split(Vr).map(function(n){var i=t(n),d=i.modifiers,c=i.hasImportantModifier,f=i.baseClassName,u=i.maybePostfixModifierPosition,g=o(u?f.substring(0,u):f),y=!!u;if(!g){if(!u)return{isTailwindClass:!1,originalClassName:n};if(g=o(f),!g)return{isTailwindClass:!1,originalClassName:n};y=!1}var x=$r(d).join(":"),v=c?x+pr:x;return{isTailwindClass:!0,modifierId:v,classGroupId:g,originalClassName:n,hasPostfixModifier:y}}).reverse().filter(function(n){if(!n.isTailwindClass)return!0;var i=n.modifierId,d=n.classGroupId,c=n.hasPostfixModifier,f=i+d;return a.has(f)?!1:(a.add(f),s(d,c).forEach(function(u){return a.add(i+u)}),!0)}).reverse().map(function(n){return n.originalClassName}).join(" ")}function Wr(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];var o,s,a,n=i;function i(c){var f=e[0],u=e.slice(1),g=u.reduce(function(y,x){return x(y)},f());return o=Or(g),s=o.cache.get,a=o.cache.set,n=d,d(c)}function d(c){var f=s(c);if(f)return f;var u=Tr(c,o);return a(c,u),u}return function(){return n(zr.apply(null,arguments))}}function p(r){var e=function(o){return o[r]||[]};return e.isThemeGetter=!0,e}var br=/^\[(?:([a-z-]+):)?(.+)\]$/i,Lr=/^\d+\/\d+$/,Br=new Set(["px","full","screen"]),_r=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ur=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Fr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function C(r){return z(r)||Br.has(r)||Lr.test(r)||q(r)}function q(r){return j(r,"length",Xr)}function qr(r){return j(r,"size",gr)}function Zr(r){return j(r,"position",gr)}function Hr(r){return j(r,"url",Qr)}function O(r){return j(r,"number",z)}function z(r){return!Number.isNaN(Number(r))}function Jr(r){return r.endsWith("%")&&z(r.slice(0,-1))}function P(r){return ar(r)||j(r,"number",ar)}function l(r){return br.test(r)}function E(){return!0}function M(r){return _r.test(r)}function Kr(r){return j(r,"",Yr)}function j(r,e,t){var o=br.exec(r);return o?o[1]?o[1]===e:t(o[2]):!1}function Xr(r){return Ur.test(r)}function gr(){return!1}function Qr(r){return r.startsWith("url(")}function ar(r){return Number.isInteger(Number(r))}function Yr(r){return Fr.test(r)}function Dr(){var r=p("colors"),e=p("spacing"),t=p("blur"),o=p("brightness"),s=p("borderColor"),a=p("borderRadius"),n=p("borderSpacing"),i=p("borderWidth"),d=p("contrast"),c=p("grayscale"),f=p("hueRotate"),u=p("invert"),g=p("gap"),y=p("gradientColorStops"),x=p("gradientColorStopPositions"),v=p("inset"),h=p("margin"),A=p("opacity"),k=p("padding"),H=p("saturate"),T=p("scale"),J=p("sepia"),K=p("skew"),X=p("space"),Q=p("translate"),W=function(){return["auto","contain","none"]},L=function(){return["auto","hidden","clip","visible","scroll"]},B=function(){return["auto",l,e]},b=function(){return[l,e]},Y=function(){return["",C]},N=function(){return["auto",z,l]},D=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},R=function(){return["solid","dashed","dotted","double","none"]},rr=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},_=function(){return["start","end","center","between","around","evenly","stretch"]},G=function(){return["","0",l]},er=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},I=function(){return[z,O]},$=function(){return[z,l]};return{cacheSize:500,theme:{colors:[E],spacing:[C],blur:["none","",M,l],brightness:I(),borderColor:[r],borderRadius:["none","","full",M,l],borderSpacing:b(),borderWidth:Y(),contrast:I(),grayscale:G(),hueRotate:$(),invert:G(),gap:b(),gradientColorStops:[r],gradientColorStopPositions:[Jr,q],inset:B(),margin:B(),opacity:I(),padding:b(),saturate:I(),scale:I(),sepia:G(),skew:$(),space:b(),translate:b()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":er()}],"break-before":[{"break-before":er()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(D(),[l])}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",P]}],"grid-cols":[{"grid-cols":[E]}],"col-start-end":[{col:["auto",{span:["full",P]},l]}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":[E]}],"row-start-end":[{row:["auto",{span:[P]},l]}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal"].concat(_())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(_(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(_(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[X]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[X]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",l,e]}],"min-w":[{"min-w":["min","max","fit",l,C]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[M]},M,l]}],h:[{h:[l,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",l,C]}],"max-h":[{"max-h":[l,e,"min","max","fit"]}],"font-size":[{text:["base",M,q]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",O]}],"font-family":[{font:[E]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",z,O]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",l,C]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(R(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",C]}],"underline-offset":[{"underline-offset":["auto",l,C]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:b()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(D(),[Zr])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",qr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Hr]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[].concat(R(),["hidden"])}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:R()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:[""].concat(R())}],"outline-offset":[{"outline-offset":[l,C]}],"outline-w":[{outline:[C]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:Y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[C]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",M,Kr]}],"shadow-color":[{shadow:[E]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":rr()}],"bg-blend":[{"bg-blend":rr()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",M,l]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[u]}],saturate:[{saturate:[H]}],sepia:[{sepia:[J]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[H]}],"backdrop-sepia":[{"backdrop-sepia":[J]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:$()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:$()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[T]}],"scale-x":[{"scale-x":[T]}],"scale-y":[{"scale-y":[T]}],rotate:[{rotate:[P,l]}],"translate-x":[{"translate-x":[Q]}],"translate-y":[{"translate-y":[Q]}],"skew-x":[{"skew-x":[K]}],"skew-y":[{"skew-y":[K]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":b()}],"scroll-mx":[{"scroll-mx":b()}],"scroll-my":[{"scroll-my":b()}],"scroll-ms":[{"scroll-ms":b()}],"scroll-me":[{"scroll-me":b()}],"scroll-mt":[{"scroll-mt":b()}],"scroll-mr":[{"scroll-mr":b()}],"scroll-mb":[{"scroll-mb":b()}],"scroll-ml":[{"scroll-ml":b()}],"scroll-p":[{"scroll-p":b()}],"scroll-px":[{"scroll-px":b()}],"scroll-py":[{"scroll-py":b()}],"scroll-ps":[{"scroll-ps":b()}],"scroll-pe":[{"scroll-pe":b()}],"scroll-pt":[{"scroll-pt":b()}],"scroll-pr":[{"scroll-pr":b()}],"scroll-pb":[{"scroll-pb":b()}],"scroll-pl":[{"scroll-pl":b()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[C,O]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var re=Wr(Dr);function ee(...r){return re(dr(r))}const mr=Mr("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),vr=yr.forwardRef(({className:r,variant:e,size:t,asChild:o=!1,...s},a)=>{const n=o?lr:"button";return S.jsx(n,{className:ee(mr({variant:e,size:t,className:r})),ref:a,...s})});vr.displayName="Button";const te="_container_10thy_9",oe="_container2_10thy_16",sr={container:te,container2:oe};function ne(r){return S.jsxs(S.Fragment,{children:[S.jsx("div",{className:sr.container,children:S.jsx("h1",{children:"Welcome to Shadcn!"})}),S.jsx("div",{className:sr.container2,children:S.jsx("h1",{children:"this is DIV"})})]})}exports.Button=vr;exports.ButtonComp=xr;exports.Shadcn=ne;exports.buttonVariants=mr;
