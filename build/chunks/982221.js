/** Chunk was on web.js **/
/** chunk id: 982221, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk72290 = require("./72290.js"),
  i = Symbol.for("react.transitional.element"),
  a = Symbol.for("react.portal"),
  s = Symbol.for("react.fragment"),
  o = Symbol.for("react.strict_mode"),
  l = Symbol.for("react.profiler"),
  c = Symbol.for("react.consumer"),
  u = Symbol.for("react.context"),
  d = Symbol.for("react.forward_ref"),
  f = Symbol.for("react.suspense"),
  p = Symbol.for("react.memo"),
  _ = Symbol.for("react.lazy"),
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

function A(e, t, n) {
  this.props = e, this.context = t, this.refs = b, this.updater = n || g
}
y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
  if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
}, y.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}, O.prototype = y.prototype;
var v = A.prototype = new O;
v.constructor = A, E(v, y.prototype), v.isPureReactComponent = true;
var S = Array.isArray,
  I = {
    H: null,
    A: null,
    T: null,
    S: null,
    V: null
  },
  T = Object.prototype.hasOwnProperty;

function C(e, t, n, r, a, s) {
  return {
    $$typeof: i,
    type: e,
    key: t,
    ref: true !== (n = s.ref) ? n : null,
    props: s
  }
}

function N(e, t) {
  return C(e.type, t, true, true, true, e.props)
}

function R(e) {
  return "object" == typeof e && null !== e && e.$$typeof === i
}

function w(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(e) {
    return t[e]
  })
}
var P = /\/+/g;

function D(e, t) {
  return "object" == typeof e && null !== e && null != e.key ? w("" + e.key) : t.toString(36)
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

function j(e, t, n, r, s) {
  var o = typeof e;
  ("undefined" === o || "boolean" === o) && (e = null);
  var l = false;
  if (null === e) l = true;
  else switch (o) {
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
        case _:
          return j((l = e._init)(e._payload), t, n, r, s)
      }
  }
  if (l) return s = s(e), l = "" === r ? "." + D(e, 0) : r, S(s) ? (n = "", null != l && (n = l.replace(P, "$&/") + "/"), j(s, t, n, "", function(e) {
    return e
  })) : null != s && (R(s) && (s = N(s, n + (null == s.key || e && e.key === s.key ? "" : ("" + s.key).replace(P, "$&/") + "/") + l)), t.push(s)), 1;
  l = 0;
  var c = "" === r ? "." : r + ":";
  if (S(e))
    for (var u = 0; u < e.length; u++) o = c + D(r = e[u], u), l += j(r, t, n, o, s);
  else if ("function" == typeof(u = m(e)))
    for (e = u.call(e), u = 0; !(r = e.next()).done;) o = c + D(r = r.value, u++), l += j(r, t, n, o, s);
  else if ("object" === o) {
    if ("function" == typeof e.then) return j(L(e), t, n, r, s);
    throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (t = String(e)) ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
  }
  return l
}

function M(e, t, n) {
  if (null == e) return e;
  var r = [],
    i = 0;
  return j(e, r, "", "", function(e) {
    return t.call(n, e, i++)
  }), r
}

function k(e) {
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
  map: M,
  forEach: function(e, t, n) {
    M(e, function() {
      t.apply(this, arguments)
    }, n)
  },
  count: function(e) {
    var t = 0;
    return M(e, function() {
      t++
    }), t
  },
  toArray: function(e) {
    return M(e, function(e) {
      return e
    }) || []
  },
  only: function(e) {
    if (!R(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
}, exports.Component = y, exports.Fragment = s, exports.Profiler = l, exports.PureComponent = A, exports.StrictMode = o, exports.Suspense = f, exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, exports.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function(e) {
    return I.H.useMemoCache(e)
  }
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
    for (s in true !== t.ref && (a = true), true !== t.key && (i = "" + t.key), t) T.call(t, s) && "key" !== s && "__self" !== s && "__source" !== s && ("ref" !== s || true !== t.ref) && (r[s] = t[s]);
  var s = arguments.length - 2;
  if (1 === s) r.children = n;
  else if (1 < s) {
    for (var o = Array(s), l = 0; l < s; l++) o[l] = arguments[l + 2];
    r.children = o
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
    for (r in true !== t.key && (a = "" + t.key), t) T.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (1 === s) i.children = n;
  else if (1 < s) {
    for (var o = Array(s), l = 0; l < s; l++) o[l] = arguments[l + 2];
    i.children = o
  }
  if (e && e.defaultProps)
    for (r in s = e.defaultProps) true === i[r] && (i[r] = s[r]);
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
    $$typeof: _,
    _payload: {
      _status: false,
      _result: e
    },
    _init: k
  }
}, exports.memo = function(e, t) {
  return {
    $$typeof: p,
    type: e,
    compare: true === t ? null : t
  }
}, exports.startTransition = function(e) {
  var t = I.T,
    n = {};
  I.T = n;
  try {
    var r = e(),
      i = I.S;
    null !== i && i(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(G, U)
  } catch (e) {
    U(e)
  } finally {
    I.T = t
  }
}, exports.unstable_useCacheRefresh = function() {
  return I.H.useCacheRefresh()
}, exports.use = function(e) {
  return I.H.use(e)
}, exports.useActionState = function(e, t, n) {
  return I.H.useActionState(e, t, n)
}, exports.useCallback = function(e, t) {
  return I.H.useCallback(e, t)
}, exports.useContext = function(e) {
  return I.H.useContext(e)
}, exports.useDebugValue = function() {}, exports.useDeferredValue = function(e, t) {
  return I.H.useDeferredValue(e, t)
}, exports.useEffect = function(e, t, n) {
  var r = I.H;
  if ("function" == typeof n) throw Error("useEffect CRUD overload is not enabled in this build of React.");
  return r.useEffect(e, t)
}, exports.useId = function() {
  return I.H.useId()
}, exports.useImperativeHandle = function(e, t, n) {
  return I.H.useImperativeHandle(e, t, n)
}, exports.useInsertionEffect = function(e, t) {
  return I.H.useInsertionEffect(e, t)
}, exports.useLayoutEffect = function(e, t) {
  return I.H.useLayoutEffect(e, t)
}, exports.useMemo = function(e, t) {
  return I.H.useMemo(e, t)
}, exports.useOptimistic = function(e, t) {
  return I.H.useOptimistic(e, t)
}, exports.useReducer = function(e, t, n) {
  return I.H.useReducer(e, t, n)
}, exports.useRef = function(e) {
  return I.H.useRef(e)
}, exports.useState = function(e) {
  return I.H.useState(e)
}, exports.useSyncExternalStore = function(e, t, n) {
  return I.H.useSyncExternalStore(e, t, n)
}, exports.useTransition = function() {
  return I.H.useTransition()
}, exports.version = "19.1.0"