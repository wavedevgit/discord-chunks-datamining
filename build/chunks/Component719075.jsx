/** Chunk was on 45620 **/
/** chunk id: 719075, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk409116 = require("./409116.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk58201 = require("./58201.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997033 = require("./997033.js");
let v = e => {
    let {
      product: t,
      prioritizedCurrency: n
    } = e, c = (0, i.e7)([s.default], () => s.default.getCurrentUser()), h = (0, f.$l)(), v = o.ZP.canUseCollectibles(c), {
      isDisabled: x
    } = (0, d.G)(t.skuId), {
      isPurchased: E,
      isPartiallyOwnedBundle: O
    } = (0, p.L)(t), S = (0, u.G1)(t), y = (0, u.rN)(t), j = l.useMemo(() => (0, u.BH)(t, v), [t, v]), k = (0, m.Iw)(t), {
      checkoutEligiblePrices: I,
      hasSufficientOrbs: T,
      shouldCheckoutWithOrbs: L
    } = (0, C.Ip)({
      product: t,
      isPremiumUser: v,
      prioritizedCurrency: n,
      hasDiscountOffer: null != k,
      isRental: h
    }), B = S && !v;
    return x ? (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-tertiary",
      lineClamp: 1,
      children: _.intl.string(_.t.wu4gyV)
    }) : O ? (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-tertiary",
      lineClamp: 1,
      children: _.intl.string(_.t.BEjTij)
    }) : E && !B ? (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-tertiary",
      lineClamp: 1,
      children: _.intl.string(_.t["6cfuDj"])
    }) : y ? (0, r.jsx)(a.Text, {
      variant: "text-md/bold",
      lineClamp: 1,
      children: _.intl.string(_.t.nBtvYB)
    }) : S ? (0, r.jsx)(a.Text, {
      variant: "text-md/bold",
      lineClamp: 1,
      children: _.intl.string(_.t.rt69oo)
    }) : 0 === I.length ? null : (0, r.jsx)(g.F, {
      price: I[0],
      discount: j,
      nitroIconType: v ? "default" : true,
      nitroIconSize: "sm",
      discountOfferAmount: k,
      className: L && !T ? b.insufficientOrbs : true,
      variant: "text-md/bold"
    })
  },
  x = e => {
    let {
      skuId: t,
      prioritizedCurrency: n
    } = e, l = (0, f.LJ)(t), i = (0, c.o)(l);
    if (null == l) return null;
    let a = (0, h.W)(l, i);
    return (0, r.jsx)(v, {
      product: a,
      prioritizedCurrency: n
    })
  }