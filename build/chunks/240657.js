/** Chunk was on 73628 **/
n.d(t, {
  Z: () => d
});
var r = n(255367),
  A = n(73800),
  a = n(120356),
  l = n.n(a),
  o = n(481060),
  i = n(741914),
  s = n(497646),
  c = n(73433);

function d(e) {
  let {
    color: t,
    className: n,
    variant: a,
    text: d,
    lineClamp: u
  } = e, g = (0, o.xSt)(), f = A.useMemo(() => null == d ? null : (0, i.Z)(d, !0, {
    allowHeading: null == u,
    allowList: null == u,
    initialHeaderLevel: g
  }), [d, u, g]);
  return (0, r.jsx)(o.Text, {
    className: l()(n, c.markup, {
      [s.lineClamp2Plus]: null != u && u > 1,
      [s.lineClamp1]: 1 === u
    }),
    color: t,
    variant: a,
    lineClamp: u,
    children: f
  })
}