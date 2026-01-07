/** Chunk was on 50448 **/
/** chunk id: 2062, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk178476 = require("./178476.js"),
  Chunk498996 = require("./498996.js"),
  Chunk517522 = require("./517522.js"),
  Chunk764908 = require("./764908.js"),
  Chunk779688 = require("./779688.js"),
  Chunk971428 = require("./971428.js"),
  Chunk839593 = require("./839593.js"),
  Chunk689933 = require("./689933.js"),
  Chunk24215 = require("./24215.js"),
  Chunk969493 = require("./969493.js"),
  y = String,
  h = Chunk178476("JSON", "stringify"),
  x = Chunk764908(/./.exec),
  d = Chunk764908("".charAt),
  g = Chunk764908("".charCodeAt),
  b = Chunk764908("".replace),
  m = Chunk764908(1..toString),
  S = /[\uD800-\uDFFF]/g,
  w = /^[\uD800-\uDBFF]$/,
  O = /^[\uDC00-\uDFFF]$/,
  j = !Chunk969493 || Chunk779688(function() {
    var t = o("Symbol")("stringify detection");
    return "[null]" !== h([t]) || "{}" !== h({
      a: t
    }) || "{}" !== h(Object(t))
  }),
  A = Chunk779688(function() {
    return '"\udf06\ud834"' !== h("\uDF06\uD834") || '"\udead"' !== h("\uDEAD")
  }),
  E = function(t, r) {
    var n = p(arguments),
      e = l(r);
    if (!(!f(e) && (true === t || a(t)))) return n[1] = function(t, r) {
      if (f(e) && (r = u(e, this, y(t), r)), !a(r)) return r
    }, i(h, null, n)
  },
  T = function(t, r, n) {
    var e = d(n, r - 1),
      o = d(n, r + 1);
    return x(w, t) && !x(O, o) || x(O, t) && !x(w, e) ? "\\u" + m(g(t, 0), 16) : t
  };
h && Chunk220159({
  target: "JSON",
  stat: true,
  arity: 3,
  forced: j || A
}, {
  stringify: function(t, r, n) {
    var e = p(arguments),
      o = i(j ? E : h, null, e);
    return A && "string" == typeof o ? b(o, S, T) : o
  }
})