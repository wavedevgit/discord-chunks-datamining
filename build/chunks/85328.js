/** Chunk was on 50448 **/
/** chunk id: 85328, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk181794 = require("./181794.js"),
  Chunk591448 = require("./591448.js"),
  Chunk177647 = require("./177647.js"),
  Chunk921413 = require("./921413.js"),
  Chunk431815 = require("./431815.js"),
  c = TypeError,
  f = Object.defineProperty,
  a = Object.getOwnPropertyDescriptor,
  p = "enumerable",
  l = "configurable",
  v = "writable";
exports.f = Chunk181794 ? Chunk177647 ? function(t, r, n) {
  if (u(t), r = s(r), u(n), "function" == typeof t && "prototype" === r && "value" in n && v in n && !n[v]) {
    var e = a(t, r);
    e && e[v] && (t[r] = n.value, n = {
      configurable: l in n ? n[l] : e[l],
      enumerable: p in n ? n[p] : e[p],
      writable: false
    })
  }
  return f(t, r, n)
} : f : function(t, r, n) {
  if (u(t), r = s(r), u(n), o) try {
    return f(t, r, n)
  } catch (t) {}
  if ("get" in n || "set" in n) throw new c("Accessors not supported");
  return "value" in n && (t[r] = n.value), t
}