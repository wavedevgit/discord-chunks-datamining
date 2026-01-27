/** Chunk was on web.js **/
/** chunk id: 228047, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk353841 = require("./353841.js"),
  Chunk741623 = require("./741623.js"),
  Chunk547210 = require("./547210.js"),
  Chunk33831 = require("./33831.js"),
  Chunk227106 = require("./227106.js");
module.exports = function(e) {
  if (!s(e)) throw new i("ToPropertyDescriptor requires an object");
  var t = {};
  if (r(e, "enumerable") && (t["[[Enumerable]]"] = o(e.enumerable)), r(e, "configurable") && (t["[[Configurable]]"] = o(e.configurable)), r(e, "value") && (t["[[Value]]"] = e.value), r(e, "writable") && (t["[[Writable]]"] = o(e.writable)), r(e, "get")) {
    var n = e.get;
    if (true !== n && !a(n)) throw new i("getter must be a function");
    t["[[Get]]"] = n
  }
  if (r(e, "set")) {
    var l = e.set;
    if (true !== l && !a(l)) throw new i("setter must be a function");
    t["[[Set]]"] = l
  }
  if ((r(t, "[[Get]]") || r(t, "[[Set]]")) && (r(t, "[[Value]]") || r(t, "[[Writable]]"))) throw new i("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
  return t
}