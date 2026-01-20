/** Chunk was on web.js **/
/** chunk id: 413523, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Lc: () => w,
  Yr: () => P,
  ZP: () => x,
  gN: () => N,
  sI: () => R
}), require("./35282.js"), require("./388685.js"), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  Chunk759174 = require("./759174.js"),
  Chunk586902 = require("./586902.js"),
  Chunk317381 = require("./317381.js"),
  Chunk541638 = require("./541638.js"),
  Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk523746 = require("./523746.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk606304 = require("./606304.js"),
  Chunk594174 = require("./594174.js"),
  Chunk33039 = require("./33039.js"),
  Chunk979651 = require("./979651.js"),
  Chunk5192 = require("./5192.js"),
  Chunk933546 = require("./933546.js"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = "__EMBEDDED_ACTIVITIES__";

function N(e) {
  let {
    applicationId: t,
    instanceId: n
  } = e;
  return null != n ? "activity-".concat(t, "-").concat(n) : "activity-".concat(t)
}

function P(e) {
  switch (e.type) {
    case y.fO.ACTIVITY:
      return "\x01".concat(e.sortKey);
    case y.fO.HIDDEN_STREAM:
    case y.fO.STREAM:
      return "".concat(e.userVideo ? "\x02" : "\x03").concat((0, b.Z)(e.userNick, e.user), "\x03");
    case y.fO.USER:
      var t, n;
      let r = "\x05";
      return (null == (t = e.voiceState) ? true : t.selfVideo) ? r = "\x03" : (null == (n = e.voiceState) ? true : n.selfStream) && (r = "\x04"), "".concat(r).concat((0, b.Z)(e.userNick, e.user))
  }
}

function w(e, t) {
  let [, n] = e, [, r] = t;
  return n === r
}
var R = function(e) {
  return e.VIDEO = "VIDEO", e.STREAM = "STREAM", e.FILTERED = "FILTERED", e.SPEAKING = "SPEAKING", e.ACTIVITY = "ACTIVITY", e.NOT_POPPED_OUT = "NOT_POPPED_OUT", e
}({});

function D(e) {
  return u.default.getId() === e && _.Z.isCurrentUserPTTLatched()
}
class x {
  get version() {
    return this.participantByIndex.version
  }
  size(e) {
    return this.participantByIndex.size(e)
  }
  toArray(e) {
    return this.participantByIndex.values(e, true)
  }
  rebuild() {
    let e = f.Z.getChannel(this.channelId);
    if (null == e || e.type === O.d4z.GUILD_TEXT || (this.call = d.Z.getCall(this.channelId), e.isPrivate() && (null == this.call || this.call.unavailable))) returnfalse;
    let t = new Set(e.isGuildVocalOrThread() ? Object.keys(g.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
    return t.add(u.default.getId()), this.guildRingingUsers.size > 0 && (t = new Set([...t, ...this.guildRingingUsers])), c.Z.getAllActiveStreamsForChannel(this.channelId).forEach(e => {
      let {
        ownerId: n
      } = e;
      return t.add(n)
    }), this.participantByIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), this.updateEmbeddedActivities(), true
  }
  getParticipant(e) {
    var t;
    return null != (t = this.participantByIndex.get(e)) ? t : null
  }
  updateEmbeddedActivities() {
    return this.updateParticipant(A)
  }
  hasEmbeddedActivity() {
    return this.size("ACTIVITY") > 0
  }
  updateParticipant(e) {
    let t = this.participants[e],
      n = e === A ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
      this.participantByIndex.delete(e.id)
    }), n.forEach(e => {
      this.participantByIndex.set(e.id, e)
    }), this.participants[e] = n, true)
  }
  updateParticipantSpeaking(e) {
    var t, n;
    return null != (n = null == (t = this.participants[e]) ? true : t.reduce((t, n) => {
      if (n.type === y.fO.USER) {
        let t = (0, a.O)({
          userId: e,
          checkIsMuted: true
        });
        return t && (this.lastSpoke[e] = Date.now()), this.participantByIndex.set(n.id, C(I({}, n), {
          speaking: t,
          voiceDb: _.Z.getVoiceVolume(e),
          latched: D(e),
          lastSpoke: this.lastSpoke[e],
          soundsharing: _.Z.isSoundSharing(e)
        })), true
      }
      return t
    }, false)) && n
  }
  updateParticipantQuality(e, t, n) {
    var r, i;
    return null != (i = null == (r = this.participants[e]) ? true : r.reduce((e, r) => r.type === y.fO.STREAM ? (this.participantByIndex.set(r.id, C(I({}, r), {
      maxResolution: t,
      maxFrameRate: n
    })), true) : e, false)) && i
  }
  updateGuildRingingUsers(e, t) {
    t ? this.guildRingingUsers.add(e) : this.guildRingingUsers.delete(e)
  }
  updateParticipantPoppedOut(e, t) {
    t ? this.poppedOutParticipants.add(e) : this.poppedOutParticipants.delete(e)
  }
  _getEmbeddedActivities() {
    let e = o.ZP.getEmbeddedActivitiesForChannel(this.channelId),
      t = o.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
    return null == t ? e : (0, r.uniqBy)([...e, t], e => e.compositeInstanceId)
  }
  _getParticipantsForEmbeddedActivities() {
    return this._getEmbeddedActivities().map((e, t) => {
      var n, r, i;
      return {
        type: y.fO.ACTIVITY,
        id: N({
          applicationId: e.applicationId,
          instanceId: e.compositeInstanceId
        }),
        applicationId: e.applicationId,
        activityType: O.IIU.PLAYING,
        activityUrl: e.url,
        participants: [...null != (r = e.participants) ? r : []],
        guildId: null != (i = null == (n = f.Z.getChannel(this.channelId)) ? true : n.getGuildId()) ? i : null,
        sortKey: t.toString()
      }
    })
  }
  _getParticipantsForUser(e) {
    var t, n, r, i, o, d;
    let b, O, S = [],
      T = h.default.getUser(e);
    if (null == T) return S;
    let A = g.Z.getVoiceStateForChannel(this.channelId, e),
      N = g.Z.getVoicePlatformForChannel(this.channelId, e),
      P = f.Z.getChannel(this.channelId),
      w = null == P ? true : P.getGuildId(),
      R = null != (r = (null == (n = this.call) || null == (t = n.ringing) ? true : t.includes(e)) || this.guildRingingUsers.has(e)) && r;
    (null != A || R) && (b = C(I({
      type: y.fO.USER
    }, m.Z.getUserStreamData(e, w)), {
      user: T,
      id: T.id,
      voiceState: A,
      voicePlatform: N,
      speaking: (0, a.O)({
        userId: e,
        checkIsMuted: true
      }),
      voiceDb: _.Z.getVoiceVolume(e),
      latched: D(e),
      lastSpoke: null != (i = this.lastSpoke[e]) ? i : 0,
      soundsharing: _.Z.isSoundSharing(e),
      ringing: R,
      userNick: E.ZP.getName(w, this.channelId, T),
      userAvatarDecoration: (0, s.o)(T, w),
      localVideoDisabled: p.Z.isLocalVideoDisabled(T.id),
      isPoppedOut: this.poppedOutParticipants.has(T.id)
    }), S.push(b));
    let x = null != (o = c.Z.getStreamForUser(e, w)) ? o : c.Z.getActiveStreamForUser(e, w);
    if (null != x && x.channelId === this.channelId) {
      let t = (0, l.V9)(x),
        n = this.getParticipant(t),
        r = x.ownerId === u.default.getId() && c.Z.isSelfStreamHidden(this.channelId),
        i = (null == n ? true : n.type) === y.fO.STREAM ? {
          maxResolution: null != n.maxResolution ? I({}, n.maxResolution) : true,
          maxFrameRate: n.maxFrameRate
        } : null;
      O = C(I({}, m.Z.getUserStreamData(e, w, v.Yn.STREAM), i), {
        type: r ? y.fO.HIDDEN_STREAM : y.fO.STREAM,
        id: t,
        userVideo: null != (d = null == A ? true : A.selfVideo) && d,
        user: T,
        userNick: E.ZP.getName(w, this.channelId, T),
        stream: x,
        isPoppedOut: this.poppedOutParticipants.has(t)
      }), S.push(O)
    }
    return S
  }
  constructor(e) {
    S(this, "channelId", true), S(this, "call", true), S(this, "participants", {}), S(this, "lastSpoke", {}), S(this, "guildRingingUsers", new Set), S(this, "poppedOutParticipants", new Set), S(this, "participantByIndex", new i.h(e => {
      var t;
      let n = [];
      return e.type === y.fO.USER && e.speaking && n.push("SPEAKING"), e.type === y.fO.USER && (null == (t = e.voiceState) ? true : t.selfVideo) ? (n.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || n.push("FILTERED")) : (0, y._5)(e) && (n.push("STREAM"), e.type === y.fO.HIDDEN_STREAM || null == e.streamId || e.isPoppedOut || n.push("FILTERED")), e.type === y.fO.ACTIVITY && n.push("ACTIVITY"), "isPoppedOut" in e && e.isPoppedOut || n.push("NOT_POPPED_OUT"), n
    }, P)), this.channelId = e
  }
}