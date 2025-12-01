/** Chunk was on 27978 **/
/** chunk id: 445299, original params: e,t,n (module,exports,require) **/
var Chunk11537 = require("./11537.js"),
  Chunk961123 = require("./961123.js"),
  Chunk682653 = require("./682653.js"),
  Chunk661233 = require("./661233.js"),
  Chunk278757 = require("./278757.js");
module.exports = function(e, t, n, o) {
  if (!l(e)) return e;
  t = i(t, e);
  for (var c = false, u = t.length, d = u - 1, h = e; null != h && ++c < u;) {
    var g = a(t[c]),
      m = n;
    if (c != d) {
      var p = h[g];
      true === (m = o ? o(p, g, h) : true) && (m = l(p) ? p : s(t[c + 1]) ? [] : {})
    }
    r(h, g, m), h = h[g]
  }
  return e
}