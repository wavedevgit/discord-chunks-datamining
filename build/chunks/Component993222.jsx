/** Chunk was on 45620 **/
/** chunk id: 993222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk318028 = require("./318028.js"),
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
      className: u,
      prioritizedCurrency: h
    } = e, {
      isPurchased: v,
      isPartiallyOwnedBundle: E
    } = (0, g.L)(t), {
      isFetching: x,
      category: O
    } = (0, p.l)(t.skuId), S = (null == O ? true : O.unpublishedAt) != null ? (0, d.OT)(O.unpublishedAt) : null, y = (0, s.e7)([o.default], () => o.default.getCurrentUser()), j = c.ZP.canUseCollectibles(y), k = (0, C.Iw)(t), {
      isOrbExclusive: I
    } = (0, m.Ip)({
      product: t,
      isPremiumUser: j,
      prioritizedCurrency: h,
      hasDiscountOffer: null != k
    }), T = n;
    if (null == T && (null == S || l ? !E && !v && (0, d.Yq)(t.skuId) ? T = f.Zh.NEW : I && (T = f.Zh.ORBS_EXCLUSIVE) : T = f.Zh.LIMITED_TIME), null == T || T === f.Zh.NONE || x) return null;
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
      case f.Zh.ORBS_EXCLUSIVE:
        L = _.intl.string(_.t["0TmQRG"])
    }
    return (0, r.jsx)(a.IGR, {
      text: L,
      disableColor: true,
      className: i()(u, b.productCardBadge)
    })
  },
  E = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: i,
      skipLimitedTimeCheck: s
    } = e, a = (0, f.LJ)(t), o = (0, u.o)(a);
    if (null == a) return null;
    let c = (0, h.W)(a, o);
    return (0, r.jsx)(v, {
      product: c,
      badgeOverride: n,
      skipLimitedTimeCheck: s,
      className: l,
      prioritizedCurrency: i
    })
  }