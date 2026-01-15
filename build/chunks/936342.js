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
module.exports = function(e, t, n, h, m) {
  var g, E, b = p(e);
  if (true !== e && !_(e)) throw new r("Assertion failed: O must be undefined or an Object");
  if (!d(t)) throw new r("Assertion failed: P must be a Property Key");
  if ("boolean" != typeof n) throw new r("Assertion failed: extensible must be a Boolean");
  if (!o(h)) throw new r("Assertion failed: Desc must be a Property Descriptor");
  if (true !== m && !o(m)) throw new r("Assertion failed: current must be a Property Descriptor, or undefined");
  if (true === m) return !!n && ("Undefined" === b || (l(h) ? i(c, f, s, e, t, h) : i(c, f, s, e, t, {
    "[[Configurable]]": !!h["[[Configurable]]"],
    "[[Enumerable]]": !!h["[[Enumerable]]"],
    "[[Value]]": h["[[Value]]"],
    "[[Writable]]": !!h["[[Writable]]"]
  })));
  if (!a({
      IsAccessorDescriptor: l,
      IsDataDescriptor: c
    }, m)) throw new r("`current`, when present, must be a fully populated and valid Property Descriptor");
  if (!m["[[Configurable]]"]) {
    if ("[[Configurable]]" in h && h["[[Configurable]]"] || "[[Enumerable]]" in h && !f(h["[[Enumerable]]"], m["[[Enumerable]]"]) || !u(h) && !f(l(h), l(m))) returnfalse;
    if (l(m)) {
      if ("[[Get]]" in h && !f(h["[[Get]]"], m["[[Get]]"]) || "[[Set]]" in h && !f(h["[[Set]]"], m["[[Set]]"])) returnfalse
    } else if (!m["[[Writable]]"] && ("[[Writable]]" in h && h["[[Writable]]"] || "[[Value]]" in h && !f(h["[[Value]]"], m["[[Value]]"]))) returnfalse
  }
  return "Undefined" === b || (c(m) && l(h) ? i(c, f, s, e, t, {
    "[[Configurable]]": !!(g = ("[[Configurable]]" in h ? h : m)["[[Configurable]]"]),
    "[[Enumerable]]": !!(E = ("[[Enumerable]]" in h ? h : m)["[[Enumerable]]"]),
    "[[Get]]": ("[[Get]]" in h ? h : m)["[[Get]]"],
    "[[Set]]": ("[[Set]]" in h ? h : m)["[[Set]]"]
  }) : l(m) && c(h) ? i(c, f, s, e, t, {
    "[[Configurable]]": !!(g = ("[[Configurable]]" in h ? h : m)["[[Configurable]]"]),
    "[[Enumerable]]": !!(E = ("[[Enumerable]]" in h ? h : m)["[[Enumerable]]"]),
    "[[Value]]": ("[[Value]]" in h ? h : m)["[[Value]]"],
    "[[Writable]]": !!("[[Writable]]" in h ? h : m)["[[Writable]]"]
  }) : i(c, f, s, e, t, h))
}