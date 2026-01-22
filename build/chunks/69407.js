/** Chunk was on web.js **/
/** chunk id: 69407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => R,
  ip: () => v,
  wY: () => S
}), require("./321073.js"), require("./896048.js");
var Chunk713402 = require("./713402.js"),
  Chunk90575 = require("./90575.js"),
  Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk256587 = require("./256587.js"),
  Chunk696451 = require("./696451.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk562153 = require("./562153.js"),
  Chunk312006 = require("./312006.js"),
  Chunk446600 = require("./446600.js"),
  Chunk105530 = require("./105530.js"),
  Chunk905278 = require("./905278.js");

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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var v = function(e) {
    return e.SPEAKER = "SPEAKER", e.AUDIENCE = "AUDIENCE", e.NO_ROLE = "NO_ROLE", e.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", e.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", e.BLOCKED = "BLOCKED", e.IGNORED = "IGNORED", e.FRIEND = "FRIEND", e.SELECTED = "SELECTED", e.MEDIA = "MEDIA", e
  }({}),
  S = function(e) {
    return e.VOICE = "VOICE", e.STREAM = "STREAM", e
  }({});

function I(e) {
  var t;
  let {
    speaker: n,
    role: r,
    user: a,
    userNick: s,
    connectedOn: o,
    voiceState: l,
    type: c
  } = e, u = n ? "\0" : "\x01", d = "STREAM" === c ? "\0" : "\x01", f = l.selfMute ? "\x01" : "\0", p = l.selfVideo ? "\0" : "\x01", _ = "".concat(null != (t = null == r ? true : r.position) ? t : 999).padStart(3, "0");
  return "".concat(u).concat(d).concat(f).concat(p).concat(_).concat(o).concat((0, i.A)(s, a))
}

function T(e) {
  let {
    user: t,
    voiceState: n
  } = e, r = n.requestToSpeakTimestamp;
  return null == r ? t.id : "".concat(Date.parse(r)).concat(t.id)
}

function C(e) {
  return e === g.zF.REQUESTED_TO_SPEAK || e === g.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}

function N(e) {
  let {
    speaker: t,
    role: n,
    rtsState: r,
    blocked: i,
    ignored: a,
    isFriend: s
  } = e, o = [];
  return C(r) && o.push("ALL_REQUESTED_TO_SPEAK"), r === g.zF.REQUESTED_TO_SPEAK && o.push("REQUESTED_TO_SPEAK_ONLY"), t ? o.push("SPEAKER") : (null != n ? o.push(n.id) : o.push("NO_ROLE"), o.push("AUDIENCE")), i ? o.push("BLOCKED") : a && o.push("IGNORED"), s && o.push("FRIEND"), o
}
class R {
  _getParticipantsForUser(e, t) {
    var n, r, i;
    let o, b = [],
      O = f.A.getVoiceStateForChannel(this.channelId, e);
    if (null == O) return b;
    let v = d.default.getUser(e);
    if (null == v) return null != this.guildId && m.A.isPublic(this.channelId) && l.A.requestMember(this.guildId, e), b;
    let S = null != t ? t[0] : null,
      I = null != this.guildId ? c.Ay.getMember(this.guildId, e) : null,
      T = null != (n = null == I ? true : I.nick) ? n : _.Ay.getName(this.guildId, this.channelId, v),
      C = {
        user: v,
        userNick: _.Ay.getName(this.guildId, this.channelId, v),
        nick: T,
        comparator: (0, p.hz)(O, T),
        voiceState: O,
        role: (0, E.l)(this.guildId, e),
        speaker: h.Ay.isSpeaker(e, this.channelId),
        member: I,
        blocked: u.A.isBlocked(v.id),
        ignored: u.A.isIgnored(v.id),
        isFriend: u.A.isFriend(v.id),
        connectedOn: null != (r = null == S ? true : S.connectedOn) ? r : Date.now()
      },
      N = A(y({}, C), {
        type: "VOICE",
        id: v.id,
        rtsState: (0, g.eY)(O)
      });
    b.push(N);
    let R = null != (i = s.A.getStreamForUser(e, this.guildId)) ? i : s.A.getActiveStreamForUser(e, this.guildId);
    if (null != R && R.channelId === this.channelId) {
      let e = (0, a._z)(R);
      o = A(y({}, C), {
        id: e,
        type: "STREAM",
        rtsState: g.zF.NONE
      }), b.push(o)
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
    let e = o.A.getChannel(this.channelId);
    if (null == e || !e.isGuildStageVoice()) returnfalse;
    let t = new Set(Object.keys(f.A.getVoiceStatesForChannel(e.id)));
    return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), true
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
    b(this, "channelId", true), b(this, "guildId", true), b(this, "participants", {}), b(this, "_participantsIndex", new r.J(N, I)), b(this, "_requestToSpeakIndex", new r.J(() => [], T)), this.channelId = e, this.guildId = null == (t = o.A.getChannel(e)) ? true : t.getGuildId()
  }
}