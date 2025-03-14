/** Chunk was on web.js **/
"use strict";
n.d(t, {
  b: () => l
});
var r = n(200651),
  i = n(120356),
  o = n.n(i),
  a = n(755419),
  s = n(992379);
let l = e => {
  let {
    product: t,
    className: n
  } = e, i = t.skuId, l = a.KO[i];
  return null != l ? (0, r.jsx)("div", {
    className: o()(s.externalProductWrapper, n),
    children: (0, r.jsx)("img", {
      src: l.asset,
      alt: t.name,
      height: 152
    })
  }) : null
}