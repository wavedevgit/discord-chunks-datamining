/** Chunk was on 1272 (d2669c1c27f74703.js) **/
n.d(t, {
  I: () => f,
  Z: () => m
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(481060),
  s = n(706454),
  c = n(959165),
  u = n(164991),
  d = n(783393),
  p = n(533703),
  h = n(363885);

function f(e) {
  let {
    categoryId: t,
    loadId: n
  } = e;
  u.Z.setState({
    categoryId: t
  }), c.Z.loadCategoryResults({
    loadId: n,
    categoryId: t,
    query: u.Z.getField("fetchedQuery"),
    languageCode: u.Z.getField("languageCode")
  })
}

function g(e) {
  let {
    loadId: t,
    categoryId: n,
    count: l
  } = e, c = i.useCallback(() => {
    f({
      categoryId: n,
      loadId: t
    })
  }, [n, t]), p = u.Z.useField("categoryId") === n, g = l.toLocaleString(s.default.locale), m = (0, d.E)({
    categoryId: n
  });
  return (0, r.jsxs)(a.P3F, {
    onClick: c,
    className: o()(h.category, {
      [h.selected]: p
    }),
    children: [(0, r.jsx)(a.Text, {
      className: h.name,
      variant: "text-sm/medium",
      color: "header-primary",
      children: m
    }), (0, r.jsx)(a.Text, {
      className: h.count,
      variant: "text-sm/normal",
      color: "text-muted",
      children: g
    })]
  })
}
let m = function(e) {
  let {
    loadId: t
  } = e, n = (0, p.q)();
  return null == n ? null : (0, r.jsx)("div", {
    className: h.categories,
    children: n.map(e => {
      let [n, i] = e;
      return (0, r.jsx)(g, {
        loadId: t,
        categoryId: n,
        count: i
      }, n)
    })
  })
}