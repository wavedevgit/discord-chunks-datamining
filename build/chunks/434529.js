/** Chunk was on web.js **/
/** chunk id: 434529, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return Math.max(Math.min(e, 1), 0)
}

function i(e, t) {
  let {
    top: n,
    bottom: i,
    left: o,
    right: a
  } = e;
  return {
    top: null != n ? Math.floor(r(n) * t.height) : true,
    left: null != o ? Math.floor(r(o) * t.width) : true,
    bottom: null != i ? Math.floor(r(i) * t.height) : true,
    right: null != a ? Math.floor(r(a) * t.width) : true
  }
}

function o(e, t) {
  let {
    width: n,
    height: i,
    fixed: o = false
  } = e;
  return o ? {
    width: n,
    height: i,
    fixed: o
  } : {
    width: "auto" === n ? n : Math.floor(r(n) * t.width),
    height: "auto" === i ? i : Math.floor(r(i) * t.height),
    fixed: o
  }
}

function a(e, t) {
  let {
    top: n,
    bottom: i,
    left: o,
    right: a
  } = e;
  return {
    top: null != n ? r(n / t.height) : true,
    left: null != o ? r(o / t.width) : true,
    bottom: null != i ? r(i / t.height) : true,
    right: null != a ? r(a / t.width) : true
  }
}

function s(e, t) {
  let {
    width: n,
    height: r,
    fixed: i
  } = e;
  return i ? {
    width: n,
    height: r,
    fixed: i
  } : {
    width: "auto" === n ? n : n / t.width,
    height: "auto" === r ? r : r / t.height,
    fixed: i
  }
}

function l(e, t, n, r, i) {
  let {
    top: o,
    bottom: a,
    left: s,
    right: l
  } = e;
  if (null == o && null == a ? (o = 0, a = n - i) : null == o && null != a ? o = n - (a + i) : null != o && (a = n - (o + i)), null == s && null == l ? (s = 0, l = t - r) : null == s && null != l ? s = t - (l + r) : null == l && null != s && (l = t - (s + r)), null == o || null == a || null == s || null == l) throw Error("Logically this can never happen based on our if/else statements");
  return {
    top: o,
    left: s,
    bottom: a,
    right: l
  }
}

function c(e) {
  let {
    top: t,
    left: n,
    bottom: r,
    right: i
  } = e;
  return 0 === t || t <= r ? r = null : t = null, 0 === n || n <= i ? i = null : n = null, {
    top: t,
    left: n,
    bottom: r,
    right: i
  }
}

function u(e) {
  let {
    top: t,
    left: n,
    bottom: r,
    right: i
  } = e;
  return r < 0 && (t += r, r = 0), t < 0 && (r += t, t = 0), i < 0 && (n += i, i = 0), n < 0 && (i += n, n = 0), {
    top: t,
    left: n,
    bottom: r,
    right: i
  }
}

function d(e, t, n) {
  e = i(e, n);
  let {
    width: r,
    height: a
  } = o(t, n);
  return r = "string" == typeof r ? 0 : r, a = "string" == typeof a ? 0 : a, l(e, n.width, n.height, r, a)
}

function f(e, t, n) {
  let {
    top: r,
    left: i
  } = e, {
    x: o,
    y: d
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {
    x: 0,
    y: 0
  }, {
    width: f,
    height: p
  } = t;
  return [a(c(u(l({
    top: r + d,
    left: i + o,
    bottom: true,
    right: true
  }, n.width, n.height, "number" == typeof f ? f : 0, "number" == typeof p ? p : 0))), n), s(t, n)]
}

function p(e, t, n) {
  let {
    top: r,
    right: i
  } = e, {
    x: o,
    y: d
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {
    x: 0,
    y: 0
  }, {
    width: f,
    height: p
  } = t;
  return [a(c(u(l({
    top: r + d,
    left: true,
    bottom: true,
    right: i - o
  }, n.width, n.height, "number" == typeof f ? f : 0, "number" == typeof p ? p : 0))), n), s(t, n)]
}

function _(e, t) {
  let n = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  return null != t.top && (n.top = e.top), null != t.bottom && (n.bottom = e.bottom), null != t.left && (n.left = e.left), null != t.right && (n.right = e.right), n
}
require.d(exports, {
  BL: () => _,
  KR: () => i,
  Ox: () => s,
  PY: () => l,
  R: () => c,
  jL: () => a,
  o4: () => f,
  ou: () => u,
  uq: () => p,
  vS: () => d,
  w_: () => o
}), require("./415506.js")