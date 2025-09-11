/** Chunk was on web.js **/
/** chunk id: 654588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk78839 = require("./78839.js"),
  Chunk431 = require("./431.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class f {}
let _ = {
  userHasUnexpiredOffers: new f,
  userHasUnexpiredDiscount: new f,
  mostRecentSubscription: new f,
  prevSubscription: new f,
  shouldRefetchCampaignEligibility: true,
  isEligibleForCampaign: null
};

function p(e) {
  let {
    isEligible: t
  } = e;
  _ = d(c({}, _), {
    shouldRefetchCampaignEligibility: false,
    isEligibleForCampaign: t
  })
}

function h() {
  _ = d(c({}, _), {
    shouldRefetchCampaignEligibility: false,
    isEligibleForCampaign: null
  })
}
class m extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk431.Z, Chunk78839.Z), this.syncWith([Chunk431.Z], this.handleUserOfferUpdate), this.syncWith([Chunk78839.Z], this.handleSubscriptionUpdate)
  }
  get state() {
    return _
  }
  handleSubscriptionUpdate() {
    let e = c({}, _);
    true === Chunk78839.Z.hasFetchedMostRecentPremiumTypeSubscription() && (module.mostRecentSubscription = Chunk78839.Z.getMostRecentPremiumTypeSubscription()), true === Chunk78839.Z.hasFetchedPreviousPremiumTypeSubscription() && (module.prevSubscription = Chunk78839.Z.getPreviousPremiumTypeSubscription()), module.shouldRefetchCampaignEligibility = true, _ = module
  }
  handleUserOfferUpdate() {
    false !== Chunk431.Z.lastFetchSuccessful() && (_ = d(c({}, _), {
      userHasUnexpiredOffers: Chunk431.Z.hasAnyUnexpiredOffer(),
      userHasUnexpiredDiscount: Chunk431.Z.hasAnyUnexpiredDiscountOffer(),
      shouldRefetchCampaignEligibility: true
    }))
  }
}
l(m, "displayName", "MarketingCampaignEligibilityStore");
let g = new m(Chunk570140.Z, {
  MARKETING_CAMPAIGN_ELIGIBILITY_FETCHED: p,
  MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_FAILED: h
})