/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => a
});
var n = r(200651);
r(192379);
var i = r(481060),
  l = r(937615),
  o = r(465261);

function a(e) {
  let {
    price: t,
    isPremiumUser: r
  } = e;
  return (0, n.jsxs)(i.X6q, {
    variant: "heading-md/semibold",
    className: o.priceTag,
    children: [r && (0, n.jsx)(i.SrA, {}), (0, l.T4)(t.amount, t.currency)]
  })
}