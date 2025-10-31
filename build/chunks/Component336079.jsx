/** Chunk was on 48502 **/
/** chunk id: 336079, original params: e,t,n (module,exports,require) **/
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
      loadId: n,
      analyticsLocations: i,
      onCheckoutSuccess: f,
      children: b
    } = e, y = (0, a.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())), {
      product: O
    } = (0, o.T)(t), m = (0, l.useMemo)(() => {
      if (null == O) return null;
      let e = (0, s.T4)({
          product: O,
          isPremiumUser: y
        }),
        t = null !== e ? e.amount : null;
      return {
        orbPrice: e,
        orbPriceAmount: t,
        product: O
      }
    }, [O, y]), {
      redeemVirtualCurrency: g,
      isSubmitting: h,
      error: v
    } = (0, d.f)(), j = (0, l.useCallback)(e => {
      g(t, n, n => {
        f({
          entitlements: n,
          skuId: t
        }), e()
      })
    }, [t, n, g, f]);
    return (0, r.jsx)(p.Provider, {
      value: {
        skuId: t,
        loadId: n,
        analyticsLocations: null != i ? i : [],
        orbProductContext: m,
        onRedeemVirtualCurrency: j,
        isRedeeming: h,
        orbRedemptionError: v
      },
      children: b
    })
  },
  b = () => (0, Chunk647438.useContext)(p)