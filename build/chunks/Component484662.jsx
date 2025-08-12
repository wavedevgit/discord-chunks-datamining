/** Chunk was on 93886 **/
/** chunk id: 484662, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk84615 = require("./84615.jsx"),
  Chunk429142 = require("./429142.js"),
  Chunk918714 = require("./918714.jsx"),
  Chunk852758 = require("./852758.jsx"),
  Chunk308569 = require("./308569.js"),
  Chunk743549 = require("./743549.js"),
  Chunk881291 = require("./881291.js");

function m() {
  return (0, Chunk255367.jsx)(Chunk481060.zJl, {
    className: Chunk881291.panel,
    children: (0, Chunk255367.jsxs)("div", {
      className: Chunk743549.panelInner,
      children: [(0, Chunk255367.jsxs)("section", {
        className: Chunk743549.section,
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Verification Layer"
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk743549.inputRow,
          children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Open Verification Layer",
            onClick: () => {
              (0, Chunk84615.q4)(() => (0, Chunk255367.jsx)(Chunk852758.Z, {}), {
                layerKey: Chunk308569.CV,
                Layer: Chunk429142.ZP
              })
            }
          })
        })]
      }), (0, Chunk255367.jsxs)("section", {
        className: Chunk743549.section,
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Safety Flow"
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk743549.inputRow,
          children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Open Safety Flow",
            onClick: () => {
              (0, Chunk84615.q4)(() => (0, Chunk255367.jsx)(Chunk918714.Z, {}), {
                layerKey: Chunk308569.CV,
                Layer: Chunk429142.ZP
              })
            }
          })
        })]
      }), (0, Chunk255367.jsxs)("section", {
        className: Chunk743549.section,
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          variant: "heading-md/semibold",
          children: "Layer Controls"
        }), (0, Chunk255367.jsx)("div", {
          className: Chunk743549.inputRow,
          children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Close All Layers",
            onClick: () => {
              Chunk84615.QP.setState({
                fullScreenLayers: []
              })
            }
          })
        })]
      })]
    })
  })
}