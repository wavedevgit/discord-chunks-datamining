/** Chunk was on 93886 **/
/** chunk id: 684263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
let m = Chunk473749.memo(function(e) {
  let {
    product: t,
    isPurchased: n,
    isHighlighted: a,
    user: i
  } = e, {
    firstProfileEffect: m,
    firstAvatarDecoration: b,
    firstNameplate: x
  } = (0, _.Rj)(t), y = (0, p.O1)(b), D = (0, c.ZP)(), w = (0, o.ap)(D), C = null != x && null != b && null != m, O = C ? s.EFr.SIZE_72 : s.EFr.SIZE_80;
  return (0, r.jsxs)("div", {
    className: l()(v.container, {
      [v.twoItemBundle]: !C,
      [v.threeItemBundle]: C
    }),
    children: [null != m && (0, r.jsx)("div", {
      className: v.profileEffectShopPreview,
      children: (0, r.jsx)(u.Z, {
        isHighlighted: a,
        skuId: m.skuId,
        isPurchased: n,
        removeSetHeight: true
      })
    }), C && (0, r.jsx)("div", {
      className: v.nameplatePreview,
      children: (0, r.jsx)(d.Z, {
        user: i,
        nameplate: x,
        isHighlighted: a,
        isPurchased: n,
        showPlaceholderUser: !a,
        pendingAvatarDecoration: y
      })
    }), null != y && (0, r.jsx)("div", {
      className: v.avatarDecorationPreview,
      children: (0, r.jsx)(f.R, {
        item: y,
        user: i,
        avatarSize: O,
        isPurchased: n,
        isHighlighted: a,
        avatarPlaceholderSrc: w ? g : h,
        className: v.avatar
      })
    })]
  })
})