/** Chunk was on 31253 **/
/** chunk id: 132144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk535278 = require("./535278.jsx"),
  Chunk246965 = require("./246965.jsx"),
  Chunk431 = require("./431.js"),
  Chunk74538 = require("./74538.js"),
  Chunk706140 = require("./706140.js"),
  Chunk921944 = require("./921944.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");
let I = e => {
  let {
    dismissibleContent: t,
    noticeType: n
  } = e, I = i.useMemo(() => {
    switch (n) {
      case d.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
        let e = c.Z.getAlmostExpiringTrialOffers([E.Si.TIER_2]);
        return {
          cooldownDurationMs: (0, s.yg)(e[0])
        };
      case d.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
        let t = c.Z.getAlmostExpiringDiscountOffers([E.Si.TIER_2]);
        return {
          cooldownDurationMs: (0, s.yg)(t[0])
        };
      default:
        return {
          cooldownDurationMs: 1 / 0
        }
    }
  }, [n]), [T, O] = (0, u.Tt)(t, I, _.R.NOTICE_BAR);
  if (null == T) return null;
  if (T === l.z.NAGBAR_NOTICE_OFFER_EXPIRING) {
    if (n === d.kVF.PREMIUM_TIER_2_TRIAL_ENDING) return (0, r.jsx)(a.Z, {
      dismissCurrentNotice: () => O(_.L.USER_DISMISS),
      subscriptionTier: E.Si.TIER_2
    });
    if (n === d.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING) return (0, r.jsx)(o.Z, {
      dismissCurrentNotice: () => O(_.L.USER_DISMISS),
      subscriptionTier: E.Si.TIER_2
    })
  }
}