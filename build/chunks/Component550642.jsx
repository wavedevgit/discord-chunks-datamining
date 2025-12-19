/** Chunk was on web.js **/
/** chunk id: 550642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => y,
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  y = function(e) {
    return e.POPULAR = "popular", e.WISHLIST = "wishlist", e.NO_ICON = "no_icon", e
  }({});
let O = 3;

function v(e) {
  let {
    variant: t,
    wishlistItem: n,
    userIds: a,
    guildId: y,
    channelId: v,
    cardSize: S = f.U.SMALL,
    contextContainerClassName: I
  } = e, [T, C] = i.useState(new Set(a));
  i.useEffect(() => {
    C(e => {
      let t = new Set(a);
      return (0, c.E)(Array.from(e), Array.from(t)) ? e : t
    })
  }, [a]);
  let A = (0, l.Wu)([p.default], () => Array.from(T).map(e => p.default.getUser(e)).filter(_.lm), [T]);
  return (0, r.jsxs)("div", {
    className: b.container,
    children: ["no_icon" === t ? null : (0, r.jsx)(d.u, {
      text: "popular" === t ? E.intl.string(E.t["DP0o+u"]) : E.intl.string(E.t["OnWY3/"]),
      position: "top",
      children: (0, r.jsx)("div", {
        className: o()(b.contextContainer, I),
        children: "popular" === t || 0 === A.length ? (0, r.jsx)("div", {
          className: b.contextIcon,
          children: (0, r.jsx)(s.YqE, {
            size: "sm",
            color: "currentColor",
            className: b.fireIcon
          })
        }) : (0, r.jsx)(u.g, {
          users: A,
          guildId: null != y ? y : true,
          channelId: null != v ? v : true,
          maxUsers: O,
          size: g.EF.SIZE_20
        })
      })
    }), (0, r.jsx)(m.Z, {
      item: n,
      wishlistId: null,
      isOwner: false,
      cardSize: S,
      showOverlayButton: true,
      hideButtonIcon: true,
      showPrice: true,
      showIcons: false,
      giftingOrigin: h.Wt.SHOP_PAGE,
      profileOwner: 1 === A.length ? A[0] : true,
      additionalUserIds: A.length > 1 ? A.map(e => e.id) : true
    })]
  })
}