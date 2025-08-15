/** Chunk was on web.js **/
/** chunk id: 200269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => l,
  x: () => u,
  y: () => s
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e) {
  let {
    component: t,
    children: n,
    forceLevel: a
  } = e, o = i.useContext(c), [s, l] = i.useState(null != t), u = 1, d = 1;
  null != a ? null != t ? (u = a, d = a + 1) : d = a : null != t ? (u = o.level, d = o.level + 1) : d = o.level + +!!s;
  let f = i.useMemo(() => ({
      level: u,
      getLevelAndMarkUsed: () => (l(true), u)
    }), [u]),
    _ = i.useMemo(() => ({
      level: d,
      getLevelAndMarkUsed: () => (l(true), d)
    }), [d]);
  return (0, r.jsxs)(r.Fragment, {
    children: [null != t ? (0, r.jsx)(c.Provider, {
      value: f,
      children: t
    }) : null, (0, r.jsx)(c.Provider, {
      value: _,
      children: n
    })]
  })
}

function l(e) {
  let t = u(),
    n = "h".concat(Math.min(t, 6));
  return (0, r.jsx)(n, o({}, t > 6 ? {
    "data-excessive-heading-level": t
  } : {}, e))
}
let c = Chunk73800.createContext({
  getLevelAndMarkUsed: () => 2,
  level: 2
});

function u() {
  let {
    getLevelAndMarkUsed: e
  } = Chunk73800.useContext(c);
  return module()
}
c.displayName = "HeadingLevelContext"