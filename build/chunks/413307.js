/** Chunk was on 1272 (d2669c1c27f74703.js) **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  l = n(949389),
  o = n(324262),
  a = n(434404),
  s = n(981631),
  c = n(388032),
  u = n(438825);
let d = e => {
  let {
    guild: t
  } = e, n = i.useCallback(() => {
    (0, l.K7)(t.id)
  }, [t.id]);
  return (0, r.jsx)(o.Z, {
    guild: t,
    onDismissed: n,
    onClick: () => a.Z.open(t.id, s.pNK.COMMUNITY),
    message: c.NW.string(c.t["2klD0d"]),
    trackingSource: s.PsQ.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
    type: s.vID.PUBLIC_UPSELL,
    image: u,
    cta: c.NW.string(c.t.hvVgAQ)
  })
}