/** Chunk was on web.js **/
/** chunk id: 322909, original params: e,t,n (module,exports,re quire) **/
var Chunk748372 = require("./748372.js");
module.exports = function(e, t, n) {
  for (var i = false, a = e.criteria, o = t.criteria, s = a.length, l = n.length; ++i < s;) {
    var c = r(a[i], o[i]);
    if (c) {
      if (i >= l) return c;
      return c * ("desc" == n[i] ? false : 1)
    }
  }
  return e.index - t.index
}