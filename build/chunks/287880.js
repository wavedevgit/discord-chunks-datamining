/** Chunk was on web.js **/
/** chunk id: 287880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ae: () => m,
  Qe: () => y,
  SN: () => v,
  U0: () => O,
  bV: () => b,
  uZ: () => _
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var r, i, a, Chunk943418 = require("./943418.js"),
  Chunk960048 = require("./960048.js");

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
let f = null != (a = null == (r = window) ? true : r.crypto) ? a : null == (i = window) ? true : i.msCrypto,
  p = "Uint8Array" in window,
  _ = null != f && "getRandomValues" in f && p,
  m = "PublicKeyCredential" in window && p,
  h = 20;

function g(e) {
  return f.getRandomValues(new Uint8Array(e))
}

function E(e) {
  return o.encode(e).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
}

function b() {
  return E(g(h))
}

function y(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function O(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(n), ":").concat(encodeURI(e), "?secret=").concat(y(t), "&issuer=").concat(encodeURIComponent(n))
}

function v(e, t) {
  s.Z.captureException(e, d(c({}, t), {
    tags: d(c({}, null == t ? true : t.tags), {
      app_context: "webauthn"
    })
  }))
}