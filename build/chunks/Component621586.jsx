/** Chunk was on 40184 **/
/** chunk id: 621586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk812206 = require("./812206.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk390322 = require("./390322.js"),
  Chunk602733 = require("./602733.js"),
  Chunk626135 = require("./626135.js"),
  Chunk164670 = require("./164670.js"),
  Chunk81939 = require("./81939.js"),
  Chunk851397 = require("./851397.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk542519 = require("./542519.js");
let E = "vc-gifting-".concat((0, Chunk772848.Z)());

function j(e) {
  var t;
  let {
    isHovered: n,
    closePopout: l,
    onMouseEnter: j,
    onMouseLeave: S,
    channel: _
  } = e;
  r.useEffect(() => {
    n || l()
  }, [l, n]);
  let P = (0, o.e7)([c.Z], () => c.Z.getApplication(b.t9)),
    I = r.useMemo(() => {
      let e = null != P ? P.getIconURL(y.Si.SMALL) : true;
      return null != e && null != P ? (0, i.jsx)("img", {
        src: e,
        alt: P.name
      }) : null
    }, [P]),
    {
      loading: Z,
      wishlistItems: T,
      wishlistItemSkuIds: N
    } = (0, m.Z)({
      guildId: (0, h.ac)(),
      numWishlistItems: m.W
    });
  return r.useEffect(() => {
    0 !== N.length && f.default.track(C.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
      guild_id: _.guild_id,
      channel_id: _.id,
      sku_ids: N
    })
  }, [_.id, _.guild_id, N]), (0, i.jsx)(d.Z, {
    children: (0, i.jsx)(a.VqE, {
      "aria-labelledby": E,
      modal: false,
      children: (0, i.jsxs)("div", {
        className: O.container,
        onMouseEnter: j,
        onMouseLeave: S,
        children: [(0, i.jsx)(a.X6q, {
          className: O.title,
          variant: "text-lg/bold",
          color: "text-strong",
          children: x.intl.string(x.t.xLP3bi)
        }), (0, i.jsx)(a.xvT, {
          className: O.subtitle,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: x.intl.format(x.t["+SqhBF"], {
            applicationName: null != (t = null == P ? true : P.name) ? t : x.intl.string(x.t["/1hhto"])
          })
        }), (0, i.jsx)("div", {
          className: O.wishlistItemsContainer,
          children: Z || 0 === T.length ? (0, i.jsx)(a.$jN, {
            className: O.loading
          }) : T.map(e => (0, i.jsx)(s.i_, {
            body: x.intl.string(x.t["4yiU7x"]),
            asset: I,
            assetSize: p.EU,
            position: "top",
            asContainer: true,
            delay: p.rq,
            children: (0, i.jsx)(g.Z, {
              item: e,
              wishlistId: null,
              isOwner: false,
              cardSize: u.U.SMALL,
              showOverlayButton: true,
              hideButtonIcon: true,
              showPrice: true,
              showIcons: false,
              giftingOrigin: v.Wt.SHOP_PAGE
            })
          }, e.skuId))
        })]
      })
    })
  })
}