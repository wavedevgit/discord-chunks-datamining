/** Chunk was on 65599 **/
/** chunk id: 436102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk361158 = require("./361158.jsx"),
  Chunk80556 = require("./80556.js"),
  Chunk163679 = require("./163679.jsx"),
  Chunk524134 = require("./524134.jsx"),
  Chunk87404 = require("./87404.js"),
  Chunk815907 = require("./815907.js"),
  Chunk661251 = require("./661251.js");

function m() {
  return (0, a.jsx)(l.IpV, {
    className: u.nd,
    children: (0, a.jsxs)("div", {
      className: d.l$,
      children: [(0, a.jsxs)("section", {
        className: d.uW,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: "Verification Layer"
        }), (0, a.jsx)("div", {
          className: d.bd,
          children: (0, a.jsx)(l.Button, {
            variant: "primary",
            text: "Open Verification Layer",
            onClick: () => {
              (0, r.B8)(() => (0, a.jsx)(o.A, {}), {
                layerKey: c._s,
                Layer: i.Ay
              })
            }
          })
        })]
      }), (0, a.jsxs)("section", {
        className: d.uW,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: "Safety Flow"
        }), (0, a.jsx)("div", {
          className: d.bd,
          children: (0, a.jsx)(l.Button, {
            variant: "primary",
            text: "Open Safety Flow",
            onClick: () => {
              (0, r.B8)(e => {
                let {
                  closeLayer: t
                } = e;
                return (0, a.jsx)(s.A, {
                  onClose: t
                })
              }, {
                layerKey: c._s,
                Layer: i.Ay
              })
            }
          })
        })]
      }), (0, a.jsxs)("section", {
        className: d.uW,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: "Layer Controls"
        }), (0, a.jsx)("div", {
          className: d.bd,
          children: (0, a.jsx)(l.Button, {
            variant: "primary",
            text: "Close All Layers",
            onClick: () => {
              r.xr.setState({
                fullScreenLayers: []
              })
            }
          })
        })]
      })]
    })
  })
}