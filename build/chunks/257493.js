/** Chunk was on 89001 **/
r.d(t, {
  C: () => c,
  d: () => o
});
var n = r(200651),
  s = r(192379),
  i = r(43747);
let l = (0, s.createContext)({
    skuId: "123",
    isRedeeming: !1,
    orbRedemptionError: null,
    onRedeemVirtualCurrency: () => {}
  }),
  o = e => {
    let {
      skuId: t,
      onCheckoutSuccess: r,
      children: o
    } = e, {
      redeemVirtualCurrency: c,
      isSubmitting: a,
      error: u
    } = (0, i.f)(), d = (0, s.useCallback)(e => {
      c(t, n => {
        r({
          entitlements: n,
          skuId: t
        }), e()
      })
    }, [t, c, r]);
    return (0, n.jsx)(l.Provider, {
      value: {
        skuId: t,
        onRedeemVirtualCurrency: d,
        isRedeeming: a,
        orbRedemptionError: u
      },
      children: o
    })
  },
  c = () => (0, s.useContext)(l)