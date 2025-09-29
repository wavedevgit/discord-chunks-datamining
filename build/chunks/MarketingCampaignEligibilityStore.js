/** Chunk was on web.js **/
/** chunk id: 654588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk431 = require("./431.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class _ {}
let p = {
  userHasUnexpiredOffers: new _,
  userHasUnexpiredDiscount: new _,
  mostRecentSubscription: new _,
  prevSubscription: new _,
  premiumSource: new _,
  shouldRefetchCampaignEligibility: true,
  isEligibleForCampaign: null,
  isFetchingCampaignEligibility: false
};

function h(e) {
  let {
    isEligible: t
  } = e;
  p = f(u({}, p), {
    shouldRefetchCampaignEligibility: false,
    isEligibleForCampaign: t,
    isFetchingCampaignEligibility: false
  })
}

function m() {
  p = f(u({}, p), {
    shouldRefetchCampaignEligibility: false,
    isEligibleForCampaign: null,
    isFetchingCampaignEligibility: false
  })
}

function g() {
  p = f(u({}, p), {
    isFetchingCampaignEligibility: true
  })
}

function E(e, t) {
  return !(e instanceof _) && (null === e && null === t || null !== e && null !== t && e.id === t.id && e.status === t.status)
}
class b extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk431.Z, Chunk78839.Z, Chunk594174.default), this.syncWith([Chunk431.Z], this.handleUserOfferUpdate), this.syncWith([Chunk78839.Z], this.handleSubscriptionUpdate), this.syncWith([Chunk594174.default], this.handleUserUpdate)
  }
  get state() {
    return p
  }
  handleUserUpdate() {
    var e, t;
    let n = u({}, p),
      r = null == (t = Chunk594174.default.getCurrentUser()) || null == (e = exports.premiumState) ? true : module.premiumSource;
    require.premiumSource !== r && (require.premiumSource = null != r ? r : null, require.shouldRefetchCampaignEligibility = true), p = require
  }
  handleSubscriptionUpdate() {
    let e = u({}, p);
    if (true === Chunk78839.Z.hasFetchedMostRecentPremiumTypeSubscription()) {
      let t = module.mostRecentSubscription,
        n = Chunk78839.Z.getMostRecentPremiumTypeSubscription();
      E(exports, require) || (module.shouldRefetchCampaignEligibility = true), module.mostRecentSubscription = require
    }
    if (true === Chunk78839.Z.hasFetchedPreviousPremiumTypeSubscription()) {
      let t = module.prevSubscription,
        n = Chunk78839.Z.getPreviousPremiumTypeSubscription();
      E(exports, require) || (module.shouldRefetchCampaignEligibility = true), module.prevSubscription = require
    }
    p = module
  }
  handleUserOfferUpdate() {
    false !== Chunk431.Z.lastFetchSuccessful() && (p.userHasUnexpiredDiscount !== Chunk431.Z.hasAnyUnexpiredDiscountOffer() || p.userHasUnexpiredOffers !== Chunk431.Z.hasAnyUnexpiredOffer()) && (p = f(u({}, p), {
      userHasUnexpiredOffers: Chunk431.Z.hasAnyUnexpiredOffer(),
      userHasUnexpiredDiscount: Chunk431.Z.hasAnyUnexpiredDiscountOffer(),
      shouldRefetchCampaignEligibility: true
    }))
  }
}
c(b, "displayName", "MarketingCampaignEligibilityStore");
let y = new b(Chunk570140.Z, {
  MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_SUCCESS: h,
  MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_FAILED: m,
  MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_STARTED: g
})