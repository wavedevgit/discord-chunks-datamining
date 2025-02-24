/** Chunk was on 44799 **/
t.d(n, {
  Z: () => p
}), t(266796);
var r = t(200651);
t(192379);
var i = t(120356),
  o = t.n(i),
  a = t(793030),
  s = t(481060),
  c = t(413335),
  l = t(838968),
  d = t(773),
  u = t(279604),
  x = t(783684),
  v = t(388032),
  m = t(355135);

function p(e) {
  let {
    powerup: n
  } = e, {
    onActivate: t,
    onDeactivate: i,
    onShowMore: p
  } = (0, u.Z)(n);
  return (0, r.jsxs)(l.Z, {
    label: n.title,
    onClick: p,
    active: n.active,
    children: [(0, r.jsx)("div", {
      className: m.imageContainer,
      children: (0, r.jsx)("img", {
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: m.contentContainer,
      children: [(0, r.jsxs)("div", {
        className: m.headerContainer,
        children: [(0, r.jsx)(a.X6, {
          variant: "heading-md/bold",
          children: n.title
        }), n.bundle && (0, r.jsx)(a.xv, {
          className: o()(m.bundle, {
            [m.active]: n.active
          }),
          variant: "text-xs/semibold",
          children: v.NW.string(x.Z.j2jUjY)
        })]
      }), (0, r.jsx)(a.xv, {
        className: m.description,
        variant: "text-sm/medium",
        children: n.description
      }), (0, r.jsxs)("div", {
        className: m.labelContainer,
        children: [(0, r.jsxs)("div", {
          className: m.inline,
          children: [(0, r.jsx)(c.Z, {}), (0, r.jsx)(a.xv, {
            tag: "div",
            variant: "heading-md/bold",
            children: n.cost
          })]
        }), n.active && (0, r.jsxs)("div", {
          className: m.inline,
          children: [(0, r.jsx)(s.owK, {
            size: "xs",
            color: s.TVs.colors.TEXT_POSITIVE
          }), (0, r.jsx)(a.xv, {
            color: "text-positive",
            variant: "text-sm/bold",
            children: v.NW.string(x.Z.FFLkm5)
          })]
        })]
      })]
    }), (0, r.jsx)("div", {
      className: m.buttonContainer,
      children: (0, r.jsx)(d.Z, {
        skuId: n.skuId,
        active: n.active,
        onPrimaryClick: t,
        onSecondaryClick: i
      })
    })]
  })
}