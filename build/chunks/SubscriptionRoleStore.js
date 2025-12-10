/** Chunk was on web.js **/
/** chunk id: 687476, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk601964 = require("./601964.js"),
  Chunk345162 = require("./345162.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk973542 = require("./973542.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = new Set,
  h = new Map,
  g = new Map,
  E = new Map,
  b = new Map,
  y = null;

function O(e) {
  let t = d.default.getCurrentUser(),
    n = u.Z.getGuild(e);
  if (null == n || null == t) returnfalse;
  let r = new Set,
    i = new Set,
    a = new Set;
  if (b.set(e, (0, o.eM)(n, t)), n.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
    var _;
    let o = l.ZP.getMember(e, t.id),
      u = new Set(null != (_ = null == o ? true : o.roles) ? _ : []);
    for (let t of c.Z.getSortedRoles(n.id))(0, f.Z)(t) && (r.add(t.id), (0, f.h)(t) && (i.add(t.id), u.has(t.id) && a.add(t.id))), u.has(t.id) && (0, s.Fs)(t, p.Plq.ADMINISTRATOR) && b.set(e, true)
  }
  return h.set(e, r), E.set(e, a), g.set(e, i), true
}

function v() {
  let e = Chunk430824.Z.getGuildsArray(),
    t = new Set;
  for (let n of module) require.features.has(Chunk981631.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && exports.add(require.id);
  return y = exports, exports
}

function S() {
  h.clear(), E.clear(), g.clear(), b.clear(), y = null
}

function I(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  if ((null == y ? true : y.has(t)) !== true) returnfalse;
  let n = new Set(y);
  n.delete(t), y = n
}

function T(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  if (null == y) returnfalse;
  let n = u.Z.getGuild(t);
  if (null == n) returnfalse;
  let r = n.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
  if (r && !y.has(t)) {
    let e = new Set(y);
    return e.add(t), y = e, true
  }
  if (!r && y.has(t)) {
    let e = new Set(y);
    return e.delete(t), y = e, true
  }
  returnfalse
}

function C(e) {
  let {
    guildId: t
  } = e;
  return !!h.has(t) && O(t)
}

function A(e) {
  let {
    guildId: t,
    user: n
  } = e, r = d.default.getCurrentUser();
  return !!(n.id === (null == r ? true : r.id) && h.has(t)) && O(t)
}
class N extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk430824.Z, Chunk485386.Z, Chunk594174.default, Chunk271383.ZP)
  }
  getGuildIdsWithPurchasableRoles() {
    return null == y ? v() : y
  }
  buildRoles(e) {
    h.has(e) || O(e)
  }
  getSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null != (t = h.get(e)) ? t : m
  }
  getPurchasableSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null != (t = g.get(e)) ? t : m
  }
  getUserSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null != (t = E.get(e)) ? t : m
  }
  getUserIsAdmin(e) {
    var t;
    return this.buildRoles(e), null != (t = b.get(e)) && t
  }
}
_(N, "displayName", "SubscriptionRoleStore");
let P = new N(Chunk570140.Z, {
  CONNECTION_OPEN: S,
  LOGOUT: S,
  GUILD_CREATE: T,
  GUILD_DELETE: I,
  GUILD_UPDATE: T,
  GUILD_ROLE_CREATE: C,
  GUILD_ROLE_UPDATE: C,
  GUILD_ROLE_DELETE: C,
  GUILD_MEMBER_UPDATE: A
})