/** Chunk was on web.js **/
/** chunk id: 245068, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk550111 = require("./550111.jsx"),
  Chunk331402 = require("./331402.jsx"),
  Chunk442759 = require("./442759.js"),
  Chunk940622 = require("./940622.js"),
  Chunk929283 = require("./929283.jsx"),
  Chunk650906 = require("./650906.js"),
  Chunk180171 = require("./180171.js"),
  Chunk989099 = require("./989099.js");
let E = Chunk64700.memo(function(e) {
  let {
    product: t,
    isHighlighted: n,
    user: i,
    forCollectedModal: a
  } = e, {
    firstProfileEffect: E,
    firstAvatarDecoration: b,
    firstNameplate: y
  } = (0, f.f5)(t), O = (0, p.br)(b), A = (0, c.Ay)(), v = (0, o.qB)(A), S = null != y && null != b && null != E, I = S ? l._3J.SIZE_72 : l._3J.SIZE_80, T = v ? g : m;
  return (0, r.jsxs)("div", {
    className: s()(h.kL, {
      [h.ib]: !S,
      [h.c$]: S
    }),
    children: [null != E && (0, r.jsx)("div", {
      className: h.NM,
      children: (0, r.jsx)(d.A, {
        isHighlighted: n,
        skuId: E.skuId,
        removeSetHeight: true,
        delayProfileEffectIntro: a,
        withScaleAnimation: a
      })
    }), S && (0, r.jsx)("div", {
      className: h.M4,
      children: (0, r.jsx)(u.A, {
        user: i,
        nameplate: y,
        isHighlighted: n,
        showPlaceholderUser: !n,
        pendingAvatarDecoration: O
      })
    }), null != O && (0, r.jsx)("div", {
      className: h._P,
      children: (0, r.jsx)(_.i, {
        item: O,
        user: i,
        avatarSize: I,
        isHighlighted: n,
        avatarPlaceholderSrc: T,
        className: h.my
      })
    })]
  })
})