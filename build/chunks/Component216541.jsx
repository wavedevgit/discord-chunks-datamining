/** Chunk was on 96887 **/
/** chunk id: 216541, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  d: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
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
let g = e => {
  let {
    product: t,
    isPurchased: r,
    isHighlighted: i,
    user: g,
    forCollectedModal: w,
    containerClassName: y
  } = e, {
    firstProfileEffect: b,
    firstAvatarDecoration: _,
    firstNameplate: O
  } = (0, d.Rj)(t), j = (0, v.O1)(_), E = (0, s.ZP)(), x = (0, l.ap)(E), S = (0, u.L)(t);
  return (0, a.jsxs)("div", {
    className: n()(h.container, S ? h.threeItemBundle : null, y),
    children: [(0, a.jsx)("div", {
      className: n()(h.profileEffectShopPreview, w ? h.profileEffectShopPreviewCollectedModal : null),
      children: (0, a.jsx)(c.Z, {
        isHovering: i,
        profileEffectId: b.id,
        isPurchased: r,
        forCollectedModal: w,
        removeSetHeight: true
      })
    }), (0, a.jsx)("div", {
      className: n()(h.avatarDecorationPreview, w ? h.avatarDecorationPreviewCollectedModal : null, S ? h.avatarDecorationDropShadow : null),
      children: (0, a.jsx)(f.R, {
        item: j,
        user: g,
        avatarSize: null != O ? o.EFr.SIZE_96 : o.EFr.SIZE_120,
        isPurchased: r,
        isHighlighted: i,
        avatarPlaceholderSrc: x ? P : m
      })
    }), S && (0, a.jsx)("div", {
      className: n()(h.nameplatePreview, w ? h.nameplatePreviewCollectedModal : null),
      children: (0, a.jsx)(p.Z, {
        user: g,
        nameplate: O,
        isHighlighted: i,
        isPurchased: r,
        nameplatePreviewSize: "default",
        showPlaceholderUser: !i,
        avatarDecorationOverride: null != j ? j : true
      })
    })]
  })
}