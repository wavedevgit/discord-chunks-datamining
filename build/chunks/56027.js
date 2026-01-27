/** Chunk was on web.js **/
/** chunk id: 56027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B1: () => x,
  C0: () => h,
  DD: () => a,
  Dz: () => O,
  Jx: () => u,
  LI: () => l,
  PG: () => g,
  RI: () => c,
  Sg: () => m,
  T9: () => s,
  TV: () => b,
  WJ: () => A,
  _3: () => _,
  aD: () => I,
  bV: () => P,
  jk: () => o,
  lP: () => R,
  nI: () => L,
  qE: () => p,
  r_: () => r,
  sq: () => E,
  w7: () => v
});
let r = ["top", "right", "bottom", "left"],
  i = ["start", "end"],
  a = r.reduce((e, t) => e.concat(t, t + "-" + i[0], t + "-" + i[1]), []),
  o = Math.min,
  s = Math.max,
  l = Math.round,
  c = Math.floor,
  u = e => ({
    x: e,
    y: e
  }),
  d = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  },
  f = {
    start: "end",
    end: "start"
  };

function p(e, t, n) {
  return s(e, o(t, n))
}

function _(e, t) {
  return "function" == typeof e ? e(t) : e
}

function h(e) {
  return e.split("-")[0]
}

function m(e) {
  return e.split("-")[1]
}

function g(e) {
  return "x" === e ? "y" : "x"
}

function E(e) {
  return "y" === e ? "height" : "width"
}
let y = new Set(["top", "bottom"]);

function b(e) {
  return y.has(h(e)) ? "y" : "x"
}

function O(e) {
  return g(b(e))
}

function v(e, t, n) {
  true === n && (n = false);
  let r = m(e),
    i = O(e),
    a = E(i),
    o = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (o = P(o)), [o, P(o)]
}

function A(e) {
  let t = P(e);
  return [I(e), t, I(t)]
}

function I(e) {
  return e.replace(/start|end/g, e => f[e])
}
let S = ["left", "right"],
  T = ["right", "left"],
  C = ["top", "bottom"],
  N = ["bottom", "top"];

function w(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      if (n) return t ? T : S;
      return t ? S : T;
    case "left":
    case "right":
      return t ? C : N;
    default:
      return []
  }
}

function R(e, t, n, r) {
  let i = m(e),
    a = w(h(e), "start" === n, r);
  return i && (a = a.map(e => e + "-" + i), t && (a = a.concat(a.map(I)))), a
}

function P(e) {
  return e.replace(/left|right|bottom|top/g, e => d[e])
}

function D(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  }
}

function L(e) {
  return "number" != typeof e ? D(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  }
}

function x(e) {
  let {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  }
}