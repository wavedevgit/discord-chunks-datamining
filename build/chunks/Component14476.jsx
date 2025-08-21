/** Chunk was on 54400 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => h
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
  Chunk616066 = require("./616066.jsx"),
  Chunk466679 = require("./466679.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk632939 = require("./632939.js");
let h = e => {
  let {
    skuId: t,
    assetId: n,
    user: l,
    onSelect: h,
    productName: _,
    a11yLabel: j,
    selectedSkuId: m
  } = e, L = i.useRef(null), b = (0, d.Z)(L), g = (0, u.m)(L), y = b || g, S = (0, c.ZP)(), v = (0, o.wj)(S), E = {
    type: s.Z.AVATAR_DECORATION,
    label: j,
    asset: n
  };
  return (0, r.jsx)(C.tEY, {
    children: (0, r.jsxs)(C.kL8, {
      ref: L,
      "aria-label": null != _ ? _ : "",
      onClick: () => {
        null != t && null != h && h(t)
      },
      className: a()(v ? f.shopCardDark : f.shopCard, {
        [f.shopCardAnimation]: y,
        [v ? f.shopCardDarkHighlighted : f.shopCardHighlighted]: y,
        [f.shopCardSelected]: m === t
      }),
      children: [(0, r.jsx)("div", {
        className: f.preview,
        children: (0, r.jsx)(p.R, {
          item: E,
          user: l,
          isHighlighted: y,
          avatarSize: C.EFr.SIZE_120
        })
      }), (0, r.jsxs)("div", {
        className: f.productName,
        children: [(0, r.jsx)(C.X6q, {
          variant: "text-lg/bold",
          children: _
        }), (0, r.jsx)(C.Text, {
          variant: "text-md/normal",
          children: x.intl.string(x.t.QQsaCQ)
        })]
      })]
    })
  })
}