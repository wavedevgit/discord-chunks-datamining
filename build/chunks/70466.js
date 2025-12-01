/** Chunk was on web.js **/
/** chunk id: 70466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => d
});
var Chunk74538 = require("./74538.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk230916 = require("./230916.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let c = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: n,
      trialDurationCopy: i,
      isPersistentCTA: a,
      shouldShowReferralTrialCopy: o,
      subscriptionTrial: c
    } = e;
    return t && o ? l.intl.string(l.t.bXTClc) : t && (n === s.Si.TIER_2 || a) ? (0, r.Rt)({
      intervalType: null == c ? true : c.interval,
      intervalCount: null == c ? true : c.interval_count
    }) : t ? l.intl.formatToPlainString(l.t.nTmm2v, {
      freeTrialText: i
    }) : true
  },
  u = (e, t, n, r) => t || n ? l.intl.string(l.t.fkPGat) : e === s.Si.TIER_2 ? l.intl.formatToPlainString(l.t.bkQ4bH, {
    percent: r
  }) : true,
  d = e => {
    var t, n;
    let {
      subscriptionTier: d,
      hasActivePromotion: f = false,
      useShorterCTA: p = false,
      isPersistentCTA: _ = false
    } = e, m = (0, a.N)(), h = null == m ? true : m.subscription_trial, g = (0, i.N)(), E = (0, o.Wp)(g, s.Si.TIER_2) ? s.Si.TIER_2 : true, b = (0, r.a5)({
      intervalType: null == h ? true : h.interval,
      intervalCount: null == h ? true : h.interval_count
    }), y = null != (n = null != d ? d : null == m || null == (t = m.subscription_trial) ? true : t.sku_id) ? n : E, O = null != h && y === h.sku_id, v = (null == m ? true : m.trial_id) === s.a7;
    return {
      buttonText: f ? l.intl.string(l.t.J61px0) : null != g ? u(y, p, _, g.discount.amount) : c({
        showTrialCTA: O,
        subscriptionTier: y,
        trialDurationCopy: b,
        isPersistentCTA: _,
        shouldShowReferralTrialCopy: v,
        subscriptionTrial: h
      }),
      marketingSubscriptionTierSkuId: y
    }
  }