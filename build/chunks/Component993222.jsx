/** Chunk was on 45620 **/
/** chunk id: 993222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
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
let v = e => {
    let {
      product: t,
      badgeOverride: n,
      skipLimitedTimeCheck: l,
      className: d,
      prioritizedCurrency: m
    } = e, v = (0, p.jB)(), {
      isPurchased: x,
      isPartiallyOwnedBundle: E
    } = (0, g.L)(t), O = (0, f.G1)(t), S = (0, a.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)), y = (null == S ? true : S.unpublishedAt) != null ? (0, f.OT)(S.unpublishedAt) : null, j = (0, a.e7)([s.default], () => s.default.getCurrentUser()), k = c.ZP.canUseCollectibles(j), I = (0, h.Iw)(t), {
      isOrbExclusive: T
    } = (0, C.Ip)({
      product: t,
      isPremiumUser: k,
      prioritizedCurrency: m,
      hasDiscountOffer: null != I
    }), L = n;
    if (null == L && (null == y || l ? !E && !x && (0, f.Yq)(t.skuId) ? L = p.Zh.NEW : null != v && 3 === v ? L = p.Zh.THREE_DAY_RENTAL : null != v && 7 === v ? L = p.Zh.SEVEN_DAY_RENTAL : null != v ? L = p.Zh.RENTAL : T ? L = p.Zh.ORBS_EXCLUSIVE : O && (L = p.Zh.NITRO_EXCLUSIVE) : L = p.Zh.LIMITED_TIME), null == L || L === p.Zh.NONE) return null;
    let P = null;
    switch (L) {
      case p.Zh.LIMITED_TIME:
        P = null != y ? y > 1 ? _.intl.formatToPlainString(_.t.Io7ozn, {
          days: y
        }) : _.intl.string(_.t.Bc13HF) : _.intl.string(_.t["h/uBCR"]);
        break;
      case p.Zh.NEW:
        P = _.intl.string(_.t.y2b7CA);
        break;
      case p.Zh.NITRO_EXCLUSIVE:
        P = _.intl.string(_.t.X3Ekj8);
        break;
      case p.Zh.ORBS_EXCLUSIVE:
        P = _.intl.string(_.t["0TmQRG"]);
        break;
      case p.Zh.THREE_DAY_RENTAL:
        P = _.intl.string(_.t["52UXCo"]);
        break;
      case p.Zh.SEVEN_DAY_RENTAL:
        P = _.intl.string(_.t.FRR2s2);
        break;
      case p.Zh.RENTAL:
        P = _.intl.string(_.t.VgsFa1)
    }
    return (0, r.jsx)(o.IGR, {
      text: P,
      disableColor: true,
      className: i()(d, b.productCardBadge)
    })
  },
  x = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: i,
      skipLimitedTimeCheck: a
    } = e, o = (0, p.LJ)(t), s = (0, d.o)(o);
    if (null == o) return null;
    let c = (0, m.W)(o, s);
    return (0, r.jsx)(v, {
      product: c,
      badgeOverride: n,
      skipLimitedTimeCheck: a,
      className: l,
      prioritizedCurrency: i
    })
  }