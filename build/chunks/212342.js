/** Chunk was on 52272 **/
n.d(t, {
  Z: () => x
}), n(47120), n(789020);
var r, i, o, a = n(442837),
  l = n(433517),
  s = n(570140),
  c = n(314897),
  u = n(592125),
  d = n(496675),
  p = n(594174),
  m = n(630388),
  f = n(110630),
  h = n(981631);
let g = "ChannelFollowingBumpChannels",
  _ = new Set,
  b = new Set;
class v extends(r = a.ZP.Store) {
  initialize() {
    this.waitFor(c.default), _ = new Set(l.K.get(g))
  }
  shouldShowBump(e) {
    return b.has(e)
  }
}
o = "ChannelFollowingPublishBumpStore", (i = "displayName") in v ? Object.defineProperty(v, i, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : v[i] = o;
let x = new v(s.Z, {
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: r,
      optimistic: i
    } = e;
    if (i || _.has(n)) return !1;
    let o = u.Z.getChannel(n),
      a = p.default.getCurrentUser();
    if (!(null != o && o.type === h.d4z.GUILD_ANNOUNCEMENT && (0, f.Z)(r) && (null != a && (null === (t = r.author) || void 0 === t ? void 0 : t.id) === a.id ? d.Z.can(h.Plq.SEND_MESSAGES, o) : d.Z.can(h.Plq.MANAGE_MESSAGES, o)) && !m.yE(Number(r.flags), h.iLy.CROSSPOSTED))) return !1;
    b.add(r.id)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e;
    b.has(t.id) && m.yE(Number(t.flags), h.iLy.CROSSPOSTED) && b.delete(t.id)
  },
  CHANNEL_SELECT: function(e) {
    b.clear()
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED: function(e) {
    let {
      messageId: t
    } = e;
    b.delete(t)
  },
  CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY: function(e) {
    let {
      channelId: t
    } = e;
    _.add(t), l.K.set(g, _), b.clear()
  }
})