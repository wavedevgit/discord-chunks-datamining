/** Chunk was on 35755 **/
n.d(t, {
  Z: () => u
});
var i = n(200651),
  r = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  c = n(481060),
  s = n(607070),
  d = n(882859);

function u() {
  let e = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
    {
      styleLarge: t,
      styleSmall: n
    } = r.useMemo(() => ({
      styleLarge: {
        width: "".concat(10 + 50 * Math.random(), "%")
      },
      styleSmall: {
        width: "".concat(30 + 60 * Math.random(), "%")
      }
    }), []);
  return (0, i.jsxs)("div", {
    className: o()(d.container, {
      [d.noAnimation]: e
    }),
    children: [(0, i.jsx)("div", {
      className: d.iconPlaceholder
    }), (0, i.jsxs)("div", {
      className: d.textContainer,
      children: [(0, i.jsx)("div", {
        className: d.textPlaceholder,
        style: t,
        children: (0, i.jsx)(c.X6q, {
          className: d.hidden,
          variant: "heading-md/semibold",
          color: "header-primary",
          lineClamp: 1,
          children: "_"
        })
      }), (0, i.jsx)("div", {
        className: d.textPlaceholder,
        style: n,
        children: (0, i.jsx)(c.Text, {
          className: d.hidden,
          variant: "text-sm/normal",
          color: "text-secondary",
          lineClamp: 1,
          children: "_"
        })
      })]
    }), (0, i.jsx)("div", {
      className: d.underline
    })]
  })
}