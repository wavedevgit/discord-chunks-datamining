/** Chunk was on 79589 **/
/** chunk id: 171019, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71414 = require("./71414.js");
let d = e => {
  let {
    skuId: t,
    canUsePremiumCollectibles: r,
    isTryItOut: d,
    isPurchaseSection: m,
    isPremiumSection: p
  } = e, h = (0, o.Yq)(t), x = (0, l.e7)([a.Z], () => {
    let e = a.Z.getProduct(t);
    return (0, o.G1)(e)
  });
  return m || p && (r || d) ? null : h ? (0, n.jsx)(s.lBU, {
    className: u.newBadge,
    text: (0, n.jsxs)("div", {
      className: u.newBadgeText,
      children: [(0, n.jsx)(s.mBM, {
        size: "xxs",
        color: "currentColor"
      }), c.intl.string(c.t.y2b7CA)]
    })
  }) : (0, n.jsx)(s.G2e, {
    icon: x ? () => (0, n.jsx)(s.SrA, {
      size: "custom",
      color: "currentColor",
      width: 14,
      height: 14
    }) : () => (0, n.jsx)(s.mBM, {
      size: "xxs",
      color: "currentColor"
    }),
    color: i.Z.BACKGROUND_ACCENT,
    className: u.iconBadge
  })
}