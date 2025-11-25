/** Chunk was on web.js **/
/** chunk id: 271383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O5: () => z,
  V6: () => K,
  ZP: () => eG
}), require("./35282.js"), require("./388685.js"), require("./997841.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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

function A(e, t, n) {
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
      A(e, t, n[t])
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
let P = new Chunk710845.Z("GuildMemberStore"),
  D = {},
  w = {},
  L = {},
  x = {},
  M = {},
  k = false,
  j = 0,
  U = 0,
  G = {},
  B = {},
  Z = {
    added: [],
    removed: []
  };

function F(e, t) {
  if (null == t.communicationDisabledUntil || !(0, h.b)(t)) return V(e, t.userId);
  let n = Y(e, t.userId);
  M[n] !== t.communicationDisabledUntil && (0, h.b)(t) && (M[n] = t.communicationDisabledUntil, H(n))
}

function V(e, t) {
  if (null != t) {
    let n = Y(e, t);
    null != M[n] && H(n), W(Y(e, t))
  } else
    for (let t in M) {
      let n = t;
      z(n) === e && (H(t), W(n))
    }
}

function H(e) {
  j += 1, G[e] = j
}

function W(e) {
  K(e) === O.default.getId() && (0, m.l)(z(e)), delete M[e]
}

function Y(e, t) {
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
    null != t && ((null == s || (0, b.C$)(t, s)) && (s = t), t.color > 0 && (null == i || (0, b.C$)(t, i)) && (i = t), t.hoist && (null == a || (0, b.C$)(t, a)) && (a = t), (null != t.icon || null != t.unicodeEmoji) && (null == o || (0, b.C$)(t, o)) && (o = t))
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

function X(e) {
  var t, n;
  let {
    userId: r,
    nick: i,
    guildId: a,
    avatar: s,
    avatarDecoration: l,
    guildRoles: c,
    roles: u,
    premiumSince: d,
    isPending: f,
    joinedAt: _,
    communicationDisabledUntil: p,
    unusualDMActivityUntil: h,
    fullProfileLoadedTimestamp: m,
    flags: E,
    collectibles: b,
    displayNameStyles: v
  } = e, {
    colorString: I,
    colorStrings: T,
    colorRoleId: A,
    iconRoleId: N,
    hoistRoleId: P,
    highestRoleId: w
  } = q(c, u), x = {
    userId: r,
    nick: i,
    guildId: a,
    avatar: s,
    avatarDecoration: l,
    roles: u,
    colorString: I,
    colorStrings: T,
    colorRoleId: A,
    iconRoleId: N,
    hoistRoleId: P,
    highestRoleId: w,
    premiumSince: d,
    isPending: f,
    joinedAt: _,
    communicationDisabledUntil: p,
    unusualDMActivityUntil: h,
    fullProfileLoadedTimestamp: m,
    flags: E,
    collectibles: b,
    displayNameStyles: v
  };
  if ((0, o.yE)(null != (t = x.flags) ? t : 0, S.q.IS_GUEST) && (x.flags = (0, o.pj)(null != (n = x.flags) ? n : 0, S.q.BYPASSES_VERIFICATION)), null == D[a]) return x;
  if (r === O.default.getId())
    if (g.Z.isViewingRoles(a) || g.Z.isFullServerPreview(a)) {
      let e = g.Z.getViewingRoles(a);
      L[a] = R(C({}, x, g.Z.getMemberOptions(a)), {
        roles: null != e ? y.default.keys(e) : []
      })
    } else null != L[a] && delete L[a];
  return x
}

function Q(e) {
  k ? k = false : (D = {}, w = {}), M = {}, $(e)
}

function J(e) {
  e.guilds.forEach(e => {
    var t;
    let n = e.id;
    eI({
      id: n,
      members: e.members
    }), null == (t = e.activity_instances) || t.forEach(e => {
      ev(n, e.participants)
    })
  })
}

function $(e) {
  e.guilds.forEach(e => {
    eI(e)
  })
}

function ee(e) {
  let {
    guildMembers: t
  } = e;
  D = C({}, t), w = {}
}

function et(e) {
  let {
    guildMembers: t,
    guilds: n
  } = e;
  k = true, D = C({}, t), w = {}, x = {}, er(n)
}

function en(e) {
  let {
    guilds: t
  } = e;
  er(t)
}

function er(e) {
  for (let t of e)
    if (null != t.member && (null == x[t.id] ? x[t.id] = t.member : x[t.id] = R(C({}, t.member), {
        roles: t.member.roles
      }), null != D[t.id])) {
      let e = D[t.id];
      null != e[t.member.userId] && (e[t.member.userId] = R(C({}, e[t.member.userId]), {
        roles: t.member.roles
      }))
    }
}

function ei(e) {
  var t, n;
  if (null == e.guildId || null == T.Z.getGuild(e.guildId)) returnfalse;
  k = true, D[e.guildId] = null != (t = D[e.guildId]) ? t : {};
  let r = false;
  for (let t of (k = true, D[e.guildId] = null != (n = D[e.guildId]) ? n : {}, e.members)) null == D[e.guildId][t.userId] && (r = true, D[e.guildId][t.userId] = t);
  return r
}

function ea(e) {
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
    joinedAt: u,
    communicationDisabledUntil: f,
    unusualDMActivityUntil: _,
    flags: p,
    collectibles: h,
    displayNameStyles: m
  } = e, g = D[n];
  if (null == g) returnfalse;
  let E = T.Z.getGuild(n);
  if (null == E) return P.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), false;
  g[r.id] = X({
    userId: r.id,
    nick: i,
    guildId: n,
    avatar: a,
    avatarDecoration: (0, d.FG)(o),
    guildRoles: I.Z.getUnsafeMutableRoles(E.id),
    roles: s,
    premiumSince: l,
    isPending: c,
    joinedAt: u,
    communicationDisabledUntil: f,
    unusualDMActivityUntil: _,
    fullProfileLoadedTimestamp: null == (t = g[r.id]) ? true : t.fullProfileLoadedTimestamp,
    flags: p,
    collectibles: h,
    displayNameStyles: m
  }), F(n, g[r.id])
}

function eo(e) {
  let {
    guildId: t,
    userId: n,
    roleId: r
  } = e, i = D[t];
  if (null == i) returnfalse;
  let a = T.Z.getGuild(t);
  if (null == a) return P.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), false;
  let o = i[n];
  if (null == o || o.roles.includes(r)) returnfalse;
  o.roles = [...o.roles, r];
  let s = q(I.Z.getUnsafeMutableRoles(a.id), o.roles);
  return i[n] = C({}, o, s), true
}

function es(e) {
  let {
    guildId: t,
    userId: n,
    roleId: r
  } = e, i = D[t];
  if (null == i) returnfalse;
  let a = T.Z.getGuild(t);
  if (null == a) return P.warn("Guild ".concat(t, " not found during GUILD_MEMBER_UPDATE.")), false;
  let o = i[n];
  if (null == o || !o.roles.includes(r)) returnfalse;
  o.roles = o.roles.filter(e => e !== r);
  let s = q(I.Z.getUnsafeMutableRoles(a.id), o.roles);
  return i[n] = C({}, o, s), true
}

function el(e) {
  let {
    guildMember: t,
    guildId: n
  } = e, r = D[n];
  if (null == r) returnfalse;
  let i = T.Z.getGuild(n);
  if (null == i) return P.warn("Guild ".concat(n, " not found during GUILD_MEMBER_UPDATE.")), false;
  r[t.user.id] = X({
    userId: t.user.id,
    nick: t.nick,
    guildId: n,
    avatar: t.avatar,
    avatarDecoration: em(t),
    guildRoles: I.Z.getUnsafeMutableRoles(i.id),
    roles: t.roles,
    premiumSince: t.premium_since,
    isPending: t.pending,
    joinedAt: t.joined_at,
    communicationDisabledUntil: t.communication_disabled_until,
    unusualDMActivityUntil: t.unusual_dm_activity_until,
    flags: t.flags,
    fullProfileLoadedTimestamp: Date.now(),
    collectibles: (0, f.Xm)(t.collectibles),
    displayNameStyles: (0, p.bN)(t.display_name_styles)
  }), F(n, r[t.user.id])
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
  return eh(t, n.map(e => e.member).filter(E.lm))
}

function ef(e) {
  let {
    guildId: t,
    owners: n
  } = e;
  return eh(t, n)
}

function e_(e) {
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

function ep(e) {
  let {
    guildId: t,
    addedMembers: n
  } = e;
  return null != n && eh(t, n.map(e => e.member).filter(E.lm))
}

function eh(e, t) {
  let n = D[e];
  if (null == n) returnfalse;
  let r = T.Z.getGuild(e);
  return null == r ? (P.warn("Guild ".concat(e, " not found during batchUpdateGuildMembers.")), false) : (t.forEach(t => {
    var i;
    let a = n[t.user.id];
    n[t.user.id] = X({
      userId: t.user.id,
      nick: t.nick,
      guildId: e,
      avatar: t.avatar,
      avatarDecoration: em(t),
      guildRoles: I.Z.getUnsafeMutableRoles(r.id),
      roles: t.roles,
      premiumSince: t.premium_since,
      isPending: t.pending,
      joinedAt: t.joined_at,
      communicationDisabledUntil: t.communication_disabled_until,
      flags: t.flags,
      fullProfileLoadedTimestamp: null == a ? true : a.fullProfileLoadedTimestamp,
      unusualDMActivityUntil: null != (i = t.unusual_dm_activity_until) ? i : null == a ? true : a.unusualDMActivityUntil,
      collectibles: (0, f.Xm)(t.collectibles),
      displayNameStyles: (0, p.bN)(t.display_name_styles)
    }), F(e, n[t.user.id])
  }), U++, true)
}

function em(e) {
  return (0, d.FG)(e.avatar_decoration_data)
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
  let n = D[e];
  if (null == n || null == n[t]) returnfalse;
  delete n[t], V(e, t), U++
}

function eO(e) {
  let {
    guild: t
  } = e;
  return eI(t)
}

function ev(e, t) {
  return eI({
    id: e,
    members: t.filter(c.Z).map(e => e.member)
  })
}

function eI(e) {
  let t = e.id;
  t in D || (D[e.id] = {});
  let n = T.Z.getGuild(t);
  if (null == n) returnfalse;
  let r = D[t];
  for (let a of e.members) {
    var i;
    let o = a.user.id,
      s = r[o],
      l = X({
        userId: o,
        nick: a.nick,
        guildId: e.id,
        avatar: a.avatar,
        avatarDecoration: em(a),
        guildRoles: I.Z.getUnsafeMutableRoles(n.id),
        roles: a.roles,
        premiumSince: a.premium_since,
        isPending: a.pending,
        joinedAt: a.joined_at,
        communicationDisabledUntil: a.communication_disabled_until,
        fullProfileLoadedTimestamp: null == s ? true : s.fullProfileLoadedTimestamp,
        flags: a.flags,
        unusualDMActivityUntil: null != (i = a.unusual_dm_activity_until) ? i : null == s ? true : s.unusualDMActivityUntil,
        collectibles: (0, f.Xm)(a.collectibles),
        displayNameStyles: (0, p.bN)(a.display_name_styles)
      });
    r[o] = l, F(t, l)
  }
  returntrue
}

function eT(e) {
  let {
    guild: t
  } = e;
  delete D[t.id], delete w[t.id], V(t.id)
}

function eS(e) {
  let t = D[e.guildId];
  if (null == t) returnfalse;
  let n = T.Z.getGuild(e.guildId);
  if (null == n) return P.warn("Guild ".concat(e.guildId, " not found during ").concat(e.type, ".")), false;
  let r = O.default.getId();
  for (let i of y.default.keys(t)) {
    let a = t[i];
    if (null != a.roles && a.roles.length > 0 || null != a.colorString || null != a.hoistRoleId) {
      let o = i === r && "GUILD_ROLE_DELETE" === e.type ? a.roles.filter(t => t !== e.roleId) : a.roles;
      t[i] = X({
        userId: i,
        nick: a.nick,
        guildId: e.guildId,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: I.Z.getUnsafeMutableRoles(n.id),
        roles: o,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        flags: a.flags,
        fullProfileLoadedTimestamp: null == a ? true : a.fullProfileLoadedTimestamp,
        collectibles: a.collectibles,
        displayNameStyles: a.displayNameStyles
      }), F(e.guildId, t[i])
    }
  }
}

function eA(e) {
  var t, n, r;
  let {
    guildId: i,
    roles: o,
    addedRoleIds: s,
    removedRoleIds: l,
    flags: c
  } = e, u = O.default.getId(), d = D[i], f = null != d ? d[u] : null;
  if (null == f) returnfalse;
  let _ = T.Z.getGuild(i);
  if (null == _) returnfalse;
  let p = null != (t = B[i]) ? t : {};
  B[i] = {
    added: a().difference(a().union(null != (n = p.added) ? n : [], s), null != l ? l : []),
    removed: a().difference(a().union(null != (r = p.removed) ? r : [], l), null != s ? s : [])
  }, d[u] = X({
    userId: u,
    guildId: i,
    nick: f.nick,
    avatar: f.avatar,
    avatarDecoration: f.avatarDecoration,
    guildRoles: I.Z.getUnsafeMutableRoles(_.id),
    roles: null != o ? o : f.roles,
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
  delete B[t]
}

function eN(e) {
  let {
    guildId: t
  } = e, n = D[t];
  if (null == n) returnfalse;
  let r = T.Z.getGuild(t);
  if (null == r) return P.warn("Guild ".concat(t, " not found during IMPERSONATE_UPDATE.")), false;
  let i = O.default.getId(),
    a = n[i];
  n[i] = X({
    userId: i,
    nick: a.nick,
    guildId: t,
    avatar: a.avatar,
    avatarDecoration: a.avatarDecoration,
    guildRoles: I.Z.getUnsafeMutableRoles(r.id),
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
  eI({
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

function eP(e, t) {
  var n;
  let r = false;
  return null == (n = e.message_snapshots) || n.forEach(t => {
    var n, i;
    eR(null == (n = t.message) ? true : n.resolved, null == (i = e.message_reference) ? true : i.guild_id) && (r = true)
  }), eR(e.resolved, t) || r
}

function eD(e) {
  let {
    message: t,
    guildId: n
  } = e;
  return eP(t, n)
}

function ew(e) {
  let t = v.Z.getChannel(e.channel_id);
  eP(e, null == t ? true : t.guild_id)
}

function eL(e) {
  let {
    messages: t
  } = e;
  t.forEach(e => ew(e))
}

function ex(e) {
  let {
    pins: t
  } = e;
  t.forEach(e => {
    let {
      message: t
    } = e;
    return ew(t)
  })
}

function eM(e) {
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
  }), eL({
    messages: n
  })
}

function ek(e) {
  let {
    location: t,
    participants: n
  } = e, r = (0, u.j)(t);
  return null != r && ev(r, n)
}

function ej(e) {
  let t = v.Z.getChannel(e.channelId);
  return eR(e.resolved, null == t ? true : t.guild_id)
}
class eU extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk485386.Z, Chunk430824.Z, Chunk160404.Z)
  }
  getMutableAllGuildsAndMembers() {
    return D
  }
  memberOf(e) {
    return a()(D).toPairs().filter(t => {
      let [n, r] = t;
      return null != r[e]
    }).map(e => {
      let [t] = e;
      return t
    }).value()
  }
  getNicknameGuildsMapping(e) {
    let t = {};
    for (let r in D) {
      var n;
      let i = null == (n = D[r][e]) ? true : n.nick;
      null != i && (Object.prototype.hasOwnProperty.call(t, i) || (t[i] = []), t[i].push(r))
    }
    return t
  }
  getNicknames(e) {
    return Object.keys(this.getNicknameGuildsMapping(e))
  }
  isMember(e, t) {
    if (null == e || null == t) returnfalse;
    let n = D[e];
    return null != n && null != n[t]
  }
  isGuestOrLurker(e, t) {
    var n;
    if (null == e || null == t) returnfalse;
    let r = D[e];
    return null != r && (null == (n = r[t]) ? true : n.joinedAt) == null
  }
  isCurrentUserGuest(e) {
    if (null == e) returnfalse;
    let t = O.default.getId(),
      n = D[e];
    if (null == n || null == n[t]) returnfalse;
    let r = n[t].flags;
    return null != r && (0, o.yE)(r, S.q.IS_GUEST)
  }
  getMemberIds(e) {
    if (null == e) return [];
    let t = D[e];
    return null == t ? [] : y.default.keys(t)
  }
  getMembers(e) {
    if (null == e) return [];
    let t = D[e];
    return null == t ? [] : Object.values(t)
  }
  getTrueMember(e, t) {
    let n = D[e];
    return null != n ? n[t] : null
  }
  getMember(e, t) {
    let n = this.getTrueMember(e, t);
    if (null != n && t === O.default.getId() && (g.Z.isViewingRoles(e) || g.Z.isFullServerPreview(e))) {
      var r;
      return null != (r = L[e]) ? r : n
    }
    return n
  }
  getSelfMember(e) {
    return this.getMember(e, O.default.getId())
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
    return M
  }
  getCommunicationDisabledVersion() {
    return j
  }
  getPendingRoleUpdates(e) {
    var t;
    return null != (t = B[e]) ? t : Z
  }
  getMemberRoleWithPendingUpdates(e, t) {
    var n, r;
    let i = null != (r = null == (n = this.getMember(e, t)) ? true : n.roles) ? r : [],
      o = B[e];
    return null == o ? i : a().difference(a().union(i, o.added), o.removed)
  }
  getMemberVersion() {
    return U
  }
}
A(eU, "displayName", "GuildMemberStore");
let eG = new eU(Chunk570140.Z, {
  CONNECTION_OPEN: Q,
  CONNECTION_OPEN_SUPPLEMENTAL: J,
  OVERLAY_INITIALIZE: ee,
  CACHE_LOADED: et,
  CACHE_LOADED_LAZY: en,
  GUILD_CREATE: eO,
  GUILD_DELETE: eT,
  GUILD_MEMBER_ADD: ea,
  GUILD_MEMBER_UPDATE: ea,
  GUILD_MEMBER_UPDATE_LOCAL: eA,
  GUILD_MEMBERS_CHUNK_BATCH: ec,
  GUILD_MEMBER_REMOVE: eE,
  GUILD_MEMBER_REMOVE_LOCAL: eb,
  THREAD_MEMBER_LIST_UPDATE: ed,
  THREAD_MEMBERS_UPDATE: ep,
  LOAD_ARCHIVED_THREADS_SUCCESS: ef,
  LOAD_FORUM_POSTS: e_,
  GUILD_ROLE_UPDATE: eS,
  GUILD_ROLE_DELETE: eS,
  GUILD_ROLE_MEMBER_REMOVE: es,
  GUILD_ROLE_MEMBER_ADD: eo,
  GUILD_MEMBER_PROFILE_UPDATE: el,
  IMPERSONATE_UPDATE: eN,
  IMPERSONATE_STOP: eN,
  PASSIVE_UPDATE_V2: eu,
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eC,
  LOCAL_MESSAGES_LOADED: ei,
  MESSAGE_CREATE: eD,
  MESSAGE_UPDATE: eD,
  LOAD_MESSAGES_SUCCESS: eL,
  LOAD_MESSAGES_AROUND_SUCCESS: eL,
  LOAD_RECENT_MENTIONS_SUCCESS: eL,
  LOAD_PINNED_MESSAGES_SUCCESS: ex,
  SEARCH_MESSAGES_SUCCESS: eM,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: eM,
  MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: eg,
  EMBEDDED_ACTIVITY_UPDATE_V2: ek,
  INTERACTION_MODAL_CREATE: ej
})