/** Chunk was on 1272 (2c78ad33b01d1e4b.js) **/
n.d(t, {
  Z: () => f
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(481060),
  a = n(959165),
  s = n(164991),
  c = n(526429),
  u = n(128449),
  d = n(388032),
  p = n(391308),
  h = n(882008);
let f = function(e) {
  let {
    loadId: t
  } = e, n = s.Z.useField("categoryId"), f = (0, l.e7)([c.Z], () => c.Z.getCategoryName(n)), g = i.useCallback(() => {
    s.Z.setState({
      categoryId: u.Hk
    }), a.Z.loadCategoryResults({
      loadId: t,
      categoryId: u.Hk,
      query: s.Z.getField("fetchedQuery"),
      languageCode: s.Z.getField("languageCode")
    })
  }, [t]), m = n === u.Hk ? d.NW.string(d.t.Ivw1Ii) : d.NW.formatToPlainString(d.t["+1WAFR"], {
    categoryName: f
  }), b = n === u.Hk ? d.NW.string(d.t.aXvEjY) : d.NW.format(d.t.XLioqq, {
    onClick: g
  });
  return (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: h,
      className: p.image
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-xl/semibold",
      className: p.header,
      children: m
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: b
    })]
  })
}