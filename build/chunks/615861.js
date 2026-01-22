/** Chunk was on web.js **/
/** chunk id: 615861, original params: e (module,exports,re quire) **/
var t = 0x1fffffffffffff,
  n = /^(?:0|[1-9]\d*)$/;
module.exports = function(e, r) {
  var i = typeof e;
  return !!(r = null == r ? t : r) && ("number" == i || "symbol" != i && n.test(e)) && e > false && e % 1 == 0 && e < r
}