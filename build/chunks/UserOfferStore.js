/** Chunk was on web.js **/
/** chunk id: 431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./825670.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk276444 = require("./276444.js"),
  Chunk937579 = require("./937579.js"),
  Chunk594174 = require("./594174.js"),
  Chunk580130 = require("./580130.js"),
  Chunk74538 = require("./74538.js"),
  Chunk78839 = require("./78839.js"),
  Chunk474936 = require("./474936.js");

function _(e, t, n) {
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
      _(e, t, n[t])
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
  null != t ? b.userTrialOffers[t.trial_id] = t : A(), b.userOffersLastFetchedAtDate = Date.now(), b.isFetching = false
}

function v(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: r
  } = e;
  null == t && null == n && null == r && A(), null != t ? (b.userTrialOffers[t.trial_id] = t, b.userDiscountOffers = {}) : null != n ? (b.userDiscountOffers[n.discount_id] = n, b.userTrialOffers = {}) : null != r && (b.userDiscountOffers[r.discount_id] = r, b.userTrialOffers = {}), b.userOffersLastFetchedAtDate = Date.now(), b.isFetching = false, b.lastFetchSuccessful = true
}

function I() {
  A(), b.userOffersLastFetchedAtDate = Date.now(), b.isFetching = false, b.lastFetchSuccessful = false
}

function T(e) {
  let {
    userTrialOffer: t
  } = e;
  null != t ? b.userTrialOffers[t.trial_id] = t : b.userTrialOffers = {}, b.userOffersLastFetchedAtDate = Date.now()
}

function S(e) {
  let {
    userTrialOffer: t,
    userDiscount: n,
    userDiscountOffer: r
  } = e;
  null != t ? b.userTrialOffers[t.trial_id] = t : b.userTrialOffers = {}, null != n ? b.userDiscountOffers[n.discount_id] = n : null != r ? b.userDiscountOffers[r.discount_id] = r : b.userDiscountOffers = {}, b.userOffersLastFetchedAtDate = Date.now()
}

function A() {
  b.userTrialOffers = {}, b.userDiscountOffers = {}, b.userOffersLastFetchedAtDate = true, b.isFetching = false
}
let C = () => true;

function N() {
  return null != Chunk78839.Z.getPremiumTypeSubscription() && (null != b.userDiscountOffers[Chunk474936.dT] ? b.userDiscountOffers = {
    [Chunk474936.dT]: b.userDiscountOffers[Chunk474936.dT]
  } : null != b.userDiscountOffers[Chunk474936.dB] ? b.userDiscountOffers = {
    [Chunk474936.dB]: b.userDiscountOffers[Chunk474936.dB]
  } : b.userDiscountOffers = {}, b.userTrialOffers = {}, true)
}

function R() {
  let e = Chunk594174.default.getCurrentUser();
  !(0, Chunk74538.I5)(module) && Object.keys(b.userDiscountOffers).length > 0 && (0, Chunk937579.Tf)("UserOfferStore", true)
}

function P() {
  var e;
  let t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.id;
  if (null == exports) returnfalse;
  let n = Chunk276444.Z.getAllRelevantReferralTrialOffers().filter(e => e.user_id === t);
  if (require.length > 0) {
    let e = require[0];
    return b.userTrialOffers[module.trial_id] = module, true
  }
  returnfalse
}
class w extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    b = null != e ? e : E, this.waitFor(c.Z, o.Z, d.Z, l.default), this.syncWith([l.default], C), this.syncWith([d.Z], N), this.syncWith([o.Z], P)
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
    return null != (e = b.isFetching) && module
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
    let t = Object.values(f.nG).map(e => e.id),
      n = l.default.getCurrentUser();
    return (0, u.I5)(n) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(b.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + (0, u.yg)(n))
  }
  getAlmostExpiringDiscountOffers(e) {
    let t = l.default.getCurrentUser();
    return (0, u.I5)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(b.userDiscountOffers).filter(t => null != t.expires_at && null != t.discount && t.discount.plan_ids.some(t => e.includes(f.GP[t].skuId)) && Date.parse(t.expires_at) < Date.now() + (0, u.yg)(t))
  }
  getAcknowledgedOffers(e) {
    let t = l.default.getCurrentUser();
    return (0, u.I5)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(b.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
  }
  getUnacknowledgedDiscountOffers() {
    var e;
    let t = Chunk594174.default.getCurrentUser();
    return (0, Chunk74538.I5)(exports) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(null != (e = b.userDiscountOffers) ? module : {}).filter(e => null == e.expires_at && !f.ee.includes(e.discount_id))
  }
  getUnacknowledgedOffers(e) {
    let t = l.default.getCurrentUser();
    return (0, u.I5)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(b.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
  }
  hasAnyUnexpiredOffer() {
    return Object.values(b.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
  }
  hasAnyUnexpiredDiscountOffer() {
    return Object.values(b.userDiscountOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
  }
  canFractionalPremiumUserUseOffer() {
    return Chunk580130.Z.isFractionalPremiumActive({
      excludeReverseTrial: true
    }) && null == Chunk78839.Z.getPremiumTypeSubscription()
  }
  getReferrer(e) {
    var t;
    return null == e ? null : null == (t = b.userTrialOffers[e]) ? true : t.referrer
  }
  getState() {
    return b
  }
  forceReset() {
    A()
  }
  lastFetchSuccessful() {
    return b.lastFetchSuccessful
  }
}
_(w, "displayName", "UserOfferStore"), _(w, "persistKey", "UserOfferStore"), _(w, "migrations", [e => {
  let t = null == e ? true : e.userDiscounts;
  if (null != t) return m(p({}, e), {
    userDiscountOffers: t
  })
}, e => {
  if (null != e) return Object.hasOwn(e, "userAnnualOfferLastFetchedAtDate") && delete e.userAnnualOfferLastFetchedAtDate, e
}, e => {
  if (null != e) return (null == e ? true : e.isFetching) == null ? m(p({}, e), {
    isFetching: false
  }) : e
}]);
let D = new w(Chunk570140.Z, {
  BILLING_USER_OFFER_FETCH_START: y,
  BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: O,
  BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: T,
  BILLING_USER_OFFER_FETCH_SUCCESS: v,
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: S,
  BILLING_USER_OFFER_FETCH_FAIL: I,
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: R,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: R,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: R,
  LOGOUT: A
})