/** Chunk was on 55196 **/
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
    streamId: s,
    loading: a,
    paused: o = !1
  } = e, [c] = l.useState(() => new i.o(t));
  l.useEffect(() => {
    o || (a ? c.onSpinnerStarted() : null != s && c.trackSpinnerDuration(n, r, s))
  }, [a, o, s, c, n, r])
}