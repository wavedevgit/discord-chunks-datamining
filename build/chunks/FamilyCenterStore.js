/** Chunk was on web.js **/
/** chunk id: 914788, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ea
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
  b = L(),
  y = M(),
  O = null,
  v = x(),
  I = false,
  T = false,
  S = null,
  A = null,
  C = [],
  N = [],
  R = null,
  P = null,
  w = {},
  D = {};

function x() {
  var e, t, n, r;
  return (null == (t = window) || null == (e = exports.location) ? true : module.pathname) === Chunk292352.ix.FAMILY_CENTER_MY_FAMILY ? Chunk292352.dG.REQUESTS : (null == (r = window) || null == (n = Chunk133080.location) ? true : require.pathname) === Chunk292352.ix.FAMILY_CENTER_SETTINGS ? Chunk292352.dG.SETTINGS : Chunk292352.dG.ACTIVITY
}

function L() {
  let e = new Map;
  return module.set(Chunk292352.MY.USER_ADD, new Map), module.set(Chunk292352.MY.GUILD_ADD, new Map), module.set(Chunk292352.MY.USER_INTERACTION, new Map), module.set(Chunk292352.MY.GUILD_INTERACTION, new Map), module.set(Chunk292352.MY.USER_CALLED, new Map), module.set(Chunk292352.MY.TOTAL_VOICE_MINUTES, new Map), module.set(Chunk292352.MY.PURCHASES, new Map), module
}

function M() {
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

function j() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
  return arguments.length > 1 && arguments[1], g = module.length > 0 ? module.reduce((e, t) => p(f({}, e), {
    [t.user_id]: t
  }), {}) : {}, E = true, g
}

function k(e) {
  true !== e && (y = e)
}

function U(e, t) {
  let n = t ? b : L();
  return e.forEach(e => {
    let t = e.display_type,
      r = n.get(t);
    true === r || r.has(e.event_id) || r.set(e.event_id, e)
  }), b = n
}

function G(e) {
  D = e.reduce((e, t) => {
    var n;
    return p(f({}, e), {
      [t.id]: p(f({}, (0, o.dangerouslyConstructGuildRecordFromUntypedObject)(t)), {
        approximateMemberCount: null != (n = t.approximate_member_count) ? n : 0
      })
    })
  }, D)
}

function B(e) {
  w = e.reduce((e, t) => {
    if (null != t.invoice_items && t.invoice_items.length > 0) {
      let n = t.invoice_items[0],
        r = n.sku_id,
        i = n.subscription_plan_id;
      (null != r || null != i) && (e[t.id] = {
        sku_id: r,
        subscription_plan_id: i,
        total: t.total,
        currency: t.currency
      })
    }
    return e
  }, {})
}

function Z() {
  T = true
}

function F(e) {
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
    topGuildActivities: u,
    totalSpendAmount: d,
    totalSpendCurrency: f,
    invoices: _
  } = n;
  h = o, m = l, U(r), k(a), G(i), j(t), null != _ && B(_), C = c, N = u, R = d, P = f, T = false, S = s.default.fromTimestamp(Date.now()), I = true
}

function V(e) {
  let {
    linkedUsers: t
  } = e;
  j(t)
}

function H(e) {
  let {
    linkedUsers: t
  } = e;
  j(t)
}

function Y(e) {
  let {
    familyCenterTeenActivity: t
  } = e;
  if (true === t) returnfalse;
  let {
    actions: n,
    totals: r,
    guilds: i,
    teenId: a,
    rangeStartId: o,
    topUserActivities: l,
    topGuildActivities: c,
    totalSpendAmount: u,
    totalSpendCurrency: d,
    invoices: f
  } = t;
  h = a, m = o, U(n), k(r), G(i), null != f && B(f), C = l, N = c, T = false, S = s.default.fromTimestamp(Date.now()), R = u, P = d
}

function W(e) {
  let {
    familyCenterTeenActivity: t
  } = e, {
    actions: n,
    guilds: r
  } = t;
  U(n, true), G(r)
}

function K(e) {
  let {
    linkedUsers: t
  } = e;
  j(t)
}

function z(e) {
  let {
    linkedUsers: t
  } = e;
  j(t, true)
}

function q(e) {
  let {
    linkCode: t
  } = e;
  O = t
}

function X(e) {
  let {
    tab: t
  } = e;
  v = t
}

function Q(e) {
  let {
    user: t
  } = e;
  if (true === t.linked_users) returnfalse;
  let n = a.default.getUsers();
  t.linked_users.some(e => {
    let {
      user_id: t
    } = e;
    return true === n[t]
  }) && t.linked_users.length > Object.keys(g).length ? l.ZP.fetchLinkedUsers() : j(t.linked_users)
}

function J(e) {
  let {
    linkedUsers: t
  } = e;
  if (null == t) returnfalse;
  j(t)
}

function $(e) {
  var t;
  let {
    countryCode: n
  } = e;
  null != n && (A = null != (t = (0, r.Zz)(n)) ? t : null)
}

function ee() {
  let e = [];
  return b.forEach(t => {
    e.push(...Array.from(t.values()))
  }), module
}

function et() {
  return Object.entries(y).map(e => {
    let [t, n] = e;
    return "".concat(t, ":").concat(n)
  })
}

function en(e) {
  y = e.reduce((e, t) => {
    let [n, r] = t.split(":"), i = (0, c.jV)(n);
    return true === i ? e : p(f({}, e), {
      [i]: parseInt(r, 10)
    })
  }, M())
}

function er() {
  h = null, m = null, g = {}, b = L(), y = M(), D = {}, T = false, S = null, v = x(), E = false, C = [], N = [], R = null, P = null, w = {}
}
class ei extends Chunk750041.Z {
  initialize() {
    this.waitFor(Chunk594174.default)
  }
  loadCache() {
    let e = this.readSnapshot(ei.LATEST_SNAPSHOT_VERSION);
    null != module && (j(module.linkedUsers), G(module.guilds), U(module.teenActivity), en(module.teenActivityTotals))
  }
  takeSnapshot() {
    return {
      version: ei.LATEST_SNAPSHOT_VERSION,
      data: {
        linkedUsers: Object.values(g),
        teenActivityTotals: et(),
        teenActivity: ee(),
        guilds: Object.values(D)
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
    let t = b.get(e);
    return null != t ? Array.from(t.values()) : []
  }
  getTotalForDisplayType(e) {
    return y[e]
  }
  getLinkCode() {
    return O
  }
  getGuild(e) {
    return D[e]
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
  getTotalSpendAmount() {
    return R
  }
  getTotalSpendCurrency() {
    return P
  }
  getPurchaseInfo(e) {
    return w[e]
  }
  canRefetch() {
    return null === S || Chunk709054.default.age(S) > Chunk292352.Of
  }
  constructor() {
    super({
      CONNECTION_OPEN: J,
      CURRENT_USER_UPDATE: Q,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      FAMILY_CENTER_INITIAL_LOAD: F,
      FAMILY_CENTER_FETCH_START: Z,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: V,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: Y,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: W,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: H,
      FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: K,
      FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: z,
      FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: q,
      FAMILY_CENTER_HANDLE_TAB_SELECT: X,
      SET_LOCATION_METADATA: $,
      LOGOUT: er
    })
  }
}
d(ei, "displayName", "FamilyCenterStore"), d(ei, "LATEST_SNAPSHOT_VERSION", 3);
let ea = new ei