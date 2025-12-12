/** Chunk was on web.js **/
/** chunk id: 49041, original params: e (module,exports,re quire) **/
var t = 800,
  n = 16,
  r = Date.now;
module.exports = function(e) {
  var i = 0,
    a = 0;
  return function() {
    var o = r(),
      s = n - (o - a);
    if (a = o, s > 0) {
      if (++i >= t) return arguments[0]
    } else i = 0;
    return e.apply(true, arguments)
  }
}