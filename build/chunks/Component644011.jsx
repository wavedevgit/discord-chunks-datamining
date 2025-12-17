/** Chunk was on web.js **/
/** chunk id: 644011, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk835473 = require("./835473.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk631863 = require("./631863.js"),
  Chunk927613 = require("./927613.js"),
  Chunk851397 = require("./851397.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk687068 = require("./687068.js");

function S(e) {
  let {
    className: t,
    applicationId: n,
    userIds: a,
    cardSize: S = d.U.SMALL,
    location: I,
    guildId: T,
    channelId: C
  } = e, A = (0, u.q)(n), N = (0, m.Z)(A, I), P = (0, l.e7)([p.default], () => null != a && 1 === a.length ? p.default.getUser(null == a ? true : a[0]) : true, [a]), R = i.useMemo(() => {
    let e = null != N ? N.getIconURL(b.Si.SMALL) : true;
    return null != e ? (0, r.jsx)("img", {
      className: v.applicationIcon,
      src: e,
      alt: ""
    }) : true
  }, [N]), {
    state: w,
    recommendations: D
  } = (0, h.Z)({
    guildId: null == N ? true : N.guildId,
    applicationId: null == N ? true : N.id,
    numWishlistItems: 2,
    location: I,
    includeWishlists: true,
    userIds: a
  });
  return (i.useEffect(() => {
    0 !== D.length && _.default.track(E.rMx.COMMERCE_SHOP_GIFTING_BREADCRUMB_VIEWED, {
      guild_id: T,
      channel_id: C,
      sku_ids: D.map(e => e.skuId),
      location: I
    })
  }, [T, C, D, I]), "loading" === w || 0 === D.length) ? null : (0, r.jsxs)("div", {
    className: o()(v.container, t),
    children: [(0, r.jsxs)("div", {
      className: v.header,
      children: [(0, r.jsx)(s.xvT, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: O.intl.string(O.t.BCi1gT)
      }), null != R ? R : null]
    }), (0, r.jsx)("div", {
      className: v.items,
      children: D.map(e => (0, r.jsx)(c.i_, {
        body: O.intl.string(O.t["4yiU7x"]),
        asset: R,
        assetSize: f.EU,
        position: "top",
        asContainer: true,
        delay: f.rq,
        children: (0, r.jsx)(g.Z, {
          item: e,
          wishlistId: null,
          isOwner: false,
          cardSize: S,
          showOverlayButton: true,
          hideButtonIcon: true,
          showPrice: true,
          showIcons: false,
          giftingOrigin: y.Wt.SHOP_PAGE,
          profileOwner: P,
          additionalUserIds: null == P ? a : true
        })
      }, e.skuId))
    })]
  })
}