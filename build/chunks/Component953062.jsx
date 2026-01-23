/** Chunk was on 21738 **/
/** chunk id: 953062, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk105390 = require("./105390.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk318012 = require("./318012.js");
let g = e => {
  let {
    isSelected: t,
    discountOffer: n
  } = e, [l, g] = (0, c.kn)([s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE], true, true);
  return (i.useEffect(() => {
    t && l === s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE && g(d.i.TAKE_ACTION)
  }, [t, g, l]), l === s.M.CHURN_DISCOUNT_PREMIUM_TAB_BADGE) ? (0, r.jsx)(u.MA, {
    badgeCopy: p.intl.format(p.t.AYcXGW, {
      discountOfferAmount: n.discount.amount
    }).toString(),
    isTabSelected: t,
    offerExpiresAt: null
  }) : (0, r.jsxs)("div", {
    className: a()(h.bv, h.Hf),
    children: [(0, r.jsx)(o.O4, {
      size: "custom",
      width: 14,
      height: 14,
      color: "currentColor",
      className: h.aW
    }), (0, r.jsx)(o.Text, {
      variant: "eyebrow",
      color: "text-subtle",
      children: p.intl.format(p.t.AYcXGW, {
        discountOfferAmount: n.discount.amount
      })
    })]
  })
}