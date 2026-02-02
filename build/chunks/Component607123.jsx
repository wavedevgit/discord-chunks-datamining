/** Chunk was on 65442 **/
/** chunk id: 607123, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk474012 = require("./474012.js"),
  Chunk929283 = require("./929283.jsx"),
  Chunk245068 = require("./245068.jsx"),
  Chunk550111 = require("./550111.jsx"),
  Chunk331402 = require("./331402.jsx"),
  Chunk366523 = require("./366523.jsx"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js"),
  Chunk778712 = require("./778712.js"),
  Chunk223555 = require("./223555.js");

function S(e) {
  let {
    sku: t,
    isFocused: r,
    user: l,
    options: s
  } = e, h = i.useMemo(() => (0, u.T)(t), [t]);
  if (null == h) return null;
  if ("bundle" === h.type) return (0, n.jsx)("div", {
    className: p.hT,
    children: (0, n.jsx)(c.X, {
      product: h,
      isHighlighted: r,
      user: l
    })
  });
  switch (h.item.type) {
    case a.R.AVATAR_DECORATION:
      return (0, n.jsx)(o.i, {
        user: l,
        avatarSize: I._3.SIZE_80,
        item: h.item,
        isHighlighted: r
      });
    case a.R.PROFILE_EFFECT:
      return (0, n.jsx)("div", {
        className: p.xC,
        children: (0, n.jsx)(f.A, {
          skuId: h.item.skuId,
          isHighlighted: r,
          removeSetHeight: true
        })
      });
    case a.R.NAMEPLATE:
      var m, g, S, O, E, j;
      return (0, n.jsxs)("div", {
        className: p.M4,
        children: [(0, n.jsx)("div", {
          className: p.Qt,
          children: (0, n.jsx)(d.A, {
            user: l,
            nameplate: h.item,
            isHighlighted: r,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: null != (m = null == s || null == (O = s.collectibles) || null == (S = O.nameplate) ? true : S.width) ? m : 200
          })
        }), (0, n.jsx)("div", {
          className: p.BM,
          "aria-hidden": true,
          children: (0, n.jsx)(d.A, {
            user: l,
            nameplate: h.item,
            isHighlighted: r,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: null != (g = null == s || null == (j = s.collectibles) || null == (E = j.nameplate) ? true : E.width) ? g : 200
          })
        })]
      });
    default:
      return null
  }
}

function O(e) {
  let {
    sku: t,
    isFocused: r
  } = e;
  return (0, n.jsx)(h.e, {
    shape: "custom",
    containerClassName: s()(p.JS, r && p.P3),
    backgroundImageClassName: p.m1,
    foregroundImageClassName: p.aF,
    sku: t
  })
}

function E(e) {
  let {
    sku: t,
    isFocused: r,
    user: i,
    options: l
  } = e;
  switch (t.productLine) {
    case g.EZt.COLLECTIBLES:
      return (0, n.jsx)(S, {
        sku: t,
        isFocused: r,
        user: i,
        options: l
      });
    case g.EZt.SOCIAL_LAYER_GAME_ITEM:
      return (0, n.jsx)(O, {
        sku: t,
        isFocused: r
      });
    case g.EZt.APPLICATION:
    case g.EZt.BOOST:
    case g.EZt.GUILD_ROLE:
    case g.EZt.PREMIUM:
    case g.EZt.GUILD_PRODUCT:
      return null;
    default:
      (0, m.xb)(t.productLine)
  }
}