/** Chunk was on web.js **/
/** chunk id: 271383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O5: () => K,
  V6: () => W,
  ZP: () => eM
}), require("./35282.js"), require("./388685.js"), require("./997841.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk2572 = require("./2572.js"),
  Chunk16609 = require("./16609.js"),
  Chunk864106 = require("./864106.js"),
  Chunk579407 = require("./579407.js"),
  Chunk710845 = require("./710845.js"),
  Chunk69882 = require("./69882.js"),
  Chunk134049 = require("./134049.js"),
  Chunk160404 = require("./160404.js"),
  Chunk630388 = require("./630388.js"),
  Chunk823379 = require("./823379.js"),
  Chunk625137 = require("./625137.js"),
  Chunk709054 = require("./709054.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk372897 = require("./372897.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = new Chunk710845.Z("GuildMemberStore"),
  P = {},
  w = {},
  D = {},
  x = {},
  L = {},
  j = false,
  k = 0,
  M = 0,
  U = {},
  G = {},
  B = {
    added: [],
    removed: []
  };

function Z(e, t) {
  if (null == t.communicationDisabledUntil || !(0, _.b)(t)) return V(e, t.userId);
  let n = Y(e, t.userId);
  L[n] !== t.communicationDisabledUntil && (0, _.b)(t) && (L[n] = t.communicationDisabledUntil, F(n))
}

function V(e, t) {
  if (null != t) {
    let n = Y(e, t);
    null != L[n] && F(n), H(Y(e, t))
  } else
    for (let t in L) {
      let n = t;
      K(n) === e && (F(t), H(n))
    }
}

function F(e) {
  k += 1, U[e] = k
}

function H(e) {
  W(e) === y.default.getId() && (0, p.l)(K(e)), delete L[e]
}

function Y(e, t) {
  let n = [];
  return n[0] = e, n[1] = t, n.join("-")
}

function W(e) {
  return e.split("-")[1]
}

function K(e) {
  return e.split("-")[0]
}

function z(e, t) {
  var n, r;
  let i, a, o, s;
  if (0 === t.length) return {
    colorString: null,
    colorStrings: null,
    colorRoleId: true,
    hoistRoleId: true,
    iconRoleId: true,
    highestRoleId: true
  };
  for (let n of t) {
    let t = e[n];
    null != t && ((null == s || (0, E.C$)(t, s)) && (s = t), t.color > 0 && (null == i || (0, E.C$)(t, i)) && (i = t), t.hoist && (null == a || (0, E.C$)(t, a)) && (a = t), (null != t.icon || null != t.unicodeEmoji) && (null == o || (0, E.C$)(t, o)) && (o = t))
  }
  return {
    colorString: null != (n = null == i ? true : i.colorString) ? n : null,
    colorStrings: null != (r = null == i ? true : i.colorStrings) ? r : null,
    colorRoleId: null == i ? true : i.id,
    iconRoleId: null == o ? true : o.id,
    hoistRoleId: null == a ? true : a.id,
    highestRoleId: null == s ? true : s.id
  }
}

function q(e) {
  var t, n;
  let {
    userId: r,
    nick: i,
    guildId: a,
    avatar: o,
    avatarDecoration: s,
    guildRoles: l,
    roles: c,
    premiumSince: u,
    isPending: d,
    joinedAt: f,
    communicationDisabledUntil: _,
    unusualDMActivityUntil: p,
    fullProfileLoadedTimestamp: g,
    flags: E,
    collectibles: O
  } = e, {
    colorString: v,
    colorStrings: I,
    colorRoleId: S,
    iconRoleId: C,
    hoistRoleId: R,
    highestRoleId: w
  } = z(l, c), x = {
    userId: r,
    nick: i,
    guildId: a,
    avatar: o,
    avatarDecoration: s,
    roles: c,
    colorString: v,
    colorStrings: I,
    colorRoleId: S,
    iconRoleId: C,
    hoistRoleId: R,
    highestRoleId: w,
    premiumSince: u,
    isPending: d,
    joinedAt: f,
    communicationDisabledUntil: _,
    unusualDMActivityUntil: p,
    fullProfileLoadedTimestamp: g,
    flags: E,
    collectibles: O
  };
  if ((0, m.yE)(null != (t = x.flags) ? t : 0, T.q.IS_GUEST) && (x.flags = (0, m.pj)(null != (n = x.flags) ? n : 0, T.q.BYPASSES_VERIFICATION)), null == P[a]) return x;
  if (r === y.default.getId())
    if (h.Z.isViewingRoles(a) || h.Z.isFullServerPreview(a)) {
      let e = h.Z.getViewingRoles(a);
      D[a] = N(A({}, x, h.Z.getMemberOptions(a)), {
        roles: null != e ? b.default.keys(e) : []
      })
    } else null != D[a] && delete D[a];
  return x
}

function X(e) {
  j ? j = false : (P = {}, w = {}), L = {}, J(e)
}

function Q(e) {
  e.guilds.forEach(e => {
    var t;
    let n = e.id;
    ev({
      id: n,
      members: e.members
    }), null == (t = e.activity_instances) || t.forEach(e => {
      eO(n, e.participants)
    })
  })
}

function J(e) {
  e.guilds.forEach(e => {
    ev(e)
  })
}

function $(e) {
  let {
    guildMembers: t
  } = e;
  P = A({}, t), w = {}
}

function ee(e) {
  let {
    guildMembers: t,
    guilds: n
  } = e;
  j = true, P = A({}, t), w = {}, x = {}, en(n)
}

function et(e) {
  let {
    guilds: t
  } = e;
  en(t)
}

function en(e) {
  for (let t of e)
    if (null != t.member && (null == x[t.id] ? x[t.id] = t.member : x[t.id] = N(A({}, t.member), {
        roles: t.member.roles
      }), null != P[t.id])) {
      let e = P[t.id];
      null != e[t.member.userId] && (e[t.member.userId] = N(A({}, e[t.member.userId]), {
        roles: t.member.roles
      }))
    }
}

function er(e) {
  var t, n;
  if (null == e.guildId || null == I.Z.getGuild(e.guildId)) returnfalse;
  j = true, P[e.guildId] = null != (t = P[e.guildId]) ? t : {};
  let r = false;
  for (let t of (j = true, P[e.guildId] = null != (n = P[e.guildId]) ? n : {}, e.members)) null == P[e.guildId][t.userId] && (r = true, P[e.guildId][t.userId] = t);
  return r
}

function ei(e) {
  var t;
  let {
    guildId: n,
    user: r,
    nick: i,
    avatar: a,
    avatarDecoration: o,
    roles: s,
    premiumSince: l,
    isPending: c,
    joinedAt: d,
    communicationDisabledUntil: f,
    unusualDMActivityUntil: _,
    flags: p,
    collectibles: h
  } = e, m = P[n];
  if (null == m) returnfalse;
  let g = I.Z.getGuild(n);
  if (null == g) return R.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), false;
  m[r.id] = q({
    userId: r.id,
    nick: i,
    guildId: n,
    avatar: a,
    avatarDecoration: (0, u.FG)(o),
    guildRoles: v.Z.getUnsafeMutableRoles(g.id),
    roles: s,
    premiumSince: l,
    isPending: c,
    joinedAt: d,
    communicationDisabledUntil: f,
    unusualDMActivityUntil: _,
    fullProfileLoadedTimestamp: null == (t = m[r.id]) ? true : t.fullProfileLoadedTimestamp,
    flags: p,
    collectibles: h
  }), Z(n, m[r.id])
}

function ea(e) {
  let {
    guildId: t,
    userId: n,
    roleId: r
  } = e, i = P[t];
  if (null == i) returnfalse;
  let a = I.Z.getGuild(t);
  if (null == a) return R.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), false;
  let o = i[n];
  if (null == o || o.roles.includes(r)) returnfalse;
  o.roles = [...o.roles, r];
  let s = z(v.Z.getUnsafeMutableRoles(a.id), o.roles);
  return i[n] = A({}, o, s), true
}

function eo(e) {
  let {
    guildId: t,
    userId: n,
    roleId: r
  } = e, i = P[t];
  if (null == i) returnfalse;
  let a = I.Z.getGuild(t);
  if (null == a) return R.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), false;
  let o = i[n];
  if (null == o || !o.roles.includes(r)) returnfalse;
  o.roles = o.roles.filter(e => e !== r);
  let s = z(v.Z.getUnsafeMutableRoles(a.id), o.roles);
  return i[n] = A({}, o, s), true
}

function es(e) {
  let {
    guildMember: t,
    guildId: n
  } = e, r = P[n];
  if (null == r) returnfalse;
  let i = I.Z.getGuild(n);
  if (null == i) return R.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), false;
  r[t.user.id] = q({
    userId: t.user.id,
    nick: t.nick,
    guildId: n,
    avatar: t.avatar,
    avatarDecoration: eh(t),
    guildRoles: v.Z.getUnsafeMutableRoles(i.id),
    roles: t.roles,
    premiumSince: t.premium_since,
    isPending: t.pending,
    joinedAt: t.joined_at,
    communicationDisabledUntil: t.communication_disabled_until,
    unusualDMActivityUntil: t.unusual_dm_activity_until,
    flags: t.flags,
    fullProfileLoadedTimestamp: Date.now(),
    collectibles: (0, d.Xm)(t.collectibles)
  }), Z(n, r[t.user.id])
}

function el(e) {
  let t = false;
  for (let n of e.chunks) t = ep(n.guildId, n.members) || t;
  return t
}

function ec(e) {
  return e.members.length > 0 && ep(e.guildId, e.members)
}

function eu(e) {
  let {
    guildId: t,
    members: n
  } = e;
  return ep(t, n.map(e => e.member).filter(g.lm))
}

function ed(e) {
  let {
    guildId: t,
    owners: n
  } = e;
  return ep(t, n)
}

function ef(e) {
  let {
    guildId: t,
    threads: n
  } = e;
  return ep(t, Object.values(n).reduce((e, t) => {
    var n, r, i;
    if (null != t.owner && e.push(t.owner), (null == t || null == (n = t.first_message) ? true : n.message_snapshots) != null) {
      let n = t.first_message.message_snapshots[0];
      (null == (r = n.moderator_report) ? true : r.reported_member) != null && e.push(n.moderator_report.reported_member), (null == (i = n.moderator_report) ? true : i.reporting_member) != null && e.push(n.moderator_report.reporting_member)
    }
    return e
  }, []))
}

function e_(e) {
  let {
    guildId: t,
    addedMembers: n
  } = e;
  return null != n && ep(t, n.map(e => e.member).filter(g.lm))
}

function ep(e, t) {
  let n = P[e];
  if (null == n) returnfalse;
  let r = I.Z.getGuild(e);
  return null == r ? (R.warn("Guild ".concat(e, " not found during batchUpdateGuildMembers.")), false) : (t.forEach(t => {
    var i;
    let a = n[t.user.id];
    n[t.user.id] = q({
      userId: t.user.id,
      nick: t.nick,
      guildId: e,
      avatar: t.avatar,
      avatarDecoration: eh(t),
      guildRoles: v.Z.getUnsafeMutableRoles(r.id),
      roles: t.roles,
      premiumSince: t.premium_since,
      isPending: t.pending,
      joinedAt: t.joined_at,
      communicationDisabledUntil: t.communication_disabled_until,
      flags: t.flags,
      fullProfileLoadedTimestamp: null == a ? true : a.fullProfileLoadedTimestamp,
      unusualDMActivityUntil: null != (i = t.unusual_dm_activity_until) ? i : null == a ? true : a.unusualDMActivityUntil,
      collectibles: (0, d.Xm)(t.collectibles)
    }), Z(e, n[t.user.id])
  }), M++, true)
}

function eh(e) {
  return (0, u.FG)(e.avatar_decoration_data)
}

function em(e) {
  let {
    guildId: t,
    members: n
  } = e;
  return ep(t, n.map(e => {
    let {
      member: t
    } = e;
    return t
  }))
}

function eg(e) {
  let {
    guildId: t,
    user: n
  } = e;
  eb(t, n.id)
}

function eE(e) {
  let {
    guildId: t,
    userId: n
  } = e;
  eb(t, n)
}

function eb(e, t) {
  let n = P[e];
  if (null == n || null == n[t]) returnfalse;
  delete n[t], V(e, t), M++
}

function ey(e) {
  let {
    guild: t
  } = e;
  return ev(t)
}

function eO(e, t) {
  return ev({
    id: e,
    members: t.filter(l.Z).map(e => e.member)
  })
}

function ev(e) {
  let t = e.id;
  t in P || (P[e.id] = {});
  let n = I.Z.getGuild(t);
  if (null == n) returnfalse;
  let r = P[t];
  for (let a of e.members) {
    var i;
    let o = a.user.id,
      s = r[o],
      l = q({
        userId: o,
        nick: a.nick,
        guildId: e.id,
        avatar: a.avatar,
        avatarDecoration: eh(a),
        guildRoles: v.Z.getUnsafeMutableRoles(n.id),
        roles: a.roles,
        premiumSince: a.premium_since,
        isPending: a.pending,
        joinedAt: a.joined_at,
        communicationDisabledUntil: a.communication_disabled_until,
        fullProfileLoadedTimestamp: null == s ? true : s.fullProfileLoadedTimestamp,
        flags: a.flags,
        unusualDMActivityUntil: null != (i = a.unusual_dm_activity_until) ? i : null == s ? true : s.unusualDMActivityUntil,
        collectibles: (0, d.Xm)(a.collectibles)
      });
    r[o] = l, Z(t, l)
  }
  returntrue
}

function eI(e) {
  let {
    guild: t
  } = e;
  delete P[t.id], delete w[t.id], V(t.id)
}

function eT(e) {
  let t = P[e.guildId];
  if (null == t) returnfalse;
  let n = I.Z.getGuild(e.guildId);
  if (null == n) return R.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), false;
  let r = y.default.getId();
  for (let i of b.default.keys(t)) {
    let a = t[i];
    if (null != a.roles && a.roles.length > 0 || null != a.colorString || null != a.hoistRoleId) {
      let o = i === r && "GUILD_ROLE_DELETE" === e.type ? a.roles.filter(t => t !== e.roleId) : a.roles;
      t[i] = q({
        userId: i,
        nick: a.nick,
        guildId: e.guildId,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: v.Z.getUnsafeMutableRoles(n.id),
        roles: o,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        flags: a.flags,
        fullProfileLoadedTimestamp: null == a ? true : a.fullProfileLoadedTimestamp,
        collectibles: a.collectibles
      }), Z(e.guildId, t[i])
    }
  }
}

function eS(e) {
  var t, n, r;
  let {
    guildId: i,
    roles: o,
    addedRoleIds: s,
    removedRoleIds: l,
    flags: c
  } = e, u = y.default.getId(), d = P[i], f = null != d ? d[u] : null;
  if (null == f) returnfalse;
  let _ = I.Z.getGuild(i);
  if (null == _) returnfalse;
  let p = null != (t = G[i]) ? t : {};
  G[i] = {
    added: a().difference(a().union(null != (n = p.added) ? n : [], s), null != l ? l : []),
    removed: a().difference(a().union(null != (r = p.removed) ? r : [], l), null != s ? s : [])
  }, d[u] = q({
    userId: u,
    guildId: i,
    nick: f.nick,
    avatar: f.avatar,
    avatarDecoration: f.avatarDecoration,
    guildRoles: v.Z.getUnsafeMutableRoles(_.id),
    roles: null != o ? o : f.roles,
    premiumSince: f.premiumSince,
    isPending: f.isPending,
    joinedAt: f.joinedAt,
    flags: null != c ? c : f.flags,
    fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp,
    collectibles: f.collectibles
  })
}

function eA(e) {
  let {
    guildId: t
  } = e;
  if (null == t) returnfalse;
  delete G[t]
}

function eC(e) {
  let {
    guildId: t
  } = e, n = P[t];
  if (null == n) returnfalse;
  let r = I.Z.getGuild(t);
  if (null == r) return R.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), false;
  let i = y.default.getId(),
    a = n[i];
  n[i] = q({
    userId: i,
    nick: a.nick,
    guildId: t,
    avatar: a.avatar,
    avatarDecoration: a.avatarDecoration,
    guildRoles: v.Z.getUnsafeMutableRoles(r.id),
    roles: a.roles,
    premiumSince: a.premiumSince,
    isPending: a.isPending,
    joinedAt: a.joinedAt,
    communicationDisabledUntil: a.communicationDisabledUntil,
    fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
    flags: a.flags,
    collectibles: a.collectibles
  })
}

function eN(e, t) {
  if ((null == e ? true : e.members) == null || null == t) returnfalse;
  ev({
    id: t,
    members: Object.entries(e.members).map(t => {
      var n;
      let [r, i] = t, a = null == e || null == (n = e.users) ? true : n[r];
      if (null != a) return N(A({}, i), {
        user: a
      })
    }).filter(e => null != e)
  })
}

function eR(e) {
  let {
    message: t,
    guildId: n
  } = e;
  return eN(t.resolved, n)
}

function eP(e) {
  let t = O.Z.getChannel(e.channel_id);
  eN(e.resolved, null == t ? true : t.guild_id)
}

function ew(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => eP(e))
}

function eD(e) {
  let {
    pins: t
  } = e;
  t.forEach(e => {
    let {
      message: t
    } = e;
    return eP(t)
  })
}

function ex(e) {
  let {
    data: t
  } = e, n = [];
  t.forEach(e => {
    let {
      messages: t
    } = e;
    t.forEach(e => {
      e.forEach(e => {
        n.push(e)
      })
    })
  }), ew({
    messages: n
  })
}

function eL(e) {
  let {
    location: t,
    participants: n
  } = e, r = (0, c.j)(t);
  return null != r && eO(r, n)
}

function ej(e) {
  let t = O.Z.getChannel(e.channelId);
  return eN(e.resolved, null == t ? true : t.guild_id)
}
class ek extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk485386.Z, Chunk314897.default, Chunk160404.Z)
  }
  getMutableAllGuildsAndMembers() {
    return P
  }
  memberOf(e) {
    return a()(P).toPairs().filter(t => {
      let [n, r] = t;
      return null != r[e]
    }).map(e => {
      let [t] = e;
      return t
    }).value()
  }
  getNicknameGuildsMapping(e) {
    let t = {};
    for (let r in P) {
      var n;
      let i = null == (n = P[r][e]) ? true : n.nick;
      null != i && (Object.prototype.hasOwnProperty.call(t, i) || (t[i] = []), t[i].push(r))
    }
    return t
  }
  getNicknames(e) {
    return Object.keys(this.getNicknameGuildsMapping(e))
  }
  isMember(e, t) {
    if (null == e || null == t) returnfalse;
    let n = P[e];
    return null != n && null != n[t]
  }
  isGuestOrLurker(e, t) {
    var n;
    if (null == e || null == t) returnfalse;
    let r = P[e];
    return null != r && (null == (n = r[t]) ? true : n.joinedAt) == null
  }
  isCurrentUserGuest(e) {
    if (null == e) returnfalse;
    let t = y.default.getId(),
      n = P[e];
    if (null == n || null == n[t]) returnfalse;
    let r = n[t].flags;
    return null != r && (0, m.yE)(r, T.q.IS_GUEST)
  }
  getMemberIds(e) {
    if (null == e) return [];
    let t = P[e];
    return null == t ? [] : b.default.keys(t)
  }
  getMembers(e) {
    if (null == e) return [];
    let t = P[e];
    return null == t ? [] : Object.values(t)
  }
  getTrueMember(e, t) {
    let n = P[e];
    return null != n ? n[t] : null
  }
  getMember(e, t) {
    let n = this.getTrueMember(e, t);
    if (null != n && t === y.default.getId() && (h.Z.isViewingRoles(e) || h.Z.isFullServerPreview(e))) {
      var r;
      return null != (r = D[e]) ? r : n
    }
    return n
  }
  getSelfMember(e) {
    return this.getMember(e, y.default.getId())
  }
  getSelfMemberJoinedAt(e) {
    let t = w[e];
    if (null != t) return t;
    let n = this.getSelfMember(e);
    if (null == n || null == n.joinedAt) return null;
    let r = new Date(n.joinedAt);
    return w[e] = r, r
  }
  getCachedSelfMember(e) {
    var t;
    return null != (t = x[e]) ? t : null
  }
  getNick(e, t) {
    if (null == e || null == t) return null;
    let n = this.getMember(e, t);
    return null != n ? n.nick : null
  }
  getCommunicationDisabledUserMap() {
    return L
  }
  getCommunicationDisabledVersion() {
    return k
  }
  getPendingRoleUpdates(e) {
    var t;
    return null != (t = G[e]) ? t : B
  }
  getMemberRoleWithPendingUpdates(e, t) {
    var n, r;
    let i = null != (r = null == (n = this.getMember(e, t)) ? true : n.roles) ? r : [],
      o = G[e];
    return null == o ? i : a().difference(a().union(i, o.added), o.removed)
  }
  getMemberVersion() {
    return M
  }
}
S(ek, "displayName", "GuildMemberStore");
let eM = new ek(Chunk570140.Z, {
  CONNECTION_OPEN: X,
  CONNECTION_OPEN_SUPPLEMENTAL: Q,
  OVERLAY_INITIALIZE: $,
  CACHE_LOADED: ee,
  CACHE_LOADED_LAZY: et,
  GUILD_CREATE: ey,
  GUILD_DELETE: eI,
  GUILD_MEMBER_ADD: ei,
  GUILD_MEMBER_UPDATE: ei,
  GUILD_MEMBER_UPDATE_LOCAL: eS,
  GUILD_MEMBERS_CHUNK_BATCH: el,
  GUILD_MEMBER_REMOVE: eg,
  GUILD_MEMBER_REMOVE_LOCAL: eE,
  THREAD_MEMBER_LIST_UPDATE: eu,
  THREAD_MEMBERS_UPDATE: e_,
  LOAD_ARCHIVED_THREADS_SUCCESS: ed,
  LOAD_FORUM_POSTS: ef,
  GUILD_ROLE_UPDATE: eT,
  GUILD_ROLE_DELETE: eT,
  GUILD_ROLE_MEMBER_REMOVE: eo,
  GUILD_ROLE_MEMBER_ADD: ea,
  GUILD_MEMBER_PROFILE_UPDATE: es,
  IMPERSONATE_UPDATE: eC,
  IMPERSONATE_STOP: eC,
  PASSIVE_UPDATE_V2: ec,
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eA,
  LOCAL_MESSAGES_LOADED: er,
  MESSAGE_CREATE: eR,
  MESSAGE_UPDATE: eR,
  LOAD_MESSAGES_SUCCESS: ew,
  LOAD_MESSAGES_AROUND_SUCCESS: ew,
  LOAD_RECENT_MENTIONS_SUCCESS: ew,
  LOAD_PINNED_MESSAGES_SUCCESS: eD,
  SEARCH_MESSAGES_SUCCESS: ex,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ex,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: em,
  EMBEDDED_ACTIVITY_UPDATE_V2: eL,
  INTERACTION_MODAL_CREATE: ej
})