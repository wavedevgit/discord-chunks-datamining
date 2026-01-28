/** Chunk was on 73169 **/
/** chunk id: 595738, original params: e,_,a (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  n = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk376092 = require("./376092.js"),
  Chunk565928 = require("./565928.js");

function i(e) {
  let {
    grantedPermissions: _,
    disabledPermissions: a,
    grantedPermissionsHeader: c,
    disabledPermissionsHeader: i,
    className: l
  } = e;
  return (0, o.jsxs)("div", {
    className: n()(s.p_, l),
    children: [null != _ && _.length > 0 ? (0, o.jsxs)(o.Fragment, {
      children: [null != c ? (0, o.jsx)(t.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: s.wx,
        children: c
      }) : null, (0, o.jsx)("div", {
        className: s.kL,
        children: _.map(e => (0, o.jsxs)("div", {
          className: s.EK,
          children: [(0, o.jsx)(t.A9s, {
            size: "xs",
            color: "currentColor",
            className: s.z6
          }), (0, o.jsx)(t.Text, {
            variant: "text-sm/normal",
            children: (0, r.hx)(e)
          })]
        }, e.toString()))
      })]
    }) : null, null != a && a.length > 0 ? (0, o.jsxs)(o.Fragment, {
      children: [null != i ? (0, o.jsx)(t.Heading, {
        variant: "heading-sm/semibold",
        color: "text-strong",
        className: s.wx,
        children: i
      }) : null, (0, o.jsx)("div", {
        className: s.kL,
        children: a.map(e => (0, o.jsxs)("div", {
          className: s.EK,
          children: [(0, o.jsx)(t.PGe, {
            size: "xs",
            color: "currentColor",
            className: s.$A
          }), (0, o.jsx)(t.Text, {
            variant: "text-sm/normal",
            children: (0, r.hx)(e)
          })]
        }, e.toString()))
      })]
    }) : null]
  })
}