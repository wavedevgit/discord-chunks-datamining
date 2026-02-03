/** Chunk was on 43549 **/
/** chunk id: 695515, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => ti
}), require("./896048.js"), require("./321073.js"), require("./747238.js");
var Chunk518977 = require("./518977.js"),
  Chunk536802 = require("./536802.js"),
  Chunk287809 = require("./287809.js"),
  Chunk860689 = require("./860689.js"),
  Chunk661191 = require("./661191.js"),
  Chunk899847 = require("./899847.js"),
  Chunk923531 = require("./923531.js"),
  Chunk936926 = require("./936926.js"),
  Chunk191627 = require("./191627.js");

function _(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}

function c(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), i.forEach(function(e) {
      _(t, e, n[e])
    })
  }
  return t
}

function T(t, e) {
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
let S = null,
  A = null,
  f = {},
  C = false,
  I = Y(),
  N = P(),
  p = null,
  g = F(),
  y = false,
  h = false,
  R = null,
  L = null,
  v = [],
  D = [],
  U = null,
  m = null,
  b = {},
  O = null,
  M = {};

function F() {
  var t, e, n, i;
  return (null == (e = window) || null == (t = e.location) ? true : t.pathname) === E.he.FAMILY_CENTER_MY_FAMILY ? E.u9.REQUESTS : (null == (i = window) || null == (n = i.location) ? true : n.pathname) === E.he.FAMILY_CENTER_SETTINGS ? E.u9.SETTINGS : E.u9.ACTIVITY
}

function Y() {
  let t = new Map;
  return t.set(E.NV.USER_ADD, new Map), t.set(E.NV.GUILD_ADD, new Map), t.set(E.NV.USER_INTERACTION, new Map), t.set(E.NV.GUILD_INTERACTION, new Map), t.set(E.NV.USER_CALLED, new Map), t.set(E.NV.TOTAL_VOICE_MINUTES, new Map), t.set(E.NV.PURCHASES, new Map), t
}

function P() {
  return {
    [E.NV.USER_ADD]: 0,
    [E.NV.GUILD_ADD]: 0,
    [E.NV.USER_INTERACTION]: 0,
    [E.NV.GUILD_INTERACTION]: 0,
    [E.NV.USER_CALLED]: 0,
    [E.NV.TOTAL_VOICE_MINUTES]: 0,
    [E.NV.PURCHASES]: 0
  }
}

function w() {
  let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [];
  return arguments.length > 1 && arguments[1], f = t.length > 0 ? t.reduce((t, e) => T(c({}, t), {
    [e.user_id]: e
  }), {}) : {}, C = true, f
}

function V(t) {
  true !== t && (N = t)
}

function H(t, e) {
  let n = e ? I : Y();
  return t.forEach(t => {
    let e = t.display_type,
      i = n.get(e);
    true === i || i.has(t.event_id) || i.set(t.event_id, t)
  }), I = n
}

function k(t) {
  M = t.reduce((t, e) => {
    var n;
    return T(c({}, t), {
      [e.id]: T(c({}, (0, a.dangerouslyConstructGuildRecordFromUntypedObject)(e)), {
        approximateMemberCount: null != (n = e.approximate_member_count) ? n : 0
      })
    })
  }, M)
}

function G(t) {
  b = t.reduce((t, e) => {
    if (null != e.invoice_items && e.invoice_items.length > 0) {
      let n = e.invoice_items[0],
        i = n.sku_id,
        l = n.subscription_plan_id;
      (null != i || null != l) && (t[e.id] = {
        sku_id: i,
        subscription_plan_id: l,
        total: e.total,
        currency: e.currency
      })
    }
    return t
  }, {})
}

function j() {
  h = true
}

function Q(t) {
  let {
    linkedUsers: e,
    familyCenterTeenActivity: n,
    ageGroup: i
  } = t, {
    actions: l,
    guilds: r,
    totals: a,
    teenId: u,
    rangeStartId: s,
    topUserActivities: d,
    topGuildActivities: E,
    totalSpendAmount: _,
    totalSpendCurrency: c,
    invoices: T
  } = n;
  S = u, A = s, H(l), V(a), k(r), w(e), null != T && G(T), v = d, D = E, U = _, m = c, O = null != i ? i : null, h = false, R = o.default.fromTimestamp(Date.now()), y = true
}

function B(t) {
  let {
    linkedUsers: e
  } = t;
  w(e)
}

function W(t) {
  let {
    linkedUsers: e
  } = t;
  w(e)
}

function K(t) {
  let {
    familyCenterTeenActivity: e
  } = t;
  if (true === e) returnfalse;
  let {
    actions: n,
    totals: i,
    guilds: l,
    teenId: r,
    rangeStartId: a,
    topUserActivities: u,
    topGuildActivities: s,
    totalSpendAmount: d,
    totalSpendCurrency: E,
    invoices: _
  } = e;
  S = r, A = a, H(n), V(i), k(l), null != _ && G(_), v = u, D = s, h = false, R = o.default.fromTimestamp(Date.now()), U = d, m = E
}

function z(t) {
  let {
    familyCenterTeenActivity: e
  } = t, {
    actions: n,
    guilds: i
  } = e;
  H(n, true), k(i)
}

function q(t) {
  let {
    linkedUsers: e
  } = t;
  w(e)
}

function X(t) {
  let {
    linkedUsers: e
  } = t;
  w(e, true)
}

function x(t) {
  let {
    linkCode: e
  } = t;
  p = e
}

function Z(t) {
  let {
    tab: e
  } = t;
  g = e
}

function J(t) {
  let {
    user: e
  } = t;
  if (true === e.linked_users) returnfalse;
  let n = r.default.getUsers();
  e.linked_users.some(t => {
    let {
      user_id: e
    } = t;
    return true === n[e]
  }) && e.linked_users.length > Object.keys(f).length ? u.Ay.fetchLinkedUsers() : w(e.linked_users)
}

function $(t) {
  let {
    linkedUsers: e
  } = t;
  if (null == e) returnfalse;
  w(e)
}

function tt(t) {
  var e;
  let {
    countryCode: n
  } = t;
  null != n && (L = null != (e = (0, i.XF)(n)) ? e : null)
}

function te() {
  S = null, A = null, f = {}, I = Y(), N = P(), M = {}, h = false, R = null, g = F(), C = false, v = [], D = [], U = null, m = null, b = {}, O = null, y = false
}
class tn extends Chunk536802.A {
  initialize() {
    this.waitFor(r.default)
  }
  loadCache() {
    let t = this.readSnapshot(tn.LATEST_SNAPSHOT_VERSION);
    null != t && (w(t.linkedUsers), k(t.guilds), H(t.teenActivity), N = t.teenActivityTotals.reduce((t, e) => {
      let [n, i] = e.split(":"), l = (0, s.k5)(n);
      return true === l ? t : T(c({}, t), {
        [l]: parseInt(i, 10)
      })
    }, P()))
  }
  takeSnapshot() {
    let t;
    return {
      version: tn.LATEST_SNAPSHOT_VERSION,
      data: {
        linkedUsers: Object.values(f),
        teenActivityTotals: Object.entries(N).map(t => {
          let [e, n] = t;
          return "".concat(e, ":").concat(n)
        }),
        teenActivity: (t = [], I.forEach(e => {
          t.push(...Array.from(e.values()))
        }), t),
        guilds: Object.values(M)
      }
    }
  }
  getSelectedTeenId() {
    return S
  }
  getLinkedUsers() {
    return f
  }
  getLinkTimestamp(t) {
    var e;
    let n = f[t];
    return null == n ? null : null != (e = n.updated_at) ? e : n.created_at
  }
  getRangeStartTimestamp() {
    return null == A ? null : o.default.extractTimestamp(A)
  }
  getActionsForDisplayType(t) {
    let e = I.get(t);
    return null != e ? Array.from(e.values()) : []
  }
  getTotalForDisplayType(t) {
    return N[t]
  }
  getLinkCode() {
    return p
  }
  getGuild(t) {
    return M[t]
  }
  getSelectedTab() {
    return g
  }
  getStartId() {
    return A
  }
  getIsInitialized() {
    return y
  }
  getAreLinkedUsersProcessed() {
    return C
  }
  getUserCountry() {
    return L
  }
  isLoading() {
    return h
  }
  getTopUserActivities() {
    return v
  }
  getTopGuildActivities() {
    return D
  }
  getTotalSpendAmount() {
    return U
  }
  getTotalSpendCurrency() {
    return m
  }
  getPurchaseInfo(t) {
    return b[t]
  }
  getAgeGroup() {
    return O
  }
  canRefetch() {
    return null === R || o.default.age(R) > E.fD
  }
  isCurrentUserInRestrictedHours() {
    var t, e;
    if (!(0, d.Eq)({
        location: "isInRestrictedHours"
      })) returnfalse;
    let n = r.default.getCurrentUser();
    return null != (t = null == n || null == (e = n.restrictedSchedule) ? true : e.isInRestrictedHours()) && t
  }
  constructor() {
    super({
      CONNECTION_OPEN: $,
      CURRENT_USER_UPDATE: J,
      CACHE_LOADED_LAZY: () => this.loadCache(),
      FAMILY_CENTER_INITIAL_LOAD: Q,
      FAMILY_CENTER_FETCH_START: j,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: B,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: K,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: z,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: W,
      FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: q,
      FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: X,
      FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: x,
      FAMILY_CENTER_HANDLE_TAB_SELECT: Z,
      SET_LOCATION_METADATA: tt,
      LOGOUT: te
    })
  }
}
_(tn, "displayName", "FamilyCenterStore"), _(tn, "LATEST_SNAPSHOT_VERSION", 3);
let ti = new tn