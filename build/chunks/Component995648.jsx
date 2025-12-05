/** Chunk was on 33194 **/
/** chunk id: 995648, original params: s,e,a (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk422559 = require("./422559.js"),
  Chunk347044 = require("./347044.js");

function d(s) {
  let {
    grantedPermissions: e,
    disabledPermissions: a,
    grantedPermissionsHeader: r,
    disabledPermissionsHeader: d,
    className: o
  } = s;
  return (0, n.jsxs)("div", {
    className: l()(t.list, o),
    children: [null != e && e.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != r ? (0, n.jsx)(i.Heading, {
        variant: "heading-sm/semibold",
        color: "header-primary",
        className: t.header,
        children: r
      }) : null, (0, n.jsx)("div", {
        className: t.container,
        children: e.map(s => (0, n.jsxs)("div", {
          className: t.permission,
          children: [(0, n.jsx)(i.dz2, {
            size: "xs",
            color: "currentColor",
            className: t.check
          }), (0, n.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: (0, c.wt)(s)
          })]
        }, s.toString()))
      })]
    }) : null, null != a && a.length > 0 ? (0, n.jsxs)(n.Fragment, {
      children: [null != d ? (0, n.jsx)(i.Heading, {
        variant: "heading-sm/semibold",
        color: "header-primary",
        className: t.header,
        children: d
      }) : null, (0, n.jsx)("div", {
        className: t.container,
        children: a.map(s => (0, n.jsxs)("div", {
          className: t.permission,
          children: [(0, n.jsx)(i.Dio, {
            size: "xs",
            color: "currentColor",
            className: t.cross
          }), (0, n.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: (0, c.wt)(s)
          })]
        }, s.toString()))
      })]
    }) : null]
  })
}