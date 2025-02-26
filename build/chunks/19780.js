/** Chunk was on web.js **/
"use strict";
let r, i;
n.d(t, {
  Z: () => W
}), n(411104);
var o, a = n(442837),
  s = n(570140),
  l = n(437263),
  c = n(764976),
  u = n(258609),
  d = n(338336),
  f = n(314897),
  _ = n(938475),
  p = n(981631),
  h = n(65154);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}
let E = [],
  v = null,
  b = null,
  y = null,
  O = null,
  S = !1,
  I = !1;

function T(e, t) {
  if (null == i) throw Error("Creating RTCConnection without session.");
  let r = f.default.getId(),
    o = new(n(861687)).Z({
      userId: r,
      sessionId: i,
      guildId: e,
      channelId: t
    });
  return o.on(l.z.State, (e, t, n) => {
    s.Z.wait(() => s.Z.dispatch(m({
      type: "RTC_CONNECTION_STATE",
      state: e
    }, t, n)))
  }), o.on(l.z.Video, (e, t, n, r, i) => {
    s.Z.wait(() => s.Z.dispatch({
      type: "RTC_CONNECTION_VIDEO",
      guildId: e,
      channelId: t,
      userId: n,
      streamId: r,
      rtcServerId: i,
      context: h.Yn.DEFAULT
    }))
  }), o.on(l.z.Ping, (e, t) => {
    s.Z.wait(() => s.Z.dispatch({
      type: "RTC_CONNECTION_PING",
      pings: e,
      quality: t
    }))
  }), o.on(l.z.OutboundLossRate, e => {
    s.Z.wait(() => s.Z.dispatch({
      type: "RTC_CONNECTION_LOSS_RATE",
      lossRate: e
    }))
  }), o.on(l.z.Speaking, (e, t) => {
    null == y || y.setSpeaking(e, t)
  }), o.on(l.z.Flags, (e, t) => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_FLAGS",
        flags: t,
        userId: e,
        guildId: o.guildId,
        channelId: o.channelId,
        context: o.context
      })
    })
  }), o.on(l.z.ClientConnect, e => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_CLIENT_CONNECT",
        userIds: e,
        guildId: o.guildId,
        channelId: o.channelId,
        context: o.context
      })
    })
  }), o.on(l.z.ClientDisconnect, e => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_CLIENT_DISCONNECT",
        userId: e,
        guildId: o.guildId,
        channelId: o.channelId,
        context: o.context
      })
    })
  }), o.on(l.z.Platform, (e, t, n) => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_PLATFORM",
        platform: t,
        userId: e,
        channelId: n
      })
    })
  }), o.on(l.z.SecureFramesUpdate, () => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE"
      })
    })
  }), o.on(l.z.RosterMapUpdate, e => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_ROSTER_MAP_UPDATE",
        userIds: e
      })
    })
  }), y = new c.Z(f.default.getId(), t), O = null, S = !1, I = !1, o
}

function N() {
  if (null == r) return !1;
  O = r.getDuration(), r.destroy(), r = null, y = null
}

function A(e) {
  return i = e.sessionId, v = null, b = null, N(), !1
}

function C() {
  i = null, v = null, b = null, N()
}

function R(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    var n, o, a;
    if (null == y || y.updateVoiceStates(t.userId, t.channelId), S = S || (null !== (n = null == y ? void 0 : y.getStats().max_voice_state_count) && void 0 !== n ? n : 0) > 1, f.default.getId() !== t.userId) return !1;
    if (null != r) t.sessionId === i ? null != t.guildId && t.guildId === r.guildId || null == t.guildId && t.channelId === r.channelId ? null == t.channelId ? N() : r.channelId = t.channelId : (t.guildId !== r.guildId && null == t.channelId || N(), null != t.channelId && (v = null, b = null, r = T(t.guildId, t.channelId), S = (null !== (o = null == y ? void 0 : y.getStats().max_voice_state_count) && void 0 !== o ? o : 0) > 1)) : t.guildId === r.guildId && ((null == u.Z.getAwaitingRemoteSessionInfo() || null == u.Z.getRemoteSessionId()) && (v = r.channelId), N());
    else {
      if (t.sessionId !== i || null == t.channelId) return e;
      v = null, b = null, r = T(t.guildId, t.channelId), S = (null !== (a = null == y ? void 0 : y.getStats().max_voice_state_count) && void 0 !== a ? a : 0) > 1
    }
    return !0
  }, !1)
}

function P(e) {
  if (null == r || null != e.guildId && e.guildId !== r.guildId || null != e.channelId && e.channelId !== r.channelId) return !1;
  r.connect(e.endpoint, e.token)
}

function D() {
  v = null
}

function w() {
  b = null
}

function L(e) {
  let {
    guild: t
  } = e;
  if (null == r || r.guildId !== t.id) return !1;
  N()
}

