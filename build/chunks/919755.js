/** Chunk was on 53494 **/
n.d(t, {
  Z: () => u
}), n(47120);
var r = n(442837),
  i = n(592125),
  o = n(496675),
  l = n(306680),
  a = n(9156),
  s = n(709054),
  c = n(231338);

function u(e) {
  return (0, r.cj)([i.Z, l.ZP, a.ZP, o.Z], () => s.default.keys(e).reduce((e, t) => {
    let n = i.Z.getChannel(t),
      r = null == n ? void 0 : n.isGuildVocal();
    return e.badge = e.badge + l.ZP.getMentionCount(t), e.unread = e.unread || !r && o.Z.can(c.Pl.VIEW_CHANNEL, n) && l.ZP.hasUnread(t) && !a.ZP.isChannelMuted(null == n ? void 0 : n.getGuildId(), t), e
  }, {
    badge: 0,
    unread: !1
  }))
}