/** Chunk was on 2026 **/
n.d(t, {
  Z: () => c
});
var r = n(200651),
  i = n(481060),
  a = n(688465),
  l = n(755007),
  o = n(388032),
  s = n(172110);

function c(e) {
  var t;
  let {
    orbPrice: n
  } = e;
  return (0, r.jsxs)("div", {
    className: s.priceLine,
    children: [(0, r.jsxs)("div", {
      className: s.orbText,
      children: [(0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: o.NW.string(o.t.eFNRzc)
      }), (0, r.jsx)(a.Z, {})]
    }), (0, r.jsx)(l.Z, {
      orbAmount: null !== (t = null == n ? void 0 : n.amount) && void 0 !== t ? t : 1 / 0,
      showInsufficientOrbBalanceTooltip: !0
    })]
  })
}