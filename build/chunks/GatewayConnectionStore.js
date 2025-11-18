/** Chunk was on web.js **/
/** chunk id: 38618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ey
});
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk287734 = require("./287734.js"),
  Chunk710845 = require("./710845.js"),
  Chunk569545 = require("./569545.js"),
  Chunk208049 = require("./208049.js"),
  Chunk581883 = require("./581883.js"),
  Chunk314897 = require("./314897.js"),
  Chunk523746 = require("./523746.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk936349 = require("./936349.js"),
  Chunk944486 = require("./944486.js"),
  Chunk885110 = require("./885110.js"),
  Chunk959457 = require("./959457.js"),
  Chunk358085 = require("./358085.js"),
  Chunk138859 = require("./138859.js"),
  Chunk955132 = require("./955132.js"),
  Chunk645436 = require("./645436.js"),
  Chunk344651 = require("./344651.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let P = window.DiscordNative;
Chunk955132.Wb.dispatcher.getDispatchHandler = Chunk344651.Z;
let D = new Chunk710845.Z("ConnectionStore"),
  w = 100,
  L = 0,
  x = null,
  M = true,
  j = null,
  k = null;

function U() {
  return Chunk955132.Wb.isClosed() ? (D.verbose("Socket is reconnecting because of starting new session"), Chunk955132.Wb.connect()) : (D.verbose("Socket is not reconnecting during a new session because it is not closed"), false)
}

function G(e) {
  e.isSwitchingAccount && T.RR.handleAccountSwitch(), D.verbose("Closing socket because of logout"), T.Wb.close()
}

function B() {
  return D.verbose("session refresh dispatched", {
    isEstablished: Chunk955132.Wb.isSessionEstablished()
  }), !!Chunk955132.Wb.isSessionEstablished() && (Chunk955132.Wb.close(), Chunk955132.Wb.connect())
}
async function Z(e) {
  L = Date.now(), x = e.sessionId, T.RR.handleConnectionOpen();
  let t = {},
    n = b.Z.getVoiceChannelId();
  if (null != n) {
    var r, i, a, o, s, c, u, f;
    if ((null == (s = window) || null == (o = s.performance) || null == (a = o.getEntriesByType) || null == (i = a.call(o, "navigation")) || null == (r = i[0]) ? true : r.type) !== "reload" && (null == (c = await (null == P || null == (f = P.processUtils) || null == (u = f.getLastCrash) ? true : u.call(f))) ? true : c.rendererCrashReason) == null && M) g.Z.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
    else {
      let e = h.Z.getChannel(n);
      null != e && (t = {
        guildId: e.getGuildId(),
        channelId: n
      }, (0, d.Db)(n))
    }
  }
  T.GC.update(t, true), M = false, k = null
}

function F() {
  D.verbose("connection closed dispatched"), L = Date.now()
}

function V() {
  k = null
}

function H(e) {
  return e.resetSocket && (T.Wb.close(), T.Wb.dispatcher.clear(), T.Wb.connect()), false
}

function Y(e) {
  return T.GC.update({
    guildId: e.guildId,
    channelId: e.channelId
  }), k = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null, (0, v.isIOS)() && j === C.$7l.BACKGROUND && (null == e.channelId ? T.Wb.close(true) : T.Wb.isClosed() && (S.Y(false), T.Wb.connect())), false
}

function W() {
  Chunk955132.GC.update()
}

function K(e) {
  var t;
  e.settings.type === N.yP.PRELOADED_USER_SETTINGS && (null == (t = e.settings.proto.clips) ? true : t.allowVoiceRecording) != null && W()
}

function z(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (_.default.getId() !== t.userId) return e;
    if (t.sessionId === x) {
      if (null != k) return D.verbose("Ignoring voice state for own session due to VSU lock on channel:", k), e;
      T.GC.setState({
        guildId: t.guildId,
        channelId: t.channelId
      })
    } else {
      if (t.guildId !== T.GC.guildId) return e;
      T.GC.setState({
        guildId: null,
        channelId: null
      })
    }
    returntrue
  }, false)
}

function q(e) {
  e.guild.id === T.GC.guildId && T.GC.setState({
    guildId: null,
    channelId: null
  })
}

function X(e) {
  let {
    channelId: t
  } = e;
  if (t === T.GC.channelId) {
    if (k === t) returnfalse;
    T.GC.setState({
      guildId: null,
      channelId: null
    })
  }
}

function Q(e) {
  let {
    channel: t
  } = e;
  t.id === T.GC.channelId && T.GC.setState({
    guildId: null,
    channelId: null
  })
}

function J(e) {
  if (e.state !== C.hes.DISCONNECTED) returnfalse;
  e.willReconnect && (null != e.streamKey ? T.Wb.streamPing(e.streamKey) : T.Wb.voiceServerPing())
}

function $(e) {
  return (0, v.isIOS)() ? (_.default.isAuthenticated() && (j === C.$7l.INACTIVE && e.state === C.$7l.BACKGROUND && null == T.GC.channelId ? T.Wb.close(true) : j === C.$7l.BACKGROUND && e.state === C.$7l.ACTIVE && T.Wb.isClosed() && (S.Y(false), T.Wb.connect())), j = e.state) : e.state === C.$7l.ACTIVE && (S.Y(false), _.default.isAuthenticated() && T.Wb.resetBackoff("App state is active")), false
}

function ee() {
  return Chunk955132.GC.update(), false
}

function et() {
  return Chunk955132.RR.update(), false
}

function en(e) {
  return T.Wb.isSessionEstablished() && ("userIds" in e ? a()(e.userIds).chunk(w).forEach(t => {
    T.Wb.requestGuildMembers(e.guildIds, {
      userIds: t,
      presences: !!e.presences
    })
  }) : T.Wb.requestGuildMembers(e.guildIds, {
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
  T.Wb.isSessionEstablished() && T.Wb.searchRecentMembers(t, {
    query: n,
    continuationToken: r
  })
}

function ei(e) {
  let {
    subscriptions: t
  } = e;
  return T.Wb.isSessionEstablished() && T.Wb.updateGuildSubscriptions(t), false
}

function ea(e) {
  let {
    channelId: t
  } = e;
  return T.Wb.isSessionEstablished() && T.Wb.callConnect(t), false
}

function eo(e) {
  let {
    channelIds: t
  } = e;
  return T.Wb.isSessionEstablished() && t.forEach(e => {
    T.Wb.callConnect(e)
  }), false
}

function es(e) {
  let {
    sessionId: t,
    payload: n
  } = e;
  return T.Wb.isSessionEstablished() && T.Wb.remoteCommand(t, n), false
}

function el(e) {
  T.Wb.isSessionEstablished() && T.Wb.streamDelete(e)
}

function ec() {
  let e = eu();
  Chunk959457.Z.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => el(e))
}

function eu() {
  return Chunk959457.Z.getAllActiveStreamKeys().find(e => (0, u.my)(e).ownerId === _.default.getId())
}

function ed(e) {
  let {
    streamType: t,
    guildId: n,
    channelId: r
  } = e;
  if (T.Wb.isSessionEstablished()) {
    var i, a;
    let e = null != n ? null == (i = h.Z.getChannel(r)) ? true : i.rtcRegion : null == (a = p.Z.getCall(r)) ? true : a.region;
    T.Wb.streamCreate(t, n, r, null != e ? e : E.Z.getPreferredRegion())
  }
  returnfalse
}

function ef(e) {
  let {
    streamKey: t,
    paused: n
  } = e;
  T.Wb.isSessionEstablished() && T.Wb.streamSetPaused(t, n)
}

function e_(e) {
  let {
    streamKey: t,
    allowMultiple: n
  } = e;
  return T.Wb.isSessionEstablished() && (n || ec(), T.Wb.streamWatch(t)), false
}

function ep(e) {
  let {
    streamKey: t
  } = e;
  return el(t), W(), false
}

function eh() {
  return Chunk955132.Wb.expeditedHeartbeat(5e3, "user clicked on notification", true), false
}

function em(e) {
  let {
    guildId: t,
    channelId: n,
    threads: r
  } = e;
  T.Wb.requestForumUnreads(t, n, r)
}

function eg(e) {
  T.Wb.connectionState !== I.Z.WILL_RECONNECT && T.Wb.resetSocketOnError(e.args)
}

function eE(e) {
  let {
    guildIds: t
  } = e;
  T.Wb.requestSoundboardSounds(t)
}
class eb extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk523746.Z, Chunk592125.Z, Chunk131951.Z, Chunk19780.Z, Chunk936349.Z, Chunk944486.Z, Chunk885110.Z, Chunk959457.Z, Chunk581883.Z), this.syncWith([Chunk131951.Z], ee), this.syncWith([Chunk885110.Z], et)
  }
  getSocket() {
    return Chunk955132.Wb
  }
  isTryingToConnect() {
    return !Chunk955132.Wb.isClosed()
  }
  isConnected() {
    return Chunk955132.Wb.isSessionEstablished()
  }
  isConnectedOrOverlay() {
    return Chunk955132.Wb.isSessionEstablished() || __OVERLAY__
  }
  lastTimeConnectedChanged() {
    return L
  }
}
R(eb, "displayName", "GatewayConnectionStore");
let ey = new eb(Chunk570140.Z, {
  START_SESSION: U,
  LOGIN_SUCCESS: B,
  LOGOUT: G,
  CLEAR_CACHES: H,
  CONNECTION_OPEN: e => {
    Z(e)
  },
  CONNECTION_RESUMED: V,
  CONNECTION_CLOSED: F,
  RTC_CONNECTION_STATE: J,
  VOICE_CHANNEL_SELECT: Y,
  VOICE_STATE_UPDATES: z,
  GUILD_DELETE: q,
  CHANNEL_DELETE: Q,
  CALL_DELETE: X,
  APP_STATE_UPDATE: $,
  GUILD_MEMBERS_REQUEST: en,
  GUILD_SEARCH_RECENT_MEMBERS: er,
  GUILD_SUBSCRIPTIONS_FLUSH: ei,
  CALL_CONNECT: ea,
  CALL_CONNECT_MULTIPLE: eo,
  STREAM_CREATE: W,
  STREAM_START: ed,
  STREAM_WATCH: e_,
  STREAM_STOP: ep,
  STREAM_SET_PAUSED: ef,
  PUSH_NOTIFICATION_CLICK: eh,
  REQUEST_FORUM_UNREADS: em,
  REQUEST_SOUNDBOARD_SOUNDS: eE,
  REMOTE_COMMAND: es,
  RESET_SOCKET: eg,
  CLIPS_SETTINGS_UPDATE: W,
  RUNNING_GAMES_CHANGE: W,
  USER_SETTINGS_PROTO_UPDATE: K
})