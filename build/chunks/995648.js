/** Chunk was on 21881 (d13a1f169088b946.js) **/
r.d(t, {
  Z: () => c
});
var n = r(200651);
r(192379);
var i = r(120356),
  o = r.n(i),
  a = r(481060),
  s = r(422559),
  l = r(653022);

function c(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: r,
    grantedPermissionsHeader: i,
    disabledPermissionsHeader: c,
    className: d
  } = e;
  return (0, n.jsxs)("div", {
    className: o()(l.list, d),
    children: [null != t && t.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != i ? (0, n.jsx)(a.X6q, {
        variant: "heading-sm/semibold",
        color: "header-primary",
        className: l.header,
        children: i
      }) : null, (0, n.jsx)("div", {
        className: l.container,
        children: t.map(e => (0, n.jsxs)("div", {
          className: l.permission,
          children: [(0, n.jsx)(a.dz2, {
            size: "xs",
            color: "currentColor",
            className: l.check
          }), (0, n.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: (0, s.wt)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != r && r.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != c ? (0, n.jsx)(a.X6q, {
        variant: "heading-sm/semibold",
        color: "header-primary",
        className: l.header,
        children: c
      }) : null, (0, n.jsx)("div", {
        className: l.container,
        children: r.map(e => (0, n.jsxs)("div", {
          className: l.permission,
          children: [(0, n.jsx)(a.Dio, {
            size: "xs",
            color: "currentColor",
            className: l.cross
          }), (0, n.jsx)(a.Text, {
            variant: "text-sm/normal",
            children: (0, s.wt)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}