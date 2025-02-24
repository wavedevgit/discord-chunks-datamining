/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
var r = n(691558),
  i = TypeError;
e.exports = function(e) {
  var t = r(e, "number");
  if ("number" == typeof t) throw i("Can't convert number to bigint");
  return BigInt(t)
}