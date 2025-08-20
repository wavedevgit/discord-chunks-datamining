/** Chunk was on web.js **/
/** chunk id: 287880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ae: () => u,
  Qe: () => h,
  U0: () => m,
  bV: () => p,
  uZ: () => c
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var r, i, a, Chunk943418 = require("./943418.js");
let s = null != (a = null == (r = window) ? true : r.crypto) ? a : null == (i = window) ? true : i.msCrypto,
  l = "Uint8Array" in window,
  c = null != s && "getRandomValues" in s && l,
  u = "PublicKeyCredential" in window && l,
  d = 20;

function f(e) {
  return s.getRandomValues(new Uint8Array(e))
}

function _(e) {
  return o.encode(e).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
}

function p() {
  return _(f(d))
}

function h(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function m(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(n), ":").concat(encodeURI(e), "?secret=").concat(h(t), "&issuer=").concat(encodeURIComponent(n))
}