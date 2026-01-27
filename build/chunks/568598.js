/** Chunk was on web.js **/
/** chunk id: 568598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => L,
  KU: () => w,
  Qt: () => N,
  hS: () => R,
  r4: () => P
}), require("./747238.js"), require("./896048.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  Chunk713402 = require("./713402.js"),
  Chunk717558 = require("./717558.js"),
  Chunk933958 = require("./933958.js"),
  Chunk357046 = require("./357046.js"),
  Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk470710 = require("./470710.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk485296 = require("./485296.js"),
  Chunk287809 = require("./287809.js"),
  Chunk803301 = require("./803301.js"),
  Chunk977997 = require("./977997.js"),
  Chunk562153 = require("./562153.js"),
  Chunk90575 = require("./90575.js"),
  Chunk806931 = require("./806931.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function A(e, t, n) {
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
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = "__EMBEDDED_ACTIVITIES__";

function N(e) {
  let {
    applicationId: t,
    instanceId: n
  } = e;
  return null != n ? "activity-".concat(t, "-").concat(n) : "activity-".concat(t)
}

function w(e) {
  switch (e.type) {
    case b.lp.ACTIVITY:
      return "\x01".concat(e.sortKey);
    case b.lp.HIDDEN_STREAM:
    case b.lp.STREAM:
      return "".concat(e.userVideo ? "\x02" : "\x03").concat((0, y.A)(e.userNick, e.user), "\x03");
    case b.lp.USER:
      var t, n;
      let r = "\x05";
      return (null == (t = e.voiceState) ? true : t.selfVideo) ? r = "\x03" : (null == (n = e.voiceState) ? true : n.selfStream) && (r = "\x04"), "".concat(r).concat((0, y.A)(e.userNick, e.user))
  }
}

function R(e, t) {
  let [, n] = e, [, r] = t;
  return n === r
}
var P = function(e) {
  return e.VIDEO = "VIDEO", e.STREAM = "STREAM", e.FILTERED = "FILTERED", e.SPEAKING = "SPEAKING", e.ACTIVITY = "ACTIVITY", e.NOT_POPPED_OUT = "NOT_POPPED_OUT", e
}({});

function D(e) {
  return !(u.default.getId() !== e || p.A.isMute()) && _.A.isCurrentUserPTTLatched()
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
    let e = f.A.getChannel(this.channelId);
    if (null == e || e.type === O.rbe.GUILD_TEXT || (this.call = d.A.getCall(this.channelId), e.isPrivate() && (null == this.call || this.call.unavailable))) returnfalse;
    let t = new Set(e.isGuildVocalOrThread() ? Object.keys(g.A.getVoiceStatesForChannel(e.id)) : e.recipients);
    return t.add(u.default.getId()), this.guildRingingUsers.size > 0 && (t = new Set([...t, ...this.guildRingingUsers])), c.A.getAllActiveStreamsForChannel(this.channelId).forEach(e => {
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
    return this.updateParticipant(C)
  }
  hasEmbeddedActivity() {
    return this.size("ACTIVITY") > 0
  }
  updateParticipant(e) {
    let t = this.participants[e],
      n = e === C ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
      this.participantByIndex.delete(e.id)
    }), n.forEach(e => {
      this.participantByIndex.set(e.id, e)
    }), this.participants[e] = n, true)
  }
  updateParticipantSpeaking(e) {
    var t, n;
    return null != (t = null == (n = this.participants[e]) ? true : n.reduce((t, n) => {
      if (n.type === b.lp.USER) {
        let r = (0, a.R)({
            userId: e,
            checkIsMuted: true
          }),
          i = D(e),
          o = _.A.isSoundSharing(e);
        return n.speaking === r && n.latched === i && n.soundsharing === o ? t : (r && (this.lastSpoke[e] = Date.now()), this.participantByIndex.set(n.id, T(I({}, n), {
          speaking: r,
          latched: i,
          lastSpoke: this.lastSpoke[e],
          soundsharing: o
        })), true)
      }
      return t
    }, false)) && t
  }
  updateParticipantQuality(e, t, n) {
    var r, i;
    return null != (r = null == (i = this.participants[e]) ? true : i.reduce((e, r) => r.type === b.lp.STREAM ? (this.participantByIndex.set(r.id, T(I({}, r), {
      maxResolution: t,
      maxFrameRate: n
    })), true) : e, false)) && r
  }
  updateGuildRingingUsers(e, t) {
    t ? this.guildRingingUsers.add(e) : this.guildRingingUsers.delete(e)
  }
  updateParticipantPoppedOut(e, t) {
    t ? this.poppedOutParticipants.add(e) : this.poppedOutParticipants.delete(e)
  }
  _getEmbeddedActivities() {
    let e = o.Ay.getEmbeddedActivitiesForChannel(this.channelId),
      t = o.Ay.getSelfEmbeddedActivityForChannel(this.channelId);
    return null == t ? e : (0, r.uniqBy)([...e, t], e => e.compositeInstanceId)
  }
  _getParticipantsForEmbeddedActivities() {
    return this._getEmbeddedActivities().map((e, t) => {
      var n, r, i;
      return {
        type: b.lp.ACTIVITY,
        id: N({
          applicationId: e.applicationId,
          instanceId: e.compositeInstanceId
        }),
        applicationId: e.applicationId,
        activityType: O.$pd.PLAYING,
        activityUrl: e.url,
        participants: [...null != (n = e.participants) ? n : []],
        guildId: null != (r = null == (i = f.A.getChannel(this.channelId)) ? true : i.getGuildId()) ? r : null,
        sortKey: t.toString()
      }
    })
  }
  _getParticipantsForUser(e) {
    var t, n, r, i, o, d;
    let y, O, A = [],
      S = h.default.getUser(e);
    if (null == S) return A;
    let C = g.A.getVoiceStateForChannel(this.channelId, e),
      N = g.A.getVoicePlatformForChannel(this.channelId, e),
      w = f.A.getChannel(this.channelId),
      R = null == w ? true : w.getGuildId(),
      P = null != (t = (null == (i = this.call) || null == (r = i.ringing) ? true : r.includes(e)) || this.guildRingingUsers.has(e)) && t;
    (null != C || P) && (y = T(I({
      type: b.lp.USER
    }, m.A.getUserStreamData(e, R)), {
      user: S,
      id: S.id,
      voiceState: C,
      voicePlatform: N,
      speaking: (0, a.R)({
        userId: e,
        checkIsMuted: true
      }),
      latched: D(e),
      lastSpoke: null != (o = this.lastSpoke[e]) ? o : 0,
      soundsharing: _.A.isSoundSharing(e),
      ringing: P,
      userNick: E.Ay.getName(R, this.channelId, S),
      userAvatarDecoration: (0, s.U)(S, R),
      localVideoDisabled: p.A.isLocalVideoDisabled(S.id),
      isPoppedOut: this.poppedOutParticipants.has(S.id)
    }), A.push(y));
    let L = null != (n = c.A.getStreamForUser(e, R)) ? n : c.A.getActiveStreamForUser(e, R);
    if (null != L && L.channelId === this.channelId) {
      let t = (0, l._z)(L),
        n = this.getParticipant(t),
        r = L.ownerId === u.default.getId() && c.A.isSelfStreamHidden(this.channelId),
        i = (null == n ? true : n.type) === b.lp.STREAM ? {
          maxResolution: null != n.maxResolution ? I({}, n.maxResolution) : true,
          maxFrameRate: n.maxFrameRate
        } : null;
      O = T(I({}, m.A.getUserStreamData(e, R, v.x.STREAM), i), {
        type: r ? b.lp.HIDDEN_STREAM : b.lp.STREAM,
        id: t,
        userVideo: null != (d = null == C ? true : C.selfVideo) && d,
        user: S,
        userNick: E.Ay.getName(R, this.channelId, S),
        stream: L,
        isPoppedOut: this.poppedOutParticipants.has(t)
      }), A.push(O)
    }
    return A
  }
  constructor(e) {
    A(this, "channelId", true), A(this, "call", true), A(this, "participants", {}), A(this, "lastSpoke", {}), A(this, "guildRingingUsers", new Set), A(this, "poppedOutParticipants", new Set), A(this, "participantByIndex", new i.J(e => {
      var t;
      let n = [];
      return e.type === b.lp.USER && e.speaking && n.push("SPEAKING"), e.type === b.lp.USER && (null == (t = e.voiceState) ? true : t.selfVideo) ? (n.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || n.push("FILTERED")) : (0, b.Ay)(e) && (n.push("STREAM"), e.type === b.lp.HIDDEN_STREAM || null == e.streamId || e.isPoppedOut || n.push("FILTERED")), e.type === b.lp.ACTIVITY && n.push("ACTIVITY"), "isPoppedOut" in e && e.isPoppedOut || n.push("NOT_POPPED_OUT"), n
    }, w)), this.channelId = e
  }
}