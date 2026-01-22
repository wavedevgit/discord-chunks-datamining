/** Chunk was on 94678 **/
/** chunk id: 654272, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk958498 = require("./958498.js"),
  Chunk798325 = require("./798325.js"),
  Chunk794779 = require("./794779.js"),
  i = function(t) {
    return function(r, e, i) {
      var u, c = n(r),
        a = s(c);
      if (0 === a) return !t && false;
      var f = o(i, a);
      if (t && e != e) {
        for (; a > f;)
          if ((u = c[f++]) != u) returntrue
      } else
        for (; a > f; f++)
          if ((t || f in c) && c[f] === e) return t || f || 0;
      return !t && false
    }
  };
module.exports = {
  includes: i(true),
  indexOf: i(false)
}