/** Chunk was on web.js **/
/** chunk id: 965072, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk410323 = require("./410323.js"),
  Chunk703441 = require("./703441.js"),
  Chunk339626 = require("./339626.js"),
  Chunk647055 = require("./647055.js"),
  Chunk304880 = require("./304880.js"),
  l = Chunk410323([].push);
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