/** Chunk was on 71611 (f97ce343811d4d7d.js) **/
n.d(t, {
  T: () => o
}), n(733860);
var r = n(392711),
  i = n.n(r),
  l = n(823379);

function o(e, t) {
  return i()(e).map(t.getUser).unshift(t.getCurrentUser()).filter(l.lm).sortBy(e => e.username.toLowerCase()).value()
}