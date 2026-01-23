/** Chunk was on web.js **/
/** chunk id: 984870, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => v
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
let v = e => {
  let {
    dismissibleContent: t
  } = e, n = (0, c.Cp)(), v = (0, a.bG)([p.default], () => h.Ay.isPremiumExactly(p.default.getCurrentUser(), y.PremiumTypes.TIER_2)), {
    enabled: A
  } = l.m.useExperiment({
    location: "OutboundPromotionNotice"
  }, {
    autoTrackExposure: false,
    disable: v
  }), I = i.useCallback(() => {
    _.default.track(E.HAw.OUTBOUND_PROMOTION_NOTICE_CLICKED), (0, f.openUserSettings)(d.X.GIFT_PANEL, {
      section: E.nc_.INVENTORY
    }), u.Ay.dismissOutboundPromotionNotice()
  }, []);
  if (null == n) return null;
  let S = e => (0, r.jsxs)(o.$Td, {
    color: o.Hv$.PREMIUM_TIER_2,
    children: [(0, r.jsx)(o.PMB, {
      noticeType: E.kqX.OUTBOUND_PROMOTION,
      onClick: () => {
        u.Ay.dismissOutboundPromotionNotice(), null !== e && e(g.i.USER_DISMISS)
      }
    }), (0, r.jsx)(o.tvc, {
      size: "md",
      color: "currentColor",
      className: O.P
    }), A ? b.intl.string(b.t["5JMiOo"]) : b.intl.string(b.t["Pzh+G2"]), (0, r.jsx)(o.Z_L, {
      noticeType: E.kqX.OUTBOUND_PROMOTION,
      onClick: () => {
        I(), null !== e && e(g.i.TAKE_ACTION)
      },
      children: b.intl.string(b.t.jVcuVY)
    })]
  });
  return (0, r.jsx)(m.YS, {
    contentType: t,
    newSnowflakeId: n,
    timeRecurringConfig: {
      cooldownDurationMs: 0
    },
    groupName: g.m.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: n
      } = e;
      if (t === s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return S(n)
    }
  })
}