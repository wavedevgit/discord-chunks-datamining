/** Chunk was on 71264 **/
/** chunk id: 621586, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk835473 = require("./835473.js"),
  Chunk688192 = require("./688192.jsx"),
  Chunk390322 = require("./390322.js"),
  Chunk81939 = require("./81939.js"),
  Chunk851397 = require("./851397.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk255839 = require("./255839.js");
let m = "vc-gifting-".concat((0, Chunk772848.Z)());

function g(e) {
  var t;
  let {
    isHovered: n,
    closePopout: l,
    onMouseEnter: g,
    onMouseLeave: b
  } = e;
  r.useEffect(() => {
    n || l()
  }, [l, n]);
  let y = (0, o.q)(p.t9),
    {
      loading: C,
      wishlistItems: v
    } = (0, u.Z)({
      guildId: p.ON
    });
  return (0, i.jsx)(c.Z, {
    children: (0, i.jsx)(a.VqE, {
      "aria-labelledby": m,
      modal: false,
      children: (0, i.jsxs)("div", {
        className: f.container,
        onMouseEnter: g,
        onMouseLeave: b,
        children: [(0, i.jsx)(a.X6q, {
          className: f.title,
          variant: "display-md",
          color: "text-primary",
          children: h.intl.string(h.t.xLP3bi)
        }), (0, i.jsx)(a.xvT, {
          className: f.subtitle,
          variant: "text-sm/medium",
          color: "text-secondary",
          children: h.intl.format(h.t["+SqhBF"], {
            applicationName: null != (t = null == y ? true : y.name) ? t : h.intl.string(h.t["/1hhto"])
          })
        }), (0, i.jsx)("div", {
          className: f.wishlistItemsContainer,
          children: C || 0 === v.length ? (0, i.jsx)(a.$jN, {
            className: f.loading
          }) : v.map(e => (0, i.jsx)(d.Z, {
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