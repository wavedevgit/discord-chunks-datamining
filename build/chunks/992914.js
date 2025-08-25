/** Chunk was on web.js **/
/** chunk id: 992914, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk992174 = require("./992174.js"),
  i = Math.floor,
  o = function(e, t) {
    var n = e.length;
    if (n < 8)
      for (var a, s, l = 1; l < n;) {
        for (s = l, a = e[l]; s && t(e[s - 1], a) > 0;) e[s] = e[--s];
        s !== l++ && (e[s] = a)
      } else
        for (var c = i(n / 2), u = o(r(e, 0, c), t), d = o(r(e, c), t), f = u.length, _ = d.length, p = 0, h = 0; p < f || h < _;) e[p + h] = p < f && h < _ ? 0 >= t(u[p], d[h]) ? u[p++] : d[h++] : p < f ? u[p++] : d[h++];
    return e
  };
module.exports = o