/** Chunk was on 94678 **/
/** chunk id: 424784, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk675879 = require("./675879.js"),
  Chunk496133 = require("./496133.js"),
  Chunk57284 = require("./57284.js"),
  Chunk7662 = require("./7662.js"),
  Chunk693755 = require("./693755.js"),
  c = Chunk675879(Chunk7662),
  a = Chunk675879("".slice),
  f = Math.ceil,
  p = function(t) {
    return function(r, e, n) {
      var i, p, l = s(u(r)),
        v = o(e),
        y = l.length,
        h = true === n ? " " : s(n);
      return v <= y || "" === h ? l : ((p = c(h, f((i = v - y) / h.length))).length > i && (p = a(p, 0, i)), t ? l + p : p + l)
    }
  };
module.exports = {
  start: p(false),
  end: p(true)
}