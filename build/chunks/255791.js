/** Chunk was on 1272 (d2669c1c27f74703.js) **/
n.d(t, {
  Z: () => g
}), n(47120);
var r, i, l, o = n(442837),
  a = n(433517),
  s = n(570140),
  c = n(650774),
  u = n(430824),
  d = n(496675),
  p = n(981631);
let h = {
  MAX_MEMBER_COUNT: new Set
};
class f extends(r = o.ZP.Store) {
  initialize() {
    var e;
    this.waitFor(d.Z, u.Z, c.Z), this.syncWith([d.Z, u.Z, c.Z], p.dG4), a.K.remove(p.vID.MAX_MEMBER_COUNT_100), a.K.remove(p.vID.MAX_MEMBER_COUNT_250), e = new Set(a.K.get(p.vID.MAX_MEMBER_COUNT)), h[p.vID.MAX_MEMBER_COUNT] = void 0 !== e ? e : new Set
  }
  isVisible(e) {
    var t;
    if (null == e) return !1;
    let n = null !== (t = c.Z.getMemberCount(e.id)) && void 0 !== t ? t : 0,
      r = d.Z.can(p.Plq.ADMINISTRATOR, e);
    return !e.hasFeature(p.oNc.CLAN) && !h[p.vID.MAX_MEMBER_COUNT].has(e.id) && r && e.maxMembers > 0 && e.maxMembers - n <= 1e4
  }
}
l = "MaxMemberCountChannelNoticeStore", (i = "displayName") in f ? Object.defineProperty(f, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : f[i] = l;
let g = new f(s.Z, {
  MAX_MEMBER_COUNT_NOTICE_DISMISS: function(e) {
    let t = e.guildId;
    if (!h[p.vID.MAX_MEMBER_COUNT].has(t)) return h[p.vID.MAX_MEMBER_COUNT].add(t), a.K.set(p.vID.MAX_MEMBER_COUNT, h[p.vID.MAX_MEMBER_COUNT]), !0
  }
})