/** Chunk was on web.js **/
/** chunk id: 358221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eG
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

function R(e) {
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

function P(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = new Chunk710845.Z("ChannelRTCStore"),
  x = Object.freeze([]),
  L = [],
  M = {},
  j = {},
  k = {},
  U = {},
  G = {},
  B = {},
  Z = {},
  F = {},
  V = {},
  H = {},
  Y = {};

function W(e) {
  let t = M[e];
  return null == t && (t = new T.ZP(e), M[e] = t), t
}

function K() {
  for (let e of L) ei(module);
  ea()
}

function z() {
  let e = [],
    t = Chunk944486.Z.getChannelId();
  null != exports && module.push(exports);
  let n = Chunk944486.Z.getVoiceChannelId();
  null == require || module.includes(require) || module.push(require);
  let r = Chunk258609.default.getRemoteSessionId(),
    i = Chunk979651.Z.getVoiceStateForSession(Chunk314897.default.getId(), r);
  (null == Chunk512722 ? true : Chunk512722.channelId) != null && module.push(null == Chunk512722 ? true : Chunk512722.channelId), s().difference(L, module).forEach(ei);
  let a = s().difference(module, L);
  return L = module, a
}

function q(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : L;
  return t.reduce((t, n) => e(W(n)) ? (er(n), en(n), true) : t, false)
}

function X(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : L;
  return q(t => t.updateParticipant(e), t)
}

function Q(e) {
  var t;
  let n = E.Z.getChannel(e),
    r = (null == n ? true : n.isDM()) && 1 ? A.dF.AUTO : A.dF.NONE;
  return null != (t = j[e]) ? t : [r, A.dF.NONE]
}

function J(e) {
  if (null == j[e]) returnfalse;
  let [t] = j[e];
  return t !== A.dF.NONE
}

function $(e) {
  null == k[e] && (k[e] = {
    gridDurationMs: 0,
    focusDurationMs: 0,
    toggleCount: 0,
    lastUpdate: 0
  });
  let t = k[e],
    n = performance.now(),
    r = J(e);
  if (t.lastUpdate > 0) {
    let e = n - t.lastUpdate;
    t[r ? "focusDurationMs" : "gridDurationMs"] += e
  }
  t.lastUpdate = n
}

function ee(e, t) {
  $(e);
  let n = J(e);
  null == t ? delete j[e] : j[e] = t, n !== J(e) && k[e].toggleCount++
}

function et(e) {
  return e.size(T.sI.STREAM) > 0 || e.size(T.sI.VIDEO) > 0 || e.hasEmbeddedActivity()
}

function en(e) {
  let t = m.default.getId(),
    n = W(e);
  if (0 === n.size() || y.Z.getVoiceChannelId() !== e) return void ee(e, null);
  let r = A.dF.NONE,
    i = n.toArray(T.sI.STREAM).find(e => e.type === A.fO.STREAM && h.Z.getActiveStreamForStreamKey(e.id));
  if (null != i) a()(i.type === A.fO.STREAM, "Impossible condition"), r = i.id;
  else if (1 === n.size()) r = t;
  else if (1 === n.size(T.sI.VIDEO)) {
    let [e] = n.toArray(T.sI.VIDEO);
    r = e.id
  } else {
    var o;
    let e = n.toArray().find(e => e.type === A.fO.USER && e.id !== t && !e.ringing);
    r = null != (o = null == e ? true : e.id) ? o : t
  }
  let [s] = Q(e);
  if (s !== A.dF.AUTO && s !== A.dF.NONE) {
    let e = n.getParticipant(s);
    (null == e || e.type === A.fO.STREAM && null == h.Z.getActiveStreamForStreamKey(e.id)) && (s = A.dF.NONE)
  }
  ee(e, [s, r])
}

function er(e) {
  let t = W(e);
  if (0 === t.size()) return;
  let n = ek(e) || et(t) ? C.WtW.VIDEO : C.WtW.VOICE;
  n === C.WtW.VOICE ? (delete U[e], delete G[e]) : U[e] = n
}

function ei(e) {
  delete M[e], delete j[e], delete U[e], delete G[e]
}

function ea() {
  return q(e => e.rebuild(), z())
}

function eo(e) {
  let {
    channelId: t,
    currentVoiceChannelId: n
  } = e;
  return null != t ? delete k[t] : null != n && (delete F[n], delete H[n], $(n)), ea()
}

function es(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = ea();
  if (null == t || null == n || F[t]) return r;
  let i = E.Z.getChannel(t);
  return null != i && i.isGuildVocal() ? (V[t] = false, F[t] = true, true) : r
}

function el(e) {
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
    return (null != a && null != i && p.Z.getCurrentConfig({
      guildId: a,
      location: "voice_status_update"
    }, {
      autoTrackExposure: false
    }).enabled && W(i).updateGuildRingingUsers(r, false), n && null != i && !L.includes(i)) ? e : X(r) || e
  }, false)
}

function ec() {
  return q(e => e.updateEmbeddedActivities())
}

function eu() {
  Chunk158776.Z.getUserIds().forEach(e => X(e))
}

function ed(e) {
  let {
    userId: t
  } = e;
  return q(e => e.updateParticipantSpeaking(t))
}

function ef(e) {
  let {
    user: t
  } = e;
  return X(t.id)
}

function e_(e) {
  let {
    channelId: t
  } = e;
  return q(e => e.rebuild(), [t])
}

function ep(e) {
  let {
    channelId: t
  } = e;
  return ei(t)
}

function eh(e) {
  let {
    guild: t
  } = e, n = [];
  if (s().forEach(L, e => {
      let r = E.Z.getChannel(e);
      (null == r || r.getGuildId() === t.id) && n.push(e)
    }), 0 === n.length) returnfalse;
  s().forEach(n, e => ei(e))
}

function em(e) {
  let {
    channelId: t,
    participantsOpen: n
  } = e;
  B[t] = n
}

function eg(e) {
  let {
    channelId: t,
    voiceParticipantsHidden: n
  } = e;
  Z[t] = n
}

function eE(e) {
  let {
    channelId: t,
    selfStreamHidden: n
  } = e, r = m.default.getId();
  if (n) {
    let [e] = Q(t);
    (0, _.DB)(e) && e.includes(r) && ee(t, null)
  }
  X(r, [t])
}

function eb(e) {
  let {
    channelId: t,
    large: n
  } = e;
  H[t] = n
}

function ey(e) {
  let {
    channelId: t,
    dismissed: n
  } = e;
  Y[t] = n
}

function eO(e) {
  let {
    channelId: t,
    chatOpen: n
  } = e;
  F[t] = n, n && (V[t] = false)
}

function ev(e) {
  let {
    channelId: t,
    participantsListOpen: n
  } = e;
  V[t] = n, n && (F[t] = false)
}

function eI(e) {
  let {
    channelId: t,
    id: n
  } = e, r = W(t);
  null == n && r.toArray(T.sI.STREAM).forEach(e => {
    (0, A._5)(e) && r.updateParticipant(e.user.id)
  });
  let [, i] = Q(t);
  if (ee(t, [null != n ? n : A.dF.NONE, i]), (0, _.DB)(n)) {
    try {
      let {
        ownerId: e
      } = (0, _.my)(n);
      e === m.default.getId() && X(e, [t])
    } catch (e) {
      D.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
    }
    et(r) || (B[t] = false)
  }
}

function eS(e) {
  let {
    channelId: t,
    participantId: n
  } = e, [r] = Q(t);
  r === n && ee(t, null);
  let i = W(t),
    a = i.getParticipant(n);
  null != a && a.type !== A.fO.ACTIVITY && (i.updateParticipantPoppedOut(n, true), X(a.user.id, [t]))
}

function eT(e) {
  let {
    channelId: t,
    participantId: n
  } = e, r = W(t);
  r.updateParticipantPoppedOut(n, false);
  let i = r.getParticipant(n);
  null != i && i.type !== A.fO.ACTIVITY && X(i.user.id, [t])
}

function eA(e) {
  let {
    channel: t
  } = e;
  if (t.type === C.d4z.GROUP_DM) {
    let e = t.originChannelId;
    if (null != e) {
      var n, r;
      return G[t.id] = {
        [C.IlC.APP]: null != (r = null == (n = G[e]) ? true : n[C.IlC.APP]) ? r : C.AEg.NORMAL
      }, true
    }
  }
  returnfalse
}

function eC(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  return delete F[t], delete V[t], delete H[t], ei(t)
}

function eN(e) {
  let {
    channelId: t,
    layout: n,
    appContext: r
  } = e;
  G[t] = w(R({}, G[t]), {
    [r]: n
  })
}

function eR(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    ownerId: r
  } = (0, _.my)(t);
  return X(r, [n])
}

function eP(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    ownerId: r
  } = (0, _.my)(t);
  return X(r, [n])
}

function ew(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  return X(n, [t])
}

function eD(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  return X(n, [t])
}

function ex(e) {
  let {
    userId: t
  } = e;
  return X(t)
}

function eL(e) {
  let {
    channelId: t,
    senderUserId: n,
    maxResolution: r,
    maxFrameRate: i
  } = e;
  return q(e => e.updateParticipantQuality(n, r, i), [t])
}

function eM(e) {
  let {
    channelId: t,
    guildId: n,
    ringing: r
  } = e;
  if (!p.Z.getCurrentConfig({
      guildId: n,
      location: "guild_ring_start"
    }).enabled) returnfalse;
  let i = W(t);
  return r.forEach(e => i.updateGuildRingingUsers(e, true)), q(e => e.rebuild(), [t])
}

function ej(e) {
  let {
    channelId: t,
    guildId: n,
    ringing: r
  } = e;
  if (!p.Z.getCurrentConfig({
      guildId: n,
      location: "guild_ring_start"
    }).enabled) returnfalse;
  let i = W(t);
  return r.forEach(e => i.updateGuildRingingUsers(e, false)), q(e => e.rebuild(), [t])
}

function ek(e) {
  var t;
  return !!(null == (t = E.Z.getChannel(e)) ? true : t.isGuildVocalOrThread())
}
class eU extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(h.Z, m.default, g.Z, E.Z, u.ZP, f.default, b.Z, y.Z, O.Z, v.default, I.Z, S.Z), this.syncWith([u.ZP], ec), this.syncWith([b.Z], eu), this.syncWith([f.default], ea), (null == e ? true : e.voiceParticipantsHidden) !== true && Object.assign(Z, null == e ? true : e.voiceParticipantsHidden)
  }
  getState() {
    return {
      voiceParticipantsHidden: Z
    }
  }
  getParticipantsVersion(e) {
    return W(e).version
  }
  getParticipants(e) {
    var t;
    return null != (t = W(e).toArray()) ? t : x
  }
  getSpeakingParticipants(e) {
    var t;
    return null != (t = W(e).toArray(T.sI.SPEAKING)) ? t : x
  }
  getFilteredParticipants(e) {
    var t;
    let n = W(e);
    return null != (t = Z[e]) && t ? n.toArray(T.sI.FILTERED) : n.toArray(T.sI.NOT_POPPED_OUT)
  }
  getVideoParticipants(e) {
    var t;
    return null != (t = W(e).toArray(T.sI.VIDEO)) ? t : x
  }
  getStreamParticipants(e) {
    var t;
    return null != (t = W(e).toArray(T.sI.STREAM)) ? t : x
  }
  getActivityParticipants(e) {
    var t;
    return null != (t = W(e).toArray(T.sI.ACTIVITY)) ? t : x
  }
  getParticipant(e, t) {
    return W(e).getParticipant(t)
  }
  getUserParticipantCount(e) {
    let t = W(e);
    return t.size() - t.size(T.sI.STREAM) - t.size(T.sI.ACTIVITY)
  }
  getParticipantsOpen(e) {
    var t;
    return null == (t = B[e]) || t
  }
  getVoiceParticipantsHidden(e) {
    var t;
    return null != (t = Z[e]) && t
  }
  getSelectedParticipantId(e) {
    let [t, n] = Q(e);
    return t === A.dF.NONE ? null : t !== A.dF.AUTO ? t : n === A.dF.NONE || n === A.dF.AUTO ? null : n
  }
  getSelectedParticipant(e) {
    let t = this.getSelectedParticipantId(e);
    return null == t ? null : W(e).getParticipant(t)
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
    return W(e).guildRingingUsers
  }
  getMode(e) {
    var t;
    return null != (t = U[e]) ? t : ek(e) ? C.WtW.VIDEO : C.WtW.VOICE
  }
  getLayout(e) {
    var t, n;
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : C.IlC.APP;
    if (__OVERLAY__) return C.AEg.NORMAL;
    let i = ek(e);
    return null != (n = null == (t = G[e]) ? true : t[r]) ? n : i ? C.AEg.NO_CHAT : C.AEg.NORMAL
  }
  getChatOpen(e) {
    var t, n, r;
    return null != (r = null != (n = F[e]) ? n : null == (t = E.Z.getChannel(e)) ? true : t.isVocalThread()) && r
  }
  getAllChatOpen() {
    return F
  }
  getParticipantsListOpen(e) {
    var t;
    return null != (t = V[e]) && t
  }
  isFullscreenInContext() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk981631.IlC.APP;
    return Object.values(G).some(t => t[e] === C.AEg.FULL_SCREEN)
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
N(eU, "displayName", "ChannelRTCStore"), N(eU, "persistKey", "ChannelRTCStore");
let eG = new eU(Chunk570140.Z, {
  CONNECTION_OPEN: K,
  CONNECTION_OPEN_SUPPLEMENTAL: ea,
  THREAD_LIST_SYNC: ea,
  OVERLAY_INITIALIZE: ea,
  VOICE_CHANNEL_SELECT: eo,
  CHANNEL_SELECT: es,
  CHANNEL_RTC_ACTIVE_CHANNELS: ea,
  VOICE_STATE_UPDATES: el,
  CHANNEL_CREATE: eA,
  CHANNEL_DELETE: eC,
  THREAD_DELETE: eC,
  CALL_CREATE: e_,
  CALL_UPDATE: e_,
  CALL_DELETE: ep,
  CHANNEL_RTC_SELECT_PARTICIPANT: eI,
  CHANNEL_RTC_POPOUT_PARTICIPANT: eS,
  CHANNEL_RTC_RETURN_PARTICIPANT: eT,
  CHANNEL_RTC_UPDATE_LAYOUT: eN,
  CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: em,
  CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: eg,
  CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: eb,
  CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: ey,
  STREAM_UPDATE_SELF_HIDDEN: eE,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: eO,
  CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: ev,
  RTC_CONNECTION_VIDEO: ew,
  RTC_CONNECTION_PLATFORM: eD,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: ex,
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: eL,
  STREAM_CLOSE: eR,
  STREAM_DELETE: eR,
  STREAM_WATCH: eP,
  SPEAKING: ed,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: ed,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: ed,
  GUILD_RING_START: eM,
  GUILD_RING_STOP: ej,
  USER_UPDATE: ef,
  GUILD_MEMBER_UPDATE: ef,
  GUILD_DELETE: eh
})