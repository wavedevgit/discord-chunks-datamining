/** Chunk was on 44799 **/
t.r(n), t.d(n, {
  default: () => x
});
var i = t(200651),
  r = t(512969),
  o = t(442837),
  s = t(353926),
  a = t(443002),
  l = t(430824),
  c = t(50101),
  d = t(639777),
  u = t(504392),
  m = t(981631);

function x(e) {
  let {
    guildId: n,
    powerupSkuId: t
  } = e, x = (0, o.e7)([l.Z], () => l.Z.getGuild(n)), v = (0, o.e7)([s.Z], () => s.Z.hasLoadedExperiments), p = (0, d.Z)(n), _ = (0, c.Ek)(x, "GuildPowerupsPage");
  return v && null != p && null != x ? _ ? p ? (0, i.jsx)(u.Z, {
    guildId: n,
    powerupSkuId: t
  }) : (0, i.jsx)(a.Z, {
    analyticsLocation: {
      section: m.jXE.CHANNEL_LIST,
      object: m.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
    },
    guild: x
  }) : (0, i.jsx)(r.l_, {
    to: m.Z5c.CHANNEL(n)
  }) : null
}