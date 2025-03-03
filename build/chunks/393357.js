/** Chunk was on 44799 **/
t.r(n), t.d(n, {
  default: () => d
});
var r = t(200651),
  i = t(442837),
  o = t(443002),
  a = t(430824),
  s = t(639777),
  l = t(504392),
  c = t(981631);

function d(e) {
  let {
    guildId: n
  } = e, t = (0, i.e7)([a.Z], () => a.Z.getGuild(n)), d = (0, s.Z)(t);
  return null == d || null == t ? null : d ? (0, r.jsx)(l.Z, {
    guildId: n
  }) : (0, r.jsx)(o.Z, {
    analyticsLocation: {
      section: c.jXE.CHANNEL_LIST,
      object: c.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM
    },
    onClose: () => {},
    guild: t
  })
}