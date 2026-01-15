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
  _ = String,
  h = Chunk154028("JSON", "stringify"),
  m = Chunk46015(/./.exec),
  g = Chunk46015("".charAt),
  E = Chunk46015("".charCodeAt),
  b = Chunk46015("".replace),
  y = Chunk46015(1..toString),
  O = /[\uD800-\uDFFF]/g,
  v = /^[\uD800-\uDBFF]$/,
  S = /^[\uDC00-\uDFFF]$/,
  I = !Chunk504290 || Chunk621523(function() {
    var e = i("Symbol")("stringify detection");
    return "[null]" !== h([e]) || "{}" !== h({
      a: e
    }) || "{}" !== h(Object(e))
  }),
  T = Chunk621523(function() {
    return '"\udf06\ud834"' !== h("\uDF06\uD834") || '"\udead"' !== h("\uDEAD")
  }),
  C = function(e, t) {
    var n = d(arguments),
      r = f(t);
    if (!(!c(r) && (true === e || u(e)))) return n[1] = function(e, t) {
      if (c(r) && (t = o(r, this, _(e), t)), !u(t)) return t
    }, a(h, null, n)
  },
  A = function(e, t, n) {
    var r = g(n, t - 1),
      i = g(n, t + 1);
    return m(v, e) && !m(S, i) || m(S, e) && !m(v, r) ? "\\u" + y(E(e, 0), 16) : e
  };
h && Chunk98405({
  target: "JSON",
  stat: true,
  arity: 3,
  forced: I || T
}, {
  stringify: function(e, t, n) {
    var r = d(arguments),
      i = a(I ? C : h, null, r);
    return T && "string" == typeof i ? b(i, O, A) : i
  }
})