/** Chunk was on web.js **/
/** chunk id: 131130, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => p
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk644916 = require("./644916.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk655227 = require("./655227.js");
let p = e => {
  let {
    dismissibleContent: t,
    noticeType: n
  } = e, {
    analyticsLocations: p
  } = (0, o.ZP)(), _ = (0, l.Z)();
  return (0, r.jsx)(u.Xf, {
    contentType: t,
    latestVersion: (0, c.t)(t),
    groupName: d.R.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: o
      } = e;
      if (t === i.z.GIFTING_PROMOTION_REMINDER) {
        let e = null == _ ? true : _.reminderNagbar;
        return (0, r.jsxs)(a.qXd, {
          color: a.DM8.PREMIUM_TIER_2,
          children: [(0, r.jsx)(a.RyX, {
            onClick: () => o(d.L.USER_DISMISS),
            noticeType: n
          }), (0, r.jsx)(a.OgN, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: f.giftIcon
          }), null == e ? true : e.description(), (0, r.jsx)(a.NoS, {
            onClick: () => {
              (0, s.Z)({
                isGift: true,
                initialPlanId: null,
                analyticsLocations: p,
                analyticsLocation: null == e ? true : e.analyticsLocation,
                analyticsObject: {
                  page: null == e ? true : e.analyticsPage
                }
              })
            },
            noticeType: n,
            children: null == e ? true : e.cta()
          })]
        })
      }
    }
  })
}