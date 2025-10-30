/** Chunk was on 33551 **/
/** chunk id: 849493, original params: o,i,d (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => r
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk915312 = require("./915312.js");

function r() {
  return (0, Chunk915312.bN)(document.body), (0, Chunk951288.jsx)(Chunk481060.nn4, {
    children: (0, Chunk951288.jsx)("svg", {
      "aria-hidden": true,
      children: (0, Chunk951288.jsxs)("filter", {
        id: "violation-overlay",
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        children: [(0, Chunk951288.jsx)("feFlood", {
          floodColor: "#ff0000",
          floodOpacity: "0.3",
          result: "floodFill"
        }), (0, Chunk951288.jsx)("feBlend", {
          in: "SourceGraphic",
          in2: "floodFill",
          mode: "overlay"
        })]
      })
    })
  })
}
require("./632734.js")