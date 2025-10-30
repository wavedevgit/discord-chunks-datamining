/** Chunk was on web.js **/
/** chunk id: 699516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk23750 = require("./23750.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = 3e5,
  p = new Map,
  h = {},
  m = {},
  g = new Set,
  E = new Set,
  b = new Set,
  y = {},
  O = 0,
  v = {},
  I = 0,
  S = 0,
  T = 0,
  A = {
    friends: true,
    blocked: true,
    ignored: true,
    blockedOrIgnored: true
  };

function C() {
  A.friends = true, A.blocked = true, A.ignored = true, A.blockedOrIgnored = true
}
let N = new Map;

function R(e, t) {
  let n = p.get(e);
  if (n === t) return;
  if (null != n) {
    var r;
    null == (r = N.get(n)) || r.delete(e)
  }
  p.set(e, t);
  let i = N.get(t);
  null != i ? i.add(e) : N.set(t, new Set([e])), C()
}

function P(e) {
  var t;
  let n = p.get(e);
  null != n && (p.delete(e), null == (t = N.get(n)) || t.delete(e), C())
}

function w() {
  var e, t;
  S = g.size, T = b.size, I = Math.max((null != (t = null == (e = N.get(Chunk981631.OGo.PENDING_INCOMING)) ? true : module.size) ? exports : 0) - S - T, 0), O++
}

function D(e) {
  p.clear(), N.clear(), h = {}, m = {}, E.clear(), g.clear(), b.clear(), C(), y = {}, v = {}, e.relationships.forEach(e => {
    R(e.id, e.type), null != e.nickname && (h[e.id] = e.nickname), null != e.since && (m[e.id] = e.since), e.is_spam_request && g.add(e.id), null != e.origin_application_id && (y[e.id] = e.origin_application_id), e.user_ignored && (E.add(e.id), e.type === l.OGo.PENDING_INCOMING && b.add(e.id))
  }), w()
}

function L(e) {
  for (let [t, n] of(p.clear(), N.clear(), e.relationships)) R(t, n);
  w()
}

function x(e) {
  let t = p.get(e.relationship.id);
  R(e.relationship.id, e.relationship.type), null != e.relationship.nickname && (h = f(u({}, h), {
    [e.relationship.id]: e.relationship.nickname
  })), null != e.relationship.since && (m = f(u({}, m), {
    [e.relationship.id]: e.relationship.since
  })), null != e.relationship.originApplicationId && (y = f(u({}, y), {
    [e.relationship.id]: e.relationship.originApplicationId
  })), e.relationship.isSpamRequest ? g.add(e.relationship.id) : g.delete(e.relationship.id), e.relationship.userIgnored ? (E.add(e.relationship.id), e.relationship.type === l.OGo.PENDING_INCOMING ? b.add(e.relationship.id) : e.relationship.type === l.OGo.FRIEND && b.delete(e.relationship.id)) : (E.delete(e.relationship.id), b.delete(e.relationship.id)), w(), e.relationship.type === l.OGo.FRIEND && t === l.OGo.PENDING_OUTGOING && a.Z.dispatch({
    type: "FRIEND_REQUEST_ACCEPTED",
    user: e.relationship.user
  })
}

function M(e) {
  P(e.relationship.id), null != h[e.relationship.id] && (h = u({}, h), delete h[e.relationship.id]), null != m[e.relationship.id] && (m = u({}, m), delete m[e.relationship.id]), null != y[e.relationship.id] && (y = u({}, y), delete y[e.relationship.id]), e.relationship.userIgnored || E.delete(e.relationship.id), b.delete(e.relationship.id), g.delete(e.relationship.id), w()
}

function k(e) {
  let {
    relationship: t
  } = e;
  R(t.id, t.type), null == t.since ? delete m[t.id] : m[t.id] = t.since, null == t.nickname ? delete h[t.id] : h[t.id] = t.nickname, t.isSpamRequest ? g.add(t.id) : g.delete(t.id), null != v[t.id] && delete v[t.id], null == t.originApplicationId ? delete y[t.id] : y[t.id] = t.originApplicationId, t.userIgnored ? (E.add(t.id), t.type === l.OGo.PENDING_INCOMING && b.add(t.id)) : (E.delete(t.id), b.delete(t.id)), w()
}

function j(e) {
  for (let e of p.keys()) p.get(e) === l.OGo.PENDING_INCOMING && (P(e), g.delete(e), b.delete(e), delete v[e]);
  w()
}

function U(e) {
  v[e.userId] = {
    expiry: Date.now() + _,
    isStranger: e.isStranger
  }
}
class G extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  isFriend(e) {
    return null != e && p.get(e) === l.OGo.FRIEND
  }
  isBlockedOrIgnored(e) {
    return this.isBlocked(e) || this.isIgnored(e)
  }
  isBlockedOrIgnoredForMessage(e) {
    return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e)
  }
  isBlocked(e) {
    return null != e && p.get(e) === l.OGo.BLOCKED
  }
  isBlockedForMessage(e) {
    var t, n, r, i;
    if (null != e.author && p.get(e.author.id) === l.OGo.BLOCKED) returntrue;
    if (e instanceof o.ZP) {
      if (this.isBlocked(null == (i = e.interactionMetadata) || null == (r = i.user) ? true : r.id)) returntrue
    } else if (this.isBlocked(null == (n = e.interaction_metadata) || null == (t = n.user) ? true : t.id)) returntrue;
    returnfalse
  }
  isIgnored(e) {
    return null != e && p.get(e) !== l.OGo.BLOCKED && E.has(e)
  }
  isIgnoredForMessage(e) {
    var t, n, r, i;
    if (null != e.author && this.isIgnored(e.author.id)) returntrue;
    if (e instanceof o.ZP) {
      if (this.isIgnored(null == (i = e.interactionMetadata) || null == (r = i.user) ? true : r.id)) returntrue
    } else if (this.isIgnored(null == (n = e.interaction_metadata) || null == (t = n.user) ? true : t.id)) returntrue;
    returnfalse
  }
  isUnfilteredPendingIncoming(e) {
    return p.get(e) === l.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e)
  }
  getPendingCount() {
    return I
  }
  getSpamCount() {
    return S
  }
  getPendingIgnoredCount() {
    return T
  }
  getOutgoingCount() {
    var e, t;
    return null != (t = null == (e = N.get(Chunk981631.OGo.PENDING_OUTGOING)) ? true : module.size) ? exports : 0
  }
  getFriendCount() {
    var e, t;
    return null != (t = null == (e = N.get(Chunk981631.OGo.FRIEND)) ? true : module.size) ? exports : 0
  }
  getRelationshipCount() {
    return p.size
  }
  getMutableRelationships() {
    return p
  }
  getVersion() {
    return O
  }
  isSpam(e) {
    return g.has(e)
  }
  getRelationshipType(e) {
    let t = p.get(e);
    return null != t ? t : l.OGo.NONE
  }
  getNickname(e) {
    return h[e]
  }
  getSince(e) {
    return m[e]
  }
  getSinces() {
    return m
  }
  getFriendIDs() {
    if (null == A.friends) {
      var e;
      A.friends = Array.from(null != (e = N.get(Chunk981631.OGo.FRIEND)) ? module : [])
    }
    return A.friends
  }
  getBlockedIDs() {
    if (null == A.blocked) {
      var e;
      A.blocked = Array.from(null != (e = N.get(Chunk981631.OGo.BLOCKED)) ? module : [])
    }
    return A.blocked
  }
  getIgnoredIDs() {
    return null == A.ignored && (A.ignored = Array.from(E.values()).filter(e => this.isIgnored(e))), A.ignored
  }
  getBlockedOrIgnoredIDs() {
    if (null == A.blockedOrIgnored) {
      let e = new Set(E),
        t = N.get(Chunk981631.OGo.BLOCKED);
      if (null != exports)
        for (let n of exports) module.add(require);
      A.blockedOrIgnored = Array.from(module.values())
    }
    return A.blockedOrIgnored
  }
  getOriginApplicationId(e) {
    return y[e]
  }
  isStranger(e) {
    if (null != v[e]) return v[e].expiry < Date.now() ? void delete v[e] : v[e].isStranger
  }
}
c(G, "displayName", "RelationshipStore");
let B = new G(Chunk570140.Z, {
  CONNECTION_OPEN: D,
  OVERLAY_INITIALIZE: L,
  RELATIONSHIP_ADD: x,
  RELATIONSHIP_REMOVE: M,
  RELATIONSHIP_UPDATE: k,
  RELATIONSHIP_PENDING_INCOMING_REMOVED: j,
  UPDATE_STRANGER_STATUS: U
})