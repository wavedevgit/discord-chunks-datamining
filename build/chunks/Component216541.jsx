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
  Chunk881937 = require("./881937.js"),
  Chunk63243 = require("./63243.js"),
  Chunk244488 = require("./244488.js");
let E = Chunk473749.memo(function(e) {
  let {
    product: t,
    isPurchased: n,
    isHighlighted: i,
    user: a,
    forCollectedModal: E
  } = e, {
    firstProfileEffect: b,
    firstAvatarDecoration: y,
    firstNameplate: O
  } = (0, f.Rj)(t), v = (0, p.O1)(y), S = (0, c.ZP)(), I = (0, s.ap)(S), T = null != O && null != y && null != b, C = T ? l.EFr.SIZE_72 : l.EFr.SIZE_80, A = I ? g : h;
  return (0, r.jsxs)("div", {
    className: o()(m.container, {
      [m.twoItemBundle]: !T,
      [m.threeItemBundle]: T
    }),
    children: [null != b && (0, r.jsx)("div", {
      className: m.profileEffectShopPreview,
      children: (0, r.jsx)(d.Z, {
        isHighlighted: i,
        skuId: b.skuId,
        isPurchased: n,
        removeSetHeight: true,
        delayProfileEffectIntro: E,
        withScaleAnimation: E
      })
    }), T && (0, r.jsx)("div", {
      className: m.nameplatePreview,
      children: (0, r.jsx)(u.Z, {
        user: a,
        nameplate: O,
        isHighlighted: i,
        isPurchased: n,
        showPlaceholderUser: !i,
        pendingAvatarDecoration: v
      })
    }), null != v && (0, r.jsx)("div", {
      className: m.avatarDecorationPreview,
      children: (0, r.jsx)(_.R, {
        item: v,
        user: a,
        avatarSize: C,
        isPurchased: n,
        isHighlighted: i,
        avatarPlaceholderSrc: A,
        className: m.avatar
      })
    })]
  })
})