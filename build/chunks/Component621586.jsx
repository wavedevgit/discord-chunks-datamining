/** Chunk was on 81985 **/
/** chunk id: 621586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk812206 = require("./812206.js"),
  Chunk413523 = require("./413523.js"),
  Chunk358221 = require("./358221.js"),
  Chunk390322 = require("./390322.js"),
  Chunk158776 = require("./158776.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk164670 = require("./164670.js"),
  Chunk187233 = require("./187233.js"),
  Chunk927613 = require("./927613.js"),
  Chunk550642 = require("./550642.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542519 = require("./542519.js");
let S = "vc-gifting-".concat((0, Chunk772848.Z)());

function _(e) {
  var t;
  let {
    isHovered: n,
    closePopout: a,
    onMouseEnter: _,
    onMouseLeave: I,
    channel: P
  } = e;
  i.useEffect(() => {
    n || a()
  }, [a, n]);
  let Z = (0, s.e7)([c.Z], () => c.Z.getApplication(O.t9)),
    [N] = (0, s.e7)([d.Z], () => null != P.id ? [d.Z.getParticipants(P.id), d.Z.getParticipantsVersion(P.id)] : [
      [], 0
    ], [P.id], u.Lc),
    T = (0, s.Wu)([f.Z], () => {
      let e = new Set;
      for (let n of N)
        if ((0, x.Io)(n) || (0, x._5)(n))
          for (let r of f.Z.getActivities(n.user.id)) {
            var t;
            if (r.application_id === (null == Z ? true : Z.id) || (null == Z || null == (t = Z.linkedGames) ? true : t.some(e => e.id === r.application_id)) === true) {
              e.add(n.user.id);
              break
            }
          }
      return Array.from(e).sort()
    }, [N, Z]),
    A = i.useMemo(() => {
      let e = N.map(e => (0, x.Io)(e) || (0, x._5)(e) ? e.user.id : null).filter(g.lm);
      return (0, l.uniq)([...T, ...e])
    }, [N, T]),
    {
      state: w,
      recommendations: R,
      skuIdToUserIdsReasons: D
    } = (0, y.Z)({
      guildId: (0, m.ac)(),
      applicationId: O.t9,
      numWishlistItems: y.W,
      userIds: A,
      location: "Social Layer Gifting Mini Shelf",
      includeWishlists: true
    }),
    M = i.useMemo(() => {
      let e = new Set(A);
      return R.map(t => {
        var n, i;
        let l = null != (i = null == (n = D[t.skuId]) ? true : n.filter(t => t.reason === b.g.WISHLIST && e.has(t.userId)).map(e => e.userId).filter(g.lm)) ? i : [];
        return (0, r.jsx)(v.Z, {
          variant: l.length > 0 ? v.B.WISHLIST : v.B.POPULAR,
          wishlistItem: t,
          userIds: l,
          guildId: P.guild_id,
          channelId: P.id,
          contextContainerClassName: E.contextContainer
        }, t.skuId)
      })
    }, [P.guild_id, P.id, R, D, A]);
  return i.useEffect(() => {
    0 !== R.length && h.default.track(j.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
      guild_id: P.guild_id,
      channel_id: P.id,
      sku_ids: R.map(e => e.skuId)
    })
  }, [P.id, P.guild_id, R]), (0, r.jsx)(p.Z, {
    children: (0, r.jsx)(o.VqE, {
      "aria-labelledby": S,
      modal: false,
      children: (0, r.jsxs)("div", {
        className: E.container,
        onMouseEnter: _,
        onMouseLeave: I,
        children: [(0, r.jsx)(o.X6q, {
          className: E.title,
          variant: "text-lg/bold",
          color: "text-strong",
          children: C.intl.string(C.t.xLP3bi)
        }), (0, r.jsx)(o.xvT, {
          className: E.subtitle,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: C.intl.format(C.t["+SqhBF"], {
            applicationName: null != (t = null == Z ? true : Z.name) ? t : C.intl.string(C.t["/1hhto"])
          })
        }), (0, r.jsx)("div", {
          className: E.wishlistItemsContainer,
          children: "loading" === w || 0 === R.length ? (0, r.jsx)(o.$jN, {
            className: E.loading
          }) : M
        })]
      })
    })
  })
}