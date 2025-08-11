/** Chunk was on 50448 **/
/** chunk id: 674554, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk658971 = require("./658971.js"),
  Chunk936839 = require("./936839.js"),
  Chunk174344 = require("./174344.js"),
  u = function(t) {
    return function(r, n, u) {
      var s, c = e(r),
        f = i(c);
      if (0 === f) return !t && false;
      var a = o(u, f);
      if (t && n != n) {
        for (; f > a;)
          if ((s = c[a++]) != s) returntrue
      } else
        for (; f > a; a++)
          if ((t || a in c) && c[a] === n) return t || a || 0;
      return !t && false
    }
  };
module.exports = {
  includes: u(true),
  indexOf: u(false)
}