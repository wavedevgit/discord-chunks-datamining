/** Chunk was on 60118 **/
/** chunk id: 607123, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function O(e) {
  let {
    sku: t,
    isFocused: n,
    user: i,
    options: a
  } = e, p = l.useMemo(() => (0, s.T)(t), [t]);
  if (null == p) return null;
  if ("bundle" === p.type) return (0, r.jsx)("div", {
    className: y.hT,
    children: (0, r.jsx)(u.X, {
      product: p,
      isHighlighted: n,
      user: i
    })
  });
  switch (p.item.type) {
    case o.R.AVATAR_DECORATION:
      return (0, r.jsx)(c.i, {
        user: i,
        avatarSize: b._3.SIZE_80,
        item: p.item,
        isHighlighted: n
      });
    case o.R.PROFILE_EFFECT:
      return (0, r.jsx)("div", {
        className: y.xC,
        children: (0, r.jsx)(f.A, {
          skuId: p.item.skuId,
          isHighlighted: n,
          removeSetHeight: true
        })
      });
    case o.R.NAMEPLATE:
      var g, m;
      return (0, r.jsxs)("div", {
        className: y.M4,
        children: [(0, r.jsx)("div", {
          className: y.Qt,
          children: (0, r.jsx)(d.A, {
            user: i,
            nameplate: p.item,
            isHighlighted: n,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: null != (g = null == a ? true : a.nameplateWidth) ? g : 200
          })
        }), (0, r.jsx)("div", {
          className: y.BM,
          "aria-hidden": true,
          children: (0, r.jsx)(d.A, {
            user: i,
            nameplate: p.item,
            isHighlighted: n,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: null != (m = null == a ? true : a.nameplateWidth) ? m : 200
          })
        })]
      });
    default:
      return null
  }
}

function j(e) {
  let {
    sku: t,
    isFocused: n
  } = e;
  return (0, r.jsx)(p.e, {
    shape: "custom",
    containerClassName: a()(y.JS, n && y.P3),
    backgroundImageClassName: y.m1,
    foregroundImageClassName: y.aF,
    sku: t
  })
}

function h(e) {
  let {
    sku: t,
    isFocused: n,
    user: l,
    options: i
  } = e;
  switch (t.productLine) {
    case m.EZt.COLLECTIBLES:
      return (0, r.jsx)(O, {
        sku: t,
        isFocused: n,
        user: l,
        options: i
      });
    case m.EZt.SOCIAL_LAYER_GAME_ITEM:
      return (0, r.jsx)(j, {
        sku: t,
        isFocused: n
      });
    case m.EZt.APPLICATION:
    case m.EZt.BOOST:
    case m.EZt.GUILD_ROLE:
    case m.EZt.PREMIUM:
    case m.EZt.GUILD_PRODUCT:
      return null;
    default:
      (0, g.xb)(t.productLine)
  }
}