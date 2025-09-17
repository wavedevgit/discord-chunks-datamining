/** Chunk was on 54400 **/
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
  Chunk727637 = require("./727637.js"),
  Chunk410030 = require("./410030.js"),
  Chunk699758 = require("./699758.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk466679 = require("./466679.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk632939 = require("./632939.js");
let _ = e => {
  let {
    skuId: t,
    assetId: n,
    user: l,
    claimed: _,
    onSelect: m,
    productName: j,
    a11yLabel: g,
    selectedSkuId: b,
    category: L
  } = e, y = i.useRef(null), S = (0, d.Z)(y), v = (0, x.m)(y), E = !_ && (S || v), O = (0, c.ZP)(), P = (0, o.wj)(O), k = {
    type: s.Z.AVATAR_DECORATION,
    label: g,
    asset: n
  };
  return (0, r.jsx)(C.tEY, {
    children: (0, r.jsxs)(C.kL8, {
      ref: y,
      "aria-label": null != j ? j : "",
      onClick: () => {
        null == t || null == m || _ || m(t)
      },
      className: a()(P ? f.shopCardDark : f.shopCard, {
        [f.shopCardAnimation]: !_,
        [P ? f.shopCardDarkHighlighted : f.shopCardHighlighted]: E,
        [f.shopCardSelected]: b === t
      }),
      children: [(0, r.jsx)("div", {
        className: a()(f.preview, {
          [f.previewTrick]: L === u.KN.Trick,
          [f.previewTreat]: L === u.KN.Treat,
          [f.shopCardClaimed]: _
        }),
        children: (0, r.jsx)(p.R, {
          item: k,
          user: l,
          isHighlighted: E,
          avatarSize: C.EFr.SIZE_120,
          isPurchased: _
        })
      }), _ && (0, r.jsx)(C.dz2, {
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
          children: _ ? h.intl.string(h.t["6cfuDg"]) : h.intl.string(h.t.QQsaCQ)
        })]
      })]
    })
  })
}