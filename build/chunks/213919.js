/** Chunk was on web.js **/
/** chunk id: 213919, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.r(exports), require.d(exports, {
  encryptAndStoreTokens: () => R,
  getAnalyticsToken: () => O,
  getToken: () => v,
  hideToken: () => C,
  init: () => y,
  removeAnalyticsToken: () => P,
  removeToken: () => N,
  setAnalyticsToken: () => S,
  setToken: () => I,
  showToken: () => A
}), require("./388685.js");
var Chunk433517 = require("./433517.js"),
  Chunk231338 = require("./231338.js");
let s = "dQw4w9WgXcQ:",
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
  m = false,
  h = false;

function g() {
  if (m) {
    Chunk433517.K.remove(Chunk231338.B1), Chunk433517.K.remove(Chunk231338.XM);
    return
  }
  null != i ? Chunk433517.K.set(Chunk231338.B1, i) : Chunk433517.K.remove(Chunk231338.B1), Chunk433517.K.set(Chunk231338.XM, _)
}

function E(e) {
  return null == e || 0 === e.length ? {
    decryptedToken: null,
    wasEncrypted: false
  } : (null == u ? true : u.isEncryptionAvailable()) && e.startsWith(s) ? {
    decryptedToken: u.decryptString(e.substring(s.length)),
    wasEncrypted: true
  } : {
    decryptedToken: e,
    wasEncrypted: false
  }
}

function b(e) {
  return (null == u ? true : u.isEncryptionAvailable()) && !e.startsWith(s) ? "".concat(s).concat(u.encryptString(e)) : e
}

function y() {
  if (h) return;
  i = Chunk433517.K.get(Chunk231338.B1), _ = Chunk433517.K.get(Chunk231338.XM) || {};
  let {
    decryptedToken: e,
    wasEncrypted: t
  } = E(i);
  f = exports, r = module, p = c(Object.entries(_).map(e => {
    let [t, n] = e, {
      decryptedToken: r,
      wasEncrypted: i
    } = E(n);
    return f = i || f, [t, r]
  }).filter(e => {
    let [t, n] = e;
    return null != n
  })), h = true
}

function O() {
  return v(l)
}

function v(e) {
  return (y(), null != e) ? p[e] : r
}

function S(e) {
  if (null == e) return void N(l);
  T(e, l)
}

function I(e, t) {
  if (null == e) return void N(t);
  r = e, T(e, t)
}

function T(e, t) {
  null != t && (p[t] = e), f ? R() : (i = r, _ = p, g())
}

function C() {
  m || (m = true, g())
}

function A() {
  m && (m = false, g())
}

function N(e) {
  let t = r;
  return null != e && (t = p[e], delete p[e], delete _[e]), t === r && (r = null, i = null), g(), null != t
}

function P() {
  return N(l)
}

function R() {
  (null == u ? true : u.isEncryptionAvailable()) ? (null != r && (i = b(r)), _ = c(Object.entries(p).map(e => {
    let [t, n] = e;
    return [t, b(n)]
  })), f = true) : (i = r, _ = p), g()
}