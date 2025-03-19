/** Chunk was on 44799 **/
t.r(n), t.d(n, {
  default: () => m
});
var i = t(200651),
  r = t(512969),
  s = t(442837),
  o = t(353926),
  a = t(443002),
  l = t(430824),
  c = t(50101),
  d = t(639777),
  u = t(504392),
  x = t(981631);

function m(e) {
  let {
    guildId: n,
    powerupSkuId: t
  } = e, m = (0, s.e7)([l.Z], () => l.Z.getGuild(n)), v = (0, s.e7)([o.Z], () => o.Z.hasLoadedExperiments), _ = (0, d.Z)(n), p = (0, c.Ek)(m, "GuildPowerupsPage");
  return v && null != _ && null != m ? p ? _ ? (0, i.jsx)(u.Z, {
    guildId: n,
    powerupSkuId: t
  }) : (0, i.jsx)(a.Z, {
    analyticsLocation: {
      section: x.jXE.CHANNEL_LIST,
      object: x.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
    },
    guild: m
  }) : (0, i.jsx)(r.l_, {
    to: x.Z5c.CHANNEL(n)
  }) : null
}