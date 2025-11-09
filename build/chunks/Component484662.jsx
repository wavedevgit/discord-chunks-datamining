/** Chunk was on 22740 **/
/** chunk id: 484662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk84615 = require("./84615.jsx"),
  Chunk429142 = require("./429142.js"),
  Chunk918714 = require("./918714.jsx"),
  Chunk852758 = require("./852758.jsx"),
  Chunk308569 = require("./308569.js"),
  Chunk596533 = require("./596533.js"),
  Chunk866403 = require("./866403.js");

function m() {
  return (0, Chunk951288.jsx)(Chunk481060.zJl, {
    className: Chunk866403.panel,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk596533.panelInner,
      children: [(0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Verification Layer"
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk596533.inputRow,
          children: (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Open Verification Layer",
            onClick: () => {
              (0, Chunk84615.q4)(() => (0, Chunk951288.jsx)(Chunk852758.Z, {}), {
                layerKey: Chunk308569.CV,
                Layer: Chunk429142.ZP
              })
            }
          })
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Safety Flow"
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk596533.inputRow,
          children: (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Open Safety Flow",
            onClick: () => {
              (0, Chunk84615.q4)(e => {
                let {
                  closeLayer: t
                } = e;
                return (0, a.jsx)(s.Z, {
                  onClose: t
                })
              }, {
                layerKey: Chunk308569.CV,
                Layer: Chunk429142.ZP
              })
            }
          })
        })]
      }), (0, Chunk951288.jsxs)("section", {
        className: Chunk596533.section,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Layer Controls"
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk596533.inputRow,
          children: (0, Chunk951288.jsx)(Chunk481060.Button, {
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