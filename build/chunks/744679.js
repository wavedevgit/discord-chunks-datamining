/** Chunk was on 35511 **/
/** chunk id: 744679, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk999843 = require("./999843.js"),
  Chunk529030 = require("./529030.js"),
  Chunk556598 = require("./556598.js"),
  Chunk794779 = require("./794779.js"),
  s = TypeError,
  l = "Reduce of empty array with no initial value",
  c = function(e) {
    return function(t, n, c, u) {
      var d = a(t),
        p = o(d),
        h = i(d);
      if (r(n), 0 === h && c < 2) throw new s(l);
      var f = e ? h - 1 : 0,
        m = e ? false : 1;
      if (c < 2)
        for (;;) {
          if (f in p) {
            u = p[f], f += m;
            break
          }
          if (f += m, e ? f < 0 : h <= f) throw new s(l)
        }
      for (; e ? f >= 0 : h > f; f += m) f in p && (u = n(u, p[f], f, d));
      return u
    }
  };
module.exports = {
  left: c(false),
  right: c(true)
}