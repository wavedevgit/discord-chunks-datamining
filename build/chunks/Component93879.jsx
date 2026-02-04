/** Chunk was on web.js **/
/** chunk id: 93879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk429913 = require("./429913.js"),
  Chunk242640 = require("./242640.jsx"),
  Chunk178213 = require("./178213.js"),
  Chunk594832 = require("./594832.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk79871 = require("./79871.js"),
  Chunk453774 = require("./453774.js"),
  Chunk592356 = require("./592356.js"),
  Chunk568751 = require("./568751.jsx"),
  Chunk620406 = require("./620406.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk809519 = require("./809519.js");

function A(e) {
  let {
    className: t,
    applicationId: n,
    userIds: a,
    cardSize: A = c.Y.SMALL,
    location: I,
    guildId: S,
    channelId: T
  } = e, C = (0, l.h)(n), N = (0, h.A)(C, I), w = (0, u.G)("social_layer_storefront_gifting_breadcrumb"), R = i.useMemo(() => {
    let e = null != N ? N.getIconURL(b.iu.SMALL) : true;
    return null != e ? (0, r.jsx)("img", {
      className: v.In,
      src: e,
      alt: ""
    }) : true
  }, [N]), {
    state: P,
    recommendations: D,
    skuIdToUserIdsReasons: L
  } = (0, m.A)({
    applicationId: null == N ? true : N.id,
    numWishlistItems: 2,
    location: I,
    includeWishlists: true,
    userIds: a
  }), x = i.useMemo(() => new Set(a), [a]), M = i.useMemo(() => D.length > 0 && D.every(e => {
    var t;
    return null == (t = L[e.skuId]) ? true : t.some(e => e.reason === _.G.WISHLIST && x.has(e.userId))
  }), [D, L, x]), j = i.useMemo(() => {
    let e = M && 1 === a.length;
    return D.map(t => {
      var n, i;
      let o = null != (n = null == (i = L[t.skuId]) ? true : i.filter(e => e.reason === _.G.WISHLIST && x.has(e.userId)).map(e => e.userId).filter(p.Vq)) ? n : [];
      return w ? (0, r.jsx)(g.A, {
        sku: t.sku,
        source: o.length > 0 ? d.uS.WISHLIST : d.uS.POPULAR,
        hideIcon: e,
        guildId: S,
        channelId: T,
        style: A === c.Y.SMALL_SQUARE ? v.tM : true,
        contextContainerClassName: v.RL,
        userIdsForGifting: a,
        userIdsForRecommendation: o
      }, t.sku.id) : (0, r.jsx)(E.A, {
        variant: e ? E.$.NO_ICON : o.length > 0 ? E.$.WISHLIST : E.$.POPULAR,
        userIdsForRecommendation: o,
        userIdsForGifting: a,
        wishlistItem: t,
        guildId: S,
        channelId: T,
        cardSize: A,
        contextContainerClassName: v.RL
      }, t.skuId)
    })
  }, [A, T, S, w, D, L, M, a, x]);
  i.useEffect(() => {
    0 !== D.length && f.default.track(y.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
      guild_id: S,
      channel_id: T,
      sku_ids: D.map(e => e.skuId),
      location: I
    })
  }, [S, T, D, I]);
  let k = "loading" === P || 0 === D.length;
  return (0, r.jsxs)("div", {
    className: o()(v.kL, t),
    children: [(0, r.jsxs)("div", {
      className: v.wx,
      children: [(0, r.jsx)(s.EYj, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: M ? O.intl.string(O.t["7lZ31J"]) : O.intl.string(O.t.BCi1gT)
      }), null != R ? R : null]
    }), (0, r.jsx)("div", {
      className: v.ld,
      children: k ? (0, r.jsx)(s.y$y, {
        type: s.y$y.Type.SPINNING_CIRCLE,
        className: v.u1
      }) : j
    })]
  })
}