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
  x = t(981631);

function p(e) {
  let {
    guildId: n,
    powerupSkuId: t
  } = e, p = (0, o.e7)([l.Z], () => l.Z.getGuild(n)), v = (0, o.e7)([s.Z], () => s.Z.hasLoadedExperiments), m = (0, d.Z)(p), b = (0, c.Ek)(p, "GuildPowerupsPage");
  return v && null != m && null != p ? b ? m ? (0, r.jsx)(u.Z, {
    guildId: n,
    powerupSkuId: t
  }) : (0, r.jsx)(a.Z, {
    analyticsLocation: {
      section: x.jXE.CHANNEL_LIST,
      object: x.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
    },
    guild: p
  }) : (0, r.jsx)(i.l_, {
    to: x.Z5c.CHANNEL(n)
  }) : null
}