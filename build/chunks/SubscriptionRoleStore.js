/** Chunk was on web.js **/
/** chunk id: 384684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk260509 = require("./260509.js"),
  Chunk34457 = require("./34457.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk98318 = require("./98318.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = new Set,
  m = new Map,
  g = new Map,
  E = new Map,
  y = new Map,
  b = null;

function O(e) {
  let t = d.default.getCurrentUser(),
    n = u.A.getGuild(e);
  if (null == n || null == t) returnfalse;
  let r = new Set,
    i = new Set,
    a = new Set;
  if (y.set(e, (0, o.bM)(n, t)), n.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
    var _;
    let o = l.Ay.getMember(e, t.id),
      u = new Set(null != (_ = null == o ? true : o.roles) ? _ : []);
    for (let t of c.A.getSortedRoles(n.id))(0, f.U)(t) && (r.add(t.id), (0, f.X)(t) && (i.add(t.id), u.has(t.id) && a.add(t.id))), u.has(t.id) && (0, s._m)(t, p.xBc.ADMINISTRATOR) && y.set(e, true)
  }
  return m.set(e, r), E.set(e, a), g.set(e, i), true
}

function v() {
  let e = u.A.getGuildsArray(),
    t = new Set;
  for (let n of e) n.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && t.add(n.id);
  return b = t, t
}

function A() {
  m.clear(), E.clear(), g.clear(), y.clear(), b = null
}

function I(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  if ((null == b ? true : b.has(t)) !== true) returnfalse;
  let n = new Set(b);
  n.delete(t), b = n
}

function S(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  if (null == b) returnfalse;
  let n = u.A.getGuild(t);
  if (null == n) returnfalse;
  let r = n.features.has(p.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
  if (r && !b.has(t)) {
    let e = new Set(b);
    return e.add(t), b = e, true
  }
  if (!r && b.has(t)) {
    let e = new Set(b);
    return e.delete(t), b = e, true
  }
  returnfalse
}

function T(e) {
  let {
    guildId: t
  } = e;
  return !!m.has(t) && O(t)
}

function C(e) {
  let {
    guildId: t,
    user: n
  } = e, r = d.default.getCurrentUser();
  return !!(n.id === (null == r ? true : r.id) && m.has(t)) && O(t)
}
class N extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(u.A, c.A, d.default, l.Ay)
  }
  getGuildIdsWithPurchasableRoles() {
    return null == b ? v() : b
  }
  buildRoles(e) {
    m.has(e) || O(e)
  }
  getSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null != (t = m.get(e)) ? t : h
  }
  getPurchasableSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null != (t = g.get(e)) ? t : h
  }
  getUserSubscriptionRoles(e) {
    var t;
    return this.buildRoles(e), null != (t = E.get(e)) ? t : h
  }
  getUserIsAdmin(e) {
    var t;
    return this.buildRoles(e), null != (t = y.get(e)) && t
  }
}
_(N, "displayName", "SubscriptionRoleStore");
let w = new N(Chunk73153.h, {
  CONNECTION_OPEN: A,
  LOGOUT: A,
  GUILD_CREATE: S,
  GUILD_DELETE: I,
  GUILD_UPDATE: S,
  GUILD_ROLE_CREATE: T,
  GUILD_ROLE_UPDATE: T,
  GUILD_ROLE_DELETE: T,
  GUILD_MEMBER_UPDATE: C
})