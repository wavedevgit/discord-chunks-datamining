/** Chunk was on web.js **/
/** chunk id: 992914, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk992174 = require("./992174.js"),
  i = Math.floor,
  a = function(e, t) {
    var n = e.length;
    if (n < 8)
      for (var o, s, l = 1; l < n;) {
        for (s = l, o = e[l]; s && t(e[s - 1], o) > 0;) e[s] = e[--s];
        s !== l++ && (e[s] = o)
      } else
        for (var c = i(n / 2), u = a(r(e, 0, c), t), d = a(r(e, c), t), f = u.length, p = d.length, _ = 0, h = 0; _ < f || h < p;) e[_ + h] = _ < f && h < p ? 0 >= t(u[_], d[h]) ? u[_++] : d[h++] : _ < f ? u[_++] : d[h++];
    return e
  };
module.exports = a