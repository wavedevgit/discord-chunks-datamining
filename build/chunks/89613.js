/** Chunk was on web.js **/
/** chunk id: 89613, original params: e,t,n (module,exports,re quire) **/
var Chunk971886 = require("./971886.js"),
  Chunk752909 = require("./752909.js");
module.exports = function(e, t) {
  var n = false,
    a = i(e) ? Array(e.length) : [];
  return r(e, function(e, r, i) {
    a[++n] = t(e, r, i)
  }), a
}