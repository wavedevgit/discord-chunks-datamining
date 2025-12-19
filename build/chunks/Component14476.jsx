/** Chunk was on 23242 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk481060 = require("./481060.js"),
  Chunk104505 = require("./104505.js"),
  Chunk699758 = require("./699758.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk396728 = require("./396728.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk252728 = require("./252728.js");
let f = e => {
  let t, n, {
      skuId: i,
      assetId: f,
      user: g,
      claimed: y,
      onSelect: j,
      productName: v,
      a11yLabel: b,
      selectedSkuId: O,
      category: S,
      type: x,
      palette: P
    } = e,
    E = l.useRef(null),
    {
      isHoveringOrFocusing: w
    } = (0, u.Z)(E),
    I = !y && w;
  return x === s.Z.AVATAR_DECORATION ? (t = {
    type: s.Z.AVATAR_DECORATION,
    label: b,
    asset: f
  }, n = (0, r.jsx)(d.R, {
    item: t,
    user: g,
    isHighlighted: I,
    avatarSize: o.EFr.SIZE_96
  })) : x === s.Z.NAMEPLATE && (t = {
    type: s.Z.NAMEPLATE,
    label: b,
    asset: f,
    palette: null != P ? P : "none"
  }, n = (0, r.jsx)(p.Z, {
    nameplate: t,
    user: g,
    isHighlighted: I,
    size: "small"
  })), (0, r.jsx)(o.tEY, {
    children: (0, r.jsxs)(o.kL8, {
      ref: E,
      "aria-label": null != v ? v : "",
      onClick: () => {
        null == i || null == j || y || j(i)
      },
      className: a()(h.shopCard, {
        [h.shopCardAnimation]: !y,
        [h.highlighted]: I,
        [h.shopCardSelected]: O === i
      }),
      children: [(0, r.jsx)("div", {
        className: a()(h.preview, {
          [h.avatarPreview]: x === s.Z.AVATAR_DECORATION,
          [h.nameplatePreview]: x === s.Z.NAMEPLATE,
          [h.previewTrick]: S === c.KN.Trick,
          [h.previewTreat]: S === c.KN.Treat
        }),
        children: null != t ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(h.previewContainer, {
              [h.claimed]: y
            }),
            children: n
          }), y && (0, r.jsx)(o.sV5, {
            size: "custom",
            width: 48,
            height: 48,
            color: o.TVs.colors.INTERACTIVE_TEXT_ACTIVE,
            className: h.claimedIcon
          })]
        }) : null
      }), (0, r.jsxs)("div", {
        className: h.productName,
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-md/extrabold",
          children: v
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: y ? m.intl.string(m.t["6cfuDj"]) : m.intl.string(m.t.QQsaCc)
        })]
      })]
    })
  })
}