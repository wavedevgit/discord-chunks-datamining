/** Chunk was on web.js **/
/** chunk id: 644011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk835473 = require("./835473.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk187233 = require("./187233.js"),
  Chunk631863 = require("./631863.js"),
  Chunk927613 = require("./927613.js"),
  Chunk550642 = require("./550642.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk687068 = require("./687068.js");

function y(e) {
  let {
    className: t,
    applicationId: n,
    userIds: a,
    cardSize: y = c.U.SMALL,
    location: O,
    guildId: v,
    channelId: S
  } = e, I = (0, l.q)(n), T = (0, p.Z)(I, O), C = i.useMemo(() => {
    let e = null != T ? T.getIconURL(g.Si.SMALL) : true;
    return null != e ? (0, r.jsx)("img", {
      className: b.applicationIcon,
      src: e,
      alt: ""
    }) : true
  }, [T]), {
    state: A,
    recommendations: N,
    skuIdToUserIdsReasons: P
  } = (0, _.Z)({
    guildId: null == T ? true : T.guildId,
    applicationId: null == T ? true : T.id,
    numWishlistItems: 2,
    location: O,
    includeWishlists: true,
    userIds: a
  }), R = i.useMemo(() => N.map(e => {
    var t, n;
    let i = null != (n = null == (t = P[e.skuId]) ? true : t.filter(e => e.reason === f.g.WISHLIST).map(e => e.userId).filter(d.lm)) ? n : [];
    return (0, r.jsx)(m.Z, {
      variant: i.length > 0 ? m.B.WISHLIST : m.B.POPULAR,
      wishlistItem: e,
      userIds: i,
      guildId: v,
      channelId: S,
      cardSize: y
    }, e.skuId)
  }), [y, S, v, N, P]);
  return (i.useEffect(() => {
    0 !== N.length && u.default.track(h.rMx.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
      guild_id: v,
      channel_id: S,
      sku_ids: N.map(e => e.skuId),
      location: O
    })
  }, [v, S, N, O]), "loading" === A || 0 === N.length) ? null : (0, r.jsxs)("div", {
    className: o()(b.container, t),
    children: [(0, r.jsxs)("div", {
      className: b.header,
      children: [(0, r.jsx)(s.xvT, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: E.intl.string(E.t.BCi1gT)
      }), null != C ? C : null]
    }), (0, r.jsx)("div", {
      className: b.items,
      children: R
    })]
  })
}