/** Chunk was on 1272 (001d1b875900c1de.js) **/
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(442837),
  l = n(481060),
  o = n(949389),
  a = n(324262),
  s = n(434404),
  c = n(899667),
  u = n(267642),
  d = n(981631),
  p = n(388032),
  h = n(571472);
let f = e => {
  let {
    guild: t
  } = e, n = t.id, f = (0, i.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(t.id));
  return null == f || 0 >= (0, u._k)(f, n) ? null : (0, r.jsx)(a.Z, {
    guild: t,
    onDismissed: () => {
      (0, o.GO)(n)
    },
    onClick: () => {
      s.Z.open(n, d.pNK.GUILD_PREMIUM)
    },
    message: p.NW.string(p.t.uogVVl),
    trackingSource: d.PsQ.GRACE_PERIOD_NOTICE,
    type: d.vID.GUILD_BOOSTING_GRACE_PERIOD,
    image: h,
    cta: p.NW.string(p.t["4E1M8P"]),
    ctaColor: l.Ttl.PRIMARY
  })
}