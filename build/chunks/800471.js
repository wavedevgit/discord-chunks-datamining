/** Chunk was on web.js **/
/** chunk id: 800471, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UB: () => c,
  lp: () => o,
  vT: () => l,
  xT: () => u
});
var Chunk927578 = require("./927578.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk788868 = require("./788868.js");

function o(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: n
  } = (0, a.P5)(), {
    isGift: r
  } = (0, i.Pv)();
  return l({
    isTrial: null != e && e,
    isGift: r,
    selectedSkuId: n,
    startedPaymentFlowWithPaymentSources: t.current
  })
}

function l(e) {
  let {
    isTrial: t,
    isGift: n,
    selectedSkuId: r,
    startedPaymentFlowWithPaymentSources: i,
    inReverseTrial: a
  } = e;
  return !t && !n && !a && null != r && s.oz.includes(r) && i
}

function c(e, t, n) {
  let r = false;
  return e && null != t && null == t.findInvoiceItemByPlanId(n.id) && (r = true), r
}

function u(e, t, n) {
  let i = null != t ? (0, r.EL)(t) : null,
    a = s.zE[e],
    o = null != n ? n : a;
  return null != i ? o === i.planId && o === s.En[e] ? o = s.zE[e] : o === i.planId && o === s.zE[e] ? o = s.En[e] : (i.planId === s.gD.PREMIUM_YEAR_TIER_0 || i.planId === s.gD.PREMIUM_YEAR_TIER_1) && o === s.gD.PREMIUM_MONTH_TIER_2 && (o = s.gD.PREMIUM_YEAR_TIER_2) : o === s.gD.PREMIUM_YEAR_TIER_1 && (o = s.gD.PREMIUM_MONTH_TIER_1), o
}