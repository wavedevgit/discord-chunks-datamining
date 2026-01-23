/** Chunk was on 28636 **/
/** chunk id: 153527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => m,
  n: () => h
});
var r, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk151252 = require("./151252.js"),
  Chunk571338 = require("./571338.jsx"),
  Chunk403299 = require("./403299.js"),
  h = ((r = {}).DEFAULT = "DEFAULT", r.SEARCH = "SEARCH", r);

function m(e) {
  let {
    selectedTabId: t,
    handleTransition: n,
    tabs: r,
    state: i = "DEFAULT",
    onAvailableWidthChange: h,
    icon: m,
    children: g
  } = e, _ = (0, o.Ay)(), {
    enabled: b
  } = (0, d.Z)({
    location: "global_discovery_header_bar"
  });
  return (0, l.jsx)(s.NPJ, {
    theme: _,
    children: e => (0, l.jsxs)(c.A, {
      className: a()(e, p.jr),
      innerClassname: b ? p.vi : true,
      children: ["DEFAULT" === i && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(m, {
          color: "currentColor",
          size: "md"
        }), (0, l.jsx)(u.A, {
          tabs: r,
          selectedTab: t,
          onTabSelect: n,
          onAvailableWidthChange: h
        })]
      }), (0, l.jsx)("div", {
        className: a()(p.w4, {
          [p.cS]: "SEARCH" === i
        }),
        children: g
      })]
    })
  })
}