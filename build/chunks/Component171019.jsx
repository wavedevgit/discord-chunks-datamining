/** Chunk was on 87965 **/
/** chunk id: 171019, original params: e,t,r (module,exports,require) **/
"use strict";
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
    isPremiumSection: r,
    canUsePremiumCollectibles: u,
    skuId: p
  } = e, _ = (0, s.Yq)(p), m = (0, a.e7)([o.Z], () => {
    let e = o.Z.getProduct(p);
    return (0, s.G1)(e)
  });
  return t || r && u ? null : _ ? (0, n.jsx)(l.lBU, {
    className: d.newBadge,
    text: (0, n.jsxs)("div", {
      className: d.newBadgeText,
      children: [(0, n.jsx)(l.mBM, {
        size: "xxs",
        color: "currentColor"
      }), c.intl.string(c.t.y2b7CA)]
    })
  }) : (0, n.jsx)(l.G2e, {
    icon: m ? () => (0, n.jsx)(l.SrA, {
      size: "custom",
      color: "currentColor",
      width: 14,
      height: 14
    }) : () => (0, n.jsx)(l.mBM, {
      size: "xxs",
      color: "currentColor"
    }),
    color: i.Z.BACKGROUND_ACCENT,
    className: d.iconBadge
  })
}