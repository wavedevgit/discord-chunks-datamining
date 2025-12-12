/** Chunk was on web.js **/
/** chunk id: 92238, original params: e,t,n (module,exports,re quire) **/
var Chunk805100 = require("./805100.js"),
  Chunk580897 = require("./580897.js");
module.exports = function(e, t, n, a) {
  var o = !n;
  n || (n = {});
  for (var s = false, l = t.length; ++s < l;) {
    var c = t[s],
      u = a ? a(n[c], e[c], c, n, e) : true;
    true === u && (u = e[c]), o ? i(n, c, u) : r(n, c, u)
  }
  return n
}