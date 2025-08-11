/** Chunk was on 50448 **/
/** chunk id: 565413, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk764908 = require("./764908.js"),
  Chunk157501 = require("./157501.js"),
  Chunk565130 = require("./565130.js"),
  Chunk953554 = require("./953554.js"),
  Chunk717130 = require("./717130.js"),
  c = Chunk764908(Chunk953554),
  f = Chunk764908("".slice),
  a = Math.ceil,
  p = function(t) {
    return function(r, n, e) {
      var u, p, l = i(s(r)),
        v = o(n),
        y = l.length,
        h = true === e ? " " : i(e);
      return v <= y || "" === h ? l : ((p = c(h, a((u = v - y) / h.length))).length > u && (p = f(p, 0, u)), t ? l + p : p + l)
    }
  };
module.exports = {
  start: p(false),
  end: p(true)
}