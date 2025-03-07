/** Chunk was on 24389 **/
n.d(t, {
  F: () => d
}), n(757143), n(301563);
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(481060),
  a = n(937615),
  s = n(884697),
  c = n(182528);
let u = e => e.length > 5 ? e.replace(/\.00$/, "") : e,
  d = e => {
    var t;
    let {
      price: {
        amount: n,
        currency: i
      },
      renderPrice: d,
      icon: b,
      className: h,
      discount: p = s.f_,
      variant: f = "heading-md/semibold"
    } = e, g = u((0, a.T4)(n, i)), O = p !== s.f_ && p.discountPercentage >= 5 ? (0, r.jsxs)(r.Fragment, {
      children: [g, (0, r.jsx)(l.X6q, {
        variant: f,
        color: "text-positive",
        className: c.discount,
        children: " (-".concat(p.discountPercentage, "%)")
      })]
    }) : g;
    return (0, r.jsxs)(l.X6q, {
      variant: f,
      className: o()(c.container, h),
      children: [b, null !== (t = null == d ? void 0 : d(O)) && void 0 !== t ? t : O]
    })
  }