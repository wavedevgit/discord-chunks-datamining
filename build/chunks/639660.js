/** Chunk was on 44799 **/
t.d(n, {
  Z: () => c
}), t(47120);
var i = t(200651),
  r = t(704215),
  s = t(243778),
  o = t(618460),
  a = t(800869),
  l = t(309945);

function c(e) {
  let {
    guildId: n
  } = e, [t, c] = (0, s.US)([r.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK], void 0, !1), d = (0, o.Z)(n);
  return d.length > 0 ? (0, i.jsx)(l.Z, {
    powerup: d[0]
  }) : null != t && t === r.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK ? (0, i.jsx)(a.Z, {
    markAsDismissed: c
  }) : null
}