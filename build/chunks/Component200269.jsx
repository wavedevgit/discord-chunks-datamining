/** Chunk was on web.js **/
/** chunk id: 200269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => u,
  x: () => d,
  y: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");

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

function s(e, t) {
  return {
    getLevelAndMarkUsed: () => (t.current = true, e),
    consumed: t,
    level: e
  }
}
let l = Chunk647438.createContext(s(2, {
  current: false
}));

function c(e) {
  let {
    component: t,
    children: n,
    forceLevel: a
  } = e, o = i.useContext(l), c = null != a ? a : o.level, u = c;
  (null != t || null == a && o.consumed.current) && u++;
  let d = i.useRef(false),
    f = i.useRef(false),
    _ = i.useMemo(() => s(c, d), [c]),
    p = i.useMemo(() => s(u, f), [u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [null != t ? (0, r.jsx)(l.Provider, {
      value: _,
      children: t
    }) : null, (0, r.jsx)(l.Provider, {
      value: p,
      children: n
    })]
  })
}

function u(e) {
  let t = d(),
    n = "h".concat(Math.min(t, 6));
  return (0, r.jsx)(n, o({}, t > 6 ? {
    "data-excessive-heading-level": t
  } : {}, e))
}

function d() {
  let {
    getLevelAndMarkUsed: e
  } = Chunk647438.useContext(l);
  return module()
}
l.displayName = "HeadingLevelContext"