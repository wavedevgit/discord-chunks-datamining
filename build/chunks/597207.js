/** Chunk was on 66382 **/
/** chunk id: 597207, original params: e,t,r (module,exports,require) **/
var Chunk317063 = require("./317063.js"),
  Chunk757209 = require("./757209.js");
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