/** Chunk was on 96887 **/
/** chunk id: 216541, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  d: () => P
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk876917 = require("./876917.jsx"),
  Chunk328456 = require("./328456.js"),
  Chunk330349 = require("./330349.js"),
  Chunk619899 = require("./619899.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk127782 = require("./127782.js"),
  Chunk63243 = require("./63243.js"),
  Chunk244488 = require("./244488.js");
let P = e => {
  let {
    product: t,
    isPurchased: r,
    isHighlighted: n,
    user: P,
    forCollectedModal: w,
    containerClassName: y
  } = e, {
    firstProfileEffect: b,
    firstAvatarDecoration: O,
    firstNameplate: _
  } = (0, d.Rj)(t), j = (0, f.O1)(O), E = (0, s.ZP)(), C = (0, l.ap)(E), x = (0, u.L)(t);
  return (0, a.jsxs)("div", {
    className: i()(h.container, x ? h.threeItemBundle : null, y),
    children: [(0, a.jsx)("div", {
      className: i()(h.profileEffectShopPreview, w ? h.profileEffectShopPreviewCollectedModal : null),
      children: null != b && (0, a.jsx)(c.Z, {
        isHighlighted: n,
        skuId: b.skuId,
        isPurchased: r,
        forCollectedModal: w,
        removeSetHeight: true
      })
    }), (0, a.jsx)("div", {
      className: i()(h.avatarDecorationPreview, w ? h.avatarDecorationPreviewCollectedModal : null, x ? h.avatarDecorationDropShadow : null),
      children: (0, a.jsx)(p.R, {
        item: j,
        user: P,
        avatarSize: null != _ ? o.EFr.SIZE_96 : o.EFr.SIZE_120,
        isPurchased: r,
        isHighlighted: n,
        avatarPlaceholderSrc: C ? g : m
      })
    }), x && (0, a.jsx)("div", {
      className: i()(h.nameplatePreview, w ? h.nameplatePreviewCollectedModal : null),
      children: (0, a.jsx)(v.Z, {
        user: P,
        nameplate: _,
        isHighlighted: n,
        isPurchased: r,
        nameplatePreviewSize: "default",
        showPlaceholderUser: !n,
        avatarDecorationOverride: null != j ? j : true
      })
    })]
  })
}