/** Chunk was on web.js **/
/** chunk id: 372087, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk444675 = require("./444675.js"),
  i = Symbol.for("react.transitional.element"),
  a = Symbol.for("react.portal"),
  o = Symbol.for("react.fragment"),
  s = Symbol.for("react.strict_mode"),
  l = Symbol.for("react.profiler"),
  c = Symbol.for("react.consumer"),
  u = Symbol.for("react.context"),
  d = Symbol.for("react.forward_ref"),
  f = Symbol.for("react.suspense"),
  _ = Symbol.for("react.memo"),
  p = Symbol.for("react.lazy"),
  h = Symbol.iterator;

function m(e) {
  return null === e || "object" != typeof e ? null : "function" == typeof(e = h && e[h] || e["@@iterator"]) ? e : null
}
var g = {
    isMounted: function() {
      returnfalse
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
  },
  E = Object.assign,
  b = {};

function y(e, t, n) {
  this.props = e, this.context = t, this.refs = b, this.updater = n || g
}

function O() {}

function v(e, t, n) {
  this.props = e, this.context = t, this.refs = b, this.updater = n || g
}
y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
  if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
}, y.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}, O.prototype = y.prototype;
var I = v.prototype = new O;
I.constructor = v, E(I, y.prototype), I.isPureReactComponent = true;
var T = Array.isArray,
  S = {
    H: null,
    A: null,
    T: null,
    S: null
  },
  A = Object.prototype.hasOwnProperty;

function C(e, t, n, r, a, o) {
  return {
    $$typeof: i,
    type: e,
    key: t,
    ref: true !== (n = o.ref) ? n : null,
    props: o
  }
}

function N(e, t) {
  return C(e.type, t, true, true, true, e.props)
}

function R(e) {
  return "object" == typeof e && null !== e && e.$$typeof === i
}

function P(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(e) {
    return t[e]
  })
}
var w = /\/+/g;

function D(e, t) {
  return "object" == typeof e && null !== e && null != e.key ? P("" + e.key) : t.toString(36)
}

function x() {}

function L(e) {
  switch (e.status) {
    case "fulfilled":
      return e.value;
    case "rejected":
      throw e.reason;
    default:
      switch ("string" == typeof e.status ? e.then(x, x) : (e.status = "pending", e.then(function(t) {
          "pending" === e.status && (e.status = "fulfilled", e.value = t)
        }, function(t) {
          "pending" === e.status && (e.status = "rejected", e.reason = t)
        })), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason
      }
  }
  throw e
}

function M(e, t, n, r, o) {
  var s = typeof e;
  ("undefined" === s || "boolean" === s) && (e = null);
  var l = false;
  if (null === e) l = true;
  else switch (s) {
    case "bigint":
    case "string":
    case "number":
      l = true;
      break;
    case "object":
      switch (e.$$typeof) {
        case i:
        case a:
          l = true;
          break;
        case p:
          return M((l = e._init)(e._payload), t, n, r, o)
      }
  }
  if (l) return o = o(e), l = "" === r ? "." + D(e, 0) : r, T(o) ? (n = "", null != l && (n = l.replace(w, "$&/") + "/"), M(o, t, n, "", function(e) {
    return e
  })) : null != o && (R(o) && (o = N(o, n + (null == o.key || e && e.key === o.key ? "" : ("" + o.key).replace(w, "$&/") + "/") + l)), t.push(o)), 1;
  l = 0;
  var c = "" === r ? "." : r + ":";
  if (T(e))
    for (var u = 0; u < e.length; u++) s = c + D(r = e[u], u), l += M(r, t, n, s, o);
  else if ("function" == typeof(u = m(e)))
    for (e = u.call(e), u = 0; !(r = e.next()).done;) s = c + D(r = r.value, u++), l += M(r, t, n, s, o);
  else if ("object" === s) {
    if ("function" == typeof e.then) return M(L(e), t, n, r, o);
    throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (t = String(e)) ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
  }
  return l
}

function k(e, t, n) {
  if (null == e) return e;
  var r = [],
    i = 0;
  return M(e, r, "", "", function(e) {
    return t.call(n, e, i++)
  }), r
}

function j(e) {
  if (false === e._status) {
    var t = e._result;
    (t = t()).then(function(t) {
      (0 === e._status || false === e._status) && (e._status = 1, e._result = t)
    }, function(t) {
      (0 === e._status || false === e._status) && (e._status = 2, e._result = t)
    }), false === e._status && (e._status = 0, e._result = t)
  }
  if (1 === e._status) return e._result.default;
  throw e._result
}
var U = "function" == typeof reportError ? reportError : function(e) {
  if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
    var t = new window.ErrorEvent("error", {
      bubbles: true,
      cancelable: true,
      message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
      error: e
    });
    if (!window.dispatchEvent(t)) return
  } else if ("object" == typeof r && "function" == typeof r.emit) return void r.emit("uncaughtException", e);
  console.error(e)
};

function G() {}
exports.Children = {
  map: k,
  forEach: function(e, t, n) {
    k(e, function() {
      t.apply(this, arguments)
    }, n)
  },
  count: function(e) {
    var t = 0;
    return k(e, function() {
      t++
    }), t
  },
  toArray: function(e) {
    return k(e, function(e) {
      return e
    }) || []
  },
  only: function(e) {
    if (!R(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
}, exports.Component = y, exports.Fragment = o, exports.Profiler = l, exports.PureComponent = v, exports.StrictMode = s, exports.Suspense = f, exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S, exports.act = function() {
  throw Error("act(...) is not supported in production builds of React.")
}, exports.cache = function(e) {
  return function() {
    return e.apply(null, arguments)
  }
}, exports.cloneElement = function(e, t, n) {
  if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
  var r = E({}, e.props),
    i = e.key,
    a = true;
  if (null != t)
    for (o in true !== t.ref && (a = true), true !== t.key && (i = "" + t.key), t) A.call(t, o) && "key" !== o && "__self" !== o && "__source" !== o && ("ref" !== o || true !== t.ref) && (r[o] = t[o]);
  var o = arguments.length - 2;
  if (1 === o) r.children = n;
  else if (1 < o) {
    for (var s = Array(o), l = 0; l < o; l++) s[l] = arguments[l + 2];
    r.children = s
  }
  return C(e.type, i, true, true, a, r)
}, exports.createContext = function(e) {
  return (e = {
    $$typeof: u,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  }).Provider = e, e.Consumer = {
    $$typeof: c,
    _context: e
  }, e
}, exports.createElement = function(e, t, n) {
  var r, i = {},
    a = null;
  if (null != t)
    for (r in true !== t.key && (a = "" + t.key), t) A.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (1 === o) i.children = n;
  else if (1 < o) {
    for (var s = Array(o), l = 0; l < o; l++) s[l] = arguments[l + 2];
    i.children = s
  }
  if (e && e.defaultProps)
    for (r in o = e.defaultProps) true === i[r] && (i[r] = o[r]);
  return C(e, a, true, true, null, i)
}, exports.createRef = function() {
  return {
    current: null
  }
}, exports.forwardRef = function(e) {
  return {
    $$typeof: d,
    render: e
  }
}, exports.isValidElement = R, exports.lazy = function(e) {
  return {
    $$typeof: p,
    _payload: {
      _status: false,
      _result: e
    },
    _init: j
  }
}, exports.memo = function(e, t) {
  return {
    $$typeof: _,
    type: e,
    compare: true === t ? null : t
  }
}, exports.startTransition = function(e) {
  var t = S.T,
    n = {};
  S.T = n;
  try {
    var r = e(),
      i = S.S;
    null !== i && i(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(G, U)
  } catch (e) {
    U(e)
  } finally {
    S.T = t
  }
}, exports.unstable_useCacheRefresh = function() {
  return S.H.useCacheRefresh()
}, exports.use = function(e) {
  return S.H.use(e)
}, exports.useActionState = function(e, t, n) {
  return S.H.useActionState(e, t, n)
}, exports.useCallback = function(e, t) {
  return S.H.useCallback(e, t)
}, exports.useContext = function(e) {
  return S.H.useContext(e)
}, exports.useDebugValue = function() {}, exports.useDeferredValue = function(e, t) {
  return S.H.useDeferredValue(e, t)
}, exports.useEffect = function(e, t) {
  return S.H.useEffect(e, t)
}, exports.useId = function() {
  return S.H.useId()
}, exports.useImperativeHandle = function(e, t, n) {
  return S.H.useImperativeHandle(e, t, n)
}, exports.useInsertionEffect = function(e, t) {
  return S.H.useInsertionEffect(e, t)
}, exports.useLayoutEffect = function(e, t) {
  return S.H.useLayoutEffect(e, t)
}, exports.useMemo = function(e, t) {
  return S.H.useMemo(e, t)
}, exports.useOptimistic = function(e, t) {
  return S.H.useOptimistic(e, t)
}, exports.useReducer = function(e, t, n) {
  return S.H.useReducer(e, t, n)
}, exports.useRef = function(e) {
  return S.H.useRef(e)
}, exports.useState = function(e) {
  return S.H.useState(e)
}, exports.useSyncExternalStore = function(e, t, n) {
  return S.H.useSyncExternalStore(e, t, n)
}, exports.useTransition = function() {
  return S.H.useTransition()
}, exports.version = "19.0.0"