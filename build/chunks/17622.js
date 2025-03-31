/** Chunk was on 99014 **/
n.d(t, {
  Z: () => u
}), n(266796);
var o = n(200651);
n(192379);
var r = n(120356),
  s = n.n(r),
  a = n(793030),
  c = n(119331),
  i = n(336227),
  l = n(636189);

function u(e) {
  let {
    powerup: t
  } = e, n = (0, i.Z)(t);
  return (0, o.jsx)("div", {
    className: l.levelContainer,
    children: n.map(e => {
      let {
        Icon: t,
        className: n
      } = (0, c.t)(e.perkIcon, !1);
      return (0, o.jsxs)("div", {
        className: l.perkContainer,
        children: [(0, o.jsx)(t, {
          color: "currentColor",
          className: s()(l.perkIcon, n)
        }), (0, o.jsx)(a.xv, {
          className: l.perkText,
          color: "text-muted",
          variant: "text-sm/medium",
          children: e.description
        })]
      }, "perk-".concat(e.perkIcon))
    })
  })
}