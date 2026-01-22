/** Chunk was on web.js **/
/** chunk id: 775420, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z9: () => _,
  e6: () => p,
  rp: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk674658 = require("./674658.js"),
  Chunk623373 = require("./623373.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk715054 = require("./715054.js");
let f = (0, Chunk64700.createContext)({
    skuId: "123",
    loadId: (0, Chunk835245.A)(),
    analyticsLocations: [],
    analyticsSourceLocation: true,
    isRedeeming: false,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    rentalDuration: true
  }),
  p = e => {
    let {
      skuId: t,
      loadId: n,
      analyticsLocations: r,
      onCheckoutSuccess: a,
      rentalDuration: f
    } = e, p = (0, s.bG)([c.default], () => u.Ay.canUseCollectibles(c.default.getCurrentUser())), {
      product: _
    } = (0, o.q)(t), h = (0, i.useMemo)(() => {
      if (null == _) return null;
      let e = (0, l.CW)({
          product: _,
          isPremiumUser: p,
          isRental: null != f
        }),
        t = null !== e ? e.amount : null;
      return {
        orbPrice: e,
        orbPriceAmount: t,
        product: _
      }
    }, [_, p, f]), {
      redeemVirtualCurrency: m,
      isSubmitting: g,
      error: E
    } = (0, d.Q)({
      skuId: t,
      loadId: n
    }), b = (0, i.useCallback)(e => {
      m(t, n, n => {
        a({
          entitlements: n,
          skuId: t
        }), e()
      }, null != f)
    }, [t, n, m, a, f]);
    return {
      skuId: t,
      loadId: n,
      analyticsLocations: null != r ? r : [],
      product: _,
      orbProductContext: h,
      onRedeemVirtualCurrency: b,
      isRedeeming: g,
      orbRedemptionError: E,
      rentalDuration: f
    }
  },
  _ = e => {
    let {
      skuId: t,
      loadId: n,
      analyticsSourceLocation: i,
      analyticsLocations: a,
      onCheckoutSuccess: s,
      rentalDuration: o,
      children: l
    } = e, {
      orbProductContext: c,
      onRedeemVirtualCurrency: u,
      isRedeeming: d,
      orbRedemptionError: _
    } = p({
      skuId: t,
      loadId: n,
      analyticsLocations: a,
      onCheckoutSuccess: s,
      rentalDuration: o
    });
    return (0, r.jsx)(f.Provider, {
      value: {
        skuId: t,
        loadId: n,
        analyticsLocations: null != a ? a : [],
        analyticsSourceLocation: i,
        orbProductContext: c,
        onRedeemVirtualCurrency: u,
        isRedeeming: d,
        orbRedemptionError: _,
        rentalDuration: o
      },
      children: l
    })
  },
  h = () => (0, i.useContext)(f)