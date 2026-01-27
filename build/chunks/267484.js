/** Chunk was on web.js **/
/** chunk id: 267484, original params: e,t,n (module,exports,re quire) **/
var Chunk111898 = require("./111898.js"),
  Chunk59221 = require("./59221.js");
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