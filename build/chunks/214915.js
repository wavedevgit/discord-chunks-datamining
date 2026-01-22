/** Chunk was on 47950 **/
/** chunk id: 214915, original params: e,t,r (module,exports,require) **/
var Chunk228314 = require("./228314.js"),
  Chunk915124 = require("./915124.js");
module.exports = function(e) {
  return n(function(t, r) {
    var n = false,
      a = r.length,
      i = a > 1 ? r[a - 1] : true,
      l = a > 2 ? r[2] : true;
    for (i = e.length > 3 && "function" == typeof i ? (a--, i) : true, l && o(r[0], r[1], l) && (i = a < 3 ? true : i, a = 1), t = Object(t); ++n < a;) {
      var s = r[n];
      s && e(t, s, n, i)
    }
    return t
  })
}