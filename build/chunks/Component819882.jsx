/** Chunk was on 45620 **/
/** chunk id: 819882, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
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
let v = e => {
    let {
      product: t,
      selectedVariantIndex: n,
      cardRef: h,
      onClick: v,
      icon: S
    } = e, O = (0, d.Nd)(), x = null == O ? true : O.tab, y = (0, i.e7)([a.default], () => a.default.getCurrentUser()), T = c.ZP.canUseCollectibles(y), j = (0, u.sp)(), {
      isPurchased: L,
      isPartiallyOwnedBundle: k
    } = (0, f.L)(t), I = (0, g.rN)(t), B = (0, g.G1)(t), N = (0, g.ne)({
      product: t,
      isPartiallyOwnedBundle: k,
      isPurchased: L
    }), P = (0, _.Iw)(t), {
      isOrbExclusive: A
    } = (0, m.Ip)({
      product: t,
      isPremiumUser: T,
      tab: x,
      hasDiscountOffer: null != P
    }), R = (0, C.J7)(t, o.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
    return B || l.tq || A || !N || x === b.AW.ORBS ? null : I || null != v || null != S ? (0, r.jsx)(s.hU, {
      variant: "primary",
      "aria-label": E.intl.string(E.t.SKNnqq),
      icon: null != S ? S : s.tEF,
      onClick: e => {
        e.stopPropagation(), null != v ? v(t.skuId) : R(e)
      }
    }) : (0, r.jsx)(u.k0, {
      newValue: {
        pageCategory: x === b.AW.HOME || null == j ? true : j.pageCategory
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
  S = e => {
    let {
      skuId: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      icon: s
    } = e, o = (0, C.LJ)(t);
    if (null == o) return null;
    let a = (0, h.W)(o, l);
    return (0, r.jsx)(v, {
      product: a,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      icon: s
    })
  }