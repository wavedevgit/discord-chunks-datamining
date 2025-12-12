/** Chunk was on 23242 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk104505 = require("./104505.js"),
  Chunk699758 = require("./699758.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk396728 = require("./396728.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk632939 = require("./632939.js");
let j = e => {
  let t, n, {
      skuId: i,
      assetId: j,
      user: y,
      claimed: v,
      onSelect: b,
      productName: O,
      a11yLabel: P,
      selectedSkuId: S,
      category: x,
      type: E,
      palette: w
    } = e,
    I = l.useRef(null),
    {
      isHoveringOrFocusing: T
    } = (0, d.Z)(I),
    k = !v && T,
    C = (0, c.ZP)(),
    N = (0, o.wj)(C);
  return E === s.Z.AVATAR_DECORATION ? (t = {
    type: s.Z.AVATAR_DECORATION,
    label: P,
    asset: j
  }, n = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.R, {
      item: t,
      user: y,
      isHighlighted: k,
      avatarSize: u.EFr.SIZE_96,
      isPurchased: v
    }), v && (0, r.jsx)(u.sV5, {
      size: "custom",
      width: 48,
      height: 48,
      color: N ? u.TVs.colors.WHITE : u.TVs.colors.BLACK,
      className: g.claimedIcon
    })]
  })) : E === s.Z.NAMEPLATE && (t = {
    type: s.Z.NAMEPLATE,
    label: P,
    asset: j,
    palette: null != w ? w : "none"
  }, n = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h.Z, {
      nameplate: t,
      user: y,
      isHighlighted: k,
      isPurchased: v,
      size: "small"
    }), v && (0, r.jsx)(u.sV5, {
      size: "custom",
      width: 48,
      height: 48,
      color: N ? u.TVs.colors.WHITE : u.TVs.colors.BLACK,
      className: g.claimedIcon
    })]
  })), (0, r.jsx)(u.tEY, {
    children: (0, r.jsxs)(u.kL8, {
      ref: I,
      "aria-label": null != O ? O : "",
      onClick: () => {
        null == i || null == b || v || b(i)
      },
      className: a()(N ? g.shopCardDark : g.shopCard, {
        [g.shopCardAnimation]: !v,
        [N ? g.shopCardDarkHighlighted : g.shopCardHighlighted]: k,
        [g.shopCardSelected]: S === i
      }),
      children: [(0, r.jsx)("div", {
        className: a()(g.preview, {
          [g.avatarPreview]: E === s.Z.AVATAR_DECORATION,
          [g.nameplatePreview]: E === s.Z.NAMEPLATE,
          [g.previewTrick]: x === p.KN.Trick,
          [g.previewTreat]: x === p.KN.Treat,
          [g.shopCardClaimed]: v
        }),
        children: null != t && n
      }), (0, r.jsxs)("div", {
        className: g.productName,
        children: [(0, r.jsx)(u.Heading, {
          variant: "heading-md/extrabold",
          children: O
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: v ? f.intl.string(f.t["6cfuDj"]) : f.intl.string(f.t.QQsaCc)
        })]
      })]
    })
  })
}