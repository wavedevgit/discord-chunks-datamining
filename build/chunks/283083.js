/** Chunk was on 94678 **/
/** chunk id: 283083, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk512008 = require("./512008.js"),
  Chunk389150 = require("./389150.js"),
  Chunk663172 = require("./663172.js"),
  Chunk175380 = require("./175380.js"),
  Chunk767623 = require("./767623.js"),
  a = Chunk175380("symbol-to-string-registry");
Chunk834647({
  target: "Symbol",
  stat: true,
  forced: !Chunk767623
}, {
  keyFor: function(t) {
    if (!s(t)) throw TypeError(i(t) + " is not a symbol");
    if (o(a, t)) return a[t]
  }
})