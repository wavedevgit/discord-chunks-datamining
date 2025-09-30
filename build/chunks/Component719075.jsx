/** Chunk was on 45620 **/
/** chunk id: 719075, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk825102 = require("./825102.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk390698 = require("./390698.jsx"),
  Chunk558060 = require("./558060.jsx"),
  Chunk306092 = require("./306092.jsx"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997033 = require("./997033.js");
let S = e => {
  let {
    product: t
  } = e, n = (0, u.Nd)(), S = null == n ? true : n.tab, v = (0, i.e7)([o.default], () => o.default.getCurrentUser()), x = c.ZP.canUseCollectibles(v), {
    isDisabled: O
  } = (0, g.G)(t.skuId), {
    isPurchased: T,
    isPartiallyOwnedBundle: y
  } = (0, p.L)(t), L = (0, d.G1)(t), {
    enabled: j
  } = (0, s.WX)({
    location: "product_card_price"
  }), k = l.useMemo(() => (0, d.BH)(t, x), [t, x]), I = (0, C.Iw)(t), P = null != I, {
    displayPrices: N,
    hasSufficientOrbs: B
  } = (0, m.Ip)({
    product: t,
    isPremiumUser: x,
    tab: S,
    hasDiscountOffer: P
  });
  return O ? (0, r.jsx)(a.Text, {
    tag: "div",
    variant: "heading-md/semibold",
    color: "header-muted",
    className: E.priceTag,
    children: b.intl.string(b.t.wu4gyc)
  }) : T || y ? (0, r.jsx)(f.U, {
    className: E.priceTag,
    isPartiallyPurchased: y
  }) : L ? (0, r.jsx)(a.Text, {
    variant: "text-md/semibold",
    className: E.priceTag,
    children: b.intl.string(b.t.rt69oq)
  }) : j ? (0, r.jsx)(_.e, {
    displayPrices: N,
    isPremiumUser: x,
    discount: k,
    hasSufficientOrbs: B,
    discountOfferAmount: I
  }) : (0, r.jsx)(h.Z, {
    product: t,
    discount: k,
    isPremiumUser: x,
    className: E.priceTag,
    hideStrikethroughPrice: true,
    nitroIconType: "default",
    nitroIconSize: "md",
    discountOfferAmount: I
  })
}