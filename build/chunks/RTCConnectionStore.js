/** Chunk was on web.js **/
/** chunk id: 19780, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => X
}), require("./415506.js"), require("./388685.js");
var a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk437263 = require("./437263.js"),
  Chunk764976 = require("./764976.js"),
  Chunk258609 = require("./258609.js"),
  Chunk338336 = require("./338336.js"),
  Chunk314897 = require("./314897.js"),
  Chunk938475 = require("./938475.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}
let E = [],
  b = null,
  y = null,
  O = null,
  v = null,
  I = false,
  T = false,
  S = null,
  A = false,
  C = null;

function N(e, t) {
  if (null == i) throw Error("Creating RTCConnection without session.");
  let r = f.default.getId(),
    a = new(n(861687)).Z({
      userId: r,
      sessionId: i,
      guildId: e,
      channelId: t,
      joinVoiceId: C
    });
  return a.on(l.z.State, (e, t, n) => {
    s.Z.wait(() => s.Z.dispatch(g({
      type: "RTC_CONNECTION_STATE",
      state: e
    }, t, n)))
  }), a.on(l.z.Video, (e, t, n, r, i) => {
    s.Z.wait(() => s.Z.dispatch({
      type: "RTC_CONNECTION_VIDEO",
      guildId: e,
      channelId: t,
      userId: n,
      streamId: r,
      rtcServerId: i,
      context: h.Yn.DEFAULT,
      mediaEngineConnectionId: a.getMediaEngineConnectionId()
    }))
  }), a.on(l.z.Ping, (e, t) => {
    s.Z.wait(() => s.Z.dispatch({
      type: "RTC_CONNECTION_PING",
      pings: e,
      quality: t
    }))
  }), a.on(l.z.OutboundLossRate, e => {
    s.Z.wait(() => s.Z.dispatch({
      type: "RTC_CONNECTION_LOSS_RATE",
      lossRate: e
    }))
  }), a.on(l.z.Speaking, (e, t) => {
    null == O || O.setSpeaking(e, t)
  }), a.on(l.z.Flags, (e, t) => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_FLAGS",
        flags: t,
        userId: e,
        guildId: a.guildId,
        channelId: a.channelId,
        context: a.context
      })
    })
  }), a.on(l.z.UsersMerged, (e, t) => {
    s.Z.dispatch({
      type: "RTC_CONNECTION_USERS_MERGED",
      userIds: e,
      context: t
    })
  }), a.on(l.z.ClientConnect, e => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_CLIENT_CONNECT",
        userIds: e,
        guildId: a.guildId,
        channelId: a.channelId,
        context: a.context
      })
    })
  }), a.on(l.z.ClientDisconnect, e => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_CLIENT_DISCONNECT",
        userId: e,
        guildId: a.guildId,
        channelId: a.channelId,
        context: a.context
      })
    })
  }), a.on(l.z.Platform, (e, t, n) => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_PLATFORM",
        platform: t,
        userId: e,
        channelId: n
      })
    })
  }), a.on(l.z.SecureFramesUpdate, () => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE"
      })
    })
  }), a.on(l.z.RosterMapUpdate, e => {
    s.Z.wait(() => {
      s.Z.dispatch({
        type: "RTC_CONNECTION_ROSTER_MAP_UPDATE",
        userIds: e
      })
    })
  }), O = new c.Z(f.default.getId(), t), v = null, I = false, T = false, a
}

function R() {
  if (null == r) returnfalse;
  v = r.getDuration(), Chunk570140.Z.dispatch({
    type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
    mediaEngineConnectionId: r.getMediaEngineConnectionId()
  }), r.destroy(), r = null, O = null, A = false
}

function P(e) {
  return i = e.sessionId, b = null, y = null, R(), false
}

function D() {
  i = null, b = null, y = null, R()
}

function w(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    var n, a, o;
    if (null == O || O.updateVoiceStates(t.userId, t.channelId), I = I || (null != (n = null == O ? true : O.getStats().max_voice_state_count) ? n : 0) > 1, f.default.getId() !== t.userId) return e;
    if (null != r) t.sessionId === i ? null != t.guildId && t.guildId === r.guildId || null == t.guildId && t.channelId === r.channelId ? null == t.channelId ? R() : (r.setNextChannelId(t.channelId), A = true, C = null, r.clearJoinVoiceId()) : (t.guildId !== r.guildId && null == t.channelId || R(), null != t.channelId && (b = null, y = null, r = N(t.guildId, t.channelId), I = (null != (a = null == O ? true : O.getStats().max_voice_state_count) ? a : 0) > 1)) : t.guildId === r.guildId && ((null == u.default.getAwaitingRemoteSessionInfo() || null == u.default.getRemoteSessionId()) && (b = r.channelId), R());
    else {
      if (t.sessionId !== i || null == t.channelId) return e;
      b = null, y = null, r = N(t.guildId, t.channelId), I = (null != (o = null == O ? true : O.getStats().max_voice_state_count) ? o : 0) > 1
    }
    returntrue
  }, false)
}

function x(e) {
  if (null == r || null != e.guildId && e.guildId !== r.guildId || null != e.channelId && e.channelId !== r.getNextChannelId()) returnfalse;
  r.connect(e.endpoint, e.token)
}

function L() {
  b = null
}

function M() {
  y = null
}

function j(e) {
  let {
    guild: t
  } = e;
  if (null == r || r.guildId !== t.id) returnfalse;
  R()
}

function k(e) {
  let {
    channelId: t
  } = e;
  if (null == r || r.channelId !== t) returnfalse;
  R()
}

function U(e) {
  let {
    channel: t
  } = e;
  if (null == r || r.channelId !== t.id) returnfalse;
  R()
}

function G(e) {
  let {
    channelId: t,
    joinVoiceId: n
  } = e;
  null != r && (null == t || r.channelId !== t) && R(), C = n
}

function B(e) {
  return e.state === p.$7l.ACTIVE && null != r && r.resetBackoff("App state is active"), false
}

function Z(e) {
  return e.state === p.hes.RTC_CONNECTED && (T = true), true
}

function F(e) {
  null == r || r.setNoiseCancellationEnabled(e.enabled)
}

function V() {
  returntrue
}

function H(e) {
  let {
    context: t,
    wants: n
  } = e;
  if (t !== h.Yn.DEFAULT || !Object.entries(n).some(e => {
      let [t, n] = e;
      return "any" !== t && 0 !== n
    })) returnfalse;
  S = performance.now()
}

function Y(e) {
  return e.connection === r
}

function W(e) {
  let {
    userId: t,
    context: n,
    quality: i
  } = e;
  null == r || r.setSimulcastDebugOverride(t, n, i)
}

function K(e) {
  let {
    streamId: t,
    width: n,
    height: i
  } = e;
  null == r || r.setVideoSize(t, n, i)
}
class z extends(a = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk258609.default, Chunk938475.ZP), (0, Chunk338336.r)(this.getRTCConnectionId, this.getMediaSessionId)
  }
  getRTCConnection() {
    return r
  }
  getState() {
    return null != r ? r.state : Chunk981631.hes.DISCONNECTED
  }
  isConnected() {
    return this.getState() === Chunk981631.hes.RTC_CONNECTED
  }
  isDisconnected() {
    return this.getState() === Chunk981631.hes.DISCONNECTED
  }
  getRemoteDisconnectVoiceChannelId() {
    return b
  }
  getLastSessionVoiceChannelId() {
    return y
  }
  setLastSessionVoiceChannelId(e) {
    y = e
  }
  getGuildId() {
    return null == r ? true : r.guildId
  }
  getChannelId() {
    return null == r ? true : r.channelId
  }
  getHostname() {
    return null != r ? r.hostname : ""
  }
  getQuality() {
    return null != r ? r.quality : Chunk981631.IE4.UNKNOWN
  }
  getPings() {
    return null != r ? r.getPings() : E
  }
  getAveragePing() {
    return null != r ? null == r ? true : r.getAveragePing() : 0
  }
  getLastPing() {
    return null == r ? true : r.getLastPing()
  }
  getOutboundLossRate() {
    return null == r ? true : r.getOutboundLossRate()
  }
  getMediaSessionId() {
    return null == r ? true : r.getMediaSessionId()
  }
  getRTCConnectionId() {
    return null == r ? true : r.getRTCConnectionId()
  }
  getDuration() {
    var e;
    return null != (e = null == r ? true : r.getDuration()) ? module : v
  }
  getVoiceFilterSpeakingDurationMs() {
    return null == r ? true : r.getVoiceFilterSpeakingDurationMs()
  }
  getPacketStats() {
    return null == r ? true : r.getPacketStats()
  }
  getVoiceStateStats() {
    return null == O ? true : O.getStats()
  }
  getWasEverMultiParticipant() {
    return I
  }
  getWasEverRtcConnected() {
    return T
  }
  getUserIds() {
    return null == r ? true : r.getUserIds()
  }
  getJoinVoiceId() {
    return C
  }
  isUserConnected(e) {
    return null == r ? true : r.getIsUserConnected(e)
  }
  getSecureFramesState() {
    return null == r ? true : r.getSecureFramesState()
  }
  getSecureFramesRosterMapEntry(e) {
    let t = null == r ? true : r.getSecureFramesRosterMap();
    return null == t ? true : t.get(e)
  }
  getLastNonZeroRemoteVideoSinkWantsTime() {
    return S
  }
  getWasMoved() {
    return A
  }
}
m(z, "displayName", "RTCConnectionStore");
let q = new z(Chunk570140.Z, __OVERLAY__ ? {} : {
  CONNECTION_OPEN: P,
  CONNECTION_CLOSED: D,
  RTC_CONNECTION_STATE: Z,
  RTC_CONNECTION_PING: V,
  RTC_CONNECTION_LOSS_RATE: V,
  RTC_CONNECTION_UPDATE_ID: Y,
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: V,
  RTC_CONNECTION_CLIENT_CONNECT: V,
  RTC_CONNECTION_CLIENT_DISCONNECT: V,
  RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: H,
  VIDEO_SIZE_UPDATE: K,
  VOICE_STATE_UPDATES: w,
  VOICE_CHANNEL_SELECT: G,
  AUDIO_SET_NOISE_CANCELLATION: F,
  VOICE_SERVER_UPDATE: x,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: L,
  REMOTE_SESSION_CONNECT: L,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: M,
  GUILD_DELETE: j,
  CHANNEL_DELETE: U,
  THREAD_DELETE: U,
  CALL_DELETE: k,
  APP_STATE_UPDATE: B,
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: W
});
Promise.resolve().then(require.bind(require, 626135)).then(e => {
  let {
    addExtraAnalyticsDecorator: t
  } = e;
  t(e => {
    e.client_rtc_state = q.getState()
  })
});
let X = q