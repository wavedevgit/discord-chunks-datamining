/** Chunk was on web.js **/
/** chunk id: 271383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O5: () => z,
  V6: () => K,
  ZP: () => eG
}), require("./35282.js"), require("./388685.js"), require("./997841.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk2572 = require("./2572.js"),
  Chunk16609 = require("./16609.js"),
  Chunk864106 = require("./864106.js"),
  Chunk579407 = require("./579407.js"),
  Chunk710845 = require("./710845.js"),
  Chunk131016 = require("./131016.js"),
  Chunk69882 = require("./69882.js"),
  Chunk134049 = require("./134049.js"),
  Chunk160404 = require("./160404.js"),
  Chunk823379 = require("./823379.js"),
  Chunk625137 = require("./625137.js"),
  Chunk709054 = require("./709054.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk372897 = require("./372897.js");

function C(e, t, n) {
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
      C(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = new Chunk710845.Z("GuildMemberStore"),
  w = {},
  D = {},
  x = {},
  L = {},
  j = {},
  M = false,
  k = 0,
  U = 0,
  G = {},
  Z = {},
  F = {
    added: [],
    removed: []
  };

function B(e, t) {
  if (null == t.communicationDisabledUntil || !(0, m.b)(t)) return V(e, t.userId);
  let n = W(e, t.userId);
  j[n] !== t.communicationDisabledUntil && (0, m.b)(t) && (j[n] = t.communicationDisabledUntil, H(n))
}

function V(e, t) {
  if (null != t) {
    let n = W(e, t);
    null != j[n] && H(n), Y(W(e, t))
  } else
    for (let t in j) {
      let n = t;
      z(n) === e && (H(t), Y(n))
    }
}

function H(e) {
  k += 1, G[e] = k
}

function Y(e) {
  K(e) === O.default.getId() && (0, h.l)(z(e)), delete j[e]
}

function W(e, t) {
  let n = [];
  return n[0] = e, n[1] = t, n.join("-")
}

function K(e) {
  return e.split("-")[1]
}

function z(e) {
  return e.split("-")[0]
}

function q(e, t) {
  var n, r;
  let i, o, a, s;
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
    null != t && ((null == s || (0, b.C$)(t, s)) && (s = t), t.color > 0 && (null == i || (0, b.C$)(t, i)) && (i = t), t.hoist && (null == o || (0, b.C$)(t, o)) && (o = t), (null != t.icon || null != t.unicodeEmoji) && (null == a || (0, b.C$)(t, a)) && (a = t))
  }
  return {
    colorString: null != (n = null == i ? true : i.colorString) ? n : null,
    colorStrings: null != (r = null == i ? true : i.colorStrings) ? r : null,
    colorRoleId: null == i ? true : i.id,
    iconRoleId: null == a ? true : a.id,
    hoistRoleId: null == o ? true : o.id,
    highestRoleId: null == s ? true : s.id
  }
}

function Q(e) {
  var t, n;
  let {
    userId: r,
    nick: i,
    guildId: o,
    avatar: s,
    avatarDecoration: l,
    guildRoles: c,
    roles: u,
    premiumSince: d,
    isPending: f,
    joinedAt: p,
    communicationDisabledUntil: _,
    unusualDMActivityUntil: m,
    fullProfileLoadedTimestamp: h,
    flags: E,
    collectibles: b,
    displayNameStyles: v
  } = e, {
    colorString: S,
    colorStrings: I,
    colorRoleId: C,
    iconRoleId: N,
    hoistRoleId: R,
    highestRoleId: D
  } = q(c, u), L = {
    userId: r,
    nick: i,
    guildId: o,
    avatar: s,
    avatarDecoration: l,
    roles: u,
    colorString: S,
    colorStrings: I,
    colorRoleId: C,
    iconRoleId: N,
    hoistRoleId: R,
    highestRoleId: D,
    premiumSince: d,
    isPending: f,
    joinedAt: p,
    communicationDisabledUntil: _,
    unusualDMActivityUntil: m,
    fullProfileLoadedTimestamp: h,
    flags: E,
    collectibles: b,
    displayNameStyles: v
  };
  if ((0, a.yE)(null != (t = L.flags) ? t : 0, T.q.IS_GUEST) && (L.flags = (0, a.pj)(null != (n = L.flags) ? n : 0, T.q.BYPASSES_VERIFICATION)), null == w[o]) return L;
  if (r === O.default.getId())
    if (g.Z.isViewingRoles(o) || g.Z.isFullServerPreview(o)) {
      let e = g.Z.getViewingRoles(o);
      x[o] = P(A({}, L, g.Z.getMemberOptions(o)), {
        roles: null != e ? y.default.keys(e) : []
      })
    } else null != x[o] && delete x[o];
  return L
}

function X(e) {
  M ? M = false : (w = {}, D = {}), j = {}, $(e)
}

function J(e) {
  e.guilds.forEach(e => {
    var t;
    let n = e.id;
    eS({
      id: n,
      members: e.members
    }), null == (t = e.activity_instances) || t.forEach(e => {
      ev(n, e.participants)
    })
  })
}

function $(e) {
  e.guilds.forEach(e => {
    eS(e)
  })
}

function ee(e) {
  let {
    guildMembers: t
  } = e;
  w = A({}, t), D = {}
}

function et(e) {
  let {
    guildMembers: t,
    guilds: n
  } = e;
  M = true, w = A({}, t), D = {}, L = {}, er(n)
}

function en(e) {
  let {
    guilds: t
  } = e;
  er(t)
}

function er(e) {
  for (let t of e)
    if (null != t.member && (null == L[t.id] ? L[t.id] = t.member : L[t.id] = P(A({}, t.member), {
        roles: t.member.roles
      }), null != w[t.id])) {
      let e = w[t.id];
      null != e[t.member.userId] && (e[t.member.userId] = P(A({}, e[t.member.userId]), {
        roles: t.member.roles
      }))
    }
}

function ei(e) {
  var t, n;
  if (null == e.guildId || null == I.Z.getGuild(e.guildId)) returnfalse;
  M = true, w[e.guildId] = null != (t = w[e.guildId]) ? t : {};
  let r = false;
  for (let t of (M = true, w[e.guildId] = null != (n = w[e.guildId]) ? n : {}, e.members)) null == w[e.guildId][t.userId] && (r = true, w[e.guildId][t.userId] = t);
  return r
}

function eo(e) {
  var t;
  let {
    guildId: n,
    user: r,
    nick: i,
    avatar: o,
    avatarDecoration: a,
    roles: s,
    premiumSince: l,
    isPending: c,
    joinedAt: u,
    communicationDisabledUntil: f,
    unusualDMActivityUntil: p,
    flags: _,
    collectibles: m,
    displayNameStyles: h
  } = e, g = w[n];
  if (null == g) returnfalse;
  let E = I.Z.getGuild(n);
  if (null == E) return R.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), false;
  g[r.id] = Q({
    userId: r.id,
    nick: i,
    guildId: n,
    avatar: o,
    avatarDecoration: (0, d.FG)(a),
    guildRoles: S.Z.getUnsafeMutableRoles(E.id),
    roles: s,
    premiumSince: l,
    isPending: c,
    joinedAt: u,
    communicationDisabledUntil: f,
    unusualDMActivityUntil: p,
    fullProfileLoadedTimestamp: null == (t = g[r.id]) ? true : t.fullProfileLoadedTimestamp,
    flags: _,
    collectibles: m,
    displayNameStyles: h
  }), B(n, g[r.id])
}

function ea(e) {
  let {
    guildId: t,
    userId: n,
    roleId: r
  } = e, i = w[t];
  if (null == i) returnfalse;
  let o = I.Z.getGuild(t);
  if (null == o) return R.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), false;
  let a = i[n];
  if (null == a || a.roles.includes(r)) returnfalse;
  a.roles = [...a.roles, r];
  let s = q(S.Z.getUnsafeMutableRoles(o.id), a.roles);
  return i[n] = A({}, a, s), true
}

function es(e) {
  let {
    guildId: t,
    userId: n,
    roleId: r
  } = e, i = w[t];
  if (null == i) returnfalse;
  let o = I.Z.getGuild(t);
  if (null == o) return R.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), false;
  let a = i[n];
  if (null == a || !a.roles.includes(r)) returnfalse;
  a.roles = a.roles.filter(e => e !== r);
  let s = q(S.Z.getUnsafeMutableRoles(o.id), a.roles);
  return i[n] = A({}, a, s), true
}

function el(e) {
  let {
    guildMember: t,
    guildId: n
  } = e, r = w[n];
  if (null == r) returnfalse;
  let i = I.Z.getGuild(n);
  if (null == i) return R.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), false;
  r[t.user.id] = Q({
    userId: t.user.id,
    nick: t.nick,
    guildId: n,
    avatar: t.avatar,
    avatarDecoration: eh(t),
    guildRoles: S.Z.getUnsafeMutableRoles(i.id),
    roles: t.roles,
    premiumSince: t.premium_since,
    isPending: t.pending,
    joinedAt: t.joined_at,
    communicationDisabledUntil: t.communication_disabled_until,
    unusualDMActivityUntil: t.unusual_dm_activity_until,
    flags: t.flags,
    fullProfileLoadedTimestamp: Date.now(),
    collectibles: (0, f.X)(t.collectibles),
    displayNameStyles: (0, _.bN)(t.display_name_styles)
  }), B(n, r[t.user.id])
}

function ec(e) {
  let t = false;
  for (let n of e.chunks) t = em(n.guildId, n.members) || t;
  return t
}

function eu(e) {
  return e.members.length > 0 && em(e.guildId, e.members)
}

function ed(e) {
  let {
    guildId: t,
    members: n
  } = e;
  return em(t, n.map(e => e.member).filter(E.lm))
}

function ef(e) {
  let {
    guildId: t,
    owners: n
  } = e;
  return em(t, n)
}

function ep(e) {
  let {
    guildId: t,
    threads: n
  } = e;
  return em(t, Object.values(n).reduce((e, t) => {
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
  return null != n && em(t, n.map(e => e.member).filter(E.lm))
}

function em(e, t) {
  let n = w[e];
  if (null == n) returnfalse;
  let r = I.Z.getGuild(e);
  return null == r ? (R.warn("Guild ".concat(e, " not found during batchUpdateGuildMembers.")), false) : (t.forEach(t => {
    var i;
    let o = n[t.user.id];
    n[t.user.id] = Q({
      userId: t.user.id,
      nick: t.nick,
      guildId: e,
      avatar: t.avatar,
      avatarDecoration: eh(t),
      guildRoles: S.Z.getUnsafeMutableRoles(r.id),
      roles: t.roles,
      premiumSince: t.premium_since,
      isPending: t.pending,
      joinedAt: t.joined_at,
      communicationDisabledUntil: t.communication_disabled_until,
      flags: t.flags,
      fullProfileLoadedTimestamp: null == o ? true : o.fullProfileLoadedTimestamp,
      unusualDMActivityUntil: null != (i = t.unusual_dm_activity_until) ? i : null == o ? true : o.unusualDMActivityUntil,
      collectibles: (0, f.X)(t.collectibles),
      displayNameStyles: (0, _.bN)(t.display_name_styles)
    }), B(e, n[t.user.id])
  }), U++, true)
}

function eh(e) {
  return (0, d.FG)(e.avatar_decoration_data)
}

function eg(e) {
  let {
    guildId: t,
    members: n
  } = e;
  return em(t, n.map(e => {
    let {
      member: t
    } = e;
    return t
  }))
}

function eE(e) {
  let {
    guildId: t,
    user: n
  } = e;
  ey(t, n.id)
}

function eb(e) {
  let {
    guildId: t,
    userId: n
  } = e;
  ey(t, n)
}

function ey(e, t) {
  let n = w[e];
  if (null == n || null == n[t]) returnfalse;
  delete n[t], V(e, t), U++
}

function eO(e) {
  let {
    guild: t
  } = e;
  return eS(t)
}

function ev(e, t) {
  return eS({
    id: e,
    members: t.filter(c.Z).map(e => e.member)
  })
}

function eS(e) {
  let t = e.id;
  t in w || (w[e.id] = {});
  let n = I.Z.getGuild(t);
  if (null == n) returnfalse;
  let r = w[t];
  for (let o of e.members) {
    var i;
    let a = o.user.id,
      s = r[a],
      l = Q({
        userId: a,
        nick: o.nick,
        guildId: e.id,
        avatar: o.avatar,
        avatarDecoration: eh(o),
        guildRoles: S.Z.getUnsafeMutableRoles(n.id),
        roles: o.roles,
        premiumSince: o.premium_since,
        isPending: o.pending,
        joinedAt: o.joined_at,
        communicationDisabledUntil: o.communication_disabled_until,
        fullProfileLoadedTimestamp: null == s ? true : s.fullProfileLoadedTimestamp,
        flags: o.flags,
        unusualDMActivityUntil: null != (i = o.unusual_dm_activity_until) ? i : null == s ? true : s.unusualDMActivityUntil,
        collectibles: (0, f.X)(o.collectibles),
        displayNameStyles: (0, _.bN)(o.display_name_styles)
      });
    r[a] = l, B(t, l)
  }
  returntrue
}

function eI(e) {
  let {
    guild: t
  } = e;
  delete w[t.id], delete D[t.id], V(t.id)
}

function eT(e) {
  let t = w[e.guildId];
  if (null == t) returnfalse;
  let n = I.Z.getGuild(e.guildId);
  if (null == n) return R.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), false;
  let r = O.default.getId();
  for (let i of y.default.keys(t)) {
    let o = t[i];
    if (null != o.roles && o.roles.length > 0 || null != o.colorString || null != o.hoistRoleId) {
      let a = i === r && "GUILD_ROLE_DELETE" === e.type ? o.roles.filter(t => t !== e.roleId) : o.roles;
      t[i] = Q({
        userId: i,
        nick: o.nick,
        guildId: e.guildId,
        avatar: o.avatar,
        avatarDecoration: o.avatarDecoration,
        guildRoles: S.Z.getUnsafeMutableRoles(n.id),
        roles: a,
        premiumSince: o.premiumSince,
        isPending: o.isPending,
        joinedAt: o.joinedAt,
        flags: o.flags,
        fullProfileLoadedTimestamp: null == o ? true : o.fullProfileLoadedTimestamp,
        collectibles: o.collectibles,
        displayNameStyles: o.displayNameStyles
      }), B(e.guildId, t[i])
    }
  }
}

function eC(e) {
  var t, n, r;
  let {
    guildId: i,
    roles: a,
    addedRoleIds: s,
    removedRoleIds: l,
    flags: c
  } = e, u = O.default.getId(), d = w[i], f = null != d ? d[u] : null;
  if (null == f) returnfalse;
  let p = I.Z.getGuild(i);
  if (null == p) returnfalse;
  let _ = null != (t = Z[i]) ? t : {};
  Z[i] = {
    added: o().difference(o().union(null != (n = _.added) ? n : [], s), null != l ? l : []),
    removed: o().difference(o().union(null != (r = _.removed) ? r : [], l), null != s ? s : [])
  }, d[u] = Q({
    userId: u,
    guildId: i,
    nick: f.nick,
    avatar: f.avatar,
    avatarDecoration: f.avatarDecoration,
    guildRoles: S.Z.getUnsafeMutableRoles(p.id),
    roles: null != a ? a : f.roles,
    premiumSince: f.premiumSince,
    isPending: f.isPending,
    joinedAt: f.joinedAt,
    flags: null != c ? c : f.flags,
    fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp,
    collectibles: f.collectibles,
    displayNameStyles: f.displayNameStyles
  })
}

function eA(e) {
  let {
    guildId: t
  } = e;
  if (null == t) returnfalse;
  delete Z[t]
}

function eN(e) {
  let {
    guildId: t
  } = e, n = w[t];
  if (null == n) returnfalse;
  let r = I.Z.getGuild(t);
  if (null == r) return R.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), false;
  let i = O.default.getId(),
    o = n[i];
  n[i] = Q({
    userId: i,
    nick: o.nick,
    guildId: t,
    avatar: o.avatar,
    avatarDecoration: o.avatarDecoration,
    guildRoles: S.Z.getUnsafeMutableRoles(r.id),
    roles: o.roles,
    premiumSince: o.premiumSince,
    isPending: o.isPending,
    joinedAt: o.joinedAt,
    communicationDisabledUntil: o.communicationDisabledUntil,
    fullProfileLoadedTimestamp: o.fullProfileLoadedTimestamp,
    flags: o.flags,
    collectibles: o.collectibles,
    displayNameStyles: o.displayNameStyles
  })
}

function eP(e, t) {
  if ((null == e ? true : e.members) == null || null == t) returnfalse;
  eS({
    id: t,
    members: Object.entries(e.members).map(t => {
      var n;
      let [r, i] = t, o = null == e || null == (n = e.users) ? true : n[r];
      if (null != o) return P(A({}, i), {
        user: o
      })
    }).filter(e => null != e)
  })
}

function eR(e, t) {
  var n;
  let r = false;
  return null == (n = e.message_snapshots) || n.forEach(t => {
    var n, i;
    eP(null == (n = t.message) ? true : n.resolved, null == (i = e.message_reference) ? true : i.guild_id) && (r = true)
  }), eP(e.resolved, t) || r
}

function ew(e) {
  let {
    message: t,
    guildId: n
  } = e;
  return eR(t, n)
}

function eD(e) {
  let t = v.Z.getChannel(e.channel_id);
  eR(e, null == t ? true : t.guild_id)
}

function ex(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => eD(e))
}

function eL(e) {
  let {
    pins: t
  } = e;
  t.forEach(e => {
    let {
      message: t
    } = e;
    return eD(t)
  })
}

function ej(e) {
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
  }), ex({
    messages: n
  })
}

function eM(e) {
  let {
    location: t,
    participants: n
  } = e, r = (0, u.j)(t);
  return null != r && ev(r, n)
}

function ek(e) {
  let t = v.Z.getChannel(e.channelId);
  return eP(e.resolved, null == t ? true : t.guild_id)
}
class eU extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk485386.Z, Chunk430824.Z, Chunk160404.Z)
  }
  getMutableAllGuildsAndMembers() {
    return w
  }
  memberOf(e) {
    return o()(w).toPairs().filter(t => {
      let [n, r] = t;
      return null != r[e]
    }).map(e => {
      let [t] = e;
      return t
    }).value()
  }
  getNicknameGuildsMapping(e) {
    let t = {};
    for (let r in w) {
      var n;
      let i = null == (n = w[r][e]) ? true : n.nick;
      null != i && (Object.prototype.hasOwnProperty.call(t, i) || (t[i] = []), t[i].push(r))
    }
    return t
  }
  getNicknames(e) {
    return Object.keys(this.getNicknameGuildsMapping(e))
  }
  isMember(e, t) {
    if (null == e || null == t) returnfalse;
    let n = w[e];
    return null != n && null != n[t]
  }
  isGuestOrLurker(e, t) {
    var n;
    if (null == e || null == t) returnfalse;
    let r = w[e];
    return null != r && (null == (n = r[t]) ? true : n.joinedAt) == null
  }
  isCurrentUserGuest(e) {
    if (null == e) returnfalse;
    let t = O.default.getId(),
      n = w[e];
    if (null == n || null == n[t]) returnfalse;
    let r = n[t].flags;
    return null != r && (0, a.yE)(r, T.q.IS_GUEST)
  }
  getMemberIds(e) {
    if (null == e) return [];
    let t = w[e];
    return null == t ? [] : y.default.keys(t)
  }
  getMembers(e) {
    if (null == e) return [];
    let t = w[e];
    return null == t ? [] : Object.values(t)
  }
  getTrueMember(e, t) {
    let n = w[e];
    return null != n ? n[t] : null
  }
  getMember(e, t) {
    let n = this.getTrueMember(e, t);
    if (null != n && t === O.default.getId() && (g.Z.isViewingRoles(e) || g.Z.isFullServerPreview(e))) {
      var r;
      return null != (r = x[e]) ? r : n
    }
    return n
  }
  getSelfMember(e) {
    return this.getMember(e, O.default.getId())
  }
  getSelfMemberJoinedAt(e) {
    let t = D[e];
    if (null != t) return t;
    let n = this.getSelfMember(e);
    if (null == n || null == n.joinedAt) return null;
    let r = new Date(n.joinedAt);
    return D[e] = r, r
  }
  getCachedSelfMember(e) {
    var t;
    return null != (t = L[e]) ? t : null
  }
  getNick(e, t) {
    if (null == e || null == t) return null;
    let n = this.getMember(e, t);
    return null != n ? n.nick : null
  }
  getCommunicationDisabledUserMap() {
    return j
  }
  getCommunicationDisabledVersion() {
    return k
  }
  getPendingRoleUpdates(e) {
    var t;
    return null != (t = Z[e]) ? t : F
  }
  getMemberRoleWithPendingUpdates(e, t) {
    var n, r;
    let i = null != (r = null == (n = this.getMember(e, t)) ? true : n.roles) ? r : [],
      a = Z[e];
    return null == a ? i : o().difference(o().union(i, a.added), a.removed)
  }
  getMemberVersion() {
    return U
  }
}
C(eU, "displayName", "GuildMemberStore");
let eG = new eU(Chunk570140.Z, {
  CONNECTION_OPEN: X,
  CONNECTION_OPEN_SUPPLEMENTAL: J,
  OVERLAY_INITIALIZE: ee,
  CACHE_LOADED: et,
  CACHE_LOADED_LAZY: en,
  GUILD_CREATE: eO,
  GUILD_DELETE: eI,
  GUILD_MEMBER_ADD: eo,
  GUILD_MEMBER_UPDATE: eo,
  GUILD_MEMBER_UPDATE_LOCAL: eC,
  GUILD_MEMBERS_CHUNK_BATCH: ec,
  GUILD_MEMBER_REMOVE: eE,
  GUILD_MEMBER_REMOVE_LOCAL: eb,
  THREAD_MEMBER_LIST_UPDATE: ed,
  THREAD_MEMBERS_UPDATE: e_,
  LOAD_ARCHIVED_THREADS_SUCCESS: ef,
  LOAD_FORUM_POSTS: ep,
  GUILD_ROLE_UPDATE: eT,
  GUILD_ROLE_DELETE: eT,
  GUILD_ROLE_MEMBER_REMOVE: es,
  GUILD_ROLE_MEMBER_ADD: ea,
  GUILD_MEMBER_PROFILE_UPDATE: el,
  IMPERSONATE_UPDATE: eN,
  IMPERSONATE_STOP: eN,
  PASSIVE_UPDATE_V2: eu,
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eA,
  LOCAL_MESSAGES_LOADED: ei,
  MESSAGE_CREATE: ew,
  MESSAGE_UPDATE: ew,
  LOAD_MESSAGES_SUCCESS: ex,
  LOAD_MESSAGES_AROUND_SUCCESS: ex,
  LOAD_RECENT_MENTIONS_SUCCESS: ex,
  LOAD_PINNED_MESSAGES_SUCCESS: eL,
  SEARCH_MESSAGES_SUCCESS: ej,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: ej,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eg,
  EMBEDDED_ACTIVITY_UPDATE_V2: eM,
  INTERACTION_MODAL_CREATE: ek
})