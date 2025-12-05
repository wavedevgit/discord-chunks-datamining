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
    isHighlighted: i,
    user: a
  } = e, {
    firstProfileEffect: m,
    firstAvatarDecoration: b,
    firstNameplate: x
  } = (0, p.Rj)(t), D = (0, f.O1)(b), O = (0, c.ZP)(), y = (0, o.ap)(O), C = null != x && null != b && null != m, w = C ? s.EFr.SIZE_72 : s.EFr.SIZE_80;
  return (0, r.jsxs)("div", {
    className: l()(_.container, {
      [_.twoItemBundle]: !C,
      [_.threeItemBundle]: C
    }),
    children: [null != m && (0, r.jsx)("div", {
      className: _.profileEffectShopPreview,
      children: (0, r.jsx)(u.Z, {
        isHighlighted: i,
        skuId: m.skuId,
        isPurchased: n,
        removeSetHeight: true
      })
    }), C && (0, r.jsx)("div", {
      className: _.nameplatePreview,
      children: (0, r.jsx)(d.Z, {
        user: a,
        nameplate: x,
        isHighlighted: i,
        isPurchased: n,
        showPlaceholderUser: !i,
        pendingAvatarDecoration: D
      })
    }), null != D && (0, r.jsx)("div", {
      className: _.avatarDecorationPreview,
      children: (0, r.jsx)(v.R, {
        item: D,
        user: a,
        avatarSize: w,
        isPurchased: n,
        isHighlighted: i,
        avatarPlaceholderSrc: y ? g : h,
        className: _.avatar
      })
    })]
  })
})