/** Chunk was on 93140 **/
/** chunk id: 626262, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk554146 = require("./554146.js"),
  Chunk617108 = require("./617108.jsx"),
  Chunk745299 = require("./745299.jsx"),
  Chunk816733 = require("./816733.js"),
  Chunk927578 = require("./927578.js"),
  Chunk160761 = require("./160761.js"),
  Chunk49999 = require("./49999.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");
let A = e => {
  let {
    dismissibleContent: t,
    noticeType: n
  } = e, A = i.useMemo(() => {
    switch (n) {
      case d.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
        let e = s.A.getAlmostExpiringTrialOffers([_.pe.TIER_2]);
        return {
          cooldownDurationMs: (0, c.e1)(e[0])
        };
      case d.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
        let t = s.A.getAlmostExpiringDiscountOffers([_.pe.TIER_2]);
        return {
          cooldownDurationMs: (0, c.e1)(t[0])
        };
      default:
        return {
          cooldownDurationMs: 1 / 0
        }
    }
  }, [n]), [T, I] = (0, u.Bo)(t, A, E.m.NOTICE_BAR);
  if (null == T) return null;
  if (T === l.M.NAGBAR_NOTICE_OFFER_EXPIRING) {
    if (n === d.kqX.PREMIUM_TIER_2_TRIAL_ENDING) return (0, r.jsx)(a.A, {
      dismissCurrentNotice: () => I(E.i.USER_DISMISS),
      subscriptionTier: _.pe.TIER_2
    });
    if (n === d.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING) return (0, r.jsx)(o.A, {
      dismissCurrentNotice: () => I(E.i.USER_DISMISS),
      subscriptionTier: _.pe.TIER_2
    })
  }
}