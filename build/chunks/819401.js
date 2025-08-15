/** Chunk was on web.js **/
/** chunk id: 819401, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk992555 = require("./992555.js"),
  Chunk566817 = require("./566817.js");
try {
  r = [].__proto__ === Array.prototype
} catch (e) {
  if (!module || "object" != typeof module || !("code" in module) || "ERR_PROTO_ACCESS" !== module.code) throw module
}
var o = !!r && Chunk566817 && Chunk566817(Object.prototype, "__proto__"),
  s = Object,
  l = s.getPrototypeOf;
module.exports = o && "function" == typeof o.get ? Chunk992555([o.get]) : "function" == typeof l && function(e) {
  return l(null == e ? e : s(e))
}