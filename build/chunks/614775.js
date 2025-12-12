/** Chunk was on web.js **/
/** chunk id: 614775, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk566817 = require("./566817.js"),
  Chunk429675 = require("./429675.js"),
  Chunk815329 = require("./815329.js"),
  Chunk699367 = require("./699367.js"),
  Chunk425194 = require("./425194.js"),
  Chunk752743 = require("./752743.js"),
  Chunk163567 = require("./163567.js"),
  Chunk511389 = require("./511389.js"),
  Chunk414235 = require("./414235.js"),
  Chunk936342 = require("./936342.js"),
  Chunk951575 = require("./951575.js");
module.exports = function(e, t, n) {
  if (!p(e)) throw new o("Assertion failed: O must be an Object");
  if (!c(t)) throw new o("Assertion failed: P must be a Property Key");
  if (!a(n)) throw new o("Assertion failed: Desc must be a Property Descriptor");
  if (!r) {
    if (s(n)) throw new i("This environment does not support accessor property descriptors.");
    var _ = !(t in e) && n["[[Writable]]"] && n["[[Enumerable]]"] && n["[[Configurable]]"] && "[[Value]]" in n,
      m = t in e && (!("[[Configurable]]" in n) || n["[[Configurable]]"]) && (!("[[Enumerable]]" in n) || n["[[Enumerable]]"]) && (!("[[Writable]]" in n) || n["[[Writable]]"]) && "[[Value]]" in n;
    if (_ || m) return e[t] = n["[[Value]]"], d(e[t], n["[[Value]]"]);
    throw new i("This environment does not support defining non-writable, non-enumerable, or non-configurable properties")
  }
  var h = r(e, t),
    g = h && u(h),
    E = l(e);
  return f(e, t, E, n, g)
}