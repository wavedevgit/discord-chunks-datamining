/** Chunk was on 76030 **/
n.d(t, {
  K: () => c
}), n(47120);
var r = n(442837),
  i = n(158776),
  a = n(699516),
  o = n(9156),
  l = n(614185),
  s = n(231338);

function c(e) {
  let {
    location: t,
    user: n,
    privateChannel: c,
    forceHide: d = !1
  } = e, u = (0, l.D)(t), p = null == n ? void 0 : n.nameplate, m = (0, r.e7)([i.Z], () => {
    if (null == n) return !1;
    let e = i.Z.getStatus(n.id);
    return !new Set([s.Sk.OFFLINE, s.Sk.INVISIBLE, s.Sk.UNKNOWN]).has(e)
  }), f = (0, r.e7)([o.ZP, a.Z], () => {
    if (null == c || !(null == c ? void 0 : c.isDM())) return !1;
    let e = o.ZP.isChannelMuted(c.getGuildId(), c.id),
      t = a.Z.isIgnored(c.getRecipientId()),
      n = a.Z.isBlocked(c.getRecipientId());
    return e || t || n
  });
  return u && null != p && m && !f && !d ? p : void 0
}