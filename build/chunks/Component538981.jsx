/** Chunk was on web.js **/
/** chunk id: 538981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => m,
  r: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk583434 = require("./583434.js"),
  Chunk960048 = require("./960048.js"),
  Chunk176757 = require("./176757.js"),
  Chunk266198 = require("./266198.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = 3,
  m = async e => {
    let {
      campaignId: t
    } = e;
    try {
      let e = await a.tn.get({
        url: f.ANM.MARKETING_CAMPAIGN_ELIGIBILITY(t),
        rejectWithError: false,
        retries: h
      });
      return s.Z.dispatch({
        type: "MARKETING_CAMPAIGN_ELIGIBILITY_FETCHED",
        isEligible: e.body.eligibility
      }), e.body.eligibility
    } catch (e) {
      s.Z.dispatch({
        type: "MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_FAILED"
      }), c.Z.captureException(e)
    }
  };

function g() {
  let {
    isSeptemberMarketingMomentEntitlementCreated: e,
    isMarketingCampaignApplicationModalViewed: t
  } = (0, Chunk442837.cj)([Chunk176757.Z], () => ({
    isSeptemberMarketingMomentEntitlementCreated: Chunk176757.Z.isSeptemberMarketingMomentEntitlementCreated,
    isMarketingCampaignApplicationModalViewed: Chunk176757.Z.isMarketingCampaignApplicationModalViewed
  })), {
    product: a
  } = (0, Chunk583434.T)(Chunk266198.Fw, true);
  return i => {
    let l = (null == i ? true : i.sku_id) === d.Fw;
    (e || l) && !t && null != a && (s.Z.dispatch({
      type: "MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED",
      marketingCampaignId: d.Fw
    }), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("75157").then(n.bind(n, 710658));
      return t => (0, r.jsx)(e, p({
        product: a
      }, t))
    }))
  }
}