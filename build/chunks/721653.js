/** Chunk was on web.js **/
var r = n(687249),
  i = n(779518),
  o = 1,
  a = 2;

function s(e, t, n, s) {
  var l = n.length,
    c = l,
    u = !s;
  if (null == e) return !c;
  for (e = Object(e); l--;) {
    var d = n[l];
    if (u && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
  }
  for (; ++l < c;) {
    var f = (d = n[l])[0],
      _ = e[f],
      p = d[1];
    if (u && d[2]) {
      if (void 0 === _ && !(f in e)) return !1
    } else {
      var h = new r;
      if (s) var g = s(_, p, f, e, t, h);
      if (!(void 0 === g ? i(p, _, o | a, s, h) : g)) return !1
    }
  }
  return !0
}
e.exports = s