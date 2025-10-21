/** Chunk was on 22325 **/
/** chunk id: 840367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk825354 = require("./825354.jsx"),
  Chunk635318 = require("./635318.js");

function c(e) {
  let {
    userId: t,
    headingId: n,
    widget: i,
    disableInteraction: l = false,
    title: o,
    subtitle: c,
    actionButtons: d = []
  } = e;
  return (0, r.jsxs)("div", {
    className: s.headerRow,
    children: [(0, r.jsxs)("div", {
      className: s.title,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: n,
        children: o
      }), null != c && (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: c
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
    userId: c
  } = e, u = (0, i.e7)([l.default], () => l.default.getId());
  return a ? null : null != n && n.length > 0 ? (0, r.jsx)("div", {
    className: s.actions,
    children: n
  }) : u !== c ? (0, r.jsx)("div", {
    className: s.actions,
    children: (0, r.jsx)(o.Z, {
      widget: t,
      userId: c,
      className: s.menuButton
    })
  }) : null
}