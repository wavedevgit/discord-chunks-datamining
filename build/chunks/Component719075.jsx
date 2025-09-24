/** Chunk was on 45620 **/
/** chunk id: 719075, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk825102 = require("./825102.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
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
let E = e => {
  let {
    product: t,
    config: n
  } = e, E = (0, a.e7)([o.default], () => o.default.getCurrentUser()), S = c.ZP.canUseCollectibles(E), {
    isDisabled: x
  } = (0, d.G)(t.skuId), {
    isPurchased: v,
    isPartiallyOwnedBundle: O
  } = (0, g.L)(t), T = (0, u.G1)(t), {
    enabled: y
  } = (0, s.WX)({
    location: "product_card_price"
  }), L = l.useMemo(() => (0, u.BH)(t, S), [t, S]), j = (0, C.Iw)(t), k = null != j, {
    displayPrices: I,
    hasSufficientOrbs: P
  } = (0, _.Ip)({
    product: t,
    isPremiumUser: S,
    tab: n.tab,
    hasDiscountOffer: k
  });
  return x ? (0, r.jsx)(i.Text, {
    tag: "div",
    variant: "heading-md/semibold",
    color: "header-muted",
    className: b.priceTag,
    children: m.intl.string(m.t.wu4gyc)
  }) : v || O ? (0, r.jsx)(p.U, {
    className: b.priceTag,
    isPartiallyPurchased: O
  }) : T ? (0, r.jsx)(i.Text, {
    variant: "text-md/semibold",
    className: b.priceTag,
    children: m.intl.string(m.t.rt69oq)
  }) : y ? (0, r.jsx)(h.e, {
    displayPrices: I,
    isPremiumUser: S,
    discount: L,
    hasSufficientOrbs: P,
    discountOfferAmount: j
  }) : (0, r.jsx)(f.Z, {
    product: t,
    discount: L,
    isPremiumUser: S,
    className: b.priceTag,
    hideStrikethroughPrice: true,
    nitroIconType: "default",
    nitroIconSize: "md",
    discountOfferAmount: j
  })
}