/** Chunk was on web.js **/
/** chunk id: 704826, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk636881 = require("./636881.js"),
  Chunk580983 = require("./580983.js"),
  Chunk46015 = require("./46015.js"),
  Chunk518187 = require("./518187.js"),
  Chunk621523 = require("./621523.js"),
  Chunk179122 = require("./179122.js"),
  Chunk880181 = require("./880181.js"),
  Chunk655152 = require("./655152.js"),
  Chunk77826 = require("./77826.js"),
  Chunk554148 = require("./554148.js"),
  Chunk382698 = require("./382698.js"),
  Chunk497464 = require("./497464.js"),
  Chunk857168 = require("./857168.js"),
  Chunk3831 = require("./3831.js"),
  Chunk814559 = require("./814559.js"),
  Chunk820616 = require("./820616.js"),
  b = require("./751736.js")("replace"),
  y = Math.max,
  O = Math.min,
  v = Chunk46015([].concat),
  S = Chunk46015([].push),
  I = Chunk46015("".indexOf),
  T = Chunk46015("".slice),
  C = function(e) {
    return true === e ? e : String(e)
  },
  A = function() {
    return "$0" === "a".replace(/./, "$0")
  }(),
  N = function() {
    return !!/./ [b] && "" === /./ [b]("a", "$0")
  }();
Chunk518187("replace", function(e, t, n) {
  var a = N ? "$" : "$0";
  return [function(e, n) {
    var r = _(this),
      a = u(e) ? true : m(e, b);
    return a ? i(a, e, r, n) : i(t, p(r), e, n)
  }, function(e, i) {
    var o = l(this),
      s = p(e);
    if ("string" == typeof i && false === I(i, a) && false === I(i, "$<")) {
      var u = n(t, o, s, i);
      if (u.done) return u.value
    }
    var _ = c(i);
    _ || (i = p(i));
    var m = o.global;
    m && (w = o.unicode, o.lastIndex = 0);
    for (var b = []; null !== (D = E(o, s)) && (S(b, D), m);) {
      ;
      "" === p(D[0]) && (o.lastIndex = h(s, f(o.lastIndex), w))
    }
    for (var A = "", N = 0, P = 0; P < b.length; P++) {
      for (var w, R, D = b[P], x = p(D[0]), L = y(O(d(D.index), s.length), 0), j = [], M = 1; M < D.length; M++) S(j, C(D[M]));
      var k = D.groups;
      if (_) {
        var U = v([x], j, L, s);
        true !== k && S(U, k), R = p(r(i, true, U))
      } else R = g(x, s, L, j, k, i);
      L >= N && (A += T(s, N, L) + R, N = L + x.length)
    }
    return A + T(s, N)
  }]
}, !!Chunk621523(function() {
  var e = /./;
  return e.exec = function() {
    var e = [];
    return e.groups = {
      a: "7"
    }, e
  }, "7" !== "".replace(e, "$<a>")
}) || !A || N)