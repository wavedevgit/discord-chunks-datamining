/** Chunk was on 45620 **/
/** chunk id: 993222, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
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
  Chunk786040 = require("./786040.jsx"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944525 = require("./944525.js");
let m = e => {
    let {
      product: t
    } = e, n = (0, c.Nd)(), g = null == n ? true : n.tab, {
      isPurchased: m,
      isPartiallyOwnedBundle: b
    } = (0, d.L)(t), E = (0, l.e7)([o.Z], () => o.Z.getCategoryForProduct(t.skuId)), S = (0, l.e7)([a.default], () => a.default.getCurrentUser()), v = i.ZP.canUseCollectibles(S), x = (0, p.Iw)(t), {
      isOrbExclusive: O
    } = (0, f.Ip)({
      product: t,
      isPremiumUser: v,
      tab: g,
      hasDiscountOffer: null != x
    }), y = (0, u.Yq)(t.skuId), T = (null == E ? true : E.skuId) === C.bu && (0, u.WW)(t.skuId);
    return b || m || !y ? O ? (0, r.jsx)(s.IGR, {
      text: h.intl.string(h.t["0TmQRE"]),
      disableColor: true,
      className: _.productCardBadge
    }) : T ? (0, r.jsx)(s.IGR, {
      text: h.intl.string(h.t.S6kE9v),
      disableColor: true,
      className: _.productCardBadge
    }) : null : (0, r.jsx)(s.IGR, {
      text: h.intl.string(h.t.y2b7CA),
      disableColor: true,
      className: _.productCardBadge
    })
  },
  b = e => {
    let {
      skuId: t
    } = e, n = (0, g.LJ)(t);
    return null == n ? null : (0, r.jsx)(m, {
      product: n
    })
  }