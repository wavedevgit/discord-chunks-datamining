/** Chunk was on 45620 **/
/** chunk id: 719075, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk884697 = require("./884697.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk409116 = require("./409116.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk189084 = require("./189084.js");
let _ = e => {
    let {
      product: t,
      prioritizedCurrency: n
    } = e, g = (0, i.e7)([a.default], () => a.default.getCurrentUser()), _ = o.ZP.canUseCollectibles(g), {
      isDisabled: b
    } = (0, u.G)(t.skuId), {
      isPurchased: v,
      isPartiallyOwnedBundle: E
    } = (0, d.L)(t), x = (0, c.G1)(t), O = (0, c.rN)(t), S = l.useMemo(() => (0, c.BH)(t, _), [t, _]), y = (0, f.Iw)(t), {
      checkoutEligiblePrices: j,
      hasSufficientOrbs: k,
      shouldCheckoutWithOrbs: I
    } = (0, h.Ip)({
      product: t,
      isPremiumUser: _,
      prioritizedCurrency: n,
      hasDiscountOffer: null != y
    }), T = x && !_;
    return b ? (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-tertiary",
      children: C.intl.string(C.t.wu4gyV)
    }) : E ? (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-tertiary",
      children: C.intl.string(C.t.BEjTij)
    }) : v && !T ? (0, r.jsx)(s.Text, {
      variant: "text-md/medium",
      color: "text-tertiary",
      children: C.intl.string(C.t["6cfuDj"])
    }) : O ? (0, r.jsx)(s.Text, {
      variant: "text-md/bold",
      children: C.intl.string(C.t.nBtvYB)
    }) : x ? (0, r.jsx)(s.Text, {
      variant: "text-md/bold",
      children: C.intl.string(C.t.rt69oo)
    }) : 0 === j.length ? null : (0, r.jsx)(p.F, {
      price: j[0],
      discount: S,
      nitroIconType: _ ? "default" : true,
      nitroIconSize: "sm",
      discountOfferAmount: y,
      className: I && !k ? m.insufficientOrbs : true,
      variant: "text-md/bold"
    })
  },
  b = e => {
    let {
      skuId: t,
      prioritizedCurrency: n
    } = e, l = (0, g.LJ)(t);
    return null == l ? null : (0, r.jsx)(_, {
      product: l,
      prioritizedCurrency: n
    })
  }