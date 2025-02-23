/** Chunk was on 45432 (0424b60f071a12d1.js) **/
n.d(t, {
  Z: () => h
}), n(47120), n(733860);
var l, i = n(442837),
  r = n(570140),
  u = n(592125),
  o = n(271383),
  a = n(430824);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = [],
  d = new Set;
class p extends(l = i.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(o.ZP, a.Z, u.Z), d = new Set([...c = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []])
  }
  getState() {
    return {
      channelHistory: c
    }
  }
  getChannelHistory() {
    return c
  }
}
s(p, "displayName", "RecentVoiceChannelStore"), s(p, "persistKey", "RecentVoiceChannelStore");
let h = new p(r.Z, {
  POST_CONNECTION_OPEN: function() {
    d = new Set([...c])
  },
  VOICE_CHANNEL_SELECT: function(e) {
    var t, n;
    let {
      channelId: l
    } = e;
    return !(null == l || !(null !== (n = null === (t = u.Z.getChannel(l)) || void 0 === t ? void 0 : t.isVocal()) && void 0 !== n && n) || d.has(l)) && (c.unshift(l), d.add(l), c.length > 10 && (c.length = 10, d = new Set([...c])), !0)
  }
})