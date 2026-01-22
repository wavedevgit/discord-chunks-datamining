/** Chunk was on web.js **/
/** chunk id: 142120, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ey
});
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk956793 = require("./956793.js"),
  Chunk626584 = require("./626584.js"),
  Chunk652896 = require("./652896.js"),
  Chunk796774 = require("./796774.js"),
  Chunk617617 = require("./617617.js"),
  Chunk961350 = require("./961350.js"),
  Chunk470710 = require("./470710.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk873985 = require("./873985.js"),
  Chunk309010 = require("./309010.js"),
  Chunk461213 = require("./461213.js"),
  Chunk162605 = require("./162605.js"),
  Chunk723702 = require("./723702.js"),
  Chunk175306 = require("./175306.js"),
  Chunk531013 = require("./531013.js"),
  Chunk33282 = require("./33282.js"),
  Chunk448515 = require("./448515.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let w = window.DiscordNative;
Chunk531013.sZ.dispatcher.getDispatchHandler = Chunk448515.A;
let P = new Chunk626584.A("ConnectionStore"),
  D = 100,
  x = 0,
  L = null,
  j = true,
  M = null,
  k = null;

function U() {
  return S.sZ.isClosed() ? (P.verbose("Socket is reconnecting because of starting new session"), S.sZ.connect()) : (P.verbose("Socket is not reconnecting during a new session because it is not closed"), false)
}

function G(e) {
  e.isSwitchingAccount && S.OV.handleAccountSwitch(), P.verbose("Closing socket because of logout"), S.sZ.close()
}

function V() {
  return P.verbose("session refresh dispatched", {
    isEstablished: S.sZ.isSessionEstablished()
  }), !!S.sZ.isSessionEstablished() && (S.sZ.close(), S.sZ.connect())
}
async function F(e) {
  x = Date.now(), L = e.sessionId, S.OV.handleConnectionOpen();
  let t = {},
    n = b.A.getVoiceChannelId();
  if (null != n) {
    var r, i, a, s, o, c, u, f;
    if ((null == (o = window) || null == (s = o.performance) || null == (a = s.getEntriesByType) || null == (i = a.call(s, "navigation")) || null == (r = i[0]) ? true : r.type) !== "reload" && (null == (c = await (null == w || null == (f = w.processUtils) || null == (u = f.getLastCrash) ? true : u.call(f))) ? true : c.rendererCrashReason) == null && j) g.A.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
    else {
      let e = h.A.getChannel(n);
      null != e && (t = {
        guildId: e.getGuildId(),
        channelId: n
      }, (0, d.CX)(n))
    }
  }
  S.Xo.update(t, true), j = false, k = null
}

function B() {
  P.verbose("connection closed dispatched"), x = Date.now()
}

function H() {
  k = null
}

function Y(e) {
  return e.resetSocket && (S.sZ.close(), S.sZ.dispatcher.clear(), S.sZ.connect()), false
}

function W(e) {
  return S.Xo.update({
    guildId: e.guildId,
    channelId: e.channelId
  }), k = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null, (0, A.isIOS)() && M === C.g6G.BACKGROUND && (null == e.channelId ? S.sZ.close(true) : S.sZ.isClosed() && (I.V(false), S.sZ.connect())), false
}

function K() {
  S.Xo.update()
}

function z(e) {
  var t;
  e.settings.type === N.oD.PRELOADED_USER_SETTINGS && (null == (t = e.settings.proto.clips) ? true : t.allowVoiceRecording) != null && K()
}

function q(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (p.default.getId() !== t.userId) return e;
    if (t.sessionId === L) {
      if (null != k) return P.verbose("Ignoring voice state for own session due to VSU lock on channel:", k), e;
      S.Xo.setState({
        guildId: t.guildId,
        channelId: t.channelId
      })
    } else {
      if (t.guildId !== S.Xo.guildId) return e;
      S.Xo.setState({
        guildId: null,
        channelId: null
      })
    }
    returntrue
  }, false)
}

function X(e) {
  e.guild.id === S.Xo.guildId && S.Xo.setState({
    guildId: null,
    channelId: null
  })
}

function Z(e) {
  let {
    channelId: t
  } = e;
  if (t === S.Xo.channelId) {
    if (k === t) returnfalse;
    S.Xo.setState({
      guildId: null,
      channelId: null
    })
  }
}

function Q(e) {
  let {
    channel: t
  } = e;
  t.id === S.Xo.channelId && S.Xo.setState({
    guildId: null,
    channelId: null
  })
}

function $(e) {
  if (e.state !== C.S7L.DISCONNECTED) returnfalse;
  e.willReconnect && (null != e.streamKey ? S.sZ.streamPing(e.streamKey) : S.sZ.voiceServerPing())
}

function J(e) {
  return (0, A.isIOS)() ? (p.default.isAuthenticated() && (M === C.g6G.INACTIVE && e.state === C.g6G.BACKGROUND && null == S.Xo.channelId ? S.sZ.close(true) : M === C.g6G.BACKGROUND && e.state === C.g6G.ACTIVE && S.sZ.isClosed() && (I.V(false), S.sZ.connect())), M = e.state) : e.state === C.g6G.ACTIVE && (I.V(false), p.default.isAuthenticated() && S.sZ.resetBackoff("App state is active")), false
}

function ee() {
  return S.Xo.update(), false
}

function et() {
  return S.OV.update(), false
}

function en(e) {
  return S.sZ.isSessionEstablished() && ("userIds" in e ? a()(e.userIds).chunk(D).forEach(t => {
    S.sZ.requestGuildMembers(e.guildIds, {
      userIds: t,
      presences: !!e.presences
    })
  }) : S.sZ.requestGuildMembers(e.guildIds, {
    query: e.query,
    limit: e.limit,
    presences: !!e.presences
  })), false
}

function er(e) {
  let {
    guildId: t,
    query: n,
    continuationToken: r
  } = e;
  S.sZ.isSessionEstablished() && S.sZ.searchRecentMembers(t, {
    query: n,
    continuationToken: r
  })
}

function ei(e) {
  let {
    subscriptions: t
  } = e;
  return S.sZ.isSessionEstablished() && S.sZ.updateGuildSubscriptions(t), false
}

function ea(e) {
  let {
    channelId: t
  } = e;
  return S.sZ.isSessionEstablished() && S.sZ.callConnect(t), false
}

function es(e) {
  let {
    channelIds: t
  } = e;
  return S.sZ.isSessionEstablished() && t.forEach(e => {
    S.sZ.callConnect(e)
  }), false
}

function eo(e) {
  let {
    sessionId: t,
    payload: n
  } = e;
  return S.sZ.isSessionEstablished() && S.sZ.remoteCommand(t, n), false
}

function el(e) {
  S.sZ.isSessionEstablished() && S.sZ.streamDelete(e)
}

function ec() {
  let e = eu();
  O.A.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => el(e))
}

function eu() {
  return O.A.getAllActiveStreamKeys().find(e => (0, u.Iy)(e).ownerId === p.default.getId())
}

function ed(e) {
  let {
    streamType: t,
    guildId: n,
    channelId: r
  } = e;
  if (S.sZ.isSessionEstablished()) {
    var i, a;
    let e = null != n ? null == (i = h.A.getChannel(r)) ? true : i.rtcRegion : null == (a = _.A.getCall(r)) ? true : a.region;
    S.sZ.streamCreate(t, n, r, null != e ? e : E.A.getPreferredRegion())
  }
  returnfalse
}

function ef(e) {
  let {
    streamKey: t,
    paused: n
  } = e;
  S.sZ.isSessionEstablished() && S.sZ.streamSetPaused(t, n)
}

function ep(e) {
  let {
    streamKey: t,
    allowMultiple: n
  } = e;
  return S.sZ.isSessionEstablished() && (n || ec(), S.sZ.streamWatch(t)), false
}

function e_(e) {
  let {
    streamKey: t
  } = e;
  return el(t), K(), false
}

function eh() {
  return S.sZ.expeditedHeartbeat(5e3, "user clicked on notification", true), false
}

function em(e) {
  let {
    guildId: t,
    channelId: n,
    threads: r
  } = e;
  S.sZ.requestForumUnreads(t, n, r)
}

function eg(e) {
  S.sZ.connectionState !== v.A.WILL_RECONNECT && S.sZ.resetSocketOnError(e.args)
}

function eE(e) {
  let {
    guildIds: t
  } = e;
  S.sZ.requestSoundboardSounds(t)
}
class eb extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(p.default, _.A, h.A, m.A, g.A, E.A, b.A, y.A, O.A, f.A), this.syncWith([m.A], ee), this.syncWith([y.A], et)
  }
  getSocket() {
    return S.sZ
  }
  isTryingToConnect() {
    return !S.sZ.isClosed()
  }
  isConnected() {
    return S.sZ.isSessionEstablished()
  }
  isConnectedOrOverlay() {
    return S.sZ.isSessionEstablished() || __OVERLAY__
  }
  lastTimeConnectedChanged() {
    return x
  }
}
R(eb, "displayName", "GatewayConnectionStore");
let ey = new eb(Chunk73153.h, {
  START_SESSION: U,
  LOGIN_SUCCESS: V,
  LOGOUT: G,
  CLEAR_CACHES: Y,
  CONNECTION_OPEN: e => {
    F(e)
  },
  CONNECTION_RESUMED: H,
  CONNECTION_CLOSED: B,
  RTC_CONNECTION_STATE: $,
  VOICE_CHANNEL_SELECT: W,
  VOICE_STATE_UPDATES: q,
  GUILD_DELETE: X,
  CHANNEL_DELETE: Q,
  CALL_DELETE: Z,
  APP_STATE_UPDATE: J,
  GUILD_MEMBERS_REQUEST: en,
  GUILD_SEARCH_RECENT_MEMBERS: er,
  GUILD_SUBSCRIPTIONS_FLUSH: ei,
  CALL_CONNECT: ea,
  CALL_CONNECT_MULTIPLE: es,
  STREAM_CREATE: K,
  STREAM_START: ed,
  STREAM_WATCH: ep,
  STREAM_STOP: e_,
  STREAM_SET_PAUSED: ef,
  PUSH_NOTIFICATION_CLICK: eh,
  REQUEST_FORUM_UNREADS: em,
  REQUEST_SOUNDBOARD_SOUNDS: eE,
  REMOTE_COMMAND: eo,
  RESET_SOCKET: eg,
  CLIPS_SETTINGS_UPDATE: K,
  RUNNING_GAMES_CHANGE: K,
  USER_SETTINGS_PROTO_UPDATE: z
})