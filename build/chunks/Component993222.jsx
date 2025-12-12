/** Chunk was on 88499 **/
/** chunk id: 993222, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
  Chunk944525 = require("./944525.js");
let j = e => {
    let {
      product: t,
      badgeOverride: n,
      skipLimitedTimeCheck: r,
      className: u,
      prioritizedCurrency: x
    } = e, j = (0, h.jB)(), {
      isPurchased: _,
      isPartiallyOwnedBundle: y
    } = (0, p.L)(t), C = (0, m.G1)(t), S = (0, l.e7)([d.Z], () => d.Z.getCategoryForProduct(t.skuId)), E = (null == S ? true : S.unpublishedAt) != null ? (0, m.OT)(S.unpublishedAt) : null, O = (0, l.e7)([o.default], () => o.default.getCurrentUser()), T = c.ZP.canUseCollectibles(O), N = (0, f.Iw)(t), {
      isOrbExclusive: P
    } = (0, g.Ip)({
      product: t,
      isPremiumUser: T,
      prioritizedCurrency: x,
      hasDiscountOffer: null != N
    }), w = n;
    if (null == w && (null == E || r ? !y && !_ && (0, m.Yq)(t.skuId) ? w = h.Zh.NEW : null != j && 3 === j ? w = h.Zh.THREE_DAY_RENTAL : null != j && 7 === j ? w = h.Zh.SEVEN_DAY_RENTAL : null != j ? w = h.Zh.RENTAL : P ? w = h.Zh.ORBS_EXCLUSIVE : C && (w = h.Zh.NITRO_EXCLUSIVE) : w = h.Zh.LIMITED_TIME), null == w || w === h.Zh.NONE) return null;
    let I = null;
    switch (w) {
      case h.Zh.LIMITED_TIME:
        I = null != E ? E > 1 ? b.intl.formatToPlainString(b.t.Io7ozn, {
          days: E
        }) : b.intl.string(b.t.Bc13HF) : b.intl.string(b.t["h/uBCR"]);
        break;
      case h.Zh.NEW:
        I = b.intl.string(b.t.y2b7CA);
        break;
      case h.Zh.NITRO_EXCLUSIVE:
        I = b.intl.string(b.t.X3Ekj8);
        break;
      case h.Zh.ORBS_EXCLUSIVE:
        I = b.intl.string(b.t["0TmQRG"]);
        break;
      case h.Zh.THREE_DAY_RENTAL:
        I = b.intl.string(b.t["52UXCo"]);
        break;
      case h.Zh.SEVEN_DAY_RENTAL:
        I = b.intl.string(b.t.FRR2s2);
        break;
      case h.Zh.RENTAL:
        I = b.intl.string(b.t.VgsFa1)
    }
    return (0, a.jsx)(s.IGR, {
      text: I,
      disableColor: true,
      className: i()(u, v.productCardBadge)
    })
  },
  _ = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: r,
      prioritizedCurrency: i,
      skipLimitedTimeCheck: l
    } = e, s = (0, h.LJ)(t), o = (0, u.o)(s);
    if (null == s) return null;
    let c = (0, x.W)(s, o);
    return (0, a.jsx)(j, {
      product: c,
      badgeOverride: n,
      skipLimitedTimeCheck: l,
      className: r,
      prioritizedCurrency: i
    })
  }