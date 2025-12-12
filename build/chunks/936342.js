/** Chunk was on web.js **/
/** chunk id: 936342, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk815329 = require("./815329.js"),
  Chunk243647 = require("./243647.js"),
  Chunk13863 = require("./13863.js"),
  Chunk699367 = require("./699367.js"),
  Chunk744145 = require("./744145.js"),
  Chunk425194 = require("./425194.js"),
  Chunk883367 = require("./883367.js"),
  Chunk711902 = require("./711902.js"),
  Chunk163567 = require("./163567.js"),
  Chunk414235 = require("./414235.js"),
  Chunk71256 = require("./71256.js"),
  Chunk951575 = require("./951575.js");
module.exports = function(e, t, n, m, h) {
  var g, E, b = p(e);
  if (true !== e && !_(e)) throw new r("Assertion failed: O must be undefined or an Object");
  if (!d(t)) throw new r("Assertion failed: P must be a Property Key");
  if ("boolean" != typeof n) throw new r("Assertion failed: extensible must be a Boolean");
  if (!a(m)) throw new r("Assertion failed: Desc must be a Property Descriptor");
  if (true !== h && !a(h)) throw new r("Assertion failed: current must be a Property Descriptor, or undefined");
  if (true === h) return !!n && ("Undefined" === b || (l(m) ? i(c, f, s, e, t, m) : i(c, f, s, e, t, {
    "[[Configurable]]": !!m["[[Configurable]]"],
    "[[Enumerable]]": !!m["[[Enumerable]]"],
    "[[Value]]": m["[[Value]]"],
    "[[Writable]]": !!m["[[Writable]]"]
  })));
  if (!o({
      IsAccessorDescriptor: l,
      IsDataDescriptor: c
    }, h)) throw new r("`current`, when present, must be a fully populated and valid Property Descriptor");
  if (!h["[[Configurable]]"]) {
    if ("[[Configurable]]" in m && m["[[Configurable]]"] || "[[Enumerable]]" in m && !f(m["[[Enumerable]]"], h["[[Enumerable]]"]) || !u(m) && !f(l(m), l(h))) returnfalse;
    if (l(h)) {
      if ("[[Get]]" in m && !f(m["[[Get]]"], h["[[Get]]"]) || "[[Set]]" in m && !f(m["[[Set]]"], h["[[Set]]"])) returnfalse
    } else if (!h["[[Writable]]"] && ("[[Writable]]" in m && m["[[Writable]]"] || "[[Value]]" in m && !f(m["[[Value]]"], h["[[Value]]"]))) returnfalse
  }
  return "Undefined" === b || (c(h) && l(m) ? i(c, f, s, e, t, {
    "[[Configurable]]": !!(g = ("[[Configurable]]" in m ? m : h)["[[Configurable]]"]),
    "[[Enumerable]]": !!(E = ("[[Enumerable]]" in m ? m : h)["[[Enumerable]]"]),
    "[[Get]]": ("[[Get]]" in m ? m : h)["[[Get]]"],
    "[[Set]]": ("[[Set]]" in m ? m : h)["[[Set]]"]
  }) : l(h) && c(m) ? i(c, f, s, e, t, {
    "[[Configurable]]": !!(g = ("[[Configurable]]" in m ? m : h)["[[Configurable]]"]),
    "[[Enumerable]]": !!(E = ("[[Enumerable]]" in m ? m : h)["[[Enumerable]]"]),
    "[[Value]]": ("[[Value]]" in m ? m : h)["[[Value]]"],
    "[[Writable]]": !!("[[Writable]]" in m ? m : h)["[[Writable]]"]
  }) : i(c, f, s, e, t, m))
}