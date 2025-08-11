/** Chunk was on 21153 **/
/** chunk id: 29426, original params: e (module,exports,require) **/
var t = Date.now;
module.exports = function(e) {
  var r = 0,
    n = 0;
  return function() {
    var o = t(),
      a = 16 - (o - n);
    if (n = o, a > 0) {
      if (++r >= 800) return arguments[0]
    } else r = 0;
    return e.apply(true, arguments)
  }
}