/** Chunk was on web.js **/
/** chunk id: 336079, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => h,
  d: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk583434 = require("./583434.js"),
  Chunk27123 = require("./27123.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk43747 = require("./43747.js"),
  Chunk215023 = require("./215023.js");
let _ = (0, Chunk473749.createContext)({
    skuId: "123",
    loadId: (0, Chunk772848.Z)(),
    analyticsLocations: [],
    isRedeeming: false,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    isRental: false
  }),
  p = e => {
    let {
      skuId: t,
      loadId: n,
      analyticsLocations: a,
      onCheckoutSuccess: p,
      isRental: h = false,
      children: m
    } = e, g = (0, o.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())), {
      product: E
    } = (0, s.T)(t), b = (0, i.useMemo)(() => {
      if (null == E) return null;
      let e = h ? f.sT : (0, l.T4)({
          product: E,
          isPremiumUser: g
        }),
        t = null !== e ? e.amount : null;
      return {
        orbPrice: e,
        orbPriceAmount: t,
        product: E
      }
    }, [E, g, h]), {
      redeemVirtualCurrency: y,
      isSubmitting: O,
      error: v
    } = (0, d.f)(), I = (0, i.useCallback)(e => {
      y(t, n, n => {
        p({
          entitlements: n,
          skuId: t
        }), e()
      }, h)
    }, [t, n, y, p, h]);
    return (0, r.jsx)(_.Provider, {
      value: {
        skuId: t,
        loadId: n,
        analyticsLocations: null != a ? a : [],
        orbProductContext: b,
        onRedeemVirtualCurrency: I,
        isRedeeming: O,
        orbRedemptionError: v,
        isRental: h
      },
      children: m
    })
  },
  h = () => (0, Chunk473749.useContext)(_)