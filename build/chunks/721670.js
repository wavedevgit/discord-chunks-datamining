/** Chunk was on web.js **/
/** chunk id: 721670, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk221015 = require("./221015.js"),
  Chunk410323 = require("./410323.js"),
  Chunk93714 = require("./93714.js"),
  Chunk250594 = require("./250594.js"),
  Chunk503199 = require("./503199.js"),
  Chunk250184 = require("./250184.js"),
  c = Chunk410323([].push),
  u = function(e) {
    var t = 1 === e,
      n = 2 === e,
      i = 3 === e,
      u = 4 === e,
      d = 6 === e,
      f = 7 === e,
      p = 5 === e || d;
    return function(_, h, m, g) {
      for (var E, y, b = s(_), O = a(b), v = o(O), A = r(h, m), I = 0, S = g || l, T = t ? S(_, v) : n || f ? S(_, 0) : true; v > I; I++)
        if ((p || I in O) && (y = A(E = O[I], I, b), e))
          if (t) T[I] = y;
          else if (y) switch (e) {
        case 3:
          returntrue;
        case 5:
          return E;
        case 6:
          return I;
        case 2:
          c(T, E)
      } else switch (e) {
        case 4:
          returnfalse;
        case 7:
          c(T, E)
      }
      return d ? false : i || u ? u : T
    }
  };
module.exports = {
  forEach: u(0),
  map: u(1),
  filter: u(2),
  some: u(3),
  every: u(4),
  find: u(5),
  findIndex: u(6),
  filterReject: u(7)
}