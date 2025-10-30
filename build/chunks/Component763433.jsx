/** Chunk was on 84283 **/
/** chunk id: 763433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => h,
  r: () => m
});
var r, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk825102 = require("./825102.js"),
  Chunk744695 = require("./744695.jsx"),
  Chunk457696 = require("./457696.js"),
  m = ((r = {}).DEFAULT = "DEFAULT", r.SEARCH = "SEARCH", r);

function h(e) {
  let {
    selectedTabId: t,
    handleTransition: n,
    tabs: r,
    state: i = "DEFAULT",
    onAvailableWidthChange: m,
    icon: h,
    children: g
  } = e, _ = (0, o.ZP)(), {
    enabled: f
  } = (0, d.WX)({
    location: "global_discovery_header_bar"
  });
  return (0, a.jsx)(s.f6W, {
    theme: _,
    children: e => (0, a.jsxs)(c.Z, {
      className: l()(e, p.headerBar),
      innerClassname: f ? p.headerBarInner : true,
      children: ["DEFAULT" === i && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(h, {
          color: "currentColor",
          size: "md"
        }), (0, a.jsx)(u.Z, {
          tabs: r,
          selectedTab: t,
          onTabSelect: n,
          onAvailableWidthChange: m
        })]
      }), (0, a.jsx)("div", {
        className: l()(p.headerBarContent, {
          [p.headerBarSearchContent]: "SEARCH" === i
        }),
        children: g
      })]
    })
  })
}