/** Chunk was on 45620 **/
/** chunk id: 684263, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  U: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk566697 = require("./566697.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk328456 = require("./328456.js"),
  Chunk619899 = require("./619899.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk689157 = require("./689157.js"),
  Chunk63243 = require("./63243.js"),
  Chunk244488 = require("./244488.js");
let m = Chunk647438.memo(function(e) {
  let {
    product: t,
    isPurchased: n,
    isHighlighted: l,
    user: i
  } = e, {
    firstProfileEffect: m,
    firstAvatarDecoration: b,
    firstNameplate: v
  } = (0, g.Rj)(t), E = (0, p.O1)(b), x = (0, c.ZP)(), O = (0, s.ap)(x), S = null != v && null != b && null != m, y = S ? o.EFr.SIZE_80 : o.EFr.SIZE_96;
  return (0, r.jsxs)("div", {
    className: a()(h.container, {
      [h.twoItemBundle]: !S,
      [h.threeItemBundle]: S
    }),
    children: [null != m && (0, r.jsx)("div", {
      className: h.profileEffectShopPreview,
      children: (0, r.jsx)(d.Z, {
        isHighlighted: l,
        skuId: m.skuId,
        isPurchased: n,
        removeSetHeight: true
      })
    }), null != E && (0, r.jsx)("div", {
      className: h.avatarDecorationPreview,
      children: (0, r.jsx)(f.R, {
        item: E,
        user: i,
        avatarSize: y,
        isPurchased: n,
        isHighlighted: l,
        avatarPlaceholderSrc: O ? _ : C,
        className: h.avatar
      })
    }), S && (0, r.jsx)("div", {
      className: h.nameplatePreview,
      children: (0, r.jsx)(u.Z, {
        user: i,
        nameplate: v,
        isHighlighted: l,
        isPurchased: n,
        nameplatePreviewSize: "default",
        showPlaceholderUser: !l,
        avatarDecorationOverride: null != E ? E : true
      })
    })]
  })
})