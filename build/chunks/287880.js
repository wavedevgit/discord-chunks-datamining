/** Chunk was on web.js **/
/** chunk id: 287880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ae: () => u,
  Qe: () => m,
  U0: () => h,
  bV: () => _,
  uZ: () => c
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var r, i, o, Chunk943418 = require("./943418.js");
let s = null != (o = null == (r = window) ? true : r.crypto) ? o : null == (i = window) ? true : i.msCrypto,
  l = "Uint8Array" in window,
  c = null != s && "getRandomValues" in s && l,
  u = "PublicKeyCredential" in window && l,
  d = 20;

function f(e) {
  return s.getRandomValues(new Uint8Array(e))
}

function p(e) {
  return a.encode(e).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
}

function _() {
  return p(f(d))
}

function m(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function h(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(n), ":").concat(encodeURI(e), "?secret=").concat(m(t), "&issuer=").concat(encodeURIComponent(n))
}