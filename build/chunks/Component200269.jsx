/** Chunk was on web.js **/
/** chunk id: 200269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => u,
  x: () => d,
  y: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");

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

function s(e, t) {
  return {
    getLevelAndMarkUsed: () => (t.current = true, e),
    consumed: t,
    level: e
  }
}
let l = Chunk473749.createContext(s(2, {
  current: false
}));

function c(e) {
  let {
    component: t,
    children: n,
    forceLevel: o
  } = e, a = i.useContext(l), c = null != o ? o : a.level, u = c;
  (null != t || null == o && a.consumed.current) && u++;
  let d = i.useRef(false),
    f = i.useRef(false),
    p = i.useMemo(() => s(c, d), [c]),
    _ = i.useMemo(() => s(u, f), [u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [null != t ? (0, r.jsx)(l.Provider, {
      value: p,
      children: t
    }) : null, (0, r.jsx)(l.Provider, {
      value: _,
      children: n
    })]
  })
}

function u(e) {
  let t = d(),
    n = "h".concat(Math.min(t, 6));
  return (0, r.jsx)(n, a({}, t > 6 ? {
    "data-excessive-heading-level": t
  } : {}, e))
}

function d() {
  let {
    getLevelAndMarkUsed: e
  } = Chunk473749.useContext(l);
  return module()
}
l.displayName = "HeadingLevelContext"