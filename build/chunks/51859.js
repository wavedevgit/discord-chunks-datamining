/** Chunk was on 44799 **/
t.d(n, {
  Z: () => _
}), t(47120), t(266796);
var i = t(200651),
  r = t(192379),
  o = t(120356),
  a = t.n(o),
  s = t(793030),
  c = t(481060),
  l = t(413335),
  d = t(838968),
  u = t(969867),
  x = t(279604),
  v = t(730621),
  p = t(388032),
  b = t(709435);

function _(e) {
  let {
    guildId: n,
    powerup: t
  } = e, {
    onShowMore: o
  } = (0, x.Z)(n, t), [_, m] = r.useState(void 0);
  return (0, x.K)(_), (0, i.jsxs)(d.Z, {
    label: t.title,
    onClick: o,
    active: t.active,
    children: [(0, i.jsx)("div", {
      className: b.imageContainer,
      children: (0, i.jsx)("img", {
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      className: b.contentContainer,
      children: [(0, i.jsxs)("div", {
        className: b.headerContainer,
        children: [(0, i.jsx)(s.X6, {
          variant: "heading-md/bold",
          children: t.title
        }), t.bundle && (0, i.jsx)(s.xv, {
          className: a()(b.bundle, {
            [b.active]: t.active
          }),
          variant: "text-xs/semibold",
          children: p.NW.string(v.Z.j2jUjY)
        })]
      }), (0, i.jsx)(s.xv, {
        className: b.description,
        variant: "text-sm/medium",
        children: t.description
      }), (0, i.jsxs)("div", {
        className: b.labelContainer,
        children: [(0, i.jsxs)("div", {
          className: b.inline,
          children: [(0, i.jsx)(l.Z, {}), (0, i.jsx)(s.xv, {
            tag: "div",
            variant: "heading-md/bold",
            children: t.cost
          })]
        }), t.active && (0, i.jsxs)("div", {
          className: b.inline,
          children: [(0, i.jsx)(c.owK, {
            size: "xs",
            color: c.TVs.colors.TEXT_POSITIVE
          }), (0, i.jsx)(s.xv, {
            color: "text-positive",
            variant: "text-sm/bold",
            children: p.NW.string(v.Z.FFLkm5)
          })]
        })]
      })]
    }), (0, i.jsx)("div", {
      className: b.buttonContainer,
      children: (0, i.jsx)(u.Z, {
        powerup: t,
        guildId: n,
        onError: m
      })
    })]
  })
}