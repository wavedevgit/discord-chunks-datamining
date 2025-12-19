/** Chunk was on 6043 **/
/** chunk id: 993222, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk597688 = require("./597688.js"),
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk724994 = require("./724994.js"),
  Chunk786040 = require("./786040.js"),
  Chunk58201 = require("./58201.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk994987 = require("./994987.js");
let j = e => {
    let {
      product: t,
      badgeOverride: n,
      skipLimitedTimeCheck: r,
      className: u,
      prioritizedCurrency: h
    } = e, j = (0, f.jB)(), {
      isPurchased: C,
      isPartiallyOwnedBundle: y
    } = (0, p.L)(t), _ = (0, m.G1)(t), S = (0, l.e7)([d.Z], () => d.Z.getCategoryForProduct(t.skuId)), E = (null == S ? true : S.unpublishedAt) != null ? (0, m.OT)(S.unpublishedAt) : null, T = (0, l.e7)([o.default], () => o.default.getCurrentUser()), O = c.ZP.canUseCollectibles(T), N = (0, x.Iw)(t), {
      isOrbExclusive: P
    } = (0, b.Ip)({
      product: t,
      isPremiumUser: O,
      prioritizedCurrency: h,
      hasDiscountOffer: null != N
    }), w = n;
    if (null == w && (!r && (0, m.L9)(null == S ? true : S.unpublishedAt) ? w = f.Zh.LIMITED_TIME : !y && !C && (0, m.Yq)(t.skuId) ? w = f.Zh.NEW : null != j && 3 === j ? w = f.Zh.THREE_DAY_RENTAL : null != j && 7 === j ? w = f.Zh.SEVEN_DAY_RENTAL : null != j ? w = f.Zh.RENTAL : P ? w = f.Zh.ORBS_EXCLUSIVE : _ && (w = f.Zh.NITRO_EXCLUSIVE)), null == w || w === f.Zh.NONE) return null;
    let I = null;
    switch (w) {
      case f.Zh.LIMITED_TIME:
        I = null != E ? E > 1 ? g.intl.formatToPlainString(g.t.Io7ozn, {
          days: E
        }) : g.intl.string(g.t.Bc13HF) : g.intl.string(g.t["h/uBCR"]);
        break;
      case f.Zh.NEW:
        I = g.intl.string(g.t.y2b7CA);
        break;
      case f.Zh.NITRO_EXCLUSIVE:
        I = g.intl.string(g.t.X3Ekj8);
        break;
      case f.Zh.ORBS_EXCLUSIVE:
        I = g.intl.string(g.t["0TmQRG"]);
        break;
      case f.Zh.THREE_DAY_RENTAL:
        I = g.intl.string(g.t["52UXCo"]);
        break;
      case f.Zh.SEVEN_DAY_RENTAL:
        I = g.intl.string(g.t.FRR2s2);
        break;
      case f.Zh.RENTAL:
        I = g.intl.string(g.t.VgsFa1)
    }
    return (0, a.jsx)(s.IGR, {
      text: I,
      disableColor: true,
      className: i()(u, v.productCardBadge)
    })
  },
  C = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: r,
      prioritizedCurrency: i,
      skipLimitedTimeCheck: l
    } = e, s = (0, f.LJ)(t), o = (0, u.o)(s);
    if (null == s) return null;
    let c = (0, h.W)(s, o);
    return (0, a.jsx)(j, {
      product: c,
      badgeOverride: n,
      skipLimitedTimeCheck: l,
      className: r,
      prioritizedCurrency: i
    })
  }