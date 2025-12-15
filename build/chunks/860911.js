/** Chunk was on web.js **/
/** chunk id: 860911, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : "";
  return a("login", e, t, n)
}

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
    n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : "",
    i = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : "",
    a = null != t ? "?redirect_to=".concat(encodeURIComponent(t)) : "";
  return 0 !== r.length && (r = 0 === a.length ? "?".concat(r) : "&".concat(r)), "".concat(n ? i : "", "/").concat(e).concat(a).concat(r)
}
require.d(exports, {
  Ft: () => l,
  Ui: () => i,
  Zn: () => o
}), require("./35282.js"), require("./388685.js");
class o {
  toString() {
    return this.value
  }
  constructor(e) {
    r(this, "value", true), this.value = e
  }
}

function s(e, t) {
  return e.map(e => null == e ? e : e instanceof o ? e.toString() : null == t ? encodeURIComponent(e) : String(e).split("").map(e => null != t && t.includes(e) ? e : encodeURIComponent(e)).join(""))
}

function l(e, t) {
  let n = {};
  for (let r of Object.keys(e)) {
    let i = e[r];
    if ("function" != typeof i) {
      n[r] = i;
      continue
    }
    n[r] = function() {
      for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
      return i(...s(n, t))
    }
  }
  return n
}