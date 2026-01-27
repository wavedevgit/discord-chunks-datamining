/** Chunk was on web.js **/
/** chunk id: 868089, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk326948 = require("./326948.js"),
  Chunk267768 = require("./267768.js"),
  Chunk741623 = require("./741623.js"),
  o = {};
try {
  o.__proto__ = null
} catch (e) {
  if (!module || "object" != typeof module || !("code" in module) || "ERR_PROTO_ACCESS" !== module.code) throw module
}
var s = !("toString" in o),
  l = Chunk267768 && Chunk267768(Object.prototype, "__proto__");
module.exports = s && (!!l && "function" == typeof l.set && Chunk326948([l.set]) || function(e, t) {
  if (null == e) throw new a("set Object.prototype.__proto__ called on null or undefined");
  return e.__proto__ = t, t
})