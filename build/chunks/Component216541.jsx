/** Chunk was on web.js **/
/** chunk id: 216541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk566697 = require("./566697.jsx"),
  Chunk876917 = require("./876917.jsx"),
  Chunk328456 = require("./328456.js"),
  Chunk619899 = require("./619899.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk235809 = require("./235809.js"),
  Chunk63243 = require("./63243.js"),
  Chunk244488 = require("./244488.js");
let E = Chunk473749.memo(function(e) {
  let {
    product: t,
    isHighlighted: n,
    user: i,
    forCollectedModal: a
  } = e, {
    firstProfileEffect: E,
    firstAvatarDecoration: b,
    firstNameplate: y
  } = (0, f.Rj)(t), O = (0, p.O1)(b), v = (0, c.ZP)(), S = (0, s.ap)(v), I = null != y && null != b && null != E, T = I ? l.EFr.SIZE_72 : l.EFr.SIZE_80, C = S ? g : h;
  return (0, r.jsxs)("div", {
    className: o()(m.container, {
      [m.twoItemBundle]: !I,
      [m.threeItemBundle]: I
    }),
    children: [null != E && (0, r.jsx)("div", {
      className: m.profileEffectShopPreview,
      children: (0, r.jsx)(d.Z, {
        isHighlighted: n,
        skuId: E.skuId,
        removeSetHeight: true,
        delayProfileEffectIntro: a,
        withScaleAnimation: a
      })
    }), I && (0, r.jsx)("div", {
      className: m.nameplatePreview,
      children: (0, r.jsx)(u.Z, {
        user: i,
        nameplate: y,
        isHighlighted: n,
        showPlaceholderUser: !n,
        pendingAvatarDecoration: O
      })
    }), null != O && (0, r.jsx)("div", {
      className: m.avatarDecorationPreview,
      children: (0, r.jsx)(_.R, {
        item: O,
        user: i,
        avatarSize: T,
        isHighlighted: n,
        avatarPlaceholderSrc: C,
        className: m.avatar
      })
    })]
  })
})