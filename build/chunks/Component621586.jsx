/** Chunk was on 34740 **/
/** chunk id: 621586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk835473 = require("./835473.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk390322 = require("./390322.js"),
  Chunk626135 = require("./626135.js"),
  Chunk164670 = require("./164670.js"),
  Chunk81939 = require("./81939.js"),
  Chunk851397 = require("./851397.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk842350 = require("./842350.js");
let y = "vc-gifting-".concat((0, Chunk772848.Z)());

function C(e) {
  var t;
  let {
    isHovered: n,
    closePopout: l,
    onMouseEnter: C,
    onMouseLeave: v,
    channel: _
  } = e;
  r.useEffect(() => {
    n || l()
  }, [l, n]);
  let x = (0, o.q)(f.t9),
    {
      loading: j,
      wishlistItems: O,
      wishlistItemSkuIds: E
    } = (0, p.Z)({
      guildId: (0, d.ac)()
    });
  return r.useEffect(() => {
    0 !== E.length && u.default.track(m.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
      guild_id: _.guild_id,
      channel_id: _.id,
      sku_ids: E
    })
  }, [_.id, _.guild_id, E]), (0, i.jsx)(c.Z, {
    children: (0, i.jsx)(a.VqE, {
      "aria-labelledby": y,
      modal: false,
      children: (0, i.jsxs)("div", {
        className: b.container,
        onMouseEnter: C,
        onMouseLeave: v,
        children: [(0, i.jsx)(a.X6q, {
          className: b.title,
          variant: "text-lg/bold",
          color: "text-primary",
          children: g.intl.string(g.t.xLP3bi)
        }), (0, i.jsx)(a.xvT, {
          className: b.subtitle,
          variant: "text-sm/medium",
          color: "text-secondary",
          children: g.intl.format(g.t["+SqhBF"], {
            applicationName: null != (t = null == x ? true : x.name) ? t : g.intl.string(g.t["/1hhto"])
          })
        }), (0, i.jsx)("div", {
          className: b.wishlistItemsContainer,
          children: j || 0 === O.length ? (0, i.jsx)(a.$jN, {
            className: b.loading
          }) : O.map(e => (0, i.jsx)(h.Z, {
            item: e,
            wishlistId: null,
            isOwner: false,
            cardSize: s.U.SMALL,
            showOverlayButton: true,
            hideButtonIcon: true,
            showPrice: true
          }, e.skuId))
        })]
      })
    })
  })
}