/** Chunk was on web.js **/
/** chunk id: 358221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eV
}), require("./388685.js"), require("./539854.js");
var r, Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317381 = require("./317381.js"),
  Chunk710845 = require("./710845.js"),
  Chunk258609 = require("./258609.js"),
  Chunk569545 = require("./569545.js"),
  Chunk163612 = require("./163612.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk523746 = require("./523746.js"),
  Chunk592125 = require("./592125.js"),
  Chunk158776 = require("./158776.js"),
  Chunk944486 = require("./944486.js"),
  Chunk606304 = require("./606304.js"),
  Chunk594174 = require("./594174.js"),
  Chunk33039 = require("./33039.js"),
  Chunk979651 = require("./979651.js"),
  Chunk413523 = require("./413523.js"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js");

function N(e, t, n) {
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
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = new Chunk710845.Z("ChannelRTCStore"),
  x = Object.freeze([]),
  L = [],
  j = {},
  M = {},
  k = {},
  U = {},
  G = {},
  Z = {},
  F = {},
  B = {},
  V = {},
  H = {},
  Y = {},
  W = null;

function K(e) {
  let t = j[e];
  return null == t && (t = new T.ZP(e), j[e] = t), t
}

function z() {
  for (let e of L) ea(module);
  eo()
}

function q() {
  let e = [],
    t = Chunk944486.Z.getChannelId();
  null != exports && module.push(exports), null == (W = Chunk944486.Z.getVoiceChannelId()) || module.includes(W) || module.push(W);
  let n = Chunk258609.default.getRemoteSessionId(),
    r = Chunk979651.Z.getVoiceStateForSession(Chunk314897.default.getId(), require);
  (null == r ? true : r.channelId) != null && module.push(null == r ? true : r.channelId), s().difference(L, module).forEach(ea);
  let i = s().difference(module, L);
  return L = module, Chunk512722
}

function Q(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : L;
  return t.reduce((t, n) => e(K(n)) ? (ei(n), er(n), true) : t, false)
}

function X(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : L;
  return Q(t => t.updateParticipant(e), t)
}

function J(e) {
  var t;
  let n = E.Z.getChannel(e),
    r = (null == n ? true : n.isDM()) && 1 ? C.dF.AUTO : C.dF.NONE;
  return null != (t = M[e]) ? t : [r, C.dF.NONE]
}

function $(e) {
  if (null == M[e]) returnfalse;
  let [t] = M[e];
  return t !== C.dF.NONE
}

function ee(e) {
  null == k[e] && (k[e] = {
    gridDurationMs: 0,
    focusDurationMs: 0,
    toggleCount: 0,
    lastUpdate: 0
  });
  let t = k[e],
    n = performance.now(),
    r = $(e);
  if (t.lastUpdate > 0) {
    let e = n - t.lastUpdate;
    t[r ? "focusDurationMs" : "gridDurationMs"] += e
  }
  t.lastUpdate = n
}

function et(e, t) {
  ee(e);
  let n = $(e);
  null == t ? delete M[e] : M[e] = t, n !== $(e) && k[e].toggleCount++
}

function en(e) {
  return e.size(T.sI.STREAM) > 0 || e.size(T.sI.VIDEO) > 0 || e.hasEmbeddedActivity()
}

function er(e) {
  let t = h.default.getId(),
    n = K(e);
  if (0 === n.size() || y.Z.getVoiceChannelId() !== e) return void et(e, null);
  let r = C.dF.NONE,
    i = n.toArray(T.sI.STREAM).find(e => e.type === C.fO.STREAM && m.Z.getActiveStreamForStreamKey(e.id));
  if (null != i) a()(i.type === C.fO.STREAM, "Impossible condition"), r = i.id;
  else if (1 === n.size()) r = t;
  else if (1 === n.size(T.sI.VIDEO)) {
    let [e] = n.toArray(T.sI.VIDEO);
    r = e.id
  } else {
    var o;
    let e = n.toArray().find(e => e.type === C.fO.USER && e.id !== t && !e.ringing);
    r = null != (o = null == e ? true : e.id) ? o : t
  }
  let [s] = J(e);
  if (s !== C.dF.AUTO && s !== C.dF.NONE) {
    let e = n.getParticipant(s);
    (null == e || e.type === C.fO.STREAM && null == m.Z.getActiveStreamForStreamKey(e.id)) && (s = C.dF.NONE)
  }
  et(e, [s, r])
}

function ei(e) {
  let t = K(e);
  if (0 === t.size()) return;
  let n = eG(e) || en(t) ? A.WtW.VIDEO : A.WtW.VOICE;
  n === A.WtW.VOICE ? (delete U[e], delete G[e]) : U[e] = n
}

function ea(e) {
  delete j[e], delete M[e], delete U[e], delete G[e], W = y.Z.getVoiceChannelId()
}

function eo() {
  return Q(e => e.rebuild(), q())
}

function es(e) {
  let {
    channelId: t,
    currentVoiceChannelId: n
  } = e;
  return null != t ? delete k[t] : null != n && (delete B[n], delete H[n], ee(n)), eo()
}

function el(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = eo();
  if (null == t || null == n || B[t]) return r;
  let i = E.Z.getChannel(t);
  return null != i && i.isGuildVocal() ? (V[t] = false, B[t] = true, true) : r
}

function ec(e) {
  let {
    voiceStates: t,
    initial: n
  } = e;
  return t.reduce((e, t) => {
    let {
      userId: r,
      channelId: i,
      guildId: a
    } = t;
    return (null != a && null != i && _.Z.getCurrentConfig({
      guildId: a,
      location: "voice_status_update"
    }, {
      autoTrackExposure: false
    }).enabled && K(i).updateGuildRingingUsers(r, false), n && null != i && !L.includes(i)) ? e : X(r) || e
  }, false)
}

function eu() {
  return Q(e => e.updateEmbeddedActivities())
}

function ed() {
  Chunk158776.Z.getUserIds().forEach(e => X(e))
}

function ef(e) {
  let {
    userId: t
  } = e;
  return Q(e => e.updateParticipantSpeaking(t))
}

function ep() {
  return Q(e => e.updateParticipantSpeaking(h.default.getId()))
}

function e_(e) {
  let {
    user: t
  } = e;
  return X(t.id)
}

function em(e) {
  let {
    channelId: t
  } = e;
  return Q(e => e.rebuild(), [t])
}

function eh(e) {
  let {
    channelId: t
  } = e;
  return ea(t)
}

function eg(e) {
  let {
    guild: t
  } = e, n = [];
  if (s().forEach(L, e => {
      let r = E.Z.getChannel(e);
      (null == r || r.getGuildId() === t.id) && n.push(e)
    }), 0 === n.length) returnfalse;
  s().forEach(n, e => ea(e))
}

function eE(e) {
  let {
    channelId: t,
    participantsOpen: n
  } = e;
  Z[t] = n
}

function eb(e) {
  let {
    channelId: t,
    voiceParticipantsHidden: n
  } = e;
  F[t] = n
}

function ey(e) {
  let {
    channelId: t,
    selfStreamHidden: n
  } = e, r = h.default.getId();
  if (n) {
    let [e] = J(t);
    (0, p.DB)(e) && e.includes(r) && et(t, null)
  }
  X(r, [t])
}

function eO(e) {
  let {
    channelId: t,
    large: n
  } = e;
  H[t] = n
}

function ev(e) {
  let {
    channelId: t,
    dismissed: n
  } = e;
  Y[t] = n
}

function eS(e) {
  let {
    channelId: t,
    chatOpen: n
  } = e;
  B[t] = n, n && (V[t] = false)
}

function eI(e) {
  let {
    channelId: t,
    participantsListOpen: n
  } = e;
  V[t] = n, n && (B[t] = false)
}

function eT(e) {
  let {
    channelId: t,
    id: n
  } = e, r = K(t);
  null == n && r.toArray(T.sI.STREAM).forEach(e => {
    (0, C._5)(e) && r.updateParticipant(e.user.id)
  });
  let [, i] = J(t);
  if (et(t, [null != n ? n : C.dF.NONE, i]), (0, p.DB)(n)) {
    try {
      let {
        ownerId: e
      } = (0, p.my)(n);
      e === h.default.getId() && X(e, [t])
    } catch (e) {
      D.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
    }
    en(r) || (Z[t] = false)
  }
}

function eC(e) {
  let {
    channelId: t,
    participantId: n
  } = e, [r] = J(t);
  r === n && et(t, null);
  let i = K(t),
    a = i.getParticipant(n);
  null != a && a.type !== C.fO.ACTIVITY && (i.updateParticipantPoppedOut(n, true), X(a.user.id, [t]))
}

function eA(e) {
  let {
    channelId: t,
    participantId: n
  } = e, r = K(t);
  r.updateParticipantPoppedOut(n, false);
  let i = r.getParticipant(n);
  null != i && i.type !== C.fO.ACTIVITY && X(i.user.id, [t])
}

function eN(e) {
  let {
    channel: t
  } = e;
  if (t.type === A.d4z.GROUP_DM) {
    let e = t.originChannelId;
    if (null != e) {
      var n, r;
      return G[t.id] = {
        [A.IlC.APP]: null != (r = null == (n = G[e]) ? true : n[A.IlC.APP]) ? r : A.AEg.NORMAL
      }, true
    }
  }
  returnfalse
}

function eP(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  return delete B[t], delete V[t], delete H[t], ea(t)
}

function eR(e) {
  let {
    channelId: t,
    layout: n,
    appContext: r
  } = e;
  G[t] = w(P({}, G[t]), {
    [r]: n
  })
}

function ew(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    ownerId: r
  } = (0, p.my)(t);
  return X(r, [n])
}

function eD(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    ownerId: r
  } = (0, p.my)(t);
  return X(r, [n])
}

function ex(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  return X(n, [t])
}

function eL(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  return X(n, [t])
}

function ej(e) {
  let {
    userId: t
  } = e;
  return X(t)
}

function eM(e) {
  let {
    channelId: t,
    senderUserId: n,
    maxResolution: r,
    maxFrameRate: i
  } = e;
  return Q(e => e.updateParticipantQuality(n, r, i), [t])
}

function ek(e) {
  let {
    channelId: t,
    guildId: n,
    ringing: r
  } = e;
  if (!_.Z.getCurrentConfig({
      guildId: n,
      location: "guild_ring_start"
    }).enabled) returnfalse;
  let i = K(t);
  return r.forEach(e => i.updateGuildRingingUsers(e, true)), Q(e => e.rebuild(), [t])
}

function eU(e) {
  let {
    channelId: t,
    guildId: n,
    ringing: r
  } = e;
  if (!_.Z.getCurrentConfig({
      guildId: n,
      location: "guild_ring_start"
    }).enabled) returnfalse;
  let i = K(t);
  return r.forEach(e => i.updateGuildRingingUsers(e, false)), Q(e => e.rebuild(), [t])
}

function eG(e) {
  var t;
  return !!(null == (t = E.Z.getChannel(e)) ? true : t.isGuildVocalOrThread())
}

function eZ(e) {
  var t;
  return !!(null == (t = E.Z.getChannel(e)) ? true : t.isGuildVocal())
}

function eF(e) {
  var t;
  return !!(null == (t = E.Z.getChannel(e)) ? true : t.isVocalThread())
}
class eB extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(m.Z, h.default, g.Z, E.Z, u.ZP, f.default, b.Z, y.Z, O.Z, v.default, S.Z, I.Z), this.syncWith([u.ZP], eu), this.syncWith([b.Z], ed), this.syncWith([f.default], eo), (null == e ? true : e.voiceParticipantsHidden) !== true && Object.assign(F, null == e ? true : e.voiceParticipantsHidden)
  }
  getState() {
    return {
      voiceParticipantsHidden: F
    }
  }
  getParticipantsVersion(e) {
    return K(e).version
  }
  getParticipants(e) {
    var t;
    return null != (t = K(e).toArray()) ? t : x
  }
  getSpeakingParticipants(e) {
    var t;
    return null != (t = K(e).toArray(T.sI.SPEAKING)) ? t : x
  }
  getFilteredParticipants(e) {
    var t;
    let n = K(e);
    return null != (t = F[e]) && t ? n.toArray(T.sI.FILTERED) : n.toArray(T.sI.NOT_POPPED_OUT)
  }
  getVideoParticipants(e) {
    var t;
    return null != (t = K(e).toArray(T.sI.VIDEO)) ? t : x
  }
  getStreamParticipants(e) {
    var t;
    return null != (t = K(e).toArray(T.sI.STREAM)) ? t : x
  }
  getActivityParticipants(e) {
    var t;
    return null != (t = K(e).toArray(T.sI.ACTIVITY)) ? t : x
  }
  getParticipant(e, t) {
    return K(e).getParticipant(t)
  }
  getUserParticipantCount(e) {
    let t = K(e);
    return t.size() - t.size(T.sI.STREAM) - t.size(T.sI.ACTIVITY)
  }
  getParticipantsOpen(e) {
    var t;
    return null == (t = Z[e]) || t
  }
  getVoiceParticipantsHidden(e) {
    var t;
    return null != (t = F[e]) && t
  }
  getSelectedParticipantId(e) {
    let [t, n] = J(e);
    return t === C.dF.NONE ? null : t !== C.dF.AUTO ? t : n === C.dF.NONE || n === C.dF.AUTO ? null : n
  }
  getSelectedParticipant(e) {
    let t = this.getSelectedParticipantId(e);
    return null == t ? null : K(e).getParticipant(t)
  }
  getSelectedParticipantStats(e) {
    let t = k[e];
    return null == t ? {} : {
      view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
      view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
      view_mode_toggle_count: t.toggleCount
    }
  }
  getGuildRingingUsers(e) {
    return K(e).guildRingingUsers
  }
  getMode(e) {
    var t;
    return null != (t = U[e]) ? t : eG(e) ? A.WtW.VIDEO : A.WtW.VOICE
  }
  getLayout(e) {
    var t, n;
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : A.IlC.APP;
    if (__OVERLAY__) return A.AEg.NORMAL;
    let i = W === e,
      a = eZ(e) || i && eF(e);
    return null != (n = null == (t = G[e]) ? true : t[r]) ? n : a ? A.AEg.NO_CHAT : A.AEg.NORMAL
  }
  getChatOpen(e) {
    var t, n, r;
    return null != (r = null != (n = B[e]) ? n : null == (t = E.Z.getChannel(e)) ? true : t.isVocalThread()) && r
  }
  getAllChatOpen() {
    return B
  }
  getParticipantsListOpen(e) {
    var t;
    return null != (t = V[e]) && t
  }
  isFullscreenInContext() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk981631.IlC.APP;
    return Object.values(G).some(t => t[e] === A.AEg.FULL_SCREEN)
  }
  getStageStreamSize(e) {
    return H[e]
  }
  getStageVideoLimitBoostUpsellDismissed(e) {
    return Y[e]
  }
  isParticipantPoppedOut(e, t) {
    let n = this.getParticipant(e, t);
    return null != n && "isPoppedOut" in n && n.isPoppedOut
  }
}
N(eB, "displayName", "ChannelRTCStore"), N(eB, "persistKey", "ChannelRTCStore");
let eV = new eB(Chunk570140.Z, {
  CONNECTION_OPEN: z,
  CONNECTION_OPEN_SUPPLEMENTAL: eo,
  THREAD_LIST_SYNC: eo,
  OVERLAY_INITIALIZE: eo,
  VOICE_CHANNEL_SELECT: es,
  CHANNEL_SELECT: el,
  CHANNEL_RTC_ACTIVE_CHANNELS: eo,
  VOICE_STATE_UPDATES: ec,
  CHANNEL_CREATE: eN,
  CHANNEL_DELETE: eP,
  THREAD_DELETE: eP,
  CALL_CREATE: em,
  CALL_UPDATE: em,
  CALL_DELETE: eh,
  CHANNEL_RTC_SELECT_PARTICIPANT: eT,
  CHANNEL_RTC_POPOUT_PARTICIPANT: eC,
  CHANNEL_RTC_RETURN_PARTICIPANT: eA,
  CHANNEL_RTC_UPDATE_LAYOUT: eR,
  CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: eE,
  CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: eb,
  CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: eO,
  CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: ev,
  STREAM_UPDATE_SELF_HIDDEN: ey,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: eS,
  CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: eI,
  RTC_CONNECTION_VIDEO: ex,
  RTC_CONNECTION_PLATFORM: eL,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: ej,
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: eM,
  STREAM_CLOSE: ew,
  STREAM_DELETE: ew,
  STREAM_WATCH: eD,
  SPEAKING: ef,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: ef,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: ef,
  PUSH_TO_TALK_STATE_CHANGE: ep,
  GUILD_RING_START: ek,
  GUILD_RING_STOP: eU,
  USER_UPDATE: e_,
  GUILD_MEMBER_UPDATE: e_,
  GUILD_DELETE: eg
})