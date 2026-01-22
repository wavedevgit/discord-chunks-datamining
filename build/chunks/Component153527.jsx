/** Chunk was on 28636 **/
/** chunk id: 153527, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => m,
  n: () => h
});
var l, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk151252 = require("./151252.js"),
  Chunk571338 = require("./571338.jsx"),
  Chunk403299 = require("./403299.js"),
  h = ((l = {}).DEFAULT = "DEFAULT", l.SEARCH = "SEARCH", l);

function m(e) {
  let {
    selectedTabId: t,
    handleTransition: n,
    tabs: l,
    state: r = "DEFAULT",
    onAvailableWidthChange: h,
    icon: m,
    children: b
  } = e, f = (0, c.Ay)(), {
    enabled: g
  } = (0, d.Z)({
    location: "global_discovery_header_bar"
  });
  return (0, a.jsx)(s.NPJ, {
    theme: f,
    children: e => (0, a.jsxs)(o.A, {
      className: i()(e, p.jr),
      innerClassname: g ? p.vi : true,
      children: ["DEFAULT" === r && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(m, {
          color: "currentColor",
          size: "md"
        }), (0, a.jsx)(u.A, {
          tabs: l,
          selectedTab: t,
          onTabSelect: n,
          onAvailableWidthChange: h
        })]
      }), (0, a.jsx)("div", {
        className: i()(p.w4, {
          [p.cS]: "SEARCH" === r
        }),
        children: b
      })]
    })
  })
}