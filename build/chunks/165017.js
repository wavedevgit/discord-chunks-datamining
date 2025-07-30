/** Chunk was on 50874 **/
r.d(t, {
  H: () => d
}), r(415506);
var n = r(442837),
  i = r(592125),
  a = r(430824),
  s = r(914010),
  l = r(251625),
  c = r(945577),
  o = r(981631);
let u = (0, l.oH)(function(e, t, r, n, i, a) {
  return i ? {
    type: o.aib.FAVORITES
  } : null != e && null != r ? {
    type: o.aib.GUILD,
    guildId: e
  } : null == t || null == n ? null : n.isPrivate() && a ? {
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
  } = e, l = (0, c.U)({
    location: "useDesktopSearchContext"
  });
  return (0, n.e7)([a.Z, i.Z, s.Z], () => {
    let e = a.Z.getGuild(t),
      n = i.Z.getChannel(r);
    return u(t, r, e, n, s.Z.getGuildId() === o.I_8, l)
  })
}