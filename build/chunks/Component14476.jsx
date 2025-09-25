/** Chunk was on 84071 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => m
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
  Chunk632939 = require("./632939.js");
let m = e => {
  let {
    skuId: t,
    assetId: n,
    user: a,
    claimed: m,
    onSelect: x,
    productName: j,
    a11yLabel: g,
    selectedSkuId: b,
    category: L
  } = e, y = i.useRef(null), v = (0, d.Z)(y), S = (0, _.m)(y), O = !m && (v || S), E = (0, c.ZP)(), P = (0, s.wj)(E), I = {
    type: l.Z.AVATAR_DECORATION,
    label: g,
    asset: n
  };
  return (0, r.jsx)(C.tEY, {
    children: (0, r.jsxs)(C.kL8, {
      ref: y,
      "aria-label": null != j ? j : "",
      onClick: () => {
        null == t || null == x || m || x(t)
      },
      className: o()(P ? h.shopCardDark : h.shopCard, {
        [h.shopCardAnimation]: !m,
        [P ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: O,
        [h.shopCardSelected]: b === t
      }),
      children: [(0, r.jsx)("div", {
        className: o()(h.preview, {
          [h.previewTrick]: L === u.KN.Trick,
          [h.previewTreat]: L === u.KN.Treat,
          [h.shopCardClaimed]: m
        }),
        children: (0, r.jsx)(p.R, {
          item: I,
          user: a,
          isHighlighted: O,
          avatarSize: C.EFr.SIZE_120,
          isPurchased: m
        })
      }), m && (0, r.jsx)(C.dz2, {
        size: "custom",
        width: 48,
        height: 48,
        color: C.TVs.colors.WHITE,
        className: h.claimedIcon
      }), (0, r.jsxs)("div", {
        className: h.productName,
        children: [(0, r.jsx)(C.X6q, {
          variant: "text-md/bold",
          children: j
        }), (0, r.jsx)(C.Text, {
          variant: "text-md/normal",
          children: m ? f.intl.string(f.t["6cfuDg"]) : f.intl.string(f.t.QQsaCQ)
        })]
      })]
    })
  })
}