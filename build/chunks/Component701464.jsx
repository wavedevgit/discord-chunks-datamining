/** Chunk was on 3472 **/
/** chunk id: 701464, original params: i,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk987209 = require("./987209.jsx"),
  Chunk973007 = require("./973007.jsx"),
  Chunk170731 = require("./170731.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk427365 = require("./427365.js");
let c = function(i) {
  let {
    onSelectSku: e,
    priceOptions: t,
    giftRecipient: c,
    onWishlistItemClick: d
  } = i, {
    claimableRewards: u
  } = (0, s.wD)(), m = null != u && u.length > 0;
  return (0, n.jsxs)("div", {
    className: o.giftOptionContainer,
    children: [(0, n.jsxs)("div", {
      className: o.cardsRow,
      children: [(0, n.jsx)(r.jB, {
        onClick: () => e(l.Si.TIER_2),
        isGift: true,
        priceOptions: t,
        showPromotionalGiftBanner: m
      }), (0, n.jsx)(r.j8, {
        onClick: () => e(l.Si.TIER_0),
        isGift: true,
        priceOptions: t,
        removeTopMargin: true
      })]
    }), (0, n.jsx)(a.Z, {
      giftRecipient: c,
      onWishlistItemClick: d
    })]
  })
}