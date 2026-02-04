/** Chunk was on web.js **/
/** chunk id: 607123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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
let E = 200;

function y(e) {
  let {
    sku: t,
    isFocused: n,
    user: a,
    options: o
  } = e, p = i.useMemo(() => (0, l.T)(t), [t]);
  if (null == p) return null;
  if ("bundle" === p.type) return (0, r.jsx)("div", {
    className: g.hT,
    children: (0, r.jsx)(u.X, {
      product: p,
      isHighlighted: n,
      user: a
    })
  });
  switch (p.item.type) {
    case s.R.AVATAR_DECORATION:
      return (0, r.jsx)(c.i, {
        user: a,
        avatarSize: m._3.SIZE_80,
        item: p.item,
        isHighlighted: n
      });
    case s.R.PROFILE_EFFECT:
      return (0, r.jsx)("div", {
        className: g.xC,
        children: (0, r.jsx)(f.A, {
          skuId: p.item.skuId,
          isHighlighted: n,
          removeSetHeight: true
        })
      });
    case s.R.NAMEPLATE:
      var _, h, y, b, O, v;
      return (0, r.jsxs)("div", {
        className: g.M4,
        children: [(0, r.jsx)("div", {
          className: g.Qt,
          children: (0, r.jsx)(d.A, {
            user: a,
            nameplate: p.item,
            isHighlighted: n,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: null != (_ = null == o || null == (b = o.collectibles) || null == (y = b.nameplate) ? true : y.width) ? _ : E
          })
        }), (0, r.jsx)("div", {
          className: g.BM,
          "aria-hidden": true,
          children: (0, r.jsx)(d.A, {
            user: a,
            nameplate: p.item,
            isHighlighted: n,
            showPlaceholderUser: true,
            showStatus: true,
            nameplatePreviewSize: "default",
            width: null != (h = null == o || null == (v = o.collectibles) || null == (O = v.nameplate) ? true : O.width) ? h : E
          })
        })]
      });
    default:
      return null
  }
}

function b(e) {
  let {
    sku: t,
    isFocused: n
  } = e;
  return (0, r.jsx)(p.e, {
    shape: "custom",
    containerClassName: o()(g.JS, n && g.P3),
    backgroundImageClassName: g.m1,
    foregroundImageClassName: g.aF,
    sku: t
  })
}

function O(e) {
  let {
    sku: t,
    isFocused: n,
    user: i,
    options: a
  } = e;
  switch (t.productLine) {
    case h.EZt.COLLECTIBLES:
      return (0, r.jsx)(y, {
        sku: t,
        isFocused: n,
        user: i,
        options: a
      });
    case h.EZt.SOCIAL_LAYER_GAME_ITEM:
      return (0, r.jsx)(b, {
        sku: t,
        isFocused: n
      });
    case h.EZt.APPLICATION:
    case h.EZt.BOOST:
    case h.EZt.GUILD_ROLE:
    case h.EZt.PREMIUM:
    case h.EZt.GUILD_PRODUCT:
      return null;
    default:
      (0, _.xb)(t.productLine)
  }
}