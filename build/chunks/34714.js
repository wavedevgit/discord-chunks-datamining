/** Chunk was on 94678 **/
/** chunk id: 34714, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk675879 = require("./675879.js"),
  Chunk918078 = require("./918078.js"),
  Chunk57284 = require("./57284.js"),
  Chunk693755 = require("./693755.js"),
  u = Chunk675879("".charAt),
  c = Chunk675879("".charCodeAt),
  a = Chunk675879("".slice),
  f = function(t) {
    return function(r, e) {
      var n, f, p = s(i(r)),
        l = o(e),
        v = p.length;
      return l < 0 || l >= v ? t ? "" : true : (n = c(p, l)) < 55296 || n > 56319 || l + 1 === v || (f = c(p, l + 1)) < 56320 || f > 57343 ? t ? u(p, l) : n : t ? a(p, l, l + 2) : (n - 55296 << 10) + (f - 56320) + 65536
    }
  };
module.exports = {
  codeAt: f(false),
  charAt: f(true)
}