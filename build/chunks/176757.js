/** Chunk was on web.js **/
/** chunk id: 176757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk266198 = require("./266198.js"),
  Chunk219333 = require("./219333.js"),
  Chunk304426 = require("./304426.js");
let l = false,
  c = false;

function u() {
  l = false, c = false
}

function d(e) {
  e.entitlement.sku_id === a.Fw && ((0, o.j)({
    campaignID: s.C
  }), l = true)
}

function f(e) {
  e.marketingCampaignId === a.Fw && (c = true)
}
class _ extends Chunk442837.ZP.Store {
  get isSeptemberMarketingMomentEntitlementCreated() {
    return l
  }
  get isMarketingCampaignApplicationModalViewed() {
    return c
  }
}
let p = new _(Chunk570140.Z, {
  ENTITLEMENT_CREATE: d,
  ENTITLEMENT_UPDATE: d,
  MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED: f,
  LOGOUT: u
})