/** Chunk was on 73628 **/
r.d(t, {
  Z: () => d
});
var n = r(255367),
  i = r(73800),
  a = r(120356),
  l = r.n(a),
  o = r(481060),
  A = r(741914),
  s = r(497646),
  c = r(73433);

function d(e) {
  let {
    color: t,
    className: r,
    variant: a,
    text: d,
    lineClamp: u
  } = e, f = (0, o.xSt)(), g = i.useMemo(() => null == d ? null : (0, A.Z)(d, !0, {
    allowHeading: null == u,
    allowList: null == u,
    initialHeaderLevel: f
  }), [d, u, f]);
  return (0, n.jsx)(o.Text, {
    className: l()(r, c.markup, {
      [s.lineClamp2Plus]: null != u && u > 1,
      [s.lineClamp1]: 1 === u
    }),
    color: t,
    variant: a,
    lineClamp: u,
    children: g
  })
}