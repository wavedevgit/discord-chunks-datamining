/** Chunk was on web.js **/
/** chunk id: 920029, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk48657 = require("./48657.js"),
  Chunk46015 = require("./46015.js"),
  Chunk79275 = require("./79275.js"),
  Chunk527160 = require("./527160.js"),
  Chunk914331 = require("./914331.js"),
  Chunk137294 = require("./137294.js"),
  c = Chunk46015([].push),
  u = function(e) {
    var t = 1 === e,
      n = 2 === e,
      i = 3 === e,
      u = 4 === e,
      d = 6 === e,
      f = 7 === e,
      _ = 5 === e || d;
    return function(p, h, m, g) {
      for (var E, b, y = o(p), O = a(y), v = s(O), I = r(h, m), S = 0, T = g || l, A = t ? T(p, v) : n || f ? T(p, 0) : true; v > S; S++)
        if ((_ || S in O) && (b = I(E = O[S], S, y), e))
          if (t) A[S] = b;
          else if (b) switch (e) {
        case 3:
          returntrue;
        case 5:
          return E;
        case 6:
          return S;
        case 2:
          c(A, E)
      } else switch (e) {
        case 4:
          returnfalse;
        case 7:
          c(A, E)
      }
      return d ? false : i || u ? u : A
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