function x(e) {
  let {
    channelId: t
  } = e;
  if (null == r || r.channelId !== t) return !1;
  N()
}

function M(e) {
  let {
    channel: t
  } = e;
  if (null == r || r.channelId !== t.id) return !1;
  N()
}

function k(e) {
  let {
    channelId: t
  } = e;
  if (null == r || null != t && r.channelId === t) return !1;
  N()
}

function j(e) {
  return e.state === p.$7l.ACTIVE && null != r && r.resetBackoff("App state is active"), !1
}

function U(e) {
  return e.state === p.hes.RTC_CONNECTED && (I = !0), !0
}

function G() {
  return !0
}

function B(e) {
  return e.connection === r
}

function V(e) {
  let {
    userId: t,
    context: n,
    quality: i
  } = e;
  null == r || r.setSimulcastDebugOverride(t, n, i)
}

function F(e) {
  let {
    streamId: t,
    width: n,
    height: i
  } = e;
  null == r || r.setVideoSize(t, n, i)
}
class Z extends(o = a.ZP.Store) {
  initialize() {
    this.waitFor(_.ZP), (0, d.r)(this.getRTCConnectionId, this.getMediaSessionId)
  }
  getRTCConnection() {
    return r
  }
  getState() {
    return null != r ? r.state : p.hes.DISCONNECTED
  }
  isConnected() {
    return this.getState() === p.hes.RTC_CONNECTED
  }
  isDisconnected() {
    return this.getState() === p.hes.DISCONNECTED
  }
  getRemoteDisconnectVoiceChannelId() {
    return v
  }
  getLastSessionVoiceChannelId() {
    return b
  }
  setLastSessionVoiceChannelId(e) {
    b = e
  }
  getGuildId() {
    return null == r ? void 0 : r.guildId
  }
  getChannelId() {
    return null == r ? void 0 : r.channelId
  }
  getHostname() {
    return null != r ? r.hostname : ""
  }
  getQuality() {
    return null != r ? r.quality : p.IE4.UNKNOWN
  }
  getPings() {
    return null != r ? r.getPings() : E
  }
  getAveragePing() {
    return null != r ? null == r ? void 0 : r.getAveragePing() : 0
  }
  getLastPing() {
    return null == r ? void 0 : r.getLastPing()
  }
  getOutboundLossRate() {
    return null == r ? void 0 : r.getOutboundLossRate()
  }
  getMediaSessionId() {
    return null == r ? void 0 : r.getMediaSessionId()
  }
  getRTCConnectionId() {
    return null == r ? void 0 : r.getRTCConnectionId()
  }
  getDuration() {
    var e;
    return null !== (e = null == r ? void 0 : r.getDuration()) && void 0 !== e ? e : O
  }
  getPacketStats() {
    return null == r ? void 0 : r.getPacketStats()
  }
  getVoiceStateStats() {
    return null == y ? void 0 : y.getStats()
  }
  getWasEverMultiParticipant() {
    return S
  }
  getWasEverRtcConnected() {
    return I
  }
  getUserIds() {
    return null == r ? void 0 : r.getUserIds()
  }
  isUserConnected(e) {
    return null == r ? void 0 : r.getIsUserConnected(e)
  }
  getSecureFramesState() {
    return null == r ? void 0 : r.getSecureFramesState()
  }
  getSecureFramesRosterMapEntry(e) {
    let t = null == r ? void 0 : r.getSecureFramesRosterMap();
    return null == t ? void 0 : t.get(e)
  }
}
g(Z, "displayName", "RTCConnectionStore");
let H = new Z(s.Z, __OVERLAY__ ? {} : {
  CONNECTION_OPEN: A,
  CONNECTION_CLOSED: C,
  RTC_CONNECTION_STATE: U,
  RTC_CONNECTION_PING: G,
  RTC_CONNECTION_LOSS_RATE: G,
  RTC_CONNECTION_UPDATE_ID: B,
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: G,
  RTC_CONNECTION_CLIENT_CONNECT: G,
  RTC_CONNECTION_CLIENT_DISCONNECT: G,
  VIDEO_SIZE_UPDATE: F,
  VOICE_STATE_UPDATES: R,
  VOICE_CHANNEL_SELECT: k,
  VOICE_SERVER_UPDATE: P,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: D,
  REMOTE_SESSION_CONNECT: D,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: w,
  GUILD_DELETE: L,
  CHANNEL_DELETE: M,
  THREAD_DELETE: M,
  CALL_DELETE: x,
  APP_STATE_UPDATE: j,
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: V
});
Promise.resolve().then(n.bind(n, 626135)).then(e => {
  let {
    addExtraAnalyticsDecorator: t
  } = e;
  t(e => {
    e.client_rtc_state = H.getState()
  })
});
let W = H