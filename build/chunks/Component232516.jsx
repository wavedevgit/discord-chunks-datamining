/** Chunk was on 91075 **/
/** chunk id: 232516, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk937008 = require("./937008.jsx"),
  Chunk672525 = require("./672525.jsx"),
  Chunk802246 = require("./802246.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk751690 = require("./751690.js");
let d = function(e) {
  let {
    onSelectSku: t,
    priceOptions: i,
    giftRecipient: d,
    onWishlistItemClick: u
  } = e, {
    claimableRewards: c
  } = (0, r.Pv)(), m = null != c && c.length > 0;
  return (0, n.jsxs)("div", {
    className: o.H,
    children: [(0, n.jsxs)("div", {
      className: o.u,
      children: [(0, n.jsx)(a.D3, {
        onClick: () => t(s.pe.TIER_2),
        isGift: true,
        priceOptions: i,
        showPromotionalGiftBanner: m
      }), (0, n.jsx)(a.Ls, {
        onClick: () => t(s.pe.TIER_0),
        isGift: true,
        priceOptions: i,
        removeTopMargin: true
      })]
    }), (0, n.jsx)(l.A, {
      giftRecipient: d,
      onWishlistItemClick: u
    })]
  })
}