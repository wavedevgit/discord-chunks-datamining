/** Chunk was on 45620 **/
/** chunk id: 819882, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
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
  Chunk884697 = require("./884697.js"),
  Chunk724994 = require("./724994.js"),
  Chunk680942 = require("./680942.jsx"),
  Chunk786040 = require("./786040.jsx"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");
let b = e => {
  let {
    product: t,
    selectedVariantIndex: n,
    config: b,
    cardRef: E
  } = e, S = (0, a.e7)([o.default], () => o.default.getCurrentUser()), x = c.ZP.canUseCollectibles(S), v = (0, u.sp)(), {
    isPurchased: O,
    isPartiallyOwnedBundle: T
  } = (0, g.L)(t), y = (0, d.rN)(t), L = (0, d.G1)(t), j = (0, d.ne)({
    product: t,
    isPartiallyOwnedBundle: T,
    isPurchased: O
  }), k = (0, h.Iw)(t), {
    isOrbExclusive: I
  } = (0, C.Ip)({
    product: t,
    isPremiumUser: x,
    tab: b.tab,
    hasDiscountOffer: null != k
  }), P = (0, f.J7)(t, b, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON);
  return L || l.tq || I || !j || b.tab === _.AW.ORBS ? null : y ? (0, r.jsx)(i.hU, {
    variant: "primary",
    "aria-label": m.intl.string(m.t.SKNnqq),
    icon: i.tEF,
    onClick: e => {
      e.stopPropagation(), P(e)
    }
  }) : (0, r.jsx)(u.k0, {
    newValue: {
      pageCategory: b.tab === _.AW.HOME || null == v ? true : v.pageCategory
    },
    children: (0, r.jsx)(p.Z, {
      primary: true,
      product: t,
      selectedVariantIndex: n,
      returnRef: E,
      tooltipDelay: 250
    })
  })
}