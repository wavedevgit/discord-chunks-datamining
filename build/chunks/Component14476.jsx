/** Chunk was on 54400 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk410030 = require("./410030.js"),
  Chunk699758 = require("./699758.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk466679 = require("./466679.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk632939 = require("./632939.js");
let f = e => {
  let {
    skuId: t,
    assetId: n,
    user: l,
    claimed: f,
    onSelect: m,
    productName: j,
    a11yLabel: L,
    selectedSkuId: b,
    category: g
  } = e, S = i.useRef(null), y = (0, d.Z)(S), v = (0, x.m)(S), E = !f && (y || v), O = (0, c.ZP)(), P = (0, o.wj)(O), M = {
    type: s.Z.AVATAR_DECORATION,
    label: L,
    asset: n
  };
  return (0, r.jsx)(C.tEY, {
    children: (0, r.jsxs)(C.kL8, {
      ref: S,
      "aria-label": null != j ? j : "",
      onClick: () => {
        null == t || null == m || f || m(t)
      },
      className: a()(P ? h.shopCardDark : h.shopCard, {
        [h.shopCardAnimation]: !f,
        [P ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: E,
        [h.shopCardSelected]: b === t
      }),
      children: [(0, r.jsx)("div", {
        className: a()(h.preview, {
          [h.previewTrick]: g === u.KN.Trick,
          [h.previewTreat]: g === u.KN.Treat,
          [h.shopCardClaimed]: f
        }),
        children: (0, r.jsx)(p.R, {
          item: M,
          user: l,
          isHighlighted: E,
          avatarSize: C.EFr.SIZE_120,
          isPurchased: f
        })
      }), f && (0, r.jsx)(C.dz2, {
        size: "custom",
        width: 48,
        height: 48,
        color: C.TVs.colors.WHITE,
        className: h.claimedIcon
      }), (0, r.jsxs)("div", {
        className: h.productName,
        children: [(0, r.jsx)(C.X6q, {
          variant: "text-lg/bold",
          children: j
        }), (0, r.jsx)(C.Text, {
          variant: "text-md/normal",
          children: f ? _.intl.string(_.t["6cfuDg"]) : _.intl.string(_.t.QQsaCQ)
        })]
      })]
    })
  })
}