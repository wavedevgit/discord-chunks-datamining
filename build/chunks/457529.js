/** Chunk was on web.js **/
/** chunk id: 457529, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk230606 = require("./230606.js"),
  Chunk985848 = require("./985848.js"),
  Chunk446474 = require("./446474.js"),
  Chunk410323 = require("./410323.js"),
  Chunk503628 = require("./503628.js"),
  Chunk339626 = require("./339626.js"),
  Chunk837082 = require("./837082.js"),
  Chunk192819 = require("./192819.js"),
  Chunk965072 = require("./965072.js"),
  Chunk812294 = require("./812294.js"),
  _ = String,
  h = Chunk230606("JSON", "stringify"),
  m = Chunk410323(/./.exec),
  g = Chunk410323("".charAt),
  E = Chunk410323("".charCodeAt),
  y = Chunk410323("".replace),
  b = Chunk410323(1..toString),
  O = /[\uD800-\uDFFF]/g,
  v = /^[\uD800-\uDBFF]$/,
  A = /^[\uDC00-\uDFFF]$/,
  I = !Chunk812294 || Chunk503628(function() {
    var e = i("Symbol")("stringify detection");
    return "[null]" !== h([e]) || "{}" !== h({
      a: e
    }) || "{}" !== h(Object(e))
  }),
  S = Chunk503628(function() {
    return '"\\udf06\\ud834"' !== h("\uDF06\uD834") || '"\\udead"' !== h("\uDEAD")
  }),
  T = function(e, t) {
    var n = d(arguments),
      r = f(t);
    if (!(!c(r) && (true === e || u(e)))) return n[1] = function(e, t) {
      if (c(r) && (t = s(r, this, _(e), t)), !u(t)) return t
    }, a(h, null, n)
  },
  C = function(e, t, n) {
    var r = g(n, t - 1),
      i = g(n, t + 1);
    return m(v, e) && !m(A, i) || m(A, e) && !m(v, r) ? "\\u" + b(E(e, 0), 16) : e
  };
h && Chunk557939({
  target: "JSON",
  stat: true,
  arity: 3,
  forced: I || S
}, {
  stringify: function(e, t, n) {
    var r = d(arguments),
      i = a(I ? T : h, null, r);
    return S && "string" == typeof i ? y(i, O, C) : i
  }
})