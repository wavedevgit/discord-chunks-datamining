/** Chunk was on 65347 **/
/** chunk id: 544651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => o
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk808396 = require("./808396.js");

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