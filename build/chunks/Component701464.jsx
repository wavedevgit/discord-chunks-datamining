/** Chunk was on 93582 **/
/** chunk id: 701464, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk987209 = require("./987209.jsx"),
  Chunk973007 = require("./973007.jsx"),
  Chunk170731 = require("./170731.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk391763 = require("./391763.js");
let c = function(e) {
  let {
    onSelectSku: i,
    priceOptions: t,
    giftRecipient: c,
    onWishlistItemClick: d
  } = e, {
    claimableRewards: u
  } = (0, r.wD)(), m = null != u && u.length > 0;
  return (0, n.jsxs)("div", {
    className: o.giftOptionContainer,
    children: [(0, n.jsxs)("div", {
      className: o.cardsRow,
      children: [(0, n.jsx)(s.jB, {
        onClick: () => i(l.Si.TIER_2),
        isGift: true,
        priceOptions: t,
        showPromotionalGiftBanner: m,
        enablePremiumBrandRefresh: true
      }), (0, n.jsx)(s.j8, {
        onClick: () => i(l.Si.TIER_0),
        isGift: true,
        priceOptions: t,
        enablePremiumBrandRefresh: true,
        removeTopMargin: true
      })]
    }), (0, n.jsx)(a.Z, {
      giftRecipient: c,
      onWishlistItemClick: d
    })]
  })
}