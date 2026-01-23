/** Chunk was on web.js **/
/** chunk id: 694705, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => v,
  v: () => b
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk681154 = require("./681154.js"),
  Chunk61259 = require("./61259.js"),
  Chunk380349 = require("./380349.js"),
  Chunk420009 = require("./420009.js"),
  Chunk315093 = require("./315093.js"),
  Chunk438414 = require("./438414.js"),
  Chunk873498 = require("./873498.js"),
  Chunk653826 = require("./653826.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = E(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let y = Chunk64700.createContext(true);

function b() {
  let e = i.useContext(y);
  return s()(null != e, "useEntryDataContext must be used within a EntryDataContextProvider"), e
}

function O(e) {
  let {
    entry: t
  } = e, n = g(e, ["entry"]), i = m({
    baseEntryData: (0, u.A)({
      entry: t,
      channel: n.channel
    })
  }, n);
  switch (t.content_type) {
    case o.I.TOP_ARTIST:
      return (0, r.jsx)(I, m({
        entry: t
      }, i));
    case o.I.TOP_GAME:
      return (0, r.jsx)(S, m({
        entry: t
      }, i));
    case o.I.PLAYED_GAME:
      return (0, r.jsx)(T, m({
        entry: t
      }, i));
    case o.I.WATCHED_MEDIA:
      return (0, r.jsx)(C, m({
        entry: t
      }, i));
    case o.I.LISTENED_SESSION:
      return (0, r.jsx)(N, m({
        entry: t
      }, i));
    case o.I.LAUNCHED_ACTIVITY:
      return (0, r.jsx)(A, m({
        entry: t
      }, i));
    default:
      throw Error("Unsupported content type: ".concat(t.content_type))
  }
}

function v(e) {
  let {
    errorFallback: t
  } = e, n = g(e, ["errorFallback"]);
  return (0, r.jsx)(l.t, {
    fallback: t,
    children: (0, r.jsx)(O, m({}, n))
  })
}

function A(e) {
  let {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]), a = (0, c.A)(m({
    entry: t
  }, i));
  return (0, r.jsx)(y.Provider, {
    value: m({
      parsedEntry: a
    }, i),
    children: n
  })
}

function I(e) {
  let {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]), a = (0, p.A)(m({
    entry: t
  }, i));
  return (0, r.jsx)(y.Provider, {
    value: m({
      parsedEntry: a
    }, i),
    children: n
  })
}

function S(e) {
  let {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]), a = (0, d.A)(m({
    entry: t
  }, i));
  return (0, r.jsx)(y.Provider, {
    value: m({
      parsedEntry: a
    }, i),
    children: n
  })
}

function T(e) {
  let {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]), a = (0, d.A)(m({
    entry: t
  }, i));
  return (0, r.jsx)(y.Provider, {
    value: m({
      parsedEntry: a
    }, i),
    children: n
  })
}

function C(e) {
  let {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]), a = (0, _.A)(m({
    entry: t
  }, i));
  return (0, r.jsx)(y.Provider, {
    value: m({
      parsedEntry: a
    }, i),
    children: n
  })
}

function N(e) {
  let {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]), a = (0, f.A)(m({
    entry: t
  }, i));
  return (0, r.jsx)(y.Provider, {
    value: m({
      parsedEntry: a
    }, i),
    children: n
  })
}