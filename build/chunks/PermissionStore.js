/** Chunk was on web.js **/
/** chunk id: 576705, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ee
}), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk136722 = require("./136722.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk164956 = require("./164956.js"),
  Chunk857071 = require("./857071.js"),
  Chunk446600 = require("./446600.js"),
  Chunk152007 = require("./152007.js"),
  Chunk882733 = require("./882733.js"),
  Chunk95701 = require("./95701.js"),
  Chunk260509 = require("./260509.js"),
  Chunk427157 = require("./427157.js"),
  Chunk799422 = require("./799422.js"),
  Chunk860689 = require("./860689.js"),
  Chunk488926 = require("./488926.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk402655 = require("./402655.js");

function T(e, t, n) {
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
  w = 0;

function P(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = C[e];
  if (null != n) return n;
  let r = A.default.getCurrentUser();
  if (null == r) return y.x3;
  let i = v.A.getGuild(e);
  return null == i ? y.x3 : C[e] = y.cc({
    user: r,
    context: i,
    checkElevated: t
  })
}

function D(e) {
  var t;
  let n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    r = A.default.getCurrentUser();
  if (null == r) return y.x3;
  let i = b.A.getChannel(e);
  if (null == i) return y.x3;
  let s = i.getGuildId(),
    o = null != s && (u.A.isLurking(s) || (null == (t = O.Ay.getMember(s, r.id)) ? true : t.isPending));
  return !i.isScheduledForDeletion() && !o && a().isEmpty(i.permissionOverwrites) && null != s ? P(s) : y.cc({
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

function j() {
  for (let e in C = {}, N = {}, R) R[e] += 1;
  w += 1
}

function M() {
  j()
}

function k() {
  J()
}

function U() {
  j()
}

function G(e) {
  var t;
  let {
    user: n
  } = e;
  if (n.id !== (null == (t = A.default.getCurrentUser()) ? true : t.id)) returnfalse;
  j()
}

function V(e) {
  let {
    channel: {
      id: t
    }
  } = e, n = b.A.getChannel(t);
  if (null == n || n.isPrivate()) returnfalse;
  let r = A.default.getCurrentUser(),
    i = y.cc({
      user: r,
      context: n
    });
  if (N[n.id] === i) returnfalse;
  N[n.id] = i, w += 1, L(n.getGuildId())
}

function F(e) {
  let {
    channels: t
  } = e, n = false;
  for (let {
      id: e
    }
    of t) {
    let t = b.A.getChannel(e);
    if (null == t || t.isPrivate()) continue;
    let r = A.default.getCurrentUser(),
      i = y.cc({
        user: r,
        context: t
      });
    N[t.id] !== i && (N[t.id] = i, L(t.getGuildId()), n = true)
  }
  return !!n && (w += 1, n)
}

function B() {
  returntrue
}

function H(e) {
  var t;
  return (null == (t = A.default.getCurrentUser()) ? true : t.id) === e.userId && (L(e.guildId), true)
}

function Y(e) {
  return !!(0, p.k)(e) && (L(e.guildId), true)
}

function W(e) {
  let {
    messages: t
  } = e;
  return t.some(e => null != e.thread)
}

function K(e) {
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

function z(e) {
  let {
    channel: t
  } = e;
  return delete N[t.id], w += 1, L(t.guild_id), false
}

function q(e) {
  let {
    guildId: t
  } = e;
  delete C[t];
  let n = b.A.getMutableBasicGuildChannelsForGuild(t);
  a().forEach(n, e => {
    delete N[e.id]
  }), w += 1, L(t)
}

function X(e) {
  let {
    instance: t
  } = e, n = b.A.getChannel(t.channel_id);
  if (null == n) returnfalse;
  let r = A.default.getCurrentUser(),
    i = y.cc({
      user: r,
      context: n
    });
  if (i === N[n.id]) returnfalse;
  N[n.id] = i, w += 1
}

function Z(e) {
  let {
    guildId: t
  } = e;
  delete C[t];
  let n = b.A.getMutableBasicGuildChannelsForGuild(t);
  a().forEach(n, e => {
    delete N[e.id]
  }), w += 1, L(t)
}

function Q(e, t, n, r) {
  let i = y.x3;
  if (e instanceof _.YB) {
    if (_.Le.has(e.type)) {
      let i = b.A.getChannel(e.parent_id);
      return null == i ? y.x3 : y.TJ(e, Q(i, t, n, r), f.A.hasJoined(e.id), O.Ay.isCurrentUserGuest(e.guild_id))
    }
    i = x(e.id)
  } else(0, E.fh)(e) && (i = P(e.id));
  return true !== t || true !== n || true !== r ? y.cc({
    user: A.default.getCurrentUser(),
    context: e,
    overwrites: t,
    roles: n,
    checkElevated: true,
    excludeGuildPermissions: r
  }) : i
}
class $ extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(b.A, O.Ay, v.A, c.A, f.A, u.A, d.A, A.default)
  }
  getChannelPermissions(e) {
    return _.Le.has(e.type) ? D(e.id) : x(e.id)
  }
  getGuildPermissions(e) {
    return P(e.id)
  }
  getGuildPermissionProps(e) {
    let t = A.default.getCurrentUser();
    return {
      canManageGuild: this.can(I.xBc.MANAGE_GUILD, e),
      canManageChannels: this.can(I.xBc.MANAGE_CHANNELS, e),
      canManageRoles: this.can(I.xBc.MANAGE_ROLES, e),
      canManageBans: this.can(I.xBc.BAN_MEMBERS, e),
      canManageNicknames: this.can(I.xBc.MANAGE_NICKNAMES, e),
      canManageGuildExpressions: this.can(I.xBc.MANAGE_GUILD_EXPRESSIONS, e) || this.can(I.xBc.CREATE_GUILD_EXPRESSIONS, e),
      canViewAuditLog: this.can(I.xBc.VIEW_AUDIT_LOG, e),
      canViewAuditLogV2: this.can(I.xBc.VIEW_AUDIT_LOG, e),
      canManageWebhooks: this.can(I.xBc.MANAGE_WEBHOOKS, e),
      canViewGuildAnalytics: this.can(I.xBc.VIEW_GUILD_ANALYTICS, e),
      canAccessMembersPage: this.canAccessMemberSafetyPage(e),
      isGuildAdmin: this.can(I.xBc.ADMINISTRATOR, e),
      isOwner: null != t && (0, h.bM)(e, t),
      isOwnerWithRequiredMfaLevel: null != t && (0, h.ok)(e, t),
      guild: e
    }
  }
  canAccessMemberSafetyPage(e) {
    return s.X8(P(e.id), S.M)
  }
  canAccessGuildSettings(e) {
    return s.X8(P(e.id), y.yC)
  }
  canWithPartialContext(e, t) {
    return "channelId" in t && "string" == typeof t.channelId ? this.can(e, b.A.getChannel(t.channelId)) : "guildId" in t && "string" == typeof t.guildId && this.can(e, v.A.getGuild(t.guildId))
  }
  can(e, t, n, r, i) {
    let a = Q(t, n, r, i);
    return s.zy(a, e)
  }
  canBasicChannel(e, t, n, r, i) {
    return "basicPermissions" in t ? g.A.has(t.basicPermissions, e) : s.zy(Q(t, n, r, i), g.A.asBigFlag(e))
  }
  computePermissions(e, t, n, r) {
    return Q(e, t, n, r)
  }
  computeBasicPermissions(e) {
    return "basicPermissions" in e ? e.basicPermissions : g.A.asBasicFlag(Q(e))
  }
  canManageUser(e, t, n) {
    let r = t instanceof m.A ? t.id : t;
    if ((0, h.bM)(n, r)) returnfalse;
    let i = A.default.getCurrentUser();
    if (!this.can(e, n)) returnfalse;
    let a = null != i ? y.HJ(n, i.id) : true,
      s = y.HJ(n, r);
    return null != i && y.wO(n, i.id, a, s)
  }
  getHighestRole(e) {
    let t = A.default.getCurrentUser();
    return null != t ? y.HJ(e, t.id) : null
  }
  isRoleHigher(e, t, n) {
    let r = A.default.getCurrentUser(),
      i = c.A.isViewingRoles(e.id);
    return y.wO(e, i || null == r ? true : r.id, t, n)
  }
  canImpersonateRole(e, t) {
    let n = this.getHighestRole(e),
      r = this.can(I.xBc.MANAGE_GUILD, e) && this.can(I.xBc.MANAGE_ROLES, e),
      i = this.isRoleHigher(e, n, t);
    return r && (i || t.id === (null == n ? true : n.id))
  }
  getGuildVersion(e) {
    var t;
    return null != (t = R[e]) ? t : 0
  }
  getChannelsVersion() {
    return w
  }
}

function J() {
  N = {}, C = {}, R = {}, w = 0
}
T($, "displayName", "PermissionStore");
let ee = new $(Chunk73153.h, {
  BACKGROUND_SYNC: M,
  CONNECTION_OPEN: M,
  OVERLAY_INITIALIZE: M,
  CACHE_LOADED: M,
  CACHE_LOADED_LAZY: M,
  CONNECTION_CLOSED: k,
  GUILD_CREATE: U,
  GUILD_UPDATE: U,
  GUILD_DELETE: U,
  GUILD_MEMBER_ADD: G,
  GUILD_MEMBER_UPDATE: G,
  CURRENT_USER_UPDATE: G,
  CHANNEL_CREATE: V,
  THREAD_CREATE: B,
  THREAD_UPDATE: B,
  THREAD_LIST_SYNC: B,
  LOAD_THREADS_SUCCESS: B,
  LOAD_ARCHIVED_THREADS_SUCCESS: B,
  CHANNEL_UPDATES: F,
  LOAD_MESSAGES_SUCCESS: W,
  SEARCH_MESSAGES_SUCCESS: K,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: K,
  THREAD_MEMBER_UPDATE: H,
  THREAD_MEMBERS_UPDATE: Y,
  CHANNEL_DELETE: z,
  GUILD_ROLE_CREATE: q,
  GUILD_ROLE_UPDATE: q,
  GUILD_ROLE_DELETE: q,
  LOGOUT: J,
  STAGE_INSTANCE_CREATE: X,
  STAGE_INSTANCE_UPDATE: X,
  STAGE_INSTANCE_DELETE: X,
  IMPERSONATE_UPDATE: Z,
  IMPERSONATE_STOP: Z
})