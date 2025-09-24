/** Chunk was on web.js **/
/** chunk id: 538981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => y,
  r: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk583434 = require("./583434.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk960048 = require("./960048.js"),
  Chunk176757 = require("./176757.js"),
  Chunk266198 = require("./266198.js"),
  Chunk219333 = require("./219333.js"),
  Chunk304426 = require("./304426.js"),
  Chunk981631 = require("./981631.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}
let b = 3,
  y = async e => {
    let {
      campaignId: t
    } = e;
    try {
      s.Z.dispatch({
        type: "MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_STARTED"
      });
      let e = await a.tn.get({
        url: m.ANM.MARKETING_CAMPAIGN_ELIGIBILITY(t),
        rejectWithError: false,
        retries: b
      });
      return s.Z.dispatch({
        type: "MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_SUCCESS",
        isEligible: e.body.eligibility
      }), e.body.eligibility
    } catch (e) {
      s.Z.dispatch({
        type: "MARKETING_CAMPAIGN_ELIGIBILITY_FETCH_FAILED"
      });
      try {
        d.Z.captureException(e)
      } catch (e) {
        d.Z.captureMessage("Sentry Utils Capture Exception Failed along Marketing Campaign Eligibility Fetch Path")
      }
    }
  };

function O() {
  let {
    isSeptemberMarketingMomentEntitlementCreated: e,
    isMarketingCampaignApplicationModalViewed: t
  } = (0, Chunk442837.cj)([Chunk176757.Z], () => ({
    isSeptemberMarketingMomentEntitlementCreated: Chunk176757.Z.isSeptemberMarketingMomentEntitlementCreated,
    isMarketingCampaignApplicationModalViewed: Chunk176757.Z.isMarketingCampaignApplicationModalViewed
  })), {
    product: a
  } = (0, Chunk583434.T)(Chunk266198.Fw, true), d = (0, Chunk74538.EK)();
  return function(i) {
    let {
      forceOpen: l
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, u = (0, p.W)({
      campaignID: h.m.NITRO_DROP
    }), f = (null == i ? true : i.sku_id) === _.Fw || e;
    d && c.default.track(m.rMx.PREMIUM_MARKETING_CAMPAIGN_CLAIM_MODAL_OPEN_ATTEMPTED, {
      has_entitlement: f,
      is_dc_dismissed: u,
      product_loaded_successfully: null != a
    }), (f && !t || l) && null != a && (s.Z.dispatch({
      type: "MARKETING_CAMPAIGN_APPLICATION_MODAL_VIEWED",
      marketingCampaignId: _.Fw
    }), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("75157").then(n.bind(n, 710658));
      return t => (0, r.jsx)(e, E({
        product: a
      }, t))
    }))
  }
}