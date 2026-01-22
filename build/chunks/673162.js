/** Chunk was on 94678 **/
/** chunk id: 673162, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk241091 = require("./241091.js"),
  Chunk675879 = require("./675879.js"),
  Chunk556598 = require("./556598.js"),
  Chunk529030 = require("./529030.js"),
  Chunk794779 = require("./794779.js"),
  Chunk107532 = require("./107532.js"),
  a = Chunk675879([].push),
  f = function(t) {
    var r = 1 === t,
      e = 2 === t,
      o = 3 === t,
      f = 4 === t,
      p = 6 === t,
      l = 7 === t,
      v = 5 === t || p;
    return function(y, h, x, d) {
      for (var g, b, m = i(y), S = s(m), w = u(S), O = n(h, x), j = 0, A = d || c, E = r ? A(y, w) : e || l ? A(y, 0) : true; w > j; j++)
        if ((v || j in S) && (b = O(g = S[j], j, m), t))
          if (r) E[j] = b;
          else if (b) switch (t) {
        case 3:
          returntrue;
        case 5:
          return g;
        case 6:
          return j;
        case 2:
          a(E, g)
      } else switch (t) {
        case 4:
          returnfalse;
        case 7:
          a(E, g)
      }
      return p ? false : o || f ? f : E
    }
  };
module.exports = {
  forEach: f(0),
  map: f(1),
  filter: f(2),
  some: f(3),
  every: f(4),
  find: f(5),
  findIndex: f(6),
  filterReject: f(7)
}