/** Chunk was on 23357 **/
/** chunk id: 937552, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk691593 = require("./691593.js"),
  Chunk475424 = require("./475424.js"),
  Chunk562690 = require("./562690.js"),
  Chunk174344 = require("./174344.js"),
  s = TypeError,
  c = "Reduce of empty array with no initial value",
  l = function(e) {
    return function(t, n, l, u) {
      var d = o(t),
        p = a(d),
        h = i(d);
      if (r(n), 0 === h && l < 2) throw new s(c);
      var f = e ? h - 1 : 0,
        m = e ? false : 1;
      if (l < 2)
        for (;;) {
          if (f in p) {
            u = p[f], f += m;
            break
          }
          if (f += m, e ? f < 0 : h <= f) throw new s(c)
        }
      for (; e ? f >= 0 : h > f; f += m) f in p && (u = n(u, p[f], f, d));
      return u
    }
  };
module.exports = {
  left: l(false),
  right: l(true)
}