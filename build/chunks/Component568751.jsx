/** Chunk was on web.js **/
/** chunk id: 568751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
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
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk146423 = require("./146423.jsx"),
  Chunk662349 = require("./662349.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk533406 = require("./533406.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk778712 = require("./778712.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk526295 = require("./526295.js");
let T = 3;

function C(e) {
  let {
    sku: t,
    source: n,
    hideIcon: a,
    guildId: s,
    channelId: C,
    userIdsForGifting: N,
    userIdsForRecommendation: w,
    style: R,
    contextContainerClassName: P
  } = e, [D, L] = i.useState(l().uniq(N)), [x, M] = i.useState(false), [j, k] = i.useState(l().uniq(w)), {
    analyticsLocations: U
  } = (0, h.Ay)(_.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD, _.A.SLAYER_STOREFRONT_WISHLIST_ITEM_CARD_GIFT_BUTTON);
  i.useEffect(() => {
    k(e => {
      let t = l().uniq(w);
      return (0, d.v)(e, t) ? e : t
    })
  }, [w]), i.useEffect(() => {
    L(e => {
      let t = l().uniq(N);
      return (0, d.v)(e, t) ? e : t
    })
  }, [N]);
  let G = (0, u.bG)([y.default], () => 1 === D.length ? y.default.getUser(D[0]) : true, [D]),
    F = (0, u.yK)([y.default], () => j.map(e => y.default.getUser(e)).filter(b.Vq), [j]),
    V = i.useCallback(() => {
      (0, O.a)(t, {
        isGift: true,
        giftRecipient: G,
        additionalUserIds: D.length > 1 ? D : true,
        giftingOrigin: v.vQ.SHOP_PAGE
      }, {
        analyticsLocations: U
      })
    }, [t, G, D, U]);
  return (0, r.jsxs)("div", {
    className: o()(S.kL, R),
    children: [(0, r.jsx)(g.A, {
      sku: t,
      user: G,
      onClick: V,
      cardStyle: S.Ui,
      onHoverOrFocusChange: M,
      children: (0, r.jsx)(E.l, {
        sku: t,
        onClick: V,
        isHoveringOrFocusing: x
      })
    }), !a && (0, r.jsx)(p.m_, {
      text: n === m.uS.POPULAR ? I.intl.string(I.t["DP0o+u"]) : I.intl.string(I.t["OnWY3/"]),
      position: "top",
      children: (0, r.jsx)("div", {
        className: o()(S.RL, P),
        children: n === m.uS.POPULAR || 0 === F.length ? (0, r.jsx)("div", {
          className: S.fd,
          children: (0, r.jsx)(c.Y3C, {
            size: "sm",
            color: "currentColor",
            className: S.I$
          })
        }) : (0, r.jsx)(f.I, {
          users: F,
          guildId: null != s ? s : true,
          channelId: null != C ? C : true,
          maxUsers: T,
          size: A._3.SIZE_20
        })
      })
    })]
  })
}