/** Chunk was on web.js **/
/** chunk id: 483362, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk444675 = require("./444675.js"),
  i = Symbol.for("react.transitional.element"),
  o = Symbol.for("react.portal"),
  a = Symbol.for("react.fragment"),
  s = Symbol.for("react.strict_mode"),
  l = Symbol.for("react.profiler"),
  c = Symbol.for("react.consumer"),
  u = Symbol.for("react.context"),
  d = Symbol.for("react.forward_ref"),
  f = Symbol.for("react.suspense"),
  p = Symbol.for("react.memo"),
  _ = Symbol.for("react.lazy"),
  m = Symbol.iterator;

function h(e) {
  return null === e || "object" != typeof e ? null : "function" == typeof(e = m && e[m] || e["@@iterator"]) ? e : null
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
var S = v.prototype = new O;
S.constructor = v, E(S, y.prototype), S.isPureReactComponent = true;
var I = Array.isArray,
  T = {
    H: null,
    A: null,
    T: null,
    S: null,
    V: null
  },
  C = Object.prototype.hasOwnProperty;

function A(e, t, n, r, o, a) {
  return {
    $$typeof: i,
    type: e,
    key: t,
    ref: true !== (n = a.ref) ? n : null,
    props: a
  }
}

function N(e, t) {
  return A(e.type, t, true, true, true, e.props)
}

function P(e) {
  return "object" == typeof e && null !== e && e.$$typeof === i
}

function R(e) {
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
  return "object" == typeof e && null !== e && null != e.key ? R("" + e.key) : t.toString(36)
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

function j(e, t, n, r, a) {
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
        case o:
          l = true;
          break;
        case _:
          return j((l = e._init)(e._payload), t, n, r, a)
      }
  }
  if (l) return a = a(e), l = "" === r ? "." + D(e, 0) : r, I(a) ? (n = "", null != l && (n = l.replace(w, "$&/") + "/"), j(a, t, n, "", function(e) {
    return e
  })) : null != a && (P(a) && (a = N(a, n + (null == a.key || e && e.key === a.key ? "" : ("" + a.key).replace(w, "$&/") + "/") + l)), t.push(a)), 1;
  l = 0;
  var c = "" === r ? "." : r + ":";
  if (I(e))
    for (var u = 0; u < e.length; u++) s = c + D(r = e[u], u), l += j(r, t, n, s, a);
  else if ("function" == typeof(u = h(e)))
    for (e = u.call(e), u = 0; !(r = e.next()).done;) s = c + D(r = r.value, u++), l += j(r, t, n, s, a);
  else if ("object" === s) {
    if ("function" == typeof e.then) return j(L(e), t, n, r, a);
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
    if (!P(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
}, exports.Component = y, exports.Fragment = a, exports.Profiler = l, exports.PureComponent = v, exports.StrictMode = s, exports.Suspense = f, exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, exports.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function(e) {
    return T.H.useMemoCache(e)
  }
}, exports.cache = function(e) {
  return function() {
    return e.apply(null, arguments)
  }
}, exports.cloneElement = function(e, t, n) {
  if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
  var r = E({}, e.props),
    i = e.key,
    o = true;
  if (null != t)
    for (a in true !== t.ref && (o = true), true !== t.key && (i = "" + t.key), t) C.call(t, a) && "key" !== a && "__self" !== a && "__source" !== a && ("ref" !== a || true !== t.ref) && (r[a] = t[a]);
  var a = arguments.length - 2;
  if (1 === a) r.children = n;
  else if (1 < a) {
    for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
    r.children = s
  }
  return A(e.type, i, true, true, o, r)
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
    o = null;
  if (null != t)
    for (r in true !== t.key && (o = "" + t.key), t) C.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (1 === a) i.children = n;
  else if (1 < a) {
    for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
    i.children = s
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps) true === i[r] && (i[r] = a[r]);
  return A(e, o, true, true, null, i)
}, exports.createRef = function() {
  return {
    current: null
  }
}, exports.forwardRef = function(e) {
  return {
    $$typeof: d,
    render: e
  }
}, exports.isValidElement = P, exports.lazy = function(e) {
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
  var t = T.T,
    n = {};
  T.T = n;
  try {
    var r = e(),
      i = T.S;
    null !== i && i(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(G, U)
  } catch (e) {
    U(e)
  } finally {
    T.T = t
  }
}, exports.unstable_useCacheRefresh = function() {
  return T.H.useCacheRefresh()
}, exports.use = function(e) {
  return T.H.use(e)
}, exports.useActionState = function(e, t, n) {
  return T.H.useActionState(e, t, n)
}, exports.useCallback = function(e, t) {
  return T.H.useCallback(e, t)
}, exports.useContext = function(e) {
  return T.H.useContext(e)
}, exports.useDebugValue = function() {}, exports.useDeferredValue = function(e, t) {
  return T.H.useDeferredValue(e, t)
}, exports.useEffect = function(e, t, n) {
  var r = T.H;
  if ("function" == typeof n) throw Error("useEffect CRUD overload is not enabled in this build of React.");
  return r.useEffect(e, t)
}, exports.useId = function() {
  return T.H.useId()
}, exports.useImperativeHandle = function(e, t, n) {
  return T.H.useImperativeHandle(e, t, n)
}, exports.useInsertionEffect = function(e, t) {
  return T.H.useInsertionEffect(e, t)
}, exports.useLayoutEffect = function(e, t) {
  return T.H.useLayoutEffect(e, t)
}, exports.useMemo = function(e, t) {
  return T.H.useMemo(e, t)
}, exports.useOptimistic = function(e, t) {
  return T.H.useOptimistic(e, t)
}, exports.useReducer = function(e, t, n) {
  return T.H.useReducer(e, t, n)
}, exports.useRef = function(e) {
  return T.H.useRef(e)
}, exports.useState = function(e) {
  return T.H.useState(e)
}, exports.useSyncExternalStore = function(e, t, n) {
  return T.H.useSyncExternalStore(e, t, n)
}, exports.useTransition = function() {
  return T.H.useTransition()
}, exports.version = "19.1.0"