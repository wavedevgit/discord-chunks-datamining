/** Chunk was on web.js **/
/** chunk id: 638006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk331402 = require("./331402.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk298072 = require("./298072.js"),
  Chunk466459 = require("./466459.js"),
  Chunk623373 = require("./623373.js"),
  Chunk561769 = require("./561769.js"),
  Chunk846957 = require("./846957.jsx"),
  Chunk929283 = require("./929283.jsx"),
  Chunk245068 = require("./245068.jsx"),
  Chunk761365 = require("./761365.jsx"),
  Chunk550674 = require("./550674.js"),
  Chunk8056 = require("./8056.js");
let v = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, i = (0, _.YW)(t), {
      isPurchased: o,
      isPartiallyOwnedBundle: l
    } = (0, p.h)(t), c = i === s.R.PROFILE_EFFECT;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: a()(O.mA, {
          [O.zj]: (o || l) && !n,
          [O.Ge]: c
        }),
        children: (0, r.jsx)(A, {
          product: t,
          isCardHovered: n
        })
      }), o && (0, r.jsx)(I, {
        hidden: n
      })]
    })
  },
  A = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, i = (0, l.bG)([d.default], () => d.default.getCurrentUser()), a = (0, _.YW)(t), o = (0, b.D)(t);
    switch (a) {
      case s.R.PROFILE_EFFECT:
        return (0, r.jsx)(u.A, {
          skuId: o.skuId,
          isHighlighted: n,
          removeSetHeight: true
        });
      case s.R.AVATAR_DECORATION:
        return (0, r.jsx)(g.i, {
          item: o,
          user: i,
          isHighlighted: n,
          avatarSize: c._3J.SIZE_120
        });
      case s.R.NAMEPLATE:
        return (0, r.jsx)(y.A, {
          nameplate: o,
          user: i,
          isHighlighted: n
        });
      case s.R.BUNDLE:
        return (0, r.jsx)(E.X, {
          product: t,
          user: i,
          isHighlighted: n
        });
      case s.R.EXTERNAL_SKU:
        return (0, r.jsx)(m.B, {
          product: t,
          animationState: n ? "on" : "off"
        });
      default:
        return null
    }
  },
  I = e => {
    let {
      hidden: t
    } = e;
    return (0, r.jsx)(o.rOg, {
      size: "custom",
      color: c.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
      width: 40,
      height: 40,
      className: a()(O.zo, {
        [O.R]: t
      })
    })
  },
  S = e => {
    let {
      skuId: t,
      isCardHovered: n,
      overrideVariantIndex: i
    } = e, a = (0, h.Vm)(t), s = (0, f.Q)(a);
    if (null == a) return null;
    let o = (0, _.rb)(a, null != i ? i : s);
    return (0, r.jsx)(v, {
      product: o,
      isCardHovered: n
    })
  }