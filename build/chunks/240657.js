/** Chunk was on 76030 **/
n.d(t, {
  Z: () => u
});
var r = n(200651),
  i = n(192379),
  a = n(120356),
  o = n.n(a),
  l = n(481060),
  s = n(741914),
  c = n(508852),
  d = n(509045);

function u(e) {
  let {
    color: t,
    className: n,
    variant: a,
    text: u,
    lineClamp: p
  } = e, m = (0, l.xSt)(), f = i.useMemo(() => null == u ? null : (0, s.Z)(u, !0, {
    allowHeading: null == p,
    allowList: null == p,
    initialHeaderLevel: m
  }), [u, p, m]);
  return (0, r.jsx)(l.Text, {
    className: o()(n, d.markup, {
      [c.lineClamp2Plus]: null != p && p > 1,
      [c.lineClamp1]: 1 === p
    }),
    color: t,
    variant: a,
    lineClamp: p,
    children: f
  })
}