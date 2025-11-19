/** Chunk was on web.js **/
/** chunk id: 336079, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => p,
  d: () => _
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
    isRedeeming: false,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    isRental: false
  }),
  _ = e => {
    let {
      skuId: t,
      loadId: n,
      analyticsLocations: a,
      onCheckoutSuccess: _,
      isRental: p = false,
      children: h
    } = e, m = (0, o.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())), {
      product: g
    } = (0, s.T)(t), E = (0, i.useMemo)(() => {
      if (null == g) return null;
      let e = (0, l.T4)({
          product: g,
          isPremiumUser: m,
          isRental: p
        }),
        t = null !== e ? e.amount : null;
      return {
        orbPrice: e,
        orbPriceAmount: t,
        product: g
      }
    }, [g, m, p]), {
      redeemVirtualCurrency: b,
      isSubmitting: y,
      error: O
    } = (0, d.f)(), v = (0, i.useCallback)(e => {
      b(t, n, n => {
        _({
          entitlements: n,
          skuId: t
        }), e()
      }, p)
    }, [t, n, b, _, p]);
    return (0, r.jsx)(f.Provider, {
      value: {
        skuId: t,
        loadId: n,
        analyticsLocations: null != a ? a : [],
        orbProductContext: E,
        onRedeemVirtualCurrency: v,
        isRedeeming: y,
        orbRedemptionError: O,
        isRental: p
      },
      children: h
    })
  },
  p = () => (0, Chunk473749.useContext)(f)