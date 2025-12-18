/** Chunk was on web.js **/
/** chunk id: 550642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => E,
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  E = function(e) {
    return e.POPULAR = "popular", e.WISHLIST = "wishlist", e
  }({});
let b = 3;

function y(e) {
  let {
    variant: t,
    wishlistItem: n,
    userIds: E,
    guildId: y,
    channelId: O,
    cardSize: v = u.U.SMALL
  } = e, [S, I] = i.useState(new Set(E));
  i.useEffect(() => {
    I(e => {
      let t = new Set(E);
      return (0, s.E)(Array.from(e), Array.from(t)) ? e : t
    })
  }, [E]);
  let T = (0, o.Wu)([d.default], () => Array.from(S).map(e => d.default.getUser(e)).filter(f.lm), [S]);
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(c.u, {
      text: "popular" === t ? h.intl.string(h.t["DP0o+u"]) : h.intl.string(h.t["OnWY3/"]),
      position: "top",
      children: (0, r.jsx)("div", {
        className: g.contextContainer,
        children: "popular" === t || 0 === T.length ? (0, r.jsx)("div", {
          className: g.contextIcon,
          children: (0, r.jsx)(a.YqE, {
            size: "sm",
            color: "currentColor"
          })
        }) : (0, r.jsx)(l.g, {
          users: T,
          guildId: null != y ? y : true,
          channelId: null != O ? O : true,
          maxUsers: b,
          size: m.EF.SIZE_20
        })
      })
    }), (0, r.jsx)(p.Z, {
      item: n,
      wishlistId: null,
      isOwner: false,
      cardSize: v,
      showOverlayButton: true,
      hideButtonIcon: true,
      showPrice: true,
      showIcons: false,
      giftingOrigin: _.Wt.SHOP_PAGE,
      profileOwner: 1 === T.length ? T[0] : true,
      additionalUserIds: T.length > 1 ? T.map(e => e.id) : true
    })]
  })
}