/** Chunk was on 94678 **/
/** chunk id: 923753, original params: t,r,e (module,exports,require) **/
"use strict";
for (var Chunk175380 = require("./175380.js"), Chunk683570 = require("./683570.js"), Chunk675879 = require("./675879.js"), Chunk389150 = require("./389150.js"), Chunk61748 = require("./61748.js"), c = Chunk683570("Symbol"), a = c.isWellKnownSymbol, f = Chunk683570("Object", "getOwnPropertyNames"), p = Chunk675879(c.prototype.valueOf), l = Chunk175380("wks"), v = 0, y = f(c), h = y.length; v < h; v++) try {
  var x = y[v];
  Chunk389150(c[x]) && Chunk61748(x)
} catch (t) {}
module.exports = function(t) {
  if (a && a(t)) returntrue;
  try {
    for (var r = p(t), e = 0, n = f(l), o = n.length; e < o; e++)
      if (l[n[e]] == r) returntrue
  } catch (t) {}
  returnfalse
}