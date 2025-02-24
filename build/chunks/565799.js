/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => en
}), n(47120), n(653041);
var r, i = n(348327),
  o = n.n(i),
  a = n(392711),
  s = n.n(a),
  l = n(442837),
  c = n(759174),
  u = n(570140),
  d = n(569545),
  f = n(199902),
  p = n(314897),
  _ = n(592125),
  h = n(430824),
  m = n(496675),
  g = n(699516),
  E = n(606304),
  v = n(594174),
  b = n(979651),
  y = n(938475),
  O = n(501655),
  S = n(88751),
  I = n(427679);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = "NO_GUILD",
  A = new c.h(e => [P(e)], e => e.id),
  C = new Set,
  R = {};

function P(e) {
  var t;
  return null !== (t = e.getGuildId()) && void 0 !== t ? t : N
}

function w(e) {
  return A.values(null != e ? e : void 0, !0).map(e => {
    let {
      id: t
    } = e;
    return t
  })
}

function D(e) {
  C.has(e) || (C.add(e), s()(_.Z.getMutableGuildChannelsForGuild(e)).values().forEach(e => {
    M(e) && A.set(e.id, e)
  }))
}

function x(e) {
  let t = R[e];
  if (null != t) return t;
  let n = _.Z.getChannel(e);
  return null != n && n.isGuildStageVoice() && (D(n.guild_id), M(n)) ? L(e) : null
}

function L(e) {
  let t = R[e];
  return null == t && (t = new O.ZP(e), R[e] = t, t.rebuild()), t
}

function M(e) {
  return null != e && e.isGuildStageVoice() && y.ZP.countVoiceStatesForChannel(e.id) > 0
}

function k(e, t) {
  let n = _.Z.getChannel(e);
  return null != n && n.isGuildStageVoice() ? 0 === t.size() ? B(n.id) : null == A.get(n.id) && A.set(n.id, n) : B(e)
}

function j(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w();
  return t.reduce((t, n) => {
    let r = L(n);
    return e(r) ? (k(n, r), !0) : t
  }, !1)
}

function U(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w();
  return j(t => t.updateParticipant(e), t)
}

function G(e) {
  for (let t of A.values(e)) A.delete(t.id), delete R[t.id];
  C.delete(e)
}

function B(e) {
  return null != e && (delete R[e], A.delete(e), !0)
}

function Z() {
  C.clear(), A.clear(), R = {}
}

function F(e, t, n) {
  if (null == n || e.has(n)) return;
  let r = _.Z.getChannel(n);
  (null == r ? void 0 : r.isGuildStageVoice()) && (t.add(n), e.add(n))
}

function V(e) {
  let {
    voiceStates: t
  } = e, n = new Set;
  return t.reduce((e, t) => {
    if (null == t.guildId || !C.has(t.guildId)) return e;
    let r = new Set;
    return (F(n, r, t.oldChannelId), F(n, r, t.channelId), 0 === r.size) ? e : U(t.userId, Array.from(r)) || e
  }, !1)
}

function H(e) {
  let {
    chunks: t
  } = e, n = !1;
  for (let e of t)
    for (let t of e.members) n = U(t.user.id) || n;
  return n
}

function W(e) {
  let t = !1;
  for (let n of w(e.guildId)) t = L(n).rebuild() || t;
  return t
}

function Y(e) {
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
  return !!(null != n && C.has(n)) && U(r, [t])
}

function Q(e) {
  let {
    streamKey: t
  } = e, {
    channelId: n,
    guildId: r,
    ownerId: i
  } = (0, d.my)(t);
  return !!(null != r && C.has(r)) && U(i, [n])
}

function X(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  return B(t)
}

function J(e) {
  let {
    channels: t
  } = e, n = t.reduce((e, t) => {
    if (!t.isGuildStageVoice() || !C.has(t.guild_id)) return e;
    let n = A.get(t.id);
    return null == n || o()(t.permissionOverwrites, n.permissionOverwrites) || (e.push(t.id), A.set(t.id, t)), e
  }, []);
  return j(e => e.rebuild(), n), n.length > 0
}

function $(e) {
  let {
    guildId: t
  } = e;
  if (C.has(t)) return j(e => e.rebuild(), w(t))
}
let ee = [];
class et extends(r = l.ZP.Store) {
  initialize() {
    this.waitFor(p.default, v.default, _.Z, E.Z, b.Z, m.Z, y.ZP, h.Z, S.ZP, g.Z, I.Z, f.Z)
  }
  getParticipantsVersion(e) {
    var t, n;
    return null == e ? -1 : null !== (n = null === (t = x(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
  }
  getMutableParticipants(e, t) {
    var n, r;
    return null == e ? ee : null !== (r = null === (n = x(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== r ? r : ee
  }
  getMutableRequestToSpeakParticipants(e) {
    var t, n;
    return null !== (n = null === (t = x(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : ee
  }
  getRequestToSpeakParticipantsVersion(e) {
    var t, n;
    return null !== (n = null === (t = x(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
  }
  getParticipantCount(e, t) {
    var n, r;
    return null !== (r = null === (n = x(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== r ? r : 0
  }
  getChannels(e) {
    return D(null != e ? e : N), A.values(null != e ? e : N)
  }
  getChannelsVersion() {
    return A.version
  }
  getParticipant(e, t) {
    var n, r;
    return null !== (r = null === (n = x(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== r ? r : null
  }
}
T(et, "displayName", "StageChannelParticipantStore");
let en = new et(u.Z, {
  CONNECTION_OPEN: Z,
  OVERLAY_INITIALIZE: Z,
  VOICE_STATE_UPDATES: V,
  CHANNEL_DELETE: X,
  GUILD_MEMBERS_CHUNK_BATCH: H,
  USER_UPDATE: Y,
  GUILD_MEMBER_REMOVE: Y,
  GUILD_MEMBER_UPDATE: Y,
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
  PASSIVE_UPDATE_V2: W
})