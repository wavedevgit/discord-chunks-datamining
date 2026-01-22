/** Chunk was on web.js **/
/** chunk id: 444139, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk741623 = require("./741623.js"),
  Chunk798493 = require("./798493.js"),
  Chunk630307 = require("./630307.js"),
  Chunk14665 = require("./14665.js"),
  Chunk44650 = require("./44650.js"),
  Chunk899204 = require("./899204.js"),
  Chunk159367 = require("./159367.js"),
  Chunk421580 = require("./421580.js"),
  Chunk732937 = require("./732937.js"),
  Chunk94535 = require("./94535.js"),
  Chunk203894 = require("./203894.js"),
  Chunk227106 = require("./227106.js");
module.exports = function(e, t, n, h, m) {
  var g, E, b = p(e);
  if (true !== e && !_(e)) throw new r("Assertion failed: O must be undefined or an Object");
  if (!d(t)) throw new r("Assertion failed: P must be a Property Key");
  if ("boolean" != typeof n) throw new r("Assertion failed: extensible must be a Boolean");
  if (!s(h)) throw new r("Assertion failed: Desc must be a Property Descriptor");
  if (true !== m && !s(m)) throw new r("Assertion failed: current must be a Property Descriptor, or undefined");
  if (true === m) return !!n && ("Undefined" === b || (l(h) ? i(c, f, o, e, t, h) : i(c, f, o, e, t, {
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
  return "Undefined" === b || (c(m) && l(h) ? i(c, f, o, e, t, {
    "[[Configurable]]": !!(g = ("[[Configurable]]" in h ? h : m)["[[Configurable]]"]),
    "[[Enumerable]]": !!(E = ("[[Enumerable]]" in h ? h : m)["[[Enumerable]]"]),
    "[[Get]]": ("[[Get]]" in h ? h : m)["[[Get]]"],
    "[[Set]]": ("[[Set]]" in h ? h : m)["[[Set]]"]
  }) : l(m) && c(h) ? i(c, f, o, e, t, {
    "[[Configurable]]": !!(g = ("[[Configurable]]" in h ? h : m)["[[Configurable]]"]),
    "[[Enumerable]]": !!(E = ("[[Enumerable]]" in h ? h : m)["[[Enumerable]]"]),
    "[[Value]]": ("[[Value]]" in h ? h : m)["[[Value]]"],
    "[[Writable]]": !!("[[Writable]]" in h ? h : m)["[[Writable]]"]
  }) : i(c, f, o, e, t, h))
}