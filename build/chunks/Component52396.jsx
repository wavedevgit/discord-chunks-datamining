/** Chunk was on 30243 **/
/** chunk id: 52396, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  B: () => j,
  r: () => h
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk876215 = require("./876215.js"),
  Chunk775379 = require("./775379.js"),
  Chunk879046 = require("./879046.js"),
  Chunk214597 = require("./214597.js"),
  Chunk498187 = require("./498187.js"),
  Chunk482417 = require("./482417.js"),
  Chunk301419 = require("./301419.js"),
  Chunk397035 = require("./397035.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function O(e, t) {
  if (null == e) return {};
  var r, n, l = function(e, t) {
    if (null == e) return {};
    var r, n, l = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
  }
  return l
}
let y = Chunk647438.createContext(true);

function j() {
  let e = Chunk647438.useContext(y);
  return o()(null != module, "useEntryDataContext must be used within a EntryDataContextProvider"), module
}

function g(e) {
  var {
    entry: t
  } = e, r = O(e, ["entry"]);
  let l = m({
    baseEntryData: (0, u.Z)({
      entry: t,
      channel: r.channel
    })
  }, r);
  switch (t.content_type) {
    case a.s.TOP_ARTIST:
      return (0, n.jsx)(P, m({
        entry: t
      }, l));
    case a.s.TOP_GAME:
      return (0, n.jsx)(x, m({
        entry: t
      }, l));
    case a.s.PLAYED_GAME:
      return (0, n.jsx)(S, m({
        entry: t
      }, l));
    case a.s.WATCHED_MEDIA:
      return (0, n.jsx)(w, m({
        entry: t
      }, l));
    case a.s.LISTENED_SESSION:
      return (0, n.jsx)(C, m({
        entry: t
      }, l));
    case a.s.LAUNCHED_ACTIVITY:
      return (0, n.jsx)(v, m({
        entry: t
      }, l));
    default:
      throw Error("Unsupported content type: ".concat(t.content_type))
  }
}

function h(e) {
  var {
    errorFallback: t
  } = e, r = O(e, ["errorFallback"]);
  return (0, n.jsx)(c.S, {
    fallback: t,
    children: (0, n.jsx)(g, m({}, r))
  })
}

function v(e) {
  var {
    entry: t,
    children: r
  } = e, l = O(e, ["entry", "children"]);
  let i = (0, s.Z)(m({
    entry: t
  }, l));
  return (0, n.jsx)(y.Provider, {
    value: m({
      parsedEntry: i
    }, l),
    children: r
  })
}

function P(e) {
  var {
    entry: t,
    children: r
  } = e, l = O(e, ["entry", "children"]);
  let i = (0, f.Z)(m({
    entry: t
  }, l));
  return (0, n.jsx)(y.Provider, {
    value: m({
      parsedEntry: i
    }, l),
    children: r
  })
}

function x(e) {
  var {
    entry: t,
    children: r
  } = e, l = O(e, ["entry", "children"]);
  let i = (0, d.Z)(m({
    entry: t
  }, l));
  return (0, n.jsx)(y.Provider, {
    value: m({
      parsedEntry: i
    }, l),
    children: r
  })
}

function S(e) {
  var {
    entry: t,
    children: r
  } = e, l = O(e, ["entry", "children"]);
  let i = (0, d.Z)(m({
    entry: t
  }, l));
  return (0, n.jsx)(y.Provider, {
    value: m({
      parsedEntry: i
    }, l),
    children: r
  })
}

function w(e) {
  var {
    entry: t,
    children: r
  } = e, l = O(e, ["entry", "children"]);
  let i = (0, b.Z)(m({
    entry: t
  }, l));
  return (0, n.jsx)(y.Provider, {
    value: m({
      parsedEntry: i
    }, l),
    children: r
  })
}

function C(e) {
  var {
    entry: t,
    children: r
  } = e, l = O(e, ["entry", "children"]);
  let i = (0, p.Z)(m({
    entry: t
  }, l));
  return (0, n.jsx)(y.Provider, {
    value: m({
      parsedEntry: i
    }, l),
    children: r
  })
}