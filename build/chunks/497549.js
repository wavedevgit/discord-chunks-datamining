/** Chunk was on web.js **/
var r = n(46166),
  i = n(107378),
  o = n(849513);

function a(e) {
  var t = i(e);
  return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function(n) {
    return n === e || r(n, e, t)
  }
}
e.exports = a