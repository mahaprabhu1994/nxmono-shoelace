"use strict";function Dl(t,e){for(var o=0;o<e.length;o++){const r=e[o];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const a=Object.getOwnPropertyDescriptor(r,s);a&&Object.defineProperty(t,s,a.get?a:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sr=window,ps=sr.ShadowRoot&&(sr.ShadyCSS===void 0||sr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fs=Symbol(),ci=new WeakMap;let qi=class{constructor(e,o,r){if(this._$cssResult$=!0,r!==fs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(ps&&e===void 0){const r=o!==void 0&&o.length===1;r&&(e=ci.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ci.set(o,e))}return e}toString(){return this.cssText}};const Pl=t=>new qi(typeof t=="string"?t:t+"",void 0,fs),B=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((r,s,a)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[a+1],t[0]);return new qi(o,t,fs)},Ml=(t,e)=>{ps?t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):e.forEach(o=>{const r=document.createElement("style"),s=sr.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=o.cssText,t.appendChild(r)})},di=ps?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const r of e.cssRules)o+=r.cssText;return Pl(o)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mr;const nr=window,ui=nr.trustedTypes,Fl=ui?ui.emptyScript:"",hi=nr.reactiveElementPolyfillSupport,Co={toAttribute(t,e){switch(e){case Boolean:t=t?Fl:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},Wi=(t,e)=>e!==t&&(e==e||t==t),Fr={attribute:!0,type:String,converter:Co,reflect:!1,hasChanged:Wi},Jr="finalized";let Xe=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var o;this.finalize(),((o=this.h)!==null&&o!==void 0?o:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((o,r)=>{const s=this._$Ep(r,o);s!==void 0&&(this._$Ev.set(s,r),e.push(s))}),e}static createProperty(e,o=Fr){if(o.state&&(o.attribute=!1),this.finalize(),this.elementProperties.set(e,o),!o.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,r,o);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,o,r){return{get(){return this[o]},set(s){const a=this[e];this[o]=s,this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Fr}static finalize(){if(this.hasOwnProperty(Jr))return!1;this[Jr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const o=this.properties,r=[...Object.getOwnPropertyNames(o),...Object.getOwnPropertySymbols(o)];for(const s of r)this.createProperty(s,o[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)o.unshift(di(s))}else e!==void 0&&o.push(di(e));return o}static _$Ep(e,o){const r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(o=>o(this))}addController(e){var o,r;((o=this._$ES)!==null&&o!==void 0?o:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var o;(o=this._$ES)===null||o===void 0||o.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,o)=>{this.hasOwnProperty(o)&&(this._$Ei.set(o,this[o]),delete this[o])})}createRenderRoot(){var e;const o=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ml(o,this.constructor.elementStyles),o}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostConnected)===null||r===void 0?void 0:r.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var r;return(r=o.hostDisconnected)===null||r===void 0?void 0:r.call(o)})}attributeChangedCallback(e,o,r){this._$AK(e,r)}_$EO(e,o,r=Fr){var s;const a=this.constructor._$Ep(e,r);if(a!==void 0&&r.reflect===!0){const n=(((s=r.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?r.converter:Co).toAttribute(o,r.type);this._$El=e,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$El=null}}_$AK(e,o){var r;const s=this.constructor,a=s._$Ev.get(e);if(a!==void 0&&this._$El!==a){const n=s.getPropertyOptions(a),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Co;this._$El=a,this[a]=h.fromAttribute(o,n.type),this._$El=null}}requestUpdate(e,o,r){let s=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Wi)(this[e],o)?(this._$AL.has(e)||this._$AL.set(e,o),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,a)=>this[a]=s),this._$Ei=void 0);let o=!1;const r=this._$AL;try{o=this.shouldUpdate(r),o?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var a;return(a=s.hostUpdate)===null||a===void 0?void 0:a.call(s)}),this.update(r)):this._$Ek()}catch(s){throw o=!1,this._$Ek(),s}o&&this._$AE(r)}willUpdate(e){}_$AE(e){var o;(o=this._$ES)===null||o===void 0||o.forEach(r=>{var s;return(s=r.hostUpdated)===null||s===void 0?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((o,r)=>this._$EO(r,this[r],o)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Xe[Jr]=!0,Xe.elementProperties=new Map,Xe.elementStyles=[],Xe.shadowRootOptions={mode:"open"},hi==null||hi({ReactiveElement:Xe}),((Mr=nr.reactiveElementVersions)!==null&&Mr!==void 0?Mr:nr.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vr;const cr=window,Je=cr.trustedTypes,pi=Je?Je.createPolicy("lit-html",{createHTML:t=>t}):void 0,ts="$lit$",ze=`lit$${(Math.random()+"").slice(9)}$`,Ki="?"+ze,Vl=`<${Ki}>`,Ve=document,$o=()=>Ve.createComment(""),So=t=>t===null||typeof t!="object"&&typeof t!="function",Yi=Array.isArray,Bl=t=>Yi(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Br=`[ 	
\f\r]`,uo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fi=/-->/g,mi=/>/g,De=RegExp(`>|${Br}(?:([^\\s"'>=/]+)(${Br}*=${Br}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gi=/'/g,bi=/"/g,Gi=/^(?:script|style|textarea|title)$/i,Ul=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),$=Ul(1),Xt=Symbol.for("lit-noChange"),yt=Symbol.for("lit-nothing"),vi=new WeakMap,Me=Ve.createTreeWalker(Ve,129,null,!1);function Xi(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return pi!==void 0?pi.createHTML(e):e}const Nl=(t,e)=>{const o=t.length-1,r=[];let s,a=e===2?"<svg>":"",n=uo;for(let h=0;h<o;h++){const d=t[h];let u,b,p=-1,m=0;for(;m<d.length&&(n.lastIndex=m,b=n.exec(d),b!==null);)m=n.lastIndex,n===uo?b[1]==="!--"?n=fi:b[1]!==void 0?n=mi:b[2]!==void 0?(Gi.test(b[2])&&(s=RegExp("</"+b[2],"g")),n=De):b[3]!==void 0&&(n=De):n===De?b[0]===">"?(n=s??uo,p=-1):b[1]===void 0?p=-2:(p=n.lastIndex-b[2].length,u=b[1],n=b[3]===void 0?De:b[3]==='"'?bi:gi):n===bi||n===gi?n=De:n===fi||n===mi?n=uo:(n=De,s=void 0);const g=n===De&&t[h+1].startsWith("/>")?" ":"";a+=n===uo?d+Vl:p>=0?(r.push(u),d.slice(0,p)+ts+d.slice(p)+ze+g):d+ze+(p===-2?(r.push(void 0),h):g)}return[Xi(t,a+(t[o]||"<?>")+(e===2?"</svg>":"")),r]};class zo{constructor({strings:e,_$litType$:o},r){let s;this.parts=[];let a=0,n=0;const h=e.length-1,d=this.parts,[u,b]=Nl(e,o);if(this.el=zo.createElement(u,r),Me.currentNode=this.el.content,o===2){const p=this.el.content,m=p.firstChild;m.remove(),p.append(...m.childNodes)}for(;(s=Me.nextNode())!==null&&d.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const p=[];for(const m of s.getAttributeNames())if(m.endsWith(ts)||m.startsWith(ze)){const g=b[n++];if(p.push(m),g!==void 0){const v=s.getAttribute(g.toLowerCase()+ts).split(ze),k=/([.?@])?(.*)/.exec(g);d.push({type:1,index:a,name:k[2],strings:v,ctor:k[1]==="."?jl:k[1]==="?"?Wl:k[1]==="@"?Kl:gr})}else d.push({type:6,index:a})}for(const m of p)s.removeAttribute(m)}if(Gi.test(s.tagName)){const p=s.textContent.split(ze),m=p.length-1;if(m>0){s.textContent=Je?Je.emptyScript:"";for(let g=0;g<m;g++)s.append(p[g],$o()),Me.nextNode(),d.push({type:2,index:++a});s.append(p[m],$o())}}}else if(s.nodeType===8)if(s.data===Ki)d.push({type:2,index:a});else{let p=-1;for(;(p=s.data.indexOf(ze,p+1))!==-1;)d.push({type:7,index:a}),p+=ze.length-1}a++}}static createElement(e,o){const r=Ve.createElement("template");return r.innerHTML=e,r}}function to(t,e,o=t,r){var s,a,n,h;if(e===Xt)return e;let d=r!==void 0?(s=o._$Co)===null||s===void 0?void 0:s[r]:o._$Cl;const u=So(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==u&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),u===void 0?d=void 0:(d=new u(t),d._$AT(t,o,r)),r!==void 0?((n=(h=o)._$Co)!==null&&n!==void 0?n:h._$Co=[])[r]=d:o._$Cl=d),d!==void 0&&(e=to(t,d._$AS(t,e.values),d,r)),e}class Hl{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var o;const{el:{content:r},parts:s}=this._$AD,a=((o=e==null?void 0:e.creationScope)!==null&&o!==void 0?o:Ve).importNode(r,!0);Me.currentNode=a;let n=Me.nextNode(),h=0,d=0,u=s[0];for(;u!==void 0;){if(h===u.index){let b;u.type===2?b=new Ao(n,n.nextSibling,this,e):u.type===1?b=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(b=new Yl(n,this,e)),this._$AV.push(b),u=s[++d]}h!==(u==null?void 0:u.index)&&(n=Me.nextNode(),h++)}return Me.currentNode=Ve,a}v(e){let o=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,o),o+=r.strings.length-2):r._$AI(e[o])),o++}}class Ao{constructor(e,o,r,s){var a;this.type=2,this._$AH=yt,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=r,this.options=s,this._$Cp=(a=s==null?void 0:s.isConnected)===null||a===void 0||a}get _$AU(){var e,o;return(o=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&o!==void 0?o:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=to(this,e,o),So(e)?e===yt||e==null||e===""?(this._$AH!==yt&&this._$AR(),this._$AH=yt):e!==this._$AH&&e!==Xt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Bl(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==yt&&So(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ve.createTextNode(e)),this._$AH=e}g(e){var o;const{values:r,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=zo.createElement(Xi(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)===null||o===void 0?void 0:o._$AD)===a)this._$AH.v(r);else{const n=new Hl(a,this),h=n.u(this.options);n.v(r),this.$(h),this._$AH=n}}_$AC(e){let o=vi.get(e.strings);return o===void 0&&vi.set(e.strings,o=new zo(e)),o}T(e){Yi(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let r,s=0;for(const a of e)s===o.length?o.push(r=new Ao(this.k($o()),this.k($o()),this,this.options)):r=o[s],r._$AI(a),s++;s<o.length&&(this._$AR(r&&r._$AB.nextSibling,s),o.length=s)}_$AR(e=this._$AA.nextSibling,o){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,o);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var o;this._$AM===void 0&&(this._$Cp=e,(o=this._$AP)===null||o===void 0||o.call(this,e))}}class gr{constructor(e,o,r,s,a){this.type=1,this._$AH=yt,this._$AN=void 0,this.element=e,this.name=o,this._$AM=s,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=yt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,o=this,r,s){const a=this.strings;let n=!1;if(a===void 0)e=to(this,e,o,0),n=!So(e)||e!==this._$AH&&e!==Xt,n&&(this._$AH=e);else{const h=e;let d,u;for(e=a[0],d=0;d<a.length-1;d++)u=to(this,h[r+d],o,d),u===Xt&&(u=this._$AH[d]),n||(n=!So(u)||u!==this._$AH[d]),u===yt?e=yt:e!==yt&&(e+=(u??"")+a[d+1]),this._$AH[d]=u}n&&!s&&this.j(e)}j(e){e===yt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let jl=class extends gr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===yt?void 0:e}};const ql=Je?Je.emptyScript:"";class Wl extends gr{constructor(){super(...arguments),this.type=4}j(e){e&&e!==yt?this.element.setAttribute(this.name,ql):this.element.removeAttribute(this.name)}}class Kl extends gr{constructor(e,o,r,s,a){super(e,o,r,s,a),this.type=5}_$AI(e,o=this){var r;if((e=(r=to(this,e,o,0))!==null&&r!==void 0?r:yt)===Xt)return;const s=this._$AH,a=e===yt&&s!==yt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==yt&&(s===yt||a);a&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o,r;typeof this._$AH=="function"?this._$AH.call((r=(o=this.options)===null||o===void 0?void 0:o.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class Yl{constructor(e,o,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){to(this,e)}}const yi=cr.litHtmlPolyfillSupport;yi==null||yi(zo,Ao),((Vr=cr.litHtmlVersions)!==null&&Vr!==void 0?Vr:cr.litHtmlVersions=[]).push("2.8.0");const Gl=(t,e,o)=>{var r,s;const a=(r=o==null?void 0:o.renderBefore)!==null&&r!==void 0?r:e;let n=a._$litPart$;if(n===void 0){const h=(s=o==null?void 0:o.renderBefore)!==null&&s!==void 0?s:null;a._$litPart$=n=new Ao(e.insertBefore($o(),h),h,void 0,o??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ur,Nr;let vo=class extends Xe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,o;const r=super.createRenderRoot();return(e=(o=this.renderOptions).renderBefore)!==null&&e!==void 0||(o.renderBefore=r.firstChild),r}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Gl(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Xt}};vo.finalized=!0,vo._$litElement$=!0,(Ur=globalThis.litElementHydrateSupport)===null||Ur===void 0||Ur.call(globalThis,{LitElement:vo});const _i=globalThis.litElementPolyfillSupport;_i==null||_i({LitElement:vo});((Nr=globalThis.litElementVersions)!==null&&Nr!==void 0?Nr:globalThis.litElementVersions=[]).push("3.3.3");var N=B`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Xl=B`
  ${N}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,es="";function os(t){es=t}function Ql(t=""){if(!es){const e=[...document.getElementsByTagName("script")],o=e.find(r=>r.hasAttribute("data-shoelace"));if(o)os(o.getAttribute("data-shoelace"));else{const r=e.find(a=>/shoelace(\.min)?\.js($|\?)/.test(a.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(a.src));let s="";r&&(s=r.getAttribute("src")),os(s.split("/").slice(0,-1).join("/"))}}return es.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Zl={name:"default",resolver:t=>Ql(`assets/icons/${t}.svg`)},Jl=Zl,wi={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16" part="svg">
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},tn={name:"system",resolver:t=>t in wi?`data:image/svg+xml,${encodeURIComponent(wi[t])}`:""},en=tn,on=[Jl,en],rs=[];function rn(t){rs.push(t)}function sn(t){rs=rs.filter(e=>e!==t)}function xi(t){return on.find(e=>e.name===t)}var an=B`
  ${N}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Qi=Object.defineProperty,ln=Object.defineProperties,nn=Object.getOwnPropertyDescriptor,cn=Object.getOwnPropertyDescriptors,ki=Object.getOwnPropertySymbols,dn=Object.prototype.hasOwnProperty,un=Object.prototype.propertyIsEnumerable,Ci=(t,e,o)=>e in t?Qi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,ke=(t,e)=>{for(var o in e||(e={}))dn.call(e,o)&&Ci(t,o,e[o]);if(ki)for(var o of ki(e))un.call(e,o)&&Ci(t,o,e[o]);return t},To=(t,e)=>ln(t,cn(e)),i=(t,e,o,r)=>{for(var s=r>1?void 0:r?nn(e,o):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(s=(r?n(e,o,s):n(s))||s);return r&&s&&Qi(e,o,s),s};function E(t,e){const o=ke({waitUntilFirstUpdate:!1},e);return(r,s)=>{const{update:a}=r,n=Array.isArray(t)?t:[t];r.update=function(h){n.forEach(d=>{const u=d;if(h.has(u)){const b=h.get(u),p=this[u];b!==p&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[s](b,p)}}),a.call(this,h)}}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}},pn=(t,e,o)=>{e.constructor.createProperty(o,t)};function c(t){return(e,o)=>o!==void 0?pn(t,e,o):hn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function q(t){return c({...t,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ms=({finisher:t,descriptor:e})=>(o,r)=>{var s;if(r===void 0){const a=(s=o.originalKey)!==null&&s!==void 0?s:o.key,n=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(o.key)}:{...o,key:a};return t!=null&&(n.finisher=function(h){t(h,a)}),n}{const a=o.constructor;e!==void 0&&Object.defineProperty(o,r,e(r)),t==null||t(a,r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zi(t){return ms({finisher:(e,o)=>{Object.assign(e.prototype[o],t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function R(t,e){return ms({descriptor:o=>{const r={get(){var s,a;return(a=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(t))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(e){const s=typeof o=="symbol"?Symbol():"__"+o;r.get=function(){var a,n;return this[s]===void 0&&(this[s]=(n=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(t))!==null&&n!==void 0?n:null),this[s]}}return r}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fn(t){return ms({descriptor:e=>({async get(){var o;return await this.updateComplete,(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(t)},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hr;((Hr=window.HTMLSlotElement)===null||Hr===void 0?void 0:Hr.prototype.assignedElements)!=null;var P=class extends vo{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,ke({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const r=customElements.get(t);if(!r){customElements.define(t,class extends e{},o);return}let s=" (unknown version)",a=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in r&&r.version&&(a=" v"+r.version),!(s&&a&&s===a)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${a} has already been registered.`)}};P.version="2.9.0";P.dependencies={};i([c()],P.prototype,"dir",2);i([c()],P.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn=(t,e)=>e===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===e,Ji=t=>t.strings===void 0,gn={},bn=(t,e=gn)=>t._$AH=e;var ho=Symbol(),Zo=Symbol(),jr,qr=new Map,ut=class extends P{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let r;if(e!=null&&e.spriteSheet)return $`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?ho:Zo}catch{return Zo}try{const s=document.createElement("div");s.innerHTML=await r.text();const a=s.firstElementChild;if(((o=a==null?void 0:a.tagName)==null?void 0:o.toLowerCase())!=="svg")return ho;jr||(jr=new DOMParser);const h=jr.parseFromString(a.outerHTML,"text/html").body.querySelector("svg");return h?(h.part.add("svg"),document.adoptNode(h)):ho}catch{return ho}}connectedCallback(){super.connectedCallback(),rn(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),sn(this)}getIconSource(){const t=xi(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),r=o?xi(this.library):void 0;if(!e){this.svg=null;return}let s=qr.get(e);if(s||(s=this.resolveIcon(e,r),qr.set(e,s)),!this.initialRender)return;const a=await s;if(a===Zo&&qr.delete(e),e===this.getIconSource().url){if(mn(a)){this.svg=a;return}switch(a){case Zo:case ho:this.svg=null,this.emit("sl-error");break;default:this.svg=a.cloneNode(!0),(t=r==null?void 0:r.mutator)==null||t.call(r,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ut.styles=an;i([q()],ut.prototype,"svg",2);i([c({reflect:!0})],ut.prototype,"name",2);i([c()],ut.prototype,"src",2);i([c()],ut.prototype,"label",2);i([c({reflect:!0})],ut.prototype,"library",2);i([E("label")],ut.prototype,"handleLabelChange",1);i([E(["name","src","library"])],ut.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Oo=t=>(...e)=>({_$litDirective$:t,values:e});let Ro=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,r){this._$Ct=e,this._$AM=o,this._$Ci=r}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=Oo(class extends Ro{constructor(t){var e;if(super(t),t.type!==he.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!(!((o=this.nt)===null||o===void 0)&&o.has(a))&&this.it.add(a);return this.render(e)}const s=t.element.classList;this.it.forEach(a=>{a in e||(s.remove(a),this.it.delete(a))});for(const a in e){const n=!!e[a];n===this.it.has(a)||!((r=this.nt)===null||r===void 0)&&r.has(a)||(n?(s.add(a),this.it.add(a)):(s.remove(a),this.it.delete(a)))}return Xt}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ta=Symbol.for(""),vn=t=>{if((t==null?void 0:t.r)===ta)return t==null?void 0:t._$litStatic$},dr=(t,...e)=>({_$litStatic$:e.reduce((o,r,s)=>o+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[s+1],t[0]),r:ta}),$i=new Map,yn=t=>(e,...o)=>{const r=o.length;let s,a;const n=[],h=[];let d,u=0,b=!1;for(;u<r;){for(d=e[u];u<r&&(a=o[u],(s=vn(a))!==void 0);)d+=s+e[++u],b=!0;u!==r&&h.push(a),n.push(d),u++}if(u===r&&n.push(e[r]),b){const p=n.join("$$lit$$");(e=$i.get(p))===void 0&&(n.raw=n,$i.set(p,e=n)),o=h}return t(e,...o)},yo=yn($);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=t=>t??yt;var It=class extends P{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?dr`a`:dr`button`;return yo`
      <${e}
        part="base"
        class=${j({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${M(t?void 0:this.disabled)}
        type=${M(t?void 0:"button")}
        href=${M(t?this.href:void 0)}
        target=${M(t?this.target:void 0)}
        download=${M(t?this.download:void 0)}
        rel=${M(t&&this.target?"noreferrer noopener":void 0)}
        role=${M(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${M(this.name)}
          library=${M(this.library)}
          src=${M(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};It.styles=Xl;It.dependencies={"sl-icon":ut};i([R(".icon-button")],It.prototype,"button",2);i([q()],It.prototype,"hasFocus",2);i([c()],It.prototype,"name",2);i([c()],It.prototype,"library",2);i([c()],It.prototype,"src",2);i([c()],It.prototype,"href",2);i([c()],It.prototype,"target",2);i([c()],It.prototype,"download",2);i([c()],It.prototype,"label",2);i([c({type:Boolean,reflect:!0})],It.prototype,"disabled",2);var ea=new Map,_n=new WeakMap;function wn(t){return t??{keyframes:[],options:{duration:0}}}function Si(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function it(t,e){ea.set(t,wn(e))}function _t(t,e,o){const r=_n.get(t);if(r!=null&&r[e])return Si(r[e],o.dir);const s=ea.get(e);return s?Si(s,o.dir):{keyframes:[],options:{duration:0}}}function qt(t,e){return new Promise(o=>{function r(s){s.target===t&&(t.removeEventListener(e,r),o())}t.addEventListener(e,r)})}function Ct(t,e,o){return new Promise(r=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,To(ke({},o),{duration:gs()?0:o.duration}));s.addEventListener("cancel",r,{once:!0}),s.addEventListener("finish",r,{once:!0})})}function zi(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function gs(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Tt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{const r=requestAnimationFrame(o);e.addEventListener("cancel",()=>r,{once:!0}),e.addEventListener("finish",()=>r,{once:!0}),e.cancel()})))}function ur(t,e){return t.map(o=>To(ke({},o),{height:o.height==="auto"?`${e}px`:o.height}))}const ss=new Set,xn=new MutationObserver(sa),Qe=new Map;let oa=document.documentElement.dir||"ltr",ra=document.documentElement.lang||navigator.language,Pe;xn.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function kn(...t){t.map(e=>{const o=e.$code.toLowerCase();Qe.has(o)?Qe.set(o,Object.assign(Object.assign({},Qe.get(o)),e)):Qe.set(o,e),Pe||(Pe=e)}),sa()}function sa(){oa=document.documentElement.dir||"ltr",ra=document.documentElement.lang||navigator.language,[...ss.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Cn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ss.add(this.host)}hostDisconnected(){ss.delete(this.host)}dir(){return`${this.host.dir||oa}`.toLowerCase()}lang(){return`${this.host.lang||ra}`.toLowerCase()}getTranslationData(e){var o,r;const s=new Intl.Locale(e.replace(/_/g,"-")),a=s==null?void 0:s.language.toLowerCase(),n=(r=(o=s==null?void 0:s.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&r!==void 0?r:"",h=Qe.get(`${a}-${n}`),d=Qe.get(a);return{locale:s,language:a,region:n,primary:h,secondary:d}}exists(e,o){var r;const{primary:s,secondary:a}=this.getTranslationData((r=o.lang)!==null&&r!==void 0?r:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[e]||a&&a[e]||o.includeFallback&&Pe&&Pe[e])}term(e,...o){const{primary:r,secondary:s}=this.getTranslationData(this.lang());let a;if(r&&r[e])a=r[e];else if(s&&s[e])a=s[e];else if(Pe&&Pe[e])a=Pe[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...o):a}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,o)}};var rt=class extends Cn{},Zt=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const r=o.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function $n(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(o+=r.textContent)}),o}var Sn=B`
  ${N}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Ge=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),fe=class extends P{constructor(){super(...arguments),this.hasSlotController=new Zt(this,"icon","suffix"),this.localize=new rt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await Tt(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=_t(this,"alert.show",{dir:this.localize.dir()});await Ct(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await Tt(this.base);const{keyframes:t,options:e}=_t(this,"alert.hide",{dir:this.localize.dir()});await Ct(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,qt(this,"sl-after-hide")}async toast(){return new Promise(t=>{Ge.parentElement===null&&document.body.append(Ge),Ge.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ge.removeChild(this),t(),Ge.querySelector("sl-alert")===null&&Ge.remove()},{once:!0})})}render(){return $`
      <div
        part="base"
        class=${j({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};fe.styles=Sn;fe.dependencies={"sl-icon-button":It};i([R('[part~="base"]')],fe.prototype,"base",2);i([c({type:Boolean,reflect:!0})],fe.prototype,"open",2);i([c({type:Boolean,reflect:!0})],fe.prototype,"closable",2);i([c({reflect:!0})],fe.prototype,"variant",2);i([c({type:Number})],fe.prototype,"duration",2);i([E("open",{waitUntilFirstUpdate:!0})],fe.prototype,"handleOpenChange",1);i([E("duration")],fe.prototype,"handleDurationChange",1);it("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});it("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});fe.define("sl-alert");var zn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};kn(zn);var En=B`
  ${N}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,le=class extends P{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:o}=this.animatedImage;t.width=e,t.height=o,t.getContext("2d").drawImage(this.animatedImage,0,0,e,o),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return $`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?$`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};le.styles=En;le.dependencies={"sl-icon":ut};i([R(".animated-image__animated")],le.prototype,"animatedImage",2);i([q()],le.prototype,"frozenFrame",2);i([q()],le.prototype,"isLoaded",2);i([c()],le.prototype,"src",2);i([c()],le.prototype,"alt",2);i([c({type:Boolean,reflect:!0})],le.prototype,"play",2);i([E("play",{waitUntilFirstUpdate:!0})],le.prototype,"handlePlayChange",1);i([E("src")],le.prototype,"handleSrcChange",1);le.define("sl-animated-image");var An=B`
  ${N}

  :host {
    display: contents;
  }
`;const Tn=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],On=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Rn=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],In=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Ln=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Dn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Pn=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Mn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Fn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Vn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bn=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Un=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Nn=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hn=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],jn=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],qn=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Wn=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Kn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Yn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Gn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Xn=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Qn=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Zn=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Jn=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],tc=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ec=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],oc=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],rc=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],sc=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],ic=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],ac=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],lc=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],nc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],cc=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],dc=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],uc=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hc=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pc=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fc=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],mc=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gc=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],bc=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],vc=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],yc=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_c=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],wc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],xc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],kc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Cc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],$c=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Sc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],zc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Ec=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Ac=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Tc=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Oc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Rc=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Ic=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Lc=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Dc=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Pc=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Mc=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Fc=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Vc=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bc=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Uc=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Nc=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Hc=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],jc=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],qc=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Wc=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Kc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Yc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Gc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Xc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Qc=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],Zc=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Jc=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],td=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ed=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],od=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],rd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],sd=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],id=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],ad=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],ld=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],nd=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],cd=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],dd=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],ud=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],hd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],pd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],fd=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],md=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],gd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],bd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],vd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],yd=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ia={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},_d=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Hn,backInLeft:jn,backInRight:qn,backInUp:Wn,backOutDown:Kn,backOutLeft:Yn,backOutRight:Gn,backOutUp:Xn,bounce:Tn,bounceIn:Qn,bounceInDown:Zn,bounceInLeft:Jn,bounceInRight:tc,bounceInUp:ec,bounceOut:oc,bounceOutDown:rc,bounceOutLeft:sc,bounceOutRight:ic,bounceOutUp:ac,easings:ia,fadeIn:lc,fadeInBottomLeft:nc,fadeInBottomRight:cc,fadeInDown:dc,fadeInDownBig:uc,fadeInLeft:hc,fadeInLeftBig:pc,fadeInRight:fc,fadeInRightBig:mc,fadeInTopLeft:gc,fadeInTopRight:bc,fadeInUp:vc,fadeInUpBig:yc,fadeOut:_c,fadeOutBottomLeft:wc,fadeOutBottomRight:xc,fadeOutDown:kc,fadeOutDownBig:Cc,fadeOutLeft:$c,fadeOutLeftBig:Sc,fadeOutRight:zc,fadeOutRightBig:Ec,fadeOutTopLeft:Ac,fadeOutTopRight:Tc,fadeOutUp:Oc,fadeOutUpBig:Rc,flash:On,flip:Ic,flipInX:Lc,flipInY:Dc,flipOutX:Pc,flipOutY:Mc,headShake:Rn,heartBeat:In,hinge:ad,jackInTheBox:ld,jello:Ln,lightSpeedInLeft:Fc,lightSpeedInRight:Vc,lightSpeedOutLeft:Bc,lightSpeedOutRight:Uc,pulse:Dn,rollIn:nd,rollOut:cd,rotateIn:Nc,rotateInDownLeft:Hc,rotateInDownRight:jc,rotateInUpLeft:qc,rotateInUpRight:Wc,rotateOut:Kc,rotateOutDownLeft:Yc,rotateOutDownRight:Gc,rotateOutUpLeft:Xc,rotateOutUpRight:Qc,rubberBand:Pn,shake:Mn,shakeX:Fn,shakeY:Vn,slideInDown:Zc,slideInLeft:Jc,slideInRight:td,slideInUp:ed,slideOutDown:od,slideOutLeft:rd,slideOutRight:sd,slideOutUp:id,swing:Bn,tada:Un,wobble:Nn,zoomIn:dd,zoomInDown:ud,zoomInLeft:hd,zoomInRight:pd,zoomInUp:fd,zoomOut:md,zoomOutDown:gd,zoomOutLeft:bd,zoomOutRight:vd,zoomOutUp:yd},Symbol.toStringTag,{value:"Module"}));var Lt=class extends P{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const o=(t=ia[this.easing])!=null?t:this.easing,r=(e=this.keyframes)!=null?e:_d[this.name],a=(await this.defaultSlot).assignedElements()[0];return!a||!r?!1:(this.destroyAnimation(),this.animation=a.animate(r,{delay:this.delay,direction:this.direction,duration:this.duration,easing:o,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};Lt.styles=An;i([fn("slot")],Lt.prototype,"defaultSlot",2);i([c()],Lt.prototype,"name",2);i([c({type:Boolean,reflect:!0})],Lt.prototype,"play",2);i([c({type:Number})],Lt.prototype,"delay",2);i([c()],Lt.prototype,"direction",2);i([c({type:Number})],Lt.prototype,"duration",2);i([c()],Lt.prototype,"easing",2);i([c({attribute:"end-delay",type:Number})],Lt.prototype,"endDelay",2);i([c()],Lt.prototype,"fill",2);i([c({type:Number})],Lt.prototype,"iterations",2);i([c({attribute:"iteration-start",type:Number})],Lt.prototype,"iterationStart",2);i([c({attribute:!1})],Lt.prototype,"keyframes",2);i([c({attribute:"playback-rate",type:Number})],Lt.prototype,"playbackRate",2);i([E(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Lt.prototype,"handleAnimationChange",1);i([E("play")],Lt.prototype,"handlePlayChange",1);i([E("playbackRate")],Lt.prototype,"handlePlaybackRateChange",1);Lt.define("sl-animation");var wd=B`
  ${N}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,me=class extends P{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const t=$`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let e=$``;return this.initials?e=$`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=$`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,$`
      <div
        part="base"
        class=${j({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};me.styles=wd;me.dependencies={"sl-icon":ut};i([q()],me.prototype,"hasError",2);i([c()],me.prototype,"image",2);i([c()],me.prototype,"label",2);i([c()],me.prototype,"initials",2);i([c()],me.prototype,"loading",2);i([c({reflect:!0})],me.prototype,"shape",2);i([E("image")],me.prototype,"handleImageChange",1);me.define("sl-avatar");var xd=B`
  ${N}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Io=class extends P{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return $`
      <span
        part="base"
        class=${j({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Io.styles=xd;i([c({reflect:!0})],Io.prototype,"variant",2);i([c({type:Boolean,reflect:!0})],Io.prototype,"pill",2);i([c({type:Boolean,reflect:!0})],Io.prototype,"pulse",2);Io.define("sl-badge");var kd=B`
  ${N}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
  }
`,Lo=class extends P{constructor(){super(...arguments),this.hasSlotController=new Zt(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const t=!!this.href;return $`
      <div
        part="base"
        class=${j({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${t?$`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${M(this.target?this.target:void 0)}"
                rel=${M(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:$`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Lo.styles=kd;i([c()],Lo.prototype,"href",2);i([c()],Lo.prototype,"target",2);i([c()],Lo.prototype,"rel",2);Lo.define("sl-breadcrumb-item");var Cd=B`
  ${N}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,oo=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,o)=>{const r=e.querySelector('[slot="separator"]');r===null?e.append(this.getSeparator()):r.hasAttribute("data-default")&&r.replaceWith(this.getSeparator()),o===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),$`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};oo.styles=Cd;oo.dependencies={"sl-icon":ut};i([R("slot")],oo.prototype,"defaultSlot",2);i([R('slot[name="separator"]')],oo.prototype,"separatorSlot",2);i([c()],oo.prototype,"label",2);oo.define("sl-breadcrumb");var $d=B`
  ${N}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ne=class extends P{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=po(t.target);e==null||e.classList.add("sl-button-group__button--focus")}handleBlur(t){const e=po(t.target);e==null||e.classList.remove("sl-button-group__button--focus")}handleMouseOver(t){const e=po(t.target);e==null||e.classList.add("sl-button-group__button--hover")}handleMouseOut(t){const e=po(t.target);e==null||e.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),r=po(e);r&&(r.classList.add("sl-button-group__button"),r.classList.toggle("sl-button-group__button--first",o===0),r.classList.toggle("sl-button-group__button--inner",o>0&&o<t.length-1),r.classList.toggle("sl-button-group__button--last",o===t.length-1),r.classList.toggle("sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return $`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Ne.styles=$d;i([R("slot")],Ne.prototype,"defaultSlot",2);i([q()],Ne.prototype,"disableRole",2);i([c()],Ne.prototype,"label",2);function po(t){var e;const o="sl-button, sl-radio-button";return(e=t.closest(o))!=null?e:t.querySelector(o)}Ne.define("sl-button-group");var Sd=B`
  ${N}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,br=class extends P{constructor(){super(...arguments),this.localize=new rt(this)}render(){return $`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};br.styles=Sd;var fo=new WeakMap,mo=new WeakMap,Wr=new WeakSet,Jo=new WeakMap,Ce=class{constructor(t,e){this.handleFormData=o=>{const r=this.options.disabled(this.host),s=this.options.name(this.host),a=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!r&&!n&&typeof s=="string"&&s.length>0&&typeof a<"u"&&(Array.isArray(a)?a.forEach(h=>{o.formData.append(s,h.toString())}):o.formData.append(s,a.toString()))},this.handleFormSubmit=o=>{var r;const s=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=fo.get(this.form))==null||r.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!a(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Jo.set(this.host,[])},this.handleInteraction=o=>{const r=Jo.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=ke({form:o=>{if(o.hasAttribute("form")&&o.getAttribute("form")!==""){const r=o.getRootNode(),s=o.getAttribute("form");if(s)return r.getElementById(s)}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var r;return(r=o.disabled)!=null?r:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,setValue:(o,r)=>o.value=r,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Jo.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Jo.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,fo.has(this.form)?fo.get(this.form).add(this.host):fo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),mo.has(this.form)||(mo.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var t;this.form&&((t=fo.get(this.form))==null||t.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),mo.has(this.form)&&(this.form.reportValidity=mo.get(this.form),mo.delete(this.form))),this.form=void 0}setUserInteracted(t,e){e?Wr.add(t):Wr.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{e.hasAttribute(r)&&o.setAttribute(r,e.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!Wr.has(e),r=!!e.required;e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},vr=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),zd=Object.freeze(To(ke({},vr),{valid:!1,valueMissing:!0})),Ed=Object.freeze(To(ke({},vr),{valid:!1,customError:!0})),aa=B`
  ${N}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,ot=class extends P{constructor(){super(...arguments),this.formControlController=new Ce(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Zt(this,"[default]","prefix","suffix"),this.localize=new rt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:vr}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?dr`a`:dr`button`;return yo`
      <${e}
        part="base"
        class=${j({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${M(t?void 0:this.disabled)}
        type=${M(t?void 0:this.type)}
        title=${this.title}
        name=${M(t?void 0:this.name)}
        value=${M(t?void 0:this.value)}
        href=${M(t?this.href:void 0)}
        target=${M(t?this.target:void 0)}
        download=${M(t?this.download:void 0)}
        rel=${M(t?this.rel:void 0)}
        role=${M(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?yo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?yo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};ot.styles=aa;ot.dependencies={"sl-icon":ut,"sl-spinner":br};i([R(".button")],ot.prototype,"button",2);i([q()],ot.prototype,"hasFocus",2);i([q()],ot.prototype,"invalid",2);i([c()],ot.prototype,"title",2);i([c({reflect:!0})],ot.prototype,"variant",2);i([c({reflect:!0})],ot.prototype,"size",2);i([c({type:Boolean,reflect:!0})],ot.prototype,"caret",2);i([c({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);i([c({type:Boolean,reflect:!0})],ot.prototype,"loading",2);i([c({type:Boolean,reflect:!0})],ot.prototype,"outline",2);i([c({type:Boolean,reflect:!0})],ot.prototype,"pill",2);i([c({type:Boolean,reflect:!0})],ot.prototype,"circle",2);i([c()],ot.prototype,"type",2);i([c()],ot.prototype,"name",2);i([c()],ot.prototype,"value",2);i([c()],ot.prototype,"href",2);i([c()],ot.prototype,"target",2);i([c()],ot.prototype,"rel",2);i([c()],ot.prototype,"download",2);i([c()],ot.prototype,"form",2);i([c({attribute:"formaction"})],ot.prototype,"formAction",2);i([c({attribute:"formenctype"})],ot.prototype,"formEnctype",2);i([c({attribute:"formmethod"})],ot.prototype,"formMethod",2);i([c({attribute:"formnovalidate",type:Boolean})],ot.prototype,"formNoValidate",2);i([c({attribute:"formtarget"})],ot.prototype,"formTarget",2);i([E("disabled",{waitUntilFirstUpdate:!0})],ot.prototype,"handleDisabledChange",1);function Ad(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var is={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei;function Td(){if(Ei)return Q;Ei=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),n=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),p=Symbol.iterator;function m(y){return y===null||typeof y!="object"?null:(y=p&&y[p]||y["@@iterator"],typeof y=="function"?y:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,k={};function I(y,T,X){this.props=y,this.context=T,this.refs=k,this.updater=X||g}I.prototype.isReactComponent={},I.prototype.setState=function(y,T){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,T,"setState")},I.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function L(){}L.prototype=I.prototype;function S(y,T,X){this.props=y,this.context=T,this.refs=k,this.updater=X||g}var A=S.prototype=new L;A.constructor=S,v(A,I.prototype),A.isPureReactComponent=!0;var x=Array.isArray,C=Object.prototype.hasOwnProperty,O={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function K(y,T,X){var at,Z={},ft=null,$t=null;if(T!=null)for(at in T.ref!==void 0&&($t=T.ref),T.key!==void 0&&(ft=""+T.key),T)C.call(T,at)&&!W.hasOwnProperty(at)&&(Z[at]=T[at]);var mt=arguments.length-2;if(mt===1)Z.children=X;else if(1<mt){for(var gt=Array(mt),Ht=0;Ht<mt;Ht++)gt[Ht]=arguments[Ht+2];Z.children=gt}if(y&&y.defaultProps)for(at in mt=y.defaultProps,mt)Z[at]===void 0&&(Z[at]=mt[at]);return{$$typeof:t,type:y,key:ft,ref:$t,props:Z,_owner:O.current}}function U(y,T){return{$$typeof:t,type:y.type,key:T,ref:y.ref,props:y.props,_owner:y._owner}}function V(y){return typeof y=="object"&&y!==null&&y.$$typeof===t}function zt(y){var T={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(X){return T[X]})}var nt=/\/+/g;function Ot(y,T){return typeof y=="object"&&y!==null&&y.key!=null?zt(""+y.key):T.toString(36)}function pt(y,T,X,at,Z){var ft=typeof y;(ft==="undefined"||ft==="boolean")&&(y=null);var $t=!1;if(y===null)$t=!0;else switch(ft){case"string":case"number":$t=!0;break;case"object":switch(y.$$typeof){case t:case e:$t=!0}}if($t)return $t=y,Z=Z($t),y=at===""?"."+Ot($t,0):at,x(Z)?(X="",y!=null&&(X=y.replace(nt,"$&/")+"/"),pt(Z,T,X,"",function(Ht){return Ht})):Z!=null&&(V(Z)&&(Z=U(Z,X+(!Z.key||$t&&$t.key===Z.key?"":(""+Z.key).replace(nt,"$&/")+"/")+y)),T.push(Z)),1;if($t=0,at=at===""?".":at+":",x(y))for(var mt=0;mt<y.length;mt++){ft=y[mt];var gt=at+Ot(ft,mt);$t+=pt(ft,T,X,gt,Z)}else if(gt=m(y),typeof gt=="function")for(y=gt.call(y),mt=0;!(ft=y.next()).done;)ft=ft.value,gt=at+Ot(ft,mt++),$t+=pt(ft,T,X,gt,Z);else if(ft==="object")throw T=String(y),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return $t}function ct(y,T,X){if(y==null)return y;var at=[],Z=0;return pt(y,at,"","",function(ft){return T.call(X,ft,Z++)}),at}function Et(y){if(y._status===-1){var T=y._result;T=T(),T.then(function(X){(y._status===0||y._status===-1)&&(y._status=1,y._result=X)},function(X){(y._status===0||y._status===-1)&&(y._status=2,y._result=X)}),y._status===-1&&(y._status=0,y._result=T)}if(y._status===1)return y._result.default;throw y._result}var F={current:null},_e={transition:null},Bo={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:_e,ReactCurrentOwner:O};return Q.Children={map:ct,forEach:function(y,T,X){ct(y,function(){T.apply(this,arguments)},X)},count:function(y){var T=0;return ct(y,function(){T++}),T},toArray:function(y){return ct(y,function(T){return T})||[]},only:function(y){if(!V(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},Q.Component=I,Q.Fragment=o,Q.Profiler=s,Q.PureComponent=S,Q.StrictMode=r,Q.Suspense=d,Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bo,Q.cloneElement=function(y,T,X){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var at=v({},y.props),Z=y.key,ft=y.ref,$t=y._owner;if(T!=null){if(T.ref!==void 0&&(ft=T.ref,$t=O.current),T.key!==void 0&&(Z=""+T.key),y.type&&y.type.defaultProps)var mt=y.type.defaultProps;for(gt in T)C.call(T,gt)&&!W.hasOwnProperty(gt)&&(at[gt]=T[gt]===void 0&&mt!==void 0?mt[gt]:T[gt])}var gt=arguments.length-2;if(gt===1)at.children=X;else if(1<gt){mt=Array(gt);for(var Ht=0;Ht<gt;Ht++)mt[Ht]=arguments[Ht+2];at.children=mt}return{$$typeof:t,type:y.type,key:Z,ref:ft,props:at,_owner:$t}},Q.createContext=function(y){return y={$$typeof:n,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:a,_context:y},y.Consumer=y},Q.createElement=K,Q.createFactory=function(y){var T=K.bind(null,y);return T.type=y,T},Q.createRef=function(){return{current:null}},Q.forwardRef=function(y){return{$$typeof:h,render:y}},Q.isValidElement=V,Q.lazy=function(y){return{$$typeof:b,_payload:{_status:-1,_result:y},_init:Et}},Q.memo=function(y,T){return{$$typeof:u,type:y,compare:T===void 0?null:T}},Q.startTransition=function(y){var T=_e.transition;_e.transition={};try{y()}finally{_e.transition=T}},Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},Q.useCallback=function(y,T){return F.current.useCallback(y,T)},Q.useContext=function(y){return F.current.useContext(y)},Q.useDebugValue=function(){},Q.useDeferredValue=function(y){return F.current.useDeferredValue(y)},Q.useEffect=function(y,T){return F.current.useEffect(y,T)},Q.useId=function(){return F.current.useId()},Q.useImperativeHandle=function(y,T,X){return F.current.useImperativeHandle(y,T,X)},Q.useInsertionEffect=function(y,T){return F.current.useInsertionEffect(y,T)},Q.useLayoutEffect=function(y,T){return F.current.useLayoutEffect(y,T)},Q.useMemo=function(y,T){return F.current.useMemo(y,T)},Q.useReducer=function(y,T,X){return F.current.useReducer(y,T,X)},Q.useRef=function(y){return F.current.useRef(y)},Q.useState=function(y){return F.current.useState(y)},Q.useSyncExternalStore=function(y,T,X){return F.current.useSyncExternalStore(y,T,X)},Q.useTransition=function(){return F.current.useTransition()},Q.version="18.2.0",Q}var bo={exports:{}};/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */bo.exports;var Ai;function Od(){return Ai||(Ai=1,function(t,e){process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var o="18.2.0",r=Symbol.for("react.element"),s=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),u=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),I=Symbol.iterator,L="@@iterator";function S(l){if(l===null||typeof l!="object")return null;var f=I&&l[I]||l[L];return typeof f=="function"?f:null}var A={current:null},x={transition:null},C={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},O={current:null},W={},K=null;function U(l){K=l}W.setExtraStackFrame=function(l){K=l},W.getCurrentStack=null,W.getStackAddendum=function(){var l="";K&&(l+=K);var f=W.getCurrentStack;return f&&(l+=f()||""),l};var V=!1,zt=!1,nt=!1,Ot=!1,pt=!1,ct={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:x,ReactCurrentOwner:O};ct.ReactDebugCurrentFrame=W,ct.ReactCurrentActQueue=C;function Et(l){{for(var f=arguments.length,_=new Array(f>1?f-1:0),w=1;w<f;w++)_[w-1]=arguments[w];_e("warn",l,_)}}function F(l){{for(var f=arguments.length,_=new Array(f>1?f-1:0),w=1;w<f;w++)_[w-1]=arguments[w];_e("error",l,_)}}function _e(l,f,_){{var w=ct.ReactDebugCurrentFrame,z=w.getStackAddendum();z!==""&&(f+="%s",_=_.concat([z]));var H=_.map(function(D){return String(D)});H.unshift("Warning: "+f),Function.prototype.apply.call(console[l],console,H)}}var Bo={};function y(l,f){{var _=l.constructor,w=_&&(_.displayName||_.name)||"ReactClass",z=w+"."+f;if(Bo[z])return;F("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",f,w),Bo[z]=!0}}var T={isMounted:function(l){return!1},enqueueForceUpdate:function(l,f,_){y(l,"forceUpdate")},enqueueReplaceState:function(l,f,_,w){y(l,"replaceState")},enqueueSetState:function(l,f,_,w){y(l,"setState")}},X=Object.assign,at={};Object.freeze(at);function Z(l,f,_){this.props=l,this.context=f,this.refs=at,this.updater=_||T}Z.prototype.isReactComponent={},Z.prototype.setState=function(l,f){if(typeof l!="object"&&typeof l!="function"&&l!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,l,f,"setState")},Z.prototype.forceUpdate=function(l){this.updater.enqueueForceUpdate(this,l,"forceUpdate")};{var ft={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},$t=function(l,f){Object.defineProperty(Z.prototype,l,{get:function(){Et("%s(...) is deprecated in plain JavaScript React classes. %s",f[0],f[1])}})};for(var mt in ft)ft.hasOwnProperty(mt)&&$t(mt,ft[mt])}function gt(){}gt.prototype=Z.prototype;function Ht(l,f,_){this.props=l,this.context=f,this.refs=at,this.updater=_||T}var Cr=Ht.prototype=new gt;Cr.constructor=Ht,X(Cr,Z.prototype),Cr.isPureReactComponent=!0;function Ea(){var l={current:null};return Object.seal(l),l}var Aa=Array.isArray;function Uo(l){return Aa(l)}function Ta(l){{var f=typeof Symbol=="function"&&Symbol.toStringTag,_=f&&l[Symbol.toStringTag]||l.constructor.name||"Object";return _}}function Oa(l){try{return zs(l),!1}catch{return!0}}function zs(l){return""+l}function No(l){if(Oa(l))return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ta(l)),zs(l)}function Ra(l,f,_){var w=l.displayName;if(w)return w;var z=f.displayName||f.name||"";return z!==""?_+"("+z+")":_}function Es(l){return l.displayName||"Context"}function Se(l){if(l==null)return null;if(typeof l.tag=="number"&&F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case a:return"Fragment";case s:return"Portal";case h:return"Profiler";case n:return"StrictMode";case p:return"Suspense";case m:return"SuspenseList"}if(typeof l=="object")switch(l.$$typeof){case u:var f=l;return Es(f)+".Consumer";case d:var _=l;return Es(_._context)+".Provider";case b:return Ra(l,l.render,"ForwardRef");case g:var w=l.displayName||null;return w!==null?w:Se(l.type)||"Memo";case v:{var z=l,H=z._payload,D=z._init;try{return Se(D(H))}catch{return null}}}return null}var lo=Object.prototype.hasOwnProperty,As={key:!0,ref:!0,__self:!0,__source:!0},Ts,Os,$r;$r={};function Rs(l){if(lo.call(l,"ref")){var f=Object.getOwnPropertyDescriptor(l,"ref").get;if(f&&f.isReactWarning)return!1}return l.ref!==void 0}function Is(l){if(lo.call(l,"key")){var f=Object.getOwnPropertyDescriptor(l,"key").get;if(f&&f.isReactWarning)return!1}return l.key!==void 0}function Ia(l,f){var _=function(){Ts||(Ts=!0,F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",f))};_.isReactWarning=!0,Object.defineProperty(l,"key",{get:_,configurable:!0})}function La(l,f){var _=function(){Os||(Os=!0,F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",f))};_.isReactWarning=!0,Object.defineProperty(l,"ref",{get:_,configurable:!0})}function Da(l){if(typeof l.ref=="string"&&O.current&&l.__self&&O.current.stateNode!==l.__self){var f=Se(O.current.type);$r[f]||(F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',f,l.ref),$r[f]=!0)}}var Sr=function(l,f,_,w,z,H,D){var Y={$$typeof:r,type:l,key:f,ref:_,props:D,_owner:H};return Y._store={},Object.defineProperty(Y._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(Y,"_self",{configurable:!1,enumerable:!1,writable:!1,value:w}),Object.defineProperty(Y,"_source",{configurable:!1,enumerable:!1,writable:!1,value:z}),Object.freeze&&(Object.freeze(Y.props),Object.freeze(Y)),Y};function Pa(l,f,_){var w,z={},H=null,D=null,Y=null,J=null;if(f!=null){Rs(f)&&(D=f.ref,Da(f)),Is(f)&&(No(f.key),H=""+f.key),Y=f.__self===void 0?null:f.__self,J=f.__source===void 0?null:f.__source;for(w in f)lo.call(f,w)&&!As.hasOwnProperty(w)&&(z[w]=f[w])}var dt=arguments.length-2;if(dt===1)z.children=_;else if(dt>1){for(var bt=Array(dt),vt=0;vt<dt;vt++)bt[vt]=arguments[vt+2];Object.freeze&&Object.freeze(bt),z.children=bt}if(l&&l.defaultProps){var wt=l.defaultProps;for(w in wt)z[w]===void 0&&(z[w]=wt[w])}if(H||D){var At=typeof l=="function"?l.displayName||l.name||"Unknown":l;H&&Ia(z,At),D&&La(z,At)}return Sr(l,H,D,Y,J,O.current,z)}function Ma(l,f){var _=Sr(l.type,f,l.ref,l._self,l._source,l._owner,l.props);return _}function Fa(l,f,_){if(l==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+l+".");var w,z=X({},l.props),H=l.key,D=l.ref,Y=l._self,J=l._source,dt=l._owner;if(f!=null){Rs(f)&&(D=f.ref,dt=O.current),Is(f)&&(No(f.key),H=""+f.key);var bt;l.type&&l.type.defaultProps&&(bt=l.type.defaultProps);for(w in f)lo.call(f,w)&&!As.hasOwnProperty(w)&&(f[w]===void 0&&bt!==void 0?z[w]=bt[w]:z[w]=f[w])}var vt=arguments.length-2;if(vt===1)z.children=_;else if(vt>1){for(var wt=Array(vt),At=0;At<vt;At++)wt[At]=arguments[At+2];z.children=wt}return Sr(l.type,H,D,Y,J,dt,z)}function We(l){return typeof l=="object"&&l!==null&&l.$$typeof===r}var Ls=".",Va=":";function Ba(l){var f=/[=:]/g,_={"=":"=0",":":"=2"},w=l.replace(f,function(z){return _[z]});return"$"+w}var Ds=!1,Ua=/\/+/g;function Ps(l){return l.replace(Ua,"$&/")}function zr(l,f){return typeof l=="object"&&l!==null&&l.key!=null?(No(l.key),Ba(""+l.key)):f.toString(36)}function Ho(l,f,_,w,z){var H=typeof l;(H==="undefined"||H==="boolean")&&(l=null);var D=!1;if(l===null)D=!0;else switch(H){case"string":case"number":D=!0;break;case"object":switch(l.$$typeof){case r:case s:D=!0}}if(D){var Y=l,J=z(Y),dt=w===""?Ls+zr(Y,0):w;if(Uo(J)){var bt="";dt!=null&&(bt=Ps(dt)+"/"),Ho(J,f,bt,"",function(Ll){return Ll})}else J!=null&&(We(J)&&(J.key&&(!Y||Y.key!==J.key)&&No(J.key),J=Ma(J,_+(J.key&&(!Y||Y.key!==J.key)?Ps(""+J.key)+"/":"")+dt)),f.push(J));return 1}var vt,wt,At=0,Ft=w===""?Ls:w+Va;if(Uo(l))for(var Qo=0;Qo<l.length;Qo++)vt=l[Qo],wt=Ft+zr(vt,Qo),At+=Ho(vt,f,_,wt,z);else{var Pr=S(l);if(typeof Pr=="function"){var ai=l;Pr===ai.entries&&(Ds||Et("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Ds=!0);for(var Rl=Pr.call(ai),li,Il=0;!(li=Rl.next()).done;)vt=li.value,wt=Ft+zr(vt,Il++),At+=Ho(vt,f,_,wt,z)}else if(H==="object"){var ni=String(l);throw new Error("Objects are not valid as a React child (found: "+(ni==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":ni)+"). If you meant to render a collection of children, use an array instead.")}}return At}function jo(l,f,_){if(l==null)return l;var w=[],z=0;return Ho(l,w,"","",function(H){return f.call(_,H,z++)}),w}function Na(l){var f=0;return jo(l,function(){f++}),f}function Ha(l,f,_){jo(l,function(){f.apply(this,arguments)},_)}function ja(l){return jo(l,function(f){return f})||[]}function qa(l){if(!We(l))throw new Error("React.Children.only expected to receive a single React element child.");return l}function Wa(l){var f={$$typeof:u,_currentValue:l,_currentValue2:l,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};f.Provider={$$typeof:d,_context:f};var _=!1,w=!1,z=!1;{var H={$$typeof:u,_context:f};Object.defineProperties(H,{Provider:{get:function(){return w||(w=!0,F("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),f.Provider},set:function(D){f.Provider=D}},_currentValue:{get:function(){return f._currentValue},set:function(D){f._currentValue=D}},_currentValue2:{get:function(){return f._currentValue2},set:function(D){f._currentValue2=D}},_threadCount:{get:function(){return f._threadCount},set:function(D){f._threadCount=D}},Consumer:{get:function(){return _||(_=!0,F("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),f.Consumer}},displayName:{get:function(){return f.displayName},set:function(D){z||(Et("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",D),z=!0)}}}),f.Consumer=H}return f._currentRenderer=null,f._currentRenderer2=null,f}var no=-1,Er=0,Ms=1,Ka=2;function Ya(l){if(l._status===no){var f=l._result,_=f();if(_.then(function(H){if(l._status===Er||l._status===no){var D=l;D._status=Ms,D._result=H}},function(H){if(l._status===Er||l._status===no){var D=l;D._status=Ka,D._result=H}}),l._status===no){var w=l;w._status=Er,w._result=_}}if(l._status===Ms){var z=l._result;return z===void 0&&F(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,z),"default"in z||F(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,z),z.default}else throw l._result}function Ga(l){var f={_status:no,_result:l},_={$$typeof:v,_payload:f,_init:Ya};{var w,z;Object.defineProperties(_,{defaultProps:{configurable:!0,get:function(){return w},set:function(H){F("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),w=H,Object.defineProperty(_,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return z},set:function(H){F("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),z=H,Object.defineProperty(_,"propTypes",{enumerable:!0})}}})}return _}function Xa(l){l!=null&&l.$$typeof===g?F("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof l!="function"?F("forwardRef requires a render function but was given %s.",l===null?"null":typeof l):l.length!==0&&l.length!==2&&F("forwardRef render functions accept exactly two parameters: props and ref. %s",l.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),l!=null&&(l.defaultProps!=null||l.propTypes!=null)&&F("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var f={$$typeof:b,render:l};{var _;Object.defineProperty(f,"displayName",{enumerable:!1,configurable:!0,get:function(){return _},set:function(w){_=w,!l.name&&!l.displayName&&(l.displayName=w)}})}return f}var Fs;Fs=Symbol.for("react.module.reference");function Vs(l){return!!(typeof l=="string"||typeof l=="function"||l===a||l===h||pt||l===n||l===p||l===m||Ot||l===k||V||zt||nt||typeof l=="object"&&l!==null&&(l.$$typeof===v||l.$$typeof===g||l.$$typeof===d||l.$$typeof===u||l.$$typeof===b||l.$$typeof===Fs||l.getModuleId!==void 0))}function Qa(l,f){Vs(l)||F("memo: The first argument must be a component. Instead received: %s",l===null?"null":typeof l);var _={$$typeof:g,type:l,compare:f===void 0?null:f};{var w;Object.defineProperty(_,"displayName",{enumerable:!1,configurable:!0,get:function(){return w},set:function(z){w=z,!l.name&&!l.displayName&&(l.displayName=z)}})}return _}function jt(){var l=A.current;return l===null&&F(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),l}function Za(l){var f=jt();if(l._context!==void 0){var _=l._context;_.Consumer===l?F("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):_.Provider===l&&F("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return f.useContext(l)}function Ja(l){var f=jt();return f.useState(l)}function tl(l,f,_){var w=jt();return w.useReducer(l,f,_)}function el(l){var f=jt();return f.useRef(l)}function ol(l,f){var _=jt();return _.useEffect(l,f)}function rl(l,f){var _=jt();return _.useInsertionEffect(l,f)}function sl(l,f){var _=jt();return _.useLayoutEffect(l,f)}function il(l,f){var _=jt();return _.useCallback(l,f)}function al(l,f){var _=jt();return _.useMemo(l,f)}function ll(l,f,_){var w=jt();return w.useImperativeHandle(l,f,_)}function nl(l,f){{var _=jt();return _.useDebugValue(l,f)}}function cl(){var l=jt();return l.useTransition()}function dl(l){var f=jt();return f.useDeferredValue(l)}function ul(){var l=jt();return l.useId()}function hl(l,f,_){var w=jt();return w.useSyncExternalStore(l,f,_)}var co=0,Bs,Us,Ns,Hs,js,qs,Ws;function Ks(){}Ks.__reactDisabledLog=!0;function pl(){{if(co===0){Bs=console.log,Us=console.info,Ns=console.warn,Hs=console.error,js=console.group,qs=console.groupCollapsed,Ws=console.groupEnd;var l={configurable:!0,enumerable:!0,value:Ks,writable:!0};Object.defineProperties(console,{info:l,log:l,warn:l,error:l,group:l,groupCollapsed:l,groupEnd:l})}co++}}function fl(){{if(co--,co===0){var l={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:X({},l,{value:Bs}),info:X({},l,{value:Us}),warn:X({},l,{value:Ns}),error:X({},l,{value:Hs}),group:X({},l,{value:js}),groupCollapsed:X({},l,{value:qs}),groupEnd:X({},l,{value:Ws})})}co<0&&F("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Ar=ct.ReactCurrentDispatcher,Tr;function qo(l,f,_){{if(Tr===void 0)try{throw Error()}catch(z){var w=z.stack.trim().match(/\n( *(at )?)/);Tr=w&&w[1]||""}return`
`+Tr+l}}var Or=!1,Wo;{var ml=typeof WeakMap=="function"?WeakMap:Map;Wo=new ml}function Ys(l,f){if(!l||Or)return"";{var _=Wo.get(l);if(_!==void 0)return _}var w;Or=!0;var z=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var H;H=Ar.current,Ar.current=null,pl();try{if(f){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(Ft){w=Ft}Reflect.construct(l,[],D)}else{try{D.call()}catch(Ft){w=Ft}l.call(D.prototype)}}else{try{throw Error()}catch(Ft){w=Ft}l()}}catch(Ft){if(Ft&&w&&typeof Ft.stack=="string"){for(var Y=Ft.stack.split(`
`),J=w.stack.split(`
`),dt=Y.length-1,bt=J.length-1;dt>=1&&bt>=0&&Y[dt]!==J[bt];)bt--;for(;dt>=1&&bt>=0;dt--,bt--)if(Y[dt]!==J[bt]){if(dt!==1||bt!==1)do if(dt--,bt--,bt<0||Y[dt]!==J[bt]){var vt=`
`+Y[dt].replace(" at new "," at ");return l.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",l.displayName)),typeof l=="function"&&Wo.set(l,vt),vt}while(dt>=1&&bt>=0);break}}}finally{Or=!1,Ar.current=H,fl(),Error.prepareStackTrace=z}var wt=l?l.displayName||l.name:"",At=wt?qo(wt):"";return typeof l=="function"&&Wo.set(l,At),At}function gl(l,f,_){return Ys(l,!1)}function bl(l){var f=l.prototype;return!!(f&&f.isReactComponent)}function Ko(l,f,_){if(l==null)return"";if(typeof l=="function")return Ys(l,bl(l));if(typeof l=="string")return qo(l);switch(l){case p:return qo("Suspense");case m:return qo("SuspenseList")}if(typeof l=="object")switch(l.$$typeof){case b:return gl(l.render);case g:return Ko(l.type,f,_);case v:{var w=l,z=w._payload,H=w._init;try{return Ko(H(z),f,_)}catch{}}}return""}var Gs={},Xs=ct.ReactDebugCurrentFrame;function Yo(l){if(l){var f=l._owner,_=Ko(l.type,l._source,f?f.type:null);Xs.setExtraStackFrame(_)}else Xs.setExtraStackFrame(null)}function vl(l,f,_,w,z){{var H=Function.call.bind(lo);for(var D in l)if(H(l,D)){var Y=void 0;try{if(typeof l[D]!="function"){var J=Error((w||"React class")+": "+_+" type `"+D+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof l[D]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw J.name="Invariant Violation",J}Y=l[D](f,D,w,_,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(dt){Y=dt}Y&&!(Y instanceof Error)&&(Yo(z),F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",w||"React class",_,D,typeof Y),Yo(null)),Y instanceof Error&&!(Y.message in Gs)&&(Gs[Y.message]=!0,Yo(z),F("Failed %s type: %s",_,Y.message),Yo(null))}}}function Ke(l){if(l){var f=l._owner,_=Ko(l.type,l._source,f?f.type:null);U(_)}else U(null)}var Rr;Rr=!1;function Qs(){if(O.current){var l=Se(O.current.type);if(l)return`

Check the render method of \``+l+"`."}return""}function yl(l){if(l!==void 0){var f=l.fileName.replace(/^.*[\\\/]/,""),_=l.lineNumber;return`

Check your code at `+f+":"+_+"."}return""}function _l(l){return l!=null?yl(l.__source):""}var Zs={};function wl(l){var f=Qs();if(!f){var _=typeof l=="string"?l:l.displayName||l.name;_&&(f=`

Check the top-level render call using <`+_+">.")}return f}function Js(l,f){if(!(!l._store||l._store.validated||l.key!=null)){l._store.validated=!0;var _=wl(f);if(!Zs[_]){Zs[_]=!0;var w="";l&&l._owner&&l._owner!==O.current&&(w=" It was passed a child from "+Se(l._owner.type)+"."),Ke(l),F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',_,w),Ke(null)}}}function ti(l,f){if(typeof l=="object"){if(Uo(l))for(var _=0;_<l.length;_++){var w=l[_];We(w)&&Js(w,f)}else if(We(l))l._store&&(l._store.validated=!0);else if(l){var z=S(l);if(typeof z=="function"&&z!==l.entries)for(var H=z.call(l),D;!(D=H.next()).done;)We(D.value)&&Js(D.value,f)}}}function ei(l){{var f=l.type;if(f==null||typeof f=="string")return;var _;if(typeof f=="function")_=f.propTypes;else if(typeof f=="object"&&(f.$$typeof===b||f.$$typeof===g))_=f.propTypes;else return;if(_){var w=Se(f);vl(_,l.props,"prop",w,l)}else if(f.PropTypes!==void 0&&!Rr){Rr=!0;var z=Se(f);F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",z||"Unknown")}typeof f.getDefaultProps=="function"&&!f.getDefaultProps.isReactClassApproved&&F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function xl(l){{for(var f=Object.keys(l.props),_=0;_<f.length;_++){var w=f[_];if(w!=="children"&&w!=="key"){Ke(l),F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",w),Ke(null);break}}l.ref!==null&&(Ke(l),F("Invalid attribute `ref` supplied to `React.Fragment`."),Ke(null))}}function oi(l,f,_){var w=Vs(l);if(!w){var z="";(l===void 0||typeof l=="object"&&l!==null&&Object.keys(l).length===0)&&(z+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var H=_l(f);H?z+=H:z+=Qs();var D;l===null?D="null":Uo(l)?D="array":l!==void 0&&l.$$typeof===r?(D="<"+(Se(l.type)||"Unknown")+" />",z=" Did you accidentally export a JSX literal instead of a component?"):D=typeof l,F("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",D,z)}var Y=Pa.apply(this,arguments);if(Y==null)return Y;if(w)for(var J=2;J<arguments.length;J++)ti(arguments[J],l);return l===a?xl(Y):ei(Y),Y}var ri=!1;function kl(l){var f=oi.bind(null,l);return f.type=l,ri||(ri=!0,Et("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(f,"type",{enumerable:!1,get:function(){return Et("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:l}),l}}),f}function Cl(l,f,_){for(var w=Fa.apply(this,arguments),z=2;z<arguments.length;z++)ti(arguments[z],w.type);return ei(w),w}function $l(l,f){var _=x.transition;x.transition={};var w=x.transition;x.transition._updatedFibers=new Set;try{l()}finally{if(x.transition=_,_===null&&w._updatedFibers){var z=w._updatedFibers.size;z>10&&Et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),w._updatedFibers.clear()}}}var si=!1,Go=null;function Sl(l){if(Go===null)try{var f=("require"+Math.random()).slice(0,7),_=t&&t[f];Go=_.call(t,"timers").setImmediate}catch{Go=function(z){si===!1&&(si=!0,typeof MessageChannel>"u"&&F("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var H=new MessageChannel;H.port1.onmessage=z,H.port2.postMessage(void 0)}}return Go(l)}var Ye=0,ii=!1;function zl(l){{var f=Ye;Ye++,C.current===null&&(C.current=[]);var _=C.isBatchingLegacy,w;try{if(C.isBatchingLegacy=!0,w=l(),!_&&C.didScheduleLegacyUpdate){var z=C.current;z!==null&&(C.didScheduleLegacyUpdate=!1,Dr(z))}}catch(wt){throw Xo(f),wt}finally{C.isBatchingLegacy=_}if(w!==null&&typeof w=="object"&&typeof w.then=="function"){var H=w,D=!1,Y={then:function(wt,At){D=!0,H.then(function(Ft){Xo(f),Ye===0?Ir(Ft,wt,At):wt(Ft)},function(Ft){Xo(f),At(Ft)})}};return!ii&&typeof Promise<"u"&&Promise.resolve().then(function(){}).then(function(){D||(ii=!0,F("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),Y}else{var J=w;if(Xo(f),Ye===0){var dt=C.current;dt!==null&&(Dr(dt),C.current=null);var bt={then:function(wt,At){C.current===null?(C.current=[],Ir(J,wt,At)):wt(J)}};return bt}else{var vt={then:function(wt,At){wt(J)}};return vt}}}}function Xo(l){l!==Ye-1&&F("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Ye=l}function Ir(l,f,_){{var w=C.current;if(w!==null)try{Dr(w),Sl(function(){w.length===0?(C.current=null,f(l)):Ir(l,f,_)})}catch(z){_(z)}else f(l)}}var Lr=!1;function Dr(l){if(!Lr){Lr=!0;var f=0;try{for(;f<l.length;f++){var _=l[f];do _=_(!0);while(_!==null)}l.length=0}catch(w){throw l=l.slice(f+1),w}finally{Lr=!1}}}var El=oi,Al=Cl,Tl=kl,Ol={map:jo,forEach:Ha,count:Na,toArray:ja,only:qa};e.Children=Ol,e.Component=Z,e.Fragment=a,e.Profiler=h,e.PureComponent=Ht,e.StrictMode=n,e.Suspense=p,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ct,e.cloneElement=Al,e.createContext=Wa,e.createElement=El,e.createFactory=Tl,e.createRef=Ea,e.forwardRef=Xa,e.isValidElement=We,e.lazy=Ga,e.memo=Qa,e.startTransition=$l,e.unstable_act=zl,e.useCallback=il,e.useContext=Za,e.useDebugValue=nl,e.useDeferredValue=dl,e.useEffect=ol,e.useId=ul,e.useImperativeHandle=ll,e.useInsertionEffect=rl,e.useLayoutEffect=sl,e.useMemo=al,e.useReducer=tl,e.useRef=el,e.useState=Ja,e.useSyncExternalStore=hl,e.useTransition=cl,e.version=o,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()}(bo,bo.exports)),bo.exports}process.env.NODE_ENV==="production"?is.exports=Td():is.exports=Od();var la=is.exports;const Rd=Ad(la),Id=Dl({__proto__:null,default:Rd},[la]);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ld=new Set(["children","localName","ref","style","className"]),Ti=new WeakMap,Dd=(t,e,o,r,s)=>{const a=s==null?void 0:s[e];a===void 0||o===r?(t[e]=o,o==null&&e in HTMLElement.prototype&&t.removeAttribute(e)):((n,h,d)=>{let u=Ti.get(n);u===void 0&&Ti.set(n,u=new Map);let b=u.get(h);d!==void 0?b===void 0?(u.set(h,b={handleEvent:d}),n.addEventListener(h,b)):b.handleEvent=d:b!==void 0&&(u.delete(h),n.removeEventListener(h,b))})(t,a,o)},Pd=({react:t,tagName:e,elementClass:o,events:r,displayName:s})=>{const a=new Set(Object.keys(r??{})),n=t.forwardRef((h,d)=>{const u=t.useRef(null),b=t.useRef(null),p={},m={};for(const[g,v]of Object.entries(h))Ld.has(g)?p[g==="className"?"class":g]=v:a.has(g)||g in o.prototype?m[g]=v:p[g]=v;return t.useLayoutEffect(()=>{if(b.current!==null){for(const g in m)Dd(b.current,g,h[g],u.current?u.current[g]:void 0,r);u.current=h}}),t.useLayoutEffect(()=>{var g;(g=b.current)===null||g===void 0||g.removeAttribute("defer-hydration")},[]),p.suppressHydrationWarning=!0,t.createElement(e,{...p,ref:g=>{b.current=g,typeof d=="function"?d(g):d!==null&&(d.current=g)}})});return n.displayName=s??o.name,n};var Md="sl-button";ot.define("sl-button");Pd({tagName:Md,elementClass:ot,react:Id,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"});var Fd=B`
  ${N}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Vd=B`
  ${N}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,He=(t="value")=>(e,o)=>{const r=e.constructor,s=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(a,n,h){var d;const u=r.getPropertyOptions(t),b=typeof u.attribute=="string"?u.attribute:t;if(a===b){const p=u.converter||Co,g=(typeof p=="function"?p:(d=p==null?void 0:p.fromAttribute)!=null?d:Co.fromAttribute)(h,u.type);this[t]!==g&&(this[o]=g)}s.call(this,a,n,h)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=Oo(class extends Ro{constructor(t){if(super(t),t.type!==he.PROPERTY&&t.type!==he.ATTRIBUTE&&t.type!==he.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ji(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Xt||e===yt)return e;const o=t.element,r=t.name;if(t.type===he.PROPERTY){if(e===o[r])return Xt}else if(t.type===he.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(r))return Xt}else if(t.type===he.ATTRIBUTE&&o.getAttribute(r)===e+"")return Xt;return bn(t),e}});var Dt=class extends P{constructor(){super(...arguments),this.formControlController=new Ce(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return $`
      <label
        part="base"
        class=${j({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${M(this.value)}
          .indeterminate=${Be(this.indeterminate)}
          .checked=${Be(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?$`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?$`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};Dt.styles=Vd;Dt.dependencies={"sl-icon":ut};i([R('input[type="checkbox"]')],Dt.prototype,"input",2);i([q()],Dt.prototype,"hasFocus",2);i([c()],Dt.prototype,"title",2);i([c()],Dt.prototype,"name",2);i([c()],Dt.prototype,"value",2);i([c({reflect:!0})],Dt.prototype,"size",2);i([c({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);i([c({type:Boolean,reflect:!0})],Dt.prototype,"checked",2);i([c({type:Boolean,reflect:!0})],Dt.prototype,"indeterminate",2);i([He("checked")],Dt.prototype,"defaultChecked",2);i([c({reflect:!0})],Dt.prototype,"form",2);i([c({type:Boolean,reflect:!0})],Dt.prototype,"required",2);i([E("disabled",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleDisabledChange",1);i([E(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Dt.prototype,"handleStateChange",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Oi(t,e,o){return t?e():o==null?void 0:o()}var as=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await Tt(this.childrenContainer);const{keyframes:t,options:e}=_t(this,"tree-item.collapse",{dir:this.localize.dir()});await Ct(this.childrenContainer,ur(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&as.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await Tt(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:e}=_t(this,"tree-item.expand",{dir:this.localize.dir()});await Ct(this.childrenContainer,ur(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(e=>as.isTreeItem(e)&&(t||!e.disabled)):[]}render(){const t=this.localize.dir()==="rtl",e=!this.loading&&(!this.isLeaf||this.lazy);return $`
      <div
        part="base"
        class="${j({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":e,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${j({"tree-item__expand-button":!0,"tree-item__expand-button--visible":e})}
            aria-hidden="true"
          >
            ${Oi(this.loading,()=>$` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Oi(this.selectable,()=>$`
                <sl-checkbox
                  part="checkbox"
                  exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                  class="tree-item__checkbox"
                  ?disabled="${this.disabled}"
                  ?checked="${Be(this.selected)}"
                  ?indeterminate="${this.indeterminate}"
                  tabindex="-1"
                ></sl-checkbox>
              `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}},ht=as;ht.styles=Fd;ht.dependencies={"sl-checkbox":Dt,"sl-icon":ut,"sl-spinner":br};i([q()],ht.prototype,"indeterminate",2);i([q()],ht.prototype,"isLeaf",2);i([q()],ht.prototype,"loading",2);i([q()],ht.prototype,"selectable",2);i([c({type:Boolean,reflect:!0})],ht.prototype,"expanded",2);i([c({type:Boolean,reflect:!0})],ht.prototype,"selected",2);i([c({type:Boolean,reflect:!0})],ht.prototype,"disabled",2);i([c({type:Boolean,reflect:!0})],ht.prototype,"lazy",2);i([R("slot:not([name])")],ht.prototype,"defaultSlot",2);i([R("slot[name=children]")],ht.prototype,"childrenSlot",2);i([R(".tree-item__item")],ht.prototype,"itemElement",2);i([R(".tree-item__children")],ht.prototype,"childrenContainer",2);i([R(".tree-item__expand-button slot")],ht.prototype,"expandButtonSlot",2);i([E("loading",{waitUntilFirstUpdate:!0})],ht.prototype,"handleLoadingChange",1);i([E("disabled")],ht.prototype,"handleDisabledChange",1);i([E("selected")],ht.prototype,"handleSelectedChange",1);i([E("expanded",{waitUntilFirstUpdate:!0})],ht.prototype,"handleExpandedChange",1);i([E("expanded",{waitUntilFirstUpdate:!0})],ht.prototype,"handleExpandAnimation",1);i([E("lazy",{waitUntilFirstUpdate:!0})],ht.prototype,"handleLazyChange",1);it("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});it("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});ht.define("sl-tree-item");var Bd=B`
  ${N}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,bs=class extends P{render(){return $` <slot></slot> `}};bs.styles=Bd;bs.define("sl-visually-hidden");var Ud=B`
  ${N}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
  }
`,Nd=B`
  ${N}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;const Ae=Math.min,Gt=Math.max,hr=Math.round,tr=Math.floor,Te=t=>({x:t,y:t}),Hd={left:"right",right:"left",bottom:"top",top:"bottom"},jd={start:"end",end:"start"};function ls(t,e,o){return Gt(t,Ae(e,o))}function ro(t,e){return typeof t=="function"?t(e):t}function Oe(t){return t.split("-")[0]}function so(t){return t.split("-")[1]}function na(t){return t==="x"?"y":"x"}function vs(t){return t==="y"?"height":"width"}function Do(t){return["top","bottom"].includes(Oe(t))?"y":"x"}function ys(t){return na(Do(t))}function qd(t,e,o){o===void 0&&(o=!1);const r=so(t),s=ys(t),a=vs(s);let n=s==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(n=pr(n)),[n,pr(n)]}function Wd(t){const e=pr(t);return[ns(t),e,ns(e)]}function ns(t){return t.replace(/start|end/g,e=>jd[e])}function Kd(t,e,o){const r=["left","right"],s=["right","left"],a=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return o?e?s:r:e?r:s;case"left":case"right":return e?a:n;default:return[]}}function Yd(t,e,o,r){const s=so(t);let a=Kd(Oe(t),o==="start",r);return s&&(a=a.map(n=>n+"-"+s),e&&(a=a.concat(a.map(ns)))),a}function pr(t){return t.replace(/left|right|bottom|top/g,e=>Hd[e])}function Gd(t){return{top:0,right:0,bottom:0,left:0,...t}}function ca(t){return typeof t!="number"?Gd(t):{top:t,right:t,bottom:t,left:t}}function fr(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Ri(t,e,o){let{reference:r,floating:s}=t;const a=Do(e),n=ys(e),h=vs(n),d=Oe(e),u=a==="y",b=r.x+r.width/2-s.width/2,p=r.y+r.height/2-s.height/2,m=r[h]/2-s[h]/2;let g;switch(d){case"top":g={x:b,y:r.y-s.height};break;case"bottom":g={x:b,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-s.width,y:p};break;default:g={x:r.x,y:r.y}}switch(so(e)){case"start":g[n]-=m*(o&&u?-1:1);break;case"end":g[n]+=m*(o&&u?-1:1);break}return g}const Xd=async(t,e,o)=>{const{placement:r="bottom",strategy:s="absolute",middleware:a=[],platform:n}=o,h=a.filter(Boolean),d=await(n.isRTL==null?void 0:n.isRTL(e));let u=await n.getElementRects({reference:t,floating:e,strategy:s}),{x:b,y:p}=Ri(u,r,d),m=r,g={},v=0;for(let k=0;k<h.length;k++){const{name:I,fn:L}=h[k],{x:S,y:A,data:x,reset:C}=await L({x:b,y:p,initialPlacement:r,placement:m,strategy:s,middlewareData:g,rects:u,platform:n,elements:{reference:t,floating:e}});if(b=S??b,p=A??p,g={...g,[I]:{...g[I],...x}},C&&v<=50){v++,typeof C=="object"&&(C.placement&&(m=C.placement),C.rects&&(u=C.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:s}):C.rects),{x:b,y:p}=Ri(u,m,d)),k=-1;continue}}return{x:b,y:p,placement:m,strategy:s,middlewareData:g}};async function _s(t,e){var o;e===void 0&&(e={});const{x:r,y:s,platform:a,rects:n,elements:h,strategy:d}=t,{boundary:u="clippingAncestors",rootBoundary:b="viewport",elementContext:p="floating",altBoundary:m=!1,padding:g=0}=ro(e,t),v=ca(g),I=h[m?p==="floating"?"reference":"floating":p],L=fr(await a.getClippingRect({element:(o=await(a.isElement==null?void 0:a.isElement(I)))==null||o?I:I.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(h.floating)),boundary:u,rootBoundary:b,strategy:d})),S=p==="floating"?{...n.floating,x:r,y:s}:n.reference,A=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h.floating)),x=await(a.isElement==null?void 0:a.isElement(A))?await(a.getScale==null?void 0:a.getScale(A))||{x:1,y:1}:{x:1,y:1},C=fr(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:S,offsetParent:A,strategy:d}):S);return{top:(L.top-C.top+v.top)/x.y,bottom:(C.bottom-L.bottom+v.bottom)/x.y,left:(L.left-C.left+v.left)/x.x,right:(C.right-L.right+v.right)/x.x}}const Qd=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:r,placement:s,rects:a,platform:n,elements:h,middlewareData:d}=e,{element:u,padding:b=0}=ro(t,e)||{};if(u==null)return{};const p=ca(b),m={x:o,y:r},g=ys(s),v=vs(g),k=await n.getDimensions(u),I=g==="y",L=I?"top":"left",S=I?"bottom":"right",A=I?"clientHeight":"clientWidth",x=a.reference[v]+a.reference[g]-m[g]-a.floating[v],C=m[g]-a.reference[g],O=await(n.getOffsetParent==null?void 0:n.getOffsetParent(u));let W=O?O[A]:0;(!W||!await(n.isElement==null?void 0:n.isElement(O)))&&(W=h.floating[A]||a.floating[v]);const K=x/2-C/2,U=W/2-k[v]/2-1,V=Ae(p[L],U),zt=Ae(p[S],U),nt=V,Ot=W-k[v]-zt,pt=W/2-k[v]/2+K,ct=ls(nt,pt,Ot),Et=!d.arrow&&so(s)!=null&&pt!=ct&&a.reference[v]/2-(pt<nt?V:zt)-k[v]/2<0,F=Et?pt<nt?pt-nt:pt-Ot:0;return{[g]:m[g]+F,data:{[g]:ct,centerOffset:pt-ct-F,...Et&&{alignmentOffset:F}},reset:Et}}}),Zd=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,r;const{placement:s,middlewareData:a,rects:n,initialPlacement:h,platform:d,elements:u}=e,{mainAxis:b=!0,crossAxis:p=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:k=!0,...I}=ro(t,e);if((o=a.arrow)!=null&&o.alignmentOffset)return{};const L=Oe(s),S=Oe(h)===h,A=await(d.isRTL==null?void 0:d.isRTL(u.floating)),x=m||(S||!k?[pr(h)]:Wd(h));!m&&v!=="none"&&x.push(...Yd(h,k,v,A));const C=[h,...x],O=await _s(e,I),W=[];let K=((r=a.flip)==null?void 0:r.overflows)||[];if(b&&W.push(O[L]),p){const nt=qd(s,n,A);W.push(O[nt[0]],O[nt[1]])}if(K=[...K,{placement:s,overflows:W}],!W.every(nt=>nt<=0)){var U,V;const nt=(((U=a.flip)==null?void 0:U.index)||0)+1,Ot=C[nt];if(Ot)return{data:{index:nt,overflows:K},reset:{placement:Ot}};let pt=(V=K.filter(ct=>ct.overflows[0]<=0).sort((ct,Et)=>ct.overflows[1]-Et.overflows[1])[0])==null?void 0:V.placement;if(!pt)switch(g){case"bestFit":{var zt;const ct=(zt=K.map(Et=>[Et.placement,Et.overflows.filter(F=>F>0).reduce((F,_e)=>F+_e,0)]).sort((Et,F)=>Et[1]-F[1])[0])==null?void 0:zt[0];ct&&(pt=ct);break}case"initialPlacement":pt=h;break}if(s!==pt)return{reset:{placement:pt}}}return{}}}};async function Jd(t,e){const{placement:o,platform:r,elements:s}=t,a=await(r.isRTL==null?void 0:r.isRTL(s.floating)),n=Oe(o),h=so(o),d=Do(o)==="y",u=["left","top"].includes(n)?-1:1,b=a&&d?-1:1,p=ro(e,t);let{mainAxis:m,crossAxis:g,alignmentAxis:v}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return h&&typeof v=="number"&&(g=h==="end"?v*-1:v),d?{x:g*b,y:m*u}:{x:m*u,y:g*b}}const tu=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:r}=e,s=await Jd(e,t);return{x:o+s.x,y:r+s.y,data:s}}}},eu=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:r,placement:s}=e,{mainAxis:a=!0,crossAxis:n=!1,limiter:h={fn:I=>{let{x:L,y:S}=I;return{x:L,y:S}}},...d}=ro(t,e),u={x:o,y:r},b=await _s(e,d),p=Do(Oe(s)),m=na(p);let g=u[m],v=u[p];if(a){const I=m==="y"?"top":"left",L=m==="y"?"bottom":"right",S=g+b[I],A=g-b[L];g=ls(S,g,A)}if(n){const I=p==="y"?"top":"left",L=p==="y"?"bottom":"right",S=v+b[I],A=v-b[L];v=ls(S,v,A)}const k=h.fn({...e,[m]:g,[p]:v});return{...k,data:{x:k.x-o,y:k.y-r}}}}},Ii=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:r,platform:s,elements:a}=e,{apply:n=()=>{},...h}=ro(t,e),d=await _s(e,h),u=Oe(o),b=so(o),p=Do(o)==="y",{width:m,height:g}=r.floating;let v,k;u==="top"||u==="bottom"?(v=u,k=b===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(k=u,v=b==="end"?"top":"bottom");const I=g-d[v],L=m-d[k],S=!e.middlewareData.shift;let A=I,x=L;if(p){const O=m-d.left-d.right;x=b||S?Ae(L,O):O}else{const O=g-d.top-d.bottom;A=b||S?Ae(I,O):O}if(S&&!b){const O=Gt(d.left,0),W=Gt(d.right,0),K=Gt(d.top,0),U=Gt(d.bottom,0);p?x=m-2*(O!==0||W!==0?O+W:Gt(d.left,d.right)):A=g-2*(K!==0||U!==0?K+U:Gt(d.top,d.bottom))}await n({...e,availableWidth:x,availableHeight:A});const C=await s.getDimensions(a.floating);return m!==C.width||g!==C.height?{reset:{rects:!0}}:{}}}};function Re(t){return da(t)?(t.nodeName||"").toLowerCase():"#document"}function Qt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $e(t){var e;return(e=(da(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function da(t){return t instanceof Node||t instanceof Qt(t).Node}function xe(t){return t instanceof Element||t instanceof Qt(t).Element}function pe(t){return t instanceof HTMLElement||t instanceof Qt(t).HTMLElement}function Li(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Qt(t).ShadowRoot}function Po(t){const{overflow:e,overflowX:o,overflowY:r,display:s}=se(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!["inline","contents"].includes(s)}function ou(t){return["table","td","th"].includes(Re(t))}function ws(t){const e=xs(),o=se(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(o.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(o.contain||"").includes(r))}function ru(t){let e=eo(t);for(;pe(e)&&!yr(e);){if(ws(e))return e;e=eo(e)}return null}function xs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function yr(t){return["html","body","#document"].includes(Re(t))}function se(t){return Qt(t).getComputedStyle(t)}function _r(t){return xe(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function eo(t){if(Re(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Li(t)&&t.host||$e(t);return Li(e)?e.host:e}function ua(t){const e=eo(t);return yr(e)?t.ownerDocument?t.ownerDocument.body:t.body:pe(e)&&Po(e)?e:ua(e)}function Eo(t,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);const s=ua(t),a=s===((r=t.ownerDocument)==null?void 0:r.body),n=Qt(s);return a?e.concat(n,n.visualViewport||[],Po(s)?s:[],n.frameElement&&o?Eo(n.frameElement):[]):e.concat(s,Eo(s,[],o))}function ha(t){const e=se(t);let o=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const s=pe(t),a=s?t.offsetWidth:o,n=s?t.offsetHeight:r,h=hr(o)!==a||hr(r)!==n;return h&&(o=a,r=n),{width:o,height:r,$:h}}function ks(t){return xe(t)?t:t.contextElement}function Ze(t){const e=ks(t);if(!pe(e))return Te(1);const o=e.getBoundingClientRect(),{width:r,height:s,$:a}=ha(e);let n=(a?hr(o.width):o.width)/r,h=(a?hr(o.height):o.height)/s;return(!n||!Number.isFinite(n))&&(n=1),(!h||!Number.isFinite(h))&&(h=1),{x:n,y:h}}const su=Te(0);function pa(t){const e=Qt(t);return!xs()||!e.visualViewport?su:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function iu(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==Qt(t)?!1:e}function Ue(t,e,o,r){e===void 0&&(e=!1),o===void 0&&(o=!1);const s=t.getBoundingClientRect(),a=ks(t);let n=Te(1);e&&(r?xe(r)&&(n=Ze(r)):n=Ze(t));const h=iu(a,o,r)?pa(a):Te(0);let d=(s.left+h.x)/n.x,u=(s.top+h.y)/n.y,b=s.width/n.x,p=s.height/n.y;if(a){const m=Qt(a),g=r&&xe(r)?Qt(r):r;let v=m.frameElement;for(;v&&r&&g!==m;){const k=Ze(v),I=v.getBoundingClientRect(),L=se(v),S=I.left+(v.clientLeft+parseFloat(L.paddingLeft))*k.x,A=I.top+(v.clientTop+parseFloat(L.paddingTop))*k.y;d*=k.x,u*=k.y,b*=k.x,p*=k.y,d+=S,u+=A,v=Qt(v).frameElement}}return fr({width:b,height:p,x:d,y:u})}function au(t){let{rect:e,offsetParent:o,strategy:r}=t;const s=pe(o),a=$e(o);if(o===a)return e;let n={scrollLeft:0,scrollTop:0},h=Te(1);const d=Te(0);if((s||!s&&r!=="fixed")&&((Re(o)!=="body"||Po(a))&&(n=_r(o)),pe(o))){const u=Ue(o);h=Ze(o),d.x=u.x+o.clientLeft,d.y=u.y+o.clientTop}return{width:e.width*h.x,height:e.height*h.y,x:e.x*h.x-n.scrollLeft*h.x+d.x,y:e.y*h.y-n.scrollTop*h.y+d.y}}function lu(t){return Array.from(t.getClientRects())}function fa(t){return Ue($e(t)).left+_r(t).scrollLeft}function nu(t){const e=$e(t),o=_r(t),r=t.ownerDocument.body,s=Gt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),a=Gt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let n=-o.scrollLeft+fa(t);const h=-o.scrollTop;return se(r).direction==="rtl"&&(n+=Gt(e.clientWidth,r.clientWidth)-s),{width:s,height:a,x:n,y:h}}function cu(t,e){const o=Qt(t),r=$e(t),s=o.visualViewport;let a=r.clientWidth,n=r.clientHeight,h=0,d=0;if(s){a=s.width,n=s.height;const u=xs();(!u||u&&e==="fixed")&&(h=s.offsetLeft,d=s.offsetTop)}return{width:a,height:n,x:h,y:d}}function du(t,e){const o=Ue(t,!0,e==="fixed"),r=o.top+t.clientTop,s=o.left+t.clientLeft,a=pe(t)?Ze(t):Te(1),n=t.clientWidth*a.x,h=t.clientHeight*a.y,d=s*a.x,u=r*a.y;return{width:n,height:h,x:d,y:u}}function Di(t,e,o){let r;if(e==="viewport")r=cu(t,o);else if(e==="document")r=nu($e(t));else if(xe(e))r=du(e,o);else{const s=pa(t);r={...e,x:e.x-s.x,y:e.y-s.y}}return fr(r)}function ma(t,e){const o=eo(t);return o===e||!xe(o)||yr(o)?!1:se(o).position==="fixed"||ma(o,e)}function uu(t,e){const o=e.get(t);if(o)return o;let r=Eo(t,[],!1).filter(h=>xe(h)&&Re(h)!=="body"),s=null;const a=se(t).position==="fixed";let n=a?eo(t):t;for(;xe(n)&&!yr(n);){const h=se(n),d=ws(n);!d&&h.position==="fixed"&&(s=null),(a?!d&&!s:!d&&h.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Po(n)&&!d&&ma(t,n))?r=r.filter(b=>b!==n):s=h,n=eo(n)}return e.set(t,r),r}function hu(t){let{element:e,boundary:o,rootBoundary:r,strategy:s}=t;const n=[...o==="clippingAncestors"?uu(e,this._c):[].concat(o),r],h=n[0],d=n.reduce((u,b)=>{const p=Di(e,b,s);return u.top=Gt(p.top,u.top),u.right=Ae(p.right,u.right),u.bottom=Ae(p.bottom,u.bottom),u.left=Gt(p.left,u.left),u},Di(e,h,s));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function pu(t){return ha(t)}function fu(t,e,o){const r=pe(e),s=$e(e),a=o==="fixed",n=Ue(t,!0,a,e);let h={scrollLeft:0,scrollTop:0};const d=Te(0);if(r||!r&&!a)if((Re(e)!=="body"||Po(s))&&(h=_r(e)),r){const u=Ue(e,!0,a,e);d.x=u.x+e.clientLeft,d.y=u.y+e.clientTop}else s&&(d.x=fa(s));return{x:n.left+h.scrollLeft-d.x,y:n.top+h.scrollTop-d.y,width:n.width,height:n.height}}function Pi(t,e){return!pe(t)||se(t).position==="fixed"?null:e?e(t):t.offsetParent}function ga(t,e){const o=Qt(t);if(!pe(t))return o;let r=Pi(t,e);for(;r&&ou(r)&&se(r).position==="static";)r=Pi(r,e);return r&&(Re(r)==="html"||Re(r)==="body"&&se(r).position==="static"&&!ws(r))?o:r||ru(t)||o}const mu=async function(t){let{reference:e,floating:o,strategy:r}=t;const s=this.getOffsetParent||ga,a=this.getDimensions;return{reference:fu(e,await s(o),r),floating:{x:0,y:0,...await a(o)}}};function gu(t){return se(t).direction==="rtl"}const ir={convertOffsetParentRelativeRectToViewportRelativeRect:au,getDocumentElement:$e,getClippingRect:hu,getOffsetParent:ga,getElementRects:mu,getClientRects:lu,getDimensions:pu,getScale:Ze,isElement:xe,isRTL:gu};function bu(t,e){let o=null,r;const s=$e(t);function a(){clearTimeout(r),o&&o.disconnect(),o=null}function n(h,d){h===void 0&&(h=!1),d===void 0&&(d=1),a();const{left:u,top:b,width:p,height:m}=t.getBoundingClientRect();if(h||e(),!p||!m)return;const g=tr(b),v=tr(s.clientWidth-(u+p)),k=tr(s.clientHeight-(b+m)),I=tr(u),S={rootMargin:-g+"px "+-v+"px "+-k+"px "+-I+"px",threshold:Gt(0,Ae(1,d))||1};let A=!0;function x(C){const O=C[0].intersectionRatio;if(O!==d){if(!A)return n();O?n(!1,O):r=setTimeout(()=>{n(!1,1e-7)},100)}A=!1}try{o=new IntersectionObserver(x,{...S,root:s.ownerDocument})}catch{o=new IntersectionObserver(x,S)}o.observe(t)}return n(!0),a}function vu(t,e,o,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:h=typeof IntersectionObserver=="function",animationFrame:d=!1}=r,u=ks(t),b=s||a?[...u?Eo(u):[],...Eo(e)]:[];b.forEach(L=>{s&&L.addEventListener("scroll",o,{passive:!0}),a&&L.addEventListener("resize",o)});const p=u&&h?bu(u,o):null;let m=-1,g=null;n&&(g=new ResizeObserver(L=>{let[S]=L;S&&S.target===u&&g&&(g.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{g&&g.observe(e)})),o()}),u&&!d&&g.observe(u),g.observe(e));let v,k=d?Ue(t):null;d&&I();function I(){const L=Ue(t);k&&(L.x!==k.x||L.y!==k.y||L.width!==k.width||L.height!==k.height)&&o(),k=L,v=requestAnimationFrame(I)}return o(),()=>{b.forEach(L=>{s&&L.removeEventListener("scroll",o),a&&L.removeEventListener("resize",o)}),p&&p(),g&&g.disconnect(),g=null,d&&cancelAnimationFrame(v)}}const yu=(t,e,o)=>{const r=new Map,s={platform:ir,...o},a={...s.platform,_c:r};return Xd(t,e,{...s,platform:a})};function ba(t){return _u(t)}function Kr(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function _u(t){for(let e=t;e;e=Kr(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Kr(t);e;e=Kr(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function wu(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t}var lt=class extends P{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||wu(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=vu(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[tu({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ii({apply:({rects:o})=>{const r=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=s?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Zd({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(eu({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Ii({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Qd({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>ir.getOffsetParent(o,ba):ir.getOffsetParent;yu(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:To(ke({},ir),{getOffsetParent:e})}).then(({x:o,y:r,middlewareData:s,placement:a})=>{const n=getComputedStyle(this).direction==="rtl",h={top:"bottom",right:"left",bottom:"top",left:"right"}[a.split("-")[0]];if(this.setAttribute("data-current-placement",a),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){const d=s.arrow.x,u=s.arrow.y;let b="",p="",m="",g="";if(this.arrowPlacement==="start"){const v=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";b=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=n?v:"",g=n?"":v}else if(this.arrowPlacement==="end"){const v=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=n?"":v,g=n?v:"",m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":"",b=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof d=="number"?`${d}px`:"",b=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:b,right:p,bottom:m,left:g,[h]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return $`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${j({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?$`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};lt.styles=Nd;i([R(".popup")],lt.prototype,"popup",2);i([R(".popup__arrow")],lt.prototype,"arrowEl",2);i([c()],lt.prototype,"anchor",2);i([c({type:Boolean,reflect:!0})],lt.prototype,"active",2);i([c({reflect:!0})],lt.prototype,"placement",2);i([c({reflect:!0})],lt.prototype,"strategy",2);i([c({type:Number})],lt.prototype,"distance",2);i([c({type:Number})],lt.prototype,"skidding",2);i([c({type:Boolean})],lt.prototype,"arrow",2);i([c({attribute:"arrow-placement"})],lt.prototype,"arrowPlacement",2);i([c({attribute:"arrow-padding",type:Number})],lt.prototype,"arrowPadding",2);i([c({type:Boolean})],lt.prototype,"flip",2);i([c({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],lt.prototype,"flipFallbackPlacements",2);i([c({attribute:"flip-fallback-strategy"})],lt.prototype,"flipFallbackStrategy",2);i([c({type:Object})],lt.prototype,"flipBoundary",2);i([c({attribute:"flip-padding",type:Number})],lt.prototype,"flipPadding",2);i([c({type:Boolean})],lt.prototype,"shift",2);i([c({type:Object})],lt.prototype,"shiftBoundary",2);i([c({attribute:"shift-padding",type:Number})],lt.prototype,"shiftPadding",2);i([c({attribute:"auto-size"})],lt.prototype,"autoSize",2);i([c()],lt.prototype,"sync",2);i([c({type:Object})],lt.prototype,"autoSizeBoundary",2);i([c({attribute:"auto-size-padding",type:Number})],lt.prototype,"autoSizePadding",2);var Pt=class extends P{constructor(){super(),this.localize=new rt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=zi(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=zi(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await Tt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=_t(this,"tooltip.show",{dir:this.localize.dir()});await Ct(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),await Tt(this.body);const{keyframes:t,options:e}=_t(this,"tooltip.hide",{dir:this.localize.dir()});await Ct(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,qt(this,"sl-after-hide")}render(){return $`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${j({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Pt.styles=Ud;Pt.dependencies={"sl-popup":lt};i([R("slot:not([name])")],Pt.prototype,"defaultSlot",2);i([R(".tooltip__body")],Pt.prototype,"body",2);i([R("sl-popup")],Pt.prototype,"popup",2);i([c()],Pt.prototype,"content",2);i([c()],Pt.prototype,"placement",2);i([c({type:Boolean,reflect:!0})],Pt.prototype,"disabled",2);i([c({type:Number})],Pt.prototype,"distance",2);i([c({type:Boolean,reflect:!0})],Pt.prototype,"open",2);i([c({type:Number})],Pt.prototype,"skidding",2);i([c()],Pt.prototype,"trigger",2);i([c({type:Boolean})],Pt.prototype,"hoist",2);i([E("open",{waitUntilFirstUpdate:!0})],Pt.prototype,"handleOpenChange",1);i([E(["content","distance","hoist","placement","skidding"])],Pt.prototype,"handleOptionsChange",1);i([E("disabled")],Pt.prototype,"handleDisabledChange",1);it("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});it("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Pt.define("sl-tooltip");var xu=B`
  ${N}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Rt(t,e,o){const r=s=>Object.is(s,-0)?0:s;return t<e?r(e):t>o?r(o):r(t)}function Mi(t,e=!1){function o(a){const n=a.getChildrenItems({includeDisabled:!1});if(n.length){const h=n.every(u=>u.selected),d=n.every(u=>!u.selected&&!u.indeterminate);a.selected=h,a.indeterminate=!h&&!d}}function r(a){const n=a.parentElement;ht.isTreeItem(n)&&(o(n),r(n))}function s(a){for(const n of a.getChildrenItems())n.selected=e?a.selected||n.selected:!n.disabled&&a.selected,s(n);e&&o(a)}s(t),r(t)}var je=class extends P{constructor(){super(),this.selection="single",this.localize=new rt(this),this.clickTarget=null,this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const o=t.querySelector(`[slot="${e}-icon"]`);o===null?t.append(this.getExpandButtonIcon(e)):o.hasAttribute("data-default")&&o.replaceWith(this.getExpandButtonIcon(e))})},this.handleTreeChanged=t=>{for(const e of t){const o=[...e.addedNodes].filter(ht.isTreeItem),r=[...e.removedNodes].filter(ht.isTreeItem);o.forEach(this.initTreeItem),this.lastFocusedItem&&r.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),ht.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(t){const o=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(o){const r=o.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${t}-icon`,r}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Mi(t);else if(this.selection==="single"||t.isLeaf){const r=this.getAllTreeItems();for(const s of r)s.selected=s===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const o=this.selectedItems;(e.length!==o.length||o.some(r=>!e.includes(r)))&&Promise.all(o.map(r=>r.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:o}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t==null||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(s=>{var a;return["input","textarea"].includes((a=s==null?void 0:s.tagName)==null?void 0:a.toLowerCase())}))return;const e=this.getFocusableItems(),o=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const s=e.findIndex(d=>d.matches(":focus")),a=e[s],n=d=>{const u=e[Rt(d,0,e.length-1)];this.focusItem(u)},h=d=>{a.expanded=d};t.key==="ArrowDown"?n(s+1):t.key==="ArrowUp"?n(s-1):o&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft"?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?n(s+1):h(!0):o&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight"?!a||a.disabled||a.isLeaf||!a.expanded?n(s-1):h(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(a.disabled||this.selectItem(a))}}handleClick(t){const e=t.target,o=e.closest("sl-tree-item"),r=t.composedPath().some(s=>{var a;return(a=s==null?void 0:s.classList)==null?void 0:a.contains("tree-item__expand-button")});!o||o.disabled||e!==this.clickTarget||(r?o.expanded=!o.expanded:this.selectItem(o))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const o of e)o.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(o=>Mi(o,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=o=>o.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(o=>{var r;if(o.disabled)return!1;const s=(r=o.parentElement)==null?void 0:r.closest("[role=treeitem]");return s&&(!s.expanded||s.loading||e.has(s))&&e.add(o),!e.has(o)})}render(){return $`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};je.styles=xu;i([R("slot:not([name])")],je.prototype,"defaultSlot",2);i([R("slot[name=expand-icon]")],je.prototype,"expandedIconSlot",2);i([R("slot[name=collapse-icon]")],je.prototype,"collapsedIconSlot",2);i([c()],je.prototype,"selection",2);i([E("selection")],je.prototype,"handleSelectionChange",1);je.define("sl-tree");var ku=B`
  ${N}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Cu=0,Mo=class extends P{constructor(){super(...arguments),this.attrId=++Cu,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return $`
      <slot
        part="base"
        class=${j({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Mo.styles=ku;i([c({reflect:!0})],Mo.prototype,"name",2);i([c({type:Boolean,reflect:!0})],Mo.prototype,"active",2);i([E("active")],Mo.prototype,"handleActiveChange",1);Mo.define("sl-tab-panel");var $u=B`
  ${N}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Ie=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return $`
      <span
        part="base"
        class=${j({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?$`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Ie.styles=$u;Ie.dependencies={"sl-icon-button":It};i([c({reflect:!0})],Ie.prototype,"variant",2);i([c({reflect:!0})],Ie.prototype,"size",2);i([c({type:Boolean,reflect:!0})],Ie.prototype,"pill",2);i([c({type:Boolean})],Ie.prototype,"removable",2);Ie.define("sl-tag");var Fo=B`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Su=B`
  ${N}
  ${Fo}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,st=class extends P{constructor(){super(...arguments),this.formControlController=new Ce(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Zt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r){this.input.setRangeText(t,e,o,r),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,r=this.helpText?!0:!!e;return $`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${j({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${M(this.name)}
              .value=${Be(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${M(this.placeholder)}
              rows=${M(this.rows)}
              minlength=${M(this.minlength)}
              maxlength=${M(this.maxlength)}
              autocapitalize=${M(this.autocapitalize)}
              autocorrect=${M(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${M(this.spellcheck)}
              enterkeyhint=${M(this.enterkeyhint)}
              inputmode=${M(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};st.styles=Su;i([R(".textarea__control")],st.prototype,"input",2);i([q()],st.prototype,"hasFocus",2);i([c()],st.prototype,"title",2);i([c()],st.prototype,"name",2);i([c()],st.prototype,"value",2);i([c({reflect:!0})],st.prototype,"size",2);i([c({type:Boolean,reflect:!0})],st.prototype,"filled",2);i([c()],st.prototype,"label",2);i([c({attribute:"help-text"})],st.prototype,"helpText",2);i([c()],st.prototype,"placeholder",2);i([c({type:Number})],st.prototype,"rows",2);i([c()],st.prototype,"resize",2);i([c({type:Boolean,reflect:!0})],st.prototype,"disabled",2);i([c({type:Boolean,reflect:!0})],st.prototype,"readonly",2);i([c({reflect:!0})],st.prototype,"form",2);i([c({type:Boolean,reflect:!0})],st.prototype,"required",2);i([c({type:Number})],st.prototype,"minlength",2);i([c({type:Number})],st.prototype,"maxlength",2);i([c()],st.prototype,"autocapitalize",2);i([c()],st.prototype,"autocorrect",2);i([c()],st.prototype,"autocomplete",2);i([c({type:Boolean})],st.prototype,"autofocus",2);i([c()],st.prototype,"enterkeyhint",2);i([c({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],st.prototype,"spellcheck",2);i([c()],st.prototype,"inputmode",2);i([He()],st.prototype,"defaultValue",2);i([E("disabled",{waitUntilFirstUpdate:!0})],st.prototype,"handleDisabledChange",1);i([E("rows",{waitUntilFirstUpdate:!0})],st.prototype,"handleRowsChange",1);i([E("value",{waitUntilFirstUpdate:!0})],st.prototype,"handleValueChange",1);st.define("sl-textarea");var zu=B`
  ${N}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Wt=class extends P{constructor(){super(...arguments),this.formControlController=new Ce(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return $`
      <label
        part="base"
        class=${j({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${M(this.value)}
          .checked=${Be(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};Wt.styles=zu;i([R('input[type="checkbox"]')],Wt.prototype,"input",2);i([q()],Wt.prototype,"hasFocus",2);i([c()],Wt.prototype,"title",2);i([c()],Wt.prototype,"name",2);i([c()],Wt.prototype,"value",2);i([c({reflect:!0})],Wt.prototype,"size",2);i([c({type:Boolean,reflect:!0})],Wt.prototype,"disabled",2);i([c({type:Boolean,reflect:!0})],Wt.prototype,"checked",2);i([He("checked")],Wt.prototype,"defaultChecked",2);i([c({reflect:!0})],Wt.prototype,"form",2);i([c({type:Boolean,reflect:!0})],Wt.prototype,"required",2);i([E("checked",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleCheckedChange",1);i([E("disabled",{waitUntilFirstUpdate:!0})],Wt.prototype,"handleDisabledChange",1);Wt.define("sl-switch");var Eu=B`
  ${N}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Au=0,ge=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.attrId=++Au,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,$`
      <div
        part="base"
        class=${j({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?$`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};ge.styles=Eu;ge.dependencies={"sl-icon-button":It};i([R(".tab")],ge.prototype,"tab",2);i([c({reflect:!0})],ge.prototype,"panel",2);i([c({type:Boolean,reflect:!0})],ge.prototype,"active",2);i([c({type:Boolean})],ge.prototype,"closable",2);i([c({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);i([E("active")],ge.prototype,"handleActiveChange",1);i([E("disabled")],ge.prototype,"handleDisabledChange",1);ge.define("sl-tab");var Tu=B`
  ${N}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function Ou(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var cs=new Set;function Ru(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function _o(t){if(cs.add(t),!document.body.classList.contains("sl-scroll-lock")){const e=Ru();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function wo(t){cs.delete(t),cs.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function ds(t,e,o="vertical",r="smooth"){const s=Ou(t,e),a=s.top+e.scrollTop,n=s.left+e.scrollLeft,h=e.scrollLeft,d=e.scrollLeft+e.offsetWidth,u=e.scrollTop,b=e.scrollTop+e.offsetHeight;(o==="horizontal"||o==="both")&&(n<h?e.scrollTo({left:n,behavior:r}):n+t.clientWidth>d&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:r})),(o==="vertical"||o==="both")&&(a<u?e.scrollTo({top:a,behavior:r}):a+t.clientHeight>b&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:r}))}var Jt=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(o=>o.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((o,r)=>{var s;o[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((s=this.getActiveTab())!=null?s:this.tabs[0],{emitEvents:!1}),r.unobserve(o[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(o=>t.includeDisabled?o.tagName.toLowerCase()==="sl-tab":o.tagName.toLowerCase()==="sl-tab"&&!o.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const o=t.target.closest("sl-tab");(o==null?void 0:o.closest("sl-tab-group"))===this&&o!==null&&this.setActiveTab(o,{scrollBehavior:"smooth"})}handleKeyDown(t){const o=t.target.closest("sl-tab");if((o==null?void 0:o.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&o!==null&&(this.setActiveTab(o,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const s=this.tabs.find(n=>n.matches(":focus")),a=this.localize.dir()==="rtl";if((s==null?void 0:s.tagName.toLowerCase())==="sl-tab"){let n=this.tabs.indexOf(s);t.key==="Home"?n=0:t.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&ds(this.tabs[n],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=ke({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const o=this.activeTab;this.activeTab=t,this.tabs.forEach(r=>r.active=r===this.activeTab),this.panels.forEach(r=>{var s;return r.active=r.name===((s=this.activeTab)==null?void 0:s.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&ds(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(o&&this.emit("sl-tab-hide",{detail:{name:o.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(o=>o.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,o=t.clientHeight,r=this.localize.dir()==="rtl",s=this.getAllTabs(),n=s.slice(0,s.indexOf(t)).reduce((h,d)=>({left:h.left+d.clientWidth,top:h.top+d.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=r?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${o}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(o=>o.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        class=${j({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?$`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Jt.styles=Tu;Jt.dependencies={"sl-icon-button":It};i([R(".tab-group")],Jt.prototype,"tabGroup",2);i([R(".tab-group__body")],Jt.prototype,"body",2);i([R(".tab-group__nav")],Jt.prototype,"nav",2);i([R(".tab-group__indicator")],Jt.prototype,"indicator",2);i([q()],Jt.prototype,"hasScrollControls",2);i([c()],Jt.prototype,"placement",2);i([c()],Jt.prototype,"activation",2);i([c({attribute:"no-scroll-controls",type:Boolean})],Jt.prototype,"noScrollControls",2);i([E("noScrollControls",{waitUntilFirstUpdate:!0})],Jt.prototype,"updateScrollControls",1);i([E("placement",{waitUntilFirstUpdate:!0})],Jt.prototype,"syncIndicator",1);Jt.define("sl-tab-group");br.define("sl-spinner");var Iu=B`
  ${N}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function xo(t,e){function o(s){const a=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,h=a.left+n.pageXOffset,d=a.top+n.pageYOffset,u=s.pageX-h,b=s.pageY-d;e!=null&&e.onMove&&e.onMove(u,b)}function r(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",r),e!=null&&e.onStop&&e.onStop()}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",r),(e==null?void 0:e.initialEvent)instanceof PointerEvent&&o(e.initialEvent)}var te=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),xo(this,{onMove:(o,r)=>{let s=this.vertical?r:o;this.primary==="end"&&(s=this.size-s),this.snap&&this.snap.split(" ").forEach(n=>{let h;n.endsWith("%")?h=this.size*(parseFloat(n)/100):h=parseFloat(n),e&&!this.vertical&&(h=this.size-h),s>=h-this.snapThreshold&&s<=h+this.snapThreshold&&(s=h)}),this.position=Rt(this.pixelsToPercentage(s),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=this.position;const o=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=o),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=o),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),this.position=Rt(e,0,100)}}handleResize(t){const{width:e,height:o}=t[0].contentRect;this.size=this.vertical?o:e,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",o=this.localize.dir()==="rtl",r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,s="auto";return this.primary==="end"?o&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${r}`:o&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${s}`,this.style[e]="",$`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${M(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};te.styles=Iu;i([R(".divider")],te.prototype,"divider",2);i([c({type:Number,reflect:!0})],te.prototype,"position",2);i([c({attribute:"position-in-pixels",type:Number})],te.prototype,"positionInPixels",2);i([c({type:Boolean,reflect:!0})],te.prototype,"vertical",2);i([c({type:Boolean,reflect:!0})],te.prototype,"disabled",2);i([c()],te.prototype,"primary",2);i([c()],te.prototype,"snap",2);i([c({type:Number,attribute:"snap-threshold"})],te.prototype,"snapThreshold",2);i([E("position")],te.prototype,"handlePositionChange",1);i([E("positionInPixels")],te.prototype,"handlePositionInPixelsChange",1);i([E("vertical")],te.prototype,"handleVerticalChange",1);te.define("sl-split-panel");var Lu=B`
  ${N}

  :host {
    display: contents;
  }
`,wr=class extends P{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(o=>this.resizeObserver.unobserve(o)),this.observedElements=[],e.forEach(o=>{this.resizeObserver.observe(o),this.observedElements.push(o)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return $` <slot @slotchange=${this.handleSlotChange}></slot> `}};wr.styles=Lu;i([c({type:Boolean,reflect:!0})],wr.prototype,"disabled",2);i([E("disabled",{waitUntilFirstUpdate:!0})],wr.prototype,"handleDisabledChange",1);wr.define("sl-resize-observer");var Du=B`
  ${N}
  ${Fo}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let us=class extends Ro{constructor(e){if(super(e),this.et=yt,e.type!==he.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===yt||e==null)return this.ft=void 0,this.et=e;if(e===Xt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const o=[e];return o.raw=o,this.ft={_$litType$:this.constructor.resultType,strings:o,values:[]}}};us.directiveName="unsafeHTML",us.resultType=1;const ar=Oo(us);var tt=class extends P{constructor(){super(...arguments),this.formControlController=new Ce(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Zt(this,"help-text","label"),this.localize=new rt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>$`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,o=e.closest(".select__clear")!==null,r=e.closest("sl-icon-button")!==null;if(!(o||r)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const s=this.getAllOptions(),a=s.indexOf(this.currentOption);let n=Math.max(0,a);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=a+1,n>s.length-1&&(n=0)):t.key==="ArrowUp"?(n=a-1,n<0&&(n=s.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=s.length-1),this.setCurrentOption(s[n])}if(t.key.length===1||t.key==="Backspace"){const s=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const a of s)if(a.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(a);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const o=t.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="sl-icon-button");this.disabled||o||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const o=t.target.closest("sl-option"),r=this.value;o&&!o.disabled&&(this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],o=[];customElements.get("sl-option")?(t.forEach(r=>o.push(r.value)),this.setSelectedOptions(t.filter(r=>e.includes(r.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach(r=>r.selected=!1),o.length&&o.forEach(r=>r.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,o,r;this.selectedOptions=this.getAllOptions().filter(s=>s.selected),this.multiple?(this.value=this.selectedOptions.map(s=>s.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(e=(t=this.selectedOptions[0])==null?void 0:t.value)!=null?e:"",this.displayLabel=(r=(o=this.selectedOptions[0])==null?void 0:o.getTextLabel())!=null?r:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return $`<div @sl-remove=${r=>this.handleTagRemove(r,t)}>
          ${typeof o=="string"?ar(o):o}
        </div>`}else if(e===this.maxOptionsVisible)return $`<sl-tag>+${this.selectedOptions.length-e}</sl-tag>`;return $``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(o=>e.includes(o.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await Tt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=_t(this,"select.show",{dir:this.localize.dir()});await Ct(this.popup.popup,t,e),this.currentOption&&ds(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Tt(this);const{keyframes:t,options:e}=_t(this,"select.hide",{dir:this.localize.dir()});await Ct(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,qt(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,qt(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,r=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value.length===0;return $`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${j({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?$`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${s?$`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};tt.styles=Du;tt.dependencies={"sl-icon":ut,"sl-popup":lt,"sl-tag":Ie};i([R(".select")],tt.prototype,"popup",2);i([R(".select__combobox")],tt.prototype,"combobox",2);i([R(".select__display-input")],tt.prototype,"displayInput",2);i([R(".select__value-input")],tt.prototype,"valueInput",2);i([R(".select__listbox")],tt.prototype,"listbox",2);i([q()],tt.prototype,"hasFocus",2);i([q()],tt.prototype,"displayLabel",2);i([q()],tt.prototype,"currentOption",2);i([q()],tt.prototype,"selectedOptions",2);i([c()],tt.prototype,"name",2);i([c({converter:{fromAttribute:t=>t.split(" "),toAttribute:t=>t.join(" ")}})],tt.prototype,"value",2);i([He()],tt.prototype,"defaultValue",2);i([c({reflect:!0})],tt.prototype,"size",2);i([c()],tt.prototype,"placeholder",2);i([c({type:Boolean,reflect:!0})],tt.prototype,"multiple",2);i([c({attribute:"max-options-visible",type:Number})],tt.prototype,"maxOptionsVisible",2);i([c({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);i([c({type:Boolean})],tt.prototype,"clearable",2);i([c({type:Boolean,reflect:!0})],tt.prototype,"open",2);i([c({type:Boolean})],tt.prototype,"hoist",2);i([c({type:Boolean,reflect:!0})],tt.prototype,"filled",2);i([c({type:Boolean,reflect:!0})],tt.prototype,"pill",2);i([c()],tt.prototype,"label",2);i([c({reflect:!0})],tt.prototype,"placement",2);i([c({attribute:"help-text"})],tt.prototype,"helpText",2);i([c({reflect:!0})],tt.prototype,"form",2);i([c({type:Boolean,reflect:!0})],tt.prototype,"required",2);i([c()],tt.prototype,"getTag",2);i([E("disabled",{waitUntilFirstUpdate:!0})],tt.prototype,"handleDisabledChange",1);i([E("value",{waitUntilFirstUpdate:!0})],tt.prototype,"handleValueChange",1);i([E("open",{waitUntilFirstUpdate:!0})],tt.prototype,"handleOpenChange",1);it("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});it("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});tt.define("sl-select");var Pu=B`
  ${N}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Cs=class extends P{constructor(){super(...arguments),this.effect="none"}render(){return $`
      <div
        part="base"
        class=${j({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Cs.styles=Pu;i([c()],Cs.prototype,"effect",2);Cs.define("sl-skeleton");var Mu=B`
  ${N}
  ${Fo}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,xt=class extends P{constructor(){super(...arguments),this.formControlController=new Ce(this),this.hasSlotController=new Zt(this,"help-text","label"),this.localize=new rt(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,o=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=this.localize.dir()==="rtl",a=e*t;if(s){const n=`${e-a}px + ${t} * ${r}`;this.output.style.translate=`calc((${n} - ${o/2}px - ${r} / 2))`}else{const n=`${a}px - ${t} * ${r}`;this.output.style.translate=`calc(${n} - ${o/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.syncTooltip(t)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,r=this.helpText?!0:!!e;return $`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--medium":!0,"form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${j({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${M(this.name)}
              ?disabled=${this.disabled}
              min=${M(this.min)}
              max=${M(this.max)}
              step=${M(this.step)}
              .value=${Be(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?$`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};xt.styles=Mu;i([R(".range__control")],xt.prototype,"input",2);i([R(".range__tooltip")],xt.prototype,"output",2);i([q()],xt.prototype,"hasFocus",2);i([q()],xt.prototype,"hasTooltip",2);i([c()],xt.prototype,"title",2);i([c()],xt.prototype,"name",2);i([c({type:Number})],xt.prototype,"value",2);i([c()],xt.prototype,"label",2);i([c({attribute:"help-text"})],xt.prototype,"helpText",2);i([c({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);i([c({type:Number})],xt.prototype,"min",2);i([c({type:Number})],xt.prototype,"max",2);i([c({type:Number})],xt.prototype,"step",2);i([c()],xt.prototype,"tooltip",2);i([c({attribute:!1})],xt.prototype,"tooltipFormatter",2);i([c({reflect:!0})],xt.prototype,"form",2);i([He()],xt.prototype,"defaultValue",2);i([Zi({passive:!0})],xt.prototype,"handleThumbDragStart",1);i([E("value",{waitUntilFirstUpdate:!0})],xt.prototype,"handleValueChange",1);i([E("disabled",{waitUntilFirstUpdate:!0})],xt.prototype,"handleDisabledChange",1);i([E("hasTooltip",{waitUntilFirstUpdate:!0})],xt.prototype,"syncRange",1);xt.define("sl-range");var Fu=B`
  ${N}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const va="important",Vu=" !"+va,Kt=Oo(class extends Ro{constructor(t){var e;if(super(t),t.type!==he.ATTRIBUTE||t.name!=="style"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{const r=t[o];return r==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:o}=t.element;if(this.ht===void 0){this.ht=new Set;for(const r in e)this.ht.add(r);return this.render(e)}this.ht.forEach(r=>{e[r]==null&&(this.ht.delete(r),r.includes("-")?o.removeProperty(r):o[r]="")});for(const r in e){const s=e[r];if(s!=null){this.ht.add(r);const a=typeof s=="string"&&s.endsWith(Vu);r.includes("-")||a?o.setProperty(r,a?s.slice(0,-11):s,a?va:""):o[r]=s}}return Xt}});var Ut=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:o,right:r,width:s}=this.rating.getBoundingClientRect(),a=e?this.roundToPrecision((r-t)/s*this.max,this.precision):this.roundToPrecision((t-o)/s*this.max,this.precision);return Rt(a,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",o=this.localize.dir()==="rtl",r=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||o&&t.key==="ArrowRight"){const s=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-s),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||o&&t.key==="ArrowLeft"){const s=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+s),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==r&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const o=1/e;return Math.ceil(t*o)/o}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let o=0;return this.disabled||this.readonly?o=this.value:o=this.isHovering?this.hoverValue:this.value,$`
      <div
        part="base"
        class=${j({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(r=>o>r&&o<r+1?$`
                <span
                  class=${j({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(o)===r+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${Kt({clipPath:t?`inset(0 ${(o-r)*100}% 0 0)`:`inset(0 0 0 ${(o-r)*100}%)`})}
                  >
                    ${ar(this.getSymbol(r+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Kt({clipPath:t?`inset(0 0 0 ${100-(o-r)*100}%)`:`inset(0 ${100-(o-r)*100}% 0 0)`})}
                  >
                    ${ar(this.getSymbol(r+1))}
                  </div>
                </span>
              `:$`
              <span
                class=${j({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(o)===r+1,"rating__symbol--active":o>=r+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${ar(this.getSymbol(r+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Ut.styles=Fu;Ut.dependencies={"sl-icon":ut};i([R(".rating")],Ut.prototype,"rating",2);i([q()],Ut.prototype,"hoverValue",2);i([q()],Ut.prototype,"isHovering",2);i([c()],Ut.prototype,"label",2);i([c({type:Number})],Ut.prototype,"value",2);i([c({type:Number})],Ut.prototype,"max",2);i([c({type:Number})],Ut.prototype,"precision",2);i([c({type:Boolean,reflect:!0})],Ut.prototype,"readonly",2);i([c({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);i([c()],Ut.prototype,"getSymbol",2);i([Zi({passive:!0})],Ut.prototype,"handleTouchMove",1);i([E("hoverValue")],Ut.prototype,"handleHoverValueChange",1);i([E("isHovering")],Ut.prototype,"handleIsHoveringChange",1);Ut.define("sl-rating");var Bu=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Le=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const o=e.getTime()-t.getTime(),{unit:r,value:s}=Bu.find(a=>Math.abs(o)<a.max);if(this.isoTime=e.toISOString(),this.titleTime=this.localize.date(e,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(o/s),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let a;r==="minute"?a=er("second"):r==="hour"?a=er("minute"):r==="day"?a=er("hour"):a=er("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),a)}return $` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};i([q()],Le.prototype,"isoTime",2);i([q()],Le.prototype,"relativeTime",2);i([q()],Le.prototype,"titleTime",2);i([c()],Le.prototype,"date",2);i([c()],Le.prototype,"format",2);i([c()],Le.prototype,"numeric",2);i([c({type:Boolean})],Le.prototype,"sync",2);function er(t){const o={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return o-Date.now()%o}Le.define("sl-relative-time");var Uu=B`
  ${N}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`,be=class extends P{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return $`
      <span
        part="base"
        class=${j({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?$` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};be.styles=Uu;be.dependencies={"sl-icon":ut};i([q()],be.prototype,"checked",2);i([q()],be.prototype,"hasFocus",2);i([c()],be.prototype,"value",2);i([c({reflect:!0})],be.prototype,"size",2);i([c({type:Boolean,reflect:!0})],be.prototype,"disabled",2);i([E("checked")],be.prototype,"handleCheckedChange",1);i([E("disabled",{waitUntilFirstUpdate:!0})],be.prototype,"handleDisabledChange",1);be.define("sl-radio");var Nu=B`
  ${aa}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,ne=class extends P{constructor(){super(...arguments),this.hasSlotController=new Zt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return yo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${j({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${M(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};ne.styles=Nu;i([R(".button")],ne.prototype,"input",2);i([R(".hidden-input")],ne.prototype,"hiddenInput",2);i([q()],ne.prototype,"hasFocus",2);i([c({type:Boolean,reflect:!0})],ne.prototype,"checked",2);i([c()],ne.prototype,"value",2);i([c({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);i([c({reflect:!0})],ne.prototype,"size",2);i([c({type:Boolean,reflect:!0})],ne.prototype,"pill",2);i([E("disabled",{waitUntilFirstUpdate:!0})],ne.prototype,"handleDisabledChange",1);ne.define("sl-radio-button");var Hu=B`
  ${N}
  ${Fo}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Bt=class extends P{constructor(){super(...arguments),this.formControlController=new Ce(this),this.hasSlotController=new Zt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?Ed:t?zd:vr}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),o=this.getAllRadios(),r=this.value;e.disabled||(this.value=e.value,o.forEach(s=>s.checked=s===e),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const o=this.getAllRadios().filter(h=>!h.disabled),r=(e=o.find(h=>h.checked))!=null?e:o[0],s=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,a=this.value;let n=o.indexOf(r)+s;n<0&&(n=o.length-1),n>o.length-1&&(n=0),this.getAllRadios().forEach(h=>{h.checked=!1,this.hasButtonGroup||(h.tabIndex=-1)}),this.value=o[n].value,o[n].checked=!0,this.hasButtonGroup?o[n].shadowRoot.querySelector("button").focus():(o[n].tabIndex=0,o[n].focus()),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){const t=this.getAllRadios(),o=t.find(r=>r.checked)||t[0];o&&o.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const o=this.getAllRadios();if(await Promise.all(o.map(async r=>{await r.updateComplete,r.checked=r.value===this.value,r.size=this.size})),this.hasButtonGroup=o.some(r=>r.tagName.toLowerCase()==="sl-radio-button"),!o.some(r=>r.checked))if(this.hasButtonGroup){const r=(t=o[0].shadowRoot)==null?void 0:t.querySelector("button");r&&(r.tabIndex=0)}else o[0].tabIndex=0;if(this.hasButtonGroup){const r=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");r&&(r.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,r=this.helpText?!0:!!e,s=$`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return $`
      <fieldset
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":o,"form-control--has-help-text":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?$`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </sl-button-group>
              `:s}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Bt.styles=Hu;Bt.dependencies={"sl-button-group":Ne};i([R("slot:not([name])")],Bt.prototype,"defaultSlot",2);i([R(".radio-group__validation-input")],Bt.prototype,"validationInput",2);i([q()],Bt.prototype,"hasButtonGroup",2);i([q()],Bt.prototype,"errorMessage",2);i([q()],Bt.prototype,"defaultValue",2);i([c()],Bt.prototype,"label",2);i([c({attribute:"help-text"})],Bt.prototype,"helpText",2);i([c()],Bt.prototype,"name",2);i([c({reflect:!0})],Bt.prototype,"value",2);i([c({reflect:!0})],Bt.prototype,"size",2);i([c({reflect:!0})],Bt.prototype,"form",2);i([c({type:Boolean,reflect:!0})],Bt.prototype,"required",2);i([E("size",{waitUntilFirstUpdate:!0})],Bt.prototype,"handleSizeChange",1);i([E("value")],Bt.prototype,"handleValueChange",1);Bt.define("sl-radio-group");var ju=B`
  ${N}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`,io=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),o=2*Math.PI*e,r=o-this.value/100*o;this.indicatorOffset=`${r}px`}}render(){return $`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};io.styles=ju;i([R(".progress-ring__indicator")],io.prototype,"indicator",2);i([q()],io.prototype,"indicatorOffset",2);i([c({type:Number,reflect:!0})],io.prototype,"value",2);i([c()],io.prototype,"label",2);io.define("sl-progress-ring");var qu=B`
  ${N}

  :host {
    display: inline-block;
  }
`;let ya=null;class _a{}_a.render=function(t,e){ya(t,e)};self.QrCreator=_a;(function(t){function e(h,d,u,b){var p={},m=t(u,d);m.u(h),m.J(),b=b||0;var g=m.h(),v=m.h()+2*b;return p.text=h,p.level=d,p.version=u,p.O=v,p.a=function(k,I){return k-=b,I-=b,0>k||k>=g||0>I||I>=g?!1:m.a(k,I)},p}function o(h,d,u,b,p,m,g,v,k,I){function L(S,A,x,C,O,W,K){S?(h.lineTo(A+W,x+K),h.arcTo(A,x,C,O,m)):h.lineTo(A,x)}g?h.moveTo(d+m,u):h.moveTo(d,u),L(v,b,u,b,p,-m,0),L(k,b,p,d,p,0,-m),L(I,d,p,d,u,m,0),L(g,d,u,b,u,0,m)}function r(h,d,u,b,p,m,g,v,k,I){function L(S,A,x,C){h.moveTo(S+x,A),h.lineTo(S,A),h.lineTo(S,A+C),h.arcTo(S,A,S+x,A,m)}g&&L(d,u,m,m),v&&L(b,u,-m,m),k&&L(b,p,-m,-m),I&&L(d,p,m,-m)}function s(h,d){var u=d.fill;if(typeof u=="string")h.fillStyle=u;else{var b=u.type,p=u.colorStops;if(u=u.position.map(g=>Math.round(g*d.size)),b==="linear-gradient")var m=h.createLinearGradient.apply(h,u);else if(b==="radial-gradient")m=h.createRadialGradient.apply(h,u);else throw Error("Unsupported fill");p.forEach(([g,v])=>{m.addColorStop(g,v)}),h.fillStyle=m}}function a(h,d){t:{var u=d.text,b=d.v,p=d.N,m=d.K,g=d.P;for(p=Math.max(1,p||1),m=Math.min(40,m||40);p<=m;p+=1)try{var v=e(u,b,p,g);break t}catch{}v=void 0}if(!v)return null;for(u=h.getContext("2d"),d.background&&(u.fillStyle=d.background,u.fillRect(d.left,d.top,d.size,d.size)),b=v.O,m=d.size/b,u.beginPath(),g=0;g<b;g+=1)for(p=0;p<b;p+=1){var k=u,I=d.left+p*m,L=d.top+g*m,S=g,A=p,x=v.a,C=I+m,O=L+m,W=S-1,K=S+1,U=A-1,V=A+1,zt=Math.floor(Math.min(.5,Math.max(0,d.R))*m),nt=x(S,A),Ot=x(W,U),pt=x(W,A);W=x(W,V);var ct=x(S,V);V=x(K,V),A=x(K,A),K=x(K,U),S=x(S,U),I=Math.round(I),L=Math.round(L),C=Math.round(C),O=Math.round(O),nt?o(k,I,L,C,O,zt,!pt&&!S,!pt&&!ct,!A&&!ct,!A&&!S):r(k,I,L,C,O,zt,pt&&S&&Ot,pt&&ct&&W,A&&ct&&V,A&&S&&K)}return s(u,d),u.fill(),h}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};ya=function(h,d){var u={};Object.assign(u,n,h),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,d instanceof HTMLCanvasElement?((d.width!==u.size||d.height!==u.size)&&(d.width=u.size,d.height=u.size),d.getContext("2d").clearRect(0,0,d.width,d.height),a(d,u)):(h=document.createElement("canvas"),h.width=u.size,h.height=u.size,u=a(h,u),d.appendChild(u))}})(function(){function t(d){var u=o.s(d);return{S:function(){return 4},b:function(){return u.length},write:function(b){for(var p=0;p<u.length;p+=1)b.put(u[p],8)}}}function e(){var d=[],u=0,b={B:function(){return d},c:function(p){return(d[Math.floor(p/8)]>>>7-p%8&1)==1},put:function(p,m){for(var g=0;g<m;g+=1)b.m((p>>>m-g-1&1)==1)},f:function(){return u},m:function(p){var m=Math.floor(u/8);d.length<=m&&d.push(0),p&&(d[m]|=128>>>u%8),u+=1}};return b}function o(d,u){function b(S,A){for(var x=-1;7>=x;x+=1)if(!(-1>=S+x||v<=S+x))for(var C=-1;7>=C;C+=1)-1>=A+C||v<=A+C||(g[S+x][A+C]=0<=x&&6>=x&&(C==0||C==6)||0<=C&&6>=C&&(x==0||x==6)||2<=x&&4>=x&&2<=C&&4>=C)}function p(S,A){for(var x=v=4*d+17,C=Array(x),O=0;O<x;O+=1){C[O]=Array(x);for(var W=0;W<x;W+=1)C[O][W]=null}for(g=C,b(0,0),b(v-7,0),b(0,v-7),x=a.G(d),C=0;C<x.length;C+=1)for(O=0;O<x.length;O+=1){W=x[C];var K=x[O];if(g[W][K]==null)for(var U=-2;2>=U;U+=1)for(var V=-2;2>=V;V+=1)g[W+U][K+V]=U==-2||U==2||V==-2||V==2||U==0&&V==0}for(x=8;x<v-8;x+=1)g[x][6]==null&&(g[x][6]=x%2==0);for(x=8;x<v-8;x+=1)g[6][x]==null&&(g[6][x]=x%2==0);for(x=a.w(m<<3|A),C=0;15>C;C+=1)O=!S&&(x>>C&1)==1,g[6>C?C:8>C?C+1:v-15+C][8]=O,g[8][8>C?v-C-1:9>C?15-C:14-C]=O;if(g[v-8][8]=!S,7<=d){for(x=a.A(d),C=0;18>C;C+=1)O=!S&&(x>>C&1)==1,g[Math.floor(C/3)][C%3+v-8-3]=O;for(C=0;18>C;C+=1)O=!S&&(x>>C&1)==1,g[C%3+v-8-3][Math.floor(C/3)]=O}if(k==null){for(S=h.I(d,m),x=e(),C=0;C<I.length;C+=1)O=I[C],x.put(4,4),x.put(O.b(),a.f(4,d)),O.write(x);for(C=O=0;C<S.length;C+=1)O+=S[C].j;if(x.f()>8*O)throw Error("code length overflow. ("+x.f()+">"+8*O+")");for(x.f()+4<=8*O&&x.put(0,4);x.f()%8!=0;)x.m(!1);for(;!(x.f()>=8*O)&&(x.put(236,8),!(x.f()>=8*O));)x.put(17,8);var zt=0;for(O=C=0,W=Array(S.length),K=Array(S.length),U=0;U<S.length;U+=1){var nt=S[U].j,Ot=S[U].o-nt;for(C=Math.max(C,nt),O=Math.max(O,Ot),W[U]=Array(nt),V=0;V<W[U].length;V+=1)W[U][V]=255&x.B()[V+zt];for(zt+=nt,V=a.C(Ot),nt=r(W[U],V.b()-1).l(V),K[U]=Array(V.b()-1),V=0;V<K[U].length;V+=1)Ot=V+nt.b()-K[U].length,K[U][V]=0<=Ot?nt.c(Ot):0}for(V=x=0;V<S.length;V+=1)x+=S[V].o;for(x=Array(x),V=zt=0;V<C;V+=1)for(U=0;U<S.length;U+=1)V<W[U].length&&(x[zt]=W[U][V],zt+=1);for(V=0;V<O;V+=1)for(U=0;U<S.length;U+=1)V<K[U].length&&(x[zt]=K[U][V],zt+=1);k=x}for(S=k,x=-1,C=v-1,O=7,W=0,A=a.F(A),K=v-1;0<K;K-=2)for(K==6&&--K;;){for(U=0;2>U;U+=1)g[C][K-U]==null&&(V=!1,W<S.length&&(V=(S[W]>>>O&1)==1),A(C,K-U)&&(V=!V),g[C][K-U]=V,--O,O==-1&&(W+=1,O=7));if(C+=x,0>C||v<=C){C-=x,x=-x;break}}}var m=s[u],g=null,v=0,k=null,I=[],L={u:function(S){S=t(S),I.push(S),k=null},a:function(S,A){if(0>S||v<=S||0>A||v<=A)throw Error(S+","+A);return g[S][A]},h:function(){return v},J:function(){for(var S=0,A=0,x=0;8>x;x+=1){p(!0,x);var C=a.D(L);(x==0||S>C)&&(S=C,A=x)}p(!1,A)}};return L}function r(d,u){if(typeof d.length>"u")throw Error(d.length+"/"+u);var b=function(){for(var m=0;m<d.length&&d[m]==0;)m+=1;for(var g=Array(d.length-m+u),v=0;v<d.length-m;v+=1)g[v]=d[v+m];return g}(),p={c:function(m){return b[m]},b:function(){return b.length},multiply:function(m){for(var g=Array(p.b()+m.b()-1),v=0;v<p.b();v+=1)for(var k=0;k<m.b();k+=1)g[v+k]^=n.i(n.g(p.c(v))+n.g(m.c(k)));return r(g,0)},l:function(m){if(0>p.b()-m.b())return p;for(var g=n.g(p.c(0))-n.g(m.c(0)),v=Array(p.b()),k=0;k<p.b();k+=1)v[k]=p.c(k);for(k=0;k<m.b();k+=1)v[k]^=n.i(n.g(m.c(k))+g);return r(v,0).l(m)}};return p}o.s=function(d){for(var u=[],b=0;b<d.length;b++){var p=d.charCodeAt(b);128>p?u.push(p):2048>p?u.push(192|p>>6,128|p&63):55296>p||57344<=p?u.push(224|p>>12,128|p>>6&63,128|p&63):(b++,p=65536+((p&1023)<<10|d.charCodeAt(b)&1023),u.push(240|p>>18,128|p>>12&63,128|p>>6&63,128|p&63))}return u};var s={L:1,M:0,Q:3,H:2},a=function(){function d(p){for(var m=0;p!=0;)m+=1,p>>>=1;return m}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],b={w:function(p){for(var m=p<<10;0<=d(m)-d(1335);)m^=1335<<d(m)-d(1335);return(p<<10|m)^21522},A:function(p){for(var m=p<<12;0<=d(m)-d(7973);)m^=7973<<d(m)-d(7973);return p<<12|m},G:function(p){return u[p-1]},F:function(p){switch(p){case 0:return function(m,g){return(m+g)%2==0};case 1:return function(m){return m%2==0};case 2:return function(m,g){return g%3==0};case 3:return function(m,g){return(m+g)%3==0};case 4:return function(m,g){return(Math.floor(m/2)+Math.floor(g/3))%2==0};case 5:return function(m,g){return m*g%2+m*g%3==0};case 6:return function(m,g){return(m*g%2+m*g%3)%2==0};case 7:return function(m,g){return(m*g%3+(m+g)%2)%2==0};default:throw Error("bad maskPattern:"+p)}},C:function(p){for(var m=r([1],0),g=0;g<p;g+=1)m=m.multiply(r([1,n.i(g)],0));return m},f:function(p,m){if(p!=4||1>m||40<m)throw Error("mode: "+p+"; type: "+m);return 10>m?8:16},D:function(p){for(var m=p.h(),g=0,v=0;v<m;v+=1)for(var k=0;k<m;k+=1){for(var I=0,L=p.a(v,k),S=-1;1>=S;S+=1)if(!(0>v+S||m<=v+S))for(var A=-1;1>=A;A+=1)0>k+A||m<=k+A||(S!=0||A!=0)&&L==p.a(v+S,k+A)&&(I+=1);5<I&&(g+=3+I-5)}for(v=0;v<m-1;v+=1)for(k=0;k<m-1;k+=1)I=0,p.a(v,k)&&(I+=1),p.a(v+1,k)&&(I+=1),p.a(v,k+1)&&(I+=1),p.a(v+1,k+1)&&(I+=1),(I==0||I==4)&&(g+=3);for(v=0;v<m;v+=1)for(k=0;k<m-6;k+=1)p.a(v,k)&&!p.a(v,k+1)&&p.a(v,k+2)&&p.a(v,k+3)&&p.a(v,k+4)&&!p.a(v,k+5)&&p.a(v,k+6)&&(g+=40);for(k=0;k<m;k+=1)for(v=0;v<m-6;v+=1)p.a(v,k)&&!p.a(v+1,k)&&p.a(v+2,k)&&p.a(v+3,k)&&p.a(v+4,k)&&!p.a(v+5,k)&&p.a(v+6,k)&&(g+=40);for(k=I=0;k<m;k+=1)for(v=0;v<m;v+=1)p.a(v,k)&&(I+=1);return g+=Math.abs(100*I/m/m-50)/5*10}};return b}(),n=function(){for(var d=Array(256),u=Array(256),b=0;8>b;b+=1)d[b]=1<<b;for(b=8;256>b;b+=1)d[b]=d[b-4]^d[b-5]^d[b-6]^d[b-8];for(b=0;255>b;b+=1)u[d[b]]=b;return{g:function(p){if(1>p)throw Error("glog("+p+")");return u[p]},i:function(p){for(;0>p;)p+=255;for(;256<=p;)p-=255;return d[p]}}}(),h=function(){function d(p,m){switch(m){case s.L:return u[4*(p-1)];case s.M:return u[4*(p-1)+1];case s.Q:return u[4*(p-1)+2];case s.H:return u[4*(p-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],b={I:function(p,m){var g=d(p,m);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+p+"/errorCorrectLevel:"+m);p=g.length/3,m=[];for(var v=0;v<p;v+=1)for(var k=g[3*v],I=g[3*v+1],L=g[3*v+2],S=0;S<k;S+=1){var A=L,x={};x.o=I,x.j=A,m.push(x)}return m}};return b}();return o}());const Wu=QrCreator;var ce=class extends P{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Wu.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return $`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${Kt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};ce.styles=qu;i([R("canvas")],ce.prototype,"canvas",2);i([c()],ce.prototype,"value",2);i([c()],ce.prototype,"label",2);i([c({type:Number})],ce.prototype,"size",2);i([c()],ce.prototype,"fill",2);i([c()],ce.prototype,"background",2);i([c({type:Number})],ce.prototype,"radius",2);i([c({attribute:"error-correction"})],ce.prototype,"errorCorrection",2);i([E(["background","errorCorrection","fill","radius","size","value"])],ce.prototype,"generate",1);ce.define("sl-qr-code");var Ku=B`
  ${N}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,ie=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var t;return((t=this.textContent)!=null?t:"").trim()}render(){return $`
      <div
        part="base"
        class=${j({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};ie.styles=Ku;ie.dependencies={"sl-icon":ut};i([R(".option__label")],ie.prototype,"defaultSlot",2);i([q()],ie.prototype,"current",2);i([q()],ie.prototype,"selected",2);i([q()],ie.prototype,"hasHover",2);i([c({reflect:!0})],ie.prototype,"value",2);i([c({type:Boolean,reflect:!0})],ie.prototype,"disabled",2);i([E("disabled")],ie.prototype,"handleDisabledChange",1);i([E("selected")],ie.prototype,"handleSelectedChange",1);i([E("value")],ie.prototype,"handleValueChange",1);ie.define("sl-option");lt.define("sl-popup");var Yu=B`
  ${N}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Vo=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return $`
      <div
        part="base"
        class=${j({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${M(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Kt({width:`${this.value}%`})}>
          ${this.indeterminate?"":$` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Vo.styles=Yu;i([c({type:Number,reflect:!0})],Vo.prototype,"value",2);i([c({type:Boolean,reflect:!0})],Vo.prototype,"indeterminate",2);i([c()],Vo.prototype,"label",2);Vo.define("sl-progress-bar");var Gu=B`
  ${N}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`,wa=class extends P{render(){return $` <slot part="base" class="menu-label"></slot> `}};wa.styles=Gu;wa.define("sl-menu-label");var Xu=B`
  ${N}

  :host {
    display: contents;
  }
`,ve=class extends P{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return $` <slot></slot> `}};ve.styles=Xu;i([c({reflect:!0})],ve.prototype,"attr",2);i([c({attribute:"attr-old-value",type:Boolean,reflect:!0})],ve.prototype,"attrOldValue",2);i([c({attribute:"char-data",type:Boolean,reflect:!0})],ve.prototype,"charData",2);i([c({attribute:"char-data-old-value",type:Boolean,reflect:!0})],ve.prototype,"charDataOldValue",2);i([c({attribute:"child-list",type:Boolean,reflect:!0})],ve.prototype,"childList",2);i([c({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);i([E("disabled")],ve.prototype,"handleDisabledChange",1);i([E("attr",{waitUntilFirstUpdate:!0}),E("attr-old-value",{waitUntilFirstUpdate:!0}),E("char-data",{waitUntilFirstUpdate:!0}),E("char-data-old-value",{waitUntilFirstUpdate:!0}),E("childList",{waitUntilFirstUpdate:!0})],ve.prototype,"handleChange",1);ve.define("sl-mutation-observer");var Qu=B`
  ${N}
  ${Fo}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,G=class extends P{constructor(){super(...arguments),this.formControlController=new Ce(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Zt(this,"help-text","label"),this.localize=new rt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r){this.input.setRangeText(t,e,o,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,r=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly,a=s&&(typeof this.value=="number"||this.value.length>0);return $`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${j({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${M(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${M(this.placeholder)}
              minlength=${M(this.minlength)}
              maxlength=${M(this.maxlength)}
              min=${M(this.min)}
              max=${M(this.max)}
              step=${M(this.step)}
              .value=${Be(this.value)}
              autocapitalize=${M(this.autocapitalize)}
              autocomplete=${M(this.autocomplete)}
              autocorrect=${M(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${M(this.pattern)}
              enterkeyhint=${M(this.enterkeyhint)}
              inputmode=${M(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?$`
                  <button
                    part="clear-button"
                    class=${j({input__clear:!0,"input__clear--visible":a})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?$`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?$`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:$`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};G.styles=Qu;G.dependencies={"sl-icon":ut};i([R(".input__control")],G.prototype,"input",2);i([q()],G.prototype,"hasFocus",2);i([c()],G.prototype,"title",2);i([c({reflect:!0})],G.prototype,"type",2);i([c()],G.prototype,"name",2);i([c()],G.prototype,"value",2);i([He()],G.prototype,"defaultValue",2);i([c({reflect:!0})],G.prototype,"size",2);i([c({type:Boolean,reflect:!0})],G.prototype,"filled",2);i([c({type:Boolean,reflect:!0})],G.prototype,"pill",2);i([c()],G.prototype,"label",2);i([c({attribute:"help-text"})],G.prototype,"helpText",2);i([c({type:Boolean})],G.prototype,"clearable",2);i([c({type:Boolean,reflect:!0})],G.prototype,"disabled",2);i([c()],G.prototype,"placeholder",2);i([c({type:Boolean,reflect:!0})],G.prototype,"readonly",2);i([c({attribute:"password-toggle",type:Boolean})],G.prototype,"passwordToggle",2);i([c({attribute:"password-visible",type:Boolean})],G.prototype,"passwordVisible",2);i([c({attribute:"no-spin-buttons",type:Boolean})],G.prototype,"noSpinButtons",2);i([c({reflect:!0})],G.prototype,"form",2);i([c({type:Boolean,reflect:!0})],G.prototype,"required",2);i([c()],G.prototype,"pattern",2);i([c({type:Number})],G.prototype,"minlength",2);i([c({type:Number})],G.prototype,"maxlength",2);i([c()],G.prototype,"min",2);i([c()],G.prototype,"max",2);i([c()],G.prototype,"step",2);i([c()],G.prototype,"autocapitalize",2);i([c()],G.prototype,"autocorrect",2);i([c()],G.prototype,"autocomplete",2);i([c({type:Boolean})],G.prototype,"autofocus",2);i([c()],G.prototype,"enterkeyhint",2);i([c({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],G.prototype,"spellcheck",2);i([c()],G.prototype,"inputmode",2);i([E("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);i([E("step",{waitUntilFirstUpdate:!0})],G.prototype,"handleStepChange",1);i([E("value",{waitUntilFirstUpdate:!0})],G.prototype,"handleValueChange",1);G.define("sl-input");var Zu=B`
  ${N}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko=(t,e)=>{var o,r;const s=t._$AN;if(s===void 0)return!1;for(const a of s)(r=(o=a)._$AO)===null||r===void 0||r.call(o,e,!1),ko(a,e);return!0},mr=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while((o==null?void 0:o.size)===0)},xa=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),eh(e)}};function Ju(t){this._$AN!==void 0?(mr(this),this._$AM=t,xa(this)):this._$AM=t}function th(t,e=!1,o=0){const r=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(r))for(let a=o;a<r.length;a++)ko(r[a],!1),mr(r[a]);else r!=null&&(ko(r,!1),mr(r));else ko(this,t)}const eh=t=>{var e,o,r,s;t.type==he.CHILD&&((e=(r=t)._$AP)!==null&&e!==void 0||(r._$AP=th),(o=(s=t)._$AQ)!==null&&o!==void 0||(s._$AQ=Ju))};class oh extends Ro{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,r){super._$AT(e,o,r),xa(this),this.isConnected=e._$AU}_$AO(e,o=!0){var r,s;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)===null||r===void 0||r.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),o&&(ko(this,e),mr(this))}setValue(e){if(Ji(this._$Ct))this._$Ct._$AI(e,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rh=()=>new sh;let sh=class{};const Yr=new WeakMap,ih=Oo(class extends oh{render(t){return yt}update(t,[e]){var o;const r=e!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=e,this.dt=(o=t.options)===null||o===void 0?void 0:o.host,this.ot(this.lt=t.element)),yt}ot(t){var e;if(typeof this.G=="function"){const o=(e=this.dt)!==null&&e!==void 0?e:globalThis;let r=Yr.get(o);r===void 0&&(r=new WeakMap,Yr.set(o,r)),r.get(this.G)!==void 0&&this.G.call(this.dt,void 0),r.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,o;return typeof this.G=="function"?(e=Yr.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||e===void 0?void 0:e.get(this.G):(o=this.G)===null||o===void 0?void 0:o.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var ah=class{constructor(t,e,o){this.popupRef=rh(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=r=>{switch(r.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":r.target!==this.host&&(r.preventDefault(),r.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(r);break}},this.handleClick=r=>{var s;r.target===this.host?(r.preventDefault(),r.stopPropagation()):r.target instanceof Element&&(r.target.tagName==="sl-menu-item"||(s=r.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=r=>{r.relatedTarget&&r.relatedTarget instanceof Element&&this.host.contains(r.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=r=>{r.stopPropagation()},(this.host=t).addController(this),this.hasSlotController=e,this.localize=o}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(const r of e.assignedElements())if(o=r.querySelectorAll("sl-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let r=1;r!==o.length;++r)o[r].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),r=["padding-top","border-top-width","margin-top"].reduce((s,a)=>{var n;const h=(n=e.get(a))!=null?n:new CSSUnitValue(0,"px"),u=(h instanceof CSSUnitValue?h:new CSSUnitValue(0,"px")).to("px");return s-u.value},0);this.skidding=r}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=this.localize.dir()==="ltr";return this.isConnected?$`
      <sl-popup
        ${ih(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:$` <slot name="submenu" hidden></slot> `}},lh=B`
  ${N}

  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,ee=class extends P{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new rt(this),this.hasSlotController=new Zt(this,"submenu"),this.submenuController=new ah(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return $n(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return $`
      <div
        id="anchor"
        part="base"
        class=${j({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};ee.styles=lh;ee.dependencies={"sl-icon":ut,"sl-popup":lt};i([R("slot:not([name])")],ee.prototype,"defaultSlot",2);i([R(".menu-item")],ee.prototype,"menuItem",2);i([c()],ee.prototype,"type",2);i([c({type:Boolean,reflect:!0})],ee.prototype,"checked",2);i([c()],ee.prototype,"value",2);i([c({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);i([E("checked")],ee.prototype,"handleCheckedChange",1);i([E("disabled")],ee.prototype,"handleDisabledChange",1);i([E("type")],ee.prototype,"handleTypeChange",1);var $s=class extends P{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){if(!(t.target instanceof ee))return;const e=t.target;e.type==="checkbox"&&(e.checked=!e.checked),this.emit("sl-select",{detail:{item:e}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e==null||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),o=this.getCurrentItem();let r=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?r++:t.key==="ArrowUp"?r--:t.key==="Home"?r=0:t.key==="End"&&(r=e.length-1),r<0&&(r=e.length-1),r>e.length-1&&(r=0),this.setCurrentItem(e[r]),e[r].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return $`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};$s.styles=Zu;i([R("slot")],$s.prototype,"defaultSlot",2);$s.define("sl-menu");ee.define("sl-menu-item");var nh=B`
  ${N}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,qe=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),o=this.localize.dir()==="rtl";t.preventDefault(),xo(this.base,{onMove:r=>{this.position=parseFloat(Rt(r/e*100,0,100).toFixed(2)),o&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",o=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const r=t.shiftKey?10:1;let s=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||o&&t.key==="ArrowRight")&&(s-=r),(e&&t.key==="ArrowRight"||o&&t.key==="ArrowLeft")&&(s+=r),t.key==="Home"&&(s=0),t.key==="End"&&(s=100),s=Rt(s,0,100),this.position=s}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return $`
      <div
        part="base"
        id="image-comparer"
        class=${j({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Kt({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Kt({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};qe.styles=nh;qe.scopedElement={"sl-icon":ut};i([R(".image-comparer")],qe.prototype,"base",2);i([R(".image-comparer__handle")],qe.prototype,"handle",2);i([c({type:Number,reflect:!0})],qe.prototype,"position",2);i([E("position",{waitUntilFirstUpdate:!0})],qe.prototype,"handlePositionChange",1);qe.define("sl-image-comparer");var ch=B`
  ${N}

  :host {
    display: block;
  }
`,Gr=new Map;function dh(t,e="cors"){const o=Gr.get(t);if(o!==void 0)return Promise.resolve(o);const r=fetch(t,{mode:e}).then(async s=>{const a={ok:s.ok,status:s.status,html:await s.text()};return Gr.set(t,a),a});return Gr.set(t,r),r}var ao=class extends P{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(o=>e.setAttribute(o.name,o.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await dh(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(o=>this.executeScript(o)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return $`<slot></slot>`}};ao.styles=ch;i([c()],ao.prototype,"src",2);i([c()],ao.prototype,"mode",2);i([c({attribute:"allow-scripts",type:Boolean})],ao.prototype,"allowScripts",2);i([E("src")],ao.prototype,"handleSrcChange",1);ao.define("sl-include");var de=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};i([c({type:Number})],de.prototype,"value",2);i([c()],de.prototype,"type",2);i([c({attribute:"no-grouping",type:Boolean})],de.prototype,"noGrouping",2);i([c()],de.prototype,"currency",2);i([c({attribute:"currency-display"})],de.prototype,"currencyDisplay",2);i([c({attribute:"minimum-integer-digits",type:Number})],de.prototype,"minimumIntegerDigits",2);i([c({attribute:"minimum-fraction-digits",type:Number})],de.prototype,"minimumFractionDigits",2);i([c({attribute:"maximum-fraction-digits",type:Number})],de.prototype,"maximumFractionDigits",2);i([c({attribute:"minimum-significant-digits",type:Number})],de.prototype,"minimumSignificantDigits",2);i([c({attribute:"maximum-significant-digits",type:Number})],de.prototype,"maximumSignificantDigits",2);de.define("sl-format-number");It.define("sl-icon-button");var uh=B`
  ${N}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function hh(t){const e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null&&ba(t)===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function ph(t){var e,o;const r=lr(t),s=(e=r[0])!=null?e:null,a=(o=r[r.length-1])!=null?o:null;return{start:s,end:a}}function lr(t){const e=[];function o(r){if(r instanceof Element){if(r.hasAttribute("inert"))return;!e.includes(r)&&hh(r)&&e.push(r);const s=a=>{var n;return((n=a.getRootNode({composed:!0}))==null?void 0:n.host)!==t};r instanceof HTMLSlotElement&&s(r)&&r.assignedElements({flatten:!0}).forEach(a=>{o(a)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&o(r.shadowRoot)}[...r.children].forEach(s=>o(s))}return o(t),e}var Nt=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,r,s;const a=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(s=(r=document.activeElement)==null?void 0:r.shadowRoot)==null?void 0:s.activeElement:document.activeElement;(!this.containingElement||(a==null?void 0:a.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.getAllItems(),r=o[0],s=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(r),r.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(r=>ph(r).start);let o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,qt(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await Tt(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=_t(this,"dropdown.show",{dir:this.localize.dir()});await Ct(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await Tt(this);const{keyframes:t,options:e}=_t(this,"dropdown.hide",{dir:this.localize.dir()});await Ct(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return $`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${j({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Nt.styles=uh;Nt.dependencies={"sl-popup":lt};i([R(".dropdown")],Nt.prototype,"popup",2);i([R(".dropdown__trigger")],Nt.prototype,"trigger",2);i([R(".dropdown__panel")],Nt.prototype,"panel",2);i([c({type:Boolean,reflect:!0})],Nt.prototype,"open",2);i([c({reflect:!0})],Nt.prototype,"placement",2);i([c({type:Boolean,reflect:!0})],Nt.prototype,"disabled",2);i([c({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Nt.prototype,"stayOpenOnSelect",2);i([c({attribute:!1})],Nt.prototype,"containingElement",2);i([c({type:Number})],Nt.prototype,"distance",2);i([c({type:Number})],Nt.prototype,"skidding",2);i([c({type:Boolean})],Nt.prototype,"hoist",2);i([E("open",{waitUntilFirstUpdate:!0})],Nt.prototype,"handleOpenChange",1);it("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});it("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Nt.define("sl-dropdown");var xr=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],o=this.unit==="bit"?t:e,r=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),o.length-1)),s=o[r]+this.unit,a=parseFloat((this.value/Math.pow(1e3,r)).toPrecision(3));return this.localize.number(a,{style:"unit",unit:s,unitDisplay:this.display})}};i([c({type:Number})],xr.prototype,"value",2);i([c()],xr.prototype,"unit",2);i([c()],xr.prototype,"display",2);xr.define("sl-format-bytes");var oe=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return $`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};i([c()],oe.prototype,"date",2);i([c()],oe.prototype,"weekday",2);i([c()],oe.prototype,"era",2);i([c()],oe.prototype,"year",2);i([c()],oe.prototype,"month",2);i([c()],oe.prototype,"day",2);i([c()],oe.prototype,"hour",2);i([c()],oe.prototype,"minute",2);i([c()],oe.prototype,"second",2);i([c({attribute:"time-zone-name"})],oe.prototype,"timeZoneName",2);i([c({attribute:"time-zone"})],oe.prototype,"timeZone",2);i([c({attribute:"hour-format"})],oe.prototype,"hourFormat",2);oe.define("sl-format-date");ut.define("sl-icon");var fh=B`
  ${N}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,kr=class extends P{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};kr.styles=fh;i([c({type:Boolean,reflect:!0})],kr.prototype,"vertical",2);i([E("vertical")],kr.prototype,"handleVerticalChange",1);kr.define("sl-divider");var mh=B`
  ${N}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*ka(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*ka(t.shadowRoot.activeElement)))}var go=[],Ca=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated)return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward",e.preventDefault();const r=lr(this.element),s=r[0];let a=this.startElementAlreadyFocused(s)?0:this.currentFocusIndex;if(a===-1){this.currentFocus=s,this.currentFocus.focus({preventScroll:!0});return}const n=this.tabDirection==="forward"?1:-1;a+n>=r.length?a=0:this.currentFocusIndex+n<0?a=r.length-1:a+=n,this.currentFocus=r[a],(o=this.currentFocus)==null||o.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t}activate(){go.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){go=go.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return go[go.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=lr(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],r=this.tabDirection==="forward"?e:o;typeof(r==null?void 0:r.focus)=="function"&&(this.currentFocus=r,r.focus({preventScroll:!0}))}}}get currentFocusIndex(){return lr(this.element).findIndex(t=>t===this.currentFocus)}startElementAlreadyFocused(t){for(const e of ka())if(t===e)return!0;return!1}};function Fi(t){return t.charAt(0).toUpperCase()+t.slice(1)}var re=class extends P{constructor(){super(...arguments),this.hasSlotController=new Zt(this,"footer"),this.localize=new rt(this),this.modal=new Ca(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),_o(this)))}disconnectedCallback(){super.disconnectedCallback(),wo(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=_t(this,"drawer.denyClose",{dir:this.localize.dir()});Ct(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),_o(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Tt(this.drawer),Tt(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=_t(this,`drawer.show${Fi(this.placement)}`,{dir:this.localize.dir()}),o=_t(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Ct(this.panel,e.keyframes,e.options),Ct(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),wo(this)),await Promise.all([Tt(this.drawer),Tt(this.overlay)]);const t=_t(this,`drawer.hide${Fi(this.placement)}`,{dir:this.localize.dir()}),e=_t(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ct(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Ct(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),_o(this)),this.open&&this.contained&&(this.modal.deactivate(),wo(this))}async show(){if(!this.open)return this.open=!0,qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,qt(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${j({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${M(this.noHeader?this.label:void 0)}
          aria-labelledby=${M(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":$`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};re.styles=mh;re.dependencies={"sl-icon-button":It};i([R(".drawer")],re.prototype,"drawer",2);i([R(".drawer__panel")],re.prototype,"panel",2);i([R(".drawer__overlay")],re.prototype,"overlay",2);i([c({type:Boolean,reflect:!0})],re.prototype,"open",2);i([c({reflect:!0})],re.prototype,"label",2);i([c({reflect:!0})],re.prototype,"placement",2);i([c({type:Boolean,reflect:!0})],re.prototype,"contained",2);i([c({attribute:"no-header",type:Boolean,reflect:!0})],re.prototype,"noHeader",2);i([E("open",{waitUntilFirstUpdate:!0})],re.prototype,"handleOpenChange",1);i([E("contained",{waitUntilFirstUpdate:!0})],re.prototype,"handleNoModalChange",1);it("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});it("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});it("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});it("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});it("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});it("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});it("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});it("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});it("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});it("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});it("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});re.define("sl-drawer");var gh=B`
  ${N}

  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Mt=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),o=this.from.includes("."),r=this.from.includes("[")&&this.from.includes("]");let s=this.from,a="";o?[s,a]=this.from.trim().split("."):r&&([s,a]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(s):null;n?r?t=n.getAttribute(a)||"":o?t=n[a]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),o=this.successLabel||this.localize.term("copied"),r=this.errorLabel||this.localize.term("error"),s=t==="success"?this.successIcon:this.errorIcon,a=_t(this,"copy.in",{dir:"ltr"}),n=_t(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?o:r,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,s.hidden=!1,await s.animate(a.keyframes,a.options).finished,setTimeout(async()=>{await s.animate(n.keyframes,n.options).finished,s.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(a.keyframes,a.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return $`
      <sl-tooltip
        class=${j({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base
          base__popup:tooltip__base__popup
          base__arrow:tooltip__base__arrow
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Mt.styles=gh;Mt.dependencies={"sl-icon":ut,"sl-tooltip":Pt};i([R('slot[name="copy-icon"]')],Mt.prototype,"copyIcon",2);i([R('slot[name="success-icon"]')],Mt.prototype,"successIcon",2);i([R('slot[name="error-icon"]')],Mt.prototype,"errorIcon",2);i([R("sl-tooltip")],Mt.prototype,"tooltip",2);i([q()],Mt.prototype,"isCopying",2);i([q()],Mt.prototype,"status",2);i([c()],Mt.prototype,"value",2);i([c()],Mt.prototype,"from",2);i([c({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);i([c({attribute:"copy-label"})],Mt.prototype,"copyLabel",2);i([c({attribute:"success-label"})],Mt.prototype,"successLabel",2);i([c({attribute:"error-label"})],Mt.prototype,"errorLabel",2);i([c({attribute:"feedback-duration",type:Number})],Mt.prototype,"feedbackDuration",2);i([c({attribute:"tooltip-placement"})],Mt.prototype,"tooltipPlacement",2);i([c({type:Boolean})],Mt.prototype,"hoist",2);it("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});it("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});Mt.define("sl-copy-button");var bh=B`
  ${N}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,ue=class extends P{constructor(){super(...arguments),this.localize=new rt(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Tt(this.body);const{keyframes:e,options:o}=_t(this,"details.show",{dir:this.localize.dir()});await Ct(this.body,ur(e,this.body.scrollHeight),o),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Tt(this.body);const{keyframes:e,options:o}=_t(this,"details.hide",{dir:this.localize.dir()});await Ct(this.body,ur(e,this.body.scrollHeight),o),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,qt(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,qt(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return $`
      <details
        part="base"
        class=${j({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};ue.styles=bh;ue.dependencies={"sl-icon":ut};i([R(".details")],ue.prototype,"details",2);i([R(".details__header")],ue.prototype,"header",2);i([R(".details__body")],ue.prototype,"body",2);i([R(".details__expand-icon-slot")],ue.prototype,"expandIconSlot",2);i([c({type:Boolean,reflect:!0})],ue.prototype,"open",2);i([c()],ue.prototype,"summary",2);i([c({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);i([E("open",{waitUntilFirstUpdate:!0})],ue.prototype,"handleOpenChange",1);it("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});it("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});ue.define("sl-details");var vh=B`
  ${N}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,ye=class extends P{constructor(){super(...arguments),this.hasSlotController=new Zt(this,"footer"),this.localize=new rt(this),this.modal=new Ca(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),_o(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),wo(this)}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=_t(this,"dialog.denyClose",{dir:this.localize.dir()});Ct(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),_o(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([Tt(this.dialog),Tt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=_t(this,"dialog.show",{dir:this.localize.dir()}),o=_t(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Ct(this.panel,e.keyframes,e.options),Ct(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Tt(this.dialog),Tt(this.overlay)]);const t=_t(this,"dialog.hide",{dir:this.localize.dir()}),e=_t(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Ct(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Ct(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,wo(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,qt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,qt(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${j({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${M(this.noHeader?this.label:void 0)}
          aria-labelledby=${M(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":$`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ye.styles=vh;ye.dependencies={"sl-icon-button":It};i([R(".dialog")],ye.prototype,"dialog",2);i([R(".dialog__panel")],ye.prototype,"panel",2);i([R(".dialog__overlay")],ye.prototype,"overlay",2);i([c({type:Boolean,reflect:!0})],ye.prototype,"open",2);i([c({reflect:!0})],ye.prototype,"label",2);i([c({attribute:"no-header",type:Boolean,reflect:!0})],ye.prototype,"noHeader",2);i([E("open",{waitUntilFirstUpdate:!0})],ye.prototype,"handleOpenChange",1);it("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});it("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});it("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});it("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});it("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ye.define("sl-dialog");var yh=B`
  ${N}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Ss=class extends P{static isCarouselItem(t){return t instanceof Element&&t.getAttribute("aria-roledescription")==="slide"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return $` <slot></slot> `}};Ss.styles=yh;Ss.define("sl-carousel-item");Dt.define("sl-checkbox");var _h=B`
  ${N}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 2px var(--sl-input-border-color), inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function Vt(t,e){wh(t)&&(t="100%");const o=xh(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),o&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function or(t){return Math.min(1,Math.max(0,t))}function wh(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function xh(t){return typeof t=="string"&&t.indexOf("%")!==-1}function $a(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function rr(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Fe(t){return t.length===1?"0"+t:String(t)}function kh(t,e,o){return{r:Vt(t,255)*255,g:Vt(e,255)*255,b:Vt(o,255)*255}}function Vi(t,e,o){t=Vt(t,255),e=Vt(e,255),o=Vt(o,255);const r=Math.max(t,e,o),s=Math.min(t,e,o);let a=0,n=0;const h=(r+s)/2;if(r===s)n=0,a=0;else{const d=r-s;switch(n=h>.5?d/(2-r-s):d/(r+s),r){case t:a=(e-o)/d+(e<o?6:0);break;case e:a=(o-t)/d+2;break;case o:a=(t-e)/d+4;break}a/=6}return{h:a,s:n,l:h}}function Xr(t,e,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(e-t)*(6*o):o<1/2?e:o<2/3?t+(e-t)*(2/3-o)*6:t}function Ch(t,e,o){let r,s,a;if(t=Vt(t,360),e=Vt(e,100),o=Vt(o,100),e===0)s=o,a=o,r=o;else{const n=o<.5?o*(1+e):o+e-o*e,h=2*o-n;r=Xr(h,n,t+1/3),s=Xr(h,n,t),a=Xr(h,n,t-1/3)}return{r:r*255,g:s*255,b:a*255}}function Bi(t,e,o){t=Vt(t,255),e=Vt(e,255),o=Vt(o,255);const r=Math.max(t,e,o),s=Math.min(t,e,o);let a=0;const n=r,h=r-s,d=r===0?0:h/r;if(r===s)a=0;else{switch(r){case t:a=(e-o)/h+(e<o?6:0);break;case e:a=(o-t)/h+2;break;case o:a=(t-e)/h+4;break}a/=6}return{h:a,s:d,v:n}}function $h(t,e,o){t=Vt(t,360)*6,e=Vt(e,100),o=Vt(o,100);const r=Math.floor(t),s=t-r,a=o*(1-e),n=o*(1-s*e),h=o*(1-(1-s)*e),d=r%6,u=[o,n,a,a,h,o][d],b=[h,o,o,n,a,a][d],p=[a,a,h,o,o,n][d];return{r:u*255,g:b*255,b:p*255}}function Ui(t,e,o,r){const s=[Fe(Math.round(t).toString(16)),Fe(Math.round(e).toString(16)),Fe(Math.round(o).toString(16))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function Sh(t,e,o,r,s){const a=[Fe(Math.round(t).toString(16)),Fe(Math.round(e).toString(16)),Fe(Math.round(o).toString(16)),Fe(zh(r))];return s&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function zh(t){return Math.round(parseFloat(t)*255).toString(16)}function Ni(t){return Yt(t)/255}function Yt(t){return parseInt(t,16)}function Eh(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const hs={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ah(t){let e={r:0,g:0,b:0},o=1,r=null,s=null,a=null,n=!1,h=!1;return typeof t=="string"&&(t=Rh(t)),typeof t=="object"&&(we(t.r)&&we(t.g)&&we(t.b)?(e=kh(t.r,t.g,t.b),n=!0,h=String(t.r).substr(-1)==="%"?"prgb":"rgb"):we(t.h)&&we(t.s)&&we(t.v)?(r=rr(t.s),s=rr(t.v),e=$h(t.h,r,s),n=!0,h="hsv"):we(t.h)&&we(t.s)&&we(t.l)&&(r=rr(t.s),a=rr(t.l),e=Ch(t.h,r,a),n=!0,h="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(o=t.a)),o=$a(o),{ok:n,format:t.format||h,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:o}}const Th="[-\\+]?\\d+%?",Oh="[-\\+]?\\d*\\.\\d+%?",Ee=`(?:${Oh})|(?:${Th})`,Qr=`[\\s|\\(]+(${Ee})[,|\\s]+(${Ee})[,|\\s]+(${Ee})\\s*\\)?`,Zr=`[\\s|\\(]+(${Ee})[,|\\s]+(${Ee})[,|\\s]+(${Ee})[,|\\s]+(${Ee})\\s*\\)?`,ae={CSS_UNIT:new RegExp(Ee),rgb:new RegExp("rgb"+Qr),rgba:new RegExp("rgba"+Zr),hsl:new RegExp("hsl"+Qr),hsla:new RegExp("hsla"+Zr),hsv:new RegExp("hsv"+Qr),hsva:new RegExp("hsva"+Zr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Rh(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(hs[t])t=hs[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let o=ae.rgb.exec(t);return o?{r:o[1],g:o[2],b:o[3]}:(o=ae.rgba.exec(t),o?{r:o[1],g:o[2],b:o[3],a:o[4]}:(o=ae.hsl.exec(t),o?{h:o[1],s:o[2],l:o[3]}:(o=ae.hsla.exec(t),o?{h:o[1],s:o[2],l:o[3],a:o[4]}:(o=ae.hsv.exec(t),o?{h:o[1],s:o[2],v:o[3]}:(o=ae.hsva.exec(t),o?{h:o[1],s:o[2],v:o[3],a:o[4]}:(o=ae.hex8.exec(t),o?{r:Yt(o[1]),g:Yt(o[2]),b:Yt(o[3]),a:Ni(o[4]),format:e?"name":"hex8"}:(o=ae.hex6.exec(t),o?{r:Yt(o[1]),g:Yt(o[2]),b:Yt(o[3]),format:e?"name":"hex"}:(o=ae.hex4.exec(t),o?{r:Yt(o[1]+o[1]),g:Yt(o[2]+o[2]),b:Yt(o[3]+o[3]),a:Ni(o[4]+o[4]),format:e?"name":"hex8"}:(o=ae.hex3.exec(t),o?{r:Yt(o[1]+o[1]),g:Yt(o[2]+o[2]),b:Yt(o[3]+o[3]),format:e?"name":"hex"}:!1)))))))))}function we(t){return!!ae.CSS_UNIT.exec(String(t))}class kt{constructor(e="",o={}){if(e instanceof kt)return e;typeof e=="number"&&(e=Eh(e)),this.originalInput=e;const r=Ah(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=o.format??r.format,this.gradientType=o.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let o,r,s;const a=e.r/255,n=e.g/255,h=e.b/255;return a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),n<=.03928?r=n/12.92:r=Math.pow((n+.055)/1.055,2.4),h<=.03928?s=h/12.92:s=Math.pow((h+.055)/1.055,2.4),.2126*o+.7152*r+.0722*s}getAlpha(){return this.a}setAlpha(e){return this.a=$a(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Bi(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Bi(this.r,this.g,this.b),o=Math.round(e.h*360),r=Math.round(e.s*100),s=Math.round(e.v*100);return this.a===1?`hsv(${o}, ${r}%, ${s}%)`:`hsva(${o}, ${r}%, ${s}%, ${this.roundA})`}toHsl(){const e=Vi(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Vi(this.r,this.g,this.b),o=Math.round(e.h*360),r=Math.round(e.s*100),s=Math.round(e.l*100);return this.a===1?`hsl(${o}, ${r}%, ${s}%)`:`hsla(${o}, ${r}%, ${s}%, ${this.roundA})`}toHex(e=!1){return Ui(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Sh(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),o=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${e}, ${o}, ${r})`:`rgba(${e}, ${o}, ${r}, ${this.roundA})`}toPercentageRgb(){const e=o=>`${Math.round(Vt(o,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=o=>Math.round(Vt(o,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Ui(this.r,this.g,this.b,!1);for(const[o,r]of Object.entries(hs))if(e===r)return o;return!1}toString(e){const o=!!e;e=e??this.format;let r=!1;const s=this.a<1&&this.a>=0;return!o&&s&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new kt(this.toString())}lighten(e=10){const o=this.toHsl();return o.l+=e/100,o.l=or(o.l),new kt(o)}brighten(e=10){const o=this.toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(255*-(e/100)))),o.g=Math.max(0,Math.min(255,o.g-Math.round(255*-(e/100)))),o.b=Math.max(0,Math.min(255,o.b-Math.round(255*-(e/100)))),new kt(o)}darken(e=10){const o=this.toHsl();return o.l-=e/100,o.l=or(o.l),new kt(o)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const o=this.toHsl();return o.s-=e/100,o.s=or(o.s),new kt(o)}saturate(e=10){const o=this.toHsl();return o.s+=e/100,o.s=or(o.s),new kt(o)}greyscale(){return this.desaturate(100)}spin(e){const o=this.toHsl(),r=(o.h+e)%360;return o.h=r<0?360+r:r,new kt(o)}mix(e,o=50){const r=this.toRgb(),s=new kt(e).toRgb(),a=o/100,n={r:(s.r-r.r)*a+r.r,g:(s.g-r.g)*a+r.g,b:(s.b-r.b)*a+r.b,a:(s.a-r.a)*a+r.a};return new kt(n)}analogous(e=6,o=30){const r=this.toHsl(),s=360/o,a=[this];for(r.h=(r.h-(s*e>>1)+720)%360;--e;)r.h=(r.h+s)%360,a.push(new kt(r));return a}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new kt(e)}monochromatic(e=6){const o=this.toHsv(),{h:r}=o,{s}=o;let{v:a}=o;const n=[],h=1/e;for(;e--;)n.push(new kt({h:r,s,v:a})),a=(a+h)%1;return n}splitcomplement(){const e=this.toHsl(),{h:o}=e;return[this,new kt({h:(o+72)%360,s:e.s,l:e.l}),new kt({h:(o+216)%360,s:e.s,l:e.l})]}onBackground(e){const o=this.toRgb(),r=new kt(e).toRgb(),s=o.a+r.a*(1-o.a);return new kt({r:(o.r*o.a+r.r*r.a*(1-o.a))/s,g:(o.g*o.a+r.g*r.a*(1-o.a))/s,b:(o.b*o.a+r.b*r.a*(1-o.a))/s,a:s})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const o=this.toHsl(),{h:r}=o,s=[this],a=360/e;for(let n=1;n<e;n++)s.push(new kt({h:(r+n*a)%360,s:o.s,l:o.l}));return s}equals(e){return this.toRgbString()===new kt(e).toRgbString()}}var Hi="EyeDropper"in window,et=class extends P{constructor(){super(),this.formControlController=new Ce(this),this.isSafeValue=!1,this.localize=new rt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),o=e.querySelector(".color-picker__slider-handle"),{width:r}=e.getBoundingClientRect();let s=this.value;o.focus(),t.preventDefault(),xo(e,{onMove:a=>{this.alpha=Rt(a/r*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),o=e.querySelector(".color-picker__slider-handle"),{width:r}=e.getBoundingClientRect();let s=this.value;o.focus(),t.preventDefault(),xo(e,{onMove:a=>{this.hue=Rt(a/r*360,0,360),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-change"),this.emit("sl-input"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),o=e.querySelector(".color-picker__grid-handle"),{width:r,height:s}=e.getBoundingClientRect();let a=this.value;o.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,xo(e,{onMove:(n,h)=>{this.saturation=Rt(n/r*100,0,100),this.brightness=Rt(100-h/s*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit("sl-change"),this.emit("sl-input"))},onStop:()=>this.isDraggingGridHandle=!1,initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=Rt(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=Rt(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=Rt(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=Rt(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=Rt(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=Rt(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=Rt(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=Rt(this.brightness-e,0,100),this.syncValues()),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,o=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new kt(t);if(!e.isValid)return null;const o=e.toHsl(),r={h:o.h,s:o.s*100,l:o.l*100,a:o.a},s=e.toRgb(),a=e.toHexString(),n=e.toHex8String(),h=e.toHsv(),d={h:h.h,s:h.s*100,v:h.v*100,a:h.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:d.h,s:d.s,v:d.v,string:this.setLetterCase(`hsv(${Math.round(d.h)}, ${Math.round(d.s)}%, ${Math.round(d.v)}%)`)},hsva:{h:d.h,s:d.s,v:d.v,a:d.a,string:this.setLetterCase(`hsva(${Math.round(d.h)}, ${Math.round(d.s)}%, ${Math.round(d.v)}%, ${d.a.toFixed(2).toString()})`)},rgb:{r:s.r,g:s.g,b:s.b,string:this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)},rgba:{r:s.r,g:s.g,b:s.b,a:s.a,string:this.setLetterCase(`rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Hi)return;new EyeDropper().open().then(e=>{const o=this.value;this.setColor(e.sRGBHex),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,o,r=100){const s=new kt(`hsva(${t}, ${e}, ${o}, ${r/100})`);return s.isValid?s.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const o=this.parseColor(e);o!==null?(this.inputValue=this.value,this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=o.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(s=>s.trim()!==""),r=$`
      <div
        part="base"
        class=${j({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?$`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Kt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${j({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Kt({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${M(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Kt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${M(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?$`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Kt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Kt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${M(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Kt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":$`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Hi?$`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${o.length>0?$`
              <div part="swatches" class="color-picker__swatches">
                ${o.map(s=>{const a=this.parseColor(s);return a?$`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${M(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${s}
                      @click=${()=>this.selectSwatch(s)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(a.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Kt({backgroundColor:a.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${s}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?r:$`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${j({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Kt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};et.styles=_h;et.dependencies={"sl-button-group":Ne,"sl-button":ot,"sl-dropdown":Nt,"sl-icon":ut,"sl-input":G,"sl-visually-hidden":bs};i([R('[part~="base"]')],et.prototype,"base",2);i([R('[part~="input"]')],et.prototype,"input",2);i([R(".color-dropdown")],et.prototype,"dropdown",2);i([R('[part~="preview"]')],et.prototype,"previewButton",2);i([R('[part~="trigger"]')],et.prototype,"trigger",2);i([q()],et.prototype,"hasFocus",2);i([q()],et.prototype,"isDraggingGridHandle",2);i([q()],et.prototype,"isEmpty",2);i([q()],et.prototype,"inputValue",2);i([q()],et.prototype,"hue",2);i([q()],et.prototype,"saturation",2);i([q()],et.prototype,"brightness",2);i([q()],et.prototype,"alpha",2);i([c()],et.prototype,"value",2);i([He()],et.prototype,"defaultValue",2);i([c()],et.prototype,"label",2);i([c()],et.prototype,"format",2);i([c({type:Boolean,reflect:!0})],et.prototype,"inline",2);i([c({reflect:!0})],et.prototype,"size",2);i([c({attribute:"no-format-toggle",type:Boolean})],et.prototype,"noFormatToggle",2);i([c()],et.prototype,"name",2);i([c({type:Boolean,reflect:!0})],et.prototype,"disabled",2);i([c({type:Boolean})],et.prototype,"hoist",2);i([c({type:Boolean})],et.prototype,"opacity",2);i([c({type:Boolean})],et.prototype,"uppercase",2);i([c()],et.prototype,"swatches",2);i([c({reflect:!0})],et.prototype,"form",2);i([c({type:Boolean,reflect:!0})],et.prototype,"required",2);i([E("format",{waitUntilFirstUpdate:!0})],et.prototype,"handleFormatChange",1);i([E("opacity",{waitUntilFirstUpdate:!0})],et.prototype,"handleOpacityChange",1);i([E("value")],et.prototype,"handleValueChange",1);et.define("sl-color-picker");var Ih=B`
  ${N}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Sa=class extends P{constructor(){super(...arguments),this.hasSlotController=new Zt(this,"footer","header","image")}render(){return $`
      <div
        part="base"
        class=${j({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Sa.styles=Ih;Sa.define("sl-card");var Lh=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Dh=B`
  ${N}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,ji=Symbol(),Ph=t=>(e,o,r)=>{const s=r.value;r.value=function(...a){clearTimeout(this[ji]),this[ji]=window.setTimeout(()=>{s.apply(this,a)},t)}},za=class{constructor(t){this.pointers=new Set,this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate()),this.handleScrollEnd()},this.handlePointerDown=e=>{if(e.pointerType==="touch")return;this.pointers.add(e.pointerId),this.mouseDragging&&!this.dragging&&e.button===0&&(e.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=e=>{const o=this.host.scrollContainer,r=!!e.movementX||!!e.movementY;!this.dragging&&r?(o.setPointerCapture(e.pointerId),this.handleDragStart()):o.hasPointerCapture(e.pointerId)&&this.handleDrag(e)},this.handlePointerUp=e=>{this.pointers.delete(e.pointerId),this.host.scrollContainer.releasePointerCapture(e.pointerId),this.pointers.size===0&&this.handleDragEnd()},this.handleTouchEnd=e=>{for(const o of e.changedTouches)this.pointers.delete(o.identifier)},this.handleTouchStart=e=>{for(const o of e.touches)this.pointers.add(o.identifier)},this.host=t,t.addController(this)}async hostConnected(){const t=this.host;await t.updateComplete;const e=t.scrollContainer;e.addEventListener("scroll",this.handleScroll,{passive:!0}),e.addEventListener("pointerdown",this.handlePointerDown),e.addEventListener("pointerup",this.handlePointerUp),e.addEventListener("pointercancel",this.handlePointerUp),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),e.addEventListener("touchend",this.handleTouchEnd)}hostDisconnected(){const e=this.host.scrollContainer;e.removeEventListener("scroll",this.handleScroll),e.removeEventListener("pointerdown",this.handlePointerDown),e.removeEventListener("pointerup",this.handlePointerUp),e.removeEventListener("pointercancel",this.handlePointerUp),e.removeEventListener("touchstart",this.handleTouchStart),e.removeEventListener("touchend",this.handleTouchEnd)}handleScrollEnd(){this.pointers.size?this.handleScrollEnd():(this.scrolling=!1,this.host.scrollContainer.dispatchEvent(new CustomEvent("scrollend",{bubbles:!1,cancelable:!1})),this.host.requestUpdate())}handleDragStart(){const t=this.host;this.dragging=!0,t.scrollContainer.style.setProperty("scroll-snap-type","unset"),t.requestUpdate()}handleDrag(t){this.host.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY})}async handleDragEnd(){const t=this.host,e=t.scrollContainer;e.removeEventListener("pointermove",this.handlePointerMove),this.dragging=!1;const o=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("scroll-snap-type");const s=e.scrollLeft,a=e.scrollTop;e.style.setProperty("scroll-snap-type","unset"),e.scrollTo({left:o,top:r,behavior:"auto"}),e.scrollTo({left:s,top:a,behavior:gs()?"auto":"smooth"}),this.scrolling&&await qt(e,"scrollend"),e.style.removeProperty("scroll-snap-type"),t.requestUpdate()}};i([Ph(100)],za.prototype,"handleScrollEnd",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Mh(t,e){if(t!==void 0){let o=0;for(const r of t)yield e(r,o++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Fh(t,e,o=1){const r=e===void 0?0:t;e!=null||(e=t);for(let s=r;o>0?s<e:e<s;s+=o)yield s}var St=class extends P{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new Lh(this,()=>this.next()),this.scrollController=new za(this),this.slides=this.getElementsByTagName("sl-carousel-item"),this.intersectionObserverEntries=new Map,this.localize=new rt(this),this.handleSlotChange=t=>{t.some(o=>[...o.addedNodes,...o.removedNodes].some(r=>Ss.isCarouselItem(r)&&!r.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const t=new IntersectionObserver(e=>{e.forEach(o=>{this.intersectionObserverEntries.set(o.target,o);const r=o.target;r.toggleAttribute("inert",!o.isIntersecting),r.classList.toggle("--in-view",o.isIntersecting),r.setAttribute("aria-hidden",o.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=t,t.takeRecords().forEach(e=>{this.intersectionObserverEntries.set(e.target,e)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!1})}getPageCount(){return Math.ceil(this.getSlides().length/this.slidesPerPage)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerPage)}getSlides({excludeClones:t=!0}={}){return[...this.slides].filter(e=>!t||!e.hasAttribute("data-clone"))}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,o=this.localize.dir()==="rtl",r=e.closest('[part~="pagination-item"]')!==null,s=t.key==="ArrowDown"||!o&&t.key==="ArrowRight"||o&&t.key==="ArrowLeft",a=t.key==="ArrowUp"||!o&&t.key==="ArrowLeft"||o&&t.key==="ArrowRight";t.preventDefault(),a&&this.previous(),s&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{var n;const h=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');h&&h.focus()})}}handleScrollEnd(){const t=this.getSlides(),o=[...this.intersectionObserverEntries.values()].find(r=>r.isIntersecting);if(this.loop&&(o!=null&&o.target.hasAttribute("data-clone"))){const r=Number(o.target.getAttribute("data-clone"));this.goToSlide(r,"auto");return}o&&(this.activeSlide=t.indexOf(o.target))}initializeSlides(){const t=this.getSlides(),e=this.intersectionObserver;if(this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((o,r)=>{e.unobserve(o),o.classList.remove("--in-view"),o.classList.remove("--is-active"),o.setAttribute("aria-label",this.localize.term("slideNum",r+1)),o.hasAttribute("data-clone")&&o.remove()}),this.loop){const o=this.slidesPerPage,r=t.slice(-o),s=t.slice(0,o);r.reverse().forEach((a,n)=>{const h=a.cloneNode(!0);h.setAttribute("data-clone",String(t.length-n-1)),this.prepend(h)}),s.forEach((a,n)=>{const h=a.cloneNode(!0);h.setAttribute("data-clone",String(n)),this.append(h)})}this.getSlides({excludeClones:!1}).forEach(o=>{e.observe(o)}),this.goToSlide(this.activeSlide,"auto")}handelSlideChange(){const t=this.getSlides();t.forEach((e,o)=>{e.classList.toggle("--is-active",o===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}handleSlidesPerMoveChange(){const t=this.getSlides({excludeClones:!1}),e=this.slidesPerMove;t.forEach((o,r)=>{Math.abs(r-e)%e===0?o.style.removeProperty("scroll-snap-align"):o.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(t="smooth"){let e=this.activeSlide||this.activeSlide-this.slidesPerMove,o=!1;for(;!o&&e>0;)e-=1,o=Math.abs(e-this.slidesPerMove)%this.slidesPerMove===0;this.goToSlide(e,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:o,loop:r,scrollContainer:s}=this,a=this.getSlides(),n=this.getSlides({excludeClones:!1}),h=(t+a.length)%a.length;this.activeSlide=h;const d=Rt(t+(r?o:0),0,n.length-1),u=n[d],b=s.getBoundingClientRect(),p=u.getBoundingClientRect();s.scrollTo({left:p.left-b.left+s.scrollLeft,top:p.top-b.top+s.scrollTop,behavior:gs()?"auto":e})}render(){const{scrollController:t,slidesPerPage:e}=this,o=this.getPageCount(),r=this.getCurrentPage(),s=this.loop||r>0,a=this.loop||r<o-1,n=this.localize.dir()==="ltr";return $`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${j({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?$`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${j({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!s})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${j({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!a})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?"false":"true"}"
                  @click=${a?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?$`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Mh(Fh(o),h=>{const d=h===r;return $`
                    <button
                      part="pagination-item ${d?"pagination-item--active":""}"
                      class="${j({"carousel__pagination-item":!0,"carousel__pagination-item--active":d})}"
                      role="tab"
                      aria-selected="${d?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",h+1,o)}"
                      tabindex=${d?"0":"-1"}
                      @click=${()=>this.goToSlide(h*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};St.styles=Dh;St.dependencies={"sl-icon":ut};i([c({type:Boolean,reflect:!0})],St.prototype,"loop",2);i([c({type:Boolean,reflect:!0})],St.prototype,"navigation",2);i([c({type:Boolean,reflect:!0})],St.prototype,"pagination",2);i([c({type:Boolean,reflect:!0})],St.prototype,"autoplay",2);i([c({type:Number,attribute:"autoplay-interval"})],St.prototype,"autoplayInterval",2);i([c({type:Number,attribute:"slides-per-page"})],St.prototype,"slidesPerPage",2);i([c({type:Number,attribute:"slides-per-move"})],St.prototype,"slidesPerMove",2);i([c()],St.prototype,"orientation",2);i([c({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],St.prototype,"mouseDragging",2);i([R("slot:not([name])")],St.prototype,"defaultSlot",2);i([R(".carousel__slides")],St.prototype,"scrollContainer",2);i([R(".carousel__pagination")],St.prototype,"paginationContainer",2);i([q()],St.prototype,"activeSlide",2);i([E("loop",{waitUntilFirstUpdate:!0}),E("slidesPerPage",{waitUntilFirstUpdate:!0})],St.prototype,"initializeSlides",1);i([E("activeSlide")],St.prototype,"handelSlideChange",1);i([E("slidesPerMove")],St.prototype,"handleSlidesPerMoveChange",1);i([E("autoplay")],St.prototype,"handleAutoplayChange",1);i([E("mouseDragging")],St.prototype,"handleMouseDraggingChange",1);St.define("sl-carousel");ot.define("sl-button");os("../../node_modules/@shoelace-style/shoelace/dist");
