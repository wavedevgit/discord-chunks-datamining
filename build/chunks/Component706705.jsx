/** Chunk was on 30202 **/
/** chunk id: 706705, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933767 = require("./933767.js");

function l() {
  let [e, t] = Chunk647438.useState(false), [l, o] = Chunk647438.useState(20), [c, d] = Chunk647438.useState(80);
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 8,
      children: [(0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        onChange: () => exports(!module),
        children: "Enable Rive"
      }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
          children: "Number of animations"
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          initialValue: l,
          defaultValue: 20,
          onValueRender: e => "".concat(Math.round(e), " animations"),
          asValueChanges: e => o(Math.round(e)),
          minValue: 1,
          maxValue: 500,
          markers: [1, ...Array.from({
            length: 25
          }, (e, t) => (t + 1) * 20)],
          stickToMarkers: true
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
          children: "Animation size"
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          initialValue: c,
          defaultValue: 80,
          onValueRender: e => "".concat(Math.round(e), "px"),
          onValueChange: e => d(Math.round(e)),
          minValue: 10,
          maxValue: 300,
          markers: [10, 50, 100, 200, 300]
        })]
      })]
    }), (0, Chunk951288.jsx)("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        rowGap: "10px",
        columnGap: "10px",
        "--animation-size": "".concat(c, "px")
      },
      children: Array.from({
        length: l
      }).map((t, r) => e ? (0, i.jsx)(s.t7u, {
        eventTargetRef: {
          current: document.body
        },
        className: a.animationObj
      }, r) : (0, i.jsx)(s.Fmz, {
        importData: () => n.e("37372").then(n.t.bind(n, 459274, 19)),
        className: a.animationObj
      }, r))
    })]
  })
}