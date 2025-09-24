/** Chunk was on 204 **/
/** chunk id: 336079, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C: () => b,
  d: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk583434 = require("./583434.js"),
  Chunk27123 = require("./27123.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk43747 = require("./43747.js");
let p = (0, Chunk647438.createContext)({
    skuId: "123",
    loadId: (0, Chunk772848.Z)(),
    analyticsLocations: [],
    isRedeeming: false,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {}
  }),
  f = e => {
    let {
      skuId: t,
      loadId: r,
      analyticsLocations: i,
      onCheckoutSuccess: f,
      children: b
    } = e, g = (0, a.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())), {
      product: h
    } = (0, o.T)(t), y = (0, l.useMemo)(() => {
      if (null == h) return null;
      let e = (0, s.T)({
          product: h,
          isPremiumUser: g
        }),
        t = null !== e ? e.amount : null;
      return {
        orbPrice: e,
        orbPriceAmount: t,
        product: h
      }
    }, [h, g]), {
      redeemVirtualCurrency: m,
      isSubmitting: O,
      error: v
    } = (0, d.f)(), j = (0, l.useCallback)(e => {
      m(t, r, r => {
        f({
          entitlements: r,
          skuId: t
        }), e()
      })
    }, [t, r, m, f]);
    return (0, n.jsx)(p.Provider, {
      value: {
        skuId: t,
        loadId: r,
        analyticsLocations: null != i ? i : [],
        orbProductContext: y,
        onRedeemVirtualCurrency: j,
        isRedeeming: O,
        orbRedemptionError: v
      },
      children: b
    })
  },
  b = () => (0, Chunk647438.useContext)(p)