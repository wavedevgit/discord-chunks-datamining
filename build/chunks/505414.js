/** Chunk was on 50448 **/
/** chunk id: 505414, original params: t,r,n (module,exports,require) **/
"use strict";
for (var Chunk866686 = require("./866686.js"), Chunk178476 = require("./178476.js"), Chunk764908 = require("./764908.js"), Chunk839593 = require("./839593.js"), Chunk394370 = require("./394370.js"), c = Chunk178476("Symbol"), f = c.isWellKnownSymbol, a = Chunk178476("Object", "getOwnPropertyNames"), p = Chunk764908(c.prototype.valueOf), l = Chunk866686("wks"), v = 0, y = a(c), h = y.length; v < h; v++) try {
  var x = y[v];
  Chunk839593(c[x]) && Chunk394370(x)
} catch (t) {}
module.exports = function(t) {
  if (f && f(t)) returntrue;
  try {
    for (var r = p(t), n = 0, e = a(l), o = e.length; n < o; n++)
      if (l[e[n]] == r) returntrue
  } catch (t) {}
  returnfalse
}