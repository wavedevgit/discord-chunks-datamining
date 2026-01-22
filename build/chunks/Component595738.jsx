/** Chunk was on 73169 **/
/** chunk id: 595738, original params: s,e,l (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk376092 = require("./376092.js"),
  Chunk565928 = require("./565928.js");

function d(s) {
  let {
    grantedPermissions: e,
    disabledPermissions: l,
    grantedPermissionsHeader: n,
    disabledPermissionsHeader: d,
    className: x
  } = s;
  return (0, a.jsxs)("div", {
    className: r()(c.p_, x),
    children: [null != e && e.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [null != n ? (0, a.jsx)(t.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: c.wx,
        children: n
      }) : null, (0, a.jsx)("div", {
        className: c.kL,
        children: e.map(s => (0, a.jsxs)("div", {
          className: c.EK,
          children: [(0, a.jsx)(t.A9s, {
            size: "xs",
            color: "currentColor",
            className: c.z6
          }), (0, a.jsx)(t.Text, {
            variant: "text-sm/normal",
            children: (0, i.hx)(s)
          })]
        }, s.toString()))
      })]
    }) : null, null != l && l.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [null != d ? (0, a.jsx)(t.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: c.wx,
        children: d
      }) : null, (0, a.jsx)("div", {
        className: c.kL,
        children: l.map(s => (0, a.jsxs)("div", {
          className: c.EK,
          children: [(0, a.jsx)(t.PGe, {
            size: "xs",
            color: "currentColor",
            className: c.$A
          }), (0, a.jsx)(t.Text, {
            variant: "text-sm/normal",
            children: (0, i.hx)(s)
          })]
        }, s.toString()))
      })]
    }) : null]
  })
}