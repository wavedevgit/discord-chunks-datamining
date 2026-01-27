/** Chunk was on web.js **/
/** chunk id: 469778, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => B
}), require("./896048.js"), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk334279 = require("./334279.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk557009 = require("./557009.js"),
  Chunk189081 = require("./189081.js"),
  Chunk674378 = require("./674378.js"),
  Chunk67480 = require("./67480.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

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
  y = {},
  b = false,
  O = false,
  v = false,
  A = new Set,
  I = new Set,
  S = {};

function T() {
  m = {}, E = {}, y = {}, b = false, O = false, v = false, A = new Set, I = new Set
}

function C(e) {
  m[e.id] = c.A.createFromServer(e), null == E[e.sku_id] && (E[e.sku_id] = new Set), null == y[e.application_id] && (y[e.application_id] = new Set), null != e.subscription_id && (null == S[e.subscription_id] && (S[e.subscription_id] = new Set), S[e.subscription_id].add(e.id)), y[e.application_id].add(e.id), E[e.sku_id].add(e.id)
}

function N(e) {
  g[e.id] = c.A.createFromServer(e)
}

function w(e) {
  delete m[e.id];
  let t = y[e.application_id];
  null != t && t.delete(e.id);
  let n = E[e.sku_id];
  if (null != n && n.delete(e.id), null != e.subscription_id) {
    let t = S[e.subscription_id];
    null != t && t.delete(e.id)
  }
}

function R(e) {
  let {
    applicationId: t
  } = e;
  A.add(t)
}

function P(e) {
  let {
    applicationId: t,
    entitlements: n
  } = e;
  for (let e of (A.delete(t), I.add(t), n)) true !== e.consumed && C(e)
}

function D(e) {
  let {
    entitlements: t
  } = e;
  g = {}, t.forEach(N)
}

function L() {}

function x() {
  b = true
}

function M(e) {
  let {
    entitlements: t,
    excludeEnded: n
  } = e;
  for (let e of (O = true, b = false, v = !n, t)) C(e)
}

function j() {
  O = false, b = false, v = false
}

function k(e) {
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

function F(e) {
  return w(e.entitlement)
}
class V extends(r = Chunk311907.il) {
  initialize() {
    this.syncWith([u.A], () => true)
  }
  get(e) {
    return m[e]
  }
  getGiftable() {
    return a().values(g)
  }
  getForApplication(e) {
    let t = y[e];
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
    return b
  }
  get fetchedAllEntitlements() {
    return O
  }
  get fetchedEndedEntitlements() {
    return v
  }
  get applicationIdsFetching() {
    return A
  }
  get applicationIdsFetched() {
    return I
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
        if (null != n && n.isValid(e, f.A, r)) returntrue
      }
    if (I.has(n)) returnfalse;
    let a = null != r ? u.A.getLibraryApplication(n, r) : u.A.getActiveLibraryApplication(n);
    return !!(null != a && a.sku.id === t && (0, d.XZ)(a)) || null
  }
  hasFetchedForApplicationIds(e) {
    return e.every(e => I.has(e))
  }
  getReverseTrialEntitlement(e) {
    let t = new Date,
      n = this.getForApplication(_.tv);
    if (null != n)
      for (let r of n) {
        let n = null != r.endsAt && r.endsAt < t,
          i = null != r.startsAt;
        if (r.type === p.zF_.FRACTIONAL_REDEMPTION && r.sourceType === p.GD.REVERSE_TRIAL && (!n || e) && i) return r
      }
    return null
  }
  getFractionalPremium() {
    var e;
    let {
      includeEnded: t = false,
      excludeReverseTrial: n = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, r = [], i = new Date;
    return null == (e = this.getForApplication(_.tv)) || e.forEach(e => {
      let a = null != e.endsAt && e.endsAt < i,
        o = e.sourceType === p.GD.REVERSE_TRIAL && n;
      e.type !== p.zF_.FRACTIONAL_REDEMPTION || a && !t || o || r.push(e)
    }), r
  }
  isFractionalPremiumActive() {
    let {
      excludeReverseTrial: e = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    return this.getFractionalPremium({
      includeEnded: false,
      excludeReverseTrial: e
    }).length > 0
  }
  getUnactivatedFractionalPremiumUnits() {
    var e;
    let t = [];
    return null == (e = this.getForApplication(_.tv)) || e.forEach(e => {
      o.I.ACTIVE_FRACTIONAL_PREMIUM_SKUS.has(e.skuId) && !e.consumed && t.push(e)
    }), t
  }
}
h(V, "displayName", "EntitlementStore");
let B = new V(Chunk73153.h, {
  ENTITLEMENT_FETCH_APPLICATION_START: R,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: P,
  ENTITLEMENT_FETCH_APPLICATION_FAIL: L,
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: D,
  SKU_PURCHASE_SUCCESS: k,
  VIRTUAL_CURRENCY_REDEEM_SUCCESS: k,
  LIBRARY_FETCH_SUCCESS: U,
  ENTITLEMENT_CREATE: G,
  ENTITLEMENT_UPDATE: G,
  ENTITLEMENT_DELETE: F,
  LOGOUT: T,
  ENTITLEMENTS_FETCH_FOR_USER_START: x,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: M,
  ENTITLEMENTS_FETCH_FOR_USER_FAIL: j
})