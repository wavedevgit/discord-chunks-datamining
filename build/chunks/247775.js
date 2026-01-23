/** Chunk was on web.js **/
/** chunk id: 247775, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.r(exports), require.d(exports, {
  encryptAndStoreTokens: () => w,
  getAnalyticsToken: () => O,
  getToken: () => v,
  hideToken: () => T,
  init: () => b,
  removeAnalyticsToken: () => R,
  removeToken: () => N,
  setAnalyticsToken: () => A,
  setToken: () => I,
  showToken: () => C
}), require("./896048.js");
var Chunk506774 = require("./506774.js"),
  Chunk818348 = require("./818348.js");
let o = "dQw4w9WgXcQ:",
  l = "__analytics__";

function c(e) {
  return [...e].reduce((e, t) => {
    let [n, r] = t;
    return e[n] = r, e
  }, {})
}
let u = null,
  d = window.DiscordNative;
null != d && (u = d.safeStorage);
let f = false,
  p = {},
  _ = {},
  h = false,
  m = false;

function g() {
  if (h) {
    a.w.remove(s.il), a.w.remove(s.zy);
    return
  }
  null != i ? a.w.set(s.il, i) : a.w.remove(s.il), a.w.set(s.zy, _)
}

function E(e) {
  return null == e || 0 === e.length ? {
    decryptedToken: null,
    wasEncrypted: false
  } : (null == u ? true : u.isEncryptionAvailable()) && e.startsWith(o) ? {
    decryptedToken: u.decryptString(e.substring(o.length)),
    wasEncrypted: true
  } : {
    decryptedToken: e,
    wasEncrypted: false
  }
}

function y(e) {
  return (null == u ? true : u.isEncryptionAvailable()) && !e.startsWith(o) ? "".concat(o).concat(u.encryptString(e)) : e
}

function b() {
  if (m) return;
  i = a.w.get(s.il), _ = a.w.get(s.zy) || {};
  let {
    decryptedToken: e,
    wasEncrypted: t
  } = E(i);
  f = t, r = e, p = c(Object.entries(_).map(e => {
    let [t, n] = e, {
      decryptedToken: r,
      wasEncrypted: i
    } = E(n);
    return f = i || f, [t, r]
  }).filter(e => {
    let [t, n] = e;
    return null != n
  })), m = true
}

function O() {
  return v(l)
}

function v(e) {
  return (b(), null != e) ? p[e] : r
}

function A(e) {
  null == e ? N(l) : S(e, l)
}

function I(e, t) {
  null == e ? N(t) : (r = e, S(e, t))
}

function S(e, t) {
  null != t && (p[t] = e), f ? w() : (i = r, _ = p, g())
}

function T() {
  h || (h = true, g())
}

function C() {
  h && (h = false, g())
}

function N(e) {
  let t = r;
  return null != e && (t = p[e], delete p[e], delete _[e]), t === r && (r = null, i = null), g(), null != t
}

function R() {
  return N(l)
}

function w() {
  (null == u ? true : u.isEncryptionAvailable()) ? (null != r && (i = y(r)), _ = c(Object.entries(p).map(e => {
    let [t, n] = e;
    return [t, y(n)]
  })), f = true) : (i = r, _ = p), g()
}