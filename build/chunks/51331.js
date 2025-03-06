/** Chunk was on 51724 **/
n.d(t, {
  Z: () => d
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(838436),
  c = n(216614);

function d(e) {
  let {
    value: t,
    onChange: n,
    className: s,
    note: d,
    title: u,
    disabled: m
  } = e, p = i.useRef(null), g = i.useRef(null), h = i.useId(), f = (0, r.jsx)(l.rsf, {
    id: h,
    checked: t,
    onChange: n,
    focusProps: {
      enabled: !1
    },
    innerRef: p,
    disabled: m
  });
  return (0, r.jsx)("div", {
    className: a()(c.container, s, {
      [c.disabled]: m
    }),
    children: (0, r.jsx)(l.tEY, {
      within: !0,
      offset: -4,
      focusTarget: p,
      ringTarget: g,
      children: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: c.text,
          children: (0, r.jsx)(o.H, {
            header: u,
            description: d,
            relatedId: h,
            disabled: m
          })
        }), (0, r.jsx)("div", {
          className: c.control,
          children: f
        })]
      })
    })
  })
}