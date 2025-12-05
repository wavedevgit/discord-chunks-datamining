/** Chunk was on web.js **/
/** chunk id: 703995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var r, Chunk275726 = require("./275726.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk709054 = require("./709054.js"),
  Chunk80721 = require("./80721.js"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = new Map,
  p = false,
  _ = false;

function m() {
  f = new Map, p = false, _ = false
}

function h() {
  _ = true
}

function g(e) {
  let {
    invites: t
  } = e;
  for (let e of (_ = false, p = true, t)) f.set(e.id, {
    state: y(e),
    invite: e,
    errorStatus: null
  })
}

function E() {
  _ = false
}

function b(e) {
  let {
    inviteId: t
  } = e;
  f.set(t, {
    state: c.bZ.FETCHING,
    invite: null,
    errorStatus: null
  })
}

function y(e) {
  return null != e.removed_at ? c.bZ.REMOVED : null != e.accepted_at ? c.bZ.ACCEPTED : c.bZ.PENDING
}

function O(e) {
  let {
    inviteId: t,
    invite: n
  } = e;
  f.set(t, {
    state: y(n),
    invite: n,
    errorStatus: null
  })
}

function v(e) {
  let {
    inviteId: t,
    status: n
  } = e, r = 404 === n ? c.bZ.NOT_FOUND : c.bZ.ERROR;
  f.set(t, {
    state: r,
    invite: null,
    errorStatus: n
  })
}

function S(e) {
  let {
    message: t
  } = e;
  return T(t)
}

function I(e) {
  let {
    messages: t
  } = e;
  return t.map(e => T(e)).some(Boolean)
}

function T(e) {
  if (e.type !== i.u.PREMIUM_GROUP_INVITE) returnfalse;
  let t = e.content;
  if (null == t || "" === t || !s.default.isProbablyAValidSnowflake(t)) returnfalse;
  let n = f.get(t);
  return (null == n || n.state === c.bZ.UNKNOWN) && (f.set(t, {
    state: c.bZ.FETCHING,
    invite: null,
    errorStatus: null
  }), o.Z.wait(() => (0, l.hH)(t).catch(u.VqG)), true)
}
class A extends(r = Chunk442837.ZP.Store) {
  getInvite(e) {
    var t;
    return null != (t = f.get(e)) ? t : null
  }
  getInviteState(e) {
    var t, n;
    return null != (n = null == (t = f.get(e)) ? true : t.state) ? n : c.bZ.UNKNOWN
  }
  shouldFetch(e) {
    let t = f.get(e);
    return null == t || t.state === c.bZ.UNKNOWN
  }
  isFetching(e) {
    var t;
    return (null == (t = f.get(e)) ? true : t.state) === c.bZ.FETCHING
  }
  hasFetchedAllInvites() {
    return p
  }
  isFetchingAllInvites() {
    return _
  }
}
d(A, "displayName", "PremiumGroupInviteStore");
let C = new A(Chunk570140.Z, {
  PREMIUM_GROUP_INVITES_FETCH_START: h,
  PREMIUM_GROUP_INVITES_FETCH_SUCCESS: g,
  PREMIUM_GROUP_INVITES_FETCH_FAIL: E,
  PREMIUM_GROUP_INVITE_FETCH_START: b,
  PREMIUM_GROUP_INVITE_FETCH_SUCCESS: O,
  PREMIUM_GROUP_INVITE_FETCH_FAIL: v,
  MESSAGE_CREATE: S,
  LOCAL_MESSAGES_LOADED: I,
  LOAD_MESSAGES_SUCCESS: I,
  LOAD_MESSAGES_AROUND_SUCCESS: I,
  LOGOUT: m
})