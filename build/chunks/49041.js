/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
var t = 800,
  n = 16,
  r = Date.now;

function i(e) {
  var i = 0,
    o = 0;
  return function() {
    var a = r(),
      s = n - (a - o);
    if (o = a, s > 0) {
      if (++i >= t) return arguments[0]
    } else i = 0;
    return e.apply(void 0, arguments)
  }
}
e.exports = i