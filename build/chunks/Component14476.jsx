/** Chunk was on 23404 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk104505 = require("./104505.js"),
  Chunk699758 = require("./699758.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk632939 = require("./632939.js");
let f = e => {
  let {
    skuId: t,
    assetId: n,
    user: a,
    claimed: f,
    onSelect: m,
    productName: x,
    a11yLabel: g,
    selectedSkuId: j,
    category: b
  } = e, y = i.useRef(null), {
    isHoveringOrFocusing: L
  } = (0, c.Z)(y), S = !f && L, v = (0, C.ZP)(), w = (0, s.wj)(v), I = {
    type: o.Z.AVATAR_DECORATION,
    label: g,
    asset: n
  };
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)(d.kL8, {
      ref: y,
      "aria-label": null != x ? x : "",
      onClick: () => {
        null == t || null == m || f || m(t)
      },
      className: l()(w ? h.shopCardDark : h.shopCard, {
        [h.shopCardAnimation]: !f,
        [w ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: S,
        [h.shopCardSelected]: j === t
      }),
      children: [(0, r.jsx)("div", {
        className: l()(h.preview, {
          [h.previewTrick]: b === u.KN.Trick,
          [h.previewTreat]: b === u.KN.Treat,
          [h.shopCardClaimed]: f
        }),
        children: (0, r.jsx)(p.R, {
          item: I,
          user: a,
          isHighlighted: S,
          avatarSize: d.EFr.SIZE_120,
          isPurchased: f
        })
      }), f && (0, r.jsx)(d.dz2, {
        size: "custom",
        width: 48,
        height: 48,
        color: d.TVs.colors.WHITE,
        className: h.claimedIcon
      }), (0, r.jsxs)("div", {
        className: h.productName,
        children: [(0, r.jsx)(d.Heading, {
          variant: "text-md/bold",
          children: x
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          children: f ? _.intl.string(_.t["6cfuDg"]) : _.intl.string(_.t.QQsaCQ)
        })]
      })]
    })
  })
}