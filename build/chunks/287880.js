/** Chunk was on 66181 **/
/** chunk id: 287880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ae: () => d,
  Qe: () => m,
  U0: () => p,
  bV: () => u,
  uZ: () => c
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./704826.js"), require("./35282.js"), require("./781311.js");
var i, r, s, Chunk943418 = require("./943418.js");
let l = null != (s = null == (i = window) ? true : i.crypto) ? s : null == (r = window) ? true : r.msCrypto,
  o = "Uint8Array" in window,
  c = null != l && "getRandomValues" in l && o,
  d = "PublicKeyCredential" in window && o;

function u() {
  var e;
  return e = l.getRandomValues(new Uint8Array(20)), Chunk943418.encode(module).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
}

function m(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function p(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(n), ":").concat(encodeURI(e), "?secret=").concat(m(t), "&issuer=").concat(encodeURIComponent(n))
}