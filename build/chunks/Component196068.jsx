/** Chunk was on web.js **/
/** chunk id: 196068, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk163684 = require("./163684.js"),
  Chunk518638 = require("./518638.js"),
  Chunk748770 = require("./748770.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk93128 = require("./93128.js");
let O = e => {
  let {
    dismissibleContent: t
  } = e, n = (0, u.a0)(), O = (0, a.e7)([f.default], () => p.ZP.isPremiumExactly(f.default.getCurrentUser(), E.p9.TIER_2)), {
    enabled: v
  } = c.g.useExperiment({
    location: "OutboundPromotionNotice"
  }, {
    autoTrackExposure: false,
    disable: O
  }), I = i.useCallback(() => {
    _.default.track(g.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), l.Z.open(g.oAB.INVENTORY), d.ZP.dismissOutboundPromotionNotice()
  }, []);
  if (null == n) return null;
  let T = e => (0, r.jsxs)(s.qXd, {
    color: s.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(s.RyX, {
      noticeType: g.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        d.ZP.dismissOutboundPromotionNotice(), null !== e && e(m.L.USER_DISMISS)
      }
    }), (0, r.jsx)(s.SrA, {
      size: "md",
      color: "currentColor",
      className: y.premiumIcon
    }), v ? b.intl.string(b.t["5JMiOj"]) : b.intl.string(b.t["Pzh+Gx"]), (0, r.jsx)(s.NoS, {
      noticeType: g.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        I(), null !== e && e(m.L.TAKE_ACTION)
      },
      children: b.intl.string(b.t.jVcuVV)
    })]
  });
  return (0, r.jsx)(h.O1, {
    contentType: t,
    newSnowflakeId: n,
    timeRecurringConfig: {
      cooldownDurationMs: 0
    },
    groupName: m.R.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      if (t === o.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return T(n)
    }
  })
}