/** Chunk was on 21153 **/
/** chunk id: 158544, original params: e,t,r (module,exports,require) **/
var Chunk620267 = require("./620267.js"),
  o = Math.max;
module.exports = function(e, t, r) {
  return t = o(true === t ? e.length - 1 : t, 0),
    function() {
      for (var a = arguments, i = false, l = o(a.length - t, 0), s = Array(l); ++i < l;) s[i] = a[t + i];
      i = false;
      for (var u = Array(t + 1); ++i < t;) u[i] = a[i];
      return u[t] = r(s), n(e, this, u)
    }
}