/** Chunk was on web.js **/
/** chunk id: 496675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ee
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk160404 = require("./160404.js"),
  Chunk41776 = require("./41776.js"),
  Chunk427679 = require("./427679.js"),
  Chunk569471 = require("./569471.js"),
  Chunk195663 = require("./195663.js"),
  Chunk131704 = require("./131704.js"),
  Chunk601964 = require("./601964.js"),
  Chunk598077 = require("./598077.js"),
  Chunk386438 = require("./386438.js"),
  Chunk411198 = require("./411198.js"),
  Chunk700785 = require("./700785.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk478743 = require("./478743.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let C = {},
  N = {},
  R = {},
  P = 0;

function w(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = C[e];
  if (null != n) return n;
  let r = I.default.getCurrentUser();
  if (null == r) return b.Hn;
  let i = v.Z.getGuild(e);
  return null == i ? b.Hn : C[e] = b.uB({
    user: r,
    context: i,
    checkElevated: t
  })
}

function D(e) {
  var t;
  let n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    r = I.default.getCurrentUser();
  if (null == r) return b.Hn;
  let i = y.Z.getChannel(e);
  if (null == i) return b.Hn;
  let o = i.getGuildId(),
    s = null != o && (u.Z.isLurking(o) || (null == (t = O.ZP.getMember(o, r.id)) ? true : t.isPending));
  return !i.isScheduledForDeletion() && !s && a().isEmpty(i.permissionOverwrites) && null != o ? w(o) : b.uB({
    user: r,
    context: i,
    checkElevated: n
  })
}

function x(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = N[e];
  return null != n ? n : N[e] = D(e, t)
}

function L(e) {
  if (null != e) {
    var t;
    R[e] = (null != (t = R[e]) ? t : 0) + 1
  }
}

function M() {
  for (let e in C = {}, N = {}, R) R[module] += 1;
  P += 1
}

function j() {
  M()
}

function k() {
  $()
}

function U() {
  M()
}

function G(e) {
  var t;
  let {
    user: n
  } = e;
  if (n.id !== (null == (t = I.default.getCurrentUser()) ? true : t.id)) returnfalse;
  M()
}

function B(e) {
  let {
    channel: {
      id: t
    }
  } = e, n = y.Z.getChannel(t);
  if (null == n || n.isPrivate()) returnfalse;
  let r = I.default.getCurrentUser(),
    i = b.uB({
      user: r,
      context: n
    });
  if (N[n.id] === i) returnfalse;
  N[n.id] = i, P += 1, L(n.getGuildId())
}

function Z(e) {
  let {
    channels: t
  } = e, n = false;
  for (let {
      id: e
    }
    of t) {
    let t = y.Z.getChannel(e);
    if (null == t || t.isPrivate()) continue;
    let r = I.default.getCurrentUser(),
      i = b.uB({
        user: r,
        context: t
      });
    N[t.id] !== i && (N[t.id] = i, L(t.getGuildId()), n = true)
  }
  return !!n && (P += 1, n)
}

function F() {
  returntrue
}

function V(e) {
  var t;
  return (null == (t = I.default.getCurrentUser()) ? true : t.id) === e.userId && (L(e.guildId), true)
}

function H(e) {
  return !!(0, _.s)(e) && (L(e.guildId), true)
}

function Y(e) {
  let {
    messages: t
  } = e;
  return t.some(e => null != e.thread)
}

function W(e) {
  let {
    data: t
  } = e;
  return t.some(e => {
    let {
      messages: t,
      threads: n
    } = e;
    return n.length > 0 || t.some(e => e.some(e => null != e.thread))
  })
}

function K(e) {
  let {
    channel: t
  } = e;
  return delete N[t.id], P += 1, L(t.guild_id), false
}

function z(e) {
  let {
    guildId: t
  } = e;
  delete C[t];
  let n = y.Z.getMutableBasicGuildChannelsForGuild(t);
  a().forEach(n, e => {
    delete N[e.id]
  }), P += 1, L(t)
}

function q(e) {
  let {
    instance: t
  } = e, n = y.Z.getChannel(t.channel_id);
  if (null == n) returnfalse;
  let r = I.default.getCurrentUser(),
    i = b.uB({
      user: r,
      context: n
    });
  if (i === N[n.id]) returnfalse;
  N[n.id] = i, P += 1
}

function X(e) {
  let {
    guildId: t
  } = e;
  delete C[t];
  let n = y.Z.getMutableBasicGuildChannelsForGuild(t);
  a().forEach(n, e => {
    delete N[e.id]
  }), P += 1, L(t)
}

function Q(e, t, n, r) {
  let i = b.Hn;
  if (e instanceof p.Sf) {
    if (p.Ec.has(e.type)) {
      let i = y.Z.getChannel(e.parent_id);
      return null == i ? b.Hn : b.Og(e, Q(i, t, n, r), f.Z.hasJoined(e.id))
    }
    i = x(e.id)
  } else(0, E.lM)(e) && (i = w(e.id));
  return true !== t || true !== n || true !== r ? b.uB({
    user: I.default.getCurrentUser(),
    context: e,
    overwrites: t,
    roles: n,
    checkElevated: true,
    excludeGuildPermissions: r
  }) : i
}
class J extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk271383.ZP, Chunk430824.Z, Chunk160404.Z, Chunk569471.Z, Chunk41776.Z, Chunk427679.Z, Chunk594174.default)
  }
  getChannelPermissions(e) {
    return p.Ec.has(e.type) ? D(e.id) : x(e.id)
  }
  getGuildPermissions(e) {
    return w(e.id)
  }
  getGuildPermissionProps(e) {
    let t = I.default.getCurrentUser();
    return {
      canManageGuild: this.can(S.Plq.MANAGE_GUILD, e),
      canManageChannels: this.can(S.Plq.MANAGE_CHANNELS, e),
      canManageRoles: this.can(S.Plq.MANAGE_ROLES, e),
      canManageBans: this.can(S.Plq.BAN_MEMBERS, e),
      canManageNicknames: this.can(S.Plq.MANAGE_NICKNAMES, e),
      canManageGuildExpressions: this.can(S.Plq.MANAGE_GUILD_EXPRESSIONS, e) || this.can(S.Plq.CREATE_GUILD_EXPRESSIONS, e),
      canViewAuditLog: this.can(S.Plq.VIEW_AUDIT_LOG, e),
      canViewAuditLogV2: this.can(S.Plq.VIEW_AUDIT_LOG, e),
      canManageWebhooks: this.can(S.Plq.MANAGE_WEBHOOKS, e),
      canViewGuildAnalytics: this.can(S.Plq.VIEW_GUILD_ANALYTICS, e),
      canAccessMembersPage: this.canAccessMemberSafetyPage(e),
      isGuildAdmin: this.can(S.Plq.ADMINISTRATOR, e),
      isOwner: null != t && (0, h.eM)(e, t),
      isOwnerWithRequiredMfaLevel: null != t && (0, h.yn)(e, t),
      guild: e
    }
  }
  canAccessMemberSafetyPage(e) {
    return o.Db(w(e.id), T.N)
  }
  canAccessGuildSettings(e) {
    return o.Db(w(e.id), b.ym)
  }
  canWithPartialContext(e, t) {
    return "channelId" in t && "string" == typeof t.channelId ? this.can(e, y.Z.getChannel(t.channelId)) : "guildId" in t && "string" == typeof t.guildId && this.can(e, v.Z.getGuild(t.guildId))
  }
  can(e, t, n, r, i) {
    let a = Q(t, n, r, i);
    return o.e$(a, e)
  }
  canBasicChannel(e, t, n, r, i) {
    return "basicPermissions" in t ? g.Z.has(t.basicPermissions, e) : o.e$(Q(t, n, r, i), g.Z.asBigFlag(e))
  }
  computePermissions(e, t, n, r) {
    return Q(e, t, n, r)
  }
  computeBasicPermissions(e) {
    return "basicPermissions" in e ? e.basicPermissions : g.Z.asBasicFlag(Q(e))
  }
  canManageUser(e, t, n) {
    let r = t instanceof m.Z ? t.id : t;
    if ((0, h.eM)(n, r)) returnfalse;
    let i = I.default.getCurrentUser();
    if (!this.can(e, n)) returnfalse;
    let a = null != i ? b.e9(n, i.id) : true,
      o = b.e9(n, r);
    return null != i && b.r6(n, i.id, a, o)
  }
  getHighestRole(e) {
    let t = I.default.getCurrentUser();
    return null != t ? b.e9(e, t.id) : null
  }
  isRoleHigher(e, t, n) {
    let r = I.default.getCurrentUser(),
      i = c.Z.isViewingRoles(e.id);
    return b.r6(e, i || null == r ? true : r.id, t, n)
  }
  canImpersonateRole(e, t) {
    let n = this.getHighestRole(e),
      r = this.can(S.Plq.MANAGE_GUILD, e) && this.can(S.Plq.MANAGE_ROLES, e),
      i = this.isRoleHigher(e, n, t);
    return r && (i || t.id === (null == n ? true : n.id))
  }
  getGuildVersion(e) {
    var t;
    return null != (t = R[e]) ? t : 0
  }
  getChannelsVersion() {
    return P
  }
}

function $() {
  N = {}, C = {}, R = {}, P = 0
}
A(J, "displayName", "PermissionStore");
let ee = new J(Chunk570140.Z, {
  BACKGROUND_SYNC: j,
  CONNECTION_OPEN: j,
  OVERLAY_INITIALIZE: j,
  CACHE_LOADED: j,
  CACHE_LOADED_LAZY: j,
  CONNECTION_CLOSED: k,
  GUILD_CREATE: U,
  GUILD_UPDATE: U,
  GUILD_DELETE: U,
  GUILD_MEMBER_ADD: G,
  GUILD_MEMBER_UPDATE: G,
  CURRENT_USER_UPDATE: G,
  CHANNEL_CREATE: B,
  THREAD_CREATE: F,
  THREAD_UPDATE: F,
  THREAD_LIST_SYNC: F,
  LOAD_THREADS_SUCCESS: F,
  LOAD_ARCHIVED_THREADS_SUCCESS: F,
  CHANNEL_UPDATES: Z,
  LOAD_MESSAGES_SUCCESS: Y,
  SEARCH_MESSAGES_SUCCESS: W,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: W,
  THREAD_MEMBER_UPDATE: V,
  THREAD_MEMBERS_UPDATE: H,
  CHANNEL_DELETE: K,
  GUILD_ROLE_CREATE: z,
  GUILD_ROLE_UPDATE: z,
  GUILD_ROLE_DELETE: z,
  LOGOUT: $,
  STAGE_INSTANCE_CREATE: q,
  STAGE_INSTANCE_UPDATE: q,
  STAGE_INSTANCE_DELETE: q,
  IMPERSONATE_UPDATE: X,
  IMPERSONATE_STOP: X
})