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

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let w = window.DiscordNative;
Chunk955132.Wb.dispatcher.getDispatchHandler = Chunk344651.Z;
let R = new Chunk710845.Z("ConnectionStore"),
  D = 100,
  x = 0,
  L = null,
  j = true,
  M = null,
  k = null;

function U() {
  return I.Wb.isClosed() ? (R.verbose("Socket is reconnecting because of starting new session"), I.Wb.connect()) : (R.verbose("Socket is not reconnecting during a new session because it is not closed"), false)
}

function G(e) {
  e.isSwitchingAccount && I.RR.handleAccountSwitch(), R.verbose("Closing socket because of logout"), I.Wb.close()
}

function Z() {
  return R.verbose("session refresh dispatched", {
    isEstablished: I.Wb.isSessionEstablished()
  }), !!I.Wb.isSessionEstablished() && (I.Wb.close(), I.Wb.connect())
}
async function F(e) {
  x = Date.now(), L = e.sessionId, I.RR.handleConnectionOpen();
  let t = {},
    n = b.Z.getVoiceChannelId();
  if (null != n) {
    var r, i, a, o, s, c, u, f;
    if ((null == (s = window) || null == (o = s.performance) || null == (a = o.getEntriesByType) || null == (i = a.call(o, "navigation")) || null == (r = i[0]) ? true : r.type) !== "reload" && (null == (c = await (null == w || null == (f = w.processUtils) || null == (u = f.getLastCrash) ? true : u.call(f))) ? true : c.rendererCrashReason) == null && j) g.Z.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
    else {
      let e = h.Z.getChannel(n);
      null != e && (t = {
        guildId: e.getGuildId(),
        channelId: n
      }, (0, d.Db)(n))
    }
  }
  I.GC.update(t, true), j = false, k = null
}

function B() {
  R.verbose("connection closed dispatched"), x = Date.now()
}

function V() {
  k = null
}

function H(e) {
  return e.resetSocket && (I.Wb.close(), I.Wb.dispatcher.clear(), I.Wb.connect()), false
}

function Y(e) {
  return I.GC.update({
    guildId: e.guildId,
    channelId: e.channelId
  }), k = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null, (0, v.isIOS)() && M === A.$7l.BACKGROUND && (null == e.channelId ? I.Wb.close(true) : I.Wb.isClosed() && (T.Y(false), I.Wb.connect())), false
}

