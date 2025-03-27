/** Chunk was on 87791 **/
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
      icon: p,
      className: f,
      discount: h = s.f_,
      variant: m = "heading-md/semibold"
    } = e, _ = u((0, a.T4)(n, i)), b = h !== s.f_ && h.discountPercentage >= 5 ? (0, r.jsxs)(r.Fragment, {
      children: [_, (0, r.jsx)(l.X6q, {
        variant: m,
        color: "text-positive",
        className: c.discount,
        children: " (-".concat(h.discountPercentage, "%)")
      })]
    }) : _;
    return (0, r.jsxs)(l.X6q, {
      variant: m,
      className: o()(c.container, f),
      children: [p, null !== (t = null == d ? void 0 : d(b)) && void 0 !== t ? t : b]
    })
  }