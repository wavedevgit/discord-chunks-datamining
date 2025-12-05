/** Chunk was on web.js **/
/** chunk id: 336079, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CH: () => m,
  Gw: () => p,
  dv: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk583434 = require("./583434.js"),
  Chunk27123 = require("./27123.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk43747 = require("./43747.js");
let f = (0, Chunk473749.createContext)({
    skuId: "123",
    loadId: (0, Chunk772848.Z)(),
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
    } = e, p = (0, o.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())), {
      product: _
    } = (0, s.T)(t), m = (0, i.useMemo)(() => {
      if (null == _) return null;
      let e = (0, l.T4)({
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
      redeemVirtualCurrency: h,
      isSubmitting: g,
      error: E
    } = (0, d.f)(), b = (0, i.useCallback)(e => {
      h(t, n, n => {
        a({
          entitlements: n,
          skuId: t
        }), e()
      }, null != f)
    }, [t, n, h, a, f]);
    return {
      skuId: t,
      loadId: n,
      analyticsLocations: null != r ? r : [],
      product: _,
      orbProductContext: m,
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
      onCheckoutSuccess: o,
      rentalDuration: s,
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
      onCheckoutSuccess: o,
      rentalDuration: s
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
        rentalDuration: s
      },
      children: l
    })
  },
  m = () => (0, Chunk473749.useContext)(f)