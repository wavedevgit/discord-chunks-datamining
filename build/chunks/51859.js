/** Chunk was on 44799 **/
t.d(n, {
  Z: () => _
}), t(47120), t(266796);
var r = t(200651),
  i = t(192379),
  o = t(120356),
  s = t.n(o),
  a = t(793030),
  l = t(156732),
  c = t(690786),
  d = t(838968),
  u = t(660397),
  m = t(279604),
  x = t(367123),
  v = t(388032),
  p = t(709435);

function _(e) {
  let {
    guildId: n,
    powerup: t
  } = e, o = null != (0, c.Z)(n, t), [_, b] = i.useState(void 0), j = (0, l.Z)(t);
  return (0, m.KT)(_), (0, r.jsxs)(d.Z, {
    guildId: n,
    powerup: t,
    children: [(0, r.jsx)("div", {
      className: p.imageContainer,
      children: (0, r.jsx)("img", {
        className: p.image,
        alt: "",
        src: j
      })
    }), (0, r.jsxs)("div", {
      className: p.contentContainer,
      children: [(0, r.jsxs)("div", {
        className: p.headerContainer,
        children: [(0, r.jsx)(a.X6, {
          variant: "heading-md/bold",
          children: t.title
        }), t.bundle && (0, r.jsx)(a.xv, {
          className: s()(p.bundle, {
            [p.active]: o
          }),
          variant: "text-xs/semibold",
          children: v.NW.string(x.Z.j2jUjY)
        })]
      }), (0, r.jsx)(a.xv, {
        className: p.description,
        variant: "text-sm/medium",
        children: t.description
      }), (0, r.jsx)(d.Y, {
        guildId: n,
        powerup: t
      })]
    }), (0, r.jsx)("div", {
      className: p.buttonContainer,
      children: (0, r.jsx)(u.ZP, {
        guildId: n,
        powerup: t,
        onError: b
      })
    })]
  })
}