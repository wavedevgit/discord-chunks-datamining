/** Chunk was on web.js **/
/** chunk id: 836215, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk98405 = require("./98405.js"),
  Chunk967333 = require("./967333.js"),
  Chunk861567 = require("./861567.js"),
  Chunk914331 = require("./914331.js"),
  Chunk201390 = require("./201390.js"),
  Chunk146063 = require("./146063.js"),
  Chunk77826 = require("./77826.js"),
  u = Array,
  d = Math.max,
  f = Math.min;
Chunk98405({
  target: "Array",
  proto: true
}, {
  toSpliced: function(e, t) {
    var n, r, i, _, p = l(this),
      h = a(p),
      m = s(e, h),
      g = arguments.length,
      E = 0;
    for (0 === g ? n = r = 0 : 1 === g ? (n = 0, r = h - m) : (n = g - 2, r = f(d(c(t), 0), h - m)), _ = u(i = o(h + n - r)); E < m; E++) _[E] = p[E];
    for (; E < m + n; E++) _[E] = arguments[E - m + 2];
    for (; E < i; E++) _[E] = p[E + r - n];
    return _
  }
}), Chunk967333("toSpliced")