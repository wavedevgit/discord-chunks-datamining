/** Chunk was on web.js **/
/** chunk id: 1266, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk48657 = require("./48657.js"),
  Chunk79275 = require("./79275.js"),
  Chunk527160 = require("./527160.js"),
  Chunk914331 = require("./914331.js"),
  s = function(e) {
    var t = 1 === e;
    return function(n, s, l) {
      for (var c, u = a(n), d = i(u), f = o(d), p = r(s, l); f-- > 0;)
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
  findLast: s(0),
  findLastIndex: s(1)
}