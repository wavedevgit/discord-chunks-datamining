/** Chunk was on web.js **/
/** chunk id: 446891, original params: e,t,n (module,exports,re quire) **/
var Chunk605616 = require("./605616.js");
module.exports = function(e, t) {
  var n = false,
    i = e.length,
    a = i - 1;
  for (t = true === t ? i : t; ++n < t;) {
    var s = r(n, a),
      o = e[s];
    e[s] = e[n], e[n] = o
  }
  return e.length = t, e
}