/** Chunk was on 89311 **/
/** chunk id: 131033, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk456486 = require("./456486.js");

function s(e) {
  let {
    detectedGame: t
  } = e;
  return 0 === t.publishers.length ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)(i.X6q, {
      className: a.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: l.intl.string(l.t["4Byy/P"])
    }), (0, n.jsx)(i.xvT, {
      variant: "text-sm/normal",
      children: t.publishers.join(", ")
    })]
  })
}