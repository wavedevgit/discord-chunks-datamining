/** Chunk was on web.js **/
"use strict";
var r = n(566885),
  i = n(581031),
  o = n(470592),
  a = n(339718),
  s = n(49693),
  l = n(29016),
  c = i([].push),
  u = function(e) {
    var t = 1 === e,
      n = 2 === e,
      i = 3 === e,
      u = 4 === e,
      d = 6 === e,
      f = 7 === e,
      _ = 5 === e || d;
    return function(p, h, m, g) {
      for (var E, v, b = a(p), y = o(b), O = r(h, m), I = s(y), S = 0, T = g || l, N = t ? T(p, I) : n || f ? T(p, 0) : void 0; I > S; S++)
        if ((_ || S in y) && (v = O(E = y[S], S, b), e)) {
          if (t) N[S] = v;
          else if (v) switch (e) {
            case 3:
              return !0;
            case 5:
              return E;
            case 6:
              return S;
            case 2:
              c(N, E)
          } else switch (e) {
            case 4:
              return !1;
            case 7:
              c(N, E)
          }
        } return d ? -1 : i || u ? u : N
    }
  };
e.exports = {
  forEach: u(0),
  map: u(1),
  filter: u(2),
  some: u(3),
  every: u(4),
  find: u(5),
  findIndex: u(6),
  filterReject: u(7)
}