/** Chunk was on 73169 **/
/** chunk id: 595738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk376092 = require("./376092.js"),
  Chunk565928 = require("./565928.js");

function i(e) {
  let {
    grantedPermissions: t,
    disabledPermissions: n,
    grantedPermissionsHeader: r,
    disabledPermissionsHeader: i,
    className: s
  } = e;
  return (0, a.jsxs)("div", {
    className: o()(l.p_, s),
    children: [null != t && t.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [null != r ? (0, a.jsx)(_.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: l.wx,
        children: r
      }) : null, (0, a.jsx)("div", {
        className: l.kL,
        children: t.map(e => (0, a.jsxs)("div", {
          className: l.EK,
          children: [(0, a.jsx)(_.A9s, {
            size: "xs",
            color: "currentColor",
            className: l.z6
          }), (0, a.jsx)(_.Text, {
            variant: "text-sm/normal",
            children: (0, c.hx)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != n && n.length > 0 ? (0, a.jsxs)(a.Fragment, {
      children: [null != i ? (0, a.jsx)(_.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: l.wx,
        children: i
      }) : null, (0, a.jsx)("div", {
        className: l.kL,
        children: n.map(e => (0, a.jsxs)("div", {
          className: l.EK,
          children: [(0, a.jsx)(_.PGe, {
            size: "xs",
            color: "currentColor",
            className: l.$A
          }), (0, a.jsx)(_.Text, {
            variant: "text-sm/normal",
            children: (0, c.hx)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}