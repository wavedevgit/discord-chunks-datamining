/** Chunk was on web.js **/
/** chunk id: 703995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
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

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = new Map,
  m = false,
  g = false;

function E() {
  h = new Map, m = false, g = false
}

function b() {
  g = true
}

function y(e) {
  let {
    invites: t
  } = e;
  for (let e of (g = false, m = true, t)) h.set(e.id, {
    state: S(e),
    invite: e,
    errorStatus: null
  })
}

function O() {
  g = false
}

function v(e) {
  let {
    subscriptionGroupMemberId: t
  } = e;
  h.set(t, {
    state: c.bZ.FETCHING,
    invite: null,
    errorStatus: null
  })
}

function S(e) {
  return null != e.removed_at ? c.bZ.REMOVED : null != e.accepted_at ? c.bZ.ACCEPTED : c.bZ.PENDING
}

function I(e) {
  let {
    subscriptionGroupMemberId: t,
    invite: n
  } = e;
  h.set(t, {
    state: S(n),
    invite: n,
    errorStatus: null
  })
}

function T(e) {
  let {
    subscriptionGroupMemberId: t,
    status: n
  } = e, r = 404 === n ? c.bZ.NOT_FOUND : c.bZ.ERROR;
  h.set(t, {
    state: r,
    invite: null,
    errorStatus: n
  })
}

function C(e) {
  let {
    subscriptionGroupMemberId: t
  } = e, n = h.get(t);
  if ((null == n ? true : n.invite) == null) returnfalse;
  h.set(t, {
    state: c.bZ.ACCEPTED,
    invite: _(f({}, n.invite), {
      accepted_at: new Date().toISOString()
    }),
    errorStatus: null
  })
}

function A(e) {
  let {
    subscriptionGroupMemberId: t
  } = e, n = h.get(t);
  if ((null == n ? true : n.invite) == null) returnfalse;
  h.set(t, {
    state: c.bZ.PENDING,
    invite: _(f({}, n.invite), {
      accepted_at: null
    }),
    errorStatus: null
  })
}

function N(e) {
  let {
    subscriptionGroupMemberId: t
  } = e;
  if (null == t) returnfalse;
  let n = h.get(t);
  if ((null == n ? true : n.invite) == null) returnfalse;
  h.set(t, {
    state: c.bZ.REMOVED,
    invite: _(f({}, n.invite), {
      removed_at: new Date().toISOString()
    }),
    errorStatus: null
  })
}

function P(e) {
  let {
    subscriptionGroupMemberId: t,
    errorCode: n
  } = e;
  if (null == t) returnfalse;
  let r = h.get(t);
  return (null == r ? true : r.invite) != null && (n === c.YW.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED ? (h.set(t, {
    state: c.bZ.ACCEPTED,
    invite: _(f({}, r.invite), {
      accepted_at: new Date().toISOString()
    }),
    errorStatus: null
  }), true) : void h.set(t, {
    state: c.bZ.PENDING,
    invite: _(f({}, r.invite), {
      removed_at: null
    }),
    errorStatus: null
  }))
}

function w(e) {
  let {
    message: t
  } = e;
  return D(t)
}

function R(e) {
  let {
    messages: t
  } = e;
  return t.map(e => D(e)).some(Boolean)
}

function D(e) {
  if (e.type !== i.u.PREMIUM_GROUP_INVITE) returnfalse;
  let t = e.content;
  if (null == t || "" === t || !s.default.isProbablyAValidSnowflake(t)) returnfalse;
  let n = h.get(t);
  return (null == n || n.state === c.bZ.UNKNOWN) && (h.set(t, {
    state: c.bZ.FETCHING,
    invite: null,
    errorStatus: null
  }), o.Z.wait(() => (0, l.hH)(t).catch(u.VqG)), true)
}
class x extends(r = Chunk442837.ZP.Store) {
  getInvite(e) {
    var t;
    return null != (t = h.get(e)) ? t : null
  }
  getInviteByUserId(e) {
    var t;
    return null != (t = Array.from(h.values()).find(t => {
      var n;
      return (null == (n = t.invite) ? true : n.user_id) === e
    })) ? t : null
  }
  getInviteState(e) {
    var t, n;
    return null != (n = null == (t = h.get(e)) ? true : t.state) ? n : c.bZ.UNKNOWN
  }
  shouldFetch(e) {
    let t = h.get(e);
    return null == t || t.state === c.bZ.UNKNOWN
  }
  isFetching(e) {
    var t;
    return (null == (t = h.get(e)) ? true : t.state) === c.bZ.FETCHING
  }
  hasFetchedAllInvites() {
    return m
  }
  isFetchingAllInvites() {
    return g
  }
}
d(x, "displayName", "PremiumGroupInviteStore");
let L = new x(Chunk570140.Z, {
  PREMIUM_GROUP_INVITES_FETCH_START: b,
  PREMIUM_GROUP_INVITES_FETCH_SUCCESS: y,
  PREMIUM_GROUP_INVITES_FETCH_FAIL: O,
  PREMIUM_GROUP_INVITE_FETCH_START: v,
  PREMIUM_GROUP_INVITE_FETCH_SUCCESS: I,
  PREMIUM_GROUP_INVITE_FETCH_FAIL: T,
  PREMIUM_GROUP_ACCEPT_INVITE_START: C,
  PREMIUM_GROUP_ACCEPT_INVITE_FAIL: A,
  PREMIUM_GROUP_REMOVE_INVITE_START: N,
  PREMIUM_GROUP_REMOVE_INVITE_FAILURE: P,
  MESSAGE_CREATE: w,
  LOCAL_MESSAGES_LOADED: R,
  LOAD_MESSAGES_SUCCESS: R,
  LOAD_MESSAGES_AROUND_SUCCESS: R,
  LOGOUT: E
})