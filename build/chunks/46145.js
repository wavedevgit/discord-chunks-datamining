/** Chunk was on 24491 **/
n.d(t, {
  Z: () => g
}), n(47120), n(733860);
var r, i = n(442837),
  l = n(570140),
  u = n(592125),
  o = n(271383),
  c = n(430824);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = [],
  d = new Set;
class f extends(r = i.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(o.ZP, c.Z, u.Z), d = new Set([...s = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []])
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
a(f, "displayName", "RecentVoiceChannelStore"), a(f, "persistKey", "RecentVoiceChannelStore");
let g = new f(l.Z, {
  POST_CONNECTION_OPEN: function() {
    d = new Set([...s])
  },
  VOICE_CHANNEL_SELECT: function(e) {
    var t, n;
    let {
      channelId: r
    } = e;
    return !(null == r || !(null !== (n = null === (t = u.Z.getChannel(r)) || void 0 === t ? void 0 : t.isVocal()) && void 0 !== n && n) || d.has(r)) && (s.unshift(r), d.add(r), s.length > 10 && (s.length = 10, d = new Set([...s])), !0)
  }
})