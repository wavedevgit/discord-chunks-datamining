/** Chunk was on 84743 **/
/** chunk id: 701464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk973007 = require("./973007.jsx"),
  Chunk170731 = require("./170731.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk391763 = require("./391763.js");
let s = function(e) {
  let {
    onSelectSku: t,
    isGift: n,
    priceOptions: s,
    showPromotionalGiftBanner: d,
    giftRecipient: C,
    onWishlistItemClick: c
  } = e;
  return (0, r.jsxs)("div", {
    className: o.giftOptionContainer,
    children: [(0, r.jsxs)("div", {
      className: o.cardsRow,
      children: [(0, r.jsx)(i.jB, {
        onClick: () => t(l.Si.TIER_2),
        isGift: n,
        priceOptions: s,
        showPromotionalGiftBanner: d,
        enablePremiumBrandRefresh: true
      }), (0, r.jsx)(i.j8, {
        onClick: () => t(l.Si.TIER_0),
        isGift: n,
        priceOptions: s,
        enablePremiumBrandRefresh: true,
        removeTopMargin: true
      })]
    }), (0, r.jsx)(a.Z, {
      giftRecipient: C,
      onWishlistItemClick: c
    })]
  })
}