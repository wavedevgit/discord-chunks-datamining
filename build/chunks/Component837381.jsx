/** Chunk was on web.js **/
/** chunk id: 837381, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $y: () => O,
  KF: () => b,
  LT: () => v,
  PR: () => A,
  Vd: () => E,
  hD: () => I,
  nC: () => h,
  rm: () => g,
  tG: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk461771 = require("./461771.js"),
  Chunk741918 = require("./741918.js"),
  Chunk602034 = require("./602034.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = {
    id: "NO_LIST",
    setFocus() {}
  },
  p = {
    id: "NO_LIST",
    onKeyDown() {},
    orientation: Chunk741918.Gl.VERTICAL,
    ref: Chunk64700.createRef(),
    tabIndex: false
  },
  _ = Chunk64700.createContext(f),
  h = Chunk64700.createContext(p);

function m() {
  return i.useContext(_)
}

function g(e) {
  let [t, n] = i.useState(false), {
    id: r,
    setFocus: o
  } = m(), l = i.useCallback(() => o(e), [e, o]);
  return i.useLayoutEffect(() => (0, a.e)(r, (t, r) => {
    n(r && t === e ? 0 : false)
  }), [e, r]), {
    role: "listitem",
    [s.eM]: (0, s.t$)(r, e),
    tabIndex: t,
    onFocus: l
  }
}

function E(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1;
  return d(c({}, g(e)), {
    role: "treeitem",
    "aria-level": t
  })
}

function y(e) {
  let {
    children: t,
    id: n
  } = e;
  return t(g(n))
}

function b() {
  return i.useContext(h).ref
}

function O() {
  let {
    id: e,
    onKeyDown: t,
    ref: n,
    tabIndex: r,
    orientation: a
  } = i.useContext(h);
  return {
    role: "list",
    tabIndex: r,
    [s.KE]: e,
    onKeyDown: t,
    ref: n,
    "aria-orientation": a
  }
}

function v(e) {
  let {
    id: t,
    containerProps: {
      onKeyDown: n,
      ref: r,
      tabIndex: i
    },
    orientation: a
  } = e;
  return {
    role: "list",
    onKeyDown: n,
    ref: r,
    [s.KE]: t,
    tabIndex: i,
    "aria-orientation": a
  }
}

function A(e) {
  let {
    children: t
  } = e;
  return t(O())
}

function I(e) {
  let {
    children: t,
    navigator: n
  } = e, {
    id: a,
    setFocus: o,
    containerProps: {
      onKeyDown: s,
      ref: l,
      tabIndex: c
    },
    orientation: u
  } = n, d = i.useMemo(() => ({
    id: a,
    setFocus: o
  }), [a, o]), f = i.useMemo(() => ({
    onKeyDown: s,
    orientation: u,
    ref: l,
    id: a,
    tabIndex: c
  }), [s, u, l, a, c]);
  return (0, r.jsxs)(h.Provider, {
    value: f,
    children: [(0, r.jsx)(_.Provider, {
      value: d,
      children: t
    }), " "]
  })
}