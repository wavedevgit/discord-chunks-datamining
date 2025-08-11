/** Chunk was on 50448 **/
/** chunk id: 998659, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk764908 = require("./764908.js"),
  Chunk505072 = require("./505072.js"),
  Chunk565130 = require("./565130.js"),
  Chunk717130 = require("./717130.js"),
  s = Chunk764908("".charAt),
  c = Chunk764908("".charCodeAt),
  f = Chunk764908("".slice),
  a = function(t) {
    return function(r, n) {
      var e, a, p = i(u(r)),
        l = o(n),
        v = p.length;
      return l < 0 || l >= v ? t ? "" : true : (e = c(p, l)) < 55296 || e > 56319 || l + 1 === v || (a = c(p, l + 1)) < 56320 || a > 57343 ? t ? s(p, l) : e : t ? f(p, l, l + 2) : (e - 55296 << 10) + (a - 56320) + 65536
    }
  };
module.exports = {
  codeAt: a(false),
  charAt: a(true)
}