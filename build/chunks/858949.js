/** Chunk was on web.js **/
/** chunk id: 858949, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk146063 = require("./146063.js"),
  Chunk201390 = require("./201390.js"),
  Chunk914331 = require("./914331.js"),
  a = function(e) {
    return function(t, n, a) {
      var s, l = r(t),
        c = o(l);
      if (0 === c) return !e && false;
      var u = i(a, c);
      if (e && n != n) {
        for (; c > u;)
          if ((s = l[u++]) != s) returntrue
      } else
        for (; c > u; u++)
          if ((e || u in l) && l[u] === n) return e || u || 0;
      return !e && false
    }
  };
module.exports = {
  includes: a(true),
  indexOf: a(false)
}