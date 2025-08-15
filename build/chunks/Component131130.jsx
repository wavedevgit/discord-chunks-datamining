/** Chunk was on 31253 **/
/** chunk id: 131130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => E
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk644916 = require("./644916.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk50953 = require("./50953.js");
let E = e => {
  let {
    dismissibleContent: t,
    noticeType: n
  } = e, {
    analyticsLocations: E
  } = (0, o.ZP)(), I = (0, c.Z)();
  return (0, r.jsx)(u.Xf, {
    contentType: t,
    latestVersion: (0, s.t)(t),
    groupName: _.R.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: o
      } = e;
      if (t === i.z.GIFTING_PROMOTION_REMINDER) {
        let e = null == I ? true : I.reminderNagbar;
        return (0, r.jsxs)(l.qXd, {
          color: l.DM8.PREMIUM_TIER_2,
          children: [(0, r.jsx)(l.RyX, {
            onClick: () => o(_.L.USER_DISMISS),
            noticeType: n
          }), (0, r.jsx)(l.OgN, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: d.giftIcon
          }), null == e ? true : e.description(), (0, r.jsx)(l.NoS, {
            onClick: () => {
              (0, a.Z)({
                isGift: true,
                initialPlanId: null,
                analyticsLocations: E,
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