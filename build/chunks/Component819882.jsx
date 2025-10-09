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
    } = e, x = (0, d.Nd)(), O = null == x ? true : x.tab, y = (0, s.e7)([o.default], () => o.default.getCurrentUser()), T = c.ZP.canUseCollectibles(y), j = (0, u.sp)(), {
      isPurchased: k,
      isPartiallyOwnedBundle: L
    } = (0, f.L)(t), I = (0, g.rN)(t), P = (0, g.G1)(t), N = (0, g.ne)({
      product: t,
      isPartiallyOwnedBundle: L,
      isPurchased: k
    }), B = (0, _.Iw)(t), {
      isOrbExclusive: A
    } = (0, m.Ip)({
      product: t,
      isPremiumUser: T,
      tab: O,
      hasDiscountOffer: null != B
    }), R = (0, C.J7)(t, a.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
    return P || l.tq || A || !N || O === b.AW.ORBS ? null : I || null != v || null != S ? (0, r.jsx)(i.hU, {
      variant: "primary",
      "aria-label": E.intl.string(E.t.SKNnqq),
      icon: null != S ? S : i.tEF,
      onClick: e => {
        e.stopPropagation(), null != v ? v(t.skuId) : R(e)
      }
    }) : (0, r.jsx)(u.k0, {
      newValue: {
        pageCategory: O === b.AW.HOME || null == j ? true : j.pageCategory
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
      onClick: s,
      icon: i
    } = e, a = (0, C.LJ)(t);
    if (null == a) return null;
    let o = (0, h.W)(a, l);
    return (0, r.jsx)(v, {
      product: o,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: s,
      icon: i
    })
  }