/** Chunk was on 44669 **/
/** chunk id: 729081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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
  Chunk79871 = require("./79871.js"),
  Chunk592356 = require("./592356.js"),
  Chunk620406 = require("./620406.jsx"),
  Chunk188275 = require("./188275.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk877409 = require("./877409.js");
let v = "vc-gifting-".concat((0, Chunk835245.A)());

function E(e) {
  var t;
  let {
    isHovered: n,
    closePopout: s,
    onMouseEnter: E,
    onMouseLeave: C,
    channel: S
  } = e;
  l.useEffect(() => {
    n || s()
  }, [s, n]);
  let I = (0, o.bG)([c.A], () => c.A.getApplication(y.XR)),
    [N] = (0, o.bG)([d.A], () => null != S.id ? [d.A.getParticipants(S.id), d.A.getParticipantsVersion(S.id)] : [
      [], 0
    ], [S.id], u.hS),
    T = (0, o.yK)([h.A], () => {
      let e = new Set;
      for (let n of N)
        if ((0, j.Xw)(n) || (0, j.Ay)(n))
          for (let r of h.A.getActivities(n.user.id)) {
            var t;
            if (r.application_id === (null == I ? true : I.id) || (null == I || null == (t = I.linkedGames) ? true : t.some(e => e.id === r.application_id)) === true) {
              e.add(n.user.id);
              break
            }
          }
      return Array.from(e).sort()
    }, [N, I]),
    P = l.useMemo(() => {
      let e = N.map(e => (0, j.Xw)(e) || (0, j.Ay)(e) ? e.user.id : null).filter(f.Vq);
      return (0, i.uniq)([...T, ...e])
    }, [N, T]),
    {
      state: w,
      recommendations: R,
      skuIdToUserIdsReasons: D
    } = (0, b.A)({
      applicationId: y.XR,
      numWishlistItems: b.o,
      userIds: P,
      location: "Social Layer Gifting Mini Shelf",
      includeWishlists: true
    }),
    L = l.useMemo(() => {
      let e = new Set(P);
      return R.map(t => {
        var n, l;
        let i = null != (n = null == (l = D[t.skuId]) ? true : l.filter(t => t.reason === m.G.WISHLIST && e.has(t.userId)).map(e => e.userId).filter(f.Vq)) ? n : [];
        return (0, r.jsx)(A.A, {
          variant: i.length > 0 ? A.$.WISHLIST : A.$.POPULAR,
          wishlistItem: t,
          userIdsForRecommendation: i,
          userIdsForGifting: P,
          guildId: S.guild_id,
          channelId: S.id,
          contextContainerClassName: _.RL
        }, t.skuId)
      })
    }, [S.guild_id, S.id, R, D, P]);
  return l.useEffect(() => {
    0 !== R.length && g.default.track(O.HAw.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
      guild_id: S.guild_id,
      channel_id: S.id,
      sku_ids: R.map(e => e.skuId)
    })
  }, [S.id, S.guild_id, R]), (0, r.jsx)(p.A, {
    children: (0, r.jsx)(a.lGe, {
      "aria-labelledby": v,
      modal: false,
      children: (0, r.jsxs)("div", {
        className: _.kL,
        onMouseEnter: E,
        onMouseLeave: C,
        children: [(0, r.jsx)(a.DZT, {
          className: _.DD,
          variant: "text-lg/bold",
          color: "text-strong",
          children: x.intl.string(x.t.xLP3bi)
        }), (0, r.jsx)(a.EYj, {
          className: _.VA,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: x.intl.format(x.t["+SqhBF"], {
            applicationName: null != (t = null == I ? true : I.name) ? t : x.intl.string(x.t["/1hhto"])
          })
        }), (0, r.jsx)("div", {
          className: _.Xb,
          children: "loading" === w || 0 === R.length ? (0, r.jsx)(a.y$y, {
            className: _.Lq
          }) : L
        })]
      })
    })
  })
}