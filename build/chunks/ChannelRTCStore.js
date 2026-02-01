/** Chunk was on web.js **/
/** chunk id: 313961, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eF
}), require("./896048.js"), require("./321073.js");
var r, Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk933958 = require("./933958.js"),
  Chunk626584 = require("./626584.js"),
  Chunk643501 = require("./643501.js"),
  Chunk652896 = require("./652896.js"),
  Chunk164891 = require("./164891.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk470710 = require("./470710.js"),
  Chunk734057 = require("./734057.js"),
  Chunk290863 = require("./290863.js"),
  Chunk309010 = require("./309010.js"),
  Chunk485296 = require("./485296.js"),
  Chunk287809 = require("./287809.js"),
  Chunk803301 = require("./803301.js"),
  Chunk977997 = require("./977997.js"),
  Chunk568598 = require("./568598.js"),
  Chunk806931 = require("./806931.js"),
  Chunk652215 = require("./652215.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = new Chunk626584.A("ChannelRTCStore"),
  L = Object.freeze([]),
  x = [],
  M = {},
  j = {},
  k = {},
  U = {},
  G = {},
  V = {},
  F = {},
  B = {},
  H = {},
  Y = {},
  W = {};

function K(e) {
  let t = M[e];
  return null == t && (t = new S.Ay(e), M[e] = t), t
}

function z() {
  for (let e of x) ei(e);
  ea()
}

function q() {
  let e = [],
    t = b.A.getChannelId();
  null != t && e.push(t);
  let n = b.A.getVoiceChannelId();
  null == n || e.includes(n) || e.push(n);
  let r = f.default.getRemoteSessionId(),
    i = I.A.getVoiceStateForSession(m.default.getId(), r);
  (null == i ? true : i.channelId) != null && e.push(null == i ? true : i.channelId), s().difference(x, e).forEach(ei);
  let a = s().difference(e, x);
  return x = e, a
}

function Z(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : x;
  return t.reduce((t, n) => e(K(n)) ? (er(n), en(n), true) : t, false)
}

function Q(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : x;
  return Z(t => t.updateParticipant(e), t)
}

function X(e) {
  var t;
  let n = E.A.getChannel(e),
    r = (null == n ? true : n.isDM()) && 1 ? T.jd.AUTO : T.jd.NONE;
  return null != (t = j[e]) ? t : [r, T.jd.NONE]
}

function J(e) {
  if (null == j[e]) returnfalse;
  let [t] = j[e];
  return t !== T.jd.NONE
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
  return e.size(S.r4.STREAM) > 0 || e.size(S.r4.VIDEO) > 0 || e.hasEmbeddedActivity()
}

function en(e) {
  let t = m.default.getId(),
    n = K(e);
  if (0 === n.size() || b.A.getVoiceChannelId() !== e) return void ee(e, null);
  let r = T.jd.NONE,
    i = n.toArray(S.r4.STREAM).find(e => e.type === T.lp.STREAM && h.A.getActiveStreamForStreamKey(e.id));
  if (null != i) a()(i.type === T.lp.STREAM, "Impossible condition"), r = i.id;
  else if (1 === n.size()) r = t;
  else if (1 === n.size(S.r4.VIDEO)) {
    let [e] = n.toArray(S.r4.VIDEO);
    r = e.id
  } else {
    var o;
    let e = n.toArray().find(e => e.type === T.lp.USER && e.id !== t && !e.ringing);
    r = null != (o = null == e ? true : e.id) ? o : t
  }
  let [s] = X(e);
  if (s !== T.jd.AUTO && s !== T.jd.NONE) {
    let e = n.getParticipant(s);
    (null == e || e.type === T.lp.STREAM && null == h.A.getActiveStreamForStreamKey(e.id)) && (s = T.jd.NONE)
  }
  ee(e, [s, r])
}

function er(e) {
  let t = K(e);
  if (0 === t.size()) return;
  let n = ek(e) || et(t) ? C._Of.VIDEO : C._Of.VOICE;
  if (n === C._Of.VOICE) {
    var r;
    let t = null == (r = G[e]) ? true : r[C.BRT.APP];
    delete U[e], t !== C.DUB.HAVEN && delete G[e]
  } else U[e] = n
}

function ei(e) {
  delete M[e], delete j[e], delete U[e], delete G[e]
}

function ea() {
  return Z(e => e.rebuild(), q())
}

function eo(e) {
  let {
    channelId: t,
    currentVoiceChannelId: n
  } = e, r = false;
  if (null != t ? delete k[t] : null != n && (delete B[n], delete Y[n], $(n)), t !== n && null != n) {
    let e = K(n);
    e.guildRingingUsers.forEach(t => e.updateGuildRingingUsers(t, false)), r = Z(e => e.rebuild(), [n])
  }
  let i = ea();
  return r || i
}

function es(e) {
  let {
    channelId: t,
    messageId: n
  } = e, r = ea();
  if (null == t || null == n || B[t]) return r;
  let i = E.A.getChannel(t);
  return null != i && i.isGuildVocal() ? (H[t] = false, B[t] = true, true) : r
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
    return (null != a && null != i && _.A.getCurrentConfig({
      guildId: a,
      location: "voice_status_update"
    }, {
      autoTrackExposure: false
    }).enabled && K(i).updateGuildRingingUsers(r, false), n && null != i && !x.includes(i)) ? e : Q(r) || e
  }, false)
}

function ec() {
  return Z(e => e.updateEmbeddedActivities())
}

function eu(e) {
  let {
    userId: t
  } = e;
  return Z(e => e.updateParticipantSpeaking(t))
}

function ed() {
  return Z(e => e.updateParticipantSpeaking(m.default.getId()))
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
  return Z(e => e.rebuild(), [t])
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
  if (s().forEach(x, e => {
      let r = E.A.getChannel(e);
      (null == r || r.getGuildId() === t.id) && n.push(e)
    }), 0 === n.length) returnfalse;
  s().forEach(n, e => ei(e))
}

function em(e) {
  let {
    channelId: t,
    participantsOpen: n
  } = e;
  V[t] = n
}

function eg(e) {
  let {
    channelId: t,
    voiceParticipantsHidden: n
  } = e;
  F[t] = n
}

function eE(e) {
  let {
    channelId: t,
    selfStreamHidden: n
  } = e, r = m.default.getId();
  if (n) {
    let [e] = X(t);
    (0, p.wL)(e) && e.includes(r) && ee(t, null)
  }
  Q(r, [t])
}

function ey(e) {
  let {
    channelId: t,
    large: n
  } = e;
  Y[t] = n
}

function eb(e) {
  let {
    channelId: t,
    dismissed: n
  } = e;
  W[t] = n
}

function eO(e) {
  let {
    channelId: t,
    chatOpen: n
  } = e;
  B[t] = n, n && (H[t] = false)
}

function ev(e) {
  let {
    channelId: t,
    participantsListOpen: n
  } = e;
  H[t] = n, n && (B[t] = false)
}

function eA(e) {
  let {
    channelId: t,
    id: n
  } = e, r = K(t);
  null == n && r.toArray(S.r4.STREAM).forEach(e => {
    (0, T.Ay)(e) && r.updateParticipant(e.user.id)
  });
  let [, i] = X(t);
  if (ee(t, [null != n ? n : T.jd.NONE, i]), (0, p.wL)(n)) {
    try {
      let {
        ownerId: e
      } = (0, p.Iy)(n);
      e === m.default.getId() && Q(e, [t])
    } catch (e) {
      D.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
    }
    et(r) || (V[t] = false)
  }
}

function eI(e) {
  let {
    channelId: t,
    participantId: n
  } = e, [r] = X(t);
  r === n && ee(t, null);
  let i = K(t),
    a = i.getParticipant(n);
  null == a || a.type !== T.lp.ACTIVITY && (i.updateParticipantPoppedOut(n, true), Q(a.user.id, [t]))
}

function eS(e) {
  let {
    channelId: t,
    participantId: n
  } = e, r = K(t);
  r.updateParticipantPoppedOut(n, false);
  let i = r.getParticipant(n);
  null == i || i.type !== T.lp.ACTIVITY && Q(i.user.id, [t])
}

function eT(e) {
  let {
    channel: t
  } = e;
  if (t.type === C.rbe.GROUP_DM) {
    let e = t.originChannelId;
    if (null != e) {
      var n, r;
      return G[t.id] = {
        [C.BRT.APP]: null != (n = null == (r = G[e]) ? true : r[C.BRT.APP]) ? n : C.DUB.NORMAL
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
  return delete B[t], delete H[t], delete Y[t], ei(t)
}

function eN(e) {
  let {
    channelId: t,
    layout: n,
    appContext: r
  } = e;
  G[t] = P(w({}, G[t]), {
    [r]: n
  })
}

function ew(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    ownerId: r
  } = (0, p.Iy)(t);
  return Q(r, [n])
}

function eR(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    ownerId: r
  } = (0, p.Iy)(t);
  return Q(r, [n])
}

function eP(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  return Q(n, [t])
}

function eD(e) {
  let {
    channelId: t,
    userId: n
  } = e;
  return Q(n, [t])
}

function eL(e) {
  let {
    userId: t
  } = e;
  return Q(t)
}

function ex(e) {
  let {
    channelId: t,
    senderUserId: n,
    maxResolution: r,
    maxFrameRate: i
  } = e;
  return Z(e => e.updateParticipantQuality(n, r, i), [t])
}

function eM(e) {
  let {
    channelId: t,
    guildId: n,
    ringing: r
  } = e;
  if (!_.A.getCurrentConfig({
      guildId: n,
      location: "guild_ring_start"
    }).enabled) returnfalse;
  let i = K(t);
  return r.forEach(e => i.updateGuildRingingUsers(e, true)), Z(e => e.rebuild(), [t])
}

function ej(e) {
  let {
    channelId: t,
    guildId: n,
    ringing: r
  } = e;
  if (!_.A.getCurrentConfig({
      guildId: n,
      location: "guild_ring_start"
    }).enabled) returnfalse;
  let i = K(t);
  return r.forEach(e => i.updateGuildRingingUsers(e, false)), Z(e => e.rebuild(), [t])
}

function ek(e) {
  var t;
  return !!(null == (t = E.A.getChannel(e)) ? true : t.isGuildVocalOrThread())
}

function eU(e) {
  var t;
  return !!(null == (t = E.A.getChannel(e)) ? true : t.isGuildVocal())
}

function eG(e) {
  var t;
  return !!(null == (t = E.A.getChannel(e)) ? true : t.isVocalThread())
}
class eV extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    this.waitFor(h.A, m.default, g.A, E.A, u.Ay, f.default, y.A, b.A, O.A, v.default, A.A, I.A), this.syncWith([u.Ay], ec), this.syncWith([f.default], ea), (null == e ? true : e.voiceParticipantsHidden) !== true && Object.assign(F, null == e ? true : e.voiceParticipantsHidden)
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
    return null != (t = K(e).toArray()) ? t : L
  }
  getSpeakingParticipants(e) {
    var t;
    return null != (t = K(e).toArray(S.r4.SPEAKING)) ? t : L
  }
  getFilteredParticipants(e) {
    var t;
    let n = K(e);
    return null != (t = F[e]) && t ? n.toArray(S.r4.FILTERED) : n.toArray(S.r4.NOT_POPPED_OUT)
  }
  getVideoParticipants(e) {
    var t;
    return null != (t = K(e).toArray(S.r4.VIDEO)) ? t : L
  }
  getStreamParticipants(e) {
    var t;
    return null != (t = K(e).toArray(S.r4.STREAM)) ? t : L
  }
  getActivityParticipants(e) {
    var t;
    return null != (t = K(e).toArray(S.r4.ACTIVITY)) ? t : L
  }
  getParticipant(e, t) {
    return K(e).getParticipant(t)
  }
  getUserParticipantCount(e) {
    let t = K(e);
    return t.size() - t.size(S.r4.STREAM) - t.size(S.r4.ACTIVITY)
  }
  getParticipantsOpen(e) {
    var t;
    return null == (t = V[e]) || t
  }
  getVoiceParticipantsHidden(e) {
    var t;
    return null != (t = F[e]) && t
  }
  getSelectedParticipantId(e) {
    let [t, n] = X(e);
    return t === T.jd.NONE ? null : t !== T.jd.AUTO ? t : n === T.jd.NONE || n === T.jd.AUTO ? null : n
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
    return null != (t = U[e]) ? t : ek(e) ? C._Of.VIDEO : C._Of.VOICE
  }
  getLayout(e) {
    var t, n;
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : C.BRT.APP;
    if (__OVERLAY__) return C.DUB.NORMAL;
    let i = this.getUserParticipantCount(e) > 0,
      a = eU(e) || i && eG(e);
    return null != (t = null == (n = G[e]) ? true : n[r]) ? t : a ? C.DUB.NO_CHAT : C.DUB.NORMAL
  }
  getChatOpen(e) {
    var t, n, r;
    return null != (t = null != (n = B[e]) ? n : null == (r = E.A.getChannel(e)) ? true : r.isVocalThread()) && t
  }
  getAllChatOpen() {
    return B
  }
  getParticipantsListOpen(e) {
    var t;
    return null != (t = H[e]) && t
  }
  isFullscreenInContext() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : C.BRT.APP;
    return Object.values(G).some(t => t[e] === C.DUB.FULL_SCREEN)
  }
  getStageStreamSize(e) {
    return Y[e]
  }
  getStageVideoLimitBoostUpsellDismissed(e) {
    return W[e]
  }
  isParticipantPoppedOut(e, t) {
    let n = this.getParticipant(e, t);
    return null != n && "isPoppedOut" in n && n.isPoppedOut
  }
}
N(eV, "displayName", "ChannelRTCStore"), N(eV, "persistKey", "ChannelRTCStore");
let eF = new eV(Chunk73153.h, {
  CONNECTION_OPEN: z,
  CONNECTION_OPEN_SUPPLEMENTAL: ea,
  THREAD_LIST_SYNC: ea,
  OVERLAY_INITIALIZE: ea,
  VOICE_CHANNEL_SELECT: eo,
  CHANNEL_SELECT: es,
  CHANNEL_RTC_ACTIVE_CHANNELS: ea,
  VOICE_STATE_UPDATES: el,
  CHANNEL_CREATE: eT,
  CHANNEL_DELETE: eC,
  THREAD_DELETE: eC,
  CALL_CREATE: ep,
  CALL_UPDATE: ep,
  CALL_DELETE: e_,
  CHANNEL_RTC_SELECT_PARTICIPANT: eA,
  CHANNEL_RTC_POPOUT_PARTICIPANT: eI,
  CHANNEL_RTC_RETURN_PARTICIPANT: eS,
  CHANNEL_RTC_UPDATE_LAYOUT: eN,
  CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: em,
  CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: eg,
  CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: ey,
  CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: eb,
  STREAM_UPDATE_SELF_HIDDEN: eE,
  CHANNEL_RTC_UPDATE_CHAT_OPEN: eO,
  CHANNEL_RTC_UPDATE_PARTCIPANTS_LIST_OPEN: ev,
  RTC_CONNECTION_VIDEO: eP,
  RTC_CONNECTION_PLATFORM: eD,
  AUDIO_SET_LOCAL_VIDEO_DISABLED: eL,
  MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: ex,
  STREAM_CLOSE: ew,
  STREAM_DELETE: ew,
  STREAM_WATCH: eR,
  SPEAKING: eu,
  GUILD_SOUNDBOARD_SOUND_PLAY_START: eu,
  GUILD_SOUNDBOARD_SOUND_PLAY_END: eu,
  PUSH_TO_TALK_STATE_CHANGE: ed,
  GUILD_RING_START: eM,
  GUILD_RING_STOP: ej,
  USER_UPDATE: ef,
  GUILD_MEMBER_UPDATE: ef,
  GUILD_DELETE: eh
})