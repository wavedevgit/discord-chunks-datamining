/** Chunk was on web.js **/
/** chunk id: 798493, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk473560 = require("./473560.js"),
  Chunk969001 = require("./969001.js"),
  a = Chunk473560.hasArrayLengthDefineBug(),
  s = a && require("./677480.js"),
  o = require("./906046.js")("Object.prototype.propertyIsEnumerable");
module.exports = function(e, t, n, r, l, c) {
  if (!i) {
    if (!e(c) || !c["[[Configurable]]"] || !c["[[Writable]]"] || l in r && o(r, l) !== !!c["[[Enumerable]]"]) returnfalse;
    var u = c["[[Value]]"];
    return r[l] = u, t(r[l], u)
  }
  return a && "length" === l && "[[Value]]" in c && s(r) && r.length !== c["[[Value]]"] ? (r.length = c["[[Value]]"], r.length === c["[[Value]]"]) : (i(r, l, n(c)), true)
}