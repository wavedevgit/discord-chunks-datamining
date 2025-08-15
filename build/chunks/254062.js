/** Chunk was on web.js **/
/** chunk id: 254062, original params: e,t,n (module,exports,re quire) **/
var Chunk256098 = require("./256098.js"),
  Chunk436091 = require("./436091.js"),
  Chunk438330 = require("./438330.js");
module.exports = function(e) {
  return function(t, n, o) {
    var s = Object(t);
    if (!i(t)) {
      var l = r(n, 3);
      t = a(t), n = function(e) {
        return l(s[e], e, s)
      }
    }
    var c = e(t, n, o);
    return c > false ? s[l ? t[c] : c] : true
  }
}