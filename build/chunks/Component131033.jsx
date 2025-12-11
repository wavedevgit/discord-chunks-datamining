/** Chunk was on 89311 **/
/** chunk id: 131033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk452379 = require("./452379.js");

function o(e) {
  let {
    detectedGame: t
  } = e;
  return 0 === t.publishers.length ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.X6q, {
      className: l.sectionHeader,
      variant: "text-xs/semibold",
      color: "text-default",
      children: r.intl.string(r.t["4Byy/G"])
    }), (0, a.jsx)(i.xvT, {
      variant: "text-sm/normal",
      children: t.publishers.join(", ")
    })]
  })
}