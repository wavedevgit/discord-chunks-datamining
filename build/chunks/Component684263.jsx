/** Chunk was on 75393 **/
/** chunk id: 684263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
let b = Chunk473749.memo(function(e) {
  let {
    product: t,
    isPurchased: n,
    isHighlighted: l,
    user: r
  } = e, {
    firstProfileEffect: b,
    firstAvatarDecoration: v,
    firstNameplate: j
  } = (0, m.Rj)(t), _ = (0, p.O1)(v), y = (0, c.ZP)(), C = (0, s.ap)(y), S = null != j && null != v && null != b, E = S ? o.EFr.SIZE_72 : o.EFr.SIZE_80;
  return (0, a.jsxs)("div", {
    className: i()(x.container, {
      [x.twoItemBundle]: !S,
      [x.threeItemBundle]: S
    }),
    children: [null != b && (0, a.jsx)("div", {
      className: x.profileEffectShopPreview,
      children: (0, a.jsx)(u.Z, {
        isHighlighted: l,
        skuId: b.skuId,
        isPurchased: n,
        removeSetHeight: true
      })
    }), S && (0, a.jsx)("div", {
      className: x.nameplatePreview,
      children: (0, a.jsx)(d.Z, {
        user: r,
        nameplate: j,
        isHighlighted: l,
        isPurchased: n,
        showPlaceholderUser: !l,
        pendingAvatarDecoration: _
      })
    }), null != _ && (0, a.jsx)("div", {
      className: x.avatarDecorationPreview,
      children: (0, a.jsx)(h.R, {
        item: _,
        user: r,
        avatarSize: E,
        isPurchased: n,
        isHighlighted: l,
        avatarPlaceholderSrc: C ? g : f,
        className: x.avatar
      })
    })]
  })
})