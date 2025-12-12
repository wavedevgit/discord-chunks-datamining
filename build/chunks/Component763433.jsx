/** Chunk was on 92504 **/
/** chunk id: 763433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => h,
  r: () => m
});
var a, Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk825102 = require("./825102.js"),
  Chunk744695 = require("./744695.jsx"),
  Chunk766317 = require("./766317.js"),
  m = ((a = {}).DEFAULT = "DEFAULT", a.SEARCH = "SEARCH", a);

function h(e) {
  let {
    selectedTabId: t,
    handleTransition: n,
    tabs: a,
    state: i = "DEFAULT",
    onAvailableWidthChange: m,
    icon: h,
    children: f
  } = e, g = (0, o.ZP)(), {
    enabled: b
  } = (0, d.W)({
    location: "global_discovery_header_bar"
  });
  return (0, r.jsx)(s.f6W, {
    theme: g,
    children: e => (0, r.jsxs)(c.Z, {
      className: l()(e, p.headerBar),
      innerClassname: b ? p.headerBarInner : true,
      children: ["DEFAULT" === i && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h, {
          color: "currentColor",
          size: "md"
        }), (0, r.jsx)(u.Z, {
          tabs: a,
          selectedTab: t,
          onTabSelect: n,
          onAvailableWidthChange: m
        })]
      }), (0, r.jsx)("div", {
        className: l()(p.headerBarContent, {
          [p.headerBarSearchContent]: "SEARCH" === i
        }),
        children: f
      })]
    })
  })
}