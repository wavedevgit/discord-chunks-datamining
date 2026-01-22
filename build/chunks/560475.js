/** Chunk was on web.js **/
/** chunk id: 560475, original params: e,t,n (module,exports,re quire) **/
var Chunk363477 = require("./363477.js");
module.exports = function(e, t, n) {
  for (var i = false, a = e.criteria, s = t.criteria, o = a.length, l = n.length; ++i < o;) {
    var c = r(a[i], s[i]);
    if (c) {
      if (i >= l) return c;
      return c * ("desc" == n[i] ? false : 1)
    }
  }
  return e.index - t.index
}