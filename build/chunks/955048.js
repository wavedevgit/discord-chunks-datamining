/** Chunk was on web.js **/
/** chunk id: 955048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CT: () => s,
  Hu: () => o,
  If: () => a,
  Iw: () => c,
  Nf: () => d,
  X8: () => u,
  ZT: () => l
});
var Chunk352404 = require("./352404.js"),
  Chunk376472 = require("./376472.js");

function a(e, t, n) {
  return null != t && 0 > e.compare(t) || null != n && e.compare(n) > 0
}

function o(e, t, n, r, i) {
  let a = {};
  for (let e in t) a[e] = Math.floor(t[e] / 2), a[e] > 0 && t[e] % 2 == 0 && a[e]--;
  let o = s(e, t, n).subtract(a);
  return c(e, o, t, n, r, i)
}

function s(e, t, n, i, a) {
  let o = e;
  return t.years ? o = (0, r.D)(e) : t.months ? o = (0, r.wH)(e) : t.weeks && (o = (0, r.kq)(e, n)), c(e, o, t, n, i, a)
}

function l(e, t, n, r, i) {
  let a = {
    ...t
  };
  a.days ? a.days-- : a.weeks ? a.weeks-- : a.months ? a.months-- : a.years && a.years--;
  let o = s(e, t, n).subtract(a);
  return c(e, o, t, n, r, i)
}

function c(e, t, n, a, o, c) {
  if (o && e.compare(o) >= 0) {
    let e = (0, r.ZI)(t, s((0, i.gw)(o), n, a));
    e && (t = e)
  }
  if (c && 0 >= e.compare(c)) {
    let e = (0, r.Py)(t, l((0, i.gw)(c), n, a));
    e && (t = e)
  }
  return t
}

function u(e, t, n) {
  if (t) {
    let n = (0, r.ZI)(e, (0, i.gw)(t));
    n && (e = n)
  }
  if (n) {
    let t = (0, r.Py)(e, (0, i.gw)(n));
    t && (e = t)
  }
  return e
}

function d(e, t, n) {
  if (!n) return e;
  for (; e.compare(t) >= 0 && n(e);) e = e.subtract({
    days: 1
  });
  return e.compare(t) >= 0 ? e : null
}