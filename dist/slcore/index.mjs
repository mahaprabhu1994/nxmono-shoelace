/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ve = window, ho = ve.ShadowRoot && (ve.ShadyCSS === void 0 || ve.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, uo = Symbol(), _o = /* @__PURE__ */ new WeakMap();
let ts = class {
  constructor(e, o, s) {
    if (this._$cssResult$ = !0, s !== uo)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = o;
  }
  get styleSheet() {
    let e = this.o;
    const o = this.t;
    if (ho && e === void 0) {
      const s = o !== void 0 && o.length === 1;
      s && (e = _o.get(o)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), s && _o.set(o, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zs = (t) => new ts(typeof t == "string" ? t : t + "", void 0, uo), R = (t, ...e) => {
  const o = t.length === 1 ? t[0] : e.reduce((s, i, r) => s + ((l) => {
    if (l._$cssResult$ === !0)
      return l.cssText;
    if (typeof l == "number")
      return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[r + 1], t[0]);
  return new ts(o, t, uo);
}, Ls = (t, e) => {
  ho ? t.adoptedStyleSheets = e.map((o) => o instanceof CSSStyleSheet ? o : o.styleSheet) : e.forEach((o) => {
    const s = document.createElement("style"), i = ve.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = o.cssText, t.appendChild(s);
  });
}, xo = ho ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let o = "";
  for (const s of e.cssRules)
    o += s.cssText;
  return zs(o);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Pe;
const ke = window, ko = ke.trustedTypes, Ts = ko ? ko.emptyScript : "", $o = ke.reactiveElementPolyfillSupport, oe = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Ts : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let o = t;
  switch (e) {
    case Boolean:
      o = t !== null;
      break;
    case Number:
      o = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        o = JSON.parse(t);
      } catch {
        o = null;
      }
  }
  return o;
} }, es = (t, e) => e !== t && (e == e || t == t), Fe = { attribute: !0, type: String, converter: oe, reflect: !1, hasChanged: es }, Je = "finalized";
let Pt = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
  }
  static addInitializer(e) {
    var o;
    this.finalize(), ((o = this.h) !== null && o !== void 0 ? o : this.h = []).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return this.elementProperties.forEach((o, s) => {
      const i = this._$Ep(s, o);
      i !== void 0 && (this._$Ev.set(i, s), e.push(i));
    }), e;
  }
  static createProperty(e, o = Fe) {
    if (o.state && (o.attribute = !1), this.finalize(), this.elementProperties.set(e, o), !o.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const s = typeof e == "symbol" ? Symbol() : "__" + e, i = this.getPropertyDescriptor(e, s, o);
      i !== void 0 && Object.defineProperty(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, o, s) {
    return { get() {
      return this[o];
    }, set(i) {
      const r = this[e];
      this[o] = i, this.requestUpdate(e, r, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || Fe;
  }
  static finalize() {
    if (this.hasOwnProperty(Je))
      return !1;
    this[Je] = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), e.h !== void 0 && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const o = this.properties, s = [...Object.getOwnPropertyNames(o), ...Object.getOwnPropertySymbols(o)];
      for (const i of s)
        this.createProperty(i, o[i]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const o = [];
    if (Array.isArray(e)) {
      const s = new Set(e.flat(1 / 0).reverse());
      for (const i of s)
        o.unshift(xo(i));
    } else
      e !== void 0 && o.push(xo(e));
    return o;
  }
  static _$Ep(e, o) {
    const s = o.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  _$Eu() {
    var e;
    this._$E_ = new Promise((o) => this.enableUpdating = o), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((o) => o(this));
  }
  addController(e) {
    var o, s;
    ((o = this._$ES) !== null && o !== void 0 ? o : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((s = e.hostConnected) === null || s === void 0 || s.call(e));
  }
  removeController(e) {
    var o;
    (o = this._$ES) === null || o === void 0 || o.splice(this._$ES.indexOf(e) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((e, o) => {
      this.hasOwnProperty(o) && (this._$Ei.set(o, this[o]), delete this[o]);
    });
  }
  createRenderRoot() {
    var e;
    const o = (e = this.shadowRoot) !== null && e !== void 0 ? e : this.attachShadow(this.constructor.shadowRootOptions);
    return Ls(o, this.constructor.elementStyles), o;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((o) => {
      var s;
      return (s = o.hostConnected) === null || s === void 0 ? void 0 : s.call(o);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((o) => {
      var s;
      return (s = o.hostDisconnected) === null || s === void 0 ? void 0 : s.call(o);
    });
  }
  attributeChangedCallback(e, o, s) {
    this._$AK(e, s);
  }
  _$EO(e, o, s = Fe) {
    var i;
    const r = this.constructor._$Ep(e, s);
    if (r !== void 0 && s.reflect === !0) {
      const l = (((i = s.converter) === null || i === void 0 ? void 0 : i.toAttribute) !== void 0 ? s.converter : oe).toAttribute(o, s.type);
      this._$El = e, l == null ? this.removeAttribute(r) : this.setAttribute(r, l), this._$El = null;
    }
  }
  _$AK(e, o) {
    var s;
    const i = this.constructor, r = i._$Ev.get(e);
    if (r !== void 0 && this._$El !== r) {
      const l = i.getPropertyOptions(r), c = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((s = l.converter) === null || s === void 0 ? void 0 : s.fromAttribute) !== void 0 ? l.converter : oe;
      this._$El = r, this[r] = c.fromAttribute(o, l.type), this._$El = null;
    }
  }
  requestUpdate(e, o, s) {
    let i = !0;
    e !== void 0 && (((s = s || this.constructor.getPropertyOptions(e)).hasChanged || es)(this[e], o) ? (this._$AL.has(e) || this._$AL.set(e, o), s.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, s))) : i = !1), !this.isUpdatePending && i && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (o) {
      Promise.reject(o);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((i, r) => this[r] = i), this._$Ei = void 0);
    let o = !1;
    const s = this._$AL;
    try {
      o = this.shouldUpdate(s), o ? (this.willUpdate(s), (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
        var r;
        return (r = i.hostUpdate) === null || r === void 0 ? void 0 : r.call(i);
      }), this.update(s)) : this._$Ek();
    } catch (i) {
      throw o = !1, this._$Ek(), i;
    }
    o && this._$AE(s);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var o;
    (o = this._$ES) === null || o === void 0 || o.forEach((s) => {
      var i;
      return (i = s.hostUpdated) === null || i === void 0 ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$EC !== void 0 && (this._$EC.forEach((o, s) => this._$EO(s, this[s], o)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Pt[Je] = !0, Pt.elementProperties = /* @__PURE__ */ new Map(), Pt.elementStyles = [], Pt.shadowRootOptions = { mode: "open" }, $o == null || $o({ ReactiveElement: Pt }), ((Pe = ke.reactiveElementVersions) !== null && Pe !== void 0 ? Pe : ke.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Re;
const $e = window, Bt = $e.trustedTypes, Co = Bt ? Bt.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Qe = "$lit$", xt = `lit$${(Math.random() + "").slice(9)}$`, os = "?" + xt, Os = `<${os}>`, Mt = document, se = () => Mt.createComment(""), ie = (t) => t === null || typeof t != "object" && typeof t != "function", ss = Array.isArray, Ms = (t) => ss(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", Be = `[ 	
\f\r]`, Xt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ao = /-->/g, So = />/g, zt = RegExp(`>|${Be}(?:([^\\s"'>=/]+)(${Be}*=${Be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Eo = /'/g, zo = /"/g, is = /^(?:script|style|textarea|title)$/i, Is = (t) => (e, ...o) => ({ _$litType$: t, strings: e, values: o }), b = Is(1), Q = Symbol.for("lit-noChange"), D = Symbol.for("lit-nothing"), Lo = /* @__PURE__ */ new WeakMap(), Tt = Mt.createTreeWalker(Mt, 129, null, !1);
function rs(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Co !== void 0 ? Co.createHTML(e) : e;
}
const Ds = (t, e) => {
  const o = t.length - 1, s = [];
  let i, r = e === 2 ? "<svg>" : "", l = Xt;
  for (let c = 0; c < o; c++) {
    const a = t[c];
    let h, p, u = -1, g = 0;
    for (; g < a.length && (l.lastIndex = g, p = l.exec(a), p !== null); )
      g = l.lastIndex, l === Xt ? p[1] === "!--" ? l = Ao : p[1] !== void 0 ? l = So : p[2] !== void 0 ? (is.test(p[2]) && (i = RegExp("</" + p[2], "g")), l = zt) : p[3] !== void 0 && (l = zt) : l === zt ? p[0] === ">" ? (l = i ?? Xt, u = -1) : p[1] === void 0 ? u = -2 : (u = l.lastIndex - p[2].length, h = p[1], l = p[3] === void 0 ? zt : p[3] === '"' ? zo : Eo) : l === zo || l === Eo ? l = zt : l === Ao || l === So ? l = Xt : (l = zt, i = void 0);
    const f = l === zt && t[c + 1].startsWith("/>") ? " " : "";
    r += l === Xt ? a + Os : u >= 0 ? (s.push(h), a.slice(0, u) + Qe + a.slice(u) + xt + f) : a + xt + (u === -2 ? (s.push(void 0), c) : f);
  }
  return [rs(t, r + (t[o] || "<?>") + (e === 2 ? "</svg>" : "")), s];
};
class re {
  constructor({ strings: e, _$litType$: o }, s) {
    let i;
    this.parts = [];
    let r = 0, l = 0;
    const c = e.length - 1, a = this.parts, [h, p] = Ds(e, o);
    if (this.el = re.createElement(h, s), Tt.currentNode = this.el.content, o === 2) {
      const u = this.el.content, g = u.firstChild;
      g.remove(), u.append(...g.childNodes);
    }
    for (; (i = Tt.nextNode()) !== null && a.length < c; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const u = [];
          for (const g of i.getAttributeNames())
            if (g.endsWith(Qe) || g.startsWith(xt)) {
              const f = p[l++];
              if (u.push(g), f !== void 0) {
                const m = i.getAttribute(f.toLowerCase() + Qe).split(xt), v = /([.?@])?(.*)/.exec(f);
                a.push({ type: 1, index: r, name: v[2], strings: m, ctor: v[1] === "." ? Ps : v[1] === "?" ? Rs : v[1] === "@" ? Bs : Le });
              } else
                a.push({ type: 6, index: r });
            }
          for (const g of u)
            i.removeAttribute(g);
        }
        if (is.test(i.tagName)) {
          const u = i.textContent.split(xt), g = u.length - 1;
          if (g > 0) {
            i.textContent = Bt ? Bt.emptyScript : "";
            for (let f = 0; f < g; f++)
              i.append(u[f], se()), Tt.nextNode(), a.push({ type: 2, index: ++r });
            i.append(u[g], se());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === os)
          a.push({ type: 2, index: r });
        else {
          let u = -1;
          for (; (u = i.data.indexOf(xt, u + 1)) !== -1; )
            a.push({ type: 7, index: r }), u += xt.length - 1;
        }
      r++;
    }
  }
  static createElement(e, o) {
    const s = Mt.createElement("template");
    return s.innerHTML = e, s;
  }
}
function Ht(t, e, o = t, s) {
  var i, r, l, c;
  if (e === Q)
    return e;
  let a = s !== void 0 ? (i = o._$Co) === null || i === void 0 ? void 0 : i[s] : o._$Cl;
  const h = ie(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== h && ((r = a == null ? void 0 : a._$AO) === null || r === void 0 || r.call(a, !1), h === void 0 ? a = void 0 : (a = new h(t), a._$AT(t, o, s)), s !== void 0 ? ((l = (c = o)._$Co) !== null && l !== void 0 ? l : c._$Co = [])[s] = a : o._$Cl = a), a !== void 0 && (e = Ht(t, a._$AS(t, e.values), a, s)), e;
}
class Vs {
  constructor(e, o) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = o;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    var o;
    const { el: { content: s }, parts: i } = this._$AD, r = ((o = e == null ? void 0 : e.creationScope) !== null && o !== void 0 ? o : Mt).importNode(s, !0);
    Tt.currentNode = r;
    let l = Tt.nextNode(), c = 0, a = 0, h = i[0];
    for (; h !== void 0; ) {
      if (c === h.index) {
        let p;
        h.type === 2 ? p = new ne(l, l.nextSibling, this, e) : h.type === 1 ? p = new h.ctor(l, h.name, h.strings, this, e) : h.type === 6 && (p = new Hs(l, this, e)), this._$AV.push(p), h = i[++a];
      }
      c !== (h == null ? void 0 : h.index) && (l = Tt.nextNode(), c++);
    }
    return Tt.currentNode = Mt, r;
  }
  v(e) {
    let o = 0;
    for (const s of this._$AV)
      s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, o), o += s.strings.length - 2) : s._$AI(e[o])), o++;
  }
}
class ne {
  constructor(e, o, s, i) {
    var r;
    this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = e, this._$AB = o, this._$AM = s, this.options = i, this._$Cp = (r = i == null ? void 0 : i.isConnected) === null || r === void 0 || r;
  }
  get _$AU() {
    var e, o;
    return (o = (e = this._$AM) === null || e === void 0 ? void 0 : e._$AU) !== null && o !== void 0 ? o : this._$Cp;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const o = this._$AM;
    return o !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = o.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, o = this) {
    e = Ht(this, e, o), ie(e) ? e === D || e == null || e === "" ? (this._$AH !== D && this._$AR(), this._$AH = D) : e !== this._$AH && e !== Q && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : Ms(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== D && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.$(Mt.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var o;
    const { values: s, _$litType$: i } = e, r = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = re.createElement(rs(i.h, i.h[0]), this.options)), i);
    if (((o = this._$AH) === null || o === void 0 ? void 0 : o._$AD) === r)
      this._$AH.v(s);
    else {
      const l = new Vs(r, this), c = l.u(this.options);
      l.v(s), this.$(c), this._$AH = l;
    }
  }
  _$AC(e) {
    let o = Lo.get(e.strings);
    return o === void 0 && Lo.set(e.strings, o = new re(e)), o;
  }
  T(e) {
    ss(this._$AH) || (this._$AH = [], this._$AR());
    const o = this._$AH;
    let s, i = 0;
    for (const r of e)
      i === o.length ? o.push(s = new ne(this.k(se()), this.k(se()), this, this.options)) : s = o[i], s._$AI(r), i++;
    i < o.length && (this._$AR(s && s._$AB.nextSibling, i), o.length = i);
  }
  _$AR(e = this._$AA.nextSibling, o) {
    var s;
    for ((s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, o); e && e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var o;
    this._$AM === void 0 && (this._$Cp = e, (o = this._$AP) === null || o === void 0 || o.call(this, e));
  }
}
class Le {
  constructor(e, o, s, i, r) {
    this.type = 1, this._$AH = D, this._$AN = void 0, this.element = e, this.name = o, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = D;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, o = this, s, i) {
    const r = this.strings;
    let l = !1;
    if (r === void 0)
      e = Ht(this, e, o, 0), l = !ie(e) || e !== this._$AH && e !== Q, l && (this._$AH = e);
    else {
      const c = e;
      let a, h;
      for (e = r[0], a = 0; a < r.length - 1; a++)
        h = Ht(this, c[s + a], o, a), h === Q && (h = this._$AH[a]), l || (l = !ie(h) || h !== this._$AH[a]), h === D ? e = D : e !== D && (e += (h ?? "") + r[a + 1]), this._$AH[a] = h;
    }
    l && !i && this.j(e);
  }
  j(e) {
    e === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ps extends Le {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === D ? void 0 : e;
  }
}
const Fs = Bt ? Bt.emptyScript : "";
class Rs extends Le {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== D ? this.element.setAttribute(this.name, Fs) : this.element.removeAttribute(this.name);
  }
}
class Bs extends Le {
  constructor(e, o, s, i, r) {
    super(e, o, s, i, r), this.type = 5;
  }
  _$AI(e, o = this) {
    var s;
    if ((e = (s = Ht(this, e, o, 0)) !== null && s !== void 0 ? s : D) === Q)
      return;
    const i = this._$AH, r = e === D && i !== D || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, l = e !== D && (i === D || r);
    r && this.element.removeEventListener(this.name, this, i), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var o, s;
    typeof this._$AH == "function" ? this._$AH.call((s = (o = this.options) === null || o === void 0 ? void 0 : o.host) !== null && s !== void 0 ? s : this.element, e) : this._$AH.handleEvent(e);
  }
}
class Hs {
  constructor(e, o, s) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = o, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Ht(this, e);
  }
}
const To = $e.litHtmlPolyfillSupport;
To == null || To(re, ne), ((Re = $e.litHtmlVersions) !== null && Re !== void 0 ? Re : $e.litHtmlVersions = []).push("2.8.0");
const Ns = (t, e, o) => {
  var s, i;
  const r = (s = o == null ? void 0 : o.renderBefore) !== null && s !== void 0 ? s : e;
  let l = r._$litPart$;
  if (l === void 0) {
    const c = (i = o == null ? void 0 : o.renderBefore) !== null && i !== void 0 ? i : null;
    r._$litPart$ = l = new ne(e.insertBefore(se(), c), c, void 0, o ?? {});
  }
  return l._$AI(t), l;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var He, Ne;
let ee = class extends Pt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, o;
    const s = super.createRenderRoot();
    return (e = (o = this.renderOptions).renderBefore) !== null && e !== void 0 || (o.renderBefore = s.firstChild), s;
  }
  update(e) {
    const o = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ns(o, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return Q;
  }
};
ee.finalized = !0, ee._$litElement$ = !0, (He = globalThis.litElementHydrateSupport) === null || He === void 0 || He.call(globalThis, { LitElement: ee });
const Oo = globalThis.litElementPolyfillSupport;
Oo == null || Oo({ LitElement: ee });
((Ne = globalThis.litElementVersions) !== null && Ne !== void 0 ? Ne : globalThis.litElementVersions = []).push("3.3.3");
var H = R`
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
`, Us = R`
  ${H}

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
`;
const to = /* @__PURE__ */ new Set(), qs = new MutationObserver(as), Ft = /* @__PURE__ */ new Map();
let ls = document.documentElement.dir || "ltr", ns = document.documentElement.lang || navigator.language, Lt;
qs.observe(document.documentElement, {
  attributes: !0,
  attributeFilter: ["dir", "lang"]
});
function js(...t) {
  t.map((e) => {
    const o = e.$code.toLowerCase();
    Ft.has(o) ? Ft.set(o, Object.assign(Object.assign({}, Ft.get(o)), e)) : Ft.set(o, e), Lt || (Lt = e);
  }), as();
}
function as() {
  ls = document.documentElement.dir || "ltr", ns = document.documentElement.lang || navigator.language, [...to.keys()].map((t) => {
    typeof t.requestUpdate == "function" && t.requestUpdate();
  });
}
let Ks = class {
  constructor(e) {
    this.host = e, this.host.addController(this);
  }
  hostConnected() {
    to.add(this.host);
  }
  hostDisconnected() {
    to.delete(this.host);
  }
  dir() {
    return `${this.host.dir || ls}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || ns}`.toLowerCase();
  }
  getTranslationData(e) {
    var o, s;
    const i = new Intl.Locale(e.replace(/_/g, "-")), r = i == null ? void 0 : i.language.toLowerCase(), l = (s = (o = i == null ? void 0 : i.region) === null || o === void 0 ? void 0 : o.toLowerCase()) !== null && s !== void 0 ? s : "", c = Ft.get(`${r}-${l}`), a = Ft.get(r);
    return { locale: i, language: r, region: l, primary: c, secondary: a };
  }
  exists(e, o) {
    var s;
    const { primary: i, secondary: r } = this.getTranslationData((s = o.lang) !== null && s !== void 0 ? s : this.lang());
    return o = Object.assign({ includeFallback: !1 }, o), !!(i && i[e] || r && r[e] || o.includeFallback && Lt && Lt[e]);
  }
  term(e, ...o) {
    const { primary: s, secondary: i } = this.getTranslationData(this.lang());
    let r;
    if (s && s[e])
      r = s[e];
    else if (i && i[e])
      r = i[e];
    else if (Lt && Lt[e])
      r = Lt[e];
    else
      return console.error(`No translation found for: ${String(e)}`), String(e);
    return typeof r == "function" ? r(...o) : r;
  }
  date(e, o) {
    return e = new Date(e), new Intl.DateTimeFormat(this.lang(), o).format(e);
  }
  number(e, o) {
    return e = Number(e), isNaN(e) ? "" : new Intl.NumberFormat(this.lang(), o).format(e);
  }
  relativeTime(e, o, s) {
    return new Intl.RelativeTimeFormat(this.lang(), s).format(e, o);
  }
};
var st = class extends Ks {
}, cs = Object.defineProperty, Ws = Object.defineProperties, Gs = Object.getOwnPropertyDescriptor, Xs = Object.getOwnPropertyDescriptors, Mo = Object.getOwnPropertySymbols, Ys = Object.prototype.hasOwnProperty, Zs = Object.prototype.propertyIsEnumerable, Io = (t, e, o) => e in t ? cs(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, Et = (t, e) => {
  for (var o in e || (e = {}))
    Ys.call(e, o) && Io(t, o, e[o]);
  if (Mo)
    for (var o of Mo(e))
      Zs.call(e, o) && Io(t, o, e[o]);
  return t;
}, ae = (t, e) => Ws(t, Xs(e)), n = (t, e, o, s) => {
  for (var i = s > 1 ? void 0 : s ? Gs(e, o) : e, r = t.length - 1, l; r >= 0; r--)
    (l = t[r]) && (i = (s ? l(e, o, i) : l(i)) || i);
  return s && i && cs(e, o, i), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Js = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(o) {
  o.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(o) {
  o.createProperty(e.key, t);
} }, Qs = (t, e, o) => {
  e.constructor.createProperty(o, t);
};
function d(t) {
  return (e, o) => o !== void 0 ? Qs(t, e, o) : Js(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function S(t) {
  return d({ ...t, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ds = ({ finisher: t, descriptor: e }) => (o, s) => {
  var i;
  if (s === void 0) {
    const r = (i = o.originalKey) !== null && i !== void 0 ? i : o.key, l = e != null ? { kind: "method", placement: "prototype", key: r, descriptor: e(o.key) } : { ...o, key: r };
    return t != null && (l.finisher = function(c) {
      t(c, r);
    }), l;
  }
  {
    const r = o.constructor;
    e !== void 0 && Object.defineProperty(o, s, e(s)), t == null || t(r, s);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ti(t) {
  return ds({ finisher: (e, o) => {
    Object.assign(e.prototype[o], t);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function $(t, e) {
  return ds({ descriptor: (o) => {
    const s = { get() {
      var i, r;
      return (r = (i = this.renderRoot) === null || i === void 0 ? void 0 : i.querySelector(t)) !== null && r !== void 0 ? r : null;
    }, enumerable: !0, configurable: !0 };
    if (e) {
      const i = typeof o == "symbol" ? Symbol() : "__" + o;
      s.get = function() {
        var r, l;
        return this[i] === void 0 && (this[i] = (l = (r = this.renderRoot) === null || r === void 0 ? void 0 : r.querySelector(t)) !== null && l !== void 0 ? l : null), this[i];
      };
    }
    return s;
  } });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ue;
((Ue = window.HTMLSlotElement) === null || Ue === void 0 ? void 0 : Ue.prototype.assignedElements) != null;
var V = class extends ee {
  constructor() {
    super(), Object.entries(this.constructor.dependencies).forEach(([t, e]) => {
      this.constructor.define(t, e);
    });
  }
  emit(t, e) {
    const o = new CustomEvent(t, Et({
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {}
    }, e));
    return this.dispatchEvent(o), o;
  }
  /* eslint-enable */
  static define(t, e = this, o = {}) {
    const s = customElements.get(t);
    if (!s) {
      customElements.define(t, class extends e {
      }, o);
      return;
    }
    let i = " (unknown version)", r = i;
    "version" in e && e.version && (i = " v" + e.version), "version" in s && s.version && (r = " v" + s.version), !(i && r && i === r) && console.warn(
      `Attempted to register <${t}>${i}, but <${t}>${r} has already been registered.`
    );
  }
};
V.version = "2.9.0";
V.dependencies = {};
n([
  d()
], V.prototype, "dir", 2);
n([
  d()
], V.prototype, "lang", 2);
var po = class extends V {
  constructor() {
    super(...arguments), this.localize = new st(this);
  }
  render() {
    return b`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
po.styles = Us;
var Yt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakSet(), pe = /* @__PURE__ */ new WeakMap(), ce = class {
  constructor(t, e) {
    this.handleFormData = (o) => {
      const s = this.options.disabled(this.host), i = this.options.name(this.host), r = this.options.value(this.host), l = this.host.tagName.toLowerCase() === "sl-button";
      !s && !l && typeof i == "string" && i.length > 0 && typeof r < "u" && (Array.isArray(r) ? r.forEach((c) => {
        o.formData.append(i, c.toString());
      }) : o.formData.append(i, r.toString()));
    }, this.handleFormSubmit = (o) => {
      var s;
      const i = this.options.disabled(this.host), r = this.options.reportValidity;
      this.form && !this.form.noValidate && ((s = Yt.get(this.form)) == null || s.forEach((l) => {
        this.setUserInteracted(l, !0);
      })), this.form && !this.form.noValidate && !i && !r(this.host) && (o.preventDefault(), o.stopImmediatePropagation());
    }, this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host)), this.setUserInteracted(this.host, !1), pe.set(this.host, []);
    }, this.handleInteraction = (o) => {
      const s = pe.get(this.host);
      s.includes(o.type) || s.push(o.type), s.length === this.options.assumeInteractionOn.length && this.setUserInteracted(this.host, !0);
    }, this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const o = this.form.querySelectorAll("*");
        for (const s of o)
          if (typeof s.reportValidity == "function" && !s.reportValidity())
            return !1;
      }
      return !0;
    }, (this.host = t).addController(this), this.options = Et({
      form: (o) => {
        if (o.hasAttribute("form") && o.getAttribute("form") !== "") {
          const s = o.getRootNode(), i = o.getAttribute("form");
          if (i)
            return s.getElementById(i);
        }
        return o.closest("form");
      },
      name: (o) => o.name,
      value: (o) => o.value,
      defaultValue: (o) => o.defaultValue,
      disabled: (o) => {
        var s;
        return (s = o.disabled) != null ? s : !1;
      },
      reportValidity: (o) => typeof o.reportValidity == "function" ? o.reportValidity() : !0,
      setValue: (o, s) => o.value = s,
      assumeInteractionOn: ["sl-input"]
    }, e);
  }
  hostConnected() {
    const t = this.options.form(this.host);
    t && this.attachForm(t), pe.set(this.host, []), this.options.assumeInteractionOn.forEach((e) => {
      this.host.addEventListener(e, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm(), pe.delete(this.host), this.options.assumeInteractionOn.forEach((t) => {
      this.host.removeEventListener(t, this.handleInteraction);
    });
  }
  hostUpdated() {
    const t = this.options.form(this.host);
    t || this.detachForm(), t && this.form !== t && (this.detachForm(), this.attachForm(t)), this.host.hasUpdated && this.setValidity(this.host.validity.valid);
  }
  attachForm(t) {
    t ? (this.form = t, Yt.has(this.form) ? Yt.get(this.form).add(this.host) : Yt.set(this.form, /* @__PURE__ */ new Set([this.host])), this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit), this.form.addEventListener("reset", this.handleFormReset), Zt.has(this.form) || (Zt.set(this.form, this.form.reportValidity), this.form.reportValidity = () => this.reportFormValidity())) : this.form = void 0;
  }
  detachForm() {
    var t;
    this.form && ((t = Yt.get(this.form)) == null || t.delete(this.host), this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form.removeEventListener("reset", this.handleFormReset), Zt.has(this.form) && (this.form.reportValidity = Zt.get(this.form), Zt.delete(this.form))), this.form = void 0;
  }
  setUserInteracted(t, e) {
    e ? qe.add(t) : qe.delete(t), t.requestUpdate();
  }
  doAction(t, e) {
    if (this.form) {
      const o = document.createElement("button");
      o.type = t, o.style.position = "absolute", o.style.width = "0", o.style.height = "0", o.style.clipPath = "inset(50%)", o.style.overflow = "hidden", o.style.whiteSpace = "nowrap", e && (o.name = e.name, o.value = e.value, ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((s) => {
        e.hasAttribute(s) && o.setAttribute(s, e.getAttribute(s));
      })), this.form.append(o), o.click(), o.remove();
    }
  }
  /** Returns the associated `<form>` element, if one exists. */
  getForm() {
    var t;
    return (t = this.form) != null ? t : null;
  }
  /** Resets the form, restoring all the control to their default value */
  reset(t) {
    this.doAction("reset", t);
  }
  /** Submits the form, triggering validation and form data injection. */
  submit(t) {
    this.doAction("submit", t);
  }
  /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */
  setValidity(t) {
    const e = this.host, o = !!qe.has(e), s = !!e.required;
    e.toggleAttribute("data-required", s), e.toggleAttribute("data-optional", !s), e.toggleAttribute("data-invalid", !t), e.toggleAttribute("data-valid", t), e.toggleAttribute("data-user-invalid", !t && o), e.toggleAttribute("data-user-valid", t && o);
  }
  /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */
  updateValidity() {
    const t = this.host;
    this.setValidity(t.validity.valid);
  }
  /**
   * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
   * If the `sl-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `sl-invalid`
   * event will be cancelled before being dispatched.
   */
  emitInvalidEvent(t) {
    const e = new CustomEvent("sl-invalid", {
      bubbles: !1,
      composed: !1,
      cancelable: !0,
      detail: {}
    });
    t || e.preventDefault(), this.host.dispatchEvent(e) || t == null || t.preventDefault();
  }
}, fo = Object.freeze({
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valid: !0,
  valueMissing: !1
});
Object.freeze(ae(Et({}, fo), {
  valid: !1,
  valueMissing: !0
}));
Object.freeze(ae(Et({}, fo), {
  valid: !1,
  customError: !0
}));
var ei = R`
  ${H}

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
`, Te = class {
  constructor(t, ...e) {
    this.slotNames = [], this.handleSlotChange = (o) => {
      const s = o.target;
      (this.slotNames.includes("[default]") && !s.name || s.name && this.slotNames.includes(s.name)) && this.host.requestUpdate();
    }, (this.host = t).addController(this), this.slotNames = e;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((t) => {
      if (t.nodeType === t.TEXT_NODE && t.textContent.trim() !== "")
        return !0;
      if (t.nodeType === t.ELEMENT_NODE) {
        const e = t;
        if (e.tagName.toLowerCase() === "sl-visually-hidden")
          return !1;
        if (!e.hasAttribute("slot"))
          return !0;
      }
      return !1;
    });
  }
  hasNamedSlot(t) {
    return this.host.querySelector(`:scope > [slot="${t}"]`) !== null;
  }
  test(t) {
    return t === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(t);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
}, eo = "";
function oo(t) {
  eo = t;
}
function oi(t = "") {
  if (!eo) {
    const e = [...document.getElementsByTagName("script")], o = e.find((s) => s.hasAttribute("data-shoelace"));
    if (o)
      oo(o.getAttribute("data-shoelace"));
    else {
      const s = e.find((r) => /shoelace(\.min)?\.js($|\?)/.test(r.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));
      let i = "";
      s && (i = s.getAttribute("src")), oo(i.split("/").slice(0, -1).join("/"));
    }
  }
  return eo.replace(/\/$/, "") + (t ? `/${t.replace(/^\//, "")}` : "");
}
var si = {
  name: "default",
  resolver: (t) => oi(`assets/icons/${t}.svg`)
}, ii = si, Do = {
  caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
  check: `
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
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16" part="svg">
      <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"></path>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
}, ri = {
  name: "system",
  resolver: (t) => t in Do ? `data:image/svg+xml,${encodeURIComponent(Do[t])}` : ""
}, li = ri, ni = [ii, li], so = [];
function ai(t) {
  so.push(t);
}
function ci(t) {
  so = so.filter((e) => e !== t);
}
function Vo(t) {
  return ni.find((e) => e.name === t);
}
var di = R`
  ${H}

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
`;
function E(t, e) {
  const o = Et({
    waitUntilFirstUpdate: !1
  }, e);
  return (s, i) => {
    const { update: r } = s, l = Array.isArray(t) ? t : [t];
    s.update = function(c) {
      l.forEach((a) => {
        const h = a;
        if (c.has(h)) {
          const p = c.get(h), u = this[h];
          p !== u && (!o.waitUntilFirstUpdate || this.hasUpdated) && this[i](p, u);
        }
      }), r.call(this, c);
    };
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hi = (t, e) => e === void 0 ? (t == null ? void 0 : t._$litType$) !== void 0 : (t == null ? void 0 : t._$litType$) === e, ui = (t) => t.strings === void 0, pi = {}, fi = (t, e = pi) => t._$AH = e;
var Jt = Symbol(), fe = Symbol(), je, Ke = /* @__PURE__ */ new Map(), U = class extends V {
  constructor() {
    super(...arguments), this.initialRender = !1, this.svg = null, this.label = "", this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(t, e) {
    var o;
    let s;
    if (e != null && e.spriteSheet)
      return b`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;
    try {
      if (s = await fetch(t, { mode: "cors" }), !s.ok)
        return s.status === 410 ? Jt : fe;
    } catch {
      return fe;
    }
    try {
      const i = document.createElement("div");
      i.innerHTML = await s.text();
      const r = i.firstElementChild;
      if (((o = r == null ? void 0 : r.tagName) == null ? void 0 : o.toLowerCase()) !== "svg")
        return Jt;
      je || (je = new DOMParser());
      const c = je.parseFromString(r.outerHTML, "text/html").body.querySelector("svg");
      return c ? (c.part.add("svg"), document.adoptNode(c)) : Jt;
    } catch {
      return Jt;
    }
  }
  connectedCallback() {
    super.connectedCallback(), ai(this);
  }
  firstUpdated() {
    this.initialRender = !0, this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), ci(this);
  }
  getIconSource() {
    const t = Vo(this.library);
    return this.name && t ? {
      url: t.resolver(this.name),
      fromLibrary: !0
    } : {
      url: this.src,
      fromLibrary: !1
    };
  }
  handleLabelChange() {
    typeof this.label == "string" && this.label.length > 0 ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.label), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  async setIcon() {
    var t;
    const { url: e, fromLibrary: o } = this.getIconSource(), s = o ? Vo(this.library) : void 0;
    if (!e) {
      this.svg = null;
      return;
    }
    let i = Ke.get(e);
    if (i || (i = this.resolveIcon(e, s), Ke.set(e, i)), !this.initialRender)
      return;
    const r = await i;
    if (r === fe && Ke.delete(e), e === this.getIconSource().url) {
      if (hi(r)) {
        this.svg = r;
        return;
      }
      switch (r) {
        case fe:
        case Jt:
          this.svg = null, this.emit("sl-error");
          break;
        default:
          this.svg = r.cloneNode(!0), (t = s == null ? void 0 : s.mutator) == null || t.call(s, this.svg), this.emit("sl-load");
      }
    }
  }
  render() {
    return this.svg;
  }
};
U.styles = di;
n([
  S()
], U.prototype, "svg", 2);
n([
  d({ reflect: !0 })
], U.prototype, "name", 2);
n([
  d()
], U.prototype, "src", 2);
n([
  d()
], U.prototype, "label", 2);
n([
  d({ reflect: !0 })
], U.prototype, "library", 2);
n([
  E("label")
], U.prototype, "handleLabelChange", 1);
n([
  E(["name", "src", "library"])
], U.prototype, "setIcon", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Oe = (t) => (...e) => ({ _$litDirective$: t, values: e });
let Me = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, o, s) {
    this._$Ct = e, this._$AM = o, this._$Ci = s;
  }
  _$AS(e, o) {
    return this.update(e, o);
  }
  update(e, o) {
    return this.render(...o);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P = Oe(class extends Me {
  constructor(t) {
    var e;
    if (super(t), t.type !== vt.ATTRIBUTE || t.name !== "class" || ((e = t.strings) === null || e === void 0 ? void 0 : e.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return " " + Object.keys(t).filter((e) => t[e]).join(" ") + " ";
  }
  update(t, [e]) {
    var o, s;
    if (this.it === void 0) {
      this.it = /* @__PURE__ */ new Set(), t.strings !== void 0 && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in e)
        e[r] && !(!((o = this.nt) === null || o === void 0) && o.has(r)) && this.it.add(r);
      return this.render(e);
    }
    const i = t.element.classList;
    this.it.forEach((r) => {
      r in e || (i.remove(r), this.it.delete(r));
    });
    for (const r in e) {
      const l = !!e[r];
      l === this.it.has(r) || !((s = this.nt) === null || s === void 0) && s.has(r) || (l ? (i.add(r), this.it.add(r)) : (i.remove(r), this.it.delete(r)));
    }
    return Q;
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const hs = Symbol.for(""), gi = (t) => {
  if ((t == null ? void 0 : t.r) === hs)
    return t == null ? void 0 : t._$litStatic$;
}, Ce = (t, ...e) => ({ _$litStatic$: e.reduce((o, s, i) => o + ((r) => {
  if (r._$litStatic$ !== void 0)
    return r._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(s) + t[i + 1], t[0]), r: hs }), Po = /* @__PURE__ */ new Map(), mi = (t) => (e, ...o) => {
  const s = o.length;
  let i, r;
  const l = [], c = [];
  let a, h = 0, p = !1;
  for (; h < s; ) {
    for (a = e[h]; h < s && (r = o[h], (i = gi(r)) !== void 0); )
      a += i + e[++h], p = !0;
    h !== s && c.push(r), l.push(a), h++;
  }
  if (h === s && l.push(e[s]), p) {
    const u = l.join("$$lit$$");
    (e = Po.get(u)) === void 0 && (l.raw = l, Po.set(u, e = l)), o = c;
  }
  return t(e, ...o);
}, ye = mi(b);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w = (t) => t ?? D;
var C = class extends V {
  constructor() {
    super(...arguments), this.formControlController = new ce(this, {
      form: (t) => {
        if (t.hasAttribute("form")) {
          const e = t.getRootNode(), o = t.getAttribute("form");
          return e.getElementById(o);
        }
        return t.closest("form");
      },
      assumeInteractionOn: ["click"]
    }), this.hasSlotController = new Te(this, "[default]", "prefix", "suffix"), this.localize = new st(this), this.hasFocus = !1, this.invalid = !1, this.title = "", this.variant = "default", this.size = "medium", this.caret = !1, this.disabled = !1, this.loading = !1, this.outline = !1, this.pill = !1, this.circle = !1, this.type = "button", this.name = "", this.value = "", this.href = "", this.rel = "noreferrer noopener";
  }
  /** Gets the validity state object */
  get validity() {
    return this.isButton() ? this.button.validity : fo;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.isButton() ? this.button.validationMessage : "";
  }
  firstUpdated() {
    this.isButton() && this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleClick() {
    this.type === "submit" && this.formControlController.submit(this), this.type === "reset" && this.formControlController.reset(this);
  }
  handleInvalid(t) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(t);
  }
  isButton() {
    return !this.href;
  }
  isLink() {
    return !!this.href;
  }
  handleDisabledChange() {
    this.isButton() && this.formControlController.setValidity(this.disabled);
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(t) {
    this.button.focus(t);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.isButton() ? this.button.checkValidity() : !0;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.isButton() ? this.button.reportValidity() : !0;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(t) {
    this.isButton() && (this.button.setCustomValidity(t), this.formControlController.updateValidity());
  }
  render() {
    const t = this.isLink(), e = t ? Ce`a` : Ce`button`;
    return ye`
      <${e}
        part="base"
        class=${P({
      button: !0,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${w(t ? void 0 : this.disabled)}
        type=${w(t ? void 0 : this.type)}
        title=${this.title}
        name=${w(t ? void 0 : this.name)}
        value=${w(t ? void 0 : this.value)}
        href=${w(t ? this.href : void 0)}
        target=${w(t ? this.target : void 0)}
        download=${w(t ? this.download : void 0)}
        rel=${w(t ? this.rel : void 0)}
        role=${w(t ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? ye` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? ye`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${e}>
    `;
  }
};
C.styles = ei;
C.dependencies = {
  "sl-icon": U,
  "sl-spinner": po
};
n([
  $(".button")
], C.prototype, "button", 2);
n([
  S()
], C.prototype, "hasFocus", 2);
n([
  S()
], C.prototype, "invalid", 2);
n([
  d()
], C.prototype, "title", 2);
n([
  d({ reflect: !0 })
], C.prototype, "variant", 2);
n([
  d({ reflect: !0 })
], C.prototype, "size", 2);
n([
  d({ type: Boolean, reflect: !0 })
], C.prototype, "caret", 2);
n([
  d({ type: Boolean, reflect: !0 })
], C.prototype, "disabled", 2);
n([
  d({ type: Boolean, reflect: !0 })
], C.prototype, "loading", 2);
n([
  d({ type: Boolean, reflect: !0 })
], C.prototype, "outline", 2);
n([
  d({ type: Boolean, reflect: !0 })
], C.prototype, "pill", 2);
n([
  d({ type: Boolean, reflect: !0 })
], C.prototype, "circle", 2);
n([
  d()
], C.prototype, "type", 2);
n([
  d()
], C.prototype, "name", 2);
n([
  d()
], C.prototype, "value", 2);
n([
  d()
], C.prototype, "href", 2);
n([
  d()
], C.prototype, "target", 2);
n([
  d()
], C.prototype, "rel", 2);
n([
  d()
], C.prototype, "download", 2);
n([
  d()
], C.prototype, "form", 2);
n([
  d({ attribute: "formaction" })
], C.prototype, "formAction", 2);
n([
  d({ attribute: "formenctype" })
], C.prototype, "formEnctype", 2);
n([
  d({ attribute: "formmethod" })
], C.prototype, "formMethod", 2);
n([
  d({ attribute: "formnovalidate", type: Boolean })
], C.prototype, "formNoValidate", 2);
n([
  d({ attribute: "formtarget" })
], C.prototype, "formTarget", 2);
n([
  E("disabled", { waitUntilFirstUpdate: !0 })
], C.prototype, "handleDisabledChange", 1);
C.define("sl-button");
var bi = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (t, e) => `Go to slide ${t} of ${e}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (t) => t === 0 ? "No options selected" : t === 1 ? "1 option selected" : `${t} options selected`,
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (t) => `Slide ${t}`,
  toggleColorFormat: "Toggle color format"
};
js(bi);
var vi = R`
  ${H}

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
`, us = class extends V {
  render() {
    return b` <slot></slot> `;
  }
};
us.styles = vi;
function We(t, e) {
  function o(i) {
    const r = t.getBoundingClientRect(), l = t.ownerDocument.defaultView, c = r.left + l.pageXOffset, a = r.top + l.pageYOffset, h = i.pageX - c, p = i.pageY - a;
    e != null && e.onMove && e.onMove(h, p);
  }
  function s() {
    document.removeEventListener("pointermove", o), document.removeEventListener("pointerup", s), e != null && e.onStop && e.onStop();
  }
  document.addEventListener("pointermove", o, { passive: !0 }), document.addEventListener("pointerup", s), (e == null ? void 0 : e.initialEvent) instanceof PointerEvent && o(e.initialEvent);
}
var ps = R`
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
`, yi = R`
  ${H}
  ${ps}

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
`, Ie = (t = "value") => (e, o) => {
  const s = e.constructor, i = s.prototype.attributeChangedCallback;
  s.prototype.attributeChangedCallback = function(r, l, c) {
    var a;
    const h = s.getPropertyOptions(t), p = typeof h.attribute == "string" ? h.attribute : t;
    if (r === p) {
      const u = h.converter || oe, f = (typeof u == "function" ? u : (a = u == null ? void 0 : u.fromAttribute) != null ? a : oe.fromAttribute)(c, h.type);
      this[t] !== f && (this[o] = f);
    }
    i.call(this, r, l, c);
  };
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ae = Oe(class extends Me {
  constructor(t) {
    if (super(t), t.type !== vt.PROPERTY && t.type !== vt.ATTRIBUTE && t.type !== vt.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!ui(t))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(t) {
    return t;
  }
  update(t, [e]) {
    if (e === Q || e === D)
      return e;
    const o = t.element, s = t.name;
    if (t.type === vt.PROPERTY) {
      if (e === o[s])
        return Q;
    } else if (t.type === vt.BOOLEAN_ATTRIBUTE) {
      if (!!e === o.hasAttribute(s))
        return Q;
    } else if (t.type === vt.ATTRIBUTE && o.getAttribute(s) === e + "")
      return Q;
    return fi(t), e;
  }
});
var y = class extends V {
  constructor() {
    super(...arguments), this.formControlController = new ce(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    }), this.hasSlotController = new Te(this, "help-text", "label"), this.localize = new st(this), this.hasFocus = !1, this.title = "", this.__numberInput = Object.assign(document.createElement("input"), { type: "number" }), this.__dateInput = Object.assign(document.createElement("input"), { type: "date" }), this.type = "text", this.name = "", this.value = "", this.defaultValue = "", this.size = "medium", this.filled = !1, this.pill = !1, this.label = "", this.helpText = "", this.clearable = !1, this.disabled = !1, this.placeholder = "", this.readonly = !1, this.passwordToggle = !1, this.passwordVisible = !1, this.noSpinButtons = !1, this.form = "", this.required = !1, this.spellcheck = !0;
  }
  //
  // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
  // can be set before the component is rendered.
  //
  /**
   * Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.
   */
  get valueAsDate() {
    var t;
    return this.__dateInput.type = this.type, this.__dateInput.value = this.value, ((t = this.input) == null ? void 0 : t.valueAsDate) || this.__dateInput.valueAsDate;
  }
  set valueAsDate(t) {
    this.__dateInput.type = this.type, this.__dateInput.valueAsDate = t, this.value = this.__dateInput.value;
  }
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  get valueAsNumber() {
    var t;
    return this.__numberInput.value = this.value, ((t = this.input) == null ? void 0 : t.valueAsNumber) || this.__numberInput.valueAsNumber;
  }
  set valueAsNumber(t) {
    this.__numberInput.valueAsNumber = t, this.value = this.__numberInput.value;
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleChange() {
    this.value = this.input.value, this.emit("sl-change");
  }
  handleClearClick(t) {
    this.value = "", this.emit("sl-clear"), this.emit("sl-input"), this.emit("sl-change"), this.input.focus(), t.stopPropagation();
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleInput() {
    this.value = this.input.value, this.formControlController.updateValidity(), this.emit("sl-input");
  }
  handleInvalid(t) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(t);
  }
  handleKeyDown(t) {
    const e = t.metaKey || t.ctrlKey || t.shiftKey || t.altKey;
    t.key === "Enter" && !e && setTimeout(() => {
      !t.defaultPrevented && !t.isComposing && this.formControlController.submit();
    });
  }
  handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStepChange() {
    this.input.step = String(this.step), this.formControlController.updateValidity();
  }
  async handleValueChange() {
    await this.updateComplete, this.formControlController.updateValidity();
  }
  /** Sets focus on the input. */
  focus(t) {
    this.input.focus(t);
  }
  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(t, e, o = "none") {
    this.input.setSelectionRange(t, e, o);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(t, e, o, s) {
    this.input.setRangeText(t, e, o, s), this.value !== this.input.value && (this.value = this.input.value);
  }
  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    "showPicker" in HTMLInputElement.prototype && this.input.showPicker();
  }
  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    this.input.stepUp(), this.value !== this.input.value && (this.value = this.input.value);
  }
  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown(), this.value !== this.input.value && (this.value = this.input.value);
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(t) {
    this.input.setCustomValidity(t), this.formControlController.updateValidity();
  }
  render() {
    const t = this.hasSlotController.test("label"), e = this.hasSlotController.test("help-text"), o = this.label ? !0 : !!t, s = this.helpText ? !0 : !!e, i = this.clearable && !this.disabled && !this.readonly, r = i && (typeof this.value == "number" || this.value.length > 0);
    return b`
      <div
        part="form-control"
        class=${P({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": o,
      "form-control--has-help-text": s
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${P({
      input: !0,
      // Sizes
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      // States
      "input--pill": this.pill,
      "input--standard": !this.filled,
      "input--filled": this.filled,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": !this.value,
      "input--no-spin-buttons": this.noSpinButtons
    })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${w(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${w(this.placeholder)}
              minlength=${w(this.minlength)}
              maxlength=${w(this.maxlength)}
              min=${w(this.min)}
              max=${w(this.max)}
              step=${w(this.step)}
              .value=${Ae(this.value)}
              autocapitalize=${w(this.autocapitalize)}
              autocomplete=${w(this.autocomplete)}
              autocorrect=${w(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${w(this.pattern)}
              enterkeyhint=${w(this.enterkeyhint)}
              inputmode=${w(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i ? b`
                  <button
                    part="clear-button"
                    class=${P({
      input__clear: !0,
      "input__clear--visible": r
    })}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                ` : ""}
            ${this.passwordToggle && !this.disabled ? b`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible ? b`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        ` : b`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
y.styles = yi;
y.dependencies = { "sl-icon": U };
n([
  $(".input__control")
], y.prototype, "input", 2);
n([
  S()
], y.prototype, "hasFocus", 2);
n([
  d()
], y.prototype, "title", 2);
n([
  d({ reflect: !0 })
], y.prototype, "type", 2);
n([
  d()
], y.prototype, "name", 2);
n([
  d()
], y.prototype, "value", 2);
n([
  Ie()
], y.prototype, "defaultValue", 2);
n([
  d({ reflect: !0 })
], y.prototype, "size", 2);
n([
  d({ type: Boolean, reflect: !0 })
], y.prototype, "filled", 2);
n([
  d({ type: Boolean, reflect: !0 })
], y.prototype, "pill", 2);
n([
  d()
], y.prototype, "label", 2);
n([
  d({ attribute: "help-text" })
], y.prototype, "helpText", 2);
n([
  d({ type: Boolean })
], y.prototype, "clearable", 2);
n([
  d({ type: Boolean, reflect: !0 })
], y.prototype, "disabled", 2);
n([
  d()
], y.prototype, "placeholder", 2);
n([
  d({ type: Boolean, reflect: !0 })
], y.prototype, "readonly", 2);
n([
  d({ attribute: "password-toggle", type: Boolean })
], y.prototype, "passwordToggle", 2);
n([
  d({ attribute: "password-visible", type: Boolean })
], y.prototype, "passwordVisible", 2);
n([
  d({ attribute: "no-spin-buttons", type: Boolean })
], y.prototype, "noSpinButtons", 2);
n([
  d({ reflect: !0 })
], y.prototype, "form", 2);
n([
  d({ type: Boolean, reflect: !0 })
], y.prototype, "required", 2);
n([
  d()
], y.prototype, "pattern", 2);
n([
  d({ type: Number })
], y.prototype, "minlength", 2);
n([
  d({ type: Number })
], y.prototype, "maxlength", 2);
n([
  d()
], y.prototype, "min", 2);
n([
  d()
], y.prototype, "max", 2);
n([
  d()
], y.prototype, "step", 2);
n([
  d()
], y.prototype, "autocapitalize", 2);
n([
  d()
], y.prototype, "autocorrect", 2);
n([
  d()
], y.prototype, "autocomplete", 2);
n([
  d({ type: Boolean })
], y.prototype, "autofocus", 2);
n([
  d()
], y.prototype, "enterkeyhint", 2);
n([
  d({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (t) => !(!t || t === "false"),
      toAttribute: (t) => t ? "true" : "false"
    }
  })
], y.prototype, "spellcheck", 2);
n([
  d()
], y.prototype, "inputmode", 2);
n([
  E("disabled", { waitUntilFirstUpdate: !0 })
], y.prototype, "handleDisabledChange", 1);
n([
  E("step", { waitUntilFirstUpdate: !0 })
], y.prototype, "handleStepChange", 1);
n([
  E("value", { waitUntilFirstUpdate: !0 })
], y.prototype, "handleValueChange", 1);
var wi = R`
  ${H}

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
`;
function fs(t) {
  return _i(t);
}
function Ge(t) {
  return t.assignedSlot ? t.assignedSlot : t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
}
function _i(t) {
  for (let e = t; e; e = Ge(e))
    if (e instanceof Element && getComputedStyle(e).display === "none")
      return null;
  for (let e = Ge(t); e; e = Ge(e)) {
    if (!(e instanceof Element))
      continue;
    const o = getComputedStyle(e);
    if (o.display !== "contents" && (o.position !== "static" || o.filter !== "none" || e.tagName === "BODY"))
      return e;
  }
  return null;
}
function xi(t) {
  const e = t.tagName.toLowerCase();
  return t.getAttribute("tabindex") === "-1" || t.hasAttribute("disabled") || t.hasAttribute("aria-disabled") && t.getAttribute("aria-disabled") !== "false" || e === "input" && t.getAttribute("type") === "radio" && !t.hasAttribute("checked") || t.offsetParent === null && fs(t) === null || window.getComputedStyle(t).visibility === "hidden" ? !1 : (e === "audio" || e === "video") && t.hasAttribute("controls") || t.hasAttribute("tabindex") || t.hasAttribute("contenteditable") && t.getAttribute("contenteditable") !== "false" ? !0 : ["button", "input", "select", "textarea", "a", "audio", "video", "summary"].includes(e);
}
function ki(t) {
  var e, o;
  const s = we(t), i = (e = s[0]) != null ? e : null, r = (o = s[s.length - 1]) != null ? o : null;
  return { start: i, end: r };
}
function we(t) {
  const e = [];
  function o(s) {
    if (s instanceof Element) {
      if (s.hasAttribute("inert"))
        return;
      !e.includes(s) && xi(s) && e.push(s);
      const i = (r) => {
        var l;
        return ((l = r.getRootNode({ composed: !0 })) == null ? void 0 : l.host) !== t;
      };
      s instanceof HTMLSlotElement && i(s) && s.assignedElements({ flatten: !0 }).forEach((r) => {
        o(r);
      }), s.shadowRoot !== null && s.shadowRoot.mode === "open" && o(s.shadowRoot);
    }
    [...s.children].forEach((i) => o(i));
  }
  return o(t), e;
}
var $i = R`
  ${H}

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
`;
const $t = Math.min, J = Math.max, Se = Math.round, ge = Math.floor, Ct = (t) => ({
  x: t,
  y: t
}), Ci = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ai = {
  start: "end",
  end: "start"
};
function io(t, e, o) {
  return J(t, $t(e, o));
}
function qt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function At(t) {
  return t.split("-")[0];
}
function jt(t) {
  return t.split("-")[1];
}
function gs(t) {
  return t === "x" ? "y" : "x";
}
function go(t) {
  return t === "y" ? "height" : "width";
}
function de(t) {
  return ["top", "bottom"].includes(At(t)) ? "y" : "x";
}
function mo(t) {
  return gs(de(t));
}
function Si(t, e, o) {
  o === void 0 && (o = !1);
  const s = jt(t), i = mo(t), r = go(i);
  let l = i === "x" ? s === (o ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (l = Ee(l)), [l, Ee(l)];
}
function Ei(t) {
  const e = Ee(t);
  return [ro(t), e, ro(e)];
}
function ro(t) {
  return t.replace(/start|end/g, (e) => Ai[e]);
}
function zi(t, e, o) {
  const s = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return o ? e ? i : s : e ? s : i;
    case "left":
    case "right":
      return e ? r : l;
    default:
      return [];
  }
}
function Li(t, e, o, s) {
  const i = jt(t);
  let r = zi(At(t), o === "start", s);
  return i && (r = r.map((l) => l + "-" + i), e && (r = r.concat(r.map(ro)))), r;
}
function Ee(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ci[e]);
}
function Ti(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ms(t) {
  return typeof t != "number" ? Ti(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ze(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function Fo(t, e, o) {
  let {
    reference: s,
    floating: i
  } = t;
  const r = de(e), l = mo(e), c = go(l), a = At(e), h = r === "y", p = s.x + s.width / 2 - i.width / 2, u = s.y + s.height / 2 - i.height / 2, g = s[c] / 2 - i[c] / 2;
  let f;
  switch (a) {
    case "top":
      f = {
        x: p,
        y: s.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: p,
        y: s.y + s.height
      };
      break;
    case "right":
      f = {
        x: s.x + s.width,
        y: u
      };
      break;
    case "left":
      f = {
        x: s.x - i.width,
        y: u
      };
      break;
    default:
      f = {
        x: s.x,
        y: s.y
      };
  }
  switch (jt(e)) {
    case "start":
      f[l] -= g * (o && h ? -1 : 1);
      break;
    case "end":
      f[l] += g * (o && h ? -1 : 1);
      break;
  }
  return f;
}
const Oi = async (t, e, o) => {
  const {
    placement: s = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: l
  } = o, c = r.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let h = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: p,
    y: u
  } = Fo(h, s, a), g = s, f = {}, m = 0;
  for (let v = 0; v < c.length; v++) {
    const {
      name: A,
      fn: _
    } = c[v], {
      x: z,
      y: O,
      data: B,
      reset: M
    } = await _({
      x: p,
      y: u,
      initialPlacement: s,
      placement: g,
      strategy: i,
      middlewareData: f,
      rects: h,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (p = z ?? p, u = O ?? u, f = {
      ...f,
      [A]: {
        ...f[A],
        ...B
      }
    }, M && m <= 50) {
      m++, typeof M == "object" && (M.placement && (g = M.placement), M.rects && (h = M.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: i
      }) : M.rects), {
        x: p,
        y: u
      } = Fo(h, g, a)), v = -1;
      continue;
    }
  }
  return {
    x: p,
    y: u,
    placement: g,
    strategy: i,
    middlewareData: f
  };
};
async function bo(t, e) {
  var o;
  e === void 0 && (e = {});
  const {
    x: s,
    y: i,
    platform: r,
    rects: l,
    elements: c,
    strategy: a
  } = t, {
    boundary: h = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: u = "floating",
    altBoundary: g = !1,
    padding: f = 0
  } = qt(e, t), m = ms(f), A = c[g ? u === "floating" ? "reference" : "floating" : u], _ = ze(await r.getClippingRect({
    element: (o = await (r.isElement == null ? void 0 : r.isElement(A))) == null || o ? A : A.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: p,
    strategy: a
  })), z = u === "floating" ? {
    ...l.floating,
    x: s,
    y: i
  } : l.reference, O = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), B = await (r.isElement == null ? void 0 : r.isElement(O)) ? await (r.getScale == null ? void 0 : r.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, M = ze(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: z,
    offsetParent: O,
    strategy: a
  }) : z);
  return {
    top: (_.top - M.top + m.top) / B.y,
    bottom: (M.bottom - _.bottom + m.bottom) / B.y,
    left: (_.left - M.left + m.left) / B.x,
    right: (M.right - _.right + m.right) / B.x
  };
}
const Mi = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: o,
      y: s,
      placement: i,
      rects: r,
      platform: l,
      elements: c,
      middlewareData: a
    } = e, {
      element: h,
      padding: p = 0
    } = qt(t, e) || {};
    if (h == null)
      return {};
    const u = ms(p), g = {
      x: o,
      y: s
    }, f = mo(i), m = go(f), v = await l.getDimensions(h), A = f === "y", _ = A ? "top" : "left", z = A ? "bottom" : "right", O = A ? "clientHeight" : "clientWidth", B = r.reference[m] + r.reference[f] - g[f] - r.floating[m], M = g[f] - r.reference[f], F = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(h));
    let X = F ? F[O] : 0;
    (!X || !await (l.isElement == null ? void 0 : l.isElement(F))) && (X = c.floating[O] || r.floating[m]);
    const ct = B / 2 - M / 2, _t = X / 2 - v[m] / 2 - 1, Kt = $t(u[_], _t), Wt = $t(u[z], _t), et = Kt, Gt = X - v[m] - Wt, Y = X / 2 - v[m] / 2 + ct, dt = io(et, Y, Gt), ht = !a.arrow && jt(i) != null && Y != dt && r.reference[m] / 2 - (Y < et ? Kt : Wt) - v[m] / 2 < 0, mt = ht ? Y < et ? Y - et : Y - Gt : 0;
    return {
      [f]: g[f] + mt,
      data: {
        [f]: dt,
        centerOffset: Y - dt - mt,
        ...ht && {
          alignmentOffset: mt
        }
      },
      reset: ht
    };
  }
}), Ii = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var o, s;
      const {
        placement: i,
        middlewareData: r,
        rects: l,
        initialPlacement: c,
        platform: a,
        elements: h
      } = e, {
        mainAxis: p = !0,
        crossAxis: u = !0,
        fallbackPlacements: g,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = !0,
        ...A
      } = qt(t, e);
      if ((o = r.arrow) != null && o.alignmentOffset)
        return {};
      const _ = At(i), z = At(c) === c, O = await (a.isRTL == null ? void 0 : a.isRTL(h.floating)), B = g || (z || !v ? [Ee(c)] : Ei(c));
      !g && m !== "none" && B.push(...Li(c, v, m, O));
      const M = [c, ...B], F = await bo(e, A), X = [];
      let ct = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (p && X.push(F[_]), u) {
        const et = Si(i, l, O);
        X.push(F[et[0]], F[et[1]]);
      }
      if (ct = [...ct, {
        placement: i,
        overflows: X
      }], !X.every((et) => et <= 0)) {
        var _t, Kt;
        const et = (((_t = r.flip) == null ? void 0 : _t.index) || 0) + 1, Gt = M[et];
        if (Gt)
          return {
            data: {
              index: et,
              overflows: ct
            },
            reset: {
              placement: Gt
            }
          };
        let Y = (Kt = ct.filter((dt) => dt.overflows[0] <= 0).sort((dt, ht) => dt.overflows[1] - ht.overflows[1])[0]) == null ? void 0 : Kt.placement;
        if (!Y)
          switch (f) {
            case "bestFit": {
              var Wt;
              const dt = (Wt = ct.map((ht) => [ht.placement, ht.overflows.filter((mt) => mt > 0).reduce((mt, Es) => mt + Es, 0)]).sort((ht, mt) => ht[1] - mt[1])[0]) == null ? void 0 : Wt[0];
              dt && (Y = dt);
              break;
            }
            case "initialPlacement":
              Y = c;
              break;
          }
        if (i !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
async function Di(t, e) {
  const {
    placement: o,
    platform: s,
    elements: i
  } = t, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), l = At(o), c = jt(o), a = de(o) === "y", h = ["left", "top"].includes(l) ? -1 : 1, p = r && a ? -1 : 1, u = qt(e, t);
  let {
    mainAxis: g,
    crossAxis: f,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return c && typeof m == "number" && (f = c === "end" ? m * -1 : m), a ? {
    x: f * p,
    y: g * h
  } : {
    x: g * h,
    y: f * p
  };
}
const Vi = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: o,
        y: s
      } = e, i = await Di(e, t);
      return {
        x: o + i.x,
        y: s + i.y,
        data: i
      };
    }
  };
}, Pi = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: o,
        y: s,
        placement: i
      } = e, {
        mainAxis: r = !0,
        crossAxis: l = !1,
        limiter: c = {
          fn: (A) => {
            let {
              x: _,
              y: z
            } = A;
            return {
              x: _,
              y: z
            };
          }
        },
        ...a
      } = qt(t, e), h = {
        x: o,
        y: s
      }, p = await bo(e, a), u = de(At(i)), g = gs(u);
      let f = h[g], m = h[u];
      if (r) {
        const A = g === "y" ? "top" : "left", _ = g === "y" ? "bottom" : "right", z = f + p[A], O = f - p[_];
        f = io(z, f, O);
      }
      if (l) {
        const A = u === "y" ? "top" : "left", _ = u === "y" ? "bottom" : "right", z = m + p[A], O = m - p[_];
        m = io(z, m, O);
      }
      const v = c.fn({
        ...e,
        [g]: f,
        [u]: m
      });
      return {
        ...v,
        data: {
          x: v.x - o,
          y: v.y - s
        }
      };
    }
  };
}, Ro = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: r
      } = e, {
        apply: l = () => {
        },
        ...c
      } = qt(t, e), a = await bo(e, c), h = At(o), p = jt(o), u = de(o) === "y", {
        width: g,
        height: f
      } = s.floating;
      let m, v;
      h === "top" || h === "bottom" ? (m = h, v = p === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (v = h, m = p === "end" ? "top" : "bottom");
      const A = f - a[m], _ = g - a[v], z = !e.middlewareData.shift;
      let O = A, B = _;
      if (u) {
        const F = g - a.left - a.right;
        B = p || z ? $t(_, F) : F;
      } else {
        const F = f - a.top - a.bottom;
        O = p || z ? $t(A, F) : F;
      }
      if (z && !p) {
        const F = J(a.left, 0), X = J(a.right, 0), ct = J(a.top, 0), _t = J(a.bottom, 0);
        u ? B = g - 2 * (F !== 0 || X !== 0 ? F + X : J(a.left, a.right)) : O = f - 2 * (ct !== 0 || _t !== 0 ? ct + _t : J(a.top, a.bottom));
      }
      await l({
        ...e,
        availableWidth: B,
        availableHeight: O
      });
      const M = await i.getDimensions(r.floating);
      return g !== M.width || f !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function St(t) {
  return bs(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function tt(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function wt(t) {
  var e;
  return (e = (bs(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function bs(t) {
  return t instanceof Node || t instanceof tt(t).Node;
}
function yt(t) {
  return t instanceof Element || t instanceof tt(t).Element;
}
function ft(t) {
  return t instanceof HTMLElement || t instanceof tt(t).HTMLElement;
}
function Bo(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof tt(t).ShadowRoot;
}
function he(t) {
  const {
    overflow: e,
    overflowX: o,
    overflowY: s,
    display: i
  } = ot(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + o) && !["inline", "contents"].includes(i);
}
function Fi(t) {
  return ["table", "td", "th"].includes(St(t));
}
function vo(t) {
  const e = yo(), o = ot(t);
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !e && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !e && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (o.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (o.contain || "").includes(s));
}
function Ri(t) {
  let e = Nt(t);
  for (; ft(e) && !De(e); ) {
    if (vo(e))
      return e;
    e = Nt(e);
  }
  return null;
}
function yo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function De(t) {
  return ["html", "body", "#document"].includes(St(t));
}
function ot(t) {
  return tt(t).getComputedStyle(t);
}
function Ve(t) {
  return yt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Nt(t) {
  if (St(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Bo(t) && t.host || // Fallback.
    wt(t)
  );
  return Bo(e) ? e.host : e;
}
function vs(t) {
  const e = Nt(t);
  return De(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : ft(e) && he(e) ? e : vs(e);
}
function le(t, e, o) {
  var s;
  e === void 0 && (e = []), o === void 0 && (o = !0);
  const i = vs(t), r = i === ((s = t.ownerDocument) == null ? void 0 : s.body), l = tt(i);
  return r ? e.concat(l, l.visualViewport || [], he(i) ? i : [], l.frameElement && o ? le(l.frameElement) : []) : e.concat(i, le(i, [], o));
}
function ys(t) {
  const e = ot(t);
  let o = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const i = ft(t), r = i ? t.offsetWidth : o, l = i ? t.offsetHeight : s, c = Se(o) !== r || Se(s) !== l;
  return c && (o = r, s = l), {
    width: o,
    height: s,
    $: c
  };
}
function wo(t) {
  return yt(t) ? t : t.contextElement;
}
function Rt(t) {
  const e = wo(t);
  if (!ft(e))
    return Ct(1);
  const o = e.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = ys(e);
  let l = (r ? Se(o.width) : o.width) / s, c = (r ? Se(o.height) : o.height) / i;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
const Bi = /* @__PURE__ */ Ct(0);
function ws(t) {
  const e = tt(t);
  return !yo() || !e.visualViewport ? Bi : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Hi(t, e, o) {
  return e === void 0 && (e = !1), !o || e && o !== tt(t) ? !1 : e;
}
function It(t, e, o, s) {
  e === void 0 && (e = !1), o === void 0 && (o = !1);
  const i = t.getBoundingClientRect(), r = wo(t);
  let l = Ct(1);
  e && (s ? yt(s) && (l = Rt(s)) : l = Rt(t));
  const c = Hi(r, o, s) ? ws(r) : Ct(0);
  let a = (i.left + c.x) / l.x, h = (i.top + c.y) / l.y, p = i.width / l.x, u = i.height / l.y;
  if (r) {
    const g = tt(r), f = s && yt(s) ? tt(s) : s;
    let m = g.frameElement;
    for (; m && s && f !== g; ) {
      const v = Rt(m), A = m.getBoundingClientRect(), _ = ot(m), z = A.left + (m.clientLeft + parseFloat(_.paddingLeft)) * v.x, O = A.top + (m.clientTop + parseFloat(_.paddingTop)) * v.y;
      a *= v.x, h *= v.y, p *= v.x, u *= v.y, a += z, h += O, m = tt(m).frameElement;
    }
  }
  return ze({
    width: p,
    height: u,
    x: a,
    y: h
  });
}
function Ni(t) {
  let {
    rect: e,
    offsetParent: o,
    strategy: s
  } = t;
  const i = ft(o), r = wt(o);
  if (o === r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ct(1);
  const a = Ct(0);
  if ((i || !i && s !== "fixed") && ((St(o) !== "body" || he(r)) && (l = Ve(o)), ft(o))) {
    const h = It(o);
    c = Rt(o), a.x = h.x + o.clientLeft, a.y = h.y + o.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + a.x,
    y: e.y * c.y - l.scrollTop * c.y + a.y
  };
}
function Ui(t) {
  return Array.from(t.getClientRects());
}
function _s(t) {
  return It(wt(t)).left + Ve(t).scrollLeft;
}
function qi(t) {
  const e = wt(t), o = Ve(t), s = t.ownerDocument.body, i = J(e.scrollWidth, e.clientWidth, s.scrollWidth, s.clientWidth), r = J(e.scrollHeight, e.clientHeight, s.scrollHeight, s.clientHeight);
  let l = -o.scrollLeft + _s(t);
  const c = -o.scrollTop;
  return ot(s).direction === "rtl" && (l += J(e.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: l,
    y: c
  };
}
function ji(t, e) {
  const o = tt(t), s = wt(t), i = o.visualViewport;
  let r = s.clientWidth, l = s.clientHeight, c = 0, a = 0;
  if (i) {
    r = i.width, l = i.height;
    const h = yo();
    (!h || h && e === "fixed") && (c = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: c,
    y: a
  };
}
function Ki(t, e) {
  const o = It(t, !0, e === "fixed"), s = o.top + t.clientTop, i = o.left + t.clientLeft, r = ft(t) ? Rt(t) : Ct(1), l = t.clientWidth * r.x, c = t.clientHeight * r.y, a = i * r.x, h = s * r.y;
  return {
    width: l,
    height: c,
    x: a,
    y: h
  };
}
function Ho(t, e, o) {
  let s;
  if (e === "viewport")
    s = ji(t, o);
  else if (e === "document")
    s = qi(wt(t));
  else if (yt(e))
    s = Ki(e, o);
  else {
    const i = ws(t);
    s = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return ze(s);
}
function xs(t, e) {
  const o = Nt(t);
  return o === e || !yt(o) || De(o) ? !1 : ot(o).position === "fixed" || xs(o, e);
}
function Wi(t, e) {
  const o = e.get(t);
  if (o)
    return o;
  let s = le(t, [], !1).filter((c) => yt(c) && St(c) !== "body"), i = null;
  const r = ot(t).position === "fixed";
  let l = r ? Nt(t) : t;
  for (; yt(l) && !De(l); ) {
    const c = ot(l), a = vo(l);
    !a && c.position === "fixed" && (i = null), (r ? !a && !i : !a && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || he(l) && !a && xs(t, l)) ? s = s.filter((p) => p !== l) : i = c, l = Nt(l);
  }
  return e.set(t, s), s;
}
function Gi(t) {
  let {
    element: e,
    boundary: o,
    rootBoundary: s,
    strategy: i
  } = t;
  const l = [...o === "clippingAncestors" ? Wi(e, this._c) : [].concat(o), s], c = l[0], a = l.reduce((h, p) => {
    const u = Ho(e, p, i);
    return h.top = J(u.top, h.top), h.right = $t(u.right, h.right), h.bottom = $t(u.bottom, h.bottom), h.left = J(u.left, h.left), h;
  }, Ho(e, c, i));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Xi(t) {
  return ys(t);
}
function Yi(t, e, o) {
  const s = ft(e), i = wt(e), r = o === "fixed", l = It(t, !0, r, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Ct(0);
  if (s || !s && !r)
    if ((St(e) !== "body" || he(i)) && (c = Ve(e)), s) {
      const h = It(e, !0, r, e);
      a.x = h.x + e.clientLeft, a.y = h.y + e.clientTop;
    } else
      i && (a.x = _s(i));
  return {
    x: l.left + c.scrollLeft - a.x,
    y: l.top + c.scrollTop - a.y,
    width: l.width,
    height: l.height
  };
}
function No(t, e) {
  return !ft(t) || ot(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function ks(t, e) {
  const o = tt(t);
  if (!ft(t))
    return o;
  let s = No(t, e);
  for (; s && Fi(s) && ot(s).position === "static"; )
    s = No(s, e);
  return s && (St(s) === "html" || St(s) === "body" && ot(s).position === "static" && !vo(s)) ? o : s || Ri(t) || o;
}
const Zi = async function(t) {
  let {
    reference: e,
    floating: o,
    strategy: s
  } = t;
  const i = this.getOffsetParent || ks, r = this.getDimensions;
  return {
    reference: Yi(e, await i(o), s),
    floating: {
      x: 0,
      y: 0,
      ...await r(o)
    }
  };
};
function Ji(t) {
  return ot(t).direction === "rtl";
}
const _e = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ni,
  getDocumentElement: wt,
  getClippingRect: Gi,
  getOffsetParent: ks,
  getElementRects: Zi,
  getClientRects: Ui,
  getDimensions: Xi,
  getScale: Rt,
  isElement: yt,
  isRTL: Ji
};
function Qi(t, e) {
  let o = null, s;
  const i = wt(t);
  function r() {
    clearTimeout(s), o && o.disconnect(), o = null;
  }
  function l(c, a) {
    c === void 0 && (c = !1), a === void 0 && (a = 1), r();
    const {
      left: h,
      top: p,
      width: u,
      height: g
    } = t.getBoundingClientRect();
    if (c || e(), !u || !g)
      return;
    const f = ge(p), m = ge(i.clientWidth - (h + u)), v = ge(i.clientHeight - (p + g)), A = ge(h), z = {
      rootMargin: -f + "px " + -m + "px " + -v + "px " + -A + "px",
      threshold: J(0, $t(1, a)) || 1
    };
    let O = !0;
    function B(M) {
      const F = M[0].intersectionRatio;
      if (F !== a) {
        if (!O)
          return l();
        F ? l(!1, F) : s = setTimeout(() => {
          l(!1, 1e-7);
        }, 100);
      }
      O = !1;
    }
    try {
      o = new IntersectionObserver(B, {
        ...z,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(B, z);
    }
    o.observe(t);
  }
  return l(!0), r;
}
function tr(t, e, o, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = s, h = wo(t), p = i || r ? [...h ? le(h) : [], ...le(e)] : [];
  p.forEach((_) => {
    i && _.addEventListener("scroll", o, {
      passive: !0
    }), r && _.addEventListener("resize", o);
  });
  const u = h && c ? Qi(h, o) : null;
  let g = -1, f = null;
  l && (f = new ResizeObserver((_) => {
    let [z] = _;
    z && z.target === h && f && (f.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      f && f.observe(e);
    })), o();
  }), h && !a && f.observe(h), f.observe(e));
  let m, v = a ? It(t) : null;
  a && A();
  function A() {
    const _ = It(t);
    v && (_.x !== v.x || _.y !== v.y || _.width !== v.width || _.height !== v.height) && o(), v = _, m = requestAnimationFrame(A);
  }
  return o(), () => {
    p.forEach((_) => {
      i && _.removeEventListener("scroll", o), r && _.removeEventListener("resize", o);
    }), u && u(), f && f.disconnect(), f = null, a && cancelAnimationFrame(m);
  };
}
const er = (t, e, o) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: _e,
    ...o
  }, r = {
    ...i.platform,
    _c: s
  };
  return Oi(t, e, {
    ...i,
    platform: r
  });
};
function or(t) {
  return t !== null && typeof t == "object" && "getBoundingClientRect" in t;
}
var T = class extends V {
  constructor() {
    super(...arguments), this.active = !1, this.placement = "top", this.strategy = "absolute", this.distance = 0, this.skidding = 0, this.arrow = !1, this.arrowPlacement = "anchor", this.arrowPadding = 10, this.flip = !1, this.flipFallbackPlacements = "", this.flipFallbackStrategy = "best-fit", this.flipPadding = 0, this.shift = !1, this.shiftPadding = 0, this.autoSizePadding = 0;
  }
  async connectedCallback() {
    super.connectedCallback(), await this.updateComplete, this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stop();
  }
  async updated(t) {
    super.updated(t), t.has("active") && (this.active ? this.start() : this.stop()), t.has("anchor") && this.handleAnchorChange(), this.active && (await this.updateComplete, this.reposition());
  }
  async handleAnchorChange() {
    if (await this.stop(), this.anchor && typeof this.anchor == "string") {
      const t = this.getRootNode();
      this.anchorEl = t.getElementById(this.anchor);
    } else
      this.anchor instanceof Element || or(this.anchor) ? this.anchorEl = this.anchor : this.anchorEl = this.querySelector('[slot="anchor"]');
    this.anchorEl instanceof HTMLSlotElement && (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]), this.anchorEl && this.start();
  }
  start() {
    this.anchorEl && (this.cleanup = tr(this.anchorEl, this.popup, () => {
      this.reposition();
    }));
  }
  async stop() {
    return new Promise((t) => {
      this.cleanup ? (this.cleanup(), this.cleanup = void 0, this.removeAttribute("data-current-placement"), this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height"), requestAnimationFrame(() => t())) : t();
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl)
      return;
    const t = [
      // The offset middleware goes first
      Vi({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    this.sync ? t.push(
      Ro({
        apply: ({ rects: o }) => {
          const s = this.sync === "width" || this.sync === "both", i = this.sync === "height" || this.sync === "both";
          this.popup.style.width = s ? `${o.reference.width}px` : "", this.popup.style.height = i ? `${o.reference.height}px` : "";
        }
      })
    ) : (this.popup.style.width = "", this.popup.style.height = ""), this.flip && t.push(
      Ii({
        boundary: this.flipBoundary,
        // @ts-expect-error - We're converting a string attribute to an array here
        fallbackPlacements: this.flipFallbackPlacements,
        fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
        padding: this.flipPadding
      })
    ), this.shift && t.push(
      Pi({
        boundary: this.shiftBoundary,
        padding: this.shiftPadding
      })
    ), this.autoSize ? t.push(
      Ro({
        boundary: this.autoSizeBoundary,
        padding: this.autoSizePadding,
        apply: ({ availableWidth: o, availableHeight: s }) => {
          this.autoSize === "vertical" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-height", `${s}px`) : this.style.removeProperty("--auto-size-available-height"), this.autoSize === "horizontal" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-width", `${o}px`) : this.style.removeProperty("--auto-size-available-width");
        }
      })
    ) : (this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height")), this.arrow && t.push(
      Mi({
        element: this.arrowEl,
        padding: this.arrowPadding
      })
    );
    const e = this.strategy === "absolute" ? (o) => _e.getOffsetParent(o, fs) : _e.getOffsetParent;
    er(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: t,
      strategy: this.strategy,
      platform: ae(Et({}, _e), {
        getOffsetParent: e
      })
    }).then(({ x: o, y: s, middlewareData: i, placement: r }) => {
      const l = getComputedStyle(this).direction === "rtl", c = { top: "bottom", right: "left", bottom: "top", left: "right" }[r.split("-")[0]];
      if (this.setAttribute("data-current-placement", r), Object.assign(this.popup.style, {
        left: `${o}px`,
        top: `${s}px`
      }), this.arrow) {
        const a = i.arrow.x, h = i.arrow.y;
        let p = "", u = "", g = "", f = "";
        if (this.arrowPlacement === "start") {
          const m = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          p = typeof h == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "", u = l ? m : "", f = l ? "" : m;
        } else if (this.arrowPlacement === "end") {
          const m = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          u = l ? "" : m, f = l ? m : "", g = typeof h == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else
          this.arrowPlacement === "center" ? (f = typeof a == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "", p = typeof h == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "") : (f = typeof a == "number" ? `${a}px` : "", p = typeof h == "number" ? `${h}px` : "");
        Object.assign(this.arrowEl.style, {
          top: p,
          right: u,
          bottom: g,
          left: f,
          [c]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    }), this.emit("sl-reposition");
  }
  render() {
    return b`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${P({
      popup: !0,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? b`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
T.styles = $i;
n([
  $(".popup")
], T.prototype, "popup", 2);
n([
  $(".popup__arrow")
], T.prototype, "arrowEl", 2);
n([
  d()
], T.prototype, "anchor", 2);
n([
  d({ type: Boolean, reflect: !0 })
], T.prototype, "active", 2);
n([
  d({ reflect: !0 })
], T.prototype, "placement", 2);
n([
  d({ reflect: !0 })
], T.prototype, "strategy", 2);
n([
  d({ type: Number })
], T.prototype, "distance", 2);
n([
  d({ type: Number })
], T.prototype, "skidding", 2);
n([
  d({ type: Boolean })
], T.prototype, "arrow", 2);
n([
  d({ attribute: "arrow-placement" })
], T.prototype, "arrowPlacement", 2);
n([
  d({ attribute: "arrow-padding", type: Number })
], T.prototype, "arrowPadding", 2);
n([
  d({ type: Boolean })
], T.prototype, "flip", 2);
n([
  d({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (t) => t.split(" ").map((e) => e.trim()).filter((e) => e !== ""),
      toAttribute: (t) => t.join(" ")
    }
  })
], T.prototype, "flipFallbackPlacements", 2);
n([
  d({ attribute: "flip-fallback-strategy" })
], T.prototype, "flipFallbackStrategy", 2);
n([
  d({ type: Object })
], T.prototype, "flipBoundary", 2);
n([
  d({ attribute: "flip-padding", type: Number })
], T.prototype, "flipPadding", 2);
n([
  d({ type: Boolean })
], T.prototype, "shift", 2);
n([
  d({ type: Object })
], T.prototype, "shiftBoundary", 2);
n([
  d({ attribute: "shift-padding", type: Number })
], T.prototype, "shiftPadding", 2);
n([
  d({ attribute: "auto-size" })
], T.prototype, "autoSize", 2);
n([
  d()
], T.prototype, "sync", 2);
n([
  d({ type: Object })
], T.prototype, "autoSizeBoundary", 2);
n([
  d({ attribute: "auto-size-padding", type: Number })
], T.prototype, "autoSizePadding", 2);
var $s = /* @__PURE__ */ new Map(), sr = /* @__PURE__ */ new WeakMap();
function ir(t) {
  return t ?? { keyframes: [], options: { duration: 0 } };
}
function Uo(t, e) {
  return e.toLowerCase() === "rtl" ? {
    keyframes: t.rtlKeyframes || t.keyframes,
    options: t.options
  } : t;
}
function at(t, e) {
  $s.set(t, ir(e));
}
function lt(t, e, o) {
  const s = sr.get(t);
  if (s != null && s[e])
    return Uo(s[e], o.dir);
  const i = $s.get(e);
  return i ? Uo(i, o.dir) : {
    keyframes: [],
    options: { duration: 0 }
  };
}
function Ut(t, e) {
  return new Promise((o) => {
    function s(i) {
      i.target === t && (t.removeEventListener(e, s), o());
    }
    t.addEventListener(e, s);
  });
}
function nt(t, e, o) {
  return new Promise((s) => {
    if ((o == null ? void 0 : o.duration) === 1 / 0)
      throw new Error("Promise-based animations must be finite.");
    const i = t.animate(e, ae(Et({}, o), {
      duration: rr() ? 0 : o.duration
    }));
    i.addEventListener("cancel", s, { once: !0 }), i.addEventListener("finish", s, { once: !0 });
  });
}
function rr() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function pt(t) {
  return Promise.all(
    t.getAnimations().map((e) => new Promise((o) => {
      const s = requestAnimationFrame(o);
      e.addEventListener("cancel", () => s, { once: !0 }), e.addEventListener("finish", () => s, { once: !0 }), e.cancel();
    }))
  );
}
function qo(t, e) {
  return t.map((o) => ae(Et({}, o), {
    height: o.height === "auto" ? `${e}px` : o.height
  }));
}
var K = class extends V {
  constructor() {
    super(...arguments), this.localize = new st(this), this.open = !1, this.placement = "bottom-start", this.disabled = !1, this.stayOpenOnSelect = !1, this.distance = 0, this.skidding = 0, this.hoist = !1, this.handleKeyDown = (t) => {
      this.open && t.key === "Escape" && (t.stopPropagation(), this.hide(), this.focusOnTrigger());
    }, this.handleDocumentKeyDown = (t) => {
      var e;
      if (t.key === "Escape" && this.open) {
        t.stopPropagation(), this.focusOnTrigger(), this.hide();
        return;
      }
      if (t.key === "Tab") {
        if (this.open && ((e = document.activeElement) == null ? void 0 : e.tagName.toLowerCase()) === "sl-menu-item") {
          t.preventDefault(), this.hide(), this.focusOnTrigger();
          return;
        }
        setTimeout(() => {
          var o, s, i;
          const r = ((o = this.containingElement) == null ? void 0 : o.getRootNode()) instanceof ShadowRoot ? (i = (s = document.activeElement) == null ? void 0 : s.shadowRoot) == null ? void 0 : i.activeElement : document.activeElement;
          (!this.containingElement || (r == null ? void 0 : r.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) && this.hide();
        });
      }
    }, this.handleDocumentMouseDown = (t) => {
      const e = t.composedPath();
      this.containingElement && !e.includes(this.containingElement) && this.hide();
    }, this.handlePanelSelect = (t) => {
      const e = t.target;
      !this.stayOpenOnSelect && e.tagName.toLowerCase() === "sl-menu" && (this.hide(), this.focusOnTrigger());
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.containingElement || (this.containingElement = this);
  }
  firstUpdated() {
    this.panel.hidden = !this.open, this.open && (this.addOpenListeners(), this.popup.active = !0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeOpenListeners(), this.hide();
  }
  focusOnTrigger() {
    const t = this.trigger.assignedElements({ flatten: !0 })[0];
    typeof (t == null ? void 0 : t.focus) == "function" && t.focus();
  }
  getMenu() {
    return this.panel.assignedElements({ flatten: !0 }).find((t) => t.tagName.toLowerCase() === "sl-menu");
  }
  handleTriggerClick() {
    this.open ? this.hide() : (this.show(), this.focusOnTrigger());
  }
  async handleTriggerKeyDown(t) {
    if ([" ", "Enter"].includes(t.key)) {
      t.preventDefault(), this.handleTriggerClick();
      return;
    }
    const e = this.getMenu();
    if (e) {
      const o = e.getAllItems(), s = o[0], i = o[o.length - 1];
      ["ArrowDown", "ArrowUp", "Home", "End"].includes(t.key) && (t.preventDefault(), this.open || (this.show(), await this.updateComplete), o.length > 0 && this.updateComplete.then(() => {
        (t.key === "ArrowDown" || t.key === "Home") && (e.setCurrentItem(s), s.focus()), (t.key === "ArrowUp" || t.key === "End") && (e.setCurrentItem(i), i.focus());
      }));
    }
  }
  handleTriggerKeyUp(t) {
    t.key === " " && t.preventDefault();
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }
  //
  // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  updateAccessibleTrigger() {
    const e = this.trigger.assignedElements({ flatten: !0 }).find((s) => ki(s).start);
    let o;
    if (e) {
      switch (e.tagName.toLowerCase()) {
        case "sl-button":
        case "sl-icon-button":
          o = e.button;
          break;
        default:
          o = e;
      }
      o.setAttribute("aria-haspopup", "true"), o.setAttribute("aria-expanded", this.open ? "true" : "false");
    }
  }
  /** Shows the dropdown panel. */
  async show() {
    if (!this.open)
      return this.open = !0, Ut(this, "sl-after-show");
  }
  /** Hides the dropdown panel */
  async hide() {
    if (this.open)
      return this.open = !1, Ut(this, "sl-after-hide");
  }
  /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */
  reposition() {
    this.popup.reposition();
  }
  addOpenListeners() {
    this.panel.addEventListener("sl-select", this.handlePanelSelect), this.panel.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keydown", this.handleDocumentKeyDown), document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    this.panel && (this.panel.removeEventListener("sl-select", this.handlePanelSelect), this.panel.removeEventListener("keydown", this.handleKeyDown)), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("mousedown", this.handleDocumentMouseDown);
  }
  async handleOpenChange() {
    if (this.disabled) {
      this.open = !1;
      return;
    }
    if (this.updateAccessibleTrigger(), this.open) {
      this.emit("sl-show"), this.addOpenListeners(), await pt(this), this.panel.hidden = !1, this.popup.active = !0;
      const { keyframes: t, options: e } = lt(this, "dropdown.show", { dir: this.localize.dir() });
      await nt(this.popup.popup, t, e), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), await pt(this);
      const { keyframes: t, options: e } = lt(this, "dropdown.hide", { dir: this.localize.dir() });
      await nt(this.popup.popup, t, e), this.panel.hidden = !0, this.popup.active = !1, this.emit("sl-after-hide");
    }
  }
  render() {
    return b`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${P({
      dropdown: !0,
      "dropdown--open": this.open
    })}
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

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `;
  }
};
K.styles = wi;
K.dependencies = { "sl-popup": T };
n([
  $(".dropdown")
], K.prototype, "popup", 2);
n([
  $(".dropdown__trigger")
], K.prototype, "trigger", 2);
n([
  $(".dropdown__panel")
], K.prototype, "panel", 2);
n([
  d({ type: Boolean, reflect: !0 })
], K.prototype, "open", 2);
n([
  d({ reflect: !0 })
], K.prototype, "placement", 2);
n([
  d({ type: Boolean, reflect: !0 })
], K.prototype, "disabled", 2);
n([
  d({ attribute: "stay-open-on-select", type: Boolean, reflect: !0 })
], K.prototype, "stayOpenOnSelect", 2);
n([
  d({ attribute: !1 })
], K.prototype, "containingElement", 2);
n([
  d({ type: Number })
], K.prototype, "distance", 2);
n([
  d({ type: Number })
], K.prototype, "skidding", 2);
n([
  d({ type: Boolean })
], K.prototype, "hoist", 2);
n([
  E("open", { waitUntilFirstUpdate: !0 })
], K.prototype, "handleOpenChange", 1);
at("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
at("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
var lr = R`
  ${H}

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
`;
function G(t, e, o) {
  const s = (i) => Object.is(i, -0) ? 0 : i;
  return t < e ? s(e) : t > o ? s(o) : s(t);
}
var nr = R`
  ${H}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`, ue = class extends V {
  constructor() {
    super(...arguments), this.disableRole = !1, this.label = "";
  }
  handleFocus(t) {
    const e = Qt(t.target);
    e == null || e.classList.add("sl-button-group__button--focus");
  }
  handleBlur(t) {
    const e = Qt(t.target);
    e == null || e.classList.remove("sl-button-group__button--focus");
  }
  handleMouseOver(t) {
    const e = Qt(t.target);
    e == null || e.classList.add("sl-button-group__button--hover");
  }
  handleMouseOut(t) {
    const e = Qt(t.target);
    e == null || e.classList.remove("sl-button-group__button--hover");
  }
  handleSlotChange() {
    const t = [...this.defaultSlot.assignedElements({ flatten: !0 })];
    t.forEach((e) => {
      const o = t.indexOf(e), s = Qt(e);
      s && (s.classList.add("sl-button-group__button"), s.classList.toggle("sl-button-group__button--first", o === 0), s.classList.toggle("sl-button-group__button--inner", o > 0 && o < t.length - 1), s.classList.toggle("sl-button-group__button--last", o === t.length - 1), s.classList.toggle("sl-button-group__button--radio", s.tagName.toLowerCase() === "sl-radio-button"));
    });
  }
  render() {
    return b`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
ue.styles = nr;
n([
  $("slot")
], ue.prototype, "defaultSlot", 2);
n([
  S()
], ue.prototype, "disableRole", 2);
n([
  d()
], ue.prototype, "label", 2);
function Qt(t) {
  var e;
  const o = "sl-button, sl-radio-button";
  return (e = t.closest(o)) != null ? e : t.querySelector(o);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Cs = "important", ar = " !" + Cs, ut = Oe(class extends Me {
  constructor(t) {
    var e;
    if (super(t), t.type !== vt.ATTRIBUTE || t.name !== "style" || ((e = t.strings) === null || e === void 0 ? void 0 : e.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return Object.keys(t).reduce((e, o) => {
      const s = t[o];
      return s == null ? e : e + `${o = o.includes("-") ? o : o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
    }, "");
  }
  update(t, [e]) {
    const { style: o } = t.element;
    if (this.ht === void 0) {
      this.ht = /* @__PURE__ */ new Set();
      for (const s in e)
        this.ht.add(s);
      return this.render(e);
    }
    this.ht.forEach((s) => {
      e[s] == null && (this.ht.delete(s), s.includes("-") ? o.removeProperty(s) : o[s] = "");
    });
    for (const s in e) {
      const i = e[s];
      if (i != null) {
        this.ht.add(s);
        const r = typeof i == "string" && i.endsWith(ar);
        s.includes("-") || r ? o.setProperty(s, r ? i.slice(0, -11) : i, r ? Cs : "") : o[s] = i;
      }
    }
    return Q;
  }
});
function N(t, e) {
  cr(t) && (t = "100%");
  const o = dr(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), o && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function me(t) {
  return Math.min(1, Math.max(0, t));
}
function cr(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function dr(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function As(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function be(t) {
  return Number(t) <= 1 ? `${Number(t) * 100}%` : t;
}
function Ot(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function hr(t, e, o) {
  return {
    r: N(t, 255) * 255,
    g: N(e, 255) * 255,
    b: N(o, 255) * 255
  };
}
function jo(t, e, o) {
  t = N(t, 255), e = N(e, 255), o = N(o, 255);
  const s = Math.max(t, e, o), i = Math.min(t, e, o);
  let r = 0, l = 0;
  const c = (s + i) / 2;
  if (s === i)
    l = 0, r = 0;
  else {
    const a = s - i;
    switch (l = c > 0.5 ? a / (2 - s - i) : a / (s + i), s) {
      case t:
        r = (e - o) / a + (e < o ? 6 : 0);
        break;
      case e:
        r = (o - t) / a + 2;
        break;
      case o:
        r = (t - e) / a + 4;
        break;
    }
    r /= 6;
  }
  return { h: r, s: l, l: c };
}
function Xe(t, e, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? t + (e - t) * (6 * o) : o < 1 / 2 ? e : o < 2 / 3 ? t + (e - t) * (2 / 3 - o) * 6 : t;
}
function ur(t, e, o) {
  let s, i, r;
  if (t = N(t, 360), e = N(e, 100), o = N(o, 100), e === 0)
    i = o, r = o, s = o;
  else {
    const l = o < 0.5 ? o * (1 + e) : o + e - o * e, c = 2 * o - l;
    s = Xe(c, l, t + 1 / 3), i = Xe(c, l, t), r = Xe(c, l, t - 1 / 3);
  }
  return { r: s * 255, g: i * 255, b: r * 255 };
}
function Ko(t, e, o) {
  t = N(t, 255), e = N(e, 255), o = N(o, 255);
  const s = Math.max(t, e, o), i = Math.min(t, e, o);
  let r = 0;
  const l = s, c = s - i, a = s === 0 ? 0 : c / s;
  if (s === i)
    r = 0;
  else {
    switch (s) {
      case t:
        r = (e - o) / c + (e < o ? 6 : 0);
        break;
      case e:
        r = (o - t) / c + 2;
        break;
      case o:
        r = (t - e) / c + 4;
        break;
    }
    r /= 6;
  }
  return { h: r, s: a, v: l };
}
function pr(t, e, o) {
  t = N(t, 360) * 6, e = N(e, 100), o = N(o, 100);
  const s = Math.floor(t), i = t - s, r = o * (1 - e), l = o * (1 - i * e), c = o * (1 - (1 - i) * e), a = s % 6, h = [o, l, r, r, c, o][a], p = [c, o, o, l, r, r][a], u = [r, r, c, o, o, l][a];
  return { r: h * 255, g: p * 255, b: u * 255 };
}
function Wo(t, e, o, s) {
  const i = [
    Ot(Math.round(t).toString(16)),
    Ot(Math.round(e).toString(16)),
    Ot(Math.round(o).toString(16))
  ];
  return s && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function fr(t, e, o, s, i) {
  const r = [
    Ot(Math.round(t).toString(16)),
    Ot(Math.round(e).toString(16)),
    Ot(Math.round(o).toString(16)),
    Ot(gr(s))
  ];
  return i && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) && r[3].startsWith(r[3].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) + r[3].charAt(0) : r.join("");
}
function gr(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function Go(t) {
  return Z(t) / 255;
}
function Z(t) {
  return parseInt(t, 16);
}
function mr(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
const lo = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function br(t) {
  let e = { r: 0, g: 0, b: 0 }, o = 1, s = null, i = null, r = null, l = !1, c = !1;
  return typeof t == "string" && (t = wr(t)), typeof t == "object" && (bt(t.r) && bt(t.g) && bt(t.b) ? (e = hr(t.r, t.g, t.b), l = !0, c = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : bt(t.h) && bt(t.s) && bt(t.v) ? (s = be(t.s), i = be(t.v), e = pr(t.h, s, i), l = !0, c = "hsv") : bt(t.h) && bt(t.s) && bt(t.l) && (s = be(t.s), r = be(t.l), e = ur(t.h, s, r), l = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (o = t.a)), o = As(o), {
    ok: l,
    format: t.format || c,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: o
  };
}
const vr = "[-\\+]?\\d+%?", yr = "[-\\+]?\\d*\\.\\d+%?", kt = `(?:${yr})|(?:${vr})`, Ye = `[\\s|\\(]+(${kt})[,|\\s]+(${kt})[,|\\s]+(${kt})\\s*\\)?`, Ze = `[\\s|\\(]+(${kt})[,|\\s]+(${kt})[,|\\s]+(${kt})[,|\\s]+(${kt})\\s*\\)?`, rt = {
  CSS_UNIT: new RegExp(kt),
  rgb: new RegExp("rgb" + Ye),
  rgba: new RegExp("rgba" + Ze),
  hsl: new RegExp("hsl" + Ye),
  hsla: new RegExp("hsla" + Ze),
  hsv: new RegExp("hsv" + Ye),
  hsva: new RegExp("hsva" + Ze),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function wr(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  let e = !1;
  if (lo[t])
    t = lo[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let o = rt.rgb.exec(t);
  return o ? { r: o[1], g: o[2], b: o[3] } : (o = rt.rgba.exec(t), o ? { r: o[1], g: o[2], b: o[3], a: o[4] } : (o = rt.hsl.exec(t), o ? { h: o[1], s: o[2], l: o[3] } : (o = rt.hsla.exec(t), o ? { h: o[1], s: o[2], l: o[3], a: o[4] } : (o = rt.hsv.exec(t), o ? { h: o[1], s: o[2], v: o[3] } : (o = rt.hsva.exec(t), o ? { h: o[1], s: o[2], v: o[3], a: o[4] } : (o = rt.hex8.exec(t), o ? {
    r: Z(o[1]),
    g: Z(o[2]),
    b: Z(o[3]),
    a: Go(o[4]),
    format: e ? "name" : "hex8"
  } : (o = rt.hex6.exec(t), o ? {
    r: Z(o[1]),
    g: Z(o[2]),
    b: Z(o[3]),
    format: e ? "name" : "hex"
  } : (o = rt.hex4.exec(t), o ? {
    r: Z(o[1] + o[1]),
    g: Z(o[2] + o[2]),
    b: Z(o[3] + o[3]),
    a: Go(o[4] + o[4]),
    format: e ? "name" : "hex8"
  } : (o = rt.hex3.exec(t), o ? {
    r: Z(o[1] + o[1]),
    g: Z(o[2] + o[2]),
    b: Z(o[3] + o[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function bt(t) {
  return !!rt.CSS_UNIT.exec(String(t));
}
class I {
  constructor(e = "", o = {}) {
    if (e instanceof I)
      return e;
    typeof e == "number" && (e = mr(e)), this.originalInput = e;
    const s = br(e);
    this.originalInput = e, this.r = s.r, this.g = s.g, this.b = s.b, this.a = s.a, this.roundA = Math.round(100 * this.a) / 100, this.format = o.format ?? s.format, this.gradientType = o.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = s.ok;
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return !this.isDark();
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */
  getBrightness() {
    const e = this.toRgb();
    return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
  }
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */
  getLuminance() {
    const e = this.toRgb();
    let o, s, i;
    const r = e.r / 255, l = e.g / 255, c = e.b / 255;
    return r <= 0.03928 ? o = r / 12.92 : o = Math.pow((r + 0.055) / 1.055, 2.4), l <= 0.03928 ? s = l / 12.92 : s = Math.pow((l + 0.055) / 1.055, 2.4), c <= 0.03928 ? i = c / 12.92 : i = Math.pow((c + 0.055) / 1.055, 2.4), 0.2126 * o + 0.7152 * s + 0.0722 * i;
  }
  /**
   * Returns the alpha value of a color, from 0-1.
   */
  getAlpha() {
    return this.a;
  }
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  setAlpha(e) {
    return this.a = As(e), this.roundA = Math.round(100 * this.a) / 100, this;
  }
  /**
   * Returns whether the color is monochrome.
   */
  isMonochrome() {
    const { s: e } = this.toHsl();
    return e === 0;
  }
  /**
   * Returns the object as a HSVA object.
   */
  toHsv() {
    const e = Ko(this.r, this.g, this.b);
    return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
  }
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  toHsvString() {
    const e = Ko(this.r, this.g, this.b), o = Math.round(e.h * 360), s = Math.round(e.s * 100), i = Math.round(e.v * 100);
    return this.a === 1 ? `hsv(${o}, ${s}%, ${i}%)` : `hsva(${o}, ${s}%, ${i}%, ${this.roundA})`;
  }
  /**
   * Returns the object as a HSLA object.
   */
  toHsl() {
    const e = jo(this.r, this.g, this.b);
    return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
  }
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  toHslString() {
    const e = jo(this.r, this.g, this.b), o = Math.round(e.h * 360), s = Math.round(e.s * 100), i = Math.round(e.l * 100);
    return this.a === 1 ? `hsl(${o}, ${s}%, ${i}%)` : `hsla(${o}, ${s}%, ${i}%, ${this.roundA})`;
  }
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHex(e = !1) {
    return Wo(this.r, this.g, this.b, e);
  }
  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHexString(e = !1) {
    return "#" + this.toHex(e);
  }
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8(e = !1) {
    return fr(this.r, this.g, this.b, this.a, e);
  }
  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8String(e = !1) {
    return "#" + this.toHex8(e);
  }
  /**
   * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
   * @param allowShortChar will shorten hex value to 3 or 4 char if possible
   */
  toHexShortString(e = !1) {
    return this.a === 1 ? this.toHexString(e) : this.toHex8String(e);
  }
  /**
   * Returns the object as a RGBA object.
   */
  toRgb() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  toRgbString() {
    const e = Math.round(this.r), o = Math.round(this.g), s = Math.round(this.b);
    return this.a === 1 ? `rgb(${e}, ${o}, ${s})` : `rgba(${e}, ${o}, ${s}, ${this.roundA})`;
  }
  /**
   * Returns the object as a RGBA object.
   */
  toPercentageRgb() {
    const e = (o) => `${Math.round(N(o, 255) * 100)}%`;
    return {
      r: e(this.r),
      g: e(this.g),
      b: e(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA relative values interpolated into a string
   */
  toPercentageRgbString() {
    const e = (o) => Math.round(N(o, 255) * 100);
    return this.a === 1 ? `rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)` : `rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`;
  }
  /**
   * The 'real' name of the color -if there is one.
   */
  toName() {
    if (this.a === 0)
      return "transparent";
    if (this.a < 1)
      return !1;
    const e = "#" + Wo(this.r, this.g, this.b, !1);
    for (const [o, s] of Object.entries(lo))
      if (e === s)
        return o;
    return !1;
  }
  toString(e) {
    const o = !!e;
    e = e ?? this.format;
    let s = !1;
    const i = this.a < 1 && this.a >= 0;
    return !o && i && (e.startsWith("hex") || e === "name") ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (s = this.toRgbString()), e === "prgb" && (s = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (s = this.toHexString()), e === "hex3" && (s = this.toHexString(!0)), e === "hex4" && (s = this.toHex8String(!0)), e === "hex8" && (s = this.toHex8String()), e === "name" && (s = this.toName()), e === "hsl" && (s = this.toHslString()), e === "hsv" && (s = this.toHsvString()), s || this.toHexString());
  }
  toNumber() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }
  clone() {
    return new I(this.toString());
  }
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  lighten(e = 10) {
    const o = this.toHsl();
    return o.l += e / 100, o.l = me(o.l), new I(o);
  }
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  brighten(e = 10) {
    const o = this.toRgb();
    return o.r = Math.max(0, Math.min(255, o.r - Math.round(255 * -(e / 100)))), o.g = Math.max(0, Math.min(255, o.g - Math.round(255 * -(e / 100)))), o.b = Math.max(0, Math.min(255, o.b - Math.round(255 * -(e / 100)))), new I(o);
  }
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  darken(e = 10) {
    const o = this.toHsl();
    return o.l -= e / 100, o.l = me(o.l), new I(o);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  tint(e = 10) {
    return this.mix("white", e);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  shade(e = 10) {
    return this.mix("black", e);
  }
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */
  desaturate(e = 10) {
    const o = this.toHsl();
    return o.s -= e / 100, o.s = me(o.s), new I(o);
  }
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  saturate(e = 10) {
    const o = this.toHsl();
    return o.s += e / 100, o.s = me(o.s), new I(o);
  }
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */
  greyscale() {
    return this.desaturate(100);
  }
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  spin(e) {
    const o = this.toHsl(), s = (o.h + e) % 360;
    return o.h = s < 0 ? 360 + s : s, new I(o);
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(e, o = 50) {
    const s = this.toRgb(), i = new I(e).toRgb(), r = o / 100, l = {
      r: (i.r - s.r) * r + s.r,
      g: (i.g - s.g) * r + s.g,
      b: (i.b - s.b) * r + s.b,
      a: (i.a - s.a) * r + s.a
    };
    return new I(l);
  }
  analogous(e = 6, o = 30) {
    const s = this.toHsl(), i = 360 / o, r = [this];
    for (s.h = (s.h - (i * e >> 1) + 720) % 360; --e; )
      s.h = (s.h + i) % 360, r.push(new I(s));
    return r;
  }
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  complement() {
    const e = this.toHsl();
    return e.h = (e.h + 180) % 360, new I(e);
  }
  monochromatic(e = 6) {
    const o = this.toHsv(), { h: s } = o, { s: i } = o;
    let { v: r } = o;
    const l = [], c = 1 / e;
    for (; e--; )
      l.push(new I({ h: s, s: i, v: r })), r = (r + c) % 1;
    return l;
  }
  splitcomplement() {
    const e = this.toHsl(), { h: o } = e;
    return [
      this,
      new I({ h: (o + 72) % 360, s: e.s, l: e.l }),
      new I({ h: (o + 216) % 360, s: e.s, l: e.l })
    ];
  }
  /**
   * Compute how the color would appear on a background
   */
  onBackground(e) {
    const o = this.toRgb(), s = new I(e).toRgb(), i = o.a + s.a * (1 - o.a);
    return new I({
      r: (o.r * o.a + s.r * s.a * (1 - o.a)) / i,
      g: (o.g * o.a + s.g * s.a * (1 - o.a)) / i,
      b: (o.b * o.a + s.b * s.a * (1 - o.a)) / i,
      a: i
    });
  }
  /**
   * Alias for `polyad(3)`
   */
  triad() {
    return this.polyad(3);
  }
  /**
   * Alias for `polyad(4)`
   */
  tetrad() {
    return this.polyad(4);
  }
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */
  polyad(e) {
    const o = this.toHsl(), { h: s } = o, i = [this], r = 360 / e;
    for (let l = 1; l < e; l++)
      i.push(new I({ h: (s + l * r) % 360, s: o.s, l: o.l }));
    return i;
  }
  /**
   * compare color vs current color
   */
  equals(e) {
    return this.toRgbString() === new I(e).toRgbString();
  }
}
var Xo = "EyeDropper" in window, x = class extends V {
  constructor() {
    super(), this.formControlController = new ce(this), this.isSafeValue = !1, this.localize = new st(this), this.hasFocus = !1, this.isDraggingGridHandle = !1, this.isEmpty = !1, this.inputValue = "", this.hue = 0, this.saturation = 100, this.brightness = 100, this.alpha = 100, this.value = "", this.defaultValue = "", this.label = "", this.format = "hex", this.inline = !1, this.size = "medium", this.noFormatToggle = !1, this.name = "", this.disabled = !1, this.hoist = !1, this.opacity = !1, this.uppercase = !1, this.swatches = "", this.form = "", this.required = !1, this.handleFocusIn = () => {
      this.hasFocus = !0, this.emit("sl-focus");
    }, this.handleFocusOut = () => {
      this.hasFocus = !1, this.emit("sl-blur");
    }, this.addEventListener("focusin", this.handleFocusIn), this.addEventListener("focusout", this.handleFocusOut);
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.input.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  handleCopy() {
    this.input.select(), document.execCommand("copy"), this.previewButton.focus(), this.previewButton.classList.add("color-picker__preview-color--copied"), this.previewButton.addEventListener("animationend", () => {
      this.previewButton.classList.remove("color-picker__preview-color--copied");
    });
  }
  handleFormatToggle() {
    const t = ["hex", "rgb", "hsl", "hsv"], e = (t.indexOf(this.format) + 1) % t.length;
    this.format = t[e], this.setColor(this.value), this.emit("sl-change"), this.emit("sl-input");
  }
  handleAlphaDrag(t) {
    const e = this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"), o = e.querySelector(".color-picker__slider-handle"), { width: s } = e.getBoundingClientRect();
    let i = this.value;
    o.focus(), t.preventDefault(), We(e, {
      onMove: (r) => {
        this.alpha = G(r / s * 100, 0, 100), this.syncValues(), this.value !== i && (i = this.value, this.emit("sl-change"), this.emit("sl-input"));
      },
      initialEvent: t
    });
  }
  handleHueDrag(t) {
    const e = this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"), o = e.querySelector(".color-picker__slider-handle"), { width: s } = e.getBoundingClientRect();
    let i = this.value;
    o.focus(), t.preventDefault(), We(e, {
      onMove: (r) => {
        this.hue = G(r / s * 360, 0, 360), this.syncValues(), this.value !== i && (i = this.value, this.emit("sl-change"), this.emit("sl-input"));
      },
      initialEvent: t
    });
  }
  handleGridDrag(t) {
    const e = this.shadowRoot.querySelector(".color-picker__grid"), o = e.querySelector(".color-picker__grid-handle"), { width: s, height: i } = e.getBoundingClientRect();
    let r = this.value;
    o.focus(), t.preventDefault(), this.isDraggingGridHandle = !0, We(e, {
      onMove: (l, c) => {
        this.saturation = G(l / s * 100, 0, 100), this.brightness = G(100 - c / i * 100, 0, 100), this.syncValues(), this.value !== r && (r = this.value, this.emit("sl-change"), this.emit("sl-input"));
      },
      onStop: () => this.isDraggingGridHandle = !1,
      initialEvent: t
    });
  }
  handleAlphaKeyDown(t) {
    const e = t.shiftKey ? 10 : 1, o = this.value;
    t.key === "ArrowLeft" && (t.preventDefault(), this.alpha = G(this.alpha - e, 0, 100), this.syncValues()), t.key === "ArrowRight" && (t.preventDefault(), this.alpha = G(this.alpha + e, 0, 100), this.syncValues()), t.key === "Home" && (t.preventDefault(), this.alpha = 0, this.syncValues()), t.key === "End" && (t.preventDefault(), this.alpha = 100, this.syncValues()), this.value !== o && (this.emit("sl-change"), this.emit("sl-input"));
  }
  handleHueKeyDown(t) {
    const e = t.shiftKey ? 10 : 1, o = this.value;
    t.key === "ArrowLeft" && (t.preventDefault(), this.hue = G(this.hue - e, 0, 360), this.syncValues()), t.key === "ArrowRight" && (t.preventDefault(), this.hue = G(this.hue + e, 0, 360), this.syncValues()), t.key === "Home" && (t.preventDefault(), this.hue = 0, this.syncValues()), t.key === "End" && (t.preventDefault(), this.hue = 360, this.syncValues()), this.value !== o && (this.emit("sl-change"), this.emit("sl-input"));
  }
  handleGridKeyDown(t) {
    const e = t.shiftKey ? 10 : 1, o = this.value;
    t.key === "ArrowLeft" && (t.preventDefault(), this.saturation = G(this.saturation - e, 0, 100), this.syncValues()), t.key === "ArrowRight" && (t.preventDefault(), this.saturation = G(this.saturation + e, 0, 100), this.syncValues()), t.key === "ArrowUp" && (t.preventDefault(), this.brightness = G(this.brightness + e, 0, 100), this.syncValues()), t.key === "ArrowDown" && (t.preventDefault(), this.brightness = G(this.brightness - e, 0, 100), this.syncValues()), this.value !== o && (this.emit("sl-change"), this.emit("sl-input"));
  }
  handleInputChange(t) {
    const e = t.target, o = this.value;
    t.stopPropagation(), this.input.value ? (this.setColor(e.value), e.value = this.value) : this.value = "", this.value !== o && (this.emit("sl-change"), this.emit("sl-input"));
  }
  handleInputInput(t) {
    this.formControlController.updateValidity(), t.stopPropagation();
  }
  handleInputKeyDown(t) {
    if (t.key === "Enter") {
      const e = this.value;
      this.input.value ? (this.setColor(this.input.value), this.input.value = this.value, this.value !== e && (this.emit("sl-change"), this.emit("sl-input")), setTimeout(() => this.input.select())) : this.hue = 0;
    }
  }
  handleInputInvalid(t) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(t);
  }
  handleTouchMove(t) {
    t.preventDefault();
  }
  parseColor(t) {
    const e = new I(t);
    if (!e.isValid)
      return null;
    const o = e.toHsl(), s = {
      h: o.h,
      s: o.s * 100,
      l: o.l * 100,
      a: o.a
    }, i = e.toRgb(), r = e.toHexString(), l = e.toHex8String(), c = e.toHsv(), a = {
      h: c.h,
      s: c.s * 100,
      v: c.v * 100,
      a: c.a
    };
    return {
      hsl: {
        h: s.h,
        s: s.s,
        l: s.l,
        string: this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)
      },
      hsla: {
        h: s.h,
        s: s.s,
        l: s.l,
        a: s.a,
        string: this.setLetterCase(
          `hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`
        )
      },
      hsv: {
        h: a.h,
        s: a.s,
        v: a.v,
        string: this.setLetterCase(`hsv(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%)`)
      },
      hsva: {
        h: a.h,
        s: a.s,
        v: a.v,
        a: a.a,
        string: this.setLetterCase(
          `hsva(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.v)}%, ${a.a.toFixed(2).toString()})`
        )
      },
      rgb: {
        r: i.r,
        g: i.g,
        b: i.b,
        string: this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)
      },
      rgba: {
        r: i.r,
        g: i.g,
        b: i.b,
        a: i.a,
        string: this.setLetterCase(
          `rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`
        )
      },
      hex: this.setLetterCase(r),
      hexa: this.setLetterCase(l)
    };
  }
  setColor(t) {
    const e = this.parseColor(t);
    return e === null ? !1 : (this.hue = e.hsva.h, this.saturation = e.hsva.s, this.brightness = e.hsva.v, this.alpha = this.opacity ? e.hsva.a * 100 : 100, this.syncValues(), !0);
  }
  setLetterCase(t) {
    return typeof t != "string" ? "" : this.uppercase ? t.toUpperCase() : t.toLowerCase();
  }
  async syncValues() {
    const t = this.parseColor(
      `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`
    );
    t !== null && (this.format === "hsl" ? this.inputValue = this.opacity ? t.hsla.string : t.hsl.string : this.format === "rgb" ? this.inputValue = this.opacity ? t.rgba.string : t.rgb.string : this.format === "hsv" ? this.inputValue = this.opacity ? t.hsva.string : t.hsv.string : this.inputValue = this.opacity ? t.hexa : t.hex, this.isSafeValue = !0, this.value = this.inputValue, await this.updateComplete, this.isSafeValue = !1);
  }
  handleAfterHide() {
    this.previewButton.classList.remove("color-picker__preview-color--copied");
  }
  handleEyeDropper() {
    if (!Xo)
      return;
    new EyeDropper().open().then((e) => {
      const o = this.value;
      this.setColor(e.sRGBHex), this.value !== o && (this.emit("sl-change"), this.emit("sl-input"));
    }).catch(() => {
    });
  }
  selectSwatch(t) {
    const e = this.value;
    this.disabled || (this.setColor(t), this.value !== e && (this.emit("sl-change"), this.emit("sl-input")));
  }
  /** Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100. */
  getHexString(t, e, o, s = 100) {
    const i = new I(`hsva(${t}, ${e}, ${o}, ${s / 100})`);
    return i.isValid ? i.toHex8String() : "";
  }
  // Prevents nested components from leaking events
  stopNestedEventPropagation(t) {
    t.stopImmediatePropagation();
  }
  handleFormatChange() {
    this.syncValues();
  }
  handleOpacityChange() {
    this.alpha = 100;
  }
  handleValueChange(t, e) {
    if (this.isEmpty = !e, e || (this.hue = 0, this.saturation = 0, this.brightness = 100, this.alpha = 100), !this.isSafeValue) {
      const o = this.parseColor(e);
      o !== null ? (this.inputValue = this.value, this.hue = o.hsva.h, this.saturation = o.hsva.s, this.brightness = o.hsva.v, this.alpha = o.hsva.a * 100, this.syncValues()) : this.inputValue = t ?? "";
    }
  }
  /** Sets focus on the color picker. */
  focus(t) {
    this.inline ? this.base.focus(t) : this.trigger.focus(t);
  }
  /** Removes focus from the color picker. */
  blur() {
    var t;
    const e = this.inline ? this.base : this.trigger;
    this.hasFocus && (e.focus({ preventScroll: !0 }), e.blur()), (t = this.dropdown) != null && t.open && this.dropdown.hide();
  }
  /** Returns the current value as a string in the specified format. */
  getFormattedValue(t = "hex") {
    const e = this.parseColor(
      `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`
    );
    if (e === null)
      return "";
    switch (t) {
      case "hex":
        return e.hex;
      case "hexa":
        return e.hexa;
      case "rgb":
        return e.rgb.string;
      case "rgba":
        return e.rgba.string;
      case "hsl":
        return e.hsl.string;
      case "hsla":
        return e.hsla.string;
      case "hsv":
        return e.hsv.string;
      case "hsva":
        return e.hsva.string;
      default:
        return "";
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return !this.inline && !this.validity.valid ? (this.dropdown.show(), this.addEventListener("sl-after-show", () => this.input.reportValidity(), { once: !0 }), this.disabled || this.formControlController.emitInvalidEvent(), !1) : this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(t) {
    this.input.setCustomValidity(t), this.formControlController.updateValidity();
  }
  render() {
    const t = this.saturation, e = 100 - this.brightness, o = Array.isArray(this.swatches) ? this.swatches : this.swatches.split(";").filter((i) => i.trim() !== ""), s = b`
      <div
        part="base"
        class=${P({
      "color-picker": !0,
      "color-picker--inline": this.inline,
      "color-picker--disabled": this.disabled,
      "color-picker--focused": this.hasFocus
    })}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-labelledby="label"
        tabindex=${this.inline ? "0" : "-1"}
      >
        ${this.inline ? b`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            ` : null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${ut({ backgroundColor: this.getHexString(this.hue, 100, 100) })}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${P({
      "color-picker__grid-handle": !0,
      "color-picker__grid-handle--dragging": this.isDraggingGridHandle
    })}
            style=${ut({
      top: `${e}%`,
      left: `${t}%`,
      backgroundColor: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
            role="application"
            aria-label="HSV"
            tabindex=${w(this.disabled ? void 0 : "0")}
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
                style=${ut({
      left: `${this.hue === 0 ? 0 : 100 / (360 / this.hue)}%`
    })}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${w(this.disabled ? void 0 : "0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity ? b`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${ut({
      backgroundImage: `linear-gradient(
                          to right,
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 0)} 0%,
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 100)} 100%
                        )`
    })}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${ut({
      left: `${this.alpha}%`
    })}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${w(this.disabled ? void 0 : "0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                ` : ""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${ut({
      "--preview-color": this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
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
            value=${this.isEmpty ? "" : this.inputValue}
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
            ${this.noFormatToggle ? "" : b`
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
            ${Xo ? b`
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
                ` : ""}
          </sl-button-group>
        </div>

        ${o.length > 0 ? b`
              <div part="swatches" class="color-picker__swatches">
                ${o.map((i) => {
      const r = this.parseColor(i);
      return r ? b`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${w(this.disabled ? void 0 : "0")}
                      role="button"
                      aria-label=${i}
                      @click=${() => this.selectSwatch(i)}
                      @keydown=${(l) => !this.disabled && l.key === "Enter" && this.setColor(r.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${ut({ backgroundColor: r.hexa })}
                      ></div>
                    </div>
                  ` : (console.error(`Unable to parse swatch color: "${i}"`, this), "");
    })}
              </div>
            ` : ""}
      </div>
    `;
    return this.inline ? s : b`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled ? "true" : "false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${P({
      "color-dropdown__trigger": !0,
      "color-dropdown__trigger--disabled": this.disabled,
      "color-dropdown__trigger--small": this.size === "small",
      "color-dropdown__trigger--medium": this.size === "medium",
      "color-dropdown__trigger--large": this.size === "large",
      "color-dropdown__trigger--empty": this.isEmpty,
      "color-dropdown__trigger--focused": this.hasFocus,
      "color-picker__transparent-bg": !0
    })}
          style=${ut({
      color: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `;
  }
};
x.styles = lr;
x.dependencies = {
  "sl-button-group": ue,
  "sl-button": C,
  "sl-dropdown": K,
  "sl-icon": U,
  "sl-input": y,
  "sl-visually-hidden": us
};
n([
  $('[part~="base"]')
], x.prototype, "base", 2);
n([
  $('[part~="input"]')
], x.prototype, "input", 2);
n([
  $(".color-dropdown")
], x.prototype, "dropdown", 2);
n([
  $('[part~="preview"]')
], x.prototype, "previewButton", 2);
n([
  $('[part~="trigger"]')
], x.prototype, "trigger", 2);
n([
  S()
], x.prototype, "hasFocus", 2);
n([
  S()
], x.prototype, "isDraggingGridHandle", 2);
n([
  S()
], x.prototype, "isEmpty", 2);
n([
  S()
], x.prototype, "inputValue", 2);
n([
  S()
], x.prototype, "hue", 2);
n([
  S()
], x.prototype, "saturation", 2);
n([
  S()
], x.prototype, "brightness", 2);
n([
  S()
], x.prototype, "alpha", 2);
n([
  d()
], x.prototype, "value", 2);
n([
  Ie()
], x.prototype, "defaultValue", 2);
n([
  d()
], x.prototype, "label", 2);
n([
  d()
], x.prototype, "format", 2);
n([
  d({ type: Boolean, reflect: !0 })
], x.prototype, "inline", 2);
n([
  d({ reflect: !0 })
], x.prototype, "size", 2);
n([
  d({ attribute: "no-format-toggle", type: Boolean })
], x.prototype, "noFormatToggle", 2);
n([
  d()
], x.prototype, "name", 2);
n([
  d({ type: Boolean, reflect: !0 })
], x.prototype, "disabled", 2);
n([
  d({ type: Boolean })
], x.prototype, "hoist", 2);
n([
  d({ type: Boolean })
], x.prototype, "opacity", 2);
n([
  d({ type: Boolean })
], x.prototype, "uppercase", 2);
n([
  d()
], x.prototype, "swatches", 2);
n([
  d({ reflect: !0 })
], x.prototype, "form", 2);
n([
  d({ type: Boolean, reflect: !0 })
], x.prototype, "required", 2);
n([
  E("format", { waitUntilFirstUpdate: !0 })
], x.prototype, "handleFormatChange", 1);
n([
  E("opacity", { waitUntilFirstUpdate: !0 })
], x.prototype, "handleOpacityChange", 1);
n([
  E("value")
], x.prototype, "handleValueChange", 1);
x.define("sl-color-picker");
function* Ss(t = document.activeElement) {
  t != null && (yield t, "shadowRoot" in t && t.shadowRoot && t.shadowRoot.mode !== "closed" && (yield* Ss(t.shadowRoot.activeElement)));
}
var te = [], _r = class {
  constructor(t) {
    this.tabDirection = "forward", this.handleFocusIn = () => {
      this.checkFocus();
    }, this.handleKeyDown = (e) => {
      var o;
      if (e.key !== "Tab" || this.isExternalActivated)
        return;
      e.shiftKey ? this.tabDirection = "backward" : this.tabDirection = "forward", e.preventDefault();
      const s = we(this.element), i = s[0];
      let r = this.startElementAlreadyFocused(i) ? 0 : this.currentFocusIndex;
      if (r === -1) {
        this.currentFocus = i, this.currentFocus.focus({ preventScroll: !0 });
        return;
      }
      const l = this.tabDirection === "forward" ? 1 : -1;
      r + l >= s.length ? r = 0 : this.currentFocusIndex + l < 0 ? r = s.length - 1 : r += l, this.currentFocus = s[r], (o = this.currentFocus) == null || o.focus({ preventScroll: !0 }), setTimeout(() => this.checkFocus());
    }, this.handleKeyUp = () => {
      this.tabDirection = "forward";
    }, this.element = t;
  }
  /** Activates focus trapping. */
  activate() {
    te.push(this.element), document.addEventListener("focusin", this.handleFocusIn), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
  }
  /** Deactivates focus trapping. */
  deactivate() {
    te = te.filter((t) => t !== this.element), this.currentFocus = null, document.removeEventListener("focusin", this.handleFocusIn), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp);
  }
  /** Determines if this modal element is currently active or not. */
  isActive() {
    return te[te.length - 1] === this.element;
  }
  /** Activates external modal behavior and temporarily disables focus trapping. */
  activateExternal() {
    this.isExternalActivated = !0;
  }
  /** Deactivates external modal behavior and re-enables focus trapping. */
  deactivateExternal() {
    this.isExternalActivated = !1;
  }
  checkFocus() {
    if (this.isActive() && !this.isExternalActivated) {
      const t = we(this.element);
      if (!this.element.matches(":focus-within")) {
        const e = t[0], o = t[t.length - 1], s = this.tabDirection === "forward" ? e : o;
        typeof (s == null ? void 0 : s.focus) == "function" && (this.currentFocus = s, s.focus({ preventScroll: !0 }));
      }
    }
  }
  get currentFocusIndex() {
    return we(this.element).findIndex((t) => t === this.currentFocus);
  }
  // Checks if the `startElement` is already focused. This is important if the modal already has an existing focus prior
  // to the first tab key.
  startElementAlreadyFocused(t) {
    for (const e of Ss())
      if (t === e)
        return !0;
    return !1;
  }
};
function xr(t, e) {
  return {
    top: Math.round(t.getBoundingClientRect().top - e.getBoundingClientRect().top),
    left: Math.round(t.getBoundingClientRect().left - e.getBoundingClientRect().left)
  };
}
var no = /* @__PURE__ */ new Set();
function kr() {
  const t = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Yo(t) {
  if (no.add(t), !document.body.classList.contains("sl-scroll-lock")) {
    const e = kr();
    document.body.classList.add("sl-scroll-lock"), document.body.style.setProperty("--sl-scroll-lock-size", `${e}px`);
  }
}
function Zo(t) {
  no.delete(t), no.size === 0 && (document.body.classList.remove("sl-scroll-lock"), document.body.style.removeProperty("--sl-scroll-lock-size"));
}
function $r(t, e, o = "vertical", s = "smooth") {
  const i = xr(t, e), r = i.top + e.scrollTop, l = i.left + e.scrollLeft, c = e.scrollLeft, a = e.scrollLeft + e.offsetWidth, h = e.scrollTop, p = e.scrollTop + e.offsetHeight;
  (o === "horizontal" || o === "both") && (l < c ? e.scrollTo({ left: l, behavior: s }) : l + t.clientWidth > a && e.scrollTo({ left: l - e.offsetWidth + t.clientWidth, behavior: s })), (o === "vertical" || o === "both") && (r < h ? e.scrollTo({ top: r, behavior: s }) : r + t.clientHeight > p && e.scrollTo({ top: r - e.offsetHeight + t.clientHeight, behavior: s }));
}
var Cr = R`
  ${H}

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
`, Ar = R`
  ${H}

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
`, W = class extends V {
  constructor() {
    super(...arguments), this.hasFocus = !1, this.label = "", this.disabled = !1;
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleClick(t) {
    this.disabled && (t.preventDefault(), t.stopPropagation());
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(t) {
    this.button.focus(t);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const t = !!this.href, e = t ? Ce`a` : Ce`button`;
    return ye`
      <${e}
        part="base"
        class=${P({
      "icon-button": !0,
      "icon-button--disabled": !t && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${w(t ? void 0 : this.disabled)}
        type=${w(t ? void 0 : "button")}
        href=${w(t ? this.href : void 0)}
        target=${w(t ? this.target : void 0)}
        download=${w(t ? this.download : void 0)}
        rel=${w(t && this.target ? "noreferrer noopener" : void 0)}
        role=${w(t ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${w(this.name)}
          library=${w(this.library)}
          src=${w(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `;
  }
};
W.styles = Ar;
W.dependencies = { "sl-icon": U };
n([
  $(".icon-button")
], W.prototype, "button", 2);
n([
  S()
], W.prototype, "hasFocus", 2);
n([
  d()
], W.prototype, "name", 2);
n([
  d()
], W.prototype, "library", 2);
n([
  d()
], W.prototype, "src", 2);
n([
  d()
], W.prototype, "href", 2);
n([
  d()
], W.prototype, "target", 2);
n([
  d()
], W.prototype, "download", 2);
n([
  d()
], W.prototype, "label", 2);
n([
  d({ type: Boolean, reflect: !0 })
], W.prototype, "disabled", 2);
var gt = class extends V {
  constructor() {
    super(...arguments), this.hasSlotController = new Te(this, "footer"), this.localize = new st(this), this.modal = new _r(this), this.open = !1, this.label = "", this.noHeader = !1, this.handleDocumentKeyDown = (t) => {
      t.key === "Escape" && this.modal.isActive() && this.open && (t.stopPropagation(), this.requestClose("keyboard"));
    };
  }
  firstUpdated() {
    this.dialog.hidden = !this.open, this.open && (this.addOpenListeners(), this.modal.activate(), Yo(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.modal.deactivate(), Zo(this);
  }
  requestClose(t) {
    if (this.emit("sl-request-close", {
      cancelable: !0,
      detail: { source: t }
    }).defaultPrevented) {
      const o = lt(this, "dialog.denyClose", { dir: this.localize.dir() });
      nt(this.panel, o.keyframes, o.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    document.addEventListener("keydown", this.handleDocumentKeyDown);
  }
  removeOpenListeners() {
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("sl-show"), this.addOpenListeners(), this.originalTrigger = document.activeElement, this.modal.activate(), Yo(this);
      const t = this.querySelector("[autofocus]");
      t && t.removeAttribute("autofocus"), await Promise.all([pt(this.dialog), pt(this.overlay)]), this.dialog.hidden = !1, requestAnimationFrame(() => {
        this.emit("sl-initial-focus", { cancelable: !0 }).defaultPrevented || (t ? t.focus({ preventScroll: !0 }) : this.panel.focus({ preventScroll: !0 })), t && t.setAttribute("autofocus", "");
      });
      const e = lt(this, "dialog.show", { dir: this.localize.dir() }), o = lt(this, "dialog.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        nt(this.panel, e.keyframes, e.options),
        nt(this.overlay, o.keyframes, o.options)
      ]), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), this.modal.deactivate(), await Promise.all([pt(this.dialog), pt(this.overlay)]);
      const t = lt(this, "dialog.hide", { dir: this.localize.dir() }), e = lt(this, "dialog.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        nt(this.overlay, e.keyframes, e.options).then(() => {
          this.overlay.hidden = !0;
        }),
        nt(this.panel, t.keyframes, t.options).then(() => {
          this.panel.hidden = !0;
        })
      ]), this.dialog.hidden = !0, this.overlay.hidden = !1, this.panel.hidden = !1, Zo(this);
      const o = this.originalTrigger;
      typeof (o == null ? void 0 : o.focus) == "function" && setTimeout(() => o.focus()), this.emit("sl-after-hide");
    }
  }
  /** Shows the dialog. */
  async show() {
    if (!this.open)
      return this.open = !0, Ut(this, "sl-after-show");
  }
  /** Hides the dialog */
  async hide() {
    if (this.open)
      return this.open = !1, Ut(this, "sl-after-hide");
  }
  render() {
    return b`
      <div
        part="base"
        class=${P({
      dialog: !0,
      "dialog--open": this.open,
      "dialog--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="dialog__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${w(this.noHeader ? this.label : void 0)}
          aria-labelledby=${w(this.noHeader ? void 0 : "title")}
          tabindex="-1"
        >
          ${this.noHeader ? "" : b`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
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
                      @click="${() => this.requestClose("close-button")}"
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
    `;
  }
};
gt.styles = Cr;
gt.dependencies = {
  "sl-icon-button": W
};
n([
  $(".dialog")
], gt.prototype, "dialog", 2);
n([
  $(".dialog__panel")
], gt.prototype, "panel", 2);
n([
  $(".dialog__overlay")
], gt.prototype, "overlay", 2);
n([
  d({ type: Boolean, reflect: !0 })
], gt.prototype, "open", 2);
n([
  d({ reflect: !0 })
], gt.prototype, "label", 2);
n([
  d({ attribute: "no-header", type: Boolean, reflect: !0 })
], gt.prototype, "noHeader", 2);
n([
  E("open", { waitUntilFirstUpdate: !0 })
], gt.prototype, "handleOpenChange", 1);
at("dialog.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});
at("dialog.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: "ease" }
});
at("dialog.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
  options: { duration: 250 }
});
at("dialog.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
at("dialog.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});
gt.define("sl-dialog");
W.define("sl-icon-button");
y.define("sl-input");
var Sr = R`
  ${H}

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
`, it = class extends V {
  constructor() {
    super(...arguments), this.localize = new st(this), this.current = !1, this.selected = !1, this.hasHover = !1, this.value = "", this.disabled = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "option"), this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    const t = this.getTextLabel();
    if (typeof this.cachedTextLabel > "u") {
      this.cachedTextLabel = t;
      return;
    }
    t !== this.cachedTextLabel && (this.cachedTextLabel = t, this.emit("slotchange", { bubbles: !0, composed: !1, cancelable: !1 }));
  }
  handleMouseEnter() {
    this.hasHover = !0;
  }
  handleMouseLeave() {
    this.hasHover = !1;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    typeof this.value != "string" && (this.value = String(this.value)), this.value.includes(" ") && (console.error("Option values cannot include a space. All spaces have been replaced with underscores.", this), this.value = this.value.replace(/ /g, "_"));
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    var t;
    return ((t = this.textContent) != null ? t : "").trim();
  }
  render() {
    return b`
      <div
        part="base"
        class=${P({
      option: !0,
      "option--current": this.current,
      "option--disabled": this.disabled,
      "option--selected": this.selected,
      "option--hover": this.hasHover
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
};
it.styles = Sr;
it.dependencies = { "sl-icon": U };
n([
  $(".option__label")
], it.prototype, "defaultSlot", 2);
n([
  S()
], it.prototype, "current", 2);
n([
  S()
], it.prototype, "selected", 2);
n([
  S()
], it.prototype, "hasHover", 2);
n([
  d({ reflect: !0 })
], it.prototype, "value", 2);
n([
  d({ type: Boolean, reflect: !0 })
], it.prototype, "disabled", 2);
n([
  E("disabled")
], it.prototype, "handleDisabledChange", 1);
n([
  E("selected")
], it.prototype, "handleSelectedChange", 1);
n([
  E("value")
], it.prototype, "handleValueChange", 1);
it.define("sl-option");
var Er = R`
  ${H}

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
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ao extends Me {
  constructor(e) {
    if (super(e), this.et = D, e.type !== vt.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === D || e == null)
      return this.ft = void 0, this.et = e;
    if (e === Q)
      return e;
    if (typeof e != "string")
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.et)
      return this.ft;
    this.et = e;
    const o = [e];
    return o.raw = o, this.ft = { _$litType$: this.constructor.resultType, strings: o, values: [] };
  }
}
ao.directiveName = "unsafeHTML", ao.resultType = 1;
const xe = Oe(ao);
var j = class extends V {
  constructor() {
    super(...arguments), this.localize = new st(this), this.hoverValue = 0, this.isHovering = !1, this.label = "", this.value = 0, this.max = 5, this.precision = 1, this.readonly = !1, this.disabled = !1, this.getSymbol = () => '<sl-icon name="star-fill" library="system"></sl-icon>';
  }
  getValueFromMousePosition(t) {
    return this.getValueFromXCoordinate(t.clientX);
  }
  getValueFromTouchPosition(t) {
    return this.getValueFromXCoordinate(t.touches[0].clientX);
  }
  getValueFromXCoordinate(t) {
    const e = this.localize.dir() === "rtl", { left: o, right: s, width: i } = this.rating.getBoundingClientRect(), r = e ? this.roundToPrecision((s - t) / i * this.max, this.precision) : this.roundToPrecision((t - o) / i * this.max, this.precision);
    return G(r, 0, this.max);
  }
  handleClick(t) {
    this.disabled || (this.setValue(this.getValueFromMousePosition(t)), this.emit("sl-change"));
  }
  setValue(t) {
    this.disabled || this.readonly || (this.value = t === this.value ? 0 : t, this.isHovering = !1);
  }
  handleKeyDown(t) {
    const e = this.localize.dir() === "ltr", o = this.localize.dir() === "rtl", s = this.value;
    if (!(this.disabled || this.readonly)) {
      if (t.key === "ArrowDown" || e && t.key === "ArrowLeft" || o && t.key === "ArrowRight") {
        const i = t.shiftKey ? 1 : this.precision;
        this.value = Math.max(0, this.value - i), t.preventDefault();
      }
      if (t.key === "ArrowUp" || e && t.key === "ArrowRight" || o && t.key === "ArrowLeft") {
        const i = t.shiftKey ? 1 : this.precision;
        this.value = Math.min(this.max, this.value + i), t.preventDefault();
      }
      t.key === "Home" && (this.value = 0, t.preventDefault()), t.key === "End" && (this.value = this.max, t.preventDefault()), this.value !== s && this.emit("sl-change");
    }
  }
  handleMouseEnter(t) {
    this.isHovering = !0, this.hoverValue = this.getValueFromMousePosition(t);
  }
  handleMouseMove(t) {
    this.hoverValue = this.getValueFromMousePosition(t);
  }
  handleMouseLeave() {
    this.isHovering = !1;
  }
  handleTouchStart(t) {
    this.isHovering = !0, this.hoverValue = this.getValueFromTouchPosition(t), t.preventDefault();
  }
  handleTouchMove(t) {
    this.hoverValue = this.getValueFromTouchPosition(t);
  }
  handleTouchEnd(t) {
    this.isHovering = !1, this.setValue(this.hoverValue), this.emit("sl-change"), t.preventDefault();
  }
  roundToPrecision(t, e = 0.5) {
    const o = 1 / e;
    return Math.ceil(t * o) / o;
  }
  handleHoverValueChange() {
    this.emit("sl-hover", {
      detail: {
        phase: "move",
        value: this.hoverValue
      }
    });
  }
  handleIsHoveringChange() {
    this.emit("sl-hover", {
      detail: {
        phase: this.isHovering ? "start" : "end",
        value: this.hoverValue
      }
    });
  }
  /** Sets focus on the rating. */
  focus(t) {
    this.rating.focus(t);
  }
  /** Removes focus from the rating. */
  blur() {
    this.rating.blur();
  }
  render() {
    const t = this.localize.dir() === "rtl", e = Array.from(Array(this.max).keys());
    let o = 0;
    return this.disabled || this.readonly ? o = this.value : o = this.isHovering ? this.hoverValue : this.value, b`
      <div
        part="base"
        class=${P({
      rating: !0,
      "rating--readonly": this.readonly,
      "rating--disabled": this.disabled,
      "rating--rtl": t
    })}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled ? "-1" : "0"}
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
          ${e.map((s) => o > s && o < s + 1 ? b`
                <span
                  class=${P({
      rating__symbol: !0,
      "rating__partial-symbol-container": !0,
      "rating__symbol--hover": this.isHovering && Math.ceil(o) === s + 1
    })}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${ut({
      clipPath: t ? `inset(0 ${(o - s) * 100}% 0 0)` : `inset(0 0 0 ${(o - s) * 100}%)`
    })}
                  >
                    ${xe(this.getSymbol(s + 1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${ut({
      clipPath: t ? `inset(0 0 0 ${100 - (o - s) * 100}%)` : `inset(0 ${100 - (o - s) * 100}% 0 0)`
    })}
                  >
                    ${xe(this.getSymbol(s + 1))}
                  </div>
                </span>
              ` : b`
              <span
                class=${P({
      rating__symbol: !0,
      "rating__symbol--hover": this.isHovering && Math.ceil(o) === s + 1,
      "rating__symbol--active": o >= s + 1
    })}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${xe(this.getSymbol(s + 1))}
              </span>
            `)}
        </span>
      </div>
    `;
  }
};
j.styles = Er;
j.dependencies = { "sl-icon": U };
n([
  $(".rating")
], j.prototype, "rating", 2);
n([
  S()
], j.prototype, "hoverValue", 2);
n([
  S()
], j.prototype, "isHovering", 2);
n([
  d()
], j.prototype, "label", 2);
n([
  d({ type: Number })
], j.prototype, "value", 2);
n([
  d({ type: Number })
], j.prototype, "max", 2);
n([
  d({ type: Number })
], j.prototype, "precision", 2);
n([
  d({ type: Boolean, reflect: !0 })
], j.prototype, "readonly", 2);
n([
  d({ type: Boolean, reflect: !0 })
], j.prototype, "disabled", 2);
n([
  d()
], j.prototype, "getSymbol", 2);
n([
  ti({ passive: !0 })
], j.prototype, "handleTouchMove", 1);
n([
  E("hoverValue")
], j.prototype, "handleHoverValueChange", 1);
n([
  E("isHovering")
], j.prototype, "handleIsHoveringChange", 1);
j.define("sl-rating");
var zr = R`
  ${H}

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
`, Dt = class extends V {
  constructor() {
    super(...arguments), this.localize = new st(this), this.variant = "neutral", this.size = "medium", this.pill = !1, this.removable = !1;
  }
  handleRemoveClick() {
    this.emit("sl-remove");
  }
  render() {
    return b`
      <span
        part="base"
        class=${P({
      tag: !0,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? b`
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
            ` : ""}
      </span>
    `;
  }
};
Dt.styles = zr;
Dt.dependencies = { "sl-icon-button": W };
n([
  d({ reflect: !0 })
], Dt.prototype, "variant", 2);
n([
  d({ reflect: !0 })
], Dt.prototype, "size", 2);
n([
  d({ type: Boolean, reflect: !0 })
], Dt.prototype, "pill", 2);
n([
  d({ type: Boolean })
], Dt.prototype, "removable", 2);
var Lr = R`
  ${H}
  ${ps}

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
`, k = class extends V {
  constructor() {
    super(...arguments), this.formControlController = new ce(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    }), this.hasSlotController = new Te(this, "help-text", "label"), this.localize = new st(this), this.typeToSelectString = "", this.hasFocus = !1, this.displayLabel = "", this.selectedOptions = [], this.name = "", this.value = "", this.defaultValue = "", this.size = "medium", this.placeholder = "", this.multiple = !1, this.maxOptionsVisible = 3, this.disabled = !1, this.clearable = !1, this.open = !1, this.hoist = !1, this.filled = !1, this.pill = !1, this.label = "", this.placement = "bottom", this.helpText = "", this.form = "", this.required = !1, this.getTag = (t) => b`
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
        @sl-remove=${(e) => this.handleTagRemove(e, t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `, this.handleDocumentFocusIn = (t) => {
      const e = t.composedPath();
      this && !e.includes(this) && this.hide();
    }, this.handleDocumentKeyDown = (t) => {
      const e = t.target, o = e.closest(".select__clear") !== null, s = e.closest("sl-icon-button") !== null;
      if (!(o || s)) {
        if (t.key === "Escape" && this.open && (t.preventDefault(), t.stopPropagation(), this.hide(), this.displayInput.focus({ preventScroll: !0 })), t.key === "Enter" || t.key === " " && this.typeToSelectString === "") {
          if (t.preventDefault(), t.stopImmediatePropagation(), !this.open) {
            this.show();
            return;
          }
          this.currentOption && !this.currentOption.disabled && (this.multiple ? this.toggleOptionSelection(this.currentOption) : this.setSelectedOptions(this.currentOption), this.updateComplete.then(() => {
            this.emit("sl-input"), this.emit("sl-change");
          }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
          return;
        }
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(t.key)) {
          const i = this.getAllOptions(), r = i.indexOf(this.currentOption);
          let l = Math.max(0, r);
          if (t.preventDefault(), !this.open && (this.show(), this.currentOption))
            return;
          t.key === "ArrowDown" ? (l = r + 1, l > i.length - 1 && (l = 0)) : t.key === "ArrowUp" ? (l = r - 1, l < 0 && (l = i.length - 1)) : t.key === "Home" ? l = 0 : t.key === "End" && (l = i.length - 1), this.setCurrentOption(i[l]);
        }
        if (t.key.length === 1 || t.key === "Backspace") {
          const i = this.getAllOptions();
          if (t.metaKey || t.ctrlKey || t.altKey)
            return;
          if (!this.open) {
            if (t.key === "Backspace")
              return;
            this.show();
          }
          t.stopPropagation(), t.preventDefault(), clearTimeout(this.typeToSelectTimeout), this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3), t.key === "Backspace" ? this.typeToSelectString = this.typeToSelectString.slice(0, -1) : this.typeToSelectString += t.key.toLowerCase();
          for (const r of i)
            if (r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)) {
              this.setCurrentOption(r);
              break;
            }
        }
      }
    }, this.handleDocumentMouseDown = (t) => {
      const e = t.composedPath();
      this && !e.includes(this) && this.hide();
    };
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback(), this.open = !1;
  }
  addOpenListeners() {
    document.addEventListener("focusin", this.handleDocumentFocusIn), document.addEventListener("keydown", this.handleDocumentKeyDown), document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    document.removeEventListener("focusin", this.handleDocumentFocusIn), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("mousedown", this.handleDocumentMouseDown);
  }
  handleFocus() {
    this.hasFocus = !0, this.displayInput.setSelectionRange(0, 0), this.emit("sl-focus");
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxMouseDown(t) {
    const o = t.composedPath().some((s) => s instanceof Element && s.tagName.toLowerCase() === "sl-icon-button");
    this.disabled || o || (t.preventDefault(), this.displayInput.focus({ preventScroll: !0 }), this.open = !this.open);
  }
  handleComboboxKeyDown(t) {
    t.stopPropagation(), this.handleDocumentKeyDown(t);
  }
  handleClearClick(t) {
    t.stopPropagation(), this.value !== "" && (this.setSelectedOptions([]), this.displayInput.focus({ preventScroll: !0 }), this.updateComplete.then(() => {
      this.emit("sl-clear"), this.emit("sl-input"), this.emit("sl-change");
    }));
  }
  handleClearMouseDown(t) {
    t.stopPropagation(), t.preventDefault();
  }
  handleOptionClick(t) {
    const o = t.target.closest("sl-option"), s = this.value;
    o && !o.disabled && (this.multiple ? this.toggleOptionSelection(o) : this.setSelectedOptions(o), this.updateComplete.then(() => this.displayInput.focus({ preventScroll: !0 })), this.value !== s && this.updateComplete.then(() => {
      this.emit("sl-input"), this.emit("sl-change");
    }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
  }
  handleDefaultSlotChange() {
    const t = this.getAllOptions(), e = Array.isArray(this.value) ? this.value : [this.value], o = [];
    customElements.get("sl-option") ? (t.forEach((s) => o.push(s.value)), this.setSelectedOptions(t.filter((s) => e.includes(s.value)))) : customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
  }
  handleTagRemove(t, e) {
    t.stopPropagation(), this.disabled || (this.toggleOptionSelection(e, !1), this.updateComplete.then(() => {
      this.emit("sl-input"), this.emit("sl-change");
    }));
  }
  // Gets an array of all <sl-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("sl-option")];
  }
  // Gets the first <sl-option> element
  getFirstOption() {
    return this.querySelector("sl-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(t) {
    this.getAllOptions().forEach((o) => {
      o.current = !1, o.tabIndex = -1;
    }), t && (this.currentOption = t, t.current = !0, t.tabIndex = 0, t.focus());
  }
  // Sets the selected option(s)
  setSelectedOptions(t) {
    const e = this.getAllOptions(), o = Array.isArray(t) ? t : [t];
    e.forEach((s) => s.selected = !1), o.length && o.forEach((s) => s.selected = !0), this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(t, e) {
    e === !0 || e === !1 ? t.selected = e : t.selected = !t.selected, this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var t, e, o, s;
    this.selectedOptions = this.getAllOptions().filter((i) => i.selected), this.multiple ? (this.value = this.selectedOptions.map((i) => i.value), this.placeholder && this.value.length === 0 ? this.displayLabel = "" : this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length)) : (this.value = (e = (t = this.selectedOptions[0]) == null ? void 0 : t.value) != null ? e : "", this.displayLabel = (s = (o = this.selectedOptions[0]) == null ? void 0 : o.getTextLabel()) != null ? s : ""), this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((t, e) => {
      if (e < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const o = this.getTag(t, e);
        return b`<div @sl-remove=${(s) => this.handleTagRemove(s, t)}>
          ${typeof o == "string" ? xe(o) : o}
        </div>`;
      } else if (e === this.maxOptionsVisible)
        return b`<sl-tag>+${this.selectedOptions.length - e}</sl-tag>`;
      return b``;
    });
  }
  handleInvalid(t) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(t);
  }
  handleDisabledChange() {
    this.disabled && (this.open = !1, this.handleOpenChange());
  }
  handleValueChange() {
    const t = this.getAllOptions(), e = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(t.filter((o) => e.includes(o.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption()), this.emit("sl-show"), this.addOpenListeners(), await pt(this), this.listbox.hidden = !1, this.popup.active = !0, requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes: t, options: e } = lt(this, "select.show", { dir: this.localize.dir() });
      await nt(this.popup.popup, t, e), this.currentOption && $r(this.currentOption, this.listbox, "vertical", "auto"), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), await pt(this);
      const { keyframes: t, options: e } = lt(this, "select.hide", { dir: this.localize.dir() });
      await nt(this.popup.popup, t, e), this.listbox.hidden = !0, this.popup.active = !1, this.emit("sl-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !0, Ut(this, "sl-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !1, Ut(this, "sl-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(t) {
    this.valueInput.setCustomValidity(t), this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(t) {
    this.displayInput.focus(t);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const t = this.hasSlotController.test("label"), e = this.hasSlotController.test("help-text"), o = this.label ? !0 : !!t, s = this.helpText ? !0 : !!e, i = this.clearable && !this.disabled && this.value.length > 0, r = this.placeholder && this.value.length === 0;
    return b`
      <div
        part="form-control"
        class=${P({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": o,
      "form-control--has-help-text": s
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${P({
      select: !0,
      "select--standard": !0,
      "select--filled": this.filled,
      "select--pill": this.pill,
      "select--open": this.open,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": r,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large"
    })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
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
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? b`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i ? b`
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
                  ` : ""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
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
          aria-hidden=${s ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
k.styles = Lr;
k.dependencies = {
  "sl-icon": U,
  "sl-popup": T,
  "sl-tag": Dt
};
n([
  $(".select")
], k.prototype, "popup", 2);
n([
  $(".select__combobox")
], k.prototype, "combobox", 2);
n([
  $(".select__display-input")
], k.prototype, "displayInput", 2);
n([
  $(".select__value-input")
], k.prototype, "valueInput", 2);
n([
  $(".select__listbox")
], k.prototype, "listbox", 2);
n([
  S()
], k.prototype, "hasFocus", 2);
n([
  S()
], k.prototype, "displayLabel", 2);
n([
  S()
], k.prototype, "currentOption", 2);
n([
  S()
], k.prototype, "selectedOptions", 2);
n([
  d()
], k.prototype, "name", 2);
n([
  d({
    converter: {
      fromAttribute: (t) => t.split(" "),
      toAttribute: (t) => t.join(" ")
    }
  })
], k.prototype, "value", 2);
n([
  Ie()
], k.prototype, "defaultValue", 2);
n([
  d({ reflect: !0 })
], k.prototype, "size", 2);
n([
  d()
], k.prototype, "placeholder", 2);
n([
  d({ type: Boolean, reflect: !0 })
], k.prototype, "multiple", 2);
n([
  d({ attribute: "max-options-visible", type: Number })
], k.prototype, "maxOptionsVisible", 2);
n([
  d({ type: Boolean, reflect: !0 })
], k.prototype, "disabled", 2);
n([
  d({ type: Boolean })
], k.prototype, "clearable", 2);
n([
  d({ type: Boolean, reflect: !0 })
], k.prototype, "open", 2);
n([
  d({ type: Boolean })
], k.prototype, "hoist", 2);
n([
  d({ type: Boolean, reflect: !0 })
], k.prototype, "filled", 2);
n([
  d({ type: Boolean, reflect: !0 })
], k.prototype, "pill", 2);
n([
  d()
], k.prototype, "label", 2);
n([
  d({ reflect: !0 })
], k.prototype, "placement", 2);
n([
  d({ attribute: "help-text" })
], k.prototype, "helpText", 2);
n([
  d({ reflect: !0 })
], k.prototype, "form", 2);
n([
  d({ type: Boolean, reflect: !0 })
], k.prototype, "required", 2);
n([
  d()
], k.prototype, "getTag", 2);
n([
  E("disabled", { waitUntilFirstUpdate: !0 })
], k.prototype, "handleDisabledChange", 1);
n([
  E("value", { waitUntilFirstUpdate: !0 })
], k.prototype, "handleValueChange", 1);
n([
  E("open", { waitUntilFirstUpdate: !0 })
], k.prototype, "handleOpenChange", 1);
at("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
at("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
k.define("sl-select");
var Tr = R`
  ${H}

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
`, Or = R`
  ${H}

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
`, q = class extends V {
  constructor() {
    super(...arguments), this.formControlController = new ce(this, {
      value: (t) => t.checked ? t.value || "on" : void 0,
      defaultValue: (t) => t.defaultChecked,
      setValue: (t, e) => t.checked = e
    }), this.hasFocus = !1, this.title = "", this.name = "", this.size = "medium", this.disabled = !1, this.checked = !1, this.indeterminate = !1, this.defaultChecked = !1, this.form = "", this.required = !1;
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleClick() {
    this.checked = !this.checked, this.indeterminate = !1, this.emit("sl-change");
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleInput() {
    this.emit("sl-input");
  }
  handleInvalid(t) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(t);
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStateChange() {
    this.input.checked = this.checked, this.input.indeterminate = this.indeterminate, this.formControlController.updateValidity();
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(t) {
    this.input.focus(t);
  }
  /** Removes focus from the checkbox. */
  blur() {
    this.input.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
  setCustomValidity(t) {
    this.input.setCustomValidity(t), this.formControlController.updateValidity();
  }
  render() {
    return b`
      <label
        part="base"
        class=${P({
      checkbox: !0,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate,
      "checkbox--small": this.size === "small",
      "checkbox--medium": this.size === "medium",
      "checkbox--large": this.size === "large"
    })}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${w(this.value)}
          .indeterminate=${Ae(this.indeterminate)}
          .checked=${Ae(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? "true" : "false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
          class="checkbox__control"
        >
          ${this.checked ? b`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              ` : ""}
          ${!this.checked && this.indeterminate ? b`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              ` : ""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `;
  }
};
q.styles = Or;
q.dependencies = { "sl-icon": U };
n([
  $('input[type="checkbox"]')
], q.prototype, "input", 2);
n([
  S()
], q.prototype, "hasFocus", 2);
n([
  d()
], q.prototype, "title", 2);
n([
  d()
], q.prototype, "name", 2);
n([
  d()
], q.prototype, "value", 2);
n([
  d({ reflect: !0 })
], q.prototype, "size", 2);
n([
  d({ type: Boolean, reflect: !0 })
], q.prototype, "disabled", 2);
n([
  d({ type: Boolean, reflect: !0 })
], q.prototype, "checked", 2);
n([
  d({ type: Boolean, reflect: !0 })
], q.prototype, "indeterminate", 2);
n([
  Ie("checked")
], q.prototype, "defaultChecked", 2);
n([
  d({ reflect: !0 })
], q.prototype, "form", 2);
n([
  d({ type: Boolean, reflect: !0 })
], q.prototype, "required", 2);
n([
  E("disabled", { waitUntilFirstUpdate: !0 })
], q.prototype, "handleDisabledChange", 1);
n([
  E(["checked", "indeterminate"], { waitUntilFirstUpdate: !0 })
], q.prototype, "handleStateChange", 1);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Jo(t, e, o) {
  return t ? e() : o == null ? void 0 : o();
}
var co = class extends V {
  constructor() {
    super(...arguments), this.localize = new st(this), this.indeterminate = !1, this.isLeaf = !1, this.loading = !1, this.selectable = !1, this.expanded = !1, this.selected = !1, this.disabled = !1, this.lazy = !1;
  }
  static isTreeItem(t) {
    return t instanceof Element && t.getAttribute("role") === "treeitem";
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "treeitem"), this.setAttribute("tabindex", "-1"), this.isNestedItem() && (this.slot = "children");
  }
  firstUpdated() {
    this.childrenContainer.hidden = !this.expanded, this.childrenContainer.style.height = this.expanded ? "auto" : "0", this.isLeaf = !this.lazy && this.getChildrenItems().length === 0, this.handleExpandedChange();
  }
  async animateCollapse() {
    this.emit("sl-collapse"), await pt(this.childrenContainer);
    const { keyframes: t, options: e } = lt(this, "tree-item.collapse", { dir: this.localize.dir() });
    await nt(
      this.childrenContainer,
      qo(t, this.childrenContainer.scrollHeight),
      e
    ), this.childrenContainer.hidden = !0, this.emit("sl-after-collapse");
  }
  // Checks whether the item is nested into an item
  isNestedItem() {
    const t = this.parentElement;
    return !!t && co.isTreeItem(t);
  }
  handleChildrenSlotChange() {
    this.loading = !1, this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
  }
  willUpdate(t) {
    t.has("selected") && !t.has("indeterminate") && (this.indeterminate = !1);
  }
  async animateExpand() {
    this.emit("sl-expand"), await pt(this.childrenContainer), this.childrenContainer.hidden = !1;
    const { keyframes: t, options: e } = lt(this, "tree-item.expand", { dir: this.localize.dir() });
    await nt(
      this.childrenContainer,
      qo(t, this.childrenContainer.scrollHeight),
      e
    ), this.childrenContainer.style.height = "auto", this.emit("sl-after-expand");
  }
  handleLoadingChange() {
    this.setAttribute("aria-busy", this.loading ? "true" : "false"), this.loading || this.animateExpand();
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleExpandedChange() {
    this.isLeaf ? this.removeAttribute("aria-expanded") : this.setAttribute("aria-expanded", this.expanded ? "true" : "false");
  }
  handleExpandAnimation() {
    this.expanded ? this.lazy ? (this.loading = !0, this.emit("sl-lazy-load")) : this.animateExpand() : this.animateCollapse();
  }
  handleLazyChange() {
    this.emit("sl-lazy-change");
  }
  /** Gets all the nested tree items in this node. */
  getChildrenItems({ includeDisabled: t = !0 } = {}) {
    return this.childrenSlot ? [...this.childrenSlot.assignedElements({ flatten: !0 })].filter(
      (e) => co.isTreeItem(e) && (t || !e.disabled)
    ) : [];
  }
  render() {
    const t = this.localize.dir() === "rtl", e = !this.loading && (!this.isLeaf || this.lazy);
    return b`
      <div
        part="base"
        class="${P({
      "tree-item": !0,
      "tree-item--expanded": this.expanded,
      "tree-item--selected": this.selected,
      "tree-item--disabled": this.disabled,
      "tree-item--leaf": this.isLeaf,
      "tree-item--has-expand-button": e,
      "tree-item--rtl": this.localize.dir() === "rtl"
    })}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled ? "item--disabled" : ""}
            ${this.expanded ? "item--expanded" : ""}
            ${this.indeterminate ? "item--indeterminate" : ""}
            ${this.selected ? "item--selected" : ""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${P({
      "tree-item__expand-button": !0,
      "tree-item__expand-button--visible": e
    })}
            aria-hidden="true"
          >
            ${Jo(this.loading, () => b` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Jo(
      this.selectable,
      () => b`
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
                  ?checked="${Ae(this.selected)}"
                  ?indeterminate="${this.indeterminate}"
                  tabindex="-1"
                ></sl-checkbox>
              `
    )}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `;
  }
}, L = co;
L.styles = Tr;
L.dependencies = {
  "sl-checkbox": q,
  "sl-icon": U,
  "sl-spinner": po
};
n([
  S()
], L.prototype, "indeterminate", 2);
n([
  S()
], L.prototype, "isLeaf", 2);
n([
  S()
], L.prototype, "loading", 2);
n([
  S()
], L.prototype, "selectable", 2);
n([
  d({ type: Boolean, reflect: !0 })
], L.prototype, "expanded", 2);
n([
  d({ type: Boolean, reflect: !0 })
], L.prototype, "selected", 2);
n([
  d({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", 2);
n([
  d({ type: Boolean, reflect: !0 })
], L.prototype, "lazy", 2);
n([
  $("slot:not([name])")
], L.prototype, "defaultSlot", 2);
n([
  $("slot[name=children]")
], L.prototype, "childrenSlot", 2);
n([
  $(".tree-item__item")
], L.prototype, "itemElement", 2);
n([
  $(".tree-item__children")
], L.prototype, "childrenContainer", 2);
n([
  $(".tree-item__expand-button slot")
], L.prototype, "expandButtonSlot", 2);
n([
  E("loading", { waitUntilFirstUpdate: !0 })
], L.prototype, "handleLoadingChange", 1);
n([
  E("disabled")
], L.prototype, "handleDisabledChange", 1);
n([
  E("selected")
], L.prototype, "handleSelectedChange", 1);
n([
  E("expanded", { waitUntilFirstUpdate: !0 })
], L.prototype, "handleExpandedChange", 1);
n([
  E("expanded", { waitUntilFirstUpdate: !0 })
], L.prototype, "handleExpandAnimation", 1);
n([
  E("lazy", { waitUntilFirstUpdate: !0 })
], L.prototype, "handleLazyChange", 1);
at("tree-item.expand", {
  keyframes: [
    { height: "0", opacity: "0", overflow: "hidden" },
    { height: "auto", opacity: "1", overflow: "hidden" }
  ],
  options: { duration: 250, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});
at("tree-item.collapse", {
  keyframes: [
    { height: "auto", opacity: "1", overflow: "hidden" },
    { height: "0", opacity: "0", overflow: "hidden" }
  ],
  options: { duration: 200, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});
L.define("sl-tree-item");
var Mr = R`
  ${H}

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
`;
function Qo(t, e = !1) {
  function o(r) {
    const l = r.getChildrenItems({ includeDisabled: !1 });
    if (l.length) {
      const c = l.every((h) => h.selected), a = l.every((h) => !h.selected && !h.indeterminate);
      r.selected = c, r.indeterminate = !c && !a;
    }
  }
  function s(r) {
    const l = r.parentElement;
    L.isTreeItem(l) && (o(l), s(l));
  }
  function i(r) {
    for (const l of r.getChildrenItems())
      l.selected = e ? r.selected || l.selected : !l.disabled && r.selected, i(l);
    e && o(r);
  }
  i(t), s(t);
}
var Vt = class extends V {
  constructor() {
    super(), this.selection = "single", this.localize = new st(this), this.clickTarget = null, this.initTreeItem = (t) => {
      t.selectable = this.selection === "multiple", ["expand", "collapse"].filter((e) => !!this.querySelector(`[slot="${e}-icon"]`)).forEach((e) => {
        const o = t.querySelector(`[slot="${e}-icon"]`);
        o === null ? t.append(this.getExpandButtonIcon(e)) : o.hasAttribute("data-default") && o.replaceWith(this.getExpandButtonIcon(e));
      });
    }, this.handleTreeChanged = (t) => {
      for (const e of t) {
        const o = [...e.addedNodes].filter(L.isTreeItem), s = [...e.removedNodes].filter(L.isTreeItem);
        o.forEach(this.initTreeItem), this.lastFocusedItem && s.includes(this.lastFocusedItem) && (this.lastFocusedItem = null);
      }
    }, this.handleFocusOut = (t) => {
      const e = t.relatedTarget;
      (!e || !this.contains(e)) && (this.tabIndex = 0);
    }, this.handleFocusIn = (t) => {
      const e = t.target;
      t.target === this && this.focusItem(this.lastFocusedItem || this.getAllTreeItems()[0]), L.isTreeItem(e) && !e.disabled && (this.lastFocusedItem && (this.lastFocusedItem.tabIndex = -1), this.lastFocusedItem = e, this.tabIndex = -1, e.tabIndex = 0);
    }, this.addEventListener("focusin", this.handleFocusIn), this.addEventListener("focusout", this.handleFocusOut), this.addEventListener("sl-lazy-change", this.handleSlotChange);
  }
  async connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "tree"), this.setAttribute("tabindex", "0"), await this.updateComplete, this.mutationObserver = new MutationObserver(this.handleTreeChanged), this.mutationObserver.observe(this, { childList: !0, subtree: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.mutationObserver.disconnect();
  }
  // Generates a clone of the expand icon element to use for each tree item
  getExpandButtonIcon(t) {
    const o = (t === "expand" ? this.expandedIconSlot : this.collapsedIconSlot).assignedElements({ flatten: !0 })[0];
    if (o) {
      const s = o.cloneNode(!0);
      return [s, ...s.querySelectorAll("[id]")].forEach((i) => i.removeAttribute("id")), s.setAttribute("data-default", ""), s.slot = `${t}-icon`, s;
    }
    return null;
  }
  selectItem(t) {
    const e = [...this.selectedItems];
    if (this.selection === "multiple")
      t.selected = !t.selected, t.lazy && (t.expanded = !0), Qo(t);
    else if (this.selection === "single" || t.isLeaf) {
      const s = this.getAllTreeItems();
      for (const i of s)
        i.selected = i === t;
    } else
      this.selection === "leaf" && (t.expanded = !t.expanded);
    const o = this.selectedItems;
    (e.length !== o.length || o.some((s) => !e.includes(s))) && Promise.all(o.map((s) => s.updateComplete)).then(() => {
      this.emit("sl-selection-change", { detail: { selection: o } });
    });
  }
  getAllTreeItems() {
    return [...this.querySelectorAll("sl-tree-item")];
  }
  focusItem(t) {
    t == null || t.focus();
  }
  handleKeyDown(t) {
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End", "Enter", " "].includes(t.key) || t.composedPath().some((i) => {
      var r;
      return ["input", "textarea"].includes((r = i == null ? void 0 : i.tagName) == null ? void 0 : r.toLowerCase());
    }))
      return;
    const e = this.getFocusableItems(), o = this.localize.dir() === "ltr", s = this.localize.dir() === "rtl";
    if (e.length > 0) {
      t.preventDefault();
      const i = e.findIndex((a) => a.matches(":focus")), r = e[i], l = (a) => {
        const h = e[G(a, 0, e.length - 1)];
        this.focusItem(h);
      }, c = (a) => {
        r.expanded = a;
      };
      t.key === "ArrowDown" ? l(i + 1) : t.key === "ArrowUp" ? l(i - 1) : o && t.key === "ArrowRight" || s && t.key === "ArrowLeft" ? !r || r.disabled || r.expanded || r.isLeaf && !r.lazy ? l(i + 1) : c(!0) : o && t.key === "ArrowLeft" || s && t.key === "ArrowRight" ? !r || r.disabled || r.isLeaf || !r.expanded ? l(i - 1) : c(!1) : t.key === "Home" ? l(0) : t.key === "End" ? l(e.length - 1) : (t.key === "Enter" || t.key === " ") && (r.disabled || this.selectItem(r));
    }
  }
  handleClick(t) {
    const e = t.target, o = e.closest("sl-tree-item"), s = t.composedPath().some((i) => {
      var r;
      return (r = i == null ? void 0 : i.classList) == null ? void 0 : r.contains("tree-item__expand-button");
    });
    !o || o.disabled || e !== this.clickTarget || (s ? o.expanded = !o.expanded : this.selectItem(o));
  }
  handleMouseDown(t) {
    this.clickTarget = t.target;
  }
  handleSlotChange() {
    this.getAllTreeItems().forEach(this.initTreeItem);
  }
  async handleSelectionChange() {
    const t = this.selection === "multiple", e = this.getAllTreeItems();
    this.setAttribute("aria-multiselectable", t ? "true" : "false");
    for (const o of e)
      o.selectable = t;
    t && (await this.updateComplete, [...this.querySelectorAll(":scope > sl-tree-item")].forEach(
      (o) => Qo(o, !0)
    ));
  }
  /** @internal Returns the list of tree items that are selected in the tree. */
  get selectedItems() {
    const t = this.getAllTreeItems(), e = (o) => o.selected;
    return t.filter(e);
  }
  /** @internal Gets focusable tree items in the tree. */
  getFocusableItems() {
    const t = this.getAllTreeItems(), e = /* @__PURE__ */ new Set();
    return t.filter((o) => {
      var s;
      if (o.disabled)
        return !1;
      const i = (s = o.parentElement) == null ? void 0 : s.closest("[role=treeitem]");
      return i && (!i.expanded || i.loading || e.has(i)) && e.add(o), !e.has(o);
    });
  }
  render() {
    return b`
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
    `;
  }
};
Vt.styles = Mr;
n([
  $("slot:not([name])")
], Vt.prototype, "defaultSlot", 2);
n([
  $("slot[name=expand-icon]")
], Vt.prototype, "expandedIconSlot", 2);
n([
  $("slot[name=collapse-icon]")
], Vt.prototype, "collapsedIconSlot", 2);
n([
  d()
], Vt.prototype, "selection", 2);
n([
  E("selection")
], Vt.prototype, "handleSelectionChange", 1);
Vt.define("sl-tree");
oo("../../node_modules/@shoelace-style/shoelace/dist");
