/** Chunk was on 54030 **/
n.d(t, {
  Z: () => f
}), n(47120), n(733860);
var r, o = n(442837),
  i = n(570140),
  a = n(592125),
  l = n(271383),
  c = n(430824);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = [],
  _ = new Set;
class d extends(r = o.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(l.ZP, c.Z, a.Z), _ = new Set([...s = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []])
  }
  getState() {
    return {
      channelHistory: s
    }
  }
  getChannelHistory() {
    return s
  }
}
u(d, "displayName", "RecentVoiceChannelStore"), u(d, "persistKey", "RecentVoiceChannelStore");
let f = new d(i.Z, {
  POST_CONNECTION_OPEN: function() {
    _ = new Set([...s])
  },
  VOICE_CHANNEL_SELECT: function(e) {
    var t, n;
    let {
      channelId: r
    } = e;
    return !(null == r || !(null !== (n = null === (t = a.Z.getChannel(r)) || void 0 === t ? void 0 : t.isVocal()) && void 0 !== n && n) || _.has(r)) && (s.unshift(r), _.add(r), s.length > 10 && (s.length = 10, _ = new Set([...s])), !0)
  }
})