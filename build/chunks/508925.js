/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  b: () => a
});
var n = r(200651),
  l = r(120356),
  i = r.n(l),
  o = r(755419),
  s = r(992379);
let a = e => {
  let {
    product: t,
    className: r
  } = e, l = t.skuId, a = o.KO[l];
  return null != a ? (0, n.jsx)("div", {
    className: i()(s.externalProductWrapper, r),
    children: (0, n.jsx)("img", {
      src: a.asset,
      alt: t.name,
      height: 152
    })
  }) : null
}