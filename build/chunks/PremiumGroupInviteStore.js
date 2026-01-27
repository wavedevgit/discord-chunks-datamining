/** Chunk was on 92917 **/
/** chunk id: 59784, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
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

function p(e) {
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = new Map,
  g = false,
  h = false;

function _(e) {
  return null != e.removed_at ? c.xI.REMOVED : null != e.accepted_at ? c.xI.ACCEPTED : c.xI.PENDING
}

function b(e) {
  let {
    messages: t
  } = e;
  return t.map(e => A(e)).some(Boolean)
}

function A(e) {
  if (e.type !== i.l.PREMIUM_GROUP_INVITE) returnfalse;
  let t = e.content;
  if (null == t || "" === t || !s.default.isProbablyAValidSnowflake(t)) returnfalse;
  let n = f.get(t);
  return (null == n || n.state === c.xI.UNKNOWN) && (f.set(t, {
    state: c.xI.FETCHING,
    invite: null,
    errorStatus: null
  }), a.h.wait(() => (0, o.el)(t).catch(u.FXj)), true)
}
class y extends(r = Chunk311907.Ay.Store) {
  getInvite(e) {
    var t;
    return null != (t = f.get(e)) ? t : null
  }
  getInviteByUserId(e) {
    var t;
    return null != (t = Array.from(f.values()).find(t => {
      var n;
      return (null == (n = t.invite) ? true : n.user_id) === e
    })) ? t : null
  }
  getInviteState(e) {
    var t, n;
    return null != (t = null == (n = f.get(e)) ? true : n.state) ? t : c.xI.UNKNOWN
  }
  shouldFetch(e) {
    let t = f.get(e);
    return null == t || t.state === c.xI.UNKNOWN
  }
  isFetching(e) {
    var t;
    return (null == (t = f.get(e)) ? true : t.state) === c.xI.FETCHING
  }
  hasFetchedAllInvites() {
    return g
  }
  isFetchingAllInvites() {
    return h
  }
}
d(y, "displayName", "PremiumGroupInviteStore");
let v = new y(Chunk73153.h, {
  PREMIUM_GROUP_INVITES_FETCH_START: function() {
    h = true
  },
  PREMIUM_GROUP_INVITES_FETCH_SUCCESS: function(e) {
    let {
      invites: t
    } = e;
    for (let e of (h = false, g = true, t)) f.set(e.id, {
      state: _(e),
      invite: e,
      errorStatus: null
    })
  },
  PREMIUM_GROUP_INVITES_FETCH_FAIL: function() {
    h = false
  },
  PREMIUM_GROUP_INVITE_FETCH_START: function(e) {
    let {
      subscriptionGroupMemberId: t
    } = e;
    f.set(t, {
      state: c.xI.FETCHING,
      invite: null,
      errorStatus: null
    })
  },
  PREMIUM_GROUP_INVITE_FETCH_SUCCESS: function(e) {
    let {
      subscriptionGroupMemberId: t,
      invite: n
    } = e;
    f.set(t, {
      state: _(n),
      invite: n,
      errorStatus: null
    })
  },
  PREMIUM_GROUP_INVITE_FETCH_FAIL: function(e) {
    let {
      subscriptionGroupMemberId: t,
      status: n
    } = e, r = 404 === n ? c.xI.NOT_FOUND : c.xI.ERROR;
    f.set(t, {
      state: r,
      invite: null,
      errorStatus: n
    })
  },
  PREMIUM_GROUP_ACCEPT_INVITE_START: function(e) {
    let {
      subscriptionGroupMemberId: t
    } = e, n = f.get(t);
    if ((null == n ? true : n.invite) == null) returnfalse;
    f.set(t, {
      state: c.xI.ACCEPTED,
      invite: m(p({}, n.invite), {
        accepted_at: new Date().toISOString()
      }),
      errorStatus: null
    })
  },
  PREMIUM_GROUP_ACCEPT_INVITE_FAIL: function(e) {
    let {
      subscriptionGroupMemberId: t
    } = e, n = f.get(t);
    if ((null == n ? true : n.invite) == null) returnfalse;
    f.set(t, {
      state: c.xI.PENDING,
      invite: m(p({}, n.invite), {
        accepted_at: null
      }),
      errorStatus: null
    })
  },
  PREMIUM_GROUP_REMOVE_INVITE_START: function(e) {
    let {
      subscriptionGroupMemberId: t
    } = e;
    if (null == t) returnfalse;
    let n = f.get(t);
    if ((null == n ? true : n.invite) == null) returnfalse;
    f.set(t, {
      state: c.xI.REMOVED,
      invite: m(p({}, n.invite), {
        removed_at: new Date().toISOString()
      }),
      errorStatus: null
    })
  },
  PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function(e) {
    let {
      subscriptionGroupMemberId: t,
      errorCode: n
    } = e;
    if (null == t) returnfalse;
    let r = f.get(t);
    return (null == r ? true : r.invite) != null && (n === c.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED ? (f.set(t, {
      state: c.xI.ACCEPTED,
      invite: m(p({}, r.invite), {
        accepted_at: new Date().toISOString()
      }),
      errorStatus: null
    }), true) : void f.set(t, {
      state: c.xI.PENDING,
      invite: m(p({}, r.invite), {
        removed_at: null
      }),
      errorStatus: null
    }))
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    return A(t)
  },
  LOCAL_MESSAGES_LOADED: b,
  LOAD_MESSAGES_SUCCESS: b,
  LOAD_MESSAGES_AROUND_SUCCESS: b,
  LOGOUT: function() {
    f = new Map, g = false, h = false
  }
})