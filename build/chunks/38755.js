/** Chunk was on 47218 **/
n.d(t, {
  Z: () => r
}), n(388685);
var l = n(73800),
  i = n(763520);

function r(e) {
  let {
    location: t,
    videoSpinnerContext: n,
    userId: r,
    streamId: o,
    loading: a,
    paused: s = !1
  } = e, [c] = l.useState(() => new i.o(t));
  l.useEffect(() => {
    s || (a ? c.onSpinnerStarted() : null != o && c.trackSpinnerDuration(n, r, o))
  }, [a, s, o, c, n, r])
}