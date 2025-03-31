/** Chunk was on 83379 **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  a = n(120356),
  o = n.n(a),
  l = n(481060),
  s = n(741914),
  c = n(854825),
  u = n(50398);

function d(e) {
  let {
    color: t,
    className: n,
    variant: a,
    text: d,
    lineClamp: p
  } = e, m = (0, l.xSt)(), f = i.useMemo(() => null == d ? null : (0, s.Z)(d, !0, {
    allowHeading: null == p,
    allowList: null == p,
    initialHeaderLevel: m
  }), [d, p, m]);
  return (0, r.jsx)(l.Text, {
    className: o()(n, u.markup, {
      [c.lineClamp2Plus]: null != p && p > 1,
      [c.lineClamp1]: 1 === p
    }),
    color: t,
    variant: a,
    lineClamp: p,
    children: f
  })
}