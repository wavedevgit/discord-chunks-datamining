/** Chunk was on 34740 **/
/** chunk id: 621586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk835473 = require("./835473.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk390322 = require("./390322.js"),
  Chunk626135 = require("./626135.js"),
  Chunk81939 = require("./81939.js"),
  Chunk851397 = require("./851397.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk842350 = require("./842350.js");
let b = "vc-gifting-".concat((0, Chunk772848.Z)());

function y(e) {
  var t;
  let {
    isHovered: n,
    closePopout: l,
    onMouseEnter: y,
    onMouseLeave: C,
    channel: v
  } = e;
  r.useEffect(() => {
    n || l()
  }, [l, n]);
  let _ = (0, o.q)(h.t9),
    {
      loading: x,
      wishlistItems: j,
      wishlistItemSkuIds: O
    } = (0, d.Z)({
      guildId: h.ON
    });
  return r.useEffect(() => {
    0 !== O.length && u.default.track(f.rMx.COMMERCE_SHOP_VC_GIFT_BUTTON_VIEWED, {
      guild_id: v.guild_id,
      channel_id: v.id,
      sku_ids: O
    })
  }, [v.id, v.guild_id, O]), (0, i.jsx)(c.Z, {
    children: (0, i.jsx)(a.VqE, {
      "aria-labelledby": b,
      modal: false,
      children: (0, i.jsxs)("div", {
        className: g.container,
        onMouseEnter: y,
        onMouseLeave: C,
        children: [(0, i.jsx)(a.X6q, {
          className: g.title,
          variant: "text-lg/bold",
          color: "text-primary",
          children: m.intl.string(m.t.xLP3bi)
        }), (0, i.jsx)(a.xvT, {
          className: g.subtitle,
          variant: "text-sm/medium",
          color: "text-secondary",
          children: m.intl.format(m.t["+SqhBF"], {
            applicationName: null != (t = null == _ ? true : _.name) ? t : m.intl.string(m.t["/1hhto"])
          })
        }), (0, i.jsx)("div", {
          className: g.wishlistItemsContainer,
          children: x || 0 === j.length ? (0, i.jsx)(a.$jN, {
            className: g.loading
          }) : j.map(e => (0, i.jsx)(p.Z, {
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