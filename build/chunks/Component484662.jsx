/** Chunk was on 84249 **/
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
  return (0, a.jsx)(r.zJl, {
    className: u.panel,
    children: (0, a.jsxs)("div", {
      className: d.panelInner,
      children: [(0, a.jsxs)("section", {
        className: d.section,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          children: "Verification Layer"
        }), (0, a.jsx)("div", {
          className: d.inputRow,
          children: (0, a.jsx)(r.Button, {
            variant: "primary",
            text: "Open Verification Layer",
            onClick: () => {
              (0, i.q4)(() => (0, a.jsx)(o.Z, {}), {
                layerKey: c.CV,
                Layer: l.ZP
              })
            }
          })
        })]
      }), (0, a.jsxs)("section", {
        className: d.section,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          children: "Safety Flow"
        }), (0, a.jsx)("div", {
          className: d.inputRow,
          children: (0, a.jsx)(r.Button, {
            variant: "primary",
            text: "Open Safety Flow",
            onClick: () => {
              (0, i.q4)(e => {
                let {
                  closeLayer: t
                } = e;
                return (0, a.jsx)(s.Z, {
                  onClose: t
                })
              }, {
                layerKey: c.CV,
                Layer: l.ZP
              })
            }
          })
        })]
      }), (0, a.jsxs)("section", {
        className: d.section,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          children: "Layer Controls"
        }), (0, a.jsx)("div", {
          className: d.inputRow,
          children: (0, a.jsx)(r.Button, {
            variant: "primary",
            text: "Close All Layers",
            onClick: () => {
              i.QP.setState({
                fullScreenLayers: []
              })
            }
          })
        })]
      })]
    })
  })
}