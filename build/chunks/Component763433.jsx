/** Chunk was on 40450 **/
/** chunk id: 763433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => _,
  r: () => f
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk822857 = require("./822857.js"),
  Chunk594174 = require("./594174.js"),
  Chunk744695 = require("./744695.jsx"),
  Chunk457696 = require("./457696.js"),
  f = ((r = {}).DEFAULT = "DEFAULT", r.SEARCH = "SEARCH", r);

function _(e) {
  let {
    selectedTabId: t,
    handleTransition: n,
    tabs: r,
    state: l = "DEFAULT",
    onAvailableWidthChange: f,
    icon: _,
    children: b
  } = e, x = (0, d.ZP)(), v = (0, o.e7)([m.default], () => m.default.getCurrentUser()), C = (null == v ? true : v.isStaff()) || (null == v ? true : v.isStaffPersonal()), {
    enabled: j
  } = (0, p.WX)({
    location: "global_discovery_header_bar"
  });
  return (0, a.jsx)(c.f6W, {
    theme: x,
    children: e => (0, a.jsxs)(u.Z, {
      className: s()(e, g.headerBar),
      innerClassname: j ? g.headerBarInner : true,
      toolbar: C ? (0, a.jsx)(i.Fragment, {}) : null,
      children: ["DEFAULT" === l && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(_, {
          color: "currentColor",
          size: "md"
        }), (0, a.jsx)(h.Z, {
          tabs: r,
          selectedTab: t,
          onTabSelect: n,
          onAvailableWidthChange: f
        })]
      }), (0, a.jsx)("div", {
        className: s()(g.headerBarContent, {
          [g.headerBarSearchContent]: "SEARCH" === l
        }),
        children: b
      })]
    })
  })
}