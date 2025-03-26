/** Chunk was on 52272 **/
n.d(t, {
  Z: () => u
});
var r = n(200651),
  i = n(192379),
  o = n(447543),
  a = n(100527),
  l = n(906732),
  s = n(792766),
  c = n(955415);
let u = e => {
  let {
    invite: t,
    stageInstance: n,
    guild: u,
    isMember: d,
    onTransitionToInviteChannel: p,
    onAcceptInstantInvite: m
  } = e, {
    analyticsLocations: f
  } = (0, l.ZP)(a.Z.INVITE_EMBED), h = i.useCallback(() => {
    let e = "noop";
    d ? (p(), e = "transition") : (m(), e = "accept"), (0, o.r$)(t, e, f)
  }, [t, f, d, p, m]);
  return (0, r.jsx)(c.Z, {
    children: (0, r.jsx)(s.Z, {
      isEmbed: !0,
      stageInstance: n,
      guild: u,
      onClick: h
    })
  })
}