/** Chunk was on 44799 **/
t.d(n, {
  Z: () => _
}), t(47120), t(266796);
var i = t(200651),
  r = t(192379),
  s = t(120356),
  o = t.n(s),
  a = t(793030),
  l = t(690786),
  c = t(838968),
  d = t(969867),
  u = t(279604),
  x = t(367123),
  m = t(388032),
  v = t(709435);

function _(e) {
  let {
    guildId: n,
    powerup: t
  } = e, s = null != (0, l.Z)(n, t), [_, p] = r.useState(void 0);
  return (0, u.KT)(_), (0, i.jsxs)(c.Z, {
    guildId: n,
    powerup: t,
    children: [(0, i.jsx)("div", {
      className: v.imageContainer,
      children: (0, i.jsx)("img", {
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      className: v.contentContainer,
      children: [(0, i.jsxs)("div", {
        className: v.headerContainer,
        children: [(0, i.jsx)(a.X6, {
          variant: "heading-md/bold",
          children: t.title
        }), t.bundle && (0, i.jsx)(a.xv, {
          className: o()(v.bundle, {
            [v.active]: s
          }),
          variant: "text-xs/semibold",
          children: m.NW.string(x.Z.j2jUjY)
        })]
      }), (0, i.jsx)(a.xv, {
        className: v.description,
        variant: "text-sm/medium",
        children: t.description
      }), (0, i.jsx)(c.Y, {
        guildId: n,
        powerup: t
      })]
    }), (0, i.jsx)("div", {
      className: v.buttonContainer,
      children: (0, i.jsx)(d.Z, {
        guildId: n,
        powerup: t,
        onError: p
      })
    })]
  })
}