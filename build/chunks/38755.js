/** Chunk was on 55196 **/
t.d(l, {
  Z: () => s
}), t(388685);
var n = t(73800),
  i = t(763520);

function s(e) {
  let {
    location: l,
    videoSpinnerContext: t,
    userId: s,
    streamId: r,
    loading: a,
    paused: o = !1
  } = e, [c] = n.useState(() => new i.o(l));
  n.useEffect(() => {
    o || (a ? c.onSpinnerStarted() : null != r && c.trackSpinnerDuration(t, s, r))
  }, [a, o, r, c, t, s])
}