/** Chunk was on web.js **/
/** chunk id: 813803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk877624 = require("./877624.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk412260 = require("./412260.js"),
  Chunk357186 = require("./357186.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk237082 = require("./237082.js");
let g = e => {
  let {
    dismissibleContent: t,
    noticeType: n
  } = e, {
    analyticsLocations: g
  } = (0, l.Ay)(), E = (0, a.bG)([u.A], () => {
    let e = u.A.getMarketingComponentByType(i.C.GIFT_REMINDER_NAGBAR);
    return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
  });
  return (0, r.jsx)(f.GY, {
    contentType: t,
    latestVersion: (0, d.c)(t),
    groupName: p.m.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      if (t === s.M.GIFTING_PROMOTION_REMINDER) return null == E ? null : (0, r.jsxs)(o.$Td, {
        color: o.Hv$.PREMIUM_TIER_2,
        children: [(0, r.jsx)(o.PMB, {
          onClick: () => i(p.i.USER_DISMISS),
          noticeType: n
        }), (0, r.jsx)(o.okO, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: m.ez
        }), E.body, (0, r.jsx)(o.Z_L, {
          onClick: () => {
            (0, c.A)({
              isGift: true,
              initialPlanId: null,
              analyticsLocations: g,
              analyticsLocation: _.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
              analyticsObject: {
                page: _.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
              }
            })
          },
          noticeType: n,
          children: h.intl.string(h.t.RzWDqY)
        })]
      })
    }
  })
}