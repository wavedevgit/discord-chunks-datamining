/** Chunk was on web.js **/
/** chunk id: 145310, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => d
});
var Chunk927578 = require("./927578.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk511484 = require("./511484.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let c = e => {
    let {
      showTrialCTA: t,
      subscriptionTier: n,
      trialDurationCopy: i,
      isPersistentCTA: a,
      shouldShowReferralTrialCopy: o,
      subscriptionTrial: c
    } = e;
    return t && o ? l.intl.string(l.t.bXTClc) : t && (n === s.pe.TIER_2 || a) ? (0, r.FY)({
      intervalType: null == c ? true : c.interval,
      intervalCount: null == c ? true : c.interval_count
    }) : t ? l.intl.formatToPlainString(l.t.nTmm2v, {
      freeTrialText: i
    }) : true
  },
  u = (e, t, n, r) => t || n ? l.intl.string(l.t.fkPGat) : e === s.pe.TIER_2 ? l.intl.formatToPlainString(l.t.bkQ4bH, {
    percent: r
  }) : true,
  d = e => {
    var t, n;
    let {
      subscriptionTier: d,
      hasActivePromotion: f = false,
      useShorterCTA: p = false,
      isPersistentCTA: _ = false
    } = e, h = (0, a.V)(), m = null == h ? true : h.subscription_trial, g = (0, i.O)(), E = (0, o.U9)(g, s.pe.TIER_2) ? s.pe.TIER_2 : true, y = (0, r.tS)({
      intervalType: null == m ? true : m.interval,
      intervalCount: null == m ? true : m.interval_count
    }), b = null != (t = null != d ? d : null == h || null == (n = h.subscription_trial) ? true : n.sku_id) ? t : E, O = null != m && b === m.sku_id, v = (null == h ? true : h.trial_id) === s.Dw;
    return {
      buttonText: f ? l.intl.string(l.t.J61px0) : null != g ? u(b, p, _, g.discount.amount) : c({
        showTrialCTA: O,
        subscriptionTier: b,
        trialDurationCopy: y,
        isPersistentCTA: _,
        shouldShowReferralTrialCopy: v,
        subscriptionTrial: m
      }),
      marketingSubscriptionTierSkuId: b
    }
  }