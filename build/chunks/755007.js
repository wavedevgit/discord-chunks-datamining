/** Chunk was on 45620 (eb98f0baf40470d3.js) **/
"use strict";
r.d(t, {
  Z: () => d
});
var n = r(200651);
r(192379);
var l = r(120356),
  i = r.n(l),
  a = r(481060),
  o = r(932563),
  s = r(960919),
  c = r(682255);

function d(e) {
  let {
    orbAmount: t
  } = e, r = (0, o.c)(), l = null != r && r >= t;
  return (0, n.jsxs)(a.Text, {
    variant: "text-lg/bold",
    className: i()(c.orbPriceTag, {
      [c.insufficientBalance]: !l
    }),
    children: [(0, n.jsx)(s.Z, {}), t]
  })
}