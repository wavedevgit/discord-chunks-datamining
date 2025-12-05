/** Chunk was on 75393 **/
/** chunk id: 659755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk876917 = require("./876917.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk429368 = require("./429368.js"),
  Chunk724994 = require("./724994.js"),
  Chunk786040 = require("./786040.js"),
  Chunk508925 = require("./508925.jsx"),
  Chunk616066 = require("./616066.jsx"),
  Chunk684263 = require("./684263.jsx"),
  Chunk396728 = require("./396728.jsx"),
  Chunk58201 = require("./58201.js"),
  Chunk201964 = require("./201964.js"),
  Chunk1327 = require("./1327.js");
let y = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, l = (0, h.rC)(t), {
      isPurchased: s,
      isPartiallyOwnedBundle: o
    } = (0, p.L)(t), c = l === i.Z.PROFILE_EFFECT;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: r()(_.productPreview, {
          [_.faded]: (s || o) && !n,
          [_.fullPreview]: c
        }),
        children: (0, a.jsx)(C, {
          product: t,
          isCardHovered: n
        })
      }), s && (0, a.jsx)(S, {
        hidden: n
      })]
    })
  },
  C = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, l = (0, o.e7)([u.default], () => u.default.getCurrentUser()), r = (0, h.rC)(t), s = (0, j.o)(t);
    switch (r) {
      case i.Z.PROFILE_EFFECT:
        return (0, a.jsx)(d.Z, {
          skuId: s.skuId,
          isHighlighted: n,
          isPurchased: false,
          removeSetHeight: true
        });
      case i.Z.AVATAR_DECORATION:
        return (0, a.jsx)(f.R, {
          item: s,
          user: l,
          isHighlighted: n,
          isPurchased: false,
          avatarSize: c.EFr.SIZE_120
        });
      case i.Z.NAMEPLATE:
        return (0, a.jsx)(b.Z, {
          nameplate: s,
          user: l,
          isHighlighted: n,
          isPurchased: false
        });
      case i.Z.BUNDLE:
        return (0, a.jsx)(g.U, {
          product: t,
          user: l,
          isHighlighted: n,
          isPurchased: false
        });
      case i.Z.EXTERNAL_SKU:
        return (0, a.jsx)(x.b, {
          product: t,
          animationState: n ? "on" : "off"
        });
      default:
        return null
    }
  },
  S = e => {
    let {
      hidden: t
    } = e;
    return (0, a.jsx)(s.sV5, {
      size: "custom",
      color: c.TVs.colors.INTERACTIVE_ACTIVE,
      width: 40,
      height: 40,
      className: r()(_.productPreviewIconOverlay, {
        [_.hidden]: t
      })
    })
  },
  E = e => {
    let {
      skuId: t,
      isCardHovered: n,
      overrideVariantIndex: l
    } = e, r = (0, h.LJ)(t), i = (0, m.o)(r);
    if (null == r) return null;
    let s = (0, v.W)(r, null != l ? l : i);
    return (0, a.jsx)(y, {
      product: s,
      isCardHovered: n
    })
  }