/** Chunk was on 2026 **/
n.d(t, {
  Z: () => c
});
var r = n(200651),
  i = n(481060),
  a = n(688465),
  s = n(755007),
  l = n(388032),
  o = n(172110);

function c(e) {
  let {
    orbPrice: t
  } = e;
  return (0, r.jsxs)("div", {
    className: o.priceLine,
    children: [(0, r.jsxs)("div", {
      className: o.orbText,
      children: [(0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: l.NW.string(l.t.eFNRzc)
      }), (0, r.jsx)(a.Z, {})]
    }), (0, r.jsx)(s.Z, {
      orbAmount: t.amount,
      showInsufficientOrbBalanceTooltip: !0
    })]
  })
}