/** Chunk was on 52272 **/
n.d(t, {
  Z: () => u
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  l = n(481060),
  s = n(388032),
  c = n(627713);

function u(e) {
  let {
    className: t,
    onJump: n
  } = e, [o, u] = i.useState(!1);
  return (0, r.jsx)(l.P3F, {
    className: a()(c.jumpButton, t),
    onClick: e => {
      u(!0), n(e)
    },
    children: o ? (0, r.jsx)(l.$jN, {
      type: l.$jN.Type.PULSING_ELLIPSIS
    }) : (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: c.text,
      children: s.NW.string(s.t.k5WiPT)
    })
  })
}