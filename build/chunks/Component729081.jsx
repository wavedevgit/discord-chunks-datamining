/** Chunk was on 44669 **/
/** chunk id: 729081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk835245 = require("./835245.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk587895 = require("./587895.js"),
  Chunk568598 = require("./568598.js"),
  Chunk313961 = require("./313961.js"),
  Chunk246356 = require("./246356.js"),
  Chunk178213 = require("./178213.js"),
  Chunk594832 = require("./594832.js"),
  Chunk290863 = require("./290863.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk79871 = require("./79871.js"),
  Chunk592356 = require("./592356.js"),
  Chunk568751 = require("./568751.jsx"),
  Chunk620406 = require("./620406.jsx"),
  Chunk188275 = require("./188275.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk877409 = require("./877409.js");
let S = "vc-gifting-".concat((0, Chunk835245.A)());

function I(e) {
  var t;
  let {
    isHovered: n,
    closePopout: s,
    onMouseEnter: I,
    onMouseLeave: N,
    channel: T
  } = e;
  l.useEffect(() => {
    n || s()
  }, [s, n]);
  let P = (0, h.G)("social_layer_storefront_gifting_mini_shelf"),
    w = (0, o.bG)([c.A], () => c.A.getApplication(_.XR)),
    [R] = (0, o.bG)([d.A], () => null != T.id ? [d.A.getParticipants(T.id), d.A.getParticipantsVersion(T.id)] : [
      [], 0
    ], [T.id], u.hS),
    D = (0, o.yK)([f.A], () => {
      let e = new Set;
      for (let n of R)
        if ((0, v.Xw)(n) || (0, v.Ay)(n))
          for (let r of f.A.getActivities(n.user.id)) {
            var t;
            if (r.application_id === (null == w ? true : w.id) || (null == w || null == (t = w.linkedGames) ? true : t.some(e => e.id === r.application_id)) === true) {
              e.add(n.user.id);
              break
            }
          }
      return Array.from(e).sort()
    }, [R, w]),
    L = l.useMemo(() => {
      let e = R.map(e => (0, v.Xw)(e) || (0, v.Ay)(e) ? e.user.id : null).filter(b.Vq);
      return (0, i.uniq)([...D, ...e])
    }, [R, D]),
    {
      state: M,
      recommendations: G,
      skuIdToUserIdsReasons: k
    } = (0, y.A)({
      applicationId: _.XR,
      numWishlistItems: y.o,
      userIds: L,
      location: "Social Layer Gifting Mini Shelf",
      includeWishlists: true
    }),
    U = l.useMemo(() => {
      let e = new Set(L);
      return G.map(t => {
        var n, l;
        let i = null != (n = null == (l = k[t.skuId]) ? true : l.filter(t => t.reason === A.G.WISHLIST && e.has(t.userId)).map(e => e.userId).filter(b.Vq)) ? n : [];
        return P ? (0, r.jsx)(O.A, {
          sku: t.sku,
          source: i.length > 0 ? g.uS.WISHLIST : g.uS.POPULAR,
          guildId: T.guild_id,
          channelId: T.id,
          contextContainerClassName: C.RL,
          userIdsForGifting: L,
          userIdsForRecommendation: i
        }, t.skuId) : (0, r.jsx)(j.A, {
          variant: i.length > 0 ? j.$.WISHLIST : j.$.POPULAR,
          wishlistItem: t,
          userIdsForRecommendation: i,
          userIdsForGifting: L,
          guildId: T.guild_id,
          channelId: T.id,
          contextContainerClassName: C.RL
        }, t.skuId)
      })
    }, [T.guild_id, T.id, G, k, L, P]);
  return l.useEffect(() => {
    0 !== G.length && m.default.track(x.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
      guild_id: T.guild_id,
      channel_id: T.id,
      sku_ids: G.map(e => e.skuId)
    })
  }, [T.id, T.guild_id, G]), (0, r.jsx)(p.A, {
    children: (0, r.jsx)(a.lGe, {
      "aria-labelledby": S,
      modal: false,
      children: (0, r.jsxs)("div", {
        className: C.kL,
        onMouseEnter: I,
        onMouseLeave: N,
        children: [(0, r.jsx)(a.DZT, {
          className: C.DD,
          variant: "text-lg/bold",
          color: "text-strong",
          children: E.intl.string(E.t.xLP3bi)
        }), (0, r.jsx)(a.EYj, {
          className: C.VA,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: E.intl.format(E.t["+SqhBF"], {
            applicationName: null != (t = null == w ? true : w.name) ? t : E.intl.string(E.t["/1hhto"])
          })
        }), (0, r.jsx)("div", {
          className: C.Xb,
          children: "loading" === M || 0 === G.length ? (0, r.jsx)(a.y$y, {
            className: C.Lq
          }) : U
        })]
      })
    })
  })
}