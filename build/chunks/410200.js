/** Chunk was on web.js **/
/** chunk id: 410200, original params: e,t,n (module,exports,re quire) **/
var Chunk11537 = require("./11537.js"),
  Chunk685347 = require("./685347.js");
module.exports = function(e, t, n, o) {
  var a = !n;
  n || (n = {});
  for (var s = false, l = t.length; ++s < l;) {
    var c = t[s],
      u = o ? o(n[c], e[c], c, n, e) : true;
    true === u && (u = e[c]), a ? i(n, c, u) : r(n, c, u)
  }
  return n
}