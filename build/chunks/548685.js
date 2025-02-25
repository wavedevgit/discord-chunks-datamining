/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => v
}), r(47120);
var n = r(200651),
  i = r(192379),
  l = r(120356),
  o = r.n(l),
  a = r(442837),
  s = r(481060),
  c = r(594174),
  d = r(381585),
  u = r(597688),
  p = r(937510),
  f = r(38900),
  h = r(709999),
  b = r(957058),
  C = r(215023),
  m = r(388032),
  g = r(974492);
let v = e => {
  let {
    isLoading: t,
    rankedSkuIds: r,
    handleTransition: l,
    numVisibleItems: v,
    tab: x
  } = e, j = (0, a.e7)([c.default], () => c.default.getCurrentUser()), _ = i.createRef(), y = (0, b.u)(), O = i.useMemo(() => y(r), [t, y, r]), k = (0, p.l)(O);
  return null == j ? null : (0, n.jsxs)("div", {
    className: o()(g.row, g.between, g.section, g.popularPicksSection),
    children: [(0, n.jsxs)("div", {
      className: g.popularPicksHeader,
      children: [(0, n.jsx)(s.X6q, {
        variant: "heading-lg/semibold",
        children: m.NW.string(m.t.ivaAAw)
      }), x === C.AW.HOME && (0, n.jsxs)(s.P3F, {
        className: g.shopAll,
        onClick: () => l("shop all top"),
        children: [(0, n.jsx)(s.dRF, {}), (0, n.jsx)(s.Text, {
          variant: "text-sm/medium",
          children: m.NW.string(m.t.xFcotb)
        })]
      })]
    }), (0, n.jsx)("div", {
      className: g.feed,
      ref: _,
      children: t ? (0, n.jsx)(n.Fragment, {
        children: [...Array(12)].map((e, t) => (0, n.jsx)(f.K, {}, t + 1))
      }) : (0, n.jsx)(n.Fragment, {
        children: k.slice(0, v).map((e, t) => {
          let r = u.Z.getCategoryForProduct(e.skuId);
          return null == e || null == r ? null : (0, n.jsx)(d.k0, {
            newValue: {
              tilePosition: t,
              pageSection: "popular picks",
              categoryPosition: 2
            },
            children: (0, n.jsx)(h.Z, {
              product: e,
              category: r,
              user: j,
              tab: x,
              isInFeedView: !0
            }, e.skuId)
          }, null == e ? void 0 : e.skuId)
        })
      })
    })]
  })
}