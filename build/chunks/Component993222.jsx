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
    } = e, {
      isPurchased: v,
      isPartiallyOwnedBundle: x
    } = (0, g.L)(t), E = (0, p.G1)(t), O = (0, a.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)), S = (null == O ? true : O.unpublishedAt) != null ? (0, p.OT)(O.unpublishedAt) : null, y = (0, a.e7)([s.default], () => s.default.getCurrentUser()), j = c.ZP.canUseCollectibles(y), k = (0, m.Iw)(t), {
      isOrbExclusive: I
    } = (0, C.Ip)({
      product: t,
      isPremiumUser: j,
      prioritizedCurrency: h,
      hasDiscountOffer: null != k
    }), T = n;
    if (null == T && (null == S || l ? !x && !v && (0, p.Yq)(t.skuId) ? T = f.Zh.NEW : I ? T = f.Zh.ORBS_EXCLUSIVE : E && (T = f.Zh.NITRO_EXCLUSIVE) : T = f.Zh.LIMITED_TIME), null == T || T === f.Zh.NONE) return null;
    let L = null;
    switch (T) {
      case f.Zh.LIMITED_TIME:
        L = null != S ? S > 1 ? _.intl.formatToPlainString(_.t.Io7ozn, {
          days: S
        }) : _.intl.string(_.t.Bc13HF) : _.intl.string(_.t["h/uBCR"]);
        break;
      case f.Zh.NEW:
        L = _.intl.string(_.t.y2b7CA);
        break;
      case f.Zh.NITRO_EXCLUSIVE:
        L = _.intl.string(_.t.X3Ekj8);
        break;
      case f.Zh.ORBS_EXCLUSIVE:
        L = _.intl.string(_.t["0TmQRG"])
    }
    return (0, r.jsx)(o.IGR, {
      text: L,
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
    } = e, o = (0, f.LJ)(t), s = (0, d.o)(o);
    if (null == o) return null;
    let c = (0, h.W)(o, s);
    return (0, r.jsx)(v, {
      product: c,
      badgeOverride: n,
      skipLimitedTimeCheck: a,
      className: l,
      prioritizedCurrency: i
    })
  }