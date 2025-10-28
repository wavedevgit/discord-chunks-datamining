/** Chunk was on 45620 **/
/** chunk id: 659755, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk58201 = require("./58201.js"),
  Chunk201964 = require("./201964.js"),
  Chunk1327 = require("./1327.js");
let v = new Set([Chunk979554.Z.BUNDLE, Chunk979554.Z.NAMEPLATE, Chunk979554.Z.PROFILE_EFFECT]),
  E = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, l = (0, f.rC)(t), {
      isPurchased: o,
      isPartiallyOwnedBundle: s
    } = (0, p.L)(t), a = null != l && v.has(l);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: i()(b.productPreview, {
          [b.faded]: (o || s) && !n,
          [b.fullPreview]: a
        }),
        children: (0, r.jsx)(x, {
          product: t,
          isCardHovered: n
        })
      }), o && (0, r.jsx)(O, {
        hidden: n
      })]
    })
  },
  x = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, l = (0, a.e7)([d.default], () => d.default.getCurrentUser()), i = (0, f.rC)(t), s = (0, m.o)(t);
    switch (i) {
      case o.Z.PROFILE_EFFECT:
        return (0, r.jsx)(u.Z, {
          skuId: s.skuId,
          isHighlighted: n,
          isPurchased: false,
          removeSetHeight: true
        });
      case o.Z.AVATAR_DECORATION:
        return (0, r.jsx)(h.R, {
          item: s,
          user: l,
          isHighlighted: n,
          isPurchased: false,
          avatarSize: c.EFr.SIZE_120
        });
      case o.Z.NAMEPLATE:
      case o.Z.BUNDLE:
        return null;
      case o.Z.EXTERNAL_SKU:
        return (0, r.jsx)(C.b, {
          product: t,
          animationState: n ? "on" : "off"
        });
      default:
        return null
    }
  },
  O = e => {
    let {
      hidden: t
    } = e;
    return (0, r.jsx)(s.sV5, {
      size: "custom",
      color: c.TVs.colors.INTERACTIVE_ACTIVE,
      width: 40,
      height: 40,
      className: i()(b.productPreviewIconOverlay, {
        [b.hidden]: t
      })
    })
  },
  S = e => {
    let {
      skuId: t,
      isCardHovered: n
    } = e, l = (0, f.LJ)(t), i = (0, g.o)(l);
    if (null == l) return null;
    let o = (0, _.W)(l, i);
    return (0, r.jsx)(E, {
      product: o,
      isCardHovered: n
    })
  }