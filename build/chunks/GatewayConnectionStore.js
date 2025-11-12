/** Chunk was on web.js **/
/** chunk id: 38618, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eb
});
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk287734 = require("./287734.js"),
  Chunk710845 = require("./710845.js"),
  Chunk569545 = require("./569545.js"),
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

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let R = window.DiscordNative;
Chunk955132.Wb.dispatcher.getDispatchHandler = Chunk344651.Z;
let P = new Chunk710845.Z("ConnectionStore"),
  D = 100,
  w = 0,
  x = null,
  L = true,
  M = null,
  j = null;

function k() {
  return Chunk955132.Wb.isClosed() ? (P.verbose("Socket is reconnecting because of starting new session"), Chunk955132.Wb.connect()) : (P.verbose("Socket is not reconnecting during a new session because it is not closed"), false)
}

function U(e) {
  e.isSwitchingAccount && I.RR.handleAccountSwitch(), P.verbose("Closing socket because of logout"), I.Wb.close()
}

function G() {
  return P.verbose("session refresh dispatched", {
    isEstablished: Chunk955132.Wb.isSessionEstablished()
  }), !!Chunk955132.Wb.isSessionEstablished() && (Chunk955132.Wb.close(), Chunk955132.Wb.connect())
}
async function B(e) {
  w = Date.now(), x = e.sessionId, I.RR.handleConnectionOpen();
  let t = {},
    n = E.Z.getVoiceChannelId();
  if (null != n) {
    var r, i, a, o, s, c, u, d;
    if ((null == (s = window) || null == (o = s.performance) || null == (a = o.getEntriesByType) || null == (i = a.call(o, "navigation")) || null == (r = i[0]) ? true : r.type) !== "reload" && (null == (c = await (null == R || null == (d = R.processUtils) || null == (u = d.getLastCrash) ? true : u.call(d))) ? true : c.rendererCrashReason) == null && L) m.Z.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
    else {
      let e = p.Z.getChannel(n);
      null != e && (t = {
        guildId: e.getGuildId(),
        channelId: n
      })
    }
  }
  I.GC.update(t, true), L = false, j = null
}

function Z() {
  P.verbose("connection closed dispatched"), w = Date.now()
}

function F() {
  j = null
}

function V(e) {
  return e.resetSocket && (I.Wb.close(), I.Wb.dispatcher.clear(), I.Wb.connect()), false
}

function H(e) {
  return I.GC.update({
    guildId: e.guildId,
    channelId: e.channelId
  }), j = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null, (0, O.isIOS)() && M === A.$7l.BACKGROUND && (null == e.channelId ? I.Wb.close(true) : I.Wb.isClosed() && (T.Y(false), I.Wb.connect())), false
}

function Y() {
  Chunk955132.GC.update()
}

function W(e) {
  var t;
  e.settings.type === C.yP.PRELOADED_USER_SETTINGS && (null == (t = e.settings.proto.clips) ? true : t.allowVoiceRecording) != null && Y()
}

function K(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    if (f.default.getId() !== t.userId) return e;
    if (t.sessionId === x) {
      if (null != j) return P.verbose("Ignoring voice state for own session due to VSU lock on channel:", j), e;
      I.GC.setState({
        guildId: t.guildId,
        channelId: t.channelId
      })
    } else {
      if (t.guildId !== I.GC.guildId) return e;
      I.GC.setState({
        guildId: null,
        channelId: null
      })
    }
    returntrue
  }, false)
}

function z(e) {
  e.guild.id === I.GC.guildId && I.GC.setState({
    guildId: null,
    channelId: null
  })
}

function q(e) {
  let {
    channelId: t
  } = e;
  if (t === I.GC.channelId) {
    if (j === t) returnfalse;
    I.GC.setState({
      guildId: null,
      channelId: null
    })
  }
}

function X(e) {
  let {
    channel: t
  } = e;
  t.id === I.GC.channelId && I.GC.setState({
    guildId: null,
    channelId: null
  })
}

function Q(e) {
  if (e.state !== A.hes.DISCONNECTED) returnfalse;
  e.willReconnect && (null != e.streamKey ? I.Wb.streamPing(e.streamKey) : I.Wb.voiceServerPing())
}

function J(e) {
  return (0, O.isIOS)() ? (f.default.isAuthenticated() && (M === A.$7l.INACTIVE && e.state === A.$7l.BACKGROUND && null == I.GC.channelId ? I.Wb.close(true) : M === A.$7l.BACKGROUND && e.state === A.$7l.ACTIVE && I.Wb.isClosed() && (T.Y(false), I.Wb.connect())), M = e.state) : e.state === A.$7l.ACTIVE && (T.Y(false), f.default.isAuthenticated() && I.Wb.resetBackoff("App state is active")), false
}

function $() {
  return Chunk955132.GC.update(), false
}

function ee() {
  return Chunk955132.RR.update(), false
}

function et(e) {
  return I.Wb.isSessionEstablished() && ("userIds" in e ? a()(e.userIds).chunk(D).forEach(t => {
    I.Wb.requestGuildMembers(e.guildIds, {
      userIds: t,
      presences: !!e.presences
    })
  }) : I.Wb.requestGuildMembers(e.guildIds, {
    query: e.query,
    limit: e.limit,
    presences: !!e.presences
  })), false
}

function en(e) {
  let {
    guildId: t,
    query: n,
    continuationToken: r
  } = e;
  I.Wb.isSessionEstablished() && I.Wb.searchRecentMembers(t, {
    query: n,
    continuationToken: r
  })
}

function er(e) {
  let {
    subscriptions: t
  } = e;
  return I.Wb.isSessionEstablished() && I.Wb.updateGuildSubscriptions(t), false
}

function ei(e) {
  let {
    channelId: t
  } = e;
  return I.Wb.isSessionEstablished() && I.Wb.callConnect(t), false
}

function ea(e) {
  let {
    channelIds: t
  } = e;
  return I.Wb.isSessionEstablished() && t.forEach(e => {
    I.Wb.callConnect(e)
  }), false
}

function eo(e) {
  let {
    sessionId: t,
    payload: n
  } = e;
  return I.Wb.isSessionEstablished() && I.Wb.remoteCommand(t, n), false
}

function es(e) {
  I.Wb.isSessionEstablished() && I.Wb.streamDelete(e)
}

function el() {
  let e = ec();
  Chunk959457.Z.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => es(e))
}

function ec() {
  return Chunk959457.Z.getAllActiveStreamKeys().find(e => (0, u.my)(e).ownerId === f.default.getId())
}

function eu(e) {
  let {
    streamType: t,
    guildId: n,
    channelId: r
  } = e;
  if (I.Wb.isSessionEstablished()) {
    var i, a;
    let e = null != n ? null == (i = p.Z.getChannel(r)) ? true : i.rtcRegion : null == (a = _.Z.getCall(r)) ? true : a.region;
    I.Wb.streamCreate(t, n, r, null != e ? e : g.Z.getPreferredRegion())
  }
  returnfalse
}

function ed(e) {
  let {
    streamKey: t,
    paused: n
  } = e;
  I.Wb.isSessionEstablished() && I.Wb.streamSetPaused(t, n)
}

function ef(e) {
  let {
    streamKey: t,
    allowMultiple: n
  } = e;
  return I.Wb.isSessionEstablished() && (n || el(), I.Wb.streamWatch(t)), false
}

function e_(e) {
  let {
    streamKey: t
  } = e;
  return es(t), Y(), false
}

function ep() {
  return Chunk955132.Wb.expeditedHeartbeat(5e3, "user clicked on notification", true), false
}

function eh(e) {
  let {
    guildId: t,
    channelId: n,
    threads: r
  } = e;
  I.Wb.requestForumUnreads(t, n, r)
}

function em(e) {
  I.Wb.connectionState !== v.Z.WILL_RECONNECT && I.Wb.resetSocketOnError(e.args)
}

function eg(e) {
  let {
    guildIds: t
  } = e;
  I.Wb.requestSoundboardSounds(t)
}
class eE extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk523746.Z, Chunk592125.Z, Chunk131951.Z, Chunk19780.Z, Chunk936349.Z, Chunk944486.Z, Chunk885110.Z, Chunk959457.Z, Chunk581883.Z), this.syncWith([Chunk131951.Z], $), this.syncWith([Chunk885110.Z], ee)
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
    return w
  }
}
N(eE, "displayName", "GatewayConnectionStore");
let eb = new eE(Chunk570140.Z, {
  START_SESSION: k,
  LOGIN_SUCCESS: G,
  LOGOUT: U,
  CLEAR_CACHES: V,
  CONNECTION_OPEN: e => {
    B(e)
  },
  CONNECTION_RESUMED: F,
  CONNECTION_CLOSED: Z,
  RTC_CONNECTION_STATE: Q,
  VOICE_CHANNEL_SELECT: H,
  VOICE_STATE_UPDATES: K,
  GUILD_DELETE: z,
  CHANNEL_DELETE: X,
  CALL_DELETE: q,
  APP_STATE_UPDATE: J,
  GUILD_MEMBERS_REQUEST: et,
  GUILD_SEARCH_RECENT_MEMBERS: en,
  GUILD_SUBSCRIPTIONS_FLUSH: er,
  CALL_CONNECT: ei,
  CALL_CONNECT_MULTIPLE: ea,
  STREAM_CREATE: Y,
  STREAM_START: eu,
  STREAM_WATCH: ef,
  STREAM_STOP: e_,
  STREAM_SET_PAUSED: ed,
  PUSH_NOTIFICATION_CLICK: ep,
  REQUEST_FORUM_UNREADS: eh,
  REQUEST_SOUNDBOARD_SOUNDS: eg,
  REMOTE_COMMAND: eo,
  RESET_SOCKET: em,
  CLIPS_SETTINGS_UPDATE: Y,
  RUNNING_GAMES_CHANGE: Y,
  USER_SETTINGS_PROTO_UPDATE: W
})