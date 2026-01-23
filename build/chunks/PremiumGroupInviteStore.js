/** Chunk was on web.js **/
/** chunk id: 59784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
}), require("./896048.js");
var r, Chunk448761 = require("./448761.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk661191 = require("./661191.js"),
  Chunk677185 = require("./677185.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js");

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

function y() {
  g = true
}

function b(e) {
  let {
    invites: t
  } = e;
  for (let e of (g = false, m = true, t)) h.set(e.id, {
    state: A(e),
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
    state: c.xI.FETCHING,
    invite: null,
    errorStatus: null
  })
}

function A(e) {
  return null != e.removed_at ? c.xI.REMOVED : null != e.accepted_at ? c.xI.ACCEPTED : c.xI.PENDING
}

function I(e) {
  let {
    subscriptionGroupMemberId: t,
    invite: n
  } = e;
  h.set(t, {
    state: A(n),
    invite: n,
    errorStatus: null
  })
}

function S(e) {
  let {
    subscriptionGroupMemberId: t,
    status: n
  } = e, r = 404 === n ? c.xI.NOT_FOUND : c.xI.ERROR;
  h.set(t, {
    state: r,
    invite: null,
    errorStatus: n
  })
}

function T(e) {
  let {
    subscriptionGroupMemberId: t
  } = e, n = h.get(t);
  if ((null == n ? true : n.invite) == null) returnfalse;
  h.set(t, {
    state: c.xI.ACCEPTED,
    invite: _(f({}, n.invite), {
      accepted_at: new Date().toISOString()
    }),
    errorStatus: null
  })
}

function C(e) {
  let {
    subscriptionGroupMemberId: t
  } = e, n = h.get(t);
  if ((null == n ? true : n.invite) == null) returnfalse;
  h.set(t, {
    state: c.xI.PENDING,
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
    state: c.xI.REMOVED,
    invite: _(f({}, n.invite), {
      removed_at: new Date().toISOString()
    }),
    errorStatus: null
  })
}

function R(e) {
  let {
    subscriptionGroupMemberId: t,
    errorCode: n
  } = e;
  if (null == t) returnfalse;
  let r = h.get(t);
  return (null == r ? true : r.invite) != null && (n === c.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED ? (h.set(t, {
    state: c.xI.ACCEPTED,
    invite: _(f({}, r.invite), {
      accepted_at: new Date().toISOString()
    }),
    errorStatus: null
  }), true) : void h.set(t, {
    state: c.xI.PENDING,
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

function P(e) {
  let {
    messages: t
  } = e;
  return t.map(e => D(e)).some(Boolean)
}

function D(e) {
  if (e.type !== i.l.PREMIUM_GROUP_INVITE) returnfalse;
  let t = e.content;
  if (null == t || "" === t || !o.default.isProbablyAValidSnowflake(t)) returnfalse;
  let n = h.get(t);
  return (null == n || n.state === c.xI.UNKNOWN) && (h.set(t, {
    state: c.xI.FETCHING,
    invite: null,
    errorStatus: null
  }), s.h.wait(() => (0, l.el)(t).catch(u.FXj)), true)
}
class x extends(r = Chunk311907.Ay.Store) {
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
    return null != (t = null == (n = h.get(e)) ? true : n.state) ? t : c.xI.UNKNOWN
  }
  shouldFetch(e) {
    let t = h.get(e);
    return null == t || t.state === c.xI.UNKNOWN
  }
  isFetching(e) {
    var t;
    return (null == (t = h.get(e)) ? true : t.state) === c.xI.FETCHING
  }
  hasFetchedAllInvites() {
    return m
  }
  isFetchingAllInvites() {
    return g
  }
}
d(x, "displayName", "PremiumGroupInviteStore");
let L = new x(Chunk73153.h, {
  PREMIUM_GROUP_INVITES_FETCH_START: y,
  PREMIUM_GROUP_INVITES_FETCH_SUCCESS: b,
  PREMIUM_GROUP_INVITES_FETCH_FAIL: O,
  PREMIUM_GROUP_INVITE_FETCH_START: v,
  PREMIUM_GROUP_INVITE_FETCH_SUCCESS: I,
  PREMIUM_GROUP_INVITE_FETCH_FAIL: S,
  PREMIUM_GROUP_ACCEPT_INVITE_START: T,
  PREMIUM_GROUP_ACCEPT_INVITE_FAIL: C,
  PREMIUM_GROUP_REMOVE_INVITE_START: N,
  PREMIUM_GROUP_REMOVE_INVITE_FAILURE: R,
  MESSAGE_CREATE: w,
  LOCAL_MESSAGES_LOADED: P,
  LOAD_MESSAGES_SUCCESS: P,
  LOAD_MESSAGES_AROUND_SUCCESS: P,
  LOGOUT: E
})