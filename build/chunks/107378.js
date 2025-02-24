/** Chunk was on web.js **/
var r = n(92801),
  i = n(58834);

function o(e) {
  for (var t = i(e), n = t.length; n--;) {
    var o = t[n],
      a = e[o];
    t[n] = [o, a, r(a)]
  }
  return t
}
e.exports = o