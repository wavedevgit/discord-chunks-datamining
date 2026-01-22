/** Chunk was on web.js **/
/** chunk id: 696451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eG,
  DL: () => q,
  vg: () => z
}), require("./747238.js"), require("./896048.js"), require("./938796.js"), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk807605 = require("./807605.js"),
  Chunk969151 = require("./969151.js"),
  Chunk507698 = require("./507698.js"),
  Chunk628856 = require("./628856.js"),
  Chunk626584 = require("./626584.js"),
  Chunk945096 = require("./945096.js"),
  Chunk316031 = require("./316031.js"),
  Chunk264388 = require("./264388.js"),
  Chunk164956 = require("./164956.js"),
  Chunk403362 = require("./403362.js"),
  Chunk7864 = require("./7864.js"),
  Chunk661191 = require("./661191.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk340837 = require("./340837.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
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

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = new Chunk626584.A("GuildMemberStore"),
  P = {},
  D = {},
  x = {},
  L = {},
  j = {},
  M = false,
  k = 0,
  U = 0,
  G = {},
  V = {},
  F = {
    added: [],
    removed: []
  };

function B(e, t) {
  if (null == t.communicationDisabledUntil || !(0, h.Z)(t)) return H(e, t.userId);
  let n = K(e, t.userId);
  j[n] !== t.communicationDisabledUntil && (0, h.Z)(t) && (j[n] = t.communicationDisabledUntil, Y(n))
}

function H(e, t) {
  if (null != t) {
    let n = K(e, t);
    null != j[n] && Y(n), W(K(e, t))
  } else
    for (let t in j) {
      let n = t;
      q(n) === e && (Y(t), W(n))
    }
}

function Y(e) {
  k += 1, G[e] = k
}

function W(e) {
  z(e) === O.default.getId() && (0, m.G)(q(e)), delete j[e]
}

function K(e, t) {
  let n = [];
  return n[0] = e, n[1] = t, n.join("-")
}

function z(e) {
  return e.split("-")[1]
}

function q(e) {
  return e.split("-")[0]
}

function X(e, t) {
  var n, r;
  let i, a, s, o;
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
    null != t && ((null == o || (0, b.zA)(t, o)) && (o = t), t.color > 0 && (null == i || (0, b.zA)(t, i)) && (i = t), t.hoist && (null == a || (0, b.zA)(t, a)) && (a = t), (null != t.icon || null != t.unicodeEmoji) && (null == s || (0, b.zA)(t, s)) && (s = t))
  }
  return {
    colorString: null != (n = null == i ? true : i.colorString) ? n : null,
    colorStrings: null != (r = null == i ? true : i.colorStrings) ? r : null,
    colorRoleId: null == i ? true : i.id,
    iconRoleId: null == s ? true : s.id,
    hoistRoleId: null == a ? true : a.id,
    highestRoleId: null == o ? true : o.id
  }
}

function Z(e) {
  var t, n;
  let {
    userId: r,
    nick: i,
    guildId: a,
    avatar: o,
    avatarDecoration: l,
    guildRoles: c,
    roles: u,
    premiumSince: d,
    isPending: f,
    joinedAt: p,
    communicationDisabledUntil: _,
    unusualDMActivityUntil: h,
    fullProfileLoadedTimestamp: m,
    flags: E,
    collectibles: b,
    displayNameStyles: A
  } = e, {
    colorString: v,
    colorStrings: S,
    colorRoleId: T,
    iconRoleId: N,
    hoistRoleId: w,
    highestRoleId: D
  } = X(c, u), L = {
    userId: r,
    nick: i,
    guildId: a,
    avatar: o,
    avatarDecoration: l,
    roles: u,
    colorString: v,
    colorStrings: S,
    colorRoleId: T,
    iconRoleId: N,
    hoistRoleId: w,
    highestRoleId: D,
    premiumSince: d,
    isPending: f,
    joinedAt: p,
    communicationDisabledUntil: _,
    unusualDMActivityUntil: h,
    fullProfileLoadedTimestamp: m,
    flags: E,
    collectibles: b,
    displayNameStyles: A
  };
  if ((0, s.Lt)(null != (t = L.flags) ? t : 0, I.D.IS_GUEST) && (L.flags = (0, s.UI)(null != (n = L.flags) ? n : 0, I.D.BYPASSES_VERIFICATION)), null == P[a]) return L;
  if (r === O.default.getId())
    if (g.A.isViewingRoles(a) || g.A.isFullServerPreview(a)) {
      let e = g.A.getViewingRoles(a);
      x[a] = R(C({}, L, g.A.getMemberOptions(a)), {
        roles: null != e ? y.default.keys(e) : []
      })
    } else null != x[a] && delete x[a];
  return L
}

function Q(e) {
  M ? M = false : (P = {}, D = {}), j = {}, J(e)
}

function $(e) {
  e.guilds.forEach(e => {
    var t;
    let n = e.id;
    ev({
      id: n,
      members: e.members
    }), null == (t = e.activity_instances) || t.forEach(e => {
      eA(n, e.participants)
    })
  })
}

function J(e) {
  e.guilds.forEach(e => {
    ev(e)
  })
}

function ee(e) {
  let {
    guildMembers: t
  } = e;
  P = C({}, t), D = {}
}

function et(e) {
  let {
    guildMembers: t,
    guilds: n
  } = e;
  M = true, P = C({}, t), D = {}, L = {}, er(n)
}

function en(e) {
  let {
    guilds: t
  } = e;
  er(t)
}

function er(e) {
  for (let t of e)
    if (null != t.member && (null == L[t.id] ? L[t.id] = t.member : L[t.id] = R(C({}, t.member), {
        roles: t.member.roles
      }), null != P[t.id])) {
      let e = P[t.id];
      null != e[t.member.userId] && (e[t.member.userId] = R(C({}, e[t.member.userId]), {
        roles: t.member.roles
      }))
    }
}

function ei(e) {
  var t, n;
  if (null == e.guildId || null == S.A.getGuild(e.guildId)) returnfalse;
  M = true, P[e.guildId] = null != (t = P[e.guildId]) ? t : {};
  let r = false;
  for (let t of (M = true, P[e.guildId] = null != (n = P[e.guildId]) ? n : {}, e.members)) null == P[e.guildId][t.userId] && (r = true, P[e.guildId][t.userId] = t);
  return r
}

function ea(e) {
  var t;
  let {
    guildId: n,
    user: r,
    nick: i,
    avatar: a,
    avatarDecoration: s,
    roles: o,
    premiumSince: l,
    isPending: c,
    joinedAt: u,
    communicationDisabledUntil: f,
    unusualDMActivityUntil: p,
    flags: _,
    collectibles: h,
    displayNameStyles: m
  } = e, g = P[n];
  if (null == g) returnfalse;
  let E = S.A.getGuild(n);
  if (null == E) return w.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), false;
  g[r.id] = Z({
    userId: r.id,
    nick: i,
    guildId: n,
    avatar: a,
    avatarDecoration: (0, d.Xq)(s),
    guildRoles: v.A.getUnsafeMutableRoles(E.id),
    roles: o,
    premiumSince: l,
    isPending: c,
    joinedAt: u,
    communicationDisabledUntil: f,
    unusualDMActivityUntil: p,
    fullProfileLoadedTimestamp: null == (t = g[r.id]) ? true : t.fullProfileLoadedTimestamp,
    flags: _,
    collectibles: h,
    displayNameStyles: m
  }), B(n, g[r.id])
}

function es(e) {
  let {
    guildId: t,
    userId: n,
    roleId: r
  } = e, i = P[t];
  if (null == i) returnfalse;
  let a = S.A.getGuild(t);
  if (null == a) return w.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), false;
  let s = i[n];
  if (null == s || s.roles.includes(r)) returnfalse;
  s.roles = [...s.roles, r];
  let o = X(v.A.getUnsafeMutableRoles(a.id), s.roles);
  return i[n] = C({}, s, o), true
}

function eo(e) {
  let {
    guildId: t,
    userId: n,
    roleId: r
  } = e, i = P[t];
  if (null == i) returnfalse;
  let a = S.A.getGuild(t);
  if (null == a) return w.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), false;
  let s = i[n];
  if (null == s || !s.roles.includes(r)) returnfalse;
  s.roles = s.roles.filter(e => e !== r);
  let o = X(v.A.getUnsafeMutableRoles(a.id), s.roles);
  return i[n] = C({}, s, o), true
}

function el(e) {
  let {
    guildMember: t,
    guildId: n
  } = e, r = P[n];
  if (null == r) returnfalse;
  let i = S.A.getGuild(n);
  if (null == i) return w.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), false;
  r[t.user.id] = Z({
    userId: t.user.id,
    nick: t.nick,
    guildId: n,
    avatar: t.avatar,
    avatarDecoration: em(t),
    guildRoles: v.A.getUnsafeMutableRoles(i.id),
    roles: t.roles,
    premiumSince: t.premium_since,
    isPending: t.pending,
    joinedAt: t.joined_at,
    communicationDisabledUntil: t.communication_disabled_until,
    unusualDMActivityUntil: t.unusual_dm_activity_until,
    flags: t.flags,
    fullProfileLoadedTimestamp: Date.now(),
    collectibles: (0, f.t)(t.collectibles),
    displayNameStyles: (0, _.mT)(t.display_name_styles)
  }), B(n, r[t.user.id])
}

function ec(e) {
  let t = false;
  for (let n of e.chunks) t = eh(n.guildId, n.members) || t;
  return t
}

function eu(e) {
  return e.members.length > 0 && eh(e.guildId, e.members)
}

function ed(e) {
  let {
    guildId: t,
    members: n
  } = e;
  return eh(t, n.map(e => e.member).filter(E.Vq))
}

function ef(e) {
  let {
    guildId: t,
    owners: n
  } = e;
  return eh(t, n)
}

function ep(e) {
  let {
    guildId: t,
    threads: n
  } = e;
  return eh(t, Object.values(n).reduce((e, t) => {
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
  return null != n && eh(t, n.map(e => e.member).filter(E.Vq))
}

function eh(e, t) {
  let n = P[e];
  if (null == n) returnfalse;
  let r = S.A.getGuild(e);
  return null == r ? (w.warn("Guild ".concat(e, " not found during batchUpdateGuildMembers.")), false) : (t.forEach(t => {
    var i;
    let a = n[t.user.id];
    n[t.user.id] = Z({
      userId: t.user.id,
      nick: t.nick,
      guildId: e,
      avatar: t.avatar,
      avatarDecoration: em(t),
      guildRoles: v.A.getUnsafeMutableRoles(r.id),
      roles: t.roles,
      premiumSince: t.premium_since,
      isPending: t.pending,
      joinedAt: t.joined_at,
      communicationDisabledUntil: t.communication_disabled_until,
      flags: t.flags,
      fullProfileLoadedTimestamp: null == a ? true : a.fullProfileLoadedTimestamp,
      unusualDMActivityUntil: null != (i = t.unusual_dm_activity_until) ? i : null == a ? true : a.unusualDMActivityUntil,
      collectibles: (0, f.t)(t.collectibles),
      displayNameStyles: (0, _.mT)(t.display_name_styles)
    }), B(e, n[t.user.id])
  }), U++, true)
}

function em(e) {
  return (0, d.Xq)(e.avatar_decoration_data)
}

function eg(e) {
  let {
    guildId: t,
    members: n
  } = e;
  return eh(t, n.map(e => {
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
  let n = P[e];
  if (null == n || null == n[t]) returnfalse;
  delete n[t], H(e, t), U++
}

function eO(e) {
  let {
    guild: t
  } = e;
  return ev(t)
}

function eA(e, t) {
  return ev({
    id: e,
    members: t.filter(c.A).map(e => e.member)
  })
}

function ev(e) {
  let t = e.id;
  t in P || (P[e.id] = {});
  let n = S.A.getGuild(t);
  if (null == n) returnfalse;
  let r = P[t];
  for (let a of e.members) {
    var i;
    let s = a.user.id,
      o = r[s],
      l = Z({
        userId: s,
        nick: a.nick,
        guildId: e.id,
        avatar: a.avatar,
        avatarDecoration: em(a),
        guildRoles: v.A.getUnsafeMutableRoles(n.id),
        roles: a.roles,
        premiumSince: a.premium_since,
        isPending: a.pending,
        joinedAt: a.joined_at,
        communicationDisabledUntil: a.communication_disabled_until,
        fullProfileLoadedTimestamp: null == o ? true : o.fullProfileLoadedTimestamp,
        flags: a.flags,
        unusualDMActivityUntil: null != (i = a.unusual_dm_activity_until) ? i : null == o ? true : o.unusualDMActivityUntil,
        collectibles: (0, f.t)(a.collectibles),
        displayNameStyles: (0, _.mT)(a.display_name_styles)
      });
    r[s] = l, B(t, l)
  }
  returntrue
}

function eS(e) {
  let {
    guild: t
  } = e;
  delete P[t.id], delete D[t.id], H(t.id)
}

function eI(e) {
  let t = P[e.guildId];
  if (null == t) returnfalse;
  let n = S.A.getGuild(e.guildId);
  if (null == n) return w.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), false;
  let r = O.default.getId();
  for (let i of y.default.keys(t)) {
    let a = t[i];
    if (null != a.roles && a.roles.length > 0 || null != a.colorString || null != a.hoistRoleId) {
      let s = i === r && "GUILD_ROLE_DELETE" === e.type ? a.roles.filter(t => t !== e.roleId) : a.roles;
      t[i] = Z({
        userId: i,
        nick: a.nick,
        guildId: e.guildId,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: v.A.getUnsafeMutableRoles(n.id),
        roles: s,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        flags: a.flags,
        fullProfileLoadedTimestamp: null == a ? true : a.fullProfileLoadedTimestamp,
        collectibles: a.collectibles,
        displayNameStyles: a.displayNameStyles
      }), B(e.guildId, t[i])
    }
  }
}

function eT(e) {
  var t, n, r;
  let {
    guildId: i,
    roles: s,
    addedRoleIds: o,
    removedRoleIds: l,
    flags: c
  } = e, u = O.default.getId(), d = P[i], f = null != d ? d[u] : null;
  if (null == f) returnfalse;
  let p = S.A.getGuild(i);
  if (null == p) returnfalse;
  let _ = null != (t = V[i]) ? t : {};
  V[i] = {
    added: a().difference(a().union(null != (n = _.added) ? n : [], o), null != l ? l : []),
    removed: a().difference(a().union(null != (r = _.removed) ? r : [], l), null != o ? o : [])
  }, d[u] = Z({
    userId: u,
    guildId: i,
    nick: f.nick,
    avatar: f.avatar,
    avatarDecoration: f.avatarDecoration,
    guildRoles: v.A.getUnsafeMutableRoles(p.id),
    roles: null != s ? s : f.roles,
    premiumSince: f.premiumSince,
    isPending: f.isPending,
    joinedAt: f.joinedAt,
    flags: null != c ? c : f.flags,
    fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp,
    collectibles: f.collectibles,
    displayNameStyles: f.displayNameStyles
  })
}

function eC(e) {
  let {
    guildId: t
  } = e;
  if (null == t) returnfalse;
  delete V[t]
}

function eN(e) {
  let {
    guildId: t
  } = e, n = P[t];
  if (null == n) returnfalse;
  let r = S.A.getGuild(t);
  if (null == r) return w.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), false;
  let i = O.default.getId(),
    a = n[i];
  n[i] = Z({
    userId: i,
    nick: a.nick,
    guildId: t,
    avatar: a.avatar,
    avatarDecoration: a.avatarDecoration,
    guildRoles: v.A.getUnsafeMutableRoles(r.id),
    roles: a.roles,
    premiumSince: a.premiumSince,
    isPending: a.isPending,
    joinedAt: a.joinedAt,
    communicationDisabledUntil: a.communicationDisabledUntil,
    fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
    flags: a.flags,
    collectibles: a.collectibles,
    displayNameStyles: a.displayNameStyles
  })
}

function eR(e, t) {
  if ((null == e ? true : e.members) == null || null == t) returnfalse;
  ev({
    id: t,
    members: Object.entries(e.members).map(t => {
      var n;
      let [r, i] = t, a = null == e || null == (n = e.users) ? true : n[r];
      if (null != a) return R(C({}, i), {
        user: a
      })
    }).filter(e => null != e)
  })
}

function ew(e, t) {
  var n;
  let r = false;
  return null == (n = e.message_snapshots) || n.forEach(t => {
    var n, i;
    eR(null == (n = t.message) ? true : n.resolved, null == (i = e.message_reference) ? true : i.guild_id) && (r = true)
  }), eR(e.resolved, t) || r
}

function eP(e) {
  let {
    message: t,
    guildId: n
  } = e;
  return ew(t, n)
}

function eD(e) {
  let t = A.A.getChannel(e.channel_id);
  ew(e, null == t ? true : t.guild_id)
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
  } = e, r = (0, u.D)(t);
  return null != r && eA(r, n)
}

function ek(e) {
  let t = A.A.getChannel(e.channelId);
  return eR(e.resolved, null == t ? true : t.guild_id)
}
class eU extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(O.default, A.A, v.A, S.A, g.A)
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
    let t = O.default.getId(),
      n = P[e];
    if (null == n || null == n[t]) returnfalse;
    let r = n[t].flags;
    return null != r && (0, s.Lt)(r, I.D.IS_GUEST)
  }
  getMemberIds(e) {
    if (null == e) return [];
    let t = P[e];
    return null == t ? [] : y.default.keys(t)
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
    if (null != n && t === O.default.getId() && (g.A.isViewingRoles(e) || g.A.isFullServerPreview(e))) {
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
    return null != (t = V[e]) ? t : F
  }
  getMemberRoleWithPendingUpdates(e, t) {
    var n, r;
    let i = null != (n = null == (r = this.getMember(e, t)) ? true : r.roles) ? n : [],
      s = V[e];
    return null == s ? i : a().difference(a().union(i, s.added), s.removed)
  }
  getMemberVersion() {
    return U
  }
}
T(eU, "displayName", "GuildMemberStore");
let eG = new eU(Chunk73153.h, {
  CONNECTION_OPEN: Q,
  CONNECTION_OPEN_SUPPLEMENTAL: $,
  OVERLAY_INITIALIZE: ee,
  CACHE_LOADED: et,
  CACHE_LOADED_LAZY: en,
  GUILD_CREATE: eO,
  GUILD_DELETE: eS,
  GUILD_MEMBER_ADD: ea,
  GUILD_MEMBER_UPDATE: ea,
  GUILD_MEMBER_UPDATE_LOCAL: eT,
  GUILD_MEMBERS_CHUNK_BATCH: ec,
  GUILD_MEMBER_REMOVE: eE,
  GUILD_MEMBER_REMOVE_LOCAL: eb,
  THREAD_MEMBER_LIST_UPDATE: ed,
  THREAD_MEMBERS_UPDATE: e_,
  LOAD_ARCHIVED_THREADS_SUCCESS: ef,
  LOAD_FORUM_POSTS: ep,
  GUILD_ROLE_UPDATE: eI,
  GUILD_ROLE_DELETE: eI,
  GUILD_ROLE_MEMBER_REMOVE: eo,
  GUILD_ROLE_MEMBER_ADD: es,
  GUILD_MEMBER_PROFILE_UPDATE: el,
  IMPERSONATE_UPDATE: eN,
  IMPERSONATE_STOP: eN,
  PASSIVE_UPDATE_V2: eu,
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eC,
  LOCAL_MESSAGES_LOADED: ei,
  MESSAGE_CREATE: eP,
  MESSAGE_UPDATE: eP,
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