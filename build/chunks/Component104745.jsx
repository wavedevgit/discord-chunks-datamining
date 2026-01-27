/** Chunk was on web.js **/
/** chunk id: 104745, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk877624 = require("./877624.js"),
  Chunk234419 = require("./234419.js"),
  Chunk549996 = require("./549996.js"),
  Chunk219794 = require("./219794.jsx"),
  Chunk585061 = require("./585061.jsx"),
  Chunk937008 = require("./937008.jsx"),
  Chunk788868 = require("./788868.js");

function d(e) {
  let {
    planSkuId: t,
    referralTrialOfferId: n
  } = e, {
    isGift: d
  } = (0, c.Pv)(), f = (0, a.V)(n), p = (0, o.c)(i.C.PAYMENT_MODAL_BANNER);
  return d || t !== u.pe.TIER_2 ? null : null != p && "paymentModalBanner" === p.properties.properties.oneofKind ? (0, r.jsx)(s.f, {
    componentId: p.id,
    promotionBannerMarketingComponentFields: p.properties.properties.paymentModalBanner
  }) : (null == f ? true : f.referrer_id) != null ? (0, r.jsx)(l.A, {}) : null
}