/** Chunk was on 23242 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => v
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
let v = e => {
  let t, n, {
      skuId: i,
      assetId: v,
      user: j,
      claimed: y,
      onSelect: b,
      productName: S,
      a11yLabel: x,
      selectedSkuId: P,
      category: O,
      type: E,
      palette: I
    } = e,
    w = r.useRef(null),
    {
      isHoveringOrFocusing: T
    } = (0, d.Z)(w),
    k = !y && T,
    C = (0, c.ZP)(),
    N = (0, o.wj)(C);
  return E === s.Z.AVATAR_DECORATION ? (t = {
    type: s.Z.AVATAR_DECORATION,
    label: x,
    asset: v
  }, n = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(p.R, {
      item: t,
      user: j,
      isHighlighted: k,
      avatarSize: u.EFr.SIZE_96,
      isPurchased: y
    }), y && (0, l.jsx)(u.sV5, {
      size: "custom",
      width: 48,
      height: 48,
      color: N ? u.TVs.colors.WHITE : u.TVs.colors.BLACK,
      className: g.claimedIcon
    })]
  })) : E === s.Z.NAMEPLATE && (t = {
    type: s.Z.NAMEPLATE,
    label: x,
    asset: v,
    palette: null != I ? I : "none"
  }, n = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(h.Z, {
      nameplate: t,
      user: j,
      isHighlighted: k,
      isPurchased: y,
      size: "small"
    }), y && (0, l.jsx)(u.sV5, {
      size: "custom",
      width: 48,
      height: 48,
      color: N ? u.TVs.colors.WHITE : u.TVs.colors.BLACK,
      className: g.claimedIcon
    })]
  })), (0, l.jsx)(u.tEY, {
    children: (0, l.jsxs)(u.kL8, {
      ref: w,
      "aria-label": null != S ? S : "",
      onClick: () => {
        null == i || null == b || y || b(i)
      },
      className: a()(N ? g.shopCardDark : g.shopCard, {
        [g.shopCardAnimation]: !y,
        [N ? g.shopCardDarkHighlighted : g.shopCardHighlighted]: k,
        [g.shopCardSelected]: P === i
      }),
      children: [(0, l.jsx)("div", {
        className: a()(g.preview, {
          [g.avatarPreview]: E === s.Z.AVATAR_DECORATION,
          [g.nameplatePreview]: E === s.Z.NAMEPLATE,
          [g.previewTrick]: O === m.KN.Trick,
          [g.previewTreat]: O === m.KN.Treat,
          [g.shopCardClaimed]: y
        }),
        children: null != t && n
      }), (0, l.jsxs)("div", {
        className: g.productName,
        children: [(0, l.jsx)(u.Heading, {
          variant: "heading-md/extrabold",
          children: S
        }), (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: y ? f.intl.string(f.t["6cfuDj"]) : f.intl.string(f.t.QQsaCc)
        })]
      })]
    })
  })
}