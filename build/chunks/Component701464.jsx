/** Chunk was on 29356 **/
/** chunk id: 701464, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk987209 = require("./987209.jsx"),
  Chunk973007 = require("./973007.jsx"),
  Chunk170731 = require("./170731.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk391763 = require("./391763.js");
let c = function(e) {
  let {
    onSelectSku: t,
    priceOptions: i,
    giftRecipient: c,
    onWishlistItemClick: d
  } = e, {
    claimableRewards: u
  } = (0, r.wD)(), m = null != u && u.length > 0;
  return (0, n.jsxs)("div", {
    className: o.giftOptionContainer,
    children: [(0, n.jsxs)("div", {
      className: o.cardsRow,
      children: [(0, n.jsx)(a.jB, {
        onClick: () => t(s.Si.TIER_2),
        isGift: true,
        priceOptions: i,
        showPromotionalGiftBanner: m
      }), (0, n.jsx)(a.j8, {
        onClick: () => t(s.Si.TIER_0),
        isGift: true,
        priceOptions: i,
        removeTopMargin: true
      })]
    }), (0, n.jsx)(l.Z, {
      giftRecipient: c,
      onWishlistItemClick: d
    })]
  })
}