/** Chunk was on 78528 **/
/** chunk id: 729081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
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
  Chunk290863 = require("./290863.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk871123 = require("./871123.js"),
  Chunk79871 = require("./79871.js"),
  Chunk592356 = require("./592356.js"),
  Chunk398025 = require("./398025.jsx"),
  Chunk188275 = require("./188275.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk877409 = require("./877409.js");
let E = "vc-gifting-".concat((0, Chunk835245.A)());

function C(e) {
  var t;
  let {
    isHovered: n,
    closePopout: s,
    onMouseEnter: C,
    onMouseLeave: S,
    channel: I
  } = e;
  l.useEffect(() => {
    n || s()
  }, [s, n]);
  let N = (0, o.bG)([c.A], () => c.A.getApplication(_.XR)),
    [T] = (0, o.bG)([d.A], () => null != I.id ? [d.A.getParticipants(I.id), d.A.getParticipantsVersion(I.id)] : [
      [], 0
    ], [I.id], u.hS),
    P = (0, o.yK)([h.A], () => {
      let e = new Set;
      for (let n of T)
        if ((0, j.Xw)(n) || (0, j.Ay)(n))
          for (let r of h.A.getActivities(n.user.id)) {
            var t;
            if (r.application_id === (null == N ? true : N.id) || (null == N || null == (t = N.linkedGames) ? true : t.some(e => e.id === r.application_id)) === true) {
              e.add(n.user.id);
              break
            }
          }
      return Array.from(e).sort()
    }, [T, N]),
    w = l.useMemo(() => {
      let e = T.map(e => (0, j.Xw)(e) || (0, j.Ay)(e) ? e.user.id : null).filter(g.Vq);
      return (0, i.uniq)([...P, ...e])
    }, [T, P]),
    {
      state: R,
      recommendations: D,
      skuIdToUserIdsReasons: M
    } = (0, A.A)({
      guildId: (0, m.zf)(),
      applicationId: _.XR,
      numWishlistItems: A.o,
      userIds: w,
      location: "Social Layer Gifting Mini Shelf",
      includeWishlists: true
    }),
    L = l.useMemo(() => {
      let e = new Set(w);
      return D.map(t => {
        var n, l;
        let i = null != (n = null == (l = M[t.skuId]) ? true : l.filter(t => t.reason === b.G.WISHLIST && e.has(t.userId)).map(e => e.userId).filter(g.Vq)) ? n : [];
        return (0, r.jsx)(y.A, {
          variant: i.length > 0 ? y.$.WISHLIST : y.$.POPULAR,
          wishlistItem: t,
          userIdsForRecommendation: i,
          userIdsForGifting: w,
          guildId: I.guild_id,
          channelId: I.id,
          contextContainerClassName: x.RL
        }, t.skuId)
      })
    }, [I.guild_id, I.id, D, M, w]);
  return l.useEffect(() => {
    0 !== D.length && f.default.track(O.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
      guild_id: I.guild_id,
      channel_id: I.id,
      sku_ids: D.map(e => e.skuId)
    })
  }, [I.id, I.guild_id, D]), (0, r.jsx)(p.A, {
    children: (0, r.jsx)(a.lGe, {
      "aria-labelledby": E,
      modal: false,
      children: (0, r.jsxs)("div", {
        className: x.kL,
        onMouseEnter: C,
        onMouseLeave: S,
        children: [(0, r.jsx)(a.DZT, {
          className: x.DD,
          variant: "text-lg/bold",
          color: "text-strong",
          children: v.intl.string(v.t.xLP3bi)
        }), (0, r.jsx)(a.EYj, {
          className: x.VA,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: v.intl.format(v.t["+SqhBF"], {
            applicationName: null != (t = null == N ? true : N.name) ? t : v.intl.string(v.t["/1hhto"])
          })
        }), (0, r.jsx)("div", {
          className: x.Xb,
          children: "loading" === R || 0 === D.length ? (0, r.jsx)(a.y$y, {
            className: x.Lq
          }) : L
        })]
      })
    })
  })
}