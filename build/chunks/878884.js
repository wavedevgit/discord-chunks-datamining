/** Chunk was on 79120 **/
n.d(t, {
  Z: () => E
}), n(47120);
var r, l, i, o = n(442837),
  a = n(46973),
  s = n(570140),
  c = n(642047),
  u = n(189786),
  d = n(5192),
  f = n(592125),
  p = n(19780),
  m = n(594174),
  g = n(979651),
  b = n(938475),
  y = n(981631),
  O = n(354459);
let h = new c.Z,
  v = new c.Z,
  j = new Set;

function S(e, t, n) {
  let r = new u.Z({
      userId: e.id,
      channelId: n
    }),
    l = (0, b.PH)(r, null != t ? t : y.ME, e.id);
  h.set(e.id, l);
  let i = {
    type: O.fO.USER,
    user: e,
    id: e.id,
    streamId: null,
    voiceState: r,
    voicePlatform: null,
    speaking: !1,
    lastSpoke: 0,
    soundsharing: !1,
    ringing: !1,
    userNick: d.ZP.getName(t, n, e),
    localVideoDisabled: !1
  };
  v.set(e.id, i)
}

function P(e) {
  let t = h.delete(e),
    n = v.delete(e),
    r = j.delete(e);
  return t || n || r
}

function N() {
  var e;
  let t = p.Z.getChannelId();
  if (null == t) return !1;
  let n = null === (e = f.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
    r = !1;
  return j.forEach(e => {
    if (null != g.Z.getVoiceStateForChannel(t, e)) {
      j.delete(e);
      return
    }
    let l = m.default.getUser(e);
    null != l && (r = !0, j.delete(e), S(l, n, t))
  }), r
}

function x() {
  h.clear(), v.clear(), j.clear()
}
class I extends(r = o.ZP.Store) {
  initialize() {
    this.waitFor(g.Z, m.default, f.Z, p.Z), this.syncWith([m.default], N)
  }
  get desyncedVoiceStatesCount() {
    return h.size()
  }
  getDesyncedUserIds() {
    return h.keys()
  }
  getDesyncedVoiceStates() {
    return h.values()
  }
  getDesyncedParticipants() {
    return v.values()
  }
}
i = "RTCConnectionDesyncStore", (l = "displayName") in I ? Object.defineProperty(I, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : I[l] = i;
let E = new I(s.Z, {
  CONNECTION_OPEN: function() {
    x()
  },
  VOICE_CHANNEL_SELECT: x,
  RTC_CONNECTION_STATE: function(e) {
    let {
      state: t,
      context: n
    } = e;
    if (n !== a.Yn.DEFAULT || t !== y.hes.DISCONNECTED) return !1;
    x()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = p.Z.getChannelId();
    return null != n && t.reduce((e, t) => {
      let {
        userId: r,
        channelId: l
      } = t;
      return l === n && !!P(r) || e
    }, !1)
  },
  RTC_CONNECTION_CLIENT_CONNECT: function(e) {
    let {
      userIds: t,
      guildId: n,
      channelId: r,
      context: l
    } = e;
    return l === a.Yn.DEFAULT && t.reduce((e, t) => {
      if (null != g.Z.getVoiceStateForChannel(r, t)) return e;
      let l = m.default.getUser(t);
      return null == l ? (j.add(t), e) : (S(l, n, r), !0)
    }, !1)
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
    let {
      userId: t,
      context: n
    } = e;
    return n === a.Yn.DEFAULT && P(t)
  }
})