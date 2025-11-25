/** Chunk was on 22002 **/
/** chunk id: 336079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CH: () => x,
  dv: () => b
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
let p = (0, Chunk473749.createContext)({
    skuId: "123",
    loadId: (0, Chunk772848.Z)(),
    analyticsLocations: [],
    analyticsSourceLocation: true,
    isRedeeming: false,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {},
    isRental: false
  }),
  b = e => {
    let {
      skuId: t,
      loadId: n,
      analyticsSourceLocation: i,
      analyticsLocations: b,
      onCheckoutSuccess: x,
      isRental: y = false,
      children: f
    } = e, {
      orbProductContext: m,
      onRedeemVirtualCurrency: j,
      isRedeeming: O,
      orbRedemptionError: g
    } = (e => {
      let {
        skuId: t,
        loadId: n,
        analyticsLocations: r,
        onCheckoutSuccess: i,
        isRental: p = false
      } = e, b = (0, s.e7)([c.default], () => u.ZP.canUseCollectibles(c.default.getCurrentUser())), {
        product: x
      } = (0, o.T)(t), y = (0, l.useMemo)(() => {
        if (null == x) return null;
        let e = (0, a.T4)({
            product: x,
            isPremiumUser: b,
            isRental: p
          }),
          t = null !== e ? e.amount : null;
        return {
          orbPrice: e,
          orbPriceAmount: t,
          product: x
        }
      }, [x, b, p]), {
        redeemVirtualCurrency: f,
        isSubmitting: m,
        error: j
      } = (0, d.f)(), O = (0, l.useCallback)(e => {
        f(t, n, n => {
          i({
            entitlements: n,
            skuId: t
          }), e()
        }, p)
      }, [t, n, f, i, p]);
      return {
        skuId: t,
        loadId: n,
        analyticsLocations: null != r ? r : [],
        product: x,
        orbProductContext: y,
        onRedeemVirtualCurrency: O,
        isRedeeming: m,
        orbRedemptionError: j,
        isRental: p
      }
    })({
      skuId: t,
      loadId: n,
      analyticsLocations: b,
      analyticsSourceLocation: i,
      onCheckoutSuccess: x,
      isRental: y
    });
    return (0, r.jsx)(p.Provider, {
      value: {
        skuId: t,
        loadId: n,
        analyticsLocations: null != b ? b : [],
        analyticsSourceLocation: i,
        orbProductContext: m,
        onRedeemVirtualCurrency: j,
        isRedeeming: O,
        orbRedemptionError: g,
        isRental: y
      },
      children: f
    })
  },
  x = () => (0, Chunk473749.useContext)(p)