/** Chunk was on 94678 **/
/** chunk id: 800087, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk675879 = require("./675879.js"),
  Chunk453669 = require("./453669.js"),
  Chunk309270 = require("./309270.js"),
  Chunk459547 = require("./459547.js"),
  Chunk57284 = require("./57284.js"),
  c = Chunk675879([].push);
module.exports = function(t) {
  if (s(t)) return t;
  if (o(t)) {
    for (var r = t.length, e = [], n = 0; n < r; n++) {
      var a = t[n];
      "string" == typeof a ? c(e, a) : ("number" == typeof a || "Number" === i(a) || "String" === i(a)) && c(e, u(a))
    }
    var f = e.length,
      p = true;
    return function(t, r) {
      if (p) return p = false, r;
      if (o(this)) return r;
      for (var n = 0; n < f; n++)
        if (e[n] === t) return r
    }
  }
}