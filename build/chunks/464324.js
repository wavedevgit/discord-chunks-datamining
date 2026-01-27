/** Chunk was on web.js **/
/** chunk id: 464324, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk581390 = require("./581390.js"),
  Chunk273761 = require("./273761.js"),
  Chunk503199 = require("./503199.js"),
  o = function(e) {
    return function(t, n, o) {
      var s, l = r(t),
        c = a(l);
      if (0 === c) return !e && false;
      var u = i(o, c);
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
  includes: o(true),
  indexOf: o(false)
}