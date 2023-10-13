var Hr = { exports: {} }, er = {}, Kr = { exports: {} }, P = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function pn() {
  if (Rt)
    return P;
  Rt = 1;
  var n = Symbol.for("react.element"), a = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), v = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), S = Symbol.iterator;
  function A(o) {
    return o === null || typeof o != "object" ? null : (o = S && o[S] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, H = Object.assign, X = {};
  function U(o, f, x) {
    this.props = o, this.context = f, this.refs = X, this.updater = x || L;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(o, f) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, f, "setState");
  }, U.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function te() {
  }
  te.prototype = U.prototype;
  function D(o, f, x) {
    this.props = o, this.context = f, this.refs = X, this.updater = x || L;
  }
  var he = D.prototype = new te();
  he.constructor = D, H(he, U.prototype), he.isPureReactComponent = !0;
  var pe = Array.isArray, Q = Object.prototype.hasOwnProperty, ue = { current: null }, be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(o, f, x) {
    var T, j = {}, Y = null, B = null;
    if (f != null)
      for (T in f.ref !== void 0 && (B = f.ref), f.key !== void 0 && (Y = "" + f.key), f)
        Q.call(f, T) && !be.hasOwnProperty(T) && (j[T] = f[T]);
    var z = arguments.length - 2;
    if (z === 1)
      j.children = x;
    else if (1 < z) {
      for (var V = Array(z), se = 0; se < z; se++)
        V[se] = arguments[se + 2];
      j.children = V;
    }
    if (o && o.defaultProps)
      for (T in z = o.defaultProps, z)
        j[T] === void 0 && (j[T] = z[T]);
    return { $$typeof: n, type: o, key: Y, ref: B, props: j, _owner: ue.current };
  }
  function we(o, f) {
    return { $$typeof: n, type: o.type, key: f, ref: o.ref, props: o.props, _owner: o._owner };
  }
  function _e(o) {
    return typeof o == "object" && o !== null && o.$$typeof === n;
  }
  function xe(o) {
    var f = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(x) {
      return f[x];
    });
  }
  var N = /\/+/g;
  function le(o, f) {
    return typeof o == "object" && o !== null && o.key != null ? xe("" + o.key) : f.toString(36);
  }
  function ie(o, f, x, T, j) {
    var Y = typeof o;
    (Y === "undefined" || Y === "boolean") && (o = null);
    var B = !1;
    if (o === null)
      B = !0;
    else
      switch (Y) {
        case "string":
        case "number":
          B = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case n:
            case a:
              B = !0;
          }
      }
    if (B)
      return B = o, j = j(B), o = T === "" ? "." + le(B, 0) : T, pe(j) ? (x = "", o != null && (x = o.replace(N, "$&/") + "/"), ie(j, f, x, "", function(se) {
        return se;
      })) : j != null && (_e(j) && (j = we(j, x + (!j.key || B && B.key === j.key ? "" : ("" + j.key).replace(N, "$&/") + "/") + o)), f.push(j)), 1;
    if (B = 0, T = T === "" ? "." : T + ":", pe(o))
      for (var z = 0; z < o.length; z++) {
        Y = o[z];
        var V = T + le(Y, z);
        B += ie(Y, f, x, V, j);
      }
    else if (V = A(o), typeof V == "function")
      for (o = V.call(o), z = 0; !(Y = o.next()).done; )
        Y = Y.value, V = T + le(Y, z++), B += ie(Y, f, x, V, j);
    else if (Y === "object")
      throw f = String(o), Error("Objects are not valid as a React child (found: " + (f === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead.");
    return B;
  }
  function ne(o, f, x) {
    if (o == null)
      return o;
    var T = [], j = 0;
    return ie(o, T, "", "", function(Y) {
      return f.call(x, Y, j++);
    }), T;
  }
  function de(o) {
    if (o._status === -1) {
      var f = o._result;
      f = f(), f.then(function(x) {
        (o._status === 0 || o._status === -1) && (o._status = 1, o._result = x);
      }, function(x) {
        (o._status === 0 || o._status === -1) && (o._status = 2, o._result = x);
      }), o._status === -1 && (o._status = 0, o._result = f);
    }
    if (o._status === 1)
      return o._result.default;
    throw o._result;
  }
  var _ = { current: null }, ve = { transition: null }, ge = { ReactCurrentDispatcher: _, ReactCurrentBatchConfig: ve, ReactCurrentOwner: ue };
  return P.Children = { map: ne, forEach: function(o, f, x) {
    ne(o, function() {
      f.apply(this, arguments);
    }, x);
  }, count: function(o) {
    var f = 0;
    return ne(o, function() {
      f++;
    }), f;
  }, toArray: function(o) {
    return ne(o, function(f) {
      return f;
    }) || [];
  }, only: function(o) {
    if (!_e(o))
      throw Error("React.Children.only expected to receive a single React element child.");
    return o;
  } }, P.Component = U, P.Fragment = u, P.Profiler = g, P.PureComponent = D, P.StrictMode = l, P.Suspense = w, P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge, P.cloneElement = function(o, f, x) {
    if (o == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
    var T = H({}, o.props), j = o.key, Y = o.ref, B = o._owner;
    if (f != null) {
      if (f.ref !== void 0 && (Y = f.ref, B = ue.current), f.key !== void 0 && (j = "" + f.key), o.type && o.type.defaultProps)
        var z = o.type.defaultProps;
      for (V in f)
        Q.call(f, V) && !be.hasOwnProperty(V) && (T[V] = f[V] === void 0 && z !== void 0 ? z[V] : f[V]);
    }
    var V = arguments.length - 2;
    if (V === 1)
      T.children = x;
    else if (1 < V) {
      z = Array(V);
      for (var se = 0; se < V; se++)
        z[se] = arguments[se + 2];
      T.children = z;
    }
    return { $$typeof: n, type: o.type, key: j, ref: Y, props: T, _owner: B };
  }, P.createContext = function(o) {
    return o = { $$typeof: v, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, o.Provider = { $$typeof: b, _context: o }, o.Consumer = o;
  }, P.createElement = ye, P.createFactory = function(o) {
    var f = ye.bind(null, o);
    return f.type = o, f;
  }, P.createRef = function() {
    return { current: null };
  }, P.forwardRef = function(o) {
    return { $$typeof: m, render: o };
  }, P.isValidElement = _e, P.lazy = function(o) {
    return { $$typeof: C, _payload: { _status: -1, _result: o }, _init: de };
  }, P.memo = function(o, f) {
    return { $$typeof: E, type: o, compare: f === void 0 ? null : f };
  }, P.startTransition = function(o) {
    var f = ve.transition;
    ve.transition = {};
    try {
      o();
    } finally {
      ve.transition = f;
    }
  }, P.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, P.useCallback = function(o, f) {
    return _.current.useCallback(o, f);
  }, P.useContext = function(o) {
    return _.current.useContext(o);
  }, P.useDebugValue = function() {
  }, P.useDeferredValue = function(o) {
    return _.current.useDeferredValue(o);
  }, P.useEffect = function(o, f) {
    return _.current.useEffect(o, f);
  }, P.useId = function() {
    return _.current.useId();
  }, P.useImperativeHandle = function(o, f, x) {
    return _.current.useImperativeHandle(o, f, x);
  }, P.useInsertionEffect = function(o, f) {
    return _.current.useInsertionEffect(o, f);
  }, P.useLayoutEffect = function(o, f) {
    return _.current.useLayoutEffect(o, f);
  }, P.useMemo = function(o, f) {
    return _.current.useMemo(o, f);
  }, P.useReducer = function(o, f, x) {
    return _.current.useReducer(o, f, x);
  }, P.useRef = function(o) {
    return _.current.useRef(o);
  }, P.useState = function(o) {
    return _.current.useState(o);
  }, P.useSyncExternalStore = function(o, f, x) {
    return _.current.useSyncExternalStore(o, f, x);
  }, P.useTransition = function() {
    return _.current.useTransition();
  }, P.version = "18.2.0", P;
}
var or = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
or.exports;
var Ct;
function vn() {
  return Ct || (Ct = 1, function(n, a) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var u = "18.2.0", l = Symbol.for("react.element"), g = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), E = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), U = Symbol.iterator, te = "@@iterator";
      function D(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = U && e[U] || e[te];
        return typeof r == "function" ? r : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pe = {
        transition: null
      }, Q = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ue = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, be = {}, ye = null;
      function we(e) {
        ye = e;
      }
      be.setExtraStackFrame = function(e) {
        ye = e;
      }, be.getCurrentStack = null, be.getStackAddendum = function() {
        var e = "";
        ye && (e += ye);
        var r = be.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var _e = !1, xe = !1, N = !1, le = !1, ie = !1, ne = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: pe,
        ReactCurrentOwner: ue
      };
      ne.ReactDebugCurrentFrame = be, ne.ReactCurrentActQueue = Q;
      function de(e) {
        {
          for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
            i[s - 1] = arguments[s];
          ve("warn", e, i);
        }
      }
      function _(e) {
        {
          for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
            i[s - 1] = arguments[s];
          ve("error", e, i);
        }
      }
      function ve(e, r, i) {
        {
          var s = ne.ReactDebugCurrentFrame, d = s.getStackAddendum();
          d !== "" && (r += "%s", i = i.concat([d]));
          var R = i.map(function(h) {
            return String(h);
          });
          R.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, R);
        }
      }
      var ge = {};
      function o(e, r) {
        {
          var i = e.constructor, s = i && (i.displayName || i.name) || "ReactClass", d = s + "." + r;
          if (ge[d])
            return;
          _("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, s), ge[d] = !0;
        }
      }
      var f = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, i) {
          o(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, i, s) {
          o(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, i, s) {
          o(e, "setState");
        }
      }, x = Object.assign, T = {};
      Object.freeze(T);
      function j(e, r, i) {
        this.props = e, this.context = r, this.refs = T, this.updater = i || f;
      }
      j.prototype.isReactComponent = {}, j.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, j.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var Y = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, B = function(e, r) {
          Object.defineProperty(j.prototype, e, {
            get: function() {
              de("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var z in Y)
          Y.hasOwnProperty(z) && B(z, Y[z]);
      }
      function V() {
      }
      V.prototype = j.prototype;
      function se(e, r, i) {
        this.props = e, this.context = r, this.refs = T, this.updater = i || f;
      }
      var Te = se.prototype = new V();
      Te.constructor = se, x(Te, j.prototype), Te.isPureReactComponent = !0;
      function Sr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var ar = Array.isArray;
      function Ue(e) {
        return ar(e);
      }
      function Tr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return i;
        }
      }
      function Ge(e) {
        try {
          return Ie(e), !1;
        } catch {
          return !0;
        }
      }
      function Ie(e) {
        return "" + e;
      }
      function $e(e) {
        if (Ge(e))
          return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), Ie(e);
      }
      function ir(e, r, i) {
        var s = e.displayName;
        if (s)
          return s;
        var d = r.displayName || r.name || "";
        return d !== "" ? i + "(" + d + ")" : i;
      }
      function Me(e) {
        return e.displayName || "Context";
      }
      function Ce(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case b:
            return "Fragment";
          case g:
            return "Portal";
          case m:
            return "Profiler";
          case v:
            return "StrictMode";
          case S:
            return "Suspense";
          case A:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case E:
              var r = e;
              return Me(r) + ".Consumer";
            case w:
              var i = e;
              return Me(i._context) + ".Provider";
            case C:
              return ir(e, e.render, "ForwardRef");
            case L:
              var s = e.displayName || null;
              return s !== null ? s : Ce(e.type) || "Memo";
            case H: {
              var d = e, R = d._payload, h = d._init;
              try {
                return Ce(h(R));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Fe = Object.prototype.hasOwnProperty, Ye = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, sr, ur, Be;
      Be = {};
      function Je(e) {
        if (Fe.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function ke(e) {
        if (Fe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function kr(e, r) {
        var i = function() {
          sr || (sr = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
      function lr(e, r) {
        var i = function() {
          ur || (ur = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
      function cr(e) {
        if (typeof e.ref == "string" && ue.current && e.__self && ue.current.stateNode !== e.__self) {
          var r = Ce(ue.current.type);
          Be[r] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Be[r] = !0);
        }
      }
      var De = function(e, r, i, s, d, R, h) {
        var k = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: l,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: i,
          props: h,
          // Record the component responsible for creating this element.
          _owner: R
        };
        return k._store = {}, Object.defineProperty(k._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(k, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: s
        }), Object.defineProperty(k, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: d
        }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
      };
      function Or(e, r, i) {
        var s, d = {}, R = null, h = null, k = null, M = null;
        if (r != null) {
          Je(r) && (h = r.ref, cr(r)), ke(r) && ($e(r.key), R = "" + r.key), k = r.__self === void 0 ? null : r.__self, M = r.__source === void 0 ? null : r.__source;
          for (s in r)
            Fe.call(r, s) && !Ye.hasOwnProperty(s) && (d[s] = r[s]);
        }
        var G = arguments.length - 2;
        if (G === 1)
          d.children = i;
        else if (G > 1) {
          for (var K = Array(G), J = 0; J < G; J++)
            K[J] = arguments[J + 2];
          Object.freeze && Object.freeze(K), d.children = K;
        }
        if (e && e.defaultProps) {
          var ee = e.defaultProps;
          for (s in ee)
            d[s] === void 0 && (d[s] = ee[s]);
        }
        if (R || h) {
          var oe = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          R && kr(d, oe), h && lr(d, oe);
        }
        return De(e, R, h, k, M, ue.current, d);
      }
      function Pr(e, r) {
        var i = De(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return i;
      }
      function Ar(e, r, i) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var s, d = x({}, e.props), R = e.key, h = e.ref, k = e._self, M = e._source, G = e._owner;
        if (r != null) {
          Je(r) && (h = r.ref, G = ue.current), ke(r) && ($e(r.key), R = "" + r.key);
          var K;
          e.type && e.type.defaultProps && (K = e.type.defaultProps);
          for (s in r)
            Fe.call(r, s) && !Ye.hasOwnProperty(s) && (r[s] === void 0 && K !== void 0 ? d[s] = K[s] : d[s] = r[s]);
        }
        var J = arguments.length - 2;
        if (J === 1)
          d.children = i;
        else if (J > 1) {
          for (var ee = Array(J), oe = 0; oe < J; oe++)
            ee[oe] = arguments[oe + 2];
          d.children = ee;
        }
        return De(e.type, R, h, k, M, G, d);
      }
      function Oe(e) {
        return typeof e == "object" && e !== null && e.$$typeof === l;
      }
      var fr = ".", jr = ":";
      function Ir(e) {
        var r = /[=:]/g, i = {
          "=": "=0",
          ":": "=2"
        }, s = e.replace(r, function(d) {
          return i[d];
        });
        return "$" + s;
      }
      var qe = !1, dr = /\/+/g;
      function Se(e) {
        return e.replace(dr, "$&/");
      }
      function Ne(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? ($e(e.key), Ir("" + e.key)) : r.toString(36);
      }
      function Pe(e, r, i, s, d) {
        var R = typeof e;
        (R === "undefined" || R === "boolean") && (e = null);
        var h = !1;
        if (e === null)
          h = !0;
        else
          switch (R) {
            case "string":
            case "number":
              h = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case l:
                case g:
                  h = !0;
              }
          }
        if (h) {
          var k = e, M = d(k), G = s === "" ? fr + Ne(k, 0) : s;
          if (Ue(M)) {
            var K = "";
            G != null && (K = Se(G) + "/"), Pe(M, r, K, "", function(dn) {
              return dn;
            });
          } else
            M != null && (Oe(M) && (M.key && (!k || k.key !== M.key) && $e(M.key), M = Pr(
              M,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              i + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (M.key && (!k || k.key !== M.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Se("" + M.key) + "/"
              ) : "") + G
            )), r.push(M));
          return 1;
        }
        var J, ee, oe = 0, fe = s === "" ? fr : s + jr;
        if (Ue(e))
          for (var Rr = 0; Rr < e.length; Rr++)
            J = e[Rr], ee = fe + Ne(J, Rr), oe += Pe(J, r, i, ee, d);
        else {
          var qr = D(e);
          if (typeof qr == "function") {
            var wt = e;
            qr === wt.entries && (qe || de("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qe = !0);
            for (var cn = qr.call(wt), _t, fn = 0; !(_t = cn.next()).done; )
              J = _t.value, ee = fe + Ne(J, fn++), oe += Pe(J, r, i, ee, d);
          } else if (R === "object") {
            var Et = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Et === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Et) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return oe;
      }
      function Le(e, r, i) {
        if (e == null)
          return e;
        var s = [], d = 0;
        return Pe(e, s, "", "", function(R) {
          return r.call(i, R, d++);
        }), s;
      }
      function $r(e) {
        var r = 0;
        return Le(e, function() {
          r++;
        }), r;
      }
      function pr(e, r, i) {
        Le(e, function() {
          r.apply(this, arguments);
        }, i);
      }
      function Mr(e) {
        return Le(e, function(r) {
          return r;
        }) || [];
      }
      function vr(e) {
        if (!Oe(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function mr(e) {
        var r = {
          $$typeof: E,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: w,
          _context: r
        };
        var i = !1, s = !1, d = !1;
        {
          var R = {
            $$typeof: E,
            _context: r
          };
          Object.defineProperties(R, {
            Provider: {
              get: function() {
                return s || (s = !0, _("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(h) {
                r.Provider = h;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(h) {
                r._currentValue = h;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(h) {
                r._currentValue2 = h;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(h) {
                r._threadCount = h;
              }
            },
            Consumer: {
              get: function() {
                return i || (i = !0, _("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(h) {
                d || (de("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", h), d = !0);
              }
            }
          }), r.Consumer = R;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Ve = -1, Xe = 0, Qe = 1, Fr = 2;
      function Dr(e) {
        if (e._status === Ve) {
          var r = e._result, i = r();
          if (i.then(function(R) {
            if (e._status === Xe || e._status === Ve) {
              var h = e;
              h._status = Qe, h._result = R;
            }
          }, function(R) {
            if (e._status === Xe || e._status === Ve) {
              var h = e;
              h._status = Fr, h._result = R;
            }
          }), e._status === Ve) {
            var s = e;
            s._status = Xe, s._result = i;
          }
        }
        if (e._status === Qe) {
          var d = e._result;
          return d === void 0 && _(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, d), "default" in d || _(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, d), d.default;
        } else
          throw e._result;
      }
      function Nr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Ve,
          _result: e
        }, i = {
          $$typeof: H,
          _payload: r,
          _init: Dr
        };
        {
          var s, d;
          Object.defineProperties(i, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return s;
              },
              set: function(R) {
                _("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), s = R, Object.defineProperty(i, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return d;
              },
              set: function(R) {
                _("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), d = R, Object.defineProperty(i, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return i;
      }
      function Lr(e) {
        e != null && e.$$typeof === L ? _("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? _("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && _("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && _("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: C,
          render: e
        };
        {
          var i;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return i;
            },
            set: function(s) {
              i = s, !e.name && !e.displayName && (e.displayName = s);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function c(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === b || e === m || ie || e === v || e === S || e === A || le || e === X || _e || xe || N || typeof e == "object" && e !== null && (e.$$typeof === H || e.$$typeof === L || e.$$typeof === w || e.$$typeof === E || e.$$typeof === C || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function p(e, r) {
        c(e) || _("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var i = {
          $$typeof: L,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var s;
          Object.defineProperty(i, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return s;
            },
            set: function(d) {
              s = d, !e.name && !e.displayName && (e.displayName = d);
            }
          });
        }
        return i;
      }
      function y() {
        var e = he.current;
        return e === null && _(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function F(e) {
        var r = y();
        if (e._context !== void 0) {
          var i = e._context;
          i.Consumer === e ? _("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : i.Provider === e && _("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function W(e) {
        var r = y();
        return r.useState(e);
      }
      function I(e, r, i) {
        var s = y();
        return s.useReducer(e, r, i);
      }
      function O(e) {
        var r = y();
        return r.useRef(e);
      }
      function ce(e, r) {
        var i = y();
        return i.useEffect(e, r);
      }
      function Z(e, r) {
        var i = y();
        return i.useInsertionEffect(e, r);
      }
      function re(e, r) {
        var i = y();
        return i.useLayoutEffect(e, r);
      }
      function me(e, r) {
        var i = y();
        return i.useCallback(e, r);
      }
      function Ae(e, r) {
        var i = y();
        return i.useMemo(e, r);
      }
      function br(e, r, i) {
        var s = y();
        return s.useImperativeHandle(e, r, i);
      }
      function Ee(e, r) {
        {
          var i = y();
          return i.useDebugValue(e, r);
        }
      }
      function Vt() {
        var e = y();
        return e.useTransition();
      }
      function Wt(e) {
        var r = y();
        return r.useDeferredValue(e);
      }
      function zt() {
        var e = y();
        return e.useId();
      }
      function Ut(e, r, i) {
        var s = y();
        return s.useSyncExternalStore(e, r, i);
      }
      var Ze = 0, et, rt, tt, nt, ot, at, it;
      function st() {
      }
      st.__reactDisabledLog = !0;
      function Gt() {
        {
          if (Ze === 0) {
            et = console.log, rt = console.info, tt = console.warn, nt = console.error, ot = console.group, at = console.groupCollapsed, it = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: st,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Ze++;
        }
      }
      function Yt() {
        {
          if (Ze--, Ze === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: x({}, e, {
                value: et
              }),
              info: x({}, e, {
                value: rt
              }),
              warn: x({}, e, {
                value: tt
              }),
              error: x({}, e, {
                value: nt
              }),
              group: x({}, e, {
                value: ot
              }),
              groupCollapsed: x({}, e, {
                value: at
              }),
              groupEnd: x({}, e, {
                value: it
              })
            });
          }
          Ze < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Vr = ne.ReactCurrentDispatcher, Wr;
      function gr(e, r, i) {
        {
          if (Wr === void 0)
            try {
              throw Error();
            } catch (d) {
              var s = d.stack.trim().match(/\n( *(at )?)/);
              Wr = s && s[1] || "";
            }
          return `
` + Wr + e;
        }
      }
      var zr = !1, yr;
      {
        var Bt = typeof WeakMap == "function" ? WeakMap : Map;
        yr = new Bt();
      }
      function ut(e, r) {
        if (!e || zr)
          return "";
        {
          var i = yr.get(e);
          if (i !== void 0)
            return i;
        }
        var s;
        zr = !0;
        var d = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var R;
        R = Vr.current, Vr.current = null, Gt();
        try {
          if (r) {
            var h = function() {
              throw Error();
            };
            if (Object.defineProperty(h.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(h, []);
              } catch (fe) {
                s = fe;
              }
              Reflect.construct(e, [], h);
            } else {
              try {
                h.call();
              } catch (fe) {
                s = fe;
              }
              e.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (fe) {
              s = fe;
            }
            e();
          }
        } catch (fe) {
          if (fe && s && typeof fe.stack == "string") {
            for (var k = fe.stack.split(`
`), M = s.stack.split(`
`), G = k.length - 1, K = M.length - 1; G >= 1 && K >= 0 && k[G] !== M[K]; )
              K--;
            for (; G >= 1 && K >= 0; G--, K--)
              if (k[G] !== M[K]) {
                if (G !== 1 || K !== 1)
                  do
                    if (G--, K--, K < 0 || k[G] !== M[K]) {
                      var J = `
` + k[G].replace(" at new ", " at ");
                      return e.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", e.displayName)), typeof e == "function" && yr.set(e, J), J;
                    }
                  while (G >= 1 && K >= 0);
                break;
              }
          }
        } finally {
          zr = !1, Vr.current = R, Yt(), Error.prepareStackTrace = d;
        }
        var ee = e ? e.displayName || e.name : "", oe = ee ? gr(ee) : "";
        return typeof e == "function" && yr.set(e, oe), oe;
      }
      function qt(e, r, i) {
        return ut(e, !1);
      }
      function Ht(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function hr(e, r, i) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return ut(e, Ht(e));
        if (typeof e == "string")
          return gr(e);
        switch (e) {
          case S:
            return gr("Suspense");
          case A:
            return gr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case C:
              return qt(e.render);
            case L:
              return hr(e.type, r, i);
            case H: {
              var s = e, d = s._payload, R = s._init;
              try {
                return hr(R(d), r, i);
              } catch {
              }
            }
          }
        return "";
      }
      var lt = {}, ct = ne.ReactDebugCurrentFrame;
      function wr(e) {
        if (e) {
          var r = e._owner, i = hr(e.type, e._source, r ? r.type : null);
          ct.setExtraStackFrame(i);
        } else
          ct.setExtraStackFrame(null);
      }
      function Kt(e, r, i, s, d) {
        {
          var R = Function.call.bind(Fe);
          for (var h in e)
            if (R(e, h)) {
              var k = void 0;
              try {
                if (typeof e[h] != "function") {
                  var M = Error((s || "React class") + ": " + i + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw M.name = "Invariant Violation", M;
                }
                k = e[h](r, h, s, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (G) {
                k = G;
              }
              k && !(k instanceof Error) && (wr(d), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", i, h, typeof k), wr(null)), k instanceof Error && !(k.message in lt) && (lt[k.message] = !0, wr(d), _("Failed %s type: %s", i, k.message), wr(null));
            }
        }
      }
      function He(e) {
        if (e) {
          var r = e._owner, i = hr(e.type, e._source, r ? r.type : null);
          we(i);
        } else
          we(null);
      }
      var Ur;
      Ur = !1;
      function ft() {
        if (ue.current) {
          var e = Ce(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Jt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + r + ":" + i + ".";
        }
        return "";
      }
      function Xt(e) {
        return e != null ? Jt(e.__source) : "";
      }
      var dt = {};
      function Qt(e) {
        var r = ft();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
      function pt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var i = Qt(r);
          if (!dt[i]) {
            dt[i] = !0;
            var s = "";
            e && e._owner && e._owner !== ue.current && (s = " It was passed a child from " + Ce(e._owner.type) + "."), He(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, s), He(null);
          }
        }
      }
      function vt(e, r) {
        if (typeof e == "object") {
          if (Ue(e))
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              Oe(s) && pt(s, r);
            }
          else if (Oe(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var d = D(e);
            if (typeof d == "function" && d !== e.entries)
              for (var R = d.call(e), h; !(h = R.next()).done; )
                Oe(h.value) && pt(h.value, r);
          }
        }
      }
      function mt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var i;
          if (typeof r == "function")
            i = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === C || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === L))
            i = r.propTypes;
          else
            return;
          if (i) {
            var s = Ce(r);
            Kt(i, e.props, "prop", s, e);
          } else if (r.PropTypes !== void 0 && !Ur) {
            Ur = !0;
            var d = Ce(r);
            _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Zt(e) {
        {
          for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
            var s = r[i];
            if (s !== "children" && s !== "key") {
              He(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), He(null);
              break;
            }
          }
          e.ref !== null && (He(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), He(null));
        }
      }
      function bt(e, r, i) {
        var s = c(e);
        if (!s) {
          var d = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = Xt(r);
          R ? d += R : d += ft();
          var h;
          e === null ? h = "null" : Ue(e) ? h = "array" : e !== void 0 && e.$$typeof === l ? (h = "<" + (Ce(e.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, _("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, d);
        }
        var k = Or.apply(this, arguments);
        if (k == null)
          return k;
        if (s)
          for (var M = 2; M < arguments.length; M++)
            vt(arguments[M], e);
        return e === b ? Zt(k) : mt(k), k;
      }
      var gt = !1;
      function en(e) {
        var r = bt.bind(null, e);
        return r.type = e, gt || (gt = !0, de("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return de("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function rn(e, r, i) {
        for (var s = Ar.apply(this, arguments), d = 2; d < arguments.length; d++)
          vt(arguments[d], s.type);
        return mt(s), s;
      }
      function tn(e, r) {
        var i = pe.transition;
        pe.transition = {};
        var s = pe.transition;
        pe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (pe.transition = i, i === null && s._updatedFibers) {
            var d = s._updatedFibers.size;
            d > 10 && de("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
          }
        }
      }
      var yt = !1, _r = null;
      function nn(e) {
        if (_r === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), i = n && n[r];
            _r = i.call(n, "timers").setImmediate;
          } catch {
            _r = function(d) {
              yt === !1 && (yt = !0, typeof MessageChannel > "u" && _("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var R = new MessageChannel();
              R.port1.onmessage = d, R.port2.postMessage(void 0);
            };
          }
        return _r(e);
      }
      var Ke = 0, ht = !1;
      function on(e) {
        {
          var r = Ke;
          Ke++, Q.current === null && (Q.current = []);
          var i = Q.isBatchingLegacy, s;
          try {
            if (Q.isBatchingLegacy = !0, s = e(), !i && Q.didScheduleLegacyUpdate) {
              var d = Q.current;
              d !== null && (Q.didScheduleLegacyUpdate = !1, Br(d));
            }
          } catch (ee) {
            throw Er(r), ee;
          } finally {
            Q.isBatchingLegacy = i;
          }
          if (s !== null && typeof s == "object" && typeof s.then == "function") {
            var R = s, h = !1, k = {
              then: function(ee, oe) {
                h = !0, R.then(function(fe) {
                  Er(r), Ke === 0 ? Gr(fe, ee, oe) : ee(fe);
                }, function(fe) {
                  Er(r), oe(fe);
                });
              }
            };
            return !ht && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              h || (ht = !0, _("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), k;
          } else {
            var M = s;
            if (Er(r), Ke === 0) {
              var G = Q.current;
              G !== null && (Br(G), Q.current = null);
              var K = {
                then: function(ee, oe) {
                  Q.current === null ? (Q.current = [], Gr(M, ee, oe)) : ee(M);
                }
              };
              return K;
            } else {
              var J = {
                then: function(ee, oe) {
                  ee(M);
                }
              };
              return J;
            }
          }
        }
      }
      function Er(e) {
        e !== Ke - 1 && _("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ke = e;
      }
      function Gr(e, r, i) {
        {
          var s = Q.current;
          if (s !== null)
            try {
              Br(s), nn(function() {
                s.length === 0 ? (Q.current = null, r(e)) : Gr(e, r, i);
              });
            } catch (d) {
              i(d);
            }
          else
            r(e);
        }
      }
      var Yr = !1;
      function Br(e) {
        if (!Yr) {
          Yr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var i = e[r];
              do
                i = i(!0);
              while (i !== null);
            }
            e.length = 0;
          } catch (s) {
            throw e = e.slice(r + 1), s;
          } finally {
            Yr = !1;
          }
        }
      }
      var an = bt, sn = rn, un = en, ln = {
        map: Le,
        forEach: pr,
        count: $r,
        toArray: Mr,
        only: vr
      };
      a.Children = ln, a.Component = j, a.Fragment = b, a.Profiler = m, a.PureComponent = se, a.StrictMode = v, a.Suspense = S, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, a.cloneElement = sn, a.createContext = mr, a.createElement = an, a.createFactory = un, a.createRef = Sr, a.forwardRef = Lr, a.isValidElement = Oe, a.lazy = Nr, a.memo = p, a.startTransition = tn, a.unstable_act = on, a.useCallback = me, a.useContext = F, a.useDebugValue = Ee, a.useDeferredValue = Wt, a.useEffect = ce, a.useId = zt, a.useImperativeHandle = br, a.useInsertionEffect = Z, a.useLayoutEffect = re, a.useMemo = Ae, a.useReducer = I, a.useRef = O, a.useState = W, a.useSyncExternalStore = Ut, a.useTransition = Vt, a.version = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(or, or.exports)), or.exports;
}
process.env.NODE_ENV === "production" ? Kr.exports = pn() : Kr.exports = vn();
var ae = Kr.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function mn() {
  if (xt)
    return er;
  xt = 1;
  var n = ae, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, g = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(m, w, E) {
    var C, S = {}, A = null, L = null;
    E !== void 0 && (A = "" + E), w.key !== void 0 && (A = "" + w.key), w.ref !== void 0 && (L = w.ref);
    for (C in w)
      l.call(w, C) && !b.hasOwnProperty(C) && (S[C] = w[C]);
    if (m && m.defaultProps)
      for (C in w = m.defaultProps, w)
        S[C] === void 0 && (S[C] = w[C]);
    return { $$typeof: a, type: m, key: A, ref: L, props: S, _owner: g.current };
  }
  return er.Fragment = u, er.jsx = v, er.jsxs = v, er;
}
var rr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function bn() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ae, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), m = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), H = Symbol.iterator, X = "@@iterator";
    function U(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = H && t[H] || t[X];
      return typeof c == "function" ? c : null;
    }
    var te = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(t) {
      {
        for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), y = 1; y < c; y++)
          p[y - 1] = arguments[y];
        he("error", t, p);
      }
    }
    function he(t, c, p) {
      {
        var y = te.ReactDebugCurrentFrame, F = y.getStackAddendum();
        F !== "" && (c += "%s", p = p.concat([F]));
        var W = p.map(function(I) {
          return String(I);
        });
        W.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, W);
      }
    }
    var pe = !1, Q = !1, ue = !1, be = !1, ye = !1, we;
    we = Symbol.for("react.module.reference");
    function _e(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === l || t === b || ye || t === g || t === E || t === C || be || t === L || pe || Q || ue || typeof t == "object" && t !== null && (t.$$typeof === A || t.$$typeof === S || t.$$typeof === v || t.$$typeof === m || t.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === we || t.getModuleId !== void 0));
    }
    function xe(t, c, p) {
      var y = t.displayName;
      if (y)
        return y;
      var F = c.displayName || c.name || "";
      return F !== "" ? p + "(" + F + ")" : p;
    }
    function N(t) {
      return t.displayName || "Context";
    }
    function le(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case l:
          return "Fragment";
        case u:
          return "Portal";
        case b:
          return "Profiler";
        case g:
          return "StrictMode";
        case E:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case m:
            var c = t;
            return N(c) + ".Consumer";
          case v:
            var p = t;
            return N(p._context) + ".Provider";
          case w:
            return xe(t, t.render, "ForwardRef");
          case S:
            var y = t.displayName || null;
            return y !== null ? y : le(t.type) || "Memo";
          case A: {
            var F = t, W = F._payload, I = F._init;
            try {
              return le(I(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ie = Object.assign, ne = 0, de, _, ve, ge, o, f, x;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function j() {
      {
        if (ne === 0) {
          de = console.log, _ = console.info, ve = console.warn, ge = console.error, o = console.group, f = console.groupCollapsed, x = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: T,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        ne++;
      }
    }
    function Y() {
      {
        if (ne--, ne === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ie({}, t, {
              value: de
            }),
            info: ie({}, t, {
              value: _
            }),
            warn: ie({}, t, {
              value: ve
            }),
            error: ie({}, t, {
              value: ge
            }),
            group: ie({}, t, {
              value: o
            }),
            groupCollapsed: ie({}, t, {
              value: f
            }),
            groupEnd: ie({}, t, {
              value: x
            })
          });
        }
        ne < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = te.ReactCurrentDispatcher, z;
    function V(t, c, p) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (F) {
            var y = F.stack.trim().match(/\n( *(at )?)/);
            z = y && y[1] || "";
          }
        return `
` + z + t;
      }
    }
    var se = !1, Te;
    {
      var Sr = typeof WeakMap == "function" ? WeakMap : Map;
      Te = new Sr();
    }
    function ar(t, c) {
      if (!t || se)
        return "";
      {
        var p = Te.get(t);
        if (p !== void 0)
          return p;
      }
      var y;
      se = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = B.current, B.current = null, j();
      try {
        if (c) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (Ee) {
              y = Ee;
            }
            Reflect.construct(t, [], I);
          } else {
            try {
              I.call();
            } catch (Ee) {
              y = Ee;
            }
            t.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ee) {
            y = Ee;
          }
          t();
        }
      } catch (Ee) {
        if (Ee && y && typeof Ee.stack == "string") {
          for (var O = Ee.stack.split(`
`), ce = y.stack.split(`
`), Z = O.length - 1, re = ce.length - 1; Z >= 1 && re >= 0 && O[Z] !== ce[re]; )
            re--;
          for (; Z >= 1 && re >= 0; Z--, re--)
            if (O[Z] !== ce[re]) {
              if (Z !== 1 || re !== 1)
                do
                  if (Z--, re--, re < 0 || O[Z] !== ce[re]) {
                    var me = `
` + O[Z].replace(" at new ", " at ");
                    return t.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", t.displayName)), typeof t == "function" && Te.set(t, me), me;
                  }
                while (Z >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        se = !1, B.current = W, Y(), Error.prepareStackTrace = F;
      }
      var Ae = t ? t.displayName || t.name : "", br = Ae ? V(Ae) : "";
      return typeof t == "function" && Te.set(t, br), br;
    }
    function Ue(t, c, p) {
      return ar(t, !1);
    }
    function Tr(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function Ge(t, c, p) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ar(t, Tr(t));
      if (typeof t == "string")
        return V(t);
      switch (t) {
        case E:
          return V("Suspense");
        case C:
          return V("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case w:
            return Ue(t.render);
          case S:
            return Ge(t.type, c, p);
          case A: {
            var y = t, F = y._payload, W = y._init;
            try {
              return Ge(W(F), c, p);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, $e = {}, ir = te.ReactDebugCurrentFrame;
    function Me(t) {
      if (t) {
        var c = t._owner, p = Ge(t.type, t._source, c ? c.type : null);
        ir.setExtraStackFrame(p);
      } else
        ir.setExtraStackFrame(null);
    }
    function Ce(t, c, p, y, F) {
      {
        var W = Function.call.bind(Ie);
        for (var I in t)
          if (W(t, I)) {
            var O = void 0;
            try {
              if (typeof t[I] != "function") {
                var ce = Error((y || "React class") + ": " + p + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              O = t[I](c, I, y, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              O = Z;
            }
            O && !(O instanceof Error) && (Me(F), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", p, I, typeof O), Me(null)), O instanceof Error && !(O.message in $e) && ($e[O.message] = !0, Me(F), D("Failed %s type: %s", p, O.message), Me(null));
          }
      }
    }
    var Fe = Array.isArray;
    function Ye(t) {
      return Fe(t);
    }
    function sr(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, p = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return p;
      }
    }
    function ur(t) {
      try {
        return Be(t), !1;
      } catch {
        return !0;
      }
    }
    function Be(t) {
      return "" + t;
    }
    function Je(t) {
      if (ur(t))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(t)), Be(t);
    }
    var ke = te.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lr, cr, De;
    De = {};
    function Or(t) {
      if (Ie.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Pr(t) {
      if (Ie.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Ar(t, c) {
      if (typeof t.ref == "string" && ke.current && c && ke.current.stateNode !== c) {
        var p = le(ke.current.type);
        De[p] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', le(ke.current.type), t.ref), De[p] = !0);
      }
    }
    function Oe(t, c) {
      {
        var p = function() {
          lr || (lr = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function fr(t, c) {
      {
        var p = function() {
          cr || (cr = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var jr = function(t, c, p, y, F, W, I) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: p,
        props: I,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function Ir(t, c, p, y, F) {
      {
        var W, I = {}, O = null, ce = null;
        p !== void 0 && (Je(p), O = "" + p), Pr(c) && (Je(c.key), O = "" + c.key), Or(c) && (ce = c.ref, Ar(c, F));
        for (W in c)
          Ie.call(c, W) && !kr.hasOwnProperty(W) && (I[W] = c[W]);
        if (t && t.defaultProps) {
          var Z = t.defaultProps;
          for (W in Z)
            I[W] === void 0 && (I[W] = Z[W]);
        }
        if (O || ce) {
          var re = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          O && Oe(I, re), ce && fr(I, re);
        }
        return jr(t, O, ce, F, y, ke.current, I);
      }
    }
    var qe = te.ReactCurrentOwner, dr = te.ReactDebugCurrentFrame;
    function Se(t) {
      if (t) {
        var c = t._owner, p = Ge(t.type, t._source, c ? c.type : null);
        dr.setExtraStackFrame(p);
      } else
        dr.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function Pe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function Le() {
      {
        if (qe.current) {
          var t = le(qe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function $r(t) {
      {
        if (t !== void 0) {
          var c = t.fileName.replace(/^.*[\\\/]/, ""), p = t.lineNumber;
          return `

Check your code at ` + c + ":" + p + ".";
        }
        return "";
      }
    }
    var pr = {};
    function Mr(t) {
      {
        var c = Le();
        if (!c) {
          var p = typeof t == "string" ? t : t.displayName || t.name;
          p && (c = `

Check the top-level render call using <` + p + ">.");
        }
        return c;
      }
    }
    function vr(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var p = Mr(c);
        if (pr[p])
          return;
        pr[p] = !0;
        var y = "";
        t && t._owner && t._owner !== qe.current && (y = " It was passed a child from " + le(t._owner.type) + "."), Se(t), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, y), Se(null);
      }
    }
    function mr(t, c) {
      {
        if (typeof t != "object")
          return;
        if (Ye(t))
          for (var p = 0; p < t.length; p++) {
            var y = t[p];
            Pe(y) && vr(y, c);
          }
        else if (Pe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var F = U(t);
          if (typeof F == "function" && F !== t.entries)
            for (var W = F.call(t), I; !(I = W.next()).done; )
              Pe(I.value) && vr(I.value, c);
        }
      }
    }
    function Ve(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var p;
        if (typeof c == "function")
          p = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === S))
          p = c.propTypes;
        else
          return;
        if (p) {
          var y = le(c);
          Ce(p, t.props, "prop", y, t);
        } else if (c.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var F = le(c);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xe(t) {
      {
        for (var c = Object.keys(t.props), p = 0; p < c.length; p++) {
          var y = c[p];
          if (y !== "children" && y !== "key") {
            Se(t), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), Se(null);
            break;
          }
        }
        t.ref !== null && (Se(t), D("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    function Qe(t, c, p, y, F, W) {
      {
        var I = _e(t);
        if (!I) {
          var O = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = $r(F);
          ce ? O += ce : O += Le();
          var Z;
          t === null ? Z = "null" : Ye(t) ? Z = "array" : t !== void 0 && t.$$typeof === a ? (Z = "<" + (le(t.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof t, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, O);
        }
        var re = Ir(t, c, p, F, W);
        if (re == null)
          return re;
        if (I) {
          var me = c.children;
          if (me !== void 0)
            if (y)
              if (Ye(me)) {
                for (var Ae = 0; Ae < me.length; Ae++)
                  mr(me[Ae], t);
                Object.freeze && Object.freeze(me);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mr(me, t);
        }
        return t === l ? Xe(re) : Ve(re), re;
      }
    }
    function Fr(t, c, p) {
      return Qe(t, c, p, !0);
    }
    function Dr(t, c, p) {
      return Qe(t, c, p, !1);
    }
    var Nr = Dr, Lr = Fr;
    rr.Fragment = l, rr.jsx = Nr, rr.jsxs = Lr;
  }()), rr;
}
process.env.NODE_ENV === "production" ? Hr.exports = mn() : Hr.exports = bn();
var gn = Hr.exports;
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var u = arguments[a];
      for (var l in u)
        Object.prototype.hasOwnProperty.call(u, l) && (n[l] = u[l]);
    }
    return n;
  }, xr.apply(this, arguments);
}
function yn(n, a) {
  typeof n == "function" ? n(a) : n != null && (n.current = a);
}
function hn(...n) {
  return (a) => n.forEach(
    (u) => yn(u, a)
  );
}
const jt = /* @__PURE__ */ ae.forwardRef((n, a) => {
  const { children: u, ...l } = n, g = ae.Children.toArray(u), b = g.find(_n);
  if (b) {
    const v = b.props.children, m = g.map((w) => w === b ? ae.Children.count(v) > 1 ? ae.Children.only(null) : /* @__PURE__ */ ae.isValidElement(v) ? v.props.children : null : w);
    return /* @__PURE__ */ ae.createElement(Jr, xr({}, l, {
      ref: a
    }), /* @__PURE__ */ ae.isValidElement(v) ? /* @__PURE__ */ ae.cloneElement(v, void 0, m) : null);
  }
  return /* @__PURE__ */ ae.createElement(Jr, xr({}, l, {
    ref: a
  }), u);
});
jt.displayName = "Slot";
const Jr = /* @__PURE__ */ ae.forwardRef((n, a) => {
  const { children: u, ...l } = n;
  return /* @__PURE__ */ ae.isValidElement(u) ? /* @__PURE__ */ ae.cloneElement(u, {
    ...En(l, u.props),
    ref: a ? hn(a, u.ref) : u.ref
  }) : ae.Children.count(u) > 1 ? ae.Children.only(null) : null;
});
Jr.displayName = "SlotClone";
const wn = ({ children: n }) => /* @__PURE__ */ ae.createElement(ae.Fragment, null, n);
function _n(n) {
  return /* @__PURE__ */ ae.isValidElement(n) && n.type === wn;
}
function En(n, a) {
  const u = {
    ...a
  };
  for (const l in a) {
    const g = n[l], b = a[l];
    /^on[A-Z]/.test(l) ? g && b ? u[l] = (...m) => {
      b(...m), g(...m);
    } : g && (u[l] = g) : l === "style" ? u[l] = {
      ...g,
      ...b
    } : l === "className" && (u[l] = [
      g,
      b
    ].filter(Boolean).join(" "));
  }
  return {
    ...n,
    ...u
  };
}
function It(n) {
  var a, u, l = "";
  if (typeof n == "string" || typeof n == "number")
    l += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (a = 0; a < n.length; a++)
        n[a] && (u = It(n[a])) && (l && (l += " "), l += u);
    else
      for (a in n)
        n[a] && (l && (l += " "), l += a);
  return l;
}
function $t() {
  for (var n, a, u = 0, l = ""; u < arguments.length; )
    (n = arguments[u++]) && (a = It(n)) && (l && (l += " "), l += a);
  return l;
}
const Tt = (n) => typeof n == "boolean" ? "".concat(n) : n === 0 ? "0" : n, kt = $t, Rn = (n, a) => (u) => {
  var l;
  if ((a == null ? void 0 : a.variants) == null)
    return kt(n, u == null ? void 0 : u.class, u == null ? void 0 : u.className);
  const { variants: g, defaultVariants: b } = a, v = Object.keys(g).map((E) => {
    const C = u == null ? void 0 : u[E], S = b == null ? void 0 : b[E];
    if (C === null)
      return null;
    const A = Tt(C) || Tt(S);
    return g[E][A];
  }), m = u && Object.entries(u).reduce((E, C) => {
    let [S, A] = C;
    return A === void 0 || (E[S] = A), E;
  }, {}), w = a == null || (l = a.compoundVariants) === null || l === void 0 ? void 0 : l.reduce((E, C) => {
    let { class: S, className: A, ...L } = C;
    return Object.entries(L).every((H) => {
      let [X, U] = H;
      return Array.isArray(U) ? U.includes({
        ...b,
        ...m
      }[X]) : {
        ...b,
        ...m
      }[X] === U;
    }) ? [
      ...E,
      S,
      A
    ] : E;
  }, []);
  return kt(n, v, w, u == null ? void 0 : u.class, u == null ? void 0 : u.className);
};
function Cn() {
  for (var n = 0, a, u, l = ""; n < arguments.length; )
    (a = arguments[n++]) && (u = Mt(a)) && (l && (l += " "), l += u);
  return l;
}
function Mt(n) {
  if (typeof n == "string")
    return n;
  for (var a, u = "", l = 0; l < n.length; l++)
    n[l] && (a = Mt(n[l])) && (u && (u += " "), u += a);
  return u;
}
var Zr = "-";
function xn(n) {
  var a = Tn(n), u = n.conflictingClassGroups, l = n.conflictingClassGroupModifiers, g = l === void 0 ? {} : l;
  function b(m) {
    var w = m.split(Zr);
    return w[0] === "" && w.length !== 1 && w.shift(), Ft(w, a) || Sn(m);
  }
  function v(m, w) {
    var E = u[m] || [];
    return w && g[m] ? [].concat(E, g[m]) : E;
  }
  return {
    getClassGroupId: b,
    getConflictingClassGroupIds: v
  };
}
function Ft(n, a) {
  var v;
  if (n.length === 0)
    return a.classGroupId;
  var u = n[0], l = a.nextPart.get(u), g = l ? Ft(n.slice(1), l) : void 0;
  if (g)
    return g;
  if (a.validators.length !== 0) {
    var b = n.join(Zr);
    return (v = a.validators.find(function(m) {
      var w = m.validator;
      return w(b);
    })) == null ? void 0 : v.classGroupId;
  }
}
var Ot = /^\[(.+)\]$/;
function Sn(n) {
  if (Ot.test(n)) {
    var a = Ot.exec(n)[1], u = a == null ? void 0 : a.substring(0, a.indexOf(":"));
    if (u)
      return "arbitrary.." + u;
  }
}
function Tn(n) {
  var a = n.theme, u = n.prefix, l = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, g = On(Object.entries(n.classGroups), u);
  return g.forEach(function(b) {
    var v = b[0], m = b[1];
    Xr(m, l, v, a);
  }), l;
}
function Xr(n, a, u, l) {
  n.forEach(function(g) {
    if (typeof g == "string") {
      var b = g === "" ? a : Pt(a, g);
      b.classGroupId = u;
      return;
    }
    if (typeof g == "function") {
      if (kn(g)) {
        Xr(g(l), a, u, l);
        return;
      }
      a.validators.push({
        validator: g,
        classGroupId: u
      });
      return;
    }
    Object.entries(g).forEach(function(v) {
      var m = v[0], w = v[1];
      Xr(w, Pt(a, m), u, l);
    });
  });
}
function Pt(n, a) {
  var u = n;
  return a.split(Zr).forEach(function(l) {
    u.nextPart.has(l) || u.nextPart.set(l, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), u = u.nextPart.get(l);
  }), u;
}
function kn(n) {
  return n.isThemeGetter;
}
function On(n, a) {
  return a ? n.map(function(u) {
    var l = u[0], g = u[1], b = g.map(function(v) {
      return typeof v == "string" ? a + v : typeof v == "object" ? Object.fromEntries(Object.entries(v).map(function(m) {
        var w = m[0], E = m[1];
        return [a + w, E];
      })) : v;
    });
    return [l, b];
  }) : n;
}
function Pn(n) {
  if (n < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var a = 0, u = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  function g(b, v) {
    u.set(b, v), a++, a > n && (a = 0, l = u, u = /* @__PURE__ */ new Map());
  }
  return {
    get: function(v) {
      var m = u.get(v);
      if (m !== void 0)
        return m;
      if ((m = l.get(v)) !== void 0)
        return g(v, m), m;
    },
    set: function(v, m) {
      u.has(v) ? u.set(v, m) : g(v, m);
    }
  };
}
var Dt = "!";
function An(n) {
  var a = n.separator || ":", u = a.length === 1, l = a[0], g = a.length;
  return function(v) {
    for (var m = [], w = 0, E = 0, C, S = 0; S < v.length; S++) {
      var A = v[S];
      if (w === 0) {
        if (A === l && (u || v.slice(S, S + g) === a)) {
          m.push(v.slice(E, S)), E = S + g;
          continue;
        }
        if (A === "/") {
          C = S;
          continue;
        }
      }
      A === "[" ? w++ : A === "]" && w--;
    }
    var L = m.length === 0 ? v : v.substring(E), H = L.startsWith(Dt), X = H ? L.substring(1) : L, U = C && C > E ? C - E : void 0;
    return {
      modifiers: m,
      hasImportantModifier: H,
      baseClassName: X,
      maybePostfixModifierPosition: U
    };
  };
}
function jn(n) {
  if (n.length <= 1)
    return n;
  var a = [], u = [];
  return n.forEach(function(l) {
    var g = l[0] === "[";
    g ? (a.push.apply(a, u.sort().concat([l])), u = []) : u.push(l);
  }), a.push.apply(a, u.sort()), a;
}
function In(n) {
  return {
    cache: Pn(n.cacheSize),
    splitModifiers: An(n),
    ...xn(n)
  };
}
var $n = /\s+/;
function Mn(n, a) {
  var u = a.splitModifiers, l = a.getClassGroupId, g = a.getConflictingClassGroupIds, b = /* @__PURE__ */ new Set();
  return n.trim().split($n).map(function(v) {
    var m = u(v), w = m.modifiers, E = m.hasImportantModifier, C = m.baseClassName, S = m.maybePostfixModifierPosition, A = l(S ? C.substring(0, S) : C), L = !!S;
    if (!A) {
      if (!S)
        return {
          isTailwindClass: !1,
          originalClassName: v
        };
      if (A = l(C), !A)
        return {
          isTailwindClass: !1,
          originalClassName: v
        };
      L = !1;
    }
    var H = jn(w).join(":"), X = E ? H + Dt : H;
    return {
      isTailwindClass: !0,
      modifierId: X,
      classGroupId: A,
      originalClassName: v,
      hasPostfixModifier: L
    };
  }).reverse().filter(function(v) {
    if (!v.isTailwindClass)
      return !0;
    var m = v.modifierId, w = v.classGroupId, E = v.hasPostfixModifier, C = m + w;
    return b.has(C) ? !1 : (b.add(C), g(w, E).forEach(function(S) {
      return b.add(m + S);
    }), !0);
  }).reverse().map(function(v) {
    return v.originalClassName;
  }).join(" ");
}
function Fn() {
  for (var n = arguments.length, a = new Array(n), u = 0; u < n; u++)
    a[u] = arguments[u];
  var l, g, b, v = m;
  function m(E) {
    var C = a[0], S = a.slice(1), A = S.reduce(function(L, H) {
      return H(L);
    }, C());
    return l = In(A), g = l.cache.get, b = l.cache.set, v = w, w(E);
  }
  function w(E) {
    var C = g(E);
    if (C)
      return C;
    var S = Mn(E, l);
    return b(E, S), S;
  }
  return function() {
    return v(Cn.apply(null, arguments));
  };
}
function q(n) {
  var a = function(l) {
    return l[n] || [];
  };
  return a.isThemeGetter = !0, a;
}
var Nt = /^\[(?:([a-z-]+):)?(.+)\]$/i, Dn = /^\d+\/\d+$/, Nn = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ln = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Vn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Wn = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Re(n) {
  return We(n) || Nn.has(n) || Dn.test(n) || Qr(n);
}
function Qr(n) {
  return ze(n, "length", qn);
}
function zn(n) {
  return ze(n, "size", Lt);
}
function Un(n) {
  return ze(n, "position", Lt);
}
function Gn(n) {
  return ze(n, "url", Hn);
}
function Cr(n) {
  return ze(n, "number", We);
}
function We(n) {
  return !Number.isNaN(Number(n));
}
function Yn(n) {
  return n.endsWith("%") && We(n.slice(0, -1));
}
function tr(n) {
  return At(n) || ze(n, "number", At);
}
function $(n) {
  return Nt.test(n);
}
function nr() {
  return !0;
}
function je(n) {
  return Ln.test(n);
}
function Bn(n) {
  return ze(n, "", Kn);
}
function ze(n, a, u) {
  var l = Nt.exec(n);
  return l ? l[1] ? l[1] === a : u(l[2]) : !1;
}
function qn(n) {
  return Vn.test(n);
}
function Lt() {
  return !1;
}
function Hn(n) {
  return n.startsWith("url(");
}
function At(n) {
  return Number.isInteger(Number(n));
}
function Kn(n) {
  return Wn.test(n);
}
function Jn() {
  var n = q("colors"), a = q("spacing"), u = q("blur"), l = q("brightness"), g = q("borderColor"), b = q("borderRadius"), v = q("borderSpacing"), m = q("borderWidth"), w = q("contrast"), E = q("grayscale"), C = q("hueRotate"), S = q("invert"), A = q("gap"), L = q("gradientColorStops"), H = q("gradientColorStopPositions"), X = q("inset"), U = q("margin"), te = q("opacity"), D = q("padding"), he = q("saturate"), pe = q("scale"), Q = q("sepia"), ue = q("skew"), be = q("space"), ye = q("translate"), we = function() {
    return ["auto", "contain", "none"];
  }, _e = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, xe = function() {
    return ["auto", $, a];
  }, N = function() {
    return [$, a];
  }, le = function() {
    return ["", Re];
  }, ie = function() {
    return ["auto", We, $];
  }, ne = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, de = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, _ = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, ve = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, ge = function() {
    return ["", "0", $];
  }, o = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, f = function() {
    return [We, Cr];
  }, x = function() {
    return [We, $];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [nr],
      spacing: [Re],
      blur: ["none", "", je, $],
      brightness: f(),
      borderColor: [n],
      borderRadius: ["none", "", "full", je, $],
      borderSpacing: N(),
      borderWidth: le(),
      contrast: f(),
      grayscale: ge(),
      hueRotate: x(),
      invert: ge(),
      gap: N(),
      gradientColorStops: [n],
      gradientColorStopPositions: [Yn, Qr],
      inset: xe(),
      margin: xe(),
      opacity: f(),
      padding: N(),
      saturate: f(),
      scale: f(),
      sepia: ge(),
      skew: x(),
      space: N(),
      translate: N()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", $]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [je]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": o()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": o()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(ne(), [$])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: _e()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": _e()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": _e()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: we()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": we()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": we()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [X]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [X]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [X]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [X]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [X]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [X]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [X]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [X]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [X]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", tr]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: xe()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", $]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ge()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ge()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", tr]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [nr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", tr]
        }, $]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ie()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ie()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [nr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [tr]
        }, $]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ie()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ie()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", $]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", $]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [A]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [A]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [A]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(ve())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(ve(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(ve(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [D]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [D]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [D]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [D]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [D]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [D]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [D]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [D]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [D]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [U]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [U]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [U]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [U]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [U]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [U]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [U]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [U]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [U]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [be]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [be]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", $, a]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", $, Re]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [je]
        }, je, $]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [$, a, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", $, Re]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [$, a, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", je, Qr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Cr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [nr]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", $]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", We, Cr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", $, Re]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", $]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", $]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [n]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [te]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [n]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [te]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(de(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Re]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", $, Re]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [n]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", $]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", $]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [te]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(ne(), [Un])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", zn]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Gn]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [n]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [H]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [H]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [H]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [L]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [L]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [L]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [b]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [b]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [b]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [b]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [b]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [b]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [b]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [b]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [b]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [b]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [b]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [b]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [b]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [b]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [b]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [m]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [m]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [m]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [m]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [m]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [m]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [m]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [m]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [m]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [te]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(de(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [m]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [m]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [te]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: de()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [g]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [g]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [g]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [g]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [g]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [g]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [g]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [g]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(de())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$, Re]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Re]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [n]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: le()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [n]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [te]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Re]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [n]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", je, Bn]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [nr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [te]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": _()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": _()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [u]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [l]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [w]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", je, $]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [E]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [C]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [he]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Q]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [u]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [l]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [w]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [E]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [C]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [te]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [he]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Q]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [v]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [v]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [v]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", $]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: x()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", $]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: x()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", $]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [pe]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [pe]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [pe]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [tr, $]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ye]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ye]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ue]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ue]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", $]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", n]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", $]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [n]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", $]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [n, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Re, Cr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [n, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var Xn = /* @__PURE__ */ Fn(Jn);
function Qn(...n) {
  return Xn($t(n));
}
const Zn = Rn(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), eo = ae.forwardRef(
  ({ className: n, variant: a, size: u, asChild: l = !1, ...g }, b) => {
    const v = l ? jt : "button";
    return /* @__PURE__ */ gn.jsx(
      v,
      {
        className: Qn(Zn({ variant: a, size: u, className: n })),
        ref: b,
        ...g
      }
    );
  }
);
eo.displayName = "Button";
function ro() {
  return "shadcn";
}
export {
  eo as Button,
  ro as shadcn
};
