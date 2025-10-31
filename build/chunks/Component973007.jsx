/** Chunk was on 3270 **/
/** chunk id: 973007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => p,
  j8: () => u,
  jB: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk744129 = require("./744129.jsx"),
  Chunk823188 = require("./823188.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk402450 = require("./402450.js");

function C(e) {
  let {
    onClick: t,
    isGift: n,
    priceOptions: i,
    showPromotionalGiftBanner: l,
    enablePremiumBrandRefresh: d
  } = e;
  return d ? (0, r.jsx)(a.P3F, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, r.jsx)(s.IL, {
      ctaButton: null,
      showPromotionalGiftBanner: l,
      showYearlyPrice: true,
      isGift: n,
      isModal: true,
      priceOptions: i
    })
  }) : (0, r.jsx)(a.P3F, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, r.jsx)(o.wp, {
      className: c.tier2MarketingCard,
      ctaButton: null,
      showWumpus: !l,
      showPromotionalGiftBanner: l,
      showYearlyPrice: true,
      isGift: n,
      isModal: true,
      priceOptions: i
    })
  })
}

function u(e) {
  let {
    onClick: t,
    isGift: n,
    priceOptions: i,
    enablePremiumBrandRefresh: d,
    removeTopMargin: C
  } = e;
  return d ? (0, r.jsx)(a.P3F, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, r.jsx)(s.UQ, {
      className: l()({
        [c.premiumBrandRefreshTier0Card]: !C
      }),
      ctaButton: null,
      showYearlyPrice: true,
      isGift: n,
      priceOptions: i
    })
  }) : (0, r.jsx)(a.P3F, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, r.jsx)(o.Gq, {
      className: c.tier0MarketingCard,
      ctaButton: null,
      showWumpus: true,
      showYearlyPrice: true,
      isGift: n,
      priceOptions: i
    })
  })
}
let p = function(e) {
  let {
    onSelectSku: t,
    isGift: n,
    priceOptions: i,
    showPromotionalGiftBanner: l,
    enablePremiumBrandRefresh: a
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C, {
      onClick: () => t(d.Si.TIER_2),
      isGift: n,
      priceOptions: i,
      showPromotionalGiftBanner: l,
      enablePremiumBrandRefresh: a
    }), (0, r.jsx)(u, {
      onClick: () => t(d.Si.TIER_0),
      isGift: n,
      priceOptions: i,
      enablePremiumBrandRefresh: a
    })]
  })
}