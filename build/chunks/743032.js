/** Chunk was on 38939 **/
/** chunk id: 743032, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk797686 = require("./797686.js");
module.exports = function(t) {
  if (!(t && ("object" == typeof t || "function" == typeof t) && "length" in t && !("setInterval" in t) && "number" != typeof t.nodeType && (Array.isArray(t) || "callee" in t || "item" in t))) return [t];
  if (Array.isArray(t)) return t.slice();
  var e = t.length;
  if ((Array.isArray(t) || "object" != typeof t && "function" != typeof t) && n(false), "number" != typeof e && n(false), 0 === e || e - 1 in t || n(false), "function" == typeof t.callee && n(false), t.hasOwnProperty) try {
    return Array.prototype.slice.call(t)
  } catch (t) {}
  for (var r = Array(e), i = 0; i < e; i++) r[i] = t[i];
  return r
}