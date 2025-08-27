/** Chunk was on 21585 **/
/** chunk id: 795990, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk299560 = require("./299560.jsx"),
  Chunk247397 = require("./247397.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk958461 = require("./958461.js");

function u() {
  let {
    trackUserProfileAction: e
  } = (0, Chunk785717.KZ)();
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk958461.empty,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk958461.textContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t.oqalCw)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.O9SQ1d)
      })]
    }), (0, Chunk951288.jsx)("ul", {
      className: Chunk958461.widgetGrid,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["+EIBSE"]),
      children: Chunk247397.rR.map(t => (0, n.jsx)("li", {
        children: (0, n.jsx)(l.Z, {
          widgetType: t,
          size: "small",
          trackUserProfileAction: e
        })
      }, t))
    })]
  })
}