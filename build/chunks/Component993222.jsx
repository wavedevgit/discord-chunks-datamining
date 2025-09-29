/** Chunk was on 45620 **/
/** chunk id: 993222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk180650 = require("./180650.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk597688 = require("./597688.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk724994 = require("./724994.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk809854 = require("./809854.js");
let C = e => {
  let {
    product: t
  } = e, n = (0, u.Nd)(), C = null == n ? true : n.tab, {
    isPurchased: m,
    isPartiallyOwnedBundle: b
  } = (0, g.L)(t), E = (0, i.e7)([c.Z], () => c.Z.getCategoryForProduct(t.skuId)), S = (0, i.e7)([s.default], () => s.default.getCurrentUser()), v = o.ZP.canUseCollectibles(S), x = (0, p.Iw)(t), {
    isOrbExclusive: O
  } = (0, f.Ip)({
    product: t,
    isPremiumUser: v,
    tab: C,
    hasDiscountOffer: null != x
  }), T = (0, d.Yq)(t.skuId), y = (null == E ? true : E.skuId) === l.T.ANIME_V3 && (0, d.WW)(t.skuId);
  return b || m || !T ? O ? (0, r.jsx)(a.IGR, {
    text: h.intl.string(h.t["0TmQRE"]),
    disableColor: true,
    className: _.productCardBadge
  }) : y ? (0, r.jsx)(a.IGR, {
    text: h.intl.string(h.t.S6kE9v),
    disableColor: true,
    className: _.productCardBadge
  }) : null : (0, r.jsx)(a.IGR, {
    text: h.intl.string(h.t.y2b7CA),
    disableColor: true,
    className: _.productCardBadge
  })
}