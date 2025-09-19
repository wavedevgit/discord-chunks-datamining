/** Chunk was on web.js **/
/** chunk id: 176757, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk266198 = require("./266198.js"),
  Chunk219333 = require("./219333.js"),
  Chunk304426 = require("./304426.js"),
  Chunk981631 = require("./981631.js");
let u = false,
  d = false;

function f() {
  u = false, d = false
}

function _(e) {
  e.entitlement.sku_id === o.Fw && ((0, s.j)({
    campaignID: l.C
  }), u = true, a.default.track(c.rMx.PREMIUM_MARKETING_CAMPAIGN_ENTITLEMENT_CREATED_INGESTED, {
    type: e.type,
    entitlement_sku_id: e.entitlement.sku_id
  }))
}

function p(e) {
  e.marketingCampaignId === o.Fw && (d = true)
}
class h extends Chunk442837.ZP.Store {
  get isSeptemberMarketingMomentEntitlementCreated() {
    return u
  }
  get isMarketingCampaignApplicationModalViewed() {
    return d
  }
}
let m = new h(Chunk570140.Z, {
  ENTITLEMENT_CREATE: _,
  ENTITLEMENT_UPDATE: _,
  MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED: p,
  LOGOUT: f
})