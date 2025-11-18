/** Chunk was on web.js **/
/** chunk id: 216541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => b
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
  Chunk330349 = require("./330349.js"),
  Chunk619899 = require("./619899.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk127782 = require("./127782.js"),
  Chunk63243 = require("./63243.js"),
  Chunk244488 = require("./244488.js");
let b = Chunk473749.memo(function(e) {
  let {
    product: t,
    isPurchased: n,
    isHighlighted: a,
    user: b,
    forCollectedModal: y,
    containerClassName: O
  } = e, {
    firstProfileEffect: v,
    firstAvatarDecoration: I,
    firstNameplate: T
  } = (0, f.Rj)(t), S = (0, p.O1)(I), A = (0, c.ZP)(), C = (0, s.ap)(A), N = i.useMemo(() => (0, _.L)(t), [t]), R = i.useMemo(() => null != T ? l.EFr.SIZE_96 : l.EFr.SIZE_120, [T]), P = i.useMemo(() => C ? E : g, [C]);
  return (0, r.jsxs)("div", {
    className: o()(m.container, N ? m.threeItemBundle : null, O),
    children: [(0, r.jsx)("div", {
      className: o()(m.profileEffectShopPreview, y ? m.profileEffectShopPreviewCollectedModal : null),
      children: null != v && (0, r.jsx)(d.Z, {
        isHighlighted: a,
        skuId: v.skuId,
        isPurchased: n,
        forCollectedModal: y,
        removeSetHeight: true
      })
    }), (0, r.jsx)("div", {
      className: o()(m.avatarDecorationPreview, y ? m.avatarDecorationPreviewCollectedModal : null, N ? m.avatarDecorationDropShadow : null),
      children: (0, r.jsx)(h.R, {
        item: S,
        user: b,
        avatarSize: R,
        isPurchased: n,
        isHighlighted: a,
        avatarPlaceholderSrc: P,
        className: m.avatar
      })
    }), N && (0, r.jsx)("div", {
      className: o()(m.nameplatePreview, y ? m.nameplatePreviewCollectedModal : null),
      children: (0, r.jsx)(u.Z, {
        user: b,
        nameplate: T,
        isHighlighted: a,
        isPurchased: n,
        nameplatePreviewSize: "default",
        showPlaceholderUser: !a,
        pendingAvatarDecoration: S
      })
    })]
  })
})