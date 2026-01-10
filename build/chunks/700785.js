/** Chunk was on web.js **/
/** chunk id: 700785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BT: () => W,
  Hn: () => C,
  Hu: () => H,
  I0: () => k,
  Og: () => G,
  TP: () => N,
  Uu: () => K,
  e9: () => V,
  iJ: () => F,
  o4: () => Z,
  oz: () => z,
  r6: () => B,
  uB: () => U,
  we: () => Y,
  ym: () => x
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk911969 = require("./911969.js"),
  Chunk715903 = require("./715903.js"),
  Chunk69882 = require("./69882.js"),
  Chunk160404 = require("./160404.js"),
  Chunk41776 = require("./41776.js"),
  Chunk569471 = require("./569471.js"),
  Chunk131704 = require("./131704.js"),
  Chunk601964 = require("./601964.js"),
  Chunk345162 = require("./345162.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk625137 = require("./625137.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}
let C = Chunk149765.vB(0),
  A = Chunk149765.$e(...i().values(Chunk981631.Plq)),
  N = Chunk149765.$e(Chunk981631.Plq.CREATE_INSTANT_INVITE, Chunk981631.Plq.CHANGE_NICKNAME, Chunk981631.Plq.VIEW_CHANNEL, Chunk981631.Plq.SEND_MESSAGES, Chunk981631.Plq.EMBED_LINKS, Chunk981631.Plq.ATTACH_FILES, Chunk981631.Plq.READ_MESSAGE_HISTORY, Chunk981631.Plq.MENTION_EVERYONE, Chunk981631.Plq.USE_EXTERNAL_EMOJIS, Chunk981631.Plq.USE_EXTERNAL_STICKERS, Chunk981631.Plq.ADD_REACTIONS, Chunk981631.Plq.CREATE_PUBLIC_THREADS, Chunk981631.Plq.CREATE_PRIVATE_THREADS, Chunk981631.Plq.SEND_MESSAGES_IN_THREADS, Chunk981631.Plq.SEND_POLLS, Chunk981631.Plq.CONNECT, Chunk981631.Plq.SPEAK, Chunk981631.Plq.USE_VAD, Chunk981631.Plq.STREAM, Chunk981631.Plq.USE_EMBEDDED_ACTIVITIES, Chunk981631.Plq.USE_SOUNDBOARD, Chunk981631.Plq.REQUEST_TO_SPEAK, Chunk981631.Plq.USE_APPLICATION_COMMANDS, Chunk981631.Plq.CREATE_GUILD_EXPRESSIONS, Chunk981631.Plq.CREATE_EVENTS, Chunk981631.Plq.USE_EXTERNAL_APPS),
  P = Chunk149765.$e(Chunk981631.Plq.VIEW_CHANNEL, Chunk981631.Plq.READ_MESSAGE_HISTORY),
  R = Chunk149765.$e(Chunk981631.Plq.VIEW_CHANNEL, Chunk981631.Plq.SEND_MESSAGES, Chunk981631.Plq.CONNECT, Chunk981631.Plq.SPEAK, Chunk981631.Plq.STREAM, Chunk981631.Plq.USE_EMBEDDED_ACTIVITIES, Chunk981631.Plq.USE_EXTERNAL_APPS, Chunk981631.Plq.USE_EXTERNAL_EMOJIS, Chunk981631.Plq.USE_EXTERNAL_SOUNDS, Chunk981631.Plq.USE_EXTERNAL_STICKERS, Chunk981631.Plq.USE_SOUNDBOARD, Chunk981631.Plq.USE_VAD, Chunk981631.Plq.SEND_MESSAGES_IN_THREADS),
  w = Chunk149765.$e(Chunk981631.Plq.VIEW_CHANNEL, Chunk981631.Plq.READ_MESSAGE_HISTORY),
  D = Chunk149765.$e(Chunk981631.Plq.VIEW_CHANNEL, Chunk981631.Plq.READ_MESSAGE_HISTORY, Chunk981631.Plq.CHANGE_NICKNAME),
  x = Chunk149765.$e(Chunk981631.Plq.MANAGE_GUILD, Chunk981631.Plq.MANAGE_ROLES, Chunk981631.Plq.ADMINISTRATOR, Chunk981631.Plq.BAN_MEMBERS, Chunk981631.Plq.MANAGE_NICKNAMES, Chunk981631.Plq.CREATE_GUILD_EXPRESSIONS, Chunk981631.Plq.MANAGE_GUILD_EXPRESSIONS, Chunk981631.Plq.MANAGE_WEBHOOKS, Chunk981631.Plq.VIEW_AUDIT_LOG);

function L(e, t, n) {
  let r = !(arguments.length > 3) || true === arguments[3] || arguments[3];
  if (r && t.mfaLevel === S.BpS.ELEVATED && n === m.default.getId()) {
    var i;
    (null == (i = y.default.getCurrentUser()) ? true : i.mfaEnabled) || (e = a.Od(e, S.TC2))
  }
  return e
}

function j(e, t, n, r) {
  let i = r[e];
  if (null != i && (n = a.Od(n, i.deny), n = a.IH(n, i.allow)), null != t) {
    let e = C,
      i = C;
    for (let n = 0; n < t.roles.length; n++) {
      let o = r[t.roles[n]];
      null != o && (e = a.IH(e, o.allow), i = a.IH(i, o.deny))
    }
    n = a.Od(n, i), n = a.IH(n, e);
    let o = r[t.userId];
    null != o && (n = a.Od(n, o.deny), n = a.IH(n, o.allow));
    let c = a.e$(n, S.Plq.ADMINISTRATOR);
    (0, s.EY)(t) && !c && (n = a.hX(n, D)), (0, l.b)(t) && !c && (n = a.hX(n, w))
  }
  return n
}

function M(e) {
  let {
    userId: t,
    member: n,
    guild: r,
    overwrites: i,
    roles: o,
    checkElevated: s = true,
    excludeGuildPermissions: l = false,
    lurkerPermissionsMask: c = P
  } = e;
  if (l) return j(r.id, n, C, i);
  let d = (o = null != o ? T({}, E.Z.getUnsafeMutableRoles(r.id), o) : E.Z.getUnsafeMutableRoles(r.id))[(0, p.lV)(r)],
    f = null != d ? d.permissions : N;
  if (null != n)
    for (let e = 0; e < n.roles.length; e++) {
      let t = o[n.roles[e]];
      true !== t && (f = a.IH(f, t.permissions))
    }
  return f = a.e$(f, S.Plq.ADMINISTRATOR) ? A : j(r.id, n, f, i), (u.Z.isLurking(r.id) || (null == n ? true : n.isPending)) && (f = a.hX(f, c)), g.ZP.isCurrentUserGuest(r.id) && (f = a.hX(f, R)), L(f, r, t, s)
}

function k(e) {
  let t, {
      forceRoles: n,
      context: r,
      overwrites: i,
      roles: a,
      checkElevated: o = true,
      excludeGuildPermissions: s
    } = e,
    l = P;
  if (r instanceof f.Sf) {
    var c;
    if (r.isScheduledForDeletion()) return C;
    if (f.Ec.has(r.type)) {
      let e = h.Z.getChannel(r.parent_id);
      return null == e ? C : G(r, k({
        forceRoles: n,
        context: e,
        overwrites: i,
        roles: a,
        checkElevated: o,
        excludeGuildPermissions: s
      }), false, false)
    }
    l = null != (c = r.computeLurkerPermissionsAllowList()) ? c : l, i = null != i ? T({}, r.permissionOverwrites, i) : r.permissionOverwrites;
    let e = r.getGuildId();
    t = null != e ? b.Z.getGuild(e) : null
  } else i = null != i ? i : {}, t = r;
  if (null == t) return C;
  let u = {
    userId: S.lds,
    nick: "",
    guildId: t.id,
    guildMemberAvatar: null,
    roles: v.default.keys(n),
    colorString: null,
    colorStrings: null,
    hoistRoleId: null,
    premiumSince: null,
    isPending: false,
    joinedAt: new Date().toISOString(),
    communicationDisabledUntil: null
  };
  return M({
    userId: S.lds,
    member: u,
    guild: t,
    overwrites: i,
    roles: a,
    checkElevated: o,
    excludeGuildPermissions: s,
    lurkerPermissionsMask: l
  })
}

function U(e) {
  var t, n, r;
  let i, {
    user: a,
    context: o,
    overwrites: s,
    roles: l,
    checkElevated: u = true,
    excludeGuildPermissions: _ = false
  } = e;
  if (null == a) return C;
  let m = "string" == typeof a ? a : a.id,
    E = P;
  if (o instanceof f.Sf) {
    if (o.isScheduledForDeletion()) return C;
    if (f.Ec.has(o.type)) {
      let e = h.Z.getChannel(o.parent_id);
      if (null == e || e.isScheduledForDeletion()) return C;
      let t = m === (null == (n = y.default.getCurrentUser()) ? true : n.id) && d.Z.hasJoined(o.id);
      return G(o, U({
        user: a,
        context: e,
        overwrites: s,
        roles: l,
        checkElevated: u,
        excludeGuildPermissions: _
      }), t, g.ZP.isCurrentUserGuest(o.guild_id))
    }
    E = null != (r = o.computeLurkerPermissionsAllowList()) ? r : E, s = null != s ? T({}, o.permissionOverwrites, s) : o.permissionOverwrites;
    let e = o.getGuildId();
    i = null != e ? b.Z.getGuild(e) : null
  } else s = null != s ? s : {}, i = o;
  if (null == i) return C;
  if (!(m === (null == (t = y.default.getCurrentUser()) ? true : t.id) && c.Z.isViewingRoles(i.id)) && (0, p.eM)(i, m)) return L(A, i, m, u);
  let O = g.ZP.getMember(i.id, m);
  return M({
    userId: m,
    member: O,
    guild: i,
    overwrites: s,
    roles: l,
    checkElevated: u,
    excludeGuildPermissions: _,
    lurkerPermissionsMask: E
  })
}

function G(e, t, n, r) {
  return e.type !== S.d4z.PRIVATE_THREAD || n || r || a.e$(t, S.Plq.MANAGE_THREADS) ? a.e$(t, S.Plq.SEND_MESSAGES_IN_THREADS) ? e.isLockedThread() && !a.e$(t, S.Plq.MANAGE_THREADS) ? a.Od(t, S.Plq.SEND_MESSAGES) : a.$e(t, S.Plq.SEND_MESSAGES) : a.Od(t, S.Plq.SEND_MESSAGES) : C
}

function Z(e, t) {
  if (f.Ec.has(e.type)) returntrue;
  let {
    guild_id: n
  } = e;
  if (null == t || null == n || n !== t.guild_id) returnfalse;
  let r = T({}, e.permissionOverwrites),
    i = T({}, t.permissionOverwrites);
  return null == r[n] && (r[n] = Y(n)), null == i[n] && (i[n] = Y(n)), Object.keys(r).length === Object.keys(i).length && !Object.keys(r).some(e => {
    let t = r[e],
      n = i[e];
    return !(null != n && a.fS(n.deny, t.deny) && a.fS(n.allow, t.allow))
  })
}

function F(e) {
  var t;
  return i().some(E.Z.getUnsafeMutableRoles(e.id), e => e.hoist && (0, _.Fs)(e, S.Plq.ADMINISTRATOR)) ? true : null != (t = e.ownerId) ? t : true
}

function B(e, t, n, r) {
  return !!(null != t && (0, p.eM)(e, t)) || null != n && (null == r || (0, O.C$)(n, r))
}

function V(e, t) {
  let n = g.ZP.getMember(e.id, t);
  if (null != n) return E.Z.getSortedRoles(e.id).find(e => n.roles.includes(e.id))
}

function H(e, t) {
  return null == t.hoistRoleId ? null : E.Z.getRole(e.id, t.hoistRoleId)
}

function Y(e) {
  return {
    id: e,
    type: o.BN.ROLE,
    allow: C,
    deny: C
  }
}

function W(e) {
  let {
    permission: t,
    user: n,
    context: r,
    overwrites: i,
    roles: o,
    excludeGuildPermissions: s
  } = e;
  return a.e$(U({
    user: n,
    context: r,
    overwrites: i,
    roles: o,
    checkElevated: true,
    excludeGuildPermissions: s
  }), t)
}

function K(e, t) {
  let n, r = {};
  if (t instanceof f.Sf) {
    if (t.type === S.d4z.PRIVATE_THREAD || f.Ec.has(t.type) && null == (t = h.Z.getChannel(t.parent_id))) returnfalse;
    r = t.permissionOverwrites;
    let e = t.getGuildId();
    n = null != e ? b.Z.getGuild(e) : null
  } else n = t;
  if (null == n) returnfalse;
  let i = E.Z.getEveryoneRole(n).permissions,
    o = r[n.id];
  return null != o && (i = a.Od(i, o.deny), i = a.IH(i, o.allow)), a.e$(i, e)
}

function z(e, t) {
  let n, r = {};
  if (t instanceof f.Sf) {
    if (t.type === S.d4z.PRIVATE_THREAD || f.Ec.has(t.type) && null == (t = h.Z.getChannel(t.parent_id))) returnfalse;
    r = t.permissionOverwrites;
    let e = t.getGuildId();
    n = null != e ? b.Z.getGuild(e) : null
  } else n = t;
  if (null == n) returnfalse;
  let o = E.Z.getEveryoneRole(n);
  return !(!(0, _.Fs)(o, e) || i().some(r, t => a.e$(t.deny, e)))
}