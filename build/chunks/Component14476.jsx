/** Chunk was on 37786 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk410030 = require("./410030.js"),
  Chunk699758 = require("./699758.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk466679 = require("./466679.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk281377 = require("./281377.js");
let x = e => {
  let {
    skuId: t,
    assetId: n,
    user: l,
    claimed: x,
    onSelect: m,
    productName: j,
    a11yLabel: b,
    selectedSkuId: g,
    category: L
  } = e, y = i.useRef(null), S = (0, d.Z)(y), v = (0, _.m)(y), E = !x && (S || v), O = (0, c.ZP)(), I = (0, s.wj)(O), P = {
    type: a.Z.AVATAR_DECORATION,
    label: b,
    asset: n
  };
  return (0, r.jsx)(C.tEY, {
    children: (0, r.jsxs)(C.kL8, {
      ref: y,
      "aria-label": null != j ? j : "",
      onClick: () => {
        null == t || null == m || x || m(t)
      },
      className: o()(I ? f.shopCardDark : f.shopCard, {
        [f.shopCardAnimation]: !x,
        [I ? f.shopCardDarkHighlighted : f.shopCardHighlighted]: E,
        [f.shopCardSelected]: g === t
      }),
      children: [(0, r.jsx)("div", {
        className: o()(f.preview, {
          [f.previewTrick]: L === u.KN.Trick,
          [f.previewTreat]: L === u.KN.Treat,
          [f.shopCardClaimed]: x
        }),
        children: (0, r.jsx)(p.R, {
          item: P,
          user: l,
          isHighlighted: E,
          avatarSize: C.EFr.SIZE_120,
          isPurchased: x
        })
      }), x && (0, r.jsx)(C.dz2, {
        size: "custom",
        width: 48,
        height: 48,
        color: C.TVs.colors.WHITE,
        className: f.claimedIcon
      }), (0, r.jsxs)("div", {
        className: f.productName,
        children: [(0, r.jsx)(C.X6q, {
          variant: "text-md/bold",
          children: j
        }), (0, r.jsx)(C.Text, {
          variant: "text-md/normal",
          children: x ? h.intl.string(h.t["6cfuDg"]) : h.intl.string(h.t.QQsaCQ)
        })]
      })]
    })
  })
}