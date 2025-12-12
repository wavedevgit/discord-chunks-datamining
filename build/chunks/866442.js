/** Chunk was on web.js **/
/** chunk id: 866442, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bd: () => f,
  FX: () => p,
  O: () => l,
  Rf: () => s,
  _i: () => a,
  br: () => d,
  ho: () => c,
  mj: () => h,
  wK: () => u
}), require("./35282.js");
var Chunk688619 = require("./688619.js"),
  i = require.n(Chunk688619);

function o(e) {
  return 1 === e.length ? "0".concat(e) : e
}

function a(e) {
  return i()(e).num()
}

function s(e) {
  if (e <= 0xffffff) {
    let t = e >> 16 & 255,
      n = e >> 8 & 255,
      r = 255 & e;
    return "#".concat(o(t.toString(16))).concat(o(n.toString(16))).concat(o(r.toString(16)))
  } {
    let t = e >> 24 & 255,
      n = e >> 16 & 255,
      r = e >> 8 & 255;
    return "#".concat(o(t.toString(16))).concat(o(n.toString(16))).concat(o(r.toString(16)))
  }
}

function l(e) {
  let t = e >> 16 & 255,
    n = e >> 8 & 255,
    r = 255 & e,
    i = Math.min(t /= 255, n /= 255, r /= 255),
    o = Math.max(t, n, r),
    a = o - i,
    s = 0,
    l = 0,
    c = 0;
  return (s = Math.round(60 * (s = 0 === a ? 0 : o === t ? (n - r) / a % 6 : o === n ? (r - t) / a + 2 : (t - n) / a + 4))) < 0 && (s += 360), c = (o + i) / 2, {
    h: s,
    s: +(l = 0 === a ? 0 : a / (1 - Math.abs(2 * c - 1))).toFixed(3),
    l: +c.toFixed(3)
  }
}

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 1,
    {
      h: i,
      s: o,
      l: a
    } = l(e),
    s = +(100 * o).toFixed(1),
    c = +(100 * a).toFixed(1);
  return t ? "hsla(".concat(i, ", calc(var(--saturation-factor, 1) * ").concat(s, "%), ").concat(c, "%, ").concat(r, ")") : null != n ? "hsla(".concat(i, ", ").concat(n * s, "%, ").concat(c, "%, ").concat(r, ")") : "hsla(".concat(i, ", ").concat(s, "%, ").concat(c, "%, ").concat(r, ")")
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
  if (!i().valid(e)) return null;
  let n = i()(e);
  return n.alpha(null != t ? t : n.alpha()).css()
}

function d(e, t) {
  null == t && (t = (e >> 24 & 255) / 255);
  let n = e >> 16 & 255,
    r = e >> 8 & 255,
    i = 255 & e;
  return "rgba(".concat(n, ", ").concat(r, ", ").concat(i, ", ").concat(t, ")")
}

function f(e) {
  return 1 - (.299 * (e >> 16 & 255) + .587 * (e >> 8 & 255) + .114 * (255 & e)) / 255
}

function p(e) {
  return i().valid(e)
}

function _(e) {
  return [e >> 16 & 255, e >> 8 & 255, 255 & e]
}

function m(e, t, n) {
  var r = [e, t, n].map(e => (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4));
  return .2126 * r[0] + .7152 * r[1] + .0722 * r[2]
}

function h(e, t) {
  let n = _(e),
    r = _(t);
  var i = m(n[0], n[1], n[2]),
    o = m(r[0], r[1], r[2]);
  return (Math.max(i, o) + .05) / (Math.min(i, o) + .05)
}