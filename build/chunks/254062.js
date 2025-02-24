/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
var r = n(256098),
  i = n(436091),
  o = n(438330);

function a(e) {
  return function(t, n, a) {
    var s = Object(t);
    if (!i(t)) {
      var l = r(n, 3);
      t = o(t), n = function(e) {
        return l(s[e], e, s)
      }
    }
    var c = e(t, n, a);
    return c > -1 ? s[l ? t[c] : c] : void 0
  }
}
e.exports = a