/** Chunk was on 2026 **/
n.d(t, {
  Z: () => c
});
var i = n(200651),
  a = n(481060),
  r = n(688465),
  s = n(755007),
  l = n(388032),
  o = n(605510);

function c(e) {
  let {
    orbPrice: t
  } = e;
  return (0, i.jsxs)("div", {
    className: o.priceLine,
    children: [(0, i.jsxs)("div", {
      className: o.orbText,
      children: [(0, i.jsx)(a.Text, {
        variant: "text-xs/normal",
        children: l.NW.string(l.t.eFNRzc)
      }), (0, i.jsx)(r.Z, {})]
    }), (0, i.jsx)(s.Z, {
      orbAmount: t.amount,
      showInsufficientOrbBalanceTooltip: !0
    })]
  })
}