/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => B
}), n(47120);
var r, i = n(392711),
  o = n.n(i),
  a = n(442837),
  s = n(570140),
  l = n(23750),
  c = n(709054),
  u = n(594174),
  d = n(981631);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = 3e5,
  m = {},
  E = {},
  v = {},
  b = new Set,
  y = new Set,
  O = new Set,
  S = {},
  I = {},
  T = 0,
  N = 0,
  A = 0,
  C = 0,
  R = 0,
  P = 0;

function D() {
  C = Object.values(m).length;
  let {
    [d.OGo.PENDING_INCOMING]: e = 0, [d.OGo.PENDING_OUTGOING]: t = 0, [d.OGo.FRIEND]: n = 0
  } = o().countBy(Object.values(m), e => e);
  N = t, A = n, R = b.size, P = O.size, T = Math.max(e - R - P, 0)
}

function w(e) {
  m = {}, E = {}, v = {}, y = new Set, b = new Set, O = new Set, S = {}, I = {}, e.relationships.forEach(e => {
    m[e.id] = e.type, null != e.nickname && (E[e.id] = e.nickname), null != e.since && (v[e.id] = e.since), e.is_spam_request && b.add(e.id), null != e.origin_application_id && (S[e.id] = e.origin_application_id), e.user_ignored && (y.add(e.id), e.type === d.OGo.PENDING_INCOMING && O.add(e.id))
  }), D()
}

function L(e) {
  m = _({}, e.relationships), D()
}

function x(e) {
  let t = m[e.relationship.id];
  m = h(_({}, m), {
    [e.relationship.id]: e.relationship.type
  }), null != e.relationship.nickname && (E = h(_({}, E), {
    [e.relationship.id]: e.relationship.nickname
  })), null != e.relationship.since && (v = h(_({}, v), {
    [e.relationship.id]: e.relationship.since
  })), null != e.relationship.originApplicationId && (S = h(_({}, S), {
    [e.relationship.id]: e.relationship.originApplicationId
  })), e.relationship.isSpamRequest ? b.add(e.relationship.id) : b.delete(e.relationship.id), e.relationship.userIgnored ? (y.add(e.relationship.id), e.relationship.type === d.OGo.PENDING_INCOMING ? O.add(e.relationship.id) : e.relationship.type === d.OGo.FRIEND && O.delete(e.relationship.id)) : (y.delete(e.relationship.id), O.delete(e.relationship.id)), D(), e.relationship.type === d.OGo.FRIEND && t === d.OGo.PENDING_OUTGOING && s.Z.dispatch({
    type: "FRIEND_REQUEST_ACCEPTED",
    user: e.relationship.user
  })
}

function M(e) {
  m = _({}, m), delete m[e.relationship.id], null != E[e.relationship.id] && (E = _({}, E), delete E[e.relationship.id]), null != v[e.relationship.id] && (v = _({}, v), delete v[e.relationship.id]), null != S[e.relationship.id] && (S = _({}, S), delete S[e.relationship.id]), e.relationship.userIgnored || (y.delete(e.relationship.id), O.delete(e.relationship.id)), b.delete(e.relationship.id), D()
}

function k(e) {
  let {
    relationship: t
  } = e;
  m = h(_({}, m), {
    [t.id]: t.type
  }), null == t.since ? delete v[t.id] : v[t.id] = t.since, null == t.nickname ? delete E[t.id] : E[t.id] = t.nickname, t.isSpamRequest ? b.add(t.id) : b.delete(t.id), null != I[t.id] && delete I[t.id], null == t.originApplicationId ? delete S[t.id] : S[t.id] = t.originApplicationId, t.userIgnored ? (y.add(t.id), t.type === d.OGo.PENDING_INCOMING && O.add(t.id)) : (y.delete(t.id), O.delete(t.id)), D()
}

function j(e) {
  m = _({}, m), c.default.keys(m).forEach(e => {
    m[e] === d.OGo.PENDING_INCOMING && (delete m[e], b.delete(e), O.delete(e), delete I[e])
  }), D()
}

function U(e) {
  I[e.userId] = {
    expiry: Date.now() + g,
    isStranger: e.isStranger
  }
}
class G extends(r = a.ZP.Store) {
  initialize() {
    this.waitFor(u.default)
  }
  isFriend(e) {
    return null != e && m[e] === d.OGo.FRIEND
  }
  isBlockedOrIgnored(e) {
    return this.isBlocked(e) || this.isIgnored(e)
  }
  isBlockedOrIgnoredForMessage(e) {
    return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e)
  }
  isBlocked(e) {
    return null != e && m[e] === d.OGo.BLOCKED
  }
  isBlockedForMessage(e) {
    var t, n, r, i;
    if (null != e.author && m[e.author.id] === d.OGo.BLOCKED) return !0;
    if (e instanceof l.ZP) {
      if (this.isBlocked(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id)) return !0
    } else if (this.isBlocked(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
    return !1
  }
  isIgnored(e) {
    return null != e && m[e] !== d.OGo.BLOCKED && y.has(e)
  }
  isIgnoredForMessage(e) {
    var t, n, r, i;
    if (null != e.author && this.isIgnored(e.author.id)) return !0;
    if (e instanceof l.ZP) {
      if (this.isIgnored(null === (i = e.interactionMetadata) || void 0 === i ? void 0 : null === (r = i.user) || void 0 === r ? void 0 : r.id)) return !0
    } else if (this.isIgnored(null === (n = e.interaction_metadata) || void 0 === n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.id)) return !0;
    return !1
  }
  isUnfilteredPendingIncoming(e) {
    return m[e] === d.OGo.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e)
  }
  getPendingCount() {
    return T
  }
  getSpamCount() {
    return R
  }
  getPendingIgnoredCount() {
    return P
  }
  getOutgoingCount() {
    return N
  }
  getFriendCount() {
    return A
  }
  getRelationshipCount() {
    return C
  }
  getRelationships() {
    return m
  }
  isSpam(e) {
    return b.has(e)
  }
  getRelationshipType(e) {
    let t = m[e];
    return null != t ? t : d.OGo.NONE
  }
  getNickname(e) {
    return E[e]
  }
  getSince(e) {
    return v[e]
  }
  getSinces() {
    return v
  }
  getFriendIDs() {
    return c.default.keys(m).filter(e => m[e] === d.OGo.FRIEND)
  }
  getBlockedIDs() {
    return c.default.keys(m).filter(e => m[e] === d.OGo.BLOCKED)
  }
  getIgnoredIDs() {
    return c.default.keys(m).filter(e => this.isIgnored(e))
  }
  getBlockedOrIgnoredIDs() {
    return c.default.keys(m).filter(e => this.isBlockedOrIgnored(e))
  }
  getOriginApplicationId(e) {
    return S[e]
  }
  isStranger(e) {
    if (null != I[e]) {
      if (I[e].expiry < Date.now()) {
        delete I[e];
        return
      }
      return I[e].isStranger
    }
  }
}
f(G, "displayName", "RelationshipStore");
let B = new G(s.Z, {
  CONNECTION_OPEN: w,
  OVERLAY_INITIALIZE: L,
  RELATIONSHIP_ADD: x,
  RELATIONSHIP_REMOVE: M,
  RELATIONSHIP_UPDATE: k,
  RELATIONSHIP_PENDING_INCOMING_REMOVED: j,
  UPDATE_STRANGER_STATUS: U
})