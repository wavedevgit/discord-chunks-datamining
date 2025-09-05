/** Chunk was on 1267 **/
/** chunk id: 840367, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk825354 = require("./825354.jsx"),
  Chunk359755 = require("./359755.js");

function a(e) {
  let {
    userId: t,
    headingId: r,
    widget: l,
    disableInteraction: a = false,
    title: s,
    subtitle: u,
    actionButtons: d = []
  } = e;
  return (0, n.jsxs)("div", {
    className: o.headerRow,
    children: [(0, n.jsxs)("div", {
      className: o.title,
      children: [(0, n.jsx)(i.X6q, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: r,
        children: s
      }), null != u && (0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: u
      })]
    }), (0, n.jsx)(c, {
      widget: l,
      actionButtons: d,
      disabledInteraction: a,
      userId: t
    })]
  })
}

function c(e) {
  let {
    widget: t,
    actionButtons: r,
    disabledInteraction: i,
    userId: a
  } = e;
  return i ? null : null != r && r.length > 0 ? (0, n.jsx)("div", {
    className: o.actions,
    children: r
  }) : (0, n.jsx)("div", {
    className: o.actions,
    children: (0, n.jsx)(l.Z, {
      widget: t,
      userId: a,
      className: o.menuButton
    })
  })
}