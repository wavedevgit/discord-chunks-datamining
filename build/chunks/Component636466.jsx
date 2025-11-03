/** Chunk was on 91053 **/
/** chunk id: 636466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => f,
  J: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728345 = require("./728345.js"),
  Chunk766717 = require("./766717.jsx"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk758650 = require("./758650.js"),
  Chunk976218 = require("./976218.js");

function p(e, t) {
  let {
    moreCount: n,
    onViewWishlist: i,
    isSingleCard: l = false
  } = t, u = null != n && n > 0, p = u ? c.intl.string(c.t.TxBQzD) : c.intl.string(c.t.ilhtIa);
  return (0, r.jsx)(a.Z, {
    onCardClick: () => {
      if (u) return void i();
      (0, s.P)(e.sku, {
        isGift: true
      })
    },
    tooltipText: p,
    shouldScalePreview: false,
    renderPreview: () => (0, r.jsx)(o.A, {
      containerClassName: d.card,
      backgroundImageClassName: d.cardBackgroundImage,
      foregroundImageClassName: d.cardImage,
      sku: e.sku,
      shape: "custom"
    }),
    moreCount: n,
    isSingleCard: l
  }, e.skuId)
}

function h(e) {
  let {
    item: t,
    card: n
  } = e, {
    data: a
  } = (0, l.IX)(t.sku.applicationId);
  return (0, r.jsxs)("div", {
    className: u.singleItemContainer,
    children: [n, (0, r.jsx)("div", {
      className: u.singleItemInfo,
      children: (0, r.jsxs)(i.P3F, {
        onClick: () => {
          (0, s.P)(t.sku, {
            isGift: true
          })
        },
        className: u.singleItemName,
        "aria-label": c.intl.string(c.t.ilhtIa),
        children: [(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          lineClamp: 2,
          children: t.skuName
        }), (0, r.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: c.intl.format(c.t["CqpEC+"], {
            applicationName: null == a ? true : a.name
          })
        })]
      })
    })]
  })
}

function f(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: i
  } = t, l = p(e, {
    profileOwner: n,
    analyticsLocations: i,
    onViewWishlist: () => {},
    isSingleCard: true
  });
  return (0, r.jsx)(h, {
    item: e,
    card: l
  })
}