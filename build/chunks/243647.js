/** Chunk was on web.js **/
/** chunk id: 243647, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk134533 = require("./134533.js"),
  Chunk461648 = require("./461648.js"),
  a = Chunk134533.hasArrayLengthDefineBug(),
  o = a && require("./805906.js"),
  s = require("./166691.js")("Object.prototype.propertyIsEnumerable");
module.exports = function(e, t, n, r, l, c) {
  if (!i) {
    if (!e(c) || !c["[[Configurable]]"] || !c["[[Writable]]"] || l in r && s(r, l) !== !!c["[[Enumerable]]"]) returnfalse;
    var u = c["[[Value]]"];
    return r[l] = u, t(r[l], u)
  }
  return a && "length" === l && "[[Value]]" in c && o(r) && r.length !== c["[[Value]]"] ? (r.length = c["[[Value]]"], r.length === c["[[Value]]"]) : (i(r, l, n(c)), true)
}