/** Chunk was on web.js **/
/** chunk id: 200269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => l,
  x: () => u,
  y: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function s(e) {
  let {
    component: t,
    children: n,
    forceLevel: o
  } = e, a = i.useContext(c), [s, l] = i.useState(null != t), u = 1, d = 1;
  null != o ? null != t ? (u = o, d = o + 1) : d = o : null != t ? (u = a.level, d = a.level + 1) : d = a.level + +!!s;
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
  return (0, r.jsx)(n, a({}, t > 6 ? {
    "data-excessive-heading-level": t
  } : {}, e))
}
let c = Chunk647438.createContext({
  getLevelAndMarkUsed: () => 2,
  level: 2
});

function u() {
  let {
    getLevelAndMarkUsed: e
  } = Chunk647438.useContext(c);
  return module()
}
c.displayName = "HeadingLevelContext"