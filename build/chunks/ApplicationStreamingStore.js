/** Chunk was on web.js **/
/** chunk id: 199902, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i, a, o, s, l;
require.d(exports, {
  Z: () => eo
}), require("./388685.js"), require("./539854.js");
var c, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk258609 = require("./258609.js"),
  Chunk594190 = require("./594190.js"),
  Chunk569545 = require("./569545.js"),
  Chunk102172 = require("./102172.js"),
  Chunk139656 = require("./139656.js"),
  Chunk783443 = require("./783443.js"),
  Chunk855403 = require("./855403.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk979651 = require("./979651.js"),
  Chunk981631 = require("./981631.js"),
  Chunk70722 = require("./70722.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = null,
  L = {},
  M = null;

function j() {
  r = new Map, i = {}, a = {}, o = {}
}

function k(e) {
  var t;
  null == i[e.ownerId] && (i[e.ownerId] = {}), i[e.ownerId][null != (t = e.guildId) ? t : C.kod] = e
}

function U(e, t) {
  var n;
  let r = null != t ? t : C.kod;
  return (null == (n = i[e]) ? true : n[r]) != null && (delete i[e][r], true)
}

function G(e) {
  r.delete(e)
}

function B() {
  let e = [];
  for (let t in i) {
    let n = i[exports];
    for (let r in require) module.push(i[exports][r])
  }
  return module
}

function Z(e) {
  let {
    applicationStreamState: t
  } = e;
  i = t.streamsByUserAndGuild, r = new Map(t.activeStreams), a = t.rtcStreams, o = t.streamerActiveStreamMetadatas
}

function F(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let {
      userId: n,
      guildId: r,
      channelId: i,
      sessionId: a,
      selfStream: o,
      discoverable: s
    } = t;
    if (o && null != i) return k({
      streamType: null != r ? N.lo.GUILD : N.lo.CALL,
      ownerId: n,
      guildId: r,
      channelId: i,
      discoverable: s
    }), true;
    {
      let t = b.default.getSessionId();
      return n === b.default.getId() && a !== t && null != T.Z.getChannelId() ? e : U(n, r) || e
    }
  }, false)
}

function V(e) {
  let {
    streamKey: t
  } = e, n = (0, p.my)(t);
  r.delete(t), r.set(t, D(P({}, n), {
    state: C.jm8.CONNECTING
  })), n.ownerId === b.default.getId() && (L[n.channelId] = false)
}

function H(e) {
  var t;
  let {
    streamType: n,
    guildId: i,
    channelId: a,
    pid: c,
    sourceName: u,
    sourceId: d,
    sourceIcon: f,
    previewDisabled: h
  } = e, m = (0, p.V9)({
    streamType: n,
    guildId: i,
    channelId: a,
    ownerId: b.default.getId()
  });
  (null == d ? true : d.startsWith("prepicked:")) && null == c && (c = s);
  let g = null != (t = (null == d ? true : d.startsWith("prepicked:")) && null != l ? l : null != c ? _.ZP.getGameForPID(c) : null != d ? _.ZP.getRunningGames().find(e => (0, E.Z)(d, e.windowHandle)) : null) ? t : null;
  o[m] = {
    id: null == g ? true : g.id,
    pid: c,
    sourceName: u,
    previewDisabled: h,
    sourceIcon: f,
    sourceId: d
  }, r.delete(m), r.set(m, {
    streamType: n,
    guildId: i,
    channelId: a,
    ownerId: b.default.getId(),
    state: C.jm8.CONNECTING
  })
}

function Y(e) {
  for (let t of e.applications) {
    let e = _.ZP.getGameForPID(t.id);
    if (null != e) return e
  }
  for (let t of e.windows)
    if (null != t.owningApplication) {
      let e = _.ZP.getGameForPID(t.owningApplication.id);
      if (null != e) return e
    }
}

function W(e) {
  let {
    settings: t,
    endReason: n,
    errorCode: i
  } = e;
  if ((null == t ? true : t.desktopSettings) != null || (null == t ? true : t.cameraSettings) != null || null == i) returnfalse;
  let a = false;
  for (let e in o) {
    let t = r.get(e);
    null != t && (r.set(e, D(P({}, t), {
      state: C.jm8.FAILED,
      endReason: n,
      errorCode: i
    })), a = true)
  }
  return a
}

function K(e) {
  let {
    existing: t,
    content: n
  } = e;
  if (null == n || (s = null == (l = Y(n)) ? true : l.pid, !t)) returnfalse;
  let r = (0, g.Z)(n),
    i = {
      pid: s,
      id: null == l ? true : l.id
    };
  null != r && (i.sourceName = r);
  let a = false;
  for (let e in o) {
    var c, u;
    (null == (u = o[e]) || null == (c = u.sourceId) ? true : c.startsWith("prepicked:")) && (o[e] = P({}, o[e], i), a = true)
  }
  return a
}

function z(e) {
  let {
    streamKey: t
  } = e;
  o[t] = null
}

function q(e) {
  let {
    streamKey: t,
    region: n,
    viewerIds: i,
    paused: o
  } = e;
  r.set(t, D(P({}, (0, p.my)(t)), {
    state: o ? C.jm8.PAUSED : C.jm8.ACTIVE
  })), a[t] = {
    streamKey: t,
    region: n,
    viewerIds: i
  }
}

function X(e) {
  let {
    streamKey: t
  } = e;
  G(t)
}

function Q(e) {
  let {
    id: t,
    channelId: n
  } = e;
  x = t, Array.from(r.values()).forEach(e => {
    (0, p.V9)(e) !== x && e.state === C.jm8.ENDED && G((0, p.V9)(e))
  }), null != t && (0, p.DB)(t) && t.includes(b.default.getId()) && (L[n] = false)
}

function J(e) {
  let {
    streamKey: t,
    unavailable: i,
    reason: o
  } = e;
  delete a[t];
  let s = r.get(t);
  if (null == s) returnfalse;
  let l = C.jm8.ENDED;
  if (i) l = C.jm8.RECONNECTING;
  else if (o === C.si2.UNAUTHORIZED) l = C.jm8.FAILED;
  else if (o === C.si2.SAFETY_GUILD_RATE_LIMITED) {
    let {
      guildId: e
    } = (0, p.my)(t);
    n.e("76731").then(n.bind(n, 626892)).then(t => {
      let {
        default: n
      } = t;
      n(e)
    }), l = C.jm8.ENDED
  } else s.state === C.jm8.FAILED && o === C.si2.USER_REQUESTED && (l = C.jm8.FAILED);
  r.set(t, D(P({}, s), {
    state: l
  })), l === C.jm8.ENDED && x !== t && G(t)
}

function $(e) {
  let {
    streamKey: t
  } = e, n = r.get(t);
  if (null == n) returnfalse;
  r.set(t, D(P({}, n), {
    state: C.jm8.FAILED
  }))
}

function ee(e) {
  let {
    streamKey: t,
    state: n
  } = e;
  if (null == t) returnfalse;
  let i = r.get(t);
  if (null == i || i.state === C.jm8.ENDED || i.state === C.jm8.FAILED && i.ownerId === b.default.getId()) returnfalse;
  let a = i.state;
  switch (n) {
    case C.hes.DISCONNECTED:
      a = C.jm8.RECONNECTING;
      break;
    case C.hes.RTC_CONNECTED:
      a = C.jm8.ACTIVE
  }
  if (a === i.state) returnfalse;
  r.set(t, D(P({}, i), {
    state: a
  }))
}

function et(e) {
  let {
    channelId: t,
    selfStreamHidden: n
  } = e;
  (0, p.DB)(x) && (null == x ? true : x.includes(b.default.getId())) && false === L[t] && true === n && (x = null), L[t] = n
}

function en(e) {
  let {
    intent: t
  } = e;
  M = t
}

function er(e, t) {
  let n = y.Z.getBasicChannel(t);
  return e === N.lo.CALL || null != n && I.Z.canBasicChannel(C.S7T.VIEW_CHANNEL, n)
}

function ei(e) {
  if (er(e.streamType, e.channelId)) returntrue;
  let t = y.Z.getBasicChannel(e.channelId);
  return null != t && (0, h.p9)(t, A.Z, O.Z, I.Z, f.default)[0]
}
j();
class ea extends(c = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.syncWith([I.Z], () => true), this.waitFor(b.default, y.Z, I.Z, T.Z, _.ZP, S.Z), (null == e ? true : e.selfStreamParticipantsHidden) !== true && Object.assign(L, null == e ? true : e.selfStreamParticipantsHidden)
  }
  getState() {
    return {
      selfStreamParticipantsHidden: L
    }
  }
  isSelfStreamHidden(e) {
    var t;
    return null != (t = L[e]) && t
  }
  getLastActiveStream() {
    var e;
    return (0, Chunk139656.Z)(Chunk131951.Z) && null != (e = Array.from(r.values()).pop()) ? module : null
  }
  getAllActiveStreams() {
    return (0, Chunk139656.Z)(Chunk131951.Z) ? Array.from(r.values()) : []
  }
  getAllActiveStreamsForChannel(e) {
    return (0, m.Z)(v.Z) ? Array.from(r.values()).filter(t => t.channelId === e) : []
  }
  getActiveStreamForStreamKey(e) {
    var t;
    return (0, m.Z)(v.Z) && null != (t = r.get(e)) ? t : null
  }
  getActiveStreamForApplicationStream(e) {
    var t;
    if (!(0, m.Z)(v.Z) || null == e) return null;
    let n = (0, p.V9)(e);
    return null != (t = this.getActiveStreamForStreamKey(n)) ? t : null
  }
  getCurrentUserActiveStream() {
    let e = Chunk944486.Z.getVoiceChannelId(),
      t = Chunk592125.Z.getChannel(module);
    return null == exports ? null : this.getActiveStreamForUser(Chunk314897.default.getId(), exports.getGuildId())
  }
  getActiveStreamForUser(e, t) {
    var n;
    let r = this.getStreamForUser(e, t);
    return null != r ? this.getActiveStreamForApplicationStream(r) : null != (n = this.getAllActiveStreams().find(t => t.ownerId === e)) ? n : null
  }
  getStreamerActiveStreamMetadata() {
    var e;
    let t = Chunk944486.Z.getVoiceChannelId(),
      n = Chunk592125.Z.getChannel(exports);
    if (null == require) return null;
    let r = this.getActiveStreamForUser(Chunk314897.default.getId(), require.getGuildId());
    return null == r ? null : null != (e = o[(0, Chunk569545.V9)(r)]) ? module : null
  }
  getStreamerActiveStreamMetadataForStream(e) {
    var t;
    return null != (t = o[e]) ? t : null
  }
  getIsActiveStreamPreviewDisabled(e) {
    var t;
    let n = o[e];
    return null != (t = null == n ? true : n.previewDisabled) && t
  }
  getAnyStreamForUser(e) {
    var t;
    if (!(0, m.Z)(v.Z)) return null;
    let n = i[e];
    return null == n ? null : null != (t = Object.values(n).find(e => ei(e))) ? t : null
  }
  getAnyDiscoverableStreamForUser(e) {
    var t;
    if (!(0, m.Z)(v.Z)) return null;
    let n = i[e];
    return null == n ? null : null != (t = Object.values(n).find(e => ei(e) && false !== e.discoverable)) ? t : null
  }
  getStreamForUser(e, t) {
    var n;
    if (!(0, m.Z)(v.Z)) return null;
    let r = null == (n = i[e]) ? true : n[null != t ? t : C.kod];
    return null != r && ei(r) ? r : null
  }
  getRTCStream(e) {
    var t;
    return (0, m.Z)(v.Z) && null != (t = a[e]) ? t : null
  }
  getAllApplicationStreams() {
    return (0, Chunk139656.Z)(Chunk131951.Z) ? B().filter(e => null != e && er(e.streamType, e.channelId)) : []
  }
  getAllApplicationStreamsForChannel(e) {
    return (0, m.Z)(v.Z) ? B().filter(t => null != t && t.channelId === e && er(t.streamType, t.channelId)) : []
  }
  getViewerIds(e) {
    if (!(0, m.Z)(v.Z)) return [];
    let t = null,
      n = null != (t = "string" == typeof e ? e : (0, p.V9)(e)) ? a[t] : null;
    return null != n ? n.viewerIds : []
  }
  getCurrentAppIntent() {
    return M
  }
  getStreamingState() {
    return (0, Chunk139656.Z)(Chunk131951.Z) ? {
      activeStreams: Array.from(r.entries()),
      streamsByUserAndGuild: i,
      rtcStreams: a,
      streamerActiveStreamMetadatas: o
    } : {
      activeStreams: [],
      streamsByUserAndGuild: {},
      rtcStreams: {},
      streamerActiveStreamMetadatas: {}
    }
  }
}
R(ea, "displayName", "ApplicationStreamingStore"), R(ea, "persistKey", "ApplicationStreamingStore");
let eo = new ea(Chunk570140.Z, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: W,
  NATIVE_SCREEN_SHARE_PICKER_UPDATE: K,
  OVERLAY_INITIALIZE: Z,
  VOICE_STATE_UPDATES: F,
  STREAM_WATCH: V,
  STREAM_START: H,
  STREAM_STOP: z,
  STREAM_CREATE: q,
  STREAM_UPDATE: q,
  STREAM_TIMED_OUT: $,
  STREAM_DELETE: J,
  STREAM_CLOSE: X,
  STREAM_UPDATE_SELF_HIDDEN: et,
  SET_STREAM_APP_INTENT: en,
  RTC_CONNECTION_STATE: ee,
  CHANNEL_RTC_SELECT_PARTICIPANT: Q,
  CONNECTION_OPEN: j,
  CONNECTION_CLOSED: j,
  LOGOUT: j
})