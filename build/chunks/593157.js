/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var r = n(338752),
  i = n(342545),
  o = n(463374),
  a = RangeError;
e.exports = function(e) {
  var t = i(o(this)),
    n = "",
    s = r(e);
  if (s < 0 || s === 1 / 0) throw new a("Wrong number of repetitions");
  for (; s > 0;
    (s >>>= 1) && (t += t)) 1 & s && (n += t);
  return n
}