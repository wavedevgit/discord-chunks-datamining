/** Chunk was on web.js **/
/** chunk id: 52396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => y,
  r: () => v
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = Chunk473749.createContext(true);

function y() {
  let e = Chunk473749.useContext(b);
  return o()(null != module, "useEntryDataContext must be used within a EntryDataContextProvider"), module
}

function O(e) {
  var {
    entry: t
  } = e, n = g(e, ["entry"]);
  let i = h({
    baseEntryData: (0, u.Z)({
      entry: t,
      channel: n.channel
    })
  }, n);
  switch (t.content_type) {
    case s.s.TOP_ARTIST:
      return (0, r.jsx)(I, h({
        entry: t
      }, i));
    case s.s.TOP_GAME:
      return (0, r.jsx)(T, h({
        entry: t
      }, i));
    case s.s.PLAYED_GAME:
      return (0, r.jsx)(A, h({
        entry: t
      }, i));
    case s.s.WATCHED_MEDIA:
      return (0, r.jsx)(C, h({
        entry: t
      }, i));
    case s.s.LISTENED_SESSION:
      return (0, r.jsx)(N, h({
        entry: t
      }, i));
    case s.s.LAUNCHED_ACTIVITY:
      return (0, r.jsx)(S, h({
        entry: t
      }, i));
    default:
      throw Error("Unsupported content type: ".concat(t.content_type))
  }
}

function v(e) {
  var {
    errorFallback: t
  } = e, n = g(e, ["errorFallback"]);
  return (0, r.jsx)(l.S, {
    fallback: t,
    children: (0, r.jsx)(O, h({}, n))
  })
}

function S(e) {
  var {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]);
  let a = (0, c.Z)(h({
    entry: t
  }, i));
  return (0, r.jsx)(b.Provider, {
    value: h({
      parsedEntry: a
    }, i),
    children: n
  })
}

function I(e) {
  var {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]);
  let a = (0, p.Z)(h({
    entry: t
  }, i));
  return (0, r.jsx)(b.Provider, {
    value: h({
      parsedEntry: a
    }, i),
    children: n
  })
}

function T(e) {
  var {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]);
  let a = (0, d.Z)(h({
    entry: t
  }, i));
  return (0, r.jsx)(b.Provider, {
    value: h({
      parsedEntry: a
    }, i),
    children: n
  })
}

function A(e) {
  var {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]);
  let a = (0, d.Z)(h({
    entry: t
  }, i));
  return (0, r.jsx)(b.Provider, {
    value: h({
      parsedEntry: a
    }, i),
    children: n
  })
}

function C(e) {
  var {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]);
  let a = (0, _.Z)(h({
    entry: t
  }, i));
  return (0, r.jsx)(b.Provider, {
    value: h({
      parsedEntry: a
    }, i),
    children: n
  })
}

function N(e) {
  var {
    entry: t,
    children: n
  } = e, i = g(e, ["entry", "children"]);
  let a = (0, f.Z)(h({
    entry: t
  }, i));
  return (0, r.jsx)(b.Provider, {
    value: h({
      parsedEntry: a
    }, i),
    children: n
  })
}