/** Chunk was on 44799 **/
t.d(n, {
  Z: () => v
}), t(47120), t(266796);
var r = t(200651),
  i = t(192379),
  s = t(120356),
  o = t.n(s),
  a = t(793030),
  l = t(157353),
  c = t(838968),
  d = t(969867),
  u = t(279604),
  x = t(730621),
  m = t(388032),
  p = t(709435);

function v(e) {
  let {
    guildId: n,
    powerup: t
  } = e, {
    onShowMore: s
  } = (0, u.ZP)(n, t), v = (0, l.Z)(n, t), [b, _] = i.useState(void 0);
  return (0, u.KT)(b), (0, r.jsxs)(c.Z, {
    label: t.title,
    onClick: s,
    active: v,
    children: [(0, r.jsx)("div", {
      className: p.imageContainer,
      children: (0, r.jsx)("img", {
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: p.contentContainer,
      children: [(0, r.jsxs)("div", {
        className: p.headerContainer,
        children: [(0, r.jsx)(a.X6, {
          variant: "heading-md/bold",
          children: t.title
        }), t.bundle && (0, r.jsx)(a.xv, {
          className: o()(p.bundle, {
            [p.active]: v
          }),
          variant: "text-xs/semibold",
          children: m.NW.string(x.Z.j2jUjY)
        })]
      }), (0, r.jsx)(a.xv, {
        className: p.description,
        variant: "text-sm/medium",
        children: t.description
      }), (0, r.jsx)(c.Y, {
        guildId: n,
        powerup: t
      })]
    }), (0, r.jsx)("div", {
      className: p.buttonContainer,
      children: (0, r.jsx)(d.Z, {
        guildId: n,
        powerup: t,
        onError: _
      })
    })]
  })
}