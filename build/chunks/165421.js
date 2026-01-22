/** Chunk was on 94678 **/
/** chunk id: 165421, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk683570 = require("./683570.js"),
  Chunk512008 = require("./512008.js"),
  Chunk57284 = require("./57284.js"),
  Chunk175380 = require("./175380.js"),
  Chunk767623 = require("./767623.js"),
  a = Chunk175380("string-to-symbol-registry"),
  f = Chunk175380("symbol-to-string-registry");
Chunk834647({
  target: "Symbol",
  stat: true,
  forced: !Chunk767623
}, {
  for: function(t) {
    var r = i(t);
    if (s(a, r)) return a[r];
    var e = o("Symbol")(r);
    return a[r] = e, f[e] = r, e
  }
})