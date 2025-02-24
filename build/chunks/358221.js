/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => ej
}), n(47120), n(653041);
var r, i = n(512722),
  o = n.n(i),
  a = n(392711),
  s = n.n(a),
  l = n(442837),
  c = n(570140),
  u = n(317381),
  d = n(710845),
  f = n(258609),
  p = n(569545),
  _ = n(163612),
  h = n(199902),
  m = n(314897),
  g = n(523746),
  E = n(592125),
  v = n(158776),
  b = n(944486),
  y = n(606304),
  O = n(594174),
  S = n(33039),
  I = n(979651),
  T = n(413523),
  N = n(354459),
  A = n(981631);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
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
let D = new d.Z("ChannelRTCStore"),
  x = Object.freeze([]),
  L = [],
  M = {},
  k = {},
  j = {},
  U = {},
  G = {},
  B = {},
  Z = {},
  F = {},
  V = {},
  H = {},
  W = {};

function Y(e) {
  let t = M[e];
  return null == t && (t = new T.ZP(e), M[e] = t), t
}

function K() {
  for (let e of L) ei(e);
  eo()
}

function z() {
  let e = [],
    t = b.Z.getChannelId();
  null != t && e.push(t);
  let n = b.Z.getVoiceChannelId();
  null == n || e.includes(n) || e.push(n);
  let r = f.Z.getRemoteSessionId(),
    i = I.Z.getVoiceStateForSession(m.default.getId(), r);
  (null == i ? void 0 : i.channelId) != null && e.push(null == i ? void 0 : i.channelId), s().difference(L, e).forEach(ei);
  let o = s().difference(e, L);
  return L = e, o
}

function q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
  return t.reduce((t, n) => e(Y(n)) ? (er(n), en(n), !0) : t, !1)
}

function Q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
  return q(t => t.updateParticipant(e), t)
}

function X(e) {
  var t;
  let n = E.Z.getChannel(e),
    r = (null == n ? void 0 : n.isDM()) ? N.dF.AUTO : N.dF.NONE;
  return null !== (t = k[e]) && void 0 !== t ? t : [r, N.dF.NONE]
}

function J(e) {
  if (null == k[e]) return !1;
  let [t] = k[e];
  return t !== N.dF.NONE
}

function $(e) {
  null == j[e] && (j[e] = {
    gridDurationMs: 0,
    focusDurationMs: 0,
    toggleCount: 0,
    lastUpdate: 0
  });
  let t = j[e],
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
  null == t ? delete k[e] : k[e] = t, n !== J(e) && j[e].toggleCount++
}

function et(e) {
  return e.size(T.sI.STREAM) > 0 || e.size(T.sI.VIDEO) > 0 || e.hasEmbeddedActivity()
}

function en(e) {
  let t = m.default.getId(),
    n = Y(e);
  if (0 === n.size() || b.Z.getVoiceChannelId() !== e) {
    ee(e, null);
    return
  }
  let r = N.dF.NONE,
    i = n.toArray(T.sI.STREAM).find(e => e.type === N.fO.STREAM && h.Z.getActiveStreamForStreamKey(e.id));
  if (null != i) o()(i.type === N.fO.STREAM, "Impossible condition"), r = i.id;
  else if (1 === n.size()) r = t;
  else if (1 === n.size(T.sI.VIDEO)) {
    let [e] = n.toArray(T.sI.VIDEO);
    r = e.id
  } else {
    var a;
    let e = n.toArray().find(e => e.type === N.fO.USER && e.id !== t && !e.ringing);
    r = null !== (a = null == e ? void 0 : e.id) && void 0 !== a ? a : t
  }
  let [s] = X(e);
  if (s !== N.dF.AUTO && s !== N.dF.NONE) {
    let e = n.getParticipant(s);
    (null == e || e.type === N.fO.STREAM && null == h.Z.getActiveStreamForStreamKey(e.id)) && (s = N.dF.NONE)
  }
  ee(e, [s, r])
}

function er(e) {
  let t = Y(e);
  if (0 === t.size()) return;
  let n = eM(e) || et(t) ? A.WtW.VIDEO : A.WtW.VOICE;
  n === A.WtW.VOICE ? (delete U[e], delete G[e]) : U[e] = n
}

function ei(e) {
  delete M[e], delete k[e], delete U[e], delete G[e]
}

function eo() {
  return q(e => e.rebuild(), z())
}

function ea(e) {
  let {
    channelId: t,
    currentVoiceChannelId: n
  } = e;
  return null != t ? delete j[t] : null != n && (delete F[n], delete H[n], $(n)), eo()
}

