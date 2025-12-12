/** Chunk was on web.js **/
/** chunk id: 511389, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk706165 = require("./706165.js"),
  Chunk815329 = require("./815329.js"),
  Chunk983018 = require("./983018.js"),
  Chunk907614 = require("./907614.js"),
  Chunk951575 = require("./951575.js");
module.exports = function(e) {
  if (!s(e)) throw new i("ToPropertyDescriptor requires an object");
  var t = {};
  if (r(e, "enumerable") && (t["[[Enumerable]]"] = a(e.enumerable)), r(e, "configurable") && (t["[[Configurable]]"] = a(e.configurable)), r(e, "value") && (t["[[Value]]"] = e.value), r(e, "writable") && (t["[[Writable]]"] = a(e.writable)), r(e, "get")) {
    var n = e.get;
    if (true !== n && !o(n)) throw new i("getter must be a function");
    t["[[Get]]"] = n
  }
  if (r(e, "set")) {
    var l = e.set;
    if (true !== l && !o(l)) throw new i("setter must be a function");
    t["[[Set]]"] = l
  }
  if ((r(t, "[[Get]]") || r(t, "[[Set]]")) && (r(t, "[[Value]]") || r(t, "[[Writable]]"))) throw new i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
  return t
}