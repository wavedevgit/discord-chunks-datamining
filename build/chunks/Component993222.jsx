/** Chunk was on 88282 **/
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
    } = (0, p.L)(t), C = (0, m.G1)(t), S = (0, i.e7)([d.Z], () => d.Z.getCategoryForProduct(t.skuId)), E = (null == S ? true : S.unpublishedAt) != null ? (0, m.OT)(S.unpublishedAt) : null, N = (0, i.e7)([o.default], () => o.default.getCurrentUser()), T = c.ZP.canUseCollectibles(N), O = (0, f.Iw)(t), {
      isOrbExclusive: P
    } = (0, g.Ip)({
      product: t,
      isPremiumUser: T,
      prioritizedCurrency: x,
      hasDiscountOffer: null != O
    }), I = n;
    if (null == I && (null == E || l ? !y && !_ && (0, m.Yq)(t.skuId) ? I = h.Zh.NEW : null != j && 3 === j ? I = h.Zh.THREE_DAY_RENTAL : null != j && 7 === j ? I = h.Zh.SEVEN_DAY_RENTAL : null != j ? I = h.Zh.RENTAL : P ? I = h.Zh.ORBS_EXCLUSIVE : C && (I = h.Zh.NITRO_EXCLUSIVE) : I = h.Zh.LIMITED_TIME), null == I || I === h.Zh.NONE) return null;
    let w = null;
    switch (I) {
      case h.Zh.LIMITED_TIME:
        w = null != E ? E > 1 ? b.intl.formatToPlainString(b.t.Io7ozn, {
          days: E
        }) : b.intl.string(b.t.Bc13HF) : b.intl.string(b.t["h/uBCR"]);
        break;
      case h.Zh.NEW:
        w = b.intl.string(b.t.y2b7CA);
        break;
      case h.Zh.NITRO_EXCLUSIVE:
        w = b.intl.string(b.t.X3Ekj8);
        break;
      case h.Zh.ORBS_EXCLUSIVE:
        w = b.intl.string(b.t["0TmQRG"]);
        break;
      case h.Zh.THREE_DAY_RENTAL:
        w = b.intl.string(b.t["52UXCo"]);
        break;
      case h.Zh.SEVEN_DAY_RENTAL:
        w = b.intl.string(b.t.FRR2s2);
        break;
      case h.Zh.RENTAL:
        w = b.intl.string(b.t.VgsFa1)
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