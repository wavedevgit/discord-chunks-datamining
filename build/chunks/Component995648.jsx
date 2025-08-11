/** Chunk was on 56534 **/
/** chunk id: 995648, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk422559 = require("./422559.js"),
  Chunk432161 = require("./432161.js");

function c(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: r,
    grantedPermissionsHeader: i,
    disabledPermissionsHeader: c,
    className: d
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(s.list, d),
    children: [null != t && t.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != i ? (0, n.jsx)(o.X6q, {
        variant: "heading-sm/semibold",
        color: "header-primary",
        className: s.header,
        children: i
      }) : null, (0, n.jsx)("div", {
        className: s.container,
        children: t.map(e => (0, n.jsxs)("div", {
          className: s.permission,
          children: [(0, n.jsx)(o.dz2, {
            size: "xs",
            color: "currentColor",
            className: s.check
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: (0, l.wt)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != r && r.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != c ? (0, n.jsx)(o.X6q, {
        variant: "heading-sm/semibold",
        color: "header-primary",
        className: s.header,
        children: c
      }) : null, (0, n.jsx)("div", {
        className: s.container,
        children: r.map(e => (0, n.jsxs)("div", {
          className: s.permission,
          children: [(0, n.jsx)(o.Dio, {
            size: "xs",
            color: "currentColor",
            className: s.cross
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: (0, l.wt)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}