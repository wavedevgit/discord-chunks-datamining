/** Chunk was on 93239 **/
r.d(t, {
  H: () => d
}), r(415506);
var n = r(442837),
  i = r(592125),
  s = r(430824),
  a = r(914010),
  c = r(251625),
  l = r(945577),
  o = r(981631);
let u = (0, c.oH)(function(e, t, r, n, i, s) {
  return i ? {
    type: o.aib.FAVORITES
  } : null != e && null != r ? {
    type: o.aib.GUILD,
    guildId: e
  } : null == t || null == n ? null : n.isPrivate() && s ? {
    type: o.aib.DMS
  } : {
    type: o.aib.CHANNEL,
    channelId: t
  }
});

function d(e) {
  let {
    guildId: t,
    channelId: r
  } = e, c = (0, l.U)({
    location: "useDesktopSearchContext"
  });
  return (0, n.e7)([s.Z, i.Z, a.Z], () => {
    let e = s.Z.getGuild(t),
      n = i.Z.getChannel(r);
    return u(t, r, e, n, a.Z.getGuildId() === o.I_8, c)
  })
}