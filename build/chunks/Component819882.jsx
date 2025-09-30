/** Chunk was on 45620 **/
/** chunk id: 819882, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
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
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");
let E = e => {
  let {
    product: t,
    selectedVariantIndex: n,
    cardRef: E
  } = e, v = (0, d.Nd)(), S = null == v ? true : v.tab, x = (0, i.e7)([o.default], () => o.default.getCurrentUser()), O = c.ZP.canUseCollectibles(x), T = (0, u.sp)(), {
    isPurchased: y,
    isPartiallyOwnedBundle: L
  } = (0, p.L)(t), j = (0, g.rN)(t), k = (0, g.G1)(t), I = (0, g.ne)({
    product: t,
    isPartiallyOwnedBundle: L,
    isPurchased: y
  }), P = (0, C.Iw)(t), {
    isOrbExclusive: N
  } = (0, h.Ip)({
    product: t,
    isPremiumUser: O,
    tab: S,
    hasDiscountOffer: null != P
  }), B = (0, _.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
  return k || l.tq || N || !I || S === m.AW.ORBS ? null : j ? (0, r.jsx)(a.hU, {
    variant: "primary",
    "aria-label": b.intl.string(b.t.SKNnqq),
    icon: a.tEF,
    onClick: e => {
      e.stopPropagation(), B(e)
    }
  }) : (0, r.jsx)(u.k0, {
    newValue: {
      pageCategory: S === m.AW.HOME || null == T ? true : T.pageCategory
    },
    children: (0, r.jsx)(f.Z, {
      primary: true,
      product: t,
      selectedVariantIndex: n,
      returnRef: E,
      tooltipDelay: 250
    })
  })
}