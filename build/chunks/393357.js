/** Chunk was on 44799 **/
t.r(n), t.d(n, {
  default: () => p
});
var r = t(200651),
  i = t(512969),
  o = t(442837),
  s = t(353926),
  a = t(443002),
  l = t(430824),
  c = t(50101),
  d = t(639777),
  u = t(504392),
  m = t(981631);

function p(e) {
  let {
    guildId: n,
    powerupSkuId: t
  } = e, p = (0, o.e7)([l.Z], () => l.Z.getGuild(n)), x = (0, o.e7)([s.Z], () => s.Z.hasLoadedExperiments), v = (0, d.Z)(n), _ = (0, c.Ek)(p, "GuildPowerupsPage");
  return x && null != v && null != p ? _ ? v ? (0, r.jsx)(u.Z, {
    guildId: n,
    powerupSkuId: t
  }) : (0, r.jsx)(a.Z, {
    analyticsLocation: {
      section: m.jXE.CHANNEL_LIST,
      object: m.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
    },
    guild: p
  }) : (0, r.jsx)(i.l_, {
    to: m.Z5c.CHANNEL(n)
  }) : null
}