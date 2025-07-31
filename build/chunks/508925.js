/** Chunk was on 96887 **/
r.d(t, {
  b: () => l
});
var a = r(255367),
  n = r(120356),
  i = r.n(n),
  s = r(755419),
  o = r(157570);
let l = e => {
  let {
    product: t,
    animationState: r,
    className: n
  } = e, l = s.K[t.skuId];
  return null != l ? (0, a.jsx)("div", {
    className: i()(o.externalProductWrapper, n),
    children: null != l.render && l.render({
      animationState: r,
      alt: t.name
    })
  }) : null
}