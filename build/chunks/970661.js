/** Chunk was on web.js **/
/** chunk id: 970661, original params: e,t (module,exports,re quire) **/
"use strict";
exports.extend = r;
var n = Object.prototype.hasOwnProperty;

function r(e) {
  var t, r, i, o, a = Array.prototype.slice.call(arguments, 1);
  for (t = 0, r = a.length; t < r; t += 1)
    if (i = a[t])
      for (o in i) n.call(i, o) && (e[o] = i[o]);
  return e
}
exports.hop = n