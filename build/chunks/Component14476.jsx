/** Chunk was on 3270 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => _
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
let _ = e => {
  let {
    skuId: t,
    assetId: n,
    user: l,
    claimed: _,
    onSelect: f,
    productName: x,
    a11yLabel: j,
    selectedSkuId: g,
    category: b
  } = e, L = i.useRef(null), {
    isHoveringOrFocusing: v
  } = (0, C.Z)(L), y = !_ && v, S = (0, c.ZP)(), I = (0, o.wj)(S), w = {
    type: s.Z.AVATAR_DECORATION,
    label: j,
    asset: n
  };
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)(d.kL8, {
      ref: L,
      "aria-label": null != x ? x : "",
      onClick: () => {
        null == t || null == f || _ || f(t)
      },
      className: a()(I ? m.shopCardDark : m.shopCard, {
        [m.shopCardAnimation]: !_,
        [I ? m.shopCardDarkHighlighted : m.shopCardHighlighted]: y,
        [m.shopCardSelected]: g === t
      }),
      children: [(0, r.jsx)("div", {
        className: a()(m.preview, {
          [m.previewTrick]: b === u.KN.Trick,
          [m.previewTreat]: b === u.KN.Treat,
          [m.shopCardClaimed]: _
        }),
        children: (0, r.jsx)(p.R, {
          item: w,
          user: l,
          isHighlighted: y,
          avatarSize: d.EFr.SIZE_120,
          isPurchased: _
        })
      }), _ && (0, r.jsx)(d.dz2, {
        size: "custom",
        width: 48,
        height: 48,
        color: d.TVs.colors.WHITE,
        className: m.claimedIcon
      }), (0, r.jsxs)("div", {
        className: m.productName,
        children: [(0, r.jsx)(d.Heading, {
          variant: "text-md/bold",
          children: x
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/normal",
          children: _ ? h.intl.string(h.t["6cfuDj"]) : h.intl.string(h.t.QQsaCc)
        })]
      })]
    })
  })
}