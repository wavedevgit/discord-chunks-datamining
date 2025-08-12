/** Chunk was on 96910 **/
/** chunk id: 216541, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  d: () => v
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
  Chunk656607 = require("./656607.js"),
  Chunk63243 = require("./63243.js"),
  Chunk244488 = require("./244488.js");
let v = e => {
  let {
    product: t,
    isPurchased: r,
    isHighlighted: a,
    user: v,
    forCollectedModal: m,
    containerClassName: _,
    profileEffectClassName: g,
    avatarDecorationClassName: O
  } = e, {
    firstProfileEffect: y,
    firstAvatarDecoration: C
  } = (0, u.Rj)(t), j = (0, d.O1)(C), P = (0, s.ZP)(), E = (0, l.ap)(P);
  return (0, n.jsxs)("div", {
    className: i()(b.container, _),
    children: [null != y ? (0, n.jsx)("div", {
      className: i()(b.profileEffectShopPreview, g),
      children: (0, n.jsx)(c.Z, {
        isHovering: a,
        profileEffectId: y.id,
        isPurchased: r,
        forCollectedModal: m,
        removeSetHeight: true
      })
    }) : null, null != j ? (0, n.jsx)("div", {
      className: i()(b.avatarDecorationPreview, O),
      children: (0, n.jsx)(p.R, {
        item: j,
        user: v,
        avatarSize: o.EFr.SIZE_120,
        isPurchased: r,
        isHighlighted: a,
        avatarPlaceholderSrc: E ? f : h
      })
    }) : null]
  })
}