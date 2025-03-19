/** Chunk was on 44799 **/
t.d(n, {
  Z: () => m
}), t(47120), t(266796);
var r = t(200651),
  i = t(192379),
  o = t(120356),
  s = t.n(o),
  a = t(793030),
  l = t(690786),
  c = t(838968),
  d = t(969867),
  u = t(279604),
  p = t(367123),
  _ = t(388032),
  x = t(709435);

function m(e) {
  let {
    guildId: n,
    powerup: t
  } = e, o = null != (0, l.Z)(n, t), [m, b] = i.useState(void 0);
  return (0, u.KT)(m), (0, r.jsxs)(c.Z, {
    guildId: n,
    powerup: t,
    children: [(0, r.jsx)("div", {
      className: x.imageContainer,
      children: (0, r.jsx)("img", {
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: x.contentContainer,
      children: [(0, r.jsxs)("div", {
        className: x.headerContainer,
        children: [(0, r.jsx)(a.X6, {
          variant: "heading-md/bold",
          children: t.title
        }), t.bundle && (0, r.jsx)(a.xv, {
          className: s()(x.bundle, {
            [x.active]: o
          }),
          variant: "text-xs/semibold",
          children: _.NW.string(p.Z.j2jUjY)
        })]
      }), (0, r.jsx)(a.xv, {
        className: x.description,
        variant: "text-sm/medium",
        children: t.description
      }), (0, r.jsx)(c.Y, {
        guildId: n,
        powerup: t
      })]
    }), (0, r.jsx)("div", {
      className: x.buttonContainer,
      children: (0, r.jsx)(d.Z, {
        guildId: n,
        powerup: t,
        onError: b
      })
    })]
  })
}