function es(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = eo(), i = E.Z.getChannel(t);
  return null == t || null == n || (null == i ? void 0 : i.type) !== A.d4z.GUILD_VOICE && (null == i ? void 0 : i.type) !== A.d4z.GUILD_STAGE_VOICE || F[t] ? r : (V[t] = !1, F[t] = !0, !0)
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
      guildId: o
    } = t;
    return (null != o && null != i && _.Z.getCurrentConfig({
      guildId: o,
      location: "voice_status_update"
    }, {
      autoTrackExposure: !1
    }).enabled && Y(i).updateGuildRingingUsers(r, !1), n && null != i && !L.includes(i)) ? e : Q(r) || e
  }, !1)
}

function ec() {
  return q(e => e.updateEmbeddedActivities())
}

function eu() {
  v.Z.getUserIds().forEach(e => Q(e))
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
  return Q(t.id)
}

function ep(e) {
  let {
    channelId: t
  } = e;
  return q(e => e.rebuild(), [t])
}

function e_(e) {
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
    }), 0 === n.length) return !1;
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
    let [e] = X(t);
    (0, p.DB)(e) && e.includes(r) && ee(t, null)
  }
  Q(r, [t])
}

function ev(e) {
  let {
    channelId: t,
    large: n
  } = e;
  H[t] = n
}

function eb(e) {
  let {
    channelId: t,
    dismissed: n
  } = e;
  W[t] = n
}

function ey(e) {
  let {
    channelId: t,
    chatOpen: n
  } = e;
  F[t] = n, n && (V[t] = !1)
}

function eO(e) {
  let {
    channelId: t,
    participantsListOpen: n
  } = e;
  V[t] = n, n && (F[t] = !1)
}

function eS(e) {
  let {
    channelId: t,
    id: n
  } = e, r = Y(t);
  null == n && r.toArray(T.sI.STREAM).forEach(e => {
    (0, N._5)(e) && r.updateParticipant(e.user.id)
  });
  let [, i] = X(t);
  if (ee(t, [null != n ? n : N.dF.NONE, i]), (0, p.DB)(n)) {
    try {
      let {
        ownerId: e
      } = (0, p.my)(n);
      e === m.default.getId() && Q(e, [t])
    } catch (e) {
      D.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
    }
    et(r) || (B[t] = !1)
  }
}

function eI(e) {
  let {
    channel: t
  } = e;
  if (t.type === A.d4z.GROUP_DM) {
    let e = t.originChannelId;
    if (null != e) {
      var n, r;
      return G[t.id] = {
        [A.IlC.APP]: null !== (r = null === (n = G[e]) || void 0 === n ? void 0 : n[A.IlC.APP]) && void 0 !== r ? r : A.AEg.NORMAL
      }, !0
    }
  }
  return !1
}

function eT(e) {
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

function eA(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    ownerId: r
  } = (0, p.my)(t);
  return Q(r, [n])
}

function eC(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    ownerId: r
  } = (0, p.my)(t);
  return Q(r, [n])
}

function eR(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  return Q(n, [t])
}

function eP(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  return Q(n, [t])
}

function ew(e) {
  let {
    userId: t
  } = e;
  return Q(t)
}

function eD(e) {
  let {
    channelId: t,
    senderUserId: n,
    maxResolution: r,
    maxFrameRate: i
  } = e;
  return q(e => e.updateParticipantQuality(n, r, i), [t])
}

function ex(e) {
  let {
    channelId: t,
    guildId: n,
    ringing: r
  } = e;
  if (!_.Z.getCurrentConfig({
      guildId: n,
      location: "guild_ring_start"
    }).enabled) return !1;
  let i = Y(t);
  return r.forEach(e => i.updateGuildRingingUsers(e, !0)), q(e => e.rebuild(), [t])
}

function eL(e) {
  let {
    channelId: t,
    guildId: n,
    ringing: r
  } = e;
  if (!_.Z.getCurrentConfig({
      guildId: n,
      location: "guild_ring_start"
    }).enabled) return !1;
  let i = Y(t);
  return r.forEach(e => i.updateGuildRingingUsers(e, !1)), q(e => e.rebuild(), [t])
}

