/** Chunk was on 19138 **/
/** chunk id: 651211, original params: e,t,r (module,exports,require) **/
var Chunk111898 = require("./111898.js"),
  Chunk147818 = require("./147818.js"),
  Chunk978260 = require("./978260.js"),
  Chunk646344 = require("./646344.js"),
  Chunk63532 = require("./63532.js");
module.exports = function(e, t, r, s) {
  if (!o(e)) return e;
  t = i(t, e);
  for (var u = false, l = t.length, p = l - 1, d = e; null != d && ++u < l;) {
    var f = c(t[u]),
      h = r;
    if (u != p) {
      var g = d[f];
      true === (h = s ? s(g, f, d) : true) && (h = o(g) ? g : a(t[u + 1]) ? [] : {})
    }
    n(d, f, h), d = d[f]
  }
  return e
}