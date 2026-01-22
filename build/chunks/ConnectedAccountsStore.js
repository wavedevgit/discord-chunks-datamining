/** Chunk was on web.js **/
/** chunk id: 962173, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk77468 = require("./77468.js"),
  Chunk573648 = require("./573648.js"),
  Chunk806374 = require("./806374.js"),
  Chunk860689 = require("./860689.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = new Set([require("./652215.js").fg2.CONTACTS]),
  h = true,
  m = [],
  g = [],
  E = {},
  b = new Set,
  y = {},
  O = {},
  A = e => {
    m = e.filter(e => !_.has(e.type) && o.A.isSupported(e.type)), g = e.filter(e => _.has(e.type)), h = false
  };

function v(e) {
  A(e.connectedAccounts.map(e => new l.A(e)))
}

function S(e) {
  e.local && null != e.accounts ? A(e.accounts.map(e => new l.A(p(d({}, e), {
    integrations: e.integrations.map(e => p(d({}, e), {
      guild: (0, c.yF)(p(d({}, e.guild), {
        features: []
      }))
    }))
  })))) : s.A.fetch()
}

function I(e) {
  E[e.integrationId] = e.joining
}

function T(e) {
  O[e.integrationId] = true !== e.error ? e.error : ""
}

function C(e) {
  let {
    platformType: t,
    id: n,
    revoked: r,
    accessToken: i
  } = e, a = m.find(e => e.id === n && e.type === t);
  if (null == a) returnfalse;
  null != r && (a.revoked = r), null != i && (a.accessToken = i)
}

function N(e) {
  let {
    code: t,
    state: n,
    openid_params: r,
    provider: i
  } = e;
  s.A.callback(i, {
    code: t,
    state: n,
    openid_params: r
  })
}
class R extends(r = Chunk311907.Ay.Store) {
  isJoining(e) {
    return E[e] || false
  }
  joinErrorMessage(e) {
    return O[e]
  }
  isFetching() {
    return h
  }
  getAccounts() {
    return m
  }
  getLocalAccounts() {
    return g
  }
  getAccount(e, t) {
    return m.find(n => (null == e || n.id === e) && n.type === t)
  }
  getLocalAccount(e) {
    return g.find(t => t.type === e)
  }
  isSuggestedAccountType(e) {
    return y[e] || false
  }
  addPendingAuthorizedState(e) {
    b.add(e)
  }
  deletePendingAuthorizedState(e) {
    b.delete(e)
  }
  hasPendingAuthorizedState(e) {
    return b.has(e)
  }
}
u(R, "displayName", "ConnectedAccountsStore");
let w = new R(Chunk73153.h, {
  CONNECTION_OPEN: v,
  USER_CONNECTIONS_UPDATE: S,
  USER_CONNECTIONS_INTEGRATION_JOINING: I,
  USER_CONNECTION_UPDATE: C,
  USER_CONNECTIONS_INTEGRATION_JOINING_ERROR: T,
  USER_CONNECTIONS_CALLBACK: N
})