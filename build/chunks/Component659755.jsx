/** Chunk was on 45620 **/
/** chunk id: 659755, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
});
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
  Chunk684263 = require("./684263.jsx"),
  Chunk396728 = require("./396728.jsx"),
  Chunk58201 = require("./58201.js"),
  Chunk201964 = require("./201964.js"),
  Chunk922687 = require("./922687.js");
let x = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, l = (0, f.rC)(t), {
      isPurchased: a,
      isPartiallyOwnedBundle: o
    } = (0, p.L)(t), c = l === s.Z.PROFILE_EFFECT;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: i()(E.productPreview, {
          [E.faded]: (a || o) && !n,
          [E.fullPreview]: c
        }),
        children: (0, r.jsx)(O, {
          product: t,
          isCardHovered: n
        })
      }), a && (0, r.jsx)(S, {
        hidden: n
      })]
    })
  },
  O = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, l = (0, o.e7)([d.default], () => d.default.getCurrentUser()), i = (0, f.rC)(t), a = (0, v.o)(t);
    switch (i) {
      case s.Z.PROFILE_EFFECT:
        return (0, r.jsx)(u.Z, {
          skuId: a.skuId,
          isHighlighted: n,
          isPurchased: false,
          removeSetHeight: true
        });
      case s.Z.AVATAR_DECORATION:
        return (0, r.jsx)(C.R, {
          item: a,
          user: l,
          isHighlighted: n,
          isPurchased: false,
          avatarSize: c.EFr.SIZE_120
        });
      case s.Z.NAMEPLATE:
        return (0, r.jsx)(m.Z, {
          nameplate: a,
          user: l,
          isHighlighted: n,
          isPurchased: false
        });
      case s.Z.BUNDLE:
        return (0, r.jsx)(_.U, {
          product: t,
          user: l,
          isHighlighted: n,
          isPurchased: false
        });
      case s.Z.EXTERNAL_SKU:
        return (0, r.jsx)(h.b, {
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
    return (0, r.jsx)(a.sV5, {
      size: "custom",
      color: c.TVs.colors.INTERACTIVE_ACTIVE,
      width: 40,
      height: 40,
      className: i()(E.productPreviewIconOverlay, {
        [E.hidden]: t
      })
    })
  },
  y = e => {
    let {
      skuId: t,
      isCardHovered: n
    } = e, l = (0, f.LJ)(t), i = (0, g.o)(l);
    if (null == l) return null;
    let s = (0, b.W)(l, i);
    return (0, r.jsx)(x, {
      product: s,
      isCardHovered: n
    })
  }