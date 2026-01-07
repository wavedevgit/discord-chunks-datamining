/** Chunk was on web.js **/
/** chunk id: 726745, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;
require.d(exports, {
  Z: () => P,
  q: () => h
}), require("./539854.js");
var a, Chunk213919 = require("./213919.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk990492 = require("./990492.js"),
  Chunk988965 = require("./988965.js"),
  Chunk71509 = require("./71509.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var h = function(e) {
  return e[e.INVALID = 0] = "INVALID", e[e.VALIDATING = 1] = "VALIDATING", e[e.VALID = 2] = "VALID", e
}({});
let g = [],
  E = false;

function b(e) {
  let {
    user: t
  } = e;
  r = t.id, E = false;
  let n = g.slice(),
    i = n.findIndex(e => {
      let {
        id: n
      } = e;
      return n === t.id
    });
  i > false ? (g[i].avatar = t.avatar, g[i].username = t.username, g[i].discriminator = t.discriminator, g[i].tokenStatus = 2) : n.push({
    id: t.id,
    avatar: t.avatar,
    username: t.username,
    discriminator: t.discriminator,
    tokenStatus: 2,
    pushSyncToken: null
  }), (g = n).length > d.$H && g.splice(d.$H).forEach(e => {
    let {
      id: t
    } = e;
    O(t)
  })
}

function y(e) {
  E = !!e.isSwitchingAccount, e.isSwitchingAccount || (g = g.filter(e => {
    let {
      id: t
    } = e;
    return t !== r
  })), r = null
}

function O(e) {
  g = g.filter(t => {
    let {
      id: n
    } = t;
    return n !== e
  }), o.removeToken(e)
}

function v(e) {
  let {
    user: t
  } = e, n = g.slice(), r = n.find(e => {
    let {
      id: n
    } = e;
    return n === t.id
  });
  null != r && (r.avatar = t.avatar, r.username = t.username, r.discriminator = t.discriminator, g = n)
}

function S(e, t) {
  let n = g.slice(),
    r = n.find(t => {
      let {
        id: n
      } = t;
      return n === e
    });
  null != r && (r.tokenStatus = t, g = n)
}

function I(e) {
  let {
    from: t,
    to: n
  } = e;
  g = (0, c.aB)(g, t, n)
}

function T(e) {
  let {
    multiAccountMobileExperimentEnabled: t
  } = e;
  i = t
}

function C(e) {
  let {
    userId: t,
    pushSyncToken: n
  } = e;
  g = g.map(e => e.id === t ? m(p({}, e), {
    pushSyncToken: n
  }) : e)
}

function A(e) {
  let {
    invalidPushSyncTokens: t
  } = e;
  g = g.map(e => null != e.pushSyncToken && t.includes(e.pushSyncToken) ? m(p({}, e), {
    pushSyncToken: null
  }) : e)
}
class N extends(a = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t;
      g = null != (t = e.users) ? t : [], i = e.canUseMultiAccountMobile
    }
  }
  getCanUseMultiAccountMobile() {
    return i
  }
  getState() {
    return {
      users: g,
      canUseMultiAccountMobile: i
    }
  }
  getUsers() {
    return g
  }
  getValidUsers() {
    return g.filter(e => {
      let {
        tokenStatus: t
      } = e;
      return 0 !== t
    })
  }
  getHasLoggedInAccounts() {
    return g.length > 0
  }
  getIsValidatingUsers() {
    return g.some(e => {
      let {
        tokenStatus: t
      } = e;
      return 1 === t
    })
  }
  get canUseMultiAccountNotifications() {
    return this.getCanUseMultiAccountMobile() && u.N.getCurrentConfig({
      location: "09e468_1"
    }, {
      autoTrackExposure: false
    }).isMultiAccountMobileNotificationsEnabled
  }
  get isSwitchingAccount() {
    return E
  }
}
f(N, "displayName", "MultiAccountStore"), f(N, "persistKey", "MultiAccountStore"), f(N, "migrations", [e => {
  if (null != e) {
    var t;
    return {
      users: null != (t = e.users) ? t : [],
      canUseMultiAccountMobile: false
    }
  }
  return {
    users: [],
    canUseMultiAccountMobile: false
  }
}]);
let P = new N(Chunk570140.Z, {
  CONNECTION_OPEN: b,
  LOGOUT: y,
  MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST: e => S(e.userId, 1),
  MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS: e => S(e.userId, 2),
  MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE: e => S(e.userId, 0),
  MULTI_ACCOUNT_REMOVE_ACCOUNT: e => O(e.userId),
  MULTI_ACCOUNT_MOVE_ACCOUNT: I,
  CURRENT_USER_UPDATE: v,
  MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE: T,
  MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN: C,
  MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS: A
})