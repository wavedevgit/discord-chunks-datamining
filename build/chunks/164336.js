/** Chunk was on 94678 **/
/** chunk id: 164336, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk414123 = require("./414123.js"),
  Chunk890084 = require("./890084.js"),
  Chunk4505 = require("./4505.js"),
  Chunk155084 = require("./155084.js"),
  Chunk176986 = require("./176986.js"),
  c = TypeError,
  a = Object.defineProperty,
  f = Object.getOwnPropertyDescriptor,
  p = "enumerable",
  l = "configurable",
  v = "writable";
exports.f = Chunk414123 ? Chunk4505 ? function(t, r, e) {
  if (i(t), r = u(r), i(e), "function" == typeof t && "prototype" === r && "value" in e && v in e && !e[v]) {
    var n = f(t, r);
    n && n[v] && (t[r] = e.value, e = {
      configurable: l in e ? e[l] : n[l],
      enumerable: p in e ? e[p] : n[p],
      writable: false
    })
  }
  return a(t, r, e)
} : a : function(t, r, e) {
  if (i(t), r = u(r), i(e), o) try {
    return a(t, r, e)
  } catch (t) {}
  if ("get" in e || "set" in e) throw new c("Accessors not supported");
  return "value" in e && (t[r] = e.value), t
}