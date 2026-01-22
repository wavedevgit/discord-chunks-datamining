/** Chunk was on web.js **/
/** chunk id: 247775, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.r(exports), require.d(exports, {
  encryptAndStoreTokens: () => w,
  getAnalyticsToken: () => O,
  getToken: () => A,
  hideToken: () => T,
  init: () => y,
  removeAnalyticsToken: () => R,
  removeToken: () => N,
  setAnalyticsToken: () => v,
  setToken: () => S,
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

function b(e) {
  return (null == u ? true : u.isEncryptionAvailable()) && !e.startsWith(o) ? "".concat(o).concat(u.encryptString(e)) : e
}

function y() {
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
  return A(l)
}

function A(e) {
  return (y(), null != e) ? p[e] : r
}

function v(e) {
  null == e ? N(l) : I(e, l)
}

function S(e, t) {
  null == e ? N(t) : (r = e, I(e, t))
}

function I(e, t) {
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
  (null == u ? true : u.isEncryptionAvailable()) ? (null != r && (i = b(r)), _ = c(Object.entries(p).map(e => {
    let [t, n] = e;
    return [t, b(n)]
  })), f = true) : (i = r, _ = p), g()
}