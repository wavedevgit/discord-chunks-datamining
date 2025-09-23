/** Chunk was on 37786 **/
/** chunk id: 973007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk266198 = require("./266198.js"),
  Chunk744129 = require("./744129.jsx"),
  Chunk823188 = require("./823188.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk110449 = require("./110449.js");

function d(e) {
  let {
    onClick: t,
    isGift: n,
    priceOptions: s,
    showPromotionalGiftBanner: d,
    enablePremiumBrandRefresh: c
  } = e, {
    isEligible: u
  } = (0, l.Q1)();
  return c ? (0, r.jsx)(i.P3F, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, r.jsx)(o.IL, {
      ctaButton: null,
      showPromotionalGiftBanner: d,
      showSeptemberMarketingMomentBanner: u,
      showYearlyPrice: true,
      isGift: n,
      isModal: true,
      priceOptions: s
    })
  }) : (0, r.jsx)(i.P3F, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, r.jsx)(a.wp, {
      className: C.tier2MarketingCard,
      ctaButton: null,
      showWumpus: !d,
      showPromotionalGiftBanner: d,
      showYearlyPrice: true,
      isGift: n,
      isModal: true,
      priceOptions: s
    })
  })
}

function c(e) {
  let {
    onClick: t,
    isGift: n,
    priceOptions: l,
    enablePremiumBrandRefresh: s
  } = e;
  return s ? (0, r.jsx)(i.P3F, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, r.jsx)(o.UQ, {
      className: C.premiumBrandRefreshTier0Card,
      ctaButton: null,
      showYearlyPrice: true,
      isGift: n,
      priceOptions: l
    })
  }) : (0, r.jsx)(i.P3F, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, r.jsx)(a.Gq, {
      className: C.tier0MarketingCard,
      ctaButton: null,
      showWumpus: true,
      showYearlyPrice: true,
      isGift: n,
      priceOptions: l
    })
  })
}
let u = function(e) {
  let {
    onSelectSku: t,
    isGift: n,
    priceOptions: i,
    showPromotionalGiftBanner: l,
    enablePremiumBrandRefresh: o
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d, {
      onClick: () => t(s.Si.TIER_2),
      isGift: n,
      priceOptions: i,
      showPromotionalGiftBanner: l,
      enablePremiumBrandRefresh: o
    }), (0, r.jsx)(c, {
      onClick: () => t(s.Si.TIER_0),
      isGift: n,
      priceOptions: i,
      enablePremiumBrandRefresh: o
    })]
  })
}