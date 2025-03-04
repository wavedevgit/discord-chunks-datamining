/** Chunk was on 2026 **/
n.d(t, {
  Z: () => c
});
var r = n(200651),
  i = n(481060),
  a = n(688465),
  s = n(755007),
  o = n(388032),
  l = n(172110);

function c(e) {
  let {
    orbPrice: t
  } = e;
  return (0, r.jsxs)("div", {
    className: l.priceLine,
    children: [(0, r.jsxs)("div", {
      className: l.orbText,
      children: [(0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: o.NW.string(o.t.eFNRzc)
      }), (0, r.jsx)(a.Z, {})]
    }), (0, r.jsx)(s.Z, {
      orbAmount: t.amount,
      showInsufficientOrbBalanceTooltip: !0
    })]
  })
}