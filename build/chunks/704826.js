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
  I = Chunk46015([].push),
  T = Chunk46015("".indexOf),
  S = Chunk46015("".slice),
  A = function(e) {
    return true === e ? e : String(e)
  },
  C = function() {
    return "$0" === "a".replace(/./, "$0")
  }(),
  N = function() {
    return !!/./ [b] && "" === /./ [b]("a", "$0")
  }();
Chunk518187("replace", function(e, t, n) {
  var a = N ? "$" : "$0";
  return [function(e, n) {
    var r = p(this),
      a = u(e) ? true : m(e, b);
    return a ? i(a, e, r, n) : i(t, _(r), e, n)
  }, function(e, i) {
    var o = l(this),
      s = _(e);
    if ("string" == typeof i && false === T(i, a) && false === T(i, "$<")) {
      var u = n(t, o, s, i);
      if (u.done) return u.value
    }
    var p = c(i);
    p || (i = _(i));
    var m = o.global;
    m && (P = o.unicode, o.lastIndex = 0);
    for (var b = []; null !== (w = E(o, s)) && (I(b, w), m);) {
      ;
      "" === _(w[0]) && (o.lastIndex = h(s, f(o.lastIndex), P))
    }
    for (var C = "", N = 0, R = 0; R < b.length; R++) {
      for (var P, D, w = b[R], L = _(w[0]), x = y(O(d(w.index), s.length), 0), M = [], k = 1; k < w.length; k++) I(M, A(w[k]));
      var j = w.groups;
      if (p) {
        var U = v([L], M, x, s);
        true !== j && I(U, j), D = _(r(i, true, U))
      } else D = g(L, s, x, M, j, i);
      x >= N && (C += S(s, N, x) + D, N = x + L.length)
    }
    return C + S(s, N)
  }]
}, !!Chunk621523(function() {
  var e = /./;
  return module.exec = function() {
    var e = [];
    return module.groups = {
      a: "7"
    }, module
  }, "7" !== "".replace(module, "$<a>")
}) || !C || N)