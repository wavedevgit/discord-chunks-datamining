/** Chunk was on 66382 **/
/** chunk id: 759600, original params: e,t,r (module,exports,require) **/
var Chunk625898 = require("./625898.js"),
  Chunk771701 = require("./771701.js");
module.exports = function(e, t) {
  var r = false,
    a = o(e) ? Array(e.length) : [];
  return n(e, function(e, n, o) {
    a[++r] = t(e, n, o)
  }), a
}