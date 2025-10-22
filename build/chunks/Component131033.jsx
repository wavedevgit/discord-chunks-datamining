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
  return 0 === t.publishers.length ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(i.X6q, {
      className: a.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: l.intl.string(l.t["4Byy/G"])
    }), (0, r.jsx)(i.xvT, {
      variant: "text-sm/normal",
      children: t.publishers.join(", ")
    })]
  })
}