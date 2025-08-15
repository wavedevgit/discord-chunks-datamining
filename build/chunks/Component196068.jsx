/** Chunk was on 31253 **/
/** chunk id: 196068, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => f
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
  Chunk961987 = require("./961987.js");
let f = e => {
  let {
    dismissibleContent: t
  } = e, n = (0, u.a0)(), f = (0, l.e7)([d.default], () => I.ZP.isPremiumExactly(d.default.getCurrentUser(), S.p9.TIER_2)), {
    enabled: A
  } = s.g.useExperiment({
    location: "OutboundPromotionNotice"
  }, {
    autoTrackExposure: false,
    disable: f
  }), C = i.useCallback(() => {
    E.default.track(N.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), c.Z.open(N.oAB.INVENTORY), _.ZP.dismissOutboundPromotionNotice()
  }, []);
  return null == n ? null : (0, r.jsx)(T.O1, {
    contentType: t,
    newSnowflakeId: n,
    timeRecurringConfig: {
      cooldownDurationMs: 0
    },
    groupName: O.R.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      if (t === o.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return (0, r.jsxs)(a.qXd, {
        color: a.DM8.PREMIUM_TIER_2,
        children: [(0, r.jsx)(a.RyX, {
          noticeType: N.kVF.OUTBOUND_PROMOTION,
          onClick: () => {
            _.ZP.dismissOutboundPromotionNotice(), null !== n && n(O.L.USER_DISMISS)
          }
        }), (0, r.jsx)(a.SrA, {
          size: "md",
          color: "currentColor",
          className: R.premiumIcon
        }), A ? p.intl.string(p.t["5JMiOj"]) : p.intl.string(p.t["Pzh+Gx"]), (0, r.jsx)(a.NoS, {
          noticeType: N.kVF.OUTBOUND_PROMOTION,
          onClick: () => {
            C(), null !== n && n(O.L.TAKE_ACTION)
          },
          children: p.intl.string(p.t.jVcuVV)
        })]
      })
    }
  })
}