/** Chunk was on 45620 **/
/** chunk id: 993222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk597688 = require("./597688.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk724994 = require("./724994.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk809854 = require("./809854.js");
let h = e => {
  let {
    product: t
  } = e, n = (0, c.Nd)(), h = null == n ? true : n.tab, {
    isPurchased: m,
    isPartiallyOwnedBundle: b
  } = (0, d.L)(t), E = (0, l.e7)([o.Z], () => o.Z.getCategoryForProduct(t.skuId)), v = (0, l.e7)([i.default], () => i.default.getCurrentUser()), S = s.ZP.canUseCollectibles(v), x = (0, g.Iw)(t), {
    isOrbExclusive: O
  } = (0, p.Ip)({
    product: t,
    isPremiumUser: S,
    tab: h,
    hasDiscountOffer: null != x
  }), T = (0, u.Yq)(t.skuId), y = (null == E ? true : E.skuId) === f.bu && (0, u.WW)(t.skuId);
  return b || m || !T ? O ? (0, r.jsx)(a.IGR, {
    text: C.intl.string(C.t["0TmQRE"]),
    disableColor: true,
    className: _.productCardBadge
  }) : y ? (0, r.jsx)(a.IGR, {
    text: C.intl.string(C.t.S6kE9v),
    disableColor: true,
    className: _.productCardBadge
  }) : null : (0, r.jsx)(a.IGR, {
    text: C.intl.string(C.t.y2b7CA),
    disableColor: true,
    className: _.productCardBadge
  })
}