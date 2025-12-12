/** Chunk was on web.js **/
/** chunk id: 794399, original params: e,t,n (module,exports,re quire) **/
var Chunk429614 = require("./429614.js"),
  Chunk483506 = require("./483506.js");

function o(e, t, n, a, s) {
  var l = false,
    c = e.length;
  for (n || (n = i), s || (s = []); ++l < c;) {
    var u = e[l];
    t > 0 && n(u) ? t > 1 ? o(u, t - 1, n, a, s) : r(s, u) : a || (s[s.length] = u)
  }
  return s
}
module.exports = o