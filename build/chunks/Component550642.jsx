/** Chunk was on web.js **/
/** chunk id: 550642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => v,
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk36563 = require("./36563.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk851397 = require("./851397.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk264940 = require("./264940.js"),
  v = function(e) {
    return e.POPULAR = "popular", e.WISHLIST = "wishlist", e.NO_ICON = "no_icon", e
  }({});
let S = 3;

function I(e) {
  let {
    variant: t,
    wishlistItem: n,
    guildId: a,
    channelId: s,
    userIdsForGifting: v,
    userIdsForRecommendation: I,
    cardSize: T = _.U.SMALL,
    contextContainerClassName: C
  } = e, [A, N] = i.useState(l().uniq(v)), [P, w] = i.useState(l().uniq(I));
  i.useEffect(() => {
    w(e => {
      let t = l().uniq(I);
      return (0, d.E)(e, t) ? e : t
    })
  }, [I]), i.useEffect(() => {
    N(e => {
      let t = l().uniq(v);
      return (0, d.E)(e, t) ? e : t
    })
  }, [v]);
  let R = (0, u.e7)([h.default], () => 1 === A.length ? h.default.getUser(A[0]) : true, [A]),
    D = (0, u.Wu)([h.default], () => P.map(e => h.default.getUser(e)).filter(m.lm), [P]);
  return (0, r.jsxs)("div", {
    className: O.container,
    children: ["no_icon" === t ? null : (0, r.jsx)(p.u, {
      text: "popular" === t ? y.intl.string(y.t["DP0o+u"]) : y.intl.string(y.t["OnWY3/"]),
      position: "top",
      children: (0, r.jsx)("div", {
        className: o()(O.contextContainer, C),
        children: "popular" === t || 0 === D.length ? (0, r.jsx)("div", {
          className: O.contextIcon,
          children: (0, r.jsx)(c.YqE, {
            size: "sm",
            color: "currentColor",
            className: O.fireIcon
          })
        }) : (0, r.jsx)(f.g, {
          users: D,
          guildId: null != a ? a : true,
          channelId: null != s ? s : true,
          maxUsers: S,
          size: b.EF.SIZE_20
        })
      })
    }), (0, r.jsx)(g.Z, {
      item: n,
      wishlistId: null,
      isOwner: false,
      cardSize: T,
      showOverlayButton: true,
      hideButtonIcon: true,
      showPrice: true,
      showIcons: false,
      giftingOrigin: E.Wt.SHOP_PAGE,
      profileOwner: R,
      additionalUserIds: A.length > 1 ? A : true
    })]
  })
}