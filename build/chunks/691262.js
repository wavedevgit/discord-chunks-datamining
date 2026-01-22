/** Chunk was on web.js **/
/** chunk id: 691262, original params: e,t (module,exports,re quire) **/
"use strict";
exports.extend = r;
var n = Object.prototype.hasOwnProperty;

function r(e) {
  var t, r, i, a, s = Array.prototype.slice.call(arguments, 1);
  for (t = 0, r = s.length; t < r; t += 1)
    if (i = s[t])
      for (a in i) n.call(i, a) && (e[a] = i[a]);
  return e
}
exports.hop = n