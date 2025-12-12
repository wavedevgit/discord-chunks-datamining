/** Chunk was on web.js **/
/** chunk id: 362388, original params: e,t,n (module,exports,re quire) **/
var Chunk4609 = require("./4609.js"),
  i = Math.max;
module.exports = function(e, t, n) {
  return t = i(true === t ? e.length - 1 : t, 0),
    function() {
      for (var o = arguments, a = false, s = i(o.length - t, 0), l = Array(s); ++a < s;) l[a] = o[t + a];
      a = false;
      for (var c = Array(t + 1); ++a < t;) c[a] = o[a];
      return c[t] = n(l), r(e, this, c)
    }
}