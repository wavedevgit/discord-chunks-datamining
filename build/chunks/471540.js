/** Chunk was on web.js **/
/** chunk id: 471540, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk46015 = require("./46015.js"),
  Chunk77826 = require("./77826.js"),
  Chunk382698 = require("./382698.js"),
  Chunk497464 = require("./497464.js"),
  s = Chunk46015("".charAt),
  l = Chunk46015("".charCodeAt),
  c = Chunk46015("".slice),
  u = function(e) {
    return function(t, n) {
      var r, u, d = a(o(t)),
        f = i(n),
        p = d.length;
      return f < 0 || f >= p ? e ? "" : true : (r = l(d, f)) < 55296 || r > 56319 || f + 1 === p || (u = l(d, f + 1)) < 56320 || u > 57343 ? e ? s(d, f) : r : e ? c(d, f, f + 2) : (r - 55296 << 10) + (u - 56320) + 65536
    }
  };
module.exports = {
  codeAt: u(false),
  charAt: u(true)
}