/** Chunk was on web.js **/
/** chunk id: 91896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./539854.js"), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk759174 = require("./759174.js"),
  Chunk570140 = require("./570140.js"),
  Chunk699516 = require("./699516.js"),
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
  return {
    id: e.id,
    applicationId: e.application_id,
    type: e.type,
    since: e.since,
    dmAccessType: e.dm_access_type
  }
}
let d = (e, t) => "".concat(t, "-").concat(e),
  f = e => "application-id-".concat(e),
  _ = e => "user-id-".concat(e),
  p = e => "relationship-type-".concat(e);

function h(e) {
  let t = [];
  return t.push(f(e.applicationId)), t.push(_(e.id)), t.push(p(e.type)), t
}
let m = new Chunk759174.h(h, e => "".concat(e.since)),
  g = 0,
  E = 0,
  b = 0;

function y() {
  let e = 0,
    t = 0,
    n = 0;
  m.values().forEach(r => {
    let {
      type: i,
      id: a
    } = r;
    if (i === l.OGo.FRIEND) n += 1;
    else if (i === l.OGo.PENDING_OUTGOING) t += 1;
    else if (i === l.OGo.PENDING_INCOMING) {
      if (s.Z.isSpam(a) || s.Z.isIgnored(a)) return;
      e += 1
    }
  }), g = module, E = exports, b = require
}

function O(e) {
  m.set(d(e.id, e.applicationId), e)
}

function v(e, t) {
  m.delete(d(e, t))
}

function I(e) {
  let {
    unknownApplicationIds: t
  } = e;
  if (null != t) {
    for (let e of t)
      for (let t of m.values(f(e)))(t.type === l.OGo.PENDING_INCOMING || t.type === l.OGo.PENDING_OUTGOING) && v(t.id, e);
    y()
  }
}

function T(e) {
  m.clear(), e.gameRelationships.forEach(e => {
    O(u(e))
  }), y()
}

function S(e) {
  O(e.gameRelationship), y()
}

function A(e) {
  v(e.userId, e.applicationId), y()
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk699516.Z)
  }
  getPendingIncomingCount() {
    return g
  }
  getPendingOutgoingCount() {
    return E
  }
  getGameFriendCount() {
    return b
  }
  getGameFriendsForApplication(e) {
    return m.values(f(e), true).filter(e => e.type === l.OGo.FRIEND)
  }
  getGameRelationshipsForUser(e) {
    return m.values(_(e), true)
  }
  getGameRelationshipsForUserByType(e, t) {
    return this.getGameRelationshipsForUser(e).filter(e => e.type === t)
  }
  getGameFriendsForUser(e) {
    return this.getGameRelationshipsForUserByType(e, l.OGo.FRIEND)
  }
  getGameRelationshipCount() {
    return m.size()
  }
  getGameRelationships() {
    return m
  }
  getGameRelationshipsByType(e) {
    return m.values(p(e), true)
  }
  getGameRelationshipsVersion() {
    return m.version
  }
}
c(C, "displayName", "GameRelationshipStore");
let N = new C(Chunk570140.Z, {
  CONNECTION_OPEN: T,
  GAME_RELATIONSHIP_ADD: S,
  GAME_RELATIONSHIP_REMOVE: A,
  APPLICATIONS_FETCH_SUCCESS: I
})