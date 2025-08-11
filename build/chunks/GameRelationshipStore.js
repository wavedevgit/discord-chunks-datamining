/** Chunk was on web.js **/
/** chunk id: 91896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
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
  f = {
    BY_APPLICATION_ID: e => "application-id-".concat(e),
    BY_USER_ID: e => "user-id-".concat(e),
    BY_RELATIONSHIP_TYPE: e => "relationship-type-".concat(e)
  };

function _(e) {
  let t = [];
  return t.push(f.BY_APPLICATION_ID(e.applicationId)), t.push(f.BY_USER_ID(e.id)), t.push(f.BY_RELATIONSHIP_TYPE(e.type)), t
}
let p = new Chunk759174.h(_, e => "".concat(e.since)),
  h = 0,
  m = 0,
  g = 0;

function E() {
  let e = 0,
    t = 0,
    n = 0;
  p.values().forEach(r => {
    let {
      type: i,
      id: o
    } = r;
    if (i === l.OGo.FRIEND) n += 1;
    else if (i === l.OGo.PENDING_OUTGOING) t += 1;
    else if (i === l.OGo.PENDING_INCOMING) {
      if (s.Z.isSpam(o) || s.Z.isIgnored(o)) return;
      e += 1
    }
  }), h = module, m = exports, g = require
}

function b(e) {
  p.set(d(e.id, e.applicationId), e)
}

function y(e, t) {
  p.delete(d(e, t))
}

function O(e) {
  let {
    unknownApplicationIds: t
  } = e;
  if (null != t) {
    for (let e of t)
      for (let t of p.values(f.BY_APPLICATION_ID(e)))(t.type === l.OGo.PENDING_INCOMING || t.type === l.OGo.PENDING_OUTGOING) && y(t.id, e);
    E()
  }
}

function v(e) {
  p.clear(), e.gameRelationships.forEach(e => {
    b(u(e))
  }), E()
}

function I(e) {
  b(e.gameRelationship), E()
}

function T(e) {
  y(e.userId, e.applicationId), E()
}
class S extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk699516.Z)
  }
  getPendingIncomingCount() {
    return h
  }
  getPendingOutgoingCount() {
    return m
  }
  getGameFriendCount() {
    return g
  }
  getGameFriendsForApplication(e) {
    return p.values(f.BY_APPLICATION_ID(e), true).filter(e => e.type === l.OGo.FRIEND)
  }
  getGameRelationshipsForUser(e) {
    return p.values(f.BY_USER_ID(e), true)
  }
  getGameRelationshipsForUserByType(e, t) {
    return this.getGameRelationshipsForUser(e).filter(e => e.type === t)
  }
  getGameFriendsForUser(e) {
    return this.getGameRelationshipsForUserByType(e, l.OGo.FRIEND)
  }
  getGameRelationshipCount() {
    return p.size()
  }
  getGameRelationships() {
    return p
  }
  getGameRelationshipsByType(e) {
    return p.values(f.BY_RELATIONSHIP_TYPE(e), true)
  }
  getGameRelationshipsVersion() {
    return p.version
  }
}
c(S, "displayName", "GameRelationshipStore");
let A = new S(Chunk570140.Z, {
  CONNECTION_OPEN: v,
  GAME_RELATIONSHIP_ADD: I,
  GAME_RELATIONSHIP_REMOVE: T,
  APPLICATIONS_FETCH_SUCCESS: O
})