/** Chunk was on web.js **/
/** chunk id: 196068, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk163684 = require("./163684.js"),
  Chunk518638 = require("./518638.js"),
  Chunk748770 = require("./748770.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk961987 = require("./961987.js");
let v = e => {
  let {
    dismissibleContent: t
  } = e, n = (0, c.a0)(), v = (0, o.e7)([p.default], () => m.ZP.isPremiumExactly(p.default.getCurrentUser(), b.PremiumTypes.TIER_2)), {
    enabled: S
  } = l.g.useExperiment({
    location: "OutboundPromotionNotice"
  }, {
    autoTrackExposure: false,
    disable: v
  }), I = i.useCallback(() => {
    _.default.track(E.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), (0, f.openUserSettings)(d.n.GIFT_PANEL, {
      section: E.oAB.INVENTORY
    }), u.ZP.dismissOutboundPromotionNotice()
  }, []);
  if (null == n) return null;
  let T = e => (0, r.jsxs)(s.qXd, {
    color: s.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(s.RyX, {
      noticeType: E.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        u.ZP.dismissOutboundPromotionNotice(), null !== e && e(g.L.USER_DISMISS)
      }
    }), (0, r.jsx)(s.SrA, {
      size: "md",
      color: "currentColor",
      className: O.premiumIcon
    }), S ? y.intl.string(y.t["5JMiOo"]) : y.intl.string(y.t["Pzh+G2"]), (0, r.jsx)(s.NoS, {
      noticeType: E.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        I(), null !== e && e(g.L.TAKE_ACTION)
      },
      children: y.intl.string(y.t.jVcuVY)
    })]
  });
  return (0, r.jsx)(h.O1, {
    contentType: t,
    newSnowflakeId: n,
    timeRecurringConfig: {
      cooldownDurationMs: 0
    },
    groupName: g.R.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return T(n)
    }
  })
}