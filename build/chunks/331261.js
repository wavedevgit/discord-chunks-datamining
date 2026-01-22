/** Chunk was on 94678 **/
/** chunk id: 331261, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk683570 = require("./683570.js"),
  Chunk421236 = require("./421236.js"),
  Chunk664886 = require("./664886.js"),
  Chunk675879 = require("./675879.js"),
  Chunk486816 = require("./486816.js"),
  Chunk309270 = require("./309270.js"),
  Chunk389150 = require("./389150.js"),
  Chunk596479 = require("./596479.js"),
  Chunk800087 = require("./800087.js"),
  Chunk875746 = require("./875746.js"),
  y = String,
  h = Chunk683570("JSON", "stringify"),
  x = Chunk675879(/./.exec),
  d = Chunk675879("".charAt),
  g = Chunk675879("".charCodeAt),
  b = Chunk675879("".replace),
  m = Chunk675879(1..toString),
  S = /[\uD800-\uDFFF]/g,
  w = /^[\uD800-\uDBFF]$/,
  O = /^[\uDC00-\uDFFF]$/,
  j = !Chunk875746 || Chunk486816(function() {
    var t = o("Symbol")("stringify detection");
    return "[null]" !== h([t]) || "{}" !== h({
      a: t
    }) || "{}" !== h(Object(t))
  }),
  A = Chunk486816(function() {
    return '"\\udf06\\ud834"' !== h("\uDF06\uD834") || '"\\udead"' !== h("\uDEAD")
  }),
  E = function(t, r) {
    var e = p(arguments),
      n = l(r);
    if (!(!a(n) && (true === t || f(t)))) return e[1] = function(t, r) {
      if (a(n) && (r = i(n, this, y(t), r)), !f(r)) return r
    }, s(h, null, e)
  },
  T = function(t, r, e) {
    var n = d(e, r - 1),
      o = d(e, r + 1);
    return x(w, t) && !x(O, o) || x(O, t) && !x(w, n) ? "\\u" + m(g(t, 0), 16) : t
  };
h && Chunk834647({
  target: "JSON",
  stat: true,
  arity: 3,
  forced: j || A
}, {
  stringify: function(t, r, e) {
    var n = p(arguments),
      o = s(j ? E : h, null, n);
    return A && "string" == typeof o ? b(o, S, T) : o
  }
})