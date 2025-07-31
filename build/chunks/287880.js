/** Chunk was on 23746 **/
"use strict";
r.d(t, {
  Ae: () => d,
  Qe: () => h,
  U0: () => p,
  bV: () => u,
  uZ: () => l
}), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(644351), r(146733), r(704826), r(35282), r(781311);
var n, i, s, o = r(943418);
let a = null != (s = null == (n = window) ? void 0 : n.crypto) ? s : null == (i = window) ? void 0 : i.msCrypto,
  c = "Uint8Array" in window,
  l = null != a && "getRandomValues" in a && c,
  d = "PublicKeyCredential" in window && c;

function u() {
  var e;
  return e = a.getRandomValues(new Uint8Array(20)), o.encode(e).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
}

function h(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function p(e, t) {
  let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(r), ":").concat(encodeURI(e), "?secret=").concat(h(t), "&issuer=").concat(encodeURIComponent(r))
}