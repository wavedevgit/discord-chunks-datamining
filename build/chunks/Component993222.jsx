/** Chunk was on 75393 **/
/** chunk id: 993222, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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
  Chunk944525 = require("./944525.js");
let j = e => {
    let {
      product: t,
      badgeOverride: n,
      skipLimitedTimeCheck: l,
      className: u,
      prioritizedCurrency: x
    } = e, j = (0, h.jB)(), {
      isPurchased: _,
      isPartiallyOwnedBundle: y
    } = (0, p.L)(t), C = (0, m.G1)(t), S = (0, i.e7)([d.Z], () => d.Z.getCategoryForProduct(t.skuId)), N = (null == S ? true : S.unpublishedAt) != null ? (0, m.OT)(S.unpublishedAt) : null, E = (0, i.e7)([o.default], () => o.default.getCurrentUser()), O = c.ZP.canUseCollectibles(E), T = (0, f.Iw)(t), {
      isOrbExclusive: P
    } = (0, b.Ip)({
      product: t,
      isPremiumUser: O,
      prioritizedCurrency: x,
      hasDiscountOffer: null != T
    }), I = n;
    if (null == I && (null == N || l ? !y && !_ && (0, m.Yq)(t.skuId) ? I = h.Zh.NEW : null != j && 3 === j ? I = h.Zh.THREE_DAY_RENTAL : null != j && 7 === j ? I = h.Zh.SEVEN_DAY_RENTAL : null != j ? I = h.Zh.RENTAL : P ? I = h.Zh.ORBS_EXCLUSIVE : C && (I = h.Zh.NITRO_EXCLUSIVE) : I = h.Zh.LIMITED_TIME), null == I || I === h.Zh.NONE) return null;
    let w = null;
    switch (I) {
      case h.Zh.LIMITED_TIME:
        w = null != N ? N > 1 ? g.intl.formatToPlainString(g.t.Io7ozn, {
          days: N
        }) : g.intl.string(g.t.Bc13HF) : g.intl.string(g.t["h/uBCR"]);
        break;
      case h.Zh.NEW:
        w = g.intl.string(g.t.y2b7CA);
        break;
      case h.Zh.NITRO_EXCLUSIVE:
        w = g.intl.string(g.t.X3Ekj8);
        break;
      case h.Zh.ORBS_EXCLUSIVE:
        w = g.intl.string(g.t["0TmQRG"]);
        break;
      case h.Zh.THREE_DAY_RENTAL:
        w = g.intl.string(g.t["52UXCo"]);
        break;
      case h.Zh.SEVEN_DAY_RENTAL:
        w = g.intl.string(g.t.FRR2s2);
        break;
      case h.Zh.RENTAL:
        w = g.intl.string(g.t.VgsFa1)
    }
    return (0, a.jsx)(s.IGR, {
      text: w,
      disableColor: true,
      className: r()(u, v.productCardBadge)
    })
  },
  _ = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: r,
      skipLimitedTimeCheck: i
    } = e, s = (0, h.LJ)(t), o = (0, u.o)(s);
    if (null == s) return null;
    let c = (0, x.W)(s, o);
    return (0, a.jsx)(j, {
      product: c,
      badgeOverride: n,
      skipLimitedTimeCheck: i,
      className: l,
      prioritizedCurrency: r
    })
  }