/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  b: () => s
});
var n = r(200651),
  l = r(120356),
  i = r.n(l),
  o = r(755419),
  a = r(992379);
let s = e => {
  let {
    product: t,
    className: r
  } = e, l = t.skuId, s = o.KO[l];
  return null != s ? (0, n.jsx)("div", {
    className: i()(a.externalProductWrapper, r),
    children: (0, n.jsx)("img", {
      src: s.asset,
      alt: t.name,
      height: 152
    })
  }) : null
}