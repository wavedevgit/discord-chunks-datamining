/** Chunk was on 55926 **/
/** chunk id: 232516, original params: i,e,t (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk937008 = require("./937008.jsx"),
  Chunk672525 = require("./672525.jsx"),
  Chunk802246 = require("./802246.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk751690 = require("./751690.js");
let c = function(i) {
  let {
    onSelectSku: e,
    priceOptions: t,
    giftRecipient: c,
    onWishlistItemClick: d
  } = i, {
    claimableRewards: u
  } = (0, s.Pv)(), m = null != u && u.length > 0;
  return (0, n.jsxs)("div", {
    className: o.H,
    children: [(0, n.jsxs)("div", {
      className: o.u,
      children: [(0, n.jsx)(l.D3, {
        onClick: () => e(a.pe.TIER_2),
        isGift: true,
        priceOptions: t,
        showPromotionalGiftBanner: m
      }), (0, n.jsx)(l.Ls, {
        onClick: () => e(a.pe.TIER_0),
        isGift: true,
        priceOptions: t,
        removeTopMargin: true
      })]
    }), (0, n.jsx)(r.A, {
      giftRecipient: c,
      onWishlistItemClick: d
    })]
  })
}