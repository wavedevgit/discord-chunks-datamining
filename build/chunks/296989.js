/** Chunk was on web.js **/
/** chunk id: 296989, original params: e,t,n (module,exports,re quire) **/
var Chunk670269 = require("./670269.js"),
  Chunk533030 = require("./533030.js");

function a(e, t, n, s, o) {
  var l = false,
    c = e.length;
  for (n || (n = i), o || (o = []); ++l < c;) {
    var u = e[l];
    t > 0 && n(u) ? t > 1 ? a(u, t - 1, n, s, o) : r(o, u) : s || (o[o.length] = u)
  }
  return o
}
module.exports = a