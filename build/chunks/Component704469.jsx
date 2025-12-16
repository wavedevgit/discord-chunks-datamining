/** Chunk was on 29725 **/
/** chunk id: 704469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk216541 = require("./216541.jsx"),
  Chunk396728 = require("./396728.jsx"),
  Chunk58201 = require("./58201.js"),
  Chunk201964 = require("./201964.js"),
  Chunk635492 = require("./635492.js");
let C = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, r = (0, h.rC)(t), {
      isPurchased: s,
      isPartiallyOwnedBundle: o
    } = (0, p.L)(t), c = r === i.Z.PROFILE_EFFECT;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: l()(y.productPreview, {
          [y.faded]: (s || o) && !n,
          [y.fullPreview]: c
        }),
        children: (0, a.jsx)(_, {
          product: t,
          isCardHovered: n
        })
      }), s && (0, a.jsx)(S, {
        hidden: n
      })]
    })
  },
  _ = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, r = (0, o.e7)([u.default], () => u.default.getCurrentUser()), l = (0, h.rC)(t), s = (0, j.o)(t);
    switch (l) {
      case i.Z.PROFILE_EFFECT:
        return (0, a.jsx)(d.Z, {
          skuId: s.skuId,
          isHighlighted: n,
          removeSetHeight: true
        });
      case i.Z.AVATAR_DECORATION:
        return (0, a.jsx)(x.R, {
          item: s,
          user: r,
          isHighlighted: n,
          avatarSize: c.EFr.SIZE_120
        });
      case i.Z.NAMEPLATE:
        return (0, a.jsx)(g.Z, {
          nameplate: s,
          user: r,
          isHighlighted: n
        });
      case i.Z.BUNDLE:
        return (0, a.jsx)(b.d, {
          product: t,
          user: r,
          isHighlighted: n
        });
      case i.Z.EXTERNAL_SKU:
        return (0, a.jsx)(f.b, {
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
      color: c.TVs.colors.INTERACTIVE_TEXT_ACTIVE,
      width: 40,
      height: 40,
      className: l()(y.productPreviewIconOverlay, {
        [y.hidden]: t
      })
    })
  },
  E = e => {
    let {
      skuId: t,
      isCardHovered: n,
      overrideVariantIndex: r
    } = e, l = (0, h.LJ)(t), i = (0, m.o)(l);
    if (null == l) return null;
    let s = (0, v.W)(l, null != r ? r : i);
    return (0, a.jsx)(C, {
      product: s,
      isCardHovered: n
    })
  }