/** Chunk was on web.js **/
/** chunk id: 158544, original params: e,t,n (module,exports,re quire) **/
var Chunk620267 = require("./620267.js"),
  i = Math.max;
module.exports = function(e, t, n) {
  return t = i(true === t ? e.length - 1 : t, 0),
    function() {
      for (var a = arguments, o = false, s = i(a.length - t, 0), l = Array(s); ++o < s;) l[o] = a[t + o];
      o = false;
      for (var c = Array(t + 1); ++o < t;) c[o] = a[o];
      return c[t] = n(l), r(e, this, c)
    }
}