/** Chunk was on 61222 **/
/** chunk id: 626262, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk554146 = require("./554146.js"),
  Chunk916768 = require("./916768.jsx"),
  Chunk617108 = require("./617108.jsx"),
  Chunk745299 = require("./745299.jsx"),
  Chunk816733 = require("./816733.js"),
  Chunk927578 = require("./927578.js"),
  Chunk160761 = require("./160761.js"),
  Chunk49999 = require("./49999.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");
let O = e => {
  let {
    dismissibleContent: t,
    noticeType: n
  } = e, l = i.useMemo(() => {
    switch (n) {
      case T.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
        let e = E.A.getAlmostExpiringTrialOffers([I.pe.TIER_2]);
        return {
          cooldownDurationMs: (0, d.e1)(e[0])
        };
      case T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
        let t = E.A.getAlmostExpiringDiscountOffers([I.pe.TIER_2]);
        return {
          cooldownDurationMs: (0, d.e1)(t[0])
        };
      default:
        return {
          cooldownDurationMs: 1 / 0
        }
    }
  }, [n]), O = o()().add(5, "days").toDate(), [N, p] = (0, _.Bo)(t, l, A.m.NOTICE_BAR);
  if (null == N) return null;
  if (N === a.M.NAGBAR_NOTICE_OFFER_EXPIRING) {
    if (n === T.kqX.PREMIUM_TIER_2_TRIAL_ENDING) return (0, r.jsx)(u.A, {
      dismissCurrentNotice: () => {
        p(A.i.USER_DISMISS), (0, s.w)(O)
      },
      subscriptionTier: I.pe.TIER_2
    });
    if (n === T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING) return (0, r.jsx)(c.A, {
      dismissCurrentNotice: () => {
        p(A.i.USER_DISMISS), (0, s.w)(O)
      },
      subscriptionTier: I.pe.TIER_2
    })
  }
}