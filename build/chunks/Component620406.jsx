/** Chunk was on web.js **/
/** chunk id: 620406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => v,
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk342952 = require("./342952.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk242640 = require("./242640.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk235218 = require("./235218.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk778712 = require("./778712.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk279357 = require("./279357.js"),
  v = function(e) {
    return e.POPULAR = "popular", e.WISHLIST = "wishlist", e.NO_ICON = "no_icon", e
  }({});
let A = 3;

function I(e) {
  let {
    variant: t,
    wishlistItem: n,
    guildId: a,
    channelId: s,
    userIdsForGifting: v,
    userIdsForRecommendation: I,
    cardSize: S = _.Y.SMALL,
    contextContainerClassName: T
  } = e, [C, N] = i.useState(l().uniq(v)), [w, R] = i.useState(l().uniq(I));
  i.useEffect(() => {
    R(e => {
      let t = l().uniq(I);
      return (0, d.v)(e, t) ? e : t
    })
  }, [I]), i.useEffect(() => {
    N(e => {
      let t = l().uniq(v);
      return (0, d.v)(e, t) ? e : t
    })
  }, [v]);
  let P = (0, u.bG)([h.default], () => 1 === C.length ? h.default.getUser(C[0]) : true, [C]),
    D = (0, u.yK)([h.default], () => w.map(e => h.default.getUser(e)).filter(m.Vq), [w]);
  return (0, r.jsxs)("div", {
    className: O.kL,
    children: ["no_icon" === t ? null : (0, r.jsx)(p.m_, {
      text: "popular" === t ? b.intl.string(b.t["DP0o+u"]) : b.intl.string(b.t["OnWY3/"]),
      position: "top",
      children: (0, r.jsx)("div", {
        className: o()(O.RL, T),
        children: "popular" === t || 0 === D.length ? (0, r.jsx)("div", {
          className: O.fd,
          children: (0, r.jsx)(c.Y3C, {
            size: "sm",
            color: "currentColor",
            className: O.I$
          })
        }) : (0, r.jsx)(f.I, {
          users: D,
          guildId: null != a ? a : true,
          channelId: null != s ? s : true,
          maxUsers: A,
          size: y._3.SIZE_20
        })
      })
    }), (0, r.jsx)(g.A, {
      item: n,
      wishlistId: null,
      isOwner: false,
      cardSize: S,
      showOverlayButton: true,
      hideButtonIcon: true,
      showPrice: true,
      showIcons: false,
      giftingOrigin: E.vQ.SHOP_PAGE,
      profileOwner: P,
      additionalUserIds: C.length > 1 ? C : true
    })]
  })
}