/** Chunk was on web.js **/
/** chunk id: 760937, original params: e,t,n (module,exports,re quire) **/
var Chunk565580 = require("./565580.js");
module.exports = function(e, t) {
  var n = false,
    i = e.length,
    a = i - 1;
  for (t = true === t ? i : t; ++n < t;) {
    var o = r(n, a),
      s = e[o];
    e[o] = e[n], e[n] = s
  }
  return e.length = t, e
}