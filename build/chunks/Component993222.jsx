/** Chunk was on 45620 **/
/** chunk id: 993222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk884697 = require("./884697.js"),
  Chunk318028 = require("./318028.js"),
  Chunk724994 = require("./724994.js"),
  Chunk786040 = require("./786040.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944525 = require("./944525.js");
let _ = e => {
    let {
      product: t,
      badgeOverride: n,
      skipLimitedTimeCheck: l,
      className: _,
      prioritizedCurrency: b
    } = e, {
      isPurchased: v,
      isPartiallyOwnedBundle: E
    } = (0, p.L)(t), {
      isFetching: x,
      category: O
    } = (0, d.l)(t.skuId), S = (null == O ? true : O.unpublishedAt) != null ? (0, u.OT)(O.unpublishedAt) : null, y = (0, s.e7)([o.default], () => o.default.getCurrentUser()), j = c.ZP.canUseCollectibles(y), k = (0, f.Iw)(t), {
      isOrbExclusive: I
    } = (0, h.Ip)({
      product: t,
      isPremiumUser: j,
      prioritizedCurrency: b,
      hasDiscountOffer: null != k
    }), T = n;
    if (null == T && (null == S || l ? !E && !v && (0, u.Yq)(t.skuId) ? T = g.Zh.NEW : I && (T = g.Zh.ORBS_EXCLUSIVE) : T = g.Zh.LIMITED_TIME), null == T || T === g.Zh.NONE || x) return null;
    let L = null;
    switch (T) {
      case g.Zh.LIMITED_TIME:
        L = null != S ? S > 1 ? C.intl.formatToPlainString(C.t.Io7ozn, {
          days: S
        }) : C.intl.string(C.t.Bc13HF) : C.intl.string(C.t["h/uBCR"]);
        break;
      case g.Zh.NEW:
        L = C.intl.string(C.t.y2b7CA);
        break;
      case g.Zh.ORBS_EXCLUSIVE:
        L = C.intl.string(C.t["0TmQRG"])
    }
    return (0, r.jsx)(a.IGR, {
      text: L,
      disableColor: true,
      className: i()(_, m.productCardBadge)
    })
  },
  b = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: i,
      skipLimitedTimeCheck: s
    } = e, a = (0, g.LJ)(t);
    return null == a ? null : (0, r.jsx)(_, {
      product: a,
      badgeOverride: n,
      skipLimitedTimeCheck: s,
      className: l,
      prioritizedCurrency: i
    })
  }