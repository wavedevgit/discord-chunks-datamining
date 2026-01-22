/** Chunk was on web.js **/
/** chunk id: 707554, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => d,
  F: () => c,
  H: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
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

function o(e, t) {
  return {
    getLevelAndMarkUsed: () => (t.current = true, e),
    consumed: t,
    level: e
  }
}
let l = Chunk64700.createContext(o(2, {
  current: false
}));

function c(e) {
  let {
    component: t,
    children: n,
    forceLevel: a
  } = e, s = i.useContext(l), c = null != a ? a : s.level, u = c;
  (null != t || null == a && s.consumed.current) && u++;
  let d = i.useRef(false),
    f = i.useRef(false),
    p = i.useMemo(() => o(c, d), [c]),
    _ = i.useMemo(() => o(u, f), [u]);
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
  return (0, r.jsx)(n, s({}, t > 6 ? {
    "data-excessive-heading-level": t
  } : {}, e))
}

function d() {
  let {
    getLevelAndMarkUsed: e
  } = i.useContext(l);
  return e()
}
l.displayName = "HeadingLevelContext"