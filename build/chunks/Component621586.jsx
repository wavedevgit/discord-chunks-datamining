/** Chunk was on 40184 **/
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
    onMouseLeave: P,
    channel: I
  } = e;
  r.useEffect(() => {
    n || a()
  }, [a, n]);
  let Z = (0, s.e7)([c.Z], () => c.Z.getApplication(v.t9)),
    [T] = (0, s.e7)([d.Z], () => null != I.id ? [d.Z.getParticipants(I.id), d.Z.getParticipantsVersion(I.id)] : [
      [], 0
    ], [I.id], u.Lc),
    N = (0, s.Wu)([f.Z], () => {
      let e = new Set;
      for (let n of T)
        if ((0, O.Io)(n) || (0, O._5)(n))
          for (let i of f.Z.getActivities(n.user.id)) {
            var t;
            if (i.application_id === (null == Z ? true : Z.id) || (null == Z || null == (t = Z.linkedGames) ? true : t.some(e => e.id === i.application_id)) === true) {
              e.add(n.user.id);
              break
            }
          }
      return Array.from(e).sort()
    }, [T, Z]),
    A = r.useMemo(() => {
      let e = T.map(e => (0, O.Io)(e) || (0, O._5)(e) ? e.user.id : null).filter(m.lm);
      return (0, l.uniq)([...N, ...e])
    }, [T, N]),
    {
      state: w,
      recommendations: M,
      skuIdToUserIdsReasons: R
    } = (0, y.Z)({
      guildId: (0, g.ac)(),
      applicationId: v.t9,
      numWishlistItems: y.W,
      userIds: A,
      location: "Social Layer Gifting Mini Shelf",
      includeWishlists: true
    }),
    D = r.useMemo(() => M.map(e => {
      var t, n;
      let r = null != (n = null == (t = R[e.skuId]) ? true : t.filter(e => e.reason === b.g.WISHLIST).map(e => e.userId).filter(m.lm)) ? n : [];
      return (0, i.jsx)(C.Z, {
        variant: r.length > 0 ? C.B.WISHLIST : C.B.POPULAR,
        wishlistItem: e,
        userIds: r,
        guildId: I.guild_id,
        channelId: I.id
      }, e.skuId)
    }), [I.guild_id, I.id, M, R]);
  return r.useEffect(() => {
    0 !== M.length && h.default.track(x.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
      guild_id: I.guild_id,
      channel_id: I.id,
      sku_ids: M.map(e => e.skuId)
    })
  }, [I.id, I.guild_id, M]), (0, i.jsx)(p.Z, {
    children: (0, i.jsx)(o.VqE, {
      "aria-labelledby": S,
      modal: false,
      children: (0, i.jsxs)("div", {
        className: j.container,
        onMouseEnter: _,
        onMouseLeave: P,
        children: [(0, i.jsx)(o.X6q, {
          className: j.title,
          variant: "text-lg/bold",
          color: "text-strong",
          children: E.intl.string(E.t.xLP3bi)
        }), (0, i.jsx)(o.xvT, {
          className: j.subtitle,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: E.intl.format(E.t["+SqhBF"], {
            applicationName: null != (t = null == Z ? true : Z.name) ? t : E.intl.string(E.t["/1hhto"])
          })
        }), (0, i.jsx)("div", {
          className: j.wishlistItemsContainer,
          children: "loading" === w || 0 === M.length ? (0, i.jsx)(o.$jN, {
            className: j.loading
          }) : D
        })]
      })
    })
  })
}