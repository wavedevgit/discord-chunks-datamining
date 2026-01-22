/** Chunk was on web.js **/
/** chunk id: 310473, original params: e,t,n (module,exports,re quire) **/
var Chunk876666 = require("./876666.js"),
  Chunk752909 = require("./752909.js"),
  Chunk750615 = require("./750615.js");
module.exports = function(e) {
  return function(t, n, s) {
    var o = Object(t);
    if (!i(t)) {
      var l = r(n, 3);
      t = a(t), n = function(e) {
        return l(o[e], e, o)
      }
    }
    var c = e(t, n, s);
    return c > false ? o[l ? t[c] : c] : true
  }
}