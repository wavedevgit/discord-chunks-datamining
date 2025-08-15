/** Chunk was on web.js **/
/** chunk id: 464688, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk992555 = require("./992555.js"),
  Chunk566817 = require("./566817.js"),
  Chunk815329 = require("./815329.js"),
  o = {};
try {
  o.__proto__ = null
} catch (e) {
  if (!module || "object" != typeof module || !("code" in module) || "ERR_PROTO_ACCESS" !== module.code) throw module
}
var s = !("toString" in o),
  l = Chunk566817 && Chunk566817(Object.prototype, "__proto__");
module.exports = s && (!!l && "function" == typeof l.set && Chunk992555([l.set]) || function(e, t) {
  if (null == e) throw new a("set Object.prototype.__proto__ called on null or undefined");
  return e.__proto__ = t, t
})