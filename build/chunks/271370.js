/** Chunk was on 50448 **/
/** chunk id: 271370, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk178476 = require("./178476.js"),
  Chunk185698 = require("./185698.js"),
  Chunk565130 = require("./565130.js"),
  Chunk866686 = require("./866686.js"),
  Chunk861832 = require("./861832.js"),
  f = Chunk866686("string-to-symbol-registry"),
  a = Chunk866686("symbol-to-string-registry");
Chunk220159({
  target: "Symbol",
  stat: true,
  forced: !Chunk861832
}, {
  for: function(t) {
    var r = u(t);
    if (i(f, r)) return f[r];
    var n = o("Symbol")(r);
    return f[r] = n, a[n] = r, n
  }
})