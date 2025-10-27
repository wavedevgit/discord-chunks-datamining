/** Chunk was on web.js **/
/** chunk id: 580130, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./388685.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk314794 = require("./314794.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk959546 = require("./959546.js"),
  Chunk283595 = require("./283595.js"),
  Chunk780570 = require("./780570.js"),
  Chunk55563 = require("./55563.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = {},
  g = {},
  E = {},
  b = {},
  y = false,
  O = false,
  v = false,
  I = new Set,
  T = new Set,
  S = {};

function A() {
  m = {}, E = {}, b = {}, y = false, O = false, v = false, I = new Set, T = new Set
}

function C(e) {
  m[e.id] = c.Z.createFromServer(e), null == E[e.sku_id] && (E[e.sku_id] = new Set), null == b[e.application_id] && (b[e.application_id] = new Set), null != e.subscription_id && (null == S[e.subscription_id] && (S[e.subscription_id] = new Set), S[e.subscription_id].add(e.id)), b[e.application_id].add(e.id), E[e.sku_id].add(e.id)
}

function N(e) {
  g[e.id] = c.Z.createFromServer(e)
}

function R(e) {
  delete m[e.id];
  let t = b[e.application_id];
  null != t && t.delete(e.id);
  let n = E[e.sku_id];
  if (null != n && n.delete(e.id), null != e.subscription_id) {
    let t = S[e.subscription_id];
    null != t && t.delete(e.id)
  }
}

function P(e) {
  let {
    applicationId: t
  } = e;
  I.add(t)
}

function D(e) {
  let {
    applicationId: t,
    entitlements: n
  } = e;
  for (let e of (I.delete(t), T.add(t), n)) true !== e.consumed && C(e)
}

function w(e) {
  let {
    entitlements: t
  } = e;
  g = {}, t.forEach(N)
}

function L() {}

function x() {
  y = true
}

function M(e) {
  let {
    entitlements: t,
    excludeEnded: n
  } = e;
  for (let e of (O = true, y = false, v = !n, t)) C(e)
}

function k() {
  O = false, y = false, v = false
}

function j(e) {
  let {
    entitlements: t
  } = e;
  for (let e of t) C(e)
}

function U(e) {
  let {
    libraryApplications: t
  } = e;
  for (let e of t)
    if (null != e.entitlements)
      for (let t of e.entitlements) C(t)
}

function G(e) {
  return C(e.entitlement)
}

function B(e) {
  return R(e.entitlement)
}
class Z extends(r = Chunk442837.yh) {
  initialize() {
    this.syncWith([Chunk283595.Z], () => true)
  }
  get(e) {
    return m[e]
  }
  getGiftable() {
    return a().values(g)
  }
  getForApplication(e) {
    let t = b[e];
    if (null == t) return null;
    let n = new Set;
    for (let e of t) n.add(m[e]);
    return n
  }
  getForSku(e) {
    let t = E[e];
    if (null == t) return null;
    let n = new Set;
    for (let e of t) n.add(m[e]);
    return n
  }
  get fetchingAllEntitlements() {
    return y
  }
  get fetchedAllEntitlements() {
    return O
  }
  get fetchedEndedEntitlements() {
    return v
  }
  get applicationIdsFetching() {
    return I
  }
  get applicationIdsFetched() {
    return T
  }
  isFetchingForApplication(e) {
    return this.fetchingAllEntitlements || null != e && this.applicationIdsFetching.has(e)
  }
  isFetchedForApplication(e) {
    return this.fetchedAllEntitlements || null != e && this.applicationIdsFetched.has(e)
  }
  getForSubscription(e) {
    let t = S[e];
    if (null == t) return null;
    let n = new Set;
    for (let e of t) n.add(m[e]);
    return n
  }
  isEntitledToSku(e, t, n) {
    let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null,
      i = E[t];
    if (null != i)
      for (let t of i) {
        let n = m[t];
        if (null != n && n.isValid(e, f.Z, r)) returntrue
      }
    if (T.has(n)) returnfalse;
    let a = null != r ? u.Z.getLibraryApplication(n, r) : u.Z.getActiveLibraryApplication(n);
    return !!(null != a && a.sku.id === t && (0, d.Je)(a)) || null
  }
  hasFetchedForApplicationIds(e) {
    return e.every(e => T.has(e))
  }
  getReverseTrialEntitlement(e) {
    let t = new Date,
      n = this.getForApplication(p.CL);
    if (null != n)
      for (let r of n) {
        let n = null != r.endsAt && r.endsAt < t,
          i = null != r.startsAt;
        if (r.type === _.qc2.FRACTIONAL_REDEMPTION && r.sourceType === _.kNB.REVERSE_TRIAL && (!n || e) && i) return r
      }
    return null
  }
  getFractionalPremium() {
    var e;
    let {
      includeEnded: t = false,
      excludeReverseTrial: n = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, r = [], i = new Date;
    return null == (e = this.getForApplication(Chunk474936.CL)) || module.forEach(e => {
      let a = null != e.endsAt && e.endsAt < i,
        o = e.sourceType === _.kNB.REVERSE_TRIAL && n;
      e.type !== _.qc2.FRACTIONAL_REDEMPTION || a && !t || o || r.push(e)
    }), r
  }
  isFractionalPremiumActive() {
    let {
      excludeReverseTrial: e = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    return this.getFractionalPremium({
      includeEnded: false,
      excludeReverseTrial: module
    }).length > 0
  }
  getUnactivatedFractionalPremiumUnits() {
    var e;
    let t = [];
    return null == (e = this.getForApplication(Chunk474936.CL)) || module.forEach(e => {
      o.k.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(e.skuId) && !e.consumed && t.push(e)
    }), exports
  }
}
h(Z, "displayName", "EntitlementStore");
let F = new Z(Chunk570140.Z, {
  ENTITLEMENT_FETCH_APPLICATION_START: P,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: D,
  ENTITLEMENT_FETCH_APPLICATION_FAIL: L,
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: w,
  SKU_PURCHASE_SUCCESS: j,
  VIRTUAL_CURRENCY_REDEEM_SUCCESS: j,
  LIBRARY_FETCH_SUCCESS: U,
  ENTITLEMENT_CREATE: G,
  ENTITLEMENT_UPDATE: G,
  ENTITLEMENT_DELETE: B,
  LOGOUT: A,
  ENTITLEMENTS_FETCH_FOR_USER_START: x,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: M,
  ENTITLEMENTS_FETCH_FOR_USER_FAIL: k
})