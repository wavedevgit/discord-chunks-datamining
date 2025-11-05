/** Chunk was on 89311 **/
/** chunk id: 131033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js");

function s(e) {
  let {
    detectedGame: t
  } = e;
  return 0 === t.publishers.length ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsx)(l.X6q, {
      className: a.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: r.intl.string(r.t["4Byy/G"])
    }), (0, i.jsx)(l.xvT, {
      variant: "text-sm/normal",
      children: t.publishers.join(", ")
    })]
  })
}