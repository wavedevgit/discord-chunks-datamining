/** Chunk was on web.js **/
/** chunk id: 959546, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk81825 = require("./81825.js"),
  Chunk74538 = require("./74538.js"),
  Chunk659181 = require("./659181.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class l extends Chunk81825.Z {
  static createFromServer(e) {
    var t, n, r;
    return new l({
      id: e.id,
      skuId: e.sku_id,
      applicationId: e.application_id,
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
      sku: null != e.sku ? o.Z.createFromServer(e.sku) : null,
      sourceType: null != (r = e.source_type) ? r : null
    })
  }
  get isGiftable() {
    return this.type === Chunk981631.qc2.USER_GIFT && null == this.gifterId
  }
  isValid(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
    if (this.isGiftable || this.deleted) returnfalse;
    if (this.type === a.qc2.PREMIUM_SUBSCRIPTION) {
      let n = t.get(this.skuId);
      if (null != n && !n.premium || !i.ZP.canInstallPremiumApplications(e)) returnfalse
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
  constructor(e) {
    super(), s(this, "id", true), s(this, "skuId", true), s(this, "applicationId", true), s(this, "userId", true), s(this, "gifterId", true), s(this, "type", true), s(this, "branches", true), s(this, "startsAt", true), s(this, "endsAt", true), s(this, "subscriptionId", true), s(this, "subscriptionPlanId", true), s(this, "parentId", true), s(this, "consumed", true), s(this, "giftCodeBatchId", true), s(this, "giftStyle", true), s(this, "guildId", true), s(this, "deleted", true), s(this, "sourceType", true), this.id = e.id, this.skuId = e.skuId, this.applicationId = e.applicationId, this.userId = e.userId, this.gifterId = e.gifterId, this.type = e.type, this.branches = e.branches, this.startsAt = e.startsAt, this.endsAt = e.endsAt, this.subscriptionId = e.subscriptionId, this.subscriptionPlanId = e.subscriptionPlanId, this.parentId = e.parentId, this.consumed = e.consumed, this.giftCodeBatchId = e.giftCodeBatchId, this.giftStyle = e.giftStyle, this.guildId = e.guildId, this.deleted = e.deleted, this.sourceType = e.sourceType
  }
}