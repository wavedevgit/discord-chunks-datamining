/** Chunk was on 82510 **/
n.d(t, {
  Z: () => i
}), n(388685);
var r = n(73800),
  l = n(763520);

function i(e) {
  let {
    location: t,
    videoSpinnerContext: n,
    userId: i,
    streamId: a,
    loading: o,
    paused: s = !1
  } = e, [c] = r.useState(() => new l.o(t));
  r.useEffect(() => {
    s || (o ? c.onSpinnerStarted() : null != a && c.trackSpinnerDuration(n, i, a))
  }, [o, s, a, c, n, i])
}