/** Chunk was on web.js **/
/** chunk id: 501655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ui: () => I,
  ZP: () => P,
  pV: () => S
}), require("./539854.js"), require("./388685.js");
var Chunk759174 = require("./759174.js"),
  Chunk933546 = require("./933546.js"),
  Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk720202 = require("./720202.js"),
  Chunk271383 = require("./271383.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk5192 = require("./5192.js"),
  Chunk88751 = require("./88751.js"),
  Chunk427679 = require("./427679.js"),
  Chunk590415 = require("./590415.js"),
  Chunk974609 = require("./974609.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var S = function(e) {
    return e.SPEAKER = "SPEAKER", e.AUDIENCE = "AUDIENCE", e.NO_ROLE = "NO_ROLE", e.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", e.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", e.BLOCKED = "BLOCKED", e.IGNORED = "IGNORED", e.FRIEND = "FRIEND", e.SELECTED = "SELECTED", e.MEDIA = "MEDIA", e
  }({}),
  I = function(e) {
    return e.VOICE = "VOICE", e.STREAM = "STREAM", e
  }({});

function T(e) {
  var t;
  let {
    speaker: n,
    role: r,
    user: a,
    userNick: o,
    connectedOn: s,
    voiceState: l,
    type: c
  } = e, u = n ? "\0" : "\x01", d = "STREAM" === c ? "\0" : "\x01", f = l.selfMute ? "\x01" : "\0", p = l.selfVideo ? "\0" : "\x01", _ = "".concat(null != (t = null == r ? true : r.position) ? t : 999).padStart(3, "0");
  return "".concat(u).concat(d).concat(f).concat(p).concat(_).concat(s).concat((0, i.Z)(o, a))
}

function A(e) {
  let {
    user: t,
    voiceState: n
  } = e, r = n.requestToSpeakTimestamp;
  return null == r ? t.id : "".concat(Date.parse(r)).concat(t.id)
}

function C(e) {
  return e === g.xO.REQUESTED_TO_SPEAK || e === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}

function N(e) {
  let {
    speaker: t,
    role: n,
    rtsState: r,
    blocked: i,
    ignored: a,
    isFriend: o
  } = e, s = [];
  return C(r) && s.push("ALL_REQUESTED_TO_SPEAK"), r === g.xO.REQUESTED_TO_SPEAK && s.push("REQUESTED_TO_SPEAK_ONLY"), t ? s.push("SPEAKER") : (null != n ? s.push(n.id) : s.push("NO_ROLE"), s.push("AUDIENCE")), i ? s.push("BLOCKED") : a && s.push("IGNORED"), o && s.push("FRIEND"), s
}
class P {
  _getParticipantsForUser(e, t) {
    var n, r, i;
    let s, b = [],
      O = f.Z.getVoiceStateForChannel(this.channelId, e);
    if (null == O) return b;
    let S = d.default.getUser(e);
    if (null == S) return null != this.guildId && h.Z.isPublic(this.channelId) && l.Z.requestMember(this.guildId, e), b;
    let I = null != t ? t[0] : null,
      T = null != this.guildId ? c.ZP.getMember(this.guildId, e) : null,
      A = null != (n = null == T ? true : T.nick) ? n : _.ZP.getName(this.guildId, this.channelId, S),
      C = {
        user: S,
        userNick: _.ZP.getName(this.guildId, this.channelId, S),
        nick: A,
        comparator: (0, p.sQ)(O, A),
        voiceState: O,
        role: (0, E.H)(this.guildId, e),
        speaker: m.ZP.isSpeaker(e, this.channelId),
        member: T,
        blocked: u.Z.isBlocked(S.id),
        ignored: u.Z.isIgnored(S.id),
        isFriend: u.Z.isFriend(S.id),
        connectedOn: null != (r = null == I ? true : I.connectedOn) ? r : Date.now()
      },
      N = v(y({}, C), {
        type: "VOICE",
        id: S.id,
        rtsState: (0, g.gf)(O)
      });
    b.push(N);
    let P = null != (i = o.Z.getStreamForUser(e, this.guildId)) ? i : o.Z.getActiveStreamForUser(e, this.guildId);
    if (null != P && P.channelId === this.channelId) {
      let e = (0, a.V9)(P);
      s = v(y({}, C), {
        id: e,
        type: "STREAM",
        rtsState: g.xO.NONE
      }), b.push(s)
    }
    return b
  }
  updateParticipant(e) {
    let t = this.participants[e],
      n = this._getParticipantsForUser(e, t);
    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
      this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id)
    }), n.forEach(t => {
      this._participantsIndex.set(t.id, t), t.id === e && C(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e)
    }), this.participants[e] = n, true)
  }
  rebuild() {
    let e = Chunk592125.Z.getChannel(this.channelId);
    if (null == module || !module.isGuildStageVoice()) returnfalse;
    let t = new Set(Object.keys(Chunk979651.Z.getVoiceStatesForChannel(module.id)));
    return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), this.participants = {}, exports.forEach(e => this.updateParticipant(e)), true
  }
  get version() {
    return this._participantsIndex.version
  }
  size(e) {
    return this._participantsIndex.size(e)
  }
  toArray(e) {
    return this._participantsIndex.values(e, true)
  }
  getParticipant(e) {
    var t;
    return null != (t = this._participantsIndex.get(e)) ? t : null
  }
  get requestToSpeakVersion() {
    return this._requestToSpeakIndex.version
  }
  getRequestToSpeakParticipants() {
    return this._requestToSpeakIndex.values(true, true)
  }
  constructor(e) {
    var t;
    b(this, "channelId", true), b(this, "guildId", true), b(this, "participants", {}), b(this, "_participantsIndex", new r.h(N, T)), b(this, "_requestToSpeakIndex", new r.h(() => [], A)), this.channelId = e, this.guildId = null == (t = s.Z.getChannel(e)) ? true : t.getGuildId()
  }
}