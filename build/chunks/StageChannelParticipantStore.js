/** Chunk was on web.js **/
/** chunk id: 565799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => en
}), require("./388685.js"), require("./539854.js");
var r, Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk759174 = require("./759174.js"),
  Chunk570140 = require("./570140.js"),
  Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk606304 = require("./606304.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk501655 = require("./501655.js"),
  Chunk88751 = require("./88751.js"),
  Chunk427679 = require("./427679.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let A = "NO_GUILD",
  C = new Chunk759174.h(e => [R(e)], e => e.id),
  N = new Set,
  P = {};

function R(e) {
  var t;
  return null != (t = e.getGuildId()) ? t : A
}

function D(e) {
  return C.values(null != e ? e : true, true).map(e => {
    let {
      id: t
    } = e;
    return t
  })
}

function w(e) {
  N.has(e) || (N.add(e), s()(_.Z.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
    j(e) && C.set(e.id, e)
  }))
}

function x(e) {
  let t = P[e];
  if (null != t) return t;
  let n = _.Z.getChannel(e);
  return null != n && n.isGuildStageVoice() && (w(n.guild_id), j(n)) ? L(e) : null
}

function L(e) {
  let t = P[e];
  return null == t && (t = new v.ZP(e), P[e] = t, t.rebuild()), t
}

function j(e) {
  return null != e && e.isGuildStageVoice() && O.ZP.countVoiceStatesForChannel(e.id) > 0
}

function M(e, t) {
  let n = _.Z.getChannel(e);
  return null != n && n.isGuildStageVoice() ? 0 === t.size() ? Z(n.id) : null == C.get(n.id) && C.set(n.id, n) : Z(e)
}

function k(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : D();
  return t.reduce((t, n) => {
    let r = L(n);
    return e(r) ? (M(n, r), true) : t
  }, false)
}

function U(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : D();
  return k(t => t.updateParticipant(e), t)
}

function G(e) {
  for (let t of C.values(e)) C.delete(t.id), delete P[t.id];
  N.delete(e)
}

function Z(e) {
  return null != e && (delete P[e], C.delete(e), true)
}

function B() {
  N.clear(), C.clear(), P = {}
}

function F(e, t, n) {
  if (null == n || e.has(n)) return;
  let r = _.Z.getChannel(n);
  (null == r ? true : r.isGuildStageVoice()) && (t.add(n), null == P[n] && e.add(n))
}

function V(e) {
  let {
    voiceStates: t
  } = e, n = new Set;
  return t.reduce((e, t) => {
    if (null == t.guildId || !N.has(t.guildId)) return e;
    let r = new Set;
    return (F(n, r, t.oldChannelId), F(n, r, t.channelId), 0 === r.size) ? e : U(t.userId, Array.from(r)) || e
  }, false)
}

function H(e) {
  let {
    chunks: t
  } = e, n = false;
  for (let e of t)
    for (let t of e.members) n = U(t.user.id) || n;
  return n
}

function Y(e) {
  let t = false;
  for (let n of D(e.guildId)) t = L(n).rebuild() || t;
  return t
}

function W(e) {
  let {
    user: t
  } = e;
  return U(t.id)
}

function K(e) {
  let {
    relationship: t
  } = e;
  return U(t.id)
}

function z(e) {
  let {
    guild: t
  } = e;
  G(t.id)
}

function q(e) {
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
  } = (0, d.my)(t);
  return null != r && !!N.has(r) && U(i, [n])
}

function X(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  return Z(t)
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
  if (N.has(t)) return k(e => e.rebuild(), D(t))
}
let ee = [];
class et extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk594174.default, Chunk592125.Z, Chunk606304.Z, Chunk979651.Z, Chunk496675.Z, Chunk938475.ZP, Chunk430824.Z, Chunk88751.ZP, Chunk699516.Z, Chunk427679.Z, Chunk199902.Z)
  }
  getParticipantsVersion(e) {
    var t, n;
    return null == e ? false : null != (n = null == (t = x(e)) ? true : t.version) ? n : false
  }
  getMutableParticipants(e, t) {
    var n, r;
    return null == e ? ee : null != (r = null == (n = x(e)) ? true : n.toArray(t)) ? r : ee
  }
  getMutableRequestToSpeakParticipants(e) {
    var t, n;
    return null != (n = null == (t = x(e)) ? true : t.getRequestToSpeakParticipants()) ? n : ee
  }
  getRequestToSpeakParticipantsVersion(e) {
    var t, n;
    return null != (n = null == (t = x(e)) ? true : t.requestToSpeakVersion) ? n : false
  }
  getParticipantCount(e, t) {
    var n, r;
    return null != (r = null == (n = x(e)) ? true : n.size(t)) ? r : 0
  }
  getChannels(e) {
    return w(null != e ? e : A), C.values(null != e ? e : A)
  }
  getChannelsVersion() {
    return C.version
  }
  getParticipant(e, t) {
    var n, r;
    return null != (r = null == (n = x(e)) ? true : n.getParticipant(t)) ? r : null
  }
}
T(et, "displayName", "StageChannelParticipantStore");
let en = new et(Chunk570140.Z, {
  CONNECTION_OPEN: B,
  OVERLAY_INITIALIZE: B,
  VOICE_STATE_UPDATES: V,
  CHANNEL_DELETE: X,
  GUILD_MEMBERS_CHUNK_BATCH: H,
  USER_UPDATE: W,
  GUILD_MEMBER_REMOVE: W,
  GUILD_MEMBER_UPDATE: W,
  CHANNEL_UPDATES: J,
  GUILD_ROLE_UPDATE: $,
  RTC_CONNECTION_VIDEO: q,
  STREAM_CLOSE: Q,
  STREAM_DELETE: Q,
  RELATIONSHIP_ADD: K,
  RELATIONSHIP_REMOVE: K,
  RELATIONSHIP_UPDATE: K,
  GUILD_CREATE: z,
  GUILD_DELETE: z,
  PASSIVE_UPDATE_V2: Y
})