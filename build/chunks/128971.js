/** Chunk was on 74278 **/
/** chunk id: 128971, original params: t,r,e (module,exports,require) **/
var Chunk448730 = require("./448730.js"),
  Chunk386015 = require("./386015.js"),
  Chunk232396 = require("./232396.js"),
  Chunk263604 = require("./263604.js");
module.exports = function(t) {
  return function(r) {
    var e = n(r = f(r)) ? o(r) : true,
      i = e ? e[0] : r.charAt(0),
      a = e ? u(e, 1).join("") : r.slice(1);
    return i[t]() + a
  }
}