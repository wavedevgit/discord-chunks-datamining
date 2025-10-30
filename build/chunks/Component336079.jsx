/** Chunk was on 72740 **/
/** chunk id: 336079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => f,
  d: () => b
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
  b = e => {
    let {
      skuId: t,
      loadId: n,
      analyticsLocations: a,
      onCheckoutSuccess: b,
      children: f
    } = e, y = (0, i.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())), {
      product: O
    } = (0, o.T)(t), v = (0, l.useMemo)(() => {
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
      redeemVirtualCurrency: m,
      isSubmitting: g,
      error: h
    } = (0, d.f)(), j = (0, l.useCallback)(e => {
      m(t, n, n => {
        b({
          entitlements: n,
          skuId: t
        }), e()
      })
    }, [t, n, m, b]);
    return (0, r.jsx)(p.Provider, {
      value: {
        skuId: t,
        loadId: n,
        analyticsLocations: null != a ? a : [],
        orbProductContext: v,
        onRedeemVirtualCurrency: j,
        isRedeeming: g,
        orbRedemptionError: h
      },
      children: f
    })
  },
  f = () => (0, Chunk647438.useContext)(p)