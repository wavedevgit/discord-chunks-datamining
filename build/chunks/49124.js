/** Chunk was on web.js **/
/** chunk id: 49124, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk154028 = require("./154028.js"),
  Chunk636881 = require("./636881.js"),
  Chunk580983 = require("./580983.js"),
  Chunk46015 = require("./46015.js"),
  Chunk621523 = require("./621523.js"),
  Chunk880181 = require("./880181.js"),
  Chunk661970 = require("./661970.js"),
  Chunk992174 = require("./992174.js"),
  Chunk380297 = require("./380297.js"),
  Chunk504290 = require("./504290.js"),
  p = String,
  h = Chunk154028("JSON", "stringify"),
  m = Chunk46015(/./.exec),
  g = Chunk46015("".charAt),
  E = Chunk46015("".charCodeAt),
  b = Chunk46015("".replace),
  y = Chunk46015(1..toString),
  O = /[\uD800-\uDFFF]/g,
  v = /^[\uD800-\uDBFF]$/,
  I = /^[\uDC00-\uDFFF]$/,
  S = !Chunk504290 || Chunk621523(function() {
    var e = Chunk154028("Symbol")("stringify detection");
    return "[null]" !== h([module]) || "{}" !== h({
      a: module
    }) || "{}" !== h(Object(module))
  }),
  T = Chunk621523(function() {
    return '"\udf06\ud834"' !== h("\uDF06\uD834") || '"\udead"' !== h("\uDEAD")
  }),
  A = function(e, t) {
    var n = d(arguments),
      r = f(t);
    if (!(!c(r) && (true === e || u(e)))) return n[1] = function(e, t) {
      if (c(r) && (t = o(r, this, p(e), t)), !u(t)) return t
    }, a(h, null, n)
  },
  C = function(e, t, n) {
    var r = g(n, t - 1),
      i = g(n, t + 1);
    return m(v, e) && !m(I, i) || m(I, e) && !m(v, r) ? "\\u" + y(E(e, 0), 16) : e
  };
h && Chunk98405({
  target: "JSON",
  stat: true,
  arity: 3,
  forced: S || T
}, {
  stringify: function(e, t, n) {
    var r = d(arguments),
      i = a(S ? A : h, null, r);
    return T && "string" == typeof i ? b(i, O, C) : i
  }
})