/** Chunk was on 88007 **/
/** chunk id: 128971, original params: e,t,u (module,exports,require) **/
var Chunk448730 = require("./448730.js"),
  Chunk386015 = require("./386015.js"),
  Chunk232396 = require("./232396.js"),
  Chunk263604 = require("./263604.js");
module.exports = function(e) {
  return function(t) {
    var u = n(t = o(t)) ? f(t) : true,
      i = u ? u[0] : t.charAt(0),
      s = u ? r(u, 1).join("") : t.slice(1);
    return i[e]() + s
  }
}