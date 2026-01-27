/** Chunk was on web.js **/
/** chunk id: 812715, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk985848 = require("./985848.js"),
  Chunk446474 = require("./446474.js"),
  Chunk410323 = require("./410323.js"),
  Chunk350445 = require("./350445.js"),
  Chunk503628 = require("./503628.js"),
  Chunk101968 = require("./101968.js"),
  Chunk339626 = require("./339626.js"),
  Chunk652320 = require("./652320.js"),
  Chunk120394 = require("./120394.js"),
  Chunk370001 = require("./370001.js"),
  Chunk304880 = require("./304880.js"),
  Chunk321727 = require("./321727.js"),
  Chunk929880 = require("./929880.js"),
  Chunk95959 = require("./95959.js"),
  Chunk470103 = require("./470103.js"),
  Chunk17755 = require("./17755.js"),
  y = require("./380744.js")("replace"),
  b = Math.max,
  O = Math.min,
  v = Chunk410323([].concat),
  A = Chunk410323([].push),
  I = Chunk410323("".indexOf),
  S = Chunk410323("".slice),
  T = function(e) {
    return true === e ? e : String(e)
  },
  C = function() {
    return "$0" === "a".replace(/./, "$0")
  }(),
  N = function() {
    return !!/./ [y] && "" === /./ [y]("a", "$0")
  }();
Chunk350445("replace", function(e, t, n) {
  var a = N ? "$" : "$0";
  return [function(e, n) {
    var r = _(this),
      a = u(e) ? true : m(e, y);
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
    m && (R = o.unicode, o.lastIndex = 0);
    for (var y = []; null !== (D = E(o, s)) && (A(y, D), m);) {
      ;
      "" === p(D[0]) && (o.lastIndex = h(s, f(o.lastIndex), R))
    }
    for (var C = "", N = 0, w = 0; w < y.length; w++) {
      for (var R, P, D = y[w], L = p(D[0]), x = b(O(d(D.index), s.length), 0), M = [], j = 1; j < D.length; j++) A(M, T(D[j]));
      var k = D.groups;
      if (_) {
        var U = v([L], M, x, s);
        true !== k && A(U, k), P = p(r(i, true, U))
      } else P = g(L, s, x, M, k, i);
      x >= N && (C += S(s, N, x) + P, N = x + L.length)
    }
    return C + S(s, N)
  }]
}, !!Chunk503628(function() {
  var e = /./;
  return e.exec = function() {
    var e = [];
    return e.groups = {
      a: "7"
    }, e
  }, "7" !== "".replace(e, "$<a>")
}) || !C || N)