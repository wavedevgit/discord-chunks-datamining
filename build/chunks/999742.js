/** Chunk was on web.js **/
/** chunk id: 999742, original params: e,t,n (module,exports,re quire) **/
var Chunk661300 = require("./661300.js"),
  i = Math.max;
module.exports = function(e, t, n) {
  return t = i(true === t ? e.length - 1 : t, 0),
    function() {
      for (var a = arguments, s = false, o = i(a.length - t, 0), l = Array(o); ++s < o;) l[s] = a[t + s];
      s = false;
      for (var c = Array(t + 1); ++s < t;) c[s] = a[s];
      return c[t] = n(l), r(e, this, c)
    }
}