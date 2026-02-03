/** Chunk was on web.js **/
/** chunk id: 383501, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  A: () => Q
}), require("./65821.js"), require("./896048.js");
var a, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk507821 = require("./507821.js"),
  Chunk859159 = require("./859159.js"),
  Chunk643501 = require("./643501.js"),
  Chunk75076 = require("./75076.js"),
  Chunk961350 = require("./961350.js"),
  Chunk607567 = require("./607567.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

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
  y = null,
  b = null,
  O = null,
  v = null,
  A = false,
  I = false,
  S = null,
  T = false,
  C = null;

function N(e, t) {
  if (null == i) throw Error("Creating RTCConnection without session.");
  let r = f.default.getId(),
    a = new(n(767065)).A({
      userId: r,
      sessionId: i,
      guildId: e,
      channelId: t,
      joinVoiceId: C
    });
  return a.on(l.q.State, (e, t, n) => {
    s.h.wait(() => s.h.dispatch(g({
      type: "RTC_CONNECTION_STATE",
      state: e
    }, t, n)))
  }), a.on(l.q.Video, (e, t, n, r, i) => {
    s.h.wait(() => s.h.dispatch({
      type: "RTC_CONNECTION_VIDEO",
      guildId: e,
      channelId: t,
      userId: n,
      streamId: r,
      rtcServerId: i,
      context: h.x.DEFAULT,
      mediaEngineConnectionId: a.getMediaEngineConnectionId()
    }))
  }), a.on(l.q.Ping, (e, t) => {
    s.h.wait(() => s.h.dispatch({
      type: "RTC_CONNECTION_PING",
      pings: e,
      quality: t
    }))
  }), a.on(l.q.OutboundLossRate, e => {
    s.h.wait(() => s.h.dispatch({
      type: "RTC_CONNECTION_LOSS_RATE",
      lossRate: e
    }))
  }), a.on(l.q.Speaking, (e, t) => {
    null == v || v.setSpeaking(e, t)
  }), a.on(l.q.Flags, (e, t) => {
    s.h.wait(() => {
      s.h.dispatch({
        type: "RTC_CONNECTION_FLAGS",
        flags: t,
        userId: e,
        guildId: a.guildId,
        channelId: a.channelId,
        context: a.context
      })
    })
  }), a.on(l.q.UsersMerged, (e, t) => {
    s.h.dispatch({
      type: "RTC_CONNECTION_USERS_MERGED",
      userIds: e,
      context: t
    })
  }), a.on(l.q.ClientConnect, e => {
    s.h.wait(() => {
      s.h.dispatch({
        type: "RTC_CONNECTION_CLIENT_CONNECT",
        userIds: e,
        guildId: a.guildId,
        channelId: a.channelId,
        context: a.context
      })
    })
  }), a.on(l.q.ClientDisconnect, e => {
    s.h.wait(() => {
      s.h.dispatch({
        type: "RTC_CONNECTION_CLIENT_DISCONNECT",
        userId: e,
        guildId: a.guildId,
        channelId: a.channelId,
        context: a.context
      })
    })
  }), a.on(l.q.Platform, (e, t, n) => {
    s.h.wait(() => {
      s.h.dispatch({
        type: "RTC_CONNECTION_PLATFORM",
        platform: t,
        userId: e,
        channelId: n
      })
    })
  }), a.on(l.q.SecureFramesUpdate, () => {
    s.h.wait(() => {
      s.h.dispatch({
        type: "RTC_CONNECTION_SECURE_FRAMES_UPDATE"
      })
    })
  }), a.on(l.q.RosterMapUpdate, e => {
    s.h.wait(() => {
      s.h.dispatch({
        type: "RTC_CONNECTION_ROSTER_MAP_UPDATE",
        userIds: e
      })
    })
  }), v = new c.A(f.default.getId(), t), b = null, A = false, I = false, a
}

function w() {
  var e;
  if (null == r) returnfalse;
  b = {
    duration: r.getDuration(),
    mediaSessionId: null != (e = r.getMediaSessionId()) ? e : null,
    rtcConnectionId: r.getRTCConnectionId(),
    wasEverMultiParticipant: A,
    wasEverRtcConnected: I,
    voiceStateAnalytics: v,
    channelId: r.channelId
  }, s.h.dispatch({
    type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
    mediaEngineConnectionId: r.getMediaEngineConnectionId()
  }), r.destroy(), r = null, v = null, T = false
}

function R(e) {
  return i = e.sessionId, y = null, O = null, w(), false
}

function P() {
  i = null, y = null, O = null, w()
}

function D(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    var n, a, o;
    if (null == v || v.updateVoiceStates(t.userId, t.channelId), A = A || (null != (n = null == v ? true : v.getStats().max_voice_state_count) ? n : 0) > 1, f.default.getId() !== t.userId) return e;
    if (null != r) t.sessionId === i ? null != t.guildId && t.guildId === r.guildId || null == t.guildId && t.channelId === r.channelId ? null == t.channelId ? w() : (r.setNextChannelId(t.channelId), T = true, C = null, r.clearJoinVoiceId()) : (t.guildId !== r.guildId && null == t.channelId || w(), null != t.channelId && (y = null, O = null, r = N(t.guildId, t.channelId), A = (null != (a = null == v ? true : v.getStats().max_voice_state_count) ? a : 0) > 1)) : t.guildId === r.guildId && ((null == u.default.getAwaitingRemoteSessionInfo() || null == u.default.getRemoteSessionId()) && (y = r.channelId), w());
    else {
      if (t.sessionId !== i || null == t.channelId) return e;
      y = null, O = null, r = N(t.guildId, t.channelId), A = (null != (o = null == v ? true : v.getStats().max_voice_state_count) ? o : 0) > 1
    }
    returntrue
  }, false)
}

function L(e) {
  if (null == r || null != e.guildId && e.guildId !== r.guildId || null != e.channelId && e.channelId !== r.getNextChannelId()) returnfalse;
  r.connect(e.endpoint, e.token)
}

function x() {
  y = null
}

function M() {
  O = null
}

function j(e) {
  let {
    guild: t
  } = e;
  if (null == r || r.guildId !== t.id) returnfalse;
  w()
}

function k(e) {
  let {
    channelId: t
  } = e;
  if (null == r || r.channelId !== t) returnfalse;
  w()
}

function U(e) {
  let {
    channel: t
  } = e;
  if (null == r || r.channelId !== t.id) returnfalse;
  w()
}

function G(e) {
  let {
    channelId: t,
    joinVoiceId: n
  } = e;
  null != r && (null == t || r.channelId !== t) && w(), C = n
}

function F(e) {
  return e.state === _.g6G.ACTIVE && null != r && r.resetBackoff("App state is active"), false
}

function V(e) {
  return e.state === _.S7L.RTC_CONNECTED && (I = true), true
}

function B(e) {
  null == r || r.setNoiseCancellationEnabled(e.enabled)
}

function H() {
  returntrue
}

function Y(e) {
  let {
    context: t,
    wants: n
  } = e;
  if (t !== h.x.DEFAULT || !Object.entries(n).some(e => {
      let [t, n] = e;
      return "any" !== t && 0 !== n
    })) returnfalse;
  S = performance.now()
}

function W(e) {
  return e.connection === r
}

function K(e) {
  let {
    userId: t,
    context: n,
    quality: i
  } = e;
  null == r || r.setSimulcastDebugOverride(t, n, i)
}

function z(e) {
  let {
    streamId: t,
    dimensions: n,
    zoom: i
  } = e;
  null == r || r.setVideoSize(t, n, i)
}
class q extends(a = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.default, u.default, p.Ay), (0, d.I)(this.getRTCConnectionId, this.getMediaSessionId)
  }
  getRTCConnection() {
    return r
  }
  getState() {
    return null != r ? r.state : _.S7L.DISCONNECTED
  }
  isConnected() {
    return this.getState() === _.S7L.RTC_CONNECTED
  }
  isDisconnected() {
    return this.getState() === _.S7L.DISCONNECTED
  }
  getRemoteDisconnectVoiceChannelId() {
    return y
  }
  getLastSessionVoiceChannelId() {
    return O
  }
  setLastSessionVoiceChannelId(e) {
    O = e
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
    return null != r ? r.quality : _.bFR.UNKNOWN
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
    return null != (e = null == r ? true : r.getDuration()) ? e : null == b ? true : b.duration
  }
  getLastRTCConnectionState() {
    return b
  }
  getVoiceFilterSpeakingDurationMs() {
    return null == r ? true : r.getVoiceFilterSpeakingDurationMs()
  }
  getPacketStats() {
    return null == r ? true : r.getPacketStats()
  }
  getVoiceStateStats() {
    return null == v ? true : v.getStats()
  }
  getUserVoiceSettingsStats(e) {
    return null == v ? true : v.getUserVoiceSettingsStats(e)
  }
  getWasEverMultiParticipant() {
    return A
  }
  getWasEverRtcConnected() {
    return I
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
    return T
  }
}
m(q, "displayName", "RTCConnectionStore");
let Z = new q(Chunk73153.h, __OVERLAY__ ? {} : {
  CONNECTION_OPEN: R,
  CONNECTION_CLOSED: P,
  RTC_CONNECTION_STATE: V,
  RTC_CONNECTION_PING: H,
  RTC_CONNECTION_LOSS_RATE: H,
  RTC_CONNECTION_UPDATE_ID: W,
  RTC_CONNECTION_SECURE_FRAMES_UPDATE: H,
  RTC_CONNECTION_CLIENT_CONNECT: H,
  RTC_CONNECTION_CLIENT_DISCONNECT: H,
  RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: Y,
  VIDEO_SIZE_UPDATE: z,
  VOICE_STATE_UPDATES: D,
  VOICE_CHANNEL_SELECT: G,
  AUDIO_SET_NOISE_CANCELLATION: B,
  VOICE_SERVER_UPDATE: L,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: x,
  REMOTE_SESSION_CONNECT: x,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: M,
  GUILD_DELETE: j,
  CHANNEL_DELETE: U,
  THREAD_DELETE: U,
  CALL_DELETE: k,
  APP_STATE_UPDATE: F,
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: K
});
Promise.resolve().then(require.bind(require, 954571)).then(e => {
  let {
    addExtraAnalyticsDecorator: t
  } = e;
  t(e => {
    e.client_rtc_state = Z.getState()
  })
});
let Q = Z