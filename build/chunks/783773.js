/** Chunk was on web.js **/
/** chunk id: 783773, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk326948 = require("./326948.js"),
  Chunk267768 = require("./267768.js");
try {
  r = [].__proto__ === Array.prototype
} catch (e) {
  if (!module || "object" != typeof module || !("code" in module) || "ERR_PROTO_ACCESS" !== module.code) throw module
}
var o = !!r && Chunk267768 && Chunk267768(Object.prototype, "__proto__"),
  s = Object,
  l = s.getPrototypeOf;
module.exports = o && "function" == typeof o.get ? Chunk326948([o.get]) : "function" == typeof l && function(e) {
  return l(null == e ? e : s(e))
}