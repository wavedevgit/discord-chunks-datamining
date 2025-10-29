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
  Chunk1327 = require("./1327.js");
let x = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, l = (0, f.rC)(t), {
      isPurchased: s,
      isPartiallyOwnedBundle: o
    } = (0, p.L)(t), c = l === a.Z.PROFILE_EFFECT;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: i()(E.productPreview, {
          [E.faded]: (s || o) && !n,
          [E.fullPreview]: c
        }),
        children: (0, r.jsx)(O, {
          product: t,
          isCardHovered: n
        })
      }), s && (0, r.jsx)(S, {
        hidden: n
      })]
    })
  },
  O = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, l = (0, o.e7)([d.default], () => d.default.getCurrentUser()), i = (0, f.rC)(t), s = (0, v.o)(t);
    switch (i) {
      case a.Z.PROFILE_EFFECT:
        return (0, r.jsx)(u.Z, {
          skuId: s.skuId,
          isHighlighted: n,
          isPurchased: false,
          removeSetHeight: true
        });
      case a.Z.AVATAR_DECORATION:
        return (0, r.jsx)(C.R, {
          item: s,
          user: l,
          isHighlighted: n,
          isPurchased: false,
          avatarSize: c.EFr.SIZE_120
        });
      case a.Z.NAMEPLATE:
        return (0, r.jsx)(m.Z, {
          nameplate: s,
          user: l,
          isHighlighted: n,
          isPurchased: false
        });
      case a.Z.BUNDLE:
        return (0, r.jsx)(_.U, {
          product: t,
          user: l,
          isHighlighted: n,
          isPurchased: false
        });
      case a.Z.EXTERNAL_SKU:
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
    return (0, r.jsx)(s.sV5, {
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
    let a = (0, b.W)(l, i);
    return (0, r.jsx)(x, {
      product: a,
      isCardHovered: n
    })
  }