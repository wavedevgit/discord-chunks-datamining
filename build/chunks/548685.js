/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  i = n(481060),
  d = n(594174),
  c = n(381585),
  u = n(597688),
  g = n(937510),
  h = n(38900),
  f = n(709999),
  m = n(957058),
  p = n(215023),
  b = n(388032),
  C = n(39532);
let _ = e => {
  let {
    isLoading: t,
    rankedSkuIds: n,
    handleTransition: a,
    numVisibleItems: _,
    tab: x
  } = e, v = (0, o.e7)([d.default], () => d.default.getCurrentUser()), k = l.createRef(), j = (0, m.u)(), S = l.useMemo(() => j(n), [t, j, n]), y = (0, g.l)(S);
  return null == v ? null : (0, r.jsxs)("div", {
    className: s()(C.row, C.between, C.section, C.popularPicksSection),
    children: [(0, r.jsxs)("div", {
      className: C.popularPicksHeader,
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-lg/semibold",
        children: b.NW.string(b.t.ivaAAw)
      }), x === p.AW.HOME && (0, r.jsxs)(i.P3F, {
        className: C.shopAll,
        onClick: () => a("shop all top"),
        children: [(0, r.jsx)(i.dRF, {}), (0, r.jsx)(i.Text, {
          variant: "text-sm/medium",
          children: b.NW.string(b.t.xFcotb)
        })]
      })]
    }), (0, r.jsx)("div", {
      className: C.feed,
      ref: k,
      children: t ? (0, r.jsx)(r.Fragment, {
        children: [...Array(12)].map((e, t) => (0, r.jsx)(h.K, {}, t + 1))
      }) : (0, r.jsx)(r.Fragment, {
        children: y.slice(0, _).map((e, t) => {
          let n = u.Z.getCategoryForProduct(e.skuId);
          return null == e || null == n ? null : (0, r.jsx)(c.k0, {
            newValue: {
              tilePosition: t,
              pageSection: "popular picks",
              categoryPosition: 2
            },
            children: (0, r.jsx)(f.Z, {
              product: e,
              category: n,
              user: v,
              tab: x,
              isInFeedView: !0
            }, e.skuId)
          }, null == e ? void 0 : e.skuId)
        })
      })
    })]
  })
}