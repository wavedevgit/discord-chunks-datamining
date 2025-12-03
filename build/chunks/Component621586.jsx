/** Chunk was on 34740 **/
/** chunk id: 621586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
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
  Chunk842350 = require("./842350.js");
let x = "vc-gifting-".concat((0, Chunk772848.Z)());

function E(e) {
  var t;
  let {
    isHovered: n,
    closePopout: l,
    onMouseEnter: E,
    onMouseLeave: j,
    channel: S
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
      guildId: (0, f.ac)(),
      numWishlistItems: m.W
    });
  return r.useEffect(() => {
    0 !== N.length && h.default.track(C.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
      guild_id: S.guild_id,
      channel_id: S.id,
      sku_ids: N
    })
  }, [S.id, S.guild_id, N]), (0, i.jsx)(d.Z, {
    children: (0, i.jsx)(a.VqE, {
      "aria-labelledby": x,
      modal: false,
      children: (0, i.jsxs)("div", {
        className: O.container,
        onMouseEnter: E,
        onMouseLeave: j,
        children: [(0, i.jsx)(a.X6q, {
          className: O.title,
          variant: "text-lg/bold",
          color: "text-strong",
          children: _.intl.string(_.t.xLP3bi)
        }), (0, i.jsx)(a.xvT, {
          className: O.subtitle,
          variant: "text-sm/medium",
          color: "text-subtle",
          children: _.intl.format(_.t["+SqhBF"], {
            applicationName: null != (t = null == P ? true : P.name) ? t : _.intl.string(_.t["/1hhto"])
          })
        }), (0, i.jsx)("div", {
          className: O.wishlistItemsContainer,
          children: Z || 0 === T.length ? (0, i.jsx)(a.$jN, {
            className: O.loading
          }) : T.map(e => (0, i.jsx)(s.i_, {
            body: _.intl.string(_.t["4yiU7x"]),
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