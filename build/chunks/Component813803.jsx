/** Chunk was on 44384 **/
/** chunk id: 813803, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => O
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
let O = e => {
  let {
    dismissibleContent: t,
    noticeType: n
  } = e, {
    analyticsLocations: O
  } = (0, s.Ay)(), N = (0, l.bG)([u.A], () => {
    let e = u.A.getMarketingComponentByType(i.C.GIFT_REMINDER_NAGBAR);
    return null == e || "giftReminderNagbar" !== e.properties.properties.oneofKind ? null : e.properties.properties.giftReminderNagbar
  });
  return (0, r.jsx)(d.GY, {
    contentType: t,
    latestVersion: (0, E.c)(t),
    groupName: _.m.NOTICE_BAR,
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      if (t === o.M.GIFTING_PROMOTION_REMINDER) return null == N ? null : (0, r.jsxs)(a.$Td, {
        color: a.Hv$.PREMIUM_TIER_2,
        children: [(0, r.jsx)(a.PMB, {
          onClick: () => i(_.i.USER_DISMISS),
          noticeType: n
        }), (0, r.jsx)(a.okO, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: I.ez
        }), N.body, (0, r.jsx)(a.Z_L, {
          onClick: () => {
            (0, c.A)({
              isGift: true,
              initialPlanId: null,
              analyticsLocations: O,
              analyticsLocation: A.ThZ.SEASONAL_GIFTING_REMINDER_NAGBAR,
              analyticsObject: {
                page: A.liQ.PREMUIM_UPSELL_GIFTING_PROMOTION
              }
            })
          },
          noticeType: n,
          children: T.intl.string(T.t.RzWDqY)
        })]
      })
    }
  })
}