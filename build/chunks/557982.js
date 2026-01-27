/** Chunk was on web.js **/
/** chunk id: 557982, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk439619 = require("./439619.js"),
  Chunk741623 = require("./741623.js"),
  a = Chunk439619("%Number%"),
  Chunk858156 = require("./858156.js"),
  Chunk449950 = require("./449950.js"),
  Chunk483955 = require("./483955.js");
module.exports = function(e) {
  var t = o(e) ? e : s(e, a);
  if ("symbol" == typeof t) throw new i("Cannot convert a Symbol value to a number");
  if ("bigint" == typeof t) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
  return "string" == typeof t ? l(t) : +t
}