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
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk884697 = require("./884697.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk409116 = require("./409116.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997033 = require("./997033.js");
let b = e => {
    let {
      product: t,
      prioritizedCurrency: n
    } = e, f = (0, i.e7)([s.default], () => s.default.getCurrentUser()), b = a.ZP.canUseCollectibles(f), {
      isDisabled: E
    } = (0, u.G)(t.skuId), {
      isPurchased: v,
      isPartiallyOwnedBundle: x
    } = (0, d.L)(t), O = (0, c.G1)(t), S = (0, c.rN)(t), y = l.useMemo(() => (0, c.BH)(t, b), [t, b]), k = (0, p.Iw)(t), {
      displayPrices: T,
      hasSufficientOrbs: j
    } = (0, C.Ip)({
      product: t,
      isPremiumUser: b,
      prioritizedCurrency: n,
      hasDiscountOffer: null != k
    }), L = O && !b;
    return E ? (0, r.jsx)(o.Text, {
      variant: "text-md/semibold",
      color: "header-muted",
      children: _.intl.string(_.t.wu4gyc)
    }) : x ? (0, r.jsx)(o.Text, {
      variant: "text-md/semibold",
      children: _.intl.string(_.t.BEjTio)
    }) : v && !L ? (0, r.jsx)(o.Text, {
      variant: "text-md/semibold",
      children: _.intl.string(_.t["6cfuDg"])
    }) : S ? (0, r.jsx)(o.Text, {
      variant: "text-md/semibold",
      children: _.intl.string(_.t.nBtvYG)
    }) : O ? (0, r.jsx)(o.Text, {
      variant: "text-md/semibold",
      children: _.intl.string(_.t.rt69oq)
    }) : 0 === T.length ? null : (0, r.jsx)(g.F, {
      price: T[0],
      discount: y,
      nitroIconType: b ? "default" : true,
      nitroIconSize: "sm",
      discountOfferAmount: k,
      className: T[0].currency !== h.pK.DISCORD_ORB || j ? true : m.insufficientOrbs
    })
  },
  E = e => {
    let {
      skuId: t,
      prioritizedCurrency: n
    } = e, l = (0, f.LJ)(t);
    return null == l ? null : (0, r.jsx)(b, {
      product: l,
      prioritizedCurrency: n
    })
  }