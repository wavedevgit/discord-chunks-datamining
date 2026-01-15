/** Chunk was on web.js **/
/** chunk id: 605338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk81825 = require("./81825.js"),
  Chunk397047 = require("./397047.js"),
  Chunk474936 = require("./474936.js");

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
    var t, n, r, i, a, o, s, c, u, d, f, p, _;
    return new l({
      id: e.id,
      trialId: e.trial_id,
      startDate: new Date(e.start_date),
      endDate: new Date(e.end_date),
      outboundRedemptionEndDate: null != e.outbound_redemption_end_date ? new Date(e.outbound_redemption_end_date) : null,
      inboundHeaderText: null != (r = e.inbound_header_text) ? r : "",
      inboundBodyText: null != (i = e.inbound_body_text) ? i : "",
      inboundHelpCenterLink: null != (a = e.inbound_help_center_link) ? a : "",
      outboundTitle: null != (o = e.outbound_title) ? o : "",
      outboundRedemptionModalBody: null != (s = e.outbound_redemption_modal_body) ? s : "",
      outboundTermsAndConditions: null != (c = e.outbound_terms_and_conditions) ? c : "",
      outboundRedemptionPageLink: null != (u = e.outbound_redemption_page_link) ? u : "",
      outboundRedemptionUrlFormat: null != (d = e.outbound_redemption_url_format) ? d : "",
      flags: e.flags,
      inboundRestrictedCountries: e.inbound_restricted_countries,
      outboundRestrictedCountries: e.outbound_restricted_countries,
      promotionType: e.promotion_type,
      partnerId: null != (f = e.partner_id) ? f : null,
      marketingComponents: null != (p = e.marketing_components) ? p : [],
      rewardSkuIds: null != (_ = null == (n = e.metadata) || null == (t = n.gift_promotion) ? true : t.reward_sku_ids) ? _ : []
    })
  }
  get isThirdPartyOutbound() {
    return this.promotionType === a.$k.THIRD_PARTY_OUTBOUND
  }
  get isBogo() {
    return this.promotionType === a.$k.BOGO
  }
  get isMarketingMoment() {
    return this.promotionType === a.$k.MARKETING_MOMENT
  }
  hasFlag(e) {
    return (0, r.yE)(this.flags, e)
  }
  isCountryRestricted(e) {
    switch (this.promotionType) {
      case a.$k.THIRD_PARTY_INBOUND:
        return this.inboundRestrictedCountries.includes(e);
      case a.$k.THIRD_PARTY_OUTBOUND:
        return this.outboundRestrictedCountries.includes(e);
      default:
        returnfalse
    }
  }
  isRedeemableByTrialUsers() {
    return this.hasFlag(o.TD.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS)
  }
  constructor(e) {
    var t, n, r;
    super(), s(this, "id", true), s(this, "trialId", true), s(this, "startDate", true), s(this, "endDate", true), s(this, "outboundRedemptionEndDate", true), s(this, "inboundHeaderText", true), s(this, "inboundBodyText", true), s(this, "inboundHelpCenterLink", true), s(this, "outboundTitle", true), s(this, "outboundRedemptionModalBody", true), s(this, "outboundTermsAndConditions", true), s(this, "outboundRedemptionPageLink", true), s(this, "outboundRedemptionUrlFormat", true), s(this, "flags", true), s(this, "inboundRestrictedCountries", true), s(this, "outboundRestrictedCountries", true), s(this, "promotionType", true), s(this, "partnerId", true), s(this, "marketingComponents", true), s(this, "rewardSkuIds", true), this.id = e.id, this.trialId = e.trialId, this.startDate = e.startDate, this.endDate = e.endDate, this.outboundRedemptionEndDate = e.outboundRedemptionEndDate, this.inboundHeaderText = e.inboundHeaderText, this.inboundBodyText = e.inboundBodyText, this.inboundHelpCenterLink = e.inboundHelpCenterLink, this.outboundTitle = e.outboundTitle, this.outboundRedemptionModalBody = e.outboundRedemptionModalBody, this.outboundTermsAndConditions = e.outboundTermsAndConditions, this.outboundRedemptionPageLink = e.outboundRedemptionPageLink, this.outboundRedemptionUrlFormat = e.outboundRedemptionUrlFormat, this.flags = null != (t = e.flags) ? t : 0, this.inboundRestrictedCountries = null != (n = e.inboundRestrictedCountries) ? n : [], this.outboundRestrictedCountries = null != (r = e.outboundRestrictedCountries) ? r : [], this.promotionType = e.promotionType, this.partnerId = e.partnerId, this.marketingComponents = e.marketingComponents, this.rewardSkuIds = e.rewardSkuIds
  }
}