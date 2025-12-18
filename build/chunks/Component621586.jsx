/** Chunk was on 40184 **/
/** chunk id: 621586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk812206 = require("./812206.js"),
  Chunk413523 = require("./413523.js"),
  Chunk358221 = require("./358221.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk390322 = require("./390322.js"),
  Chunk602733 = require("./602733.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk164670 = require("./164670.js"),
  Chunk927613 = require("./927613.js"),
  Chunk851397 = require("./851397.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk354459 = require("./354459.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542519 = require("./542519.js");
let P = "vc-gifting-".concat((0, Chunk772848.Z)());

function I(e) {
  var t;
  let {
    isHovered: n,
    closePopout: l,
    onMouseEnter: I,
    onMouseLeave: Z,
    channel: T
  } = e;
  r.useEffect(() => {
    n || l()
  }, [l, n]);
  let N = (0, o.e7)([c.Z], () => c.Z.getApplication(v.t9)),
    A = r.useMemo(() => {
      let e = null != N ? N.getIconURL(O.Si.SMALL) : true;
      return null != e && null != N ? (0, i.jsx)("img", {
        src: e,
        alt: N.name
      }) : null
    }, [N]),
    [w] = (0, o.e7)([d.Z], () => null != T.id ? [d.Z.getParticipants(T.id), d.Z.getParticipantsVersion(T.id)] : [
      [], 0
    ], [T.id], u.Lc),
    M = r.useMemo(() => Array.from(new Set(w.map(e => (0, E.Io)(e) || (0, E._5)(e) ? e.user.id : null).filter(g.lm))), [w]),
    {
      state: R,
      recommendations: L
    } = (0, C.Z)({
      guildId: (0, b.ac)(),
      applicationId: v.t9,
      numWishlistItems: C.W,
      userIds: M,
      location: "Social Layer Gifting Mini Shelf",
      includeWishlists: true
    });
  return r.useEffect(() => {
    0 !== L.length && m.default.track(x.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
      guild_id: T.guild_id,
      channel_id: T.id,
      sku_ids: L.map(e => e.skuId)
    })
  }, [T.id, T.guild_id, L]), (0, i.jsx)(f.Z, {
    children: (0, i.jsx)(a.VqE, {
      "aria-labelledby": P,
      modal: false,
      children: (0, i.jsxs)("div", {
        className: _.container,
        onMouseEnter: I,
        onMouseLeave: Z,
        children: [(0, i.jsx)(a.X6q, {
          className: _.title,
          variant: "text-lg/bold",
          color: "text-strong",
          children: S.intl.string(S.t.xLP3bi)
        }), (0, i.jsx)(a.xvT, {
          className: _.subtitle,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: S.intl.format(S.t["+SqhBF"], {
            applicationName: null != (t = null == N ? true : N.name) ? t : S.intl.string(S.t["/1hhto"])
          })
        }), (0, i.jsx)("div", {
          className: _.wishlistItemsContainer,
          children: "loading" === R || 0 === L.length ? (0, i.jsx)(a.$jN, {
            className: _.loading
          }) : L.map(e => (0, i.jsx)(s.i_, {
            body: S.intl.string(S.t["4yiU7x"]),
            asset: A,
            assetSize: h.EU,
            position: "top",
            asContainer: true,
            delay: h.rq,
            children: (0, i.jsx)(y.Z, {
              item: e,
              wishlistId: null,
              isOwner: false,
              cardSize: p.U.SMALL,
              showOverlayButton: true,
              hideButtonIcon: true,
              showPrice: true,
              showIcons: false,
              giftingOrigin: j.Wt.SHOP_PAGE
            })
          }, e.skuId))
        })]
      })
    })
  })
}