/** Chunk was on 96887 **/
/** chunk id: 216541, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  d: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk876917 = require("./876917.jsx"),
  Chunk328456 = require("./328456.js"),
  Chunk619899 = require("./619899.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk912397 = require("./912397.js"),
  Chunk63243 = require("./63243.js"),
  Chunk244488 = require("./244488.js");
let m = e => {
  let {
    product: t,
    isPurchased: r,
    isHighlighted: n,
    user: m,
    forCollectedModal: g,
    containerClassName: y,
    profileEffectClassName: P,
    avatarDecorationClassName: b
  } = e, {
    firstProfileEffect: w,
    firstAvatarDecoration: O
  } = (0, d.Rj)(t), j = (0, u.O1)(O), _ = (0, l.ZP)(), E = (0, s.ap)(_);
  return (0, a.jsxs)("div", {
    className: i()(v.container, y),
    children: [null != w ? (0, a.jsx)("div", {
      className: i()(v.profileEffectShopPreview, P),
      children: (0, a.jsx)(c.Z, {
        isHovering: n,
        profileEffectId: w.id,
        isPurchased: r,
        forCollectedModal: g,
        removeSetHeight: true
      })
    }) : null, null != j ? (0, a.jsx)("div", {
      className: i()(v.avatarDecorationPreview, b),
      children: (0, a.jsx)(f.R, {
        item: j,
        user: m,
        avatarSize: o.EFr.SIZE_120,
        isPurchased: r,
        isHighlighted: n,
        avatarPlaceholderSrc: E ? h : p
      })
    }) : null]
  })
}