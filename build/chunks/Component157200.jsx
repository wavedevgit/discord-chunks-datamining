/** Chunk was on 22477 **/
/** chunk id: 157200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk161918 = require("./161918.jsx"),
  Chunk298072 = require("./298072.js"),
  Chunk623373 = require("./623373.js"),
  Chunk878112 = require("./878112.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk347722 = require("./347722.js"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx");
let x = e => {
    let {
      product: t,
      selectedVariantIndex: n,
      cardRef: o,
      onClick: c,
      icon: x,
      prioritizedCurrency: g,
      onClickAnalytics: f
    } = e, b = (0, s.Mk)(), v = null == b ? true : b.tab, j = (0, i.uM)(), _ = (0, m.X)(t, g), y = (0, u.ql)(t, r.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, f);
    return null != c || null != x ? (0, a.jsx)(l.K0, {
      variant: "primary",
      "aria-label": h.intl.string(h.t.SKNnqq),
      icon: null != x ? x : l.bMW,
      onClick: e => {
        e.stopPropagation(), null != c ? c(t.skuId) : y(e)
      }
    }) : _ ? (0, a.jsx)(i.R9, {
      newValue: {
        pageCategory: v === p.G2.HOME || null == j ? true : j.pageCategory
      },
      children: (0, a.jsx)(d.A, {
        primary: true,
        product: t,
        selectedVariantIndex: n,
        returnRef: o,
        tooltipDelay: 250
      })
    }) : null
  },
  g = e => {
    let {
      skuId: t,
      cardRef: n,
      onClick: l,
      icon: r,
      prioritizedCurrency: i,
      onClickAnalytics: s
    } = e, d = (0, u.Vm)(t), m = (0, o.Q)(d);
    if (null == d) return null;
    let p = (0, c.rb)(d, m);
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