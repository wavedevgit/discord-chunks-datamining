/** Chunk was on 22477 **/
/** chunk id: 638006, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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
let y = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, l = (0, h.YW)(t), {
      isPurchased: s,
      isPartiallyOwnedBundle: o
    } = (0, p.h)(t), c = l === i.R.PROFILE_EFFECT;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: r()(_.mA, {
          [_.zj]: (s || o) && !n,
          [_.Ge]: c
        }),
        children: (0, a.jsx)(A, {
          product: t,
          isCardHovered: n
        })
      }), s && (0, a.jsx)(C, {
        hidden: n
      })]
    })
  },
  A = e => {
    let {
      product: t,
      isCardHovered: n
    } = e, l = (0, o.bG)([u.default], () => u.default.getCurrentUser()), r = (0, h.YW)(t), s = (0, j.D)(t);
    switch (r) {
      case i.R.PROFILE_EFFECT:
        return (0, a.jsx)(d.A, {
          skuId: s.skuId,
          isHighlighted: n,
          removeSetHeight: true
        });
      case i.R.AVATAR_DECORATION:
        return (0, a.jsx)(f.i, {
          item: s,
          user: l,
          isHighlighted: n,
          avatarSize: c._3J.SIZE_120
        });
      case i.R.NAMEPLATE:
        return (0, a.jsx)(v.A, {
          nameplate: s,
          user: l,
          isHighlighted: n
        });
      case i.R.BUNDLE:
        return (0, a.jsx)(b.X, {
          product: t,
          user: l,
          isHighlighted: n
        });
      case i.R.EXTERNAL_SKU:
        return (0, a.jsx)(g.B, {
          product: t,
          animationState: n ? "on" : "off"
        });
      default:
        return null
    }
  },
  C = e => {
    let {
      hidden: t
    } = e;
    return (0, a.jsx)(s.rOg, {
      size: "custom",
      color: c.LU0.colors.INTERACTIVE_TEXT_ACTIVE,
      width: 40,
      height: 40,
      className: r()(_.zo, {
        [_.R]: t
      })
    })
  },
  S = e => {
    let {
      skuId: t,
      isCardHovered: n,
      overrideVariantIndex: l
    } = e, r = (0, x.Vm)(t), i = (0, m.Q)(r);
    if (null == r) return null;
    let s = (0, h.rb)(r, null != l ? l : i);
    return (0, a.jsx)(y, {
      product: s,
      isCardHovered: n
    })
  }