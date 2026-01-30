/** Chunk was on 49559 **/
/** chunk id: 694705, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => g,
  v: () => h
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk681154 = require("./681154.js"),
  Chunk61259 = require("./61259.js"),
  Chunk380349 = require("./380349.js"),
  Chunk420009 = require("./420009.js"),
  Chunk315093 = require("./315093.js"),
  Chunk438414 = require("./438414.js"),
  Chunk873498 = require("./873498.js"),
  Chunk653826 = require("./653826.js");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, l, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        a = Object.getOwnPropertyNames(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}
let y = Chunk64700.createContext(true);

function h() {
  let e = l.useContext(y);
  return i()(null != e, "useEntryDataContext must be used within a EntryDataContextProvider"), e
}

function j(e) {
  let {
    entry: t
  } = e, n = b(e, ["entry"]), l = O({
    baseEntryData: (0, u.A)({
      entry: t,
      channel: n.channel
    })
  }, n);
  switch (t.content_type) {
    case o.ContentInventoryEntryType.TOP_ARTIST:
      return (0, r.jsx)(v, O({
        entry: t
      }, l));
    case o.ContentInventoryEntryType.TOP_GAME:
      return (0, r.jsx)(E, O({
        entry: t
      }, l));
    case o.ContentInventoryEntryType.PLAYED_GAME:
      return (0, r.jsx)(C, O({
        entry: t
      }, l));
    case o.ContentInventoryEntryType.WATCHED_MEDIA:
      return (0, r.jsx)(x, O({
        entry: t
      }, l));
    case o.ContentInventoryEntryType.LISTENED_SESSION:
      return (0, r.jsx)(N, O({
        entry: t
      }, l));
    case o.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
      return (0, r.jsx)(A, O({
        entry: t
      }, l));
    default:
      throw Error("Unsupported content type: ".concat(t.content_type))
  }
}

function g(e) {
  let {
    errorFallback: t
  } = e, n = b(e, ["errorFallback"]);
  return (0, r.jsx)(s.t, {
    fallback: t,
    children: (0, r.jsx)(j, O({}, n))
  })
}

function A(e) {
  let {
    entry: t,
    children: n
  } = e, l = b(e, ["entry", "children"]), a = (0, c.A)(O({
    entry: t
  }, l));
  return (0, r.jsx)(y.Provider, {
    value: O({
      parsedEntry: a
    }, l),
    children: n
  })
}

function v(e) {
  let {
    entry: t,
    children: n
  } = e, l = b(e, ["entry", "children"]), a = (0, m.A)(O({
    entry: t
  }, l));
  return (0, r.jsx)(y.Provider, {
    value: O({
      parsedEntry: a
    }, l),
    children: n
  })
}

function E(e) {
  let {
    entry: t,
    children: n
  } = e, l = b(e, ["entry", "children"]), a = (0, d.A)(O({
    entry: t
  }, l));
  return (0, r.jsx)(y.Provider, {
    value: O({
      parsedEntry: a
    }, l),
    children: n
  })
}

function C(e) {
  let {
    entry: t,
    children: n
  } = e, l = b(e, ["entry", "children"]), a = (0, d.A)(O({
    entry: t
  }, l));
  return (0, r.jsx)(y.Provider, {
    value: O({
      parsedEntry: a
    }, l),
    children: n
  })
}

function x(e) {
  let {
    entry: t,
    children: n
  } = e, l = b(e, ["entry", "children"]), a = (0, f.A)(O({
    entry: t
  }, l));
  return (0, r.jsx)(y.Provider, {
    value: O({
      parsedEntry: a
    }, l),
    children: n
  })
}

function N(e) {
  let {
    entry: t,
    children: n
  } = e, l = b(e, ["entry", "children"]), a = (0, p.A)(O({
    entry: t
  }, l));
  return (0, r.jsx)(y.Provider, {
    value: O({
      parsedEntry: a
    }, l),
    children: n
  })
}