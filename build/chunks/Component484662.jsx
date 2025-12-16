/** Chunk was on 6043 **/
/** chunk id: 484662, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk84615 = require("./84615.jsx"),
  Chunk429142 = require("./429142.js"),
  Chunk918714 = require("./918714.jsx"),
  Chunk852758 = require("./852758.jsx"),
  Chunk308569 = require("./308569.js"),
  Chunk68428 = require("./68428.js"),
  Chunk663618 = require("./663618.js");

function m() {
  return (0, Chunk54381.jsx)(Chunk481060.zJl, {
    className: Chunk663618.panel,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk68428.panelInner,
      children: [(0, Chunk54381.jsxs)("section", {
        className: Chunk68428.section,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Verification Layer"
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk68428.inputRow,
          children: (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: "Open Verification Layer",
            onClick: () => {
              (0, Chunk84615.q4)(() => (0, Chunk54381.jsx)(Chunk852758.Z, {}), {
                layerKey: Chunk308569.CV,
                Layer: Chunk429142.ZP
              })
            }
          })
        })]
      }), (0, Chunk54381.jsxs)("section", {
        className: Chunk68428.section,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Safety Flow"
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk68428.inputRow,
          children: (0, Chunk54381.jsx)(Chunk481060.Button, {
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
      }), (0, Chunk54381.jsxs)("section", {
        className: Chunk68428.section,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          children: "Layer Controls"
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk68428.inputRow,
          children: (0, Chunk54381.jsx)(Chunk481060.Button, {
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