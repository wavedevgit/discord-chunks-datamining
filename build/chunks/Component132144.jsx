/** Chunk was on web.js **/
/** chunk id: 132144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk535278 = require("./535278.jsx"),
  Chunk246965 = require("./246965.jsx"),
  Chunk431 = require("./431.js"),
  Chunk74538 = require("./74538.js"),
  Chunk706140 = require("./706140.js"),
  Chunk921944 = require("./921944.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");
let _ = e => i.useMemo(() => {
    switch (e) {
      case f.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
        let t = l.Z.getAlmostExpiringTrialOffers([p.Si.TIER_2]);
        return {
          cooldownDurationMs: (0, c.yg)(t[0])
        };
      case f.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
        let n = l.Z.getAlmostExpiringDiscountOffers([p.Si.TIER_2]);
        return {
          cooldownDurationMs: (0, c.yg)(n[0])
        };
      default:
        return {
          cooldownDurationMs: 1 / 0
        }
    }
  }, [e]),
  m = e => {
    let {
      dismissibleContent: t,
      noticeType: n
    } = e, i = _(n), [l, c] = (0, u.Tt)(t, i, d.R.NOTICE_BAR);
    if (null == l) return null;
    if (l === o.z.NAGBAR_NOTICE_OFFER_EXPIRING) {
      if (n === f.kVF.PREMIUM_TIER_2_TRIAL_ENDING) return (0, r.jsx)(s.Z, {
        dismissCurrentNotice: () => c(d.L.USER_DISMISS),
        subscriptionTier: p.Si.TIER_2
      });
      if (n === f.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING) return (0, r.jsx)(a.Z, {
        dismissCurrentNotice: () => c(d.L.USER_DISMISS),
        subscriptionTier: p.Si.TIER_2
      })
    }
  }