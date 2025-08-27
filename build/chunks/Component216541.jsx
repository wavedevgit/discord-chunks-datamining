/** Chunk was on web.js **/
/** chunk id: 216541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk876917 = require("./876917.jsx"),
  Chunk328456 = require("./328456.js"),
  Chunk330349 = require("./330349.js"),
  Chunk619899 = require("./619899.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk22267 = require("./22267.jsx"),
  Chunk881937 = require("./881937.js"),
  Chunk63243 = require("./63243.js"),
  Chunk244488 = require("./244488.js");
let E = e => {
  let {
    product: t,
    isPurchased: n,
    isHighlighted: i,
    user: E,
    forCollectedModal: b,
    containerClassName: y
  } = e, {
    firstProfileEffect: O,
    firstAvatarDecoration: v,
    firstNameplate: I
  } = (0, u.Rj)(t), T = (0, f.O1)(v), S = (0, l.ZP)(), A = (0, o.ap)(S), C = (0, d.L)(t);
  return (0, r.jsxs)("div", {
    className: a()(h.container, C ? h.threeItemBundle : null, y),
    children: [(0, r.jsx)("div", {
      className: a()(h.profileEffectShopPreview, b ? h.profileEffectShopPreviewCollectedModal : null),
      children: (0, r.jsx)(c.Z, {
        isHovering: i,
        profileEffectId: O.id,
        isPurchased: n,
        forCollectedModal: b,
        removeSetHeight: true
      })
    }), (0, r.jsx)("div", {
      className: a()(h.avatarDecorationPreview, b ? h.avatarDecorationPreviewCollectedModal : null, C ? h.avatarDecorationDropShadow : null),
      children: (0, r.jsx)(_.R, {
        item: T,
        user: E,
        avatarSize: null != I ? s.EFr.SIZE_96 : s.EFr.SIZE_120,
        isPurchased: n,
        isHighlighted: i,
        avatarPlaceholderSrc: A ? g : m
      })
    }), C && (0, r.jsx)("div", {
      className: a()(h.nameplatePreview, b ? h.nameplatePreviewCollectedModal : null),
      children: (0, r.jsx)(p.Z, {
        user: E,
        nameplate: I,
        isHighlighted: i,
        isPurchased: n,
        nameplatePreviewSize: "default",
        showPlaceholderUser: !i,
        avatarDecorationOverride: null != T ? T : true
      })
    })]
  })
}