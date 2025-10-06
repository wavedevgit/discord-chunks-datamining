/** Chunk was on 37786 **/
/** chunk id: 701464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk973007 = require("./973007.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk414548 = require("./414548.js");

function l() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk414548.wishlistBanner
  })
}
let s = function(e) {
  let {
    onSelectSku: t,
    isGift: n,
    priceOptions: s,
    showPromotionalGiftBanner: d
  } = e;
  return (0, r.jsxs)("div", {
    className: o.giftOptionContainer,
    children: [(0, r.jsxs)("div", {
      className: o.cardsRow,
      children: [(0, r.jsx)(i.jB, {
        onClick: () => t(a.Si.TIER_2),
        isGift: n,
        priceOptions: s,
        showPromotionalGiftBanner: d,
        enablePremiumBrandRefresh: true
      }), (0, r.jsx)(i.j8, {
        onClick: () => t(a.Si.TIER_0),
        isGift: n,
        priceOptions: s,
        enablePremiumBrandRefresh: true
      })]
    }), (0, r.jsx)(l, {})]
  })
}