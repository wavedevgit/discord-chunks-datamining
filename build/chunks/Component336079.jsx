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
    onRedeemVirtualCurrency: () => {}
  }),
  _ = e => {
    let {
      skuId: t,
      loadId: n,
      analyticsLocations: a,
      onCheckoutSuccess: _,
      children: p
    } = e, h = (0, o.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())), {
      product: m
    } = (0, s.T)(t), g = (0, i.useMemo)(() => {
      if (null == m) return null;
      let e = (0, l.T4)({
          product: m,
          isPremiumUser: h
        }),
        t = null !== e ? e.amount : null;
      return {
        orbPrice: e,
        orbPriceAmount: t,
        product: m
      }
    }, [m, h]), {
      redeemVirtualCurrency: E,
      isSubmitting: b,
      error: y
    } = (0, d.f)(), O = (0, i.useCallback)(e => {
      E(t, n, n => {
        _({
          entitlements: n,
          skuId: t
        }), e()
      })
    }, [t, n, E, _]);
    return (0, r.jsx)(f.Provider, {
      value: {
        skuId: t,
        loadId: n,
        analyticsLocations: null != a ? a : [],
        orbProductContext: g,
        onRedeemVirtualCurrency: O,
        isRedeeming: b,
        orbRedemptionError: y
      },
      children: p
    })
  },
  p = () => (0, Chunk473749.useContext)(f)