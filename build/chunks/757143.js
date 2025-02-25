/** Chunk was on web.js **/
"use strict";
var r = n(197187),
  i = n(926515),
  o = n(581031),
  a = n(527221),
  s = n(936940),
  l = n(24033),
  c = n(354848),
  u = n(35179),
  d = n(959318),
  f = n(552028),
  p = n(714050),
  _ = n(676125),
  h = n(344597),
  m = n(995739),
  g = n(115726),
  E = n(651673),
  v = n(641236)("replace"),
  b = Math.max,
  y = Math.min,
  O = o([].concat),
  S = o([].push),
  I = o("".indexOf),
  T = o("".slice),
  N = function(e) {
    return void 0 === e ? e : String(e)
  },
  A = function() {
    return "$0" === "a".replace(/./, "$0")
  }(),
  C = function() {
    return !!/./ [v] && "" === /./ [v]("a", "$0")
  }();
a("replace", function(e, t, n) {
  var o = C ? "$" : "$0";
  return [function(e, n) {
    var r = _(this),
      o = u(e) ? void 0 : m(e, v);
    return o ? i(o, e, r, n) : i(t, p(r), e, n)
  }, function(e, i) {
    var a = l(this),
      s = p(e);
    if ("string" == typeof i && -1 === I(i, o) && -1 === I(i, "$<")) {
      var u = n(t, a, s, i);
      if (u.done) return u.value
    }
    var _ = c(i);
    _ || (i = p(i));
    var m = a.global;
    m && (P = a.unicode, a.lastIndex = 0);
    for (var v = []; null !== (D = E(a, s)) && (S(v, D), m);) {
      "" === p(D[0]) && (a.lastIndex = h(s, f(a.lastIndex), P))
    }
    for (var A = "", C = 0, R = 0; R < v.length; R++) {
      for (var P, D, w, L = p((D = v[R])[0]), x = b(y(d(D.index), s.length), 0), M = [], j = 1; j < D.length; j++) S(M, N(D[j]));
      var k = D.groups;
      if (_) {
        var U = O([L], M, x, s);
        void 0 !== k && S(U, k), w = p(r(i, void 0, U))
      } else w = g(L, s, x, M, k, i);
      x >= C && (A += T(s, C, x) + w, C = x + L.length)
    }
    return A + T(s, C)
  }]
}, !!s(function() {
  var e = /./;
  return e.exec = function() {
    var e = [];
    return e.groups = {
      a: "7"
    }, e
  }, "7" !== "".replace(e, "$<a>")
}) || !A || C)