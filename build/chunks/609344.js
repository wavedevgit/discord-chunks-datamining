/** Chunk was on 50448 **/
/** chunk id: 609344, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk185698 = require("./185698.js"),
  Chunk839593 = require("./839593.js"),
  Chunk684022 = require("./684022.js"),
  Chunk866686 = require("./866686.js"),
  Chunk861832 = require("./861832.js"),
  f = Chunk866686("symbol-to-string-registry");
Chunk220159({
  target: "Symbol",
  stat: true,
  forced: !Chunk861832
}, {
  keyFor: function(t) {
    if (!i(t)) throw TypeError(u(t) + " is not a symbol");
    if (o(f, t)) return f[t]
  }
})