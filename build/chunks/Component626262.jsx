/** Chunk was on web.js **/
/** chunk id: 626262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => h
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
let _ = e => i.useMemo(() => {
    switch (e) {
      case f.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
        let t = l.A.getAlmostExpiringTrialOffers([p.pe.TIER_2]);
        return {
          cooldownDurationMs: (0, c.e1)(t[0])
        };
      case f.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
        let n = l.A.getAlmostExpiringDiscountOffers([p.pe.TIER_2]);
        return {
          cooldownDurationMs: (0, c.e1)(n[0])
        };
      default:
        return {
          cooldownDurationMs: 1 / 0
        }
    }
  }, [e]),
  h = e => {
    let {
      dismissibleContent: t,
      noticeType: n
    } = e, i = _(n), [l, c] = (0, u.Bo)(t, i, d.m.NOTICE_BAR);
    if (null == l) return null;
    if (l === a.M.NAGBAR_NOTICE_OFFER_EXPIRING) {
      if (n === f.kqX.PREMIUM_TIER_2_TRIAL_ENDING) return (0, r.jsx)(o.A, {
        dismissCurrentNotice: () => c(d.i.USER_DISMISS),
        subscriptionTier: p.pe.TIER_2
      });
      if (n === f.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING) return (0, r.jsx)(s.A, {
        dismissCurrentNotice: () => c(d.i.USER_DISMISS),
        subscriptionTier: p.pe.TIER_2
      })
    }
  }