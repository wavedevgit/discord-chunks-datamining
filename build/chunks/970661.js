/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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