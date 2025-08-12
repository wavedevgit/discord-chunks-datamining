/** Chunk was on web.js **/
/** chunk id: 614223, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $g: () => c,
  Fv: () => s,
  Kp: () => l,
  nA: () => u
});
var Chunk74538 = require("./74538.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk474936 = require("./474936.js");

function s(e) {
  let {
    startedPaymentFlowWithPaymentSourcesRef: t,
    selectedSkuId: n
  } = (0, o.JL)(), {
    isGift: r
  } = (0, i.wD)();
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
    inReverseTrial: o
  } = e;
  return !t && !n && !o && null != r && a.YQ.includes(r) && i
}

function c(e, t, n) {
  let r = false;
  return e && null != t && null == t.findInvoiceItemByPlanId(n.id) && (r = true), r
}

function u(e, t, n) {
  let i = null != t ? (0, r.Af)(t) : null,
    o = a.mn[e],
    s = null != n ? n : o;
  return null != i ? s === i.planId && s === a.IW[e] ? s = a.mn[e] : s === i.planId && s === a.mn[e] ? s = a.IW[e] : (i.planId === a.Xh.PREMIUM_YEAR_TIER_0 || i.planId === a.Xh.PREMIUM_YEAR_TIER_1) && s === a.Xh.PREMIUM_MONTH_TIER_2 && (s = a.Xh.PREMIUM_YEAR_TIER_2) : s === a.Xh.PREMIUM_YEAR_TIER_1 && (s = a.Xh.PREMIUM_MONTH_TIER_1), s
}