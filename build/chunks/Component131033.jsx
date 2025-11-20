/** Chunk was on 89311 **/
/** chunk id: 131033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js");

function s(e) {
  let {
    detectedGame: t
  } = e;
  return 0 === t.publishers.length ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.X6q, {
      className: l.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: r.intl.string(r.t["4Byy/G"])
    }), (0, a.jsx)(i.xvT, {
      variant: "text-sm/normal",
      children: t.publishers.join(", ")
    })]
  })
}