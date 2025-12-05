/** Chunk was on 88282 **/
/** chunk id: 311583, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk994587 = require("./994587.jsx"),
  Chunk429368 = require("./429368.js"),
  Chunk680942 = require("./680942.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk58201 = require("./58201.js"),
  Chunk694364 = require("./694364.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx");
let x = e => {
    let {
      product: t,
      selectedVariantIndex: n,
      cardRef: o,
      onClick: u,
      icon: x,
      prioritizedCurrency: f,
      onClickAnalytics: g
    } = e, b = (0, s.Nd)(), v = null == b ? true : b.tab, j = (0, i.sp)(), _ = (0, m.J)(t, f), y = (0, d.J7)(t, r.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, g);
    return null != u || null != x ? (0, a.jsx)(l.hU, {
      variant: "primary",
      "aria-label": h.intl.string(h.t.SKNnqq),
      icon: null != x ? x : l.tEF,
      onClick: e => {
        e.stopPropagation(), null != u ? u(t.skuId) : y(e)
      }
    }) : _ ? (0, a.jsx)(i.k0, {
      newValue: {
        pageCategory: v === p.AW.HOME || null == j ? true : j.pageCategory
      },
      children: (0, a.jsx)(c.Z, {
        primary: true,
        product: t,
        selectedVariantIndex: n,
        returnRef: o,
        tooltipDelay: 250
      })
    }) : null
  },
  f = e => {
    let {
      skuId: t,
      cardRef: n,
      onClick: l,
      icon: r,
      prioritizedCurrency: i,
      onClickAnalytics: s
    } = e, c = (0, d.LJ)(t), m = (0, o.o)(c);
    if (null == c) return null;
    let p = (0, u.W)(c, m);
    return (0, a.jsx)(x, {
      product: p,
      cardRef: n,
      selectedVariantIndex: m,
      onClick: l,
      icon: r,
      prioritizedCurrency: i,
      onClickAnalytics: s
    })
  }