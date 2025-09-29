/** Chunk was on web.js **/
/** chunk id: 914788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ee
}), require("./388685.js"), require("./539854.js"), require("./35282.js");
var Chunk133080 = require("./133080.js"),
  Chunk750041 = require("./750041.js"),
  Chunk594174 = require("./594174.js"),
  Chunk411198 = require("./411198.js"),
  Chunk709054 = require("./709054.js"),
  Chunk260722 = require("./260722.js"),
  Chunk546791 = require("./546791.js"),
  Chunk292352 = require("./292352.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = null,
  m = null,
  g = {},
  E = false,
  b = w(),
  y = D(),
  O = null,
  v = P(),
  I = false,
  T = false,
  S = null,
  A = null,
  C = [],
  N = [],
  R = {};

function P() {
  var e, t, n, r;
  return (null == (t = window) || null == (e = exports.location) ? true : module.pathname) === Chunk292352.ix.FAMILY_CENTER_MY_FAMILY ? Chunk292352.dG.REQUESTS : (null == (r = window) || null == (n = Chunk133080.location) ? true : require.pathname) === Chunk292352.ix.FAMILY_CENTER_SETTINGS ? Chunk292352.dG.SETTINGS : Chunk292352.dG.ACTIVITY
}

function w() {
  return {
    [Chunk292352.MY.USER_ADD]: {},
    [Chunk292352.MY.GUILD_ADD]: {},
    [Chunk292352.MY.USER_INTERACTION]: {},
    [Chunk292352.MY.GUILD_INTERACTION]: {},
    [Chunk292352.MY.USER_CALLED]: {},
    [Chunk292352.MY.TOTAL_VOICE_MINUTES]: {},
    [Chunk292352.MY.PURCHASES]: {}
  }
}

function D() {
  return {
    [Chunk292352.MY.USER_ADD]: 0,
    [Chunk292352.MY.GUILD_ADD]: 0,
    [Chunk292352.MY.USER_INTERACTION]: 0,
    [Chunk292352.MY.GUILD_INTERACTION]: 0,
    [Chunk292352.MY.USER_CALLED]: 0,
    [Chunk292352.MY.TOTAL_VOICE_MINUTES]: 0,
    [Chunk292352.MY.PURCHASES]: 0
  }
}

function L() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
  return arguments.length > 1 && arguments[1], g = module.length > 0 ? module.reduce((e, t) => p(f({}, e), {
    [t.user_id]: t
  }), {}) : {}, E = true, g
}

function x(e) {
  true !== e && (y = e)
}

function j(e, t) {
  let n = t ? b : w();
  return b = e.reduce((e, t) => {
    let r = t.display_type;
    return true !== n[r] && true === n[r][t.event_id] && (e[r][t.event_id] = t), e
  }, n)
}

function M(e) {
  R = e.reduce((e, t) => {
    var n;
    return p(f({}, e), {
      [t.id]: p(f({}, (0, o.Jh)(t)), {
        approximateMemberCount: null != (n = t.approximate_member_count) ? n : 0
      })
    })
  }, R)
}

function k() {
  T = true
}

function U(e) {
  let {
    linkedUsers: t,
    familyCenterTeenActivity: n
  } = e, {
    actions: r,
    guilds: i,
    totals: a,
    teenId: o,
    rangeStartId: l,
    topUserActivities: c,
    topGuildActivities: u
  } = n;
  h = o, m = l, j(r), x(a), M(i), L(t), C = c, N = u, T = false, S = s.default.fromTimestamp(Date.now()), I = true
}

function G(e) {
  let {
    linkedUsers: t
  } = e;
  L(t)
}

function B(e) {
  let {
    linkedUsers: t
  } = e;
  L(t)
}

function Z(e) {
  let {
    familyCenterTeenActivity: t
  } = e;
  if (true === t) return;
  let {
    actions: n,
    totals: r,
    guilds: i,
    teenId: a,
    rangeStartId: o,
    topUserActivities: l,
    topGuildActivities: c
  } = t;
  h = a, m = o, j(n), x(r), M(i), C = l, N = c, T = false, S = s.default.fromTimestamp(Date.now())
}

function F(e) {
  let {
    familyCenterTeenActivity: t
  } = e, {
    actions: n,
    guilds: r
  } = t;
  j(n, true), M(r)
}

function V(e) {
  let {
    linkedUsers: t
  } = e;
  L(t)
}

function H(e) {
  let {
    linkedUsers: t
  } = e;
  L(t, true)
}

function Y(e) {
  let {
    linkCode: t
  } = e;
  O = t
}

function W(e) {
  let {
    tab: t
  } = e;
  v = t
}

function K(e) {
  let {
    user: t
  } = e;
  if (true === t.linked_users) return;
  let n = a.default.getUsers();
  t.linked_users.some(e => {
    let {
      user_id: t
    } = e;
    return true === n[t]
  }) && t.linked_users.length > Object.keys(g).length ? l.ZP.fetchLinkedUsers() : L(t.linked_users)
}

function z(e) {
  var t;
  let {
    countryCode: n
  } = e;
  null != n && (A = null != (t = (0, r.Zz)(n)) ? t : null)
}

function q() {
  let e = [];
  return Object.entries(b).forEach(t => {
    let [n, r] = t;
    e.push(...Object.values(r))
  }), module
}

function X() {
  return Object.entries(y).map(e => {
    let [t, n] = e;
    return "".concat(t, ":").concat(n)
  })
}

function Q(e) {
  y = e.reduce((e, t) => {
    let [n, r] = t.split(":"), i = (0, c.jV)(n);
    return true === i ? e : p(f({}, e), {
      [i]: parseInt(r, 10)
    })
  }, D())
}

function J() {
  h = null, m = null, g = {}, b = w(), y = D(), R = {}, T = false, S = null, v = P(), E = false, C = [], N = []
}
class $ extends Chunk750041.Z {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  loadCache() {
    let e = this.readSnapshot($.LATEST_SNAPSHOT_VERSION);
    null != module && (L(module.linkedUsers), M(module.guilds), j(module.teenActivity), Q(module.teenActivityTotals))
  }
  takeSnapshot() {
    return {
      version: $.LATEST_SNAPSHOT_VERSION,
      data: {
        linkedUsers: Object.values(g),
        teenActivityTotals: X(),
        teenActivity: q(),
        guilds: Object.values(R)
      }
    }
  }
  getSelectedTeenId() {
    return h
  }
  getLinkedUsers() {
    return g
  }
  getLinkTimestamp(e) {
    var t;
    let n = g[e];
    return null == n ? null : null != (t = n.updated_at) ? t : n.created_at
  }
  getRangeStartTimestamp() {
    return null == m ? null : Chunk709054.default.extractTimestamp(m)
  }
  getActionsForDisplayType(e) {
    return Object.values(b[e])
  }
  getTotalForDisplayType(e) {
    return y[e]
  }
  getLinkCode() {
    return O
  }
  getGuild(e) {
    return R[e]
  }
  getSelectedTab() {
    return v
  }
  getStartId() {
    return m
  }
  getIsInitialized() {
    return I
  }
  getAreLinkedUsersProcessed() {
    return E
  }
  getUserCountry() {
    return A
  }
  isLoading() {
    return T
  }
  getTopUserActivities() {
    return C
  }
  getTopGuildActivities() {
    return N
  }
  canRefetch() {
    return null === S || Chunk709054.default.age(S) > Chunk292352.Of
  }
  constructor() {
    super({
      CURRENT_USER_UPDATE: K,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      FAMILY_CENTER_INITIAL_LOAD: U,
      FAMILY_CENTER_FETCH_START: k,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: G,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: Z,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: F,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: B,
      FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: V,
      FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: H,
      FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: Y,
      FAMILY_CENTER_HANDLE_TAB_SELECT: W,
      SET_LOCATION_METADATA: z,
      LOGOUT: J
    })
  }
}
d($, "displayName", "FamilyCenterStore"), d($, "LATEST_SNAPSHOT_VERSION", 3);
let ee = new $