/** Chunk was on 84071 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => m
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
let m = e => {
  let {
    skuId: t,
    assetId: n,
    user: a,
    claimed: m,
    onSelect: f,
    productName: x,
    a11yLabel: g,
    selectedSkuId: j,
    category: b
  } = e, v = i.useRef(null), {
    isHoveringOrFocusing: S
  } = (0, C.Z)(v), L = !m && S, y = (0, c.ZP)(), I = (0, o.wj)(y), w = {
    type: s.Z.AVATAR_DECORATION,
    label: g,
    asset: n
  };
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)(d.kL8, {
      ref: v,
      "aria-label": null != x ? x : "",
      onClick: () => {
        null == t || null == f || m || f(t)
      },
      className: l()(I ? h.shopCardDark : h.shopCard, {
        [h.shopCardAnimation]: !m,
        [I ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: L,
        [h.shopCardSelected]: j === t
      }),
      children: [(0, r.jsx)("div", {
        className: l()(h.preview, {
          [h.previewTrick]: b === u.KN.Trick,
          [h.previewTreat]: b === u.KN.Treat,
          [h.shopCardClaimed]: m
        }),
        children: (0, r.jsx)(p.R, {
          item: w,
          user: a,
          isHighlighted: L,
          avatarSize: d.EFr.SIZE_120,
          isPurchased: m
        })
      }), m && (0, r.jsx)(d.dz2, {
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
          children: m ? _.intl.string(_.t["6cfuDj"]) : _.intl.string(_.t.QQsaCc)
        })]
      })]
    })
  })
}