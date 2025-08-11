/** Chunk was on 49508 **/
/** chunk id: 914788, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => X
}), require("./388685.js"), require("./539854.js"), require("./35282.js");
var i, r, l, a, Chunk133080 = require("./133080.js"),
  Chunk750041 = require("./750041.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411198 = require("./411198.js"),
  Chunk709054 = require("./709054.js"),
  Chunk260722 = require("./260722.js"),
  Chunk546791 = require("./546791.js"),
  Chunk292352 = require("./292352.js");

function f(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}

function S(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), i.forEach(function(e) {
      f(t, e, n[e])
    })
  }
  return t
}

function I(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      n.push.apply(n, i)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}
let C = null,
  A = null,
  g = {},
  y = U(),
  p = Y(),
  N = null,
  L = (null == (r = window) || null == (i = r.location) ? true : i.pathname) === Chunk292352.ix.FAMILY_CENTER_MY_FAMILY ? Chunk292352.dG.REQUESTS : (null == (a = window) || null == (l = a.location) ? true : l.pathname) === Chunk292352.ix.FAMILY_CENTER_SETTINGS ? Chunk292352.dG.SETTINGS : Chunk292352.dG.ACTIVITY,
  h = false,
  R = false,
  M = null,
  b = null,
  D = {};

function U() {
  return {
    [Chunk292352.MY.USER_ADD]: {},
    [Chunk292352.MY.GUILD_ADD]: {},
    [Chunk292352.MY.USER_INTERACTION]: {},
    [Chunk292352.MY.GUILD_INTERACTION]: {},
    [Chunk292352.MY.USER_CALLED]: {}
  }
}

function Y() {
  return {
    [Chunk292352.MY.USER_ADD]: 0,
    [Chunk292352.MY.GUILD_ADD]: 0,
    [Chunk292352.MY.USER_INTERACTION]: 0,
    [Chunk292352.MY.GUILD_INTERACTION]: 0,
    [Chunk292352.MY.USER_CALLED]: 0
  }
}

function O() {
  let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
  return arguments.length > 1 && arguments[1], g = module.length > 0 ? module.reduce((t, e) => I(S({}, t), {
    [e.user_id]: e
  }), {}) : {}
}

function m(t) {
  true !== t && (p = t)
}

function v(t, e) {
  let n = e ? y : U();
  return y = t.reduce((t, e) => {
    let i = e.display_type;
    return true !== n[i] && true === n[i][e.event_id] && (t[i][e.event_id] = e), t
  }, n)
}

function F(t) {
  D = t.reduce((t, e) => {
    var n;
    return I(S({}, t), {
      [e.id]: I(S({}, (0, o.Jh)(e)), {
        approximateMemberCount: null != (n = e.approximate_member_count) ? n : 0
      })
    })
  }, D)
}

function w() {
  R = true
}

function j(t) {
  let {
    linkedUsers: e,
    familyCenterTeenActivity: n
  } = t, {
    actions: i,
    guilds: r,
    totals: l,
    teenId: a,
    rangeStartId: d
  } = n;
  C = a, A = d, v(i), m(l), F(r), O(e), R = false, M = E.default.fromTimestamp(Date.now()), h = true
}

function P(t) {
  let {
    linkedUsers: e
  } = t;
  O(e)
}

function k(t) {
  let {
    linkedUsers: e
  } = t;
  O(e)
}

function H(t) {
  let {
    familyCenterTeenActivity: e
  } = t;
  if (true === e) return;
  let {
    actions: n,
    totals: i,
    guilds: r,
    teenId: l,
    rangeStartId: a
  } = e;
  C = l, A = a, v(n), m(i), F(r), R = false, M = E.default.fromTimestamp(Date.now())
}

function G(t) {
  let {
    familyCenterTeenActivity: e
  } = t, {
    actions: n,
    guilds: i
  } = e;
  v(n, true), F(i)
}

function V(t) {
  let {
    linkedUsers: e
  } = t;
  O(e)
}

function Q(t) {
  let {
    linkedUsers: e
  } = t;
  O(e, true)
}

function Z(t) {
  let {
    linkCode: e
  } = t;
  N = e
}

function W(t) {
  let {
    tab: e
  } = t;
  L = e
}

function K(t) {
  let {
    user: e
  } = t;
  if (true === e.linked_users) return;
  let n = s.default.getUsers();
  e.linked_users.some(t => {
    let {
      user_id: e
    } = t;
    return true === n[e]
  }) && e.linked_users.length > Object.keys(g).length ? c.ZP.fetchLinkedUsers() : O(e.linked_users)
}

function x(t) {
  var e;
  let {
    countryCode: n
  } = t;
  null != n && (b = null != (e = (0, d.Zz)(n)) ? e : null)
}

function z() {
  C = null, A = null, g = {}, y = U(), p = Y(), D = {}, R = false, M = null
}
class B extends Chunk750041.Z {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  loadCache() {
    let t = this.readSnapshot(B.LATEST_SNAPSHOT_VERSION);
    null != module && (O(module.linkedUsers), F(module.guilds), v(module.teenActivity), p = module.teenActivityTotals.reduce((t, e) => {
      let [n, i] = e.split(":"), r = (0, _.jV)(n);
      return true === r ? t : I(S({}, t), {
        [r]: parseInt(i, 10)
      })
    }, Y()))
  }
  takeSnapshot() {
    return {
      version: B.LATEST_SNAPSHOT_VERSION,
      data: {
        linkedUsers: Object.values(g),
        teenActivityTotals: Object.entries(p).map(t => {
          let [e, n] = t;
          return "".concat(e, ":").concat(n)
        }),
        teenActivity: function() {
          let t = [];
          return Object.entries(y).forEach(e => {
            let [n, i] = e;
            t.push(...Object.values(i))
          }), module
        }(),
        guilds: Object.values(D)
      }
    }
  }
  getSelectedTeenId() {
    return C
  }
  getLinkedUsers() {
    return g
  }
  getLinkTimestamp(t) {
    var e;
    let n = g[t];
    return null == n ? null : null != (e = n.updated_at) ? e : n.created_at
  }
  getRangeStartTimestamp() {
    return null == A ? null : Chunk709054.default.extractTimestamp(A)
  }
  getActionsForDisplayType(t) {
    return Object.values(y[t])
  }
  getTotalForDisplayType(t) {
    return p[t]
  }
  getLinkCode() {
    return N
  }
  getGuild(t) {
    return D[t]
  }
  getSelectedTab() {
    return L
  }
  getStartId() {
    return A
  }
  getIsInitialized() {
    return h
  }
  getUserCountry() {
    return b
  }
  isLoading() {
    return R
  }
  canRefetch() {
    return null === M || Chunk709054.default.age(M) > Chunk292352.Of
  }
  constructor() {
    super({
      CURRENT_USER_UPDATE: K,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      FAMILY_CENTER_INITIAL_LOAD: j,
      FAMILY_CENTER_FETCH_START: w,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: P,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: H,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: G,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: k,
      FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: V,
      FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: Q,
      FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: Z,
      FAMILY_CENTER_HANDLE_TAB_SELECT: W,
      SET_LOCATION_METADATA: x,
      LOGOUT: z
    })
  }
}
f(B, "displayName", "FamilyCenterStore"), f(B, "LATEST_SNAPSHOT_VERSION", 3);
let X = new B