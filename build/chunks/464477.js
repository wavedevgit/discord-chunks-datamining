/** Chunk was on 86142 **/
/** chunk id: 464477, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  K7: () => h,
  Os: () => m,
  V3: () => _,
  cC: () => f,
  d4: () => p,
  tn: () => g
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js"), require("./747238.js"), require("./812715.js"), require("./733351.js");
var r, i, s, Chunk704101 = require("./704101.js"),
  Chunk728458 = require("./728458.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = null != (r = null == (i = window) ? true : i.crypto) ? r : null == (s = window) ? true : s.msCrypto,
  d = "Uint8Array" in window,
  h = null != u && "getRandomValues" in u && d,
  p = "PublicKeyCredential" in window && d;

function g() {
  var e;
  return e = u.getRandomValues(new Uint8Array(20)), l.encode(e).toString("utf8").replace(/=/g, "").toLowerCase().replace(/(\w{4})/g, "$1 ").trim()
}

function f(e) {
  return e.replace(/[\s._-]+/g, "").toUpperCase()
}

function _(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "Discord";
  return "otpauth://totp/".concat(encodeURI(n), ":").concat(encodeURI(e), "?secret=").concat(f(t), "&issuer=").concat(encodeURIComponent(n))
}

function m(e, t) {
  a.A.captureException(e, c(o({}, t), {
    tags: c(o({}, null == t ? true : t.tags), {
      app_context: "webauthn"
    })
  }))
}