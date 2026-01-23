/** Chunk was on 73169 **/
/** chunk id: 595738, original params: e,l,s (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk376092 = require("./376092.js"),
  Chunk565928 = require("./565928.js");

function c(e) {
  let {
    grantedPermissions: l,
    disabledPermissions: s,
    grantedPermissionsHeader: n,
    disabledPermissionsHeader: c,
    className: o
  } = e;
  return (0, a.jsxs)("div", {
    className: r()(d.p_, o),
    children: [null != l && l.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [null != n ? (0, a.jsx)(t.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: d.wx,
        children: n
      }) : null, (0, a.jsx)("div", {
        className: d.kL,
        children: l.map(e => (0, a.jsxs)("div", {
          className: d.EK,
          children: [(0, a.jsx)(t.A9s, {
            size: "xs",
            color: "currentColor",
            className: d.z6
          }), (0, a.jsx)(t.Text, {
            variant: "text-sm/normal",
            children: (0, i.hx)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != s && s.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [null != c ? (0, a.jsx)(t.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: d.wx,
        children: c
      }) : null, (0, a.jsx)("div", {
        className: d.kL,
        children: s.map(e => (0, a.jsxs)("div", {
          className: d.EK,
          children: [(0, a.jsx)(t.PGe, {
            size: "xs",
            color: "currentColor",
            className: d.$A
          }), (0, a.jsx)(t.Text, {
            variant: "text-sm/normal",
            children: (0, i.hx)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}