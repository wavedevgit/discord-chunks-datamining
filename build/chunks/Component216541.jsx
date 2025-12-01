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
  Chunk881937 = require("./881937.js"),
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
    firstAvatarDecoration: S,
    firstNameplate: I
  } = (0, f.Rj)(t), T = (0, _.O1)(S), A = (0, c.ZP)(), C = (0, s.ap)(A), N = i.useMemo(() => (0, p.L)(t), [t]), P = i.useMemo(() => null != I ? l.EFr.SIZE_96 : l.EFr.SIZE_120, [I]), R = i.useMemo(() => C ? E : g, [C]);
  return (0, r.jsxs)("div", {
    className: o()(h.container, N ? h.threeItemBundle : null, O),
    children: [(0, r.jsx)("div", {
      className: o()(h.profileEffectShopPreview, y ? h.profileEffectShopPreviewCollectedModal : null),
      children: null != v && (0, r.jsx)(d.Z, {
        isHighlighted: a,
        skuId: v.skuId,
        isPurchased: n,
        removeSetHeight: true,
        withScaleAnimation: y,
        delayProfileEffectIntro: y
      })
    }), (0, r.jsx)("div", {
      className: o()(h.avatarDecorationPreview, y ? h.avatarDecorationPreviewCollectedModal : null, N ? h.avatarDecorationDropShadow : null),
      children: (0, r.jsx)(m.R, {
        item: T,
        user: b,
        avatarSize: P,
        isPurchased: n,
        isHighlighted: a,
        avatarPlaceholderSrc: R,
        className: h.avatar
      })
    }), N && (0, r.jsx)("div", {
      className: o()(h.nameplatePreview, y ? h.nameplatePreviewCollectedModal : null),
      children: (0, r.jsx)(u.Z, {
        user: b,
        nameplate: I,
        isHighlighted: a,
        isPurchased: n,
        nameplatePreviewSize: "default",
        showPlaceholderUser: !a,
        pendingAvatarDecoration: T
      })
    })]
  })
})