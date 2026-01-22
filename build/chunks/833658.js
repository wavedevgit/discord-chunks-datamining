/** Chunk was on web.js **/
/** chunk id: 833658, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk267768 = require("./267768.js"),
  Chunk870064 = require("./870064.js"),
  Chunk741623 = require("./741623.js"),
  Chunk14665 = require("./14665.js"),
  Chunk899204 = require("./899204.js"),
  Chunk904283 = require("./904283.js"),
  Chunk732937 = require("./732937.js"),
  Chunk228047 = require("./228047.js"),
  Chunk94535 = require("./94535.js"),
  Chunk444139 = require("./444139.js"),
  Chunk227106 = require("./227106.js");
module.exports = function(e, t, n) {
  if (!p(e)) throw new a("Assertion failed: O must be an Object");
  if (!c(t)) throw new a("Assertion failed: P must be a Property Key");
  if (!s(n)) throw new a("Assertion failed: Desc must be a Property Descriptor");
  if (!r) {
    if (o(n)) throw new i("This environment does not support accessor property descriptors.");
    var _ = !(t in e) && n["[[Writable]]"] && n["[[Enumerable]]"] && n["[[Configurable]]"] && "[[Value]]" in n,
      h = t in e && (!("[[Configurable]]" in n) || n["[[Configurable]]"]) && (!("[[Enumerable]]" in n) || n["[[Enumerable]]"]) && (!("[[Writable]]" in n) || n["[[Writable]]"]) && "[[Value]]" in n;
    if (_ || h) return e[t] = n["[[Value]]"], d(e[t], n["[[Value]]"]);
    throw new i("This environment does not support defining non-writable, non-enumerable, or non-configurable properties")
  }
  var m = r(e, t),
    g = m && u(m),
    E = l(e);
  return f(e, t, E, n, g)
}