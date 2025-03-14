/** Chunk was on 44799 **/
t.d(n, {
  Z: () => j
}), t(47120), t(266796);
var r = t(200651),
  i = t(192379),
  o = t(120356),
  s = t.n(o),
  a = t(793030),
  l = t(481060),
  c = t(413335),
  d = t(157353),
  u = t(838968),
  p = t(969867),
  v = t(279604),
  x = t(268359),
  m = t(388032),
  b = t(427316);

function j(e) {
  let {
    guildId: n,
    powerup: t
  } = e, {
    onShowMore: o
  } = (0, v.ZP)(n, t), j = (0, d.Z)(n, t), [_, f] = i.useState(void 0);
  return (0, v.KT)(_), (0, r.jsxs)(u.Z, {
    label: t.title,
    onClick: o,
    active: j,
    children: [(0, r.jsx)("div", {
      className: b.imageContainer,
      children: (0, r.jsx)("img", {
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: b.contentContainer,
      children: [(0, r.jsxs)("div", {
        className: b.headerContainer,
        children: [(0, r.jsx)(a.X6, {
          variant: "heading-md/bold",
          children: t.title
        }), t.bundle && (0, r.jsx)(a.xv, {
          className: s()(b.bundle, {
            [b.active]: j
          }),
          variant: "text-xs/semibold",
          children: m.NW.string(x.Z.j2jUjY)
        })]
      }), (0, r.jsx)(a.xv, {
        className: b.description,
        variant: "text-sm/medium",
        children: t.description
      }), (0, r.jsxs)("div", {
        className: b.labelContainer,
        children: [(0, r.jsxs)("div", {
          className: b.inline,
          children: [(0, r.jsx)(c.Z, {}), (0, r.jsx)(a.xv, {
            tag: "div",
            variant: "heading-md/bold",
            children: t.cost
          })]
        }), j && (0, r.jsxs)("div", {
          className: b.inline,
          children: [(0, r.jsx)(l.owK, {
            size: "xs",
            color: l.TVs.colors.TEXT_POSITIVE
          }), (0, r.jsx)(a.xv, {
            color: "text-positive",
            variant: "text-sm/bold",
            children: m.NW.string(x.Z.FFLkm5)
          })]
        })]
      })]
    }), (0, r.jsx)("div", {
      className: b.buttonContainer,
      children: (0, r.jsx)(p.Z, {
        powerup: t,
        guildId: n,
        onError: f
      })
    })]
  })
}