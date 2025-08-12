/** Chunk was on 23746 **/
/** chunk id: 287880, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Ae: () => d,
  Qe: () => h,
  U0: () => p,
  bV: () => u,
  uZ: () => l
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var n, i, s, Chunk943418 = require("./943418.js");
let a = null != (s = null == (n = window) ? true : n.crypto) ? s : null == (i = window) ? true : i.msCrypto,
  c = "Uint8Array" in window,
  l = null != a && "getRandomValues" in a && c,
  d = "PublicKeyCredential" in window && c;

function u() {
  var e;
  return e = a.getRandomValues(new Uint8Array(20)), Chunk943418.encode(module).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
}

function h(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function p(e, t) {
  let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(r), ":").concat(encodeURI(e), "?secret=").concat(h(t), "&issuer=").concat(encodeURIComponent(r))
}