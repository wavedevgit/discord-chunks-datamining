/** Chunk was on 47793 **/
/** chunk id: 840367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk825354 = require("./825354.jsx"),
  Chunk635318 = require("./635318.js");

function s(e) {
  let {
    userId: t,
    headingId: n,
    widget: i,
    disableInteraction: l = false,
    title: o,
    subtitle: s,
    actionButtons: d = []
  } = e;
  return (0, r.jsxs)("div", {
    className: c.headerRow,
    children: [(0, r.jsxs)("div", {
      className: c.title,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: n,
        children: o
      }), null != s && (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: s
      })]
    }), (0, r.jsx)(u, {
      widget: i,
      actionButtons: d,
      disabledInteraction: l,
      userId: t
    })]
  })
}

function u(e) {
  let {
    widget: t,
    actionButtons: n,
    disabledInteraction: a,
    userId: s
  } = e, u = (0, i.e7)([l.default], () => l.default.getId());
  return a ? null : null != n && n.length > 0 ? (0, r.jsx)("div", {
    className: c.actions,
    children: n
  }) : u !== s ? (0, r.jsx)("div", {
    className: c.actions,
    children: (0, r.jsx)(o.Z, {
      widget: t,
      userId: s,
      className: c.menuButton
    })
  }) : null
}