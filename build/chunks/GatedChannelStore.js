/** Chunk was on web.js **/
/** chunk id: 430198, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk223892 = require("./223892.js"),
  Chunk738774 = require("./738774.js"),
  Chunk644542 = require("./644542.js"),
  Chunk923726 = require("./923726.js"),
  Chunk973542 = require("./973542.js"),
  Chunk790285 = require("./790285.js"),
  Chunk160404 = require("./160404.js"),
  Chunk131704 = require("./131704.js"),
  Chunk345162 = require("./345162.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = {},
  I = new Set;

function T(e, t) {
  if (null == e) returnfalse;
  let n = b.default.getCurrentUser();
  if (null == n) returnfalse;
  let r = m.ZP.getMember(t, n.id);
  return null != r && r.roles.includes(e.id)
}

function S(e) {
  let {
    guildId: t,
    role: n,
    isPreviewingRoles: r
  } = e;
  return !!(0, u.Z)(n) && !!(r || (0, u.h)(null != n ? n : true) || T(n, t))
}

function A(e, t) {
  if (!t.features.has(y.GuildFeatures.CREATOR_MONETIZABLE) && !t.features.has(y.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) returnfalse;
  let n = f.Z.isViewingServerShop(t.id);
  for (let r of Object.keys(e.permissionOverwrites)) {
    let i = g.Z.getRole(t.id, r);
    if (!S({
        guildId: t.id,
        role: i,
        isPreviewingRoles: n
      })) continue;
    let a = e.permissionOverwrites[r];
    if ((0, d.TG)(e, a)) returntrue
  }
  let r = g.Z.getEveryoneRole(t),
    i = !(0, p.Fs)(r, y.Plq.VIEW_CHANNEL),
    a = (0, d.wB)(e, e.permissionOverwrites[t.id]);
  if (i && !a) {
    for (let e of g.Z.getSortedRoles(t.id))
      if (S({
          guildId: t.id,
          role: e,
          isPreviewingRoles: n
        }) && (0, d.yt)(e)) returntrue
  }
  returnfalse
}

function C(e) {
  let t = E.Z.getGuild(e);
  if (null == t) return;
  let n = v[e] = new Set;
  if (!t.features.has(y.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) || !(0, c.kT)(e) && !(0, o.Rw)(t)) return;
  let r = h.Z.getMutableGuildChannelsForGuild(e);
  for (let e in r) {
    let i = r[e];
    A(i, t) && n.add(i.id)
  }
}

function N(e, t) {
  let n = v[e];
  if (null == n) returnfalse;
  let r = h.Z.getChannel(t);
  if (null == r) returnfalse;
  let i = E.Z.getGuild(r.getGuildId());
  if (null == i) returnfalse;
  let a = n.has(t),
    o = A(r, i);
  return a !== o && (o ? n.add(t) : n.delete(t), true)
}

function R() {
  v = {}, I.clear()
}

function P(e) {
  let {
    guild: t
  } = e;
  delete v[t.id]
}

function w(e) {
  let {
    guildId: t
  } = e;
  delete v[t]
}

function D(e) {
  let {
    channel: t
  } = e;
  return null != t.guild_id && N(t.guild_id, t.id)
}

function L(e) {
  let {
    channels: t
  } = e, n = false;
  for (let e of t) null != e.guild_id && N(e.guild_id, e.id) && (n = true);
  return n
}

function x(e) {
  let {
    guildId: t,
    restrictions: n
  } = e;
  (0, s.uq)(n) ? I.add(t): I.delete(t)
}

function M(e) {
  let {
    guildId: t
  } = e;
  I.add(t)
}
class k extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk271383.ZP, Chunk485386.Z, Chunk430824.Z, Chunk160404.Z, Chunk594174.default), Chunk644542.Zo.subscribe({
      location: "1"
    }, () => R())
  }
  isChannelGated(e, t) {
    if (null == e) returnfalse;
    let n = v[e];
    return null == n && (C(e), n = v[e]), null != n && n.has(t)
  }
  isChannelGatedAndVisible(e, t) {
    return null != e && this.isChannelGated(e, t) && !I.has(e)
  }
  isChannelOrThreadParentGated(e, t) {
    if (null == e) returnfalse;
    if (this.isChannelGated(e, t)) returntrue;
    let n = h.Z.getChannel(t);
    return !!(null != n && null != n.parent_id && _.Ec.has(null == n ? true : n.type)) && this.isChannelOrThreadParentGated(e, n.parent_id)
  }
}
O(k, "displayName", "GatedChannelStore");
let j = new k(Chunk570140.Z, {
  CONNECTION_OPEN: R,
  OVERLAY_INITIALIZE: R,
  CACHE_LOADED_LAZY: R,
  GUILD_CREATE: P,
  GUILD_UPDATE: P,
  GUILD_DELETE: P,
  GUILD_ROLE_CREATE: w,
  GUILD_ROLE_UPDATE: w,
  GUILD_ROLE_DELETE: w,
  IMPERSONATE_UPDATE: w,
  IMPERSONATE_STOP: w,
  CHANNEL_CREATE: D,
  CHANNEL_DELETE: D,
  CHANNEL_UPDATES: L,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: x,
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: M
})