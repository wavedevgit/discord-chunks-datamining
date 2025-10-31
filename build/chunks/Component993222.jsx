/** Chunk was on 45620 **/
/** chunk id: 993222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
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
      className: l,
      prioritizedCurrency: _
    } = e, {
      isPurchased: m,
      isPartiallyOwnedBundle: b
    } = (0, d.L)(t), v = (0, s.e7)([o.default], () => o.default.getCurrentUser()), E = c.ZP.canUseCollectibles(v), x = (0, p.Iw)(t), {
      isOrbExclusive: O
    } = (0, f.Ip)({
      product: t,
      isPremiumUser: E,
      prioritizedCurrency: _,
      hasDiscountOffer: null != x
    });
    if (n === g.Zh.NONE) return null;
    let S = null;
    return (n === g.Zh.NEW ? S = h.intl.string(h.t.y2b7CA) : n === g.Zh.ORBS_EXCLUSIVE ? S = h.intl.string(h.t["0TmQRG"]) : n === g.Zh.NEW_COLOR_VARIANT && (S = h.intl.string(h.t.S6kE9h)), null == S && (!b && !m && (0, u.Yq)(t.skuId) ? S = h.intl.string(h.t.y2b7CA) : O && (S = h.intl.string(h.t["0TmQRG"]))), null == S) ? null : (0, r.jsx)(a.IGR, {
      text: S,
      disableColor: true,
      className: i()(l, C.productCardBadge)
    })
  },
  m = e => {
    let {
      skuId: t,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: i
    } = e, s = (0, g.LJ)(t);
    return null == s ? null : (0, r.jsx)(_, {
      product: s,
      badgeOverride: n,
      className: l,
      prioritizedCurrency: i
    })
  }