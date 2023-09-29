/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = window, Qe = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, to = Symbol(), uo = /* @__PURE__ */ new WeakMap();
let Io = class {
  constructor(e, o, r) {
    if (this._$cssResult$ = !0, r !== to)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = o;
  }
  get styleSheet() {
    let e = this.o;
    const o = this.t;
    if (Qe && e === void 0) {
      const r = o !== void 0 && o.length === 1;
      r && (e = uo.get(o)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && uo.set(o, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const mr = (t) => new Io(typeof t == "string" ? t : t + "", void 0, to), H = (t, ...e) => {
  const o = t.length === 1 ? t[0] : e.reduce((r, s, i) => r + ((l) => {
    if (l._$cssResult$ === !0)
      return l.cssText;
    if (typeof l == "number")
      return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + t[i + 1], t[0]);
  return new Io(o, t, to);
}, vr = (t, e) => {
  Qe ? t.adoptedStyleSheets = e.map((o) => o instanceof CSSStyleSheet ? o : o.styleSheet) : e.forEach((o) => {
    const r = document.createElement("style"), s = ce.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = o.cssText, t.appendChild(r);
  });
}, ho = Qe ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let o = "";
  for (const r of e.cssRules)
    o += r.cssText;
  return mr(o);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ce;
const pe = window, po = pe.trustedTypes, yr = po ? po.emptyScript : "", fo = pe.reactiveElementPolyfillSupport, Xt = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? yr : null;
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
} }, No = (t, e) => e !== t && (e == e || t == t), Ee = { attribute: !0, type: String, converter: Xt, reflect: !1, hasChanged: No }, Ne = "finalized";
let Mt = class extends HTMLElement {
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
    return this.elementProperties.forEach((o, r) => {
      const s = this._$Ep(r, o);
      s !== void 0 && (this._$Ev.set(s, r), e.push(s));
    }), e;
  }
  static createProperty(e, o = Ee) {
    if (o.state && (o.attribute = !1), this.finalize(), this.elementProperties.set(e, o), !o.noAccessor && !this.prototype.hasOwnProperty(e)) {
      const r = typeof e == "symbol" ? Symbol() : "__" + e, s = this.getPropertyDescriptor(e, r, o);
      s !== void 0 && Object.defineProperty(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, o, r) {
    return { get() {
      return this[o];
    }, set(s) {
      const i = this[e];
      this[o] = s, this.requestUpdate(e, i, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || Ee;
  }
  static finalize() {
    if (this.hasOwnProperty(Ne))
      return !1;
    this[Ne] = !0;
    const e = Object.getPrototypeOf(this);
    if (e.finalize(), e.h !== void 0 && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const o = this.properties, r = [...Object.getOwnPropertyNames(o), ...Object.getOwnPropertySymbols(o)];
      for (const s of r)
        this.createProperty(s, o[s]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(e) {
    const o = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const s of r)
        o.unshift(ho(s));
    } else
      e !== void 0 && o.push(ho(e));
    return o;
  }
  static _$Ep(e, o) {
    const r = o.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  _$Eu() {
    var e;
    this._$E_ = new Promise((o) => this.enableUpdating = o), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (e = this.constructor.h) === null || e === void 0 || e.forEach((o) => o(this));
  }
  addController(e) {
    var o, r;
    ((o = this._$ES) !== null && o !== void 0 ? o : this._$ES = []).push(e), this.renderRoot !== void 0 && this.isConnected && ((r = e.hostConnected) === null || r === void 0 || r.call(e));
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
    return vr(o, this.constructor.elementStyles), o;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$ES) === null || e === void 0 || e.forEach((o) => {
      var r;
      return (r = o.hostConnected) === null || r === void 0 ? void 0 : r.call(o);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((o) => {
      var r;
      return (r = o.hostDisconnected) === null || r === void 0 ? void 0 : r.call(o);
    });
  }
  attributeChangedCallback(e, o, r) {
    this._$AK(e, r);
  }
  _$EO(e, o, r = Ee) {
    var s;
    const i = this.constructor._$Ep(e, r);
    if (i !== void 0 && r.reflect === !0) {
      const l = (((s = r.converter) === null || s === void 0 ? void 0 : s.toAttribute) !== void 0 ? r.converter : Xt).toAttribute(o, r.type);
      this._$El = e, l == null ? this.removeAttribute(i) : this.setAttribute(i, l), this._$El = null;
    }
  }
  _$AK(e, o) {
    var r;
    const s = this.constructor, i = s._$Ev.get(e);
    if (i !== void 0 && this._$El !== i) {
      const l = s.getPropertyOptions(i), c = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((r = l.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? l.converter : Xt;
      this._$El = i, this[i] = c.fromAttribute(o, l.type), this._$El = null;
    }
  }
  requestUpdate(e, o, r) {
    let s = !0;
    e !== void 0 && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || No)(this[e], o) ? (this._$AL.has(e) || this._$AL.set(e, o), r.reflect === !0 && this._$El !== e && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(e, r))) : s = !1), !this.isUpdatePending && s && (this._$E_ = this._$Ej());
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
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((s, i) => this[i] = s), this._$Ei = void 0);
    let o = !1;
    const r = this._$AL;
    try {
      o = this.shouldUpdate(r), o ? (this.willUpdate(r), (e = this._$ES) === null || e === void 0 || e.forEach((s) => {
        var i;
        return (i = s.hostUpdate) === null || i === void 0 ? void 0 : i.call(s);
      }), this.update(r)) : this._$Ek();
    } catch (s) {
      throw o = !1, this._$Ek(), s;
    }
    o && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var o;
    (o = this._$ES) === null || o === void 0 || o.forEach((r) => {
      var s;
      return (s = r.hostUpdated) === null || s === void 0 ? void 0 : s.call(r);
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
    this._$EC !== void 0 && (this._$EC.forEach((o, r) => this._$EO(r, this[r], o)), this._$EC = void 0), this._$Ek();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Mt[Ne] = !0, Mt.elementProperties = /* @__PURE__ */ new Map(), Mt.elementStyles = [], Mt.shadowRootOptions = { mode: "open" }, fo == null || fo({ ReactiveElement: Mt }), ((Ce = pe.reactiveElementVersions) !== null && Ce !== void 0 ? Ce : pe.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Se;
const fe = window, Rt = fe.trustedTypes, go = Rt ? Rt.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Ue = "$lit$", pt = `lit$${(Math.random() + "").slice(9)}$`, Uo = "?" + pt, wr = `<${Uo}>`, At = document, Yt = () => At.createComment(""), Zt = (t) => t === null || typeof t != "object" && typeof t != "function", jo = Array.isArray, _r = (t) => jo(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", ze = `[ 	
\f\r]`, Nt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, bo = /-->/g, mo = />/g, yt = RegExp(`>|${ze}(?:([^\\s"'>=/]+)(${ze}*=${ze}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), vo = /'/g, yo = /"/g, qo = /^(?:script|style|textarea|title)$/i, xr = (t) => (e, ...o) => ({ _$litType$: t, strings: e, values: o }), A = xr(1), K = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), wo = /* @__PURE__ */ new WeakMap(), $t = At.createTreeWalker(At, 129, null, !1);
function Wo(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return go !== void 0 ? go.createHTML(e) : e;
}
const $r = (t, e) => {
  const o = t.length - 1, r = [];
  let s, i = e === 2 ? "<svg>" : "", l = Nt;
  for (let c = 0; c < o; c++) {
    const a = t[c];
    let u, p, d = -1, g = 0;
    for (; g < a.length && (l.lastIndex = g, p = l.exec(a), p !== null); )
      g = l.lastIndex, l === Nt ? p[1] === "!--" ? l = bo : p[1] !== void 0 ? l = mo : p[2] !== void 0 ? (qo.test(p[2]) && (s = RegExp("</" + p[2], "g")), l = yt) : p[3] !== void 0 && (l = yt) : l === yt ? p[0] === ">" ? (l = s ?? Nt, d = -1) : p[1] === void 0 ? d = -2 : (d = l.lastIndex - p[2].length, u = p[1], l = p[3] === void 0 ? yt : p[3] === '"' ? yo : vo) : l === yo || l === vo ? l = yt : l === bo || l === mo ? l = Nt : (l = yt, s = void 0);
    const f = l === yt && t[c + 1].startsWith("/>") ? " " : "";
    i += l === Nt ? a + wr : d >= 0 ? (r.push(u), a.slice(0, d) + Ue + a.slice(d) + pt + f) : a + pt + (d === -2 ? (r.push(void 0), c) : f);
  }
  return [Wo(t, i + (t[o] || "<?>") + (e === 2 ? "</svg>" : "")), r];
};
class Jt {
  constructor({ strings: e, _$litType$: o }, r) {
    let s;
    this.parts = [];
    let i = 0, l = 0;
    const c = e.length - 1, a = this.parts, [u, p] = $r(e, o);
    if (this.el = Jt.createElement(u, r), $t.currentNode = this.el.content, o === 2) {
      const d = this.el.content, g = d.firstChild;
      g.remove(), d.append(...g.childNodes);
    }
    for (; (s = $t.nextNode()) !== null && a.length < c; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) {
          const d = [];
          for (const g of s.getAttributeNames())
            if (g.endsWith(Ue) || g.startsWith(pt)) {
              const f = p[l++];
              if (d.push(g), f !== void 0) {
                const b = s.getAttribute(f.toLowerCase() + Ue).split(pt), m = /([.?@])?(.*)/.exec(f);
                a.push({ type: 1, index: i, name: m[2], strings: b, ctor: m[1] === "." ? Ar : m[1] === "?" ? Er : m[1] === "@" ? Sr : we });
              } else
                a.push({ type: 6, index: i });
            }
          for (const g of d)
            s.removeAttribute(g);
        }
        if (qo.test(s.tagName)) {
          const d = s.textContent.split(pt), g = d.length - 1;
          if (g > 0) {
            s.textContent = Rt ? Rt.emptyScript : "";
            for (let f = 0; f < g; f++)
              s.append(d[f], Yt()), $t.nextNode(), a.push({ type: 2, index: ++i });
            s.append(d[g], Yt());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === Uo)
          a.push({ type: 2, index: i });
        else {
          let d = -1;
          for (; (d = s.data.indexOf(pt, d + 1)) !== -1; )
            a.push({ type: 7, index: i }), d += pt.length - 1;
        }
      i++;
    }
  }
  static createElement(e, o) {
    const r = At.createElement("template");
    return r.innerHTML = e, r;
  }
}
function Vt(t, e, o = t, r) {
  var s, i, l, c;
  if (e === K)
    return e;
  let a = r !== void 0 ? (s = o._$Co) === null || s === void 0 ? void 0 : s[r] : o._$Cl;
  const u = Zt(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== u && ((i = a == null ? void 0 : a._$AO) === null || i === void 0 || i.call(a, !1), u === void 0 ? a = void 0 : (a = new u(t), a._$AT(t, o, r)), r !== void 0 ? ((l = (c = o)._$Co) !== null && l !== void 0 ? l : c._$Co = [])[r] = a : o._$Cl = a), a !== void 0 && (e = Vt(t, a._$AS(t, e.values), a, r)), e;
}
class kr {
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
    const { el: { content: r }, parts: s } = this._$AD, i = ((o = e == null ? void 0 : e.creationScope) !== null && o !== void 0 ? o : At).importNode(r, !0);
    $t.currentNode = i;
    let l = $t.nextNode(), c = 0, a = 0, u = s[0];
    for (; u !== void 0; ) {
      if (c === u.index) {
        let p;
        u.type === 2 ? p = new te(l, l.nextSibling, this, e) : u.type === 1 ? p = new u.ctor(l, u.name, u.strings, this, e) : u.type === 6 && (p = new zr(l, this, e)), this._$AV.push(p), u = s[++a];
      }
      c !== (u == null ? void 0 : u.index) && (l = $t.nextNode(), c++);
    }
    return $t.currentNode = At, i;
  }
  v(e) {
    let o = 0;
    for (const r of this._$AV)
      r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, o), o += r.strings.length - 2) : r._$AI(e[o])), o++;
  }
}
class te {
  constructor(e, o, r, s) {
    var i;
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = o, this._$AM = r, this.options = s, this._$Cp = (i = s == null ? void 0 : s.isConnected) === null || i === void 0 || i;
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
    e = Vt(this, e, o), Zt(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== K && this._(e) : e._$litType$ !== void 0 ? this.g(e) : e.nodeType !== void 0 ? this.$(e) : _r(e) ? this.T(e) : this._(e);
  }
  k(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  $(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.k(e));
  }
  _(e) {
    this._$AH !== M && Zt(this._$AH) ? this._$AA.nextSibling.data = e : this.$(At.createTextNode(e)), this._$AH = e;
  }
  g(e) {
    var o;
    const { values: r, _$litType$: s } = e, i = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = Jt.createElement(Wo(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) === null || o === void 0 ? void 0 : o._$AD) === i)
      this._$AH.v(r);
    else {
      const l = new kr(i, this), c = l.u(this.options);
      l.v(r), this.$(c), this._$AH = l;
    }
  }
  _$AC(e) {
    let o = wo.get(e.strings);
    return o === void 0 && wo.set(e.strings, o = new Jt(e)), o;
  }
  T(e) {
    jo(this._$AH) || (this._$AH = [], this._$AR());
    const o = this._$AH;
    let r, s = 0;
    for (const i of e)
      s === o.length ? o.push(r = new te(this.k(Yt()), this.k(Yt()), this, this.options)) : r = o[s], r._$AI(i), s++;
    s < o.length && (this._$AR(r && r._$AB.nextSibling, s), o.length = s);
  }
  _$AR(e = this._$AA.nextSibling, o) {
    var r;
    for ((r = this._$AP) === null || r === void 0 || r.call(this, !1, !0, o); e && e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    var o;
    this._$AM === void 0 && (this._$Cp = e, (o = this._$AP) === null || o === void 0 || o.call(this, e));
  }
}
class we {
  constructor(e, o, r, s, i) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = o, this._$AM = s, this.options = i, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = M;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, o = this, r, s) {
    const i = this.strings;
    let l = !1;
    if (i === void 0)
      e = Vt(this, e, o, 0), l = !Zt(e) || e !== this._$AH && e !== K, l && (this._$AH = e);
    else {
      const c = e;
      let a, u;
      for (e = i[0], a = 0; a < i.length - 1; a++)
        u = Vt(this, c[r + a], o, a), u === K && (u = this._$AH[a]), l || (l = !Zt(u) || u !== this._$AH[a]), u === M ? e = M : e !== M && (e += (u ?? "") + i[a + 1]), this._$AH[a] = u;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Ar extends we {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
}
const Cr = Rt ? Rt.emptyScript : "";
class Er extends we {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    e && e !== M ? this.element.setAttribute(this.name, Cr) : this.element.removeAttribute(this.name);
  }
}
class Sr extends we {
  constructor(e, o, r, s, i) {
    super(e, o, r, s, i), this.type = 5;
  }
  _$AI(e, o = this) {
    var r;
    if ((e = (r = Vt(this, e, o, 0)) !== null && r !== void 0 ? r : M) === K)
      return;
    const s = this._$AH, i = e === M && s !== M || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, l = e !== M && (s === M || i);
    i && this.element.removeEventListener(this.name, this, s), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var o, r;
    typeof this._$AH == "function" ? this._$AH.call((r = (o = this.options) === null || o === void 0 ? void 0 : o.host) !== null && r !== void 0 ? r : this.element, e) : this._$AH.handleEvent(e);
  }
}
class zr {
  constructor(e, o, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = o, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Vt(this, e);
  }
}
const _o = fe.litHtmlPolyfillSupport;
_o == null || _o(Jt, te), ((Se = fe.litHtmlVersions) !== null && Se !== void 0 ? Se : fe.litHtmlVersions = []).push("2.8.0");
const Mr = (t, e, o) => {
  var r, s;
  const i = (r = o == null ? void 0 : o.renderBefore) !== null && r !== void 0 ? r : e;
  let l = i._$litPart$;
  if (l === void 0) {
    const c = (s = o == null ? void 0 : o.renderBefore) !== null && s !== void 0 ? s : null;
    i._$litPart$ = l = new te(e.insertBefore(Yt(), c), c, void 0, o ?? {});
  }
  return l._$AI(t), l;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Me, Le;
let Gt = class extends Mt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e, o;
    const r = super.createRenderRoot();
    return (e = (o = this.renderOptions).renderBefore) !== null && e !== void 0 || (o.renderBefore = r.firstChild), r;
  }
  update(e) {
    const o = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Mr(o, this.renderRoot, this.renderOptions);
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
    return K;
  }
};
Gt.finalized = !0, Gt._$litElement$ = !0, (Me = globalThis.litElementHydrateSupport) === null || Me === void 0 || Me.call(globalThis, { LitElement: Gt });
const xo = globalThis.litElementPolyfillSupport;
xo == null || xo({ LitElement: Gt });
((Le = globalThis.litElementVersions) !== null && Le !== void 0 ? Le : globalThis.litElementVersions = []).push("3.3.3");
var Q = H`
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
`, Lr = H`
  ${Q}

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
const je = /* @__PURE__ */ new Set(), Pr = new MutationObserver(Xo), Lt = /* @__PURE__ */ new Map();
let Ko = document.documentElement.dir || "ltr", Go = document.documentElement.lang || navigator.language, wt;
Pr.observe(document.documentElement, {
  attributes: !0,
  attributeFilter: ["dir", "lang"]
});
function Tr(...t) {
  t.map((e) => {
    const o = e.$code.toLowerCase();
    Lt.has(o) ? Lt.set(o, Object.assign(Object.assign({}, Lt.get(o)), e)) : Lt.set(o, e), wt || (wt = e);
  }), Xo();
}
function Xo() {
  Ko = document.documentElement.dir || "ltr", Go = document.documentElement.lang || navigator.language, [...je.keys()].map((t) => {
    typeof t.requestUpdate == "function" && t.requestUpdate();
  });
}
let Rr = class {
  constructor(e) {
    this.host = e, this.host.addController(this);
  }
  hostConnected() {
    je.add(this.host);
  }
  hostDisconnected() {
    je.delete(this.host);
  }
  dir() {
    return `${this.host.dir || Ko}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || Go}`.toLowerCase();
  }
  getTranslationData(e) {
    var o, r;
    const s = new Intl.Locale(e.replace(/_/g, "-")), i = s == null ? void 0 : s.language.toLowerCase(), l = (r = (o = s == null ? void 0 : s.region) === null || o === void 0 ? void 0 : o.toLowerCase()) !== null && r !== void 0 ? r : "", c = Lt.get(`${i}-${l}`), a = Lt.get(i);
    return { locale: s, language: i, region: l, primary: c, secondary: a };
  }
  exists(e, o) {
    var r;
    const { primary: s, secondary: i } = this.getTranslationData((r = o.lang) !== null && r !== void 0 ? r : this.lang());
    return o = Object.assign({ includeFallback: !1 }, o), !!(s && s[e] || i && i[e] || o.includeFallback && wt && wt[e]);
  }
  term(e, ...o) {
    const { primary: r, secondary: s } = this.getTranslationData(this.lang());
    let i;
    if (r && r[e])
      i = r[e];
    else if (s && s[e])
      i = s[e];
    else if (wt && wt[e])
      i = wt[e];
    else
      return console.error(`No translation found for: ${String(e)}`), String(e);
    return typeof i == "function" ? i(...o) : i;
  }
  date(e, o) {
    return e = new Date(e), new Intl.DateTimeFormat(this.lang(), o).format(e);
  }
  number(e, o) {
    return e = Number(e), isNaN(e) ? "" : new Intl.NumberFormat(this.lang(), o).format(e);
  }
  relativeTime(e, o, r) {
    return new Intl.RelativeTimeFormat(this.lang(), r).format(e, o);
  }
};
var Et = class extends Rr {
}, Yo = Object.defineProperty, Vr = Object.defineProperties, Or = Object.getOwnPropertyDescriptor, Dr = Object.getOwnPropertyDescriptors, $o = Object.getOwnPropertySymbols, Fr = Object.prototype.hasOwnProperty, Br = Object.prototype.propertyIsEnumerable, ko = (t, e, o) => e in t ? Yo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, St = (t, e) => {
  for (var o in e || (e = {}))
    Fr.call(e, o) && ko(t, o, e[o]);
  if ($o)
    for (var o of $o(e))
      Br.call(e, o) && ko(t, o, e[o]);
  return t;
}, _e = (t, e) => Vr(t, Dr(e)), n = (t, e, o, r) => {
  for (var s = r > 1 ? void 0 : r ? Or(e, o) : e, i = t.length - 1, l; i >= 0; i--)
    (l = t[i]) && (s = (r ? l(e, o, s) : l(s)) || s);
  return r && s && Yo(e, o, s), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Hr = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(o) {
  o.createProperty(e.key, t);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() {
  typeof e.initializer == "function" && (this[e.key] = e.initializer.call(this));
}, finisher(o) {
  o.createProperty(e.key, t);
} }, Ir = (t, e, o) => {
  e.constructor.createProperty(o, t);
};
function h(t) {
  return (e, o) => o !== void 0 ? Ir(t, e, o) : Hr(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function V(t) {
  return h({ ...t, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Zo = ({ finisher: t, descriptor: e }) => (o, r) => {
  var s;
  if (r === void 0) {
    const i = (s = o.originalKey) !== null && s !== void 0 ? s : o.key, l = e != null ? { kind: "method", placement: "prototype", key: i, descriptor: e(o.key) } : { ...o, key: i };
    return t != null && (l.finisher = function(c) {
      t(c, i);
    }), l;
  }
  {
    const i = o.constructor;
    e !== void 0 && Object.defineProperty(o, r, e(r)), t == null || t(i, r);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Nr(t) {
  return Zo({ finisher: (e, o) => {
    Object.assign(e.prototype[o], t);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function T(t, e) {
  return Zo({ descriptor: (o) => {
    const r = { get() {
      var s, i;
      return (i = (s = this.renderRoot) === null || s === void 0 ? void 0 : s.querySelector(t)) !== null && i !== void 0 ? i : null;
    }, enumerable: !0, configurable: !0 };
    if (e) {
      const s = typeof o == "symbol" ? Symbol() : "__" + o;
      r.get = function() {
        var i, l;
        return this[s] === void 0 && (this[s] = (l = (i = this.renderRoot) === null || i === void 0 ? void 0 : i.querySelector(t)) !== null && l !== void 0 ? l : null), this[s];
      };
    }
    return r;
  } });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Pe;
((Pe = window.HTMLSlotElement) === null || Pe === void 0 ? void 0 : Pe.prototype.assignedElements) != null;
var O = class extends Gt {
  constructor() {
    super(), Object.entries(this.constructor.dependencies).forEach(([t, e]) => {
      this.constructor.define(t, e);
    });
  }
  emit(t, e) {
    const o = new CustomEvent(t, St({
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {}
    }, e));
    return this.dispatchEvent(o), o;
  }
  /* eslint-enable */
  static define(t, e = this, o = {}) {
    const r = customElements.get(t);
    if (!r) {
      customElements.define(t, class extends e {
      }, o);
      return;
    }
    let s = " (unknown version)", i = s;
    "version" in e && e.version && (s = " v" + e.version), "version" in r && r.version && (i = " v" + r.version), !(s && i && s === i) && console.warn(
      `Attempted to register <${t}>${s}, but <${t}>${i} has already been registered.`
    );
  }
};
O.version = "2.9.0";
O.dependencies = {};
n([
  h()
], O.prototype, "dir", 2);
n([
  h()
], O.prototype, "lang", 2);
var Jo = class extends O {
  constructor() {
    super(...arguments), this.localize = new Et(this);
  }
  render() {
    return A`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
Jo.styles = Lr;
var Ut = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakSet(), se = /* @__PURE__ */ new WeakMap(), eo = class {
  constructor(t, e) {
    this.handleFormData = (o) => {
      const r = this.options.disabled(this.host), s = this.options.name(this.host), i = this.options.value(this.host), l = this.host.tagName.toLowerCase() === "sl-button";
      !r && !l && typeof s == "string" && s.length > 0 && typeof i < "u" && (Array.isArray(i) ? i.forEach((c) => {
        o.formData.append(s, c.toString());
      }) : o.formData.append(s, i.toString()));
    }, this.handleFormSubmit = (o) => {
      var r;
      const s = this.options.disabled(this.host), i = this.options.reportValidity;
      this.form && !this.form.noValidate && ((r = Ut.get(this.form)) == null || r.forEach((l) => {
        this.setUserInteracted(l, !0);
      })), this.form && !this.form.noValidate && !s && !i(this.host) && (o.preventDefault(), o.stopImmediatePropagation());
    }, this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host)), this.setUserInteracted(this.host, !1), se.set(this.host, []);
    }, this.handleInteraction = (o) => {
      const r = se.get(this.host);
      r.includes(o.type) || r.push(o.type), r.length === this.options.assumeInteractionOn.length && this.setUserInteracted(this.host, !0);
    }, this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const o = this.form.querySelectorAll("*");
        for (const r of o)
          if (typeof r.reportValidity == "function" && !r.reportValidity())
            return !1;
      }
      return !0;
    }, (this.host = t).addController(this), this.options = St({
      form: (o) => {
        if (o.hasAttribute("form") && o.getAttribute("form") !== "") {
          const r = o.getRootNode(), s = o.getAttribute("form");
          if (s)
            return r.getElementById(s);
        }
        return o.closest("form");
      },
      name: (o) => o.name,
      value: (o) => o.value,
      defaultValue: (o) => o.defaultValue,
      disabled: (o) => {
        var r;
        return (r = o.disabled) != null ? r : !1;
      },
      reportValidity: (o) => typeof o.reportValidity == "function" ? o.reportValidity() : !0,
      setValue: (o, r) => o.value = r,
      assumeInteractionOn: ["sl-input"]
    }, e);
  }
  hostConnected() {
    const t = this.options.form(this.host);
    t && this.attachForm(t), se.set(this.host, []), this.options.assumeInteractionOn.forEach((e) => {
      this.host.addEventListener(e, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm(), se.delete(this.host), this.options.assumeInteractionOn.forEach((t) => {
      this.host.removeEventListener(t, this.handleInteraction);
    });
  }
  hostUpdated() {
    const t = this.options.form(this.host);
    t || this.detachForm(), t && this.form !== t && (this.detachForm(), this.attachForm(t)), this.host.hasUpdated && this.setValidity(this.host.validity.valid);
  }
  attachForm(t) {
    t ? (this.form = t, Ut.has(this.form) ? Ut.get(this.form).add(this.host) : Ut.set(this.form, /* @__PURE__ */ new Set([this.host])), this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit), this.form.addEventListener("reset", this.handleFormReset), jt.has(this.form) || (jt.set(this.form, this.form.reportValidity), this.form.reportValidity = () => this.reportFormValidity())) : this.form = void 0;
  }
  detachForm() {
    var t;
    this.form && ((t = Ut.get(this.form)) == null || t.delete(this.host), this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form.removeEventListener("reset", this.handleFormReset), jt.has(this.form) && (this.form.reportValidity = jt.get(this.form), jt.delete(this.form))), this.form = void 0;
  }
  setUserInteracted(t, e) {
    e ? Te.add(t) : Te.delete(t), t.requestUpdate();
  }
  doAction(t, e) {
    if (this.form) {
      const o = document.createElement("button");
      o.type = t, o.style.position = "absolute", o.style.width = "0", o.style.height = "0", o.style.clipPath = "inset(50%)", o.style.overflow = "hidden", o.style.whiteSpace = "nowrap", e && (o.name = e.name, o.value = e.value, ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((r) => {
        e.hasAttribute(r) && o.setAttribute(r, e.getAttribute(r));
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
    const e = this.host, o = !!Te.has(e), r = !!e.required;
    e.toggleAttribute("data-required", r), e.toggleAttribute("data-optional", !r), e.toggleAttribute("data-invalid", !t), e.toggleAttribute("data-valid", t), e.toggleAttribute("data-user-invalid", !t && o), e.toggleAttribute("data-user-valid", t && o);
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
}, oo = Object.freeze({
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
Object.freeze(_e(St({}, oo), {
  valid: !1,
  valueMissing: !0
}));
Object.freeze(_e(St({}, oo), {
  valid: !1,
  customError: !0
}));
var Ur = H`
  ${Q}

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
`, ro = class {
  constructor(t, ...e) {
    this.slotNames = [], this.handleSlotChange = (o) => {
      const r = o.target;
      (this.slotNames.includes("[default]") && !r.name || r.name && this.slotNames.includes(r.name)) && this.host.requestUpdate();
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
}, qe = "";
function We(t) {
  qe = t;
}
function jr(t = "") {
  if (!qe) {
    const e = [...document.getElementsByTagName("script")], o = e.find((r) => r.hasAttribute("data-shoelace"));
    if (o)
      We(o.getAttribute("data-shoelace"));
    else {
      const r = e.find((i) => /shoelace(\.min)?\.js($|\?)/.test(i.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));
      let s = "";
      r && (s = r.getAttribute("src")), We(s.split("/").slice(0, -1).join("/"));
    }
  }
  return qe.replace(/\/$/, "") + (t ? `/${t.replace(/^\//, "")}` : "");
}
var qr = {
  name: "default",
  resolver: (t) => jr(`assets/icons/${t}.svg`)
}, Wr = qr, Ao = {
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
}, Kr = {
  name: "system",
  resolver: (t) => t in Ao ? `data:image/svg+xml,${encodeURIComponent(Ao[t])}` : ""
}, Gr = Kr, Xr = [Wr, Gr], Ke = [];
function Yr(t) {
  Ke.push(t);
}
function Zr(t) {
  Ke = Ke.filter((e) => e !== t);
}
function Co(t) {
  return Xr.find((e) => e.name === t);
}
var Jr = H`
  ${Q}

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
function X(t, e) {
  const o = St({
    waitUntilFirstUpdate: !1
  }, e);
  return (r, s) => {
    const { update: i } = r, l = Array.isArray(t) ? t : [t];
    r.update = function(c) {
      l.forEach((a) => {
        const u = a;
        if (c.has(u)) {
          const p = c.get(u), d = this[u];
          p !== d && (!o.waitUntilFirstUpdate || this.hasUpdated) && this[s](p, d);
        }
      }), i.call(this, c);
    };
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qr = (t, e) => e === void 0 ? (t == null ? void 0 : t._$litType$) !== void 0 : (t == null ? void 0 : t._$litType$) === e, ts = (t) => t.strings === void 0, es = {}, os = (t, e = es) => t._$AH = e;
var qt = Symbol(), ie = Symbol(), Re, Ve = /* @__PURE__ */ new Map(), Y = class extends O {
  constructor() {
    super(...arguments), this.initialRender = !1, this.svg = null, this.label = "", this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(t, e) {
    var o;
    let r;
    if (e != null && e.spriteSheet)
      return A`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;
    try {
      if (r = await fetch(t, { mode: "cors" }), !r.ok)
        return r.status === 410 ? qt : ie;
    } catch {
      return ie;
    }
    try {
      const s = document.createElement("div");
      s.innerHTML = await r.text();
      const i = s.firstElementChild;
      if (((o = i == null ? void 0 : i.tagName) == null ? void 0 : o.toLowerCase()) !== "svg")
        return qt;
      Re || (Re = new DOMParser());
      const c = Re.parseFromString(i.outerHTML, "text/html").body.querySelector("svg");
      return c ? (c.part.add("svg"), document.adoptNode(c)) : qt;
    } catch {
      return qt;
    }
  }
  connectedCallback() {
    super.connectedCallback(), Yr(this);
  }
  firstUpdated() {
    this.initialRender = !0, this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Zr(this);
  }
  getIconSource() {
    const t = Co(this.library);
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
    const { url: e, fromLibrary: o } = this.getIconSource(), r = o ? Co(this.library) : void 0;
    if (!e) {
      this.svg = null;
      return;
    }
    let s = Ve.get(e);
    if (s || (s = this.resolveIcon(e, r), Ve.set(e, s)), !this.initialRender)
      return;
    const i = await s;
    if (i === ie && Ve.delete(e), e === this.getIconSource().url) {
      if (Qr(i)) {
        this.svg = i;
        return;
      }
      switch (i) {
        case ie:
        case qt:
          this.svg = null, this.emit("sl-error");
          break;
        default:
          this.svg = i.cloneNode(!0), (t = r == null ? void 0 : r.mutator) == null || t.call(r, this.svg), this.emit("sl-load");
      }
    }
  }
  render() {
    return this.svg;
  }
};
Y.styles = Jr;
n([
  V()
], Y.prototype, "svg", 2);
n([
  h({ reflect: !0 })
], Y.prototype, "name", 2);
n([
  h()
], Y.prototype, "src", 2);
n([
  h()
], Y.prototype, "label", 2);
n([
  h({ reflect: !0 })
], Y.prototype, "library", 2);
n([
  X("label")
], Y.prototype, "handleLabelChange", 1);
n([
  X(["name", "src", "library"])
], Y.prototype, "setIcon", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, xe = (t) => (...e) => ({ _$litDirective$: t, values: e });
let $e = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, o, r) {
    this._$Ct = e, this._$AM = o, this._$Ci = r;
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
const B = xe(class extends $e {
  constructor(t) {
    var e;
    if (super(t), t.type !== ct.ATTRIBUTE || t.name !== "class" || ((e = t.strings) === null || e === void 0 ? void 0 : e.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return " " + Object.keys(t).filter((e) => t[e]).join(" ") + " ";
  }
  update(t, [e]) {
    var o, r;
    if (this.it === void 0) {
      this.it = /* @__PURE__ */ new Set(), t.strings !== void 0 && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((i) => i !== "")));
      for (const i in e)
        e[i] && !(!((o = this.nt) === null || o === void 0) && o.has(i)) && this.it.add(i);
      return this.render(e);
    }
    const s = t.element.classList;
    this.it.forEach((i) => {
      i in e || (s.remove(i), this.it.delete(i));
    });
    for (const i in e) {
      const l = !!e[i];
      l === this.it.has(i) || !((r = this.nt) === null || r === void 0) && r.has(i) || (l ? (s.add(i), this.it.add(i)) : (s.remove(i), this.it.delete(i)));
    }
    return K;
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qo = Symbol.for(""), rs = (t) => {
  if ((t == null ? void 0 : t.r) === Qo)
    return t == null ? void 0 : t._$litStatic$;
}, ge = (t, ...e) => ({ _$litStatic$: e.reduce((o, r, s) => o + ((i) => {
  if (i._$litStatic$ !== void 0)
    return i._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(r) + t[s + 1], t[0]), r: Qo }), Eo = /* @__PURE__ */ new Map(), ss = (t) => (e, ...o) => {
  const r = o.length;
  let s, i;
  const l = [], c = [];
  let a, u = 0, p = !1;
  for (; u < r; ) {
    for (a = e[u]; u < r && (i = o[u], (s = rs(i)) !== void 0); )
      a += s + e[++u], p = !0;
    u !== r && c.push(i), l.push(a), u++;
  }
  if (u === r && l.push(e[r]), p) {
    const d = l.join("$$lit$$");
    (e = Eo.get(d)) === void 0 && (l.raw = l, Eo.set(d, e = l)), o = c;
  }
  return t(e, ...o);
}, ue = ss(A);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y = (t) => t ?? M;
var x = class extends O {
  constructor() {
    super(...arguments), this.formControlController = new eo(this, {
      form: (t) => {
        if (t.hasAttribute("form")) {
          const e = t.getRootNode(), o = t.getAttribute("form");
          return e.getElementById(o);
        }
        return t.closest("form");
      },
      assumeInteractionOn: ["click"]
    }), this.hasSlotController = new ro(this, "[default]", "prefix", "suffix"), this.localize = new Et(this), this.hasFocus = !1, this.invalid = !1, this.title = "", this.variant = "default", this.size = "medium", this.caret = !1, this.disabled = !1, this.loading = !1, this.outline = !1, this.pill = !1, this.circle = !1, this.type = "button", this.name = "", this.value = "", this.href = "", this.rel = "noreferrer noopener";
  }
  /** Gets the validity state object */
  get validity() {
    return this.isButton() ? this.button.validity : oo;
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
    const t = this.isLink(), e = t ? ge`a` : ge`button`;
    return ue`
      <${e}
        part="base"
        class=${B({
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
        ?disabled=${y(t ? void 0 : this.disabled)}
        type=${y(t ? void 0 : this.type)}
        title=${this.title}
        name=${y(t ? void 0 : this.name)}
        value=${y(t ? void 0 : this.value)}
        href=${y(t ? this.href : void 0)}
        target=${y(t ? this.target : void 0)}
        download=${y(t ? this.download : void 0)}
        rel=${y(t ? this.rel : void 0)}
        role=${y(t ? void 0 : "button")}
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
        ${this.caret ? ue` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? ue`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${e}>
    `;
  }
};
x.styles = Ur;
x.dependencies = {
  "sl-icon": Y,
  "sl-spinner": Jo
};
n([
  T(".button")
], x.prototype, "button", 2);
n([
  V()
], x.prototype, "hasFocus", 2);
n([
  V()
], x.prototype, "invalid", 2);
n([
  h()
], x.prototype, "title", 2);
n([
  h({ reflect: !0 })
], x.prototype, "variant", 2);
n([
  h({ reflect: !0 })
], x.prototype, "size", 2);
n([
  h({ type: Boolean, reflect: !0 })
], x.prototype, "caret", 2);
n([
  h({ type: Boolean, reflect: !0 })
], x.prototype, "disabled", 2);
n([
  h({ type: Boolean, reflect: !0 })
], x.prototype, "loading", 2);
n([
  h({ type: Boolean, reflect: !0 })
], x.prototype, "outline", 2);
n([
  h({ type: Boolean, reflect: !0 })
], x.prototype, "pill", 2);
n([
  h({ type: Boolean, reflect: !0 })
], x.prototype, "circle", 2);
n([
  h()
], x.prototype, "type", 2);
n([
  h()
], x.prototype, "name", 2);
n([
  h()
], x.prototype, "value", 2);
n([
  h()
], x.prototype, "href", 2);
n([
  h()
], x.prototype, "target", 2);
n([
  h()
], x.prototype, "rel", 2);
n([
  h()
], x.prototype, "download", 2);
n([
  h()
], x.prototype, "form", 2);
n([
  h({ attribute: "formaction" })
], x.prototype, "formAction", 2);
n([
  h({ attribute: "formenctype" })
], x.prototype, "formEnctype", 2);
n([
  h({ attribute: "formmethod" })
], x.prototype, "formMethod", 2);
n([
  h({ attribute: "formnovalidate", type: Boolean })
], x.prototype, "formNoValidate", 2);
n([
  h({ attribute: "formtarget" })
], x.prototype, "formTarget", 2);
n([
  X("disabled", { waitUntilFirstUpdate: !0 })
], x.prototype, "handleDisabledChange", 1);
x.define("sl-button");
var is = {
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
Tr(is);
var ls = H`
  ${Q}

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
`, tr = class extends O {
  render() {
    return A` <slot></slot> `;
  }
};
tr.styles = ls;
function Oe(t, e) {
  function o(s) {
    const i = t.getBoundingClientRect(), l = t.ownerDocument.defaultView, c = i.left + l.pageXOffset, a = i.top + l.pageYOffset, u = s.pageX - c, p = s.pageY - a;
    e != null && e.onMove && e.onMove(u, p);
  }
  function r() {
    document.removeEventListener("pointermove", o), document.removeEventListener("pointerup", r), e != null && e.onStop && e.onStop();
  }
  document.addEventListener("pointermove", o, { passive: !0 }), document.addEventListener("pointerup", r), (e == null ? void 0 : e.initialEvent) instanceof PointerEvent && o(e.initialEvent);
}
var ns = H`
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
`, as = H`
  ${Q}
  ${ns}

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
`, er = (t = "value") => (e, o) => {
  const r = e.constructor, s = r.prototype.attributeChangedCallback;
  r.prototype.attributeChangedCallback = function(i, l, c) {
    var a;
    const u = r.getPropertyOptions(t), p = typeof u.attribute == "string" ? u.attribute : t;
    if (i === p) {
      const d = u.converter || Xt, f = (typeof d == "function" ? d : (a = d == null ? void 0 : d.fromAttribute) != null ? a : Xt.fromAttribute)(c, u.type);
      this[t] !== f && (this[o] = f);
    }
    s.call(this, i, l, c);
  };
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cs = xe(class extends $e {
  constructor(t) {
    if (super(t), t.type !== ct.PROPERTY && t.type !== ct.ATTRIBUTE && t.type !== ct.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!ts(t))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(t) {
    return t;
  }
  update(t, [e]) {
    if (e === K || e === M)
      return e;
    const o = t.element, r = t.name;
    if (t.type === ct.PROPERTY) {
      if (e === o[r])
        return K;
    } else if (t.type === ct.BOOLEAN_ATTRIBUTE) {
      if (!!e === o.hasAttribute(r))
        return K;
    } else if (t.type === ct.ATTRIBUTE && o.getAttribute(r) === e + "")
      return K;
    return os(t), e;
  }
});
var v = class extends O {
  constructor() {
    super(...arguments), this.formControlController = new eo(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    }), this.hasSlotController = new ro(this, "help-text", "label"), this.localize = new Et(this), this.hasFocus = !1, this.title = "", this.__numberInput = Object.assign(document.createElement("input"), { type: "number" }), this.__dateInput = Object.assign(document.createElement("input"), { type: "date" }), this.type = "text", this.name = "", this.value = "", this.defaultValue = "", this.size = "medium", this.filled = !1, this.pill = !1, this.label = "", this.helpText = "", this.clearable = !1, this.disabled = !1, this.placeholder = "", this.readonly = !1, this.passwordToggle = !1, this.passwordVisible = !1, this.noSpinButtons = !1, this.form = "", this.required = !1, this.spellcheck = !0;
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
  setRangeText(t, e, o, r) {
    this.input.setRangeText(t, e, o, r), this.value !== this.input.value && (this.value = this.input.value);
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
    const t = this.hasSlotController.test("label"), e = this.hasSlotController.test("help-text"), o = this.label ? !0 : !!t, r = this.helpText ? !0 : !!e, s = this.clearable && !this.disabled && !this.readonly, i = s && (typeof this.value == "number" || this.value.length > 0);
    return A`
      <div
        part="form-control"
        class=${B({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": o,
      "form-control--has-help-text": r
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
            class=${B({
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
              name=${y(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${y(this.placeholder)}
              minlength=${y(this.minlength)}
              maxlength=${y(this.maxlength)}
              min=${y(this.min)}
              max=${y(this.max)}
              step=${y(this.step)}
              .value=${cs(this.value)}
              autocapitalize=${y(this.autocapitalize)}
              autocomplete=${y(this.autocomplete)}
              autocorrect=${y(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${y(this.pattern)}
              enterkeyhint=${y(this.enterkeyhint)}
              inputmode=${y(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s ? A`
                  <button
                    part="clear-button"
                    class=${B({
      input__clear: !0,
      "input__clear--visible": i
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
            ${this.passwordToggle && !this.disabled ? A`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible ? A`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        ` : A`
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
          aria-hidden=${r ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
v.styles = as;
v.dependencies = { "sl-icon": Y };
n([
  T(".input__control")
], v.prototype, "input", 2);
n([
  V()
], v.prototype, "hasFocus", 2);
n([
  h()
], v.prototype, "title", 2);
n([
  h({ reflect: !0 })
], v.prototype, "type", 2);
n([
  h()
], v.prototype, "name", 2);
n([
  h()
], v.prototype, "value", 2);
n([
  er()
], v.prototype, "defaultValue", 2);
n([
  h({ reflect: !0 })
], v.prototype, "size", 2);
n([
  h({ type: Boolean, reflect: !0 })
], v.prototype, "filled", 2);
n([
  h({ type: Boolean, reflect: !0 })
], v.prototype, "pill", 2);
n([
  h()
], v.prototype, "label", 2);
n([
  h({ attribute: "help-text" })
], v.prototype, "helpText", 2);
n([
  h({ type: Boolean })
], v.prototype, "clearable", 2);
n([
  h({ type: Boolean, reflect: !0 })
], v.prototype, "disabled", 2);
n([
  h()
], v.prototype, "placeholder", 2);
n([
  h({ type: Boolean, reflect: !0 })
], v.prototype, "readonly", 2);
n([
  h({ attribute: "password-toggle", type: Boolean })
], v.prototype, "passwordToggle", 2);
n([
  h({ attribute: "password-visible", type: Boolean })
], v.prototype, "passwordVisible", 2);
n([
  h({ attribute: "no-spin-buttons", type: Boolean })
], v.prototype, "noSpinButtons", 2);
n([
  h({ reflect: !0 })
], v.prototype, "form", 2);
n([
  h({ type: Boolean, reflect: !0 })
], v.prototype, "required", 2);
n([
  h()
], v.prototype, "pattern", 2);
n([
  h({ type: Number })
], v.prototype, "minlength", 2);
n([
  h({ type: Number })
], v.prototype, "maxlength", 2);
n([
  h()
], v.prototype, "min", 2);
n([
  h()
], v.prototype, "max", 2);
n([
  h()
], v.prototype, "step", 2);
n([
  h()
], v.prototype, "autocapitalize", 2);
n([
  h()
], v.prototype, "autocorrect", 2);
n([
  h()
], v.prototype, "autocomplete", 2);
n([
  h({ type: Boolean })
], v.prototype, "autofocus", 2);
n([
  h()
], v.prototype, "enterkeyhint", 2);
n([
  h({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (t) => !(!t || t === "false"),
      toAttribute: (t) => t ? "true" : "false"
    }
  })
], v.prototype, "spellcheck", 2);
n([
  h()
], v.prototype, "inputmode", 2);
n([
  X("disabled", { waitUntilFirstUpdate: !0 })
], v.prototype, "handleDisabledChange", 1);
n([
  X("step", { waitUntilFirstUpdate: !0 })
], v.prototype, "handleStepChange", 1);
n([
  X("value", { waitUntilFirstUpdate: !0 })
], v.prototype, "handleValueChange", 1);
var us = H`
  ${Q}

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
function or(t) {
  return hs(t);
}
function De(t) {
  return t.assignedSlot ? t.assignedSlot : t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
}
function hs(t) {
  for (let e = t; e; e = De(e))
    if (e instanceof Element && getComputedStyle(e).display === "none")
      return null;
  for (let e = De(t); e; e = De(e)) {
    if (!(e instanceof Element))
      continue;
    const o = getComputedStyle(e);
    if (o.display !== "contents" && (o.position !== "static" || o.filter !== "none" || e.tagName === "BODY"))
      return e;
  }
  return null;
}
function ds(t) {
  const e = t.tagName.toLowerCase();
  return t.getAttribute("tabindex") === "-1" || t.hasAttribute("disabled") || t.hasAttribute("aria-disabled") && t.getAttribute("aria-disabled") !== "false" || e === "input" && t.getAttribute("type") === "radio" && !t.hasAttribute("checked") || t.offsetParent === null && or(t) === null || window.getComputedStyle(t).visibility === "hidden" ? !1 : (e === "audio" || e === "video") && t.hasAttribute("controls") || t.hasAttribute("tabindex") || t.hasAttribute("contenteditable") && t.getAttribute("contenteditable") !== "false" ? !0 : ["button", "input", "select", "textarea", "a", "audio", "video", "summary"].includes(e);
}
function ps(t) {
  var e, o;
  const r = he(t), s = (e = r[0]) != null ? e : null, i = (o = r[r.length - 1]) != null ? o : null;
  return { start: s, end: i };
}
function he(t) {
  const e = [];
  function o(r) {
    if (r instanceof Element) {
      if (r.hasAttribute("inert"))
        return;
      !e.includes(r) && ds(r) && e.push(r);
      const s = (i) => {
        var l;
        return ((l = i.getRootNode({ composed: !0 })) == null ? void 0 : l.host) !== t;
      };
      r instanceof HTMLSlotElement && s(r) && r.assignedElements({ flatten: !0 }).forEach((i) => {
        o(i);
      }), r.shadowRoot !== null && r.shadowRoot.mode === "open" && o(r.shadowRoot);
    }
    [...r.children].forEach((s) => o(s));
  }
  return o(t), e;
}
var fs = H`
  ${Q}

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
const gt = Math.min, W = Math.max, be = Math.round, le = Math.floor, bt = (t) => ({
  x: t,
  y: t
}), gs = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, bs = {
  start: "end",
  end: "start"
};
function Ge(t, e, o) {
  return W(t, gt(e, o));
}
function Dt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function mt(t) {
  return t.split("-")[0];
}
function Ft(t) {
  return t.split("-")[1];
}
function rr(t) {
  return t === "x" ? "y" : "x";
}
function so(t) {
  return t === "y" ? "height" : "width";
}
function ee(t) {
  return ["top", "bottom"].includes(mt(t)) ? "y" : "x";
}
function io(t) {
  return rr(ee(t));
}
function ms(t, e, o) {
  o === void 0 && (o = !1);
  const r = Ft(t), s = io(t), i = so(s);
  let l = s === "x" ? r === (o ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (l = me(l)), [l, me(l)];
}
function vs(t) {
  const e = me(t);
  return [Xe(t), e, Xe(e)];
}
function Xe(t) {
  return t.replace(/start|end/g, (e) => bs[e]);
}
function ys(t, e, o) {
  const r = ["left", "right"], s = ["right", "left"], i = ["top", "bottom"], l = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return o ? e ? s : r : e ? r : s;
    case "left":
    case "right":
      return e ? i : l;
    default:
      return [];
  }
}
function ws(t, e, o, r) {
  const s = Ft(t);
  let i = ys(mt(t), o === "start", r);
  return s && (i = i.map((l) => l + "-" + s), e && (i = i.concat(i.map(Xe)))), i;
}
function me(t) {
  return t.replace(/left|right|bottom|top/g, (e) => gs[e]);
}
function _s(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function sr(t) {
  return typeof t != "number" ? _s(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function ve(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function So(t, e, o) {
  let {
    reference: r,
    floating: s
  } = t;
  const i = ee(e), l = io(e), c = so(l), a = mt(e), u = i === "y", p = r.x + r.width / 2 - s.width / 2, d = r.y + r.height / 2 - s.height / 2, g = r[c] / 2 - s[c] / 2;
  let f;
  switch (a) {
    case "top":
      f = {
        x: p,
        y: r.y - s.height
      };
      break;
    case "bottom":
      f = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      f = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: r.x - s.width,
        y: d
      };
      break;
    default:
      f = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ft(e)) {
    case "start":
      f[l] -= g * (o && u ? -1 : 1);
      break;
    case "end":
      f[l] += g * (o && u ? -1 : 1);
      break;
  }
  return f;
}
const xs = async (t, e, o) => {
  const {
    placement: r = "bottom",
    strategy: s = "absolute",
    middleware: i = [],
    platform: l
  } = o, c = i.filter(Boolean), a = await (l.isRTL == null ? void 0 : l.isRTL(e));
  let u = await l.getElementRects({
    reference: t,
    floating: e,
    strategy: s
  }), {
    x: p,
    y: d
  } = So(u, r, a), g = r, f = {}, b = 0;
  for (let m = 0; m < c.length; m++) {
    const {
      name: $,
      fn: w
    } = c[m], {
      x: k,
      y: C,
      data: P,
      reset: S
    } = await w({
      x: p,
      y: d,
      initialPlacement: r,
      placement: g,
      strategy: s,
      middlewareData: f,
      rects: u,
      platform: l,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (p = k ?? p, d = C ?? d, f = {
      ...f,
      [$]: {
        ...f[$],
        ...P
      }
    }, S && b <= 50) {
      b++, typeof S == "object" && (S.placement && (g = S.placement), S.rects && (u = S.rects === !0 ? await l.getElementRects({
        reference: t,
        floating: e,
        strategy: s
      }) : S.rects), {
        x: p,
        y: d
      } = So(u, g, a)), m = -1;
      continue;
    }
  }
  return {
    x: p,
    y: d,
    placement: g,
    strategy: s,
    middlewareData: f
  };
};
async function lo(t, e) {
  var o;
  e === void 0 && (e = {});
  const {
    x: r,
    y: s,
    platform: i,
    rects: l,
    elements: c,
    strategy: a
  } = t, {
    boundary: u = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: d = "floating",
    altBoundary: g = !1,
    padding: f = 0
  } = Dt(e, t), b = sr(f), $ = c[g ? d === "floating" ? "reference" : "floating" : d], w = ve(await i.getClippingRect({
    element: (o = await (i.isElement == null ? void 0 : i.isElement($))) == null || o ? $ : $.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
    boundary: u,
    rootBoundary: p,
    strategy: a
  })), k = d === "floating" ? {
    ...l.floating,
    x: r,
    y: s
  } : l.reference, C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), P = await (i.isElement == null ? void 0 : i.isElement(C)) ? await (i.getScale == null ? void 0 : i.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = ve(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: k,
    offsetParent: C,
    strategy: a
  }) : k);
  return {
    top: (w.top - S.top + b.top) / P.y,
    bottom: (S.bottom - w.bottom + b.bottom) / P.y,
    left: (w.left - S.left + b.left) / P.x,
    right: (S.right - w.right + b.right) / P.x
  };
}
const $s = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: o,
      y: r,
      placement: s,
      rects: i,
      platform: l,
      elements: c,
      middlewareData: a
    } = e, {
      element: u,
      padding: p = 0
    } = Dt(t, e) || {};
    if (u == null)
      return {};
    const d = sr(p), g = {
      x: o,
      y: r
    }, f = io(s), b = so(f), m = await l.getDimensions(u), $ = f === "y", w = $ ? "top" : "left", k = $ ? "bottom" : "right", C = $ ? "clientHeight" : "clientWidth", P = i.reference[b] + i.reference[f] - g[f] - i.floating[b], S = g[f] - i.reference[f], L = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let N = L ? L[C] : 0;
    (!N || !await (l.isElement == null ? void 0 : l.isElement(L))) && (N = c.floating[C] || i.floating[b]);
    const et = P / 2 - S / 2, dt = N / 2 - m[b] / 2 - 1, Bt = gt(d[w], dt), Ht = gt(d[k], dt), Z = Bt, It = N - m[b] - Ht, U = N / 2 - m[b] / 2 + et, ot = Ge(Z, U, It), rt = !a.arrow && Ft(s) != null && U != ot && i.reference[b] / 2 - (U < Z ? Bt : Ht) - m[b] / 2 < 0, nt = rt ? U < Z ? U - Z : U - It : 0;
    return {
      [f]: g[f] + nt,
      data: {
        [f]: ot,
        centerOffset: U - ot - nt,
        ...rt && {
          alignmentOffset: nt
        }
      },
      reset: rt
    };
  }
}), ks = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var o, r;
      const {
        placement: s,
        middlewareData: i,
        rects: l,
        initialPlacement: c,
        platform: a,
        elements: u
      } = e, {
        mainAxis: p = !0,
        crossAxis: d = !0,
        fallbackPlacements: g,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: m = !0,
        ...$
      } = Dt(t, e);
      if ((o = i.arrow) != null && o.alignmentOffset)
        return {};
      const w = mt(s), k = mt(c) === c, C = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)), P = g || (k || !m ? [me(c)] : vs(c));
      !g && b !== "none" && P.push(...ws(c, m, b, C));
      const S = [c, ...P], L = await lo(e, $), N = [];
      let et = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (p && N.push(L[w]), d) {
        const Z = ms(s, l, C);
        N.push(L[Z[0]], L[Z[1]]);
      }
      if (et = [...et, {
        placement: s,
        overflows: N
      }], !N.every((Z) => Z <= 0)) {
        var dt, Bt;
        const Z = (((dt = i.flip) == null ? void 0 : dt.index) || 0) + 1, It = S[Z];
        if (It)
          return {
            data: {
              index: Z,
              overflows: et
            },
            reset: {
              placement: It
            }
          };
        let U = (Bt = et.filter((ot) => ot.overflows[0] <= 0).sort((ot, rt) => ot.overflows[1] - rt.overflows[1])[0]) == null ? void 0 : Bt.placement;
        if (!U)
          switch (f) {
            case "bestFit": {
              var Ht;
              const ot = (Ht = et.map((rt) => [rt.placement, rt.overflows.filter((nt) => nt > 0).reduce((nt, br) => nt + br, 0)]).sort((rt, nt) => rt[1] - nt[1])[0]) == null ? void 0 : Ht[0];
              ot && (U = ot);
              break;
            }
            case "initialPlacement":
              U = c;
              break;
          }
        if (s !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
async function As(t, e) {
  const {
    placement: o,
    platform: r,
    elements: s
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), l = mt(o), c = Ft(o), a = ee(o) === "y", u = ["left", "top"].includes(l) ? -1 : 1, p = i && a ? -1 : 1, d = Dt(e, t);
  let {
    mainAxis: g,
    crossAxis: f,
    alignmentAxis: b
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return c && typeof b == "number" && (f = c === "end" ? b * -1 : b), a ? {
    x: f * p,
    y: g * u
  } : {
    x: g * u,
    y: f * p
  };
}
const Cs = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      const {
        x: o,
        y: r
      } = e, s = await As(e, t);
      return {
        x: o + s.x,
        y: r + s.y,
        data: s
      };
    }
  };
}, Es = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: o,
        y: r,
        placement: s
      } = e, {
        mainAxis: i = !0,
        crossAxis: l = !1,
        limiter: c = {
          fn: ($) => {
            let {
              x: w,
              y: k
            } = $;
            return {
              x: w,
              y: k
            };
          }
        },
        ...a
      } = Dt(t, e), u = {
        x: o,
        y: r
      }, p = await lo(e, a), d = ee(mt(s)), g = rr(d);
      let f = u[g], b = u[d];
      if (i) {
        const $ = g === "y" ? "top" : "left", w = g === "y" ? "bottom" : "right", k = f + p[$], C = f - p[w];
        f = Ge(k, f, C);
      }
      if (l) {
        const $ = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", k = b + p[$], C = b - p[w];
        b = Ge(k, b, C);
      }
      const m = c.fn({
        ...e,
        [g]: f,
        [d]: b
      });
      return {
        ...m,
        data: {
          x: m.x - o,
          y: m.y - r
        }
      };
    }
  };
}, zo = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: o,
        rects: r,
        platform: s,
        elements: i
      } = e, {
        apply: l = () => {
        },
        ...c
      } = Dt(t, e), a = await lo(e, c), u = mt(o), p = Ft(o), d = ee(o) === "y", {
        width: g,
        height: f
      } = r.floating;
      let b, m;
      u === "top" || u === "bottom" ? (b = u, m = p === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (m = u, b = p === "end" ? "top" : "bottom");
      const $ = f - a[b], w = g - a[m], k = !e.middlewareData.shift;
      let C = $, P = w;
      if (d) {
        const L = g - a.left - a.right;
        P = p || k ? gt(w, L) : L;
      } else {
        const L = f - a.top - a.bottom;
        C = p || k ? gt($, L) : L;
      }
      if (k && !p) {
        const L = W(a.left, 0), N = W(a.right, 0), et = W(a.top, 0), dt = W(a.bottom, 0);
        d ? P = g - 2 * (L !== 0 || N !== 0 ? L + N : W(a.left, a.right)) : C = f - 2 * (et !== 0 || dt !== 0 ? et + dt : W(a.top, a.bottom));
      }
      await l({
        ...e,
        availableWidth: P,
        availableHeight: C
      });
      const S = await s.getDimensions(i.floating);
      return g !== S.width || f !== S.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function vt(t) {
  return ir(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function G(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function ht(t) {
  var e;
  return (e = (ir(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function ir(t) {
  return t instanceof Node || t instanceof G(t).Node;
}
function ut(t) {
  return t instanceof Element || t instanceof G(t).Element;
}
function it(t) {
  return t instanceof HTMLElement || t instanceof G(t).HTMLElement;
}
function Mo(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof G(t).ShadowRoot;
}
function oe(t) {
  const {
    overflow: e,
    overflowX: o,
    overflowY: r,
    display: s
  } = J(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + o) && !["inline", "contents"].includes(s);
}
function Ss(t) {
  return ["table", "td", "th"].includes(vt(t));
}
function no(t) {
  const e = ao(), o = J(t);
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !e && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !e && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (o.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (o.contain || "").includes(r));
}
function zs(t) {
  let e = Ot(t);
  for (; it(e) && !ke(e); ) {
    if (no(e))
      return e;
    e = Ot(e);
  }
  return null;
}
function ao() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ke(t) {
  return ["html", "body", "#document"].includes(vt(t));
}
function J(t) {
  return G(t).getComputedStyle(t);
}
function Ae(t) {
  return ut(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function Ot(t) {
  if (vt(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Mo(t) && t.host || // Fallback.
    ht(t)
  );
  return Mo(e) ? e.host : e;
}
function lr(t) {
  const e = Ot(t);
  return ke(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : it(e) && oe(e) ? e : lr(e);
}
function Qt(t, e, o) {
  var r;
  e === void 0 && (e = []), o === void 0 && (o = !0);
  const s = lr(t), i = s === ((r = t.ownerDocument) == null ? void 0 : r.body), l = G(s);
  return i ? e.concat(l, l.visualViewport || [], oe(s) ? s : [], l.frameElement && o ? Qt(l.frameElement) : []) : e.concat(s, Qt(s, [], o));
}
function nr(t) {
  const e = J(t);
  let o = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const s = it(t), i = s ? t.offsetWidth : o, l = s ? t.offsetHeight : r, c = be(o) !== i || be(r) !== l;
  return c && (o = i, r = l), {
    width: o,
    height: r,
    $: c
  };
}
function co(t) {
  return ut(t) ? t : t.contextElement;
}
function Tt(t) {
  const e = co(t);
  if (!it(e))
    return bt(1);
  const o = e.getBoundingClientRect(), {
    width: r,
    height: s,
    $: i
  } = nr(e);
  let l = (i ? be(o.width) : o.width) / r, c = (i ? be(o.height) : o.height) / s;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
const Ms = /* @__PURE__ */ bt(0);
function ar(t) {
  const e = G(t);
  return !ao() || !e.visualViewport ? Ms : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Ls(t, e, o) {
  return e === void 0 && (e = !1), !o || e && o !== G(t) ? !1 : e;
}
function Ct(t, e, o, r) {
  e === void 0 && (e = !1), o === void 0 && (o = !1);
  const s = t.getBoundingClientRect(), i = co(t);
  let l = bt(1);
  e && (r ? ut(r) && (l = Tt(r)) : l = Tt(t));
  const c = Ls(i, o, r) ? ar(i) : bt(0);
  let a = (s.left + c.x) / l.x, u = (s.top + c.y) / l.y, p = s.width / l.x, d = s.height / l.y;
  if (i) {
    const g = G(i), f = r && ut(r) ? G(r) : r;
    let b = g.frameElement;
    for (; b && r && f !== g; ) {
      const m = Tt(b), $ = b.getBoundingClientRect(), w = J(b), k = $.left + (b.clientLeft + parseFloat(w.paddingLeft)) * m.x, C = $.top + (b.clientTop + parseFloat(w.paddingTop)) * m.y;
      a *= m.x, u *= m.y, p *= m.x, d *= m.y, a += k, u += C, b = G(b).frameElement;
    }
  }
  return ve({
    width: p,
    height: d,
    x: a,
    y: u
  });
}
function Ps(t) {
  let {
    rect: e,
    offsetParent: o,
    strategy: r
  } = t;
  const s = it(o), i = ht(o);
  if (o === i)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = bt(1);
  const a = bt(0);
  if ((s || !s && r !== "fixed") && ((vt(o) !== "body" || oe(i)) && (l = Ae(o)), it(o))) {
    const u = Ct(o);
    c = Tt(o), a.x = u.x + o.clientLeft, a.y = u.y + o.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + a.x,
    y: e.y * c.y - l.scrollTop * c.y + a.y
  };
}
function Ts(t) {
  return Array.from(t.getClientRects());
}
function cr(t) {
  return Ct(ht(t)).left + Ae(t).scrollLeft;
}
function Rs(t) {
  const e = ht(t), o = Ae(t), r = t.ownerDocument.body, s = W(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = W(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -o.scrollLeft + cr(t);
  const c = -o.scrollTop;
  return J(r).direction === "rtl" && (l += W(e.clientWidth, r.clientWidth) - s), {
    width: s,
    height: i,
    x: l,
    y: c
  };
}
function Vs(t, e) {
  const o = G(t), r = ht(t), s = o.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, c = 0, a = 0;
  if (s) {
    i = s.width, l = s.height;
    const u = ao();
    (!u || u && e === "fixed") && (c = s.offsetLeft, a = s.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: c,
    y: a
  };
}
function Os(t, e) {
  const o = Ct(t, !0, e === "fixed"), r = o.top + t.clientTop, s = o.left + t.clientLeft, i = it(t) ? Tt(t) : bt(1), l = t.clientWidth * i.x, c = t.clientHeight * i.y, a = s * i.x, u = r * i.y;
  return {
    width: l,
    height: c,
    x: a,
    y: u
  };
}
function Lo(t, e, o) {
  let r;
  if (e === "viewport")
    r = Vs(t, o);
  else if (e === "document")
    r = Rs(ht(t));
  else if (ut(e))
    r = Os(e, o);
  else {
    const s = ar(t);
    r = {
      ...e,
      x: e.x - s.x,
      y: e.y - s.y
    };
  }
  return ve(r);
}
function ur(t, e) {
  const o = Ot(t);
  return o === e || !ut(o) || ke(o) ? !1 : J(o).position === "fixed" || ur(o, e);
}
function Ds(t, e) {
  const o = e.get(t);
  if (o)
    return o;
  let r = Qt(t, [], !1).filter((c) => ut(c) && vt(c) !== "body"), s = null;
  const i = J(t).position === "fixed";
  let l = i ? Ot(t) : t;
  for (; ut(l) && !ke(l); ) {
    const c = J(l), a = no(l);
    !a && c.position === "fixed" && (s = null), (i ? !a && !s : !a && c.position === "static" && !!s && ["absolute", "fixed"].includes(s.position) || oe(l) && !a && ur(t, l)) ? r = r.filter((p) => p !== l) : s = c, l = Ot(l);
  }
  return e.set(t, r), r;
}
function Fs(t) {
  let {
    element: e,
    boundary: o,
    rootBoundary: r,
    strategy: s
  } = t;
  const l = [...o === "clippingAncestors" ? Ds(e, this._c) : [].concat(o), r], c = l[0], a = l.reduce((u, p) => {
    const d = Lo(e, p, s);
    return u.top = W(d.top, u.top), u.right = gt(d.right, u.right), u.bottom = gt(d.bottom, u.bottom), u.left = W(d.left, u.left), u;
  }, Lo(e, c, s));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Bs(t) {
  return nr(t);
}
function Hs(t, e, o) {
  const r = it(e), s = ht(e), i = o === "fixed", l = Ct(t, !0, i, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = bt(0);
  if (r || !r && !i)
    if ((vt(e) !== "body" || oe(s)) && (c = Ae(e)), r) {
      const u = Ct(e, !0, i, e);
      a.x = u.x + e.clientLeft, a.y = u.y + e.clientTop;
    } else
      s && (a.x = cr(s));
  return {
    x: l.left + c.scrollLeft - a.x,
    y: l.top + c.scrollTop - a.y,
    width: l.width,
    height: l.height
  };
}
function Po(t, e) {
  return !it(t) || J(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function hr(t, e) {
  const o = G(t);
  if (!it(t))
    return o;
  let r = Po(t, e);
  for (; r && Ss(r) && J(r).position === "static"; )
    r = Po(r, e);
  return r && (vt(r) === "html" || vt(r) === "body" && J(r).position === "static" && !no(r)) ? o : r || zs(t) || o;
}
const Is = async function(t) {
  let {
    reference: e,
    floating: o,
    strategy: r
  } = t;
  const s = this.getOffsetParent || hr, i = this.getDimensions;
  return {
    reference: Hs(e, await s(o), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(o)
    }
  };
};
function Ns(t) {
  return J(t).direction === "rtl";
}
const de = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ps,
  getDocumentElement: ht,
  getClippingRect: Fs,
  getOffsetParent: hr,
  getElementRects: Is,
  getClientRects: Ts,
  getDimensions: Bs,
  getScale: Tt,
  isElement: ut,
  isRTL: Ns
};
function Us(t, e) {
  let o = null, r;
  const s = ht(t);
  function i() {
    clearTimeout(r), o && o.disconnect(), o = null;
  }
  function l(c, a) {
    c === void 0 && (c = !1), a === void 0 && (a = 1), i();
    const {
      left: u,
      top: p,
      width: d,
      height: g
    } = t.getBoundingClientRect();
    if (c || e(), !d || !g)
      return;
    const f = le(p), b = le(s.clientWidth - (u + d)), m = le(s.clientHeight - (p + g)), $ = le(u), k = {
      rootMargin: -f + "px " + -b + "px " + -m + "px " + -$ + "px",
      threshold: W(0, gt(1, a)) || 1
    };
    let C = !0;
    function P(S) {
      const L = S[0].intersectionRatio;
      if (L !== a) {
        if (!C)
          return l();
        L ? l(!1, L) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 100);
      }
      C = !1;
    }
    try {
      o = new IntersectionObserver(P, {
        ...k,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(P, k);
    }
    o.observe(t);
  }
  return l(!0), i;
}
function js(t, e, o, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, u = co(t), p = s || i ? [...u ? Qt(u) : [], ...Qt(e)] : [];
  p.forEach((w) => {
    s && w.addEventListener("scroll", o, {
      passive: !0
    }), i && w.addEventListener("resize", o);
  });
  const d = u && c ? Us(u, o) : null;
  let g = -1, f = null;
  l && (f = new ResizeObserver((w) => {
    let [k] = w;
    k && k.target === u && f && (f.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      f && f.observe(e);
    })), o();
  }), u && !a && f.observe(u), f.observe(e));
  let b, m = a ? Ct(t) : null;
  a && $();
  function $() {
    const w = Ct(t);
    m && (w.x !== m.x || w.y !== m.y || w.width !== m.width || w.height !== m.height) && o(), m = w, b = requestAnimationFrame($);
  }
  return o(), () => {
    p.forEach((w) => {
      s && w.removeEventListener("scroll", o), i && w.removeEventListener("resize", o);
    }), d && d(), f && f.disconnect(), f = null, a && cancelAnimationFrame(b);
  };
}
const qs = (t, e, o) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: de,
    ...o
  }, i = {
    ...s.platform,
    _c: r
  };
  return xs(t, e, {
    ...s,
    platform: i
  });
};
function Ws(t) {
  return t !== null && typeof t == "object" && "getBoundingClientRect" in t;
}
var E = class extends O {
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
      this.anchor instanceof Element || Ws(this.anchor) ? this.anchorEl = this.anchor : this.anchorEl = this.querySelector('[slot="anchor"]');
    this.anchorEl instanceof HTMLSlotElement && (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]), this.anchorEl && this.start();
  }
  start() {
    this.anchorEl && (this.cleanup = js(this.anchorEl, this.popup, () => {
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
      Cs({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    this.sync ? t.push(
      zo({
        apply: ({ rects: o }) => {
          const r = this.sync === "width" || this.sync === "both", s = this.sync === "height" || this.sync === "both";
          this.popup.style.width = r ? `${o.reference.width}px` : "", this.popup.style.height = s ? `${o.reference.height}px` : "";
        }
      })
    ) : (this.popup.style.width = "", this.popup.style.height = ""), this.flip && t.push(
      ks({
        boundary: this.flipBoundary,
        // @ts-expect-error - We're converting a string attribute to an array here
        fallbackPlacements: this.flipFallbackPlacements,
        fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
        padding: this.flipPadding
      })
    ), this.shift && t.push(
      Es({
        boundary: this.shiftBoundary,
        padding: this.shiftPadding
      })
    ), this.autoSize ? t.push(
      zo({
        boundary: this.autoSizeBoundary,
        padding: this.autoSizePadding,
        apply: ({ availableWidth: o, availableHeight: r }) => {
          this.autoSize === "vertical" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-height", `${r}px`) : this.style.removeProperty("--auto-size-available-height"), this.autoSize === "horizontal" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-width", `${o}px`) : this.style.removeProperty("--auto-size-available-width");
        }
      })
    ) : (this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height")), this.arrow && t.push(
      $s({
        element: this.arrowEl,
        padding: this.arrowPadding
      })
    );
    const e = this.strategy === "absolute" ? (o) => de.getOffsetParent(o, or) : de.getOffsetParent;
    qs(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: t,
      strategy: this.strategy,
      platform: _e(St({}, de), {
        getOffsetParent: e
      })
    }).then(({ x: o, y: r, middlewareData: s, placement: i }) => {
      const l = getComputedStyle(this).direction === "rtl", c = { top: "bottom", right: "left", bottom: "top", left: "right" }[i.split("-")[0]];
      if (this.setAttribute("data-current-placement", i), Object.assign(this.popup.style, {
        left: `${o}px`,
        top: `${r}px`
      }), this.arrow) {
        const a = s.arrow.x, u = s.arrow.y;
        let p = "", d = "", g = "", f = "";
        if (this.arrowPlacement === "start") {
          const b = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          p = typeof u == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "", d = l ? b : "", f = l ? "" : b;
        } else if (this.arrowPlacement === "end") {
          const b = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          d = l ? "" : b, f = l ? b : "", g = typeof u == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else
          this.arrowPlacement === "center" ? (f = typeof a == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "", p = typeof u == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "") : (f = typeof a == "number" ? `${a}px` : "", p = typeof u == "number" ? `${u}px` : "");
        Object.assign(this.arrowEl.style, {
          top: p,
          right: d,
          bottom: g,
          left: f,
          [c]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    }), this.emit("sl-reposition");
  }
  render() {
    return A`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${B({
      popup: !0,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? A`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
E.styles = fs;
n([
  T(".popup")
], E.prototype, "popup", 2);
n([
  T(".popup__arrow")
], E.prototype, "arrowEl", 2);
n([
  h()
], E.prototype, "anchor", 2);
n([
  h({ type: Boolean, reflect: !0 })
], E.prototype, "active", 2);
n([
  h({ reflect: !0 })
], E.prototype, "placement", 2);
n([
  h({ reflect: !0 })
], E.prototype, "strategy", 2);
n([
  h({ type: Number })
], E.prototype, "distance", 2);
n([
  h({ type: Number })
], E.prototype, "skidding", 2);
n([
  h({ type: Boolean })
], E.prototype, "arrow", 2);
n([
  h({ attribute: "arrow-placement" })
], E.prototype, "arrowPlacement", 2);
n([
  h({ attribute: "arrow-padding", type: Number })
], E.prototype, "arrowPadding", 2);
n([
  h({ type: Boolean })
], E.prototype, "flip", 2);
n([
  h({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (t) => t.split(" ").map((e) => e.trim()).filter((e) => e !== ""),
      toAttribute: (t) => t.join(" ")
    }
  })
], E.prototype, "flipFallbackPlacements", 2);
n([
  h({ attribute: "flip-fallback-strategy" })
], E.prototype, "flipFallbackStrategy", 2);
n([
  h({ type: Object })
], E.prototype, "flipBoundary", 2);
n([
  h({ attribute: "flip-padding", type: Number })
], E.prototype, "flipPadding", 2);
n([
  h({ type: Boolean })
], E.prototype, "shift", 2);
n([
  h({ type: Object })
], E.prototype, "shiftBoundary", 2);
n([
  h({ attribute: "shift-padding", type: Number })
], E.prototype, "shiftPadding", 2);
n([
  h({ attribute: "auto-size" })
], E.prototype, "autoSize", 2);
n([
  h()
], E.prototype, "sync", 2);
n([
  h({ type: Object })
], E.prototype, "autoSizeBoundary", 2);
n([
  h({ attribute: "auto-size-padding", type: Number })
], E.prototype, "autoSizePadding", 2);
var dr = /* @__PURE__ */ new Map(), Ks = /* @__PURE__ */ new WeakMap();
function Gs(t) {
  return t ?? { keyframes: [], options: { duration: 0 } };
}
function To(t, e) {
  return e.toLowerCase() === "rtl" ? {
    keyframes: t.rtlKeyframes || t.keyframes,
    options: t.options
  } : t;
}
function zt(t, e) {
  dr.set(t, Gs(e));
}
function _t(t, e, o) {
  const r = Ks.get(t);
  if (r != null && r[e])
    return To(r[e], o.dir);
  const s = dr.get(e);
  return s ? To(s, o.dir) : {
    keyframes: [],
    options: { duration: 0 }
  };
}
function ye(t, e) {
  return new Promise((o) => {
    function r(s) {
      s.target === t && (t.removeEventListener(e, r), o());
    }
    t.addEventListener(e, r);
  });
}
function xt(t, e, o) {
  return new Promise((r) => {
    if ((o == null ? void 0 : o.duration) === 1 / 0)
      throw new Error("Promise-based animations must be finite.");
    const s = t.animate(e, _e(St({}, o), {
      duration: Xs() ? 0 : o.duration
    }));
    s.addEventListener("cancel", r, { once: !0 }), s.addEventListener("finish", r, { once: !0 });
  });
}
function Xs() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Pt(t) {
  return Promise.all(
    t.getAnimations().map((e) => new Promise((o) => {
      const r = requestAnimationFrame(o);
      e.addEventListener("cancel", () => r, { once: !0 }), e.addEventListener("finish", () => r, { once: !0 }), e.cancel();
    }))
  );
}
var F = class extends O {
  constructor() {
    super(...arguments), this.localize = new Et(this), this.open = !1, this.placement = "bottom-start", this.disabled = !1, this.stayOpenOnSelect = !1, this.distance = 0, this.skidding = 0, this.hoist = !1, this.handleKeyDown = (t) => {
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
          var o, r, s;
          const i = ((o = this.containingElement) == null ? void 0 : o.getRootNode()) instanceof ShadowRoot ? (s = (r = document.activeElement) == null ? void 0 : r.shadowRoot) == null ? void 0 : s.activeElement : document.activeElement;
          (!this.containingElement || (i == null ? void 0 : i.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) && this.hide();
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
      const o = e.getAllItems(), r = o[0], s = o[o.length - 1];
      ["ArrowDown", "ArrowUp", "Home", "End"].includes(t.key) && (t.preventDefault(), this.open || (this.show(), await this.updateComplete), o.length > 0 && this.updateComplete.then(() => {
        (t.key === "ArrowDown" || t.key === "Home") && (e.setCurrentItem(r), r.focus()), (t.key === "ArrowUp" || t.key === "End") && (e.setCurrentItem(s), s.focus());
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
    const e = this.trigger.assignedElements({ flatten: !0 }).find((r) => ps(r).start);
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
      return this.open = !0, ye(this, "sl-after-show");
  }
  /** Hides the dropdown panel */
  async hide() {
    if (this.open)
      return this.open = !1, ye(this, "sl-after-hide");
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
      this.emit("sl-show"), this.addOpenListeners(), await Pt(this), this.panel.hidden = !1, this.popup.active = !0;
      const { keyframes: t, options: e } = _t(this, "dropdown.show", { dir: this.localize.dir() });
      await xt(this.popup.popup, t, e), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), await Pt(this);
      const { keyframes: t, options: e } = _t(this, "dropdown.hide", { dir: this.localize.dir() });
      await xt(this.popup.popup, t, e), this.panel.hidden = !0, this.popup.active = !1, this.emit("sl-after-hide");
    }
  }
  render() {
    return A`
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
        class=${B({
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
F.styles = us;
F.dependencies = { "sl-popup": E };
n([
  T(".dropdown")
], F.prototype, "popup", 2);
n([
  T(".dropdown__trigger")
], F.prototype, "trigger", 2);
n([
  T(".dropdown__panel")
], F.prototype, "panel", 2);
n([
  h({ type: Boolean, reflect: !0 })
], F.prototype, "open", 2);
n([
  h({ reflect: !0 })
], F.prototype, "placement", 2);
n([
  h({ type: Boolean, reflect: !0 })
], F.prototype, "disabled", 2);
n([
  h({ attribute: "stay-open-on-select", type: Boolean, reflect: !0 })
], F.prototype, "stayOpenOnSelect", 2);
n([
  h({ attribute: !1 })
], F.prototype, "containingElement", 2);
n([
  h({ type: Number })
], F.prototype, "distance", 2);
n([
  h({ type: Number })
], F.prototype, "skidding", 2);
n([
  h({ type: Boolean })
], F.prototype, "hoist", 2);
n([
  X("open", { waitUntilFirstUpdate: !0 })
], F.prototype, "handleOpenChange", 1);
zt("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
zt("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
var Ys = H`
  ${Q}

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
function j(t, e, o) {
  const r = (s) => Object.is(s, -0) ? 0 : s;
  return t < e ? r(e) : t > o ? r(o) : r(t);
}
var Zs = H`
  ${Q}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`, re = class extends O {
  constructor() {
    super(...arguments), this.disableRole = !1, this.label = "";
  }
  handleFocus(t) {
    const e = Wt(t.target);
    e == null || e.classList.add("sl-button-group__button--focus");
  }
  handleBlur(t) {
    const e = Wt(t.target);
    e == null || e.classList.remove("sl-button-group__button--focus");
  }
  handleMouseOver(t) {
    const e = Wt(t.target);
    e == null || e.classList.add("sl-button-group__button--hover");
  }
  handleMouseOut(t) {
    const e = Wt(t.target);
    e == null || e.classList.remove("sl-button-group__button--hover");
  }
  handleSlotChange() {
    const t = [...this.defaultSlot.assignedElements({ flatten: !0 })];
    t.forEach((e) => {
      const o = t.indexOf(e), r = Wt(e);
      r && (r.classList.add("sl-button-group__button"), r.classList.toggle("sl-button-group__button--first", o === 0), r.classList.toggle("sl-button-group__button--inner", o > 0 && o < t.length - 1), r.classList.toggle("sl-button-group__button--last", o === t.length - 1), r.classList.toggle("sl-button-group__button--radio", r.tagName.toLowerCase() === "sl-radio-button"));
    });
  }
  render() {
    return A`
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
re.styles = Zs;
n([
  T("slot")
], re.prototype, "defaultSlot", 2);
n([
  V()
], re.prototype, "disableRole", 2);
n([
  h()
], re.prototype, "label", 2);
function Wt(t) {
  var e;
  const o = "sl-button, sl-radio-button";
  return (e = t.closest(o)) != null ? e : t.querySelector(o);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pr = "important", Js = " !" + pr, st = xe(class extends $e {
  constructor(t) {
    var e;
    if (super(t), t.type !== ct.ATTRIBUTE || t.name !== "style" || ((e = t.strings) === null || e === void 0 ? void 0 : e.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return Object.keys(t).reduce((e, o) => {
      const r = t[o];
      return r == null ? e : e + `${o = o.includes("-") ? o : o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};`;
    }, "");
  }
  update(t, [e]) {
    const { style: o } = t.element;
    if (this.ht === void 0) {
      this.ht = /* @__PURE__ */ new Set();
      for (const r in e)
        this.ht.add(r);
      return this.render(e);
    }
    this.ht.forEach((r) => {
      e[r] == null && (this.ht.delete(r), r.includes("-") ? o.removeProperty(r) : o[r] = "");
    });
    for (const r in e) {
      const s = e[r];
      if (s != null) {
        this.ht.add(r);
        const i = typeof s == "string" && s.endsWith(Js);
        r.includes("-") || i ? o.setProperty(r, i ? s.slice(0, -11) : s, i ? pr : "") : o[r] = s;
      }
    }
    return K;
  }
});
function R(t, e) {
  Qs(t) && (t = "100%");
  const o = ti(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), o && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function ne(t) {
  return Math.min(1, Math.max(0, t));
}
function Qs(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function ti(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function fr(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function ae(t) {
  return Number(t) <= 1 ? `${Number(t) * 100}%` : t;
}
function kt(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function ei(t, e, o) {
  return {
    r: R(t, 255) * 255,
    g: R(e, 255) * 255,
    b: R(o, 255) * 255
  };
}
function Ro(t, e, o) {
  t = R(t, 255), e = R(e, 255), o = R(o, 255);
  const r = Math.max(t, e, o), s = Math.min(t, e, o);
  let i = 0, l = 0;
  const c = (r + s) / 2;
  if (r === s)
    l = 0, i = 0;
  else {
    const a = r - s;
    switch (l = c > 0.5 ? a / (2 - r - s) : a / (r + s), r) {
      case t:
        i = (e - o) / a + (e < o ? 6 : 0);
        break;
      case e:
        i = (o - t) / a + 2;
        break;
      case o:
        i = (t - e) / a + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: l, l: c };
}
function Fe(t, e, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? t + (e - t) * (6 * o) : o < 1 / 2 ? e : o < 2 / 3 ? t + (e - t) * (2 / 3 - o) * 6 : t;
}
function oi(t, e, o) {
  let r, s, i;
  if (t = R(t, 360), e = R(e, 100), o = R(o, 100), e === 0)
    s = o, i = o, r = o;
  else {
    const l = o < 0.5 ? o * (1 + e) : o + e - o * e, c = 2 * o - l;
    r = Fe(c, l, t + 1 / 3), s = Fe(c, l, t), i = Fe(c, l, t - 1 / 3);
  }
  return { r: r * 255, g: s * 255, b: i * 255 };
}
function Vo(t, e, o) {
  t = R(t, 255), e = R(e, 255), o = R(o, 255);
  const r = Math.max(t, e, o), s = Math.min(t, e, o);
  let i = 0;
  const l = r, c = r - s, a = r === 0 ? 0 : c / r;
  if (r === s)
    i = 0;
  else {
    switch (r) {
      case t:
        i = (e - o) / c + (e < o ? 6 : 0);
        break;
      case e:
        i = (o - t) / c + 2;
        break;
      case o:
        i = (t - e) / c + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: a, v: l };
}
function ri(t, e, o) {
  t = R(t, 360) * 6, e = R(e, 100), o = R(o, 100);
  const r = Math.floor(t), s = t - r, i = o * (1 - e), l = o * (1 - s * e), c = o * (1 - (1 - s) * e), a = r % 6, u = [o, l, i, i, c, o][a], p = [c, o, o, l, i, i][a], d = [i, i, c, o, o, l][a];
  return { r: u * 255, g: p * 255, b: d * 255 };
}
function Oo(t, e, o, r) {
  const s = [
    kt(Math.round(t).toString(16)),
    kt(Math.round(e).toString(16)),
    kt(Math.round(o).toString(16))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function si(t, e, o, r, s) {
  const i = [
    kt(Math.round(t).toString(16)),
    kt(Math.round(e).toString(16)),
    kt(Math.round(o).toString(16)),
    kt(ii(r))
  ];
  return s && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function ii(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function Do(t) {
  return q(t) / 255;
}
function q(t) {
  return parseInt(t, 16);
}
function li(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
const Ye = {
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
function ni(t) {
  let e = { r: 0, g: 0, b: 0 }, o = 1, r = null, s = null, i = null, l = !1, c = !1;
  return typeof t == "string" && (t = ui(t)), typeof t == "object" && (at(t.r) && at(t.g) && at(t.b) ? (e = ei(t.r, t.g, t.b), l = !0, c = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : at(t.h) && at(t.s) && at(t.v) ? (r = ae(t.s), s = ae(t.v), e = ri(t.h, r, s), l = !0, c = "hsv") : at(t.h) && at(t.s) && at(t.l) && (r = ae(t.s), i = ae(t.l), e = oi(t.h, r, i), l = !0, c = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (o = t.a)), o = fr(o), {
    ok: l,
    format: t.format || c,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: o
  };
}
const ai = "[-\\+]?\\d+%?", ci = "[-\\+]?\\d*\\.\\d+%?", ft = `(?:${ci})|(?:${ai})`, Be = `[\\s|\\(]+(${ft})[,|\\s]+(${ft})[,|\\s]+(${ft})\\s*\\)?`, He = `[\\s|\\(]+(${ft})[,|\\s]+(${ft})[,|\\s]+(${ft})[,|\\s]+(${ft})\\s*\\)?`, tt = {
  CSS_UNIT: new RegExp(ft),
  rgb: new RegExp("rgb" + Be),
  rgba: new RegExp("rgba" + He),
  hsl: new RegExp("hsl" + Be),
  hsla: new RegExp("hsla" + He),
  hsv: new RegExp("hsv" + Be),
  hsva: new RegExp("hsva" + He),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function ui(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  let e = !1;
  if (Ye[t])
    t = Ye[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let o = tt.rgb.exec(t);
  return o ? { r: o[1], g: o[2], b: o[3] } : (o = tt.rgba.exec(t), o ? { r: o[1], g: o[2], b: o[3], a: o[4] } : (o = tt.hsl.exec(t), o ? { h: o[1], s: o[2], l: o[3] } : (o = tt.hsla.exec(t), o ? { h: o[1], s: o[2], l: o[3], a: o[4] } : (o = tt.hsv.exec(t), o ? { h: o[1], s: o[2], v: o[3] } : (o = tt.hsva.exec(t), o ? { h: o[1], s: o[2], v: o[3], a: o[4] } : (o = tt.hex8.exec(t), o ? {
    r: q(o[1]),
    g: q(o[2]),
    b: q(o[3]),
    a: Do(o[4]),
    format: e ? "name" : "hex8"
  } : (o = tt.hex6.exec(t), o ? {
    r: q(o[1]),
    g: q(o[2]),
    b: q(o[3]),
    format: e ? "name" : "hex"
  } : (o = tt.hex4.exec(t), o ? {
    r: q(o[1] + o[1]),
    g: q(o[2] + o[2]),
    b: q(o[3] + o[3]),
    a: Do(o[4] + o[4]),
    format: e ? "name" : "hex8"
  } : (o = tt.hex3.exec(t), o ? {
    r: q(o[1] + o[1]),
    g: q(o[2] + o[2]),
    b: q(o[3] + o[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function at(t) {
  return !!tt.CSS_UNIT.exec(String(t));
}
class z {
  constructor(e = "", o = {}) {
    if (e instanceof z)
      return e;
    typeof e == "number" && (e = li(e)), this.originalInput = e;
    const r = ni(e);
    this.originalInput = e, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = o.format ?? r.format, this.gradientType = o.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
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
    let o, r, s;
    const i = e.r / 255, l = e.g / 255, c = e.b / 255;
    return i <= 0.03928 ? o = i / 12.92 : o = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? r = l / 12.92 : r = Math.pow((l + 0.055) / 1.055, 2.4), c <= 0.03928 ? s = c / 12.92 : s = Math.pow((c + 0.055) / 1.055, 2.4), 0.2126 * o + 0.7152 * r + 0.0722 * s;
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
    return this.a = fr(e), this.roundA = Math.round(100 * this.a) / 100, this;
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
    const e = Vo(this.r, this.g, this.b);
    return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
  }
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  toHsvString() {
    const e = Vo(this.r, this.g, this.b), o = Math.round(e.h * 360), r = Math.round(e.s * 100), s = Math.round(e.v * 100);
    return this.a === 1 ? `hsv(${o}, ${r}%, ${s}%)` : `hsva(${o}, ${r}%, ${s}%, ${this.roundA})`;
  }
  /**
   * Returns the object as a HSLA object.
   */
  toHsl() {
    const e = Ro(this.r, this.g, this.b);
    return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
  }
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  toHslString() {
    const e = Ro(this.r, this.g, this.b), o = Math.round(e.h * 360), r = Math.round(e.s * 100), s = Math.round(e.l * 100);
    return this.a === 1 ? `hsl(${o}, ${r}%, ${s}%)` : `hsla(${o}, ${r}%, ${s}%, ${this.roundA})`;
  }
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHex(e = !1) {
    return Oo(this.r, this.g, this.b, e);
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
    return si(this.r, this.g, this.b, this.a, e);
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
    const e = Math.round(this.r), o = Math.round(this.g), r = Math.round(this.b);
    return this.a === 1 ? `rgb(${e}, ${o}, ${r})` : `rgba(${e}, ${o}, ${r}, ${this.roundA})`;
  }
  /**
   * Returns the object as a RGBA object.
   */
  toPercentageRgb() {
    const e = (o) => `${Math.round(R(o, 255) * 100)}%`;
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
    const e = (o) => Math.round(R(o, 255) * 100);
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
    const e = "#" + Oo(this.r, this.g, this.b, !1);
    for (const [o, r] of Object.entries(Ye))
      if (e === r)
        return o;
    return !1;
  }
  toString(e) {
    const o = !!e;
    e = e ?? this.format;
    let r = !1;
    const s = this.a < 1 && this.a >= 0;
    return !o && s && (e.startsWith("hex") || e === "name") ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (r = this.toRgbString()), e === "prgb" && (r = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (r = this.toHexString()), e === "hex3" && (r = this.toHexString(!0)), e === "hex4" && (r = this.toHex8String(!0)), e === "hex8" && (r = this.toHex8String()), e === "name" && (r = this.toName()), e === "hsl" && (r = this.toHslString()), e === "hsv" && (r = this.toHsvString()), r || this.toHexString());
  }
  toNumber() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }
  clone() {
    return new z(this.toString());
  }
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  lighten(e = 10) {
    const o = this.toHsl();
    return o.l += e / 100, o.l = ne(o.l), new z(o);
  }
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  brighten(e = 10) {
    const o = this.toRgb();
    return o.r = Math.max(0, Math.min(255, o.r - Math.round(255 * -(e / 100)))), o.g = Math.max(0, Math.min(255, o.g - Math.round(255 * -(e / 100)))), o.b = Math.max(0, Math.min(255, o.b - Math.round(255 * -(e / 100)))), new z(o);
  }
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  darken(e = 10) {
    const o = this.toHsl();
    return o.l -= e / 100, o.l = ne(o.l), new z(o);
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
    return o.s -= e / 100, o.s = ne(o.s), new z(o);
  }
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  saturate(e = 10) {
    const o = this.toHsl();
    return o.s += e / 100, o.s = ne(o.s), new z(o);
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
    const o = this.toHsl(), r = (o.h + e) % 360;
    return o.h = r < 0 ? 360 + r : r, new z(o);
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(e, o = 50) {
    const r = this.toRgb(), s = new z(e).toRgb(), i = o / 100, l = {
      r: (s.r - r.r) * i + r.r,
      g: (s.g - r.g) * i + r.g,
      b: (s.b - r.b) * i + r.b,
      a: (s.a - r.a) * i + r.a
    };
    return new z(l);
  }
  analogous(e = 6, o = 30) {
    const r = this.toHsl(), s = 360 / o, i = [this];
    for (r.h = (r.h - (s * e >> 1) + 720) % 360; --e; )
      r.h = (r.h + s) % 360, i.push(new z(r));
    return i;
  }
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  complement() {
    const e = this.toHsl();
    return e.h = (e.h + 180) % 360, new z(e);
  }
  monochromatic(e = 6) {
    const o = this.toHsv(), { h: r } = o, { s } = o;
    let { v: i } = o;
    const l = [], c = 1 / e;
    for (; e--; )
      l.push(new z({ h: r, s, v: i })), i = (i + c) % 1;
    return l;
  }
  splitcomplement() {
    const e = this.toHsl(), { h: o } = e;
    return [
      this,
      new z({ h: (o + 72) % 360, s: e.s, l: e.l }),
      new z({ h: (o + 216) % 360, s: e.s, l: e.l })
    ];
  }
  /**
   * Compute how the color would appear on a background
   */
  onBackground(e) {
    const o = this.toRgb(), r = new z(e).toRgb(), s = o.a + r.a * (1 - o.a);
    return new z({
      r: (o.r * o.a + r.r * r.a * (1 - o.a)) / s,
      g: (o.g * o.a + r.g * r.a * (1 - o.a)) / s,
      b: (o.b * o.a + r.b * r.a * (1 - o.a)) / s,
      a: s
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
    const o = this.toHsl(), { h: r } = o, s = [this], i = 360 / e;
    for (let l = 1; l < e; l++)
      s.push(new z({ h: (r + l * i) % 360, s: o.s, l: o.l }));
    return s;
  }
  /**
   * compare color vs current color
   */
  equals(e) {
    return this.toRgbString() === new z(e).toRgbString();
  }
}
var Fo = "EyeDropper" in window, _ = class extends O {
  constructor() {
    super(), this.formControlController = new eo(this), this.isSafeValue = !1, this.localize = new Et(this), this.hasFocus = !1, this.isDraggingGridHandle = !1, this.isEmpty = !1, this.inputValue = "", this.hue = 0, this.saturation = 100, this.brightness = 100, this.alpha = 100, this.value = "", this.defaultValue = "", this.label = "", this.format = "hex", this.inline = !1, this.size = "medium", this.noFormatToggle = !1, this.name = "", this.disabled = !1, this.hoist = !1, this.opacity = !1, this.uppercase = !1, this.swatches = "", this.form = "", this.required = !1, this.handleFocusIn = () => {
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
    const e = this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"), o = e.querySelector(".color-picker__slider-handle"), { width: r } = e.getBoundingClientRect();
    let s = this.value;
    o.focus(), t.preventDefault(), Oe(e, {
      onMove: (i) => {
        this.alpha = j(i / r * 100, 0, 100), this.syncValues(), this.value !== s && (s = this.value, this.emit("sl-change"), this.emit("sl-input"));
      },
      initialEvent: t
    });
  }
  handleHueDrag(t) {
    const e = this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"), o = e.querySelector(".color-picker__slider-handle"), { width: r } = e.getBoundingClientRect();
    let s = this.value;
    o.focus(), t.preventDefault(), Oe(e, {
      onMove: (i) => {
        this.hue = j(i / r * 360, 0, 360), this.syncValues(), this.value !== s && (s = this.value, this.emit("sl-change"), this.emit("sl-input"));
      },
      initialEvent: t
    });
  }
  handleGridDrag(t) {
    const e = this.shadowRoot.querySelector(".color-picker__grid"), o = e.querySelector(".color-picker__grid-handle"), { width: r, height: s } = e.getBoundingClientRect();
    let i = this.value;
    o.focus(), t.preventDefault(), this.isDraggingGridHandle = !0, Oe(e, {
      onMove: (l, c) => {
        this.saturation = j(l / r * 100, 0, 100), this.brightness = j(100 - c / s * 100, 0, 100), this.syncValues(), this.value !== i && (i = this.value, this.emit("sl-change"), this.emit("sl-input"));
      },
      onStop: () => this.isDraggingGridHandle = !1,
      initialEvent: t
    });
  }
  handleAlphaKeyDown(t) {
    const e = t.shiftKey ? 10 : 1, o = this.value;
    t.key === "ArrowLeft" && (t.preventDefault(), this.alpha = j(this.alpha - e, 0, 100), this.syncValues()), t.key === "ArrowRight" && (t.preventDefault(), this.alpha = j(this.alpha + e, 0, 100), this.syncValues()), t.key === "Home" && (t.preventDefault(), this.alpha = 0, this.syncValues()), t.key === "End" && (t.preventDefault(), this.alpha = 100, this.syncValues()), this.value !== o && (this.emit("sl-change"), this.emit("sl-input"));
  }
  handleHueKeyDown(t) {
    const e = t.shiftKey ? 10 : 1, o = this.value;
    t.key === "ArrowLeft" && (t.preventDefault(), this.hue = j(this.hue - e, 0, 360), this.syncValues()), t.key === "ArrowRight" && (t.preventDefault(), this.hue = j(this.hue + e, 0, 360), this.syncValues()), t.key === "Home" && (t.preventDefault(), this.hue = 0, this.syncValues()), t.key === "End" && (t.preventDefault(), this.hue = 360, this.syncValues()), this.value !== o && (this.emit("sl-change"), this.emit("sl-input"));
  }
  handleGridKeyDown(t) {
    const e = t.shiftKey ? 10 : 1, o = this.value;
    t.key === "ArrowLeft" && (t.preventDefault(), this.saturation = j(this.saturation - e, 0, 100), this.syncValues()), t.key === "ArrowRight" && (t.preventDefault(), this.saturation = j(this.saturation + e, 0, 100), this.syncValues()), t.key === "ArrowUp" && (t.preventDefault(), this.brightness = j(this.brightness + e, 0, 100), this.syncValues()), t.key === "ArrowDown" && (t.preventDefault(), this.brightness = j(this.brightness - e, 0, 100), this.syncValues()), this.value !== o && (this.emit("sl-change"), this.emit("sl-input"));
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
    const e = new z(t);
    if (!e.isValid)
      return null;
    const o = e.toHsl(), r = {
      h: o.h,
      s: o.s * 100,
      l: o.l * 100,
      a: o.a
    }, s = e.toRgb(), i = e.toHexString(), l = e.toHex8String(), c = e.toHsv(), a = {
      h: c.h,
      s: c.s * 100,
      v: c.v * 100,
      a: c.a
    };
    return {
      hsl: {
        h: r.h,
        s: r.s,
        l: r.l,
        string: this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)
      },
      hsla: {
        h: r.h,
        s: r.s,
        l: r.l,
        a: r.a,
        string: this.setLetterCase(
          `hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`
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
        r: s.r,
        g: s.g,
        b: s.b,
        string: this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)
      },
      rgba: {
        r: s.r,
        g: s.g,
        b: s.b,
        a: s.a,
        string: this.setLetterCase(
          `rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`
        )
      },
      hex: this.setLetterCase(i),
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
    if (!Fo)
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
  getHexString(t, e, o, r = 100) {
    const s = new z(`hsva(${t}, ${e}, ${o}, ${r / 100})`);
    return s.isValid ? s.toHex8String() : "";
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
    const t = this.saturation, e = 100 - this.brightness, o = Array.isArray(this.swatches) ? this.swatches : this.swatches.split(";").filter((s) => s.trim() !== ""), r = A`
      <div
        part="base"
        class=${B({
      "color-picker": !0,
      "color-picker--inline": this.inline,
      "color-picker--disabled": this.disabled,
      "color-picker--focused": this.hasFocus
    })}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-labelledby="label"
        tabindex=${this.inline ? "0" : "-1"}
      >
        ${this.inline ? A`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            ` : null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${st({ backgroundColor: this.getHexString(this.hue, 100, 100) })}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${B({
      "color-picker__grid-handle": !0,
      "color-picker__grid-handle--dragging": this.isDraggingGridHandle
    })}
            style=${st({
      top: `${e}%`,
      left: `${t}%`,
      backgroundColor: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
            role="application"
            aria-label="HSV"
            tabindex=${y(this.disabled ? void 0 : "0")}
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
                style=${st({
      left: `${this.hue === 0 ? 0 : 100 / (360 / this.hue)}%`
    })}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${y(this.disabled ? void 0 : "0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity ? A`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${st({
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
                      style=${st({
      left: `${this.alpha}%`
    })}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${y(this.disabled ? void 0 : "0")}
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
            style=${st({
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
            ${this.noFormatToggle ? "" : A`
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
            ${Fo ? A`
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

        ${o.length > 0 ? A`
              <div part="swatches" class="color-picker__swatches">
                ${o.map((s) => {
      const i = this.parseColor(s);
      return i ? A`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${y(this.disabled ? void 0 : "0")}
                      role="button"
                      aria-label=${s}
                      @click=${() => this.selectSwatch(s)}
                      @keydown=${(l) => !this.disabled && l.key === "Enter" && this.setColor(i.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${st({ backgroundColor: i.hexa })}
                      ></div>
                    </div>
                  ` : (console.error(`Unable to parse swatch color: "${s}"`, this), "");
    })}
              </div>
            ` : ""}
      </div>
    `;
    return this.inline ? r : A`
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
          class=${B({
      "color-dropdown__trigger": !0,
      "color-dropdown__trigger--disabled": this.disabled,
      "color-dropdown__trigger--small": this.size === "small",
      "color-dropdown__trigger--medium": this.size === "medium",
      "color-dropdown__trigger--large": this.size === "large",
      "color-dropdown__trigger--empty": this.isEmpty,
      "color-dropdown__trigger--focused": this.hasFocus,
      "color-picker__transparent-bg": !0
    })}
          style=${st({
      color: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `;
  }
};
_.styles = Ys;
_.dependencies = {
  "sl-button-group": re,
  "sl-button": x,
  "sl-dropdown": F,
  "sl-icon": Y,
  "sl-input": v,
  "sl-visually-hidden": tr
};
n([
  T('[part~="base"]')
], _.prototype, "base", 2);
n([
  T('[part~="input"]')
], _.prototype, "input", 2);
n([
  T(".color-dropdown")
], _.prototype, "dropdown", 2);
n([
  T('[part~="preview"]')
], _.prototype, "previewButton", 2);
n([
  T('[part~="trigger"]')
], _.prototype, "trigger", 2);
n([
  V()
], _.prototype, "hasFocus", 2);
n([
  V()
], _.prototype, "isDraggingGridHandle", 2);
n([
  V()
], _.prototype, "isEmpty", 2);
n([
  V()
], _.prototype, "inputValue", 2);
n([
  V()
], _.prototype, "hue", 2);
n([
  V()
], _.prototype, "saturation", 2);
n([
  V()
], _.prototype, "brightness", 2);
n([
  V()
], _.prototype, "alpha", 2);
n([
  h()
], _.prototype, "value", 2);
n([
  er()
], _.prototype, "defaultValue", 2);
n([
  h()
], _.prototype, "label", 2);
n([
  h()
], _.prototype, "format", 2);
n([
  h({ type: Boolean, reflect: !0 })
], _.prototype, "inline", 2);
n([
  h({ reflect: !0 })
], _.prototype, "size", 2);
n([
  h({ attribute: "no-format-toggle", type: Boolean })
], _.prototype, "noFormatToggle", 2);
n([
  h()
], _.prototype, "name", 2);
n([
  h({ type: Boolean, reflect: !0 })
], _.prototype, "disabled", 2);
n([
  h({ type: Boolean })
], _.prototype, "hoist", 2);
n([
  h({ type: Boolean })
], _.prototype, "opacity", 2);
n([
  h({ type: Boolean })
], _.prototype, "uppercase", 2);
n([
  h()
], _.prototype, "swatches", 2);
n([
  h({ reflect: !0 })
], _.prototype, "form", 2);
n([
  h({ type: Boolean, reflect: !0 })
], _.prototype, "required", 2);
n([
  X("format", { waitUntilFirstUpdate: !0 })
], _.prototype, "handleFormatChange", 1);
n([
  X("opacity", { waitUntilFirstUpdate: !0 })
], _.prototype, "handleOpacityChange", 1);
n([
  X("value")
], _.prototype, "handleValueChange", 1);
_.define("sl-color-picker");
function* gr(t = document.activeElement) {
  t != null && (yield t, "shadowRoot" in t && t.shadowRoot && t.shadowRoot.mode !== "closed" && (yield* gr(t.shadowRoot.activeElement)));
}
var Kt = [], hi = class {
  constructor(t) {
    this.tabDirection = "forward", this.handleFocusIn = () => {
      this.checkFocus();
    }, this.handleKeyDown = (e) => {
      var o;
      if (e.key !== "Tab" || this.isExternalActivated)
        return;
      e.shiftKey ? this.tabDirection = "backward" : this.tabDirection = "forward", e.preventDefault();
      const r = he(this.element), s = r[0];
      let i = this.startElementAlreadyFocused(s) ? 0 : this.currentFocusIndex;
      if (i === -1) {
        this.currentFocus = s, this.currentFocus.focus({ preventScroll: !0 });
        return;
      }
      const l = this.tabDirection === "forward" ? 1 : -1;
      i + l >= r.length ? i = 0 : this.currentFocusIndex + l < 0 ? i = r.length - 1 : i += l, this.currentFocus = r[i], (o = this.currentFocus) == null || o.focus({ preventScroll: !0 }), setTimeout(() => this.checkFocus());
    }, this.handleKeyUp = () => {
      this.tabDirection = "forward";
    }, this.element = t;
  }
  /** Activates focus trapping. */
  activate() {
    Kt.push(this.element), document.addEventListener("focusin", this.handleFocusIn), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp);
  }
  /** Deactivates focus trapping. */
  deactivate() {
    Kt = Kt.filter((t) => t !== this.element), this.currentFocus = null, document.removeEventListener("focusin", this.handleFocusIn), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp);
  }
  /** Determines if this modal element is currently active or not. */
  isActive() {
    return Kt[Kt.length - 1] === this.element;
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
      const t = he(this.element);
      if (!this.element.matches(":focus-within")) {
        const e = t[0], o = t[t.length - 1], r = this.tabDirection === "forward" ? e : o;
        typeof (r == null ? void 0 : r.focus) == "function" && (this.currentFocus = r, r.focus({ preventScroll: !0 }));
      }
    }
  }
  get currentFocusIndex() {
    return he(this.element).findIndex((t) => t === this.currentFocus);
  }
  // Checks if the `startElement` is already focused. This is important if the modal already has an existing focus prior
  // to the first tab key.
  startElementAlreadyFocused(t) {
    for (const e of gr())
      if (t === e)
        return !0;
    return !1;
  }
}, Ze = /* @__PURE__ */ new Set();
function di() {
  const t = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Bo(t) {
  if (Ze.add(t), !document.body.classList.contains("sl-scroll-lock")) {
    const e = di();
    document.body.classList.add("sl-scroll-lock"), document.body.style.setProperty("--sl-scroll-lock-size", `${e}px`);
  }
}
function Ho(t) {
  Ze.delete(t), Ze.size === 0 && (document.body.classList.remove("sl-scroll-lock"), document.body.style.removeProperty("--sl-scroll-lock-size"));
}
var pi = H`
  ${Q}

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
`, fi = H`
  ${Q}

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
`, I = class extends O {
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
    const t = !!this.href, e = t ? ge`a` : ge`button`;
    return ue`
      <${e}
        part="base"
        class=${B({
      "icon-button": !0,
      "icon-button--disabled": !t && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${y(t ? void 0 : this.disabled)}
        type=${y(t ? void 0 : "button")}
        href=${y(t ? this.href : void 0)}
        target=${y(t ? this.target : void 0)}
        download=${y(t ? this.download : void 0)}
        rel=${y(t && this.target ? "noreferrer noopener" : void 0)}
        role=${y(t ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${y(this.name)}
          library=${y(this.library)}
          src=${y(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `;
  }
};
I.styles = fi;
I.dependencies = { "sl-icon": Y };
n([
  T(".icon-button")
], I.prototype, "button", 2);
n([
  V()
], I.prototype, "hasFocus", 2);
n([
  h()
], I.prototype, "name", 2);
n([
  h()
], I.prototype, "library", 2);
n([
  h()
], I.prototype, "src", 2);
n([
  h()
], I.prototype, "href", 2);
n([
  h()
], I.prototype, "target", 2);
n([
  h()
], I.prototype, "download", 2);
n([
  h()
], I.prototype, "label", 2);
n([
  h({ type: Boolean, reflect: !0 })
], I.prototype, "disabled", 2);
var lt = class extends O {
  constructor() {
    super(...arguments), this.hasSlotController = new ro(this, "footer"), this.localize = new Et(this), this.modal = new hi(this), this.open = !1, this.label = "", this.noHeader = !1, this.handleDocumentKeyDown = (t) => {
      t.key === "Escape" && this.modal.isActive() && this.open && (t.stopPropagation(), this.requestClose("keyboard"));
    };
  }
  firstUpdated() {
    this.dialog.hidden = !this.open, this.open && (this.addOpenListeners(), this.modal.activate(), Bo(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.modal.deactivate(), Ho(this);
  }
  requestClose(t) {
    if (this.emit("sl-request-close", {
      cancelable: !0,
      detail: { source: t }
    }).defaultPrevented) {
      const o = _t(this, "dialog.denyClose", { dir: this.localize.dir() });
      xt(this.panel, o.keyframes, o.options);
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
      this.emit("sl-show"), this.addOpenListeners(), this.originalTrigger = document.activeElement, this.modal.activate(), Bo(this);
      const t = this.querySelector("[autofocus]");
      t && t.removeAttribute("autofocus"), await Promise.all([Pt(this.dialog), Pt(this.overlay)]), this.dialog.hidden = !1, requestAnimationFrame(() => {
        this.emit("sl-initial-focus", { cancelable: !0 }).defaultPrevented || (t ? t.focus({ preventScroll: !0 }) : this.panel.focus({ preventScroll: !0 })), t && t.setAttribute("autofocus", "");
      });
      const e = _t(this, "dialog.show", { dir: this.localize.dir() }), o = _t(this, "dialog.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        xt(this.panel, e.keyframes, e.options),
        xt(this.overlay, o.keyframes, o.options)
      ]), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), this.modal.deactivate(), await Promise.all([Pt(this.dialog), Pt(this.overlay)]);
      const t = _t(this, "dialog.hide", { dir: this.localize.dir() }), e = _t(this, "dialog.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        xt(this.overlay, e.keyframes, e.options).then(() => {
          this.overlay.hidden = !0;
        }),
        xt(this.panel, t.keyframes, t.options).then(() => {
          this.panel.hidden = !0;
        })
      ]), this.dialog.hidden = !0, this.overlay.hidden = !1, this.panel.hidden = !1, Ho(this);
      const o = this.originalTrigger;
      typeof (o == null ? void 0 : o.focus) == "function" && setTimeout(() => o.focus()), this.emit("sl-after-hide");
    }
  }
  /** Shows the dialog. */
  async show() {
    if (!this.open)
      return this.open = !0, ye(this, "sl-after-show");
  }
  /** Hides the dialog */
  async hide() {
    if (this.open)
      return this.open = !1, ye(this, "sl-after-hide");
  }
  render() {
    return A`
      <div
        part="base"
        class=${B({
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
          aria-label=${y(this.noHeader ? this.label : void 0)}
          aria-labelledby=${y(this.noHeader ? void 0 : "title")}
          tabindex="-1"
        >
          ${this.noHeader ? "" : A`
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
lt.styles = pi;
lt.dependencies = {
  "sl-icon-button": I
};
n([
  T(".dialog")
], lt.prototype, "dialog", 2);
n([
  T(".dialog__panel")
], lt.prototype, "panel", 2);
n([
  T(".dialog__overlay")
], lt.prototype, "overlay", 2);
n([
  h({ type: Boolean, reflect: !0 })
], lt.prototype, "open", 2);
n([
  h({ reflect: !0 })
], lt.prototype, "label", 2);
n([
  h({ attribute: "no-header", type: Boolean, reflect: !0 })
], lt.prototype, "noHeader", 2);
n([
  X("open", { waitUntilFirstUpdate: !0 })
], lt.prototype, "handleOpenChange", 1);
zt("dialog.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});
zt("dialog.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: "ease" }
});
zt("dialog.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
  options: { duration: 250 }
});
zt("dialog.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
zt("dialog.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});
lt.define("sl-dialog");
I.define("sl-icon-button");
v.define("sl-input");
var gi = H`
  ${Q}

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
class Je extends $e {
  constructor(e) {
    if (super(e), this.et = M, e.type !== ct.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === M || e == null)
      return this.ft = void 0, this.et = e;
    if (e === K)
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
Je.directiveName = "unsafeHTML", Je.resultType = 1;
const Ie = xe(Je);
var D = class extends O {
  constructor() {
    super(...arguments), this.localize = new Et(this), this.hoverValue = 0, this.isHovering = !1, this.label = "", this.value = 0, this.max = 5, this.precision = 1, this.readonly = !1, this.disabled = !1, this.getSymbol = () => '<sl-icon name="star-fill" library="system"></sl-icon>';
  }
  getValueFromMousePosition(t) {
    return this.getValueFromXCoordinate(t.clientX);
  }
  getValueFromTouchPosition(t) {
    return this.getValueFromXCoordinate(t.touches[0].clientX);
  }
  getValueFromXCoordinate(t) {
    const e = this.localize.dir() === "rtl", { left: o, right: r, width: s } = this.rating.getBoundingClientRect(), i = e ? this.roundToPrecision((r - t) / s * this.max, this.precision) : this.roundToPrecision((t - o) / s * this.max, this.precision);
    return j(i, 0, this.max);
  }
  handleClick(t) {
    this.disabled || (this.setValue(this.getValueFromMousePosition(t)), this.emit("sl-change"));
  }
  setValue(t) {
    this.disabled || this.readonly || (this.value = t === this.value ? 0 : t, this.isHovering = !1);
  }
  handleKeyDown(t) {
    const e = this.localize.dir() === "ltr", o = this.localize.dir() === "rtl", r = this.value;
    if (!(this.disabled || this.readonly)) {
      if (t.key === "ArrowDown" || e && t.key === "ArrowLeft" || o && t.key === "ArrowRight") {
        const s = t.shiftKey ? 1 : this.precision;
        this.value = Math.max(0, this.value - s), t.preventDefault();
      }
      if (t.key === "ArrowUp" || e && t.key === "ArrowRight" || o && t.key === "ArrowLeft") {
        const s = t.shiftKey ? 1 : this.precision;
        this.value = Math.min(this.max, this.value + s), t.preventDefault();
      }
      t.key === "Home" && (this.value = 0, t.preventDefault()), t.key === "End" && (this.value = this.max, t.preventDefault()), this.value !== r && this.emit("sl-change");
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
    return this.disabled || this.readonly ? o = this.value : o = this.isHovering ? this.hoverValue : this.value, A`
      <div
        part="base"
        class=${B({
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
          ${e.map((r) => o > r && o < r + 1 ? A`
                <span
                  class=${B({
      rating__symbol: !0,
      "rating__partial-symbol-container": !0,
      "rating__symbol--hover": this.isHovering && Math.ceil(o) === r + 1
    })}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${st({
      clipPath: t ? `inset(0 ${(o - r) * 100}% 0 0)` : `inset(0 0 0 ${(o - r) * 100}%)`
    })}
                  >
                    ${Ie(this.getSymbol(r + 1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${st({
      clipPath: t ? `inset(0 0 0 ${100 - (o - r) * 100}%)` : `inset(0 ${100 - (o - r) * 100}% 0 0)`
    })}
                  >
                    ${Ie(this.getSymbol(r + 1))}
                  </div>
                </span>
              ` : A`
              <span
                class=${B({
      rating__symbol: !0,
      "rating__symbol--hover": this.isHovering && Math.ceil(o) === r + 1,
      "rating__symbol--active": o >= r + 1
    })}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Ie(this.getSymbol(r + 1))}
              </span>
            `)}
        </span>
      </div>
    `;
  }
};
D.styles = gi;
D.dependencies = { "sl-icon": Y };
n([
  T(".rating")
], D.prototype, "rating", 2);
n([
  V()
], D.prototype, "hoverValue", 2);
n([
  V()
], D.prototype, "isHovering", 2);
n([
  h()
], D.prototype, "label", 2);
n([
  h({ type: Number })
], D.prototype, "value", 2);
n([
  h({ type: Number })
], D.prototype, "max", 2);
n([
  h({ type: Number })
], D.prototype, "precision", 2);
n([
  h({ type: Boolean, reflect: !0 })
], D.prototype, "readonly", 2);
n([
  h({ type: Boolean, reflect: !0 })
], D.prototype, "disabled", 2);
n([
  h()
], D.prototype, "getSymbol", 2);
n([
  Nr({ passive: !0 })
], D.prototype, "handleTouchMove", 1);
n([
  X("hoverValue")
], D.prototype, "handleHoverValueChange", 1);
n([
  X("isHovering")
], D.prototype, "handleIsHoveringChange", 1);
D.define("sl-rating");
We("../../node_modules/@shoelace-style/shoelace/dist");
