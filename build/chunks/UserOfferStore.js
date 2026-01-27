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
  y = E;

function b() {
  y.isFetching = true
}

function O(e) {
  let {
    userTrialOffer: t
  } = e;
  null != t ? y.userTrialOffers[t.trial_id] = t : T(), y.userOffersLastFetchedAtDate = Date.now(), y.isFetching = false
}

function v(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: r
  } = e;
  null == t && null == n && null == r && T(), null != t ? (y.userTrialOffers[t.trial_id] = t, y.userDiscountOffers = {}) : null != n ? (y.userDiscountOffers[n.discount_id] = n, y.userTrialOffers = {}) : null != r && (y.userDiscountOffers[r.discount_id] = r, y.userTrialOffers = {}), y.userOffersLastFetchedAtDate = Date.now(), y.isFetching = false, y.lastFetchSuccessful = true
}

function A() {
  T(), y.userOffersLastFetchedAtDate = Date.now(), y.isFetching = false, y.lastFetchSuccessful = false
}

function I(e) {
  let {
    userTrialOffer: t
  } = e;
  null != t ? y.userTrialOffers[t.trial_id] = t : y.userTrialOffers = {}, y.userOffersLastFetchedAtDate = Date.now()
}

function S(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: r
  } = e;
  null != t ? y.userTrialOffers[t.trial_id] = t : y.userTrialOffers = {}, null != n ? y.userDiscountOffers[n.discount_id] = n : null != r ? y.userDiscountOffers[r.discount_id] = r : y.userDiscountOffers = {}, y.userOffersLastFetchedAtDate = Date.now()
}

function T() {
  y.userTrialOffers = {}, y.userDiscountOffers = {}, y.userOffersLastFetchedAtDate = true, y.isFetching = false
}
let C = () => true;

function N() {
  return null != d.A.getPremiumTypeSubscription() && (null != y.userDiscountOffers[f.q] ? y.userDiscountOffers = {
    [f.q]: y.userDiscountOffers[f.q]
  } : null != y.userDiscountOffers[f.EG] ? y.userDiscountOffers = {
    [f.EG]: y.userDiscountOffers[f.EG]
  } : y.userDiscountOffers = {}, y.userTrialOffers = {}, true)
}

function w() {
  let e = l.default.getCurrentUser();
  !(0, u.TW)(e) && Object.keys(y.userDiscountOffers).length > 0 && (0, s._D)("UserOfferStore", true)
}

function R() {
  var e;
  let t = null == (e = l.default.getCurrentUser()) ? true : e.id;
  if (null == t) returnfalse;
  let n = o.A.getAllRelevantReferralTrialOffers().filter(e => e.user_id === t);
  if (n.length > 0) {
    let e = n[0];
    return y.userTrialOffers[e.trial_id] = e, true
  }
  returnfalse
}
class P extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    y = null != e ? e : E, this.waitFor(c.A, o.A, d.A, l.default), this.syncWith([l.default], C), this.syncWith([d.A], N), this.syncWith([o.A], R)
  }
  getUserTrialOffer(e) {
    if (null !== e) return y.userTrialOffers[e]
  }
  getUserDiscountOffer(e) {
    if (null !== e) return y.userDiscountOffers[e]
  }
  getAnyOfUserTrialOfferId(e) {
    for (let t of e)
      if (null != y.userTrialOffers[t]) return t;
    return null
  }
  isFetchingOffer() {
    var e;
    return null != (e = y.isFetching) && e
  }
  hasFetchedOffer() {
    return null != y.userOffersLastFetchedAtDate
  }
  shouldFetchReferralOffer(e) {
    var t;
    let n = y.userOffersLastFetchedAtDate,
      r = null != (t = y.isFetching) && t;
    if (null == n) return !r;
    let i = Date.now() - g > n,
      a = (null != e ? e : 0) > n;
    return !r && (i || a)
  }
  getAlmostExpiringTrialOffers(e) {
    let t = Object.values(f.TP).map(e => e.id),
      n = l.default.getCurrentUser();
    return (0, u.TW)(n) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(y.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + (0, u.e1)(n))
  }
  getAlmostExpiringDiscountOffers(e) {
    let t = l.default.getCurrentUser();
    return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(y.userDiscountOffers).filter(t => null != t.expires_at && null != t.discount && t.discount.plan_ids.some(t => e.includes(f.hd[t].skuId)) && Date.parse(t.expires_at) < Date.now() + (0, u.e1)(t))
  }
  getAcknowledgedOffers(e) {
    let t = l.default.getCurrentUser();
    return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(y.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
  }
  getUnacknowledgedDiscountOffers() {
    var e;
    let t = l.default.getCurrentUser();
    return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(null != (e = y.userDiscountOffers) ? e : {}).filter(e => null == e.expires_at && !f.ly.includes(e.discount_id))
  }
  getUnacknowledgedOffers(e) {
    let t = l.default.getCurrentUser();
    return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(y.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
  }
  hasAnyUnexpiredOffer() {
    return Object.values(y.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
  }
  hasAnyUnexpiredDiscountOffer() {
    return Object.values(y.userDiscountOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
  }
  canFractionalPremiumUserUseOffer() {
    return c.A.isFractionalPremiumActive({
      excludeReverseTrial: true
    }) && null == d.A.getPremiumTypeSubscription()
  }
  getReferrer(e) {
    var t;
    return null == e ? null : null == (t = y.userTrialOffers[e]) ? true : t.referrer
  }
  getState() {
    return y
  }
  forceReset() {
    T()
  }
  lastFetchSuccessful() {
    return y.lastFetchSuccessful
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
  BILLING_USER_OFFER_FETCH_START: b,
  BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: O,
  BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: I,
  BILLING_USER_OFFER_FETCH_SUCCESS: v,
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: S,
  BILLING_USER_OFFER_FETCH_FAIL: A,
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: w,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: w,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: w,
  LOGOUT: T
})