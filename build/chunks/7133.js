/** Chunk was on web.js **/
/** chunk id: 7133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./938796.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk665260 = require("./665260.js"),
  Chunk315069 = require("./315069.js"),
  Chunk835095 = require("./835095.js"),
  Chunk832946 = require("./832946.js"),
  Chunk788868 = require("./788868.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = Object.freeze({
  PAYMENT_SOURCE_REQUIRED: 1,
  EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
  NOT_SELF_REDEEMABLE: 4
});
class f extends Chunk315069.A {
  static createFromServer(e) {
    return new f({
      userId: null != e.user ? e.user.id : null,
      code: e.code,
      skuId: e.sku_id,
      applicationId: e.application_id,
      uses: e.uses,
      maxUses: e.max_uses,
      storeListingId: null != e.store_listing ? e.store_listing.id : null,
      expiresAt: null != e.expires_at ? i()(e.expires_at) : null,
      redeemed: e.redeemed,
      subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
      subscriptionPlan: null != e.subscription_plan ? l.Ay.createFromServer(e.subscription_plan) : null,
      revoked: false,
      entitlementBranches: null != e.entitlement_branches ? e.entitlement_branches : null,
      flags: null != e.flags ? e.flags : 0,
      giftStyle: e.gift_style,
      subscriptionTrial: null != e.subscription_trial ? {
        id: e.subscription_trial.id,
        interval: e.subscription_trial.interval,
        intervalCount: e.subscription_trial.interval_count,
        skuId: e.subscription_trial.sku_id
      } : null,
      promotion: null != e.promotion ? s.A.createFromServer(e.promotion) : null
    })
  }
  isExpired() {
    let e = this.expiresAt;
    return null != e && i()().isAfter(e)
  }
  get hasMultipleCopies() {
    return this.maxUses > 1
  }
  get isClaimed() {
    return this.uses >= this.maxUses
  }
  get remainingUses() {
    return this.maxUses - this.uses
  }
  get isSubscription() {
    return null != this.subscriptionPlanId
  }
  get premiumSubscriptionType() {
    return this.isSubscription && c.WN[this.skuId] || null
  }
  get isSelfRedeemable() {
    return !(0, a.Lt)(this.flags, d.NOT_SELF_REDEEMABLE)
  }
  get isExistingPremiumSubscriptionDisallowed() {
    return (0, a.Lt)(this.flags, d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
  }
  get analyticsData() {
    return {
      gift_code: this.code,
      gift_code_max_uses: this.maxUses
    }
  }
  toString() {
    return this.code
  }
  constructor(e) {
    super(), u(this, "userId", true), u(this, "code", true), u(this, "skuId", true), u(this, "applicationId", true), u(this, "uses", true), u(this, "maxUses", true), u(this, "expiresAt", true), u(this, "redeemed", true), u(this, "storeListingId", true), u(this, "subscriptionPlanId", true), u(this, "subscriptionPlan", true), u(this, "revoked", true), u(this, "entitlementBranches", true), u(this, "flags", true), u(this, "subscriptionTrial", true), u(this, "promotion", true), u(this, "giftStyle", true), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.applicationId = e.applicationId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
  }
}