/** Chunk was on web.js **/
/** chunk id: 176757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk266198 = require("./266198.js");
let o = false,
  s = false;

function l() {
  o = false, s = false
}

function c(e) {
  e.entitlement.sku_id === a.Fw && (o = true)
}

function u(e) {
  e.marketingCampaignId === a.Fw && (s = true)
}
class d extends Chunk442837.ZP.Store {
  get isSeptemberMarketingMomentEntitlementCreated() {
    return o
  }
  get isMarketingCampaignApplicationModalViewed() {
    return s
  }
}
let f = new d(Chunk570140.Z, {
  ENTITLEMENT_CREATE: c,
  ENTITLEMENT_UPDATE: c,
  MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED: u,
  LOGOUT: l
})