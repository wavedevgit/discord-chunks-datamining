/** Chunk was on 86142 **/
/** chunk id: 651211, original params: e,t,n (module,exports,require) **/
var Chunk111898 = require("./111898.js"),
  Chunk147818 = require("./147818.js"),
  Chunk978260 = require("./978260.js"),
  Chunk646344 = require("./646344.js"),
  Chunk63532 = require("./63532.js");
module.exports = function(e, t, n, o) {
  if (!l(e)) return e;
  t = i(t, e);
  for (var c = false, u = t.length, d = u - 1, h = e; null != h && ++c < u;) {
    var p = a(t[c]),
      g = n;
    if (c != d) {
      var m = h[p];
      true === (g = o ? o(m, p, h) : true) && (g = l(m) ? m : s(t[c + 1]) ? [] : {})
    }
    r(h, p, g), h = h[p]
  }
  return e
}