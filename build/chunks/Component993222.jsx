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
      isPartiallyOwnedBundle: S
    } = (0, g.L)(t), v = (0, o.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)), O = (0, o.e7)([a.default], () => a.default.getCurrentUser()), x = c.ZP.canUseCollectibles(O), y = (0, p.Iw)(t), {
      isOrbExclusive: T
    } = (0, C.Ip)({
      product: t,
      isPremiumUser: x,
      prioritizedCurrency: b,
      hasDiscountOffer: null != y
    }), j = (0, d.Yq)(t.skuId), L = (null == v ? true : v.skuId) === h.bu && (0, d.WW)(t.skuId);
    if (n === f.Zh.NONE) return null;
    let k = null;
    return (n === f.Zh.NEW ? k = _.intl.string(_.t.y2b7CA) : n === f.Zh.ORBS_EXCLUSIVE ? k = _.intl.string(_.t["0TmQRE"]) : n === f.Zh.NEW_COLOR_VARIANT && (k = _.intl.string(_.t.S6kE9v)), null == k && (S || E || !j ? T ? k = _.intl.string(_.t["0TmQRE"]) : L && (k = _.intl.string(_.t.S6kE9v)) : k = _.intl.string(_.t.y2b7CA)), null == k) ? null : (0, r.jsx)(s.IGR, {
      text: k,
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
    } = e, o = (0, f.LJ)(t);
    return null == o ? null : (0, r.jsx)(b, {
      product: o,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: i
    })
  }