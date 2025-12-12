/** Chunk was on web.js **/
/** chunk id: 911668, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A8: () => a,
  Me: () => u,
  N2: () => l,
  PJ: () => c,
  UC: () => d,
  Yn: () => s,
  wp: () => o
});
var Chunk533426 = require("./533426.js"),
  Chunk640475 = require("./640475.js");

function o(e, t, n) {
  return null != t && 0 > e.compare(t) || null != n && e.compare(n) > 0
}

function a(e, t, n, r, i) {
  let o = {};
  for (let e in t) o[e] = Math.floor(t[e] / 2), o[e] > 0 && t[e] % 2 == 0 && o[e]--;
  let a = s(e, t, n).subtract(o);
  return c(e, a, t, n, r, i)
}

function s(e, t, n, i, o) {
  let a = e;
  return t.years ? a = (0, r.em)(e) : t.months ? a = (0, r.Nm)(e) : t.weeks && (a = (0, r.zJ)(e, n)), c(e, a, t, n, i, o)
}

function l(e, t, n, r, i) {
  let o = {
    ...t
  };
  o.days ? o.days-- : o.weeks ? o.weeks-- : o.months ? o.months-- : o.years && o.years--;
  let a = s(e, t, n).subtract(o);
  return c(e, a, t, n, r, i)
}

function c(e, t, n, o, a, c) {
  if (a && e.compare(a) >= 0) {
    let e = (0, r.l7)(t, s((0, i.WG)(a), n, o));
    e && (t = e)
  }
  if (c && 0 >= e.compare(c)) {
    let e = (0, r.Mb)(t, l((0, i.WG)(c), n, o));
    e && (t = e)
  }
  return t
}

function u(e, t, n) {
  if (t) {
    let n = (0, r.l7)(e, (0, i.WG)(t));
    n && (e = n)
  }
  if (n) {
    let t = (0, r.Mb)(e, (0, i.WG)(n));
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