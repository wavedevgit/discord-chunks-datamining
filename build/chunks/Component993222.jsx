/** Chunk was on 45620 **/
/** chunk id: 993222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk597688 = require("./597688.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk724994 = require("./724994.js"),
  Chunk786040 = require("./786040.jsx"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944525 = require("./944525.js");
let E = e => {
    let {
      product: t,
      badgeOverride: n,
      className: l
    } = e, E = (0, d.Nd)(), v = null == E ? true : E.tab, {
      isPurchased: S,
      isPartiallyOwnedBundle: x
    } = (0, f.L)(t), O = (0, i.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)), y = (0, i.e7)([o.default], () => o.default.getCurrentUser()), j = c.ZP.canUseCollectibles(y), k = (0, C.Iw)(t), {
      isOrbExclusive: T
    } = (0, h.Ip)({
      product: t,
      isPremiumUser: j,
      tab: v,
      hasDiscountOffer: null != k
    }), L = (0, g.Yq)(t.skuId), I = (null == O ? true : O.skuId) === _.bu && (0, g.WW)(t.skuId);
    if (n === p.Zh.NONE) return null;
    let P = null;
    return (n === p.Zh.NEW ? P = m.intl.string(m.t.y2b7CA) : n === p.Zh.ORBS_EXCLUSIVE ? P = m.intl.string(m.t["0TmQRE"]) : n === p.Zh.NEW_COLOR_VARIANT && (P = m.intl.string(m.t.S6kE9v)), null == P && (x || S || !L ? T ? P = m.intl.string(m.t["0TmQRE"]) : I && (P = m.intl.string(m.t.S6kE9v)) : P = m.intl.string(m.t.y2b7CA)), null == P) ? null : (0, r.jsx)(a.IGR, {
      text: P,
      disableColor: true,
      className: s()(l, b.productCardBadge)
    })
  },
  v = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: l
    } = e, s = (0, p.LJ)(t);
    return null == s ? null : (0, r.jsx)(E, {
      product: s,
      badgeOverride: n,
      className: l
    })
  }