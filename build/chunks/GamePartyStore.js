/** Chunk was on web.js **/
/** chunk id: 629016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js"),
  Chunk994500 = require("./994500.js"),
  Chunk461213 = require("./461213.js"),
  Chunk652215 = require("./652215.js");

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
  h = new Map;

function m(e, t) {
  var n;
  return (null != (n = _[e]) ? n : {})[t]
}

function g(e, t) {
  let n = m(e, t);
  if (null == n) return;
  let r = _[e];
  delete r[t], a().isEmpty(r) && delete _[e];
  let i = h.get(n);
  null != i && (i.delete(e), 0 === i.size && h.delete(n))
}

function E(e, t, n) {
  var r;
  let i = _[e];
  if (null == i && (i = _[e] = {}), i[t] = n, c.A.isBlocked(e) || c.A.isIgnored(e)) return;
  let a = null != (r = h.get(n)) ? r : new Set;
  h.set(n, a), a.add(e)
}

function y(e, t, n, r) {
  let i = n.find(e => null != e.party && e.party.id),
    a = null != i && null != i.party ? i.party.id : null,
    s = m(t, e);
  if (null == a || r === d.clD.OFFLINE) return null != s && void g(t, e);
  if (null != s) {
    if (s === a) returnfalse;
    g(t, e)
  }
  E(t, e, a)
}

function b(e) {
  let {
    guilds: t,
    presences: n
  } = e, r = false;
  for (let {
      user: e,
      status: t,
      activities: i
    }
    of n) null != e && false !== y(d.ME, e.id, i, t) && (r = true);
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
  h = new Map, _ = p({}, n), Object.keys(t).forEach(e => h.set(e, new Set(t[e])))
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
    of t.presences) false !== y(t.id, e.id, i, r) && (n = true);
  return n
}

function A(e) {
  let {
    presences: t
  } = e, n = false;
  for (let {
      user: e,
      activities: r
    }
    of t) null != e && false !== y(d.ME, e.id, r) && (n = true);
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
    return y(null != t ? t : d.ME, n.id, i, r)
  }).some(e => e)
}

function S(e) {
  let {
    guildId: t,
    members: n
  } = e;
  return C(t, n.map(e => e.presence))
}

function T(e) {
  let {
    guildId: t,
    addedMembers: n
  } = e;
  return null != n && C(t, n.map(e => e.presence))
}

function C(e, t) {
  let n = false;
  return t.forEach(t => {
    null != t && y(e, t.user.id, t.activities, t.status) && (n = true)
  }), n
}

function N() {
  let e = l.default.getId(),
    t = u.A.getActivities();
  return y(d.ME, e, t)
}

function w(e) {
  let {
    relationship: t
  } = e;
  if (!c.A.isBlocked(t.id) && !c.A.isIgnored(t.id)) returnfalse;
  let n = _[t.id];
  if (null == n) returnfalse;
  for (let e of a().values(n)) {
    let n = h.get(e);
    null != n && n.delete(t.id)
  }
}

function R(e) {
  let {
    relationship: t
  } = e, n = _[t.id];
  if (null == n) returnfalse;
  for (let e of a().values(n)) {
    let n = h.get(e);
    null != n && n.add(t.id)
  }
}
class P extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith([u.A], N), this.waitFor(l.default, c.A, u.A)
  }
  getParty(e) {
    return null != e && h.has(e) ? h.get(e) : null
  }
  getUserParties() {
    return _
  }
  getParties() {
    return h
  }
}
f(P, "displayName", "GamePartyStore");
let D = new P(Chunk73153.h, {
  CONNECTION_OPEN_SUPPLEMENTAL: b,
  OVERLAY_INITIALIZE: O,
  GUILD_CREATE: v,
  PRESENCES_REPLACE: A,
  PRESENCE_UPDATES: I,
  THREAD_MEMBER_LIST_UPDATE: S,
  THREAD_MEMBERS_UPDATE: T,
  RELATIONSHIP_ADD: w,
  RELATIONSHIP_UPDATE: w,
  RELATIONSHIP_REMOVE: R
})