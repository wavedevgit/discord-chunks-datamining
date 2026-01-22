/** Chunk was on 35511 **/
/** chunk id: 26454, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk414123 = require("./414123.js"),
  Chunk486816 = require("./486816.js"),
  Chunk675879 = require("./675879.js"),
  Chunk517480 = require("./517480.js"),
  Chunk859911 = require("./859911.js"),
  Chunk958498 = require("./958498.js"),
  c = Chunk675879(require("./321762.js").f),
  u = Chunk675879([].push),
  d = Chunk414123 && Chunk486816(function() {
    var e = Object.create(null);
    return e[2] = 2, !c(e, 2)
  }),
  p = function(e) {
    return function(t) {
      for (var n, a = l(t), o = s(a), p = d && null === i(a), h = o.length, f = 0, m = []; h > f;) n = o[f++], (!r || (p ? n in a : c(a, n))) && u(m, e ? [n, a[n]] : a[n]);
      return m
    }
  };
module.exports = {
  entries: p(true),
  values: p(false)
}