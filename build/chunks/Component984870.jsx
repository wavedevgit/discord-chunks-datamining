/** Chunk was on 73734 **/
/** chunk id: 984870, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => P
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk728364 = require("./728364.js"),
  Chunk264779 = require("./264779.js"),
  Chunk597758 = require("./597758.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk210320 = require("./210320.js");
let P = e => {
  let {
    dismissibleContent: t
  } = e, n = (0, c.Cp)(), P = (0, l.bG)([_.default], () => T.Ay.isPremiumExactly(_.default.getCurrentUser(), p.PremiumTypes.TIER_2)), {
    enabled: y
  } = s.m.useExperiment({
    location: "OutboundPromotionNotice"
  }, {
    autoTrackExposure: false,
    disable: P
  }), m = i.useCallback(() => {
    A.default.track(N.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED), (0, d.openUserSettings)(E.X.GIFT_PANEL, {
      section: N.nc_.INVENTORY
    }), u.Ay.dismissOutboundPromotionNotice()
  }, []);
  return null == n ? null : (0, r.jsx)(I.YS, {
    contentType: t,
    newSnowflakeId: n,
    timeRecurringConfig: {
      cooldownDurationMs: 0
    },
    groupName: O.m.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      if (t === a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return (0, r.jsxs)(o.$Td, {
        color: o.Hv$.PREMIUM_TIER_2,
        children: [(0, r.jsx)(o.PMB, {
          noticeType: N.kqX.OUTBOUND_PROMOTION,
          onClick: () => {
            u.Ay.dismissOutboundPromotionNotice(), null !== n && n(O.i.USER_DISMISS)
          }
        }), (0, r.jsx)(o.tvc, {
          size: "md",
          color: "currentColor",
          className: S.P
        }), y ? R.intl.string(R.t["5JMiOo"]) : R.intl.string(R.t["Pzh+G2"]), (0, r.jsx)(o.Z_L, {
          noticeType: N.kqX.OUTBOUND_PROMOTION,
          onClick: () => {
            m(), null !== n && n(O.i.TAKE_ACTION)
          },
          children: R.intl.string(R.t.jVcuVY)
        })]
      })
    }
  })
}