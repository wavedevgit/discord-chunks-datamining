/** Chunk was on 37697 **/
n.d(t, {
  Cm: () => m,
  ZP: () => g,
  _6: () => h,
  aV: () => p,
  z6: () => u
});
var r, i = n(200651),
  a = n(192379),
  l = n(120356),
  o = n.n(l),
  s = n(642128),
  c = n(481060),
  d = n(264567);

function u(e) {
  let {
    scrollPosition: t
  } = e;
  return (0, i.jsx)(s.animated.div, {
    className: d.backdrop,
    style: {
      opacity: null == t ? void 0 : t.to([0, 100], [0, 1])
    }
  })
}

function p(e) {
  let {
    icon: t
  } = e;
  return (0, i.jsx)(t, {
    className: d.icon,
    color: c.TVs.colors.HEADER_PRIMARY,
    size: "md"
  })
}

function m(e) {
  let {
    onClick: t,
    icon: n
  } = e;
  return (0, i.jsx)(c.P3F, {
    className: d.iconButton,
    onClick: t,
    children: (0, i.jsx)(n, {
      color: "currentColor",
      size: "sm"
    })
  })
}
var h = ((r = {}).OVERLAY = "overlay", r.RELATIVE = "relative", r);

function g(e) {
  let {
    className: t,
    variant: n,
    children: r
  } = e, l = a.useMemo(() => "overlay" === n ? d.overlay : d.relative, [n]);
  return (0, i.jsx)("div", {
    className: o()(d.headerBar, l, t),
    children: r
  })
}