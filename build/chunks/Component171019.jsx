/** Chunk was on 93210 **/
/** chunk id: 171019, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71414 = require("./71414.js");
let u = e => {
  let {
    isPurchaseSection: t,
    isPremiumSection: n,
    canUsePremiumCollectibles: u,
    skuId: p
  } = e, _ = (0, o.Yq)(p), h = (0, l.e7)([s.Z], () => {
    let e = s.Z.getProduct(p);
    return (0, o.G1)(e)
  });
  return t || n && u ? null : _ ? (0, i.jsx)(a.lBU, {
    className: d.newBadge,
    text: (0, i.jsxs)("div", {
      className: d.newBadgeText,
      children: [(0, i.jsx)(a.mBM, {
        size: "xxs",
        color: "currentColor"
      }), c.intl.string(c.t.y2b7CA)]
    })
  }) : (0, i.jsx)(a.G2e, {
    icon: h ? () => (0, i.jsx)(a.SrA, {
      size: "custom",
      color: "currentColor",
      width: 14,
      height: 14
    }) : () => (0, i.jsx)(a.mBM, {
      size: "xxs",
      color: "currentColor"
    }),
    color: r.Z.BACKGROUND_ACCENT,
    className: d.iconBadge
  })
}