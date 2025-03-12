/** Chunk was on 44799 **/
t.d(n, {
  Z: () => j
}), t(47120), t(266796);
var r = t(200651),
  i = t(192379),
  o = t(120356),
  a = t.n(o),
  s = t(793030),
  l = t(481060),
  c = t(413335),
  d = t(157353),
  u = t(838968),
  v = t(969867),
  p = t(279604),
  x = t(730621),
  b = t(388032),
  m = t(709435);

function j(e) {
  let {
    guildId: n,
    powerup: t
  } = e, {
    onShowMore: o
  } = (0, p.ZP)(n, t), j = (0, d.Z)(n, t), [_, f] = i.useState(void 0);
  return (0, p.KT)(_), (0, r.jsxs)(u.Z, {
    label: t.title,
    onClick: o,
    active: j,
    children: [(0, r.jsx)("div", {
      className: m.imageContainer,
      children: (0, r.jsx)("img", {
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: m.contentContainer,
      children: [(0, r.jsxs)("div", {
        className: m.headerContainer,
        children: [(0, r.jsx)(s.X6, {
          variant: "heading-md/bold",
          children: t.title
        }), t.bundle && (0, r.jsx)(s.xv, {
          className: a()(m.bundle, {
            [m.active]: j
          }),
          variant: "text-xs/semibold",
          children: b.NW.string(x.Z.j2jUjY)
        })]
      }), (0, r.jsx)(s.xv, {
        className: m.description,
        variant: "text-sm/medium",
        children: t.description
      }), (0, r.jsxs)("div", {
        className: m.labelContainer,
        children: [(0, r.jsxs)("div", {
          className: m.inline,
          children: [(0, r.jsx)(c.Z, {}), (0, r.jsx)(s.xv, {
            tag: "div",
            variant: "heading-md/bold",
            children: t.cost
          })]
        }), j && (0, r.jsxs)("div", {
          className: m.inline,
          children: [(0, r.jsx)(l.owK, {
            size: "xs",
            color: l.TVs.colors.TEXT_POSITIVE
          }), (0, r.jsx)(s.xv, {
            color: "text-positive",
            variant: "text-sm/bold",
            children: b.NW.string(x.Z.FFLkm5)
          })]
        })]
      })]
    }), (0, r.jsx)("div", {
      className: m.buttonContainer,
      children: (0, r.jsx)(v.Z, {
        powerup: t,
        guildId: n,
        onError: f
      })
    })]
  })
}