function W() {
  I.GC.update()
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
    if (p.default.getId() !== t.userId) return e;
    if (t.sessionId === L) {
      if (null != k) return R.verbose("Ignoring voice state for own session due to VSU lock on channel:", k), e;
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

function q(e) {
  e.guild.id === I.GC.guildId && I.GC.setState({
    guildId: null,
    channelId: null
  })
}

function Q(e) {
  let {
    channelId: t
  } = e;
  if (t === I.GC.channelId) {
    if (k === t) returnfalse;
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

function J(e) {
  if (e.state !== A.hes.DISCONNECTED) returnfalse;
  e.willReconnect && (null != e.streamKey ? I.Wb.streamPing(e.streamKey) : I.Wb.voiceServerPing())
}

function $(e) {
  return (0, v.isIOS)() ? (p.default.isAuthenticated() && (M === A.$7l.INACTIVE && e.state === A.$7l.BACKGROUND && null == I.GC.channelId ? I.Wb.close(true) : M === A.$7l.BACKGROUND && e.state === A.$7l.ACTIVE && I.Wb.isClosed() && (T.Y(false), I.Wb.connect())), M = e.state) : e.state === A.$7l.ACTIVE && (T.Y(false), p.default.isAuthenticated() && I.Wb.resetBackoff("App state is active")), false
}

function ee() {
  return I.GC.update(), false
}

function et() {
  return I.RR.update(), false
}

function en(e) {
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

function er(e) {
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

function ei(e) {
  let {
    subscriptions: t
  } = e;
  return I.Wb.isSessionEstablished() && I.Wb.updateGuildSubscriptions(t), false
}

function ea(e) {
  let {
    channelId: t
  } = e;
  return I.Wb.isSessionEstablished() && I.Wb.callConnect(t), false
}

function eo(e) {
  let {
    channelIds: t
  } = e;
  return I.Wb.isSessionEstablished() && t.forEach(e => {
    I.Wb.callConnect(e)
  }), false
}

function es(e) {
  let {
    sessionId: t,
    payload: n
  } = e;
  return I.Wb.isSessionEstablished() && I.Wb.remoteCommand(t, n), false
}

function el(e) {
  I.Wb.isSessionEstablished() && I.Wb.streamDelete(e)
}

function ec() {
  let e = eu();
  O.Z.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => el(e))
}

function eu() {
  return O.Z.getAllActiveStreamKeys().find(e => (0, u.my)(e).ownerId === p.default.getId())
}

function ed(e) {
  let {
    streamType: t,
    guildId: n,
    channelId: r
  } = e;
  if (I.Wb.isSessionEstablished()) {
    var i, a;
    let e = null != n ? null == (i = h.Z.getChannel(r)) ? true : i.rtcRegion : null == (a = _.Z.getCall(r)) ? true : a.region;
    I.Wb.streamCreate(t, n, r, null != e ? e : E.Z.getPreferredRegion())
  }
  returnfalse
}

function ef(e) {
  let {
    streamKey: t,
    paused: n
  } = e;
  I.Wb.isSessionEstablished() && I.Wb.streamSetPaused(t, n)
}

function ep(e) {
  let {
    streamKey: t,
    allowMultiple: n
  } = e;
  return I.Wb.isSessionEstablished() && (n || ec(), I.Wb.streamWatch(t)), false
}

function e_(e) {
  let {
    streamKey: t
  } = e;
  return el(t), W(), false
}

function eh() {
  return I.Wb.expeditedHeartbeat(5e3, "user clicked on notification", true), false
}

function em(e) {
  let {
    guildId: t,
    channelId: n,
    threads: r
  } = e;
  I.Wb.requestForumUnreads(t, n, r)
}

function eg(e) {
  I.Wb.connectionState !== S.Z.WILL_RECONNECT && I.Wb.resetSocketOnError(e.args)
}

function eE(e) {
  let {
    guildIds: t
  } = e;
  I.Wb.requestSoundboardSounds(t)
}
class eb extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(p.default, _.Z, h.Z, m.Z, g.Z, E.Z, b.Z, y.Z, O.Z, f.Z), this.syncWith([m.Z], ee), this.syncWith([y.Z], et)
  }
  getSocket() {
    return I.Wb
  }
  isTryingToConnect() {
    return !I.Wb.isClosed()
  }
  isConnected() {
    return I.Wb.isSessionEstablished()
  }
  isConnectedOrOverlay() {
    return I.Wb.isSessionEstablished() || __OVERLAY__
  }
  lastTimeConnectedChanged() {
    return x
  }
}
P(eb, "displayName", "GatewayConnectionStore");
let ey = new eb(Chunk570140.Z, {
  START_SESSION: U,
  LOGIN_SUCCESS: Z,
  LOGOUT: G,
  CLEAR_CACHES: H,
  CONNECTION_OPEN: e => {
    F(e)
  },
  CONNECTION_RESUMED: V,
  CONNECTION_CLOSED: B,
  RTC_CONNECTION_STATE: J,
  VOICE_CHANNEL_SELECT: Y,
  VOICE_STATE_UPDATES: z,
  GUILD_DELETE: q,
  CHANNEL_DELETE: X,
  CALL_DELETE: Q,
  APP_STATE_UPDATE: $,
  GUILD_MEMBERS_REQUEST: en,
  GUILD_SEARCH_RECENT_MEMBERS: er,
  GUILD_SUBSCRIPTIONS_FLUSH: ei,
  CALL_CONNECT: ea,
  CALL_CONNECT_MULTIPLE: eo,
  STREAM_CREATE: W,
  STREAM_START: ed,
  STREAM_WATCH: ep,
  STREAM_STOP: e_,
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