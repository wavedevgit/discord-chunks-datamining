/** Chunk was on web.js **/
/** chunk id: 464477, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K7: () => _,
  Os: () => v,
  V3: () => O,
  cC: () => b,
  d4: () => h,
  tn: () => y
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./747238.js"), require("./812715.js"), require("./733351.js");
var r, i, a, Chunk704101 = require("./704101.js"),
  Chunk728458 = require("./728458.js");

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
let f = null != (r = null == (i = window) ? true : i.crypto) ? r : null == (a = window) ? true : a.msCrypto,
  p = "Uint8Array" in window,
  _ = null != f && "getRandomValues" in f && p,
  h = "PublicKeyCredential" in window && p,
  m = 20;

function g(e) {
  return f.getRandomValues(new Uint8Array(e))
}

function E(e) {
  return s.encode(e).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
}

function y() {
  return E(g(m))
}

function b(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function O(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(n), ":").concat(encodeURI(e), "?secret=").concat(b(t), "&issuer=").concat(encodeURIComponent(n))
}

function v(e, t) {
  o.A.captureException(e, d(c({}, t), {
    tags: d(c({}, null == t ? true : t.tags), {
      app_context: "webauthn"
    })
  }))
}