/** Chunk was on 1272 **/
/** chunk id: 961892, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk924540 = require("./924540.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk318402 = require("./318402.js");
let h = e => {
  let {
    isSelected: t,
    discountOffer: n
  } = e, [l, h] = (0, c.US)([s.z.CHURN_DISCOUNT_PREMIUM_TAB_BADGE], true, true);
  return (i.useEffect(() => {
    t && l === s.z.CHURN_DISCOUNT_PREMIUM_TAB_BADGE && h(d.L.TAKE_ACTION)
  }, [t, h, l]), l === s.z.CHURN_DISCOUNT_PREMIUM_TAB_BADGE) ? (0, r.jsx)(u._y, {
    badgeCopy: p.intl.format(p.t.AYcXGW, {
      discountOfferAmount: n.discount.amount
    }).toString(),
    isTabSelected: t,
    offerExpiresAt: null
  }) : (0, r.jsxs)("div", {
    className: a()(f.churnDiscountBadge, f.churnDiscountAcknowledgedBadge),
    children: [(0, r.jsx)(o.T39, {
      size: "custom",
      width: 14,
      height: 14,
      color: "currentColor",
      className: f.churnDiscountBadgeIcon
    }), (0, r.jsx)(o.Text, {
      variant: "eyebrow",
      color: "text-secondary",
      children: p.intl.format(p.t.AYcXGW, {
        discountOfferAmount: n.discount.amount
      })
    })]
  })
}