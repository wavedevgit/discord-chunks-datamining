/** Chunk was on web.js **/
/** chunk id: 800471, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UB: () => c,
  lp: () => s,
  vT: () => l,
  xT: () => u
});
var Chunk927578 = require("./927578.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk788868 = require("./788868.js");

function s(e) {
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
  return !t && !n && !a && null != r && o.oz.includes(r) && i
}

function c(e, t, n) {
  let r = false;
  return e && null != t && null == t.findInvoiceItemByPlanId(n.id) && (r = true), r
}

function u(e, t, n) {
  let i = null != t ? (0, r.EL)(t) : null,
    a = o.zE[e],
    s = null != n ? n : a;
  return null != i ? s === i.planId && s === o.En[e] ? s = o.zE[e] : s === i.planId && s === o.zE[e] ? s = o.En[e] : (i.planId === o.gD.PREMIUM_YEAR_TIER_0 || i.planId === o.gD.PREMIUM_YEAR_TIER_1) && s === o.gD.PREMIUM_MONTH_TIER_2 && (s = o.gD.PREMIUM_YEAR_TIER_2) : s === o.gD.PREMIUM_YEAR_TIER_1 && (s = o.gD.PREMIUM_MONTH_TIER_1), s
}