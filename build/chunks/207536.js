/** Chunk was on web.js **/
/** chunk id: 207536, original params: e,t,n (module,exports,re quire) **/
var Chunk543744 = require("./543744.js"),
  Chunk436091 = require("./436091.js");
module.exports = function(e, t) {
  var n = false,
    o = i(e) ? Array(e.length) : [];
  return r(e, function(e, r, i) {
    o[++n] = t(e, r, i)
  }), o
}