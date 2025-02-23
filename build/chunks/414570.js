/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var r = n(875604),
  i = n(752206),
  o = n(638636),
  a = Array.prototype,
  s = String.prototype;
e.exports = function(e) {
  var t = e.includes;
  return e === a || r(a, e) && t === a.includes ? i : "string" == typeof e || e === s || r(s, e) && t === s.includes ? o : t
}