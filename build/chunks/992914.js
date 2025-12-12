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
        for (var c = i(n / 2), u = o(r(e, 0, c), t), d = o(r(e, c), t), f = u.length, p = d.length, _ = 0, m = 0; _ < f || m < p;) e[_ + m] = _ < f && m < p ? 0 >= t(u[_], d[m]) ? u[_++] : d[m++] : _ < f ? u[_++] : d[m++];
    return e
  };
module.exports = o