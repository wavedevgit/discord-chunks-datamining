/** Chunk was on 1272 **/
n.d(t, {
  Z: () => m
}), n(47120), n(773603);
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(447543),
  a = n(568154),
  s = n(703656),
  c = n(430824),
  u = n(701190),
  d = n(449934),
  p = n(650233),
  h = n(981631),
  f = n(898625),
  g = n(71002);
let m = e => {
  let {
    guildId: t,
    inviteCode: n
  } = e, [m, b] = i.useState(f.hO.INITIAL), [_, E] = i.useState(null != n);
  i.useEffect(() => {
    null != n && o.ZP.resolveInvite(n, "Hub").finally(() => E(!1))
  }, [n]);
  let O = (0, l.e7)([u.Z], () => null != n ? u.Z.getInvite(n) : null),
    N = (0, l.e7)([c.Z], () => c.Z.getGuild(t));
  i.useEffect(() => {
    null != N && (0, s.uL)(h.Z5c.CHANNEL(t))
  }, [N, t]);
  let v = i.useCallback(e => {
      b(t => Math.max(t, e))
    }, []),
    y = (0, d.gK)();
  return (0, r.jsx)("div", {
    className: g.page,
    children: (0, r.jsxs)(a.Z, {
      embedded: !0,
      splash: y,
      waveState: m,
      showLogo: !1,
      updateWaveState: v,
      children: [(0, r.jsx)("div", {
        className: g.dragRegion
      }), (0, r.jsx)("div", {
        className: g.contentWrapper,
        children: !_ && (0, r.jsx)(p.H, {
          invite: O
        })
      })]
    })
  })
}