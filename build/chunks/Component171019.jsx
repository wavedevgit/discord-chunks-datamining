/** Chunk was on 79589 **/
/** chunk id: 171019, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk426602 = require("./426602.js");
let m = e => {
  let {
    skuId: t,
    canUsePremiumCollectibles: n,
    isPurchaseSection: m,
    isPremiumSection: p
  } = e, f = (0, c.Yq)(t), v = (0, i.e7)([s.Z, o.Z], () => {
    let e = s.Z.getProduct(t),
      n = o.Z.getPurchase(t);
    return null != n ? (0, c.qS)(n) : (0, c.G1)(e)
  });
  return m || p && n ? null : f ? (0, r.jsx)(a.lBU, {
    className: u.newBadge,
    text: (0, r.jsxs)("div", {
      className: u.newBadgeText,
      children: [(0, r.jsx)(a.mBM, {
        size: "xxs",
        color: "currentColor"
      }), d.intl.string(d.t.y2b7CA)]
    })
  }) : (0, r.jsx)(a.G2e, {
    icon: v ? () => (0, r.jsx)(a.SrA, {
      size: "custom",
      color: "currentColor",
      width: 14,
      height: 14
    }) : () => (0, r.jsx)(a.mBM, {
      size: "xxs",
      color: "currentColor"
    }),
    color: l.Z.colors.BACKGROUND_ACCENT.css,
    className: u.iconBadge
  })
}