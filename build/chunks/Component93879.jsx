/** Chunk was on web.js **/
/** chunk id: 93879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk429913 = require("./429913.js"),
  Chunk242640 = require("./242640.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk79871 = require("./79871.js"),
  Chunk453774 = require("./453774.js"),
  Chunk592356 = require("./592356.js"),
  Chunk398025 = require("./398025.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk809519 = require("./809519.js");

function b(e) {
  let {
    className: t,
    applicationId: n,
    userIds: a,
    cardSize: b = c.Y.SMALL,
    location: O,
    guildId: v,
    channelId: A
  } = e, I = (0, l.h)(n), S = (0, p.A)(I, O), T = i.useMemo(() => {
    let e = null != S ? S.getIconURL(g.iu.SMALL) : true;
    return null != e ? (0, r.jsx)("img", {
      className: y.In,
      src: e,
      alt: ""
    }) : true
  }, [S]), {
    state: C,
    recommendations: N,
    skuIdToUserIdsReasons: w
  } = (0, _.A)({
    guildId: null == S ? true : S.guildId,
    applicationId: null == S ? true : S.id,
    numWishlistItems: 2,
    location: O,
    includeWishlists: true,
    userIds: a
  }), R = i.useMemo(() => new Set(a), [a]), P = i.useMemo(() => N.length > 0 && N.every(e => {
    var t;
    return null == (t = w[e.skuId]) ? true : t.some(e => e.reason === f.G.WISHLIST && R.has(e.userId))
  }), [N, w, R]), D = i.useMemo(() => {
    let e = P && 1 === a.length;
    return N.map(t => {
      var n, i;
      let s = null != (n = null == (i = w[t.skuId]) ? true : i.filter(e => e.reason === f.G.WISHLIST && R.has(e.userId)).map(e => e.userId).filter(d.Vq)) ? n : [];
      return (0, r.jsx)(h.A, {
        variant: e ? h.$.NO_ICON : s.length > 0 ? h.$.WISHLIST : h.$.POPULAR,
        userIdsForRecommendation: s,
        userIdsForGifting: a,
        wishlistItem: t,
        guildId: v,
        channelId: A,
        cardSize: b,
        contextContainerClassName: y.RL
      }, t.skuId)
    })
  }, [b, A, v, N, w, P, a, R]);
  i.useEffect(() => {
    0 !== N.length && u.default.track(m.HAw.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
      guild_id: v,
      channel_id: A,
      sku_ids: N.map(e => e.skuId),
      location: O
    })
  }, [v, A, N, O]);
  let x = "loading" === C || 0 === N.length;
  return (0, r.jsxs)("div", {
    className: s()(y.kL, t),
    children: [(0, r.jsxs)("div", {
      className: y.wx,
      children: [(0, r.jsx)(o.EYj, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: P ? E.intl.string(E.t["7lZ31J"]) : E.intl.string(E.t.BCi1gT)
      }), null != T ? T : null]
    }), (0, r.jsx)("div", {
      className: y.ld,
      children: x ? (0, r.jsx)(o.y$y, {
        type: o.y$y.Type.SPINNING_CIRCLE,
        className: y.u1
      }) : D
    })]
  })
}