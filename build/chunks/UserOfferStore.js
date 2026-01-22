/** Chunk was on web.js **/
/** chunk id: 816733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./896048.js"), require("./205816.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk851746 = require("./851746.js"),
  Chunk694080 = require("./694080.js"),
  Chunk287809 = require("./287809.js"),
  Chunk469778 = require("./469778.js"),
  Chunk927578 = require("./927578.js"),
  Chunk166403 = require("./166403.js"),
  Chunk788868 = require("./788868.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = 6e5,
  E = {
    userOffersLastFetchedAtDate: true,
    userTrialOffers: {},
    userDiscountOffers: {},
    userDiscounts: true,
    isFetching: false,
    lastFetchSuccessful: false
  },
  b = E;

function y() {
  b.isFetching = true
}

function O(e) {
  let {
    userTrialOffer: t
  } = e;
  null != t ? b.userTrialOffers[t.trial_id] = t : T(), b.userOffersLastFetchedAtDate = Date.now(), b.isFetching = false
}

function A(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: r
  } = e;
  null == t && null == n && null == r && T(), null != t ? (b.userTrialOffers[t.trial_id] = t, b.userDiscountOffers = {}) : null != n ? (b.userDiscountOffers[n.discount_id] = n, b.userTrialOffers = {}) : null != r && (b.userDiscountOffers[r.discount_id] = r, b.userTrialOffers = {}), b.userOffersLastFetchedAtDate = Date.now(), b.isFetching = false, b.lastFetchSuccessful = true
}

function v() {
  T(), b.userOffersLastFetchedAtDate = Date.now(), b.isFetching = false, b.lastFetchSuccessful = false
}

function S(e) {
  let {
    userTrialOffer: t
  } = e;
  null != t ? b.userTrialOffers[t.trial_id] = t : b.userTrialOffers = {}, b.userOffersLastFetchedAtDate = Date.now()
}

function I(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: r
  } = e;
  null != t ? b.userTrialOffers[t.trial_id] = t : b.userTrialOffers = {}, null != n ? b.userDiscountOffers[n.discount_id] = n : null != r ? b.userDiscountOffers[r.discount_id] = r : b.userDiscountOffers = {}, b.userOffersLastFetchedAtDate = Date.now()
}

function T() {
  b.userTrialOffers = {}, b.userDiscountOffers = {}, b.userOffersLastFetchedAtDate = true, b.isFetching = false
}
let C = () => true;

function N() {
  return null != d.A.getPremiumTypeSubscription() && (null != b.userDiscountOffers[f.q] ? b.userDiscountOffers = {
    [f.q]: b.userDiscountOffers[f.q]
  } : null != b.userDiscountOffers[f.EG] ? b.userDiscountOffers = {
    [f.EG]: b.userDiscountOffers[f.EG]
  } : b.userDiscountOffers = {}, b.userTrialOffers = {}, true)
}

function R() {
  let e = l.default.getCurrentUser();
  !(0, u.TW)(e) && Object.keys(b.userDiscountOffers).length > 0 && (0, o._D)("UserOfferStore", true)
}

function w() {
  var e;
  let t = null == (e = l.default.getCurrentUser()) ? true : e.id;
  if (null == t) returnfalse;
  let n = s.A.getAllRelevantReferralTrialOffers().filter(e => e.user_id === t);
  if (n.length > 0) {
    let e = n[0];
    return b.userTrialOffers[e.trial_id] = e, true
  }
  returnfalse
}
class P extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    b = null != e ? e : E, this.waitFor(c.A, s.A, d.A, l.default), this.syncWith([l.default], C), this.syncWith([d.A], N), this.syncWith([s.A], w)
  }
  getUserTrialOffer(e) {
    if (null !== e) return b.userTrialOffers[e]
  }
  getUserDiscountOffer(e) {
    if (null !== e) return b.userDiscountOffers[e]
  }
  getAnyOfUserTrialOfferId(e) {
    for (let t of e)
      if (null != b.userTrialOffers[t]) return t;
    return null
  }
  isFetchingOffer() {
    var e;
    return null != (e = b.isFetching) && e
  }
  hasFetchedOffer() {
    return null != b.userOffersLastFetchedAtDate
  }
  shouldFetchReferralOffer(e) {
    var t;
    let n = b.userOffersLastFetchedAtDate,
      r = null != (t = b.isFetching) && t;
    if (null == n) return !r;
    let i = Date.now() - g > n,
      a = (null != e ? e : 0) > n;
    return !r && (i || a)
  }
  getAlmostExpiringTrialOffers(e) {
    let t = Object.values(f.TP).map(e => e.id),
      n = l.default.getCurrentUser();
    return (0, u.TW)(n) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(b.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + (0, u.e1)(n))
  }
  getAlmostExpiringDiscountOffers(e) {
    let t = l.default.getCurrentUser();
    return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(b.userDiscountOffers).filter(t => null != t.expires_at && null != t.discount && t.discount.plan_ids.some(t => e.includes(f.hd[t].skuId)) && Date.parse(t.expires_at) < Date.now() + (0, u.e1)(t))
  }
  getAcknowledgedOffers(e) {
    let t = l.default.getCurrentUser();
    return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(b.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
  }
  getUnacknowledgedDiscountOffers() {
    var e;
    let t = l.default.getCurrentUser();
    return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(null != (e = b.userDiscountOffers) ? e : {}).filter(e => null == e.expires_at && !f.ly.includes(e.discount_id))
  }
  getUnacknowledgedOffers(e) {
    let t = l.default.getCurrentUser();
    return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(b.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
  }
  hasAnyUnexpiredOffer() {
    return Object.values(b.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
  }
  hasAnyUnexpiredDiscountOffer() {
    return Object.values(b.userDiscountOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
  }
  canFractionalPremiumUserUseOffer() {
    return c.A.isFractionalPremiumActive({
      excludeReverseTrial: true
    }) && null == d.A.getPremiumTypeSubscription()
  }
  getReferrer(e) {
    var t;
    return null == e ? null : null == (t = b.userTrialOffers[e]) ? true : t.referrer
  }
  getState() {
    return b
  }
  forceReset() {
    T()
  }
  lastFetchSuccessful() {
    return b.lastFetchSuccessful
  }
}
p(P, "displayName", "UserOfferStore"), p(P, "persistKey", "UserOfferStore"), p(P, "migrations", [e => {
  let t = null == e ? true : e.userDiscounts;
  if (null != t) return m(_({}, e), {
    userDiscountOffers: t
  })
}, e => {
  if (null != e) return Object.hasOwn(e, "userAnnualOfferLastFetchedAtDate") && delete e.userAnnualOfferLastFetchedAtDate, e
}, e => {
  if (null != e) return (null == e ? true : e.isFetching) == null ? m(_({}, e), {
    isFetching: false
  }) : e
}]);
let D = new P(Chunk73153.h, {
  BILLING_USER_OFFER_FETCH_START: y,
  BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: O,
  BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: S,
  BILLING_USER_OFFER_FETCH_SUCCESS: A,
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: I,
  BILLING_USER_OFFER_FETCH_FAIL: v,
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: R,
  LOGOUT: T
})