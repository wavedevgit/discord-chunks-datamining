/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  F: () => u
}), r(757143), r(301563);
var n = r(200651);
r(192379);
var l = r(120356),
  i = r.n(l),
  o = r(481060),
  a = r(937615),
  s = r(884697),
  c = r(182528);
let d = e => e.length > 5 ? e.replace(/\.00$/, "") : e,
  u = e => {
    var t;
    let {
      price: {
        amount: r,
        currency: l
      },
      renderPrice: u,
      icon: p,
      className: f,
      discount: b = s.f_,
      variant: h = "heading-md/semibold"
    } = e, m = d((0, a.T4)(r, l)), C = b !== s.f_ && b.discountPercentage >= 5 ? (0, n.jsxs)(n.Fragment, {
      children: [m, (0, n.jsx)(o.X6q, {
        variant: h,
        color: "text-positive",
        className: c.discount,
        children: " (-".concat(b.discountPercentage, "%)")
      })]
    }) : m;
    return (0, n.jsxs)(o.X6q, {
      variant: h,
      className: i()(c.container, f),
      children: [p, null !== (t = null == u ? void 0 : u(C)) && void 0 !== t ? t : C]
    })
  }