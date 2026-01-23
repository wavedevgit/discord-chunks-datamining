/** Chunk was on 58197 **/
/** chunk id: 232516, original params: e,t,i (module,exports,require) **/
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
let c = function(e) {
  let {
    onSelectSku: t,
    priceOptions: i,
    giftRecipient: c,
    onWishlistItemClick: u
  } = e, {
    claimableRewards: d
  } = (0, r.Pv)(), p = null != d && d.length > 0;
  return (0, n.jsxs)("div", {
    className: a.H,
    children: [(0, n.jsxs)("div", {
      className: a.u,
      children: [(0, n.jsx)(l.D3, {
        onClick: () => t(o.pe.TIER_2),
        isGift: true,
        priceOptions: i,
        showPromotionalGiftBanner: p
      }), (0, n.jsx)(l.Ls, {
        onClick: () => t(o.pe.TIER_0),
        isGift: true,
        priceOptions: i,
        removeTopMargin: true
      })]
    }), (0, n.jsx)(s.A, {
      giftRecipient: c,
      onWishlistItemClick: u
    })]
  })
}