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
    user: l,
    claimed: f,
    onSelect: _,
    productName: m,
    a11yLabel: j,
    selectedSkuId: g,
    category: b
  } = e, y = i.useRef(null), {
    isHoveringOrFocusing: L
  } = (0, c.Z)(y), v = !f && L, S = (0, d.ZP)(), O = (0, o.wj)(S), E = {
    type: s.Z.AVATAR_DECORATION,
    label: j,
    asset: n
  };
  return (0, r.jsx)(C.tEY, {
    children: (0, r.jsxs)(C.kL8, {
      ref: y,
      "aria-label": null != m ? m : "",
      onClick: () => {
        null == t || null == _ || f || _(t)
      },
      className: a()(O ? h.shopCardDark : h.shopCard, {
        [h.shopCardAnimation]: !f,
        [O ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: v,
        [h.shopCardSelected]: g === t
      }),
      children: [(0, r.jsx)("div", {
        className: a()(h.preview, {
          [h.previewTrick]: b === u.KN.Trick,
          [h.previewTreat]: b === u.KN.Treat,
          [h.shopCardClaimed]: f
        }),
        children: (0, r.jsx)(p.R, {
          item: E,
          user: l,
          isHighlighted: v,
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
        children: [(0, r.jsx)(C.Heading, {
          variant: "text-md/bold",
          children: m
        }), (0, r.jsx)(C.Text, {
          variant: "text-md/normal",
          children: f ? x.intl.string(x.t["6cfuDj"]) : x.intl.string(x.t.QQsaCc)
        })]
      })]
    })
  })
}