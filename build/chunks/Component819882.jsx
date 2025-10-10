/** Chunk was on 45620 **/
/** chunk id: 819882, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk873546 = require("./873546.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk994587 = require("./994587.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk724994 = require("./724994.js"),
  Chunk680942 = require("./680942.jsx"),
  Chunk786040 = require("./786040.jsx"),
  Chunk58201 = require("./58201.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");
let S = e => {
    let {
      product: t,
      selectedVariantIndex: n,
      cardRef: h,
      onClick: S,
      icon: v,
      prioritizedCurrency: O
    } = e, x = (0, d.Nd)(), y = null == x ? true : x.tab, T = (0, i.e7)([a.default], () => a.default.getCurrentUser()), j = c.ZP.canUseCollectibles(T), L = (0, u.sp)(), {
      isPurchased: k,
      isPartiallyOwnedBundle: I
    } = (0, f.L)(t), B = (0, g.rN)(t), N = (0, g.G1)(t), A = (0, g.ne)({
      product: t,
      isPartiallyOwnedBundle: I,
      isPurchased: k
    }), P = (0, _.Iw)(t), {
      isOrbExclusive: R
    } = (0, m.Ip)({
      product: t,
      isPremiumUser: j,
      prioritizedCurrency: O,
      hasDiscountOffer: null != P
    }), Z = (0, C.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
    return N || l.tq || R || !A || y === b.AW.ORBS ? null : B || null != S || null != v ? (0, r.jsx)(o.hU, {
      variant: "primary",
      "aria-label": E.intl.string(E.t.SKNnqq),
      icon: null != v ? v : o.tEF,
      onClick: e => {
        e.stopPropagation(), null != S ? S(t.skuId) : Z(e)
      }
    }) : (0, r.jsx)(u.k0, {
      newValue: {
        pageCategory: y === b.AW.HOME || null == L ? true : L.pageCategory
      },
      children: (0, r.jsx)(p.Z, {
        primary: true,
        product: t,
        selectedVariantIndex: n,
        returnRef: h,
        tooltipDelay: 250
      })
    })
  },
  v = e => {
    let {
      skuId: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      icon: o,
      prioritizedCurrency: s
    } = e, a = (0, C.LJ)(t);
    if (null == a) return null;
    let c = (0, h.W)(a, l);
    return (0, r.jsx)(S, {
      product: c,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      icon: o,
      prioritizedCurrency: s
    })
  }