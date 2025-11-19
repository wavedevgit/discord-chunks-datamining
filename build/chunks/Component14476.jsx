/** Chunk was on 54400 **/
/** chunk id: 14476, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
let g = e => {
  let t, n, {
      skuId: a,
      assetId: g,
      user: v,
      claimed: x,
      onSelect: y,
      productName: P,
      a11yLabel: j,
      selectedSkuId: S,
      category: _,
      type: w,
      palette: O
    } = e,
    C = l.useRef(null),
    {
      isHoveringOrFocusing: k
    } = (0, u.Z)(C),
    E = !x && k,
    I = (0, c.ZP)(),
    T = (0, s.wj)(I);
  return w === o.Z.AVATAR_DECORATION ? (t = {
    type: o.Z.AVATAR_DECORATION,
    label: j,
    asset: g
  }, n = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.R, {
      item: t,
      user: v,
      isHighlighted: E,
      avatarSize: d.EFr.SIZE_96,
      isPurchased: x
    }), x && (0, r.jsx)(d.sV5, {
      size: "custom",
      width: 48,
      height: 48,
      color: T ? d.TVs.colors.WHITE : d.TVs.colors.BLACK,
      className: b.claimedIcon
    })]
  })) : w === o.Z.NAMEPLATE && (t = {
    type: o.Z.NAMEPLATE,
    label: j,
    asset: g,
    palette: null != O ? O : "none"
  }, n = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h.Z, {
      nameplate: t,
      user: v,
      isHighlighted: E,
      isPurchased: x,
      size: "small"
    }), x && (0, r.jsx)(d.sV5, {
      size: "custom",
      width: 48,
      height: 48,
      color: T ? d.TVs.colors.WHITE : d.TVs.colors.BLACK,
      className: b.claimedIcon
    })]
  })), (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)(d.kL8, {
      ref: C,
      "aria-label": null != P ? P : "",
      onClick: () => {
        null == a || null == y || x || y(a)
      },
      className: i()(T ? b.shopCardDark : b.shopCard, {
        [b.shopCardAnimation]: !x,
        [T ? b.shopCardDarkHighlighted : b.shopCardHighlighted]: E,
        [b.shopCardSelected]: S === a
      }),
      children: [(0, r.jsx)("div", {
        className: i()(b.preview, {
          [b.avatarPreview]: w === o.Z.AVATAR_DECORATION,
          [b.nameplatePreview]: w === o.Z.NAMEPLATE,
          [b.previewTrick]: _ === p.KN.Trick,
          [b.previewTreat]: _ === p.KN.Treat,
          [b.shopCardClaimed]: x
        }),
        children: null != t && n
      }), (0, r.jsxs)("div", {
        className: b.productName,
        children: [(0, r.jsx)(d.Heading, {
          variant: "heading-md/extrabold",
          children: P
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: x ? f.intl.string(f.t["6cfuDj"]) : f.intl.string(f.t.QQsaCc)
        })]
      })]
    })
  })
}