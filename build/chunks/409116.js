/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  F: () => u
}), r(757143), r(301563);
var n = r(200651);
r(192379);
var i = r(120356),
  l = r.n(i),
  o = r(481060),
  a = r(937615),
  s = r(884697),
  c = r(776446);
let d = e => e.length > 5 ? e.replace(/\.00$/, "") : e,
  u = e => {
    var t;
    let {
      price: {
        amount: r,
        currency: i
      },
      renderPrice: u,
      icon: p,
      className: f,
      discount: h = s.f_,
      variant: b = "heading-md/semibold"
    } = e, C = d((0, a.T4)(r, i)), m = h !== s.f_ && h.discountPercentage >= 5 ? (0, n.jsxs)(n.Fragment, {
      children: [C, (0, n.jsx)(o.X6q, {
        variant: b,
        color: "text-positive",
        className: c.discount,
        children: " (-".concat(h.discountPercentage, "%)")
      })]
    }) : C;
    return (0, n.jsxs)(o.X6q, {
      variant: b,
      className: l()(c.container, f),
      children: [p, null !== (t = null == u ? void 0 : u(m)) && void 0 !== t ? t : m]
    })
  }