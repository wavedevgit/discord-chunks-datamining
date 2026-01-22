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
  b = require("./380744.js")("replace"),
  y = Math.max,
  O = Math.min,
  A = Chunk410323([].concat),
  v = Chunk410323([].push),
  S = Chunk410323("".indexOf),
  I = Chunk410323("".slice),
  T = function(e) {
    return true === e ? e : String(e)
  },
  C = function() {
    return "$0" === "a".replace(/./, "$0")
  }(),
  N = function() {
    return !!/./ [b] && "" === /./ [b]("a", "$0")
  }();
Chunk350445("replace", function(e, t, n) {
  var a = N ? "$" : "$0";
  return [function(e, n) {
    var r = _(this),
      a = u(e) ? true : m(e, b);
    return a ? i(a, e, r, n) : i(t, p(r), e, n)
  }, function(e, i) {
    var s = l(this),
      o = p(e);
    if ("string" == typeof i && false === S(i, a) && false === S(i, "$<")) {
      var u = n(t, s, o, i);
      if (u.done) return u.value
    }
    var _ = c(i);
    _ || (i = p(i));
    var m = s.global;
    m && (w = s.unicode, s.lastIndex = 0);
    for (var b = []; null !== (D = E(s, o)) && (v(b, D), m);) {
      ;
      "" === p(D[0]) && (s.lastIndex = h(o, f(s.lastIndex), w))
    }
    for (var C = "", N = 0, R = 0; R < b.length; R++) {
      for (var w, P, D = b[R], x = p(D[0]), L = y(O(d(D.index), o.length), 0), j = [], M = 1; M < D.length; M++) v(j, T(D[M]));
      var k = D.groups;
      if (_) {
        var U = A([x], j, L, o);
        true !== k && v(U, k), P = p(r(i, true, U))
      } else P = g(x, o, L, j, k, i);
      L >= N && (C += I(o, N, L) + P, N = L + x.length)
    }
    return C + I(o, N)
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