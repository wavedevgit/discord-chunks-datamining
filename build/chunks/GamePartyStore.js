/** Chunk was on web.js **/
/** chunk id: 831506, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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

function p(e) {
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
let _ = {},
  m = new Map;

function h(e, t) {
  var n;
  return (null != (n = _[e]) ? n : {})[t]
}

function g(e, t) {
  let n = h(e, t);
  if (null == n) return;
  let r = _[e];
  delete r[t], o().isEmpty(r) && delete _[e];
  let i = m.get(n);
  null != i && (i.delete(e), 0 === i.size && m.delete(n))
}

function E(e, t, n) {
  var r;
  let i = _[e];
  if (null == i && (i = _[e] = {}), i[t] = n, c.Z.isBlocked(e) || c.Z.isIgnored(e)) return;
  let o = null != (r = m.get(n)) ? r : new Set;
  m.set(n, o), o.add(e)
}

function b(e, t, n, r) {
  let i = n.find(e => null != e.party && e.party.id),
    o = null != i && null != i.party ? i.party.id : null,
    a = h(t, e);
  if (null == o || r === d.Skl.OFFLINE) return null != a && void g(t, e);
  if (null != a) {
    if (a === o) returnfalse;
    g(t, e)
  }
  E(t, e, o)
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
  m = new Map, _ = p({}, n), Object.keys(t).forEach(e => m.set(e, new Set(t[e])))
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

function S(e) {
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

function I(e) {
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

function T(e) {
  let {
    guildId: t,
    members: n
  } = e;
  return A(t, n.map(e => e.presence))
}

function C(e) {
  let {
    guildId: t,
    addedMembers: n
  } = e;
  return null != n && A(t, n.map(e => e.presence))
}

function A(e, t) {
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

function P(e) {
  let {
    relationship: t
  } = e;
  if (!c.Z.isBlocked(t.id) && !c.Z.isIgnored(t.id)) returnfalse;
  let n = _[t.id];
  if (null == n) returnfalse;
  for (let e of o().values(n)) {
    let n = m.get(e);
    null != n && n.delete(t.id)
  }
}

function R(e) {
  let {
    relationship: t
  } = e, n = _[t.id];
  if (null == n) returnfalse;
  for (let e of o().values(n)) {
    let n = m.get(e);
    null != n && n.add(t.id)
  }
}
class w extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk885110.Z], N), this.waitFor(Chunk314897.default, Chunk699516.Z, Chunk885110.Z)
  }
  getParty(e) {
    return null != e && m.has(e) ? m.get(e) : null
  }
  getUserParties() {
    return _
  }
  getParties() {
    return m
  }
}
f(w, "displayName", "GamePartyStore");
let D = new w(Chunk570140.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: y,
  OVERLAY_INITIALIZE: O,
  GUILD_CREATE: v,
  PRESENCES_REPLACE: S,
  PRESENCE_UPDATES: I,
  THREAD_MEMBER_LIST_UPDATE: T,
  THREAD_MEMBERS_UPDATE: C,
  RELATIONSHIP_ADD: P,
  RELATIONSHIP_UPDATE: P,
  RELATIONSHIP_REMOVE: R
})