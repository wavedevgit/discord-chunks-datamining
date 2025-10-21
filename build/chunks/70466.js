/** Chunk was on web.js **/
/** chunk id: 70466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => u
});
var Chunk74538 = require("./74538.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let l = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: n,
      trialDurationCopy: i,
      isPersistentCTA: a,
      shouldShowReferralTrialCopy: l,
      subscriptionTrial: c
    } = e;
    return t && l ? s.intl.string(s.t.bXTClc) : t && (n === o.Si.TIER_2 || a) ? (0, r.Rt)({
      intervalType: null == c ? true : c.interval,
      intervalCount: null == c ? true : c.interval_count
    }) : t ? s.intl.formatToPlainString(s.t.nTmm2v, {
      freeTrialText: i
    }) : true
  },
  c = (e, t, n, r) => t || n ? s.intl.string(s.t.fkPGat) : e === o.Si.TIER_2 ? s.intl.formatToPlainString(s.t.bkQ4bH, {
    percent: r
  }) : true,
  u = e => {
    var t, n;
    let {
      subscriptionTier: u,
      hasActivePromotion: d = false,
      useShorterCTA: f = false,
      isPersistentCTA: _ = false
    } = e, p = (0, a.N)(), h = null == p ? true : p.subscription_trial, m = (0, i.Ng)(), g = (0, i.Wp)(m, o.Si.TIER_2) ? o.Si.TIER_2 : true, E = (0, r.a5)({
      intervalType: null == h ? true : h.interval,
      intervalCount: null == h ? true : h.interval_count
    }), b = null != (n = null != u ? u : null == p || null == (t = p.subscription_trial) ? true : t.sku_id) ? n : g, y = null != h && b === h.sku_id, O = (null == p ? true : p.trial_id) === o.a7;
    return {
      buttonText: d ? s.intl.string(s.t.J61px0) : null != m ? c(b, f, _, m.discount.amount) : l({
        showTrialCTA: y,
        subscriptionTier: b,
        trialDurationCopy: E,
        isPersistentCTA: _,
        shouldShowReferralTrialCopy: O,
        subscriptionTrial: h
      }),
      marketingSubscriptionTierSkuId: b
    }
  }