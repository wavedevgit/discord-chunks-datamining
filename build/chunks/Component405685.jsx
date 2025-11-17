/** Chunk was on web.js **/
/** chunk id: 405685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk79766 = require("./79766.js"),
  Chunk639119 = require("./639119.js"),
  Chunk715130 = require("./715130.js"),
  Chunk427261 = require("./427261.jsx"),
  Chunk381507 = require("./381507.jsx"),
  Chunk987209 = require("./987209.jsx"),
  Chunk474936 = require("./474936.js");

function d(e) {
  let {
    planSkuId: t,
    referralTrialOfferId: n
  } = e, {
    isGift: d
  } = (0, c.wD)(), f = (0, a.N)(n), _ = (0, o.H)(i.I.PAYMENT_MODAL_BANNER);
  return d || t !== u.Si.TIER_2 ? null : null != _ && "paymentModalBanner" === _.properties.properties.oneofKind ? (0, r.jsx)(s.h, {
    componentId: _.id,
    promotionBannerMarketingComponentFields: _.properties.properties.paymentModalBanner
  }) : (null == f ? true : f.referrer_id) != null ? (0, r.jsx)(l.Z, {}) : null
}