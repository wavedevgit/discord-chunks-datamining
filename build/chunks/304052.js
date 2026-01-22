/** Chunk was on web.js **/
/** chunk id: 304052, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk221015 = require("./221015.js"),
  Chunk93714 = require("./93714.js"),
  Chunk250594 = require("./250594.js"),
  Chunk503199 = require("./503199.js"),
  o = function(e) {
    var t = 1 === e;
    return function(n, o, l) {
      for (var c, u = a(n), d = i(u), f = s(d), p = r(o, l); f-- > 0;)
        if (p(c = d[f], f, u)) switch (e) {
          case 0:
            return c;
          case 1:
            return f
        }
      return t ? false : true
    }
  };
module.exports = {
  findLast: o(0),
  findLastIndex: o(1)
}