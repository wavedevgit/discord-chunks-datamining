/** Chunk was on 79589 **/
/** chunk id: 171019, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71414 = require("./71414.js");
let u = e => {
  let {
    skuId: t,
    canUsePremiumCollectibles: n,
    isPurchaseSection: u,
    isPremiumSection: m
  } = e, p = (0, o.Yq)(t), h = (0, i.e7)([s.Z], () => {
    let e = s.Z.getProduct(t);
    return (0, o.G1)(e)
  });
  return u || m && n ? null : p ? (0, r.jsx)(a.lBU, {
    className: d.newBadge,
    text: (0, r.jsxs)("div", {
      className: d.newBadgeText,
      children: [(0, r.jsx)(a.mBM, {
        size: "xxs",
        color: "currentColor"
      }), c.intl.string(c.t.y2b7CA)]
    })
  }) : (0, r.jsx)(a.G2e, {
    icon: h ? () => (0, r.jsx)(a.SrA, {
      size: "custom",
      color: "currentColor",
      width: 14,
      height: 14
    }) : () => (0, r.jsx)(a.mBM, {
      size: "xxs",
      color: "currentColor"
    }),
    color: l.Z.colors.BACKGROUND_ACCENT.css,
    className: d.iconBadge
  })
}