/** Chunk was on 22477 **/
/** chunk id: 157200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk161918 = require("./161918.jsx"),
  Chunk298072 = require("./298072.js"),
  Chunk878112 = require("./878112.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk767503 = require("./767503.js"),
  Chunk347722 = require("./347722.js"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx");
let f = e => {
    let {
      product: t,
      selectedVariantIndex: n,
      cardRef: o,
      onClick: u,
      icon: f,
      prioritizedCurrency: x,
      onClickAnalytics: b
    } = e, g = (0, s.Mk)(), v = null == g ? true : g.tab, j = (0, r.uM)(), y = (0, m.X)(t, x), _ = (0, d.ql)(t, i.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, b);
    return null != u || null != f ? (0, a.jsx)(l.K0, {
      variant: "primary",
      "aria-label": h.intl.string(h.t.SKNnqq),
      icon: null != f ? f : l.bMW,
      onClick: e => {
        e.stopPropagation(), null != u ? u(t.skuId) : _(e)
      }
    }) : y ? (0, a.jsx)(r.R9, {
      newValue: {
        pageCategory: v === p.G2.HOME || null == j ? true : j.pageCategory
      },
      children: (0, a.jsx)(c.A, {
        primary: true,
        product: t,
        selectedVariantIndex: n,
        returnRef: o,
        tooltipDelay: 250
      })
    }) : null
  },
  x = e => {
    let {
      skuId: t,
      cardRef: n,
      onClick: l,
      icon: i,
      prioritizedCurrency: r,
      onClickAnalytics: s
    } = e, c = (0, d.Vm)(t), m = (0, o.Q)(c);
    if (null == c) return null;
    let p = (0, u.r)(c, m);
    return (0, a.jsx)(f, {
      product: p,
      cardRef: n,
      selectedVariantIndex: m,
      onClick: l,
      icon: i,
      prioritizedCurrency: r,
      onClickAnalytics: s
    })
  }