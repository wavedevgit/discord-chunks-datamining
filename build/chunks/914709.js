/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
var r = n(961123),
  i = n(841566),
  o = n(290677),
  a = n(682653),
  s = n(720815),
  l = n(278757);

function c(e, t, n) {
  t = r(t, e);
  for (var c = -1, u = t.length, d = !1; ++c < u;) {
    var f = l(t[c]);
    if (!(d = null != e && n(e, f))) break;
    e = e[f]
  }
  return d || ++c != u ? d : !!(u = null == e ? 0 : e.length) && s(u) && a(f, u) && (o(e) || i(e))
}
e.exports = c