function eM(e) {
  var t;
  return !!(null === (t = E.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
}
class ek extends(r = l.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(h.Z, m.default, g.Z, E.Z, u.ZP, v.Z, b.Z, y.Z, O.default, S.Z, I.Z), this.syncWith([u.ZP], ec), this.syncWith([v.Z], eu), this.syncWith([f.Z], eo), (null == e ? void 0 : e.voiceParticipantsHidden) !== void 0 && Object.assign(Z, null == e ? void 0 : e.voiceParticipantsHidden)
  }
  getState() {
    return {
      voiceParticipantsHidden: Z
    }
  }
  getParticipantsVersion(e) {
    return Y(e).version
  }
  getParticipants(e) {
    var t;
    return null !== (t = Y(e).toArray()) && void 0 !== t ? t : x
  }
  getSpeakingParticipants(e) {
    var t;
    return null !== (t = Y(e).toArray(T.sI.SPEAKING)) && void 0 !== t ? t : x
  }
  getFilteredParticipants(e) {
    return Z[e] ? Y(e).toArray(T.sI.FILTERED) : Y(e).toArray()
  }
  getVideoParticipants(e) {
    var t;
    return null !== (t = Y(e).toArray(T.sI.VIDEO)) && void 0 !== t ? t : x
  }
  getStreamParticipants(e) {
    var t;
    return null !== (t = Y(e).toArray(T.sI.STREAM)) && void 0 !== t ? t : x
  }
  getActivityParticipants(e) {
    var t;
    return null !== (t = Y(e).toArray(T.sI.ACTIVITY)) && void 0 !== t ? t : x
  }
  getParticipant(e, t) {
    return Y(e).getParticipant(t)
  }
  getUserParticipantCount(e) {
    let t = Y(e);
    return t.size() - t.size(T.sI.STREAM) - t.size(T.sI.ACTIVITY)
  }
  getParticipantsOpen(e) {
    var t;
    return null === (t = B[e]) || void 0 === t || t
  }
  getVoiceParticipantsHidden(e) {
    var t;
    return null !== (t = Z[e]) && void 0 !== t && t
  }
  getSelectedParticipantId(e) {
    let [t, n] = X(e);
    return t === N.dF.NONE ? null : t !== N.dF.AUTO ? t : n === N.dF.NONE || n === N.dF.AUTO ? null : n
  }
  getSelectedParticipant(e) {
    let t = this.getSelectedParticipantId(e);
    return null == t ? null : Y(e).getParticipant(t)
  }
  getSelectedParticipantStats(e) {
    let t = j[e];
    return null == t ? {} : {
      view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
      view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
      view_mode_toggle_count: t.toggleCount
    }
  }
  getGuildRingingUsers(e) {
    return Y(e).guildRingingUsers
  }
  getMode(e) {
    var t;
    return null !== (t = U[e]) && void 0 !== t ? t : eM(e) ? A.WtW.VIDEO : A.WtW.VOICE
  }
  getLayout(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A.IlC.APP;
    if (__OVERLAY__) return A.AEg.NORMAL;
    let i = eM(e);
    return null !== (n = null === (t = G[e]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : i ? A.AEg.NO_CHAT : A.AEg.NORMAL
  }
  getChatOpen(e) {
    var t;
    return null !== (t = F[e]) && void 0 !== t && t
  }
  getAllChatOpen() {
    return F
  }
  getParticipantsListOpen(e) {
    var t;
    return null !== (t = V[e]) && void 0 !== t && t
  }
  isFullscreenInContext() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A.IlC.APP;
    return Object.values(G).some(t => t[e] === A.AEg.FULL_SCREEN)
  }
  getStageStreamSize(e) {
    return H[e]
  }
  getStageVideoLimitBoostUpsellDismissed(e) {
    return W[e]
  }
}
C(ek, "displayName", "ChannelRTCStore"), C(ek, "persistKey", "ChannelRTCStore");
let ej = new ek(c.Z, {
  CONNECTION_OPEN: K,
  CONNECTION_OPEN_SUPPLEMENTAL: eo,
  THREAD_LIST_SYNC: eo,
  OVERLAY_INITIALIZE: eo,
  VOICE_CHANNEL_SELECT: ea,
  CHANNEL_SELECT: es,
  CHANNEL_RTC_ACTIVE_CHANNELS: eo,
  VOICE_STATE_UPDATES: el,
  CHANNEL_CREATE: eI,
  CHANNEL_DELETE: eT,
  THREAD_DELETE: eT,
  CALL_CREATE: ep,
  CALL_UPDATE: ep,
  CALL_DELETE: e_,
  CHANNEL_RTC_SELECT_PARTICIPANT: eS,
  CHANNEL_RTC_UPDATE_LAYOUT: eN,
  CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: em,
  CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: eg,
  CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: ev,
  CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: eb,
  STREAM_UPDATE_SELF_HIDDEN: eE,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: ey,
  CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: eO,
  RTC_CONNECTION_VIDEO: eR,
  RTC_CONNECTION_PLATFORM: eP,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: ew,
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: eD,
  STREAM_CLOSE: eA,
  STREAM_DELETE: eA,
  STREAM_WATCH: eC,
  SPEAKING: ed,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: ed,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: ed,
  GUILD_RING_START: ex,
  GUILD_RING_STOP: eL,
  USER_UPDATE: ef,
  GUILD_MEMBER_UPDATE: ef,
  GUILD_DELETE: eh
})