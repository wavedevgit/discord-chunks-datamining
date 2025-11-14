/** Chunk was on 99904 **/
/** chunk id: 544651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => o
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk547481 = require("./547481.js");

function o(e) {
  let {
    title: t,
    initExpanded: n,
    highlight: o,
    children: c
  } = e, [d, u] = l.useState(n), m = l.useCallback(() => {
    u(!d)
  }, [d]), p = o ? "status-warning" : "text-default";
  return null == c ? (0, a.jsx)("div", {
    className: s.settingNode,
    children: (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: p,
      children: t
    })
  }) : (0, a.jsxs)("div", {
    className: s.settingNode,
    children: [(0, a.jsxs)(r.P3F, {
      className: s.headerBar,
      onClick: m,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/bold",
        color: p,
        children: t
      }), (0, a.jsx)(i.Z, {
        direction: d ? i.Z.Directions.DOWN : i.Z.Directions.RIGHT,
        className: s.headerCaret
      })]
    }), d && (0, a.jsx)("div", {
      className: s.settingNodeChildren,
      children: c
    })]
  })
}