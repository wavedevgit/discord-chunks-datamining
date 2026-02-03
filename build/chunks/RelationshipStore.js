/** Chunk was on web.js **/
/** chunk id: 994500, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => F
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk383233 = require("./383233.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

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
let p = 3e5,
  _ = new Map,
  h = {},
  m = {},
  g = new Set,
  E = new Set,
  y = new Set,
  b = {},
  O = 0,
  v = {},
  A = 0,
  I = 0,
  S = 0,
  T = {
    friends: true,
    blocked: true,
    ignored: true,
    blockedOrIgnored: true
  };

function C() {
  T.friends = true, T.blocked = true, T.ignored = true, T.blockedOrIgnored = true
}
let N = new Map;

function w(e, t) {
  let n = _.get(e);
  if (n === t) return;
  if (null != n) {
    var r;
    null == (r = N.get(n)) || r.delete(e)
  }
  _.set(e, t);
  let i = N.get(t);
  null != i ? i.add(e) : N.set(t, new Set([e])), C()
}

function R(e) {
  var t;
  let n = _.get(e);
  null != n && (_.delete(e), null == (t = N.get(n)) || t.delete(e), C())
}

function P() {
  var e, t;
  I = g.size, S = y.size, A = Math.max((null != (e = null == (t = N.get(l.eA$.PENDING_INCOMING)) ? true : t.size) ? e : 0) - I - S, 0), O++
}

function D(e) {
  _.clear(), N.clear(), h = {}, m = {}, E.clear(), g.clear(), y.clear(), C(), b = {}, v = {}, e.relationships.forEach(e => {
    w(e.id, e.type), null != e.nickname && (h[e.id] = e.nickname), null != e.since && (m[e.id] = e.since), e.is_spam_request && g.add(e.id), null != e.origin_application_id && (b[e.id] = e.origin_application_id), e.user_ignored && (E.add(e.id), e.type === l.eA$.PENDING_INCOMING && y.add(e.id))
  }), P()
}

function L(e) {
  for (let [t, n] of(_.clear(), N.clear(), e.relationships)) w(t, n);
  P()
}

function x(e) {
  let t = _.get(e.relationship.id);
  w(e.relationship.id, e.relationship.type), null != e.relationship.nickname && (h = f(u({}, h), {
    [e.relationship.id]: e.relationship.nickname
  })), null != e.relationship.since && (m = f(u({}, m), {
    [e.relationship.id]: e.relationship.since
  })), null != e.relationship.originApplicationId && (b = f(u({}, b), {
    [e.relationship.id]: e.relationship.originApplicationId
  })), e.relationship.isSpamRequest ? g.add(e.relationship.id) : g.delete(e.relationship.id), e.relationship.userIgnored ? (E.add(e.relationship.id), e.relationship.type === l.eA$.PENDING_INCOMING ? y.add(e.relationship.id) : e.relationship.type === l.eA$.FRIEND && y.delete(e.relationship.id)) : (E.delete(e.relationship.id), y.delete(e.relationship.id)), P(), e.relationship.type === l.eA$.FRIEND && t === l.eA$.PENDING_OUTGOING && a.h.dispatch({
    type: "FRIEND_REQUEST_ACCEPTED",
    user: e.relationship.user
  })
}

function M(e) {
  R(e.relationship.id), null != h[e.relationship.id] && (h = u({}, h), delete h[e.relationship.id]), null != m[e.relationship.id] && (m = u({}, m), delete m[e.relationship.id]), null != b[e.relationship.id] && (b = u({}, b), delete b[e.relationship.id]), e.relationship.userIgnored || E.delete(e.relationship.id), y.delete(e.relationship.id), g.delete(e.relationship.id), P()
}

function j(e) {
  let {
    relationship: t
  } = e;
  w(t.id, t.type), null == t.since ? delete m[t.id] : m[t.id] = t.since, null == t.nickname ? delete h[t.id] : h[t.id] = t.nickname, t.isSpamRequest ? g.add(t.id) : g.delete(t.id), null != v[t.id] && delete v[t.id], null == t.originApplicationId ? delete b[t.id] : b[t.id] = t.originApplicationId, t.userIgnored ? (E.add(t.id), t.type === l.eA$.PENDING_INCOMING && y.add(t.id)) : (E.delete(t.id), y.delete(t.id)), P()
}

function k(e) {
  for (let e of _.keys()) _.get(e) === l.eA$.PENDING_INCOMING && (R(e), g.delete(e), y.delete(e), delete v[e]);
  P()
}

function U(e) {
  v[e.userId] = {
    expiry: Date.now() + p,
    isStranger: e.isStranger
  }
}
class G extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(s.default)
  }
  isFriend(e) {
    return null != e && _.get(e) === l.eA$.FRIEND
  }
  isBlockedOrIgnored(e) {
    return this.isBlocked(e) || this.isIgnored(e)
  }
  isBlockedOrIgnoredForMessage(e) {
    return this.isBlockedForMessage(e) || this.isIgnoredForMessage(e)
  }
  isBlocked(e) {
    return null != e && _.get(e) === l.eA$.BLOCKED
  }
  isBlockedForMessage(e) {
    var t, n, r, i;
    if (null != e.author && _.get(e.author.id) === l.eA$.BLOCKED) returntrue;
    if (e instanceof o.Ay) {
      if (this.isBlocked(null == (i = e.interactionMetadata) || null == (r = i.user) ? true : r.id)) returntrue
    } else if (this.isBlocked(null == (n = e.interaction_metadata) || null == (t = n.user) ? true : t.id)) returntrue;
    returnfalse
  }
  isIgnored(e) {
    return null != e && _.get(e) !== l.eA$.BLOCKED && E.has(e)
  }
  isIgnoredForMessage(e) {
    var t, n, r, i;
    if (null != e.author && this.isIgnored(e.author.id)) returntrue;
    if (e instanceof o.Ay) {
      if (this.isIgnored(null == (i = e.interactionMetadata) || null == (r = i.user) ? true : r.id)) returntrue
    } else if (this.isIgnored(null == (n = e.interaction_metadata) || null == (t = n.user) ? true : t.id)) returntrue;
    returnfalse
  }
  isUnfilteredPendingIncoming(e) {
    return _.get(e) === l.eA$.PENDING_INCOMING && !this.isSpam(e) && !this.isIgnored(e)
  }
  getPendingCount() {
    return A
  }
  getSpamCount() {
    return I
  }
  getPendingIgnoredCount() {
    return S
  }
  getOutgoingCount() {
    var e, t;
    return null != (e = null == (t = N.get(l.eA$.PENDING_OUTGOING)) ? true : t.size) ? e : 0
  }
  getFriendCount() {
    var e, t;
    return null != (e = null == (t = N.get(l.eA$.FRIEND)) ? true : t.size) ? e : 0
  }
  getRelationshipCount() {
    return _.size
  }
  getMutableRelationships() {
    return _
  }
  getVersion() {
    return O
  }
  isSpam(e) {
    return g.has(e)
  }
  getRelationshipType(e) {
    let t = _.get(e);
    return null != t ? t : l.eA$.NONE
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
    if (null == T.friends) {
      var e;
      T.friends = Array.from(null != (e = N.get(l.eA$.FRIEND)) ? e : [])
    }
    return T.friends
  }
  getBlockedIDs() {
    if (null == T.blocked) {
      var e;
      T.blocked = Array.from(null != (e = N.get(l.eA$.BLOCKED)) ? e : [])
    }
    return T.blocked
  }
  getIgnoredIDs() {
    return null == T.ignored && (T.ignored = Array.from(E.values()).filter(e => this.isIgnored(e))), T.ignored
  }
  getBlockedOrIgnoredIDs() {
    if (null == T.blockedOrIgnored) {
      let e = new Set(E),
        t = N.get(l.eA$.BLOCKED);
      if (null != t)
        for (let n of t) e.add(n);
      T.blockedOrIgnored = Array.from(e.values())
    }
    return T.blockedOrIgnored
  }
  getOriginApplicationId(e) {
    return b[e]
  }
  isStranger(e) {
    if (null != v[e]) return v[e].expiry < Date.now() ? void delete v[e] : v[e].isStranger
  }
}
c(G, "displayName", "RelationshipStore");
let F = new G(Chunk73153.h, {
  CONNECTION_OPEN: D,
  OVERLAY_INITIALIZE: L,
  RELATIONSHIP_ADD: x,
  RELATIONSHIP_REMOVE: M,
  RELATIONSHIP_UPDATE: j,
  RELATIONSHIP_PENDING_INCOMING_REMOVED: k,
  UPDATE_STRANGER_STATUS: U
})