/** Chunk was on web.js **/
/** chunk id: 831506, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js"),
  Chunk699516 = require("./699516.js"),
  Chunk885110 = require("./885110.js"),
  Chunk981631 = require("./981631.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let p = {},
  h = new Map;

function m(e, t) {
  var n;
  return (null != (n = p[e]) ? n : {})[t]
}

function g(e, t) {
  let n = m(e, t);
  if (null == n) return;
  let r = p[e];
  delete r[t], a().isEmpty(r) && delete p[e];
  let i = h.get(n);
  null != i && (i.delete(e), 0 === i.size && h.delete(n))
}

function E(e, t, n) {
  var r;
  let i = p[e];
  if (null == i && (i = p[e] = {}), i[t] = n, c.Z.isBlocked(e) || c.Z.isIgnored(e)) return;
  let a = null != (r = h.get(n)) ? r : new Set;
  h.set(n, a), a.add(e)
}

function b(e, t, n, r) {
  let i = n.find(e => null != e.party && e.party.id),
    a = null != i && null != i.party ? i.party.id : null,
    o = m(t, e);
  if (null == a || r === d.Skl.OFFLINE) return null != o && void g(t, e);
  if (null != o) {
    if (o === a) returnfalse;
    g(t, e)
  }
  E(t, e, a)
}

function y(e) {
  let {
    guilds: t,
    presences: n
  } = e, r = false;
  for (let {
      user: e,
      status: t,
      activities: i
    }
    of n) null != e && false !== b(d.ME, e.id, i, t) && (r = true);
  for (let e of t) false !== v({
    guild: e
  }) && (r = true);
  return r
}

function O(e) {
  let {
    parties: t,
    userParties: n
  } = e;
  h = new Map, p = _({}, n), Object.keys(t).forEach(e => h.set(e, new Set(t[e])))
}

function v(e) {
  let {
    guild: t
  } = e, n = false;
  for (let {
      user: e,
      status: r,
      activities: i
    }
    of t.presences) false !== b(t.id, e.id, i, r) && (n = true);
  return n
}

function I(e) {
  let {
    presences: t
  } = e, n = false;
  for (let {
      user: e,
      activities: r
    }
    of t) null != e && false !== b(d.ME, e.id, r) && (n = true);
  return n
}

function T(e) {
  let {
    updates: t
  } = e;
  return t.map(e => {
    let {
      guildId: t,
      user: n,
      status: r,
      activities: i
    } = e;
    return b(null != t ? t : d.ME, n.id, i, r)
  }).some(e => e)
}

function S(e) {
  let {
    guildId: t,
    members: n
  } = e;
  return C(t, n.map(e => e.presence))
}

function A(e) {
  let {
    guildId: t,
    addedMembers: n
  } = e;
  return null != n && C(t, n.map(e => e.presence))
}

function C(e, t) {
  let n = false;
  return t.forEach(t => {
    null != t && b(e, t.user.id, t.activities, t.status) && (n = true)
  }), n
}

function N() {
  let e = Chunk314897.default.getId(),
    t = Chunk885110.Z.getActivities();
  return b(Chunk981631.ME, module, exports)
}

function R(e) {
  let {
    relationship: t
  } = e;
  if (!c.Z.isBlocked(t.id) && !c.Z.isIgnored(t.id)) returnfalse;
  let n = p[t.id];
  if (null == n) returnfalse;
  for (let e of a().values(n)) {
    let n = h.get(e);
    null != n && n.delete(t.id)
  }
}

function P(e) {
  let {
    relationship: t
  } = e, n = p[t.id];
  if (null == n) returnfalse;
  for (let e of a().values(n)) {
    let n = h.get(e);
    null != n && n.add(t.id)
  }
}
class D extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk885110.Z], N), this.waitFor(Chunk314897.default, Chunk699516.Z, Chunk885110.Z)
  }
  getParty(e) {
    return null != e && h.has(e) ? h.get(e) : null
  }
  getUserParties() {
    return p
  }
  getParties() {
    return h
  }
}
f(D, "displayName", "GamePartyStore");
let w = new D(Chunk570140.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: y,
  OVERLAY_INITIALIZE: O,
  GUILD_CREATE: v,
  PRESENCES_REPLACE: I,
  PRESENCE_UPDATES: T,
  THREAD_MEMBER_LIST_UPDATE: S,
  THREAD_MEMBERS_UPDATE: A,
  RELATIONSHIP_ADD: R,
  RELATIONSHIP_UPDATE: R,
  RELATIONSHIP_REMOVE: P
})