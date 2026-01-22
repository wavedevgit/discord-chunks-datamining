/** Chunk was on web.js **/
/** chunk id: 992366, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk410323 = require("./410323.js"),
  Chunk120394 = require("./120394.js"),
  Chunk304880 = require("./304880.js"),
  Chunk321727 = require("./321727.js"),
  o = Chunk410323("".charAt),
  l = Chunk410323("".charCodeAt),
  c = Chunk410323("".slice),
  u = function(e) {
    return function(t, n) {
      var r, u, d = a(s(t)),
        f = i(n),
        p = d.length;
      return f < 0 || f >= p ? e ? "" : true : (r = l(d, f)) < 55296 || r > 56319 || f + 1 === p || (u = l(d, f + 1)) < 56320 || u > 57343 ? e ? o(d, f) : r : e ? c(d, f, f + 2) : (r - 55296 << 10) + (u - 56320) + 65536
    }
  };
module.exports = {
  codeAt: u(false),
  charAt: u(true)
}