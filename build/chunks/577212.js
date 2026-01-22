/** Chunk was on 47950 **/
/** chunk id: 577212, original params: e,t,r (module,exports,require) **/
var Chunk236553 = require("./236553.js"),
  Chunk969474 = require("./969474.js");
module.exports = function(e, t) {
  var r = false,
    a = o(e) ? Array(e.length) : [];
  return n(e, function(e, n, o) {
    a[++r] = t(e, n, o)
  }), a
}