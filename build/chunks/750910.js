/** Chunk was on 1272 (4b1b41bf0e3472e1.js) **/
n.d(t, {
  H: () => l
});
var r = n(192379),
  i = n(726115);

function l(e) {
  let {
    guildDiscoveryCardSeenManager: t,
    loadId: n
  } = e, l = r.useCallback((e, r) => {
    t.markAsSeen(r, e, n)
  }, [t, n]), o = r.useCallback((e, t, r, l) => (0, i.vL)({
    loadId: n,
    guildId: e,
    index: t,
    categoryId: r,
    analyticsLocation: l
  }), [n]);
  return r.useMemo(() => ({
    onGuildCardSeen: l,
    onGuildCardClick: o
  }), [o, l])
}