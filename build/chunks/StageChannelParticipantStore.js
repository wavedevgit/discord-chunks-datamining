/** Chunk was on web.js **/
/** chunk id: 63995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => en
}), require("./896048.js"), require("./321073.js");
var r, Chunk812729 = require("./812729.js"),
  a = require.n(Chunk812729),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk485296 = require("./485296.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk69407 = require("./69407.js"),
  Chunk312006 = require("./312006.js"),
  Chunk446600 = require("./446600.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let T = "NO_GUILD",
  C = new Chunk713402.J(e => [R(e)], e => e.id),
  N = new Set,
  w = {};

function R(e) {
  var t;
  return null != (t = e.getGuildId()) ? t : T
}

function P(e) {
  return C.values(null != e ? e : true, true).map(e => {
    let {
      id: t
    } = e;
    return t
  })
}

function D(e) {
  N.has(e) || (N.add(e), s()(_.A.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
    M(e) && C.set(e.id, e)
  }))
}

function L(e) {
  let t = w[e];
  if (null != t) return t;
  let n = _.A.getChannel(e);
  return null != n && n.isGuildStageVoice() && (D(n.guild_id), M(n)) ? x(e) : null
}

function x(e) {
  let t = w[e];
  return null == t && (t = new v.Ay(e), w[e] = t, t.rebuild()), t
}

function M(e) {
  return null != e && e.isGuildStageVoice() && O.Ay.countVoiceStatesForChannel(e.id) > 0
}

function j(e, t) {
  let n = _.A.getChannel(e);
  return null != n && n.isGuildStageVoice() ? 0 === t.size() ? V(n.id) : null == C.get(n.id) && C.set(n.id, n) : V(e)
}

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : P();
  return t.reduce((t, n) => {
    let r = x(n);
    return e(r) ? (j(n, r), true) : t
  }, false)
}

function U(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : P();
  return k(t => t.updateParticipant(e), t)
}

function G(e) {
  for (let t of C.values(e)) C.delete(t.id), delete w[t.id];
  N.delete(e)
}

function V(e) {
  return null != e && (delete w[e], C.delete(e), true)
}

function F() {
  N.clear(), C.clear(), w = {}
}

function B(e, t, n) {
  if (null == n || e.has(n)) return;
  let r = _.A.getChannel(n);
  (null == r ? true : r.isGuildStageVoice()) && (t.add(n), null == w[n] && e.add(n))
}

function H(e) {
  let {
    voiceStates: t
  } = e, n = new Set;
  return t.reduce((e, t) => {
    if (null == t.guildId || !N.has(t.guildId)) return e;
    let r = new Set;
    return (B(n, r, t.oldChannelId), B(n, r, t.channelId), 0 === r.size) ? e : U(t.userId, Array.from(r)) || e
  }, false)
}

function Y(e) {
  let {
    chunks: t
  } = e, n = false;
  for (let e of t)
    for (let t of e.members) n = U(t.user.id) || n;
  return n
}

function W(e) {
  let t = false;
  for (let n of P(e.guildId)) t = x(n).rebuild() || t;
  return t
}

function K(e) {
  let {
    user: t
  } = e;
  return U(t.id)
}

function z(e) {
  let {
    relationship: t
  } = e;
  return U(t.id)
}

function q(e) {
  let {
    guild: t
  } = e;
  G(t.id)
}

function Z(e) {
  let {
    channelId: t,
    guildId: n,
    userId: r
  } = e;
  return null != n && !!N.has(n) && U(r, [t])
}

function Q(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    guildId: r,
    ownerId: i
  } = (0, d.Iy)(t);
  return null != r && !!N.has(r) && U(i, [n])
}

function X(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  return V(t)
}

function J(e) {
  let {
    channels: t
  } = e, n = t.reduce((e, t) => {
    if (!t.isGuildStageVoice() || !N.has(t.guild_id)) return e;
    let n = C.get(t.id);
    return null == n || a()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), C.set(t.id, t)), e
  }, []);
  return k(e => e.rebuild(), n), n.length > 0
}

function $(e) {
  let {
    guildId: t
  } = e;
  if (N.has(t)) return k(e => e.rebuild(), P(t))
}
let ee = [];
class et extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(p.default, y.default, _.A, E.A, b.A, m.A, O.Ay, h.A, A.Ay, g.A, I.A, f.A)
  }
  getParticipantsVersion(e) {
    var t, n;
    return null == e ? false : null != (t = null == (n = L(e)) ? true : n.version) ? t : false
  }
  getMutableParticipants(e, t) {
    var n, r;
    return null == e ? ee : null != (n = null == (r = L(e)) ? true : r.toArray(t)) ? n : ee
  }
  getMutableRequestToSpeakParticipants(e) {
    var t, n;
    return null != (t = null == (n = L(e)) ? true : n.getRequestToSpeakParticipants()) ? t : ee
  }
  getRequestToSpeakParticipantsVersion(e) {
    var t, n;
    return null != (t = null == (n = L(e)) ? true : n.requestToSpeakVersion) ? t : false
  }
  getParticipantCount(e, t) {
    var n, r;
    return null != (n = null == (r = L(e)) ? true : r.size(t)) ? n : 0
  }
  getChannels(e) {
    return D(null != e ? e : T), C.values(null != e ? e : T)
  }
  getChannelsVersion() {
    return C.version
  }
  getParticipant(e, t) {
    var n, r;
    return null != (n = null == (r = L(e)) ? true : r.getParticipant(t)) ? n : null
  }
}
S(et, "displayName", "StageChannelParticipantStore");
let en = new et(Chunk73153.h, {
  CONNECTION_OPEN: F,
  OVERLAY_INITIALIZE: F,
  VOICE_STATE_UPDATES: H,
  CHANNEL_DELETE: X,
  GUILD_MEMBERS_CHUNK_BATCH: Y,
  USER_UPDATE: K,
  GUILD_MEMBER_REMOVE: K,
  GUILD_MEMBER_UPDATE: K,
  CHANNEL_UPDATES: J,
  GUILD_ROLE_UPDATE: $,
  RTC_CONNECTION_VIDEO: Z,
  STREAM_CLOSE: Q,
  STREAM_DELETE: Q,
  RELATIONSHIP_ADD: z,
  RELATIONSHIP_REMOVE: z,
  RELATIONSHIP_UPDATE: z,
  GUILD_CREATE: q,
  GUILD_DELETE: q,
  PASSIVE_UPDATE_V2: W
})