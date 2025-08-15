/** Chunk was on 89311 **/
/** chunk id: 131033, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js");

function o(e) {
  let {
    detectedGame: t
  } = e;
  return 0 === t.publishers.length ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)(a.X6, {
      className: l.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: i.intl.string(i.t["4Byy/P"])
    }), (0, n.jsx)(a.xv, {
      variant: "text-sm/normal",
      children: t.publishers.join(", ")
    })]
  })
}