/** Chunk was on 44799 **/
t.r(n), t.d(n, {
  default: () => m
});
var r = t(200651),
  i = t(512969),
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
  } = e, m = (0, s.e7)([l.Z], () => l.Z.getGuild(n)), p = (0, s.e7)([o.Z], () => o.Z.hasLoadedExperiments), v = (0, d.Z)(m), b = (0, c.Ek)(m, "GuildPowerupsPage");
  return p && null != v && null != m ? b ? v ? (0, r.jsx)(u.Z, {
    guildId: n,
    powerupSkuId: t
  }) : (0, r.jsx)(a.Z, {
    analyticsLocation: {
      section: x.jXE.CHANNEL_LIST,
      object: x.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
    },
    guild: m
  }) : (0, r.jsx)(i.l_, {
    to: x.Z5c.CHANNEL(n)
  }) : null
}