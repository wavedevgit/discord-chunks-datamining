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
    } = e, c = (0, i.e7)([o.default], () => o.default.getCurrentUser()), f = s.ZP.canUseCollectibles(c), {
      isDisabled: h
    } = (0, d.G)(t.skuId), {
      isPurchased: v,
      isPartiallyOwnedBundle: x
    } = (0, p.L)(t), E = (0, u.G1)(t), O = (0, u.rN)(t), S = l.useMemo(() => (0, u.BH)(t, f), [t, f]), y = (0, C.Iw)(t), {
      checkoutEligiblePrices: j,
      hasSufficientOrbs: k,
      shouldCheckoutWithOrbs: I
    } = (0, m.Ip)({
      product: t,
      isPremiumUser: f,
      prioritizedCurrency: n,
      hasDiscountOffer: null != y
    }), T = E && !f;
    return h ? (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-tertiary",
      lineClamp: 1,
      children: _.intl.string(_.t.wu4gyV)
    }) : x ? (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-tertiary",
      lineClamp: 1,
      children: _.intl.string(_.t.BEjTij)
    }) : v && !T ? (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-tertiary",
      lineClamp: 1,
      children: _.intl.string(_.t["6cfuDj"])
    }) : O ? (0, r.jsx)(a.Text, {
      variant: "text-md/bold",
      lineClamp: 1,
      children: _.intl.string(_.t.nBtvYB)
    }) : E ? (0, r.jsx)(a.Text, {
      variant: "text-md/bold",
      lineClamp: 1,
      children: _.intl.string(_.t.rt69oo)
    }) : 0 === j.length ? null : (0, r.jsx)(g.F, {
      price: j[0],
      discount: S,
      nitroIconType: f ? "default" : true,
      nitroIconSize: "sm",
      discountOfferAmount: y,
      className: I && !k ? b.insufficientOrbs : true,
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