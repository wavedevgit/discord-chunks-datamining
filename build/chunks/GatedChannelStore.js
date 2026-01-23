/** Chunk was on web.js **/
/** chunk id: 717125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk836039 = require("./836039.js"),
  Chunk98318 = require("./98318.js"),
  Chunk855918 = require("./855918.js"),
  Chunk164956 = require("./164956.js"),
  Chunk95701 = require("./95701.js"),
  Chunk34457 = require("./34457.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = {},
  b = new Set;

function O(e, t) {
  if (null == e) returnfalse;
  let n = m.default.getCurrentUser();
  if (null == n) returnfalse;
  let r = p.Ay.getMember(t, n.id);
  return null != r && r.roles.includes(e.id)
}

function v(e) {
  let {
    guildId: t,
    role: n,
    isPreviewingRoles: r
  } = e;
  return !!(0, o.U)(n) && !!(r || (0, o.X)(null != n ? n : true) || O(n, t))
}

function A(e, t) {
  if (!t.features.has(g.GuildFeatures.CREATOR_MONETIZABLE) && !t.features.has(g.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) returnfalse;
  let n = c.A.isViewingServerShop(t.id);
  for (let r of Object.keys(e.permissionOverwrites)) {
    let i = _.A.getRole(t.id, r);
    if (!v({
        guildId: t.id,
        role: i,
        isPreviewingRoles: n
      })) continue;
    let a = e.permissionOverwrites[r];
    if ((0, l.Uj)(e, a)) returntrue
  }
  let r = _.A.getEveryoneRole(t),
    i = !(0, d._m)(r, g.xBc.VIEW_CHANNEL),
    a = (0, l.AN)(e, e.permissionOverwrites[t.id]);
  if (i && !a) {
    for (let e of _.A.getSortedRoles(t.id))
      if (v({
          guildId: t.id,
          role: e,
          isPreviewingRoles: n
        }) && (0, l.iR)(e)) returntrue
  }
  returnfalse
}

function I(e) {
  let t = h.A.getGuild(e);
  if (null == t) return;
  let n = y[e] = new Set;
  if (!t.features.has(g.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) return;
  let r = f.A.getMutableGuildChannelsForGuild(e);
  for (let e in r) {
    let i = r[e];
    A(i, t) && n.add(i.id)
  }
}

function S(e, t) {
  let n = y[e];
  if (null == n) returnfalse;
  let r = f.A.getChannel(t);
  if (null == r) returnfalse;
  let i = h.A.getGuild(r.getGuildId());
  if (null == i) returnfalse;
  let a = n.has(t),
    s = A(r, i);
  return a !== s && (s ? n.add(t) : n.delete(t), true)
}

function T() {
  y = {}, b.clear()
}

function C(e) {
  let {
    guild: t
  } = e;
  delete y[t.id]
}

function N(e) {
  let {
    guildId: t
  } = e;
  delete y[t]
}

function R(e) {
  let {
    channel: t
  } = e;
  return null != t.guild_id && S(t.guild_id, t.id)
}

function w(e) {
  let {
    channels: t
  } = e, n = false;
  for (let e of t) null != e.guild_id && S(e.guild_id, e.id) && (n = true);
  return n
}

function P(e) {
  let {
    guildId: t,
    restrictions: n
  } = e;
  (0, s.Y5)(n) ? b.add(t): b.delete(t)
}

function D(e) {
  let {
    guildId: t
  } = e;
  b.add(t)
}
class x extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(f.A, p.Ay, _.A, h.A, c.A, m.default)
  }
  isChannelGated(e, t) {
    if (null == e) returnfalse;
    let n = y[e];
    return null == n && (I(e), n = y[e]), null != n && n.has(t)
  }
  isChannelGatedAndVisible(e, t) {
    return null != e && this.isChannelGated(e, t) && !b.has(e)
  }
  isChannelOrThreadParentGated(e, t) {
    if (null == e) returnfalse;
    if (this.isChannelGated(e, t)) returntrue;
    let n = f.A.getChannel(t);
    return !!(null != n && null != n.parent_id && u.Le.has(null == n ? true : n.type)) && this.isChannelOrThreadParentGated(e, n.parent_id)
  }
}
E(x, "displayName", "GatedChannelStore");
let L = new x(Chunk73153.h, {
  CONNECTION_OPEN: T,
  OVERLAY_INITIALIZE: T,
  CACHE_LOADED_LAZY: T,
  GUILD_CREATE: C,
  GUILD_UPDATE: C,
  GUILD_DELETE: C,
  GUILD_ROLE_CREATE: N,
  GUILD_ROLE_UPDATE: N,
  GUILD_ROLE_DELETE: N,
  IMPERSONATE_UPDATE: N,
  IMPERSONATE_STOP: N,
  CHANNEL_CREATE: R,
  CHANNEL_DELETE: R,
  CHANNEL_UPDATES: w,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: P,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: D
})