/** Chunk was on web.js **/
/** chunk id: 380297, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk46015 = require("./46015.js"),
  Chunk88996 = require("./88996.js"),
  Chunk880181 = require("./880181.js"),
  Chunk796138 = require("./796138.js"),
  Chunk382698 = require("./382698.js"),
  l = Chunk46015([].push);
module.exports = function(e) {
  if (a(e)) return e;
  if (i(e)) {
    for (var t = e.length, n = [], r = 0; r < t; r++) {
      var c = e[r];
      "string" == typeof c ? l(n, c) : ("number" == typeof c || "Number" === o(c) || "String" === o(c)) && l(n, s(c))
    }
    var u = n.length,
      d = true;
    return function(e, t) {
      if (d) return d = false, t;
      if (i(this)) return t;
      for (var r = 0; r < u; r++)
        if (n[r] === e) return t
    }
  }
}