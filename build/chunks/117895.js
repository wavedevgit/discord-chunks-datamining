/** Chunk was on web.js **/
/** chunk id: 117895, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk507604 = require("./507604.js"),
  Chunk64637 = require("./64637.js"),
  Chunk282108 = require("./282108.js"),
  Chunk179122 = require("./179122.js"),
  Chunk459316 = require("./459316.js"),
  l = TypeError,
  c = Object.defineProperty,
  u = Object.getOwnPropertyDescriptor,
  d = "enumerable",
  f = "configurable",
  p = "writable";
exports.f = Chunk507604 ? Chunk282108 ? function(e, t, n) {
  if (o(e), t = s(t), o(n), "function" == typeof e && "prototype" === t && "value" in n && p in n && !n[p]) {
    var r = u(e, t);
    r && r[p] && (e[t] = n.value, n = {
      configurable: f in n ? n[f] : r[f],
      enumerable: d in n ? n[d] : r[d],
      writable: false
    })
  }
  return c(e, t, n)
} : c : function(e, t, n) {
  if (o(e), t = s(t), o(n), i) try {
    return c(e, t, n)
  } catch (e) {}
  if ("get" in n || "set" in n) throw new l("Accessors not supported");
  return "value" in n && (e[t] = n.value), e
}