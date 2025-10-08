/** Chunk was on 45620 **/
/** chunk id: 719075, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
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
  Chunk786040 = require("./786040.jsx"),
  Chunk306092 = require("./306092.jsx"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk189084 = require("./189084.js");
let v = e => {
    let {
      product: t
    } = e, n = (0, u.Nd)(), h = null == n ? true : n.tab, v = (0, s.e7)([o.default], () => o.default.getCurrentUser()), x = c.ZP.canUseCollectibles(v), {
      isDisabled: O
    } = (0, g.G)(t.skuId), {
      isPurchased: y,
      isPartiallyOwnedBundle: T
    } = (0, p.L)(t), L = (0, d.G1)(t), {
      enabled: j
    } = (0, i.WX)({
      location: "product_card_price"
    }), k = l.useMemo(() => (0, d.BH)(t, x), [t, x]), I = (0, m.Iw)(t), P = null != I, {
      displayPrices: N,
      hasSufficientOrbs: B
    } = (0, b.Ip)({
      product: t,
      isPremiumUser: x,
      tab: h,
      hasDiscountOffer: P
    });
    return O ? (0, r.jsx)(a.Text, {
      tag: "div",
      variant: "heading-md/semibold",
      color: "header-muted",
      className: S.priceTag,
      children: E.intl.string(E.t.wu4gyc)
    }) : y || T ? (0, r.jsx)(f.U, {
      className: S.priceTag,
      isPartiallyPurchased: T
    }) : L ? (0, r.jsx)(a.Text, {
      variant: "text-md/semibold",
      className: S.priceTag,
      children: E.intl.string(E.t.rt69oq)
    }) : j ? (0, r.jsx)(_.e, {
      displayPrices: N,
      isPremiumUser: x,
      discount: k,
      hasSufficientOrbs: B,
      discountOfferAmount: I
    }) : (0, r.jsx)(C.Z, {
      product: t,
      discount: k,
      isPremiumUser: x,
      className: S.priceTag,
      hideStrikethroughPrice: true,
      nitroIconType: "default",
      nitroIconSize: "md",
      discountOfferAmount: I
    })
  },
  x = e => {
    let {
      skuId: t
    } = e, n = (0, h.LJ)(t);
    return null == n ? null : (0, r.jsx)(v, {
      product: n
    })
  }