/** Chunk was on 74449 **/
/** chunk id: 840367, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk86419 = require("./86419.js"),
  Chunk825354 = require("./825354.jsx"),
  Chunk635318 = require("./635318.js");

function c(e) {
  let {
    userId: t,
    headingId: r,
    widget: l,
    disableInteraction: o = false,
    title: c,
    subtitle: u,
    actionButtons: d = []
  } = e;
  return (0, n.jsxs)("div", {
    className: a.headerRow,
    children: [(0, n.jsxs)("div", {
      className: a.title,
      children: [(0, n.jsx)(i.X6q, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: r,
        children: c
      }), null != u && (0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: u
      })]
    }), (0, n.jsx)(s, {
      widget: l,
      actionButtons: d,
      disabledInteraction: o,
      userId: t
    })]
  })
}

function s(e) {
  let {
    widget: t,
    actionButtons: r,
    disabledInteraction: i,
    userId: c
  } = e, s = (0, l.vI)(t.type) && t.games.some(e => null != e.comment);
  return i ? null : null != r && r.length > 0 ? (0, n.jsx)("div", {
    className: a.actions,
    children: r
  }) : s ? (0, n.jsx)("div", {
    className: a.actions,
    children: (0, n.jsx)(o.Z, {
      widget: t,
      userId: c,
      className: a.menuButton
    })
  }) : null
}