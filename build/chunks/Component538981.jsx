/** Chunk was on web.js **/
/** chunk id: 538981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js");
require("./544891.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk583434 = require("./583434.js");
require("./960048.js");
var Chunk176757 = require("./176757.js"),
  Chunk266198 = require("./266198.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f() {
  let {
    isSeptemberMarketingMomentEntitlementCreated: e,
    isMarketingCampaignApplicationModalViewed: t
  } = (0, Chunk442837.cj)([Chunk176757.Z], () => ({
    isSeptemberMarketingMomentEntitlementCreated: Chunk176757.Z.isSeptemberMarketingMomentEntitlementCreated,
    isMarketingCampaignApplicationModalViewed: Chunk176757.Z.isMarketingCampaignApplicationModalViewed
  })), {
    product: u
  } = (0, Chunk583434.T)(Chunk266198.Fw, true);
  return i => {
    let s = (null == i ? true : i.sku_id) === c.Fw;
    (e || s) && !t && null != u && (o.Z.dispatch({
      type: "MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED",
      marketingCampaignId: c.Fw
    }), (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("75157").then(n.bind(n, 710658));
      return t => (0, r.jsx)(e, d({
        product: u
      }, t))
    }))
  }
}
require("./981631.js")