/** Chunk was on 69844 **/
/** chunk id: 763433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => h,
  r: () => m
});
var r, Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk825102 = require("./825102.js"),
  Chunk744695 = require("./744695.jsx"),
  Chunk770593 = require("./770593.js"),
  m = ((r = {}).DEFAULT = "DEFAULT", r.SEARCH = "SEARCH", r);

function h(e) {
  let {
    selectedTabId: t,
    handleTransition: n,
    tabs: r,
    state: a = "DEFAULT",
    onAvailableWidthChange: m,
    icon: h,
    children: g
  } = e, f = (0, o.ZP)(), {
    enabled: _
  } = (0, d.W)({
    location: "global_discovery_header_bar"
  });
  return (0, i.jsx)(s.f6W, {
    theme: f,
    children: e => (0, i.jsxs)(c.Z, {
      className: l()(e, p.headerBar),
      innerClassname: _ ? p.headerBarInner : true,
      children: ["DEFAULT" === a && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h, {
          color: "currentColor",
          size: "md"
        }), (0, i.jsx)(u.Z, {
          tabs: r,
          selectedTab: t,
          onTabSelect: n,
          onAvailableWidthChange: m
        })]
      }), (0, i.jsx)("div", {
        className: l()(p.headerBarContent, {
          [p.headerBarSearchContent]: "SEARCH" === a
        }),
        children: g
      })]
    })
  })
}