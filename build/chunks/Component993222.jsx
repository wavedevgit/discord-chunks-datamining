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
      prioritizedCurrency: h
    } = e, v = (0, f.jB)(), {
      isPurchased: x,
      isPartiallyOwnedBundle: E
    } = (0, g.L)(t), O = (0, p.G1)(t), S = (0, a.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)), y = (null == S ? true : S.unpublishedAt) != null ? (0, p.OT)(S.unpublishedAt) : null, j = (0, a.e7)([o.default], () => o.default.getCurrentUser()), k = c.ZP.canUseCollectibles(j), I = (0, m.Iw)(t), {
      isOrbExclusive: T
    } = (0, C.Ip)({
      product: t,
      isPremiumUser: k,
      prioritizedCurrency: h,
      hasDiscountOffer: null != I
    }), L = n;
    if (null == L && (null == y || l ? !E && !x && (0, p.Yq)(t.skuId) ? L = f.Zh.NEW : 1 === v ? L = f.Zh.ONE_DAY_RENTAL : 3 === v ? L = f.Zh.THREE_DAY_RENTAL : T ? L = f.Zh.ORBS_EXCLUSIVE : O && (L = f.Zh.NITRO_EXCLUSIVE) : L = f.Zh.LIMITED_TIME), null == L || L === f.Zh.NONE) return null;
    let B = null;
    switch (L) {
      case f.Zh.LIMITED_TIME:
        B = null != y ? y > 1 ? _.intl.formatToPlainString(_.t.Io7ozn, {
          days: y
        }) : _.intl.string(_.t.Bc13HF) : _.intl.string(_.t["h/uBCR"]);
        break;
      case f.Zh.NEW:
        B = _.intl.string(_.t.y2b7CA);
        break;
      case f.Zh.NITRO_EXCLUSIVE:
        B = _.intl.string(_.t.X3Ekj8);
        break;
      case f.Zh.ORBS_EXCLUSIVE:
        B = _.intl.string(_.t["0TmQRG"]);
        break;
      case f.Zh.ONE_DAY_RENTAL:
        B = _.intl.string(_.t["9dHf8O"]);
        break;
      case f.Zh.THREE_DAY_RENTAL:
        B = _.intl.string(_.t["52UXCo"])
    }
    return (0, r.jsx)(s.IGR, {
      text: B,
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
    } = e, s = (0, f.LJ)(t), o = (0, d.o)(s);
    if (null == s) return null;
    let c = (0, h.W)(s, o);
    return (0, r.jsx)(v, {
      product: c,
      badgeOverride: n,
      skipLimitedTimeCheck: a,
      className: l,
      prioritizedCurrency: i
    })
  }