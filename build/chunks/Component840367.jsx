/** Chunk was on 46592 **/
/** chunk id: 840367, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk825354 = require("./825354.jsx"),
  Chunk359755 = require("./359755.js");

function s(e) {
  let {
    userId: t,
    headingId: r,
    widget: i,
    disableInteraction: a = false,
    title: l,
    subtitle: s,
    actionButtons: d = []
  } = e;
  return (0, n.jsxs)("div", {
    className: c.headerRow,
    children: [(0, n.jsxs)("div", {
      className: c.title,
      children: [(0, n.jsx)(o.X6q, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: r,
        children: l
      }), null != s && (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: s
      })]
    }), (0, n.jsx)(u, {
      widget: i,
      actionButtons: d,
      disabledInteraction: a,
      userId: t
    })]
  })
}

function u(e) {
  let {
    widget: t,
    actionButtons: r,
    disabledInteraction: o,
    userId: s
  } = e, u = (0, i.e7)([a.default], () => a.default.getId());
  return o ? null : null != r && r.length > 0 ? (0, n.jsx)("div", {
    className: c.actions,
    children: r
  }) : u !== s ? (0, n.jsx)("div", {
    className: c.actions,
    children: (0, n.jsx)(l.Z, {
      widget: t,
      userId: s,
      className: c.menuButton
    })
  }) : null
}