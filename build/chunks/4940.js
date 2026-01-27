/** Chunk was on web.js **/
/** chunk id: 4940, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk257943 = require("./257943.js"),
  Chunk804272 = require("./804272.js"),
  Chunk516549 = require("./516549.js"),
  Chunk101968 = require("./101968.js"),
  Chunk706598 = require("./706598.js"),
  l = TypeError,
  c = Object.defineProperty,
  u = Object.getOwnPropertyDescriptor,
  d = "enumerable",
  f = "configurable",
  p = "writable";
exports.f = Chunk257943 ? Chunk516549 ? function(e, t, n) {
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