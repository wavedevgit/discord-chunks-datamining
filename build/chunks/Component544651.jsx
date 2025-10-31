/** Chunk was on 30372 **/
/** chunk id: 544651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk547481 = require("./547481.js");

function s(e) {
  let {
    title: t,
    initExpanded: n,
    highlight: s,
    children: c
  } = e, [d, u] = r.useState(n), m = r.useCallback(() => {
    u(!d)
  }, [d]), p = s ? "status-warning" : "text-default";
  return null == c ? (0, a.jsx)("div", {
    className: o.settingNode,
    children: (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: p,
      children: t
    })
  }) : (0, a.jsxs)("div", {
    className: o.settingNode,
    children: [(0, a.jsxs)(l.P3F, {
      className: o.headerBar,
      onClick: m,
      children: [(0, a.jsx)(l.Text, {
        variant: "text-md/bold",
        color: p,
        children: t
      }), (0, a.jsx)(i.Z, {
        direction: d ? i.Z.Directions.DOWN : i.Z.Directions.RIGHT,
        className: o.headerCaret
      })]
    }), d && (0, a.jsx)("div", {
      className: o.settingNodeChildren,
      children: c
    })]
  })
}