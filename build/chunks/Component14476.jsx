/** Chunk was on 54400 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk410030 = require("./410030.js"),
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
    onSelect: f,
    productName: j,
    a11yLabel: m,
    selectedSkuId: L
  } = e, g = i.useRef(null), b = (0, d.Z)(g), y = (0, u.m)(g), S = !_ && (b || y), E = (0, c.ZP)(), O = (0, o.wj)(E), P = {
    type: a.Z.AVATAR_DECORATION,
    label: m,
    asset: n
  };
  return (0, r.jsx)(C.tEY, {
    children: (0, r.jsxs)(C.kL8, {
      ref: g,
      "aria-label": null != j ? j : "",
      onClick: () => {
        null != t && null != f && f(t)
      },
      className: s()(O ? h.shopCardDark : h.shopCard, {
        [h.shopCardAnimation]: S,
        [O ? h.shopCardDarkHighlighted : h.shopCardHighlighted]: S,
        [h.shopCardSelected]: L === t
      }),
      children: [(0, r.jsx)("div", {
        className: s()(h.preview, {
          [h.shopCardClaimed]: _
        }),
        children: (0, r.jsx)(p.R, {
          item: P,
          user: l,
          isHighlighted: S,
          avatarSize: C.EFr.SIZE_120,
          isPurchased: _
        })
      }), _ && (0, r.jsx)(C.dz2, {
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
          children: _ ? x.intl.string(x.t["6cfuDg"]) : x.intl.string(x.t.QQsaCQ)
        })]
      })]
    })
  })
}