/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
t.extend = r;
var n = Object.prototype.hasOwnProperty;

function r(e) {
  var t, r, i, o, a = Array.prototype.slice.call(arguments, 1);
  for (t = 0, r = a.length; t < r; t += 1)
    if (i = a[t])
      for (o in i) n.call(i, o) && (e[o] = i[o]);
  return e
}
t.hop = n