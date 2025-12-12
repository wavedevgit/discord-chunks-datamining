/** Chunk was on web.js **/
/** chunk id: 959546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk361268 = require("./361268.js"),
  Chunk81825 = require("./81825.js"),
  Chunk74538 = require("./74538.js"),
  Chunk659181 = require("./659181.js"),
  Chunk598077 = require("./598077.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk81825.Z {
  static createFromServer(e) {
    var t, n, r, i;
    return new u({
      id: e.id,
      skuId: e.sku_id,
      applicationId: e.application_id,
      user: null != e.user ? new s.Z(e.user) : null,
      userId: e.user_id,
      gifterId: e.gifter_user_id,
      type: e.type,
      branches: null != (t = e.branches) ? t : [],
      startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
      endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
      subscriptionId: e.subscription_id,
      subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : null,
      parentId: null != e.parent_id ? e.parent_id : null,
      consumed: null != e.consumed ? e.consumed : null,
      giftCodeBatchId: null != (n = e.gift_code_batch_id) ? n : null,
      giftStyle: e.gift_style,
      guildId: e.guild_id,
      deleted: e.deleted,
      sku: null != e.sku ? a.Z.createFromServer(e.sku) : null,
      sourceType: null != (r = e.source_type) ? r : null,
      fulfillmentStatus: null != (i = e.fulfillment_status) ? i : null
    })
  }
  get isGiftable() {
    return this.type === Chunk981631.qc2.USER_GIFT && null == this.gifterId
  }
  isValid(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
    if (this.isGiftable || this.deleted) returnfalse;
    if (this.type === l.qc2.PREMIUM_SUBSCRIPTION) {
      let n = t.get(this.skuId);
      if (null != n && !n.premium || !o.ZP.canInstallPremiumApplications(e)) returnfalse
    }
    let r = new Date;
    if (null != this.startsAt && r < this.startsAt || null != this.endsAt && r >= this.endsAt) returnfalse;
    if (null != n) {
      if (0 === this.branches.length) {
        if (this.applicationId !== n) returnfalse
      } else if (!this.branches.includes(n)) returnfalse
    }
    returntrue
  }
  isFulfilled() {
    return this.fulfillmentStatus === Chunk361268.m.FULFILLED
  }
  constructor(e) {
    super(), c(this, "id", true), c(this, "skuId", true), c(this, "applicationId", true), c(this, "user", true), c(this, "userId", true), c(this, "gifterId", true), c(this, "type", true), c(this, "branches", true), c(this, "startsAt", true), c(this, "endsAt", true), c(this, "subscriptionId", true), c(this, "subscriptionPlanId", true), c(this, "parentId", true), c(this, "consumed", true), c(this, "giftCodeBatchId", true), c(this, "giftStyle", true), c(this, "guildId", true), c(this, "deleted", true), c(this, "sourceType", true), c(this, "fulfillmentStatus", true), this.id = e.id, this.skuId = e.skuId, this.applicationId = e.applicationId, this.user = e.user, this.userId = e.userId, this.gifterId = e.gifterId, this.type = e.type, this.branches = e.branches, this.startsAt = e.startsAt, this.endsAt = e.endsAt, this.subscriptionId = e.subscriptionId, this.subscriptionPlanId = e.subscriptionPlanId, this.parentId = e.parentId, this.consumed = e.consumed, this.giftCodeBatchId = e.giftCodeBatchId, this.giftStyle = e.giftStyle, this.guildId = e.guildId, this.deleted = e.deleted, this.sourceType = e.sourceType, this.fulfillmentStatus = e.fulfillmentStatus
  }
}