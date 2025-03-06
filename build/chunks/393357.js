/** Chunk was on 44799 **/
t.r(n), t.d(n, {
  default: () => d
});
var r = t(200651),
  i = t(442837),
  o = t(443002),
  s = t(430824),
  a = t(639777),
  l = t(504392),
  c = t(981631);

function d(e) {
  let {
    guildId: n
  } = e, t = (0, i.e7)([s.Z], () => s.Z.getGuild(n)), d = (0, a.Z)(t);
  return null == d || null == t ? null : d ? (0, r.jsx)(l.Z, {
    guildId: n
  }) : (0, r.jsx)(o.Z, {
    analyticsLocation: {
      section: c.jXE.CHANNEL_LIST,
      object: c.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
    },
    guild: t
  })
}