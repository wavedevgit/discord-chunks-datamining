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
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk724994 = require("./724994.js"),
  Chunk786040 = require("./786040.jsx"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944525 = require("./944525.js");
let b = e => {
    let {
      product: t,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: b
    } = e, {
      isPurchased: E,
      isPartiallyOwnedBundle: v
    } = (0, g.L)(t), S = (0, s.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)), O = (0, s.e7)([a.default], () => a.default.getCurrentUser()), x = c.ZP.canUseCollectibles(O), y = (0, p.Iw)(t), {
      isOrbExclusive: j
    } = (0, C.Ip)({
      product: t,
      isPremiumUser: x,
      prioritizedCurrency: b,
      hasDiscountOffer: null != y
    }), k = (0, d.Yq)(t.skuId), T = (null == S ? true : S.skuId) === h.bu && (0, d.WW)(t.skuId);
    if (n === f.Zh.NONE) return null;
    let L = null;
    return (n === f.Zh.NEW ? L = _.intl.string(_.t.y2b7CA) : n === f.Zh.ORBS_EXCLUSIVE ? L = _.intl.string(_.t["0TmQRE"]) : n === f.Zh.NEW_COLOR_VARIANT && (L = _.intl.string(_.t.S6kE9v)), null == L && (v || E || !k ? j ? L = _.intl.string(_.t["0TmQRE"]) : T && (L = _.intl.string(_.t.S6kE9v)) : L = _.intl.string(_.t.y2b7CA)), null == L) ? null : (0, r.jsx)(o.IGR, {
      text: L,
      disableColor: true,
      className: i()(l, m.productCardBadge)
    })
  },
  E = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: i
    } = e, s = (0, f.LJ)(t);
    return null == s ? null : (0, r.jsx)(b, {
      product: s,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: i
    })
  }