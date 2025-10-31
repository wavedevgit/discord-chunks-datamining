/** Chunk was on 3270 **/
/** chunk id: 701464, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk973007 = require("./973007.jsx"),
  Chunk170731 = require("./170731.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk391763 = require("./391763.js");
let o = function(e) {
  let {
    onSelectSku: t,
    isGift: n,
    priceOptions: o,
    showPromotionalGiftBanner: d,
    giftRecipient: C,
    onWishlistItemClick: c
  } = e;
  return (0, r.jsxs)("div", {
    className: s.giftOptionContainer,
    children: [(0, r.jsxs)("div", {
      className: s.cardsRow,
      children: [(0, r.jsx)(i.jB, {
        onClick: () => t(a.Si.TIER_2),
        isGift: n,
        priceOptions: o,
        showPromotionalGiftBanner: d,
        enablePremiumBrandRefresh: true
      }), (0, r.jsx)(i.j8, {
        onClick: () => t(a.Si.TIER_0),
        isGift: n,
        priceOptions: o,
        enablePremiumBrandRefresh: true,
        removeTopMargin: true
      })]
    }), (0, r.jsx)(l.Z, {
      giftRecipient: C,
      onWishlistItemClick: c
    })]
  })
}