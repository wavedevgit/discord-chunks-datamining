/** Chunk was on 14953 **/
/** chunk id: 636466, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => g,
  J: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728345 = require("./728345.js"),
  Chunk766717 = require("./766717.jsx"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk758650 = require("./758650.js"),
  Chunk976218 = require("./976218.js");

function h(e, t) {
  let {
    moreCount: n,
    onViewWishlist: i,
    isSingleCard: l = false,
    profileOwner: p,
    analyticsLocations: h,
    wishlistId: f
  } = t, g = null != n && n > 0, m = g ? d.intl.string(d.t.TxBQzD) : d.intl.string(d.t.ilhtIa);
  return (0, r.jsx)(a.Z, {
    onCardClick: () => {
      if (g) return void i();
      (0, s.P)(e.sku, {
        isGift: true,
        giftRecipient: p,
        giftingOrigin: c.Wt.USER_PROFILE_WISHLIST
      })
    },
    tooltipText: m,
    shouldScalePreview: false,
    renderPreview: () => (0, r.jsx)(o.A, {
      containerClassName: u.card,
      backgroundImageClassName: u.cardBackgroundImage,
      foregroundImageClassName: u.cardImage,
      sku: e.sku,
      shape: "custom"
    }),
    moreCount: n,
    isSingleCard: l,
    skuId: e.skuId,
    analyticsLocations: h,
    wishlistId: f
  }, e.skuId)
}

function f(e) {
  let {
    item: t,
    card: n,
    profileOwner: a
  } = e, {
    data: o
  } = (0, l.IX)(t.sku.applicationId);
  return (0, r.jsxs)("div", {
    className: p.singleItemContainer,
    children: [n, (0, r.jsx)("div", {
      className: p.singleItemInfo,
      children: (0, r.jsxs)(i.P3F, {
        onClick: () => {
          (0, s.P)(t.sku, {
            isGift: true,
            giftRecipient: a,
            giftingOrigin: c.Wt.USER_PROFILE_WISHLIST
          })
        },
        className: p.singleItemName,
        "aria-label": d.intl.string(d.t.ilhtIa),
        children: [(0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          lineClamp: 2,
          children: t.skuName
        }), (0, r.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: d.intl.format(d.t["CqpEC+"], {
            applicationName: null == o ? true : o.name
          })
        })]
      })
    })]
  })
}

function g(e, t) {
  let {
    profileOwner: n,
    analyticsLocations: i,
    wishlistId: l
  } = t, a = h(e, {
    profileOwner: n,
    analyticsLocations: i,
    onViewWishlist: () => {},
    isSingleCard: true,
    wishlistId: l
  });
  return (0, r.jsx)(f, {
    item: e,
    card: a,
    profileOwner: n
  })
}