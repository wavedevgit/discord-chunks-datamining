/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var r = n(926515),
  i = n(24033),
  o = n(354848),
  a = n(332916),
  s = n(213265),
  l = TypeError;
e.exports = function(e, t) {
  var n = e.exec;
  if (o(n)) {
    var c = r(n, e, t);
    return null !== c && i(c), c
  }
  if ("RegExp" === a(e)) return r(s, e, t);
  throw l("RegExp#exec called on incompatible receiver")
}