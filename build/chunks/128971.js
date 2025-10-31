/** Chunk was on 64982 **/
/** chunk id: 128971, original params: e,t,n (module,exports,require) **/
var Chunk448730 = require("./448730.js"),
  Chunk386015 = require("./386015.js"),
  Chunk232396 = require("./232396.js"),
  Chunk263604 = require("./263604.js");
module.exports = function(e) {
  return function(t) {
    var n = i(t = a(t)) ? l(t) : true,
      s = n ? n[0] : t.charAt(0),
      o = n ? r(n, 1).join("") : t.slice(1);
    return s[e]() + o
  }
}