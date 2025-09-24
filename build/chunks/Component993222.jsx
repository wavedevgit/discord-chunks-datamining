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
  Chunk884697 = require("./884697.js"),
  Chunk724994 = require("./724994.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944525 = require("./944525.js");
let C = e => {
  let {
    product: t,
    config: n
  } = e, {
    isPurchased: C,
    isPartiallyOwnedBundle: _
  } = (0, d.L)(t), m = (0, a.e7)([c.Z], () => c.Z.getCategoryForProduct(t.skuId)), b = (0, a.e7)([s.default], () => s.default.getCurrentUser()), E = o.ZP.canUseCollectibles(b), S = (0, g.Iw)(t), {
    isOrbExclusive: x
  } = (0, p.Ip)({
    product: t,
    isPremiumUser: E,
    tab: n.tab,
    hasDiscountOffer: null != S
  }), v = (0, u.Yq)(t.skuId), O = (null == m ? true : m.skuId) === l.T.ANIME_V3 && (0, u.WW)(t.skuId);
  return _ || C || !v ? x ? (0, r.jsx)(i.IGR, {
    text: f.intl.string(f.t["0TmQRE"]),
    disableColor: true,
    className: h.productCardBadge
  }) : O ? (0, r.jsx)(i.IGR, {
    text: f.intl.string(f.t.S6kE9v),
    disableColor: true,
    className: h.productCardBadge
  }) : null : (0, r.jsx)(i.IGR, {
    text: f.intl.string(f.t.y2b7CA),
    disableColor: true,
    className: h.productCardBadge
  })
}