/** Chunk was on web.js **/
/** chunk id: 813803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => p
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk552736 = require("./552736.js"),
  Chunk357186 = require("./357186.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk237082 = require("./237082.js");
let p = e => {
  let {
    dismissibleContent: t,
    noticeType: n
  } = e, {
    analyticsLocations: p
  } = (0, s.Ay)(), _ = (0, l.A)();
  return (0, r.jsx)(u.GY, {
    contentType: t,
    latestVersion: (0, c.c)(t),
    groupName: d.m.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: s
      } = e;
      if (t === i.M.GIFTING_PROMOTION_REMINDER) {
        let e = null == _ ? true : _.reminderNagbar;
        return (0, r.jsxs)(a.$Td, {
          color: a.Hv$.PREMIUM_TIER_2,
          children: [(0, r.jsx)(a.PMB, {
            onClick: () => s(d.i.USER_DISMISS),
            noticeType: n
          }), (0, r.jsx)(a.okO, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: f.ez
          }), null == e ? true : e.description(), (0, r.jsx)(a.Z_L, {
            onClick: () => {
              (0, o.A)({
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