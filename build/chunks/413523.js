/** Chunk was on web.js **/
/** chunk id: 413523, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Lc: () => w,
  Yr: () => R,
  ZP: () => L,
  gN: () => P,
  sI: () => D
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
  Chunk318793 = require("./318793.js"),
  Chunk933546 = require("./933546.js"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = "__EMBEDDED_ACTIVITIES__";

function P(e) {
  let {
    applicationId: t,
    instanceId: n
  } = e;
  return null != n ? "activity-".concat(t, "-").concat(n) : "activity-".concat(t)
}

function R(e) {
  switch (e.type) {
    case O.fO.ACTIVITY:
      return "\x01".concat(e.sortKey);
    case O.fO.HIDDEN_STREAM:
    case O.fO.STREAM:
      return "".concat(e.userVideo ? "\x02" : "\x03").concat((0, y.Z)(e.userNick, e.user), "\x03");
    case O.fO.USER:
      var t, n;
      let r = "\x05";
      return (null == (t = e.voiceState) ? true : t.selfVideo) ? r = "\x03" : (null == (n = e.voiceState) ? true : n.selfStream) && (r = "\x04"), "".concat(r).concat((0, y.Z)(e.userNick, e.user))
  }
}

function w(e, t) {
  let [, n] = e, [, r] = t;
  return n === r
}
var D = function(e) {
  return e.VIDEO = "VIDEO", e.STREAM = "STREAM", e.FILTERED = "FILTERED", e.SPEAKING = "SPEAKING", e.ACTIVITY = "ACTIVITY", e.NOT_POPPED_OUT = "NOT_POPPED_OUT", e
}({});

function x(e) {
  return u.default.getId() === e && _.Z.isCurrentUserPTTLatched()
}
class L {
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
    let e = Chunk592125.Z.getChannel(this.channelId);
    if (null == module || module.type === Chunk981631.d4z.GUILD_TEXT || (this.call = Chunk523746.Z.getCall(this.channelId), module.isPrivate() && (null == this.call || this.call.unavailable))) returnfalse;
    let t = new Set(module.isGuildVocalOrThread() ? Object.keys(Chunk979651.Z.getVoiceStatesForChannel(module.id)) : module.recipients);
    return exports.add(Chunk314897.default.getId()), this.guildRingingUsers.size > 0 && (t = new Set([...exports, ...this.guildRingingUsers])), Chunk199902.Z.getAllActiveStreamsForChannel(this.channelId).forEach(e => {
      let {
        ownerId: n
      } = e;
      return t.add(n)
    }), this.participantByIndex.clear(), this.participants = {}, exports.forEach(e => this.updateParticipant(e)), this.updateEmbeddedActivities(), true
  }
  getParticipant(e) {
    var t;
    return null != (t = this.participantByIndex.get(e)) ? t : null
  }
  updateEmbeddedActivities() {
    return this.updateParticipant(N)
  }
  hasEmbeddedActivity() {
    return this.size("ACTIVITY") > 0
  }
  updateParticipant(e) {
    let t = this.participants[e],
      n = e === N ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
      this.participantByIndex.delete(e.id)
    }), n.forEach(e => {
      this.participantByIndex.set(e.id, e)
    }), this.participants[e] = n, true)
  }
  updateParticipantSpeaking(e) {
    var t, n;
    return null != (n = null == (t = this.participants[e]) ? true : t.reduce((t, n) => {
      if (n.type === O.fO.USER) {
        let t = (0, a.O)({
          userId: e,
          checkIsMuted: true
        });
        return t && (this.lastSpoke[e] = Date.now()), this.participantByIndex.set(n.id, C(T({}, n), {
          speaking: t,
          latched: x(e),
          lastSpoke: this.lastSpoke[e],
          soundsharing: _.Z.isSoundSharing(e)
        })), true
      }
      return t
    }, false)) && n
  }
  updateParticipantQuality(e, t, n) {
    var r, i;
    return null != (i = null == (r = this.participants[e]) ? true : r.reduce((e, r) => r.type === O.fO.STREAM ? (this.participantByIndex.set(r.id, C(T({}, r), {
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
    let e = Chunk317381.ZP.getEmbeddedActivitiesForChannel(this.channelId),
      t = Chunk317381.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
    return null == exports ? module : (0, Chunk392711.uniqBy)([...module, exports], e => e.compositeInstanceId)
  }
  _getParticipantsForEmbeddedActivities() {
    return this._getEmbeddedActivities().map((e, t) => {
      var n, r, i;
      return {
        type: O.fO.ACTIVITY,
        id: P({
          applicationId: e.applicationId,
          instanceId: e.compositeInstanceId
        }),
        applicationId: e.applicationId,
        activityType: v.IIU.PLAYING,
        activityUrl: e.url,
        participants: [...null != (r = e.participants) ? r : []],
        guildId: null != (i = null == (n = f.Z.getChannel(this.channelId)) ? true : n.getGuildId()) ? i : null,
        sortKey: t.toString()
      }
    })
  }
  _getParticipantsForUser(e) {
    var t, n, r, i, o, d;
    let b, y, v = [],
      I = m.default.getUser(e);
    if (null == I) return v;
    let A = g.Z.getVoiceStateForChannel(this.channelId, e),
      N = g.Z.getVoicePlatformForChannel(this.channelId, e),
      P = f.Z.getChannel(this.channelId),
      R = null == P ? true : P.getGuildId(),
      w = null != (r = (null == (n = this.call) || null == (t = n.ringing) ? true : t.includes(e)) || this.guildRingingUsers.has(e)) && r;
    (null != A || w) && (b = C(T({
      type: O.fO.USER
    }, h.Z.getUserStreamData(e, R)), {
      user: I,
      id: I.id,
      voiceState: A,
      voicePlatform: N,
      speaking: (0, a.O)({
        userId: e,
        checkIsMuted: true
      }),
      latched: x(e),
      lastSpoke: null != (i = this.lastSpoke[e]) ? i : 0,
      soundsharing: _.Z.isSoundSharing(e),
      ringing: w,
      userNick: E.ZP.getName(R, this.channelId, I),
      userAvatarDecoration: (0, s.o)(I, R),
      localVideoDisabled: p.Z.isLocalVideoDisabled(I.id),
      isPoppedOut: this.poppedOutParticipants.has(I.id)
    }), v.push(b));
    let D = null != (o = c.Z.getStreamForUser(e, R)) ? o : c.Z.getActiveStreamForUser(e, R);
    if (null != D && D.channelId === this.channelId) {
      let t = (0, l.V9)(D),
        n = this.getParticipant(t),
        r = D.ownerId === u.default.getId() && c.Z.isSelfStreamHidden(this.channelId),
        i = (null == n ? true : n.type) === O.fO.STREAM ? {
          maxResolution: null != n.maxResolution ? T({}, n.maxResolution) : true,
          maxFrameRate: n.maxFrameRate
        } : null;
      y = C(T({}, h.Z.getUserStreamData(e, R, S.Yn.STREAM), i), {
        type: r ? O.fO.HIDDEN_STREAM : O.fO.STREAM,
        id: t,
        userVideo: null != (d = null == A ? true : A.selfVideo) && d,
        user: I,
        userNick: E.ZP.getName(R, this.channelId, I),
        stream: D,
        isPoppedOut: this.poppedOutParticipants.has(t)
      }), v.push(y)
    }
    return v
  }
  constructor(e) {
    I(this, "channelId", true), I(this, "call", true), I(this, "participants", {}), I(this, "lastSpoke", {}), I(this, "guildRingingUsers", new Set), I(this, "poppedOutParticipants", new Set), I(this, "participantByIndex", new i.h(e => {
      var t;
      let n = [];
      if (e.type === O.fO.USER && e.speaking && n.push("SPEAKING"), e.type === O.fO.USER && (null == (t = e.voiceState) ? true : t.selfVideo)) n.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || n.push("FILTERED");
      else if ((0, O._5)(e)) {
        n.push("STREAM");
        let {
          showInCallGrid: t
        } = (0, b.$)({
          location: "ChannelRTCParticipants"
        });
        e.type !== O.fO.HIDDEN_STREAM && (null != e.streamId || t) && !e.isPoppedOut && n.push("FILTERED")
      }
      return e.type === O.fO.ACTIVITY && n.push("ACTIVITY"), "isPoppedOut" in e && e.isPoppedOut || n.push("NOT_POPPED_OUT"), n
    }, R)), this.channelId = e
  }
}